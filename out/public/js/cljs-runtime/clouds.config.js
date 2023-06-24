goog.provide('clouds.config');
clouds.config.u32_max = cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),"0xFFFFFFFFu");
clouds.config.debug_QMARK_ = false;
clouds.config.cam_pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null);
clouds.config.look_at = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
clouds.config.up = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null);
clouds.config.field_of_view = 2.5;
clouds.config.depth_of_field_strength = 0.1;
clouds.config.depth_of_field_distance = (1);
clouds.config.light_pos = cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0),(0),(-1));
clouds.config.ambient_light_factor = (0);
clouds.config.sun_factor = 1.1;
clouds.config.skybox_QMARK_ = true;
clouds.config.gold_light_QMARK_ = false;
clouds.config.sky_color = cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.09,0.333,0.81);
clouds.config.sky_gold = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34581_SHARP_){
return (p1__34581_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(171),(120)], null)));
clouds.config.sun_color = new cljs.core.Keyword(null,"white","white",-483998618);
clouds.config.sun = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34582_SHARP_){
return (p1__34582_SHARP_ * clouds.config.sun_factor);
}),(function (){var G__34583 = clouds.config.sun_color;
var G__34583__$1 = (((G__34583 instanceof cljs.core.Keyword))?G__34583.fqn:null);
switch (G__34583__$1) {
case "white":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);

break;
case "gold":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.803921568627451,0.6705882352941176,0.47058823529411764], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34583__$1)].join('')));

}
})()));
clouds.config.sun_expression = clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"G__34585","G__34585",-1024297754),clouds.config.light_pos,new cljs.core.Keyword(null,"G__34586","G__34586",989011749),clouds.config.sun_factor,new cljs.core.Keyword(null,"G__34587","G__34587",-1057459322),clouds.config.sun], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"smoothstep","smoothstep",-1686402982,null),0.8,(1),cljs.core.list(new cljs.core.Symbol(null,"dot","dot",-1211726368,null),new cljs.core.Symbol(null,"ray.dir","ray.dir",1335380520,null),cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),new cljs.core.Keyword(null,"G__34585","G__34585",-1024297754)))),new cljs.core.Keyword(null,"G__34586","G__34586",989011749),new cljs.core.Keyword(null,"G__34587","G__34587",-1057459322)));
clouds.config.max_brightness = (1000);
clouds.config.cloud_freq = (4);
clouds.config.bounce_loop_limit = (1);
clouds.config.max_steps = (32);
clouds.config.fudge_factor = 0.001;
clouds.config.motion_factor = (0);
clouds.config.menger_size = 0.525;
clouds.config.rand_scale = (1000);
clouds.config.rand_sphere_count = (16);
clouds.config.sphere_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34588_SHARP_){
return (new cljs.core.List(null,Math.cos(((p1__34588_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),(new cljs.core.List(null,Math.sin(((p1__34588_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),null,(1),null)),(2),null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clouds.config.rand_sphere_count));
clouds.config.sphere_octaves = (5);
clouds.config.sphere_layer_scale_factor = 0.175;
clouds.config.sphere_fbm_falloff = 0.56;
clouds.config.materials = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lambertian","lambertian",910698889),new cljs.core.Keyword(null,"blinn-phong","blinn-phong",724796382),new cljs.core.Keyword(null,"specular","specular",1475677228),new cljs.core.Keyword(null,"dielectric","dielectric",-289736989),new cljs.core.Keyword(null,"lommel","lommel",1513187535),new cljs.core.Keyword(null,"ggx","ggx",1860678505)], null);
clouds.config.materials_map = cljs.core.zipmap(clouds.config.materials,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(clouds.config.materials))));
clouds.config.diffuse_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lommel","lommel",1513187535),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.5,0.3,0.1),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.3,(1)));

clouds.config.metallic_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"specular","specular",1475677228),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.9),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.85,0.85,0.85),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.9,(1)));

clouds.config.ground_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.5),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.5,(1)));

clouds.config.glass_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"dielectric","dielectric",-289736989),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.99),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.3,1.755));

clouds.config.amber_glass_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"dielectic","dielectic",1336780247),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),1.2,0.9,0.5),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),1.2,0.9,0.5),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.3,1.5));

clouds.config.emitter_material = clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"G__34590","G__34590",1884765393),clouds.config.sky_gold], null),cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lommel","lommel",1513187535),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"G__34590","G__34590",1884765393),7.5),0.9,(1)));

clouds.config.plastic_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"ggx","ggx",1860678505),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.8,0.06,0.03),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.15,(1)));

clouds.config.ceramic_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"ggx","ggx",1860678505),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.8,0.7,0.65),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.3,(1)));

clouds.config.create_material = (function clouds$config$create_material(p__34598){
var map__34599 = p__34598;
var map__34599__$1 = cljs.core.__destructure_map(map__34599);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lambertian","lambertian",910698889));
var albedo = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"albedo","albedo",-215012431),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.99,0.99,0.99], null));
var specular = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"specular","specular",1475677228),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.04,0.04], null)));
var emissive = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"emissive","emissive",-761267227),clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)));
var roughness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"roughness","roughness",1590413194),0.3);
var index_of_refraction = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34599__$1,new cljs.core.Keyword(null,"index-of-refraction","index-of-refraction",-596586809),(1));
return clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"G__34591","G__34591",73155369),type,new cljs.core.Keyword(null,"G__34592","G__34592",-1170399186),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),albedo),new cljs.core.Keyword(null,"G__34593","G__34593",-1745030484),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),specular),new cljs.core.Keyword(null,"G__34594","G__34594",555551687),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),emissive),new cljs.core.Keyword(null,"G__34595","G__34595",-395316498),roughness,new cljs.core.Keyword(null,"G__34596","G__34596",953567279),index_of_refraction], null),cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"G__34591","G__34591",73155369),new cljs.core.Keyword(null,"G__34592","G__34592",-1170399186),new cljs.core.Keyword(null,"G__34593","G__34593",-1745030484),new cljs.core.Keyword(null,"G__34594","G__34594",555551687),new cljs.core.Keyword(null,"G__34595","G__34595",-395316498),new cljs.core.Keyword(null,"G__34596","G__34596",953567279)));
});

clouds.config.default_record = clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"G__34597","G__34597",1562103365),clouds.config.diffuse_material], null),cljs.core.list(new cljs.core.Symbol(null,"Record","Record",-1236114904,null),false,(1024),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),new cljs.core.Keyword(null,"G__34597","G__34597",1562103365)));
clouds.config.bilateral_kernel_size = (2);
clouds.config.bilateral_sigma = (3);
clouds.config.bilateral_color_sigma = 0.1;
clouds.config.atlas_size = (8);
clouds.config.atlas_tex_size = (204);
clouds.config.cloud_extent = (100);
clouds.config.num_cells = (2);
clouds.config.perlin_worley_enum = (1);
clouds.config.perlin_QMARK_ = new cljs.core.Keyword(null,"perlin","perlin",-695427512);

//# sourceMappingURL=clouds.config.js.map
