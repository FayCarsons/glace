(ns clouds.shaders
  (:require [sprog.util :as u]
            [clouds.config :as c]
            [sprog.iglu.core :refer [iglu->glsl
                                     combine-chunks]]
            [sprog.iglu.chunks.noise :refer [rand-sphere-chunk]]
            [sprog.iglu.chunks.raytracing :refer [ray-chunk
                                                  sphere-intersection-chunk]]
            [sprog.iglu.chunks.misc :refer [bilinear-usampler-chunk
                                            pos-chunk]]
            #_[fxrng.rng :refer [fxrand
                               fxrand-int]]))

(def u32-max (Math/floor c/u32-max))
(def u32-max-u (str u32-max "u"))

(def header 
  '{:version "300 es"
    :precision {float highp 
                int highp 
                usampler2D highp 
                sampler2D highp}})

(def rot-chunk 
  '{:functions {rot 
                {([float] mat2)
                 ([angle]
                  (mat2 (cos angle) "-sin(angle)"
                        (sin angle) (cos angle)))}}})

(def render-frag
 (u/unquotable
   (iglu->glsl
    header
    pos-chunk
    bilinear-usampler-chunk
    '{:outputs {fragColor vec4}
      :uniforms {size vec2
                 now float
                 atlas usampler2D
                 final usampler2D}
      :main ((=vec2 pos (getPos))
             (= fragColor (vec4 (-> final 
                                    (textureBilinear pos)
                                    .xyz 
                                    vec3 
                                    (/ ~u32-max))
                                1)))})))

(def test-intersection 
  '{:functions
    {hit-world
     {([Ray] Record)
      ([ray]
       (=vec3 color (vec3 0))
       (=Record record (Record "false"
                               1024
                               (vec3 0)
                               (vec3 0)
                               "0"))
       (=Sphere center-sphere (Sphere (vec3 0 0 -2)
                                      1
                                      "0"))
       (=Sphere side-sphere (Sphere (vec3 1 0 -1)
                                    0.1
                                    "1"))

       (=float sphere-distance (.x
                                (findSphereIntersections ray
                                                         center-sphere.pos
                                                         center-sphere.radius)))
       (=bool hit-sphere (> sphere-distance 0))
       ("if (hit_sphere)"
        (= record.hit "true")
        (= record.distance sphere-distance)
        (= record.point (ray-point ray sphere-distance))
        (= record.normal (normalize (/ (- record.point
                                          center-sphere.pos)
                                       center-sphere.radius)))
        (=bool front-face (> (dot ray.dir record.normal) 0))
          ; set normals to always face outward
        (= record.normal (if (! front-face)
                           record.normal
                           (- 0 record.normal)))
        (= record.id center-sphere.id))
       ("else"
        (= sphere-distance (.x (findSphereIntersections ray
                                                        side-sphere.pos
                                                        side-sphere.radius)))
        (= hit-sphere (> sphere-distance 0))
        ("if (hit_sphere)"
         (= record.hit "true")
         (= record.distance sphere-distance)
         (= record.point (ray-point ray sphere-distance))
         (= record.normal (normalize (/ (- record.point
                                           side-sphere.pos)
                                        2)))
         (=bool front-face (> (dot ray.dir record.normal) 0))
          ; set normals to always face outward
         (= record.normal (if (! front-face)
                            record.normal
                            (- 0 record.normal)))
         (= record.id side-sphere.id)))

       record)}}})


(def trace-frag
  (u/unquotable
   (iglu->glsl
    header
    pos-chunk
    ray-chunk
    sphere-intersection-chunk
    rand-sphere-chunk
    test-intersection
    '{:outputs {Color uvec4
                Position uvec4
                Direction uvec4
                Accumulated uvec4
                Meta uvec4}
      :layout {Color 0
               Position 1
               Direction 2
               Accumulated 3
               Meta 4}
      :uniforms {size vec2
                 rand-offset vec3
                 ray-pos-tex usampler2D
                 ray-dir-tex usampler2D
                 color-tex usampler2D
                 accumulation-tex usampler2D
                 ray-meta-tex usampler2D
                 frame float}
      :structs {Sphere
                [pos vec3
                 radius float
                 id int]
                
                Record
                [hit bool
                 distance float
                 point vec3
                 normal vec3
                 id int]}
      :functions
      {aces-tonemap
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
       ray-point
       {([Ray float] vec3)
        ([ray distance]
         (+ ray.pos (* ray.dir distance)))}
       exit-color
       {([vec3] vec3)
        ([ray-dir]
         (+ (mix (vec3 0.5 0.7 1)
              (vec3 1)
              (-> ray-dir.y
                  (+ 1)
                  (* 0.5)))
            (* (smoothstep 0.9
                           0.95
                           (dot ray-dir
                                ~c/light-pos))
               (vec3 1)))
         )}}
      :main ((=vec2 pos (getPos))
             (=uvec4 meta-color
                     (texelFetch ray-meta-tex (ivec2 gl_FragCoord.xy) "0"))
             (=int step (int meta-color.x))
             (=int accumulation-index (int meta-color.y))

             (=bool ray-finished "false")

             (=vec3 old-accumulated (-> accumulation-tex
                                        (texelFetch (ivec2 gl_FragCoord.xy) "0")
                                        .xyz
                                        vec3
                                        (/ ~u32-max)))

             (=Ray ray
                   (Ray (if (== step "0")
                          ~c/cam-pos
                          (-> ray-pos-tex
                              (texelFetch (ivec2 gl_FragCoord.xy) "0")
                              .xyz
                              vec3
                              (/ ~u32-max)))

                        (if (== step "0")
                          (-> pos
                              (* 2)
                              (- 1)
                              (vec3 -1)
                              normalize)

                          (-> ray-dir-tex
                              (texelFetch (ivec2 gl_FragCoord.xy) "0")
                              .xyz
                              vec3
                              (/ ~u32-max)))))

             (=vec3 in-color (if (== step "0")
                               (vec3 1)

                               (-> color-tex
                                   (texelFetch (ivec2 gl_FragCoord.xy) "0")
                                   .xyz
                                   vec3
                                   (/ ~u32-max))))

             (=vec3 ray-color in-color)
             (~(str "for(int s=0;s<" c/bounces-per-sample ";s++)")

              (=Record record (hit-world ray))

              ("if (record.hit)"
               (= ray-color (* ray-color
                               (if (== record.id "0")
                                 (vec3 1 0.5 0.5)
                                 (vec3 0.5 1 0.5))))
               (=vec3 reflected-dir (reflect ray.dir
                                             record.normal))
               (= ray (Ray record.point
                           (normalize
                            (- (+ record.point
                                  reflected-dir
                                  (* (randSphere
                                      (+ (* 100
                                            (vec3 gl_FragCoord.xy
                                                  (- gl_FragCoord.x 
                                                     (* gl_FragCoord.y 0.25)
                                                     100)))
                                         #_(* 200
                                              gl_FragCoord.xyz)
                                         rand-offset))
                                     ~c/scatter-radius))
                               record.point)))))
              ("else"
               (= ray-color (* ray-color
                               (exit-color ray.dir)))
               (= ray-finished "true")
               "break"))

             (=vec3 out-color ray-color)
             (=vec3 out-position ray.pos)
             (=vec3 out-direction ray.dir)

             (= Color (uvec4 (uvec3 (* out-color
                                       ~u32-max))
                             ~u32-max-u))
             (= Position (uvec4 (uvec3 (* ray.pos
                                          ~u32-max))
                                ~u32-max-u))
             (= Direction (uvec4 (uvec3 (* ray.dir
                                           ~u32-max))
                                 ~u32-max-u))
             (= Accumulated (uvec4
                             (uvec3
                              (* (if ray-finished
                                  (clamp
                                   (mix old-accumulated
                                        out-color
                                        (/ 1 (+ 1
                                                (float accumulation-index))))
                                   0 1)
                                   old-accumulated)
                                 ~u32-max))
                             ~u32-max-u))
             (= Meta (uvec4 (if ray-finished
                              "0"
                              (+ step 
                                 ~(str c/steps-per-sample)))
                            (if ray-finished
                              (+ accumulation-index "1")
                              accumulation-index)
                            0
                            0)))})))