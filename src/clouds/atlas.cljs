(ns clouds.atlas
(:require [sprog.util :as u]
          [clouds.config :as c]
          [clouds.shaders :as s]
          [sprog.iglu.chunks.noise :refer [simplex-3d-chunk
                                           fbm-chunk]]
          [sprog.iglu.core :refer [iglu->glsl
                                   combine-chunks]]))

(def u32-max c/u32-max)

(def hash-chunk
  (u/unquotable
   '{:functions
     {modulo
      {([vec3 float] vec3)
       ([m n]
        (mod (+ n (mod m (vec3 n))) n))}
      hash
      {([vec3] vec3)
       ([pos]
        (= pos (modulo pos ~c/atlas-size))
        (= pos (fract (* pos
                         (vec3 0.1031
                               0.1030
                               0.0973))))
        (+= pos (dot pos (+ pos.yzx 33.33)))
        (* 2
           (- (fract (* (+ pos.xxy
                           pos.yxx)
                        pos.zyx))
              1)))}}}))

(def perlin-chunk
  (combine-chunks
   hash-chunk
   '{:functions
     {fade
      {([vec3] vec3)
       ([t]
        (* (* t t t)
           (+ (* t (- (* t 6)
                      15))
              10)))}
      gradient-noise
      {([vec3] float)
       ([pos]
        (=vec3 i (floor pos))
        (=vec3 f (fract pos))

        (=vec3 u (fade f))

        (mix (mix (mix (dot (hash i)
                            f)
                       (dot (hash (+ i
                                     (vec3 1 0 0)))
                            (- f (vec3 1 0 0)))
                       u.x)
                  (mix (dot (hash (+ i (vec3 0 1 0)))
                            (- f (vec3 0 1 0)))
                       (dot (hash (+ i
                                     (vec3 1 1 0)))
                            (- f (vec3 1 1 0)))
                       u.x)
                  u.y)
             (mix (mix (dot (hash (+ i (vec3 0 0 1)))
                            (- f (vec3 0 0 1)))
                       (dot (hash (+ i
                                     (vec3 1 0 1)))
                            (- f (vec3 1 0 1)))
                       u.x)
                  (mix (dot (hash (+ i (vec3 0 1 1)))
                            (- f (vec3 0 1 1)))
                       (dot (hash (+ i
                                     (vec3 1)))
                            (- f (vec3 1)))
                       u.x)
                  u.y)
             u.z))}

      perlin3D
      {([vec3 float] float)
       ([pos freq]
        (=float sum 0)
        (=float weighted-sum 0)
        (=float weight 1)

        ("for (int octave=0;octave<3;octave++)"
         (=vec3 p (* pos freq))
         (=float val (+ 0.5 (* 0.5 (gradient-noise p))))
         (+= sum (* val weight))
         (+= weighted-sum weight)

         (*= weight 0.5)
         (*= freq 2))

        (clamp (/ sum weighted-sum) 0 1))}}}))

(def worley-chunk
  (combine-chunks
   hash-chunk
   '{:functions {worley3D
                 {([vec3 float] float)
                  ([pos num-cells]
                   (=vec3 p (* pos num-cells))
                   (=float d 1e10)
                   ("for (int x = -1; x <= 1; x++)"
                    ("for (int y = -1; y <= 1; y++)"
                     ("for (int z = -1; z <= 1; z++)"
                      (=vec3 tp (+ (floor p)
                                   (vec3 x y z)))
                      (= tp (- p
                               (- tp
                                  (-> tp
                                      (mod num-cells)
                                      hash
                                      (* 0.5)
                                      (+ 0.5)))))
                      (= d (min d (dot tp tp))))))
                   (- 1 (clamp d 0 1)))}}}))

(def remap-chunk
  '{:functions {remap
                {([float float float float float] float)
                 ([x low-one high-one low-two high-two]
                  (+ low-two
                     (/ (* (- x low-one)
                           (- high-two
                              low-two))
                        (- high-one
                           low-one))))}}})



(def atlas-frag
  (u/unquotable
   (s/header
    remap-chunk
    worley-chunk
    simplex-3d-chunk
    perlin-chunk
    fbm-chunk
    '{:outputs {fragColor uvec4}
      :uniforms {size vec2}
      :functions {get3D
                  {([vec2 float] vec3)
                   ([pos tile-rows]
                    (=vec2 tile (floor pos))
                    (=float z (floor (+ (* tile-rows tile.y)
                                        tile.x)))
                    (vec3 (fract pos)
                          z))}
                  get-color
                  {([vec3 float] float)
                   ([pos type]
                    (=float res 0)
                    ("if" (== type ~c/perlin-worley-enum)
                          (=float perlin ~(case c/perlin?
                                            :perlin '(perlin3D pos ~c/atlas-size)
                                            :simplex '(-> (fbm snoise3D
                                                               3
                                                               (modulo pos ~c/atlas-size)
                                                               "5"
                                                               0.1)
                                                          (* 0.5)
                                                          (+ 0.5))))
                          (= res perlin)
                          (=float worley-one (worley3D pos (* ~c/num-cells 2)))
                          (=float worley-two (worley3D pos (* ~c/num-cells 8)))
                          (=float worley-three (worley3D pos (* ~c/num-cells 14)))

                          (=float worley-fbm (+ (* worley-one
                                                   0.625)
                                                (* worley-two
                                                   0.25)
                                                (* worley-three
                                                   0.125)))
                          (= res (remap perlin 0 1 worley-fbm 1)))
                    ("else"
                     (=float worley-one (worley3D pos ~c/num-cells))
                     (=float worley-two (worley3D pos (* ~c/num-cells 2)))
                     (=float worley-three (worley3D pos (* ~c/num-cells 8)))
                     (=float worley-four (worley3D pos (* ~c/num-cells 14)))

                     (=float fbm-one (+ (* worley-one 0.625)
                                        (* worley-two 0.25)
                                        (* worley-three 0.125)))
                     (=float fbm-two (+ (* worley-two 0.625)
                                        (* worley-three 0.25)
                                        (* worley-four 0.125)))
                     (=float fbm-three (+ (* worley-four 0.75)
                                          (* worley-three 0.25)))
                     (= res (+ (* fbm-one 0.625)
                               (* fbm-two 0.25)
                               (* fbm-three 0.125))))
                    res)}}
      :main ((=vec2 fragcoords gl_FragCoord.xy)
             (=float tile-size 34)
             (=float pad-width 1)
             (=float core-size (- tile-size (* 2 pad-width)))
             (=float tile-rows 6)
             (=float tile-count (* tile-rows tile-rows))

             (=vec2 tile (floor (/ (- gl_FragCoord.xy 0.5)
                                   tile-size)))

             (=bool pad-cell (|| (== (mod fragcoords.x tile-size)
                                     0.5)
                                 (== (mod fragcoords.x tile-size)
                                     (- tile-size 0.5))
                                 (== (mod fragcoords.y tile-size)
                                     0.5)
                                 (== (mod fragcoords.y tile-size)
                                     (- tile-size 0.5))))

             (=bool start-pad-x "false")
             (=bool end-pad-x "false")
             (=bool start-pad-y "false")
             (=bool end-pad-y "false")

             ("if" (== fragcoords.x (+ (* tile.x tile-size)
                                       0.5))
                   (= start-pad-x "true"))
             ("if" (== fragcoords.y (+ (* tile.y tile-size)
                                       0.5))
                   (= start-pad-y "true"))
             ("if" (== fragcoords.x (* (+ tile.x 1)
                                       (- tile-size 0.5)))
                   (= end-pad-x "true"))
             ("if" (== fragcoords.y (* (+ tile.y 1)
                                       (- tile-size 0.5)))
                   (= end-pad-y "true"))

             (=vec2 padding (* (vec2 (* 2 pad-width))
                               tile))

             (=vec2 pixel (- fragcoords
                             pad-width
                             padding))
             (=vec2 pos (vec2 0))

             ("if(!pad_cell)"
              (= pos (/ pixel
                        core-size)))
             ("else"
              ("if (start_pad_x)"
               (+= pixel.x core-size))
              ("if (start_pad_y)"
               (+= pixel.y core-size))
              ("if (end_pad_x)"
               (-= pixel.x core-size))
              ("if (end_pad_y)"
               (-= pixel.y core-size))
              (= pos (/ pixel core-size)))

             (=vec3 noise-pos (get3D pos tile-rows))
             (=vec3 p noise-pos)
             (= p.z (/ p.z (* tile-rows tile-rows)))

             (=float wp-noise (get-color p ~c/perlin-worley-enum))
             (=float worley (get-color p 0))

             (= fragColor (uvec4 (uvec3 (* (clamp (remap wp-noise
                                                         worley
                                                         1
                                                         0
                                                         1)
                                                  0
                                                  1)
                                           ~u32-max))
                                 ~(str u32-max))))})))
