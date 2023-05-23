goog.provide('sprog.tools.math');
sprog.tools.math.rand_normals = (function sprog$tools$math$rand_normals(n,rand_fn){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
var u1 = (rand_fn.cljs$core$IFn$_invoke$arity$0 ? rand_fn.cljs$core$IFn$_invoke$arity$0() : rand_fn.call(null));
var u2 = (rand_fn.cljs$core$IFn$_invoke$arity$0 ? rand_fn.cljs$core$IFn$_invoke$arity$0() : rand_fn.call(null));
var radius = Math.sqrt(((-2) * Math.log(u1)));
var angle = ((Math.PI * (2)) * u2);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33559_SHARP_){
return (radius * (p1__33559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33559_SHARP_.cljs$core$IFn$_invoke$arity$1(angle) : p1__33559_SHARP_.call(null,angle)));
}),(new cljs.core.List(null,Math.cos,(new cljs.core.List(null,Math.sin,null,(1),null)),(2),null)));
}))));
});
sprog.tools.math.rand_n_sphere_point = (function sprog$tools$math$rand_n_sphere_point(n,rand_fn){
var normals = sprog.tools.math.rand_normals(n,rand_fn);
var magnitude = Math.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33560_SHARP_){
return (p1__33560_SHARP_ * p1__33560_SHARP_);
}),normals)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33561_SHARP_){
return (p1__33561_SHARP_ / magnitude);
}),normals);
});
sprog.tools.math.axis_rotation_matrix = (function sprog$tools$math$axis_rotation_matrix(p__33562,angle){
var vec__33563 = p__33562;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33563,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33563,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33563,(2),null);
var s = Math.sin(angle);
var c = Math.cos(angle);
var oc = ((1) - c);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((oc * x) * x) + c),(((oc * x) * y) - (z * s)),(((oc * z) * x) + (y * s)),(((oc * x) * y) + (z * s)),(((oc * y) * y) + c),(((oc * y) * z) - (x * s)),(((oc * z) * x) - (y * s)),(((oc * y) * z) + (x * s)),(((oc * z) * z) + c)], null);
});

//# sourceMappingURL=sprog.tools.math.js.map
