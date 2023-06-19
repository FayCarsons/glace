goog.provide('sprog.dom.canvas');
sprog.dom.canvas.get_context = (function sprog$dom$canvas$get_context(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31114 = arguments.length;
var i__5767__auto___31115 = (0);
while(true){
if((i__5767__auto___31115 < len__5766__auto___31114)){
args__5772__auto__.push((arguments[i__5767__auto___31115]));

var G__31116 = (i__5767__auto___31115 + (1));
i__5767__auto___31115 = G__31116;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.get_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.get_context.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,options){
return canvas.getContext("webgl2",(cljs.core.truth_(options)?cljs.core.clj__GT_js(options):null));
}));

(sprog.dom.canvas.get_context.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.get_context.cljs$lang$applyTo = (function (seq30998){
var G__30999 = cljs.core.first(seq30998);
var seq30998__$1 = cljs.core.next(seq30998);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30999,seq30998__$1);
}));

sprog.dom.canvas.create_context = (function sprog$dom$canvas$create_context(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31125 = arguments.length;
var i__5767__auto___31126 = (0);
while(true){
if((i__5767__auto___31126 < len__5766__auto___31125)){
args__5772__auto__.push((arguments[i__5767__auto___31126]));

var G__31127 = (i__5767__auto___31126 + (1));
i__5767__auto___31126 = G__31127;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.create_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.create_context.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__31012){
var map__31013 = p__31012;
var map__31013__$1 = cljs.core.__destructure_map(map__31013);
var append_to_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31013__$1,new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438));
var preserve_drawing_buffer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31013__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693));
var stencil_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31013__$1,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248));
var canvas = document.createElement("canvas");
var gl = sprog.dom.canvas.get_context.cljs$core$IFn$_invoke$arity$variadic(canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, ["preserveDrawingBuffer",cljs.core.boolean$(preserve_drawing_buffer_QMARK_),"stencil",cljs.core.boolean$(stencil_QMARK_)], null)], 0));
(canvas.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

if(cljs.core.truth_(append_to_body_QMARK_)){
(canvas.style.position = "absolute");

document.body.appendChild(canvas);
} else {
}

return gl;
}));

(sprog.dom.canvas.create_context.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.create_context.cljs$lang$applyTo = (function (seq31005){
var G__31006 = cljs.core.first(seq31005);
var seq31005__$1 = cljs.core.next(seq31005);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31006,seq31005__$1);
}));

sprog.dom.canvas.maximize_canvas = (function sprog$dom$canvas$maximize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31129 = arguments.length;
var i__5767__auto___31130 = (0);
while(true){
if((i__5767__auto___31130 < len__5766__auto___31129)){
args__5772__auto__.push((arguments[i__5767__auto___31130]));

var G__31131 = (i__5767__auto___31130 + (1));
i__5767__auto___31130 = G__31131;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__31037){
var map__31038 = p__31037;
var map__31038__$1 = cljs.core.__destructure_map(map__31038);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31038__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var square_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31038__$1,new cljs.core.Keyword(null,"square?","square?",1383931624));
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
if(cljs.core.truth_(square_QMARK_)){
var raw_size = (function (){var x__5131__auto__ = raw_width;
var y__5132__auto__ = raw_height;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var pixel_ratio__$1 = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var size = (raw_size * pixel_ratio__$1);
(style.left = ((raw_width - raw_size) * 0.5));

(style.top = ((raw_height - raw_size) * 0.5));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(canvas.width = size);

return (canvas.height = size);
} else {
var vec__31048 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,pixel_ratio),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_width,raw_height], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31048,(1),null);
(style.left = (0));

(style.top = (0));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_width),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_height),"px"].join(''));

(canvas.width = width);

return (canvas.height = height);
}
}));

(sprog.dom.canvas.maximize_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.maximize_canvas.cljs$lang$applyTo = (function (seq31027){
var G__31028 = cljs.core.first(seq31027);
var seq31027__$1 = cljs.core.next(seq31027);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31028,seq31027__$1);
}));

sprog.dom.canvas.maximize_gl_canvas = (function sprog$dom$canvas$maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31132 = arguments.length;
var i__5767__auto___31133 = (0);
while(true){
if((i__5767__auto___31133 < len__5766__auto___31132)){
args__5772__auto__.push((arguments[i__5767__auto___31133]));

var G__31134 = (i__5767__auto___31133 + (1));
i__5767__auto___31133 = G__31134;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.dom.canvas.maximize_canvas,gl.canvas),options);
}));

(sprog.dom.canvas.maximize_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.maximize_gl_canvas.cljs$lang$applyTo = (function (seq31059){
var G__31060 = cljs.core.first(seq31059);
var seq31059__$1 = cljs.core.next(seq31059);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31060,seq31059__$1);
}));

sprog.dom.canvas.resize_canvas = (function sprog$dom$canvas$resize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31135 = arguments.length;
var i__5767__auto___31136 = (0);
while(true){
if((i__5767__auto___31136 < len__5766__auto___31135)){
args__5772__auto__.push((arguments[i__5767__auto___31136]));

var G__31137 = (i__5767__auto___31136 + (1));
i__5767__auto___31136 = G__31137;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.dom.canvas.resize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.dom.canvas.resize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,pixel_dimensions,p__31077){
var map__31078 = p__31077;
var map__31078__$1 = cljs.core.__destructure_map(map__31078);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31078__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var vec__31079 = ((typeof pixel_dimensions === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pixel_dimensions,pixel_dimensions], null):pixel_dimensions);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31079,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31079,(1),null);
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var vec__31082 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31066_SHARP_){
return (p1__31066_SHARP_ / pixel_ratio);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var style_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31082,(0),null);
var style_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31082,(1),null);
(style.left = (function (){var x__5128__auto__ = (0);
var y__5129__auto__ = (0.5 * (raw_width - style_width));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());

(style.top = (function (){var x__5128__auto__ = (0);
var y__5129__auto__ = (0.5 * (raw_height - style_height));
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((width / pixel_ratio)),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((height / pixel_ratio)),"px"].join(''));

(canvas.width = width);

return (canvas.height = height);
}));

(sprog.dom.canvas.resize_canvas.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.dom.canvas.resize_canvas.cljs$lang$applyTo = (function (seq31070){
var G__31071 = cljs.core.first(seq31070);
var seq31070__$1 = cljs.core.next(seq31070);
var G__31072 = cljs.core.first(seq31070__$1);
var seq31070__$2 = cljs.core.next(seq31070__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31071,G__31072,seq31070__$2);
}));

sprog.dom.canvas.resize_gl_canvas = (function sprog$dom$canvas$resize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31141 = arguments.length;
var i__5767__auto___31142 = (0);
while(true){
if((i__5767__auto___31142 < len__5766__auto___31141)){
args__5772__auto__.push((arguments[i__5767__auto___31142]));

var G__31143 = (i__5767__auto___31142 + (1));
i__5767__auto___31142 = G__31143;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.dom.canvas.resize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.dom.canvas.resize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,pixel_dimensions,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(sprog.dom.canvas.resize_canvas,gl.canvas,pixel_dimensions),options);
}));

(sprog.dom.canvas.resize_gl_canvas.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.dom.canvas.resize_gl_canvas.cljs$lang$applyTo = (function (seq31093){
var G__31094 = cljs.core.first(seq31093);
var seq31093__$1 = cljs.core.next(seq31093);
var G__31095 = cljs.core.first(seq31093__$1);
var seq31093__$2 = cljs.core.next(seq31093__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31094,G__31095,seq31093__$2);
}));

sprog.dom.canvas.canvas_resolution = (function sprog$dom$canvas$canvas_resolution(gl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
});
sprog.dom.canvas.save_image = (function sprog$dom$canvas$save_image(canvas,name){
return canvas.toBlob((function (blob){
var a = document.createElement("a");
document.body.appendChild(a);

var url_31144 = window.URL.createObjectURL(blob);
(a.href = url_31144);

(a.download = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join(''));

a.click();

return document.body.removeChild(a);
}));
});
sprog.dom.canvas.set_page_background_color = (function sprog$dom$canvas$set_page_background_color(color){
return (document.body.style.backgroundColor = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31108_SHARP_){
var hex = p1__31108_SHARP_.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hex),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
} else {
return hex;
}
}),color)));
});

//# sourceMappingURL=sprog.dom.canvas.js.map
