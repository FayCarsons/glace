(ns clouds.chunks
  (:require [sprog.util :as u]
            [sprog.iglu.chunks.raytracing]
            [sprog.iglu.core :refer [combine-chunks]]))

(def plane-intersection 
  '{:functions 
    {intersect-plane 
     {([Ray vec3 float] float)
      ([ray normal depth]
       (/ (- (+ (dot ray.pos normal)
                depth))
          (dot ray.dir normal)))}}})

(def AABB-intersection 
  '{:functions 
    {max-element
     {([vec3] float)
      ([v]
       (max v.x (max v.y v.z)))}
     min-element
     {([vec3] float)
      ([v]
       (min v.x (min v.y v.z)))}
     ;add t (distance) arg, for pruning
     ;see https://www.shadertoy.com/view/tl3XRN
     intersect-aabb
     {([Ray vec3 vec3 float] bool)
      ([ray box-min box-max current-distance]
       (=vec3 inverted-dir (/ ray.dir))
       (=vec3 t1 (* (- box-min ray.pos)
                    inverted-dir))
       (=vec3 t2 (* (- box-max ray.pos)
                    inverted-dir))
       (=vec3 min-vec (min t1 t2))
       (=vec3 max-vec (max t1 t2))
       (=float t-min (max-element min-vec))
       (=float t-max (min-element max-vec))
       (&& (>= t-max 0)
           (<= t-min t-max)
           (<= t-min current-distance)))}}})

;Moller et Trumbore "Fast, Minimum storage ray-triangle intersection"
(def triangle-chunk 
  '{:structs 
    {Triangle 
     [v1 vec3
      v2 vec3 
      v3 vec3]}})

(def triangle-intersection-chunk 
  '{:functions
    {intersect-triangle
     {([Ray Triangle Record] Record)
      ([ray  tri rec]
       (=vec3 e1 (- tri.v2 tri.v1))
       (=vec3 e2 (- tri.v3 tri.v1))
       (= rec.normal (cross e1 e2))
       (=float determinant (- (dot ray.dir rec.normal)))
       (=float inv-det (/ determinant))
       (=vec3 AO (- ray.pos tri.v1))
       (=vec3 DAO (cross ray.dir AO))
       ;what are u and v ? they are outs in original
       (=float u (* (dot e2 DAO)
                    inv-det))
       (=float v (* (- (dot e1 DAO))
                    inv-det))
       (=float t (* (dot AO rec.normal)
                    inv-det))
       (&& (>= determinant 1e-6)
           (>= t 0)
           (>= u 0)
           (>= v 0)
           (<= (+ u v) 1)))}}})

(def worley-chunk
  (u/unquotable
   '{:functions
     {worley-noise
      {([vec3] float)
       ([pos]
        (=vec3 id (floor pos))
        (=vec3 p (fract pos))

        (=float min-dist 10000)

        (=vec3 h (vec3 0))
        (=vec3 d (vec3 0))
        #_~worley-unroll-expression

        ("for (float x = min(-1.0,(frame - 1.0)); x <= 1.0; ++x)"
         ("for (float y = min(-1.0,(frame - 1.0)); y <= 1.0; ++y)"
          ("for (float z = min(-1.0,frame - 1.0); z <= 1.0; ++z)"
           (=vec3 offset (vec3 x y z))
           (=vec3 h (rand-pcg (+ id offset)))
           (+= h offset)
           (=vec3 d (- p h))
           (= min-dist (min min-dist (dot d d))))))

        min-dist)}}}))

(def raymarch-chunk
  {:macros
   {'raymarch
    (fn [ray
         & [{:keys [sdf-name
                    step-factor
                    max-steps
                    termination-threshold
                    max-distance]
             :or {sdf-name 'sdf
                  step-factor 1
                  max-steps 1024
                  termination-threshold 0.0001
                  max-distance 1024}}]]
      (let [fn-name (gensym 'march)]
        (u/unquotable
         '{:chunk
           {:functions
            {~fn-name
             {([Ray] float)
              ([ray]
               (=float d 0)
               (~(str "for(int i=0;i<" max-steps ";i++)")
                (=float distance-estimate
                        (~sdf-name (+ ray.pos 
                                      (* d 
                                         ray.dir))))
                ("if" (< distance-estimate
                         ~termination-threshold)
                      (return d))
                (+= d (* distance-estimate
                         ~step-factor))
                ("if" (|| (> d ~max-distance)
                          (< (abs distance-estimate)
                             ~termination-threshold))
                      "break"))
               d)}}}
           :expression ~(list fn-name ray)})))}})