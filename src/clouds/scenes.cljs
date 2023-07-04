(ns clouds.scenes
  (:require [sprog.util :as u]
            [clouds.config :as c]
            [sprog.iglu.core :refer [iglu->glsl
                                     combine-chunks]]
            [clouds.materials :as mat]))



(def dof-test
  (u/unquotable
   '{:functions
     {hit-world
      {([Ray] Record)
       ([ray]
        (=Record record ~mat/default-record)


        #_(=BoxIntersection box (findBoxIntersection ray
                                                   (vec3 0 -1 0)
                                                   (vec3 10 0 10)))
        (=float current-distance 0xFFFFFFFF)

        #_("if" (> current-distance 0)
              (= record.hit true)
              (= record.distance current-distance)
              (= record.point (ray-at ray record.distance))
              (= record.normal box.frontNorm)
              (= record.material ~(mat/create-material {:type :blinn-phong
                                                        :albedo [0.9999]
                                                        :specular [0.99999]
                                                        :roughness 0.1
                                                        :index-of-refraction 2})))

        (=Sphere sphere (Sphere (vec3 0)
                                0
                                ~mat/diffuse-material))

        ~c/sphere-packing-expression
        record)}}}))

(def coral-sdf
  '{sdf
    {([vec3] float)
     ([pos]
      (= pos (twistX pos 2))
      (=float sfbm 1024)
      (=float base-period 3)
      (=vec3 base-pos (- (mod (+ pos
                                 (* 0.5
                                    base-period))
                              base-period)
                         (* 0.5 base-period)))

      (~(str "for (int i = 0; i <" c/sphere-octaves "; ++i)")
       (=vec3 rot-pos (* pos
                         (axisRotationMatrix (normalize (rand-pcg (* (vec3 i
                                                                           (- i)
                                                                           (* i i))
                                                                     ~c/rand-scale)))
                                             (rand-pcg (float i)))))
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
       (= sfbm (smoothUnion sfbm
                            spheres
                            0.01)))

      (=float base (sdBox pos
                          (vec3 0)
                          (vec3 ~c/menger-size)))

      (max (- 0 sfbm)
           base))}
    hit-world
    {([Ray] Record)
     ([ray]
      (=Record record ~mat/default-record)
      (do (=Sphere sphere-light-one (Sphere (vec3 -0.17 0.125 -0.55)
                                            0.03
                                            ~(mat/create-material {:type :lommel

                                                                 :emissive [2 0.25 0.25]
                                                                 :roughness 0.9})))
          (=float distance (.x (findSphereIntersections ray
                                                        sphere-light-one.pos
                                                        sphere-light-one.radius)))
          ("if" (&& (> distance 0)
                    (< distance record.distance))
                (= record.hit true)
                (= record.distance distance)
                (= record.point (ray-at ray record.distance))
                (= record.normal (normalize (- record.point
                                               sphere-light-one.pos)))

                (= record.material sphere-light-one.material))

          (= sphere-light-one (Sphere (vec3 0.2 -0.1 -0.55)
                                      0.02
                                      ~(mat/create-material {:type :lommel

                                                           :emissive [0.25 0.25 2]
                                                           :roughness 0.9})))
          (= distance (.x (findSphereIntersections ray
                                                   sphere-light-one.pos
                                                   sphere-light-one.radius)))
          ("if" (&& (> distance 0)
                    (< distance record.distance))
                (= record.hit true)
                (= record.distance distance)
                (= record.point (ray-at ray record.distance))
                (= record.normal (normalize (- record.point
                                               sphere-light-one.pos)))

                (= record.material sphere-light-one.material))

          (=Sphere sphere-light-two (Sphere (vec3 0.5 0 -1.1)
                                            0.25
                                            ~(mat/create-material {:type :lambertian
                                                                 :emissive [2 2 2]
                                                                 :roughness 0.01})))
          (= distance (.x (findSphereIntersections ray
                                                   sphere-light-two.pos
                                                   sphere-light-two.radius)))
          ("if" (&& (> distance 0)
                    (< distance record.distance))
                (= record.hit true)
                (= record.distance distance)
                (= record.point (ray-at ray record.distance))
                (= record.normal (normalize (- record.point
                                               sphere-light-two.pos)))

                (= record.material sphere-light-two.material)))

      (= distance (raymarch ray
                            {:max-distance 100
                             :max-steps 100}))
      ("if" (&& (< distance 100)
                (< distance record.distance))
            (= record.hit true)
            (= record.distance distance)
            (= record.point (ray-at ray record.distance))
            (= record.normal (normalize
                              (findGradient 3
                                            sdf
                                            0.001
                                            record.point)))
            (= record.material
               (Material
                :lambertian
                (vec3 (mix (vec3 0.3 0.3 0.01)
                           (vec3 1 0 0)
                           distance))
                (vec3 0.99 0.04 0.04)
                (vec3 0)
                0.1
                1.75)))


      record)}})

(def raymarch-test-chunk
  (u/unquotable
   '{:functions
     {sdf

      {([vec3] float)
       ([pos]
        #_(= pos (twistY pos 2))
        (=float sfbm 1024)
        (=float base-period 3)
        (=vec3 base-pos (- (mod (+ pos
                                   (* 0.5
                                      base-period))
                                base-period)
                           (* 0.5 base-period)))
        (=int id "0")

        (~(str "for (int i = 0; i <" c/sphere-octaves "; ++i)")
         (=float scale (pow ~c/sphere-fbm-falloff
                            (float i)))
         (=float period (* 0.5
                           scale))
         (=vec3 q (- (mod (+ pos
                             (* 0.5
                                period))
                          period)
                     (* 0.5 period)))

         (=float shapes (sdBoxframe q (vec3 0)
                                    (vec3 (* ~c/sphere-layer-scale-factor
                                             scale))
                                    (* ~c/sphere-layer-scale-factor
                                       scale)))
         ("if" (< shapes sfbm)
          (= id i))
         (= sfbm (min sfbm
                          shapes)))

        (=float base (sdBox pos
                            (vec3 0)
                            (vec3 ~c/menger-size)))

        (max (- 0 sfbm)
             base))}
      hit-world
      {([Ray] Record)
       ([ray]
        (=Record record ~mat/default-record)
        (do (=Sphere sphere-light-one (Sphere (vec3 0 0 0)
                                              0.02
                                              ~(mat/create-material
                                                {:type :lambertian
                                                 :specular [0.75]
                                                 :emissive [4 4 4]
                                                 :roughness 0.5})))
            (=float dist (.x (findSphereIntersections ray
                                                          sphere-light-one.pos
                                                          sphere-light-one.radius)))
            ("if" (&& (> dist 0)
                      (< dist record.distance))
                  (= record.hit true)
                  (= record.distance dist)
                  (= record.point (ray-at ray record.distance))
                  (= record.normal (normalize (- record.point
                                                 sphere-light-one.pos)))

                  (= record.material sphere-light-one.material)))

        (= dist (raymarch ray
                              {:max-distance 1000
                               :max-steps 64
                               :step-factor 1}))
        ("if" (&& (< dist 100)
                  (< dist 
                     record.distance))
              (= record.hit true)
              (= record.distance dist)
              (= record.point (ray-at ray record.distance))
              (= record.normal (normalize
                                (findGradient 3
                                              sdf
                                              0.001
                                              record.point)))
         
              (= record.material
                 (Material
                  :lambertian
                  (vec3 1.2 0.9 0.5)
                  (vec3 1.2 0.9 0.5)
                  (vec3 0)
                  0.5
                  1)))


        record)}}}))

(def loop-intersection
  (u/unquotable
   '{:functions
     {hit-world
      {([Ray] Record)
       ([ray]
        (=Record record ~mat/default-record)
        (=Sphere sphere (Sphere (vec3 0)
                                0
                                ~mat/diffuse-material))
        (=float current-distance ~c/u32-max)

        ~(cons 'do
               (map
                (fn [i pos]
                  (let [position (cons 'vec2 pos)
                        par (even? i)]
                    '(do (= sphere
                            (Sphere
                             (vec3 ~position 0.5)
                             0.125
                             ~(if par
                                (mat/create-material {:type :ggx
                                                    :albedo [(+ (rand 0.75) 0.1)
                                                             0.1
                                                             0.1]
                                                    :specular [0.99 0.01 0.01]
                                                    :roughness 0.01})

                                (mat/create-material {:type :blinn-phong
                                                    :specular [0.99]
                                                    :roughness 0.75}))))

                         (= current-distance (.x
                                              (findSphereIntersections ray
                                                                       sphere.pos
                                                                       sphere.radius)))

                         ("if" (&& (> current-distance 0)
                                   (< current-distance record.distance))
                               (= record.hit true)
                               (= record.distance current-distance)
                               (= record.point (ray-at ray record.distance))
                               (= record.normal (normalize (- record.point
                                                              sphere.pos)))

                               (= record.material sphere.material)))))
                (range c/rand-sphere-count)
                c/sphere-positions))

        (=Sphere middle-sphere (Sphere (vec3 0
                                             0
                                             0.5)
                                       0.5
                                       ~(mat/create-material {:albedo [0.9]
                                                            :type :lambertian
                                                            :specular [0.9]
                                                            :roughness 0.3
                                                            :ior 2})))

        (= current-distance (.x (findSphereIntersections ray
                                                         middle-sphere.pos
                                                         middle-sphere.radius)))
        ("if" (&& (> current-distance 0)
                  (< current-distance record.distance))
              (= record.hit true)
              (= record.distance current-distance)
              (= record.point (ray-at ray record.distance))
              (= record.normal (normalize (- record.point
                                             middle-sphere.pos)))

              (= record.material middle-sphere.material))

       ;plane
        #_(do (=BoxIntersection box (findBoxIntersection ray
                                                         (vec3 0 -1.5 0)
                                                         (vec3 2 0.01 2)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material))

              (= box (findBoxIntersection ray
                                          (vec3 1 0 -1)
                                          (vec3 0.01 2 2)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material))

              (= box (findBoxIntersection ray
                                          (vec3 -1 0 -1)
                                          (vec3 0.01 2 2)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material))

              (= box (findBoxIntersection ray
                                          (vec3 0 0 1)
                                          (vec3 2 2 0.01)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material))

              (= box (findBoxIntersection ray
                                          (vec3 0 1.25 -1)
                                          (vec3 2 0.01 2)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material))

              (= box (findBoxIntersection ray
                                          (vec3 0 0 -1)
                                          (vec3 2 2 0.01)))
              (= current-distance box.frontDist)
              ("if" (&& (> current-distance 0)
                        (< current-distance record.distance))
                    (= record.hit true)
                    (= record.distance current-distance)
                    (= record.point (ray-at ray record.distance))
                    (= record.normal (normalize box.frontNorm))

                    (= record.material ~c/diffuse-material)))

       ;lights
        (do (=Sphere sphere-light-one (Sphere (vec3 0.5 0.5 0.5)
                                              0.1
                                              ~(mat/create-material {:type :lambertian
                                                                   :emissive [2 1 1]
                                                                   :roughness 0.01})))
            (= current-distance (.x (findSphereIntersections ray
                                                             sphere-light-one.pos
                                                             sphere-light-one.radius)))
            ("if" (&& (> current-distance 0)
                      (< current-distance record.distance))
                  (= record.hit true)
                  (= record.distance current-distance)
                  (= record.point (ray-at ray record.distance))
                  (= record.normal (normalize (- record.point
                                                 sphere-light-one.pos)))

                  (= record.material sphere-light-one.material))



            (=BoxIntersection box (findBoxIntersection ray
                                                       (vec3 5 0 2)
                                                       (vec3 0 1 1)))
            (= current-distance box.frontDist)
            ("if" (&& (> current-distance 0)
                      (< current-distance record.distance))
                  (= record.hit true)
                  (= record.distance current-distance)
                  (= record.point (ray-at ray record.distance))
                  (= record.normal (normalize box.frontNorm))

                  (= record.material ~mat/emitter-material))

            (= box (findBoxIntersection ray
                                        (vec3 -5 0 2)
                                        (vec3 0 1 1)))
            (= current-distance box.frontDist)
            ("if" (&& (> current-distance 0)
                      (< current-distance record.distance))
                  (= record.hit true)
                  (= record.distance current-distance)
                  (= record.point (ray-at ray record.distance))
                  (= record.normal (normalize box.frontNorm))

                  (= record.material ~mat/emitter-material))

            (= box (findBoxIntersection ray
                                        (vec3 0 1.1 0)
                                        (vec3 0.333 0 0.333)))
            (= current-distance box.frontDist)
            ("if" (&& (> current-distance 0)
                      (< current-distance record.distance))
                  (= record.hit true)
                  (= record.distance current-distance)
                  (= record.point (ray-at ray record.distance))
                  (= record.normal (normalize box.frontNorm))

                  (= record.material ~mat/emitter-material)))


        record)}}}))