goog.provide('sprog.input.mouse');
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.mouse !== 'undefined') && (typeof sprog.input.mouse.mouse_atom !== 'undefined')){
} else {
sprog.input.mouse.mouse_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"down?","down?",1701019493),false,new cljs.core.Keyword(null,"present?","present?",843821978),false], null));
}
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.mouse !== 'undefined') && (typeof sprog.input.mouse.mouse_callbacks_atom !== 'undefined')){
} else {
sprog.input.mouse.mouse_callbacks_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.input.mouse.add_mouse_down_callback = (function sprog$input$mouse$add_mouse_down_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_mouse_up_callback = (function sprog$input$mouse$add_mouse_up_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_scroll_x_callback = (function sprog$input$mouse$add_scroll_x_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_scroll_y_callback = (function sprog$input$mouse$add_scroll_y_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.mouse_pos = (function sprog$input$mouse$mouse_pos(){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
sprog.input.mouse.mouse_down_QMARK_ = (function sprog$input$mouse$mouse_down_QMARK_(){
return new cljs.core.Keyword(null,"down?","down?",1701019493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
sprog.input.mouse.mouse_present_QMARK_ = (function sprog$input$mouse$mouse_present_QMARK_(){
return new cljs.core.Keyword(null,"present?","present?",843821978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
(document.onmousemove = (function (event){
var x = event.clientX;
var y = event.clientY;
var w = window.innerWidth;
var h = window.innerHeight;
var s = (function (){var x__5131__auto__ = w;
var y__5132__auto__ = h;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - ((w - s) / (2))) / s),((y - ((h - s) / (2))) / s)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmousedown = (function (_){
var seq__44419_44532 = cljs.core.seq(new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__44420_44533 = null;
var count__44421_44534 = (0);
var i__44422_44535 = (0);
while(true){
if((i__44422_44535 < count__44421_44534)){
var callback_44536 = chunk__44420_44533.cljs$core$IIndexed$_nth$arity$2(null,i__44422_44535);
(callback_44536.cljs$core$IFn$_invoke$arity$0 ? callback_44536.cljs$core$IFn$_invoke$arity$0() : callback_44536.call(null));


var G__44537 = seq__44419_44532;
var G__44538 = chunk__44420_44533;
var G__44539 = count__44421_44534;
var G__44540 = (i__44422_44535 + (1));
seq__44419_44532 = G__44537;
chunk__44420_44533 = G__44538;
count__44421_44534 = G__44539;
i__44422_44535 = G__44540;
continue;
} else {
var temp__5804__auto___44541 = cljs.core.seq(seq__44419_44532);
if(temp__5804__auto___44541){
var seq__44419_44542__$1 = temp__5804__auto___44541;
if(cljs.core.chunked_seq_QMARK_(seq__44419_44542__$1)){
var c__5565__auto___44543 = cljs.core.chunk_first(seq__44419_44542__$1);
var G__44544 = cljs.core.chunk_rest(seq__44419_44542__$1);
var G__44545 = c__5565__auto___44543;
var G__44546 = cljs.core.count(c__5565__auto___44543);
var G__44547 = (0);
seq__44419_44532 = G__44544;
chunk__44420_44533 = G__44545;
count__44421_44534 = G__44546;
i__44422_44535 = G__44547;
continue;
} else {
var callback_44548 = cljs.core.first(seq__44419_44542__$1);
(callback_44548.cljs$core$IFn$_invoke$arity$0 ? callback_44548.cljs$core$IFn$_invoke$arity$0() : callback_44548.call(null));


var G__44549 = cljs.core.next(seq__44419_44542__$1);
var G__44550 = null;
var G__44551 = (0);
var G__44552 = (0);
seq__44419_44532 = G__44549;
chunk__44420_44533 = G__44550;
count__44421_44534 = G__44551;
i__44422_44535 = G__44552;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmouseup = (function (_){
var seq__44456_44553 = cljs.core.seq(new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__44457_44554 = null;
var count__44458_44555 = (0);
var i__44459_44556 = (0);
while(true){
if((i__44459_44556 < count__44458_44555)){
var callback_44557 = chunk__44457_44554.cljs$core$IIndexed$_nth$arity$2(null,i__44459_44556);
(callback_44557.cljs$core$IFn$_invoke$arity$0 ? callback_44557.cljs$core$IFn$_invoke$arity$0() : callback_44557.call(null));


var G__44558 = seq__44456_44553;
var G__44559 = chunk__44457_44554;
var G__44560 = count__44458_44555;
var G__44561 = (i__44459_44556 + (1));
seq__44456_44553 = G__44558;
chunk__44457_44554 = G__44559;
count__44458_44555 = G__44560;
i__44459_44556 = G__44561;
continue;
} else {
var temp__5804__auto___44562 = cljs.core.seq(seq__44456_44553);
if(temp__5804__auto___44562){
var seq__44456_44563__$1 = temp__5804__auto___44562;
if(cljs.core.chunked_seq_QMARK_(seq__44456_44563__$1)){
var c__5565__auto___44564 = cljs.core.chunk_first(seq__44456_44563__$1);
var G__44565 = cljs.core.chunk_rest(seq__44456_44563__$1);
var G__44566 = c__5565__auto___44564;
var G__44567 = cljs.core.count(c__5565__auto___44564);
var G__44568 = (0);
seq__44456_44553 = G__44565;
chunk__44457_44554 = G__44566;
count__44458_44555 = G__44567;
i__44459_44556 = G__44568;
continue;
} else {
var callback_44569 = cljs.core.first(seq__44456_44563__$1);
(callback_44569.cljs$core$IFn$_invoke$arity$0 ? callback_44569.cljs$core$IFn$_invoke$arity$0() : callback_44569.call(null));


var G__44570 = cljs.core.next(seq__44456_44563__$1);
var G__44571 = null;
var G__44572 = (0);
var G__44573 = (0);
seq__44456_44553 = G__44570;
chunk__44457_44554 = G__44571;
count__44458_44555 = G__44572;
i__44459_44556 = G__44573;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmousewheel = (function (event){
var seq__44500_44574 = cljs.core.seq(new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__44501_44575 = null;
var count__44502_44576 = (0);
var i__44503_44577 = (0);
while(true){
if((i__44503_44577 < count__44502_44576)){
var callback_44578 = chunk__44501_44575.cljs$core$IIndexed$_nth$arity$2(null,i__44503_44577);
(callback_44578.cljs$core$IFn$_invoke$arity$1 ? callback_44578.cljs$core$IFn$_invoke$arity$1(event.deltaX) : callback_44578.call(null,event.deltaX));


var G__44579 = seq__44500_44574;
var G__44580 = chunk__44501_44575;
var G__44581 = count__44502_44576;
var G__44582 = (i__44503_44577 + (1));
seq__44500_44574 = G__44579;
chunk__44501_44575 = G__44580;
count__44502_44576 = G__44581;
i__44503_44577 = G__44582;
continue;
} else {
var temp__5804__auto___44583 = cljs.core.seq(seq__44500_44574);
if(temp__5804__auto___44583){
var seq__44500_44584__$1 = temp__5804__auto___44583;
if(cljs.core.chunked_seq_QMARK_(seq__44500_44584__$1)){
var c__5565__auto___44585 = cljs.core.chunk_first(seq__44500_44584__$1);
var G__44586 = cljs.core.chunk_rest(seq__44500_44584__$1);
var G__44587 = c__5565__auto___44585;
var G__44588 = cljs.core.count(c__5565__auto___44585);
var G__44589 = (0);
seq__44500_44574 = G__44586;
chunk__44501_44575 = G__44587;
count__44502_44576 = G__44588;
i__44503_44577 = G__44589;
continue;
} else {
var callback_44590 = cljs.core.first(seq__44500_44584__$1);
(callback_44590.cljs$core$IFn$_invoke$arity$1 ? callback_44590.cljs$core$IFn$_invoke$arity$1(event.deltaX) : callback_44590.call(null,event.deltaX));


var G__44591 = cljs.core.next(seq__44500_44584__$1);
var G__44592 = null;
var G__44593 = (0);
var G__44594 = (0);
seq__44500_44574 = G__44591;
chunk__44501_44575 = G__44592;
count__44502_44576 = G__44593;
i__44503_44577 = G__44594;
continue;
}
} else {
}
}
break;
}

var seq__44508 = cljs.core.seq(new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__44509 = null;
var count__44510 = (0);
var i__44511 = (0);
while(true){
if((i__44511 < count__44510)){
var callback = chunk__44509.cljs$core$IIndexed$_nth$arity$2(null,i__44511);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(event.deltaY) : callback.call(null,event.deltaY));


var G__44595 = seq__44508;
var G__44596 = chunk__44509;
var G__44597 = count__44510;
var G__44598 = (i__44511 + (1));
seq__44508 = G__44595;
chunk__44509 = G__44596;
count__44510 = G__44597;
i__44511 = G__44598;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44508);
if(temp__5804__auto__){
var seq__44508__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44508__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44508__$1);
var G__44599 = cljs.core.chunk_rest(seq__44508__$1);
var G__44600 = c__5565__auto__;
var G__44601 = cljs.core.count(c__5565__auto__);
var G__44602 = (0);
seq__44508 = G__44599;
chunk__44509 = G__44600;
count__44510 = G__44601;
i__44511 = G__44602;
continue;
} else {
var callback = cljs.core.first(seq__44508__$1);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(event.deltaY) : callback.call(null,event.deltaY));


var G__44603 = cljs.core.next(seq__44508__$1);
var G__44604 = null;
var G__44605 = (0);
var G__44606 = (0);
seq__44508 = G__44603;
chunk__44509 = G__44604;
count__44510 = G__44605;
i__44511 = G__44606;
continue;
}
} else {
return null;
}
}
break;
}
}));
(document.onmouseenter = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.mouse.mouse_atom,(function (p1__44521_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44521_SHARP_,new cljs.core.Keyword(null,"present?","present?",843821978),true);
}));
}));
(document.onmouseleave = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.mouse.mouse_atom,(function (p1__44525_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44525_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null)),new cljs.core.Keyword(null,"down?","down?",1701019493),false),new cljs.core.Keyword(null,"present?","present?",843821978),false);
}));
}));

//# sourceMappingURL=sprog.input.mouse.js.map
