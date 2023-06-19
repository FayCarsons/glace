(ns clouds.config
  (:require [sprog.util :as u]))

;scene in bounding volume
;light source infinitely far away
;when leaving bounding volume do dot product of ray.dir 
;and dir of sun

;start at pure white - when surface hit multiply surface color by hit object

;record should have option to denote max steps reached but nothing hit, 
;therefore dont scatter/randomize

(def u32-max (dec (Math/pow 2 32)))

(def debug? false)

(def ambient-light-factor 0.001)
(def gold-light? false)
(def sky-color (cons 'vec3 (mapv #(* % 1)
                                 [0.09 0.333 0.81])))
(def sky-gold (cons 'vec3 (mapv #(/ % 255)
                                [205, 171, 120])))
(def sun-factor 1)
(def sun-color :gold)
(def sun (cons 'vec3 (map #(* % sun-factor)
                          (case sun-color 
                            :white [1 1 1]
                            :gold [0.803921568627451 0.6705882352941176 0.47058823529411764]))))
(def skybox? true)

(def cloud-freq 2)

(def bounce-loop-limit 1)
(def max-steps 100)
(def fudge-factor 0.01)
(def motion-factor 0.01)

(def menger-size 0.45)
;0.3 0.1 1
(def cam-pos (cons 'vec3 [0 0.05 -1.5]))
(def light-pos (cons 'vec3 [2 2 1]))

(def materials [:lambertian
                :blinn-phong
                :specular
                :dielectric
                :lommel
                :ggx])
(def materials-map
  (zipmap materials
          (map str (range (count materials)))))

;sahdertoy material syntax 
;type
;albedo vec3 
;specular vec3
;roughness float
;ior float 
;emissive vec3


(u/unquotable
 (do
   (def default-record '(Record false 
                                1024 ))
   (def diffuse-material '(Material :lambertian
                                    (vec3 0.1 0.1 0.1)
                                    (vec3 0.04)
                                    (vec3 0)
                                    0.5
                                    1))
   (def metallic-material '(Material :specular
                                     (vec3 0)
                                     (vec3 0.85 0.85 0.72)
                                     (vec3 0)
                                     0.1
                                     1))
   (def ground-material '(Material :lambertian
                                   (vec3 1 1 0.1)
                                   (vec3 0.04)
                                   (vec3 0)
                                   #_(* (hsv2rgb (vec3 0.1 0.25 0.7))
                                        (-> (snoise3D (* ray.pos
                                                         0.05))
                                            (* 0.3)
                                            (+ 0.7)))
                                   0.1
                                   1))
   (def glass-material '(Material :dielectric
                                  (vec3 0.9)
                                  #_~(cons 'vec3
                                         (u/gen 3
                                                '(-> ray.dir
                                                     (* 3)
                                                     snoise3D
                                                     (* 0.25)
                                                     (+ 0.75))))
                                  (vec3 0.04)
                                  (vec3 0)
                                  0.3
                                  1.755))
   (def emitter-material '(Material :lambertian
                                    (vec3 0)
                                    (vec3 0.04)
                                    (vec3 24)
                                    0.3
                                    1))
   (def plastic-material '(Material :ggx
                                    (vec3 0.8 0.06 0.03)
                                    (vec3 0.04)
                                    (vec3 0)
                                    0.15
                                    1))
   (defn create-diffuse-material [albedo]
     '(Material :lambertian
                ~(cons 'vec3 albedo)
                (vec3 0.04)
                (vec3 0)
                0.75
                0))))

(def max-brightness 1000)

(def rand-sphere-count 16)
(def sphere-positions (map #(list (Math/cos (-> %
                                                 (/ rand-sphere-count)
                                                 (* u/TAU)))
                                   (Math/sin (-> %
                                                 (/ rand-sphere-count)
                                                 (* u/TAU))))
                            (range rand-sphere-count)))



(def sphere-octaves 6)
(def sphere-layer-scale-factor 0.2) ;0.174 for sphere - spheres, 0.225 for box - spheres 
(def sphere-fbm-falloff 0.5)

(def atlas-size 8)
(def atlas-tex-size 204)
(def cloud-extent 100)
(def num-cells 2)
(def perlin-worley-enum 1) ;to alternate between perlin and worley in atlas frag
(def perlin? :perlin)


(def cloud-start 0)
(def cloud-end cloud-extent)

(def phi (/ (+ 1
               (Math/sqrt 5))
            2))
