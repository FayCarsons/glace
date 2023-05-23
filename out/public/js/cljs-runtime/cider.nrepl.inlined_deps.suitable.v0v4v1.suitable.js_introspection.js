goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__45596 = Object.getPrototypeOf(obj__$1);
var G__45597 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__45596;
protos = G__45597;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__45583 = arguments.length;
switch (G__45583) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__5520__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__45584(s__45585){
return (new cljs.core.LazySeq(null,(function (){
var s__45585__$1 = s__45585;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45585__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__45590 = cljs.core.first(xs__6360__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45590,(0),null);
var map__45593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45590,(1),null);
var map__45593__$1 = cljs.core.__destructure_map(map__45593);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45593__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45593__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5516__auto__ = ((function (s__45585__$1,vec__45590,i,map__45593,map__45593__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__45584_$_iter__45586(s__45587){
return (new cljs.core.LazySeq(null,((function (s__45585__$1,vec__45590,i,map__45593,map__45593__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__45587__$1 = s__45587;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45587__$1);
if(temp__5804__auto____$1){
var s__45587__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45587__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__45587__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__45589 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__45588 = (0);
while(true){
if((i__45588 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__45588);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__45589,(function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e45594){if((e45594 instanceof Error)){
var _e = e45594;
return "var";
} else {
throw e45594;

}
}})()], null);
})());

var G__45599 = (i__45588 + (1));
i__45588 = G__45599;
continue;
} else {
var G__45600 = (i__45588 + (1));
i__45588 = G__45600;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45589),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__45584_$_iter__45586(cljs.core.chunk_rest(s__45587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45589),null);
}
} else {
var key = cljs.core.first(s__45587__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e45595){if((e45595 instanceof Error)){
var _e = e45595;
return "var";
} else {
throw e45595;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__45584_$_iter__45586(cljs.core.rest(s__45587__$2)));
} else {
var G__45601 = cljs.core.rest(s__45587__$2);
s__45587__$1 = G__45601;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__45585__$1,vec__45590,i,map__45593,map__45593__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__45585__$1,vec__45590,i,map__45593,map__45593__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.js_keys(props)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__45584(cljs.core.rest(s__45585__$1)));
} else {
var G__45602 = cljs.core.rest(s__45585__$1);
s__45585__$1 = G__45602;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.js.map
