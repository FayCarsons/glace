(ns clouds.shaders
  (:require [sprog.util :as u]
            [clouds.config :as c]
            [clouds.chunks :refer [worley-chunk
                                   raymarch-chunk
                                   AABB-intersection
                                   plane-intersection]]
            [clouds.scenes :as i]
            [clouds.materials :as mat]
            [clojure.walk :refer [postwalk-replace]]
            [sprog.iglu.core :refer [iglu->glsl
                                     combine-chunks]]
            [sprog.iglu.chunks.noise :refer [rand-normal-chunk
                                             simplex-3d-chunk
                                             pcg-hash-chunk
                                             fbm-chunk]]
            [sprog.iglu.chunks.raytracing :refer [sphere-intersection-chunk
                                                  plane-intersection-chunk
                                                  box-intersection-chunk]]
            [sprog.iglu.chunks.sdf :refer [sphere-sdf-chunk
                                           box-frame-sdf-chunk
                                           box-sdf-chunk
                                           twistX-chunk
                                           twistY-chunk
                                           smooth-union-chunk
                                           smooth-intersectioon-chunk
                                           smooth-subtraction-chunk]]
            [sprog.iglu.chunks.transformations :refer [x-rotation-matrix-chunk
                                                       y-rotation-matrix-chunk
                                                       axis-rotation-chunk]]
            [sprog.iglu.chunks.color :refer [hsv-to-rgb-chunk]]
            [sprog.iglu.chunks.postprocessing :refer [square-neighborhood
                                                      star-neighborhood
                                                      plus-neighborhood
                                                      get-bloom-chunk]]
            [sprog.iglu.chunks.misc :refer [bilinear-usampler-chunk
                                            pos-chunk
                                            gradient-chunk]]
            #_[fxrng.rng :refer [fxrand
                               fxrand-int]]))

(def u32-max c/u32-max)
(def u32-max-u "0xFFFFFFFFu")

(def header 
  (partial iglu->glsl
           '{:version "300 es"
             :precision {float highp
                         int highp
                         usampler2D highp
                         sampler2D highp}}))

(def render-frag
 (u/unquotable
   (header
    pos-chunk
    bilinear-usampler-chunk
    (get-bloom-chunk :u32 (star-neighborhood 2) 0.333)
    '{:outputs {fragColor vec4}
      :uniforms {size vec2
                 final usampler2D
                 skybox usampler2D
                 debug usampler2D}
      :functions {aces-tonemap
                  {([vec3] vec3)
                   ([rgb]
                    (clamp (/ (* rgb (+ 0.03 (* 2.51 rgb)))
                              (+ 0.14 (* rgb (+ 0.59 (* 2.43 rgb)))))
                           0
                           1))}
                  gamma-correction
                  {([vec3] vec3)
                   ([rgb]
                    (pow rgb (vec3 (/ 1 2.2))))}
                  pixel-color
                  {([vec2] vec3)
                   ([coords]
                    (-> final
                        (bloom coords 0 0.1)
                        .rgb
                        vec3
                        
                        (* ~c/max-brightness)
                        aces-tonemap))}}
      :main ((=vec2 pos (/ gl_FragCoord.xy size))

             (=vec3 color (gamma-correction (pixel-color pos)))
             (= fragColor (vec4 (gamma-correction (aces-tonemap color))
                                1))

             (= fragColor
                ~(if c/debug?
                   '(-> (texelFetch debug (ivec2 gl_FragCoord.xy) "0")
                        .xyz
                        vec3
                        (/ ~u32-max)
                        (vec4 1))
                   'fragColor)))})))



(def trace-frag
  (u/unquotable
   (header
    pos-chunk
    bilinear-usampler-chunk
    gradient-chunk

    sphere-intersection-chunk
    plane-intersection
    box-intersection-chunk

    AABB-intersection
    #_i/dof-test
    c/bvh-traversal-chunk

    sphere-sdf-chunk
    box-frame-sdf-chunk
    box-sdf-chunk
    rand-normal-chunk
    axis-rotation-chunk
    twistX-chunk
    twistY-chunk
    smooth-subtraction-chunk
    smooth-union-chunk
    smooth-intersectioon-chunk



    simplex-3d-chunk
    hsv-to-rgb-chunk
    pcg-hash-chunk
    '{:constants ~mat/materials-map
      :defines {(fudge x) (* x
                             ~c/fudge-factor)}
      :outputs {Color uvec4
                Position uvec4
                Direction uvec4
                Accumulated uvec4
                Attenuation uvec4
                Meta uvec4
                Debug uvec4}
      :layout {Color 0
               Position 1
               Direction 2
               Accumulated 3
               Attenuation 4
               Meta 5
               Debug 6}
      :uniforms {size vec2
                 camera mat3
                 rand-offset vec3
                 ray-pos-tex usampler2D
                 ray-dir-tex usampler2D
                 color-tex usampler2D
                 accumulation-tex usampler2D
                 attenuation-tex usampler2D
                 ray-meta-tex usampler2D
                 skybox usampler2D
                 frame float
                 sphere-array [vec4 ~(str c/num-packed-spheres)]}
      :structs {Ray
                [pos vec3
                 dir vec3
                 color vec3
                 attenuation vec3]
                Sphere
                [pos vec3
                 radius float
                 material Material]
                Plane
                [normal vec3
                 depth float
                 material Material]
                Material
                [type int
                 albedo vec3
                 specular vec3
                 emissive vec3
                 roughness float
                 ior float]
                Record
                [hit bool
                 distance float
                 point vec3
                 normal vec3
                 material Material]}
      :functions
      {random-point-in-circle
       {([] vec2)
        ([]
         (=vec2 random (.xy (rand-pcg (+ (* gl_FragCoord.xyz
                                            ~c/rand-scale)
                                         rand-offset))))
         (=float angle (* (.x random)
                          ~u/TAU))
         (=float radius (sqrt random.y))
         (* radius (vec2 (cos angle)
                         (sin angle))))}
       random-point-in-star
       {([float] vec2)
        ([sides]
         (=vec3 random (rand-pcg (+ (* gl_FragCoord.xyz
                                       ~c/rand-scale)
                                    rand-offset)))
         (=float n (/ (floor (* random.x sides)) sides))
         (=float angle-one (* n ~u/TAU))
         (=float angle-two (+ angle-one
                              (/ ~u/TAU sides)))
         (=vec2 s1 (vec2 (cos angle-one) (sin angle-one)))
         (=vec2 s2 (vec2 (cos angle-two) (sin angle-two)))
         (+ (* random.y s1)
            (* random.z s2)))}
       hemisphere-uniform
       {([vec3] vec4)
        ([normal]
         (=vec3 rand-vec (rand-pcg (+ rand-offset
                                      normal
                                      gl_FragCoord.xyz)))
         (=float cos-theta rand-vec.x)
         (=float sin-theta (sqrt (- 1 (* cos-theta cos-theta))))

         (=float phi (* 2
                        ~Math/PI
                        rand-vec.y))
         ;"spherical to cartesian"
         (=vec3 t (normalize (cross normal.yzx normal)))
         (=vec3 b (cross normal t))
         (vec4 (+ (* sin-theta
                     (+ (* t
                           (cos phi))
                        (* b
                           (sin phi))))
                  (* normal
                     cos-theta))
               1))}

       hemisphere-cosine
       {([vec3] vec4)
        ([normal]
         (=vec3 rand-vec (rand-pcg (+ rand-offset
                                      normal
                                      gl_FragCoord.xyz)))
         (=float cos-theta rand-vec.x)
         (=float sin-theta (sqrt (- 1 (* cos-theta cos-theta))))

         (=float phi (* 2
                        ~Math/PI
                        rand-vec.y))
         ;"spherical to cartesian"
         (=vec3 t (normalize (cross normal.yzx normal)))
         (=vec3 b (cross normal t))

         (=vec3 l (+ (* sin-theta
                        (+ (* t
                              (cos phi))
                           (* b
                              (sin phi))))
                     (* normal
                        cos-theta)))
         (=float pdf (* ~(/ Math/PI)
                        cos-theta))
         (vec4 l (/ ~(/ 0.5 Math/PI)
                    (+ pdf 1e-6))))}

       hemisphere-ggx
       {([vec3 vec3 float] vec4)
        ([normal v roughness]
         (=float temp (* roughness roughness))
         (=float alpha (* temp temp))

         (=vec3 rand-vec (rand-pcg (+ rand-offset
                                      normal
                                      gl_FragCoord.xyz)))

         (=float epsilon (clamp rand-vec.x 0.001 1))
         (=float cos-theta2 (/ (- 1 epsilon)
                               (+ (* epsilon (- alpha 1))
                                  1)))
         (=float cos-theta (sqrt cos-theta2))
         (=float sin-theta (sqrt (- 1 cos-theta2)))

         (=float phi (* 2
                        ~Math/PI
                        rand-vec.y))

         ;"spherical to cartesian"
         (=vec3 t (normalize (cross normal.yzx normal)))
         (=vec3 b (cross normal t))

         (=vec3 micro-normal
                (+ (* t
                      (cos phi))
                   (* b
                      (sin phi)
                      sin-theta)
                   (* normal cos-theta)))
         (=vec3 l (reflect "-v" micro-normal))

         ;"sample weight"
         (=float den (* (- alpha 1)
                        (+ cos-theta2 1)))
         (=float d (/ alpha
                      (* ~Math/PI
                         den
                         den)))
         (=float pdf (/ (* d cos-theta)
                        (* 4
                           (dot micro-normal
                                v))))

         (=float weight (if (< (dot l normal) 0)
                          0
                          (/ ~(/ 0.5 Math/PI)
                             (+ pdf 1e-6))))

         (vec4 l weight))}

       ggx
       {([vec3 vec3 vec3 float vec3] vec3)
        ([normal dir reflected roughness specular]
         (=float temp (* roughness roughness))
         (=float alpha (* temp temp))

         (=float dot-normal (clamp (dot normal reflected) 0 1))
         (=float dot-dir (clamp (dot normal dir) 0 1))

         (=vec3 h (normalize (+ dir reflected)))

         (=float dot-normal-h (clamp (dot normal h) 0 1))
         (=float dot-reflected-h (clamp (dot reflected h) 0 1))

         ;GGX microfacet distribution function
         (=float den (+ (* (- alpha 1)
                           dot-normal-h
                           dot-normal-h)
                        1))
         (=float density (/ alpha (* ~Math/PI
                                     den
                                     den)))

         ;fresnel with schlick approximation
         (=vec3 fresnel (+ specular
                           (* (- 1 specular)
                              (pow (- 1 dot-reflected-h) 5))))

         ;Smith joint masking-shadowing fn 
         (=float k (* 0.5 alpha))
         (=float g (/ (* (+ k
                            (* dot-normal
                               (- 1 k)))
                         (+ k
                            (* dot-dir
                               (- 1 k))))))
         (* density fresnel g))}

       ray-at
       {([Ray float] vec3)
        ([ray distance]
         (+ ray.pos (* ray.dir
                       distance)))}

       reflect-ray
       {([Ray Record] Ray)
        ([ray record]
         (=vec3 attenuation ray.attenuation)
         (=float cos-theta-i (dot ray.dir record.normal))
         (=vec3 facing-normal (if (< cos-theta-i 0)
                                record.normal
                                (- record.normal)))
         (=vec3 collected-color (+ ray.color
                                   (* ray.attenuation
                                      record.material.emissive)))

         (=vec3 outgoing-dir (vec3 0))

         ("if" (== record.material.type
                   :lambertian)
               (=vec4 dir-sample (hemisphere-cosine
                                  facing-normal))
               (= outgoing-dir dir-sample.xyz)
               (*= attenuation dir-sample.w)
               (*= attenuation (* record.material.albedo
                                  (dot facing-normal
                                       outgoing-dir))))
         ("else if" (== record.material.type :blinn-phong)
                    (=vec4 dir-sample (hemisphere-cosine
                                       facing-normal))
                    (= outgoing-dir dir-sample.xyz)
                    (=vec3 h (normalize (+ (- ray.dir)
                                           outgoing-dir)))
                    (*= attenuation dir-sample.w)
                    (*= attenuation (+ (* record.material.albedo
                                          (dot facing-normal
                                               outgoing-dir))

                                       (* record.material.specular
                                          (pow (max (dot facing-normal
                                                         h)
                                                    0)
                                               record.material.roughness)))))
         ("else if" (== record.material.type
                        :specular)
                    (= outgoing-dir (reflect ray.dir facing-normal))
                    (*= attenuation record.material.specular))
         ("else if" (== record.material.type
                        :dielectric)
                    (=float eta (if (< cos-theta-i 0)
                                  (/ record.material.ior)
                                  record.material.ior))
                    (=vec3 refracted (refract ray.dir facing-normal eta))

                    ("if" (all (equal refracted (vec3 0)))
                          (= outgoing-dir (reflect ray.dir facing-normal)))
                    ("else"
                     ;fresnel with schlick approximation
                     (=float temp (/ (- record.material.ior 1)
                                     (+ 1 record.material.ior)))
                     (=float pre-fres (* temp temp))
                     (=float cos-theta (if (< cos-theta-i 0)
                                         (- cos-theta-i)
                                         (dot refracted record.normal)))
                     (=float fresnel (+ pre-fres (* (- 1 pre-fres)
                                                    (pow (- 1 cos-theta)
                                                         5))))

                     ("if" (< (.x (rand-pcg (+ rand-offset
                                               gl_FragCoord.xyz
                                               (* ray.pos
                                                  ~c/rand-scale))))
                              fresnel)
                           (= outgoing-dir (reflect ray.dir facing-normal)))
                     ("else"
                      (*= attenuation record.material.albedo)
                      (= outgoing-dir refracted))))
         ("else if" (== record.material.type :lommel)
                    (*= attenuation record.material.albedo)
                    (= outgoing-dir (-> facing-normal
                                        hemisphere-uniform
                                        .xyz)))
         ("else if" (== record.material.type
                        :ggx)
                    (=vec4 dir-sample (vec4 1))
                    ("if" (&& (> (length record.material.albedo)
                                 0.04)
                              (< (.x (rand-pcg (+ rand-offset
                                                  gl_FragCoord.xyz
                                                  (* ray.pos
                                                     ~c/rand-scale))))
                                 0.5))
                          (= dir-sample (hemisphere-cosine facing-normal))
                          (= outgoing-dir dir-sample.xyz)
                          (*= attenuation dir-sample.w)
                          (*= attenuation (* record.material.albedo
                                             (dot facing-normal
                                                  outgoing-dir))))
                    ("else"
                     (= dir-sample (hemisphere-ggx facing-normal
                                                   (- ray.dir)
                                                   record.material.roughness))
                     (= outgoing-dir dir-sample.xyz)
                     (*= attenuation dir-sample.w)
                     (*= attenuation (* (dot facing-normal
                                             outgoing-dir)
                                        (ggx facing-normal
                                             (- ray.dir)
                                             outgoing-dir
                                             record.material.roughness
                                             record.material.specular)))))
         (Ray (+ record.point
                 (fudge outgoing-dir))
              outgoing-dir
              (+ ray.color
                 collected-color)
              attenuation))}
       exit-color
       {([Ray] vec3)
        ([ray]
         (+ ~(if c/skybox?
               '(-> skybox
                    (textureBilinear (bi->uni ray.dir.xy))
                    .rgb
                    vec3
                    (/ ~u32-max))
               '0)
            (* (smoothstep -2
                           1
                           (dot ray.dir
                                (vec3 0)))
               ~(if c/gold-light?
                  '(* ~c/ambient-light-factor
                      ~c/sky-gold)
                  '(vec3 ~c/ambient-light-factor)))
            ~c/sun-expression))}}
      :main ((= Debug (uvec4 0 0 0 0))
             (=vec2 pos (+ (getPos)
                           (* 0.05
                              (/ size))))
             (=ivec2 frag-pos (ivec2 gl_FragCoord.xy))

             (=uvec4 meta-color
                     (texelFetch ray-meta-tex frag-pos "0"))
             (=int step (int meta-color.x))
             (=int accumulation-index (int meta-color.y))

             (=bool ray-finished false)

             (=vec3 old-accumulated (-> accumulation-tex
                                        (texelFetch frag-pos "0")
                                        .xyz
                                        vec3
                                        (/ ~u32-max)))

             (=vec2 lense (random-point-in-star 5))
             (*= lense (* ~c/depth-of-field-strength
                          ~c/depth-of-field-distance))
             (=vec2 bi-pos (-> pos
                               uni->bi
                               (- (/ lense
                                     ~c/depth-of-field-distance))))

             (=vec3 current-direction (if ~(if c/debug? true '(== step "0"))
                                        (normalize (* (inverse camera)
                                                      (vec3 bi-pos
                                                            ~c/field-of-view)))
                                        (-> ray-dir-tex
                                            (texelFetch frag-pos "0")
                                            .xyz
                                            vec3
                                            (/ ~u32-max)
                                            uni->bi)))

             (=Ray ray
                   (Ray (if ~(if c/debug? true '(== step "0"))
                          ~(cons 'vec3 c/cam-pos)
                          (-> ray-pos-tex
                              (texelFetch frag-pos "0")
                              .xyz
                              vec3
                              (/ ~u32-max)
                              uni->bi))
                        current-direction
                        (if (== step "0")
                          (vec3 0)
                          (-> color-tex
                              (texelFetch frag-pos "0")
                              .xyz
                              vec3
                              (/ ~u32-max)))
                        (if (== step "0")
                          (vec3 1)
                          (-> attenuation-tex
                              (texelFetch frag-pos "0")
                              .xyz
                              vec3
                              (/ ~u32-max)))))
             (~(str "for(int s=0;s<" c/bounce-loop-limit ";s++)")
              (=Record record (hit-world ray))

              ("if" record.hit

                    (= ray (reflect-ray ray record))
                    (+= step "1")
                    ("if" (> step ~(str c/max-steps))
                          (= ray-finished true)
                          (= ray.color (vec3 0))
                          "break"))

              ("else"
               (+= ray.color
                   (* ray.attenuation (exit-color ray)))
               (= ray-finished true)
               "break"))

             (= Color (uvec4 (uvec3 (* ray.color
                                       ~u32-max))
                             ~u32-max-u))
             (= Position (uvec4 (uvec3 (* (-> ray.pos
                                              bi->uni)
                                          ~u32-max))
                                ~u32-max-u))
             (= Direction (uvec4 (uvec3 (* (-> ray.dir
                                               bi->uni)
                                           ~u32-max))
                                 ~u32-max-u))
             (= Accumulated (uvec4
                             (uvec3
                              (* (if ray-finished
                                   (clamp
                                    (mix old-accumulated
                                         (/ ray.color
                                            ~c/max-brightness)
                                         (/ 1 (+ 1
                                                 (float accumulation-index))))
                                    0 1)
                                   old-accumulated)
                                 ~u32-max))
                             ~u32-max-u))
             (= Attenuation (uvec4 (* ray.attenuation
                                      ~u32-max)
                                   ~u32-max-u))
             (= Meta (uvec4 (if ray-finished
                              "0"
                              step)
                            (if ray-finished
                              (+ accumulation-index "1")
                              accumulation-index)
                            0
                            0)))})))

(def worley-frag
  (u/unquotable
   (header
    worley-chunk
    fbm-chunk
    pcg-hash-chunk
    simplex-3d-chunk
    '{:outputs {fragColor uvec4}
      :uniforms {size vec2
                 frame float}
      :main ((=vec2 pos (/ gl_FragCoord.xy size))
             (=float worley-fbm (fbm worley-noise
                                     3
                                     (vec3 (+ (* pos
                                                 ~c/cloud-freq)
                                              (* 0.025
                                                 (snoise3D (vec3 (* pos 20)
                                                                 ~(rand 1000)))))
                                           ~(rand 1000))
                                     "5"
                                     0.75))
             (= fragColor (uvec4 (* (mix (vec3 0.129 0.3078 0.9213)
                                         (vec3 1)
                                         (-> (- 1 worley-fbm)
                                             (- 0.3)
                                             (/ 0.7)
                                             (max 0)))
                                    ~u32-max)
                                 (uvec3 "0u"))))})))

(u/log trace-frag)