goog.provide('sprog.webgl.textures');
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.textures !== 'undefined') && (typeof sprog.webgl.textures.framebuffer_map_atom !== 'undefined')){
} else {
sprog.webgl.textures.framebuffer_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.textures.get_framebuffer = (function sprog$webgl$textures$get_framebuffer(gl,textures){
var temp__5802__auto__ = (function (){var G__31007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,textures], null);
var fexpr__31006 = cljs.core.deref(sprog.webgl.textures.framebuffer_map_atom);
return (fexpr__31006.cljs$core$IFn$_invoke$arity$1 ? fexpr__31006.cljs$core$IFn$_invoke$arity$1(G__31007) : fexpr__31006.call(null,G__31007));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var framebuffer = temp__5802__auto__;
return framebuffer;
} else {
var framebuffer = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);

var seq__31008_31218 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,textures,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__31009_31219 = null;
var count__31010_31220 = (0);
var i__31011_31221 = (0);
while(true){
if((i__31011_31221 < count__31010_31220)){
var vec__31039_31222 = chunk__31009_31219.cljs$core$IIndexed$_nth$arity$2(null,i__31011_31221);
var texture_31223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31039_31222,(0),null);
var index_31224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31039_31222,(1),null);
if(cljs.core.vector_QMARK_(texture_31223)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_31224),cljs.core.first(texture_31223),(0),cljs.core.second(texture_31223));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_31224),gl.TEXTURE_2D,texture_31223,(0));
}


var G__31225 = seq__31008_31218;
var G__31226 = chunk__31009_31219;
var G__31227 = count__31010_31220;
var G__31228 = (i__31011_31221 + (1));
seq__31008_31218 = G__31225;
chunk__31009_31219 = G__31226;
count__31010_31220 = G__31227;
i__31011_31221 = G__31228;
continue;
} else {
var temp__5804__auto___31229 = cljs.core.seq(seq__31008_31218);
if(temp__5804__auto___31229){
var seq__31008_31230__$1 = temp__5804__auto___31229;
if(cljs.core.chunked_seq_QMARK_(seq__31008_31230__$1)){
var c__5565__auto___31231 = cljs.core.chunk_first(seq__31008_31230__$1);
var G__31232 = cljs.core.chunk_rest(seq__31008_31230__$1);
var G__31233 = c__5565__auto___31231;
var G__31234 = cljs.core.count(c__5565__auto___31231);
var G__31235 = (0);
seq__31008_31218 = G__31232;
chunk__31009_31219 = G__31233;
count__31010_31220 = G__31234;
i__31011_31221 = G__31235;
continue;
} else {
var vec__31050_31236 = cljs.core.first(seq__31008_31230__$1);
var texture_31237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31050_31236,(0),null);
var index_31238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31050_31236,(1),null);
if(cljs.core.vector_QMARK_(texture_31237)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_31238),cljs.core.first(texture_31237),(0),cljs.core.second(texture_31237));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_31238),gl.TEXTURE_2D,texture_31237,(0));
}


var G__31241 = cljs.core.next(seq__31008_31230__$1);
var G__31242 = null;
var G__31243 = (0);
var G__31244 = (0);
seq__31008_31218 = G__31241;
chunk__31009_31219 = G__31242;
count__31010_31220 = G__31243;
i__31011_31221 = G__31244;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.textures.framebuffer_map_atom,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,textures], null),framebuffer);

return framebuffer;
}
});
sprog.webgl.textures.target_screen_BANG_ = (function sprog$webgl$textures$target_screen_BANG_(gl){
return gl.bindFramebuffer(gl.FRAMEBUFFER,null);
});
sprog.webgl.textures.target_textures_BANG_ = (function sprog$webgl$textures$target_textures_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31246 = arguments.length;
var i__5767__auto___31247 = (0);
while(true){
if((i__5767__auto___31247 < len__5766__auto___31246)){
args__5772__auto__.push((arguments[i__5767__auto___31247]));

var G__31248 = (i__5767__auto___31247 + (1));
i__5767__auto___31247 = G__31248;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,textures){
gl.bindFramebuffer(gl.FRAMEBUFFER,sprog.webgl.textures.get_framebuffer(gl,textures));

return gl.drawBuffers(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31058_SHARP_){
return (gl.COLOR_ATTACHMENT0 + p1__31058_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(textures))));
}));

(sprog.webgl.textures.target_textures_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.target_textures_BANG_.cljs$lang$applyTo = (function (seq31059){
var G__31060 = cljs.core.first(seq31059);
var seq31059__$1 = cljs.core.next(seq31059);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31060,seq31059__$1);
}));

sprog.webgl.textures.set_tex_parameters = (function sprog$webgl$textures$set_tex_parameters(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31252 = arguments.length;
var i__5767__auto___31254 = (0);
while(true){
if((i__5767__auto___31254 < len__5766__auto___31252)){
args__5772__auto__.push((arguments[i__5767__auto___31254]));

var G__31255 = (i__5767__auto___31254 + (1));
i__5767__auto___31254 = G__31255;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture,filter_mode,wrap_mode,p__31083){
var vec__31084 = p__31083;
var three_d_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31084,(0),null);
var texture_target = (cljs.core.truth_(three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
gl.bindTexture(texture_target,texture);

var gl_filter_mode_31257 = (function (){var fexpr__31090 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linear","linear",872268697),gl.LINEAR,new cljs.core.Keyword(null,"nearest","nearest",1176353890),gl.NEAREST], null);
return (fexpr__31090.cljs$core$IFn$_invoke$arity$1 ? fexpr__31090.cljs$core$IFn$_invoke$arity$1(filter_mode) : fexpr__31090.call(null,filter_mode));
})();
gl.texParameteri(texture_target,gl.TEXTURE_MIN_FILTER,gl_filter_mode_31257);

gl.texParameteri(texture_target,gl.TEXTURE_MAG_FILTER,gl_filter_mode_31257);

var wrap_mode__GT_gl_enum = (function (mode){
var G__31094 = mode;
var G__31094__$1 = (((G__31094 instanceof cljs.core.Keyword))?G__31094.fqn:null);
switch (G__31094__$1) {
case "clamp":
return gl.CLAMP_TO_EDGE;

break;
case "repeat":
return gl.REPEAT;

break;
case "mirror":
return gl.MIRRORED_REPEAT;

break;
default:
return mode;

}
});
var vec__31091 = ((cljs.core.coll_QMARK_(wrap_mode))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(wrap_mode__GT_gl_enum,wrap_mode):cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(wrap_mode__GT_gl_enum(wrap_mode)));
var gl_wrap_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31091,(0),null);
var gl_wrap_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31091,(1),null);
var gl_wrap_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31091,(2),null);
gl.texParameteri(texture_target,gl.TEXTURE_WRAP_S,gl_wrap_s);

gl.texParameteri(texture_target,gl.TEXTURE_WRAP_T,gl_wrap_t);

if(cljs.core.truth_(three_d_QMARK_)){
return gl.texParameteri(texture_target,gl.TEXTURE_WRAP_R,gl_wrap_r);
} else {
return null;
}
}));

(sprog.webgl.textures.set_tex_parameters.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.textures.set_tex_parameters.cljs$lang$applyTo = (function (seq31073){
var G__31074 = cljs.core.first(seq31073);
var seq31073__$1 = cljs.core.next(seq31073);
var G__31075 = cljs.core.first(seq31073__$1);
var seq31073__$2 = cljs.core.next(seq31073__$1);
var G__31076 = cljs.core.first(seq31073__$2);
var seq31073__$3 = cljs.core.next(seq31073__$2);
var G__31077 = cljs.core.first(seq31073__$3);
var seq31073__$4 = cljs.core.next(seq31073__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31074,G__31075,G__31076,G__31077,seq31073__$4);
}));

sprog.webgl.textures.set_tex_data_BANG_ = (function sprog$webgl$textures$set_tex_data_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31261 = arguments.length;
var i__5767__auto___31263 = (0);
while(true){
if((i__5767__auto___31263 < len__5766__auto___31261)){
args__5772__auto__.push((arguments[i__5767__auto___31263]));

var G__31265 = (i__5767__auto___31263 + (1));
i__5767__auto___31263 = G__31265;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((5) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((5)),(0),null)):null);
return sprog.webgl.textures.set_tex_data_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5773__auto__);
});

(sprog.webgl.textures.set_tex_data_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,tex,texture_type,resolution,data,p__31126){
var vec__31127 = p__31126;
var map__31130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31127,(0),null);
var map__31130__$1 = cljs.core.__destructure_map(map__31130);
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31130__$1,new cljs.core.Keyword(null,"channels","channels",1132759174),(4));
var three_d_QMARK_ = (((!(typeof resolution === 'number'))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(resolution),(3))));
var texture_target = ((three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
gl.bindTexture(texture_target,tex);

var internal_format_31267 = (function (){var G__31134 = (channels - (1));
var fexpr__31133 = (function (){var fexpr__31135 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R8,gl.RG8,gl.RGB8,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R16UI,gl.RG16UI,gl.RGB16UI,gl.RGBA16UI], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R32UI,gl.RG32UI,gl.RGB32UI,gl.RGBA32UI], null)], null);
return (fexpr__31135.cljs$core$IFn$_invoke$arity$1 ? fexpr__31135.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__31135.call(null,texture_type));
})();
return (fexpr__31133.cljs$core$IFn$_invoke$arity$1 ? fexpr__31133.cljs$core$IFn$_invoke$arity$1(G__31134) : fexpr__31133.call(null,G__31134));
})();
var format_31268 = (function (){var G__31138 = (channels - (1));
var fexpr__31137 = (function (){var fexpr__31139 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED,gl.RG,gl.RGB,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null)], null);
return (fexpr__31139.cljs$core$IFn$_invoke$arity$1 ? fexpr__31139.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__31139.call(null,texture_type));
})();
return (fexpr__31137.cljs$core$IFn$_invoke$arity$1 ? fexpr__31137.cljs$core$IFn$_invoke$arity$1(G__31138) : fexpr__31137.call(null,G__31138));
})();
var webgl_type_31270 = (function (){var fexpr__31140 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),gl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"u16","u16",-818464124),gl.UNSIGNED_SHORT,new cljs.core.Keyword(null,"u32","u32",1815761749),gl.UNSIGNED_INT], null);
return (fexpr__31140.cljs$core$IFn$_invoke$arity$1 ? fexpr__31140.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__31140.call(null,texture_type));
})();
if(three_d_QMARK_){
var vec__31141_31280 = resolution;
var width_31281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141_31280,(0),null);
var height_31282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141_31280,(1),null);
var depth_31283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31141_31280,(2),null);
gl.texImage3D(gl.TEXTURE_3D,(0),internal_format_31267,width_31281,height_31282,depth_31283,(0),format_31268,webgl_type_31270,data);
} else {
var vec__31144_31285 = ((typeof resolution === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolution,resolution], null):resolution);
var width_31286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144_31285,(0),null);
var height_31287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31144_31285,(1),null);
gl.texImage2D(gl.TEXTURE_2D,(0),internal_format_31267,width_31286,height_31287,(0),format_31268,webgl_type_31270,data);
}

gl.bindTexture(texture_target,null);

return tex;
}));

(sprog.webgl.textures.set_tex_data_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(sprog.webgl.textures.set_tex_data_BANG_.cljs$lang$applyTo = (function (seq31111){
var G__31112 = cljs.core.first(seq31111);
var seq31111__$1 = cljs.core.next(seq31111);
var G__31113 = cljs.core.first(seq31111__$1);
var seq31111__$2 = cljs.core.next(seq31111__$1);
var G__31114 = cljs.core.first(seq31111__$2);
var seq31111__$3 = cljs.core.next(seq31111__$2);
var G__31115 = cljs.core.first(seq31111__$3);
var seq31111__$4 = cljs.core.next(seq31111__$3);
var G__31116 = cljs.core.first(seq31111__$4);
var seq31111__$5 = cljs.core.next(seq31111__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31112,G__31113,G__31114,G__31115,G__31116,seq31111__$5);
}));

sprog.webgl.textures.create_tex = (function sprog$webgl$textures$create_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31288 = arguments.length;
var i__5767__auto___31289 = (0);
while(true){
if((i__5767__auto___31289 < len__5766__auto___31288)){
args__5772__auto__.push((arguments[i__5767__auto___31289]));

var G__31290 = (i__5767__auto___31289 + (1));
i__5767__auto___31289 = G__31290;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture_type,resolution,p__31154){
var vec__31155 = p__31154;
var map__31158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31155,(0),null);
var map__31158__$1 = cljs.core.__destructure_map(map__31158);
var options = map__31158__$1;
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31158__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349));
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31158__$1,new cljs.core.Keyword(null,"channels","channels",1132759174),(4));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31158__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var three_d_QMARK_ = (((!(typeof resolution === 'number'))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(resolution),(3))));
var texture_target = ((three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
var tex = gl.createTexture(texture_target);
sprog.webgl.textures.set_tex_data_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,tex,texture_type,resolution,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));

gl.bindTexture(texture_target,tex);

sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic(gl,tex,(function (){var or__5043__auto__ = filter_mode;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(texture_type,new cljs.core.Keyword(null,"f8","f8",-2141475484))){
return new cljs.core.Keyword(null,"linear","linear",872268697);
} else {
return new cljs.core.Keyword(null,"nearest","nearest",1176353890);
}
}
})(),wrap_mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([three_d_QMARK_], 0));

gl.bindTexture(texture_target,null);

return tex;
}));

(sprog.webgl.textures.create_tex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sprog.webgl.textures.create_tex.cljs$lang$applyTo = (function (seq31148){
var G__31149 = cljs.core.first(seq31148);
var seq31148__$1 = cljs.core.next(seq31148);
var G__31150 = cljs.core.first(seq31148__$1);
var seq31148__$2 = cljs.core.next(seq31148__$1);
var G__31151 = cljs.core.first(seq31148__$2);
var seq31148__$3 = cljs.core.next(seq31148__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31149,G__31150,G__31151,seq31148__$3);
}));

sprog.webgl.textures.delete_tex = (function sprog$webgl$textures$delete_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31295 = arguments.length;
var i__5767__auto___31296 = (0);
while(true){
if((i__5767__auto___31296 < len__5766__auto___31295)){
args__5772__auto__.push((arguments[i__5767__auto___31296]));

var G__31297 = (i__5767__auto___31296 + (1));
i__5767__auto___31296 = G__31297;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,textures){
var seq__31170 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.flatten(textures)));
var chunk__31171 = null;
var count__31172 = (0);
var i__31173 = (0);
while(true){
if((i__31173 < count__31172)){
var tex = chunk__31171.cljs$core$IIndexed$_nth$arity$2(null,i__31173);
gl.deleteTexture(tex);


var G__31298 = seq__31170;
var G__31299 = chunk__31171;
var G__31300 = count__31172;
var G__31301 = (i__31173 + (1));
seq__31170 = G__31298;
chunk__31171 = G__31299;
count__31172 = G__31300;
i__31173 = G__31301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31170);
if(temp__5804__auto__){
var seq__31170__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31170__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31170__$1);
var G__31302 = cljs.core.chunk_rest(seq__31170__$1);
var G__31303 = c__5565__auto__;
var G__31304 = cljs.core.count(c__5565__auto__);
var G__31305 = (0);
seq__31170 = G__31302;
chunk__31171 = G__31303;
count__31172 = G__31304;
i__31173 = G__31305;
continue;
} else {
var tex = cljs.core.first(seq__31170__$1);
gl.deleteTexture(tex);


var G__31307 = cljs.core.next(seq__31170__$1);
var G__31308 = null;
var G__31309 = (0);
var G__31310 = (0);
seq__31170 = G__31307;
chunk__31171 = G__31308;
count__31172 = G__31309;
i__31173 = G__31310;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.webgl.textures.delete_tex.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.delete_tex.cljs$lang$applyTo = (function (seq31164){
var G__31165 = cljs.core.first(seq31164);
var seq31164__$1 = cljs.core.next(seq31164);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31165,seq31164__$1);
}));

sprog.webgl.textures.tex_data_array = (function sprog$webgl$textures$tex_data_array(gl,texture,texture_type,size){
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([texture], 0));

var vec__31182 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?size:null)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(3),null);
var array = (function (){var G__31185 = texture_type;
var G__31185__$1 = (((G__31185 instanceof cljs.core.Keyword))?G__31185.fqn:null);
switch (G__31185__$1) {
case "f8":
return (new Uint8Array(((width * height) * (4))));

break;
case "u16":
return (new Uint16Array(((width * height) * (4))));

break;
case "u32":
return (new Uint32Array(((width * height) * (4))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31185__$1)].join('')));

}
})();
var G__31186_31329 = texture_type;
var G__31186_31330__$1 = (((G__31186_31329 instanceof cljs.core.Keyword))?G__31186_31329.fqn:null);
switch (G__31186_31330__$1) {
case "f8":
gl.readPixels(x,y,width,height,gl.RGBA,gl.UNSIGNED_BYTE,array);

break;
case "u16":
gl.readPixels(x,y,width,height,gl.RGBA_INTEGER,gl.UNSIGNED_SHORT,array);

break;
case "u32":
gl.readPixels(x,y,width,height,gl.RGBA_INTEGER,gl.UNSIGNED_INT,array);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31186_31330__$1)].join('')));

}

return array;
});
sprog.webgl.textures.copy_html_image_data_BANG_ = (function sprog$webgl$textures$copy_html_image_data_BANG_(gl,tex,element_or_id){
var element = ((typeof element_or_id === 'string')?document.getElementById(element_or_id):element_or_id);
gl.bindTexture(gl.TEXTURE_2D,tex);

return gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,element);
});
sprog.webgl.textures.html_image_tex = (function sprog$webgl$textures$html_image_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31334 = arguments.length;
var i__5767__auto___31335 = (0);
while(true){
if((i__5767__auto___31335 < len__5766__auto___31334)){
args__5772__auto__.push((arguments[i__5767__auto___31335]));

var G__31336 = (i__5767__auto___31335 + (1));
i__5767__auto___31335 = G__31336;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,element_or_id,p__31191){
var vec__31192 = p__31191;
var map__31195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31192,(0),null);
var map__31195__$1 = cljs.core.__destructure_map(map__31195);
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31195__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31195__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"linear","linear",872268697));
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);

sprog.webgl.textures.set_tex_parameters(gl,texture,filter_mode,wrap_mode);

sprog.webgl.textures.copy_html_image_data_BANG_(gl,texture,element_or_id);

return texture;
}));

(sprog.webgl.textures.html_image_tex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.textures.html_image_tex.cljs$lang$applyTo = (function (seq31187){
var G__31188 = cljs.core.first(seq31187);
var seq31187__$1 = cljs.core.next(seq31187);
var G__31189 = cljs.core.first(seq31187__$1);
var seq31187__$2 = cljs.core.next(seq31187__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31188,G__31189,seq31187__$2);
}));

sprog.webgl.textures.create_webcam_video_element = (function sprog$webgl$textures$create_webcam_video_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31339 = arguments.length;
var i__5767__auto___31344 = (0);
while(true){
if((i__5767__auto___31344 < len__5766__auto___31339)){
args__5772__auto__.push((arguments[i__5767__auto___31344]));

var G__31345 = (i__5767__auto___31344 + (1));
i__5767__auto___31344 = G__31345;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic = (function (callback,p__31202){
var vec__31204 = p__31202;
var map__31207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31204,(0),null);
var map__31207__$1 = cljs.core.__destructure_map(map__31207);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31207__$1,new cljs.core.Keyword(null,"width","width",-384071477),(1024));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31207__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1024));
var brightness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31207__$1,new cljs.core.Keyword(null,"brightness","brightness",1067055820),(2));
var media_constraints = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio","audio",1819127321),false,new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"brightness","brightness",1067055820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ideal","ideal",755816607),brightness], null)], null)], null));
var video = document.createElement("video");
return navigator.mediaDevices.getUserMedia(media_constraints).then((function (media_stream){
(video.srcObject = media_stream);

video.setAttribute("playsinline",true);

return (video.onloadedmetadata = (function (e){
video.play();

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(video) : callback.call(null,video));
}));
}));
}));

(sprog.webgl.textures.create_webcam_video_element.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.create_webcam_video_element.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31201,seq31200__$1);
}));

sprog.webgl.textures.max_tex_size = (function sprog$webgl$textures$max_tex_size(gl){
return gl.getParameter(gl.MAX_TEXTURE_SIZE);
});

//# sourceMappingURL=sprog.webgl.textures.js.map
