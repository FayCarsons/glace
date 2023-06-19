(ns clouds.shaders
  (:require [sprog.util :as u]
            [clouds.config :as c]
            [clojure.walk :refer [postwalk-replace]]
            [sprog.iglu.core :refer [iglu->glsl
                                     combine-chunks]]
            [sprog.iglu.chunks.noise :refer [
                                
                                             simplex-3d-chunk
                                             pcg-hash-chunk
                                             fbm-chunk]]
            [sprog.iglu.chunks.raytracing :refer [sphere-intersection-chunk
                                                  plane-intersection-chunk
                                                  box-intersection-chunk
                                                  raymarch-chunk]]
            [sprog.iglu.chunks.sdf :refer [sphere-sdf-chunk
                                           box-frame-sdf-chunk
                                           box-sdf-chunk]]
            [sprog.iglu.chunks.transformations :refer [x-rotation-matrix-chunk
                                                       y-rotation-matrix-chunk
                                                       axis-rotation-chunk]]
            [sprog.iglu.chunks.color :refer [hsv-to-rgb-chunk]]
            [sprog.iglu.chunks.misc :refer [bilinear-usampler-chunk
                                            pos-chunk
                                            gradient-chunk]]
            #_[fxrng.rng :refer [fxrand
                               fxrand-int]]))

(def u32-max (Math/floor c/u32-max))
(def u32-max-u (str u32-max "u"))

(def header 
  (partial iglu->glsl
           '{:version "300 es"
             :precision {float highp
                         int highp
                         usampler2D highp
                         sampler2D highp}}))

#_(def worley-offsets
  (doall
   (for [x (range -1 2)
         y (range -1 2)
         z (range -1 2)]
     (vector x y z))))

#_(def worley-unroll-expression
  (u/unquotable
   (cons 'do
         (map (fn [offset]
                (let [coord (cons 'vec3 offset)]
                  (cons 'do
                        (list '(= h (rand-pcg (+ id ~coord)))
                              '(+= h ~coord)
                              '(= d (- p h))
                              '(= min-dist (min min-dist (dot d d)))))))
              worley-offsets))))

(def worley-chunk
  (u/unquotable
   '{:functions
     {worley-noise
      {([vec3] float)
       ([pos]
        (=vec3 id (floor pos))
        (=vec3 p (fract pos))

        (=float min-dist 10000)

        (=vec3 h (vec3 0))
        (=vec3 d (vec3 0))
        #_~worley-unroll-expression

        ("for (float x = min(-1.0,(frame - 1.0)); x <= 1.0; ++x)"
         ("for (float y = min(-1.0,(frame - 1.0)); y <= 1.0; ++y)"
          ("for (float z = min(-1.0,frame - 1.0); z <= 1.0; ++z)"
           (=vec3 offset (vec3 x y z))
           (=vec3 h (rand-pcg (+ id offset)))
           (+= h offset)
           (=vec3 d (- p h))
           (= min-dist (min min-dist (dot d d))))))

        min-dist)}}}))

(def render-frag
 (u/unquotable
   (header
    pos-chunk
    bilinear-usampler-chunk
    '{:outputs {fragColor vec4}
      :uniforms {size vec2
                 final usampler2D
                 skybox usampler2D}
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
                    ~(case c/debug?
                       :skybox '(-> skybox
                                    (textureBilinear coords)
                                    .rgb
                                    vec3
                                    (/ ~u32-max)
                                    aces-tonemap
                                    gamma-correction)
                       '(-> final
                            (textureBilinear coords)
                            .rgb
                            vec3
                            (/ ~u32-max)
                            (* ~c/max-brightness)
                            aces-tonemap
                            gamma-correction)))}}
      :main ((= fragColor (vec4 (pixel-color (/ gl_FragCoord.xy
                                                size))
                                1)))})))

#_(def raymarch-test-chunk 
  (u/unquotable
   '{:functions
     {sdf
      {([vec3] float)
       ([pos]
        (=float sfbm 1024)
        (=float base-period 3)
        (=vec3 base-pos (- (mod (+ pos
                                   (* 0.5
                                      base-period))
                                base-period)
                           (* 0.5 base-period)))
        
        (~(str "for (int i = 0; i <" c/sphere-octaves "; ++i)")
         (=vec3 rot-pos (* pos
                           (axisRotationMatrix (normalize "sphere_axes[i]")
                                               "sphere_angles[i]")))
         (=float scale (pow ~c/sphere-fbm-falloff
                            (float i)))
         (=float period (* 0.5
                           scale))
         (=vec3 q (- (mod (+ rot-pos
                             (* 0.5
                                period))
                          period)
                     (* 0.5 period)))

         (=float spheres (sdSphere q (vec3 0)
                                   (* ~c/sphere-layer-scale-factor
                                      scale)))
         (= sfbm (min sfbm
                      spheres)))

        (=float base (sdBox pos 
                            (vec3 0) 
                            (vec3 ~c/menger-size)))

        (max (- 0 sfbm)
             base))}
      hit-world
      {([Ray] Record)
       ([ray]
        (=Record record (Record false
                                1024
                                (vec3 0)
                                (vec3 0)
                                ~c/diffuse-material))
        (=float distance 1024)
        (=BoxIntersection bound (findBoxIntersection ray
                                                      (vec3 0)
                                                      (vec3 ~(+ c/menger-size 0.01))))

        ("if" bound.hit
         (=Ray bound-ray (Ray (ray-at ray bound.frontDist) ray.dir))
         (= distance (raymarch sdf
                               bound-ray
                               (- bound.backDist
                                  bound.frontDist)
                               {:max-steps 40
                                :step-size 1}))
         ("if" (> distance 0)
               (= record.hit true)
               (= record.distance (+ distance
                                     ~c/fudge-factor))
               (= record.point (ray-at bound-ray record.distance))
               (= record.normal (normalize
                                 (findGradient 3
                                               sdf
                                               0.001
                                               record.point)))
               (= record.normal (if (> (dot ray.dir record.normal) 0)
                                  record.normal
                                  "-record.normal"))
               (= record.material
                  (Material :lambertian
                            (hsv2rgb (vec3 0.125 0.34 0.36))
                            (* 0.9 (- 1 (* -1 (dot ray.dir record.normal))))
                            1))))
        #_(=Sphere corner-sphere (Sphere (vec3 0 0.5 -0.5)
                                       0.05
                                       ~c/metallic-material))
        #_(= distance (.x (findSphereIntersections ray
                                                 corner-sphere.pos
                                                 corner-sphere.radius)))

        #_("if" (&& (> distance 0)
                  (< distance record.distance))
              (= record.hit true)
              (= record.distance (+ distance
                                    ~c/fudge-factor))
              (= record.point (ray-at ray record.distance))
              (= record.normal (normalize (- record.point
                                             corner-sphere.pos)))
              (= record.material corner-sphere.material))

        #_(=Plane plane (Plane (vec3 0 -5 0)
                               (normalize (vec3 0
                                                100
                                                -2))
                               ~c/ground-material))
        #_(= distance (findPlaneIntersection ray
                                             (Ray plane.pos
                                                  plane.normal)))
        #_("if" (&& (> distance 0)
                    (< distance record.distance))
                (= record.hit true)
                (= record.distance (+ distance
                                      ~c/fudge-factor))
                (= record.point (ray-at ray record.distance))
                (= record.normal plane.normal)
                (= record.material plane.material))

        record)}}}))

(def grid-of-spheres 
  (u/unquotable 
   '{:functions 
     {hit-world 
      {([Ray] Record)
       ([ray]
        (=Record (Record ~c/default-record)))}}}))

(def loop-intersection 
  (u/unquotable 
   '{:functions 
    {hit-world 
     {([Ray] Record)
      ([ray]
       (=Record record (Record false
                               1024
                               (vec3 0)
                               (vec3 0)
                               ~c/diffuse-material))
       (=Sphere sphere (Sphere (vec3 0)
                               0
                               ~c/diffuse-material))
       (=float sphere-distance ~u32-max)

       ~(cons 'do
              (map
               (fn [i pos]
                 (let [position (cons 'vec2 pos)]
                   '(do (= sphere
                           (Sphere
                            ~(if (and (even? i)
                                      (> (rand) 0.5))
                               '(vec3 (+ ~position
                                         (* ~position
                                            (* ~c/motion-factor
                                               (vec2 (rand-pcg (+ rand-offset.xy
                                                                  (* ray.dir.xy
                                                                     10)))
                                                     (rand-pcg (+ rand-offset.yz
                                                                  (* ray.dir.xz
                                                                     10))))))) 0)
                               '(vec3 ~position 0))
                            0.1
                            ~(if (even? i)
                               (c/create-diffuse-material (u/gen 3 (rand 2)))

                               c/glass-material)))

                        (= sphere-distance (.x
                                            (findSphereIntersections ray
                                                                     sphere.pos
                                                                     sphere.radius)))

                        ("if" (&& (> sphere-distance 0)
                                  (< sphere-distance record.distance))
                              (= record.hit true)
                              (= record.distance sphere-distance)
                              (= record.point (ray-at ray (fudge record.distance)))
                              (= record.normal (normalize (- record.point
                                                             sphere.pos)))

                              (= record.material sphere.material)))))
               (range c/rand-sphere-count)
               c/sphere-positions))

       (=Sphere middle-sphere (Sphere (vec3 0
                                            0
                                            0)
                                      0.5
                                      ~c/glass-material))

       (= sphere-distance (.x (findSphereIntersections ray
                                                       middle-sphere.pos
                                                       middle-sphere.radius)))
       ("if" (&& (> sphere-distance 0)
                 (< sphere-distance record.distance))
             (= record.hit "true")
             (= record.distance sphere-distance)
             (= record.point (ray-at ray (fudge record.distance)))
             (= record.normal (normalize (- record.point
                                            middle-sphere.pos)))

             (= record.material middle-sphere.material))

       record)}}}))

(def trace-frag
  (u/unquotable
   (header
    pos-chunk
    bilinear-usampler-chunk
    gradient-chunk

    sphere-intersection-chunk
    plane-intersection-chunk
    box-intersection-chunk

    raymarch-chunk
    sphere-sdf-chunk
    box-frame-sdf-chunk
    box-sdf-chunk

    axis-rotation-chunk

    loop-intersection

    simplex-3d-chunk
    hsv-to-rgb-chunk
    pcg-hash-chunk
    '{:constants ~(merge {}
                         c/materials-map)
      :defines {(fudge x) (+ x ~c/fudge-factor)}
      :outputs {Color uvec4
                Position uvec4
                Direction uvec4
                Accumulated uvec4
                Attenuation uvec4
                Meta uvec4}
      :layout {Color 0
               Position 1
               Direction 2
               Accumulated 3
               Attenuation 4
               Meta 5}
      :uniforms {size vec2
                 rand-offset vec3
                 ray-pos-tex usampler2D
                 ray-dir-tex usampler2D
                 color-tex usampler2D
                 accumulation-tex usampler2D
                 attenuation-tex usampler2D
                 ray-meta-tex usampler2D
                 skybox usampler2D
                 frame float}
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
                [pos vec3
                 normal vec3
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
      {hemisphere-uniform
       {([vec3] vec4)
        ([normal]
         (=vec3 rand-vec (rand-pcg (+ rand-offset
                                      (* normal
                                         100))))
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
                                      normal)))
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
                                      normal)))

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
                    (=vec3 h (normalize (+ "ray.dir"
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
                    (*= attenuation record.material.specular)

                    #_(=vec3 reflected-dir (normalize
                                            (reflect ray.dir
                                                     record.normal)))
                    #_(= outgoing-dir
                         (normalize (+ reflected-dir
                                       random-dir))))
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
                                               ray.dir)))
                              fresnel)
                           (= outgoing-dir (reflect ray.dir facing-normal)))
                     ("else"
                      (*= attenuation record.material.albedo)
                      (= outgoing-dir refracted)))



                    #_(=vec3 reflected-dir (normalize
                                            (reflect ray.dir
                                                     record.normal)))
                    #_(= outgoing-dir
                         (if (> (rand-pcg (+ (* 100
                                                gl_FragCoord.xy)
                                             rand-offset.xy))
                                0.75)
                           reflected-dir
                           (normalize
                            (refract ray.dir
                                     record.normal
                                     record.material.ior)))))
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
                              (< (rand-pcg (+ rand-offset.xy
                                              (* ray.dir.xy
                                                 100)))
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
         (Ray record.point
              outgoing-dir
              (+ ray.color collected-color)
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
            (* (smoothstep -1
                           1
                           (dot ray.dir
                                (vec3 0)))
               ~(if c/gold-light?
                  '(* ~c/ambient-light-factor
                      ~c/sky-gold)
                  '(vec3 ~c/ambient-light-factor)))
            (* (smoothstep 0.91
                           1
                           (dot ray.dir
                                (normalize ~c/light-pos)))

               ~c/sun-factor)))}}
      :main ((=vec2 pos (getPos))
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
            
             (=Ray ray
                   (Ray (if (== step "0")
                          ~c/cam-pos
                          (-> ray-pos-tex
                              (texelFetch frag-pos "0")
                              .xyz
                              vec3
                              (/ ~u32-max)
                              uni->bi))
                        (if (== step "0")
                          (-> pos
                              (* 2)
                              (- 1)
                              (vec3 1)
                              normalize)
                          (-> ray-dir-tex
                              (texelFetch frag-pos "0")
                              .xyz
                              vec3
                              (/ ~u32-max)
                              uni->bi))
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
                                             (- 0.5)
                                             (/ 0.5)
                                             (max 0)))
                                    ~u32-max)
                                 (uvec3 "0u"))))})))