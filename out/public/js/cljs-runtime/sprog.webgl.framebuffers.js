goog.provide('sprog.webgl.framebuffers');
sprog.webgl.framebuffers.target_screen_BANG_ = (function sprog$webgl$framebuffers$target_screen_BANG_(gl){
return gl.bindFramebuffer(gl.FRAMEBUFFER,null);
});
sprog.webgl.framebuffers.target_textures_BANG_ = (function sprog$webgl$framebuffers$target_textures_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41744 = arguments.length;
var i__5767__auto___41745 = (0);
while(true){
if((i__5767__auto___41745 < len__5766__auto___41744)){
args__5772__auto__.push((arguments[i__5767__auto___41745]));

var G__41746 = (i__5767__auto___41745 + (1));
i__5767__auto___41745 = G__41746;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,framebuffer,textures){
gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);

var seq__41725_41748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,textures,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__41726_41749 = null;
var count__41727_41750 = (0);
var i__41728_41751 = (0);
while(true){
if((i__41728_41751 < count__41727_41750)){
var vec__41737_41752 = chunk__41726_41749.cljs$core$IIndexed$_nth$arity$2(null,i__41728_41751);
var texture_41753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41737_41752,(0),null);
var index_41754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41737_41752,(1),null);
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_41754),gl.TEXTURE_2D,texture_41753,(0));


var G__41755 = seq__41725_41748;
var G__41756 = chunk__41726_41749;
var G__41757 = count__41727_41750;
var G__41758 = (i__41728_41751 + (1));
seq__41725_41748 = G__41755;
chunk__41726_41749 = G__41756;
count__41727_41750 = G__41757;
i__41728_41751 = G__41758;
continue;
} else {
var temp__5804__auto___41759 = cljs.core.seq(seq__41725_41748);
if(temp__5804__auto___41759){
var seq__41725_41760__$1 = temp__5804__auto___41759;
if(cljs.core.chunked_seq_QMARK_(seq__41725_41760__$1)){
var c__5565__auto___41761 = cljs.core.chunk_first(seq__41725_41760__$1);
var G__41762 = cljs.core.chunk_rest(seq__41725_41760__$1);
var G__41763 = c__5565__auto___41761;
var G__41764 = cljs.core.count(c__5565__auto___41761);
var G__41765 = (0);
seq__41725_41748 = G__41762;
chunk__41726_41749 = G__41763;
count__41727_41750 = G__41764;
i__41728_41751 = G__41765;
continue;
} else {
var vec__41741_41766 = cljs.core.first(seq__41725_41760__$1);
var texture_41767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41741_41766,(0),null);
var index_41768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41741_41766,(1),null);
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_41768),gl.TEXTURE_2D,texture_41767,(0));


var G__41769 = cljs.core.next(seq__41725_41760__$1);
var G__41770 = null;
var G__41771 = (0);
var G__41772 = (0);
seq__41725_41748 = G__41769;
chunk__41726_41749 = G__41770;
count__41727_41750 = G__41771;
i__41728_41751 = G__41772;
continue;
}
} else {
}
}
break;
}

return gl.drawBuffers(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41720_SHARP_){
return (gl.COLOR_ATTACHMENT0 + p1__41720_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(textures))));
}));

(sprog.webgl.framebuffers.target_textures_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.framebuffers.target_textures_BANG_.cljs$lang$applyTo = (function (seq41721){
var G__41722 = cljs.core.first(seq41721);
var seq41721__$1 = cljs.core.next(seq41721);
var G__41723 = cljs.core.first(seq41721__$1);
var seq41721__$2 = cljs.core.next(seq41721__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41722,G__41723,seq41721__$2);
}));


//# sourceMappingURL=sprog.webgl.framebuffers.js.map
