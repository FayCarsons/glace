goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43492 = arguments.length;
var i__5767__auto___43493 = (0);
while(true){
if((i__5767__auto___43493 < len__5766__auto___43492)){
args__5772__auto__.push((arguments[i__5767__auto___43493]));

var G__43494 = (i__5767__auto___43493 + (1));
i__5767__auto___43493 = G__43494;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42933){
var G__42934 = cljs.core.first(seq42933);
var seq42933__$1 = cljs.core.next(seq42933);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42934,seq42933__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42941 = cljs.core.seq(sources);
var chunk__42942 = null;
var count__42943 = (0);
var i__42944 = (0);
while(true){
if((i__42944 < count__42943)){
var map__42954 = chunk__42942.cljs$core$IIndexed$_nth$arity$2(null,i__42944);
var map__42954__$1 = cljs.core.__destructure_map(map__42954);
var src = map__42954__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42955){var e_43496 = e42955;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43496);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43496.message)].join('')));
}

var G__43497 = seq__42941;
var G__43498 = chunk__42942;
var G__43499 = count__42943;
var G__43500 = (i__42944 + (1));
seq__42941 = G__43497;
chunk__42942 = G__43498;
count__42943 = G__43499;
i__42944 = G__43500;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42941);
if(temp__5804__auto__){
var seq__42941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42941__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42941__$1);
var G__43501 = cljs.core.chunk_rest(seq__42941__$1);
var G__43502 = c__5565__auto__;
var G__43503 = cljs.core.count(c__5565__auto__);
var G__43504 = (0);
seq__42941 = G__43501;
chunk__42942 = G__43502;
count__42943 = G__43503;
i__42944 = G__43504;
continue;
} else {
var map__42956 = cljs.core.first(seq__42941__$1);
var map__42956__$1 = cljs.core.__destructure_map(map__42956);
var src = map__42956__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42958){var e_43506 = e42958;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43506);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43506.message)].join('')));
}

var G__43507 = cljs.core.next(seq__42941__$1);
var G__43508 = null;
var G__43509 = (0);
var G__43510 = (0);
seq__42941 = G__43507;
chunk__42942 = G__43508;
count__42943 = G__43509;
i__42944 = G__43510;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42968 = cljs.core.seq(js_requires);
var chunk__42969 = null;
var count__42970 = (0);
var i__42971 = (0);
while(true){
if((i__42971 < count__42970)){
var js_ns = chunk__42969.cljs$core$IIndexed$_nth$arity$2(null,i__42971);
var require_str_43511 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43511);


var G__43512 = seq__42968;
var G__43513 = chunk__42969;
var G__43514 = count__42970;
var G__43515 = (i__42971 + (1));
seq__42968 = G__43512;
chunk__42969 = G__43513;
count__42970 = G__43514;
i__42971 = G__43515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42968);
if(temp__5804__auto__){
var seq__42968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42968__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42968__$1);
var G__43516 = cljs.core.chunk_rest(seq__42968__$1);
var G__43517 = c__5565__auto__;
var G__43518 = cljs.core.count(c__5565__auto__);
var G__43519 = (0);
seq__42968 = G__43516;
chunk__42969 = G__43517;
count__42970 = G__43518;
i__42971 = G__43519;
continue;
} else {
var js_ns = cljs.core.first(seq__42968__$1);
var require_str_43520 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43520);


var G__43521 = cljs.core.next(seq__42968__$1);
var G__43522 = null;
var G__43523 = (0);
var G__43524 = (0);
seq__42968 = G__43521;
chunk__42969 = G__43522;
count__42970 = G__43523;
i__42971 = G__43524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42982){
var map__42983 = p__42982;
var map__42983__$1 = cljs.core.__destructure_map(map__42983);
var msg = map__42983__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42983__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42984(s__42985){
return (new cljs.core.LazySeq(null,(function (){
var s__42985__$1 = s__42985;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42985__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__42990 = cljs.core.first(xs__6360__auto__);
var map__42990__$1 = cljs.core.__destructure_map(map__42990);
var src = map__42990__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42990__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__42985__$1,map__42990,map__42990__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42983,map__42983__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42984_$_iter__42986(s__42987){
return (new cljs.core.LazySeq(null,((function (s__42985__$1,map__42990,map__42990__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42983,map__42983__$1,msg,info,reload_info){
return (function (){
var s__42987__$1 = s__42987;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__42987__$1);
if(temp__5804__auto____$1){
var s__42987__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42987__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__42987__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__42989 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__42988 = (0);
while(true){
if((i__42988 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__42988);
cljs.core.chunk_append(b__42989,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43526 = (i__42988 + (1));
i__42988 = G__43526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42989),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42984_$_iter__42986(cljs.core.chunk_rest(s__42987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42989),null);
}
} else {
var warning = cljs.core.first(s__42987__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42984_$_iter__42986(cljs.core.rest(s__42987__$2)));
}
} else {
return null;
}
break;
}
});})(s__42985__$1,map__42990,map__42990__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42983,map__42983__$1,msg,info,reload_info))
,null,null));
});})(s__42985__$1,map__42990,map__42990__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__42983,map__42983__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42984(cljs.core.rest(s__42985__$1)));
} else {
var G__43527 = cljs.core.rest(s__42985__$1);
s__42985__$1 = G__43527;
continue;
}
} else {
var G__43528 = cljs.core.rest(s__42985__$1);
s__42985__$1 = G__43528;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42994_43529 = cljs.core.seq(warnings);
var chunk__42995_43530 = null;
var count__42996_43531 = (0);
var i__42997_43532 = (0);
while(true){
if((i__42997_43532 < count__42996_43531)){
var map__43011_43536 = chunk__42995_43530.cljs$core$IIndexed$_nth$arity$2(null,i__42997_43532);
var map__43011_43537__$1 = cljs.core.__destructure_map(map__43011_43536);
var w_43538 = map__43011_43537__$1;
var msg_43539__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011_43537__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011_43537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011_43537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43011_43537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43542)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43540),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43541),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43539__$1)].join(''));


var G__43543 = seq__42994_43529;
var G__43544 = chunk__42995_43530;
var G__43545 = count__42996_43531;
var G__43546 = (i__42997_43532 + (1));
seq__42994_43529 = G__43543;
chunk__42995_43530 = G__43544;
count__42996_43531 = G__43545;
i__42997_43532 = G__43546;
continue;
} else {
var temp__5804__auto___43547 = cljs.core.seq(seq__42994_43529);
if(temp__5804__auto___43547){
var seq__42994_43550__$1 = temp__5804__auto___43547;
if(cljs.core.chunked_seq_QMARK_(seq__42994_43550__$1)){
var c__5565__auto___43551 = cljs.core.chunk_first(seq__42994_43550__$1);
var G__43552 = cljs.core.chunk_rest(seq__42994_43550__$1);
var G__43553 = c__5565__auto___43551;
var G__43554 = cljs.core.count(c__5565__auto___43551);
var G__43555 = (0);
seq__42994_43529 = G__43552;
chunk__42995_43530 = G__43553;
count__42996_43531 = G__43554;
i__42997_43532 = G__43555;
continue;
} else {
var map__43013_43556 = cljs.core.first(seq__42994_43550__$1);
var map__43013_43557__$1 = cljs.core.__destructure_map(map__43013_43556);
var w_43558 = map__43013_43557__$1;
var msg_43559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43013_43557__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43013_43557__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43013_43557__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43013_43557__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43562)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43560),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43561),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43559__$1)].join(''));


var G__43563 = cljs.core.next(seq__42994_43550__$1);
var G__43564 = null;
var G__43565 = (0);
var G__43566 = (0);
seq__42994_43529 = G__43563;
chunk__42995_43530 = G__43564;
count__42996_43531 = G__43565;
i__42997_43532 = G__43566;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42980_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42980_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43025){
var map__43026 = p__43025;
var map__43026__$1 = cljs.core.__destructure_map(map__43026);
var msg = map__43026__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43026__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43026__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43027 = cljs.core.seq(updates);
var chunk__43029 = null;
var count__43030 = (0);
var i__43031 = (0);
while(true){
if((i__43031 < count__43030)){
var path = chunk__43029.cljs$core$IIndexed$_nth$arity$2(null,i__43031);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43237_43569 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43241_43570 = null;
var count__43242_43571 = (0);
var i__43243_43572 = (0);
while(true){
if((i__43243_43572 < count__43242_43571)){
var node_43573 = chunk__43241_43570.cljs$core$IIndexed$_nth$arity$2(null,i__43243_43572);
if(cljs.core.not(node_43573.shadow$old)){
var path_match_43574 = shadow.cljs.devtools.client.browser.match_paths(node_43573.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43574)){
var new_link_43575 = (function (){var G__43288 = node_43573.cloneNode(true);
G__43288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43574),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43288;
})();
(node_43573.shadow$old = true);

(new_link_43575.onload = ((function (seq__43237_43569,chunk__43241_43570,count__43242_43571,i__43243_43572,seq__43027,chunk__43029,count__43030,i__43031,new_link_43575,path_match_43574,node_43573,path,map__43026,map__43026__$1,msg,updates,reload_info){
return (function (e){
var seq__43289_43576 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43291_43577 = null;
var count__43292_43578 = (0);
var i__43293_43579 = (0);
while(true){
if((i__43293_43579 < count__43292_43578)){
var map__43301_43580 = chunk__43291_43577.cljs$core$IIndexed$_nth$arity$2(null,i__43293_43579);
var map__43301_43581__$1 = cljs.core.__destructure_map(map__43301_43580);
var task_43582 = map__43301_43581__$1;
var fn_str_43583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301_43581__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43301_43581__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43585 = goog.getObjectByName(fn_str_43583,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43584)].join(''));

(fn_obj_43585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43585.cljs$core$IFn$_invoke$arity$2(path,new_link_43575) : fn_obj_43585.call(null,path,new_link_43575));


var G__43586 = seq__43289_43576;
var G__43587 = chunk__43291_43577;
var G__43588 = count__43292_43578;
var G__43589 = (i__43293_43579 + (1));
seq__43289_43576 = G__43586;
chunk__43291_43577 = G__43587;
count__43292_43578 = G__43588;
i__43293_43579 = G__43589;
continue;
} else {
var temp__5804__auto___43590 = cljs.core.seq(seq__43289_43576);
if(temp__5804__auto___43590){
var seq__43289_43591__$1 = temp__5804__auto___43590;
if(cljs.core.chunked_seq_QMARK_(seq__43289_43591__$1)){
var c__5565__auto___43592 = cljs.core.chunk_first(seq__43289_43591__$1);
var G__43593 = cljs.core.chunk_rest(seq__43289_43591__$1);
var G__43594 = c__5565__auto___43592;
var G__43595 = cljs.core.count(c__5565__auto___43592);
var G__43596 = (0);
seq__43289_43576 = G__43593;
chunk__43291_43577 = G__43594;
count__43292_43578 = G__43595;
i__43293_43579 = G__43596;
continue;
} else {
var map__43302_43597 = cljs.core.first(seq__43289_43591__$1);
var map__43302_43598__$1 = cljs.core.__destructure_map(map__43302_43597);
var task_43599 = map__43302_43598__$1;
var fn_str_43600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43302_43598__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43302_43598__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43602 = goog.getObjectByName(fn_str_43600,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43601)].join(''));

(fn_obj_43602.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43602.cljs$core$IFn$_invoke$arity$2(path,new_link_43575) : fn_obj_43602.call(null,path,new_link_43575));


var G__43603 = cljs.core.next(seq__43289_43591__$1);
var G__43604 = null;
var G__43605 = (0);
var G__43606 = (0);
seq__43289_43576 = G__43603;
chunk__43291_43577 = G__43604;
count__43292_43578 = G__43605;
i__43293_43579 = G__43606;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43573);
});})(seq__43237_43569,chunk__43241_43570,count__43242_43571,i__43243_43572,seq__43027,chunk__43029,count__43030,i__43031,new_link_43575,path_match_43574,node_43573,path,map__43026,map__43026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43574], 0));

goog.dom.insertSiblingAfter(new_link_43575,node_43573);


var G__43607 = seq__43237_43569;
var G__43608 = chunk__43241_43570;
var G__43609 = count__43242_43571;
var G__43610 = (i__43243_43572 + (1));
seq__43237_43569 = G__43607;
chunk__43241_43570 = G__43608;
count__43242_43571 = G__43609;
i__43243_43572 = G__43610;
continue;
} else {
var G__43611 = seq__43237_43569;
var G__43612 = chunk__43241_43570;
var G__43613 = count__43242_43571;
var G__43614 = (i__43243_43572 + (1));
seq__43237_43569 = G__43611;
chunk__43241_43570 = G__43612;
count__43242_43571 = G__43613;
i__43243_43572 = G__43614;
continue;
}
} else {
var G__43615 = seq__43237_43569;
var G__43616 = chunk__43241_43570;
var G__43617 = count__43242_43571;
var G__43618 = (i__43243_43572 + (1));
seq__43237_43569 = G__43615;
chunk__43241_43570 = G__43616;
count__43242_43571 = G__43617;
i__43243_43572 = G__43618;
continue;
}
} else {
var temp__5804__auto___43619 = cljs.core.seq(seq__43237_43569);
if(temp__5804__auto___43619){
var seq__43237_43620__$1 = temp__5804__auto___43619;
if(cljs.core.chunked_seq_QMARK_(seq__43237_43620__$1)){
var c__5565__auto___43621 = cljs.core.chunk_first(seq__43237_43620__$1);
var G__43622 = cljs.core.chunk_rest(seq__43237_43620__$1);
var G__43623 = c__5565__auto___43621;
var G__43624 = cljs.core.count(c__5565__auto___43621);
var G__43625 = (0);
seq__43237_43569 = G__43622;
chunk__43241_43570 = G__43623;
count__43242_43571 = G__43624;
i__43243_43572 = G__43625;
continue;
} else {
var node_43627 = cljs.core.first(seq__43237_43620__$1);
if(cljs.core.not(node_43627.shadow$old)){
var path_match_43628 = shadow.cljs.devtools.client.browser.match_paths(node_43627.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43628)){
var new_link_43630 = (function (){var G__43311 = node_43627.cloneNode(true);
G__43311.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43311;
})();
(node_43627.shadow$old = true);

(new_link_43630.onload = ((function (seq__43237_43569,chunk__43241_43570,count__43242_43571,i__43243_43572,seq__43027,chunk__43029,count__43030,i__43031,new_link_43630,path_match_43628,node_43627,seq__43237_43620__$1,temp__5804__auto___43619,path,map__43026,map__43026__$1,msg,updates,reload_info){
return (function (e){
var seq__43314_43631 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43316_43632 = null;
var count__43317_43633 = (0);
var i__43318_43634 = (0);
while(true){
if((i__43318_43634 < count__43317_43633)){
var map__43328_43635 = chunk__43316_43632.cljs$core$IIndexed$_nth$arity$2(null,i__43318_43634);
var map__43328_43636__$1 = cljs.core.__destructure_map(map__43328_43635);
var task_43637 = map__43328_43636__$1;
var fn_str_43638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43328_43636__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43328_43636__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43640 = goog.getObjectByName(fn_str_43638,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43639)].join(''));

(fn_obj_43640.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43640.cljs$core$IFn$_invoke$arity$2(path,new_link_43630) : fn_obj_43640.call(null,path,new_link_43630));


var G__43641 = seq__43314_43631;
var G__43642 = chunk__43316_43632;
var G__43643 = count__43317_43633;
var G__43644 = (i__43318_43634 + (1));
seq__43314_43631 = G__43641;
chunk__43316_43632 = G__43642;
count__43317_43633 = G__43643;
i__43318_43634 = G__43644;
continue;
} else {
var temp__5804__auto___43645__$1 = cljs.core.seq(seq__43314_43631);
if(temp__5804__auto___43645__$1){
var seq__43314_43646__$1 = temp__5804__auto___43645__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43314_43646__$1)){
var c__5565__auto___43647 = cljs.core.chunk_first(seq__43314_43646__$1);
var G__43648 = cljs.core.chunk_rest(seq__43314_43646__$1);
var G__43649 = c__5565__auto___43647;
var G__43650 = cljs.core.count(c__5565__auto___43647);
var G__43651 = (0);
seq__43314_43631 = G__43648;
chunk__43316_43632 = G__43649;
count__43317_43633 = G__43650;
i__43318_43634 = G__43651;
continue;
} else {
var map__43330_43652 = cljs.core.first(seq__43314_43646__$1);
var map__43330_43653__$1 = cljs.core.__destructure_map(map__43330_43652);
var task_43654 = map__43330_43653__$1;
var fn_str_43655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43330_43653__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43330_43653__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43657 = goog.getObjectByName(fn_str_43655,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43656)].join(''));

(fn_obj_43657.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43657.cljs$core$IFn$_invoke$arity$2(path,new_link_43630) : fn_obj_43657.call(null,path,new_link_43630));


var G__43658 = cljs.core.next(seq__43314_43646__$1);
var G__43659 = null;
var G__43660 = (0);
var G__43661 = (0);
seq__43314_43631 = G__43658;
chunk__43316_43632 = G__43659;
count__43317_43633 = G__43660;
i__43318_43634 = G__43661;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43627);
});})(seq__43237_43569,chunk__43241_43570,count__43242_43571,i__43243_43572,seq__43027,chunk__43029,count__43030,i__43031,new_link_43630,path_match_43628,node_43627,seq__43237_43620__$1,temp__5804__auto___43619,path,map__43026,map__43026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43628], 0));

goog.dom.insertSiblingAfter(new_link_43630,node_43627);


var G__43662 = cljs.core.next(seq__43237_43620__$1);
var G__43663 = null;
var G__43664 = (0);
var G__43665 = (0);
seq__43237_43569 = G__43662;
chunk__43241_43570 = G__43663;
count__43242_43571 = G__43664;
i__43243_43572 = G__43665;
continue;
} else {
var G__43666 = cljs.core.next(seq__43237_43620__$1);
var G__43667 = null;
var G__43668 = (0);
var G__43669 = (0);
seq__43237_43569 = G__43666;
chunk__43241_43570 = G__43667;
count__43242_43571 = G__43668;
i__43243_43572 = G__43669;
continue;
}
} else {
var G__43670 = cljs.core.next(seq__43237_43620__$1);
var G__43671 = null;
var G__43672 = (0);
var G__43673 = (0);
seq__43237_43569 = G__43670;
chunk__43241_43570 = G__43671;
count__43242_43571 = G__43672;
i__43243_43572 = G__43673;
continue;
}
}
} else {
}
}
break;
}


var G__43674 = seq__43027;
var G__43675 = chunk__43029;
var G__43676 = count__43030;
var G__43677 = (i__43031 + (1));
seq__43027 = G__43674;
chunk__43029 = G__43675;
count__43030 = G__43676;
i__43031 = G__43677;
continue;
} else {
var G__43678 = seq__43027;
var G__43679 = chunk__43029;
var G__43680 = count__43030;
var G__43681 = (i__43031 + (1));
seq__43027 = G__43678;
chunk__43029 = G__43679;
count__43030 = G__43680;
i__43031 = G__43681;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43027);
if(temp__5804__auto__){
var seq__43027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43027__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43027__$1);
var G__43682 = cljs.core.chunk_rest(seq__43027__$1);
var G__43683 = c__5565__auto__;
var G__43684 = cljs.core.count(c__5565__auto__);
var G__43685 = (0);
seq__43027 = G__43682;
chunk__43029 = G__43683;
count__43030 = G__43684;
i__43031 = G__43685;
continue;
} else {
var path = cljs.core.first(seq__43027__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43331_43686 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43335_43687 = null;
var count__43336_43688 = (0);
var i__43337_43689 = (0);
while(true){
if((i__43337_43689 < count__43336_43688)){
var node_43690 = chunk__43335_43687.cljs$core$IIndexed$_nth$arity$2(null,i__43337_43689);
if(cljs.core.not(node_43690.shadow$old)){
var path_match_43691 = shadow.cljs.devtools.client.browser.match_paths(node_43690.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43691)){
var new_link_43692 = (function (){var G__43378 = node_43690.cloneNode(true);
G__43378.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43691),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43378;
})();
(node_43690.shadow$old = true);

(new_link_43692.onload = ((function (seq__43331_43686,chunk__43335_43687,count__43336_43688,i__43337_43689,seq__43027,chunk__43029,count__43030,i__43031,new_link_43692,path_match_43691,node_43690,path,seq__43027__$1,temp__5804__auto__,map__43026,map__43026__$1,msg,updates,reload_info){
return (function (e){
var seq__43387_43693 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43389_43694 = null;
var count__43390_43695 = (0);
var i__43391_43696 = (0);
while(true){
if((i__43391_43696 < count__43390_43695)){
var map__43404_43700 = chunk__43389_43694.cljs$core$IIndexed$_nth$arity$2(null,i__43391_43696);
var map__43404_43701__$1 = cljs.core.__destructure_map(map__43404_43700);
var task_43702 = map__43404_43701__$1;
var fn_str_43703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404_43701__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43404_43701__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43706 = goog.getObjectByName(fn_str_43703,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43704)].join(''));

(fn_obj_43706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43706.cljs$core$IFn$_invoke$arity$2(path,new_link_43692) : fn_obj_43706.call(null,path,new_link_43692));


var G__43707 = seq__43387_43693;
var G__43708 = chunk__43389_43694;
var G__43709 = count__43390_43695;
var G__43710 = (i__43391_43696 + (1));
seq__43387_43693 = G__43707;
chunk__43389_43694 = G__43708;
count__43390_43695 = G__43709;
i__43391_43696 = G__43710;
continue;
} else {
var temp__5804__auto___43711__$1 = cljs.core.seq(seq__43387_43693);
if(temp__5804__auto___43711__$1){
var seq__43387_43712__$1 = temp__5804__auto___43711__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43387_43712__$1)){
var c__5565__auto___43713 = cljs.core.chunk_first(seq__43387_43712__$1);
var G__43714 = cljs.core.chunk_rest(seq__43387_43712__$1);
var G__43715 = c__5565__auto___43713;
var G__43716 = cljs.core.count(c__5565__auto___43713);
var G__43717 = (0);
seq__43387_43693 = G__43714;
chunk__43389_43694 = G__43715;
count__43390_43695 = G__43716;
i__43391_43696 = G__43717;
continue;
} else {
var map__43411_43718 = cljs.core.first(seq__43387_43712__$1);
var map__43411_43719__$1 = cljs.core.__destructure_map(map__43411_43718);
var task_43720 = map__43411_43719__$1;
var fn_str_43721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43411_43719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43411_43719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43723 = goog.getObjectByName(fn_str_43721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43722)].join(''));

(fn_obj_43723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43723.cljs$core$IFn$_invoke$arity$2(path,new_link_43692) : fn_obj_43723.call(null,path,new_link_43692));


var G__43724 = cljs.core.next(seq__43387_43712__$1);
var G__43725 = null;
var G__43726 = (0);
var G__43727 = (0);
seq__43387_43693 = G__43724;
chunk__43389_43694 = G__43725;
count__43390_43695 = G__43726;
i__43391_43696 = G__43727;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43690);
});})(seq__43331_43686,chunk__43335_43687,count__43336_43688,i__43337_43689,seq__43027,chunk__43029,count__43030,i__43031,new_link_43692,path_match_43691,node_43690,path,seq__43027__$1,temp__5804__auto__,map__43026,map__43026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43691], 0));

goog.dom.insertSiblingAfter(new_link_43692,node_43690);


var G__43728 = seq__43331_43686;
var G__43729 = chunk__43335_43687;
var G__43730 = count__43336_43688;
var G__43731 = (i__43337_43689 + (1));
seq__43331_43686 = G__43728;
chunk__43335_43687 = G__43729;
count__43336_43688 = G__43730;
i__43337_43689 = G__43731;
continue;
} else {
var G__43732 = seq__43331_43686;
var G__43733 = chunk__43335_43687;
var G__43734 = count__43336_43688;
var G__43735 = (i__43337_43689 + (1));
seq__43331_43686 = G__43732;
chunk__43335_43687 = G__43733;
count__43336_43688 = G__43734;
i__43337_43689 = G__43735;
continue;
}
} else {
var G__43736 = seq__43331_43686;
var G__43737 = chunk__43335_43687;
var G__43738 = count__43336_43688;
var G__43739 = (i__43337_43689 + (1));
seq__43331_43686 = G__43736;
chunk__43335_43687 = G__43737;
count__43336_43688 = G__43738;
i__43337_43689 = G__43739;
continue;
}
} else {
var temp__5804__auto___43740__$1 = cljs.core.seq(seq__43331_43686);
if(temp__5804__auto___43740__$1){
var seq__43331_43741__$1 = temp__5804__auto___43740__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43331_43741__$1)){
var c__5565__auto___43742 = cljs.core.chunk_first(seq__43331_43741__$1);
var G__43744 = cljs.core.chunk_rest(seq__43331_43741__$1);
var G__43745 = c__5565__auto___43742;
var G__43746 = cljs.core.count(c__5565__auto___43742);
var G__43747 = (0);
seq__43331_43686 = G__43744;
chunk__43335_43687 = G__43745;
count__43336_43688 = G__43746;
i__43337_43689 = G__43747;
continue;
} else {
var node_43748 = cljs.core.first(seq__43331_43741__$1);
if(cljs.core.not(node_43748.shadow$old)){
var path_match_43749 = shadow.cljs.devtools.client.browser.match_paths(node_43748.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43749)){
var new_link_43750 = (function (){var G__43416 = node_43748.cloneNode(true);
G__43416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43749),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43416;
})();
(node_43748.shadow$old = true);

(new_link_43750.onload = ((function (seq__43331_43686,chunk__43335_43687,count__43336_43688,i__43337_43689,seq__43027,chunk__43029,count__43030,i__43031,new_link_43750,path_match_43749,node_43748,seq__43331_43741__$1,temp__5804__auto___43740__$1,path,seq__43027__$1,temp__5804__auto__,map__43026,map__43026__$1,msg,updates,reload_info){
return (function (e){
var seq__43422_43751 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43424_43752 = null;
var count__43425_43753 = (0);
var i__43426_43754 = (0);
while(true){
if((i__43426_43754 < count__43425_43753)){
var map__43432_43755 = chunk__43424_43752.cljs$core$IIndexed$_nth$arity$2(null,i__43426_43754);
var map__43432_43756__$1 = cljs.core.__destructure_map(map__43432_43755);
var task_43757 = map__43432_43756__$1;
var fn_str_43758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43432_43756__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43432_43756__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43760 = goog.getObjectByName(fn_str_43758,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43759)].join(''));

(fn_obj_43760.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43760.cljs$core$IFn$_invoke$arity$2(path,new_link_43750) : fn_obj_43760.call(null,path,new_link_43750));


var G__43761 = seq__43422_43751;
var G__43762 = chunk__43424_43752;
var G__43763 = count__43425_43753;
var G__43764 = (i__43426_43754 + (1));
seq__43422_43751 = G__43761;
chunk__43424_43752 = G__43762;
count__43425_43753 = G__43763;
i__43426_43754 = G__43764;
continue;
} else {
var temp__5804__auto___43765__$2 = cljs.core.seq(seq__43422_43751);
if(temp__5804__auto___43765__$2){
var seq__43422_43766__$1 = temp__5804__auto___43765__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43422_43766__$1)){
var c__5565__auto___43767 = cljs.core.chunk_first(seq__43422_43766__$1);
var G__43768 = cljs.core.chunk_rest(seq__43422_43766__$1);
var G__43769 = c__5565__auto___43767;
var G__43770 = cljs.core.count(c__5565__auto___43767);
var G__43771 = (0);
seq__43422_43751 = G__43768;
chunk__43424_43752 = G__43769;
count__43425_43753 = G__43770;
i__43426_43754 = G__43771;
continue;
} else {
var map__43433_43772 = cljs.core.first(seq__43422_43766__$1);
var map__43433_43773__$1 = cljs.core.__destructure_map(map__43433_43772);
var task_43774 = map__43433_43773__$1;
var fn_str_43775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433_43773__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43433_43773__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43778 = goog.getObjectByName(fn_str_43775,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43776)].join(''));

(fn_obj_43778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43778.cljs$core$IFn$_invoke$arity$2(path,new_link_43750) : fn_obj_43778.call(null,path,new_link_43750));


var G__43779 = cljs.core.next(seq__43422_43766__$1);
var G__43780 = null;
var G__43781 = (0);
var G__43782 = (0);
seq__43422_43751 = G__43779;
chunk__43424_43752 = G__43780;
count__43425_43753 = G__43781;
i__43426_43754 = G__43782;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43748);
});})(seq__43331_43686,chunk__43335_43687,count__43336_43688,i__43337_43689,seq__43027,chunk__43029,count__43030,i__43031,new_link_43750,path_match_43749,node_43748,seq__43331_43741__$1,temp__5804__auto___43740__$1,path,seq__43027__$1,temp__5804__auto__,map__43026,map__43026__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43749], 0));

goog.dom.insertSiblingAfter(new_link_43750,node_43748);


var G__43783 = cljs.core.next(seq__43331_43741__$1);
var G__43784 = null;
var G__43785 = (0);
var G__43786 = (0);
seq__43331_43686 = G__43783;
chunk__43335_43687 = G__43784;
count__43336_43688 = G__43785;
i__43337_43689 = G__43786;
continue;
} else {
var G__43787 = cljs.core.next(seq__43331_43741__$1);
var G__43788 = null;
var G__43789 = (0);
var G__43790 = (0);
seq__43331_43686 = G__43787;
chunk__43335_43687 = G__43788;
count__43336_43688 = G__43789;
i__43337_43689 = G__43790;
continue;
}
} else {
var G__43791 = cljs.core.next(seq__43331_43741__$1);
var G__43792 = null;
var G__43793 = (0);
var G__43794 = (0);
seq__43331_43686 = G__43791;
chunk__43335_43687 = G__43792;
count__43336_43688 = G__43793;
i__43337_43689 = G__43794;
continue;
}
}
} else {
}
}
break;
}


var G__43795 = cljs.core.next(seq__43027__$1);
var G__43796 = null;
var G__43797 = (0);
var G__43798 = (0);
seq__43027 = G__43795;
chunk__43029 = G__43796;
count__43030 = G__43797;
i__43031 = G__43798;
continue;
} else {
var G__43799 = cljs.core.next(seq__43027__$1);
var G__43800 = null;
var G__43801 = (0);
var G__43802 = (0);
seq__43027 = G__43799;
chunk__43029 = G__43800;
count__43030 = G__43801;
i__43031 = G__43802;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__43434){
var map__43435 = p__43434;
var map__43435__$1 = cljs.core.__destructure_map(map__43435);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43435__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__43441){
var map__43443 = p__43441;
var map__43443__$1 = cljs.core.__destructure_map(map__43443);
var _ = map__43443__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43443__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43444,done,error){
var map__43445 = p__43444;
var map__43445__$1 = cljs.core.__destructure_map(map__43445);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43445__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43447,done,error){
var map__43448 = p__43447;
var map__43448__$1 = cljs.core.__destructure_map(map__43448);
var msg = map__43448__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43448__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43448__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43448__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43449){
var map__43450 = p__43449;
var map__43450__$1 = cljs.core.__destructure_map(map__43450);
var src = map__43450__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43450__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43452 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43452) : done.call(null,G__43452));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43454){
var map__43455 = p__43454;
var map__43455__$1 = cljs.core.__destructure_map(map__43455);
var msg__$1 = map__43455__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43455__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43457){var ex = e43457;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43458){
var map__43459 = p__43458;
var map__43459__$1 = cljs.core.__destructure_map(map__43459);
var env = map__43459__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43459__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43486){
var map__43487 = p__43486;
var map__43487__$1 = cljs.core.__destructure_map(map__43487);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43487__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43487__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__43488){
var map__43489 = p__43488;
var map__43489__$1 = cljs.core.__destructure_map(map__43489);
var svc = map__43489__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
