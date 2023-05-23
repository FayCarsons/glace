goog.provide('sprog.util');
sprog.util.now = (function sprog$util$now(){
return Date.now();
});
sprog.util.startup_time = sprog.util.now();
sprog.util.seconds_since_startup = (function sprog$util$seconds_since_startup(){
return ((sprog.util.now() - sprog.util.startup_time) / (1000));
});
sprog.util.log = (function sprog$util$log(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42739 = arguments.length;
var i__5767__auto___42741 = (0);
while(true){
if((i__5767__auto___42741 < len__5766__auto___42739)){
args__5772__auto__.push((arguments[i__5767__auto___42741]));

var G__42743 = (i__5767__auto___42741 + (1));
i__5767__auto___42741 = G__42743;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
var seq__42690_42744 = cljs.core.seq(vals);
var chunk__42691_42745 = null;
var count__42692_42746 = (0);
var i__42693_42747 = (0);
while(true){
if((i__42693_42747 < count__42692_42746)){
var val_42748 = chunk__42691_42745.cljs$core$IIndexed$_nth$arity$2(null,i__42693_42747);
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_42748));


var G__42749 = seq__42690_42744;
var G__42750 = chunk__42691_42745;
var G__42751 = count__42692_42746;
var G__42752 = (i__42693_42747 + (1));
seq__42690_42744 = G__42749;
chunk__42691_42745 = G__42750;
count__42692_42746 = G__42751;
i__42693_42747 = G__42752;
continue;
} else {
var temp__5804__auto___42753 = cljs.core.seq(seq__42690_42744);
if(temp__5804__auto___42753){
var seq__42690_42754__$1 = temp__5804__auto___42753;
if(cljs.core.chunked_seq_QMARK_(seq__42690_42754__$1)){
var c__5565__auto___42755 = cljs.core.chunk_first(seq__42690_42754__$1);
var G__42756 = cljs.core.chunk_rest(seq__42690_42754__$1);
var G__42757 = c__5565__auto___42755;
var G__42758 = cljs.core.count(c__5565__auto___42755);
var G__42759 = (0);
seq__42690_42744 = G__42756;
chunk__42691_42745 = G__42757;
count__42692_42746 = G__42758;
i__42693_42747 = G__42759;
continue;
} else {
var val_42760 = cljs.core.first(seq__42690_42754__$1);
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_42760));


var G__42762 = cljs.core.next(seq__42690_42754__$1);
var G__42763 = null;
var G__42764 = (0);
var G__42765 = (0);
seq__42690_42744 = G__42762;
chunk__42691_42745 = G__42763;
count__42692_42746 = G__42764;
i__42693_42747 = G__42765;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(vals);
}));

(sprog.util.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.util.log.cljs$lang$applyTo = (function (seq42688){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42688));
}));

sprog.util.log_tables = (function sprog$util$log_tables(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42767 = arguments.length;
var i__5767__auto___42768 = (0);
while(true){
if((i__5767__auto___42768 < len__5766__auto___42767)){
args__5772__auto__.push((arguments[i__5767__auto___42768]));

var G__42769 = (i__5767__auto___42768 + (1));
i__5767__auto___42768 = G__42769;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.util.log_tables.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.util.log_tables.cljs$core$IFn$_invoke$arity$variadic = (function (tables){
var seq__42700_42770 = cljs.core.seq(tables);
var chunk__42701_42771 = null;
var count__42702_42772 = (0);
var i__42703_42773 = (0);
while(true){
if((i__42703_42773 < count__42702_42772)){
var table_42775 = chunk__42701_42771.cljs$core$IIndexed$_nth$arity$2(null,i__42703_42773);
console.table(cljs.core.clj__GT_js(table_42775));


var G__42776 = seq__42700_42770;
var G__42777 = chunk__42701_42771;
var G__42778 = count__42702_42772;
var G__42779 = (i__42703_42773 + (1));
seq__42700_42770 = G__42776;
chunk__42701_42771 = G__42777;
count__42702_42772 = G__42778;
i__42703_42773 = G__42779;
continue;
} else {
var temp__5804__auto___42781 = cljs.core.seq(seq__42700_42770);
if(temp__5804__auto___42781){
var seq__42700_42782__$1 = temp__5804__auto___42781;
if(cljs.core.chunked_seq_QMARK_(seq__42700_42782__$1)){
var c__5565__auto___42783 = cljs.core.chunk_first(seq__42700_42782__$1);
var G__42784 = cljs.core.chunk_rest(seq__42700_42782__$1);
var G__42785 = c__5565__auto___42783;
var G__42786 = cljs.core.count(c__5565__auto___42783);
var G__42787 = (0);
seq__42700_42770 = G__42784;
chunk__42701_42771 = G__42785;
count__42702_42772 = G__42786;
i__42703_42773 = G__42787;
continue;
} else {
var table_42788 = cljs.core.first(seq__42700_42782__$1);
console.table(cljs.core.clj__GT_js(table_42788));


var G__42789 = cljs.core.next(seq__42700_42782__$1);
var G__42790 = null;
var G__42791 = (0);
var G__42792 = (0);
seq__42700_42770 = G__42789;
chunk__42701_42771 = G__42790;
count__42702_42772 = G__42791;
i__42703_42773 = G__42792;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(tables);
}));

(sprog.util.log_tables.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.util.log_tables.cljs$lang$applyTo = (function (seq42699){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42699));
}));

sprog.util.pretty_log = (function sprog$util$pretty_log(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42793 = arguments.length;
var i__5767__auto___42794 = (0);
while(true){
if((i__5767__auto___42794 < len__5766__auto___42793)){
args__5772__auto__.push((arguments[i__5767__auto___42794]));

var G__42795 = (i__5767__auto___42794 + (1));
i__5767__auto___42794 = G__42795;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.util.pretty_log.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.util.pretty_log.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
var seq__42709_42796 = cljs.core.seq(vals);
var chunk__42710_42797 = null;
var count__42711_42798 = (0);
var i__42712_42799 = (0);
while(true){
if((i__42712_42799 < count__42711_42798)){
var val_42800 = chunk__42710_42797.cljs$core$IIndexed$_nth$arity$2(null,i__42712_42799);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(val_42800);


var G__42801 = seq__42709_42796;
var G__42802 = chunk__42710_42797;
var G__42803 = count__42711_42798;
var G__42804 = (i__42712_42799 + (1));
seq__42709_42796 = G__42801;
chunk__42710_42797 = G__42802;
count__42711_42798 = G__42803;
i__42712_42799 = G__42804;
continue;
} else {
var temp__5804__auto___42805 = cljs.core.seq(seq__42709_42796);
if(temp__5804__auto___42805){
var seq__42709_42806__$1 = temp__5804__auto___42805;
if(cljs.core.chunked_seq_QMARK_(seq__42709_42806__$1)){
var c__5565__auto___42807 = cljs.core.chunk_first(seq__42709_42806__$1);
var G__42808 = cljs.core.chunk_rest(seq__42709_42806__$1);
var G__42809 = c__5565__auto___42807;
var G__42810 = cljs.core.count(c__5565__auto___42807);
var G__42811 = (0);
seq__42709_42796 = G__42808;
chunk__42710_42797 = G__42809;
count__42711_42798 = G__42810;
i__42712_42799 = G__42811;
continue;
} else {
var val_42812 = cljs.core.first(seq__42709_42806__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(val_42812);


var G__42813 = cljs.core.next(seq__42709_42806__$1);
var G__42814 = null;
var G__42815 = (0);
var G__42816 = (0);
seq__42709_42796 = G__42813;
chunk__42710_42797 = G__42814;
count__42711_42798 = G__42815;
i__42712_42799 = G__42816;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(vals);
}));

(sprog.util.pretty_log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.util.pretty_log.cljs$lang$applyTo = (function (seq42708){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42708));
}));

sprog.util.scale = (function sprog$util$scale(var_args){
var G__42717 = arguments.length;
switch (G__42717) {
case 5:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.util.scale.cljs$core$IFn$_invoke$arity$5 = (function (from_min,from_max,to_min,to_max,value){
return ((((value - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$4 = (function (from_min,from_max,to_min,to_max){
return (function (p1__42715_SHARP_){
return ((((p1__42715_SHARP_ - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
});
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$3 = (function (to_min,to_max,value){
return sprog.util.scale.cljs$core$IFn$_invoke$arity$5((0),(1),to_min,to_max,value);
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$2 = (function (to_min,to_max){
return sprog.util.scale.cljs$core$IFn$_invoke$arity$4((0),(1),to_min,to_max);
}));

(sprog.util.scale.cljs$lang$maxFixedArity = 5);

sprog.util.prange = (function sprog$util$prange(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42818 = arguments.length;
var i__5767__auto___42820 = (0);
while(true){
if((i__5767__auto___42820 < len__5766__auto___42818)){
args__5772__auto__.push((arguments[i__5767__auto___42820]));

var G__42822 = (i__5767__auto___42820 + (1));
i__5767__auto___42820 = G__42822;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.util.prange.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.util.prange.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__42726){
var vec__42727 = p__42726;
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42727,(0),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42722_SHARP_){
return (p1__42722_SHARP_ / (cljs.core.truth_(open_QMARK_)?n:(n - (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}));

(sprog.util.prange.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.util.prange.cljs$lang$applyTo = (function (seq42723){
var G__42724 = cljs.core.first(seq42723);
var seq42723__$1 = cljs.core.next(seq42723);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42724,seq42723__$1);
}));

sprog.util.clamp = (function sprog$util$clamp(var_args){
var G__42734 = arguments.length;
switch (G__42734) {
case 3:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$3 = (function (bottom,top,value){
var x__5131__auto__ = top;
var y__5132__auto__ = (function (){var x__5128__auto__ = bottom;
var y__5129__auto__ = value;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
}));

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (p1__42730_SHARP_){
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3(min,max,p1__42730_SHARP_);
});
}));

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$1 = (function (value){
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3((0),(1),value);
}));

(sprog.util.clamp.cljs$lang$maxFixedArity = 3);

sprog.util.sigmoid = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core._SLASH_,cljs.core.inc,(function (p1__42738_SHARP_){
return Math.exp(p1__42738_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._], 0));
sprog.util.TAU = (Math.PI * (2));

//# sourceMappingURL=sprog.util.js.map
