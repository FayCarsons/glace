goog.provide('sprog.webgl.attributes');
sprog.webgl.attributes.set_boj_data_BANG_ = (function sprog$webgl$attributes$set_boj_data_BANG_(gl,p__31373,data){
var map__31374 = p__31373;
var map__31374__$1 = cljs.core.__destructure_map(map__31374);
var boj = map__31374__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31374__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31374__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.bufferData(gl.ARRAY_BUFFER,data,usage);

return boj;
});
sprog.webgl.attributes.create_boj_BANG_ = (function sprog$webgl$attributes$create_boj_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31539 = arguments.length;
var i__5767__auto___31540 = (0);
while(true){
if((i__5767__auto___31540 < len__5766__auto___31539)){
args__5772__auto__.push((arguments[i__5767__auto___31540]));

var G__31542 = (i__5767__auto___31540 + (1));
i__5767__auto___31540 = G__31542;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,num_components,p__31475){
var vec__31476 = p__31475;
var map__31479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31476,(0),null);
var map__31479__$1 = cljs.core.__destructure_map(map__31479);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31479__$1,new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT);
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31479__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),false);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31479__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31479__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31479__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31479__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var boj = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"buffer","buffer",617295198),gl.createBuffer(),new cljs.core.Keyword(null,"num-components","num-components",1755475190),num_components,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),normalized,new cljs.core.Keyword(null,"stride","stride",-1172818435),stride,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null);
if(cljs.core.truth_(initial_data)){
sprog.webgl.attributes.set_boj_data_BANG_(gl,boj,initial_data);
} else {
}

return boj;
}));

(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$applyTo = (function (seq31432){
var G__31433 = cljs.core.first(seq31432);
var seq31432__$1 = cljs.core.next(seq31432);
var G__31434 = cljs.core.first(seq31432__$1);
var seq31432__$2 = cljs.core.next(seq31432__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31433,G__31434,seq31432__$2);
}));

sprog.webgl.attributes.ensure_attribute_present_BANG_ = (function sprog$webgl$attributes$ensure_attribute_present_BANG_(gl,p__31480,attrib_name_str){
var map__31481 = p__31480;
var map__31481__$1 = cljs.core.__destructure_map(map__31481);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31481__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
if(cljs.core.not((function (){var fexpr__31482 = cljs.core.deref(attribute_locations_atom);
return (fexpr__31482.cljs$core$IFn$_invoke$arity$1 ? fexpr__31482.cljs$core$IFn$_invoke$arity$1(attrib_name_str) : fexpr__31482.call(null,attrib_name_str));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attribute_locations_atom,cljs.core.assoc,attrib_name_str,gl.getAttribLocation(program,attrib_name_str));
} else {
return null;
}
});
sprog.webgl.attributes.set_sprog_attribute_BANG_ = (function sprog$webgl$attributes$set_sprog_attribute_BANG_(gl,p__31484,attrib_name,p__31485){
var map__31489 = p__31484;
var map__31489__$1 = cljs.core.__destructure_map(map__31489);
var sprog__$1 = map__31489__$1;
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31489__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
var map__31490 = p__31485;
var map__31490__$1 = cljs.core.__destructure_map(map__31490);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var num_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"num-components","num-components",1755475190));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attrib_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(attrib_name));
sprog.webgl.attributes.ensure_attribute_present_BANG_(gl,sprog__$1,attrib_name_str);

var location__$1 = (function (){var fexpr__31494 = cljs.core.deref(attribute_locations_atom);
return (fexpr__31494.cljs$core$IFn$_invoke$arity$1 ? fexpr__31494.cljs$core$IFn$_invoke$arity$1(attrib_name) : fexpr__31494.call(null,attrib_name));
})();
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.enableVertexAttribArray(location__$1);

return gl.vertexAttribPointer(location__$1,num_components,type,normalized,stride,offset);
});
sprog.webgl.attributes.set_sprog_attributes_BANG_ = (function sprog$webgl$attributes$set_sprog_attributes_BANG_(gl,sprog__$1,attrib_boj_map){
var seq__31499 = cljs.core.seq(attrib_boj_map);
var chunk__31500 = null;
var count__31501 = (0);
var i__31502 = (0);
while(true){
if((i__31502 < count__31501)){
var vec__31510 = chunk__31500.cljs$core$IIndexed$_nth$arity$2(null,i__31502);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31510,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31592 = seq__31499;
var G__31593 = chunk__31500;
var G__31594 = count__31501;
var G__31595 = (i__31502 + (1));
seq__31499 = G__31592;
chunk__31500 = G__31593;
count__31501 = G__31594;
i__31502 = G__31595;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31499);
if(temp__5804__auto__){
var seq__31499__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31499__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31499__$1);
var G__31596 = cljs.core.chunk_rest(seq__31499__$1);
var G__31597 = c__5565__auto__;
var G__31598 = cljs.core.count(c__5565__auto__);
var G__31599 = (0);
seq__31499 = G__31596;
chunk__31500 = G__31597;
count__31501 = G__31598;
i__31502 = G__31599;
continue;
} else {
var vec__31514 = cljs.core.first(seq__31499__$1);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31514,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31514,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31608 = cljs.core.next(seq__31499__$1);
var G__31609 = null;
var G__31610 = (0);
var G__31611 = (0);
seq__31499 = G__31608;
chunk__31500 = G__31609;
count__31501 = G__31610;
i__31502 = G__31611;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=sprog.webgl.attributes.js.map
