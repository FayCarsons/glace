goog.provide('sprog.webgl.shaders');
sprog.webgl.shaders.create_shader = (function sprog$webgl$shaders$create_shader(gl,shader_type,source_glsl){
var shader = gl.createShader((function (){var or__5043__auto__ = (function (){var fexpr__31633 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frag","frag",1474317943),gl.FRAGMENT_SHADER,new cljs.core.Keyword(null,"vert","vert",-360932977),gl.VERTEX_SHADER], null);
return (fexpr__31633.cljs$core$IFn$_invoke$arity$1 ? fexpr__31633.cljs$core$IFn$_invoke$arity$1(shader_type) : fexpr__31633.call(null,shader_type));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__31630_SHARP_,p2__31629_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((digit_count + (1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31629_SHARP_),(new cljs.core.List(null,":",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")], 0)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31630_SHARP_)].join('');
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniform-locations-atom","uniform-locations-atom",-1081551033),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"uniform-type-map","uniform-type-map",-1681076371),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31661_SHARP_){
return cljs.core.vec(cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(p1__31661_SHARP_,/uniform\s+/,""),/\s+/)));
}),cljs.core.re_seq(/uniform\s+[A-Za-z0-9\[\]]+\s+[A-Za-z0-9_]+/,[vert_glsl,"\n",frag_glsl].join(''))))], null);
});
sprog.webgl.shaders.purefrag_vert_glsl = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(sprog.iglu.chunks.misc.trivial_vert_source);
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_vert_pos_bojs_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_vert_pos_bojs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.purefrag_vert_pos_boj = (function sprog$webgl$shaders$purefrag_vert_pos_boj(gl){
if(cljs.core.not((function (){var fexpr__31676 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__31676.cljs$core$IFn$_invoke$arity$1 ? fexpr__31676.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__31676.call(null,gl));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom,cljs.core.assoc,gl,sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1),(3),(3),(-1)], null))))], null)], 0)));
} else {
}

var fexpr__31680 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__31680.cljs$core$IFn$_invoke$arity$1 ? fexpr__31680.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__31680.call(null,gl));
});
sprog.webgl.shaders.create_purefrag_sprog = (function sprog$webgl$shaders$create_purefrag_sprog(gl,frag_source){
var sprog__$1 = sprog.webgl.shaders.create_sprog(gl,sprog.webgl.shaders.purefrag_vert_glsl,frag_source);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,"vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl));

return sprog__$1;
});
sprog.webgl.shaders.use_sprog_BANG_ = (function sprog$webgl$shaders$use_sprog_BANG_(gl,p__31693,uniform_map,attribute_map){
var map__31694 = p__31693;
var map__31694__$1 = cljs.core.__destructure_map(map__31694);
var sprog__$1 = map__31694__$1;
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31694__$1,new cljs.core.Keyword(null,"program","program",781564284));
gl.useProgram(program);

sprog.webgl.uniforms.set_sprog_uniforms_BANG_(gl,sprog__$1,uniform_map);

return sprog.webgl.attributes.set_sprog_attributes_BANG_(gl,sprog__$1,attribute_map);
});
sprog.webgl.shaders.run_sprog_BANG_ = (function sprog$webgl$shaders$run_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31762 = arguments.length;
var i__5767__auto___31763 = (0);
while(true){
if((i__5767__auto___31763 < len__5766__auto___31762)){
args__5772__auto__.push((arguments[i__5767__auto___31763]));

var G__31764 = (i__5767__auto___31763 + (1));
i__5767__auto___31763 = G__31764;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,attribute_map,start,length,p__31721){
var vec__31722 = p__31721;
var map__31725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31722,(0),null);
var map__31725__$1 = cljs.core.__destructure_map(map__31725);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31725__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
if(cljs.core.coll_QMARK_(target)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.textures.target_textures_BANG_,gl),target);
} else {
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target], 0));
}
} else {
sprog.webgl.textures.target_screen_BANG_(gl);
}

var vec__31726 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?cljs.core.vec(size):null)));
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(0),null);
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(3),null);
gl.viewport(offset_x,offset_y,width,height);

sprog.webgl.shaders.use_sprog_BANG_(gl,sprog__$1,uniform_map,attribute_map);

return gl.drawArrays(gl.TRIANGLES,start,length);
}));

(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$applyTo = (function (seq31706){
var G__31710 = cljs.core.first(seq31706);
var seq31706__$1 = cljs.core.next(seq31706);
var G__31711 = cljs.core.first(seq31706__$1);
var seq31706__$2 = cljs.core.next(seq31706__$1);
var G__31713 = cljs.core.first(seq31706__$2);
var seq31706__$3 = cljs.core.next(seq31706__$2);
var G__31714 = cljs.core.first(seq31706__$3);
var seq31706__$4 = cljs.core.next(seq31706__$3);
var G__31716 = cljs.core.first(seq31706__$4);
var seq31706__$5 = cljs.core.next(seq31706__$4);
var G__31717 = cljs.core.first(seq31706__$5);
var seq31706__$6 = cljs.core.next(seq31706__$5);
var G__31719 = cljs.core.first(seq31706__$6);
var seq31706__$7 = cljs.core.next(seq31706__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31710,G__31711,G__31713,G__31714,G__31716,G__31717,G__31719,seq31706__$7);
}));

sprog.webgl.shaders.run_purefrag_sprog_BANG_ = (function sprog$webgl$shaders$run_purefrag_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31765 = arguments.length;
var i__5767__auto___31766 = (0);
while(true){
if((i__5767__auto___31766 < len__5766__auto___31765)){
args__5772__auto__.push((arguments[i__5767__auto___31766]));

var G__31767 = (i__5767__auto___31766 + (1));
i__5767__auto___31766 = G__31767;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,p__31734){
var vec__31735 = p__31734;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31735,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog__$1,size,uniform_map,new cljs.core.PersistentArrayMap(null, 1, ["vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl)], null),(0),(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$applyTo = (function (seq31729){
var G__31730 = cljs.core.first(seq31729);
var seq31729__$1 = cljs.core.next(seq31729);
var G__31731 = cljs.core.first(seq31729__$1);
var seq31729__$2 = cljs.core.next(seq31729__$1);
var G__31732 = cljs.core.first(seq31729__$2);
var seq31729__$3 = cljs.core.next(seq31729__$2);
var G__31733 = cljs.core.first(seq31729__$3);
var seq31729__$4 = cljs.core.next(seq31729__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31730,G__31731,G__31732,G__31733,seq31729__$4);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_autosprog = (function sprog$webgl$shaders$get_autosprog(gl,shader_sources){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_sources], null);
var temp__5802__auto__ = (function (){var fexpr__31738 = cljs.core.deref(sprog.webgl.shaders.autosprog_cache_atom);
return (fexpr__31738.cljs$core$IFn$_invoke$arity$1 ? fexpr__31738.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31738.call(null,autosprog_key));
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
var len__5766__auto___31768 = arguments.length;
var i__5767__auto___31769 = (0);
while(true){
if((i__5767__auto___31769 < len__5766__auto___31768)){
args__5772__auto__.push((arguments[i__5767__auto___31769]));

var G__31770 = (i__5767__auto___31769 + (1));
i__5767__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sources,size,uniform_map,attribute_map,start,length,p__31748){
var vec__31749 = p__31748;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31749,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_autosprog(gl,sources),size,uniform_map,attribute_map,start,length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$applyTo = (function (seq31740){
var G__31741 = cljs.core.first(seq31740);
var seq31740__$1 = cljs.core.next(seq31740);
var G__31742 = cljs.core.first(seq31740__$1);
var seq31740__$2 = cljs.core.next(seq31740__$1);
var G__31743 = cljs.core.first(seq31740__$2);
var seq31740__$3 = cljs.core.next(seq31740__$2);
var G__31744 = cljs.core.first(seq31740__$3);
var seq31740__$4 = cljs.core.next(seq31740__$3);
var G__31745 = cljs.core.first(seq31740__$4);
var seq31740__$5 = cljs.core.next(seq31740__$4);
var G__31746 = cljs.core.first(seq31740__$5);
var seq31740__$6 = cljs.core.next(seq31740__$5);
var G__31747 = cljs.core.first(seq31740__$6);
var seq31740__$7 = cljs.core.next(seq31740__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31741,G__31742,G__31743,G__31744,G__31745,G__31746,G__31747,seq31740__$7);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_purefrag_autosprog = (function sprog$webgl$shaders$get_purefrag_autosprog(gl,shader_source){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_source], null);
var temp__5802__auto__ = (function (){var fexpr__31752 = cljs.core.deref(sprog.webgl.shaders.purefrag_autosprog_cache_atom);
return (fexpr__31752.cljs$core$IFn$_invoke$arity$1 ? fexpr__31752.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31752.call(null,autosprog_key));
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
var len__5766__auto___31773 = arguments.length;
var i__5767__auto___31774 = (0);
while(true){
if((i__5767__auto___31774 < len__5766__auto___31773)){
args__5772__auto__.push((arguments[i__5767__auto___31774]));

var G__31775 = (i__5767__auto___31774 + (1));
i__5767__auto___31774 = G__31775;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,source,size,uniform_map,p__31758){
var vec__31759 = p__31758;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31759,(0),null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_purefrag_autosprog(gl,source),size,uniform_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$applyTo = (function (seq31753){
var G__31754 = cljs.core.first(seq31753);
var seq31753__$1 = cljs.core.next(seq31753);
var G__31755 = cljs.core.first(seq31753__$1);
var seq31753__$2 = cljs.core.next(seq31753__$1);
var G__31756 = cljs.core.first(seq31753__$2);
var seq31753__$3 = cljs.core.next(seq31753__$2);
var G__31757 = cljs.core.first(seq31753__$3);
var seq31753__$4 = cljs.core.next(seq31753__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31754,G__31755,G__31756,G__31757,seq31753__$4);
}));


//# sourceMappingURL=sprog.webgl.shaders.js.map
