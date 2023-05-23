goog.provide('sprog.iglu.chunks.misc');
sprog.iglu.chunks.misc.trivial_vert_source = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"lowp","lowp",90173549,null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"vertPos","vertPos",510564758,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"gl_Position","gl_Position",-773510725,null),new cljs.core.Symbol(null,"vertPos","vertPos",510564758,null)))], null);
sprog.iglu.chunks.misc.identity_frag_source = (function sprog$iglu$chunks$misc$identity_frag_source(texture_type){
return clojure.walk.postwalk_replace((function (){var float_tex_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(texture_type,new cljs.core.Keyword(null,"f8","f8",-2141475484));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),((float_tex_QMARK_)?new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null):new cljs.core.Symbol(null,"usampler2D","usampler2D",-1675415451,null)),new cljs.core.Keyword(null,"pixel-type","pixel-type",-1021104292),((float_tex_QMARK_)?new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null):new cljs.core.Symbol(null,"uvec4","uvec4",1197906380,null))], null);
})(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null),new cljs.core.Symbol(null,"usampler2D","usampler2D",-1675415451,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Keyword(null,"pixel-type","pixel-type",-1021104292)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)))))], null));
});
sprog.iglu.chunks.misc.rescale_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rescale","rescale",953154833,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"oldMin","oldMin",-815160533,null),new cljs.core.Symbol(null,"oldMax","oldMax",-655903251,null),new cljs.core.Symbol(null,"newMin","newMin",1719588300,null),new cljs.core.Symbol(null,"newMax","newMax",-1432655433,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"newMin","newMin",1719588300,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"newMax","newMax",-1432655433,null),new cljs.core.Symbol(null,"newMin","newMin",1719588300,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"oldMin","oldMin",-815160533,null)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"oldMax","oldMax",-655903251,null),new cljs.core.Symbol(null,"oldMin","oldMin",-815160533,null))))))], null)], null)], null);
sprog.iglu.chunks.misc.pos_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"getPos","getPos",472289532,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"vec2","vec2",878272887,null)),cljs.core.list(cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"minDim","minDim",962083501,null),cljs.core.list(new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"size.x","size.x",1576801337,null),new cljs.core.Symbol(null,"size.y","size.y",318652450,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),0.5,cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"minDim","minDim",962083501,null)))),new cljs.core.Symbol(null,"minDim","minDim",962083501,null)))], null)], null)], null);
sprog.iglu.chunks.misc.sigmoid_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sigmoid","sigmoid",705110719,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(1),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.list(new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),new cljs.core.Symbol(null,"x","x",-555367584,null))))))], null)], null)], null);
sprog.iglu.chunks.misc.sympow_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sympow","sympow",-1820433792,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"power","power",702679448,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"sign","sign",-1392714102,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),cljs.core.list(new cljs.core.Symbol(null,"abs","abs",1394505050,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.Symbol(null,"power","power",702679448,null))))], null)], null)], null);
sprog.iglu.chunks.misc.smoothstair_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"smoothstair","smoothstair",-1902955340,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"steps","steps",1512098225,null),new cljs.core.Symbol(null,"steepness","steepness",128761789,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*=","*=",-1438205999,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"steps","steps",1512098225,null)),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(2),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(1),new cljs.core.Symbol(null,"steepness","steepness",128761789,null))),(1))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.list(new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"x","x",-555367584,null),(1))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"p","p",1791580836,null),0.5),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),0.5,cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(1),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(1),new cljs.core.Symbol(null,"p","p",1791580836,null)),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),0.5,cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(1))))))),new cljs.core.Symbol(null,"steps","steps",1512098225,null)))], null)], null)], null);
sprog.iglu.chunks.misc.bilinear_usampler_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"textureBilinear","textureBilinear",-412761971,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"usampler2D","usampler2D",-1675415451,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),cljs.core.list(new cljs.core.Symbol(null,"textureSize","textureSize",-1430680768,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),"0"))),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"texCoords","texCoords",-1303957,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null)),0.5)),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"gridCoords","gridCoords",1653107860,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"floor","floor",-772394748,null),new cljs.core.Symbol(null,"texCoords","texCoords",-1303957,null)),0.5)),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"tweenCoords","tweenCoords",472892266,null),cljs.core.list(new cljs.core.Symbol(null,"fract","fract",-421196543,null),new cljs.core.Symbol(null,"texCoords","texCoords",-1303957,null))),cljs.core.list(new cljs.core.Symbol(null,"mix","mix",2121373763,null),cljs.core.list(new cljs.core.Symbol(null,"mix","mix",2121373763,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gridCoords","gridCoords",1653107860,null),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null)))),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"gridCoords","gridCoords",1653107860,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(1),(0))),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null)))),new cljs.core.Symbol(null,"tweenCoords.x","tweenCoords.x",1802953493,null)),cljs.core.list(new cljs.core.Symbol(null,"mix","mix",2121373763,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"gridCoords","gridCoords",1653107860,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(0),(1))),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null)))),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"gridCoords","gridCoords",1653107860,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(1),(1))),new cljs.core.Symbol(null,"texSize","texSize",-884183993,null)))),new cljs.core.Symbol(null,"tweenCoords.x","tweenCoords.x",1802953493,null)),new cljs.core.Symbol(null,"tweenCoords.y","tweenCoords.y",545984651,null)))], null)], null)], null);
sprog.iglu.chunks.misc.paretto_transform_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"paretto","paretto",-216405660,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null)], null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.Symbol(null,"scale","scale",1410104174,null)),new cljs.core.Symbol(null,"shape","shape",-1463741763,null)),cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),new cljs.core.Symbol(null,"value","value",1946509744,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"shape","shape",-1463741763,null),(1)))))], null)], null)], null);
sprog.iglu.chunks.misc.gradient_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"findGradient","findGradient",-10734489,null),(function (dimensions,function_name,sample_distance,pos){
var gradient_fn_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"gradient","gradient",-343377444,null));
var dimension_type = (function (){var G__43386 = dimensions;
switch (G__43386) {
case (1):
return new cljs.core.Symbol(null,"float","float",-91857841,null);

break;
case (2):
return new cljs.core.Symbol(null,"vec2","vec2",878272887,null);

break;
case (3):
return new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null);

break;
case (4):
return new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43386)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chunk","chunk",-1191159620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentArrayMap.createAsIfByAssoc([gradient_fn_name,clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"G__43370","G__43370",-227019221),dimension_type,new cljs.core.Keyword(null,"G__43371","G__43371",9951506),dimension_type,new cljs.core.Keyword(null,"G__43372","G__43372",522896937),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dimensions,(1)))?clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"G__43374","G__43374",1984917950),function_name,new cljs.core.Keyword(null,"G__43375","G__43375",88297323),sample_distance,new cljs.core.Keyword(null,"G__43376","G__43376",-824081957),function_name,new cljs.core.Keyword(null,"G__43377","G__43377",-1555879816),sample_distance], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"G__43374","G__43374",1984917950),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"G__43375","G__43375",88297323))),cljs.core.list(new cljs.core.Keyword(null,"G__43376","G__43376",-824081957),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"G__43377","G__43377",-1555879816))))):cljs.core.cons(dimension_type,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dim){
return clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"G__43379","G__43379",127018849),function_name,new cljs.core.Keyword(null,"G__43380","G__43380",678014772),cljs.core.cons(dimension_type,cljs.core.take.cljs$core$IFn$_invoke$arity$2(dimensions,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dim,(0)),(new cljs.core.List(null,sample_distance,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))], 0)))),new cljs.core.Keyword(null,"G__43381","G__43381",-1226995181),function_name,new cljs.core.Keyword(null,"G__43382","G__43382",1913344436),cljs.core.cons(dimension_type,cljs.core.take.cljs$core$IFn$_invoke$arity$2(dimensions,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dim,(0)),(new cljs.core.List(null,sample_distance,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))], 0))))], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Keyword(null,"G__43379","G__43379",127018849),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"G__43380","G__43380",678014772))),cljs.core.list(new cljs.core.Keyword(null,"G__43381","G__43381",-1226995181),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Keyword(null,"G__43382","G__43382",1913344436)))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(dimensions)))),new cljs.core.Keyword(null,"G__43373","G__43373",-107487235),sample_distance], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"G__43370","G__43370",-227019221)], null),new cljs.core.Keyword(null,"G__43371","G__43371",9951506)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Keyword(null,"G__43372","G__43372",522896937),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword(null,"G__43373","G__43373",-107487235),(2))))], null))])], null),new cljs.core.Keyword(null,"expression","expression",202311876),(new cljs.core.List(null,gradient_fn_name,(new cljs.core.List(null,pos,null,(1),null)),(2),null))], null);
})], null)], null);

//# sourceMappingURL=sprog.iglu.chunks.misc.js.map
