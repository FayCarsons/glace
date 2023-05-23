goog.provide('sprog.webgl.core');
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.core !== 'undefined') && (typeof sprog.webgl.core.sprogs_atom !== 'undefined')){
} else {
sprog.webgl.core.sprogs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.webgl.core.update_sprogs_BANG_ = (function sprog$webgl$core$update_sprogs_BANG_(){
var seq__44175_44298 = cljs.core.seq(cljs.core.vals(cljs.core.deref(sprog.webgl.core.sprogs_atom)));
var chunk__44176_44299 = null;
var count__44177_44300 = (0);
var i__44178_44301 = (0);
while(true){
if((i__44178_44301 < count__44177_44300)){
var sprog_44302__$1 = chunk__44176_44299.cljs$core$IIndexed$_nth$arity$2(null,i__44178_44301);
var temp__5804__auto___44303 = sprog_44302__$1;
if(cljs.core.truth_(temp__5804__auto___44303)){
var map__44183_44304 = temp__5804__auto___44303;
var map__44183_44305__$1 = cljs.core.__destructure_map(map__44183_44304);
var state_44306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44183_44305__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var gl_44307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44183_44305__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var update_fn_44308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44183_44305__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_44306,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_44307);

if(cljs.core.truth_(update_fn_44308)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_44306,update_fn_44308);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_44306,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_44307);
} else {
}


var G__44313 = seq__44175_44298;
var G__44314 = chunk__44176_44299;
var G__44315 = count__44177_44300;
var G__44316 = (i__44178_44301 + (1));
seq__44175_44298 = G__44313;
chunk__44176_44299 = G__44314;
count__44177_44300 = G__44315;
i__44178_44301 = G__44316;
continue;
} else {
var temp__5804__auto___44317 = cljs.core.seq(seq__44175_44298);
if(temp__5804__auto___44317){
var seq__44175_44318__$1 = temp__5804__auto___44317;
if(cljs.core.chunked_seq_QMARK_(seq__44175_44318__$1)){
var c__5565__auto___44319 = cljs.core.chunk_first(seq__44175_44318__$1);
var G__44320 = cljs.core.chunk_rest(seq__44175_44318__$1);
var G__44321 = c__5565__auto___44319;
var G__44322 = cljs.core.count(c__5565__auto___44319);
var G__44323 = (0);
seq__44175_44298 = G__44320;
chunk__44176_44299 = G__44321;
count__44177_44300 = G__44322;
i__44178_44301 = G__44323;
continue;
} else {
var sprog_44324__$1 = cljs.core.first(seq__44175_44318__$1);
var temp__5804__auto___44325__$1 = sprog_44324__$1;
if(cljs.core.truth_(temp__5804__auto___44325__$1)){
var map__44185_44326 = temp__5804__auto___44325__$1;
var map__44185_44327__$1 = cljs.core.__destructure_map(map__44185_44326);
var state_44328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44185_44327__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var gl_44329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44185_44327__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var update_fn_44330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44185_44327__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_44328,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_44329);

if(cljs.core.truth_(update_fn_44330)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_44328,update_fn_44330);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_44328,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl_44329);
} else {
}


var G__44331 = cljs.core.next(seq__44175_44318__$1);
var G__44332 = null;
var G__44333 = (0);
var G__44334 = (0);
seq__44175_44298 = G__44331;
chunk__44176_44299 = G__44332;
count__44177_44300 = G__44333;
i__44178_44301 = G__44334;
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
var len__5766__auto___44339 = arguments.length;
var i__5767__auto___44340 = (0);
while(true){
if((i__5767__auto___44340 < len__5766__auto___44339)){
args__5772__auto__.push((arguments[i__5767__auto___44340]));

var G__44342 = (i__5767__auto___44340 + (1));
i__5767__auto___44340 = G__44342;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.core.start_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.core.start_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (init_fn_or_value,update_fn,p__44190){
var vec__44191 = p__44190;
var map__44194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44191,(0),null);
var map__44194__$1 = cljs.core.__destructure_map(map__44194);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44194__$1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"default","default",-1987822328));
var append_to_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44194__$1,new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438),true);
var preserve_drawing_buffer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44194__$1,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693));
var stencil_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44194__$1,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248));
var temp__5804__auto___44343 = document.getElementById(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
if(cljs.core.truth_(temp__5804__auto___44343)){
var old_canvas_44344 = temp__5804__auto___44343;
old_canvas_44344.parentNode.removeChild(old_canvas_44344);
} else {
}

if((cljs.core.deref(sprog.webgl.core.sprogs_atom) == null)){
sprog.webgl.core.update_sprogs_BANG_();
} else {
}

var gl = sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"append-to-body?","append-to-body?",-1507622438),append_to_body_QMARK_,new cljs.core.Keyword(null,"preserve-drawing-buffer?","preserve-drawing-buffer?",1989356693),preserve_drawing_buffer_QMARK_,new cljs.core.Keyword(null,"stencil?","stencil?",-1646901248),stencil_QMARK_], null)], 0));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.core.sprogs_atom,cljs.core.assoc,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(((cljs.core.fn_QMARK_(init_fn_or_value))?(init_fn_or_value.cljs$core$IFn$_invoke$arity$1 ? init_fn_or_value.cljs$core$IFn$_invoke$arity$1(gl) : init_fn_or_value.call(null,gl)):init_fn_or_value)),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),update_fn], null));
}));

(sprog.webgl.core.start_sprog_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.core.start_sprog_BANG_.cljs$lang$applyTo = (function (seq44187){
var G__44188 = cljs.core.first(seq44187);
var seq44187__$1 = cljs.core.next(seq44187);
var G__44189 = cljs.core.first(seq44187__$1);
var seq44187__$2 = cljs.core.next(seq44187__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44188,G__44189,seq44187__$2);
}));

sprog.webgl.core.stop_sprog_BANG_ = (function sprog$webgl$core$stop_sprog_BANG_(var_args){
var G__44197 = arguments.length;
switch (G__44197) {
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
var len__5766__auto___44356 = arguments.length;
var i__5767__auto___44357 = (0);
while(true){
if((i__5767__auto___44357 < len__5766__auto___44356)){
args__5772__auto__.push((arguments[i__5767__auto___44357]));

var G__44359 = (i__5767__auto___44357 + (1));
i__5767__auto___44357 = G__44359;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.webgl.core.sprog_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.webgl.core.sprog_state.cljs$core$IFn$_invoke$arity$variadic = (function (sprog_name){
return cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1((function (){var G__44201 = (function (){var or__5043__auto__ = sprog_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var fexpr__44200 = cljs.core.deref(sprog.webgl.core.sprogs_atom);
return (fexpr__44200.cljs$core$IFn$_invoke$arity$1 ? fexpr__44200.cljs$core$IFn$_invoke$arity$1(G__44201) : fexpr__44200.call(null,G__44201));
})()));
}));

(sprog.webgl.core.sprog_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.webgl.core.sprog_state.cljs$lang$applyTo = (function (seq44199){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44199));
}));

sprog.webgl.core.set_sprog_state_BANG_ = (function sprog$webgl$core$set_sprog_state_BANG_(var_args){
var G__44203 = arguments.length;
switch (G__44203) {
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
var G__44206 = arguments.length;
switch (G__44206) {
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
var G__44213 = arguments.length;
switch (G__44213) {
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
return sprog.webgl.core.update_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(sprog_name,(function (p1__44210_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44210_SHARP_,new_state_map], 0));
}));
}));

(sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_state_map){
return sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new_state_map);
}));

(sprog.webgl.core.merge_sprog_state_BANG_.cljs$lang$maxFixedArity = 2);

sprog.webgl.core.sprog_context = (function sprog$webgl$core$sprog_context(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44375 = arguments.length;
var i__5767__auto___44376 = (0);
while(true){
if((i__5767__auto___44376 < len__5766__auto___44375)){
args__5772__auto__.push((arguments[i__5767__auto___44376]));

var G__44378 = (i__5767__auto___44376 + (1));
i__5767__auto___44376 = G__44378;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.webgl.core.sprog_context.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.webgl.core.sprog_context.cljs$core$IFn$_invoke$arity$variadic = (function (sprog_name){
return new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1((function (){var G__44219 = (function (){var or__5043__auto__ = sprog_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var fexpr__44218 = cljs.core.deref(sprog.webgl.core.sprogs_atom);
return (fexpr__44218.cljs$core$IFn$_invoke$arity$1 ? fexpr__44218.cljs$core$IFn$_invoke$arity$1(G__44219) : fexpr__44218.call(null,G__44219));
})());
}));

(sprog.webgl.core.sprog_context.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.webgl.core.sprog_context.cljs$lang$applyTo = (function (seq44215){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44215));
}));

sprog.webgl.core.clear_BANG_ = (function sprog$webgl$core$clear_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44382 = arguments.length;
var i__5767__auto___44383 = (0);
while(true){
if((i__5767__auto___44383 < len__5766__auto___44382)){
args__5772__auto__.push((arguments[i__5767__auto___44383]));

var G__44385 = (i__5767__auto___44383 + (1));
i__5767__auto___44383 = G__44385;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,clear_masks){
return gl.clear(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44221_SHARP_){
var or__5043__auto__ = (function (){var fexpr__44227 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),gl.COLOR_BUFFER_BIT,new cljs.core.Keyword(null,"depth","depth",1768663640),gl.DEPTH_BUFFER_BIT,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),gl.STENCIL_BUFFER_BIT,new cljs.core.Keyword(null,"all","all",892129742),((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT) | gl.STENCIL_BUFFER_BIT)], null);
return (fexpr__44227.cljs$core$IFn$_invoke$arity$1 ? fexpr__44227.cljs$core$IFn$_invoke$arity$1(p1__44221_SHARP_) : fexpr__44227.call(null,p1__44221_SHARP_));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return p1__44221_SHARP_;
}
}),clear_masks)));
}));

(sprog.webgl.core.clear_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.core.clear_BANG_.cljs$lang$applyTo = (function (seq44222){
var G__44223 = cljs.core.first(seq44222);
var seq44222__$1 = cljs.core.next(seq44222);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44223,seq44222__$1);
}));

sprog.webgl.core.enable_BANG_ = (function sprog$webgl$core$enable_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44394 = arguments.length;
var i__5767__auto___44395 = (0);
while(true){
if((i__5767__auto___44395 < len__5766__auto___44394)){
args__5772__auto__.push((arguments[i__5767__auto___44395]));

var G__44397 = (i__5767__auto___44395 + (1));
i__5767__auto___44395 = G__44397;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,enable_values){
var seq__44230 = cljs.core.seq(enable_values);
var chunk__44231 = null;
var count__44232 = (0);
var i__44233 = (0);
while(true){
if((i__44233 < count__44232)){
var enable_value = chunk__44231.cljs$core$IIndexed$_nth$arity$2(null,i__44233);
gl.enable((function (){var or__5043__auto__ = (function (){var fexpr__44236 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__44236.cljs$core$IFn$_invoke$arity$1 ? fexpr__44236.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__44236.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__44406 = seq__44230;
var G__44407 = chunk__44231;
var G__44408 = count__44232;
var G__44409 = (i__44233 + (1));
seq__44230 = G__44406;
chunk__44231 = G__44407;
count__44232 = G__44408;
i__44233 = G__44409;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44230);
if(temp__5804__auto__){
var seq__44230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44230__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44230__$1);
var G__44411 = cljs.core.chunk_rest(seq__44230__$1);
var G__44412 = c__5565__auto__;
var G__44413 = cljs.core.count(c__5565__auto__);
var G__44414 = (0);
seq__44230 = G__44411;
chunk__44231 = G__44412;
count__44232 = G__44413;
i__44233 = G__44414;
continue;
} else {
var enable_value = cljs.core.first(seq__44230__$1);
gl.enable((function (){var or__5043__auto__ = (function (){var fexpr__44238 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__44238.cljs$core$IFn$_invoke$arity$1 ? fexpr__44238.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__44238.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__44415 = cljs.core.next(seq__44230__$1);
var G__44416 = null;
var G__44417 = (0);
var G__44418 = (0);
seq__44230 = G__44415;
chunk__44231 = G__44416;
count__44232 = G__44417;
i__44233 = G__44418;
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
(sprog.webgl.core.enable_BANG_.cljs$lang$applyTo = (function (seq44228){
var G__44229 = cljs.core.first(seq44228);
var seq44228__$1 = cljs.core.next(seq44228);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44229,seq44228__$1);
}));

sprog.webgl.core.disable_BANG_ = (function sprog$webgl$core$disable_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44427 = arguments.length;
var i__5767__auto___44428 = (0);
while(true){
if((i__5767__auto___44428 < len__5766__auto___44427)){
args__5772__auto__.push((arguments[i__5767__auto___44428]));

var G__44429 = (i__5767__auto___44428 + (1));
i__5767__auto___44428 = G__44429;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.core.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.core.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,enable_values){
var seq__44248 = cljs.core.seq(enable_values);
var chunk__44249 = null;
var count__44250 = (0);
var i__44251 = (0);
while(true){
if((i__44251 < count__44250)){
var enable_value = chunk__44249.cljs$core$IIndexed$_nth$arity$2(null,i__44251);
gl.disable((function (){var or__5043__auto__ = (function (){var fexpr__44261 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__44261.cljs$core$IFn$_invoke$arity$1 ? fexpr__44261.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__44261.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__44430 = seq__44248;
var G__44431 = chunk__44249;
var G__44432 = count__44250;
var G__44433 = (i__44251 + (1));
seq__44248 = G__44430;
chunk__44249 = G__44431;
count__44250 = G__44432;
i__44251 = G__44433;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44248);
if(temp__5804__auto__){
var seq__44248__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44248__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44248__$1);
var G__44442 = cljs.core.chunk_rest(seq__44248__$1);
var G__44443 = c__5565__auto__;
var G__44444 = cljs.core.count(c__5565__auto__);
var G__44445 = (0);
seq__44248 = G__44442;
chunk__44249 = G__44443;
count__44250 = G__44444;
i__44251 = G__44445;
continue;
} else {
var enable_value = cljs.core.first(seq__44248__$1);
gl.disable((function (){var or__5043__auto__ = (function (){var fexpr__44263 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sample-coverage","sample-coverage",524015712),new cljs.core.Keyword(null,"stencil-test","stencil-test",-753187452),new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),new cljs.core.Keyword(null,"sample-alpha-to-coverage","sample-alpha-to-coverage",1606499656),new cljs.core.Keyword(null,"polygon-offset-fill","polygon-offset-fill",2029759145),new cljs.core.Keyword(null,"cull-face","cull-face",468441769),new cljs.core.Keyword(null,"dither","dither",1814001173),new cljs.core.Keyword(null,"blend","blend",249565561),new cljs.core.Keyword(null,"scissor-test","scissor-test",-534082049)],[gl.SAMPLE_COVERAGE,gl.STENCIL_TEST,gl.DEPTH_TEST,gl.SAMPLE_ALPHA_TO_COVERAGE,gl.POLYGON_OFFSET_FILL,gl.CULL_FACE,gl.DITHER,gl.BLEND,gl.SCISSOR_TEST]);
return (fexpr__44263.cljs$core$IFn$_invoke$arity$1 ? fexpr__44263.cljs$core$IFn$_invoke$arity$1(enable_value) : fexpr__44263.call(null,enable_value));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return enable_value;
}
})());


var G__44446 = cljs.core.next(seq__44248__$1);
var G__44447 = null;
var G__44448 = (0);
var G__44449 = (0);
seq__44248 = G__44446;
chunk__44249 = G__44447;
count__44250 = G__44448;
i__44251 = G__44449;
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
(sprog.webgl.core.disable_BANG_.cljs$lang$applyTo = (function (seq44240){
var G__44241 = cljs.core.first(seq44240);
var seq44240__$1 = cljs.core.next(seq44240);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44241,seq44240__$1);
}));

sprog.webgl.core.set_stencil_func_BANG_ = (function sprog$webgl$core$set_stencil_func_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44454 = arguments.length;
var i__5767__auto___44455 = (0);
while(true){
if((i__5767__auto___44455 < len__5766__auto___44454)){
args__5772__auto__.push((arguments[i__5767__auto___44455]));

var G__44460 = (i__5767__auto___44455 + (1));
i__5767__auto___44455 = G__44460;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.core.set_stencil_func_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.core.set_stencil_func_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,func,p__44268){
var vec__44272 = p__44268;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44272,(0),null);
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44272,(1),null);
return gl.stencilFunc((function (){var or__5043__auto__ = (function (){var fexpr__44275 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"lequal","lequal",-1624074065),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"never","never",50472977),new cljs.core.Keyword(null,"not-equal","not-equal",1611286641),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"gequal","gequal",146530327),new cljs.core.Keyword(null,"greater","greater",1370260601),new cljs.core.Keyword(null,"equal","equal",-1921681350),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"always","always",-1772028770)],[gl.LEQUAL,gl.NOTEQUAL,gl.GREATER,gl.LEQUAL,gl.GEQUAL,gl.NEVER,gl.NOTEQUAL,gl.LESS,gl.GEQUAL,gl.GREATER,gl.EQUAL,gl.EQUAL,gl.LESS,gl.ALWAYS]);
return (fexpr__44275.cljs$core$IFn$_invoke$arity$1 ? fexpr__44275.cljs$core$IFn$_invoke$arity$1(func) : fexpr__44275.call(null,func));
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
(sprog.webgl.core.set_stencil_func_BANG_.cljs$lang$applyTo = (function (seq44265){
var G__44266 = cljs.core.first(seq44265);
var seq44265__$1 = cljs.core.next(seq44265);
var G__44267 = cljs.core.first(seq44265__$1);
var seq44265__$2 = cljs.core.next(seq44265__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44266,G__44267,seq44265__$2);
}));

sprog.webgl.core.set_stencil_op_BANG_ = (function sprog$webgl$core$set_stencil_op_BANG_(var_args){
var G__44287 = arguments.length;
switch (G__44287) {
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
var vec__44288 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (op_param){
var or__5043__auto__ = (function (){var fexpr__44291 = cljs.core.PersistentHashMap.fromArrays([(0),new cljs.core.Keyword(null,"zero","zero",-858964576),new cljs.core.Keyword(null,"incr-wrap","incr-wrap",-855267261),new cljs.core.Keyword(null,"incr","incr",-1815164090),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"inc-wrap","inc-wrap",-1301781235),new cljs.core.Keyword(null,"inc","inc",-1316026094),new cljs.core.Keyword(null,"decr-wrap","decr-wrap",-176525453),new cljs.core.Keyword(null,"dec","dec",1888433436),new cljs.core.Keyword(null,"decr","decr",974035965),new cljs.core.Keyword(null,"keep","keep",-2133338530),new cljs.core.Keyword(null,"invert","invert",1553577503)],[gl.ZERO,gl.ZERO,gl.INCR_WRAP,gl.INCR,gl.REPLACE,gl.INCR_WRAP,gl.INCR,gl.DECR_WARP,gl.DEC,gl.DECR,gl.KEEP,gl.INVERT]);
return (fexpr__44291.cljs$core$IFn$_invoke$arity$1 ? fexpr__44291.cljs$core$IFn$_invoke$arity$1(op_param) : fexpr__44291.call(null,op_param));
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
var gl_fail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(0),null);
var gl_zfail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(1),null);
var gl_zpass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44288,(2),null);
return gl.stencilOp(gl_fail,gl_zfail,gl_zpass);
}));

(sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,all){
return sprog.webgl.core.set_stencil_op_BANG_.cljs$core$IFn$_invoke$arity$4(gl,all,all,all);
}));

(sprog.webgl.core.set_stencil_op_BANG_.cljs$lang$maxFixedArity = 4);

sprog.webgl.core.set_color_mask_BANG_ = (function sprog$webgl$core$set_color_mask_BANG_(var_args){
var G__44297 = arguments.length;
switch (G__44297) {
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
