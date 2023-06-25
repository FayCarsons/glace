(ns clouds.bvh)

(defrecord AABB [position size]
  Object
  (subdivide [this]))

(defrecord Bvh-node [AABB left-child right-child is-leaf? index]
  Object
  ([this]))

(defn create-root []
  (Bvh-node. [1 1 1] [0 0 0] nil nil false 0))