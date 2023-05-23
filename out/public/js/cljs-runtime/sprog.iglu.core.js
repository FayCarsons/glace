goog.provide('sprog.iglu.core');
sprog.iglu.core.combine_chunks = (function sprog$iglu$core$combine_chunks(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30940 = arguments.length;
var i__5767__auto___30941 = (0);
while(true){
if((i__5767__auto___30941 < len__5766__auto___30940)){
args__5772__auto__.push((arguments[i__5767__auto___30941]));

var G__30942 = (i__5767__auto___30941 + (1));
i__5767__auto___30941 = G__30942;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.iglu.core.combine_chunks.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.iglu.core.combine_chunks.cljs$core$IFn$_invoke$arity$variadic = (function (chunks){
var merged_functions = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"functions","functions",184951466),chunks));
var G__30921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),chunks);
if(cljs.core.truth_(merged_functions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30921,new cljs.core.Keyword(null,"functions","functions",184951466),merged_functions);
} else {
return G__30921;
}
}));

(sprog.iglu.core.combine_chunks.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.iglu.core.combine_chunks.cljs$lang$applyTo = (function (seq30920){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30920));
}));

sprog.iglu.core.apply_macros = (function sprog$iglu$core$apply_macros(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30945 = arguments.length;
var i__5767__auto___30946 = (0);
while(true){
if((i__5767__auto___30946 < len__5766__auto___30945)){
args__5772__auto__.push((arguments[i__5767__auto___30946]));

var G__30947 = (i__5767__auto___30946 + (1));
i__5767__auto___30946 = G__30947;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic = (function (p__30924,p__30925){
var map__30926 = p__30924;
var map__30926__$1 = cljs.core.__destructure_map(map__30926);
var shader = map__30926__$1;
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30926__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var vec__30927 = p__30925;
var exclude_defaults_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30927,(0),null);
var chunks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var new_shader = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sprog.iglu.core.combine_chunks,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,clojure.walk.prewalk((function (subexp){
if(cljs.core.seq_QMARK_(subexp)){
var f = cljs.core.first(subexp);
var macro_fn = (function (){var or__5043__auto__ = (cljs.core.truth_(macros)?(macros.cljs$core$IFn$_invoke$arity$1 ? macros.cljs$core$IFn$_invoke$arity$1(f) : macros.call(null,f)):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(exclude_defaults_QMARK_)){
return null;
} else {
return (sprog.iglu.macros.default_macros.cljs$core$IFn$_invoke$arity$1 ? sprog.iglu.macros.default_macros.cljs$core$IFn$_invoke$arity$1(f) : sprog.iglu.macros.default_macros.call(null,f));
}
}
})();
if(cljs.core.truth_(macro_fn)){
var macro_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(macro_fn,cljs.core.rest(subexp));
if(cljs.core.map_QMARK_(macro_result)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(chunks,cljs.core.conj,new cljs.core.Keyword(null,"chunk","chunk",-1191159620).cljs$core$IFn$_invoke$arity$1(macro_result));

return new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(macro_result);
} else {
return macro_result;
}
} else {
return subexp;
}
} else {
return subexp;
}
}),shader),null,(1),null)),cljs.core.deref(chunks)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_shader,shader)){
return new_shader;
} else {
return sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic(new_shader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exclude_defaults_QMARK_], 0));
}
}));

(sprog.iglu.core.apply_macros.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.core.apply_macros.cljs$lang$applyTo = (function (seq30922){
var G__30923 = cljs.core.first(seq30922);
var seq30922__$1 = cljs.core.next(seq30922);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30923,seq30922__$1);
}));

sprog.iglu.core.preprocess = (function sprog$iglu$core$preprocess(p__30930){
var map__30931 = p__30930;
var map__30931__$1 = cljs.core.__destructure_map(map__30931);
var shader = map__30931__$1;
var constants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30931__$1,new cljs.core.Keyword(null,"constants","constants",1535944028));
return sprog.iglu.core.apply_macros((function (){var G__30932 = shader;
if(cljs.core.truth_(constants)){
return clojure.walk.prewalk_replace(constants,G__30932);
} else {
return G__30932;
}
})());
});
sprog.iglu.core.iglu__GT_glsl = (function sprog$iglu$core$iglu__GT_glsl(var_args){
var G__30936 = arguments.length;
switch (G__30936) {
case 1:
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___30953 = arguments.length;
var i__5767__auto___30954 = (0);
while(true){
if((i__5767__auto___30954 < len__5766__auto___30953)){
args_arr__5791__auto__.push((arguments[i__5767__auto___30954]));

var G__30955 = (i__5767__auto___30954 + (1));
i__5767__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((1)),(0),null));
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5792__auto__);

}
});

(sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1 = (function (shader){
return sprog.iglu.glsl.parsed_iglu__GT_glsl(sprog.iglu.parse.parse(sprog.iglu.core.preprocess(shader)));
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic = (function (first_chunk,other_chunks){
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sprog.iglu.core.combine_chunks,cljs.core.cons(first_chunk,other_chunks)));
}));

/** @this {Function} */
(sprog.iglu.core.iglu__GT_glsl.cljs$lang$applyTo = (function (seq30934){
var G__30935 = cljs.core.first(seq30934);
var seq30934__$1 = cljs.core.next(seq30934);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30935,seq30934__$1);
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$lang$maxFixedArity = (1));

sprog.iglu.core.inline_float_uniforms = (function sprog$iglu$core$inline_float_uniforms(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30956 = arguments.length;
var i__5767__auto___30957 = (0);
while(true){
if((i__5767__auto___30957 < len__5766__auto___30956)){
args__5772__auto__.push((arguments[i__5767__auto___30957]));

var G__30958 = (i__5767__auto___30957 + (1));
i__5767__auto___30957 = G__30958;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.core.inline_float_uniforms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.core.inline_float_uniforms.cljs$core$IFn$_invoke$arity$variadic = (function (numerical_param_names,chunks){
var param_uniform_names = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30937_SHARP_){
return (new cljs.core.List(null,p1__30937_SHARP_,(new cljs.core.List(null,sprog.iglu.glsl.clj_name__GT_glsl_name(p1__30937_SHARP_),null,(1),null)),(2),null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([numerical_param_names], 0)));
return clojure.walk.prewalk_replace(param_uniform_names,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sprog.iglu.core.combine_chunks,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(chunks,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),cljs.core.zipmap(cljs.core.vals(param_uniform_names),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"float","float",-91857841,null)))], null),null,(1),null)))));
}));

(sprog.iglu.core.inline_float_uniforms.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.core.inline_float_uniforms.cljs$lang$applyTo = (function (seq30938){
var G__30939 = cljs.core.first(seq30938);
var seq30938__$1 = cljs.core.next(seq30938);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30939,seq30938__$1);
}));


//# sourceMappingURL=sprog.iglu.core.js.map
