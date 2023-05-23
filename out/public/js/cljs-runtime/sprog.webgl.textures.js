goog.provide('sprog.webgl.textures');
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.textures !== 'undefined') && (typeof sprog.webgl.textures.framebuffer_map_atom !== 'undefined')){
} else {
sprog.webgl.textures.framebuffer_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.textures.get_framebuffer = (function sprog$webgl$textures$get_framebuffer(gl,textures){
var temp__5802__auto__ = (function (){var G__43832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,textures], null);
var fexpr__43831 = cljs.core.deref(sprog.webgl.textures.framebuffer_map_atom);
return (fexpr__43831.cljs$core$IFn$_invoke$arity$1 ? fexpr__43831.cljs$core$IFn$_invoke$arity$1(G__43832) : fexpr__43831.call(null,G__43832));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var framebuffer = temp__5802__auto__;
return framebuffer;
} else {
var framebuffer = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);

var seq__43833_44005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,textures,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__43834_44006 = null;
var count__43835_44007 = (0);
var i__43836_44008 = (0);
while(true){
if((i__43836_44008 < count__43835_44007)){
var vec__43846_44010 = chunk__43834_44006.cljs$core$IIndexed$_nth$arity$2(null,i__43836_44008);
var texture_44011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43846_44010,(0),null);
var index_44012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43846_44010,(1),null);
if(cljs.core.vector_QMARK_(texture_44011)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_44012),cljs.core.first(texture_44011),(0),cljs.core.second(texture_44011));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_44012),gl.TEXTURE_2D,texture_44011,(0));
}


var G__44013 = seq__43833_44005;
var G__44014 = chunk__43834_44006;
var G__44015 = count__43835_44007;
var G__44016 = (i__43836_44008 + (1));
seq__43833_44005 = G__44013;
chunk__43834_44006 = G__44014;
count__43835_44007 = G__44015;
i__43836_44008 = G__44016;
continue;
} else {
var temp__5804__auto___44017 = cljs.core.seq(seq__43833_44005);
if(temp__5804__auto___44017){
var seq__43833_44018__$1 = temp__5804__auto___44017;
if(cljs.core.chunked_seq_QMARK_(seq__43833_44018__$1)){
var c__5565__auto___44019 = cljs.core.chunk_first(seq__43833_44018__$1);
var G__44021 = cljs.core.chunk_rest(seq__43833_44018__$1);
var G__44022 = c__5565__auto___44019;
var G__44023 = cljs.core.count(c__5565__auto___44019);
var G__44024 = (0);
seq__43833_44005 = G__44021;
chunk__43834_44006 = G__44022;
count__43835_44007 = G__44023;
i__43836_44008 = G__44024;
continue;
} else {
var vec__43858_44025 = cljs.core.first(seq__43833_44018__$1);
var texture_44026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858_44025,(0),null);
var index_44027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858_44025,(1),null);
if(cljs.core.vector_QMARK_(texture_44026)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_44027),cljs.core.first(texture_44026),(0),cljs.core.second(texture_44026));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_44027),gl.TEXTURE_2D,texture_44026,(0));
}


var G__44029 = cljs.core.next(seq__43833_44018__$1);
var G__44030 = null;
var G__44031 = (0);
var G__44032 = (0);
seq__43833_44005 = G__44029;
chunk__43834_44006 = G__44030;
count__43835_44007 = G__44031;
i__43836_44008 = G__44032;
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
var len__5766__auto___44033 = arguments.length;
var i__5767__auto___44034 = (0);
while(true){
if((i__5767__auto___44034 < len__5766__auto___44033)){
args__5772__auto__.push((arguments[i__5767__auto___44034]));

var G__44035 = (i__5767__auto___44034 + (1));
i__5767__auto___44034 = G__44035;
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

return gl.drawBuffers(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43868_SHARP_){
return (gl.COLOR_ATTACHMENT0 + p1__43868_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(textures))));
}));

(sprog.webgl.textures.target_textures_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.target_textures_BANG_.cljs$lang$applyTo = (function (seq43869){
var G__43870 = cljs.core.first(seq43869);
var seq43869__$1 = cljs.core.next(seq43869);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43870,seq43869__$1);
}));

sprog.webgl.textures.set_tex_parameters = (function sprog$webgl$textures$set_tex_parameters(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44036 = arguments.length;
var i__5767__auto___44037 = (0);
while(true){
if((i__5767__auto___44037 < len__5766__auto___44036)){
args__5772__auto__.push((arguments[i__5767__auto___44037]));

var G__44038 = (i__5767__auto___44037 + (1));
i__5767__auto___44037 = G__44038;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture,filter_mode,wrap_mode,p__43883){
var vec__43884 = p__43883;
var three_d_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43884,(0),null);
var texture_target = (cljs.core.truth_(three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
gl.bindTexture(texture_target,texture);

var gl_filter_mode_44039 = (function (){var fexpr__43890 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linear","linear",872268697),gl.LINEAR,new cljs.core.Keyword(null,"nearest","nearest",1176353890),gl.NEAREST], null);
return (fexpr__43890.cljs$core$IFn$_invoke$arity$1 ? fexpr__43890.cljs$core$IFn$_invoke$arity$1(filter_mode) : fexpr__43890.call(null,filter_mode));
})();
gl.texParameteri(texture_target,gl.TEXTURE_MIN_FILTER,gl_filter_mode_44039);

gl.texParameteri(texture_target,gl.TEXTURE_MAG_FILTER,gl_filter_mode_44039);

var wrap_mode__GT_gl_enum = (function (mode){
var G__43894 = mode;
var G__43894__$1 = (((G__43894 instanceof cljs.core.Keyword))?G__43894.fqn:null);
switch (G__43894__$1) {
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
var vec__43891 = ((cljs.core.coll_QMARK_(wrap_mode))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(wrap_mode__GT_gl_enum,wrap_mode):cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(wrap_mode__GT_gl_enum(wrap_mode)));
var gl_wrap_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43891,(0),null);
var gl_wrap_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43891,(1),null);
var gl_wrap_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43891,(2),null);
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
(sprog.webgl.textures.set_tex_parameters.cljs$lang$applyTo = (function (seq43876){
var G__43877 = cljs.core.first(seq43876);
var seq43876__$1 = cljs.core.next(seq43876);
var G__43878 = cljs.core.first(seq43876__$1);
var seq43876__$2 = cljs.core.next(seq43876__$1);
var G__43879 = cljs.core.first(seq43876__$2);
var seq43876__$3 = cljs.core.next(seq43876__$2);
var G__43880 = cljs.core.first(seq43876__$3);
var seq43876__$4 = cljs.core.next(seq43876__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43877,G__43878,G__43879,G__43880,seq43876__$4);
}));

sprog.webgl.textures.create_tex = (function sprog$webgl$textures$create_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44043 = arguments.length;
var i__5767__auto___44044 = (0);
while(true){
if((i__5767__auto___44044 < len__5766__auto___44043)){
args__5772__auto__.push((arguments[i__5767__auto___44044]));

var G__44045 = (i__5767__auto___44044 + (1));
i__5767__auto___44044 = G__44045;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture_type,resolution,p__43914){
var vec__43915 = p__43914;
var map__43918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43915,(0),null);
var map__43918__$1 = cljs.core.__destructure_map(map__43918);
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43918__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43918__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349));
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43918__$1,new cljs.core.Keyword(null,"channels","channels",1132759174),(4));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43918__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var three_d_QMARK_ = (((!(typeof resolution === 'number'))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(resolution),(3))));
var texture_target = ((three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
var tex = gl.createTexture(texture_target);
gl.bindTexture(texture_target,tex);

var internal_format_44046 = (function (){var G__43930 = (channels - (1));
var fexpr__43929 = (function (){var fexpr__43934 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R8,gl.RG8,gl.RGB8,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R16UI,gl.RG16UI,gl.RGB16UI,gl.RGBA16UI], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R32UI,gl.RG32UI,gl.RGB32UI,gl.RGBA32UI], null)], null);
return (fexpr__43934.cljs$core$IFn$_invoke$arity$1 ? fexpr__43934.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__43934.call(null,texture_type));
})();
return (fexpr__43929.cljs$core$IFn$_invoke$arity$1 ? fexpr__43929.cljs$core$IFn$_invoke$arity$1(G__43930) : fexpr__43929.call(null,G__43930));
})();
var format_44047 = (function (){var G__43940 = (channels - (1));
var fexpr__43939 = (function (){var fexpr__43941 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED,gl.RG,gl.RGB,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null)], null);
return (fexpr__43941.cljs$core$IFn$_invoke$arity$1 ? fexpr__43941.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__43941.call(null,texture_type));
})();
return (fexpr__43939.cljs$core$IFn$_invoke$arity$1 ? fexpr__43939.cljs$core$IFn$_invoke$arity$1(G__43940) : fexpr__43939.call(null,G__43940));
})();
var webgl_type_44048 = (function (){var fexpr__43947 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),gl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"u16","u16",-818464124),gl.UNSIGNED_SHORT,new cljs.core.Keyword(null,"u32","u32",1815761749),gl.UNSIGNED_INT], null);
return (fexpr__43947.cljs$core$IFn$_invoke$arity$1 ? fexpr__43947.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__43947.call(null,texture_type));
})();
if(three_d_QMARK_){
var vec__43948_44054 = resolution;
var width_44055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948_44054,(0),null);
var height_44056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948_44054,(1),null);
var depth_44057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43948_44054,(2),null);
gl.texImage3D(gl.TEXTURE_3D,(0),internal_format_44046,width_44055,height_44056,depth_44057,(0),format_44047,webgl_type_44048,data);
} else {
var vec__43955_44058 = ((typeof resolution === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolution,resolution], null):resolution);
var width_44059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43955_44058,(0),null);
var height_44060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43955_44058,(1),null);
gl.texImage2D(gl.TEXTURE_2D,(0),internal_format_44046,width_44059,height_44060,(0),format_44047,webgl_type_44048,data);
}

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
(sprog.webgl.textures.create_tex.cljs$lang$applyTo = (function (seq43905){
var G__43906 = cljs.core.first(seq43905);
var seq43905__$1 = cljs.core.next(seq43905);
var G__43907 = cljs.core.first(seq43905__$1);
var seq43905__$2 = cljs.core.next(seq43905__$1);
var G__43908 = cljs.core.first(seq43905__$2);
var seq43905__$3 = cljs.core.next(seq43905__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43906,G__43907,G__43908,seq43905__$3);
}));

sprog.webgl.textures.delete_tex = (function sprog$webgl$textures$delete_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44061 = arguments.length;
var i__5767__auto___44062 = (0);
while(true){
if((i__5767__auto___44062 < len__5766__auto___44061)){
args__5772__auto__.push((arguments[i__5767__auto___44062]));

var G__44063 = (i__5767__auto___44062 + (1));
i__5767__auto___44062 = G__44063;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,textures){
var seq__43963 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.flatten(textures)));
var chunk__43964 = null;
var count__43965 = (0);
var i__43966 = (0);
while(true){
if((i__43966 < count__43965)){
var tex = chunk__43964.cljs$core$IIndexed$_nth$arity$2(null,i__43966);
gl.deleteTexture(tex);


var G__44064 = seq__43963;
var G__44065 = chunk__43964;
var G__44066 = count__43965;
var G__44067 = (i__43966 + (1));
seq__43963 = G__44064;
chunk__43964 = G__44065;
count__43965 = G__44066;
i__43966 = G__44067;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43963);
if(temp__5804__auto__){
var seq__43963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43963__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43963__$1);
var G__44068 = cljs.core.chunk_rest(seq__43963__$1);
var G__44069 = c__5565__auto__;
var G__44070 = cljs.core.count(c__5565__auto__);
var G__44071 = (0);
seq__43963 = G__44068;
chunk__43964 = G__44069;
count__43965 = G__44070;
i__43966 = G__44071;
continue;
} else {
var tex = cljs.core.first(seq__43963__$1);
gl.deleteTexture(tex);


var G__44072 = cljs.core.next(seq__43963__$1);
var G__44073 = null;
var G__44074 = (0);
var G__44075 = (0);
seq__43963 = G__44072;
chunk__43964 = G__44073;
count__43965 = G__44074;
i__43966 = G__44075;
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
(sprog.webgl.textures.delete_tex.cljs$lang$applyTo = (function (seq43961){
var G__43962 = cljs.core.first(seq43961);
var seq43961__$1 = cljs.core.next(seq43961);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43962,seq43961__$1);
}));

sprog.webgl.textures.tex_data_array = (function sprog$webgl$textures$tex_data_array(gl,texture,texture_type,size){
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([texture], 0));

var vec__43979 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?size:null)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43979,(3),null);
var array = (function (){var G__43982 = texture_type;
var G__43982__$1 = (((G__43982 instanceof cljs.core.Keyword))?G__43982.fqn:null);
switch (G__43982__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43982__$1)].join('')));

}
})();
var G__43985_44077 = texture_type;
var G__43985_44078__$1 = (((G__43985_44077 instanceof cljs.core.Keyword))?G__43985_44077.fqn:null);
switch (G__43985_44078__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43985_44078__$1)].join('')));

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
var len__5766__auto___44080 = arguments.length;
var i__5767__auto___44083 = (0);
while(true){
if((i__5767__auto___44083 < len__5766__auto___44080)){
args__5772__auto__.push((arguments[i__5767__auto___44083]));

var G__44086 = (i__5767__auto___44083 + (1));
i__5767__auto___44083 = G__44086;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,element_or_id,p__43989){
var vec__43990 = p__43989;
var map__43993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43990,(0),null);
var map__43993__$1 = cljs.core.__destructure_map(map__43993);
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43993__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43993__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"linear","linear",872268697));
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);

sprog.webgl.textures.set_tex_parameters(gl,texture,filter_mode,wrap_mode);

sprog.webgl.textures.copy_html_image_data_BANG_(gl,texture,element_or_id);

return texture;
}));

(sprog.webgl.textures.html_image_tex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.textures.html_image_tex.cljs$lang$applyTo = (function (seq43986){
var G__43987 = cljs.core.first(seq43986);
var seq43986__$1 = cljs.core.next(seq43986);
var G__43988 = cljs.core.first(seq43986__$1);
var seq43986__$2 = cljs.core.next(seq43986__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43987,G__43988,seq43986__$2);
}));

sprog.webgl.textures.create_webcam_video_element = (function sprog$webgl$textures$create_webcam_video_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44087 = arguments.length;
var i__5767__auto___44088 = (0);
while(true){
if((i__5767__auto___44088 < len__5766__auto___44087)){
args__5772__auto__.push((arguments[i__5767__auto___44088]));

var G__44089 = (i__5767__auto___44088 + (1));
i__5767__auto___44088 = G__44089;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic = (function (callback,p__43996){
var vec__43997 = p__43996;
var map__44000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43997,(0),null);
var map__44000__$1 = cljs.core.__destructure_map(map__44000);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44000__$1,new cljs.core.Keyword(null,"width","width",-384071477),(1024));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44000__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1024));
var brightness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44000__$1,new cljs.core.Keyword(null,"brightness","brightness",1067055820),(2));
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
(sprog.webgl.textures.create_webcam_video_element.cljs$lang$applyTo = (function (seq43994){
var G__43995 = cljs.core.first(seq43994);
var seq43994__$1 = cljs.core.next(seq43994);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43995,seq43994__$1);
}));

sprog.webgl.textures.max_tex_size = (function sprog$webgl$textures$max_tex_size(gl){
return gl.getParameter(gl.MAX_TEXTURE_SIZE);
});

//# sourceMappingURL=sprog.webgl.textures.js.map
