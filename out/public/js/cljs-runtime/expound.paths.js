goog.provide('expound.paths');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_,null));

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
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42888,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42894 = k42888;
var G__42894__$1 = (((G__42894 instanceof cljs.core.Keyword))?G__42894.fqn:null);
switch (G__42894__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42888,else__5343__auto__);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42895){
var vec__42896 = p__42895;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42896,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42896,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42887){
var self__ = this;
var G__42887__$1 = this;
return (new cljs.core.RecordIter((0),G__42887__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (233526946 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42889,other42890){
var self__ = this;
var this42889__$1 = this;
return (((!((other42890 == null)))) && ((((this42889__$1.constructor === other42890.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42889__$1.key,other42890.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42889__$1.__extmap,other42890.__extmap)))))));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42888){
var self__ = this;
var this__5347__auto____$1 = this;
var G__42915 = k42888;
var G__42915__$1 = (((G__42915 instanceof cljs.core.Keyword))?G__42915.fqn:null);
switch (G__42915__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42888);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42887){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42917 = cljs.core.keyword_identical_QMARK_;
var expr__42918 = k__5349__auto__;
if(cljs.core.truth_((pred__42917.cljs$core$IFn$_invoke$arity$2 ? pred__42917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__42918) : pred__42917.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__42918)))){
return (new expound.paths.KeyPathSegment(G__42887,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42887),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42887){
var self__ = this;
var this__5339__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__42887,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(expound.paths.KeyPathSegment.cljs$lang$type = true);

(expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
}));

(expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"expound.paths/KeyPathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__42891){
var extmap__5382__auto__ = (function (){var G__42923 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42891,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__42891)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42923);
} else {
return G__42923;
}
})();
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__42891),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42927,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42931 = k42927;
var G__42931__$1 = (((G__42931 instanceof cljs.core.Keyword))?G__42931.fqn:null);
switch (G__42931__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42927,else__5343__auto__);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42932){
var vec__42935 = p__42932;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42926){
var self__ = this;
var G__42926__$1 = this;
return (new cljs.core.RecordIter((0),G__42926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1269438429 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42928,other42929){
var self__ = this;
var this42928__$1 = this;
return (((!((other42929 == null)))) && ((((this42928__$1.constructor === other42929.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42928__$1.idx,other42929.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42928__$1.__extmap,other42929.__extmap)))))));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42927){
var self__ = this;
var this__5347__auto____$1 = this;
var G__42959 = k42927;
var G__42959__$1 = (((G__42959 instanceof cljs.core.Keyword))?G__42959.fqn:null);
switch (G__42959__$1) {
case "idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42927);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42926){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42962 = cljs.core.keyword_identical_QMARK_;
var expr__42963 = k__5349__auto__;
if(cljs.core.truth_((pred__42962.cljs$core$IFn$_invoke$arity$2 ? pred__42962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__42963) : pred__42962.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__42963)))){
return (new expound.paths.KeyValuePathSegment(G__42926,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42926),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42926){
var self__ = this;
var this__5339__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__42926,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(expound.paths.KeyValuePathSegment.cljs$lang$type = true);

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
}));

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"expound.paths/KeyValuePathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__42930){
var extmap__5382__auto__ = (function (){var G__42975 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42930,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__42930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42975);
} else {
return G__42975;
}
})();
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__42930),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_(x)) && (((cljs.core.fn_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)))))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__5041__auto__ = expound.util.nan_QMARK_(x);
if(cljs.core.truth_(and__5041__auto__)){
return expound.util.nan_QMARK_(y);
} else {
return and__5041__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = expound.paths.fn_equal(x,y);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return expound.paths.both_nan_QMARK_(x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__42998 = in$;
var seq__42999 = cljs.core.seq(vec__42998);
var first__43000 = cljs.core.first(seq__42999);
var seq__42999__$1 = cljs.core.next(seq__42999);
var k = first__43000;
var rst = seq__42999__$1;
var vec__43001 = rst;
var seq__43002 = cljs.core.seq(vec__43001);
var first__43003 = cljs.core.first(seq__43002);
var seq__43002__$1 = cljs.core.next(seq__43002);
var idx = first__43003;
var rst2 = seq__43002__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5041__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5041__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && ((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))))))){
var G__43005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__43006 = val;
var G__43007 = rst;
var G__43008 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43005,G__43006,G__43007,G__43008) : expound.paths.in_with_kps_STAR_.call(null,G__43005,G__43006,G__43007,G__43008));
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && (((cljs.core.int_QMARK_(idx)) && ((((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))) && ((cljs.core.long$(idx) < cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k)))))))))))){
var G__43014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k),idx);
var G__43015 = val;
var G__43016 = rst2;
var G__43017 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx], 0));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43014,G__43015,G__43016,G__43017) : expound.paths.in_with_kps_STAR_.call(null,G__43014,G__43015,G__43016,G__43017));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__43018 = in$;
var seq__43019 = cljs.core.seq(vec__43018);
var first__43020 = cljs.core.first(seq__43019);
var seq__43019__$1 = cljs.core.next(seq__43019);
var k = first__43020;
var rst = seq__43019__$1;
if(((cljs.core.empty_QMARK_(in$)) && (((cljs.core.seqable_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.List.EMPTY)))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_(in$)) && (((cljs.core.seq_QMARK_(val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.first(val))))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.nat_int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__43021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__43022 = val;
var G__43023 = rst;
var G__43024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43021,G__43022,G__43023,G__43024) : expound.paths.in_with_kps_STAR_.call(null,G__43021,G__43022,G__43023,G__43024));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__43051 = in$;
var seq__43052 = cljs.core.seq(vec__43051);
var first__43053 = cljs.core.first(seq__43052);
var seq__43052__$1 = cljs.core.next(seq__43052);
var k = first__43053;
var rst = seq__43052__$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5041__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5041__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__43054 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__43055 = val;
var G__43056 = rst;
var G__43057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43054,G__43055,G__43056,G__43057) : expound.paths.in_with_kps_STAR_.call(null,G__43054,G__43055,G__43056,G__43057));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__43059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__43060 = val;
var G__43061 = rst;
var G__43062 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43059,G__43060,G__43061,G__43062) : expound.paths.in_with_kps_STAR_.call(null,G__43059,G__43060,G__43061,G__43062));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__43064 = in$;
var seq__43065 = cljs.core.seq(vec__43064);
var first__43066 = cljs.core.first(seq__43065);
var seq__43065__$1 = cljs.core.next(seq__43065);
var k = first__43066;
var rst = seq__43065__$1;
var vec__43067 = rst;
var seq__43068 = cljs.core.seq(vec__43067);
var first__43069 = cljs.core.first(seq__43068);
var seq__43068__$1 = cljs.core.next(seq__43068);
var idx = first__43069;
var rst2 = seq__43068__$1;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5041__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5041__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx)))){
var G__43071 = k;
var G__43072 = val;
var G__43073 = rst2;
var G__43074 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43071,G__43072,G__43073,G__43074) : expound.paths.in_with_kps_STAR_.call(null,G__43071,G__43072,G__43073,G__43074));
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),idx)))){
var G__43075 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__43076 = val;
var G__43077 = rst2;
var G__43078 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__43075,G__43076,G__43077,G__43078) : expound.paths.in_with_kps_STAR_.call(null,G__43075,G__43076,G__43077,G__43078));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_(form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
}
}
}
}
}
});
expound.paths.paths_to_value = (function expound$paths$paths_to_value(form,val,path,paths){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,val)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
if(((cljs.core.sequential_QMARK_(form)) || (cljs.core.set_QMARK_(form)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__43088){
var vec__43089 = p__43088;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43089,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43089,(1),null);
var G__43092 = x;
var G__43093 = val;
var G__43094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__43095 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__43092,G__43093,G__43094,G__43095) : expound.paths.paths_to_value.call(null,G__43092,G__43093,G__43094,G__43095));
}),paths,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,form,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__43097){
var vec__43098 = p__43097;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43098,(1),null);
var G__43101 = v;
var G__43102 = val;
var G__43103 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__43104 = (function (){var G__43105 = k;
var G__43106 = val;
var G__43107 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,expound.paths.__GT_KeyPathSegment(k));
var G__43108 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__43105,G__43106,G__43107,G__43108) : expound.paths.paths_to_value.call(null,G__43105,G__43106,G__43107,G__43108));
})();
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__43101,G__43102,G__43103,G__43104) : expound.paths.paths_to_value.call(null,G__43101,G__43102,G__43103,G__43104));
}),paths,form);
} else {
return paths;

}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),res)){
return null;
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(((cljs.core.int_QMARK_(x)) && (expound.paths.kvps_QMARK_(y)))){
return cljs.core.compare(x,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(((expound.paths.kvps_QMARK_(x)) && (cljs.core.int_QMARK_(y)))){
return cljs.core.compare(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(((expound.paths.kps_QMARK_(x)) && ((!(expound.paths.kps_QMARK_(y)))))){
return (-1);
} else {
if((((!(expound.paths.kps_QMARK_(x)))) && (expound.paths.kps_QMARK_(y)))){
return (1);
} else {
if(((cljs.core.vector_QMARK_(x)) && (cljs.core.vector_QMARK_(y)))){
return (expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2 ? expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2(x,y) : expound.paths.compare_paths.call(null,x,y));
} else {
return cljs.core.compare(x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(expound.paths.compare_path_segment,path1,path2)));
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.paths.value_in = (function expound$paths$value_in(form,in$){
while(true){
if((in$ == null)){
return form;
} else {
var vec__43122 = in$;
var seq__43123 = cljs.core.seq(vec__43122);
var first__43124 = cljs.core.first(seq__43123);
var seq__43123__$1 = cljs.core.next(seq__43123);
var k = first__43124;
var rst = seq__43123__$1;
if(cljs.core.empty_QMARK_(in$)){
return form;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
var G__43211 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__43212 = rst;
form = G__43211;
in$ = G__43212;
continue;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__43213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__43214 = rst;
form = G__43213;
in$ = G__43214;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__43215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__43216 = rst;
form = G__43215;
in$ = G__43216;
continue;
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seqable_QMARK_(form)))){
var G__43217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__43218 = rst;
form = G__43217;
in$ = G__43218;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No value found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=expound.paths.js.map
