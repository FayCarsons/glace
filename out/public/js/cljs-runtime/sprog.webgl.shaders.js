goog.provide('sprog.webgl.shaders');
sprog.webgl.shaders.create_shader = (function sprog$webgl$shaders$create_shader(gl,shader_type,source_glsl){
var shader = gl.createShader((function (){var or__5043__auto__ = (function (){var fexpr__31572 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frag","frag",1474317943),gl.FRAGMENT_SHADER,new cljs.core.Keyword(null,"vert","vert",-360932977),gl.VERTEX_SHADER], null);
return (fexpr__31572.cljs$core$IFn$_invoke$arity$1 ? fexpr__31572.cljs$core$IFn$_invoke$arity$1(shader_type) : fexpr__31572.call(null,shader_type));
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__31571_SHARP_,p2__31570_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2((digit_count + (1)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31570_SHARP_),(new cljs.core.List(null,":",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" ")], 0)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31571_SHARP_)].join('');
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniform-locations-atom","uniform-locations-atom",-1081551033),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"uniform-type-map","uniform-type-map",-1681076371),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31581_SHARP_){
return cljs.core.vec(cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(p1__31581_SHARP_,/uniform\s+/,""),/\s+/)));
}),cljs.core.re_seq(/uniform\s+[A-Za-z0-9\[\]]+\s+[A-Za-z0-9_]+/,[vert_glsl,"\n",frag_glsl].join(''))))], null);
});
sprog.webgl.shaders.purefrag_vert_glsl = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(sprog.iglu.chunks.misc.trivial_vert_source);
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_vert_pos_bojs_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_vert_pos_bojs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.purefrag_vert_pos_boj = (function sprog$webgl$shaders$purefrag_vert_pos_boj(gl){
if(cljs.core.not((function (){var fexpr__31588 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__31588.cljs$core$IFn$_invoke$arity$1 ? fexpr__31588.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__31588.call(null,gl));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom,cljs.core.assoc,gl,sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1),(3),(3),(-1)], null))))], null)], 0)));
} else {
}

var fexpr__31589 = cljs.core.deref(sprog.webgl.shaders.purefrag_vert_pos_bojs_atom);
return (fexpr__31589.cljs$core$IFn$_invoke$arity$1 ? fexpr__31589.cljs$core$IFn$_invoke$arity$1(gl) : fexpr__31589.call(null,gl));
});
sprog.webgl.shaders.create_purefrag_sprog = (function sprog$webgl$shaders$create_purefrag_sprog(gl,frag_source){
var sprog__$1 = sprog.webgl.shaders.create_sprog(gl,sprog.webgl.shaders.purefrag_vert_glsl,frag_source);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,"vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl));

return sprog__$1;
});
sprog.webgl.shaders.use_sprog_BANG_ = (function sprog$webgl$shaders$use_sprog_BANG_(gl,p__31590,uniform_map,attribute_map){
var map__31591 = p__31590;
var map__31591__$1 = cljs.core.__destructure_map(map__31591);
var sprog__$1 = map__31591__$1;
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword(null,"program","program",781564284));
gl.useProgram(program);

sprog.webgl.uniforms.set_sprog_uniforms_BANG_(gl,sprog__$1,uniform_map);

return sprog.webgl.attributes.set_sprog_attributes_BANG_(gl,sprog__$1,attribute_map);
});
sprog.webgl.shaders.run_sprog_BANG_ = (function sprog$webgl$shaders$run_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31652 = arguments.length;
var i__5767__auto___31653 = (0);
while(true){
if((i__5767__auto___31653 < len__5766__auto___31652)){
args__5772__auto__.push((arguments[i__5767__auto___31653]));

var G__31654 = (i__5767__auto___31653 + (1));
i__5767__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,attribute_map,start,length,p__31612){
var vec__31613 = p__31612;
var map__31616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31613,(0),null);
var map__31616__$1 = cljs.core.__destructure_map(map__31616);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31616__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
if(cljs.core.coll_QMARK_(target)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.textures.target_textures_BANG_,gl),target);
} else {
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target], 0));
}
} else {
sprog.webgl.textures.target_screen_BANG_(gl);
}

var vec__31617 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?cljs.core.vec(size):null)));
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31617,(0),null);
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31617,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31617,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31617,(3),null);
gl.viewport(offset_x,offset_y,width,height);

sprog.webgl.shaders.use_sprog_BANG_(gl,sprog__$1,uniform_map,attribute_map);

return gl.drawArrays(gl.TRIANGLES,start,length);
}));

(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$applyTo = (function (seq31600){
var G__31601 = cljs.core.first(seq31600);
var seq31600__$1 = cljs.core.next(seq31600);
var G__31602 = cljs.core.first(seq31600__$1);
var seq31600__$2 = cljs.core.next(seq31600__$1);
var G__31603 = cljs.core.first(seq31600__$2);
var seq31600__$3 = cljs.core.next(seq31600__$2);
var G__31604 = cljs.core.first(seq31600__$3);
var seq31600__$4 = cljs.core.next(seq31600__$3);
var G__31605 = cljs.core.first(seq31600__$4);
var seq31600__$5 = cljs.core.next(seq31600__$4);
var G__31606 = cljs.core.first(seq31600__$5);
var seq31600__$6 = cljs.core.next(seq31600__$5);
var G__31607 = cljs.core.first(seq31600__$6);
var seq31600__$7 = cljs.core.next(seq31600__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31601,G__31602,G__31603,G__31604,G__31605,G__31606,G__31607,seq31600__$7);
}));

sprog.webgl.shaders.run_purefrag_sprog_BANG_ = (function sprog$webgl$shaders$run_purefrag_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31655 = arguments.length;
var i__5767__auto___31656 = (0);
while(true){
if((i__5767__auto___31656 < len__5766__auto___31655)){
args__5772__auto__.push((arguments[i__5767__auto___31656]));

var G__31657 = (i__5767__auto___31656 + (1));
i__5767__auto___31656 = G__31657;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,p__31625){
var vec__31626 = p__31625;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31626,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog__$1,size,uniform_map,new cljs.core.PersistentArrayMap(null, 1, ["vertPos",sprog.webgl.shaders.purefrag_vert_pos_boj(gl)], null),(0),(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$applyTo = (function (seq31620){
var G__31621 = cljs.core.first(seq31620);
var seq31620__$1 = cljs.core.next(seq31620);
var G__31622 = cljs.core.first(seq31620__$1);
var seq31620__$2 = cljs.core.next(seq31620__$1);
var G__31623 = cljs.core.first(seq31620__$2);
var seq31620__$3 = cljs.core.next(seq31620__$2);
var G__31624 = cljs.core.first(seq31620__$3);
var seq31620__$4 = cljs.core.next(seq31620__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31621,G__31622,G__31623,G__31624,seq31620__$4);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_autosprog = (function sprog$webgl$shaders$get_autosprog(gl,shader_sources){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_sources], null);
var temp__5802__auto__ = (function (){var fexpr__31629 = cljs.core.deref(sprog.webgl.shaders.autosprog_cache_atom);
return (fexpr__31629.cljs$core$IFn$_invoke$arity$1 ? fexpr__31629.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31629.call(null,autosprog_key));
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
var len__5766__auto___31660 = arguments.length;
var i__5767__auto___31661 = (0);
while(true){
if((i__5767__auto___31661 < len__5766__auto___31660)){
args__5772__auto__.push((arguments[i__5767__auto___31661]));

var G__31662 = (i__5767__auto___31661 + (1));
i__5767__auto___31661 = G__31662;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sources,size,uniform_map,attribute_map,start,length,p__31638){
var vec__31639 = p__31638;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31639,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_autosprog(gl,sources),size,uniform_map,attribute_map,start,length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$applyTo = (function (seq31630){
var G__31631 = cljs.core.first(seq31630);
var seq31630__$1 = cljs.core.next(seq31630);
var G__31632 = cljs.core.first(seq31630__$1);
var seq31630__$2 = cljs.core.next(seq31630__$1);
var G__31633 = cljs.core.first(seq31630__$2);
var seq31630__$3 = cljs.core.next(seq31630__$2);
var G__31634 = cljs.core.first(seq31630__$3);
var seq31630__$4 = cljs.core.next(seq31630__$3);
var G__31635 = cljs.core.first(seq31630__$4);
var seq31630__$5 = cljs.core.next(seq31630__$4);
var G__31636 = cljs.core.first(seq31630__$5);
var seq31630__$6 = cljs.core.next(seq31630__$5);
var G__31637 = cljs.core.first(seq31630__$6);
var seq31630__$7 = cljs.core.next(seq31630__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31631,G__31632,G__31633,G__31634,G__31635,G__31636,G__31637,seq31630__$7);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_purefrag_autosprog = (function sprog$webgl$shaders$get_purefrag_autosprog(gl,shader_source){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_source], null);
var temp__5802__auto__ = (function (){var fexpr__31642 = cljs.core.deref(sprog.webgl.shaders.purefrag_autosprog_cache_atom);
return (fexpr__31642.cljs$core$IFn$_invoke$arity$1 ? fexpr__31642.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__31642.call(null,autosprog_key));
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
var len__5766__auto___31680 = arguments.length;
var i__5767__auto___31681 = (0);
while(true){
if((i__5767__auto___31681 < len__5766__auto___31680)){
args__5772__auto__.push((arguments[i__5767__auto___31681]));

var G__31682 = (i__5767__auto___31681 + (1));
i__5767__auto___31681 = G__31682;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,source,size,uniform_map,p__31648){
var vec__31649 = p__31648;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31649,(0),null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_purefrag_autosprog(gl,source),size,uniform_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$applyTo = (function (seq31643){
var G__31644 = cljs.core.first(seq31643);
var seq31643__$1 = cljs.core.next(seq31643);
var G__31645 = cljs.core.first(seq31643__$1);
var seq31643__$2 = cljs.core.next(seq31643__$1);
var G__31646 = cljs.core.first(seq31643__$2);
var seq31643__$3 = cljs.core.next(seq31643__$2);
var G__31647 = cljs.core.first(seq31643__$3);
var seq31643__$4 = cljs.core.next(seq31643__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31644,G__31645,G__31646,G__31647,seq31643__$4);
}));


//# sourceMappingURL=sprog.webgl.shaders.js.map
