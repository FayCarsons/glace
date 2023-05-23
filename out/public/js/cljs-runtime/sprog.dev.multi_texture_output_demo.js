goog.provide('sprog.dev.multi_texture_output_demo');
sprog.dev.multi_texture_output_demo.texture_resolution = (8);
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.draw_sprog_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.draw_sprog_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.texture_1_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.texture_1_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.texture_2_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.texture_2_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.multi_texture_output_demo.render_frag_source = clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"texture-resolution-f","texture-resolution-f",-2100344727),sprog.dev.multi_texture_output_demo.texture_resolution.toFixed((1))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),(0),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),(1)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Keyword(null,"texture-resolution-f","texture-resolution-f",-2100344727))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),(0),(1))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),(0),new cljs.core.Symbol(null,"pos","pos",775924307,null),(1))))], null)], null));
sprog.dev.multi_texture_output_demo.draw_frag_source = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex1","tex1",241795155,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"tex2","tex2",1272526367,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"pos.x","pos.x",708553529,null),"0.5"),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex1","tex1",241795155,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),"2.0","1.0"))),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex2","tex2",1272526367,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),"0.5","0.0")),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),"2.0","1.0"))))))], null)], null);
sprog.dev.multi_texture_output_demo.update_page_BANG_ = (function sprog$dev$multi_texture_output_demo$update_page_BANG_(){
var gl = cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom);
var resolution = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
sprog.webgl.canvas.maximize_gl_canvas(gl);

sprog.webgl.framebuffers.target_screen_BANG_(gl);

sprog.webgl.shaders.run_purefrag_sprog(cljs.core.deref(sprog.dev.multi_texture_output_demo.draw_sprog_atom),resolution,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",resolution], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 2, ["tex1",cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_1_atom),"tex2",cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_2_atom)], null)], null));

return requestAnimationFrame(sprog.dev.multi_texture_output_demo.update_page_BANG_);
});
sprog.dev.multi_texture_output_demo.init = (function sprog$dev$multi_texture_output_demo$init(){
var gl_41970 = sprog.webgl.canvas.create_gl_canvas();
cljs.core.reset_BANG_(sprog.dev.multi_texture_output_demo.gl_atom,gl_41970);

cljs.core.reset_BANG_(sprog.dev.multi_texture_output_demo.draw_sprog_atom,sprog.webgl.shaders.create_purefrag_sprog(gl_41970,sprog.iglu.core.iglu__GT_glsl(sprog.dev.multi_texture_output_demo.draw_frag_source)));

var seq__41965_41971 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.dev.multi_texture_output_demo.texture_1_atom,sprog.dev.multi_texture_output_demo.texture_2_atom], null));
var chunk__41966_41972 = null;
var count__41967_41973 = (0);
var i__41968_41974 = (0);
while(true){
if((i__41968_41974 < count__41967_41973)){
var tex_atom_41975 = chunk__41966_41972.cljs$core$IIndexed$_nth$arity$2(null,i__41968_41974);
cljs.core.reset_BANG_(tex_atom_41975,sprog.webgl.textures.create_float_tex.cljs$core$IFn$_invoke$arity$variadic(gl_41970,sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"nearest","nearest",1176353890)], null)], 0)));


var G__41976 = seq__41965_41971;
var G__41977 = chunk__41966_41972;
var G__41978 = count__41967_41973;
var G__41979 = (i__41968_41974 + (1));
seq__41965_41971 = G__41976;
chunk__41966_41972 = G__41977;
count__41967_41973 = G__41978;
i__41968_41974 = G__41979;
continue;
} else {
var temp__5804__auto___41980 = cljs.core.seq(seq__41965_41971);
if(temp__5804__auto___41980){
var seq__41965_41981__$1 = temp__5804__auto___41980;
if(cljs.core.chunked_seq_QMARK_(seq__41965_41981__$1)){
var c__5565__auto___41982 = cljs.core.chunk_first(seq__41965_41981__$1);
var G__41983 = cljs.core.chunk_rest(seq__41965_41981__$1);
var G__41984 = c__5565__auto___41982;
var G__41985 = cljs.core.count(c__5565__auto___41982);
var G__41986 = (0);
seq__41965_41971 = G__41983;
chunk__41966_41972 = G__41984;
count__41967_41973 = G__41985;
i__41968_41974 = G__41986;
continue;
} else {
var tex_atom_41987 = cljs.core.first(seq__41965_41981__$1);
cljs.core.reset_BANG_(tex_atom_41987,sprog.webgl.textures.create_float_tex.cljs$core$IFn$_invoke$arity$variadic(gl_41970,sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"nearest","nearest",1176353890)], null)], 0)));


var G__41988 = cljs.core.next(seq__41965_41981__$1);
var G__41989 = null;
var G__41990 = (0);
var G__41991 = (0);
seq__41965_41971 = G__41988;
chunk__41966_41972 = G__41989;
count__41967_41973 = G__41990;
i__41968_41974 = G__41991;
continue;
}
} else {
}
}
break;
}

var render_sprog_41992 = sprog.webgl.shaders.create_purefrag_sprog(gl_41970,sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.core.iglu__GT_glsl(sprog.dev.multi_texture_output_demo.render_frag_source)], 0)));
sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl_41970,gl_41970.createFramebuffer(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_1_atom),cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_2_atom)], 0));

sprog.webgl.shaders.run_purefrag_sprog(render_sprog_41992,sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.PersistentArrayMap.EMPTY);

return sprog.dev.multi_texture_output_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.multi_texture_output_demo.js.map
