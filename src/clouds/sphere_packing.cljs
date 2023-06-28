(ns clouds.sphere-packing
  (:require [sprog.util :as u]
            [sprog.tools.math :refer [magnitude]]
            [fxrng.rng :refer [fxrand
                               fxrand-normals]]))





(defn distance [vec-one vec-two]
  (magnitude (map - vec-one vec-two)))

(defrecord Sphere [position radius]
  Object
  (get-distance [this point]
    (- (distance this.position point)
       this.radius))
  (flat [this]
    (conj this.position
          this.radius)))

(defn get-sphere-data [n & {:keys [dimensions
                                   init-size
                                   max-radius]
                            :or {dimensions 3
                                 init-size (rand 0.333)}}]
  (letfn [(get-rand-point []
                          
                          (map #(->> %
                                     (u/scale -2 2 0 1)
                                     (u/clamp 0 1))
                               (fxrand-normals dimensions)))]
    (loop [spheres [(Sphere. (get-rand-point)
                             (if (fn? init-size)
                               (init-size)
                               init-size))]]
      (let [new-sphere (loop [point (get-rand-point)]
                         (let [min-distance (apply min
                                                   (map (fn [sphere]
                                                          (.get-distance
                                                           ^Sphere sphere
                                                           point))
                                                        spheres))]
                           (if (and (pos? min-distance)
                                    (every? #(< min-distance %
                                                (- 1 min-distance))
                                            point))
                             (Sphere. point
                                      (if max-radius
                                        (min min-distance max-radius)
                                        min-distance))
                             (recur (get-rand-point)))))]
        (if (< (count spheres) (dec n))
          (recur (conj spheres new-sphere))
          (conj spheres new-sphere))))))

