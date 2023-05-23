goog.provide('clouds.core');
clouds.core.expand_canvas = (function clouds$core$expand_canvas(gl){
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic(gl.canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561),(2),new cljs.core.Keyword(null,"square?","square?",1383931624),false], null)], 0));
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
clouds.core.get_volumetric_data_BANG_ = (function clouds$core$get_volumetric_data_BANG_(p__64835){
var map__64836 = p__64835;
var map__64836__$1 = cljs.core.__destructure_map(map__64836);
var state = map__64836__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64836__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64836__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var volumetric_data_tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64836__$1,new cljs.core.Keyword(null,"volumetric-data-tex","volumetric-data-tex",1034924019));
if((frame === (0))){
var tex_size_64858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clouds.config.atlas_tex_size,clouds.config.atlas_tex_size], null);
sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,clouds.atlas.atlas_frag,tex_size_64858,new cljs.core.PersistentArrayMap(null, 1, ["size",tex_size_64858], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),volumetric_data_tex], null)], 0));
} else {
}

return state;
});
clouds.core.trace_BANG_ = (function clouds$core$trace_BANG_(p__64837){
var map__64838 = p__64837;
var map__64838__$1 = cljs.core.__destructure_map(map__64838);
var state = map__64838__$1;
var ray_meta_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var ray_dir_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729));
var accumulation_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868));
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));
var color_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"color-texs","color-texs",-668240557));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var ray_pos_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64838__$1,new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232));
var vec__64839 = ray_pos_texs;
var front_pos_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64839,(0),null);
var back_pos_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64839,(1),null);
var vec__64842 = ray_dir_texs;
var front_dir_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64842,(0),null);
var back_dir_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64842,(1),null);
var vec__64845 = color_texs;
var front_color_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64845,(0),null);
var back_color_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64845,(1),null);
var vec__64848 = accumulation_texs;
var front_accumulation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64848,(0),null);
var back_accumulation_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64848,(1),null);
var vec__64851 = ray_meta_texs;
var front_meta_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64851,(0),null);
var back_meta_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64851,(1),null);
sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,clouds.shaders.trace_frag,resolution,new cljs.core.PersistentArrayMap(null, 8, ["size",resolution,"frame",frame,"rand-offset",cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((3),(function (){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2000)) - (1000));
}))),"ray-pos-tex",front_pos_tex,"ray-dir-tex",front_dir_tex,"color-tex",front_color_tex,"accumulation-tex",front_accumulation_tex,"ray-meta-tex",front_meta_tex], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [back_color_tex,back_pos_tex,back_dir_tex,back_accumulation_tex,back_meta_tex], null)], null)], 0));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"color-texs","color-texs",-668240557),cljs.core.reverse),new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232),cljs.core.reverse),new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729),cljs.core.reverse),new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868),cljs.core.reverse),new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815),cljs.core.reverse);

});
clouds.core.render_BANG_ = (function clouds$core$render_BANG_(p__64854){
var map__64855 = p__64854;
var map__64855__$1 = cljs.core.__destructure_map(map__64855);
var state = map__64855__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64855__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var resolution = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64855__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));
var volumetric_data_tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64855__$1,new cljs.core.Keyword(null,"volumetric-data-tex","volumetric-data-tex",1034924019));
var accumulation_texs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64855__$1,new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868));
sprog.webgl.shaders.run_purefrag_shader_BANG_(gl,clouds.shaders.render_frag,resolution,new cljs.core.PersistentArrayMap(null, 4, ["size",resolution,"atlas",volumetric_data_tex,"final",cljs.core.first(accumulation_texs),"now",sprog.util.seconds_since_startup()], null));

return state;
});
clouds.core.update_page_BANG_ = (function clouds$core$update_page_BANG_(p__64856){
var map__64857 = p__64856;
var map__64857__$1 = cljs.core.__destructure_map(map__64857);
var state = map__64857__$1;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(clouds.core.render_BANG_(clouds.core.trace_BANG_(state)),new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc),new cljs.core.Keyword(null,"trace?","trace?",1730690679));
});
clouds.core.init_page_BANG_ = (function clouds$core$init_page_BANG_(gl){
clouds.core.expand_canvas(gl);

var resolution = sprog.dom.canvas.canvas_resolution(gl);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ray-meta-texs","ray-meta-texs",-1657158815),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"ray-dir-texs","ray-dir-texs",1909550729),new cljs.core.Keyword(null,"accumulation-texs","accumulation-texs",-1396746868),new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"color-texs","color-texs",-668240557),new cljs.core.Keyword(null,"volumetric-data-tex","volumetric-data-tex",1034924019),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"ray-pos-texs","ray-pos-texs",-959000232)],[cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),(0),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),resolution,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
}))),sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),clouds.config.atlas_tex_size),gl,cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u32","u32",1815761749),resolution);
})))]);
});
clouds.core.init = (function clouds$core$init(){
sprog.input.keyboard.add_key_callback("t",(function (){
sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["gey"], 0));

return sprog.webgl.core.merge_sprog_state_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null));
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
