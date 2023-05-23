(ns clouds.config)

;scene in bounding volume
;light source infinitely far away
;when leaving bounding volume do dot product of ray.dir 
;and dir of sun

;start at pure white - when surface hit multiply surface color by hit object

;skip frag 

(def u32-max (* 0.999 (dec (Math/pow 2 32))))

(def infinity ##Inf)

(def steps-per-sample 1)
(def bounces-per-sample 1)
(def max-bounces 1024)

(def cam-pos (cons 'vec3 [0 0 1]))
(def light-pos (cons 'vec3 [1 0 1]))
(def scatter-radius 0.9)

(def atlas-size 8)
(def atlas-tex-size 204)
(def cloud-extent 100)

(def num-cells 2)
(def perlin-worley-enum 1) ;to alternate between perlin and worley in atlas frag
(def perlin? :perlin)

(def sky-color (cons 'vec3 (mapv #(* % 0.7)
                                 [0.09 0.333 0.81])))


(def cloud-start 0)
(def cloud-end cloud-extent)

(def phi (/ (+ 1
               (Math/sqrt 5))
            2))
