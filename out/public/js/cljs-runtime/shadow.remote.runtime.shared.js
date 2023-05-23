goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__38174,res){
var map__38177 = p__38174;
var map__38177__$1 = cljs.core.__destructure_map(map__38177);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38177__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38177__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__38178 = res;
var G__38178__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38178,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__38178);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38178__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__38178__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__38187 = arguments.length;
switch (G__38187) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__38201,msg,handlers,timeout_after_ms){
var map__38202 = p__38201;
var map__38202__$1 = cljs.core.__destructure_map(map__38202);
var runtime = map__38202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38510 = arguments.length;
var i__5767__auto___38511 = (0);
while(true){
if((i__5767__auto___38511 < len__5766__auto___38510)){
args__5772__auto__.push((arguments[i__5767__auto___38511]));

var G__38512 = (i__5767__auto___38511 + (1));
i__5767__auto___38511 = G__38512;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__38257,ev,args){
var map__38260 = p__38257;
var map__38260__$1 = cljs.core.__destructure_map(map__38260);
var runtime = map__38260__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__38265 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38268 = null;
var count__38269 = (0);
var i__38270 = (0);
while(true){
if((i__38270 < count__38269)){
var ext = chunk__38268.cljs$core$IIndexed$_nth$arity$2(null,i__38270);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38513 = seq__38265;
var G__38514 = chunk__38268;
var G__38515 = count__38269;
var G__38516 = (i__38270 + (1));
seq__38265 = G__38513;
chunk__38268 = G__38514;
count__38269 = G__38515;
i__38270 = G__38516;
continue;
} else {
var G__38517 = seq__38265;
var G__38518 = chunk__38268;
var G__38519 = count__38269;
var G__38520 = (i__38270 + (1));
seq__38265 = G__38517;
chunk__38268 = G__38518;
count__38269 = G__38519;
i__38270 = G__38520;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38265);
if(temp__5804__auto__){
var seq__38265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38265__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__38265__$1);
var G__38522 = cljs.core.chunk_rest(seq__38265__$1);
var G__38523 = c__5565__auto__;
var G__38524 = cljs.core.count(c__5565__auto__);
var G__38525 = (0);
seq__38265 = G__38522;
chunk__38268 = G__38523;
count__38269 = G__38524;
i__38270 = G__38525;
continue;
} else {
var ext = cljs.core.first(seq__38265__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38526 = cljs.core.next(seq__38265__$1);
var G__38527 = null;
var G__38528 = (0);
var G__38529 = (0);
seq__38265 = G__38526;
chunk__38268 = G__38527;
count__38269 = G__38528;
i__38270 = G__38529;
continue;
} else {
var G__38530 = cljs.core.next(seq__38265__$1);
var G__38531 = null;
var G__38532 = (0);
var G__38533 = (0);
seq__38265 = G__38530;
chunk__38268 = G__38531;
count__38269 = G__38532;
i__38270 = G__38533;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq38204){
var G__38205 = cljs.core.first(seq38204);
var seq38204__$1 = cljs.core.next(seq38204);
var G__38206 = cljs.core.first(seq38204__$1);
var seq38204__$2 = cljs.core.next(seq38204__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38205,G__38206,seq38204__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__38321,p__38322){
var map__38325 = p__38321;
var map__38325__$1 = cljs.core.__destructure_map(map__38325);
var runtime = map__38325__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38325__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38326 = p__38322;
var map__38326__$1 = cljs.core.__destructure_map(map__38326);
var msg = map__38326__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__38329 = cljs.core.deref(state_ref);
var map__38329__$1 = cljs.core.__destructure_map(map__38329);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38329__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__38337){
var map__38338 = p__38337;
var map__38338__$1 = cljs.core.__destructure_map(map__38338);
var runtime = map__38338__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38338__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__38343,msg){
var map__38344 = p__38343;
var map__38344__$1 = cljs.core.__destructure_map(map__38344);
var runtime = map__38344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__38359,key,p__38360){
var map__38362 = p__38359;
var map__38362__$1 = cljs.core.__destructure_map(map__38362);
var state = map__38362__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38362__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__38363 = p__38360;
var map__38363__$1 = cljs.core.__destructure_map(map__38363);
var spec = map__38363__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38363__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__38375,key,spec){
var map__38378 = p__38375;
var map__38378__$1 = cljs.core.__destructure_map(map__38378);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38378__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__38380_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__38380_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__38381_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__38381_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__38383_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__38383_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__38384_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__38384_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__38385_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__38385_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__38393,key){
var map__38394 = p__38393;
var map__38394__$1 = cljs.core.__destructure_map(map__38394);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__38405,msg){
var map__38406 = p__38405;
var map__38406__$1 = cljs.core.__destructure_map(map__38406);
var runtime = map__38406__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38406__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38443,p__38444){
var map__38448 = p__38443;
var map__38448__$1 = cljs.core.__destructure_map(map__38448);
var runtime = map__38448__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38448__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38449 = p__38444;
var map__38449__$1 = cljs.core.__destructure_map(map__38449);
var msg = map__38449__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38458 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38460 = null;
var count__38461 = (0);
var i__38462 = (0);
while(true){
if((i__38462 < count__38461)){
var map__38476 = chunk__38460.cljs$core$IIndexed$_nth$arity$2(null,i__38462);
var map__38476__$1 = cljs.core.__destructure_map(map__38476);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38583 = seq__38458;
var G__38584 = chunk__38460;
var G__38585 = count__38461;
var G__38586 = (i__38462 + (1));
seq__38458 = G__38583;
chunk__38460 = G__38584;
count__38461 = G__38585;
i__38462 = G__38586;
continue;
} else {
var G__38588 = seq__38458;
var G__38589 = chunk__38460;
var G__38590 = count__38461;
var G__38591 = (i__38462 + (1));
seq__38458 = G__38588;
chunk__38460 = G__38589;
count__38461 = G__38590;
i__38462 = G__38591;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38458);
if(temp__5804__auto__){
var seq__38458__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38458__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__38458__$1);
var G__38594 = cljs.core.chunk_rest(seq__38458__$1);
var G__38595 = c__5565__auto__;
var G__38596 = cljs.core.count(c__5565__auto__);
var G__38597 = (0);
seq__38458 = G__38594;
chunk__38460 = G__38595;
count__38461 = G__38596;
i__38462 = G__38597;
continue;
} else {
var map__38491 = cljs.core.first(seq__38458__$1);
var map__38491__$1 = cljs.core.__destructure_map(map__38491);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38491__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38600 = cljs.core.next(seq__38458__$1);
var G__38601 = null;
var G__38602 = (0);
var G__38603 = (0);
seq__38458 = G__38600;
chunk__38460 = G__38601;
count__38461 = G__38602;
i__38462 = G__38603;
continue;
} else {
var G__38604 = cljs.core.next(seq__38458__$1);
var G__38605 = null;
var G__38606 = (0);
var G__38607 = (0);
seq__38458 = G__38604;
chunk__38460 = G__38605;
count__38461 = G__38606;
i__38462 = G__38607;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
