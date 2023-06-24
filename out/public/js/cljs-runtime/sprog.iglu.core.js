goog.provide('sprog.iglu.core');
sprog.iglu.core.combine_chunks = (function sprog$iglu$core$combine_chunks(var_args){
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

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.iglu.core.combine_chunks.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.iglu.core.combine_chunks.cljs$core$IFn$_invoke$arity$variadic = (function (chunks){
var merged_functions = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"functions","functions",184951466),chunks));
var G__31123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),chunks);
if(cljs.core.truth_(merged_functions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31123,new cljs.core.Keyword(null,"functions","functions",184951466),merged_functions);
} else {
return G__31123;
}
}));

(sprog.iglu.core.combine_chunks.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.iglu.core.combine_chunks.cljs$lang$applyTo = (function (seq31122){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31122));
}));

sprog.iglu.core.apply_macros = (function sprog$iglu$core$apply_macros(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31144 = arguments.length;
var i__5767__auto___31145 = (0);
while(true){
if((i__5767__auto___31145 < len__5766__auto___31144)){
args__5772__auto__.push((arguments[i__5767__auto___31145]));

var G__31146 = (i__5767__auto___31145 + (1));
i__5767__auto___31145 = G__31146;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.core.apply_macros.cljs$core$IFn$_invoke$arity$variadic = (function (p__31127,p__31128){
var map__31129 = p__31127;
var map__31129__$1 = cljs.core.__destructure_map(map__31129);
var shader = map__31129__$1;
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var vec__31130 = p__31128;
var exclude_defaults_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31130,(0),null);
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
(sprog.iglu.core.apply_macros.cljs$lang$applyTo = (function (seq31124){
var G__31125 = cljs.core.first(seq31124);
var seq31124__$1 = cljs.core.next(seq31124);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31125,seq31124__$1);
}));

sprog.iglu.core.gensym_replace = (function sprog$iglu$core$gensym_replace(replacements,expression){
return clojure.walk.prewalk_replace(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k))], null);
}),replacements)),expression);
});
sprog.iglu.core.preprocess = (function sprog$iglu$core$preprocess(p__31133){
var map__31134 = p__31133;
var map__31134__$1 = cljs.core.__destructure_map(map__31134);
var shader = map__31134__$1;
var constants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31134__$1,new cljs.core.Keyword(null,"constants","constants",1535944028));
return sprog.iglu.core.apply_macros((function (){var G__31135 = shader;
if(cljs.core.truth_(constants)){
return clojure.walk.prewalk_replace(constants,G__31135);
} else {
return G__31135;
}
})());
});
sprog.iglu.core.iglu__GT_glsl = (function sprog$iglu$core$iglu__GT_glsl(var_args){
var G__31139 = arguments.length;
switch (G__31139) {
case 1:
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___31150 = arguments.length;
var i__5767__auto___31151 = (0);
while(true){
if((i__5767__auto___31151 < len__5766__auto___31150)){
args_arr__5791__auto__.push((arguments[i__5767__auto___31151]));

var G__31152 = (i__5767__auto___31151 + (1));
i__5767__auto___31151 = G__31152;
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
(sprog.iglu.core.iglu__GT_glsl.cljs$lang$applyTo = (function (seq31137){
var G__31138 = cljs.core.first(seq31137);
var seq31137__$1 = cljs.core.next(seq31137);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31138,seq31137__$1);
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=sprog.iglu.core.js.map
