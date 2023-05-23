goog.provide('sprog.iglu.glsl');
sprog.iglu.glsl.parse_int = (function sprog$iglu$glsl$parse_int(s){
return parseInt(s);
});
sprog.iglu.glsl.num__GT_glsl_str = (function sprog$iglu$glsl$num__GT_glsl_str(num){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.some((function (p1__44237_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__44237_SHARP_),"0")){
return p1__44237_SHARP_;
} else {
return null;
}
}),cljs.core.iterate(cljs.core.rest,cljs.core.reverse(num.toFixed((20)))))));
});
sprog.iglu.glsl.clj_name__GT_glsl_name = (function sprog$iglu$glsl$clj_name__GT_glsl_name(clj_name){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace((function (){var G__44239 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_name);
if((clj_name instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__44239,(1));
} else {
return G__44239;
}
})(),"-","_"));
});
sprog.iglu.glsl.parse_type = (function sprog$iglu$glsl$parse_type(p__44243){
var vec__44244 = p__44243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44244,(1),null);
var G__44247 = k;
var G__44247__$1 = (((G__44247 instanceof cljs.core.Keyword))?G__44247.fqn:null);
switch (G__44247__$1) {
case "type-name":
return v;

break;
case "array":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type-name","type-name",1911633753).cljs$core$IFn$_invoke$arity$1(v)),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(v)),"]"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44247__$1)].join('')));

}
});
if((typeof sprog !== 'undefined') && (typeof sprog.iglu !== 'undefined') && (typeof sprog.iglu.glsl !== 'undefined') && (typeof sprog.iglu.glsl.__GT_function_call !== 'undefined')){
} else {
sprog.iglu.glsl.__GT_function_call = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44255 = cljs.core.get_global_hierarchy;
return (fexpr__44255.cljs$core$IFn$_invoke$arity$0 ? fexpr__44255.cljs$core$IFn$_invoke$arity$0() : fexpr__44255.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sprog.iglu.glsl","->function-call"),(function (fn_name,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),fn_name)){
return new cljs.core.Keyword("sprog.iglu.glsl","do-block","sprog.iglu.glsl/do-block",552338180);
} else {
if(typeof fn_name === 'number'){
return new cljs.core.Keyword("sprog.iglu.glsl","number","sprog.iglu.glsl/number",473966786);
} else {
if(cljs.core.truth_(sprog.iglu.parse.int_literal_QMARK_(fn_name))){
return new cljs.core.Keyword("sprog.iglu.glsl","int-literal","sprog.iglu.glsl/int-literal",1966504390);
} else {
if(cljs.core.truth_((function (){var fexpr__44256 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"?","?",-62633706,null),"null"], null), null);
return (fexpr__44256.cljs$core$IFn$_invoke$arity$1 ? fexpr__44256.cljs$core$IFn$_invoke$arity$1(fn_name) : fexpr__44256.call(null,fn_name));
})())){
return new cljs.core.Keyword("sprog.iglu.glsl","inline-conditional","sprog.iglu.glsl/inline-conditional",-1236344498);
} else {
if(cljs.core.truth_((function (){var fexpr__44258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"<","<",993667236,null),"null",new cljs.core.Symbol(null,"||","||",1432830790,null),"null",new cljs.core.Symbol(null,"<=","<=",1244895369,null),"null",new cljs.core.Symbol(null,"*","*",345799209,null),"null",new cljs.core.Symbol(null,">",">",1085014381,null),"null",new cljs.core.Symbol(null,"%","%",-950237169,null),"null",new cljs.core.Symbol(null,"-","-",-471816912,null),"null",new cljs.core.Symbol(null,"&&","&&",-1330982734,null),"null",new cljs.core.Symbol(null,"/","/",-1371932971,null),"null",new cljs.core.Symbol(null,">=",">=",1016916022,null),"null",new cljs.core.Symbol(null,"+","+",-740910886,null),"null",new cljs.core.Symbol(null,"!=","!=",-201205829,null),"null",new cljs.core.Symbol(null,"==","==",-234118149,null),"null","^^","null"], null), null);
return (fexpr__44258.cljs$core$IFn$_invoke$arity$1 ? fexpr__44258.cljs$core$IFn$_invoke$arity$1(fn_name) : fexpr__44258.call(null,fn_name));
})())){
return new cljs.core.Keyword("sprog.iglu.glsl","operator","sprog.iglu.glsl/operator",-810571366);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"=","=",-1501502141,null),fn_name)){
return new cljs.core.Keyword("sprog.iglu.glsl","assignment","sprog.iglu.glsl/assignment",254190739);
} else {
if(cljs.core.truth_((function (){var fexpr__44259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["/=","null",new cljs.core.Symbol(null,"*=","*=",-1438205999,null),"null",new cljs.core.Symbol(null,"+=","+=",1039293914,null),"null",new cljs.core.Symbol(null,"-=","-=",1026627389,null),"null"], null), null);
return (fexpr__44259.cljs$core$IFn$_invoke$arity$1 ? fexpr__44259.cljs$core$IFn$_invoke$arity$1(fn_name) : fexpr__44259.call(null,fn_name));
})())){
return new cljs.core.Keyword("sprog.iglu.glsl","augment","sprog.iglu.glsl/augment",-1950561315);
} else {
if(cljs.core.truth_((function (){var fexpr__44260 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["else if",null,"for",null,"if",null,"switch",null,"while",null], null), null);
return (fexpr__44260.cljs$core$IFn$_invoke$arity$1 ? fexpr__44260.cljs$core$IFn$_invoke$arity$1(fn_name) : fexpr__44260.call(null,fn_name));
})())){
return new cljs.core.Keyword("sprog.iglu.glsl","block-with-expression","sprog.iglu.glsl/block-with-expression",-1617883165);
} else {
if(typeof fn_name === 'string'){
return new cljs.core.Keyword("sprog.iglu.glsl","block","sprog.iglu.glsl/block",-386376578);
} else {
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),"=")){
return new cljs.core.Keyword("sprog.iglu.glsl","local-assignment","sprog.iglu.glsl/local-assignment",1213946651);
} else {
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),".")){
return new cljs.core.Keyword("sprog.iglu.glsl","property","sprog.iglu.glsl/property",2117036196);
} else {
return fn_name;

}
}
}
}
}
}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
if((typeof sprog !== 'undefined') && (typeof sprog.iglu !== 'undefined') && (typeof sprog.iglu.glsl !== 'undefined') && (typeof sprog.iglu.glsl.__GT_subexpression !== 'undefined')){
} else {
sprog.iglu.glsl.__GT_subexpression = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44262 = cljs.core.get_global_hierarchy;
return (fexpr__44262.cljs$core$IFn$_invoke$arity$0 ? fexpr__44262.cljs$core$IFn$_invoke$arity$0() : fexpr__44262.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sprog.iglu.glsl","->subexpression"),(function (val){
return cljs.core.first(val);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
if((typeof sprog !== 'undefined') && (typeof sprog.iglu !== 'undefined') && (typeof sprog.iglu.glsl !== 'undefined') && (typeof sprog.iglu.glsl.__GT_statement !== 'undefined')){
} else {
sprog.iglu.glsl.__GT_statement = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44264 = cljs.core.get_global_hierarchy;
return (fexpr__44264.cljs$core$IFn$_invoke$arity$0 ? fexpr__44264.cljs$core$IFn$_invoke$arity$0() : fexpr__44264.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sprog.iglu.glsl","->statement"),(function (val){
return cljs.core.first(val);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","do-block","sprog.iglu.glsl/do-block",552338180),(function (_,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_statement,args);
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","augment","sprog.iglu.glsl/augment",-1950561315),(function (fn_name,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 2 args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var vec__44269 = args;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44269,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44269,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(sym))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(val))].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","assignment","sprog.iglu.glsl/assignment",254190739),(function (fn_name,args){
var G__44276 = cljs.core.count(args);
switch (G__44276) {
case (2):
var vec__44277 = args;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44277,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44277,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(sym))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(val))].join('');

break;
case (3):
var vec__44280 = args;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44280,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44280,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44280,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(sym))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(val))].join('');

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 2 args"].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","local-assignment","sprog.iglu.glsl/local-assignment",1213946651),(function (fn_name,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 2 args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var vec__44284 = args;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44284,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44284,(1),null);
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(sym))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(val))].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","block-with-expression","sprog.iglu.glsl/block-with-expression",-1617883165),(function (fn_name,args){
if((cljs.core.count(args) < (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 1 arg"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_statement,cljs.core.rest(args)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args)))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block","block",664686210)], 0));
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","block","sprog.iglu.glsl/block",-386376578),(function (fn_name,args){
if((cljs.core.count(args) < (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 1 arg"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_statement,args),fn_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"block","block",664686210)], 0));
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","inline-conditional","sprog.iglu.glsl/inline-conditional",-1236344498),(function (fn_name,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(args))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires 3 args"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var vec__44292 = args;
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(0),null);
var true_case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(1),null);
var false_case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44292,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(condition))," ? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(true_case))," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(false_case))].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","operator","sprog.iglu.glsl/operator",-810571366),(function (fn_name,args){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," "].join(''),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_subexpression,args));
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","property","sprog.iglu.glsl/property",2117036196),(function (fn_name,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires exactly one arg"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(1))].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","number","sprog.iglu.glsl/number",473966786),(function (fn_name,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires exactly one arg"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),"]"].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sprog.iglu.glsl","int-literal","sprog.iglu.glsl/int-literal",1966504390),(function (fn_name,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," requires exactly one arg"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),"]"].join('');
}));
sprog.iglu.glsl.__GT_function_call.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (fn_name,args){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(fn_name)),"(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_subexpression,args)),")"].join('');
}));
sprog.iglu.glsl.__GT_statement.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__44335){
var vec__44336 = p__44335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44336,(0),null);
var expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44336,(1),null);
var map__44341 = expression;
var map__44341__$1 = cljs.core.__destructure_map(map__44341);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44341__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44341__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return sprog.iglu.glsl.__GT_function_call.cljs$core$IFn$_invoke$arity$2(fn_name,args);
}));
sprog.iglu.glsl.__GT_statement.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (val){
return sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(val);
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__44345){
var vec__44346 = p__44345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44346,(0),null);
var expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44346,(1),null);
var map__44349 = expression;
var map__44349__$1 = cljs.core.__destructure_map(map__44349);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44349__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44349__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var ret = sprog.iglu.glsl.__GT_function_call.cljs$core$IFn$_invoke$arity$2(fn_name,args);
if(typeof ret === 'string'){
return ["(",ret,")"].join('');
} else {
return ret;
}
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"accessor","accessor",-25476721),(function (p__44351){
var vec__44352 = p__44351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44352,(0),null);
var map__44355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44352,(1),null);
var map__44355__$1 = cljs.core.__destructure_map(map__44355);
var array_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44355__$1,new cljs.core.Keyword(null,"array-name","array-name",99582377));
var array_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44355__$1,new cljs.core.Keyword(null,"array-index","array-index",67273111));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(array_name),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var vec__44365 = array_index;
var array_index_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44365,(0),null);
var array_index_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44365,(1),null);
var G__44368 = array_index_type;
var G__44368__$1 = (((G__44368 instanceof cljs.core.Keyword))?G__44368.fqn:null);
switch (G__44368__$1) {
case "int-literal":
return sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(array_index);

break;
case "number":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(array_index_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44368__$1)].join('')));

}
})()),"]"].join('');
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"number","number",1570378438),(function (p__44370){
var vec__44371 = p__44370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44371,(0),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44371,(1),null);
return sprog.iglu.glsl.num__GT_glsl_str(number);
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int-literal","int-literal",869313474),(function (p__44377){
var vec__44379 = p__44377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44379,(0),null);
var literal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44379,(1),null);
return sprog.iglu.glsl.parse_int(cljs.core.str.cljs$core$IFn$_invoke$arity$1(literal));
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (p__44384){
var vec__44387 = p__44384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44387,(0),null);
var symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44387,(1),null);
return sprog.iglu.glsl.clj_name__GT_glsl_name(symbol);
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__44390){
var vec__44391 = p__44390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44391,(0),null);
var string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44391,(1),null);
return string;
}));
sprog.iglu.glsl.__GT_subexpression.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (p__44398){
var vec__44399 = p__44398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44399,(0),null);
var map__44402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44399,(1),null);
var map__44402__$1 = cljs.core.__destructure_map(map__44402);
var type_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44402__$1,new cljs.core.Keyword(null,"type-name","type-name",1911633753));
var array_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44402__$1,new cljs.core.Keyword(null,"array-length","array-length",912103790));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44402__$1,new cljs.core.Keyword(null,"values","values",372645556));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var vec__44423 = array_length;
var array_index_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423,(0),null);
var array_index_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423,(1),null);
var G__44426 = array_index_type;
var G__44426__$1 = (((G__44426 instanceof cljs.core.Keyword))?G__44426.fqn:null);
switch (G__44426__$1) {
case "int-literal":
return sprog.iglu.glsl.__GT_subexpression.cljs$core$IFn$_invoke$arity$1(array_length);

break;
case "number":
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(array_index_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44426__$1)].join('')));

}
})()),"](",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_subexpression,values))))),")"].join('');
}));
sprog.iglu.glsl.__GT_precision = (function sprog$iglu$glsl$__GT_precision(p__44434){
var vec__44439 = p__44434;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(0),null);
var precision = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44439,(1),null);
return ["precision ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(precision)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('');
});
sprog.iglu.glsl.__GT_uniform = (function sprog$iglu$glsl$__GT_uniform(p__44450){
var vec__44451 = p__44450;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44451,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44451,(1),null);
return ["uniform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name))].join('');
});
sprog.iglu.glsl.__GT_attribute = (function sprog$iglu$glsl$__GT_attribute(p__44466){
var vec__44471 = p__44466;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44471,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44471,(1),null);
return ["attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name))].join('');
});
sprog.iglu.glsl.__GT_varying = (function sprog$iglu$glsl$__GT_varying(p__44487){
var vec__44488 = p__44487;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44488,(1),null);
return ["varying ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name))].join('');
});
sprog.iglu.glsl.__GT_inout = (function sprog$iglu$glsl$__GT_inout(in_or_out,qualifiers,p__44492){
var vec__44493 = p__44492;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44493,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44493,(1),null);
return [(cljs.core.truth_(qualifiers)?(function (){var qualifier = (qualifiers.cljs$core$IFn$_invoke$arity$1 ? qualifiers.cljs$core$IFn$_invoke$arity$1(name) : qualifiers.call(null,name));
if(cljs.core.truth_(qualifier)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)," "].join('');
} else {
return null;
}
})():null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_or_out)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name))].join('');
});
sprog.iglu.glsl.__GT_in = (function sprog$iglu$glsl$__GT_in(qualifiers,name_type_pair){
return sprog.iglu.glsl.__GT_inout("in",qualifiers,name_type_pair);
});
sprog.iglu.glsl.__GT_out = (function sprog$iglu$glsl$__GT_out(qualifiers,name_type_pair){
return sprog.iglu.glsl.__GT_inout("out",qualifiers,name_type_pair);
});
sprog.iglu.glsl.__GT_struct = (function sprog$iglu$glsl$__GT_struct(p__44504){
var vec__44505 = p__44504;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44505,(0),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44505,(1),null);
return ["struct ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," {\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44516){
var vec__44517 = p__44516;
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(0),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(1),null);
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name),";\n"].join('');
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_subexpression,fields))))),"}"].join('');
});
sprog.iglu.glsl.__GT_function = (function sprog$iglu$glsl$__GT_function(p__44520){
var vec__44522 = p__44520;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44522,(0),null);
var signature_function_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44522,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44526){
var vec__44527 = p__44526;
var signature = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44527,(0),null);
var map__44530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44527,(1),null);
var map__44530__$1 = cljs.core.__destructure_map(map__44530);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44530__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44530__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__44531 = signature;
var map__44531__$1 = cljs.core.__destructure_map(map__44531);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44531__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44531__$1,new cljs.core.Keyword(null,"out","out",-910545517));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(in$),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Function has args signature of a different ","length than its args definition"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),name,new cljs.core.Keyword(null,"signature","signature",1463754794),in$,new cljs.core.Keyword(null,"definition","definition",-1198729982),args], null));
} else {
}

var signature__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(out))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name)),"(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (type,name__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.parse_type(type))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(name__$1))].join('');
}),in$,args)),")"].join('');
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [signature__$1], null),(function (){var body_lines = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_statement,body);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-name","type-name",1911633753),new cljs.core.Symbol(null,"void","void",-444095336,null)], null),out)){
return body_lines;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(body_lines)),["return ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(body_lines))].join(''));
}
})())),new cljs.core.Keyword(null,"block","block",664686210));
}),signature_function_map);
});
sprog.iglu.glsl.indent = (function sprog$iglu$glsl$indent(level,line){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level * (2))," ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
sprog.iglu.glsl.stringify = (function sprog$iglu$glsl$stringify(level,lines,line){
if(typeof line === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,((((clojure.string.starts_with_QMARK_(line,"#")) || (clojure.string.ends_with_QMARK_(line,";"))))?line:[sprog.iglu.glsl.indent(level,line),";"].join('')));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(line))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,sprog.iglu.glsl.indent(level,cljs.core.second(line))),sprog.iglu.glsl.indent(level,"{")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.stringify,(level + (1))),cljs.core.PersistentVector.EMPTY,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),line))),sprog.iglu.glsl.indent(level,"}"));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.stringify,level),cljs.core.PersistentVector.EMPTY,line));

}
}
});
sprog.iglu.glsl.inner_symbols = (function sprog$iglu$glsl$inner_symbols(form){
return clojure.walk.walk((function (s){
if(cljs.core.coll_QMARK_(s)){
if(cljs.core.map_QMARK_(s)){
var G__44608 = cljs.core.vals(s);
return (sprog.iglu.glsl.inner_symbols.cljs$core$IFn$_invoke$arity$1 ? sprog.iglu.glsl.inner_symbols.cljs$core$IFn$_invoke$arity$1(G__44608) : sprog.iglu.glsl.inner_symbols.call(null,G__44608));
} else {
return (sprog.iglu.glsl.inner_symbols.cljs$core$IFn$_invoke$arity$1 ? sprog.iglu.glsl.inner_symbols.cljs$core$IFn$_invoke$arity$1(s) : sprog.iglu.glsl.inner_symbols.call(null,s));
}
} else {
if((s instanceof cljs.core.Symbol)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([s]);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}),(function (p1__44607_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__44607_SHARP_);
}),form);
});
sprog.iglu.glsl.sort_expressions = (function sprog$iglu$glsl$sort_expressions(expressions,dependencies){
var remaining_names = cljs.core.set(cljs.core.keys(expressions));
var sorted_expressions = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining_names)){
return cljs.core.seq(sorted_expressions);
} else {
var next_expression_name = cljs.core.some(((function (remaining_names,sorted_expressions){
return (function (p1__44609_SHARP_){
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remaining_names,(dependencies.cljs$core$IFn$_invoke$arity$1 ? dependencies.cljs$core$IFn$_invoke$arity$1(p1__44609_SHARP_) : dependencies.call(null,p1__44609_SHARP_))))){
return p1__44609_SHARP_;
} else {
return null;
}
});})(remaining_names,sorted_expressions))
,remaining_names);
if(cljs.core.truth_(next_expression_name)){
var G__44657 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(remaining_names,next_expression_name);
var G__44658 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sorted_expressions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_expression_name,(expressions.cljs$core$IFn$_invoke$arity$1 ? expressions.cljs$core$IFn$_invoke$arity$1(next_expression_name) : expressions.call(null,next_expression_name))], null));
remaining_names = G__44657;
sorted_expressions = G__44658;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cyclic dependency detected",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining_names)], null));
}
}
break;
}
});
sprog.iglu.glsl.sort_fns = (function sprog$iglu$glsl$sort_fns(functions){
return sprog.iglu.glsl.sort_expressions(functions,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44613){
var vec__44614 = p__44613;
var fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44614,(0),null);
var fn_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44614,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(functions)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44610_SHARP_){
return sprog.iglu.glsl.inner_symbols(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__44610_SHARP_)));
}),fn_content)))], null);
}),functions)));
});
sprog.iglu.glsl.sort_structs = (function sprog$iglu$glsl$sort_structs(structs){
return sprog.iglu.glsl.sort_expressions(structs,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44617){
var vec__44618 = p__44617;
var struct_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44618,(0),null);
var struct_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44618,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct_name,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(structs)),sprog.iglu.glsl.inner_symbols(struct_content))], null);
}),structs)));
});
sprog.iglu.glsl.layout_qualifiers = (function sprog$iglu$glsl$layout_qualifiers(layout){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44621){
var vec__44622 = p__44621;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44622,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,["layout(location = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location__$1),")"].join('')], null);
}),layout));
});
sprog.iglu.glsl.parsed_iglu__GT_glsl = (function sprog$iglu$glsl$parsed_iglu__GT_glsl(p__44625){
var map__44626 = p__44625;
var map__44626__$1 = cljs.core.__destructure_map(map__44626);
var parsed_iglu = map__44626__$1;
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"version","version",425292698));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var varyings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"varyings","varyings",-144893175));
var qualifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"qualifiers","qualifiers",-2077265079));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
var structs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"structs","structs",-233241972));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var full_functions = (function (){var G__44627 = functions;
if(cljs.core.truth_(main)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44627,new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-name","type-name",1911633753),new cljs.core.Symbol(null,"void","void",-444095336,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),main], null)]));
} else {
return G__44627;
}
})();
var full_qualifiers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qualifiers,sprog.iglu.glsl.layout_qualifiers(layout)], 0));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.stringify,(0)),cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__44628 = cljs.core.PersistentVector.EMPTY;
var G__44628__$1 = (cljs.core.truth_(version)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44628,["#version ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')):G__44628);
var G__44628__$2 = (cljs.core.truth_(precision)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_precision,precision)):G__44628__$1);
var G__44628__$3 = (cljs.core.truth_(uniforms)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$2,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_uniform,uniforms)):G__44628__$2);
var G__44628__$4 = (cljs.core.truth_(attributes)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$3,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_attribute,attributes)):G__44628__$3);
var G__44628__$5 = (cljs.core.truth_(varyings)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$4,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_varying,varyings)):G__44628__$4);
var G__44628__$6 = (cljs.core.truth_(inputs)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$5,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_in,full_qualifiers),inputs)):G__44628__$5);
var G__44628__$7 = (cljs.core.truth_(outputs)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$6,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_out,full_qualifiers),outputs)):G__44628__$6);
if(cljs.core.truth_(structs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__44628__$7,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.iglu.glsl.__GT_struct,sprog.iglu.glsl.sort_structs(structs)));
} else {
return G__44628__$7;
}
})(),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(sprog.iglu.glsl.__GT_function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.glsl.sort_fns(full_functions)], 0))))));
});

//# sourceMappingURL=sprog.iglu.glsl.js.map
