goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40787 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40787(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40788 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40788(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39461 = coll;
var G__39462 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39461,G__39462) : shadow.dom.lazy_native_coll_seq.call(null,G__39461,G__39462));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39488 = arguments.length;
switch (G__39488) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39512 = arguments.length;
switch (G__39512) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39549 = arguments.length;
switch (G__39549) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39572 = arguments.length;
switch (G__39572) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39602 = arguments.length;
switch (G__39602) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39633 = arguments.length;
switch (G__39633) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39660){if((e39660 instanceof Object)){
var e = e39660;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39660;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39679 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39680 = null;
var count__39681 = (0);
var i__39682 = (0);
while(true){
if((i__39682 < count__39681)){
var el = chunk__39680.cljs$core$IIndexed$_nth$arity$2(null,i__39682);
var handler_40803__$1 = ((function (seq__39679,chunk__39680,count__39681,i__39682,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39679,chunk__39680,count__39681,i__39682,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40803__$1);


var G__40804 = seq__39679;
var G__40805 = chunk__39680;
var G__40806 = count__39681;
var G__40807 = (i__39682 + (1));
seq__39679 = G__40804;
chunk__39680 = G__40805;
count__39681 = G__40806;
i__39682 = G__40807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39679);
if(temp__5804__auto__){
var seq__39679__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39679__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39679__$1);
var G__40808 = cljs.core.chunk_rest(seq__39679__$1);
var G__40809 = c__5565__auto__;
var G__40810 = cljs.core.count(c__5565__auto__);
var G__40811 = (0);
seq__39679 = G__40808;
chunk__39680 = G__40809;
count__39681 = G__40810;
i__39682 = G__40811;
continue;
} else {
var el = cljs.core.first(seq__39679__$1);
var handler_40812__$1 = ((function (seq__39679,chunk__39680,count__39681,i__39682,el,seq__39679__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39679,chunk__39680,count__39681,i__39682,el,seq__39679__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40812__$1);


var G__40813 = cljs.core.next(seq__39679__$1);
var G__40814 = null;
var G__40815 = (0);
var G__40816 = (0);
seq__39679 = G__40813;
chunk__39680 = G__40814;
count__39681 = G__40815;
i__39682 = G__40816;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39735 = arguments.length;
switch (G__39735) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39768 = cljs.core.seq(events);
var chunk__39769 = null;
var count__39770 = (0);
var i__39771 = (0);
while(true){
if((i__39771 < count__39770)){
var vec__39796 = chunk__39769.cljs$core$IIndexed$_nth$arity$2(null,i__39771);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39796,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39796,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40822 = seq__39768;
var G__40823 = chunk__39769;
var G__40824 = count__39770;
var G__40825 = (i__39771 + (1));
seq__39768 = G__40822;
chunk__39769 = G__40823;
count__39770 = G__40824;
i__39771 = G__40825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39768);
if(temp__5804__auto__){
var seq__39768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39768__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39768__$1);
var G__40826 = cljs.core.chunk_rest(seq__39768__$1);
var G__40827 = c__5565__auto__;
var G__40828 = cljs.core.count(c__5565__auto__);
var G__40829 = (0);
seq__39768 = G__40826;
chunk__39769 = G__40827;
count__39770 = G__40828;
i__39771 = G__40829;
continue;
} else {
var vec__39809 = cljs.core.first(seq__39768__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39809,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40830 = cljs.core.next(seq__39768__$1);
var G__40831 = null;
var G__40832 = (0);
var G__40833 = (0);
seq__39768 = G__40830;
chunk__39769 = G__40831;
count__39770 = G__40832;
i__39771 = G__40833;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39821 = cljs.core.seq(styles);
var chunk__39822 = null;
var count__39823 = (0);
var i__39824 = (0);
while(true){
if((i__39824 < count__39823)){
var vec__39852 = chunk__39822.cljs$core$IIndexed$_nth$arity$2(null,i__39824);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39852,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40834 = seq__39821;
var G__40835 = chunk__39822;
var G__40836 = count__39823;
var G__40837 = (i__39824 + (1));
seq__39821 = G__40834;
chunk__39822 = G__40835;
count__39823 = G__40836;
i__39824 = G__40837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39821);
if(temp__5804__auto__){
var seq__39821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39821__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39821__$1);
var G__40839 = cljs.core.chunk_rest(seq__39821__$1);
var G__40841 = c__5565__auto__;
var G__40844 = cljs.core.count(c__5565__auto__);
var G__40845 = (0);
seq__39821 = G__40839;
chunk__39822 = G__40841;
count__39823 = G__40844;
i__39824 = G__40845;
continue;
} else {
var vec__39867 = cljs.core.first(seq__39821__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39867,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40846 = cljs.core.next(seq__39821__$1);
var G__40847 = null;
var G__40848 = (0);
var G__40849 = (0);
seq__39821 = G__40846;
chunk__39822 = G__40847;
count__39823 = G__40848;
i__39824 = G__40849;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39882_40850 = key;
var G__39882_40851__$1 = (((G__39882_40850 instanceof cljs.core.Keyword))?G__39882_40850.fqn:null);
switch (G__39882_40851__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40853 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_40853,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_40853,"aria-");
}
})())){
el.setAttribute(ks_40853,value);
} else {
(el[ks_40853] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39922){
var map__39923 = p__39922;
var map__39923__$1 = cljs.core.__destructure_map(map__39923);
var props = map__39923__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39923__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39926 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39932 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39932,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39932;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39938 = arguments.length;
switch (G__39938) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39948){
var vec__39949 = p__39948;
var seq__39950 = cljs.core.seq(vec__39949);
var first__39951 = cljs.core.first(seq__39950);
var seq__39950__$1 = cljs.core.next(seq__39950);
var nn = first__39951;
var first__39951__$1 = cljs.core.first(seq__39950__$1);
var seq__39950__$2 = cljs.core.next(seq__39950__$1);
var np = first__39951__$1;
var nc = seq__39950__$2;
var node = vec__39949;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39953 = nn;
var G__39954 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39953,G__39954) : create_fn.call(null,G__39953,G__39954));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39958 = nn;
var G__39959 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39958,G__39959) : create_fn.call(null,G__39958,G__39959));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39963 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39963,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39963,(1),null);
var seq__39966_40859 = cljs.core.seq(node_children);
var chunk__39967_40860 = null;
var count__39968_40861 = (0);
var i__39969_40862 = (0);
while(true){
if((i__39969_40862 < count__39968_40861)){
var child_struct_40863 = chunk__39967_40860.cljs$core$IIndexed$_nth$arity$2(null,i__39969_40862);
var children_40864 = shadow.dom.dom_node(child_struct_40863);
if(cljs.core.seq_QMARK_(children_40864)){
var seq__40040_40865 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40864));
var chunk__40043_40866 = null;
var count__40044_40867 = (0);
var i__40045_40868 = (0);
while(true){
if((i__40045_40868 < count__40044_40867)){
var child_40869 = chunk__40043_40866.cljs$core$IIndexed$_nth$arity$2(null,i__40045_40868);
if(cljs.core.truth_(child_40869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40869);


var G__40870 = seq__40040_40865;
var G__40871 = chunk__40043_40866;
var G__40872 = count__40044_40867;
var G__40873 = (i__40045_40868 + (1));
seq__40040_40865 = G__40870;
chunk__40043_40866 = G__40871;
count__40044_40867 = G__40872;
i__40045_40868 = G__40873;
continue;
} else {
var G__40874 = seq__40040_40865;
var G__40875 = chunk__40043_40866;
var G__40876 = count__40044_40867;
var G__40877 = (i__40045_40868 + (1));
seq__40040_40865 = G__40874;
chunk__40043_40866 = G__40875;
count__40044_40867 = G__40876;
i__40045_40868 = G__40877;
continue;
}
} else {
var temp__5804__auto___40878 = cljs.core.seq(seq__40040_40865);
if(temp__5804__auto___40878){
var seq__40040_40879__$1 = temp__5804__auto___40878;
if(cljs.core.chunked_seq_QMARK_(seq__40040_40879__$1)){
var c__5565__auto___40880 = cljs.core.chunk_first(seq__40040_40879__$1);
var G__40881 = cljs.core.chunk_rest(seq__40040_40879__$1);
var G__40882 = c__5565__auto___40880;
var G__40883 = cljs.core.count(c__5565__auto___40880);
var G__40884 = (0);
seq__40040_40865 = G__40881;
chunk__40043_40866 = G__40882;
count__40044_40867 = G__40883;
i__40045_40868 = G__40884;
continue;
} else {
var child_40885 = cljs.core.first(seq__40040_40879__$1);
if(cljs.core.truth_(child_40885)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40885);


var G__40886 = cljs.core.next(seq__40040_40879__$1);
var G__40887 = null;
var G__40888 = (0);
var G__40889 = (0);
seq__40040_40865 = G__40886;
chunk__40043_40866 = G__40887;
count__40044_40867 = G__40888;
i__40045_40868 = G__40889;
continue;
} else {
var G__40893 = cljs.core.next(seq__40040_40879__$1);
var G__40894 = null;
var G__40895 = (0);
var G__40896 = (0);
seq__40040_40865 = G__40893;
chunk__40043_40866 = G__40894;
count__40044_40867 = G__40895;
i__40045_40868 = G__40896;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40864);
}


var G__40898 = seq__39966_40859;
var G__40899 = chunk__39967_40860;
var G__40900 = count__39968_40861;
var G__40901 = (i__39969_40862 + (1));
seq__39966_40859 = G__40898;
chunk__39967_40860 = G__40899;
count__39968_40861 = G__40900;
i__39969_40862 = G__40901;
continue;
} else {
var temp__5804__auto___40902 = cljs.core.seq(seq__39966_40859);
if(temp__5804__auto___40902){
var seq__39966_40903__$1 = temp__5804__auto___40902;
if(cljs.core.chunked_seq_QMARK_(seq__39966_40903__$1)){
var c__5565__auto___40904 = cljs.core.chunk_first(seq__39966_40903__$1);
var G__40905 = cljs.core.chunk_rest(seq__39966_40903__$1);
var G__40906 = c__5565__auto___40904;
var G__40907 = cljs.core.count(c__5565__auto___40904);
var G__40908 = (0);
seq__39966_40859 = G__40905;
chunk__39967_40860 = G__40906;
count__39968_40861 = G__40907;
i__39969_40862 = G__40908;
continue;
} else {
var child_struct_40909 = cljs.core.first(seq__39966_40903__$1);
var children_40910 = shadow.dom.dom_node(child_struct_40909);
if(cljs.core.seq_QMARK_(children_40910)){
var seq__40074_40911 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40910));
var chunk__40076_40912 = null;
var count__40077_40913 = (0);
var i__40078_40914 = (0);
while(true){
if((i__40078_40914 < count__40077_40913)){
var child_40915 = chunk__40076_40912.cljs$core$IIndexed$_nth$arity$2(null,i__40078_40914);
if(cljs.core.truth_(child_40915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40915);


var G__40916 = seq__40074_40911;
var G__40917 = chunk__40076_40912;
var G__40918 = count__40077_40913;
var G__40919 = (i__40078_40914 + (1));
seq__40074_40911 = G__40916;
chunk__40076_40912 = G__40917;
count__40077_40913 = G__40918;
i__40078_40914 = G__40919;
continue;
} else {
var G__40920 = seq__40074_40911;
var G__40921 = chunk__40076_40912;
var G__40922 = count__40077_40913;
var G__40923 = (i__40078_40914 + (1));
seq__40074_40911 = G__40920;
chunk__40076_40912 = G__40921;
count__40077_40913 = G__40922;
i__40078_40914 = G__40923;
continue;
}
} else {
var temp__5804__auto___40924__$1 = cljs.core.seq(seq__40074_40911);
if(temp__5804__auto___40924__$1){
var seq__40074_40925__$1 = temp__5804__auto___40924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40074_40925__$1)){
var c__5565__auto___40926 = cljs.core.chunk_first(seq__40074_40925__$1);
var G__40927 = cljs.core.chunk_rest(seq__40074_40925__$1);
var G__40928 = c__5565__auto___40926;
var G__40929 = cljs.core.count(c__5565__auto___40926);
var G__40930 = (0);
seq__40074_40911 = G__40927;
chunk__40076_40912 = G__40928;
count__40077_40913 = G__40929;
i__40078_40914 = G__40930;
continue;
} else {
var child_40931 = cljs.core.first(seq__40074_40925__$1);
if(cljs.core.truth_(child_40931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40931);


var G__40933 = cljs.core.next(seq__40074_40925__$1);
var G__40934 = null;
var G__40935 = (0);
var G__40936 = (0);
seq__40074_40911 = G__40933;
chunk__40076_40912 = G__40934;
count__40077_40913 = G__40935;
i__40078_40914 = G__40936;
continue;
} else {
var G__40937 = cljs.core.next(seq__40074_40925__$1);
var G__40938 = null;
var G__40939 = (0);
var G__40940 = (0);
seq__40074_40911 = G__40937;
chunk__40076_40912 = G__40938;
count__40077_40913 = G__40939;
i__40078_40914 = G__40940;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40910);
}


var G__40941 = cljs.core.next(seq__39966_40903__$1);
var G__40942 = null;
var G__40943 = (0);
var G__40944 = (0);
seq__39966_40859 = G__40941;
chunk__39967_40860 = G__40942;
count__39968_40861 = G__40943;
i__39969_40862 = G__40944;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40133 = cljs.core.seq(node);
var chunk__40134 = null;
var count__40135 = (0);
var i__40136 = (0);
while(true){
if((i__40136 < count__40135)){
var n = chunk__40134.cljs$core$IIndexed$_nth$arity$2(null,i__40136);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40946 = seq__40133;
var G__40947 = chunk__40134;
var G__40948 = count__40135;
var G__40949 = (i__40136 + (1));
seq__40133 = G__40946;
chunk__40134 = G__40947;
count__40135 = G__40948;
i__40136 = G__40949;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40133);
if(temp__5804__auto__){
var seq__40133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40133__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40133__$1);
var G__40950 = cljs.core.chunk_rest(seq__40133__$1);
var G__40951 = c__5565__auto__;
var G__40952 = cljs.core.count(c__5565__auto__);
var G__40953 = (0);
seq__40133 = G__40950;
chunk__40134 = G__40951;
count__40135 = G__40952;
i__40136 = G__40953;
continue;
} else {
var n = cljs.core.first(seq__40133__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40954 = cljs.core.next(seq__40133__$1);
var G__40955 = null;
var G__40956 = (0);
var G__40957 = (0);
seq__40133 = G__40954;
chunk__40134 = G__40955;
count__40135 = G__40956;
i__40136 = G__40957;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40168 = arguments.length;
switch (G__40168) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40184 = arguments.length;
switch (G__40184) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40212 = arguments.length;
switch (G__40212) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40962 = arguments.length;
var i__5767__auto___40963 = (0);
while(true){
if((i__5767__auto___40963 < len__5766__auto___40962)){
args__5772__auto__.push((arguments[i__5767__auto___40963]));

var G__40965 = (i__5767__auto___40963 + (1));
i__5767__auto___40963 = G__40965;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40277_40967 = cljs.core.seq(nodes);
var chunk__40278_40968 = null;
var count__40279_40969 = (0);
var i__40280_40970 = (0);
while(true){
if((i__40280_40970 < count__40279_40969)){
var node_40971 = chunk__40278_40968.cljs$core$IIndexed$_nth$arity$2(null,i__40280_40970);
fragment.appendChild(shadow.dom._to_dom(node_40971));


var G__40972 = seq__40277_40967;
var G__40973 = chunk__40278_40968;
var G__40974 = count__40279_40969;
var G__40975 = (i__40280_40970 + (1));
seq__40277_40967 = G__40972;
chunk__40278_40968 = G__40973;
count__40279_40969 = G__40974;
i__40280_40970 = G__40975;
continue;
} else {
var temp__5804__auto___40976 = cljs.core.seq(seq__40277_40967);
if(temp__5804__auto___40976){
var seq__40277_40977__$1 = temp__5804__auto___40976;
if(cljs.core.chunked_seq_QMARK_(seq__40277_40977__$1)){
var c__5565__auto___40978 = cljs.core.chunk_first(seq__40277_40977__$1);
var G__40979 = cljs.core.chunk_rest(seq__40277_40977__$1);
var G__40980 = c__5565__auto___40978;
var G__40981 = cljs.core.count(c__5565__auto___40978);
var G__40982 = (0);
seq__40277_40967 = G__40979;
chunk__40278_40968 = G__40980;
count__40279_40969 = G__40981;
i__40280_40970 = G__40982;
continue;
} else {
var node_40983 = cljs.core.first(seq__40277_40977__$1);
fragment.appendChild(shadow.dom._to_dom(node_40983));


var G__40984 = cljs.core.next(seq__40277_40977__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40277_40967 = G__40984;
chunk__40278_40968 = G__40985;
count__40279_40969 = G__40986;
i__40280_40970 = G__40987;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40252){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40252));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40309_40988 = cljs.core.seq(scripts);
var chunk__40310_40989 = null;
var count__40311_40990 = (0);
var i__40312_40991 = (0);
while(true){
if((i__40312_40991 < count__40311_40990)){
var vec__40335_40992 = chunk__40310_40989.cljs$core$IIndexed$_nth$arity$2(null,i__40312_40991);
var script_tag_40993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40335_40992,(0),null);
var script_body_40994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40335_40992,(1),null);
eval(script_body_40994);


var G__40995 = seq__40309_40988;
var G__40996 = chunk__40310_40989;
var G__40997 = count__40311_40990;
var G__40998 = (i__40312_40991 + (1));
seq__40309_40988 = G__40995;
chunk__40310_40989 = G__40996;
count__40311_40990 = G__40997;
i__40312_40991 = G__40998;
continue;
} else {
var temp__5804__auto___41000 = cljs.core.seq(seq__40309_40988);
if(temp__5804__auto___41000){
var seq__40309_41001__$1 = temp__5804__auto___41000;
if(cljs.core.chunked_seq_QMARK_(seq__40309_41001__$1)){
var c__5565__auto___41002 = cljs.core.chunk_first(seq__40309_41001__$1);
var G__41003 = cljs.core.chunk_rest(seq__40309_41001__$1);
var G__41004 = c__5565__auto___41002;
var G__41005 = cljs.core.count(c__5565__auto___41002);
var G__41006 = (0);
seq__40309_40988 = G__41003;
chunk__40310_40989 = G__41004;
count__40311_40990 = G__41005;
i__40312_40991 = G__41006;
continue;
} else {
var vec__40344_41007 = cljs.core.first(seq__40309_41001__$1);
var script_tag_41008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344_41007,(0),null);
var script_body_41009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40344_41007,(1),null);
eval(script_body_41009);


var G__41010 = cljs.core.next(seq__40309_41001__$1);
var G__41011 = null;
var G__41012 = (0);
var G__41013 = (0);
seq__40309_40988 = G__41010;
chunk__40310_40989 = G__41011;
count__40311_40990 = G__41012;
i__40312_40991 = G__41013;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40348){
var vec__40350 = p__40348;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40350,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40350,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40362 = arguments.length;
switch (G__40362) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40393 = cljs.core.seq(style_keys);
var chunk__40394 = null;
var count__40395 = (0);
var i__40396 = (0);
while(true){
if((i__40396 < count__40395)){
var it = chunk__40394.cljs$core$IIndexed$_nth$arity$2(null,i__40396);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41020 = seq__40393;
var G__41021 = chunk__40394;
var G__41022 = count__40395;
var G__41023 = (i__40396 + (1));
seq__40393 = G__41020;
chunk__40394 = G__41021;
count__40395 = G__41022;
i__40396 = G__41023;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40393);
if(temp__5804__auto__){
var seq__40393__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40393__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40393__$1);
var G__41024 = cljs.core.chunk_rest(seq__40393__$1);
var G__41025 = c__5565__auto__;
var G__41026 = cljs.core.count(c__5565__auto__);
var G__41027 = (0);
seq__40393 = G__41024;
chunk__40394 = G__41025;
count__40395 = G__41026;
i__40396 = G__41027;
continue;
} else {
var it = cljs.core.first(seq__40393__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41028 = cljs.core.next(seq__40393__$1);
var G__41029 = null;
var G__41030 = (0);
var G__41031 = (0);
seq__40393 = G__41028;
chunk__40394 = G__41029;
count__40395 = G__41030;
i__40396 = G__41031;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k40420,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__40428 = k40420;
var G__40428__$1 = (((G__40428 instanceof cljs.core.Keyword))?G__40428.fqn:null);
switch (G__40428__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40420,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__40433){
var vec__40434 = p__40433;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40434,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40434,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40419){
var self__ = this;
var G__40419__$1 = this;
return (new cljs.core.RecordIter((0),G__40419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40421,other40422){
var self__ = this;
var this40421__$1 = this;
return (((!((other40422 == null)))) && ((((this40421__$1.constructor === other40422.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40421__$1.x,other40422.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40421__$1.y,other40422.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40421__$1.__extmap,other40422.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k40420){
var self__ = this;
var this__5347__auto____$1 = this;
var G__40476 = k40420;
var G__40476__$1 = (((G__40476 instanceof cljs.core.Keyword))?G__40476.fqn:null);
switch (G__40476__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40420);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__40419){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__40479 = cljs.core.keyword_identical_QMARK_;
var expr__40480 = k__5349__auto__;
if(cljs.core.truth_((pred__40479.cljs$core$IFn$_invoke$arity$2 ? pred__40479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40480) : pred__40479.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40480)))){
return (new shadow.dom.Coordinate(G__40419,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40479.cljs$core$IFn$_invoke$arity$2 ? pred__40479.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40480) : pred__40479.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40480)))){
return (new shadow.dom.Coordinate(self__.x,G__40419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__40419),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__40419){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40419,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40423){
var extmap__5382__auto__ = (function (){var G__40500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40423,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40500);
} else {
return G__40500;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40423),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40423),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k40527,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__40536 = k40527;
var G__40536__$1 = (((G__40536 instanceof cljs.core.Keyword))?G__40536.fqn:null);
switch (G__40536__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40527,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__40541){
var vec__40545 = p__40541;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40545,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40545,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40526){
var self__ = this;
var G__40526__$1 = this;
return (new cljs.core.RecordIter((0),G__40526__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40528,other40529){
var self__ = this;
var this40528__$1 = this;
return (((!((other40529 == null)))) && ((((this40528__$1.constructor === other40529.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40528__$1.w,other40529.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40528__$1.h,other40529.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40528__$1.__extmap,other40529.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k40527){
var self__ = this;
var this__5347__auto____$1 = this;
var G__40578 = k40527;
var G__40578__$1 = (((G__40578 instanceof cljs.core.Keyword))?G__40578.fqn:null);
switch (G__40578__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40527);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__40526){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__40586 = cljs.core.keyword_identical_QMARK_;
var expr__40587 = k__5349__auto__;
if(cljs.core.truth_((pred__40586.cljs$core$IFn$_invoke$arity$2 ? pred__40586.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40587) : pred__40586.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40587)))){
return (new shadow.dom.Size(G__40526,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40586.cljs$core$IFn$_invoke$arity$2 ? pred__40586.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40587) : pred__40586.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40587)))){
return (new shadow.dom.Size(self__.w,G__40526,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__40526),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__40526){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40526,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40531){
var extmap__5382__auto__ = (function (){var G__40601 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40531,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40531)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40601);
} else {
return G__40601;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40531),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40531),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__41060 = (i + (1));
var G__41061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41060;
ret = G__41061;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40628){
var vec__40629 = p__40628;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40629,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40640 = arguments.length;
switch (G__40640) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41066 = ps;
var G__41067 = (i + (1));
el__$1 = G__41066;
i = G__41067;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40647 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40650_41082 = cljs.core.seq(props);
var chunk__40651_41083 = null;
var count__40652_41084 = (0);
var i__40653_41085 = (0);
while(true){
if((i__40653_41085 < count__40652_41084)){
var vec__40660_41092 = chunk__40651_41083.cljs$core$IIndexed$_nth$arity$2(null,i__40653_41085);
var k_41093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40660_41092,(0),null);
var v_41094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40660_41092,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_41093);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41093),v_41094);


var G__41095 = seq__40650_41082;
var G__41096 = chunk__40651_41083;
var G__41097 = count__40652_41084;
var G__41098 = (i__40653_41085 + (1));
seq__40650_41082 = G__41095;
chunk__40651_41083 = G__41096;
count__40652_41084 = G__41097;
i__40653_41085 = G__41098;
continue;
} else {
var temp__5804__auto___41099 = cljs.core.seq(seq__40650_41082);
if(temp__5804__auto___41099){
var seq__40650_41100__$1 = temp__5804__auto___41099;
if(cljs.core.chunked_seq_QMARK_(seq__40650_41100__$1)){
var c__5565__auto___41101 = cljs.core.chunk_first(seq__40650_41100__$1);
var G__41104 = cljs.core.chunk_rest(seq__40650_41100__$1);
var G__41105 = c__5565__auto___41101;
var G__41106 = cljs.core.count(c__5565__auto___41101);
var G__41107 = (0);
seq__40650_41082 = G__41104;
chunk__40651_41083 = G__41105;
count__40652_41084 = G__41106;
i__40653_41085 = G__41107;
continue;
} else {
var vec__40665_41109 = cljs.core.first(seq__40650_41100__$1);
var k_41110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40665_41109,(0),null);
var v_41111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40665_41109,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_41110);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41110),v_41111);


var G__41112 = cljs.core.next(seq__40650_41100__$1);
var G__41113 = null;
var G__41114 = (0);
var G__41115 = (0);
seq__40650_41082 = G__41112;
chunk__40651_41083 = G__41113;
count__40652_41084 = G__41114;
i__40653_41085 = G__41115;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40674 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40674,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40674,(1),null);
var seq__40677_41127 = cljs.core.seq(node_children);
var chunk__40679_41131 = null;
var count__40680_41132 = (0);
var i__40681_41133 = (0);
while(true){
if((i__40681_41133 < count__40680_41132)){
var child_struct_41134 = chunk__40679_41131.cljs$core$IIndexed$_nth$arity$2(null,i__40681_41133);
if((!((child_struct_41134 == null)))){
if(typeof child_struct_41134 === 'string'){
var text_41135 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41135),child_struct_41134].join(''));
} else {
var children_41136 = shadow.dom.svg_node(child_struct_41134);
if(cljs.core.seq_QMARK_(children_41136)){
var seq__40721_41137 = cljs.core.seq(children_41136);
var chunk__40723_41138 = null;
var count__40724_41139 = (0);
var i__40725_41140 = (0);
while(true){
if((i__40725_41140 < count__40724_41139)){
var child_41141 = chunk__40723_41138.cljs$core$IIndexed$_nth$arity$2(null,i__40725_41140);
if(cljs.core.truth_(child_41141)){
node.appendChild(child_41141);


var G__41148 = seq__40721_41137;
var G__41149 = chunk__40723_41138;
var G__41150 = count__40724_41139;
var G__41151 = (i__40725_41140 + (1));
seq__40721_41137 = G__41148;
chunk__40723_41138 = G__41149;
count__40724_41139 = G__41150;
i__40725_41140 = G__41151;
continue;
} else {
var G__41152 = seq__40721_41137;
var G__41153 = chunk__40723_41138;
var G__41154 = count__40724_41139;
var G__41155 = (i__40725_41140 + (1));
seq__40721_41137 = G__41152;
chunk__40723_41138 = G__41153;
count__40724_41139 = G__41154;
i__40725_41140 = G__41155;
continue;
}
} else {
var temp__5804__auto___41156 = cljs.core.seq(seq__40721_41137);
if(temp__5804__auto___41156){
var seq__40721_41157__$1 = temp__5804__auto___41156;
if(cljs.core.chunked_seq_QMARK_(seq__40721_41157__$1)){
var c__5565__auto___41158 = cljs.core.chunk_first(seq__40721_41157__$1);
var G__41159 = cljs.core.chunk_rest(seq__40721_41157__$1);
var G__41160 = c__5565__auto___41158;
var G__41161 = cljs.core.count(c__5565__auto___41158);
var G__41162 = (0);
seq__40721_41137 = G__41159;
chunk__40723_41138 = G__41160;
count__40724_41139 = G__41161;
i__40725_41140 = G__41162;
continue;
} else {
var child_41163 = cljs.core.first(seq__40721_41157__$1);
if(cljs.core.truth_(child_41163)){
node.appendChild(child_41163);


var G__41164 = cljs.core.next(seq__40721_41157__$1);
var G__41165 = null;
var G__41166 = (0);
var G__41167 = (0);
seq__40721_41137 = G__41164;
chunk__40723_41138 = G__41165;
count__40724_41139 = G__41166;
i__40725_41140 = G__41167;
continue;
} else {
var G__41168 = cljs.core.next(seq__40721_41157__$1);
var G__41169 = null;
var G__41170 = (0);
var G__41171 = (0);
seq__40721_41137 = G__41168;
chunk__40723_41138 = G__41169;
count__40724_41139 = G__41170;
i__40725_41140 = G__41171;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41136);
}
}


var G__41172 = seq__40677_41127;
var G__41173 = chunk__40679_41131;
var G__41174 = count__40680_41132;
var G__41175 = (i__40681_41133 + (1));
seq__40677_41127 = G__41172;
chunk__40679_41131 = G__41173;
count__40680_41132 = G__41174;
i__40681_41133 = G__41175;
continue;
} else {
var G__41176 = seq__40677_41127;
var G__41177 = chunk__40679_41131;
var G__41178 = count__40680_41132;
var G__41179 = (i__40681_41133 + (1));
seq__40677_41127 = G__41176;
chunk__40679_41131 = G__41177;
count__40680_41132 = G__41178;
i__40681_41133 = G__41179;
continue;
}
} else {
var temp__5804__auto___41180 = cljs.core.seq(seq__40677_41127);
if(temp__5804__auto___41180){
var seq__40677_41181__$1 = temp__5804__auto___41180;
if(cljs.core.chunked_seq_QMARK_(seq__40677_41181__$1)){
var c__5565__auto___41182 = cljs.core.chunk_first(seq__40677_41181__$1);
var G__41183 = cljs.core.chunk_rest(seq__40677_41181__$1);
var G__41184 = c__5565__auto___41182;
var G__41185 = cljs.core.count(c__5565__auto___41182);
var G__41186 = (0);
seq__40677_41127 = G__41183;
chunk__40679_41131 = G__41184;
count__40680_41132 = G__41185;
i__40681_41133 = G__41186;
continue;
} else {
var child_struct_41187 = cljs.core.first(seq__40677_41181__$1);
if((!((child_struct_41187 == null)))){
if(typeof child_struct_41187 === 'string'){
var text_41190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41190),child_struct_41187].join(''));
} else {
var children_41191 = shadow.dom.svg_node(child_struct_41187);
if(cljs.core.seq_QMARK_(children_41191)){
var seq__40742_41192 = cljs.core.seq(children_41191);
var chunk__40744_41193 = null;
var count__40745_41194 = (0);
var i__40746_41195 = (0);
while(true){
if((i__40746_41195 < count__40745_41194)){
var child_41196 = chunk__40744_41193.cljs$core$IIndexed$_nth$arity$2(null,i__40746_41195);
if(cljs.core.truth_(child_41196)){
node.appendChild(child_41196);


var G__41197 = seq__40742_41192;
var G__41198 = chunk__40744_41193;
var G__41199 = count__40745_41194;
var G__41200 = (i__40746_41195 + (1));
seq__40742_41192 = G__41197;
chunk__40744_41193 = G__41198;
count__40745_41194 = G__41199;
i__40746_41195 = G__41200;
continue;
} else {
var G__41201 = seq__40742_41192;
var G__41202 = chunk__40744_41193;
var G__41203 = count__40745_41194;
var G__41204 = (i__40746_41195 + (1));
seq__40742_41192 = G__41201;
chunk__40744_41193 = G__41202;
count__40745_41194 = G__41203;
i__40746_41195 = G__41204;
continue;
}
} else {
var temp__5804__auto___41205__$1 = cljs.core.seq(seq__40742_41192);
if(temp__5804__auto___41205__$1){
var seq__40742_41206__$1 = temp__5804__auto___41205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40742_41206__$1)){
var c__5565__auto___41207 = cljs.core.chunk_first(seq__40742_41206__$1);
var G__41208 = cljs.core.chunk_rest(seq__40742_41206__$1);
var G__41209 = c__5565__auto___41207;
var G__41210 = cljs.core.count(c__5565__auto___41207);
var G__41211 = (0);
seq__40742_41192 = G__41208;
chunk__40744_41193 = G__41209;
count__40745_41194 = G__41210;
i__40746_41195 = G__41211;
continue;
} else {
var child_41212 = cljs.core.first(seq__40742_41206__$1);
if(cljs.core.truth_(child_41212)){
node.appendChild(child_41212);


var G__41214 = cljs.core.next(seq__40742_41206__$1);
var G__41215 = null;
var G__41216 = (0);
var G__41217 = (0);
seq__40742_41192 = G__41214;
chunk__40744_41193 = G__41215;
count__40745_41194 = G__41216;
i__40746_41195 = G__41217;
continue;
} else {
var G__41218 = cljs.core.next(seq__40742_41206__$1);
var G__41219 = null;
var G__41220 = (0);
var G__41221 = (0);
seq__40742_41192 = G__41218;
chunk__40744_41193 = G__41219;
count__40745_41194 = G__41220;
i__40746_41195 = G__41221;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41191);
}
}


var G__41222 = cljs.core.next(seq__40677_41181__$1);
var G__41223 = null;
var G__41224 = (0);
var G__41225 = (0);
seq__40677_41127 = G__41222;
chunk__40679_41131 = G__41223;
count__40680_41132 = G__41224;
i__40681_41133 = G__41225;
continue;
} else {
var G__41226 = cljs.core.next(seq__40677_41181__$1);
var G__41227 = null;
var G__41228 = (0);
var G__41229 = (0);
seq__40677_41127 = G__41226;
chunk__40679_41131 = G__41227;
count__40680_41132 = G__41228;
i__40681_41133 = G__41229;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41230 = arguments.length;
var i__5767__auto___41231 = (0);
while(true){
if((i__5767__auto___41231 < len__5766__auto___41230)){
args__5772__auto__.push((arguments[i__5767__auto___41231]));

var G__41232 = (i__5767__auto___41231 + (1));
i__5767__auto___41231 = G__41232;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40759){
var G__40760 = cljs.core.first(seq40759);
var seq40759__$1 = cljs.core.next(seq40759);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40760,seq40759__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40763 = arguments.length;
switch (G__40763) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__36174__auto___41241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_40775){
var state_val_40776 = (state_40775[(1)]);
if((state_val_40776 === (1))){
var state_40775__$1 = state_40775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40775__$1,(2),once_or_cleanup);
} else {
if((state_val_40776 === (2))){
var inst_40772 = (state_40775[(2)]);
var inst_40773 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40775__$1 = (function (){var statearr_40777 = state_40775;
(statearr_40777[(7)] = inst_40772);

return statearr_40777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40775__$1,inst_40773);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35925__auto__ = null;
var shadow$dom$state_machine__35925__auto____0 = (function (){
var statearr_40778 = [null,null,null,null,null,null,null,null];
(statearr_40778[(0)] = shadow$dom$state_machine__35925__auto__);

(statearr_40778[(1)] = (1));

return statearr_40778;
});
var shadow$dom$state_machine__35925__auto____1 = (function (state_40775){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_40775);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e40779){var ex__35928__auto__ = e40779;
var statearr_40780_41242 = state_40775;
(statearr_40780_41242[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_40775[(4)]))){
var statearr_40781_41243 = state_40775;
(statearr_40781_41243[(1)] = cljs.core.first((state_40775[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41244 = state_40775;
state_40775 = G__41244;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
shadow$dom$state_machine__35925__auto__ = function(state_40775){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35925__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35925__auto____1.call(this,state_40775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35925__auto____0;
shadow$dom$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35925__auto____1;
return shadow$dom$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_40782 = f__36175__auto__();
(statearr_40782[(6)] = c__36174__auto___41241);

return statearr_40782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
