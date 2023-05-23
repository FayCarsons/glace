goog.provide('raytracing.core');
if((typeof raytracing !== 'undefined') && (typeof raytracing.core !== 'undefined') && (typeof raytracing.core.gl_atom !== 'undefined')){
} else {
raytracing.core.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof raytracing !== 'undefined') && (typeof raytracing.core !== 'undefined') && (typeof raytracing.core.render_sprog_atom !== 'undefined')){
} else {
raytracing.core.render_sprog_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof raytracing !== 'undefined') && (typeof raytracing.core !== 'undefined') && (typeof raytracing.core.tex_atom !== 'undefined')){
} else {
raytracing.core.tex_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof raytracing !== 'undefined') && (typeof raytracing.core !== 'undefined') && (typeof raytracing.core.buff_atom !== 'undefined')){
} else {
raytracing.core.buff_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
raytracing.core.resolution = (1000);
raytracing.core.frame_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
raytracing.core.o_vec = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(2),(3),(7)], null);
raytracing.core.h_vec = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.23,0.9,0.1,0.5], null);
raytracing.core.preset = sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?(2):(4))], 0));
raytracing.core.init_frag_source = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))))], null)], null);
raytracing.core.render_frag_source = clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"octaves","octaves",955457820),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raytracing.core.o_vec,raytracing.core.preset),new cljs.core.Keyword(null,"hurst","hurst",1115490004),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raytracing.core.h_vec,raytracing.core.preset),new cljs.core.Keyword(null,"zoom1","zoom1",-760969589),sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))], 0)),new cljs.core.Keyword(null,"zoom2","zoom2",-1051092962),sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))], 0))], null),sprog.iglu.chunks.merge_chunks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.chunks.simplex_3d_chunk,sprog.iglu.chunks.get_fbm_chunk.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Symbol(null,"snoise","snoise",1556674362,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(3)], 0)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"hurst","hurst",-1538945765,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null)),3.0E-4)),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"outVek","outVek",1712859977,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),cljs.core.list(new cljs.core.Symbol(null,"fbm","fbm",1904785389,null),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Keyword(null,"zoom1","zoom1",-760969589)),new cljs.core.Symbol(null,"time","time",-1268547887,null)),new cljs.core.Keyword(null,"octaves","octaves",955457820),new cljs.core.Keyword(null,"hurst","hurst",1115490004)),cljs.core.list(new cljs.core.Symbol(null,"fbm","fbm",1904785389,null),cljs.core.list(new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Keyword(null,"zoom2","zoom2",-1051092962)),new cljs.core.Symbol(null,"time","time",-1268547887,null)),new cljs.core.Keyword(null,"octaves","octaves",955457820),new cljs.core.Keyword(null,"hurst","hurst",1115490004)))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"outVek","outVek",1712859977,null))))], null)], null)], 0)));
raytracing.core.update_page_BANG_ = (function raytracing$core$update_page_BANG_(){
var gl = cljs.core.deref(raytracing.core.gl_atom);
var resolution = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
sprog.webgl.canvas.maximize_gl_canvas(gl);

sprog.webgl.framebuffers.target_screen_BANG_(gl);

sprog.webgl.shaders.run_purefrag_sprog(cljs.core.deref(raytracing.core.render_sprog_atom),resolution,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 2, ["size",resolution,"hurst",(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(raytracing.core.h_vec,raytracing.core.preset) + (Math.sin((cljs.core.deref(raytracing.core.frame_atom) * 0.01)) * 0.1))], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.deref(raytracing.core.tex_atom)], null),new cljs.core.Keyword(null,"ints","ints",893195924),new cljs.core.PersistentArrayMap(null, 1, ["frame",cljs.core.deref(raytracing.core.frame_atom)], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(raytracing.core.frame_atom,cljs.core.inc);

return requestAnimationFrame(raytracing.core.update_page_BANG_);
});
raytracing.core.init = (function raytracing$core$init(){
var gl = sprog.webgl.canvas.create_gl_canvas();
cljs.core.reset_BANG_(raytracing.core.gl_atom,gl);

cljs.core.reset_BANG_(raytracing.core.frame_atom,(0));

cljs.core.reset_BANG_(raytracing.core.tex_atom,sprog.webgl.textures.create_f8_tex(gl,raytracing.core.resolution));

cljs.core.reset_BANG_(raytracing.core.buff_atom,gl.createFramebuffer());

sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.deref(raytracing.core.buff_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(raytracing.core.tex_atom)], 0));

sprog.webgl.shaders.run_purefrag_sprog(sprog.webgl.shaders.create_purefrag_sprog(gl,sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(raytracing.core.init_frag_source)),raytracing.core.resolution,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raytracing.core.resolution,raytracing.core.resolution], null)], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",sprog.webgl.textures.html_image_texture.cljs$core$IFn$_invoke$arity$variadic(gl,"img1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"nearest","nearest",1176353890),new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"mirror","mirror",1914600218)], null)], 0))], null)], null));

sprog.webgl.framebuffers.target_screen_BANG_(gl);

return cljs.core.reset_BANG_(raytracing.core.render_sprog_atom,sprog.webgl.shaders.create_purefrag_sprog(gl,sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(raytracing.core.render_frag_source)], 0))));
});
raytracing.core.restart_BANG_ = (function raytracing$core$restart_BANG_(){
document.body.removeChild(cljs.core.deref(raytracing.core.gl_atom).canvas);

return raytracing.core.init();
});
raytracing.core.pre_init = (function raytracing$core$pre_init(){
return window.addEventListener("load",(function (_){
raytracing.core.init();

return raytracing.core.update_page_BANG_();
}));
});

//# sourceMappingURL=raytracing.core.js.map
