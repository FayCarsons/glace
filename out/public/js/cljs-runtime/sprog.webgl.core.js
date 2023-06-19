goog.provide('sprog.webgl.core');
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.core !== 'undefined') && (typeof sprog.webgl.core.sprogs_atom !== 'undefined')){
} else {
sprog.webgl.core.sprogs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.webgl.core.update_sprogs_BANG_ = (function sprog$webgl$core$update_sprogs_BANG_(){
var seq__31179_31387 = cljs.core.seq(cljs.core.vals(cljs.core.deref(sprog.webgl.core.sprogs_atom)));
var chunk__31181_31388 = null;
var count__31182_31389 = (0);
var i__31183_31390 = (0);
while(true){
if((i__31183_31390 < count__31182_31389)){
var sprog_31391__$1 = chunk__31181_31388.cljs$core$IIndexed$_nth$arity$2(null,i__31183_31390);
var temp__5804__auto___31392 = sprog_31391__$1;
if(cljs.core.truth_(temp__5804__auto___31392)){
var map__31191_31393 = temp__5804__auto___31392;
var map__31191_31394__$1 = cljs.core.__destructure_map(map__31191_31393);
var state_31395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31191_31394__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var gl_31396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31191_31394__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var update_fn_31397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31191_31394__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_31395,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_31396);

if(cljs.core.truth_(update_fn_31397)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_31395,update_fn_31397);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_31395,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_31396);
} else {
}


var G__31398 = seq__31179_31387;
var G__31399 = chunk__31181_31388;
var G__31400 = count__31182_31389;
var G__31401 = (i__31183_31390 + (1));
seq__31179_31387 = G__31398;
chunk__31181_31388 = G__31399;
count__31182_31389 = G__31400;
i__31183_31390 = G__31401;
continue;
} else {
var temp__5804__auto___31402 = cljs.core.seq(seq__31179_31387);
if(temp__5804__auto___31402){
var seq__31179_31404__$1 = temp__5804__auto___31402;
if(cljs.core.chunked_seq_QMARK_(seq__31179_31404__$1)){
var c__5565__auto___31413 = cljs.core.chunk_first(seq__31179_31404__$1);
var G__31414 = cljs.core.chunk_rest(seq__31179_31404__$1);
var G__31415 = c__5565__auto___31413;
var G__31416 = cljs.core.count(c__5565__auto___31413);
var G__31417 = (0);
seq__31179_31387 = G__31414;
chunk__31181_31388 = G__31415;
count__31182_31389 = G__31416;
i__31183_31390 = G__31417;
continue;
} else {
var sprog_31418__$1 = cljs.core.first(seq__31179_31404__$1);
var temp__5804__auto___31419__$1 = sprog_31418__$1;
if(cljs.core.truth_(temp__5804__auto___31419__$1)){
var map__31196_31420 = temp__5804__auto___31419__$1;
var map__31196_31421__$1 = cljs.core.__destructure_map(map__31196_31420);
var state_31422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196_31421__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var gl_31423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196_31421__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var update_fn_31424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196_31421__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_31422,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_31423);

if(cljs.core.truth_(update_fn_31424)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_31422,update_fn_31424);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_31422,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_31423);
} else {
}


var G__31425 = cljs.core.next(seq__31179_31404__$1);
var G__31426 = null;
var G__31427 = (0);
var G__31428 = (0);
seq__31179_31387 = G__31425;
chunk__31181_31388 = G__31426;
count__31182_31389 = G__31427;
i__31183_31390 = G__31428;
continue;
}
} else {
}
}
break;
}

return requestAnimationFrame(sprog.webgl.core.update_sprogs_BANG_);
});
sprog.webgl.core.start_sprog_BANG_ = (function sprog$webgl$core$start_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31429 = arguments.length;
var i__5767__auto___31430 = (0);
while(true){
if((i__5767__auto___31430 < len__5766__auto___31429)){
args__5772__auto__.push((arguments[i__5767__auto___31430]));

var G__31431 = (i__5767__auto___31430 + (1));
i__5767__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.core.start_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.core.start_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (init_fn_or_value,update_fn,p__31203){
var vec__31204 = p__31203;
var map__31207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31204,(0),null);
var map__31207__$1 = cljs.core.__destructure_map(map__31207);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31207__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31207__$1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"default","default",-1987822328));
var append_to_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31207__$1,new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438),true);
var preserve_drawing_buffer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31207__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693));
var stencil_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31207__$1,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248));
var temp__5804__auto___31447 = document.getElementById(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
if(cljs.core.truth_(temp__5804__auto___31447)){
var old_canvas_31470 = temp__5804__auto___31447;
old_canvas_31470.parentNode.removeChild(old_canvas_31470);
} else {
}

if((cljs.core.deref(sprog.webgl.core.sprogs_atom) == null)){
sprog.webgl.core.update_sprogs_BANG_();
} else {
}

var gl = (cljs.core.truth_(canvas)?sprog.dom.canvas.get_context.cljs$core$IFn$_invoke$arity$variadic(canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, ["preserveDrawingBuffer",cljs.core.boolean$(preserve_drawing_buffer_QMARK_),"stencil",cljs.core.boolean$(stencil_QMARK_)], null)], 0)):sprog.dom.canvas.create_context.cljs$core$IFn$_invoke$arity$variadic(name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas-element","canvas-element",1011047486),canvas,new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438),append_to_body_QMARK_,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693),preserve_drawing_buffer_QMARK_,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248),stencil_QMARK_], null)], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.core.sprogs_atom,cljs.core.assoc,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.fn_QMARK_(init_fn_or_value))?(init_fn_or_value.cljs$core$IFn$_invoke$arity$1 ? init_fn_or_value.cljs$core$IFn$_invoke$arity$1(gl) : init_fn_or_value.call(null,gl)):init_fn_or_value)),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),update_fn], null));
}));

(sprog.webgl.core.start_sprog_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.core.start_sprog_BANG_.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
var G__31202 = cljs.core.first(seq31200__$1);
var seq31200__$2 = cljs.core.next(seq31200__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31201,G__31202,seq31200__$2);
}));

sprog.webgl.core.stop_sprog_BANG_ = (function sprog$webgl$core$stop_sprog_BANG_(var_args){
var G__31213 = arguments.length;
switch (G__31213) {
case 1:
return sprog.webgl.core.stop_sprog_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return sprog.webgl.core.stop_sprog_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.stop_sprog_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (sprog_name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sprog.webgl.core.sprogs_atom,cljs.core.dissoc,sprog_name);
}));

(sprog.webgl.core.stop_sprog_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return sprog.webgl.core.stop_sprog_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(sprog.webgl.core.stop_sprog_BANG_.cljs$lang$maxFixedArity = 1);

sprog.webgl.core.sprog_state = (function sprog$webgl$core$sprog_state(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31472 = arguments.length;
var i__5767__auto___31473 = (0);
while(true){
if((i__5767__auto___31473 < len__5766__auto___31472)){
args__5772__auto__.push((arguments[i__5767__auto___31473]));

var G__31474 = (i__5767__auto___31473 + (1));
i__5767__auto___31473 = G__31474;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.webgl.core.sprog_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.webgl.core.sprog_state.cljs$core$IFn$_invoke$arity$variadic = (function (sprog_name){
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1((function (){var G__31222 = (function (){var or__5043__auto__ = sprog_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var fexpr__31221 = cljs.core.deref(sprog.webgl.core.sprogs_atom);
return (fexpr__31221.cljs$core$IFn$_invoke$arity$1 ? fexpr__31221.cljs$core$IFn$_invoke$arity$1(G__31222) : fexpr__31221.call(null,G__31222));
})()));
}));

(sprog.webgl.core.sprog_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.webgl.core.sprog_state.cljs$lang$applyTo = (function (seq31215){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31215));
}));

sprog.webgl.core.set_sprog_state_BANG_ = (function sprog$webgl$core$set_sprog_state_BANG_(var_args){
var G__31233 = arguments.length;
switch (G__31233) {
case 2:
return sprog.webgl.core.set_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return sprog.webgl.core.set_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.set_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sprog_name,new_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.webgl.core.sprogs_atom,cljs.core.update,sprog_name,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),(function (state){
cljs.core.reset_BANG_(state,new_state);

return state;
})], 0));

return new_state;
}));

(sprog.webgl.core.set_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_state){
return sprog.webgl.core.set_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new_state);
}));

(sprog.webgl.core.set_sprog_state_BANG_.cljs$lang$maxFixedArity = 2);

sprog.webgl.core.update_sprog_state_BANG_ = (function sprog$webgl$core$update_sprog_state_BANG_(var_args){
var G__31238 = arguments.length;
switch (G__31238) {
case 2:
return sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sprog_name,update_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sprog.webgl.core.sprogs_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog_name,new cljs.core.Keyword(null,"state","state",-1988618099)], null)),update_fn);

return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sprog.webgl.core.sprogs_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog_name,new cljs.core.Keyword(null,"state","state",-1988618099)], null)));
}));

(sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (update_fn){
return sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),update_fn);
}));

(sprog.webgl.core.update_sprog_state_BANG_.cljs$lang$maxFixedArity = 2);

sprog.webgl.core.merge_sprog_state_BANG_ = (function sprog$webgl$core$merge_sprog_state_BANG_(var_args){
var G__31245 = arguments.length;
switch (G__31245) {
case 2:
return sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sprog_name,new_state_map){
return sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(sprog_name,(function (p1__31243_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__31243_SHARP_,new_state_map], 0));
}));
}));

(sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_state_map){
return sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new_state_map);
}));

(sprog.webgl.core.merge_sprog_state_BANG_.cljs$lang$maxFixedArity = 2);

sprog.webgl.core.sprog_context = (function sprog$webgl$core$sprog_context(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31496 = arguments.length;
var i__5767__auto___31497 = (0);
while(true){
if((i__5767__auto___31497 < len__5766__auto___31496)){
args__5772__auto__.push((arguments[i__5767__auto___31497]));

var G__31498 = (i__5767__auto___31497 + (1));
i__5767__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.webgl.core.sprog_context.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.webgl.core.sprog_context.cljs$core$IFn$_invoke$arity$variadic = (function (sprog_name){
return new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1((function (){var G__31248 = (function (){var or__5043__auto__ = sprog_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var fexpr__31247 = cljs.core.deref(sprog.webgl.core.sprogs_atom);
return (fexpr__31247.cljs$core$IFn$_invoke$arity$1 ? fexpr__31247.cljs$core$IFn$_invoke$arity$1(G__31248) : fexpr__31247.call(null,G__31248));
})());
}));

(sprog.webgl.core.sprog_context.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.webgl.core.sprog_context.cljs$lang$applyTo = (function (seq31246){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31246));
}));

sprog.webgl.core.clear_BANG_ = (function sprog$webgl$core$clear_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31513 = arguments.length;
var i__5767__auto___31517 = (0);
while(true){
if((i__5767__auto___31517 < len__5766__auto___31513)){
args__5772__auto__.push((arguments[i__5767__auto___31517]));

var G__31518 = (i__5767__auto___31517 + (1));
i__5767__auto___31517 = G__31518;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,clear_masks){
return gl.clear(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31250_SHARP_){
var or__5043__auto__ = (function (){var fexpr__31258 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),gl.COLOR_BUFFER_BIT,new cljs.core.Keyword(null,"depth","depth",1768663640),gl.DEPTH_BUFFER_BIT,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),gl.STENCIL_BUFFER_BIT,new cljs.core.Keyword(null,"all","all",892129742),((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) | gl.STENCIL_BUFFER_BIT)], null);
return (fexpr__31258.cljs$core$IFn$_invoke$arity$1 ? fexpr__31258.cljs$core$IFn$_invoke$arity$1(p1__31250_SHARP_) : fexpr__31258.call(null,p1__31250_SHARP_));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return p1__31250_SHARP_;
}
}),clear_masks)));
}));

(sprog.webgl.core.clear_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.core.clear_BANG_.cljs$lang$applyTo = (function (seq31251){
var G__31252 = cljs.core.first(seq31251);
var seq31251__$1 = cljs.core.next(seq31251);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31252,seq31251__$1);
}));

sprog.webgl.core.enable_BANG_ = (function sprog$webgl$core$enable_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31522 = arguments.length;
var i__5767__auto___31523 = (0);
while(true){
if((i__5767__auto___31523 < len__5766__auto___31522)){
args__5772__auto__.push((arguments[i__5767__auto___31523]));

var G__31524 = (i__5767__auto___31523 + (1));
i__5767__auto___31523 = G__31524;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,enable_values){
var seq__31261 = cljs.core.seq(enable_values);
var chunk__31262 = null;
var count__31263 = (0);
var i__31264 = (0);
while(true){
if((i__31264 < count__31263)){
var enable_value = chunk__31262.cljs$core$IIndexed$_nth$arity$2(null,i__31264);
gl.enable((function (){var or__5043__auto__ = (function (){var fexpr__31282 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__31282.cljs$core$IFn$_invoke$arity$1 ? fexpr__31282.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__31282.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__31543 = seq__31261;
var G__31544 = chunk__31262;
var G__31545 = count__31263;
var G__31546 = (i__31264 + (1));
seq__31261 = G__31543;
chunk__31262 = G__31544;
count__31263 = G__31545;
i__31264 = G__31546;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31261);
if(temp__5804__auto__){
var seq__31261__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31261__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31261__$1);
var G__31547 = cljs.core.chunk_rest(seq__31261__$1);
var G__31548 = c__5565__auto__;
var G__31549 = cljs.core.count(c__5565__auto__);
var G__31550 = (0);
seq__31261 = G__31547;
chunk__31262 = G__31548;
count__31263 = G__31549;
i__31264 = G__31550;
continue;
} else {
var enable_value = cljs.core.first(seq__31261__$1);
gl.enable((function (){var or__5043__auto__ = (function (){var fexpr__31284 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__31284.cljs$core$IFn$_invoke$arity$1 ? fexpr__31284.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__31284.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__31552 = cljs.core.next(seq__31261__$1);
var G__31553 = null;
var G__31554 = (0);
var G__31555 = (0);
seq__31261 = G__31552;
chunk__31262 = G__31553;
count__31263 = G__31554;
i__31264 = G__31555;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.webgl.core.enable_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.core.enable_BANG_.cljs$lang$applyTo = (function (seq31259){
var G__31260 = cljs.core.first(seq31259);
var seq31259__$1 = cljs.core.next(seq31259);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31260,seq31259__$1);
}));

sprog.webgl.core.disable_BANG_ = (function sprog$webgl$core$disable_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31557 = arguments.length;
var i__5767__auto___31558 = (0);
while(true){
if((i__5767__auto___31558 < len__5766__auto___31557)){
args__5772__auto__.push((arguments[i__5767__auto___31558]));

var G__31559 = (i__5767__auto___31558 + (1));
i__5767__auto___31558 = G__31559;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,enable_values){
var seq__31287 = cljs.core.seq(enable_values);
var chunk__31288 = null;
var count__31289 = (0);
var i__31290 = (0);
while(true){
if((i__31290 < count__31289)){
var enable_value = chunk__31288.cljs$core$IIndexed$_nth$arity$2(null,i__31290);
gl.disable((function (){var or__5043__auto__ = (function (){var fexpr__31303 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__31303.cljs$core$IFn$_invoke$arity$1 ? fexpr__31303.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__31303.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__31562 = seq__31287;
var G__31563 = chunk__31288;
var G__31564 = count__31289;
var G__31565 = (i__31290 + (1));
seq__31287 = G__31562;
chunk__31288 = G__31563;
count__31289 = G__31564;
i__31290 = G__31565;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31287);
if(temp__5804__auto__){
var seq__31287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31287__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31287__$1);
var G__31566 = cljs.core.chunk_rest(seq__31287__$1);
var G__31567 = c__5565__auto__;
var G__31568 = cljs.core.count(c__5565__auto__);
var G__31569 = (0);
seq__31287 = G__31566;
chunk__31288 = G__31567;
count__31289 = G__31568;
i__31290 = G__31569;
continue;
} else {
var enable_value = cljs.core.first(seq__31287__$1);
gl.disable((function (){var or__5043__auto__ = (function (){var fexpr__31322 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__31322.cljs$core$IFn$_invoke$arity$1 ? fexpr__31322.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__31322.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__31573 = cljs.core.next(seq__31287__$1);
var G__31574 = null;
var G__31575 = (0);
var G__31576 = (0);
seq__31287 = G__31573;
chunk__31288 = G__31574;
count__31289 = G__31575;
i__31290 = G__31576;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.webgl.core.disable_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.core.disable_BANG_.cljs$lang$applyTo = (function (seq31285){
var G__31286 = cljs.core.first(seq31285);
var seq31285__$1 = cljs.core.next(seq31285);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31286,seq31285__$1);
}));

sprog.webgl.core.set_stencil_func_BANG_ = (function sprog$webgl$core$set_stencil_func_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31578 = arguments.length;
var i__5767__auto___31579 = (0);
while(true){
if((i__5767__auto___31579 < len__5766__auto___31578)){
args__5772__auto__.push((arguments[i__5767__auto___31579]));

var G__31580 = (i__5767__auto___31579 + (1));
i__5767__auto___31579 = G__31580;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.core.set_stencil_func_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.core.set_stencil_func_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,func,p__31348){
var vec__31349 = p__31348;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(0),null);
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(1),null);
return gl.stencilFunc((function (){var or__5043__auto__ = (function (){var fexpr__31352 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"lequal","lequal",-1624074065),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"never","never",50472977),new cljs.core.Keyword(null,"not-equal","not-equal",1611286641),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"gequal","gequal",146530327),new cljs.core.Keyword(null,"greater","greater",1370260601),new cljs.core.Keyword(null,"equal","equal",-1921681350),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"always","always",-1772028770)],[gl.LEQUAL,gl.NOTEQUAL,gl.GREATER,gl.LEQUAL,gl.GEQUAL,gl.NEVER,gl.NOTEQUAL,gl.LESS,gl.GEQUAL,gl.GREATER,gl.EQUAL,gl.EQUAL,gl.LESS,gl.ALWAYS]);
return (fexpr__31352.cljs$core$IFn$_invoke$arity$1 ? fexpr__31352.cljs$core$IFn$_invoke$arity$1(func) : fexpr__31352.call(null,func));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return func;
}
})(),(function (){var or__5043__auto__ = ref;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})(),(function (){var or__5043__auto__ = mask;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (255);
}
})());
}));

(sprog.webgl.core.set_stencil_func_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.core.set_stencil_func_BANG_.cljs$lang$applyTo = (function (seq31325){
var G__31326 = cljs.core.first(seq31325);
var seq31325__$1 = cljs.core.next(seq31325);
var G__31327 = cljs.core.first(seq31325__$1);
var seq31325__$2 = cljs.core.next(seq31325__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31326,G__31327,seq31325__$2);
}));

sprog.webgl.core.set_stencil_op_BANG_ = (function sprog$webgl$core$set_stencil_op_BANG_(var_args){
var G__31354 = arguments.length;
switch (G__31354) {
case 4:
return sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (gl,fail,zfail,zpass){
var vec__31358 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (op_param){
var or__5043__auto__ = (function (){var fexpr__31364 = cljs.core.PersistentHashMap.fromArrays([(0),new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.Keyword(null,"incr-wrap","incr-wrap",-855267261),new cljs.core.Keyword(null,"incr","incr",-1815164090),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"inc-wrap","inc-wrap",-1301781235),new cljs.core.Keyword(null,"inc","inc",-1316026094),new cljs.core.Keyword(null,"decr-wrap","decr-wrap",-176525453),new cljs.core.Keyword(null,"dec","dec",1888433436),new cljs.core.Keyword(null,"decr","decr",974035965),new cljs.core.Keyword(null,"keep","keep",-2133338530),new cljs.core.Keyword(null,"invert","invert",1553577503)],[gl.ZERO,gl.ZERO,gl.INCR_WRAP,gl.INCR,gl.REPLACE,gl.INCR_WRAP,gl.INCR,gl.DECR_WARP,gl.DEC,gl.DECR,gl.KEEP,gl.INVERT]);
return (fexpr__31364.cljs$core$IFn$_invoke$arity$1 ? fexpr__31364.cljs$core$IFn$_invoke$arity$1(op_param) : fexpr__31364.call(null,op_param));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = op_param;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return gl.KEEP;
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fail,zfail,zpass], null));
var gl_fail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358,(0),null);
var gl_zfail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358,(1),null);
var gl_zpass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31358,(2),null);
return gl.stencilOp(gl_fail,gl_zfail,gl_zpass);
}));

(sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,all){
return sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$4(gl,all,all,all);
}));

(sprog.webgl.core.set_stencil_op_BANG_.cljs$lang$maxFixedArity = 4);

sprog.webgl.core.set_color_mask_BANG_ = (function sprog$webgl$core$set_color_mask_BANG_(var_args){
var G__31372 = arguments.length;
switch (G__31372) {
case 5:
return sprog.webgl.core.set_color_mask_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return sprog.webgl.core.set_color_mask_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.webgl.core.set_color_mask_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (gl,r,g,b,a){
return gl.colorMask(cljs.core.boolean$(r),cljs.core.boolean$(g),cljs.core.boolean$(b),cljs.core.boolean$(a));
}));

(sprog.webgl.core.set_color_mask_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,all_channels){
return sprog.webgl.core.set_color_mask_BANG_.cljs$core$IFn$_invoke$arity$5(gl,all_channels,all_channels,all_channels,all_channels);
}));

(sprog.webgl.core.set_color_mask_BANG_.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=sprog.webgl.core.js.map
