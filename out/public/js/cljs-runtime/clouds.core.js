goog.provide('clouds.core');
clouds.core.render_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
cljs.core.add_watch(clouds.core.render_QMARK_,null,(function (_,___$1,___$2,new$){
return sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rendering?",new$], 0));
}));
clouds.core.expand_canvas = (function clouds$core$expand_canvas(gl){
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic(gl.canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"square?","square?",1383931624),false], null)], 0));
});
clouds.core.set_resolution = (function clouds$core$set_resolution(gl){
var manual_resolution = cljs.core.vec(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,clojure.string.split.cljs$core$IFn$_invoke$arity$2((new URLSearchParams(window.location.search)).get("resolution"),"x"))));
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,manual_resolution)){
sprog.dom.canvas.resize_gl_canvas(gl,manual_resolution);

return manual_resolution;
} else {
sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic(gl.canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"square?","square?",1383931624),true], null)], 0));

return sprog.dom.canvas.canvas_resolution(gl);
}
});
clouds.core.get_skybox_BANG_ = (function clouds$core$get_skybox_BANG_(gl,resolution){
var tex = sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,clouds.shaders.worley_frag,resolution,new cljs.core.PersistentArrayMap(null, 1, ["size",resolution], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),tex], null)], 0));

return tex;
});
clouds.core.trace_BANG_ = (function clouds$core$trace_BANG_(p__37327){
var map__37328 = p__37327;
var map__37328__$1 = cljs.core.__destructure_map(map__37328);
var state = map__37328__$1;
var ray_meta_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var ray_dir_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729));
var worley_tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"worley-tex","worley-tex",521290124));
var accumulation_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868));
var attenuation_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"attenuation-texs","attenuation-texs",836984941));
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));
var color_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"color-texs","color-texs",-668240557));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var ray_pos_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37328__$1,new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232));
if(cljs.core.truth_(cljs.core.deref(clouds.core.render_QMARK_))){
var vec__37329 = ray_pos_texs;
var front_pos_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(0),null);
var back_pos_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(1),null);
var vec__37332 = ray_dir_texs;
var front_dir_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332,(0),null);
var back_dir_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37332,(1),null);
var vec__37335 = color_texs;
var front_color_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(0),null);
var back_color_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(1),null);
var vec__37338 = accumulation_texs;
var front_accumulation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37338,(0),null);
var back_accumulation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37338,(1),null);
var vec__37341 = attenuation_texs;
var front_attenuation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(0),null);
var back_attenuation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(1),null);
var vec__37344 = ray_meta_texs;
var front_meta_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37344,(0),null);
var back_meta_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37344,(1),null);
sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,clouds.shaders.trace_frag,resolution,cljs.core.PersistentHashMap.fromArrays(["accumulation-tex","skybox","attenuation-tex","rand-offset","ray-pos-tex","color-tex","size","frame","ray-dir-tex","ray-meta-tex"],[front_accumulation_tex,worley_tex,front_attenuation_tex,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),(function (){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2000)) - (1000));
}))),front_pos_tex,front_color_tex,resolution,frame,front_dir_tex,front_meta_tex]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [back_color_tex,back_pos_tex,back_dir_tex,back_accumulation_tex,back_attenuation_tex,back_meta_tex], null)], null)], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"color-texs","color-texs",-668240557),cljs.core.reverse),new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232),cljs.core.reverse),new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729),cljs.core.reverse),new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868),cljs.core.reverse),new cljs.core.Keyword(null,"attenuation-texs","attenuation-texs",836984941),cljs.core.reverse),new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815),cljs.core.reverse);
} else {
return state;
}
});
clouds.core.render_BANG_ = (function clouds$core$render_BANG_(p__37347){
var map__37348 = p__37347;
var map__37348__$1 = cljs.core.__destructure_map(map__37348);
var state = map__37348__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));
var worley_tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"worley-tex","worley-tex",521290124));
var accumulation_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868));
sprog.webgl.shaders.run_purefrag_shader_BANG_(gl,clouds.shaders.render_frag,resolution,new cljs.core.PersistentArrayMap(null, 3, ["size",resolution,"skybox",worley_tex,"final",cljs.core.first(accumulation_texs)], null));

return state;
});
clouds.core.update_page_BANG_ = (function clouds$core$update_page_BANG_(p__37349){
var map__37350 = p__37349;
var map__37350__$1 = cljs.core.__destructure_map(map__37350);
var state = map__37350__$1;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(clouds.core.render_BANG_(clouds.core.trace_BANG_(state)),new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword(null,"trace?","trace?",1730690679));
});
clouds.core.init_page_BANG_ = (function clouds$core$init_page_BANG_(gl){
clouds.core.expand_canvas(gl);

var resolution = sprog.dom.canvas.canvas_resolution(gl);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729),new cljs.core.Keyword(null,"worley-tex","worley-tex",521290124),new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868),new cljs.core.Keyword(null,"attenuation-texs","attenuation-texs",836984941),new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"color-texs","color-texs",-668240557),new cljs.core.Keyword(null,"volumetric-data-tex","volumetric-data-tex",1034924019),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232),new cljs.core.Keyword(null,"sphere-angles","sphere-angles",-600579972),new cljs.core.Keyword(null,"sphere-axes","sphere-axes",1235229119)],[cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),(0),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),clouds.core.get_skybox_BANG_(gl,resolution),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),resolution,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),clouds.config.atlas_tex_size),gl,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(clouds.config.sphere_octaves,(function (){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(sprog.util.TAU);
}))),cljs.core.vec(cljs.core.flatten(cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(clouds.config.sphere_octaves,(function (){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),(function (){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2)) - (1));
})));
})))))]);
});
clouds.core.init = (function clouds$core$init(){
sprog.input.keyboard.add_key_callback("r",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clouds.core.render_QMARK_,cljs.core.not);
}));

return sprog.webgl.core.start_sprog_BANG_(clouds.core.init_page_BANG_,clouds.core.update_page_BANG_);
});
clouds.core.restart_BANG_ = (function clouds$core$restart_BANG_(){
document.body.removeChild(sprog.webgl.core.sprog_context().canvas);

return clouds.core.init();
});
clouds.core.pre_init = (function clouds$core$pre_init(){
return window.addEventListener("load",(function (_){
return clouds.core.init();
}));
});

//# sourceMappingURL=clouds.core.js.map
