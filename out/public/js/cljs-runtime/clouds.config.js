goog.provide('clouds.config');
clouds.config.u32_max = (0.999 * (Math.pow((2),(32)) - (1)));
clouds.config.infinity = Infinity;
clouds.config.steps_per_sample = (1);
clouds.config.bounces_per_sample = (1);
clouds.config.max_bounces = (1024);
clouds.config.cam_pos = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null));
clouds.config.light_pos = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null));
clouds.config.scatter_radius = 0.9;
clouds.config.atlas_size = (8);
clouds.config.atlas_tex_size = (204);
clouds.config.cloud_extent = (100);
clouds.config.num_cells = (2);
clouds.config.perlin_worley_enum = (1);
clouds.config.perlin_QMARK_ = new cljs.core.Keyword(null,"perlin","perlin",-695427512);
clouds.config.sky_color = cljs.core.cons(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64795_SHARP_){
return (p1__64795_SHARP_ * 0.7);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.09,0.333,0.81], null)));
clouds.config.cloud_start = (0);
clouds.config.cloud_end = clouds.config.cloud_extent;
clouds.config.phi = (((1) + Math.sqrt((5))) / (2));

//# sourceMappingURL=clouds.config.js.map
