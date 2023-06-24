goog.provide('sprog.webgl.attributes');
sprog.webgl.attributes.set_boj_data_BANG_ = (function sprog$webgl$attributes$set_boj_data_BANG_(gl,p__31290,data){
var map__31291 = p__31290;
var map__31291__$1 = cljs.core.__destructure_map(map__31291);
var boj = map__31291__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31291__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31291__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.bufferData(gl.ARRAY_BUFFER,data,usage);

return boj;
});
sprog.webgl.attributes.create_boj_BANG_ = (function sprog$webgl$attributes$create_boj_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31428 = arguments.length;
var i__5767__auto___31430 = (0);
while(true){
if((i__5767__auto___31430 < len__5766__auto___31428)){
args__5772__auto__.push((arguments[i__5767__auto___31430]));

var G__31434 = (i__5767__auto___31430 + (1));
i__5767__auto___31430 = G__31434;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,num_components,p__31299){
var vec__31300 = p__31299;
var map__31303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(0),null);
var map__31303__$1 = cljs.core.__destructure_map(map__31303);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31303__$1,new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT);
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31303__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),false);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31303__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31303__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31303__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31303__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var boj = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"buffer","buffer",617295198),gl.createBuffer(),new cljs.core.Keyword(null,"num-components","num-components",1755475190),num_components,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),normalized,new cljs.core.Keyword(null,"stride","stride",-1172818435),stride,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null);
if(cljs.core.truth_(initial_data)){
sprog.webgl.attributes.set_boj_data_BANG_(gl,boj,initial_data);
} else {
}

return boj;
}));

(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$applyTo = (function (seq31295){
var G__31296 = cljs.core.first(seq31295);
var seq31295__$1 = cljs.core.next(seq31295);
var G__31297 = cljs.core.first(seq31295__$1);
var seq31295__$2 = cljs.core.next(seq31295__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31296,G__31297,seq31295__$2);
}));

sprog.webgl.attributes.ensure_attribute_present_BANG_ = (function sprog$webgl$attributes$ensure_attribute_present_BANG_(gl,p__31318,attrib_name_str){
var map__31319 = p__31318;
var map__31319__$1 = cljs.core.__destructure_map(map__31319);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31319__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31319__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
if(cljs.core.not((function (){var fexpr__31320 = cljs.core.deref(attribute_locations_atom);
return (fexpr__31320.cljs$core$IFn$_invoke$arity$1 ? fexpr__31320.cljs$core$IFn$_invoke$arity$1(attrib_name_str) : fexpr__31320.call(null,attrib_name_str));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attribute_locations_atom,cljs.core.assoc,attrib_name_str,gl.getAttribLocation(program,attrib_name_str));
} else {
return null;
}
});
sprog.webgl.attributes.set_sprog_attribute_BANG_ = (function sprog$webgl$attributes$set_sprog_attribute_BANG_(gl,p__31327,attrib_name,p__31328){
var map__31331 = p__31327;
var map__31331__$1 = cljs.core.__destructure_map(map__31331);
var sprog__$1 = map__31331__$1;
var attribute_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331__$1,new cljs.core.Keyword(null,"attribute-locations-atom","attribute-locations-atom",-1628269319));
var map__31332 = p__31328;
var map__31332__$1 = cljs.core.__destructure_map(map__31332);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var num_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"num-components","num-components",1755475190));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attrib_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(attrib_name));
sprog.webgl.attributes.ensure_attribute_present_BANG_(gl,sprog__$1,attrib_name_str);

var location__$1 = (function (){var fexpr__31352 = cljs.core.deref(attribute_locations_atom);
return (fexpr__31352.cljs$core$IFn$_invoke$arity$1 ? fexpr__31352.cljs$core$IFn$_invoke$arity$1(attrib_name) : fexpr__31352.call(null,attrib_name));
})();
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.enableVertexAttribArray(location__$1);

return gl.vertexAttribPointer(location__$1,num_components,type,normalized,stride,offset);
});
sprog.webgl.attributes.set_sprog_attributes_BANG_ = (function sprog$webgl$attributes$set_sprog_attributes_BANG_(gl,sprog__$1,attrib_boj_map){
var seq__31364 = cljs.core.seq(attrib_boj_map);
var chunk__31365 = null;
var count__31366 = (0);
var i__31367 = (0);
while(true){
if((i__31367 < count__31366)){
var vec__31403 = chunk__31365.cljs$core$IIndexed$_nth$arity$2(null,i__31367);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31403,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31492 = seq__31364;
var G__31493 = chunk__31365;
var G__31494 = count__31366;
var G__31495 = (i__31367 + (1));
seq__31364 = G__31492;
chunk__31365 = G__31493;
count__31366 = G__31494;
i__31367 = G__31495;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31364);
if(temp__5804__auto__){
var seq__31364__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31364__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31364__$1);
var G__31497 = cljs.core.chunk_rest(seq__31364__$1);
var G__31498 = c__5565__auto__;
var G__31499 = cljs.core.count(c__5565__auto__);
var G__31500 = (0);
seq__31364 = G__31497;
chunk__31365 = G__31498;
count__31366 = G__31499;
i__31367 = G__31500;
continue;
} else {
var vec__31412 = cljs.core.first(seq__31364__$1);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31502 = cljs.core.next(seq__31364__$1);
var G__31503 = null;
var G__31504 = (0);
var G__31505 = (0);
seq__31364 = G__31502;
chunk__31365 = G__31503;
count__31366 = G__31504;
i__31367 = G__31505;
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
