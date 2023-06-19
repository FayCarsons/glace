goog.provide('clouds.config');
clouds.config.u32_max = (Math.pow((2),(32)) - (1));
clouds.config.debug_QMARK_ = false;
clouds.config.ambient_light_factor = 0.001;
clouds.config.gold_light_QMARK_ = false;
clouds.config.sky_color = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36911_SHARP_){
return (p1__36911_SHARP_ * (1));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.09,0.333,0.81], null)));
clouds.config.sky_gold = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36912_SHARP_){
return (p1__36912_SHARP_ / (255));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(171),(120)], null)));
clouds.config.sun_factor = (1);
clouds.config.sun_color = new cljs.core.Keyword(null,"gold","gold",-806826416);
clouds.config.sun = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36913_SHARP_){
return (p1__36913_SHARP_ * clouds.config.sun_factor);
}),(function (){var G__36914 = clouds.config.sun_color;
var G__36914__$1 = (((G__36914 instanceof cljs.core.Keyword))?G__36914.fqn:null);
switch (G__36914__$1) {
case "white":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);

break;
case "gold":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.803921568627451,0.6705882352941176,0.47058823529411764], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36914__$1)].join('')));

}
})()));
clouds.config.skybox_QMARK_ = true;
clouds.config.cloud_freq = (2);
clouds.config.bounce_loop_limit = (1);
clouds.config.max_steps = (100);
clouds.config.fudge_factor = 0.01;
clouds.config.motion_factor = 0.01;
clouds.config.menger_size = 0.45;
clouds.config.cam_pos = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.05,-1.5], null));
clouds.config.light_pos = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null));
clouds.config.materials = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lambertian","lambertian",910698889),new cljs.core.Keyword(null,"blinn-phong","blinn-phong",724796382),new cljs.core.Keyword(null,"specular","specular",1475677228),new cljs.core.Keyword(null,"dielectric","dielectric",-289736989),new cljs.core.Keyword(null,"lommel","lommel",1513187535),new cljs.core.Keyword(null,"ggx","ggx",1860678505)], null);
clouds.config.materials_map = cljs.core.zipmap(clouds.config.materials,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(clouds.config.materials))));
clouds.config.default_record = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Record","Record",-1236114904,null),false,(1024)));

clouds.config.diffuse_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.1,0.1,0.1),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.5,(1)));

clouds.config.metallic_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"specular","specular",1475677228),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.85,0.85,0.72),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.1,(1)));

clouds.config.ground_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(1),(1),0.1),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.1,(1)));

clouds.config.glass_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"dielectric","dielectric",-289736989),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.9),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.3,1.755));

clouds.config.emitter_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(24)),0.3,(1)));

clouds.config.plastic_material = clojure.walk.prewalk_replace(cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"ggx","ggx",1860678505),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.8,0.06,0.03),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.15,(1)));

clouds.config.create_diffuse_material = (function clouds$config$create_diffuse_material(albedo){
return clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"G__36916","G__36916",-261505028),cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),albedo)], null),cljs.core.list(new cljs.core.Symbol(null,"Material","Material",580712893,null),new cljs.core.Keyword(null,"lambertian","lambertian",910698889),new cljs.core.Keyword(null,"G__36916","G__36916",-261505028),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),0.04),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),(0)),0.75,(0)));
});
clouds.config.max_brightness = (1000);
clouds.config.rand_sphere_count = (16);
clouds.config.sphere_positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36917_SHARP_){
return (new cljs.core.List(null,Math.cos(((p1__36917_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),(new cljs.core.List(null,Math.sin(((p1__36917_SHARP_ / clouds.config.rand_sphere_count) * sprog.util.TAU)),null,(1),null)),(2),null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clouds.config.rand_sphere_count));
clouds.config.sphere_octaves = (6);
clouds.config.sphere_layer_scale_factor = 0.2;
clouds.config.sphere_fbm_falloff = 0.5;
clouds.config.atlas_size = (8);
clouds.config.atlas_tex_size = (204);
clouds.config.cloud_extent = (100);
clouds.config.num_cells = (2);
clouds.config.perlin_worley_enum = (1);
clouds.config.perlin_QMARK_ = new cljs.core.Keyword(null,"perlin","perlin",-695427512);
clouds.config.cloud_start = (0);
clouds.config.cloud_end = clouds.config.cloud_extent;
clouds.config.phi = (((1) + Math.sqrt((5))) / (2));

//# sourceMappingURL=clouds.config.js.map
