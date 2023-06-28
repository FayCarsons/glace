(ns clouds.bvh
  (:require [sprog.util :as u]
            [clouds.sphere-packing :refer [Sphere
                                           map->Sphere]]
            [clojure.walk :refer [prewalk]]))



(defn replace-nth
  "vector only replace nth element"
  [coll index new-val]
  (assoc coll index new-val))

(defrecord AABB [min max]
  Object
  (get-extent [this]
    (doall (mapv - this.max this.min)))
  (max-axis [_ extent]
    (last (sort-by extent (range (count extent))))))

(defrecord Bvh-node [AABB left-child right-child primitives]
  Object
  (leaf? [this] (or this.left-child
                    this.right-child))
  (shrink [this]
    (u/log "shrink!")
    (let [bounds
          (mapv (fn [dim]
                  (mapv (fn [[min-or-max minus-or-plus]]
                          (apply min-or-max
                                 (mapv (fn [sphere]
                                         (minus-or-plus (nth sphere.position dim)
                                                        sphere.radius))
                                       primitives)))
                        [[min -]
                         [max +]]))
                (range 3))
          bound-min (mapv first bounds)
          bound-max (mapv last bounds)]
      (->Bvh-node (->AABB bound-min
                          bound-max)
                  this.left-child
                  this.right-child
                  primitives)))
  (get-split-plane [this extent axis]
    (u/log "get split plane!")
    (-> this.AABB.min
        (nth axis)
        (+ (nth extent axis))
        (* 0.5)))
  (partition-primitives [this axis split-position]
    (u/log "partition primitives!")
    (reduce (fn [{:keys [left right]} sphere]
              (if (< (nth sphere.position axis)
                     split-position)
                {:left (conj left sphere)
                 :right right}
                {:left left
                 :right (conj right sphere)}))
            {:left []
             :right []}
            this.primitives))
  (subdivide [this]
    (u/log "subdivide!")
    (let [extent (u/log "extent: " (.get-extent this.AABB))
          axis (u/log "max axis: " (.max-axis this.AABB
                                              extent))
          split-position (u/log "split position: "
                                (.get-split-plane this
                                                  extent
                                                  axis))
          {:keys [left right]}
          (.partition-primitives this
                                 axis
                                 split-position)]
      (u/log "subdivision result: "
             (when-not (or (zero? (count left))
                           (zero? (count right)))
               [(->Bvh-node (->AABB this.AABB.min (replace-nth this.AABB.max axis split-position))
                            nil
                            nil
                            left)
                (->Bvh-node (->AABB (replace-nth this.AABB.min axis split-position)
                                    this.AABB.max)
                            nil
                            nil
                            right)]))))
  (construct [this max-primitives]
    (let [shrunk-node (.shrink this)
          [left right] (.subdivide shrunk-node)]
      (when (and left
                 right)
        (->Bvh-node shrunk-node.AABB
                    (if (> (count left.primitives)
                           max-primitives)
                      (.construct left max-primitives)
                      left)
                    (if (> (count right.primitives)
                           max-primitives)
                      (.construct right max-primitives)
                      right)
                    [])))))

(defn construct-bvh [primitives
                     max-primitives-in-leaf
                     & {:keys [min max]
                        :or {min [0 0 0]
                             max [1 1 1]}}]
  (let [root (Bvh-node. (AABB. min max)
                        nil
                        nil
                        primitives)]
    (.construct root max-primitives-in-leaf)))

;TODO change indexing so nodes know where their children are 
;- ella says implement indexOf, compare original BVH and flattened
;create primitive array with contiguous sections
(defn deconstruct-bvh
  "depth first search - fix indexing"
  [root]
  (js/alert "deconstruct-bvh is fucked! fix it!")
  (loop [index 0
         stack [root]
         visited []]
    (if (zero? (count stack))
      visited
      (let [current (peek stack)]
        (recur (inc index)
               (vec
                (filter identity
                        (conj (butlast stack)
                              current.left-child
                              current.right-child)))
               (conj visited
                     (merge (update (select-keys current [:AABB :primitives])
                                    :AABB
                                    #(vector (:min %) (:max %)))
                            {:index index})))))))
;origin from (max + min) / 2
;size from (max - min) / 2
(defn AABB->box [nodes]
  (map (fn [node]
         (update node
                 :AABB
                 (fn [[min max]]
                   {:origin (mapv #(/ (+ %1 %2) 2)
                                  max
                                  min)
                    :size (mapv #(/ (- %1 %2) 2)
                                max
                                min)})))
       nodes))

(defn nodes->struct "fucked! see TODO^"
  [nodes]
  (u/unquotable
   (map (fn [node]
          (let [[pos size] (:AABB node)
                {:keys [left-child right-child
                        first-primitive last-primitive]}
                node]
            (if-not (or (:left-child node)
                        (:right-child node))
              '(Node
                ~pos
                ~size
                ~(cons 'ivec2 (repeat 2 "-1"))
                ~first-primitive
                ~last-primitive)
              '(Node
                ~pos
                ~size
                ~(cons 'ivec2 (list left-child right-child))
                "-1"
                "-1")))
          (sort-by :index nodes)))))

(def bvh-chunk
  '{:structs
    {Node
     [pos vec3
      size vec3
      Nodes [int "2"]
      primitive-start int
      primitive-end int]}})

