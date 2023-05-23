goog.provide('sprog.webgl.canvas');
sprog.webgl.canvas.create_gl_canvas = (function sprog$webgl$canvas$create_gl_canvas(){
var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl2");
(canvas.style.position = "absolute");

document.body.appendChild(canvas);

return gl;
});
sprog.webgl.canvas.maximize_gl_canvas = (function sprog$webgl$canvas$maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30943 = arguments.length;
var i__5767__auto___30944 = (0);
while(true){
if((i__5767__auto___30944 < len__5766__auto___30943)){
args__5772__auto__.push((arguments[i__5767__auto___30944]));

var G__30945 = (i__5767__auto___30944 + (1));
i__5767__auto___30944 = G__30945;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__30901){
var map__30906 = p__30901;
var map__30906__$1 = cljs.core.__destructure_map(map__30906);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30906__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var canvas = gl.canvas;
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var max_resolution = gl.getParameter(gl.MAX_TEXTURE_SIZE);
var vec__30912 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,Math.floor((function (){var x__5131__auto__ = pixel_ratio;
var y__5132__auto__ = (max_resolution / (function (){var x__5128__auto__ = raw_width;
var y__5129__auto__ = raw_height;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_width,raw_height], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30912,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30912,(1),null);
(style.left = (0));

(style.top = (0));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_width),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_height),"px"].join(''));

(canvas.width = width);

return (canvas.height = height);
}));

(sprog.webgl.canvas.maximize_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.canvas.maximize_gl_canvas.cljs$lang$applyTo = (function (seq30887){
var G__30888 = cljs.core.first(seq30887);
var seq30887__$1 = cljs.core.next(seq30887);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30888,seq30887__$1);
}));

sprog.webgl.canvas.square_maximize_gl_canvas = (function sprog$webgl$canvas$square_maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30946 = arguments.length;
var i__5767__auto___30947 = (0);
while(true){
if((i__5767__auto___30947 < len__5766__auto___30946)){
args__5772__auto__.push((arguments[i__5767__auto___30947]));

var G__30948 = (i__5767__auto___30947 + (1));
i__5767__auto___30947 = G__30948;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.canvas.square_maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.canvas.square_maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__30930){
var map__30931 = p__30930;
var map__30931__$1 = cljs.core.__destructure_map(map__30931);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30931__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var canvas = gl.canvas;
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var raw_size = (function (){var x__5131__auto__ = raw_width;
var y__5132__auto__ = raw_height;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var max_resolution = gl.getParameter(gl.MAX_TEXTURE_SIZE);
var size = (raw_size * Math.floor((function (){var x__5131__auto__ = pixel_ratio;
var y__5132__auto__ = (max_resolution / raw_size);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})()));
(style.left = ((raw_width - raw_size) * 0.5));

(style.top = ((raw_height - raw_size) * 0.5));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(canvas.width = size);

return (canvas.height = size);
}));

(sprog.webgl.canvas.square_maximize_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.canvas.square_maximize_gl_canvas.cljs$lang$applyTo = (function (seq30928){
var G__30929 = cljs.core.first(seq30928);
var seq30928__$1 = cljs.core.next(seq30928);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30929,seq30928__$1);
}));

sprog.webgl.canvas.save_image = (function sprog$webgl$canvas$save_image(gl,name){
return gl.canvas.toBlob((function (blob){
var a = document.createElement("a");
document.body.appendChild(a);

var url_30951 = window.URL.createObjectURL(blob);
(a.href = url_30951);

(a.download = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join(''));

a.click();

return document.body.removeChild(a);
}));
});

//# sourceMappingURL=sprog.webgl.canvas.js.map
