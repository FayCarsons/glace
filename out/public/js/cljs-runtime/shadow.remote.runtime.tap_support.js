goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__42483,p__42484){
var map__42485 = p__42483;
var map__42485__$1 = cljs.core.__destructure_map(map__42485);
var svc = map__42485__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42485__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42485__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42485__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42486 = p__42484;
var map__42486__$1 = cljs.core.__destructure_map(map__42486);
var msg = map__42486__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42486__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__42490,p__42491){
var map__42492 = p__42490;
var map__42492__$1 = cljs.core.__destructure_map(map__42492);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42492__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__42494 = p__42491;
var map__42494__$1 = cljs.core.__destructure_map(map__42494);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42494__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__42500,p__42501){
var map__42503 = p__42500;
var map__42503__$1 = cljs.core.__destructure_map(map__42503);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42503__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42503__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42504 = p__42501;
var map__42504__$1 = cljs.core.__destructure_map(map__42504);
var msg = map__42504__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42504__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__42508,tid){
var map__42510 = p__42508;
var map__42510__$1 = cljs.core.__destructure_map(map__42510);
var svc = map__42510__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42510__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__42518 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__42519 = null;
var count__42520 = (0);
var i__42521 = (0);
while(true){
if((i__42521 < count__42520)){
var vec__42538 = chunk__42519.cljs$core$IIndexed$_nth$arity$2(null,i__42521);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42538,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42549 = seq__42518;
var G__42550 = chunk__42519;
var G__42551 = count__42520;
var G__42552 = (i__42521 + (1));
seq__42518 = G__42549;
chunk__42519 = G__42550;
count__42520 = G__42551;
i__42521 = G__42552;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42518);
if(temp__5804__auto__){
var seq__42518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42518__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42518__$1);
var G__42553 = cljs.core.chunk_rest(seq__42518__$1);
var G__42554 = c__5565__auto__;
var G__42555 = cljs.core.count(c__5565__auto__);
var G__42556 = (0);
seq__42518 = G__42553;
chunk__42519 = G__42554;
count__42520 = G__42555;
i__42521 = G__42556;
continue;
} else {
var vec__42541 = cljs.core.first(seq__42518__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42541,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42541,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42557 = cljs.core.next(seq__42518__$1);
var G__42558 = null;
var G__42559 = (0);
var G__42560 = (0);
seq__42518 = G__42557;
chunk__42519 = G__42558;
count__42520 = G__42559;
i__42521 = G__42560;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__42512_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__42512_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__42513_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__42513_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__42514_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__42514_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__42515_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__42515_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__42546){
var map__42547 = p__42546;
var map__42547__$1 = cljs.core.__destructure_map(map__42547);
var svc = map__42547__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
