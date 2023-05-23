goog.provide('sprog.iglu.macros');
sprog.iglu.macros.thread_first = (function sprog$iglu$macros$thread_first(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43303 = arguments.length;
var i__5767__auto___43304 = (0);
while(true){
if((i__5767__auto___43304 < len__5766__auto___43303)){
args__5772__auto__.push((arguments[i__5767__auto___43304]));

var G__43305 = (i__5767__auto___43304 + (1));
i__5767__auto___43304 = G__43305;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.macros.thread_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.macros.thread_first.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__43306 = threaded;
var G__43307 = cljs.core.next(forms__$1);
x__$1 = G__43306;
forms__$1 = G__43307;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_first.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_first.cljs$lang$applyTo = (function (seq43286){
var G__43287 = cljs.core.first(seq43286);
var seq43286__$1 = cljs.core.next(seq43286);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43287,seq43286__$1);
}));

sprog.iglu.macros.thread_last = (function sprog$iglu$macros$thread_last(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43308 = arguments.length;
var i__5767__auto___43309 = (0);
while(true){
if((i__5767__auto___43309 < len__5766__auto___43308)){
args__5772__auto__.push((arguments[i__5767__auto___43309]));

var G__43310 = (i__5767__auto___43309 + (1));
i__5767__auto___43309 = G__43310;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.macros.thread_last.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.macros.thread_last.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__43312 = threaded;
var G__43313 = cljs.core.next(forms__$1);
x__$1 = G__43312;
forms__$1 = G__43313;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_last.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_last.cljs$lang$applyTo = (function (seq43296){
var G__43297 = cljs.core.first(seq43296);
var seq43296__$1 = cljs.core.next(seq43296);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43297,seq43296__$1);
}));

sprog.iglu.macros.default_macros = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"->","->",-2139605430,null),sprog.iglu.macros.thread_first,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),sprog.iglu.macros.thread_last], null);

//# sourceMappingURL=sprog.iglu.macros.js.map
