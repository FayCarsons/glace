(ns clouds.graph
  (:require [sprog.util :as u]
            [clojure.set :refer [union]]
            [fxrng.rng :refer [fxrand fxrand-int]]))

(defn safe-nth [vect index]
  (if (> index (dec (count vect)))
    nil
    (nth vect index)))

(def distance
  (comp Math/sqrt
        (partial apply +)
        (partial (comp #(* % %) -))))


(defn create-graph [size k threshold & [mode
                                        displacement-freq-one
                                        displacement-freq-two]]
  (let [ring-lattice
        (mapv (fn [i]
                (mapv #(mod (+ i (inc %)) size)
                      (range k)))
              (range size))
        adjacency-list (vec
                        (map-indexed (fn [index neighbors]
                                       (vec
                                        (flatten
                                         (mapv
                                          #(if (> (fxrand) threshold)
                                             (loop [fxrand-node (fxrand-int size)]
                                               (if (not (== fxrand-node index))
                                                 fxrand-node
                                                 (recur (fxrand-int size))))
                                             %)
                                          neighbors))))
                                     ring-lattice))

        matrix (vec (for [x (range size)
                          y (range size)]
                      (if (or ((set (nth adjacency-list
                                         x
                                         nil))
                               y)
                              ((set (nth adjacency-list
                                         y
                                         nil))
                               x))
                        1
                        0)))
        get-edges (fn [graph]
                    (apply union
                           (map #(set (map (partial hash-set %) (graph %)))
                                (range (count graph)))))
        edges  (mapv vec (get-edges adjacency-list))
        node-positions (mapv (fn [i]
                               (let [step (* (/ i
                                                size)
                                             u/TAU)]
                                 (if mode
                                   (case mode
                                     :wavy-ring
                                     (mapv #(* %
                                               (-> (Math/sin
                                                    (* step
                                                       (or displacement-freq-one
                                                           7)))
                                                   (* 0.5)
                                                   (+ 0.5)
                                                   (* 0.1)
                                                   (+ 0.9)))
                                           [(Math/cos step)
                                            (Math/sin step)
                                            (* 0.75
                                               (Math/sin
                                                (* step
                                                   (or displacement-freq-two
                                                       3))))])
                                     :ring [(Math/cos step)
                                            (Math/sin step)
                                            0]
                                     :fxrand-ring [(Math/cos step)
                                                   (Math/sin step)
                                                   (fxrand -0.75 0.75)]
                                     :fxrand (u/genv 3 (fxrand -1 1))
                                     :unipolar (u/genv 3 (fxrand))
                                     :unipolar-wavy
                                     (mapv (comp #(-> %
                                                      (* 0.5)
                                                      (+ 0.5))
                                                 #(* %
                                                     (-> (Math/sin
                                                          (* step
                                                             (or displacement-freq-one
                                                                 7)))
                                                         (* 0.5)
                                                         (+ 0.5)
                                                         (* 0.1)
                                                         (+ 0.9))))
                                           [(Math/cos step)
                                            (Math/sin step)
                                            (* 0.75
                                               (Math/sin
                                                (* step
                                                   (or displacement-freq-two
                                                       3))))]))
                                   (u/genv 3 (fxrand -1 1)))))
                             (range size))]
    {:adjacency-matrix matrix
     :edges edges
     :node-positions node-positions}))
