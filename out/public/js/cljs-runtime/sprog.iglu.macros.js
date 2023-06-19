goog.provide('sprog.iglu.macros');
sprog.iglu.macros.thread_first = (function sprog$iglu$macros$thread_first(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30930 = arguments.length;
var i__5767__auto___30931 = (0);
while(true){
if((i__5767__auto___30931 < len__5766__auto___30930)){
args__5772__auto__.push((arguments[i__5767__auto___30931]));

var G__30932 = (i__5767__auto___30931 + (1));
i__5767__auto___30931 = G__30932;
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
var G__30933 = threaded;
var G__30934 = cljs.core.next(forms__$1);
x__$1 = G__30933;
forms__$1 = G__30934;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_first.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_first.cljs$lang$applyTo = (function (seq30920){
var G__30921 = cljs.core.first(seq30920);
var seq30920__$1 = cljs.core.next(seq30920);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30921,seq30920__$1);
}));

sprog.iglu.macros.thread_last = (function sprog$iglu$macros$thread_last(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30935 = arguments.length;
var i__5767__auto___30936 = (0);
while(true){
if((i__5767__auto___30936 < len__5766__auto___30935)){
args__5772__auto__.push((arguments[i__5767__auto___30936]));

var G__30937 = (i__5767__auto___30936 + (1));
i__5767__auto___30936 = G__30937;
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
var G__30938 = threaded;
var G__30939 = cljs.core.next(forms__$1);
x__$1 = G__30938;
forms__$1 = G__30939;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_last.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_last.cljs$lang$applyTo = (function (seq30922){
var G__30923 = cljs.core.first(seq30922);
var seq30922__$1 = cljs.core.next(seq30922);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30923,seq30922__$1);
}));

sprog.iglu.macros.default_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"->","->",-2139605430,null),sprog.iglu.macros.thread_first,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),sprog.iglu.macros.thread_last,new cljs.core.Symbol(null,"=->","=->",-341789672,null),(function() { 
var G__30940__delegate = function (var_name,forms){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,var_name,(new cljs.core.List(null,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"->","->",-2139605430,null),(new cljs.core.List(null,var_name,null,(1),null)),(2),null)),forms),null,(1),null)),(2),null)),(3),null));
};
var G__30940 = function (var_name,var_args){
var forms = null;
if (arguments.length > 1) {
var G__30941__i = 0, G__30941__a = new Array(arguments.length -  1);
while (G__30941__i < G__30941__a.length) {G__30941__a[G__30941__i] = arguments[G__30941__i + 1]; ++G__30941__i;}
  forms = new cljs.core.IndexedSeq(G__30941__a,0,null);
} 
return G__30940__delegate.call(this,var_name,forms);};
G__30940.cljs$lang$maxFixedArity = 1;
G__30940.cljs$lang$applyTo = (function (arglist__30942){
var var_name = cljs.core.first(arglist__30942);
var forms = cljs.core.rest(arglist__30942);
return G__30940__delegate(var_name,forms);
});
G__30940.cljs$core$IFn$_invoke$arity$variadic = G__30940__delegate;
return G__30940;
})()
,new cljs.core.Symbol(null,"=->>","=->>",-1180218493,null),(function() { 
var G__30943__delegate = function (var_name,forms){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,var_name,(new cljs.core.List(null,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),(new cljs.core.List(null,var_name,null,(1),null)),(2),null)),forms),null,(1),null)),(2),null)),(3),null));
};
var G__30943 = function (var_name,var_args){
var forms = null;
if (arguments.length > 1) {
var G__30944__i = 0, G__30944__a = new Array(arguments.length -  1);
while (G__30944__i < G__30944__a.length) {G__30944__a[G__30944__i] = arguments[G__30944__i + 1]; ++G__30944__i;}
  forms = new cljs.core.IndexedSeq(G__30944__a,0,null);
} 
return G__30943__delegate.call(this,var_name,forms);};
G__30943.cljs$lang$maxFixedArity = 1;
G__30943.cljs$lang$applyTo = (function (arglist__30945){
var var_name = cljs.core.first(arglist__30945);
var forms = cljs.core.rest(arglist__30945);
return G__30943__delegate(var_name,forms);
});
G__30943.cljs$core$IFn$_invoke$arity$variadic = G__30943__delegate;
return G__30943;
})()
,new cljs.core.Symbol(null,"bi->uni","bi->uni",-693969528,null),(function (p1__30926_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,0.5,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),(new cljs.core.List(null,(1),(new cljs.core.List(null,p1__30926_SHARP_,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
}),new cljs.core.Symbol(null,"uni->bi","uni->bi",-1654503005,null),(function (p1__30927_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(2),(new cljs.core.List(null,p1__30927_SHARP_,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(3),null));
})], null);

//# sourceMappingURL=sprog.iglu.macros.js.map
