goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41982){
var map__41983 = p__41982;
var map__41983__$1 = cljs.core.__destructure_map(map__41983);
var m = map__41983__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41983__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41983__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41989_42241 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41990_42242 = null;
var count__41991_42243 = (0);
var i__41992_42244 = (0);
while(true){
if((i__41992_42244 < count__41991_42243)){
var f_42245 = chunk__41990_42242.cljs$core$IIndexed$_nth$arity$2(null,i__41992_42244);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42245], 0));


var G__42246 = seq__41989_42241;
var G__42247 = chunk__41990_42242;
var G__42248 = count__41991_42243;
var G__42249 = (i__41992_42244 + (1));
seq__41989_42241 = G__42246;
chunk__41990_42242 = G__42247;
count__41991_42243 = G__42248;
i__41992_42244 = G__42249;
continue;
} else {
var temp__5804__auto___42250 = cljs.core.seq(seq__41989_42241);
if(temp__5804__auto___42250){
var seq__41989_42251__$1 = temp__5804__auto___42250;
if(cljs.core.chunked_seq_QMARK_(seq__41989_42251__$1)){
var c__5565__auto___42252 = cljs.core.chunk_first(seq__41989_42251__$1);
var G__42253 = cljs.core.chunk_rest(seq__41989_42251__$1);
var G__42254 = c__5565__auto___42252;
var G__42255 = cljs.core.count(c__5565__auto___42252);
var G__42256 = (0);
seq__41989_42241 = G__42253;
chunk__41990_42242 = G__42254;
count__41991_42243 = G__42255;
i__41992_42244 = G__42256;
continue;
} else {
var f_42257 = cljs.core.first(seq__41989_42251__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42257], 0));


var G__42258 = cljs.core.next(seq__41989_42251__$1);
var G__42259 = null;
var G__42260 = (0);
var G__42261 = (0);
seq__41989_42241 = G__42258;
chunk__41990_42242 = G__42259;
count__41991_42243 = G__42260;
i__41992_42244 = G__42261;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42262 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42262], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42262)))?cljs.core.second(arglists_42262):arglists_42262)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41998_42268 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41999_42269 = null;
var count__42000_42270 = (0);
var i__42001_42271 = (0);
while(true){
if((i__42001_42271 < count__42000_42270)){
var vec__42014_42272 = chunk__41999_42269.cljs$core$IIndexed$_nth$arity$2(null,i__42001_42271);
var name_42273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42272,(0),null);
var map__42017_42274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42272,(1),null);
var map__42017_42275__$1 = cljs.core.__destructure_map(map__42017_42274);
var doc_42276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017_42275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42017_42275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42273], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42277], 0));

if(cljs.core.truth_(doc_42276)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42276], 0));
} else {
}


var G__42278 = seq__41998_42268;
var G__42279 = chunk__41999_42269;
var G__42280 = count__42000_42270;
var G__42281 = (i__42001_42271 + (1));
seq__41998_42268 = G__42278;
chunk__41999_42269 = G__42279;
count__42000_42270 = G__42280;
i__42001_42271 = G__42281;
continue;
} else {
var temp__5804__auto___42282 = cljs.core.seq(seq__41998_42268);
if(temp__5804__auto___42282){
var seq__41998_42283__$1 = temp__5804__auto___42282;
if(cljs.core.chunked_seq_QMARK_(seq__41998_42283__$1)){
var c__5565__auto___42284 = cljs.core.chunk_first(seq__41998_42283__$1);
var G__42285 = cljs.core.chunk_rest(seq__41998_42283__$1);
var G__42286 = c__5565__auto___42284;
var G__42287 = cljs.core.count(c__5565__auto___42284);
var G__42288 = (0);
seq__41998_42268 = G__42285;
chunk__41999_42269 = G__42286;
count__42000_42270 = G__42287;
i__42001_42271 = G__42288;
continue;
} else {
var vec__42021_42289 = cljs.core.first(seq__41998_42283__$1);
var name_42291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42021_42289,(0),null);
var map__42024_42292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42021_42289,(1),null);
var map__42024_42293__$1 = cljs.core.__destructure_map(map__42024_42292);
var doc_42294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42024_42293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42024_42293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42291], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42295], 0));

if(cljs.core.truth_(doc_42294)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42294], 0));
} else {
}


var G__42297 = cljs.core.next(seq__41998_42283__$1);
var G__42298 = null;
var G__42299 = (0);
var G__42300 = (0);
seq__41998_42268 = G__42297;
chunk__41999_42269 = G__42298;
count__42000_42270 = G__42299;
i__42001_42271 = G__42300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42028 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42029 = null;
var count__42030 = (0);
var i__42031 = (0);
while(true){
if((i__42031 < count__42030)){
var role = chunk__42029.cljs$core$IIndexed$_nth$arity$2(null,i__42031);
var temp__5804__auto___42302__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42302__$1)){
var spec_42303 = temp__5804__auto___42302__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42303)], 0));
} else {
}


var G__42304 = seq__42028;
var G__42305 = chunk__42029;
var G__42306 = count__42030;
var G__42307 = (i__42031 + (1));
seq__42028 = G__42304;
chunk__42029 = G__42305;
count__42030 = G__42306;
i__42031 = G__42307;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__42028);
if(temp__5804__auto____$1){
var seq__42028__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42028__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42028__$1);
var G__42312 = cljs.core.chunk_rest(seq__42028__$1);
var G__42313 = c__5565__auto__;
var G__42314 = cljs.core.count(c__5565__auto__);
var G__42315 = (0);
seq__42028 = G__42312;
chunk__42029 = G__42313;
count__42030 = G__42314;
i__42031 = G__42315;
continue;
} else {
var role = cljs.core.first(seq__42028__$1);
var temp__5804__auto___42316__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42316__$2)){
var spec_42317 = temp__5804__auto___42316__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42317)], 0));
} else {
}


var G__42318 = cljs.core.next(seq__42028__$1);
var G__42319 = null;
var G__42320 = (0);
var G__42321 = (0);
seq__42028 = G__42318;
chunk__42029 = G__42319;
count__42030 = G__42320;
i__42031 = G__42321;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42323 = cljs.core.ex_cause(t);
via = G__42322;
t = G__42323;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42138 = datafied_throwable;
var map__42138__$1 = cljs.core.__destructure_map(map__42138);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42138__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42139 = cljs.core.last(via);
var map__42139__$1 = cljs.core.__destructure_map(map__42139);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42140 = data;
var map__42140__$1 = cljs.core.__destructure_map(map__42140);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42141 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42141__$1 = cljs.core.__destructure_map(map__42141);
var top_data = map__42141__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42143 = phase;
var G__42143__$1 = (((G__42143 instanceof cljs.core.Keyword))?G__42143.fqn:null);
switch (G__42143__$1) {
case "read-source":
var map__42144 = data;
var map__42144__$1 = cljs.core.__destructure_map(map__42144);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42144__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42146 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42146__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42146,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42146);
var G__42146__$2 = (cljs.core.truth_((function (){var fexpr__42147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42147.cljs$core$IFn$_invoke$arity$1 ? fexpr__42147.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42147.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42146__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42146__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42146__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42148 = top_data;
var G__42148__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42148,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42148);
var G__42148__$2 = (cljs.core.truth_((function (){var fexpr__42149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42149.cljs$core$IFn$_invoke$arity$1 ? fexpr__42149.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42149.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42148__$1);
var G__42148__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42148__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42148__$2);
var G__42148__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42148__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42148__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42148__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42148__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42150 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42150,(3),null);
var G__42154 = top_data;
var G__42154__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42154,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42154);
var G__42154__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42154__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42154__$1);
var G__42154__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42154__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42154__$2);
var G__42154__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42154__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42154__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42154__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42154__$4;
}

break;
case "execution":
var vec__42157 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42157,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42137_SHARP_){
var or__5043__auto__ = (p1__42137_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__42162 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42162.cljs$core$IFn$_invoke$arity$1 ? fexpr__42162.cljs$core$IFn$_invoke$arity$1(p1__42137_SHARP_) : fexpr__42162.call(null,p1__42137_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__42164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42164__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42164);
var G__42164__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42164__$1);
var G__42164__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42164__$2);
var G__42164__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42164__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42164__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42164__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42143__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42171){
var map__42172 = p__42171;
var map__42172__$1 = cljs.core.__destructure_map(map__42172);
var triage_data = map__42172__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42176 = phase;
var G__42176__$1 = (((G__42176 instanceof cljs.core.Keyword))?G__42176.fqn:null);
switch (G__42176__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42177 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42178 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42179 = loc;
var G__42180 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42185_42341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42186_42342 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42187_42343 = true;
var _STAR_print_fn_STAR__temp_val__42188_42344 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42187_42343);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42188_42344);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42168_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42168_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42186_42342);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42185_42341);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42177,G__42178,G__42179,G__42180) : format.call(null,G__42177,G__42178,G__42179,G__42180));

break;
case "macroexpansion":
var G__42207 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42208 = cause_type;
var G__42209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42210 = loc;
var G__42211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42207,G__42208,G__42209,G__42210,G__42211) : format.call(null,G__42207,G__42208,G__42209,G__42210,G__42211));

break;
case "compile-syntax-check":
var G__42214 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42215 = cause_type;
var G__42216 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42217 = loc;
var G__42218 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42214,G__42215,G__42216,G__42217,G__42218) : format.call(null,G__42214,G__42215,G__42216,G__42217,G__42218));

break;
case "compilation":
var G__42219 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42220 = cause_type;
var G__42221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42222 = loc;
var G__42223 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42219,G__42220,G__42221,G__42222,G__42223) : format.call(null,G__42219,G__42220,G__42221,G__42222,G__42223));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42225 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42226 = symbol;
var G__42227 = loc;
var G__42228 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42229_42353 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42230_42354 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42231_42355 = true;
var _STAR_print_fn_STAR__temp_val__42232_42356 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42231_42355);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42232_42356);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42169_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42169_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42230_42354);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42229_42353);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42225,G__42226,G__42227,G__42228) : format.call(null,G__42225,G__42226,G__42227,G__42228));
} else {
var G__42233 = "Execution error%s at %s(%s).\n%s\n";
var G__42234 = cause_type;
var G__42235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42236 = loc;
var G__42237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42233,G__42234,G__42235,G__42236,G__42237) : format.call(null,G__42233,G__42234,G__42235,G__42236,G__42237));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42176__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
