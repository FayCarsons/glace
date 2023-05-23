goog.provide('pxlsrt.core');
var module$node_modules$osc$src$platforms$osc_node=shadow.js.require("module$node_modules$osc$src$platforms$osc_node", {});
pxlsrt.core.sort_resolution = (1000);
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.gl_atom !== 'undefined')){
} else {
pxlsrt.core.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.render_sprog_atom !== 'undefined')){
} else {
pxlsrt.core.render_sprog_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.logic_sprog_atom !== 'undefined')){
} else {
pxlsrt.core.logic_sprog_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.texs_atom !== 'undefined')){
} else {
pxlsrt.core.texs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.fb_atom !== 'undefined')){
} else {
pxlsrt.core.fb_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.frame_atom !== 'undefined')){
} else {
pxlsrt.core.frame_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.thresh_atom !== 'undefined')){
} else {
pxlsrt.core.thresh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.time_atom !== 'undefined')){
} else {
pxlsrt.core.time_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.port_atom !== 'undefined')){
} else {
pxlsrt.core.port_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pxlsrt !== 'undefined') && (typeof pxlsrt.core !== 'undefined') && (typeof pxlsrt.core.osc_atom !== 'undefined')){
} else {
pxlsrt.core.osc_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
pxlsrt.core.render_frag_source = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))))], null)], null);
pxlsrt.core.logic_frag_source = sprog.iglu.chunks.random_shortcut(sprog.iglu.chunks.merge_chunks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.chunks.rand_chunk,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"thresh","thresh",399301642,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mouse","mouse",2119160499,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null)),new cljs.core.Symbol(null,"gscale","gscale",1055864355,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"gscale","gscale",1055864355,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"c.r","c.r",556478797,null),new cljs.core.Symbol(null,"c.b","c.b",1106312740,null),new cljs.core.Symbol(null,"c.g","c.g",-841222534,null)),"3.0")),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=vec3","=vec3",-570882786,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),cljs.core.list(new cljs.core.Symbol(null,"fract","fract",-421196543,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"p.xyx","p.xyx",769244308,null),0.1031))),cljs.core.list(new cljs.core.Symbol(null,"+=","+=",1039293914,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),cljs.core.list(new cljs.core.Symbol(null,"dot","dot",-1211726368,null),new cljs.core.Symbol(null,"p3","p3",-923395030,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"p3.yzx","p3.yzx",-340767760,null),33.33))),cljs.core.list(new cljs.core.Symbol(null,"fract","fract",-421196543,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"p3.x","p3.x",-2142727329,null),new cljs.core.Symbol(null,"p3.y","p3.y",-808256997,null)),new cljs.core.Symbol(null,"p3.z","p3.z",925671237,null)))),new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"fParity","fParity",-269039407,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null)),"2.0"),"2.0"),"1.0")),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"vp","vp",-836506535,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),cljs.core.list(new cljs.core.Symbol(null,"floor","floor",-772394748,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos.x","pos.x",708553529,null),new cljs.core.Symbol(null,"size.x","size.x",1576801337,null))),"2.0"),"2.0"),"1.0")),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos.y","pos.y",-1968888282,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),(4)))),(2)),(0)),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(-1),(1)),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(1),(1)))),cljs.core.list(new cljs.core.Symbol(null,"*=","*=",-1438205999,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"fParity","fParity",-269039407,null),new cljs.core.Symbol(null,"vp","vp",-836506535,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=vec4","=vec4",-1088093579,null),new cljs.core.Symbol(null,"curr","curr",548158719,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))),cljs.core.list(new cljs.core.Symbol(null,"=vec4","=vec4",-1088093579,null),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null)))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"gCurr","gCurr",9641690,null),cljs.core.list(new cljs.core.Symbol(null,"gscale","gscale",1055864355,null),new cljs.core.Symbol(null,"curr.rgb","curr.rgb",1643167615,null))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"gComp","gComp",-1785748903,null),cljs.core.list(new cljs.core.Symbol(null,"gscale","gscale",1055864355,null),new cljs.core.Symbol(null,"comp.rgb","comp.rgb",-1750690929,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"vp","vp",-836506535,null),new cljs.core.Symbol(null,"fParity","fParity",-269039407,null)),"0.0"),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"&&","&&",-1330982734,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"gCurr","gCurr",9641690,null),new cljs.core.Symbol(null,"thresh","thresh",399301642,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"gComp","gComp",-1785748903,null),new cljs.core.Symbol(null,"gCurr","gCurr",9641690,null))),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"curr","curr",548158719,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"&&","&&",-1330982734,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"gComp","gComp",-1785748903,null),new cljs.core.Symbol(null,"thresh","thresh",399301642,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"gCurr","gCurr",9641690,null),new cljs.core.Symbol(null,"gComp","gComp",-1785748903,null))),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"curr","curr",548158719,null)))))], null)], null)], 0)));
pxlsrt.core.init_frag_source = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"signatures","signatures",1855149045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"void","void",-444095336,null))], null),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"main","main",-477271134,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"pos.y","pos.y",-1968888282,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),"1.0",new cljs.core.Symbol(null,"pos.y","pos.y",-1968888282,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))))], null)], null);
pxlsrt.core.update_page_BANG_ = (function pxlsrt$core$update_page_BANG_(){
var gl = cljs.core.deref(pxlsrt.core.gl_atom);
var resolution = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.deref(pxlsrt.core.fb_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(cljs.core.deref(pxlsrt.core.texs_atom))], 0));

sprog.webgl.shaders.run_purefrag_sprog(cljs.core.deref(pxlsrt.core.logic_sprog_atom),pxlsrt.core.sort_resolution,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 4, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pxlsrt.core.sort_resolution,pxlsrt.core.sort_resolution], null),"thresh",cljs.core.deref(pxlsrt.core.thresh_atom),"time",cljs.core.deref(pxlsrt.core.time_atom),"osc",cljs.core.deref(pxlsrt.core.osc_atom)], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.first(cljs.core.deref(pxlsrt.core.texs_atom))], null),new cljs.core.Keyword(null,"ints","ints",893195924),new cljs.core.PersistentArrayMap(null, 1, ["frame",cljs.core.deref(pxlsrt.core.frame_atom)], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pxlsrt.core.texs_atom,cljs.core.reverse);

sprog.webgl.canvas.maximize_gl_canvas(gl);

sprog.webgl.framebuffers.target_screen_BANG_(gl);

sprog.webgl.shaders.run_purefrag_sprog(cljs.core.deref(pxlsrt.core.render_sprog_atom),resolution,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",resolution], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.first(cljs.core.deref(pxlsrt.core.texs_atom))], null)], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pxlsrt.core.frame_atom,cljs.core.inc);

cljs.core.reset_BANG_(pxlsrt.core.time_atom,(cljs.core.deref(pxlsrt.core.time_atom) + 0.1));

return requestAnimationFrame(pxlsrt.core.update_page_BANG_);
});
pxlsrt.core.init = (function pxlsrt$core$init(){
var gl = sprog.webgl.canvas.create_gl_canvas();
cljs.core.reset_BANG_(pxlsrt.core.gl_atom,gl);

cljs.core.reset_BANG_(pxlsrt.core.render_sprog_atom,sprog.webgl.shaders.create_purefrag_sprog(gl,sprog.iglu.core.iglu__GT_glsl(pxlsrt.core.render_frag_source)));

cljs.core.reset_BANG_(pxlsrt.core.logic_sprog_atom,sprog.webgl.shaders.create_purefrag_sprog(gl,sprog.iglu.core.iglu__GT_glsl(pxlsrt.core.logic_frag_source)));

cljs.core.reset_BANG_(pxlsrt.core.texs_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.webgl.textures.create_float_tex(gl,pxlsrt.core.sort_resolution),sprog.webgl.textures.create_float_tex(gl,pxlsrt.core.sort_resolution)], null));

cljs.core.reset_BANG_(pxlsrt.core.fb_atom,gl.createFramebuffer());

cljs.core.reset_BANG_(pxlsrt.core.frame_atom,(0));

cljs.core.reset_BANG_(pxlsrt.core.time_atom,(0));

cljs.core.reset_BANG_(pxlsrt.core.port_atom,(new module$node_modules$osc$src$platforms$osc_node.WebSocketPort(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"ws://localhost:8080",new cljs.core.Keyword(null,"metadata","metadata",1799301597),true], null)))));

cljs.core.deref(pxlsrt.core.port_atom).on("message",(function (oscMsg){
return cljs.core.reset_BANG_(pxlsrt.core.osc_atom,oscMsg);
}));

sprog.webgl.framebuffers.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.deref(pxlsrt.core.fb_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(cljs.core.deref(pxlsrt.core.texs_atom))], 0));

return sprog.webgl.shaders.run_purefrag_sprog(sprog.webgl.shaders.create_purefrag_sprog(gl,sprog.iglu.core.iglu__GT_glsl(pxlsrt.core.init_frag_source)),pxlsrt.core.sort_resolution,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pxlsrt.core.sort_resolution,pxlsrt.core.sort_resolution], null)], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",(function (){var texture = gl.createTexture();
var image = document.getElementById("img");
gl.bindTexture(gl.TEXTURE_2D,texture);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);

return texture;
})()], null)], null));
});
pxlsrt.core.restart_BANG_ = (function pxlsrt$core$restart_BANG_(){
document.body.removeChild(cljs.core.deref(pxlsrt.core.gl_atom).canvas);

return pxlsrt.core.init();
});
pxlsrt.core.pre_init = (function pxlsrt$core$pre_init(){
return window.addEventListener("load",(function (_){
pxlsrt.core.init();

return pxlsrt.core.update_page_BANG_();
}));
});

//# sourceMappingURL=pxlsrt.core.js.map
