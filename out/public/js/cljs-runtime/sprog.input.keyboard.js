goog.provide('sprog.input.keyboard');
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.keyboard !== 'undefined') && (typeof sprog.input.keyboard.key_callbacks !== 'undefined')){
} else {
sprog.input.keyboard.key_callbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.keyboard !== 'undefined') && (typeof sprog.input.keyboard.key_downs !== 'undefined')){
} else {
sprog.input.keyboard.key_downs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.keyboard !== 'undefined') && (typeof sprog.input.keyboard.key_toggles !== 'undefined')){
} else {
sprog.input.keyboard.key_toggles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.keyboard !== 'undefined') && (typeof sprog.input.keyboard.key_cycles !== 'undefined')){
} else {
sprog.input.keyboard.key_cycles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.input.keyboard.keydown = (function sprog$input$keyboard$keydown(event){
var key = event.key;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.keyboard.key_toggles,(function (toggle_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(toggle_map,key,cljs.core.not);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.keyboard.key_cycles,(function (cycle_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cycle_map,key,(function (cycle){
if(cljs.core.truth_(cycle)){
var vec__58580 = cycle;
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,cljs.core.mod((index + (1)),cljs.core.count(values))], null);
} else {
return null;
}
}));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.input.keyboard.key_downs,cljs.core.assoc,key,true);

var seq__58583 = cljs.core.seq((function (){var fexpr__58588 = cljs.core.deref(sprog.input.keyboard.key_callbacks);
return (fexpr__58588.cljs$core$IFn$_invoke$arity$1 ? fexpr__58588.cljs$core$IFn$_invoke$arity$1(key) : fexpr__58588.call(null,key));
})());
var chunk__58584 = null;
var count__58585 = (0);
var i__58586 = (0);
while(true){
if((i__58586 < count__58585)){
var callback = chunk__58584.cljs$core$IIndexed$_nth$arity$2(null,i__58586);
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));


var G__58667 = seq__58583;
var G__58668 = chunk__58584;
var G__58669 = count__58585;
var G__58670 = (i__58586 + (1));
seq__58583 = G__58667;
chunk__58584 = G__58668;
count__58585 = G__58669;
i__58586 = G__58670;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58583);
if(temp__5804__auto__){
var seq__58583__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58583__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__58583__$1);
var G__58671 = cljs.core.chunk_rest(seq__58583__$1);
var G__58672 = c__5565__auto__;
var G__58673 = cljs.core.count(c__5565__auto__);
var G__58674 = (0);
seq__58583 = G__58671;
chunk__58584 = G__58672;
count__58585 = G__58673;
i__58586 = G__58674;
continue;
} else {
var callback = cljs.core.first(seq__58583__$1);
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));


var G__58675 = cljs.core.next(seq__58583__$1);
var G__58676 = null;
var G__58677 = (0);
var G__58678 = (0);
seq__58583 = G__58675;
chunk__58584 = G__58676;
count__58585 = G__58677;
i__58586 = G__58678;
continue;
}
} else {
return null;
}
}
break;
}
});
sprog.input.keyboard.keyup = (function sprog$input$keyboard$keyup(event){
var key = event.key;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.input.keyboard.key_downs,cljs.core.assoc,key,false);
});
document.addEventListener("keydown",sprog.input.keyboard.keydown);
document.addEventListener("keyup",sprog.input.keyboard.keyup);
sprog.input.keyboard.key_down_QMARK_ = (function sprog$input$keyboard$key_down_QMARK_(key_str){
var fexpr__58589 = cljs.core.deref(sprog.input.keyboard.key_downs);
return (fexpr__58589.cljs$core$IFn$_invoke$arity$1 ? fexpr__58589.cljs$core$IFn$_invoke$arity$1(key_str) : fexpr__58589.call(null,key_str));
});
sprog.input.keyboard.key_toggled_QMARK_ = (function sprog$input$keyboard$key_toggled_QMARK_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58679 = arguments.length;
var i__5767__auto___58680 = (0);
while(true){
if((i__5767__auto___58680 < len__5766__auto___58679)){
args__5772__auto__.push((arguments[i__5767__auto___58680]));

var G__58682 = (i__5767__auto___58680 + (1));
i__5767__auto___58680 = G__58682;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.input.keyboard.key_toggled_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.input.keyboard.key_toggled_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key_str,p__58592){
var vec__58593 = p__58592;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58593,(0),null);
if(((function (){var fexpr__58596 = cljs.core.deref(sprog.input.keyboard.key_toggles);
return (fexpr__58596.cljs$core$IFn$_invoke$arity$1 ? fexpr__58596.cljs$core$IFn$_invoke$arity$1(key_str) : fexpr__58596.call(null,key_str));
})() == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.input.keyboard.key_toggles,cljs.core.assoc,key_str,cljs.core.boolean$(default_value));
} else {
}

var fexpr__58597 = cljs.core.deref(sprog.input.keyboard.key_toggles);
return (fexpr__58597.cljs$core$IFn$_invoke$arity$1 ? fexpr__58597.cljs$core$IFn$_invoke$arity$1(key_str) : fexpr__58597.call(null,key_str));
}));

(sprog.input.keyboard.key_toggled_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.input.keyboard.key_toggled_QMARK_.cljs$lang$applyTo = (function (seq58590){
var G__58591 = cljs.core.first(seq58590);
var seq58590__$1 = cljs.core.next(seq58590);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58591,seq58590__$1);
}));

sprog.input.keyboard.key_cycle = (function sprog$input$keyboard$key_cycle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58684 = arguments.length;
var i__5767__auto___58685 = (0);
while(true){
if((i__5767__auto___58685 < len__5766__auto___58684)){
args__5772__auto__.push((arguments[i__5767__auto___58685]));

var G__58686 = (i__5767__auto___58685 + (1));
i__5767__auto___58685 = G__58686;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.input.keyboard.key_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.input.keyboard.key_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (key_str,cycle,p__58601){
var vec__58602 = p__58601;
var default_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58602,(0),null);
if(((function (){var fexpr__58605 = cljs.core.deref(sprog.input.keyboard.key_cycles);
return (fexpr__58605.cljs$core$IFn$_invoke$arity$1 ? fexpr__58605.cljs$core$IFn$_invoke$arity$1(key_str) : fexpr__58605.call(null,key_str));
})() == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.input.keyboard.key_cycles,cljs.core.assoc,key_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cycle,(default_index | (0))], null));
} else {
}

var vec__58606 = (function (){var fexpr__58609 = cljs.core.deref(sprog.input.keyboard.key_cycles);
return (fexpr__58609.cljs$core$IFn$_invoke$arity$1 ? fexpr__58609.cljs$core$IFn$_invoke$arity$1(key_str) : fexpr__58609.call(null,key_str));
})();
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58606,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58606,(1),null);
return (values.cljs$core$IFn$_invoke$arity$1 ? values.cljs$core$IFn$_invoke$arity$1(index) : values.call(null,index));
}));

(sprog.input.keyboard.key_cycle.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.input.keyboard.key_cycle.cljs$lang$applyTo = (function (seq58598){
var G__58599 = cljs.core.first(seq58598);
var seq58598__$1 = cljs.core.next(seq58598);
var G__58600 = cljs.core.first(seq58598__$1);
var seq58598__$2 = cljs.core.next(seq58598__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58599,G__58600,seq58598__$2);
}));

sprog.input.keyboard.add_key_callback = (function sprog$input$keyboard$add_key_callback(key_name,callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.input.keyboard.key_callbacks,cljs.core.update,key_name,(function (p1__58610_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__58610_SHARP_,callback);
}));
});
sprog.input.keyboard.add_num_key_callback = (function sprog$input$keyboard$add_num_key_callback(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58689 = arguments.length;
var i__5767__auto___58690 = (0);
while(true){
if((i__5767__auto___58690 < len__5766__auto___58689)){
args__5772__auto__.push((arguments[i__5767__auto___58690]));

var G__58691 = (i__5767__auto___58690 + (1));
i__5767__auto___58690 = G__58691;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.input.keyboard.add_num_key_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.input.keyboard.add_num_key_callback.cljs$core$IFn$_invoke$arity$variadic = (function (num_callback,p__58613){
var vec__58614 = p__58613;
var max_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58614,(0),null);
var seq__58617 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5",(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["6",(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8",(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["=",(11)], null)], null));
var chunk__58618 = null;
var count__58619 = (0);
var i__58620 = (0);
while(true){
if((i__58620 < count__58619)){
var vec__58627 = chunk__58618.cljs$core$IIndexed$_nth$arity$2(null,i__58620);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58627,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58627,(1),null);
sprog.input.keyboard.add_key_callback(name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(num_callback,num));


var G__58707 = seq__58617;
var G__58708 = chunk__58618;
var G__58709 = count__58619;
var G__58710 = (i__58620 + (1));
seq__58617 = G__58707;
chunk__58618 = G__58708;
count__58619 = G__58709;
i__58620 = G__58710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58617);
if(temp__5804__auto__){
var seq__58617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58617__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__58617__$1);
var G__58711 = cljs.core.chunk_rest(seq__58617__$1);
var G__58712 = c__5565__auto__;
var G__58713 = cljs.core.count(c__5565__auto__);
var G__58714 = (0);
seq__58617 = G__58711;
chunk__58618 = G__58712;
count__58619 = G__58713;
i__58620 = G__58714;
continue;
} else {
var vec__58630 = cljs.core.first(seq__58617__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(1),null);
sprog.input.keyboard.add_key_callback(name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(num_callback,num));


var G__58715 = cljs.core.next(seq__58617__$1);
var G__58716 = null;
var G__58717 = (0);
var G__58718 = (0);
seq__58617 = G__58715;
chunk__58618 = G__58716;
count__58619 = G__58717;
i__58620 = G__58718;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.input.keyboard.add_num_key_callback.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.input.keyboard.add_num_key_callback.cljs$lang$applyTo = (function (seq58611){
var G__58612 = cljs.core.first(seq58611);
var seq58611__$1 = cljs.core.next(seq58611);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58612,seq58611__$1);
}));

sprog.input.keyboard.add_shift_num_key_callback = (function sprog$input$keyboard$add_shift_num_key_callback(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58719 = arguments.length;
var i__5767__auto___58720 = (0);
while(true){
if((i__5767__auto___58720 < len__5766__auto___58719)){
args__5772__auto__.push((arguments[i__5767__auto___58720]));

var G__58721 = (i__5767__auto___58720 + (1));
i__5767__auto___58720 = G__58721;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.input.keyboard.add_shift_num_key_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.input.keyboard.add_shift_num_key_callback.cljs$core$IFn$_invoke$arity$variadic = (function (num_callback,p__58635){
var vec__58636 = p__58635;
var max_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58636,(0),null);
var seq__58639 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["!",(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%",(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^",(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [")",(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_",(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",(11)], null)], null));
var chunk__58640 = null;
var count__58641 = (0);
var i__58642 = (0);
while(true){
if((i__58642 < count__58641)){
var vec__58649 = chunk__58640.cljs$core$IIndexed$_nth$arity$2(null,i__58642);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58649,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58649,(1),null);
sprog.input.keyboard.add_key_callback(name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(num_callback,num));


var G__58722 = seq__58639;
var G__58723 = chunk__58640;
var G__58724 = count__58641;
var G__58725 = (i__58642 + (1));
seq__58639 = G__58722;
chunk__58640 = G__58723;
count__58641 = G__58724;
i__58642 = G__58725;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58639);
if(temp__5804__auto__){
var seq__58639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58639__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__58639__$1);
var G__58726 = cljs.core.chunk_rest(seq__58639__$1);
var G__58727 = c__5565__auto__;
var G__58728 = cljs.core.count(c__5565__auto__);
var G__58729 = (0);
seq__58639 = G__58726;
chunk__58640 = G__58727;
count__58641 = G__58728;
i__58642 = G__58729;
continue;
} else {
var vec__58652 = cljs.core.first(seq__58639__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58652,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58652,(1),null);
sprog.input.keyboard.add_key_callback(name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(num_callback,num));


var G__58730 = cljs.core.next(seq__58639__$1);
var G__58731 = null;
var G__58732 = (0);
var G__58733 = (0);
seq__58639 = G__58730;
chunk__58640 = G__58731;
count__58641 = G__58732;
i__58642 = G__58733;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.input.keyboard.add_shift_num_key_callback.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.input.keyboard.add_shift_num_key_callback.cljs$lang$applyTo = (function (seq58633){
var G__58634 = cljs.core.first(seq58633);
var seq58633__$1 = cljs.core.next(seq58633);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58634,seq58633__$1);
}));

sprog.input.keyboard.add_up_down_key_callback = (function sprog$input$keyboard$add_up_down_key_callback(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58734 = arguments.length;
var i__5767__auto___58735 = (0);
while(true){
if((i__5767__auto___58735 < len__5766__auto___58734)){
args__5772__auto__.push((arguments[i__5767__auto___58735]));

var G__58736 = (i__5767__auto___58735 + (1));
i__5767__auto___58735 = G__58736;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.input.keyboard.add_up_down_key_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.input.keyboard.add_up_down_key_callback.cljs$core$IFn$_invoke$arity$variadic = (function (callback,p__58657){
var vec__58658 = p__58657;
var wasd_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58658,(0),null);
sprog.input.keyboard.add_key_callback("ArrowUp",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(1)));

sprog.input.keyboard.add_key_callback("ArrowDown",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(-1)));

if(cljs.core.truth_(wasd_QMARK_)){
sprog.input.keyboard.add_key_callback("w",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(1)));

return sprog.input.keyboard.add_key_callback("s",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(-1)));
} else {
return null;
}
}));

(sprog.input.keyboard.add_up_down_key_callback.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.input.keyboard.add_up_down_key_callback.cljs$lang$applyTo = (function (seq58655){
var G__58656 = cljs.core.first(seq58655);
var seq58655__$1 = cljs.core.next(seq58655);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58656,seq58655__$1);
}));

sprog.input.keyboard.add_left_right_key_callback = (function sprog$input$keyboard$add_left_right_key_callback(var_args){
var args__5772__auto__ = [];
var len__5766__auto___58737 = arguments.length;
var i__5767__auto___58738 = (0);
while(true){
if((i__5767__auto___58738 < len__5766__auto___58737)){
args__5772__auto__.push((arguments[i__5767__auto___58738]));

var G__58739 = (i__5767__auto___58738 + (1));
i__5767__auto___58738 = G__58739;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.input.keyboard.add_left_right_key_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.input.keyboard.add_left_right_key_callback.cljs$core$IFn$_invoke$arity$variadic = (function (callback,p__58663){
var vec__58664 = p__58663;
var wasd_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58664,(0),null);
sprog.input.keyboard.add_key_callback("ArrowLeft",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(-1)));

sprog.input.keyboard.add_key_callback("ArrowRight",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(1)));

if(cljs.core.truth_(wasd_QMARK_)){
sprog.input.keyboard.add_key_callback("a",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(-1)));

return sprog.input.keyboard.add_key_callback("d",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,(1)));
} else {
return null;
}
}));

(sprog.input.keyboard.add_left_right_key_callback.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.input.keyboard.add_left_right_key_callback.cljs$lang$applyTo = (function (seq58661){
var G__58662 = cljs.core.first(seq58661);
var seq58661__$1 = cljs.core.next(seq58661);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58662,seq58661__$1);
}));


//# sourceMappingURL=sprog.input.keyboard.js.map
