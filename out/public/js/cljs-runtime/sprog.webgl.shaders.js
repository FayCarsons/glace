goog.provide('sprog.webgl.shaders');
sprog.webgl.shaders.create_shader = (function sprog$webgl$shaders$create_shader(gl,shader_type,source_glsl){
var shader = gl.createShader((function (){var or__5043__auto__ = (function (){var fexpr__30948 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frag","frag",1474317943),gl.FRAGMENT_SHADER,new cljs.core.Keyword(null,"vert","vert",-360932977),gl.VERTEX_SHADER], null);
return (fexpr__30948.cljs$core$IFn$_invoke$arity$1 ? fexpr__30948.cljs$core$IFn$_invoke$arity$1(shader_type) : fexpr__30948.call(null,shader_type));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return shader_type;
}
})());
gl.shaderSource(shader,source_glsl);

gl.compileShader(shader);

if(cljs.core.truth_(gl.getShaderParameter(shader,gl.COMPILE_STATUS))){
return shader;
} else {
sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var lines = clojure.string.split_lines(source_glsl);
var digit_count = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(lines))).length);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__30944_SHARP_,p2__30943_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((digit_count + (1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30943_SHARP_),(new cljs.core.List(null,":",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")], 0)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30944_SHARP_)].join('');
}),lines,cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
})()], 0));

throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(shader))));
}
});
sprog.webgl.shaders.create_program = (function sprog$webgl$shaders$create_program(gl,vert_shader,frag_shader){
var program = gl.createProgram();
gl.attachShader(program,vert_shader);

gl.attachShader(program,frag_shader);

gl.linkProgram(program);

if(cljs.core.truth_(gl.getProgramParameter(program,gl.LINK_STATUS))){
return program;
} else {
throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(program))));
}
});
sprog.webgl.shaders.create_sprog = (function sprog$webgl$shaders$create_sprog(gl,vert_source,frag_source){
var vert_glsl = ((typeof vert_source === 'string')?vert_source:sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(vert_source));
var frag_glsl = ((typeof frag_source === 'string')?frag_source:sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(frag_source));
var program = sprog.webgl.shaders.create_program(gl,sprog.webgl.shaders.create_shader(gl,new cljs.core.Keyword(null,"vert","vert",-360932977),vert_glsl),sprog.webgl.shaders.create_shader(gl,new cljs.core.Keyword(null,"frag","frag",1474317943),frag_glsl));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniform-locations-atom","uniform-locations-atom",-1081551033),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"uniform-type-map","uniform-type-map",-1681076371),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30951_SHARP_){
return cljs.core.vec(cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(p1__30951_SHARP_,/uniform\s+/,""),/\s+/)));
}),cljs.core.re_seq(/uniform\s+[A-Za-z0-9\[\]]+\s+[A-Za-z0-9_]+/,[vert_glsl,"\n",frag_glsl].join(''))))], null);
});
sprog.webgl.shaders.purefrag_vert_glsl = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(sprog.iglu.chunks.misc.trivial_vert_source);
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_vert_pos_bojs_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_vert_pos_bojs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.purefrag_vert_pos_boj = (function sprog$webgl$shaders$purefrag_vert_pos_boj(gl){
if(cljs.core.not((function (){var fexpr__30959 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__30959.cljs$core$IFn$_invoke$arity$1 ? fexpr__30959.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__30959.call(null,gl));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom,cljs.core.assoc,gl,sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1),(3),(3),(-1)], null))))], null)], 0)));
} else {
}

var fexpr__30960 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__30960.cljs$core$IFn$_invoke$arity$1 ? fexpr__30960.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__30960.call(null,gl));
});
sprog.webgl.shaders.create_purefrag_sprog = (function sprog$webgl$shaders$create_purefrag_sprog(gl,frag_source){
var sprog__$1 = sprog.webgl.shaders.create_sprog(gl,sprog.webgl.shaders.purefrag_vert_glsl,frag_source);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,"vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl));

return sprog__$1;
});
sprog.webgl.shaders.use_sprog_BANG_ = (function sprog$webgl$shaders$use_sprog_BANG_(gl,p__30973,uniform_map,attribute_map){
var map__30974 = p__30973;
var map__30974__$1 = cljs.core.__destructure_map(map__30974);
var sprog__$1 = map__30974__$1;
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30974__$1,new cljs.core.Keyword(null,"program","program",781564284));
gl.useProgram(program);

sprog.webgl.uniforms.set_sprog_uniforms_BANG_(gl,sprog__$1,uniform_map);

return sprog.webgl.attributes.set_sprog_attributes_BANG_(gl,sprog__$1,attribute_map);
});
sprog.webgl.shaders.run_sprog_BANG_ = (function sprog$webgl$shaders$run_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31023 = arguments.length;
var i__5767__auto___31024 = (0);
while(true){
if((i__5767__auto___31024 < len__5766__auto___31023)){
args__5772__auto__.push((arguments[i__5767__auto___31024]));

var G__31025 = (i__5767__auto___31024 + (1));
i__5767__auto___31024 = G__31025;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,attribute_map,start,length,p__30983){
var vec__30984 = p__30983;
var map__30987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30984,(0),null);
var map__30987__$1 = cljs.core.__destructure_map(map__30987);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30987__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
if(cljs.core.coll_QMARK_(target)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.textures.target_textures_BANG_,gl),target);
} else {
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target], 0));
}
} else {
sprog.webgl.textures.target_screen_BANG_(gl);
}

var vec__30988 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?cljs.core.vec(size):null)));
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988,(0),null);
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988,(3),null);
gl.viewport(offset_x,offset_y,width,height);

sprog.webgl.shaders.use_sprog_BANG_(gl,sprog__$1,uniform_map,attribute_map);

return gl.drawArrays(gl.TRIANGLES,start,length);
}));

(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$applyTo = (function (seq30975){
var G__30976 = cljs.core.first(seq30975);
var seq30975__$1 = cljs.core.next(seq30975);
var G__30977 = cljs.core.first(seq30975__$1);
var seq30975__$2 = cljs.core.next(seq30975__$1);
var G__30978 = cljs.core.first(seq30975__$2);
var seq30975__$3 = cljs.core.next(seq30975__$2);
var G__30979 = cljs.core.first(seq30975__$3);
var seq30975__$4 = cljs.core.next(seq30975__$3);
var G__30980 = cljs.core.first(seq30975__$4);
var seq30975__$5 = cljs.core.next(seq30975__$4);
var G__30981 = cljs.core.first(seq30975__$5);
var seq30975__$6 = cljs.core.next(seq30975__$5);
var G__30982 = cljs.core.first(seq30975__$6);
var seq30975__$7 = cljs.core.next(seq30975__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30976,G__30977,G__30978,G__30979,G__30980,G__30981,G__30982,seq30975__$7);
}));

sprog.webgl.shaders.run_purefrag_sprog_BANG_ = (function sprog$webgl$shaders$run_purefrag_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31031 = arguments.length;
var i__5767__auto___31032 = (0);
while(true){
if((i__5767__auto___31032 < len__5766__auto___31031)){
args__5772__auto__.push((arguments[i__5767__auto___31032]));

var G__31034 = (i__5767__auto___31032 + (1));
i__5767__auto___31032 = G__31034;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,p__30996){
var vec__30997 = p__30996;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30997,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog__$1,size,uniform_map,new cljs.core.PersistentArrayMap(null, 1, ["vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl)], null),(0),(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$applyTo = (function (seq30991){
var G__30992 = cljs.core.first(seq30991);
var seq30991__$1 = cljs.core.next(seq30991);
var G__30993 = cljs.core.first(seq30991__$1);
var seq30991__$2 = cljs.core.next(seq30991__$1);
var G__30994 = cljs.core.first(seq30991__$2);
var seq30991__$3 = cljs.core.next(seq30991__$2);
var G__30995 = cljs.core.first(seq30991__$3);
var seq30991__$4 = cljs.core.next(seq30991__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30992,G__30993,G__30994,G__30995,seq30991__$4);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_autosprog = (function sprog$webgl$shaders$get_autosprog(gl,shader_sources){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_sources], null);
var temp__5802__auto__ = (function (){var fexpr__31000 = cljs.core.deref(sprog.webgl.shaders.autosprog_cache_atom);
return (fexpr__31000.cljs$core$IFn$_invoke$arity$1 ? fexpr__31000.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31000.call(null,autosprog_key));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var autosprog = temp__5802__auto__;
return autosprog;
} else {
var autosprog = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.shaders.create_sprog,gl),shader_sources);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.autosprog_cache_atom,cljs.core.assoc,autosprog_key,autosprog);

return autosprog;
}
});
sprog.webgl.shaders.run_shaders_BANG_ = (function sprog$webgl$shaders$run_shaders_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31037 = arguments.length;
var i__5767__auto___31038 = (0);
while(true){
if((i__5767__auto___31038 < len__5766__auto___31037)){
args__5772__auto__.push((arguments[i__5767__auto___31038]));

var G__31039 = (i__5767__auto___31038 + (1));
i__5767__auto___31038 = G__31039;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sources,size,uniform_map,attribute_map,start,length,p__31009){
var vec__31010 = p__31009;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31010,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_autosprog(gl,sources),size,uniform_map,attribute_map,start,length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$applyTo = (function (seq31001){
var G__31002 = cljs.core.first(seq31001);
var seq31001__$1 = cljs.core.next(seq31001);
var G__31003 = cljs.core.first(seq31001__$1);
var seq31001__$2 = cljs.core.next(seq31001__$1);
var G__31004 = cljs.core.first(seq31001__$2);
var seq31001__$3 = cljs.core.next(seq31001__$2);
var G__31005 = cljs.core.first(seq31001__$3);
var seq31001__$4 = cljs.core.next(seq31001__$3);
var G__31006 = cljs.core.first(seq31001__$4);
var seq31001__$5 = cljs.core.next(seq31001__$4);
var G__31007 = cljs.core.first(seq31001__$5);
var seq31001__$6 = cljs.core.next(seq31001__$5);
var G__31008 = cljs.core.first(seq31001__$6);
var seq31001__$7 = cljs.core.next(seq31001__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31002,G__31003,G__31004,G__31005,G__31006,G__31007,G__31008,seq31001__$7);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_purefrag_autosprog = (function sprog$webgl$shaders$get_purefrag_autosprog(gl,shader_source){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_source], null);
var temp__5802__auto__ = (function (){var fexpr__31013 = cljs.core.deref(sprog.webgl.shaders.purefrag_autosprog_cache_atom);
return (fexpr__31013.cljs$core$IFn$_invoke$arity$1 ? fexpr__31013.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31013.call(null,autosprog_key));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var autosprog = temp__5802__auto__;
return autosprog;
} else {
var autosprog = sprog.webgl.shaders.create_purefrag_sprog(gl,shader_source);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.purefrag_autosprog_cache_atom,cljs.core.assoc,autosprog_key,autosprog);

return autosprog;
}
});
sprog.webgl.shaders.run_purefrag_shader_BANG_ = (function sprog$webgl$shaders$run_purefrag_shader_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31040 = arguments.length;
var i__5767__auto___31041 = (0);
while(true){
if((i__5767__auto___31041 < len__5766__auto___31040)){
args__5772__auto__.push((arguments[i__5767__auto___31041]));

var G__31042 = (i__5767__auto___31041 + (1));
i__5767__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,source,size,uniform_map,p__31019){
var vec__31020 = p__31019;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31020,(0),null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_purefrag_autosprog(gl,source),size,uniform_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$applyTo = (function (seq31014){
var G__31015 = cljs.core.first(seq31014);
var seq31014__$1 = cljs.core.next(seq31014);
var G__31016 = cljs.core.first(seq31014__$1);
var seq31014__$2 = cljs.core.next(seq31014__$1);
var G__31017 = cljs.core.first(seq31014__$2);
var seq31014__$3 = cljs.core.next(seq31014__$2);
var G__31018 = cljs.core.first(seq31014__$3);
var seq31014__$4 = cljs.core.next(seq31014__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31015,G__31016,G__31017,G__31018,seq31014__$4);
}));


//# sourceMappingURL=sprog.webgl.shaders.js.map
