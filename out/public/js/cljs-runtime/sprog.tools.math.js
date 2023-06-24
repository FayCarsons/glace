goog.provide('sprog.tools.math');
sprog.tools.math.rand_normals = (function sprog$tools$math$rand_normals(n,rand_fn){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
var u1 = (rand_fn.cljs$core$IFn$_invoke$arity$0 ? rand_fn.cljs$core$IFn$_invoke$arity$0() : rand_fn.call(null));
var u2 = (rand_fn.cljs$core$IFn$_invoke$arity$0 ? rand_fn.cljs$core$IFn$_invoke$arity$0() : rand_fn.call(null));
var radius = Math.sqrt(((-2) * Math.log(u1)));
var angle = ((Math.PI * (2)) * u2);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30920_SHARP_){
return (radius * (p1__30920_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30920_SHARP_.cljs$core$IFn$_invoke$arity$1(angle) : p1__30920_SHARP_.call(null,angle)));
}),(new cljs.core.List(null,Math.cos,(new cljs.core.List(null,Math.sin,null,(1),null)),(2),null)));
}))));
});
sprog.tools.math.rand_n_sphere_point = (function sprog$tools$math$rand_n_sphere_point(n,rand_fn){
var normals = sprog.tools.math.rand_normals(n,rand_fn);
var magnitude = Math.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30921_SHARP_){
return (p1__30921_SHARP_ * p1__30921_SHARP_);
}),normals)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30922_SHARP_){
return (p1__30922_SHARP_ / magnitude);
}),normals);
});
sprog.tools.math.axis_rotation_matrix = (function sprog$tools$math$axis_rotation_matrix(p__30923,angle){
var vec__30924 = p__30923;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30924,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30924,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30924,(2),null);
var s = Math.sin(angle);
var c = Math.cos(angle);
var oc = ((1) - c);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((oc * x) * x) + c),(((oc * x) * y) - (z * s)),(((oc * z) * x) + (y * s)),(((oc * x) * y) + (z * s)),(((oc * y) * y) + c),(((oc * y) * z) - (x * s)),(((oc * z) * x) - (y * s)),(((oc * y) * z) + (x * s)),(((oc * z) * z) + c)], null);
});
sprog.tools.math.magnitude = (function sprog$tools$math$magnitude(v){
return Math.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30928_SHARP_){
return (p1__30928_SHARP_ * p1__30928_SHARP_);
}),v)));
});
sprog.tools.math.dot = (function sprog$tools$math$dot(a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,b));
});
sprog.tools.math.cross = (function sprog$tools$math$cross(a,b){
var vec__30929 = a;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30929,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30929,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30929,(2),null);
var vec__30932 = b;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30932,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30932,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30932,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null);
});
sprog.tools.math.normalize = (function sprog$tools$math$normalize(v){
var m = sprog.tools.math.magnitude(v);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30936_SHARP_){
return (p1__30936_SHARP_ / m);
}),v);
});

//# sourceMappingURL=sprog.tools.math.js.map
