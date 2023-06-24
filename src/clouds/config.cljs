(ns clouds.config
  (:require [sprog.util :as u]))

;scene in bounding volume
;light source infinitely far away
;when leaving bounding volume do dot product of ray.dir 
;and dir of sun

;start at pure white - when surface hit multiply surface color by hit object

;record should have option to denote max steps reached but nothing hit, 
;therefore dont scatter/randomize

(def u32-max '(float "0xFFFFFFFFu"))

(def debug? false)

;camera
(def cam-pos [0 0 -1])
(def look-at [0 0 0])
(def up [0 1 0])
(def field-of-view 2.5)
(def depth-of-field-strength 0.1)
(def depth-of-field-distance 1)

;lighting
(def light-pos '(vec3 0 0 -1))
(def ambient-light-factor 0)
(def sun-factor 1.1)
(def skybox? true)
(def gold-light? false)
(def sky-color '(vec3 0.09 0.333 0.81))
(def sky-gold (cons 'vec3
                    (mapv #(/ % 255)
                          [205 171 120])))


(def sun-color :white)
(def sun (cons 'vec3 (map #(* % sun-factor)
                          (case sun-color 
                            :white [1 1 1]
                            :gold [0.803921568627451 0.6705882352941176 0.47058823529411764]))))
(def sun-expression (u/unquotable
                     '(* (smoothstep 0.8 1 (dot ray.dir
                                                 (normalize ~light-pos)))
                         ~sun-factor
                         ~sun)))

(def max-brightness 1000)

;mechanics and geometry
(def cloud-freq 4)

(def bounce-loop-limit 1)
(def max-steps 32)
(def fudge-factor 0.001)
(def motion-factor 0)
(def menger-size 0.525)

(def rand-scale 1000)

(def rand-sphere-count 16)
(def sphere-positions (map #(list (Math/cos (-> %
                                                (/ rand-sphere-count)
                                                (* u/TAU)))
                                  (Math/sin (-> %
                                                (/ rand-sphere-count)
                                                (* u/TAU))))
                           (range rand-sphere-count)))



(def sphere-octaves 5)
(def sphere-layer-scale-factor 0.175) ;0.174 for sphere - spheres, 0.225 for box - spheres 
(def sphere-fbm-falloff 0.56)

;materials
(def materials [:lambertian
                :blinn-phong
                :specular
                :dielectric
                :lommel
                :ggx])
(def materials-map
  (zipmap materials
          (map str (range (count materials)))))

(u/unquotable
 (do
   (def diffuse-material '(Material :lommel
                                    (vec3 0.5 0.3 0.1)
                                    (vec3 0.04)
                                    (vec3 0)
                                    0.3
                                    1))
   (def metallic-material '(Material :specular
                                     (vec3 0.9)
                                     (vec3 0.85 0.85 0.85)
                                     (vec3 0)
                                     0.9
                                     1))
   (def ground-material '(Material :lambertian
                                   (vec3 0.5)
                                   (vec3 0.04)
                                   (vec3 0)

                                   0.5
                                   1))
   (def glass-material '(Material :dielectric
                                  (vec3 0.99)
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
   (def amber-glass-material '(Material :dielectic
                                        (vec3 1.2 0.9 0.5)
                                        (vec3 1.2 0.9 0.5)
                                        (vec3 0)
                                        0.3
                                        1.5))
   (def emitter-material '(Material :lommel
                                    (vec3 0)
                                    (vec3 0.04)
                                    (* ~sky-gold
                                       7.5)
                                    0.9
                                    1))
   (def plastic-material '(Material :ggx
                                    (vec3 0.8 0.06 0.03)
                                    (vec3 0.04)
                                    (vec3 0)
                                    0.15
                                    1))
   (def ceramic-material '(Material :ggx
                                    (vec3 0.8 0.7 0.65)
                                    (vec3 0.04)
                                    (vec3 0)
                                    0.3
                                    1))
   (defn create-material [{:keys [type
                                  albedo
                                  specular
                                  emissive
                                  roughness
                                  index-of-refraction]
                           :or {type :lambertian
                                albedo [0.99 0.99 0.99]
                                specular '[0.04 0.04 0.04]
                                emissive '[0 0 0]
                                roughness 0.3
                                index-of-refraction 1}}]
     '(Material ~type
                ~(cons 'vec3 albedo)
                ~(cons 'vec3 specular)
                ~(cons 'vec3 emissive)
                ~roughness
                ~index-of-refraction))
   (def default-record '(Record false
                                1024
                                (vec3 0)
                                (vec3 0)
                                ~diffuse-material))))

;bilateral filtering constants
(def bilateral-kernel-size 2)
(def bilateral-sigma 3)
(def bilateral-color-sigma 0.1)


(def atlas-size 8)
(def atlas-tex-size 204)
(def cloud-extent 100)
(def num-cells 2)
(def perlin-worley-enum 1) ;to alternate between perlin and worley in atlas frag
(def perlin? :perlin)



