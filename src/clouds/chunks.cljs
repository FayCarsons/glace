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