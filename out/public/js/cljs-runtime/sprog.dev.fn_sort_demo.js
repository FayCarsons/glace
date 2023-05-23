goog.provide('sprog.dev.fn_sort_demo');
sprog.dev.fn_sort_demo.fn_count = (50);
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.fn_sort_demo !== 'undefined') && (typeof sprog.dev.fn_sort_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.fn_sort_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.fn_sort_demo !== 'undefined') && (typeof sprog.dev.fn_sort_demo.sprog_atom !== 'undefined')){
} else {
sprog.dev.fn_sort_demo.sprog_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.fn_sort_demo.frag_source = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(sprog.iglu.chunks.merge_chunks,clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"final-fn-name","final-fn-name",1435458769),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.dev.fn_sort_demo.fn_count)].join('')),new cljs.core.Keyword(null,"fn-count-f","fn-count-f",-1710864036),sprog.dev.fn_sort_demo.fn_count.toFixed((1))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Keyword(null,"final-fn-name","final-fn-name",1435458769),"0.0"),(0),(0),(1))))], null)], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')),new cljs.core.Keyword(null,"prev-fn-name","prev-fn-name",1727392154),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''))], null),(((i === (0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x","x",-555367584,null),"0.01"))], null)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Keyword(null,"prev-fn-name","prev-fn-name",1727392154),new cljs.core.Symbol(null,"x","x",-555367584,null)),"0.01"))], null)], null)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(sprog.dev.fn_sort_demo.fn_count)));
sprog.dev.fn_sort_demo.update_page_BANG_ = (function sprog$dev$fn_sort_demo$update_page_BANG_(){
var gl = cljs.core.deref(sprog.dev.fn_sort_demo.gl_atom);
var resolution = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
sprog.webgl.canvas.maximize_gl_canvas(gl);

sprog.webgl.framebuffers.target_screen_BANG_(gl);

sprog.webgl.shaders.run_purefrag_sprog(cljs.core.deref(sprog.dev.fn_sort_demo.sprog_atom),resolution,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",resolution], null)], null));

return requestAnimationFrame(sprog.dev.fn_sort_demo.update_page_BANG_);
});
sprog.dev.fn_sort_demo.init = (function sprog$dev$fn_sort_demo$init(){
var gl_41969 = sprog.webgl.canvas.create_gl_canvas();
cljs.core.reset_BANG_(sprog.dev.fn_sort_demo.gl_atom,gl_41969);

cljs.core.reset_BANG_(sprog.dev.fn_sort_demo.sprog_atom,sprog.webgl.shaders.create_purefrag_sprog(gl_41969,sprog.iglu.core.iglu__GT_glsl(sprog.dev.fn_sort_demo.frag_source)));

return sprog.dev.fn_sort_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.fn_sort_demo.js.map
