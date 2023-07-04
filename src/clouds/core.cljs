(ns clouds.core
  (:require
   [clouds.shaders :as s]
   [clouds.config :as c]
   [sprog.util :as u]
   [clojure.string :as str]
   [sprog.webgl.core :refer [start-sprog!
                             sprog-context
                             sprog-state
                             merge-sprog-state!]]
   [sprog.input.keyboard :refer [add-key-callback]]
   [sprog.dom.canvas :refer [maximize-canvas
                             resize-gl-canvas
                             canvas-resolution]]
   [sprog.webgl.shaders :refer [run-purefrag-shader!]]
   [sprog.webgl.textures :refer [create-tex]]
   [sprog.tools.math :refer [cross normalize magnitude]]
   [fxrng.rng :refer [fxrand]]
   [sprog.input.mouse :refer [mouse-pos mouse-down?]]))



(def render? (atom true))
(add-watch render? nil
           (fn [_ _ _ new]
             (u/log "rendering: " new)))

(defonce bilateral? (atom false))
(add-watch bilateral? nil 
           (fn [_ _ _ new]
             (u/log "bilateral: " new)))

(defn expand-canvas [gl]
  (maximize-canvas gl.canvas {:max-pixel-ratio 0.5}))

(defn set-resolution [gl]
  (let [manual-resolution (vec
                           (doall
                            (map parse-long
                                 (str/split (.get (js/URLSearchParams.
                                                   js/window.location.search)
                                                  "resolution")
                                            "x"))))]
    (if (every? some? manual-resolution)
      (do (resize-gl-canvas gl
                            manual-resolution)
          manual-resolution)
      (do (maximize-canvas gl.canvas {:square? true})
          (canvas-resolution gl)))))

(defn get-camera [camera-position look-at]
  (let [cw (normalize (map - look-at camera-position))
        cu (normalize (cross cw c/up))
        cv (normalize (cross cu cw))]
    [cu
     cv
     cw]))

(defn get-skybox! [gl resolution]
  (let [tex (create-tex gl :u32 resolution)]
    (run-purefrag-shader! gl
                          s/worley-frag
                          resolution
                          {"size" resolution}
                          {:target tex})
    tex))

(defn trace! [{:keys [gl
                      resolution
                      frame
                      ray-pos-texs
                      accumulation-texs
                      attenuation-texs
                      ray-dir-texs
                      color-texs
                      ray-meta-texs
                      worley-tex
                      camera-matrix
                      debug-tex]
               :as state}]
  (if @render?
    (let [[front-pos-tex back-pos-tex] ray-pos-texs
          [front-dir-tex back-dir-tex] ray-dir-texs
          [front-color-tex back-color-tex] color-texs
          [front-accumulation-tex back-accumulation-tex] accumulation-texs
          [front-attenuation-tex back-attenuation-tex] attenuation-texs
          [front-meta-tex back-meta-tex] ray-meta-texs]
      (run-purefrag-shader! gl
                            s/trace-frag
                            resolution
                            {"size" resolution
                             "frame" frame
                             "rand-offset" (u/genv 3 (- (rand 2000)
                                                        1000))

                             "ray-pos-tex" front-pos-tex
                             "ray-dir-tex" front-dir-tex
                             "color-tex" front-color-tex
                             "accumulation-tex" front-accumulation-tex
                             "attenuation-tex" front-attenuation-tex
                             "ray-meta-tex" front-meta-tex

                             "skybox" worley-tex
                             "camera" (vec (flatten camera-matrix))

                             "sphere-array" c/sphere-array}
                            {:target [back-color-tex
                                      back-pos-tex
                                      back-dir-tex
                                      back-accumulation-tex
                                      back-attenuation-tex
                                      back-meta-tex
                                      debug-tex]})
      (-> state
          (update :color-texs reverse)
          (update :ray-pos-texs reverse)
          (update :ray-dir-texs reverse)
          (update :accumulation-texs reverse)
          (update :attenuation-texs reverse)
          (update :ray-meta-texs reverse)))
    state))

(defn render! [{:keys [gl resolution 
                       worley-tex 
                       accumulation-texs
                       debug-tex] :as state}]
  (run-purefrag-shader! gl
                        s/render-frag
                        resolution
                        {"size" resolution
                         "skybox" worley-tex
                         "final" (first accumulation-texs)
                         "debug" debug-tex})
  state)

(defn update-page! [{:keys [] :as state}]
  (-> state
      trace!
      render!
      (update :frame inc)
      (dissoc :trace?)))

(defn init-page! [gl]
  (expand-canvas gl)
  (let [resolution (canvas-resolution gl)]
    {:gl gl
     :frame 0
     :resolution resolution
     :camera-matrix (get-camera c/cam-pos c/look-at)
     :debug-tex (create-tex gl :u32 resolution)
     :worley-tex (get-skybox! gl resolution) 
     :color-texs (u/genv 2 (create-tex gl :u32 resolution))
     :accumulation-texs (u/genv 2 (create-tex gl :u32 resolution))
     :attenuation-texs (u/genv 2 (create-tex gl :u32 resolution))
     :ray-meta-texs (u/genv 2  (create-tex gl :u32 resolution))
     :ray-pos-texs (u/genv 2 (create-tex gl :u32 resolution))
     :ray-dir-texs (u/genv 2 (create-tex gl :u32 resolution))}))

(defn init []
  
  (start-sprog! init-page! update-page!))

(defn ^:dev/after-load restart! []
  (js/document.body.removeChild (.-canvas (sprog-context)))
  (init))

(defn pre-init []
  (js/eval "(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()")
  (add-key-callback "r"
                    (fn []
                      (swap! render? not)))
  (add-key-callback "b"
                    (fn []
                      (swap! bilateral? not)))
  (js/window.addEventListener "load" (fn [_] (init))))