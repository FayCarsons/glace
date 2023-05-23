(ns clouds.core
  (:require
   [clouds.shaders :as s]
   [clouds.config :as c]
   [clouds.atlas :as a]
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
   [sprog.webgl.shaders :refer [run-purefrag-shader!
                                run-shaders!]]
   [sprog.webgl.textures :refer [create-tex
                                 tex-data-array
                                 html-image-tex]]
   [sprog.input.mouse :refer [mouse-pos mouse-down?]]

   #_[fxrng.rng :refer [fxrand
                      fxrand-int]]))

(defn expand-canvas [gl]
  (maximize-canvas gl.canvas {:max-pixel-ratio 2
                              :square? false}))

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

(defn get-volumetric-data! [{:keys [gl frame volumetric-data-tex] :as state}]
  (when (== frame 0)
    (let [tex-size [c/atlas-tex-size c/atlas-tex-size]]
      (run-purefrag-shader! gl
                            a/atlas-frag
                            tex-size
                            {"size" tex-size}
                            {:target volumetric-data-tex})))
  state)

(defn trace! [{:keys [gl
                      resolution
                      frame
                      ray-pos-texs
                      accumulation-texs
                      ray-dir-texs
                      color-texs
                      ray-meta-texs
                      trace?]
               :as state}]
  (if true #_(or (zero? frame)
          trace?)
    (let [[front-pos-tex back-pos-tex] ray-pos-texs
          [front-dir-tex back-dir-tex] ray-dir-texs
          [front-color-tex back-color-tex] color-texs
          [front-accumulation-tex back-accumulation-tex] accumulation-texs
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
                             "ray-meta-tex" front-meta-tex}
                            {:target [back-color-tex
                                      back-pos-tex
                                      back-dir-tex
                                      back-accumulation-tex
                                      back-meta-tex]})
      (-> state
          (update :color-texs reverse)
          (update :ray-pos-texs reverse)
          (update :ray-dir-texs reverse)
          (update :accumulation-texs reverse)
          (update :ray-meta-texs reverse)))
    state))

(defn render! [{:keys [gl resolution 
                       volumetric-data-tex 
                       accumulation-texs] :as state}]
  (run-purefrag-shader! gl 
                        s/render-frag 
                        resolution 
                        {"size" resolution
                         "atlas" volumetric-data-tex
                         "final" (first accumulation-texs)
                         "now" (u/seconds-since-startup)})
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
     :volumetric-data-tex (create-tex gl :u32 c/atlas-tex-size)
     :color-texs (u/genv 2 (create-tex gl :u32 resolution))
     :accumulation-texs (u/genv 2 (create-tex gl :u32 resolution))
     :ray-meta-texs (u/genv 2  (create-tex gl :u32 resolution)) 
     :ray-pos-texs (u/genv 2 (create-tex gl :u32 resolution))
     :ray-dir-texs (u/genv 2 (create-tex gl :u32 resolution))}))

(defn init []
  (add-key-callback "t" #(do (u/log "gey")
                             (merge-sprog-state! {:trace? true})))
  (start-sprog! init-page! update-page!))

(defn ^:dev/after-load restart! []
  (js/document.body.removeChild (.-canvas (sprog-context)))
  (init))

(defn pre-init []
  (js/window.addEventListener "load" (fn [_] (init))))