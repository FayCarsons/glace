(ns clouds.config
  (:require [sprog.util :as u]
            [clouds.materials :as mat]
            [clouds.sphere-packing :refer [get-sphere-data]]
            [fxrng.rng :refer [fxrand]]))
(def u32-max-u "0xFFFFFFFFu")
(def u32-max (cons 'float (list u32-max-u)))

(def debug? false)

;camera
(def camera-distance 1.25)
(def cam-pos [0 0 (- camera-distance)])
(def look-at [0 0 0])
(def up [0 1 0])
(def field-of-view 2.5)
(def depth-of-field-strength 0.001)
(def depth-of-field-distance (/ camera-distance 
                                field-of-view))

;lighting
(def light-pos '(vec3 -0.333 0 -1))
(def ambient-light-factor 0)
(def sun-factor 0)
(def skybox? false)
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

;rendering + postprocessing 
(def max-brightness 1000)
(def aberration-offset 0)
(def cloud-freq 4)
(def motion-factor 0)

;mechanics
(def bounce-loop-limit 1)
(def max-steps 500)
(def fudge-factor 0.001)

(def rand-scale 1000)

;PALETTES
(def pastel-earthtones {:hills-green [0.6392156862745098 0.6980392156862745 0.6431372549019608],
                        :balance-green [0.7647058823529411 0.7764705882352941 0.6588235294117647],
                        :chai [0.9372549019607843 0.8588235294117647 0.6980392156862745],
                        :larb [0.8784313725490196 0.7764705882352941 0.6784313725490196],
                        :beige [0.7568627450980392 0.6980392156862745 0.6352941176470588],
                        :pink [0.8941176470588236 0.8352941176470589 0.8274509803921568]})
(defn scale-palette [palette]
  (into {}
        (map (fn [[k v]]
               [k (mapv #(/ % 255) 
                        v)])
             palette)))

(defn palette->materials [palette & options]
  (mapv (fn [[_ v]]
          (mat/create-material
           {:albedo v
            :roughness (fxrand 0.1 0.8)}))
        palette))

;SCENES
;basic-test
(def rand-sphere-count 16)
(def sphere-positions (map #(list (Math/cos (-> %
                                                (/ rand-sphere-count)
                                                (* u/TAU)))
                                  (Math/sin (-> %
                                                (/ rand-sphere-count)
                                                (* u/TAU))))
                           (range rand-sphere-count)))


;recursive primitives
(def menger-size 0.525)
(def sphere-octaves 6)
(def sphere-layer-scale-factor 0.15) ;0.174 for sphere - spheres, 0.225 for box - spheres 
(def sphere-fbm-falloff 0.5)

;sphere packing
(def num-packed-spheres 64)
(def spheres (get-sphere-data num-packed-spheres {:init-sze (partial rand 0.2)
                                                  :max-radius 0.5}))
(def sphere-packing-expression 
  (u/unquotable
   (cons 'do
         (map (fn [sphere]
                '(do (= sphere (Sphere ~(cons 'vec3
                                              (map #(- % 0.5) sphere.position))
                                       ~sphere.radius
                                       ~(rand-nth [mat/glass-material
                                                   mat/amber-glass-material
                                                   mat/metallic-material
                                                   mat/diffuse-material
                                                   mat/emitter-material
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.6392 
                                                           0.6980
                                                           0.6431)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.6667867723852396
                                                     1)
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.7647058823529411 
                                                           0.7764705882352941 
                                                           0.6588235294117647)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.3070532530313358
                                                     1)
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.9372549019607843 0.8588235294117647 0.6980392156862745)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.6438089546514675
                                                     1)
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.8784313725490196 0.7764705882352941 0.6784313725490196)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.16780196996405722
                                                     1)
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.7568627450980392 0.6980392156862745 0.6352941176470588)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.1315756174735725
                                                     1)
                                                   '(Material
                                                     :lambertian
                                                     (vec3 0.8941176470588236 0.8352941176470589 0.8274509803921568)
                                                     (vec3 0.04 0.04 0.04)
                                                     (vec3 0 0 0)
                                                     0.38577988445758826
                                                     1)])))
                     (= current-distance (.x (findSphereIntersections ray
                                                                      sphere.pos
                                                                      sphere.radius)))
                     ("if" (&& (> current-distance 0)
                               (< current-distance record.distance))
                           (= record.hit true)
                           (= record.distance current-distance)
                           (= record.point (ray-at ray record.distance))
                           (= record.normal (normalize (- record.point
                                                          sphere.pos)))
                           (= record.material sphere.material))))
              spheres))))

(def dof-test-sphere 
  (u/unquotable
   (let [sqrt-num-spheres 16]
     (cons 'do
           (map (fn [coord]
                  '(do (= sphere (Sphere ~(cons 'vec3
                                                (concat (map +
                                                             coord
                                                             (u/gen 2 (- (rand 0.1) 0.05))) 
                                                        (list (rand))))
                                         ~(+ 0.025 
                                             (rand 0.05))
                                         ~(rand-nth [mat/glass-material
                                                     mat/amber-glass-material
                                                     mat/metallic-material
                                                     mat/diffuse-material
                                                     mat/glass-material
                                                     mat/amber-glass-material
                                                     mat/metallic-material
                                                     mat/diffuse-material
                                                     mat/emitter-material
                                                     (mat/create-material
                                                      {:type :blinn-phong
                                                       :albedo [0.99]
                                                       :specular [0.99]
                                                       :roughenss 0.1})
                                                     (mat/create-material
                                                      {:type :blinn-phong
                                                       :albedo [0.99]
                                                       :specular [0.99]
                                                       :roughenss 0.1})
                                                     (mat/create-material {:type :lommel
                                                                           :albedo [0.9 0.6 0.3]
                                                                           :roughness 0.8})])))
                       (= current-distance (.x (findSphereIntersections ray
                                                                        sphere.pos
                                                                        sphere.radius)))
                       ("if" (&& (> current-distance 0)
                                 (< current-distance record.distance))
                             (= record.hit true)
                             (= record.distance current-distance)
                             (= record.point (ray-at ray record.distance))
                             (= record.normal (normalize (- record.point
                                                            sphere.pos)))
                             (= record.material sphere.material))))
                (for [x (range sqrt-num-spheres)
                      y (range sqrt-num-spheres)]
                  (list (- (/ x sqrt-num-spheres) 
                           0.5)
                        (- (/ y sqrt-num-spheres)
                           0.5))))))))


