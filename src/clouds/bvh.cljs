(ns clouds.bvh
  (:require [sprog.util :as u]
            [clouds.sphere-packing :refer [Sphere
                                           map->Sphere]]
            [clojure.walk :refer [prewalk]]))



(defn replace-nth
  "vector only, replace nth element"
  [coll index new-val]
  (assoc coll index new-val))

(defn index-of [x coll]
  (let [pred #{x}]
    (first
     (keep-indexed (fn [idx x]
                     (when (pred x)
                       idx))
                   coll))))

(defrecord AABB [min max]
  Object
  (get-extent [this]
    (mapv - this.max this.min))
  (max-axis [_ extent]
    (last (sort-by extent (range (count extent))))))

;AABB
(defn create-AABB [min max]
  {:min min 
   :max max})

(defn get-extent [{:keys [min max]}]
  (mapv - max min))

(defn get-max-axis [extent]
  (last (sort-by extent (range (count extent)))))

(defn get-split-position [{:keys [min]} extent axis]
  (-> min
      (nth axis)
      (+ (nth extent
              axis))
      (* 0.5)))

(defn create-bvh [AABB primitives & {:keys [left-child right-child]}]
  {:AABB AABB 
   :left-child nil 
   :right-child nil 
   :primitives primitives})

(defn parent? [{:keys [left-child right-child]}]
  (and left-child
       right-child))

(def leaf? (complement parent?))

(defn update-bounds [{:keys [primitives] :as bvh}]
  (u/log "update-bounds!")
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
    (merge bvh {:AABB {:min bound-min
                       :max bound-max}})))

(defn partition-primitives [{:keys [primitives]} split-position axis]
  (reduce (fn [{:keys [left right]} sphere]
            (if (< (nth sphere.position axis)
                   split-position)
              {:left (conj left sphere)
               :right right}
              {:left left
               :right (conj right sphere)}))
          {:left []
           :right []}))

(defn subdivide [{:keys [AABB primitives] :as bvh} ]
  (let [bound-min (:min AABB)
        bound-max (:max AABB)
        extent (u/log "extent: " (get-extent AABB))
        axis (u/log "max axis: " (get-max-axis extent))
        split-position (u/log "split position: "
                              (get-split-position AABB
                                                  extent
                                                  axis))
        {:keys [left right]}
        (partition-primitives primitives
                              split-position
                              axis)]
    (when-not (or (zero? (count left))
                  (zero? (count right)))
      [{:AABB (create-AABB bound-min
                           (replace-nth bound-max axis split-position))
        :primitives left}
       {:AABB (create-AABB (replace-nth bound-min axis split-position)
                           bound-max)
        :primitives right}])))

(defn construct [bvh max-primitives]
  (let [bvh (update-bounds bvh)
        [left right] (subdivide bvh)]
    (when (and left
               right)
      (create-bvh (:AABB bvh)
                  []
                  {:left-child (if (> (count (:primitives left))
                                      max-primitives)
                                 (construct left max-primitives)
                                 left)
                   :right-child (if (> (count (:primitives right))
                                       max-primitives)
                                  (construct right max-primitives)
                                  right)}))))

(defrecord Bvh-node [AABB left-child right-child primitives]
  Object
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
                     right)])))
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
                    []))))
  (get-depth [this]
             (loop [stack [this]
                    depth 0
                    current-max 0]
               (if (empty? stack)
                 current-max
                 (let [current (peek stack)]
                   (recur (vec
                           (filter identity
                                   (conj (butlast stack)
                                         (:right-child current)
                                         (:left-child current))))
                          (inc depth)
                          (if (leaf? current)
                            (max current-max depth)
                            current-max)))))))

(defn- construct-bvh [primitives
                     max-primitives-in-leaf
                     & {:keys [min max]
                        :or {min [0 0 0]
                             max [1 1 1]}}]
  (let [root (Bvh-node. (AABB. min max)
                        nil
                        nil
                        primitives)]
    (.construct root max-primitives-in-leaf)))

(defn- flatten-bvh [root]
  (loop [stack [root]
         visited []]
    (if (empty? stack)
      visited
      (let [current (peek stack)]
        (recur (vec
                (filter identity
                        (conj (butlast stack)
                              (:right-child current)
                              (:left-child current))))
               (conj visited
                     current))))))

;TODO 
;create primitive array with contiguous sections
(defn- organize-primitives
  "nodes must be flat!"
  [flat-nodes]
  (reduce (fn [{:keys [nodes primitives]} node]
            (if (leaf? node)
              {:primitives (vec (concat primitives node.primitives))
               :nodes (conj nodes
                            (let [start-idx (count primitives)
                                  end-idx (+ start-idx
                                             (count (:primitives node)))]
                              (-> node
                                  (assoc :first-primitive start-idx)
                                  (assoc :last-primitive end-idx)
                                  (dissoc :primitives))))}
              {:nodes (conj nodes
                              (dissoc node :primitives))
               :primitives primitives}))
          {:primitives []
           :nodes []}
          flat-nodes))

(defn- flatten-children
  "dfs find children & replace w indices of children 
   nodes must be flattened!"
  [flat-nodes]
  (mapv (fn [node]
          (if (and node.left-child
                   node.right-child)
            (-> node
                (update :left-child
                        (u/log #(u/log "index of left child"
                                       (index-of %
                                                 flat-nodes))))
                (update :right-child
                        #(u/log "index of right child"
                                (index-of %
                                          flat-nodes))))
            node))
        flat-nodes))

;origin from (max + min) / 2
;size from (max - min) / 2

(defn- nodes->struct
  [flat-nodes]
  (u/unquotable
   (map (fn [node]
          (let [{:keys [min max]} (:AABB node)
                {:keys [left-child right-child
                        first-primitive last-primitive]}
                node]
            (if (leaf? node)
              '(Node
                ~min
                ~max
                ~(cons 'ivec2 (repeat 2 "-1"))
                ~first-primitive
                ~last-primitive)
              '(Node
                ~min
                ~max
                ~(cons 'ivec2 (list left-child right-child))
                "-1"
                "-1"))))
        flat-nodes)))

(defn get-bvh [primitives max-primitives-in-leaf & options]
  (let [bvh (construct-bvh primitives max-primitives-in-leaf options)
        depth (.get-depth bvh)
        {:keys [nodes primitives]}
        (-> bvh
            flatten-bvh 
            flatten-children
            organize-primitives)
        structs (nodes->struct nodes)
        size (str (count structs))
        array-declaration
        (u/unquotable
         '(= [Node ~size]
             nodes
             '[Node
               ~size
               ~structs]))]
    {:nodes nodes
     :primitives primitives
     :depth depth
     :array-declaration array-declaration}))

(defn create-bvh-traversal-chunk [depth node-array-expression]
  (u/unquotable
   (let [size (str depth)]
     '{:structs
       {Node
        [pos vec3
         size vec3
         Nodes [int "2"]
         primitive-start int
         primitive-end int]}
       :functions
       {traverse
        {([Ray Record] Record)
         ([ray record]
          ~node-array-expression
          (= [int ~size]
             stack
             [int ~size
              ~(vec
                (repeat depth
                        "0"))])
          (=int top "-1"))}}})))