(ns clouds.materials
  (:require [sprog.util :as u]))

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
   (def amber-glass-material '(Material :dielectric
                                        (vec3 1.2 0.9 0.5)
                                        (vec3 1.2 0.9 0.5)
                                        (vec3 0)
                                        0.3
                                        1.5))
   (def emitter-material '(Material :lommel
                                    (vec3 0)
                                    (vec3 0.04)
                                    (vec3 2)
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