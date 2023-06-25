goog.provide('clouds.config');
clouds.config.u32_max_u = "0xFFFFFFFFu";
clouds.config.u32_max = cljs.core.cons(new cljs.core.Symbol(null,"float","float",-91857841,null),(new cljs.core.List(null,clouds.config.u32_max_u,null,(1),null)));
clouds.config.debug_QMARK_ = false;
clouds.config.camera_distance = 1.25;
clouds.config.cam_pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(- clouds.config.camera_distance)], null);
clouds.config.look_at = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
clouds.config.up = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null);
clouds.config.field_of_view = 2.5;
clouds.config.depth_of_field_strength = 0.001;
clouds.config.depth_of_field_distance = (clouds.config.camera_distance / clouds.config.field_of_view);
clouds.config.light_pos = cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),-0.333,(0),(-1));
clouds.config.ambient_light_factor = (0);
clouds.config.sun_factor = (0);
clouds.config.skybox_QMARK_ = false;
clouds.config.gold_light_QMARK_ = false;
clouds.config.sky_color = cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.09,0.333,0.81);
clouds.config.sky_gold = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40417_SHARP_){
return (p1__40417_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(171),(120)], null)));
clouds.config.sun_color = new cljs.core.Keyword(null,"white","white",-483998618);
clouds.config.sun = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40418_SHARP_){
return (p1__40418_SHARP_ * clouds.config.sun_factor);
}),(function (){var G__40421 = clouds.config.sun_color;
var G__40421__$1 = (((G__40421 instanceof cljs.core.Keyword))?G__40421.fqn:null);
switch (G__40421__$1) {
case "white":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);

break;
case "gold":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.803921568627451,0.6705882352941176,0.47058823529411764], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40421__$1)].join('')));

}
})()));
clouds.config.sun_expression = clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"G__40423","G__40423",1707087699),clouds.config.light_pos,new cljs.core.Keyword(null,"G__40424","G__40424",-309108248),clouds.config.sun_factor,new cljs.core.Keyword(null,"G__40425","G__40425",369260864),clouds.config.sun], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"smoothstep","smoothstep",-1686402982,null),0.8,(1),cljs.core.list(new cljs.core.Symbol(null,"dot","dot",-1211726368,null),new cljs.core.Symbol(null,"ray.dir","ray.dir",1335380520,null),cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),new cljs.core.Keyword(null,"G__40423","G__40423",1707087699)))),new cljs.core.Keyword(null,"G__40424","G__40424",-309108248),new cljs.core.Keyword(null,"G__40425","G__40425",369260864)));
clouds.config.max_brightness = (1000);
clouds.config.aberration_offset = (0);
clouds.config.cloud_freq = (4);
clouds.config.motion_factor = (0);
clouds.config.bounce_loop_limit = (1);
clouds.config.max_steps = (500);
clouds.config.fudge_factor = 0.001;
clouds.config.rand_scale = (1000);
clouds.config.pastel_earthtones = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"hills-green","hills-green",-939552266),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6392156862745098,0.6980392156862745,0.6431372549019608], null),new cljs.core.Keyword(null,"balance-green","balance-green",1367169397),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7647058823529411,0.7764705882352941,0.6588235294117647], null),new cljs.core.Keyword(null,"chai","chai",1177956285),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9372549019607843,0.8588235294117647,0.6980392156862745], null),new cljs.core.Keyword(null,"larb","larb",-1289581883),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8784313725490196,0.7764705882352941,0.6784313725490196], null),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7568627450980392,0.6980392156862745,0.6352941176470588], null),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.8941176470588236,0.8352941176470589,0.8274509803921568], null)], null);
clouds.config.scale_palette = (function clouds$config$scale_palette(palette){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40427){
var vec__40428 = p__40427;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40428,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40428,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40426_SHARP_){
return (p1__40426_SHARP_ / (255));
}),v)], null);
}),palette));
});
clouds.config.palette__GT_materials = (function clouds$config$palette__GT_materials(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40454 = arguments.length;
var i__5767__auto___40455 = (0);
while(true){
if((i__5767__auto___40455 < len__5766__auto___40454)){
args__5772__auto__.push((arguments[i__5767__auto___40455]));

var G__40456 = (i__5767__auto___40455 + (1));
i__5767__auto___40455 = G__40456;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return clouds.config.palette__GT_materials.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(clouds.config.palette__GT_materials.cljs$core$IFn$_invoke$arity$variadic = (function (palette,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__40433){
var vec__40434 = p__40433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40434,(1),null);
return clouds.materials.create_material(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"albedo","albedo",-215012431),v,new cljs.core.Keyword(null,"roughness","roughness",1590413194),fxrng.rng.fxrand.cljs$core$IFn$_invoke$arity$2(0.1,0.8)], null));
}),palette);
}));

(clouds.config.palette__GT_materials.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clouds.config.palette__GT_materials.cljs$lang$applyTo = (function (seq40431){
var G__40432 = cljs.core.first(seq40431);
var seq40431__$1 = cljs.core.next(seq40431);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40432,seq40431__$1);
}));

clouds.config.rand_sphere_count = (16);
clouds.config.sphere_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40437_SHARP_){
return (new cljs.core.List(null,Math.cos(((p1__40437_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),(new cljs.core.List(null,Math.sin(((p1__40437_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),null,(1),null)),(2),null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clouds.config.rand_sphere_count));
clouds.config.menger_size = 0.525;
clouds.config.sphere_octaves = (6);
clouds.config.sphere_layer_scale_factor = 0.15;
clouds.config.sphere_fbm_falloff = 0.5;
clouds.config.num_packed_spheres = (64);
clouds.config.spheres = clouds.sphere_packing.get_sphere_data.cljs$core$IFn$_invoke$arity$variadic(clouds.config.num_packed_spheres,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-sze","init-sze",1522651329),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.rand,0.2),new cljs.core.Keyword(null,"max-radius","max-radius",-891349294),0.5], null)], 0));
clouds.config.sphere_packing_expression = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sphere){
return clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"G__40440","G__40440",-972045788),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40438_SHARP_){
return (p1__40438_SHARP_ - 0.5);
}),sphere.position)),new cljs.core.Keyword(null,"G__40441","G__40441",658601707),sphere.radius,new cljs.core.Keyword(null,"G__40442","G__40442",-757664425),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [clouds.materials.glass_material,clouds.materials.amber_glass_material,clouds.materials.metallic_material,clouds.materials.diffuse_material,clouds.materials.emitter_material,clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.6392,0.698,0.6431),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.6667867723852396,(1))),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.7647058823529411,0.7764705882352941,0.6588235294117647),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.3070532530313358,(1))),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.9372549019607843,0.8588235294117647,0.6980392156862745),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.6438089546514675,(1))),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.8784313725490196,0.7764705882352941,0.6784313725490196),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.16780196996405722,(1))),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.7568627450980392,0.6980392156862745,0.6352941176470588),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.1315756174735725,(1))),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.8941176470588236,0.8352941176470589,0.8274509803921568),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04,0.04,0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(0)),0.38577988445758826,(1)))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),cljs.core.list(new cljs.core.Symbol(null,"Sphere","Sphere",-1597571120,null),new cljs.core.Keyword(null,"G__40440","G__40440",-972045788),new cljs.core.Keyword(null,"G__40441","G__40441",658601707),new cljs.core.Keyword(null,"G__40442","G__40442",-757664425))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),cljs.core.list(new cljs.core.Symbol(null,".x",".x",1986846808,null),cljs.core.list(new cljs.core.Symbol(null,"findSphereIntersections","findSphereIntersections",611146784,null),new cljs.core.Symbol(null,"ray","ray",668052110,null),new cljs.core.Symbol(null,"sphere.pos","sphere.pos",308879841,null),new cljs.core.Symbol(null,"sphere.radius","sphere.radius",-2096835320,null)))),cljs.core.list("if",cljs.core.list(new cljs.core.Symbol(null,"&&","&&",-1330982734,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.hit","record.hit",218610614,null),true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.point","record.point",97858119,null),cljs.core.list(new cljs.core.Symbol(null,"ray-at","ray-at",-263815626,null),new cljs.core.Symbol(null,"ray","ray",668052110,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.normal","record.normal",-1457042819,null),cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"record.point","record.point",97858119,null),new cljs.core.Symbol(null,"sphere.pos","sphere.pos",308879841,null)))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.material","record.material",-242276545,null),new cljs.core.Symbol(null,"sphere.material","sphere.material",-71871068,null)))));
}),clouds.config.spheres));
clouds.config.dof_test_sphere = (function (){var sqrt_num_spheres = (16);
return cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (coord){
return clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"G__40444","G__40444",770239463),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,coord,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.1) - 0.05);
}))),(new cljs.core.List(null,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),null,(1),null)))),new cljs.core.Keyword(null,"G__40445","G__40445",714600599),(0.025 + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.05)),new cljs.core.Keyword(null,"G__40446","G__40446",-2096976523),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clouds.materials.glass_material,clouds.materials.amber_glass_material,clouds.materials.metallic_material,clouds.materials.diffuse_material,clouds.materials.glass_material,clouds.materials.amber_glass_material,clouds.materials.metallic_material,clouds.materials.diffuse_material,clouds.materials.emitter_material,clouds.materials.create_material(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blinn-phong","blinn-phong",724796382),new cljs.core.Keyword(null,"albedo","albedo",-215012431),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.99], null),new cljs.core.Keyword(null,"specular","specular",1475677228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.99], null),new cljs.core.Keyword(null,"roughenss","roughenss",-173157043),0.1], null)),clouds.materials.create_material(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blinn-phong","blinn-phong",724796382),new cljs.core.Keyword(null,"albedo","albedo",-215012431),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.99], null),new cljs.core.Keyword(null,"specular","specular",1475677228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.99], null),new cljs.core.Keyword(null,"roughenss","roughenss",-173157043),0.1], null)),clouds.materials.create_material(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lommel","lommel",1513187535),new cljs.core.Keyword(null,"albedo","albedo",-215012431),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.6,0.3], null),new cljs.core.Keyword(null,"roughness","roughness",1590413194),0.8], null))], null))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),cljs.core.list(new cljs.core.Symbol(null,"Sphere","Sphere",-1597571120,null),new cljs.core.Keyword(null,"G__40444","G__40444",770239463),new cljs.core.Keyword(null,"G__40445","G__40445",714600599),new cljs.core.Keyword(null,"G__40446","G__40446",-2096976523))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),cljs.core.list(new cljs.core.Symbol(null,".x",".x",1986846808,null),cljs.core.list(new cljs.core.Symbol(null,"findSphereIntersections","findSphereIntersections",611146784,null),new cljs.core.Symbol(null,"ray","ray",668052110,null),new cljs.core.Symbol(null,"sphere.pos","sphere.pos",308879841,null),new cljs.core.Symbol(null,"sphere.radius","sphere.radius",-2096835320,null)))),cljs.core.list("if",cljs.core.list(new cljs.core.Symbol(null,"&&","&&",-1330982734,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.hit","record.hit",218610614,null),true),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null),new cljs.core.Symbol(null,"current-distance","current-distance",-2032746265,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.point","record.point",97858119,null),cljs.core.list(new cljs.core.Symbol(null,"ray-at","ray-at",-263815626,null),new cljs.core.Symbol(null,"ray","ray",668052110,null),new cljs.core.Symbol(null,"record.distance","record.distance",107300574,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.normal","record.normal",-1457042819,null),cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"record.point","record.point",97858119,null),new cljs.core.Symbol(null,"sphere.pos","sphere.pos",308879841,null)))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"record.material","record.material",-242276545,null),new cljs.core.Symbol(null,"sphere.material","sphere.material",-71871068,null)))));
}),(function (){var iter__5520__auto__ = (function clouds$config$iter__40447(s__40448){
return (new cljs.core.LazySeq(null,(function (){
var s__40448__$1 = s__40448;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40448__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__40448__$1,x,xs__6360__auto__,temp__5804__auto__,sqrt_num_spheres){
return (function clouds$config$iter__40447_$_iter__40449(s__40450){
return (new cljs.core.LazySeq(null,((function (s__40448__$1,x,xs__6360__auto__,temp__5804__auto__,sqrt_num_spheres){
return (function (){
var s__40450__$1 = s__40450;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40450__$1);
if(temp__5804__auto____$1){
var s__40450__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40450__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__40450__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__40452 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__40451 = (0);
while(true){
if((i__40451 < size__5519__auto__)){
var y = cljs.core._nth(c__5518__auto__,i__40451);
cljs.core.chunk_append(b__40452,(new cljs.core.List(null,((x / sqrt_num_spheres) - 0.5),(new cljs.core.List(null,((y / sqrt_num_spheres) - 0.5),null,(1),null)),(2),null)));

var G__40457 = (i__40451 + (1));
i__40451 = G__40457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40452),clouds$config$iter__40447_$_iter__40449(cljs.core.chunk_rest(s__40450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40452),null);
}
} else {
var y = cljs.core.first(s__40450__$2);
return cljs.core.cons((new cljs.core.List(null,((x / sqrt_num_spheres) - 0.5),(new cljs.core.List(null,((y / sqrt_num_spheres) - 0.5),null,(1),null)),(2),null)),clouds$config$iter__40447_$_iter__40449(cljs.core.rest(s__40450__$2)));
}
} else {
return null;
}
break;
}
});})(s__40448__$1,x,xs__6360__auto__,temp__5804__auto__,sqrt_num_spheres))
,null,null));
});})(s__40448__$1,x,xs__6360__auto__,temp__5804__auto__,sqrt_num_spheres))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sqrt_num_spheres)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,clouds$config$iter__40447(cljs.core.rest(s__40448__$1)));
} else {
var G__40458 = cljs.core.rest(s__40448__$1);
s__40448__$1 = G__40458;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sqrt_num_spheres));
})()));
})();

//# sourceMappingURL=clouds.config.js.map
