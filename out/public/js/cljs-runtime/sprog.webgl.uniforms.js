goog.provide('sprog.webgl.uniforms');
sprog.webgl.uniforms.ensure_uniform_present_BANG_ = (function sprog$webgl$uniforms$ensure_uniform_present_BANG_(gl,p__44631,uniform_name){
var map__44632 = p__44631;
var map__44632__$1 = cljs.core.__destructure_map(map__44632);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44632__$1,new cljs.core.Keyword(null,"program","program",781564284));
var uniform_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44632__$1,new cljs.core.Keyword(null,"uniform-locations-atom","uniform-locations-atom",-1081551033));
if(cljs.core.not((function (){var fexpr__44634 = cljs.core.deref(uniform_locations_atom);
return (fexpr__44634.cljs$core$IFn$_invoke$arity$1 ? fexpr__44634.cljs$core$IFn$_invoke$arity$1(uniform_name) : fexpr__44634.call(null,uniform_name));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(uniform_locations_atom,cljs.core.assoc,uniform_name,gl.getUniformLocation(program,uniform_name));
} else {
return null;
}
});
sprog.webgl.uniforms.set_uniform_int_BANG_ = (function sprog$webgl$uniforms$set_uniform_int_BANG_(gl,location,value){
return gl.uniform1i(location,value);
});
sprog.webgl.uniforms.set_uniform_int_array_BANG_ = (function sprog$webgl$uniforms$set_uniform_int_array_BANG_(gl,location,value){
return gl.uniform1iv(location,value);
});
sprog.webgl.uniforms.set_uniform_ivec2_BANG_ = (function sprog$webgl$uniforms$set_uniform_ivec2_BANG_(gl,location,value){
return gl.uniform2iv(location,value);
});
sprog.webgl.uniforms.set_uniform_ivec3_BANG_ = (function sprog$webgl$uniforms$set_uniform_ivec3_BANG_(gl,location,value){
return gl.uniform3iv(location,value);
});
sprog.webgl.uniforms.set_uniform_ivec4_BANG_ = (function sprog$webgl$uniforms$set_uniform_ivec4_BANG_(gl,location,value){
return gl.uniform4iv(location,value);
});
sprog.webgl.uniforms.set_uniform_uint_BANG_ = (function sprog$webgl$uniforms$set_uniform_uint_BANG_(gl,location,value){
return gl.uniform1ui(location,value);
});
sprog.webgl.uniforms.set_uniform_uint_array_BANG_ = (function sprog$webgl$uniforms$set_uniform_uint_array_BANG_(gl,location,value){
return gl.uniform1uiv(location,value);
});
sprog.webgl.uniforms.set_uniform_uvec2_BANG_ = (function sprog$webgl$uniforms$set_uniform_uvec2_BANG_(gl,location,value){
return gl.uniform2uiv(location,value);
});
sprog.webgl.uniforms.set_uniform_uvec3_BANG_ = (function sprog$webgl$uniforms$set_uniform_uvec3_BANG_(gl,location,value){
return gl.uniform3uiv(location,value);
});
sprog.webgl.uniforms.set_uniform_uvec4_BANG_ = (function sprog$webgl$uniforms$set_uniform_uvec4_BANG_(gl,location,value){
return gl.uniform4uiv(location,value);
});
sprog.webgl.uniforms.convert_bool = (function sprog$webgl$uniforms$convert_bool(p1__44649_SHARP_){
if(cljs.core.boolean_QMARK_(p1__44649_SHARP_)){
if(p1__44649_SHARP_){
return cljs.core.long$((1));
} else {
return cljs.core.long$((0));
}
} else {
return p1__44649_SHARP_;
}
});
sprog.webgl.uniforms.set_uniform_bool_BANG_ = (function sprog$webgl$uniforms$set_uniform_bool_BANG_(gl,location,value){
return sprog.webgl.uniforms.set_uniform_int_BANG_(gl,location,sprog.webgl.uniforms.convert_bool(value));
});
sprog.webgl.uniforms.set_uniform_bool_array_BANG_ = (function sprog$webgl$uniforms$set_uniform_bool_array_BANG_(gl,location,value){
return sprog.webgl.uniforms.set_uniform_int_array_BANG_(gl,location,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.webgl.uniforms.convert_bool,value));
});
sprog.webgl.uniforms.set_uniform_bvec2_BANG_ = (function sprog$webgl$uniforms$set_uniform_bvec2_BANG_(gl,location,value){
return sprog.webgl.uniforms.set_uniform_ivec2_BANG_(gl,location,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.webgl.uniforms.convert_bool,value));
});
sprog.webgl.uniforms.set_uniform_bvec3_BANG_ = (function sprog$webgl$uniforms$set_uniform_bvec3_BANG_(gl,location,value){
return sprog.webgl.uniforms.set_uniform_ivec3_BANG_(gl,location,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.webgl.uniforms.convert_bool,value));
});
sprog.webgl.uniforms.set_uniform_bvec4_BANG_ = (function sprog$webgl$uniforms$set_uniform_bvec4_BANG_(gl,location,value){
return sprog.webgl.uniforms.set_uniform_ivec4_BANG_(gl,location,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sprog.webgl.uniforms.convert_bool,value));
});
sprog.webgl.uniforms.set_uniform_float_BANG_ = (function sprog$webgl$uniforms$set_uniform_float_BANG_(gl,location,value){
return gl.uniform1f(location,value);
});
sprog.webgl.uniforms.set_uniform_float_array_BANG_ = (function sprog$webgl$uniforms$set_uniform_float_array_BANG_(gl,location,value){
return gl.uniform1fv(location,value);
});
sprog.webgl.uniforms.set_uniform_vec2_BANG_ = (function sprog$webgl$uniforms$set_uniform_vec2_BANG_(gl,location,value){
return gl.uniform2fv(location,value);
});
sprog.webgl.uniforms.set_uniform_vec3_BANG_ = (function sprog$webgl$uniforms$set_uniform_vec3_BANG_(gl,location,value){
return gl.uniform3fv(location,value);
});
sprog.webgl.uniforms.set_uniform_vec4_BANG_ = (function sprog$webgl$uniforms$set_uniform_vec4_BANG_(gl,location,value){
return gl.uniform4fv(location,value);
});
sprog.webgl.uniforms.set_uniform_mat2_BANG_ = (function sprog$webgl$uniforms$set_uniform_mat2_BANG_(gl,location,value){
return gl.uniformMatrix2fv(location,false,value);
});
sprog.webgl.uniforms.set_uniform_mat3_BANG_ = (function sprog$webgl$uniforms$set_uniform_mat3_BANG_(gl,location,value){
return gl.uniformMatrix3fv(location,false,value);
});
sprog.webgl.uniforms.set_uniform_mat4_BANG_ = (function sprog$webgl$uniforms$set_uniform_mat4_BANG_(gl,location,value){
return gl.uniformMatrix4fv(location,false,value);
});
sprog.webgl.uniforms.set_sprog_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniforms_BANG_(gl,p__44665,uniforms){
var map__44666 = p__44665;
var map__44666__$1 = cljs.core.__destructure_map(map__44666);
var sprog__$1 = map__44666__$1;
var uniform_type_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"uniform-type-map","uniform-type-map",-1681076371));
var uniform_locations_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44666__$1,new cljs.core.Keyword(null,"uniform-locations-atom","uniform-locations-atom",-1081551033));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (texture_index,p__44671){
var vec__44672 = p__44671;
var uniform_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672,(1),null);
var uniform_glsl_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sprog.iglu.glsl.clj_name__GT_glsl_name(uniform_name));
var temp__5802__auto__ = (uniform_type_map.cljs$core$IFn$_invoke$arity$1 ? uniform_type_map.cljs$core$IFn$_invoke$arity$1(uniform_glsl_name) : uniform_type_map.call(null,uniform_glsl_name));
if(cljs.core.truth_(temp__5802__auto__)){
var uniform_type = temp__5802__auto__;
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_glsl_name);

if(cljs.core.truth_((function (){var fexpr__44676 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["usampler2D",null,"usampler3D",null,"sampler3D",null,"sampler2D",null], null), null);
return (fexpr__44676.cljs$core$IFn$_invoke$arity$1 ? fexpr__44676.cljs$core$IFn$_invoke$arity$1(uniform_type) : fexpr__44676.call(null,uniform_type));
})())){
gl.activeTexture((gl.TEXTURE0 + texture_index));

gl.bindTexture((cljs.core.truth_((function (){var fexpr__44679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["usampler3D",null,"sampler3D",null], null), null);
return (fexpr__44679.cljs$core$IFn$_invoke$arity$1 ? fexpr__44679.cljs$core$IFn$_invoke$arity$1(uniform_type) : fexpr__44679.call(null,uniform_type));
})())?gl.TEXTURE_3D:gl.TEXTURE_2D),value);

sprog.webgl.uniforms.set_uniform_int_BANG_(gl,(function (){var fexpr__44680 = cljs.core.deref(uniform_locations_atom);
return (fexpr__44680.cljs$core$IFn$_invoke$arity$1 ? fexpr__44680.cljs$core$IFn$_invoke$arity$1(uniform_glsl_name) : fexpr__44680.call(null,uniform_glsl_name));
})(),texture_index);

return (texture_index + (1));
} else {
var G__44682_44689 = gl;
var G__44683_44690 = (function (){var fexpr__44685 = cljs.core.deref(uniform_locations_atom);
return (fexpr__44685.cljs$core$IFn$_invoke$arity$1 ? fexpr__44685.cljs$core$IFn$_invoke$arity$1(uniform_glsl_name) : fexpr__44685.call(null,uniform_glsl_name));
})();
var G__44684_44691 = value;
var fexpr__44681_44692 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("float",uniform_type))?sprog.webgl.uniforms.set_uniform_float_BANG_:(cljs.core.truth_(cljs.core.re_find(/float\[[0-9]+\]/,uniform_type))?sprog.webgl.uniforms.set_uniform_float_array_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("vec2",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/vec2\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_vec2_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("vec3",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/vec3\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_vec3_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("vec4",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/vec4\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_vec4_BANG_:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("int",uniform_type))?sprog.webgl.uniforms.set_uniform_int_BANG_:(cljs.core.truth_(cljs.core.re_find(/int\[[0-9]+\]/,uniform_type))?sprog.webgl.uniforms.set_uniform_int_array_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ivec2",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/ivec2\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_ivec2_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ivec3",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/ivec3\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_ivec3_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ivec4",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/ivec4\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_ivec4_BANG_:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uint",uniform_type))?sprog.webgl.uniforms.set_uniform_uint_BANG_:(cljs.core.truth_(cljs.core.re_find(/uint\[[0-9]+\]/,uniform_type))?sprog.webgl.uniforms.set_uniform_uint_array_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uvec2",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/uvec2\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_uvec2_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uvec3",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/uvec3\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_uvec3_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uvec4",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/uvec4\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_uvec4_BANG_:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bool",uniform_type))?sprog.webgl.uniforms.set_uniform_bool_BANG_:(cljs.core.truth_(cljs.core.re_find(/bool\[[0-9]+\]/,uniform_type))?sprog.webgl.uniforms.set_uniform_bool_array_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bvec2",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/bvec2\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_bvec2_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bvec3",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/bvec3\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_bvec3_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bvec4",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/bvec4\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_bvec4_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mat2",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/mat2\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_mat2_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mat3",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/mat3\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_mat3_BANG_:(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mat4",uniform_type);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.re_find(/mat4\[[0-9]+\]/,uniform_type);
}
})())?sprog.webgl.uniforms.set_uniform_mat4_BANG_:(function(){throw ["SPROG: Unrecognized uniform type \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_type),"\" for uniform \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name),"\""].join('')})()
)))))))))))))))))))))));
(fexpr__44681_44692.cljs$core$IFn$_invoke$arity$3 ? fexpr__44681_44692.cljs$core$IFn$_invoke$arity$3(G__44682_44689,G__44683_44690,G__44684_44691) : fexpr__44681_44692.call(null,G__44682_44689,G__44683_44690,G__44684_44691));

return texture_index;
}
} else {
throw ["SPROG: No uniform \"",uniform_glsl_name,"\" in shader"].join('');
}
}),(0),uniforms);
});

//# sourceMappingURL=sprog.webgl.uniforms.js.map
