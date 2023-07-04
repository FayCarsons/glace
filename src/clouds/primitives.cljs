(ns clouds.primitives
  (:require [sprog.util :as u]
            [sprog.tools.math :refer [magnitude
                                      dot]]
            [fxrng.rng :refer [fxrand
                               fxrand-normals]]))

(defprotocol Shape
  (get-distance [this point])
  (bounds [shape])
  (flat [this]))

(defn distance [vec-one vec-two]
  (magnitude (map - vec-one vec-two)))

#_(defrecord Sphere [position radius]
  Shape
  (get-distance [this point]
    (- (distance this.position point)
       this.radius))
  (bounds [this]
             {:min (map #(- %
                            this.radius)
                        this.position)
              :max (map #(+ %
                            this.radius)
                        this.position)})
  (flat [this]
    (conj this.position
          this.radius)))

(defn make-sphere [fields]
  (if (map? fields)
    (map->Sphere fields)
    (->Sphere (first fields) (last fields))))


#_(defrecord Cylinder [bottom top radius]
  (get-distance [this point]
    ())
  (bounds "gets tightest bounding box"
    [this]
    (let [a (mapv - this.top this.bottom)
          d (dot a a)
          e (mapv (fn [t]
                    (as-> t x
                      (* x x)
                      (/ x d)
                      (- 1 x)
                      Math/sqrt
                      (* this.radius)))
                  a)]
      {:min (mapv min
                  (mapv - this.bottom e)
                  (mapv - this.top e))
       :max (mapv max
                  (mapv + this.bottom e)
                  (mapv + this.top e))}))
  (flat [this]
    (vec (concat this.bottom this.top this.radius))))

