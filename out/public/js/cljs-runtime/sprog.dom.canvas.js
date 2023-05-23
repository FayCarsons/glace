goog.provide('sprog.dom.canvas');
sprog.dom.canvas.create_gl_canvas = (function sprog$dom$canvas$create_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44143 = arguments.length;
var i__5767__auto___44144 = (0);
while(true){
if((i__5767__auto___44144 < len__5766__auto___44143)){
args__5772__auto__.push((arguments[i__5767__auto___44144]));

var G__44145 = (i__5767__auto___44144 + (1));
i__5767__auto___44144 = G__44145;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__44104){
var map__44105 = p__44104;
var map__44105__$1 = cljs.core.__destructure_map(map__44105);
var append_to_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438));
var preserve_drawing_buffer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693));
var stencil_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248));
var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl2",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["preserveDrawingBuffer",cljs.core.boolean$(preserve_drawing_buffer_QMARK_),"stencil",cljs.core.boolean$(stencil_QMARK_)], null)));
(canvas.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));

if(cljs.core.truth_(append_to_body_QMARK_)){
(canvas.style.position = "absolute");

document.body.appendChild(canvas);
} else {
}

return gl;
}));

(sprog.dom.canvas.create_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.create_gl_canvas.cljs$lang$applyTo = (function (seq44102){
var G__44103 = cljs.core.first(seq44102);
var seq44102__$1 = cljs.core.next(seq44102);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44103,seq44102__$1);
}));

sprog.dom.canvas.maximize_canvas = (function sprog$dom$canvas$maximize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44148 = arguments.length;
var i__5767__auto___44149 = (0);
while(true){
if((i__5767__auto___44149 < len__5766__auto___44148)){
args__5772__auto__.push((arguments[i__5767__auto___44149]));

var G__44150 = (i__5767__auto___44149 + (1));
i__5767__auto___44149 = G__44150;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__44109){
var map__44110 = p__44109;
var map__44110__$1 = cljs.core.__destructure_map(map__44110);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var square_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"square?","square?",1383931624));
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
var vec__44111 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,pixel_ratio),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_width,raw_height], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44111,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44111,(1),null);
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
(sprog.dom.canvas.maximize_canvas.cljs$lang$applyTo = (function (seq44107){
var G__44108 = cljs.core.first(seq44107);
var seq44107__$1 = cljs.core.next(seq44107);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44108,seq44107__$1);
}));

sprog.dom.canvas.maximize_gl_canvas = (function sprog$dom$canvas$maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44151 = arguments.length;
var i__5767__auto___44152 = (0);
while(true){
if((i__5767__auto___44152 < len__5766__auto___44151)){
args__5772__auto__.push((arguments[i__5767__auto___44152]));

var G__44153 = (i__5767__auto___44152 + (1));
i__5767__auto___44152 = G__44153;
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
(sprog.dom.canvas.maximize_gl_canvas.cljs$lang$applyTo = (function (seq44121){
var G__44122 = cljs.core.first(seq44121);
var seq44121__$1 = cljs.core.next(seq44121);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44122,seq44121__$1);
}));

sprog.dom.canvas.resize_canvas = (function sprog$dom$canvas$resize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44154 = arguments.length;
var i__5767__auto___44155 = (0);
while(true){
if((i__5767__auto___44155 < len__5766__auto___44154)){
args__5772__auto__.push((arguments[i__5767__auto___44155]));

var G__44156 = (i__5767__auto___44155 + (1));
i__5767__auto___44155 = G__44156;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.dom.canvas.resize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.dom.canvas.resize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,pixel_dimensions,p__44127){
var map__44128 = p__44127;
var map__44128__$1 = cljs.core.__destructure_map(map__44128);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44128__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var vec__44129 = ((typeof pixel_dimensions === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pixel_dimensions,pixel_dimensions], null):pixel_dimensions);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(1),null);
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var vec__44132 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44123_SHARP_){
return (p1__44123_SHARP_ / pixel_ratio);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var style_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44132,(0),null);
var style_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44132,(1),null);
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
(sprog.dom.canvas.resize_canvas.cljs$lang$applyTo = (function (seq44124){
var G__44125 = cljs.core.first(seq44124);
var seq44124__$1 = cljs.core.next(seq44124);
var G__44126 = cljs.core.first(seq44124__$1);
var seq44124__$2 = cljs.core.next(seq44124__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44125,G__44126,seq44124__$2);
}));

sprog.dom.canvas.resize_gl_canvas = (function sprog$dom$canvas$resize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44157 = arguments.length;
var i__5767__auto___44158 = (0);
while(true){
if((i__5767__auto___44158 < len__5766__auto___44157)){
args__5772__auto__.push((arguments[i__5767__auto___44158]));

var G__44159 = (i__5767__auto___44158 + (1));
i__5767__auto___44158 = G__44159;
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
(sprog.dom.canvas.resize_gl_canvas.cljs$lang$applyTo = (function (seq44135){
var G__44136 = cljs.core.first(seq44135);
var seq44135__$1 = cljs.core.next(seq44135);
var G__44137 = cljs.core.first(seq44135__$1);
var seq44135__$2 = cljs.core.next(seq44135__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44136,G__44137,seq44135__$2);
}));

sprog.dom.canvas.canvas_resolution = (function sprog$dom$canvas$canvas_resolution(gl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
});
sprog.dom.canvas.save_image = (function sprog$dom$canvas$save_image(canvas,name){
return canvas.toBlob((function (blob){
var a = document.createElement("a");
document.body.appendChild(a);

var url_44160 = window.URL.createObjectURL(blob);
(a.href = url_44160);

(a.download = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join(''));

a.click();

return document.body.removeChild(a);
}));
});
sprog.dom.canvas.set_page_background_color = (function sprog$dom$canvas$set_page_background_color(color){
return (document.body.style.backgroundColor = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44142_SHARP_){
var hex = p1__44142_SHARP_.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hex),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
} else {
return hex;
}
}),color)));
});

//# sourceMappingURL=sprog.dom.canvas.js.map
