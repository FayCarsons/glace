goog.provide('sprog.webgl.attributes');
sprog.webgl.attributes.set_boj_data_BANG_ = (function sprog$webgl$attributes$set_boj_data_BANG_(gl,p__43881,data){
var map__43882 = p__43881;
var map__43882__$1 = cljs.core.__destructure_map(map__43882);
var boj = map__43882__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43882__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43882__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.bufferData(gl.ARRAY_BUFFER,data,usage);

return boj;
});
sprog.webgl.attributes.create_boj_BANG_ = (function sprog$webgl$attributes$create_boj_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43958 = arguments.length;
var i__5767__auto___43959 = (0);
while(true){
if((i__5767__auto___43959 < len__5766__auto___43958)){
args__5772__auto__.push((arguments[i__5767__auto___43959]));

var G__43960 = (i__5767__auto___43959 + (1));
i__5767__auto___43959 = G__43960;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,num_components,p__43895){
var vec__43896 = p__43895;
var map__43899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43896,(0),null);
var map__43899__$1 = cljs.core.__destructure_map(map__43899);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43899__$1,new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT);
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43899__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),false);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43899__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43899__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43899__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43899__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var boj = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"buffer","buffer",617295198),gl.createBuffer(),new cljs.core.Keyword(null,"num-components","num-components",1755475190),num_components,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),normalized,new cljs.core.Keyword(null,"stride","stride",-1172818435),stride,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null);
if(cljs.core.truth_(initial_data)){
sprog.webgl.attributes.set_boj_data_BANG_(gl,boj,initial_data);
} else {
}

return boj;
}));

(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$applyTo = (function (seq43887){
var G__43888 = cljs.core.first(seq43887);
var seq43887__$1 = cljs.core.next(seq43887);
var G__43889 = cljs.core.first(seq43887__$1);
var seq43887__$2 = cljs.core.next(seq43887__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43888,G__43889,seq43887__$2);
}));

sprog.webgl.attributes.ensure_attribute_present_BANG_ = (function sprog$webgl$attributes$ensure_attribute_present_BANG_(gl,p__43901,attrib_name_str){
var map__43902 = p__43901;
var map__43902__$1 = cljs.core.__destructure_map(map__43902);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43902__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43902__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
if(cljs.core.not((function (){var fexpr__43904 = cljs.core.deref(attribute_locations_atom);
return (fexpr__43904.cljs$core$IFn$_invoke$arity$1 ? fexpr__43904.cljs$core$IFn$_invoke$arity$1(attrib_name_str) : fexpr__43904.call(null,attrib_name_str));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attribute_locations_atom,cljs.core.assoc,attrib_name_str,gl.getAttribLocation(program,attrib_name_str));
} else {
return null;
}
});
sprog.webgl.attributes.set_sprog_attribute_BANG_ = (function sprog$webgl$attributes$set_sprog_attribute_BANG_(gl,p__43910,attrib_name,p__43911){
var map__43912 = p__43910;
var map__43912__$1 = cljs.core.__destructure_map(map__43912);
var sprog__$1 = map__43912__$1;
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
var map__43913 = p__43911;
var map__43913__$1 = cljs.core.__destructure_map(map__43913);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var num_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"num-components","num-components",1755475190));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43913__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attrib_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_name);
sprog.webgl.attributes.ensure_attribute_present_BANG_(gl,sprog__$1,attrib_name_str);

var location__$1 = (function (){var fexpr__43919 = cljs.core.deref(attribute_locations_atom);
return (fexpr__43919.cljs$core$IFn$_invoke$arity$1 ? fexpr__43919.cljs$core$IFn$_invoke$arity$1(attrib_name) : fexpr__43919.call(null,attrib_name));
})();
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.enableVertexAttribArray(location__$1);

return gl.vertexAttribPointer(location__$1,num_components,type,normalized,stride,offset);
});
sprog.webgl.attributes.set_sprog_attributes_BANG_ = (function sprog$webgl$attributes$set_sprog_attributes_BANG_(gl,sprog__$1,attrib_boj_map){
var seq__43920 = cljs.core.seq(attrib_boj_map);
var chunk__43921 = null;
var count__43922 = (0);
var i__43923 = (0);
while(true){
if((i__43923 < count__43922)){
var vec__43935 = chunk__43921.cljs$core$IIndexed$_nth$arity$2(null,i__43923);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43935,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43935,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__43967 = seq__43920;
var G__43968 = chunk__43921;
var G__43969 = count__43922;
var G__43970 = (i__43923 + (1));
seq__43920 = G__43967;
chunk__43921 = G__43968;
count__43922 = G__43969;
i__43923 = G__43970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43920);
if(temp__5804__auto__){
var seq__43920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43920__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43920__$1);
var G__43971 = cljs.core.chunk_rest(seq__43920__$1);
var G__43972 = c__5565__auto__;
var G__43973 = cljs.core.count(c__5565__auto__);
var G__43974 = (0);
seq__43920 = G__43971;
chunk__43921 = G__43972;
count__43922 = G__43973;
i__43923 = G__43974;
continue;
} else {
var vec__43944 = cljs.core.first(seq__43920__$1);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43944,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__43975 = cljs.core.next(seq__43920__$1);
var G__43976 = null;
var G__43977 = (0);
var G__43978 = (0);
seq__43920 = G__43975;
chunk__43921 = G__43976;
count__43922 = G__43977;
i__43923 = G__43978;
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
