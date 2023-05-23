goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_42156 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_42156(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_42160 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_42160(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_42163 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_42163(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_42165 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_42165(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_42166 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_42166(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41624){
var vec__41625 = p__41624;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5041__auto__ = delay;
if(cljs.core.truth_(and__5041__auto__)){
return (delay > (0));
} else {
return and__5041__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_42170 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_42170(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_42173 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_42173(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_42174 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_42174(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_42175 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_42175(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__36321__auto__ = (0);
while(true){
if((i__36321__auto__ < n__5633__auto__)){
var map__41686_42181 = (self__.items[i__36321__auto__]);
var map__41686_42182__$1 = cljs.core.__destructure_map(map__41686_42181);
var el_42183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41686_42182__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_42184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41686_42182__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_42183,from_42184);

var G__42191 = (i__36321__auto__ + (1));
i__36321__auto__ = G__42191;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__36321__auto__ = (0);
while(true){
if((i__36321__auto__ < n__5633__auto__)){
var map__41688_42194 = (self__.items[i__36321__auto__]);
var map__41688_42195__$1 = cljs.core.__destructure_map(map__41688_42194);
var el_42196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41688_42195__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_42197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41688_42195__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_42198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41688_42195__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_42197["transition"] = transition_42198);

goog.style.setStyle(el_42196,to_42197);

var G__42199 = (i__36321__auto__ + (1));
i__36321__auto__ = G__42199;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__36321__auto__ = (0);
while(true){
if((i__36321__auto__ < n__5633__auto__)){
var map__41692_42200 = (self__.items[i__36321__auto__]);
var map__41692_42201__$1 = cljs.core.__destructure_map(map__41692_42200);
var el_42202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41692_42201__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_42203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41692_42201__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_42203["transition"] = null);

goog.style.setStyle(el_42202,toggles_42203);

var G__42204 = (i__36321__auto__ + (1));
i__36321__auto__ = G__42204;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k41695,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__41704 = k41695;
var G__41704__$1 = (((G__41704 instanceof cljs.core.Keyword))?G__41704.fqn:null);
switch (G__41704__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41695,else__5343__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__41708){
var vec__41709 = p__41708;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41709,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41694){
var self__ = this;
var G__41694__$1 = this;
return (new cljs.core.RecordIter((0),G__41694__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41696,other41697){
var self__ = this;
var this41696__$1 = this;
return (((!((other41697 == null)))) && ((((this41696__$1.constructor === other41697.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.el,other41697.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.from,other41697.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.to,other41697.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.toggles,other41697.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.transition,other41697.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41696__$1.__extmap,other41697.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k41695){
var self__ = this;
var this__5347__auto____$1 = this;
var G__41722 = k41695;
var G__41722__$1 = (((G__41722 instanceof cljs.core.Keyword))?G__41722.fqn:null);
switch (G__41722__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41695);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__41694){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__41731 = cljs.core.keyword_identical_QMARK_;
var expr__41732 = k__5349__auto__;
if(cljs.core.truth_((pred__41731.cljs$core$IFn$_invoke$arity$2 ? pred__41731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__41732) : pred__41731.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__41732)))){
return (new shadow.animate.AnimationStep(G__41694,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41731.cljs$core$IFn$_invoke$arity$2 ? pred__41731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__41732) : pred__41731.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__41732)))){
return (new shadow.animate.AnimationStep(self__.el,G__41694,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41731.cljs$core$IFn$_invoke$arity$2 ? pred__41731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__41732) : pred__41731.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__41732)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__41694,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41731.cljs$core$IFn$_invoke$arity$2 ? pred__41731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__41732) : pred__41731.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__41732)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__41694,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41731.cljs$core$IFn$_invoke$arity$2 ? pred__41731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__41732) : pred__41731.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__41732)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__41694,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__41694),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__41694){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__41694,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__41699){
var extmap__5382__auto__ = (function (){var G__41762 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41699,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__41699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41762);
} else {
return G__41762;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__41699),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__41699),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__41699),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__41699),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__41699),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$animate$setup_$_iter__41766(s__41767){
return (new cljs.core.LazySeq(null,(function (){
var s__41767__$1 = s__41767;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41767__$1);
if(temp__5804__auto__){
var s__41767__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41767__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__41767__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__41769 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__41768 = (0);
while(true){
if((i__41768 < size__5519__auto__)){
var vec__41776 = cljs.core._nth(c__5518__auto__,i__41768);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41776,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41776,(1),null);
cljs.core.chunk_append(b__41769,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__42301 = (i__41768 + (1));
i__41768 = G__42301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41769),shadow$animate$setup_$_iter__41766(cljs.core.chunk_rest(s__41767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41769),null);
}
} else {
var vec__41796 = cljs.core.first(s__41767__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41796,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41796,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__41766(cljs.core.rest(s__41767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_41820){
var state_val_41821 = (state_41820[(1)]);
if((state_val_41821 === (1))){
var inst_41814 = shadow.animate.get_duration(animator);
var inst_41815 = cljs.core.async.timeout(inst_41814);
var state_41820__$1 = state_41820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41820__$1,(2),inst_41815);
} else {
if((state_val_41821 === (2))){
var inst_41817 = (state_41820[(2)]);
var inst_41818 = shadow.animate.finish_BANG_(animator);
var state_41820__$1 = (function (){var statearr_41828 = state_41820;
(statearr_41828[(7)] = inst_41817);

(statearr_41828[(8)] = inst_41818);

return statearr_41828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41820__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__35925__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__35925__auto____0 = (function (){
var statearr_41847 = [null,null,null,null,null,null,null,null,null];
(statearr_41847[(0)] = shadow$animate$continue_BANG__$_state_machine__35925__auto__);

(statearr_41847[(1)] = (1));

return statearr_41847;
});
var shadow$animate$continue_BANG__$_state_machine__35925__auto____1 = (function (state_41820){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_41820);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e41852){var ex__35928__auto__ = e41852;
var statearr_41853_42324 = state_41820;
(statearr_41853_42324[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_41820[(4)]))){
var statearr_41854_42325 = state_41820;
(statearr_41854_42325[(1)] = cljs.core.first((state_41820[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42326 = state_41820;
state_41820 = G__42326;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__35925__auto__ = function(state_41820){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__35925__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__35925__auto____1.call(this,state_41820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__35925__auto____0;
shadow$animate$continue_BANG__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__35925__auto____1;
return shadow$animate$continue_BANG__$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_41858 = f__36175__auto__();
(statearr_41858[(6)] = c__36174__auto__);

return statearr_41858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__41888 = arguments.length;
switch (G__41888) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate41898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate41898 = (function (attr,from,to,timing,delay,meta41899){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta41899 = meta41899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate41898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41900,meta41899__$1){
var self__ = this;
var _41900__$1 = this;
return (new shadow.animate.t_shadow$animate41898(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta41899__$1));
}));

(shadow.animate.t_shadow$animate41898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41900){
var self__ = this;
var _41900__$1 = this;
return self__.meta41899;
}));

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate41898.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate41898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta41899","meta41899",-1375035810,null)], null);
}));

(shadow.animate.t_shadow$animate41898.cljs$lang$type = true);

(shadow.animate.t_shadow$animate41898.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate41898");

(shadow.animate.t_shadow$animate41898.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate41898");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate41898.
 */
shadow.animate.__GT_t_shadow$animate41898 = (function shadow$animate$__GT_t_shadow$animate41898(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta41899){
return (new shadow.animate.t_shadow$animate41898(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta41899));
});

}

return (new shadow.animate.t_shadow$animate41898(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate41954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate41954 = (function (attr,from,to,meta41955){
this.attr = attr;
this.from = from;
this.to = to;
this.meta41955 = meta41955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate41954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41956,meta41955__$1){
var self__ = this;
var _41956__$1 = this;
return (new shadow.animate.t_shadow$animate41954(self__.attr,self__.from,self__.to,meta41955__$1));
}));

(shadow.animate.t_shadow$animate41954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41956){
var self__ = this;
var _41956__$1 = this;
return self__.meta41955;
}));

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41954.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta41955","meta41955",1541598620,null)], null);
}));

(shadow.animate.t_shadow$animate41954.cljs$lang$type = true);

(shadow.animate.t_shadow$animate41954.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate41954");

(shadow.animate.t_shadow$animate41954.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate41954");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate41954.
 */
shadow.animate.__GT_t_shadow$animate41954 = (function shadow$animate$toggle_$___GT_t_shadow$animate41954(attr__$1,from__$1,to__$1,meta41955){
return (new shadow.animate.t_shadow$animate41954(attr__$1,from__$1,to__$1,meta41955));
});

}

return (new shadow.animate.t_shadow$animate41954(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__41958 = arguments.length;
switch (G__41958) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate41959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate41959 = (function (attrs,meta41960){
this.attrs = attrs;
this.meta41960 = meta41960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate41959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41961,meta41960__$1){
var self__ = this;
var _41961__$1 = this;
return (new shadow.animate.t_shadow$animate41959(self__.attrs,meta41960__$1));
}));

(shadow.animate.t_shadow$animate41959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41961){
var self__ = this;
var _41961__$1 = this;
return self__.meta41960;
}));

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41959.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41960","meta41960",656602405,null)], null);
}));

(shadow.animate.t_shadow$animate41959.cljs$lang$type = true);

(shadow.animate.t_shadow$animate41959.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate41959");

(shadow.animate.t_shadow$animate41959.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate41959");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate41959.
 */
shadow.animate.__GT_t_shadow$animate41959 = (function shadow$animate$__GT_t_shadow$animate41959(attrs__$1,meta41960){
return (new shadow.animate.t_shadow$animate41959(attrs__$1,meta41960));
});

}

return (new shadow.animate.t_shadow$animate41959(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate41967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate41967 = (function (attr,meta41968){
this.attr = attr;
this.meta41968 = meta41968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate41967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41969,meta41968__$1){
var self__ = this;
var _41969__$1 = this;
return (new shadow.animate.t_shadow$animate41967(self__.attr,meta41968__$1));
}));

(shadow.animate.t_shadow$animate41967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41969){
var self__ = this;
var _41969__$1 = this;
return self__.meta41968;
}));

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41967.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate41967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta41968","meta41968",-1802480275,null)], null);
}));

(shadow.animate.t_shadow$animate41967.cljs$lang$type = true);

(shadow.animate.t_shadow$animate41967.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate41967");

(shadow.animate.t_shadow$animate41967.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate41967");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate41967.
 */
shadow.animate.__GT_t_shadow$animate41967 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate41967(attr__$1,meta41968){
return (new shadow.animate.t_shadow$animate41967(attr__$1,meta41968));
});

}

return (new shadow.animate.t_shadow$animate41967(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42335 = arguments.length;
var i__5767__auto___42336 = (0);
while(true){
if((i__5767__auto___42336 < len__5766__auto___42335)){
args__5772__auto__.push((arguments[i__5767__auto___42336]));

var G__42337 = (i__5767__auto___42336 + (1));
i__5767__auto___42336 = G__42337;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5802__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var adef = temp__5802__auto__;
var G__42345 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__42346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__42347 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__42348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__42349 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__42350 = cljs.core.rest(transitions__$1);
to = G__42345;
from = G__42346;
toggles = G__42347;
timings = G__42348;
delays = G__42349;
transitions__$1 = G__42350;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate41985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate41985 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta41986){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta41986 = meta41986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate41985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_41987,meta41986__$1){
var self__ = this;
var _41987__$1 = this;
return (new shadow.animate.t_shadow$animate41985(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta41986__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_41987){
var self__ = this;
var _41987__$1 = this;
return self__.meta41986;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta41986","meta41986",-706972535,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate41985.cljs$lang$type = true);

(shadow.animate.t_shadow$animate41985.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate41985");

(shadow.animate.t_shadow$animate41985.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate41985");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate41985.
 */
shadow.animate.__GT_t_shadow$animate41985 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function shadow$animate$__GT_t_shadow$animate41985(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5802__auto____$1,meta41986){
return (new shadow.animate.t_shadow$animate41985(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5802__auto____$1,meta41986));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
;

}

return (new shadow.animate.t_shadow$animate41985(transitions__$1,to,from,toggles,timings,delays,temp__5802__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq41978){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41978));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__42007 = arguments.length;
switch (G__42007) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__42019 = arguments.length;
switch (G__42019) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__42026 = arguments.length;
switch (G__42026) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate42033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate42033 = (function (from,to,timing,delay,meta42034){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta42034 = meta42034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate42033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42035,meta42034__$1){
var self__ = this;
var _42035__$1 = this;
return (new shadow.animate.t_shadow$animate42033(self__.from,self__.to,self__.timing,self__.delay,meta42034__$1));
}));

(shadow.animate.t_shadow$animate42033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42035){
var self__ = this;
var _42035__$1 = this;
return self__.meta42034;
}));

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate42033.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate42033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta42034","meta42034",2081130240,null)], null);
}));

(shadow.animate.t_shadow$animate42033.cljs$lang$type = true);

(shadow.animate.t_shadow$animate42033.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate42033");

(shadow.animate.t_shadow$animate42033.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate42033");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate42033.
 */
shadow.animate.__GT_t_shadow$animate42033 = (function shadow$animate$__GT_t_shadow$animate42033(from__$1,to__$1,timing__$1,delay__$1,meta42034){
return (new shadow.animate.t_shadow$animate42033(from__$1,to__$1,timing__$1,delay__$1,meta42034));
});

}

return (new shadow.animate.t_shadow$animate42033(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__42106 = arguments.length;
switch (G__42106) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate42129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate42129 = (function (from,to,timing,delay,meta42130){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta42130 = meta42130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate42129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42131,meta42130__$1){
var self__ = this;
var _42131__$1 = this;
return (new shadow.animate.t_shadow$animate42129(self__.from,self__.to,self__.timing,self__.delay,meta42130__$1));
}));

(shadow.animate.t_shadow$animate42129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42131){
var self__ = this;
var _42131__$1 = this;
return self__.meta42130;
}));

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate42129.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate42129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta42130","meta42130",-894050404,null)], null);
}));

(shadow.animate.t_shadow$animate42129.cljs$lang$type = true);

(shadow.animate.t_shadow$animate42129.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate42129");

(shadow.animate.t_shadow$animate42129.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate42129");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate42129.
 */
shadow.animate.__GT_t_shadow$animate42129 = (function shadow$animate$__GT_t_shadow$animate42129(from__$1,to__$1,timing__$1,delay__$1,meta42130){
return (new shadow.animate.t_shadow$animate42129(from__$1,to__$1,timing__$1,delay__$1,meta42130));
});

}

return (new shadow.animate.t_shadow$animate42129(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
