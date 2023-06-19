goog.provide('sprog.iglu.core');
sprog.iglu.core.combine_chunks = (function sprog$iglu$core$combine_chunks(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31193 = arguments.length;
var i__5767__auto___31194 = (0);
while(true){
if((i__5767__auto___31194 < len__5766__auto___31193)){
args__5772__auto__.push((arguments[i__5767__auto___31194]));

var G__31195 = (i__5767__auto___31194 + (1));
i__5767__auto___31194 = G__31195;
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
var G__31168 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),chunks);
if(cljs.core.truth_(merged_functions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31168,new cljs.core.Keyword(null,"functions","functions",184951466),merged_functions);
} else {
return G__31168;
}
}));

(sprog.iglu.core.combine_chunks.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.iglu.core.combine_chunks.cljs$lang$applyTo = (function (seq31167){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31167));
}));

sprog.iglu.core.apply_macros = (function sprog$iglu$core$apply_macros(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31197 = arguments.length;
var i__5767__auto___31198 = (0);
while(true){
if((i__5767__auto___31198 < len__5766__auto___31197)){
args__5772__auto__.push((arguments[i__5767__auto___31198]));

var G__31199 = (i__5767__auto___31198 + (1));
i__5767__auto___31198 = G__31199;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic = (function (p__31172,p__31173){
var map__31174 = p__31172;
var map__31174__$1 = cljs.core.__destructure_map(map__31174);
var shader = map__31174__$1;
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31174__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var vec__31175 = p__31173;
var exclude_defaults_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(0),null);
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
(sprog.iglu.core.apply_macros.cljs$lang$applyTo = (function (seq31169){
var G__31170 = cljs.core.first(seq31169);
var seq31169__$1 = cljs.core.next(seq31169);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31170,seq31169__$1);
}));

sprog.iglu.core.gensym_replace = (function sprog$iglu$core$gensym_replace(replacements,expression){
return clojure.walk.prewalk_replace(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k))], null);
}),replacements)),expression);
});
sprog.iglu.core.preprocess = (function sprog$iglu$core$preprocess(p__31178){
var map__31180 = p__31178;
var map__31180__$1 = cljs.core.__destructure_map(map__31180);
var shader = map__31180__$1;
var constants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,new cljs.core.Keyword(null,"constants","constants",1535944028));
return sprog.iglu.core.apply_macros((function (){var G__31184 = shader;
if(cljs.core.truth_(constants)){
return clojure.walk.prewalk_replace(constants,G__31184);
} else {
return G__31184;
}
})());
});
sprog.iglu.core.iglu__GT_glsl = (function sprog$iglu$core$iglu__GT_glsl(var_args){
var G__31189 = arguments.length;
switch (G__31189) {
case 1:
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___31209 = arguments.length;
var i__5767__auto___31210 = (0);
while(true){
if((i__5767__auto___31210 < len__5766__auto___31209)){
args_arr__5791__auto__.push((arguments[i__5767__auto___31210]));

var G__31211 = (i__5767__auto___31210 + (1));
i__5767__auto___31210 = G__31211;
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
(sprog.iglu.core.iglu__GT_glsl.cljs$lang$applyTo = (function (seq31187){
var G__31188 = cljs.core.first(seq31187);
var seq31187__$1 = cljs.core.next(seq31187);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31188,seq31187__$1);
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=sprog.iglu.core.js.map
