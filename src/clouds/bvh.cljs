(ns clouds.bvh
  (:require [sprog.util :as u]

            [clouds.materials :refer [default-record
                                      diffuse-material]]
            [clouds.sphere-packing :refer [Sphere]]
            [clojure.zip :refer [zipper path end? next branch?]]))

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

(defn uni->bi [coords]
  (mapv (partial u/scale 0 1 -1 1)
        coords))

;AABB
(defn create-AABB [min max]
  {:min min 
   :max max})

(defn get-extent [{:keys [min max]}]
  (mapv - max min))

(defn get-max-axis [extent]
  (last (sort-by extent (range (count extent)))))

(defn get-split-position [{:keys [min max]} axis primitives]
  (let [axis-positions (map (fn [sphere]
                              (nth sphere.position axis))
                            primitives)]
    (nth (sort axis-positions)
         (Math/floor (/ (count axis-positions) 2)))))

(defn create-bvh [AABB primitives & [left-child right-child]]
  {:AABB AABB
   :left-child left-child
   :right-child right-child
   :primitives primitives})

(defn parent? [{:keys [left-child right-child]}]
  (or left-child
       right-child))

(def leaf? (complement parent?))

(defn update-bounds [{:keys [primitives] :as bvh}]
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
  (reduce (fn [[left right] sphere]
            (if (<= (nth sphere.position axis)
                    split-position)
              [(conj left sphere) right]
              [left (conj right sphere)]))
          [[] []]
          primitives))

(defn subdivide [{:keys [AABB primitives] :as bvh}]
  (let [bound-min (:min AABB)
        bound-max (:max AABB)
        extent (get-extent AABB)
        axis (get-max-axis extent)
        split-position (get-split-position AABB
                                           axis
                                           primitives)
        [left right]
        (partition-primitives bvh
                              split-position
                              axis)]
    (when-not (or (zero? (count left))
                  (zero? (count right)))
      [(create-bvh (create-AABB bound-min
                                (replace-nth bound-max axis split-position))
                   left)
       (create-bvh (create-AABB (replace-nth bound-min axis split-position)
                                bound-max)
                   right)])))

(defn construct [bvh max-primitives]
  (let [new-bvh (update-bounds bvh)
        [left right] (subdivide new-bvh)]
    (if (and left
             right)
      (create-bvh (:AABB new-bvh)
                  []
                  (if (> (count (:primitives left))
                         max-primitives)
                    (construct left max-primitives)
                    (update-bounds left))
                  (if (> (count (:primitives right))
                         max-primitives)
                    (construct right max-primitives)
                    (update-bounds right)))
      new-bvh)))

;DFS algorithms
(defn get-depth [root]
  (loop [depth 0
         current (zipper map?
                         (fn [{:keys [left-child
                                      right-child]}]
                           (list left-child right-child))
                         (fn [branch [left-child right-child]]
                           (-> branch
                               (assoc :left-child left-child)
                               (assoc :right-child right-child)))
                         root)]
    (if (end? current)
      depth
      (recur (if (branch? current)
               depth
               (-> current
                   path
                   count
                   (max depth)))
             (next current)))))

;Processing BVH for consumption by Kudzu
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

(defn- organize-primitives
  "nodes must be flat!" 
  [flat-nodes]
  (reduce (fn [{:keys [current-nodes current-primitives]} node]
            (if (leaf? node)
              {:current-primitives (vec (concat current-primitives
                                                (mapv (fn [primitive]
                                                        (-> primitive
                                                            (update  :position uni->bi)
                                                            (update :radius (partial * 2))))
                                                      (:primitives node))))
               :current-nodes (conj current-nodes
                                    (let [start-idx (count current-primitives)
                                          end-idx (+ start-idx
                                                     (dec (count (:primitives node))))]
                                      (-> node
                                          (assoc :first-primitive start-idx)
                                          (assoc :last-primitive end-idx)
                                          (dissoc :primitives))))}
              {:current-nodes (conj current-nodes
                                    (dissoc node :primitives))
               :current-primitives current-primitives}))
          {:current-primitives []
           :current-nodes []}
          flat-nodes))

(defn- flatten-children
  "find children & replace w indices of children in flat node vector"
  [flat-nodes]
  (mapv (fn [{:keys [left-child right-child] :as node}]
          (if (or left-child
                  right-child)
            (-> node
                (update :left-child
                        #(index-of %
                                   flat-nodes))
                (update :right-child
                        #(index-of %
                                   flat-nodes)))
            node))
        flat-nodes))

;origin from (max + min) / 2
;size from (max - min) / 2

(defn- nodes->struct
  [flat-nodes]
  (u/unquotable
   (let []
     (mapv (fn [node]
             (let [{:keys [min max]} (:AABB node)
                   scale-min (uni->bi min)
                   scale-max (uni->bi max)
                   {:keys [left-child right-child
                           first-primitive last-primitive]}
                   node]
               (if (leaf? node)
                 '(Node
                   ~(cons 'vec3 scale-min)
                   ~(cons 'vec3 scale-max)
                   [int "2" ["-1" "-1"]]
                   ~(str first-primitive)
                   ~(str last-primitive))
                 '(Node
                   ~(cons 'vec3 scale-min)
                   ~(cons 'vec3 scale-max)
                   [int "2"
                    [~(str left-child)
                     ~(str right-child)]]
                   "-1"
                   "-1"))))
           flat-nodes))))

(defn get-bvh [primitives max-primitives-in-leaf & {:keys [min max]
                                                    :or {min [0 0 0]
                                                         max [1 1 1]}}]
  (let [root (create-bvh (create-AABB min max)
                         primitives)
        bvh (construct root max-primitives-in-leaf)
        depth (get-depth bvh)

        flat-bvh (flatten-bvh bvh)
        pruned-bvh (flatten-children flat-bvh)
        {:keys [current-nodes
                current-primitives]}
        (organize-primitives pruned-bvh)
        structs (nodes->struct current-nodes)]
    {:bvh current-nodes
     :depth depth
     :structs structs
     :primitives current-primitives}))

(defn create-bvh-traversal-chunk [depth structs]
  (u/unquotable
   (let [node-array-size (str (count structs))
         stack-size (u/log (str depth))]
     '{:structs
       {Node
        [min vec3
         max vec3
         children [int "2"]
         primitive-start int
         primitive-end int]}
       :functions
       {hit-world
        {([Ray] Record)
         ([ray]
          (=Record record ~default-record)
          (= [Node ~node-array-size]
             nodes
             [Node
              ~node-array-size
              ~structs])
          (=Node root [nodes "0"])
          (=int steps-taken "0")
          (=int max-depth "0")
          ("if" (intersect-aabb ray root.min root.max 0xFFFFFFFF)
                (= [int ~stack-size]
                   index-stack
                   [int ~stack-size
                    ~(vec
                      (repeat depth
                              "0"))])
                (= [int ~stack-size]
                   child-position-stack
                   [int ~stack-size
                    ~(vec
                      (repeat depth
                              "0"))])
                (=int top "0")
                ("while"
                 true
                 (+= steps-taken "1")
                 ;break if tree has been traversed
                 ("if" (< top "0") "break")
                 (= max-depth (max top max-depth))
                 (=int child-position [child-position-stack top])
                 ("if" (== child-position "2")
                       ;go back up the tree
                       (= [child-position-stack top] "0")
                       (-= top "1"))
                 ("else"
                  ;continue traversal
                  (+= [child-position-stack top] "1")
                  (=Node node [nodes [index-stack top]])
                  ("if" (== node.primitive-start "-1")
                        (=int child-index [node.children child-position])
                        (=Node child-node [nodes child-index])
                        ("if" (intersect-aabb ray
                                              child-node.min
                                              child-node.max
                                              record.distance)

                              (+= top "1")
                              (= [index-stack top] child-index)))
                  ("else"
                   (=Node node [nodes [index-stack top]])
                   (=int start node.primitive-start)
                   (=int end node.primitive-end)

                   ("for(int i=start;i<=end;i++)"
                    (=vec4 sp [sphere-array i])
                    (=float dist (.x (findSphereIntersections ray sp.xyz sp.w)))
                    ("if" (&& (> dist 0)
                              (< dist record.distance))
                          (= record.hit true)
                          (= record.distance dist)
                          (= record.point (ray-at ray record.distance))
                          (= record.normal (normalize (- record.point
                                                         sp.xyz)))
                          (= record.material (Material :lambertian
                                                       (vec3 0.999)
                                                       (vec3 0.04)
                                                       (vec3 0)
                                                       0.5
                                                       1))))))))
          (= Debug (-> (vec3 (/ 1 record.distance)
                             (* 0.1 (/ (float steps-taken) ~(* depth 3)))
                             #_(if (> max-depth ~(str depth)) 0.99 0)
                             (* 0.1 (/ (float max-depth) ~depth)))
                       (* 0xFFFFFFFF)
                       (uvec4 0)))
          record)}}})))