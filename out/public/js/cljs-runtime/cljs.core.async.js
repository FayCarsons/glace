goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36272 = arguments.length;
switch (G__36272) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36275 = (function (f,blockable,meta36276){
this.f = f;
this.blockable = blockable;
this.meta36276 = meta36276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36277,meta36276__$1){
var self__ = this;
var _36277__$1 = this;
return (new cljs.core.async.t_cljs$core$async36275(self__.f,self__.blockable,meta36276__$1));
}));

(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36277){
var self__ = this;
var _36277__$1 = this;
return self__.meta36276;
}));

(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36276","meta36276",284885716,null)], null);
}));

(cljs.core.async.t_cljs$core$async36275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36275");

(cljs.core.async.t_cljs$core$async36275.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36275.
 */
cljs.core.async.__GT_t_cljs$core$async36275 = (function cljs$core$async$__GT_t_cljs$core$async36275(f__$1,blockable__$1,meta36276){
return (new cljs.core.async.t_cljs$core$async36275(f__$1,blockable__$1,meta36276));
});

}

return (new cljs.core.async.t_cljs$core$async36275(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36324 = arguments.length;
switch (G__36324) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36354 = arguments.length;
switch (G__36354) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36372 = arguments.length;
switch (G__36372) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39459 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39459) : fn1.call(null,val_39459));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39459) : fn1.call(null,val_39459));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36384 = arguments.length;
switch (G__36384) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___39463 = n;
var x_39464 = (0);
while(true){
if((x_39464 < n__5633__auto___39463)){
(a[x_39464] = x_39464);

var G__39465 = (x_39464 + (1));
x_39464 = G__39465;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36407 = (function (flag,meta36408){
this.flag = flag;
this.meta36408 = meta36408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36409,meta36408__$1){
var self__ = this;
var _36409__$1 = this;
return (new cljs.core.async.t_cljs$core$async36407(self__.flag,meta36408__$1));
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36409){
var self__ = this;
var _36409__$1 = this;
return self__.meta36408;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36408","meta36408",-1637216098,null)], null);
}));

(cljs.core.async.t_cljs$core$async36407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36407");

(cljs.core.async.t_cljs$core$async36407.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36407.
 */
cljs.core.async.__GT_t_cljs$core$async36407 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36407(flag__$1,meta36408){
return (new cljs.core.async.t_cljs$core$async36407(flag__$1,meta36408));
});

}

return (new cljs.core.async.t_cljs$core$async36407(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36425 = (function (flag,cb,meta36426){
this.flag = flag;
this.cb = cb;
this.meta36426 = meta36426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36427,meta36426__$1){
var self__ = this;
var _36427__$1 = this;
return (new cljs.core.async.t_cljs$core$async36425(self__.flag,self__.cb,meta36426__$1));
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36427){
var self__ = this;
var _36427__$1 = this;
return self__.meta36426;
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36426","meta36426",-298898492,null)], null);
}));

(cljs.core.async.t_cljs$core$async36425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36425");

(cljs.core.async.t_cljs$core$async36425.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36425.
 */
cljs.core.async.__GT_t_cljs$core$async36425 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36425(flag__$1,cb__$1,meta36426){
return (new cljs.core.async.t_cljs$core$async36425(flag__$1,cb__$1,meta36426));
});

}

return (new cljs.core.async.t_cljs$core$async36425(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36446_SHARP_){
var G__36451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36446_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36451) : fret.call(null,G__36451));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36447_SHARP_){
var G__36454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36447_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36454) : fret.call(null,G__36454));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39470 = (i + (1));
i = G__39470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39473 = arguments.length;
var i__5767__auto___39474 = (0);
while(true){
if((i__5767__auto___39474 < len__5766__auto___39473)){
args__5772__auto__.push((arguments[i__5767__auto___39474]));

var G__39475 = (i__5767__auto___39474 + (1));
i__5767__auto___39474 = G__39475;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36475){
var map__36476 = p__36475;
var map__36476__$1 = cljs.core.__destructure_map(map__36476);
var opts = map__36476__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36469){
var G__36470 = cljs.core.first(seq36469);
var seq36469__$1 = cljs.core.next(seq36469);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36470,seq36469__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36483 = arguments.length;
switch (G__36483) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36174__auto___39482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_36526){
var state_val_36527 = (state_36526[(1)]);
if((state_val_36527 === (7))){
var inst_36519 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
var statearr_36535_39486 = state_36526__$1;
(statearr_36535_39486[(2)] = inst_36519);

(statearr_36535_39486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (1))){
var state_36526__$1 = state_36526;
var statearr_36537_39489 = state_36526__$1;
(statearr_36537_39489[(2)] = null);

(statearr_36537_39489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (4))){
var inst_36497 = (state_36526[(7)]);
var inst_36497__$1 = (state_36526[(2)]);
var inst_36501 = (inst_36497__$1 == null);
var state_36526__$1 = (function (){var statearr_36541 = state_36526;
(statearr_36541[(7)] = inst_36497__$1);

return statearr_36541;
})();
if(cljs.core.truth_(inst_36501)){
var statearr_36542_39490 = state_36526__$1;
(statearr_36542_39490[(1)] = (5));

} else {
var statearr_36543_39491 = state_36526__$1;
(statearr_36543_39491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (13))){
var state_36526__$1 = state_36526;
var statearr_36548_39492 = state_36526__$1;
(statearr_36548_39492[(2)] = null);

(statearr_36548_39492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (6))){
var inst_36497 = (state_36526[(7)]);
var state_36526__$1 = state_36526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36526__$1,(11),to,inst_36497);
} else {
if((state_val_36527 === (3))){
var inst_36524 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36526__$1,inst_36524);
} else {
if((state_val_36527 === (12))){
var state_36526__$1 = state_36526;
var statearr_36549_39493 = state_36526__$1;
(statearr_36549_39493[(2)] = null);

(statearr_36549_39493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (2))){
var state_36526__$1 = state_36526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36526__$1,(4),from);
} else {
if((state_val_36527 === (11))){
var inst_36511 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
if(cljs.core.truth_(inst_36511)){
var statearr_36550_39496 = state_36526__$1;
(statearr_36550_39496[(1)] = (12));

} else {
var statearr_36551_39497 = state_36526__$1;
(statearr_36551_39497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (9))){
var state_36526__$1 = state_36526;
var statearr_36552_39498 = state_36526__$1;
(statearr_36552_39498[(2)] = null);

(statearr_36552_39498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (5))){
var state_36526__$1 = state_36526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36553_39499 = state_36526__$1;
(statearr_36553_39499[(1)] = (8));

} else {
var statearr_36554_39500 = state_36526__$1;
(statearr_36554_39500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (14))){
var inst_36517 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
var statearr_36555_39505 = state_36526__$1;
(statearr_36555_39505[(2)] = inst_36517);

(statearr_36555_39505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (10))){
var inst_36508 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
var statearr_36559_39507 = state_36526__$1;
(statearr_36559_39507[(2)] = inst_36508);

(statearr_36559_39507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (8))){
var inst_36505 = cljs.core.async.close_BANG_(to);
var state_36526__$1 = state_36526;
var statearr_36560_39511 = state_36526__$1;
(statearr_36560_39511[(2)] = inst_36505);

(statearr_36560_39511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_36562 = [null,null,null,null,null,null,null,null];
(statearr_36562[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_36562[(1)] = (1));

return statearr_36562;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_36526){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36526);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36567){var ex__35928__auto__ = e36567;
var statearr_36570_39515 = state_36526;
(statearr_36570_39515[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36526[(4)]))){
var statearr_36575_39516 = state_36526;
(statearr_36575_39516[(1)] = cljs.core.first((state_36526[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39517 = state_36526;
state_36526 = G__39517;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_36526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_36526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_36576 = f__36175__auto__();
(statearr_36576[(6)] = c__36174__auto___39482);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__36577){
var vec__36578 = p__36577;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36578,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36578,(1),null);
var job = vec__36578;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36174__auto___39529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_36585){
var state_val_36586 = (state_36585[(1)]);
if((state_val_36586 === (1))){
var state_36585__$1 = state_36585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36585__$1,(2),res,v);
} else {
if((state_val_36586 === (2))){
var inst_36582 = (state_36585[(2)]);
var inst_36583 = cljs.core.async.close_BANG_(res);
var state_36585__$1 = (function (){var statearr_36592 = state_36585;
(statearr_36592[(7)] = inst_36582);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36585__$1,inst_36583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_36593 = [null,null,null,null,null,null,null,null];
(statearr_36593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__);

(statearr_36593[(1)] = (1));

return statearr_36593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1 = (function (state_36585){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36585);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36596){var ex__35928__auto__ = e36596;
var statearr_36597_39542 = state_36585;
(statearr_36597_39542[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36585[(4)]))){
var statearr_36598_39544 = state_36585;
(statearr_36598_39544[(1)] = cljs.core.first((state_36585[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39548 = state_36585;
state_36585 = G__39548;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = function(state_36585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1.call(this,state_36585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_36604 = f__36175__auto__();
(statearr_36604[(6)] = c__36174__auto___39529);

return statearr_36604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36607){
var vec__36608 = p__36607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36608,(1),null);
var job = vec__36608;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___39550 = n;
var __39551 = (0);
while(true){
if((__39551 < n__5633__auto___39550)){
var G__36611_39552 = type;
var G__36611_39553__$1 = (((G__36611_39552 instanceof cljs.core.Keyword))?G__36611_39552.fqn:null);
switch (G__36611_39553__$1) {
case "compute":
var c__36174__auto___39555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39551,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = ((function (__39551,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (state_36624){
var state_val_36625 = (state_36624[(1)]);
if((state_val_36625 === (1))){
var state_36624__$1 = state_36624;
var statearr_36627_39556 = state_36624__$1;
(statearr_36627_39556[(2)] = null);

(statearr_36627_39556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (2))){
var state_36624__$1 = state_36624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36624__$1,(4),jobs);
} else {
if((state_val_36625 === (3))){
var inst_36622 = (state_36624[(2)]);
var state_36624__$1 = state_36624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36624__$1,inst_36622);
} else {
if((state_val_36625 === (4))){
var inst_36614 = (state_36624[(2)]);
var inst_36615 = process__$1(inst_36614);
var state_36624__$1 = state_36624;
if(cljs.core.truth_(inst_36615)){
var statearr_36631_39563 = state_36624__$1;
(statearr_36631_39563[(1)] = (5));

} else {
var statearr_36632_39564 = state_36624__$1;
(statearr_36632_39564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (5))){
var state_36624__$1 = state_36624;
var statearr_36637_39569 = state_36624__$1;
(statearr_36637_39569[(2)] = null);

(statearr_36637_39569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (6))){
var state_36624__$1 = state_36624;
var statearr_36638_39571 = state_36624__$1;
(statearr_36638_39571[(2)] = null);

(statearr_36638_39571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36625 === (7))){
var inst_36620 = (state_36624[(2)]);
var state_36624__$1 = state_36624;
var statearr_36639_39576 = state_36624__$1;
(statearr_36639_39576[(2)] = inst_36620);

(statearr_36639_39576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39551,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
;
return ((function (__39551,switch__35924__auto__,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_36643 = [null,null,null,null,null,null,null];
(statearr_36643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__);

(statearr_36643[(1)] = (1));

return statearr_36643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1 = (function (state_36624){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36624);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36644){var ex__35928__auto__ = e36644;
var statearr_36645_39579 = state_36624;
(statearr_36645_39579[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36624[(4)]))){
var statearr_36646_39581 = state_36624;
(statearr_36646_39581[(1)] = cljs.core.first((state_36624[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39582 = state_36624;
state_36624 = G__39582;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = function(state_36624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1.call(this,state_36624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__;
})()
;})(__39551,switch__35924__auto__,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
})();
var state__36176__auto__ = (function (){var statearr_36647 = f__36175__auto__();
(statearr_36647[(6)] = c__36174__auto___39555);

return statearr_36647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
});})(__39551,c__36174__auto___39555,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
);


break;
case "async":
var c__36174__auto___39585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39551,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = ((function (__39551,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function (state_36664){
var state_val_36665 = (state_36664[(1)]);
if((state_val_36665 === (1))){
var state_36664__$1 = state_36664;
var statearr_36666_39587 = state_36664__$1;
(statearr_36666_39587[(2)] = null);

(statearr_36666_39587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (2))){
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36664__$1,(4),jobs);
} else {
if((state_val_36665 === (3))){
var inst_36662 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36664__$1,inst_36662);
} else {
if((state_val_36665 === (4))){
var inst_36654 = (state_36664[(2)]);
var inst_36655 = async(inst_36654);
var state_36664__$1 = state_36664;
if(cljs.core.truth_(inst_36655)){
var statearr_36667_39592 = state_36664__$1;
(statearr_36667_39592[(1)] = (5));

} else {
var statearr_36668_39593 = state_36664__$1;
(statearr_36668_39593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (5))){
var state_36664__$1 = state_36664;
var statearr_36672_39595 = state_36664__$1;
(statearr_36672_39595[(2)] = null);

(statearr_36672_39595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (6))){
var state_36664__$1 = state_36664;
var statearr_36673_39598 = state_36664__$1;
(statearr_36673_39598[(2)] = null);

(statearr_36673_39598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36665 === (7))){
var inst_36660 = (state_36664[(2)]);
var state_36664__$1 = state_36664;
var statearr_36674_39600 = state_36664__$1;
(statearr_36674_39600[(2)] = inst_36660);

(statearr_36674_39600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39551,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
;
return ((function (__39551,switch__35924__auto__,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_36679 = [null,null,null,null,null,null,null];
(statearr_36679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__);

(statearr_36679[(1)] = (1));

return statearr_36679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1 = (function (state_36664){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36664);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36680){var ex__35928__auto__ = e36680;
var statearr_36681_39604 = state_36664;
(statearr_36681_39604[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36664[(4)]))){
var statearr_36682_39605 = state_36664;
(statearr_36682_39605[(1)] = cljs.core.first((state_36664[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39606 = state_36664;
state_36664 = G__39606;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = function(state_36664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1.call(this,state_36664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__;
})()
;})(__39551,switch__35924__auto__,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
})();
var state__36176__auto__ = (function (){var statearr_36683 = f__36175__auto__();
(statearr_36683[(6)] = c__36174__auto___39585);

return statearr_36683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
});})(__39551,c__36174__auto___39585,G__36611_39552,G__36611_39553__$1,n__5633__auto___39550,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36611_39553__$1)].join('')));

}

var G__39607 = (__39551 + (1));
__39551 = G__39607;
continue;
} else {
}
break;
}

var c__36174__auto___39608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_36716){
var state_val_36717 = (state_36716[(1)]);
if((state_val_36717 === (7))){
var inst_36710 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
var statearr_36736_39609 = state_36716__$1;
(statearr_36736_39609[(2)] = inst_36710);

(statearr_36736_39609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (1))){
var state_36716__$1 = state_36716;
var statearr_36752_39610 = state_36716__$1;
(statearr_36752_39610[(2)] = null);

(statearr_36752_39610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (4))){
var inst_36686 = (state_36716[(7)]);
var inst_36686__$1 = (state_36716[(2)]);
var inst_36687 = (inst_36686__$1 == null);
var state_36716__$1 = (function (){var statearr_36754 = state_36716;
(statearr_36754[(7)] = inst_36686__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36687)){
var statearr_36755_39615 = state_36716__$1;
(statearr_36755_39615[(1)] = (5));

} else {
var statearr_36756_39617 = state_36716__$1;
(statearr_36756_39617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (6))){
var inst_36691 = (state_36716[(8)]);
var inst_36686 = (state_36716[(7)]);
var inst_36691__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36700 = [inst_36686,inst_36691__$1];
var inst_36701 = (new cljs.core.PersistentVector(null,2,(5),inst_36699,inst_36700,null));
var state_36716__$1 = (function (){var statearr_36763 = state_36716;
(statearr_36763[(8)] = inst_36691__$1);

return statearr_36763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36716__$1,(8),jobs,inst_36701);
} else {
if((state_val_36717 === (3))){
var inst_36712 = (state_36716[(2)]);
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36716__$1,inst_36712);
} else {
if((state_val_36717 === (2))){
var state_36716__$1 = state_36716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36716__$1,(4),from);
} else {
if((state_val_36717 === (9))){
var inst_36705 = (state_36716[(2)]);
var state_36716__$1 = (function (){var statearr_36767 = state_36716;
(statearr_36767[(9)] = inst_36705);

return statearr_36767;
})();
var statearr_36768_39625 = state_36716__$1;
(statearr_36768_39625[(2)] = null);

(statearr_36768_39625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (5))){
var inst_36689 = cljs.core.async.close_BANG_(jobs);
var state_36716__$1 = state_36716;
var statearr_36771_39628 = state_36716__$1;
(statearr_36771_39628[(2)] = inst_36689);

(statearr_36771_39628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (8))){
var inst_36691 = (state_36716[(8)]);
var inst_36703 = (state_36716[(2)]);
var state_36716__$1 = (function (){var statearr_36772 = state_36716;
(statearr_36772[(10)] = inst_36703);

return statearr_36772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36716__$1,(9),results,inst_36691);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_36773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__);

(statearr_36773[(1)] = (1));

return statearr_36773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1 = (function (state_36716){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36716);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36774){var ex__35928__auto__ = e36774;
var statearr_36775_39642 = state_36716;
(statearr_36775_39642[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36716[(4)]))){
var statearr_36782_39643 = state_36716;
(statearr_36782_39643[(1)] = cljs.core.first((state_36716[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39644 = state_36716;
state_36716 = G__39644;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = function(state_36716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1.call(this,state_36716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_36784 = f__36175__auto__();
(statearr_36784[(6)] = c__36174__auto___39608);

return statearr_36784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_36824){
var state_val_36825 = (state_36824[(1)]);
if((state_val_36825 === (7))){
var inst_36820 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36826_39648 = state_36824__$1;
(statearr_36826_39648[(2)] = inst_36820);

(statearr_36826_39648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (20))){
var state_36824__$1 = state_36824;
var statearr_36827_39649 = state_36824__$1;
(statearr_36827_39649[(2)] = null);

(statearr_36827_39649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (1))){
var state_36824__$1 = state_36824;
var statearr_36828_39651 = state_36824__$1;
(statearr_36828_39651[(2)] = null);

(statearr_36828_39651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (4))){
var inst_36787 = (state_36824[(7)]);
var inst_36787__$1 = (state_36824[(2)]);
var inst_36788 = (inst_36787__$1 == null);
var state_36824__$1 = (function (){var statearr_36829 = state_36824;
(statearr_36829[(7)] = inst_36787__$1);

return statearr_36829;
})();
if(cljs.core.truth_(inst_36788)){
var statearr_36830_39654 = state_36824__$1;
(statearr_36830_39654[(1)] = (5));

} else {
var statearr_36831_39656 = state_36824__$1;
(statearr_36831_39656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (15))){
var inst_36801 = (state_36824[(8)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36824__$1,(18),to,inst_36801);
} else {
if((state_val_36825 === (21))){
var inst_36815 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36836_39661 = state_36824__$1;
(statearr_36836_39661[(2)] = inst_36815);

(statearr_36836_39661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (13))){
var inst_36817 = (state_36824[(2)]);
var state_36824__$1 = (function (){var statearr_36837 = state_36824;
(statearr_36837[(9)] = inst_36817);

return statearr_36837;
})();
var statearr_36838_39665 = state_36824__$1;
(statearr_36838_39665[(2)] = null);

(statearr_36838_39665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (6))){
var inst_36787 = (state_36824[(7)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36824__$1,(11),inst_36787);
} else {
if((state_val_36825 === (17))){
var inst_36810 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
if(cljs.core.truth_(inst_36810)){
var statearr_36842_39670 = state_36824__$1;
(statearr_36842_39670[(1)] = (19));

} else {
var statearr_36843_39671 = state_36824__$1;
(statearr_36843_39671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (3))){
var inst_36822 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36824__$1,inst_36822);
} else {
if((state_val_36825 === (12))){
var inst_36798 = (state_36824[(10)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36824__$1,(14),inst_36798);
} else {
if((state_val_36825 === (2))){
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36824__$1,(4),results);
} else {
if((state_val_36825 === (19))){
var state_36824__$1 = state_36824;
var statearr_36845_39672 = state_36824__$1;
(statearr_36845_39672[(2)] = null);

(statearr_36845_39672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (11))){
var inst_36798 = (state_36824[(2)]);
var state_36824__$1 = (function (){var statearr_36846 = state_36824;
(statearr_36846[(10)] = inst_36798);

return statearr_36846;
})();
var statearr_36847_39677 = state_36824__$1;
(statearr_36847_39677[(2)] = null);

(statearr_36847_39677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (9))){
var state_36824__$1 = state_36824;
var statearr_36848_39683 = state_36824__$1;
(statearr_36848_39683[(2)] = null);

(statearr_36848_39683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (5))){
var state_36824__$1 = state_36824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36849_39687 = state_36824__$1;
(statearr_36849_39687[(1)] = (8));

} else {
var statearr_36851_39688 = state_36824__$1;
(statearr_36851_39688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (14))){
var inst_36801 = (state_36824[(8)]);
var inst_36804 = (state_36824[(11)]);
var inst_36801__$1 = (state_36824[(2)]);
var inst_36803 = (inst_36801__$1 == null);
var inst_36804__$1 = cljs.core.not(inst_36803);
var state_36824__$1 = (function (){var statearr_36853 = state_36824;
(statearr_36853[(8)] = inst_36801__$1);

(statearr_36853[(11)] = inst_36804__$1);

return statearr_36853;
})();
if(inst_36804__$1){
var statearr_36854_39692 = state_36824__$1;
(statearr_36854_39692[(1)] = (15));

} else {
var statearr_36855_39694 = state_36824__$1;
(statearr_36855_39694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (16))){
var inst_36804 = (state_36824[(11)]);
var state_36824__$1 = state_36824;
var statearr_36856_39698 = state_36824__$1;
(statearr_36856_39698[(2)] = inst_36804);

(statearr_36856_39698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (10))){
var inst_36795 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36857_39702 = state_36824__$1;
(statearr_36857_39702[(2)] = inst_36795);

(statearr_36857_39702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (18))){
var inst_36807 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36858_39706 = state_36824__$1;
(statearr_36858_39706[(2)] = inst_36807);

(statearr_36858_39706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (8))){
var inst_36792 = cljs.core.async.close_BANG_(to);
var state_36824__$1 = state_36824;
var statearr_36859_39708 = state_36824__$1;
(statearr_36859_39708[(2)] = inst_36792);

(statearr_36859_39708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_36863 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__);

(statearr_36863[(1)] = (1));

return statearr_36863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1 = (function (state_36824){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36824);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36864){var ex__35928__auto__ = e36864;
var statearr_36865_39717 = state_36824;
(statearr_36865_39717[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36824[(4)]))){
var statearr_36866_39720 = state_36824;
(statearr_36866_39720[(1)] = cljs.core.first((state_36824[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39722 = state_36824;
state_36824 = G__39722;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__ = function(state_36824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1.call(this,state_36824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_36867 = f__36175__auto__();
(statearr_36867[(6)] = c__36174__auto__);

return statearr_36867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36869 = arguments.length;
switch (G__36869) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36883 = arguments.length;
switch (G__36883) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36900 = arguments.length;
switch (G__36900) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36174__auto___39746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_36932){
var state_val_36933 = (state_36932[(1)]);
if((state_val_36933 === (7))){
var inst_36928 = (state_36932[(2)]);
var state_36932__$1 = state_36932;
var statearr_36941_39749 = state_36932__$1;
(statearr_36941_39749[(2)] = inst_36928);

(statearr_36941_39749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (1))){
var state_36932__$1 = state_36932;
var statearr_36942_39754 = state_36932__$1;
(statearr_36942_39754[(2)] = null);

(statearr_36942_39754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (4))){
var inst_36909 = (state_36932[(7)]);
var inst_36909__$1 = (state_36932[(2)]);
var inst_36910 = (inst_36909__$1 == null);
var state_36932__$1 = (function (){var statearr_36943 = state_36932;
(statearr_36943[(7)] = inst_36909__$1);

return statearr_36943;
})();
if(cljs.core.truth_(inst_36910)){
var statearr_36944_39756 = state_36932__$1;
(statearr_36944_39756[(1)] = (5));

} else {
var statearr_36945_39757 = state_36932__$1;
(statearr_36945_39757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (13))){
var state_36932__$1 = state_36932;
var statearr_36946_39760 = state_36932__$1;
(statearr_36946_39760[(2)] = null);

(statearr_36946_39760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (6))){
var inst_36909 = (state_36932[(7)]);
var inst_36915 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36909) : p.call(null,inst_36909));
var state_36932__$1 = state_36932;
if(cljs.core.truth_(inst_36915)){
var statearr_36952_39765 = state_36932__$1;
(statearr_36952_39765[(1)] = (9));

} else {
var statearr_36953_39766 = state_36932__$1;
(statearr_36953_39766[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (3))){
var inst_36930 = (state_36932[(2)]);
var state_36932__$1 = state_36932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36932__$1,inst_36930);
} else {
if((state_val_36933 === (12))){
var state_36932__$1 = state_36932;
var statearr_36957_39774 = state_36932__$1;
(statearr_36957_39774[(2)] = null);

(statearr_36957_39774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (2))){
var state_36932__$1 = state_36932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36932__$1,(4),ch);
} else {
if((state_val_36933 === (11))){
var inst_36909 = (state_36932[(7)]);
var inst_36919 = (state_36932[(2)]);
var state_36932__$1 = state_36932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36932__$1,(8),inst_36919,inst_36909);
} else {
if((state_val_36933 === (9))){
var state_36932__$1 = state_36932;
var statearr_36961_39781 = state_36932__$1;
(statearr_36961_39781[(2)] = tc);

(statearr_36961_39781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (5))){
var inst_36912 = cljs.core.async.close_BANG_(tc);
var inst_36913 = cljs.core.async.close_BANG_(fc);
var state_36932__$1 = (function (){var statearr_36962 = state_36932;
(statearr_36962[(8)] = inst_36912);

return statearr_36962;
})();
var statearr_36963_39783 = state_36932__$1;
(statearr_36963_39783[(2)] = inst_36913);

(statearr_36963_39783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (14))){
var inst_36926 = (state_36932[(2)]);
var state_36932__$1 = state_36932;
var statearr_36964_39789 = state_36932__$1;
(statearr_36964_39789[(2)] = inst_36926);

(statearr_36964_39789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (10))){
var state_36932__$1 = state_36932;
var statearr_36969_39794 = state_36932__$1;
(statearr_36969_39794[(2)] = fc);

(statearr_36969_39794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36933 === (8))){
var inst_36921 = (state_36932[(2)]);
var state_36932__$1 = state_36932;
if(cljs.core.truth_(inst_36921)){
var statearr_36970_39799 = state_36932__$1;
(statearr_36970_39799[(1)] = (12));

} else {
var statearr_36971_39800 = state_36932__$1;
(statearr_36971_39800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_36972 = [null,null,null,null,null,null,null,null,null];
(statearr_36972[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_36972[(1)] = (1));

return statearr_36972;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_36932){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_36932);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e36973){var ex__35928__auto__ = e36973;
var statearr_36974_39807 = state_36932;
(statearr_36974_39807[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_36932[(4)]))){
var statearr_36975_39808 = state_36932;
(statearr_36975_39808[(1)] = cljs.core.first((state_36932[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39812 = state_36932;
state_36932 = G__39812;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_36932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_36932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_36981 = f__36175__auto__();
(statearr_36981[(6)] = c__36174__auto___39746);

return statearr_36981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_37003){
var state_val_37004 = (state_37003[(1)]);
if((state_val_37004 === (7))){
var inst_36999 = (state_37003[(2)]);
var state_37003__$1 = state_37003;
var statearr_37011_39819 = state_37003__$1;
(statearr_37011_39819[(2)] = inst_36999);

(statearr_37011_39819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (1))){
var inst_36982 = init;
var inst_36983 = inst_36982;
var state_37003__$1 = (function (){var statearr_37012 = state_37003;
(statearr_37012[(7)] = inst_36983);

return statearr_37012;
})();
var statearr_37013_39825 = state_37003__$1;
(statearr_37013_39825[(2)] = null);

(statearr_37013_39825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (4))){
var inst_36986 = (state_37003[(8)]);
var inst_36986__$1 = (state_37003[(2)]);
var inst_36987 = (inst_36986__$1 == null);
var state_37003__$1 = (function (){var statearr_37014 = state_37003;
(statearr_37014[(8)] = inst_36986__$1);

return statearr_37014;
})();
if(cljs.core.truth_(inst_36987)){
var statearr_37015_39834 = state_37003__$1;
(statearr_37015_39834[(1)] = (5));

} else {
var statearr_37016_39835 = state_37003__$1;
(statearr_37016_39835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (6))){
var inst_36986 = (state_37003[(8)]);
var inst_36990 = (state_37003[(9)]);
var inst_36983 = (state_37003[(7)]);
var inst_36990__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36983,inst_36986) : f.call(null,inst_36983,inst_36986));
var inst_36991 = cljs.core.reduced_QMARK_(inst_36990__$1);
var state_37003__$1 = (function (){var statearr_37017 = state_37003;
(statearr_37017[(9)] = inst_36990__$1);

return statearr_37017;
})();
if(inst_36991){
var statearr_37018_39840 = state_37003__$1;
(statearr_37018_39840[(1)] = (8));

} else {
var statearr_37019_39841 = state_37003__$1;
(statearr_37019_39841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (3))){
var inst_37001 = (state_37003[(2)]);
var state_37003__$1 = state_37003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37003__$1,inst_37001);
} else {
if((state_val_37004 === (2))){
var state_37003__$1 = state_37003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37003__$1,(4),ch);
} else {
if((state_val_37004 === (9))){
var inst_36990 = (state_37003[(9)]);
var inst_36983 = inst_36990;
var state_37003__$1 = (function (){var statearr_37021 = state_37003;
(statearr_37021[(7)] = inst_36983);

return statearr_37021;
})();
var statearr_37022_39844 = state_37003__$1;
(statearr_37022_39844[(2)] = null);

(statearr_37022_39844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (5))){
var inst_36983 = (state_37003[(7)]);
var state_37003__$1 = state_37003;
var statearr_37024_39845 = state_37003__$1;
(statearr_37024_39845[(2)] = inst_36983);

(statearr_37024_39845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (10))){
var inst_36997 = (state_37003[(2)]);
var state_37003__$1 = state_37003;
var statearr_37026_39846 = state_37003__$1;
(statearr_37026_39846[(2)] = inst_36997);

(statearr_37026_39846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37004 === (8))){
var inst_36990 = (state_37003[(9)]);
var inst_36993 = cljs.core.deref(inst_36990);
var state_37003__$1 = state_37003;
var statearr_37031_39850 = state_37003__$1;
(statearr_37031_39850[(2)] = inst_36993);

(statearr_37031_39850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35925__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35925__auto____0 = (function (){
var statearr_37032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37032[(0)] = cljs$core$async$reduce_$_state_machine__35925__auto__);

(statearr_37032[(1)] = (1));

return statearr_37032;
});
var cljs$core$async$reduce_$_state_machine__35925__auto____1 = (function (state_37003){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_37003);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e37033){var ex__35928__auto__ = e37033;
var statearr_37034_39851 = state_37003;
(statearr_37034_39851[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_37003[(4)]))){
var statearr_37035_39855 = state_37003;
(statearr_37035_39855[(1)] = cljs.core.first((state_37003[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39858 = state_37003;
state_37003 = G__39858;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35925__auto__ = function(state_37003){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35925__auto____1.call(this,state_37003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35925__auto____0;
cljs$core$async$reduce_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35925__auto____1;
return cljs$core$async$reduce_$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_37037 = f__36175__auto__();
(statearr_37037[(6)] = c__36174__auto__);

return statearr_37037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_37047){
var state_val_37048 = (state_37047[(1)]);
if((state_val_37048 === (1))){
var inst_37038 = cljs.core.async.reduce(f__$1,init,ch);
var state_37047__$1 = state_37047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37047__$1,(2),inst_37038);
} else {
if((state_val_37048 === (2))){
var inst_37040 = (state_37047[(2)]);
var inst_37041 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37040) : f__$1.call(null,inst_37040));
var state_37047__$1 = state_37047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37047__$1,inst_37041);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35925__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35925__auto____0 = (function (){
var statearr_37055 = [null,null,null,null,null,null,null];
(statearr_37055[(0)] = cljs$core$async$transduce_$_state_machine__35925__auto__);

(statearr_37055[(1)] = (1));

return statearr_37055;
});
var cljs$core$async$transduce_$_state_machine__35925__auto____1 = (function (state_37047){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_37047);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e37057){var ex__35928__auto__ = e37057;
var statearr_37058_39872 = state_37047;
(statearr_37058_39872[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_37047[(4)]))){
var statearr_37065_39873 = state_37047;
(statearr_37065_39873[(1)] = cljs.core.first((state_37047[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39874 = state_37047;
state_37047 = G__39874;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35925__auto__ = function(state_37047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35925__auto____1.call(this,state_37047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35925__auto____0;
cljs$core$async$transduce_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35925__auto____1;
return cljs$core$async$transduce_$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_37069 = f__36175__auto__();
(statearr_37069[(6)] = c__36174__auto__);

return statearr_37069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37085 = arguments.length;
switch (G__37085) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_37135){
var state_val_37136 = (state_37135[(1)]);
if((state_val_37136 === (7))){
var inst_37117 = (state_37135[(2)]);
var state_37135__$1 = state_37135;
var statearr_37138_39876 = state_37135__$1;
(statearr_37138_39876[(2)] = inst_37117);

(statearr_37138_39876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (1))){
var inst_37111 = cljs.core.seq(coll);
var inst_37112 = inst_37111;
var state_37135__$1 = (function (){var statearr_37142 = state_37135;
(statearr_37142[(7)] = inst_37112);

return statearr_37142;
})();
var statearr_37143_39878 = state_37135__$1;
(statearr_37143_39878[(2)] = null);

(statearr_37143_39878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (4))){
var inst_37112 = (state_37135[(7)]);
var inst_37115 = cljs.core.first(inst_37112);
var state_37135__$1 = state_37135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37135__$1,(7),ch,inst_37115);
} else {
if((state_val_37136 === (13))){
var inst_37129 = (state_37135[(2)]);
var state_37135__$1 = state_37135;
var statearr_37144_39879 = state_37135__$1;
(statearr_37144_39879[(2)] = inst_37129);

(statearr_37144_39879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (6))){
var inst_37120 = (state_37135[(2)]);
var state_37135__$1 = state_37135;
if(cljs.core.truth_(inst_37120)){
var statearr_37145_39880 = state_37135__$1;
(statearr_37145_39880[(1)] = (8));

} else {
var statearr_37146_39881 = state_37135__$1;
(statearr_37146_39881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (3))){
var inst_37133 = (state_37135[(2)]);
var state_37135__$1 = state_37135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37135__$1,inst_37133);
} else {
if((state_val_37136 === (12))){
var state_37135__$1 = state_37135;
var statearr_37157_39883 = state_37135__$1;
(statearr_37157_39883[(2)] = null);

(statearr_37157_39883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (2))){
var inst_37112 = (state_37135[(7)]);
var state_37135__$1 = state_37135;
if(cljs.core.truth_(inst_37112)){
var statearr_37166_39884 = state_37135__$1;
(statearr_37166_39884[(1)] = (4));

} else {
var statearr_37171_39885 = state_37135__$1;
(statearr_37171_39885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (11))){
var inst_37126 = cljs.core.async.close_BANG_(ch);
var state_37135__$1 = state_37135;
var statearr_37172_39886 = state_37135__$1;
(statearr_37172_39886[(2)] = inst_37126);

(statearr_37172_39886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (9))){
var state_37135__$1 = state_37135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37173_39888 = state_37135__$1;
(statearr_37173_39888[(1)] = (11));

} else {
var statearr_37174_39889 = state_37135__$1;
(statearr_37174_39889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (5))){
var inst_37112 = (state_37135[(7)]);
var state_37135__$1 = state_37135;
var statearr_37179_39890 = state_37135__$1;
(statearr_37179_39890[(2)] = inst_37112);

(statearr_37179_39890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (10))){
var inst_37131 = (state_37135[(2)]);
var state_37135__$1 = state_37135;
var statearr_37187_39891 = state_37135__$1;
(statearr_37187_39891[(2)] = inst_37131);

(statearr_37187_39891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37136 === (8))){
var inst_37112 = (state_37135[(7)]);
var inst_37122 = cljs.core.next(inst_37112);
var inst_37112__$1 = inst_37122;
var state_37135__$1 = (function (){var statearr_37198 = state_37135;
(statearr_37198[(7)] = inst_37112__$1);

return statearr_37198;
})();
var statearr_37202_39892 = state_37135__$1;
(statearr_37202_39892[(2)] = null);

(statearr_37202_39892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_37208 = [null,null,null,null,null,null,null,null];
(statearr_37208[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_37208[(1)] = (1));

return statearr_37208;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_37135){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_37135);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e37215){var ex__35928__auto__ = e37215;
var statearr_37221_39893 = state_37135;
(statearr_37221_39893[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_37135[(4)]))){
var statearr_37228_39894 = state_37135;
(statearr_37228_39894[(1)] = cljs.core.first((state_37135[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39895 = state_37135;
state_37135 = G__39895;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_37135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_37135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_37231 = f__36175__auto__();
(statearr_37231[(6)] = c__36174__auto__);

return statearr_37231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37237 = arguments.length;
switch (G__37237) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39897 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39897(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39900 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39900(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39901 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39901(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39902 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39902(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37278 = (function (ch,cs,meta37279){
this.ch = ch;
this.cs = cs;
this.meta37279 = meta37279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37280,meta37279__$1){
var self__ = this;
var _37280__$1 = this;
return (new cljs.core.async.t_cljs$core$async37278(self__.ch,self__.cs,meta37279__$1));
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37280){
var self__ = this;
var _37280__$1 = this;
return self__.meta37279;
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37278.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37279","meta37279",-1161707565,null)], null);
}));

(cljs.core.async.t_cljs$core$async37278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37278");

(cljs.core.async.t_cljs$core$async37278.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37278.
 */
cljs.core.async.__GT_t_cljs$core$async37278 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37278(ch__$1,cs__$1,meta37279){
return (new cljs.core.async.t_cljs$core$async37278(ch__$1,cs__$1,meta37279));
});

}

return (new cljs.core.async.t_cljs$core$async37278(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36174__auto___39918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_37449){
var state_val_37450 = (state_37449[(1)]);
if((state_val_37450 === (7))){
var inst_37445 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37451_39919 = state_37449__$1;
(statearr_37451_39919[(2)] = inst_37445);

(statearr_37451_39919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (20))){
var inst_37336 = (state_37449[(7)]);
var inst_37350 = cljs.core.first(inst_37336);
var inst_37351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37350,(0),null);
var inst_37352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37350,(1),null);
var state_37449__$1 = (function (){var statearr_37460 = state_37449;
(statearr_37460[(8)] = inst_37351);

return statearr_37460;
})();
if(cljs.core.truth_(inst_37352)){
var statearr_37463_39920 = state_37449__$1;
(statearr_37463_39920[(1)] = (22));

} else {
var statearr_37464_39921 = state_37449__$1;
(statearr_37464_39921[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (27))){
var inst_37391 = (state_37449[(9)]);
var inst_37386 = (state_37449[(10)]);
var inst_37305 = (state_37449[(11)]);
var inst_37384 = (state_37449[(12)]);
var inst_37391__$1 = cljs.core._nth(inst_37384,inst_37386);
var inst_37392 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37391__$1,inst_37305,done);
var state_37449__$1 = (function (){var statearr_37471 = state_37449;
(statearr_37471[(9)] = inst_37391__$1);

return statearr_37471;
})();
if(cljs.core.truth_(inst_37392)){
var statearr_37472_39924 = state_37449__$1;
(statearr_37472_39924[(1)] = (30));

} else {
var statearr_37473_39925 = state_37449__$1;
(statearr_37473_39925[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (1))){
var state_37449__$1 = state_37449;
var statearr_37476_39929 = state_37449__$1;
(statearr_37476_39929[(2)] = null);

(statearr_37476_39929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (24))){
var inst_37336 = (state_37449[(7)]);
var inst_37357 = (state_37449[(2)]);
var inst_37360 = cljs.core.next(inst_37336);
var inst_37314 = inst_37360;
var inst_37315 = null;
var inst_37316 = (0);
var inst_37317 = (0);
var state_37449__$1 = (function (){var statearr_37480 = state_37449;
(statearr_37480[(13)] = inst_37315);

(statearr_37480[(14)] = inst_37316);

(statearr_37480[(15)] = inst_37357);

(statearr_37480[(16)] = inst_37317);

(statearr_37480[(17)] = inst_37314);

return statearr_37480;
})();
var statearr_37486_39933 = state_37449__$1;
(statearr_37486_39933[(2)] = null);

(statearr_37486_39933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (39))){
var state_37449__$1 = state_37449;
var statearr_37498_39934 = state_37449__$1;
(statearr_37498_39934[(2)] = null);

(statearr_37498_39934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (4))){
var inst_37305 = (state_37449[(11)]);
var inst_37305__$1 = (state_37449[(2)]);
var inst_37306 = (inst_37305__$1 == null);
var state_37449__$1 = (function (){var statearr_37501 = state_37449;
(statearr_37501[(11)] = inst_37305__$1);

return statearr_37501;
})();
if(cljs.core.truth_(inst_37306)){
var statearr_37503_39935 = state_37449__$1;
(statearr_37503_39935[(1)] = (5));

} else {
var statearr_37504_39936 = state_37449__$1;
(statearr_37504_39936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (15))){
var inst_37315 = (state_37449[(13)]);
var inst_37316 = (state_37449[(14)]);
var inst_37317 = (state_37449[(16)]);
var inst_37314 = (state_37449[(17)]);
var inst_37332 = (state_37449[(2)]);
var inst_37333 = (inst_37317 + (1));
var tmp37491 = inst_37315;
var tmp37492 = inst_37316;
var tmp37493 = inst_37314;
var inst_37314__$1 = tmp37493;
var inst_37315__$1 = tmp37491;
var inst_37316__$1 = tmp37492;
var inst_37317__$1 = inst_37333;
var state_37449__$1 = (function (){var statearr_37505 = state_37449;
(statearr_37505[(13)] = inst_37315__$1);

(statearr_37505[(14)] = inst_37316__$1);

(statearr_37505[(18)] = inst_37332);

(statearr_37505[(16)] = inst_37317__$1);

(statearr_37505[(17)] = inst_37314__$1);

return statearr_37505;
})();
var statearr_37506_39939 = state_37449__$1;
(statearr_37506_39939[(2)] = null);

(statearr_37506_39939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (21))){
var inst_37363 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37516_39940 = state_37449__$1;
(statearr_37516_39940[(2)] = inst_37363);

(statearr_37516_39940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (31))){
var inst_37391 = (state_37449[(9)]);
var inst_37395 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37391);
var state_37449__$1 = state_37449;
var statearr_37518_39941 = state_37449__$1;
(statearr_37518_39941[(2)] = inst_37395);

(statearr_37518_39941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (32))){
var inst_37385 = (state_37449[(19)]);
var inst_37386 = (state_37449[(10)]);
var inst_37383 = (state_37449[(20)]);
var inst_37384 = (state_37449[(12)]);
var inst_37397 = (state_37449[(2)]);
var inst_37402 = (inst_37386 + (1));
var tmp37513 = inst_37385;
var tmp37514 = inst_37383;
var tmp37515 = inst_37384;
var inst_37383__$1 = tmp37514;
var inst_37384__$1 = tmp37515;
var inst_37385__$1 = tmp37513;
var inst_37386__$1 = inst_37402;
var state_37449__$1 = (function (){var statearr_37523 = state_37449;
(statearr_37523[(19)] = inst_37385__$1);

(statearr_37523[(21)] = inst_37397);

(statearr_37523[(10)] = inst_37386__$1);

(statearr_37523[(20)] = inst_37383__$1);

(statearr_37523[(12)] = inst_37384__$1);

return statearr_37523;
})();
var statearr_37525_39942 = state_37449__$1;
(statearr_37525_39942[(2)] = null);

(statearr_37525_39942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (40))){
var inst_37415 = (state_37449[(22)]);
var inst_37419 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37415);
var state_37449__$1 = state_37449;
var statearr_37527_39943 = state_37449__$1;
(statearr_37527_39943[(2)] = inst_37419);

(statearr_37527_39943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (33))){
var inst_37405 = (state_37449[(23)]);
var inst_37407 = cljs.core.chunked_seq_QMARK_(inst_37405);
var state_37449__$1 = state_37449;
if(inst_37407){
var statearr_37528_39944 = state_37449__$1;
(statearr_37528_39944[(1)] = (36));

} else {
var statearr_37529_39945 = state_37449__$1;
(statearr_37529_39945[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (13))){
var inst_37326 = (state_37449[(24)]);
var inst_37329 = cljs.core.async.close_BANG_(inst_37326);
var state_37449__$1 = state_37449;
var statearr_37532_39946 = state_37449__$1;
(statearr_37532_39946[(2)] = inst_37329);

(statearr_37532_39946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (22))){
var inst_37351 = (state_37449[(8)]);
var inst_37354 = cljs.core.async.close_BANG_(inst_37351);
var state_37449__$1 = state_37449;
var statearr_37533_39947 = state_37449__$1;
(statearr_37533_39947[(2)] = inst_37354);

(statearr_37533_39947[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (36))){
var inst_37405 = (state_37449[(23)]);
var inst_37410 = cljs.core.chunk_first(inst_37405);
var inst_37411 = cljs.core.chunk_rest(inst_37405);
var inst_37412 = cljs.core.count(inst_37410);
var inst_37383 = inst_37411;
var inst_37384 = inst_37410;
var inst_37385 = inst_37412;
var inst_37386 = (0);
var state_37449__$1 = (function (){var statearr_37535 = state_37449;
(statearr_37535[(19)] = inst_37385);

(statearr_37535[(10)] = inst_37386);

(statearr_37535[(20)] = inst_37383);

(statearr_37535[(12)] = inst_37384);

return statearr_37535;
})();
var statearr_37536_39952 = state_37449__$1;
(statearr_37536_39952[(2)] = null);

(statearr_37536_39952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (41))){
var inst_37405 = (state_37449[(23)]);
var inst_37423 = (state_37449[(2)]);
var inst_37424 = cljs.core.next(inst_37405);
var inst_37383 = inst_37424;
var inst_37384 = null;
var inst_37385 = (0);
var inst_37386 = (0);
var state_37449__$1 = (function (){var statearr_37537 = state_37449;
(statearr_37537[(19)] = inst_37385);

(statearr_37537[(10)] = inst_37386);

(statearr_37537[(25)] = inst_37423);

(statearr_37537[(20)] = inst_37383);

(statearr_37537[(12)] = inst_37384);

return statearr_37537;
})();
var statearr_37539_39956 = state_37449__$1;
(statearr_37539_39956[(2)] = null);

(statearr_37539_39956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (43))){
var state_37449__$1 = state_37449;
var statearr_37540_39960 = state_37449__$1;
(statearr_37540_39960[(2)] = null);

(statearr_37540_39960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (29))){
var inst_37432 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37541_39961 = state_37449__$1;
(statearr_37541_39961[(2)] = inst_37432);

(statearr_37541_39961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (44))){
var inst_37441 = (state_37449[(2)]);
var state_37449__$1 = (function (){var statearr_37542 = state_37449;
(statearr_37542[(26)] = inst_37441);

return statearr_37542;
})();
var statearr_37547_39962 = state_37449__$1;
(statearr_37547_39962[(2)] = null);

(statearr_37547_39962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (6))){
var inst_37375 = (state_37449[(27)]);
var inst_37374 = cljs.core.deref(cs);
var inst_37375__$1 = cljs.core.keys(inst_37374);
var inst_37376 = cljs.core.count(inst_37375__$1);
var inst_37377 = cljs.core.reset_BANG_(dctr,inst_37376);
var inst_37382 = cljs.core.seq(inst_37375__$1);
var inst_37383 = inst_37382;
var inst_37384 = null;
var inst_37385 = (0);
var inst_37386 = (0);
var state_37449__$1 = (function (){var statearr_37551 = state_37449;
(statearr_37551[(19)] = inst_37385);

(statearr_37551[(10)] = inst_37386);

(statearr_37551[(28)] = inst_37377);

(statearr_37551[(20)] = inst_37383);

(statearr_37551[(27)] = inst_37375__$1);

(statearr_37551[(12)] = inst_37384);

return statearr_37551;
})();
var statearr_37552_39970 = state_37449__$1;
(statearr_37552_39970[(2)] = null);

(statearr_37552_39970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (28))){
var inst_37383 = (state_37449[(20)]);
var inst_37405 = (state_37449[(23)]);
var inst_37405__$1 = cljs.core.seq(inst_37383);
var state_37449__$1 = (function (){var statearr_37553 = state_37449;
(statearr_37553[(23)] = inst_37405__$1);

return statearr_37553;
})();
if(inst_37405__$1){
var statearr_37554_39971 = state_37449__$1;
(statearr_37554_39971[(1)] = (33));

} else {
var statearr_37555_39972 = state_37449__$1;
(statearr_37555_39972[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (25))){
var inst_37385 = (state_37449[(19)]);
var inst_37386 = (state_37449[(10)]);
var inst_37388 = (inst_37386 < inst_37385);
var inst_37389 = inst_37388;
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37389)){
var statearr_37556_39979 = state_37449__$1;
(statearr_37556_39979[(1)] = (27));

} else {
var statearr_37557_39980 = state_37449__$1;
(statearr_37557_39980[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (34))){
var state_37449__$1 = state_37449;
var statearr_37558_39981 = state_37449__$1;
(statearr_37558_39981[(2)] = null);

(statearr_37558_39981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (17))){
var state_37449__$1 = state_37449;
var statearr_37560_39982 = state_37449__$1;
(statearr_37560_39982[(2)] = null);

(statearr_37560_39982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (3))){
var inst_37447 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37449__$1,inst_37447);
} else {
if((state_val_37450 === (12))){
var inst_37368 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37561_39983 = state_37449__$1;
(statearr_37561_39983[(2)] = inst_37368);

(statearr_37561_39983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (2))){
var state_37449__$1 = state_37449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37449__$1,(4),ch);
} else {
if((state_val_37450 === (23))){
var state_37449__$1 = state_37449;
var statearr_37562_39986 = state_37449__$1;
(statearr_37562_39986[(2)] = null);

(statearr_37562_39986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (35))){
var inst_37430 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37564_39987 = state_37449__$1;
(statearr_37564_39987[(2)] = inst_37430);

(statearr_37564_39987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (19))){
var inst_37336 = (state_37449[(7)]);
var inst_37341 = cljs.core.chunk_first(inst_37336);
var inst_37342 = cljs.core.chunk_rest(inst_37336);
var inst_37344 = cljs.core.count(inst_37341);
var inst_37314 = inst_37342;
var inst_37315 = inst_37341;
var inst_37316 = inst_37344;
var inst_37317 = (0);
var state_37449__$1 = (function (){var statearr_37565 = state_37449;
(statearr_37565[(13)] = inst_37315);

(statearr_37565[(14)] = inst_37316);

(statearr_37565[(16)] = inst_37317);

(statearr_37565[(17)] = inst_37314);

return statearr_37565;
})();
var statearr_37568_39988 = state_37449__$1;
(statearr_37568_39988[(2)] = null);

(statearr_37568_39988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (11))){
var inst_37336 = (state_37449[(7)]);
var inst_37314 = (state_37449[(17)]);
var inst_37336__$1 = cljs.core.seq(inst_37314);
var state_37449__$1 = (function (){var statearr_37573 = state_37449;
(statearr_37573[(7)] = inst_37336__$1);

return statearr_37573;
})();
if(inst_37336__$1){
var statearr_37574_39991 = state_37449__$1;
(statearr_37574_39991[(1)] = (16));

} else {
var statearr_37575_39992 = state_37449__$1;
(statearr_37575_39992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (9))){
var inst_37372 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37576_39994 = state_37449__$1;
(statearr_37576_39994[(2)] = inst_37372);

(statearr_37576_39994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (5))){
var inst_37312 = cljs.core.deref(cs);
var inst_37313 = cljs.core.seq(inst_37312);
var inst_37314 = inst_37313;
var inst_37315 = null;
var inst_37316 = (0);
var inst_37317 = (0);
var state_37449__$1 = (function (){var statearr_37583 = state_37449;
(statearr_37583[(13)] = inst_37315);

(statearr_37583[(14)] = inst_37316);

(statearr_37583[(16)] = inst_37317);

(statearr_37583[(17)] = inst_37314);

return statearr_37583;
})();
var statearr_37588_39995 = state_37449__$1;
(statearr_37588_39995[(2)] = null);

(statearr_37588_39995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (14))){
var state_37449__$1 = state_37449;
var statearr_37589_39996 = state_37449__$1;
(statearr_37589_39996[(2)] = null);

(statearr_37589_39996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (45))){
var inst_37438 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37592_40000 = state_37449__$1;
(statearr_37592_40000[(2)] = inst_37438);

(statearr_37592_40000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (26))){
var inst_37375 = (state_37449[(27)]);
var inst_37434 = (state_37449[(2)]);
var inst_37435 = cljs.core.seq(inst_37375);
var state_37449__$1 = (function (){var statearr_37595 = state_37449;
(statearr_37595[(29)] = inst_37434);

return statearr_37595;
})();
if(inst_37435){
var statearr_37598_40004 = state_37449__$1;
(statearr_37598_40004[(1)] = (42));

} else {
var statearr_37599_40005 = state_37449__$1;
(statearr_37599_40005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (16))){
var inst_37336 = (state_37449[(7)]);
var inst_37338 = cljs.core.chunked_seq_QMARK_(inst_37336);
var state_37449__$1 = state_37449;
if(inst_37338){
var statearr_37603_40006 = state_37449__$1;
(statearr_37603_40006[(1)] = (19));

} else {
var statearr_37604_40007 = state_37449__$1;
(statearr_37604_40007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (38))){
var inst_37427 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37609_40014 = state_37449__$1;
(statearr_37609_40014[(2)] = inst_37427);

(statearr_37609_40014[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (30))){
var state_37449__$1 = state_37449;
var statearr_37613_40015 = state_37449__$1;
(statearr_37613_40015[(2)] = null);

(statearr_37613_40015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (10))){
var inst_37315 = (state_37449[(13)]);
var inst_37317 = (state_37449[(16)]);
var inst_37325 = cljs.core._nth(inst_37315,inst_37317);
var inst_37326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37325,(0),null);
var inst_37327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37325,(1),null);
var state_37449__$1 = (function (){var statearr_37614 = state_37449;
(statearr_37614[(24)] = inst_37326);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37327)){
var statearr_37615_40016 = state_37449__$1;
(statearr_37615_40016[(1)] = (13));

} else {
var statearr_37616_40017 = state_37449__$1;
(statearr_37616_40017[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (18))){
var inst_37366 = (state_37449[(2)]);
var state_37449__$1 = state_37449;
var statearr_37617_40019 = state_37449__$1;
(statearr_37617_40019[(2)] = inst_37366);

(statearr_37617_40019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (42))){
var state_37449__$1 = state_37449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37449__$1,(45),dchan);
} else {
if((state_val_37450 === (37))){
var inst_37415 = (state_37449[(22)]);
var inst_37405 = (state_37449[(23)]);
var inst_37305 = (state_37449[(11)]);
var inst_37415__$1 = cljs.core.first(inst_37405);
var inst_37416 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37415__$1,inst_37305,done);
var state_37449__$1 = (function (){var statearr_37618 = state_37449;
(statearr_37618[(22)] = inst_37415__$1);

return statearr_37618;
})();
if(cljs.core.truth_(inst_37416)){
var statearr_37619_40023 = state_37449__$1;
(statearr_37619_40023[(1)] = (39));

} else {
var statearr_37620_40024 = state_37449__$1;
(statearr_37620_40024[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37450 === (8))){
var inst_37316 = (state_37449[(14)]);
var inst_37317 = (state_37449[(16)]);
var inst_37319 = (inst_37317 < inst_37316);
var inst_37320 = inst_37319;
var state_37449__$1 = state_37449;
if(cljs.core.truth_(inst_37320)){
var statearr_37627_40026 = state_37449__$1;
(statearr_37627_40026[(1)] = (10));

} else {
var statearr_37628_40027 = state_37449__$1;
(statearr_37628_40027[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35925__auto__ = null;
var cljs$core$async$mult_$_state_machine__35925__auto____0 = (function (){
var statearr_37629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37629[(0)] = cljs$core$async$mult_$_state_machine__35925__auto__);

(statearr_37629[(1)] = (1));

return statearr_37629;
});
var cljs$core$async$mult_$_state_machine__35925__auto____1 = (function (state_37449){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_37449);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e37639){var ex__35928__auto__ = e37639;
var statearr_37640_40031 = state_37449;
(statearr_37640_40031[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_37449[(4)]))){
var statearr_37641_40032 = state_37449;
(statearr_37641_40032[(1)] = cljs.core.first((state_37449[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40034 = state_37449;
state_37449 = G__40034;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35925__auto__ = function(state_37449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35925__auto____1.call(this,state_37449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35925__auto____0;
cljs$core$async$mult_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35925__auto____1;
return cljs$core$async$mult_$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_37644 = f__36175__auto__();
(statearr_37644[(6)] = c__36174__auto___39918);

return statearr_37644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37653 = arguments.length;
switch (G__37653) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40049 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40049(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40054 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40054(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40059 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40059(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40063 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40063(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40066 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40066(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40070 = arguments.length;
var i__5767__auto___40071 = (0);
while(true){
if((i__5767__auto___40071 < len__5766__auto___40070)){
args__5772__auto__.push((arguments[i__5767__auto___40071]));

var G__40073 = (i__5767__auto___40071 + (1));
i__5767__auto___40071 = G__40073;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37690){
var map__37695 = p__37690;
var map__37695__$1 = cljs.core.__destructure_map(map__37695);
var opts = map__37695__$1;
var statearr_37696_40082 = state;
(statearr_37696_40082[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37698_40084 = state;
(statearr_37698_40084[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_37700_40085 = state;
(statearr_37700_40085[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37680){
var G__37681 = cljs.core.first(seq37680);
var seq37680__$1 = cljs.core.next(seq37680);
var G__37682 = cljs.core.first(seq37680__$1);
var seq37680__$2 = cljs.core.next(seq37680__$1);
var G__37683 = cljs.core.first(seq37680__$2);
var seq37680__$3 = cljs.core.next(seq37680__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37681,G__37682,G__37683,seq37680__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37710 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37711){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37711 = meta37711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37712,meta37711__$1){
var self__ = this;
var _37712__$1 = this;
return (new cljs.core.async.t_cljs$core$async37710(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37711__$1));
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37712){
var self__ = this;
var _37712__$1 = this;
return self__.meta37711;
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37710.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37711","meta37711",1329390875,null)], null);
}));

(cljs.core.async.t_cljs$core$async37710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37710");

(cljs.core.async.t_cljs$core$async37710.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37710.
 */
cljs.core.async.__GT_t_cljs$core$async37710 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37710(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37711){
return (new cljs.core.async.t_cljs$core$async37710(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37711));
});

}

return (new cljs.core.async.t_cljs$core$async37710(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36174__auto___40106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_37812){
var state_val_37813 = (state_37812[(1)]);
if((state_val_37813 === (7))){
var inst_37770 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
if(cljs.core.truth_(inst_37770)){
var statearr_37817_40107 = state_37812__$1;
(statearr_37817_40107[(1)] = (8));

} else {
var statearr_37818_40109 = state_37812__$1;
(statearr_37818_40109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (20))){
var inst_37763 = (state_37812[(7)]);
var state_37812__$1 = state_37812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37812__$1,(23),out,inst_37763);
} else {
if((state_val_37813 === (1))){
var inst_37741 = calc_state();
var inst_37742 = cljs.core.__destructure_map(inst_37741);
var inst_37743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37742,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37742,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37742,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37746 = inst_37741;
var state_37812__$1 = (function (){var statearr_37823 = state_37812;
(statearr_37823[(8)] = inst_37746);

(statearr_37823[(9)] = inst_37743);

(statearr_37823[(10)] = inst_37744);

(statearr_37823[(11)] = inst_37745);

return statearr_37823;
})();
var statearr_37824_40113 = state_37812__$1;
(statearr_37824_40113[(2)] = null);

(statearr_37824_40113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (24))){
var inst_37750 = (state_37812[(12)]);
var inst_37746 = inst_37750;
var state_37812__$1 = (function (){var statearr_37828 = state_37812;
(statearr_37828[(8)] = inst_37746);

return statearr_37828;
})();
var statearr_37829_40115 = state_37812__$1;
(statearr_37829_40115[(2)] = null);

(statearr_37829_40115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (4))){
var inst_37765 = (state_37812[(13)]);
var inst_37763 = (state_37812[(7)]);
var inst_37762 = (state_37812[(2)]);
var inst_37763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37762,(0),null);
var inst_37764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37762,(1),null);
var inst_37765__$1 = (inst_37763__$1 == null);
var state_37812__$1 = (function (){var statearr_37835 = state_37812;
(statearr_37835[(13)] = inst_37765__$1);

(statearr_37835[(14)] = inst_37764);

(statearr_37835[(7)] = inst_37763__$1);

return statearr_37835;
})();
if(cljs.core.truth_(inst_37765__$1)){
var statearr_37836_40118 = state_37812__$1;
(statearr_37836_40118[(1)] = (5));

} else {
var statearr_37838_40120 = state_37812__$1;
(statearr_37838_40120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (15))){
var inst_37784 = (state_37812[(15)]);
var inst_37751 = (state_37812[(16)]);
var inst_37784__$1 = cljs.core.empty_QMARK_(inst_37751);
var state_37812__$1 = (function (){var statearr_37841 = state_37812;
(statearr_37841[(15)] = inst_37784__$1);

return statearr_37841;
})();
if(inst_37784__$1){
var statearr_37842_40122 = state_37812__$1;
(statearr_37842_40122[(1)] = (17));

} else {
var statearr_37843_40123 = state_37812__$1;
(statearr_37843_40123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (21))){
var inst_37750 = (state_37812[(12)]);
var inst_37746 = inst_37750;
var state_37812__$1 = (function (){var statearr_37844 = state_37812;
(statearr_37844[(8)] = inst_37746);

return statearr_37844;
})();
var statearr_37845_40124 = state_37812__$1;
(statearr_37845_40124[(2)] = null);

(statearr_37845_40124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (13))){
var inst_37777 = (state_37812[(2)]);
var inst_37778 = calc_state();
var inst_37746 = inst_37778;
var state_37812__$1 = (function (){var statearr_37846 = state_37812;
(statearr_37846[(8)] = inst_37746);

(statearr_37846[(17)] = inst_37777);

return statearr_37846;
})();
var statearr_37847_40129 = state_37812__$1;
(statearr_37847_40129[(2)] = null);

(statearr_37847_40129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (22))){
var inst_37804 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
var statearr_37848_40131 = state_37812__$1;
(statearr_37848_40131[(2)] = inst_37804);

(statearr_37848_40131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (6))){
var inst_37764 = (state_37812[(14)]);
var inst_37768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37764,change);
var state_37812__$1 = state_37812;
var statearr_37849_40137 = state_37812__$1;
(statearr_37849_40137[(2)] = inst_37768);

(statearr_37849_40137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (25))){
var state_37812__$1 = state_37812;
var statearr_37854_40138 = state_37812__$1;
(statearr_37854_40138[(2)] = null);

(statearr_37854_40138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (17))){
var inst_37764 = (state_37812[(14)]);
var inst_37754 = (state_37812[(18)]);
var inst_37786 = (inst_37754.cljs$core$IFn$_invoke$arity$1 ? inst_37754.cljs$core$IFn$_invoke$arity$1(inst_37764) : inst_37754.call(null,inst_37764));
var inst_37787 = cljs.core.not(inst_37786);
var state_37812__$1 = state_37812;
var statearr_37856_40142 = state_37812__$1;
(statearr_37856_40142[(2)] = inst_37787);

(statearr_37856_40142[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (3))){
var inst_37808 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37812__$1,inst_37808);
} else {
if((state_val_37813 === (12))){
var state_37812__$1 = state_37812;
var statearr_37857_40144 = state_37812__$1;
(statearr_37857_40144[(2)] = null);

(statearr_37857_40144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (2))){
var inst_37746 = (state_37812[(8)]);
var inst_37750 = (state_37812[(12)]);
var inst_37750__$1 = cljs.core.__destructure_map(inst_37746);
var inst_37751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37750__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37750__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37750__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37812__$1 = (function (){var statearr_37859 = state_37812;
(statearr_37859[(12)] = inst_37750__$1);

(statearr_37859[(18)] = inst_37754);

(statearr_37859[(16)] = inst_37751);

return statearr_37859;
})();
return cljs.core.async.ioc_alts_BANG_(state_37812__$1,(4),inst_37757);
} else {
if((state_val_37813 === (23))){
var inst_37795 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
if(cljs.core.truth_(inst_37795)){
var statearr_37863_40147 = state_37812__$1;
(statearr_37863_40147[(1)] = (24));

} else {
var statearr_37865_40148 = state_37812__$1;
(statearr_37865_40148[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (19))){
var inst_37790 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
var statearr_37867_40150 = state_37812__$1;
(statearr_37867_40150[(2)] = inst_37790);

(statearr_37867_40150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (11))){
var inst_37764 = (state_37812[(14)]);
var inst_37774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37764);
var state_37812__$1 = state_37812;
var statearr_37872_40152 = state_37812__$1;
(statearr_37872_40152[(2)] = inst_37774);

(statearr_37872_40152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (9))){
var inst_37764 = (state_37812[(14)]);
var inst_37781 = (state_37812[(19)]);
var inst_37751 = (state_37812[(16)]);
var inst_37781__$1 = (inst_37751.cljs$core$IFn$_invoke$arity$1 ? inst_37751.cljs$core$IFn$_invoke$arity$1(inst_37764) : inst_37751.call(null,inst_37764));
var state_37812__$1 = (function (){var statearr_37873 = state_37812;
(statearr_37873[(19)] = inst_37781__$1);

return statearr_37873;
})();
if(cljs.core.truth_(inst_37781__$1)){
var statearr_37874_40154 = state_37812__$1;
(statearr_37874_40154[(1)] = (14));

} else {
var statearr_37875_40155 = state_37812__$1;
(statearr_37875_40155[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (5))){
var inst_37765 = (state_37812[(13)]);
var state_37812__$1 = state_37812;
var statearr_37876_40156 = state_37812__$1;
(statearr_37876_40156[(2)] = inst_37765);

(statearr_37876_40156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (14))){
var inst_37781 = (state_37812[(19)]);
var state_37812__$1 = state_37812;
var statearr_37877_40160 = state_37812__$1;
(statearr_37877_40160[(2)] = inst_37781);

(statearr_37877_40160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (26))){
var inst_37800 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
var statearr_37878_40161 = state_37812__$1;
(statearr_37878_40161[(2)] = inst_37800);

(statearr_37878_40161[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (16))){
var inst_37792 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
if(cljs.core.truth_(inst_37792)){
var statearr_37879_40162 = state_37812__$1;
(statearr_37879_40162[(1)] = (20));

} else {
var statearr_37880_40164 = state_37812__$1;
(statearr_37880_40164[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (10))){
var inst_37806 = (state_37812[(2)]);
var state_37812__$1 = state_37812;
var statearr_37881_40166 = state_37812__$1;
(statearr_37881_40166[(2)] = inst_37806);

(statearr_37881_40166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (18))){
var inst_37784 = (state_37812[(15)]);
var state_37812__$1 = state_37812;
var statearr_37882_40169 = state_37812__$1;
(statearr_37882_40169[(2)] = inst_37784);

(statearr_37882_40169[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37813 === (8))){
var inst_37763 = (state_37812[(7)]);
var inst_37772 = (inst_37763 == null);
var state_37812__$1 = state_37812;
if(cljs.core.truth_(inst_37772)){
var statearr_37883_40173 = state_37812__$1;
(statearr_37883_40173[(1)] = (11));

} else {
var statearr_37884_40174 = state_37812__$1;
(statearr_37884_40174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35925__auto__ = null;
var cljs$core$async$mix_$_state_machine__35925__auto____0 = (function (){
var statearr_37886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37886[(0)] = cljs$core$async$mix_$_state_machine__35925__auto__);

(statearr_37886[(1)] = (1));

return statearr_37886;
});
var cljs$core$async$mix_$_state_machine__35925__auto____1 = (function (state_37812){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_37812);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e37887){var ex__35928__auto__ = e37887;
var statearr_37888_40176 = state_37812;
(statearr_37888_40176[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_37812[(4)]))){
var statearr_37889_40179 = state_37812;
(statearr_37889_40179[(1)] = cljs.core.first((state_37812[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40181 = state_37812;
state_37812 = G__40181;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35925__auto__ = function(state_37812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35925__auto____1.call(this,state_37812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35925__auto____0;
cljs$core$async$mix_$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35925__auto____1;
return cljs$core$async$mix_$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_37890 = f__36175__auto__();
(statearr_37890[(6)] = c__36174__auto___40106);

return statearr_37890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_40187 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40187(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40190 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40190(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40195 = (function() {
var G__40196 = null;
var G__40196__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40196__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40196 = function(p,v){
switch(arguments.length){
case 1:
return G__40196__1.call(this,p);
case 2:
return G__40196__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40196.cljs$core$IFn$_invoke$arity$1 = G__40196__1;
G__40196.cljs$core$IFn$_invoke$arity$2 = G__40196__2;
return G__40196;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37921 = arguments.length;
switch (G__37921) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40195(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40195(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37930 = arguments.length;
switch (G__37930) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37928_SHARP_){
if(cljs.core.truth_((p1__37928_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37928_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37928_SHARP_.call(null,topic)))){
return p1__37928_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37928_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37936 = meta37936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37937,meta37936__$1){
var self__ = this;
var _37937__$1 = this;
return (new cljs.core.async.t_cljs$core$async37935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37936__$1));
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37937){
var self__ = this;
var _37937__$1 = this;
return self__.meta37936;
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37936","meta37936",744426996,null)], null);
}));

(cljs.core.async.t_cljs$core$async37935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37935");

(cljs.core.async.t_cljs$core$async37935.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37935.
 */
cljs.core.async.__GT_t_cljs$core$async37935 = (function cljs$core$async$__GT_t_cljs$core$async37935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37936){
return (new cljs.core.async.t_cljs$core$async37935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37936));
});

}

return (new cljs.core.async.t_cljs$core$async37935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36174__auto___40225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38027){
var state_val_38028 = (state_38027[(1)]);
if((state_val_38028 === (7))){
var inst_38020 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38032_40228 = state_38027__$1;
(statearr_38032_40228[(2)] = inst_38020);

(statearr_38032_40228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (20))){
var state_38027__$1 = state_38027;
var statearr_38033_40229 = state_38027__$1;
(statearr_38033_40229[(2)] = null);

(statearr_38033_40229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (1))){
var state_38027__$1 = state_38027;
var statearr_38034_40230 = state_38027__$1;
(statearr_38034_40230[(2)] = null);

(statearr_38034_40230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (24))){
var inst_38003 = (state_38027[(7)]);
var inst_38012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38003);
var state_38027__$1 = state_38027;
var statearr_38037_40233 = state_38027__$1;
(statearr_38037_40233[(2)] = inst_38012);

(statearr_38037_40233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (4))){
var inst_37953 = (state_38027[(8)]);
var inst_37953__$1 = (state_38027[(2)]);
var inst_37954 = (inst_37953__$1 == null);
var state_38027__$1 = (function (){var statearr_38042 = state_38027;
(statearr_38042[(8)] = inst_37953__$1);

return statearr_38042;
})();
if(cljs.core.truth_(inst_37954)){
var statearr_38044_40235 = state_38027__$1;
(statearr_38044_40235[(1)] = (5));

} else {
var statearr_38047_40236 = state_38027__$1;
(statearr_38047_40236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (15))){
var inst_37997 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38049_40238 = state_38027__$1;
(statearr_38049_40238[(2)] = inst_37997);

(statearr_38049_40238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (21))){
var inst_38017 = (state_38027[(2)]);
var state_38027__$1 = (function (){var statearr_38050 = state_38027;
(statearr_38050[(9)] = inst_38017);

return statearr_38050;
})();
var statearr_38051_40239 = state_38027__$1;
(statearr_38051_40239[(2)] = null);

(statearr_38051_40239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (13))){
var inst_37979 = (state_38027[(10)]);
var inst_37981 = cljs.core.chunked_seq_QMARK_(inst_37979);
var state_38027__$1 = state_38027;
if(inst_37981){
var statearr_38058_40242 = state_38027__$1;
(statearr_38058_40242[(1)] = (16));

} else {
var statearr_38061_40244 = state_38027__$1;
(statearr_38061_40244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (22))){
var inst_38009 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
if(cljs.core.truth_(inst_38009)){
var statearr_38065_40245 = state_38027__$1;
(statearr_38065_40245[(1)] = (23));

} else {
var statearr_38066_40246 = state_38027__$1;
(statearr_38066_40246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (6))){
var inst_38003 = (state_38027[(7)]);
var inst_38005 = (state_38027[(11)]);
var inst_37953 = (state_38027[(8)]);
var inst_38003__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37953) : topic_fn.call(null,inst_37953));
var inst_38004 = cljs.core.deref(mults);
var inst_38005__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38004,inst_38003__$1);
var state_38027__$1 = (function (){var statearr_38071 = state_38027;
(statearr_38071[(7)] = inst_38003__$1);

(statearr_38071[(11)] = inst_38005__$1);

return statearr_38071;
})();
if(cljs.core.truth_(inst_38005__$1)){
var statearr_38074_40248 = state_38027__$1;
(statearr_38074_40248[(1)] = (19));

} else {
var statearr_38076_40249 = state_38027__$1;
(statearr_38076_40249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (25))){
var inst_38014 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38078_40254 = state_38027__$1;
(statearr_38078_40254[(2)] = inst_38014);

(statearr_38078_40254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (17))){
var inst_37979 = (state_38027[(10)]);
var inst_37988 = cljs.core.first(inst_37979);
var inst_37989 = cljs.core.async.muxch_STAR_(inst_37988);
var inst_37990 = cljs.core.async.close_BANG_(inst_37989);
var inst_37991 = cljs.core.next(inst_37979);
var inst_37963 = inst_37991;
var inst_37964 = null;
var inst_37965 = (0);
var inst_37966 = (0);
var state_38027__$1 = (function (){var statearr_38084 = state_38027;
(statearr_38084[(12)] = inst_37965);

(statearr_38084[(13)] = inst_37963);

(statearr_38084[(14)] = inst_37964);

(statearr_38084[(15)] = inst_37966);

(statearr_38084[(16)] = inst_37990);

return statearr_38084;
})();
var statearr_38085_40259 = state_38027__$1;
(statearr_38085_40259[(2)] = null);

(statearr_38085_40259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (3))){
var inst_38022 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38027__$1,inst_38022);
} else {
if((state_val_38028 === (12))){
var inst_37999 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38088_40261 = state_38027__$1;
(statearr_38088_40261[(2)] = inst_37999);

(statearr_38088_40261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (2))){
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38027__$1,(4),ch);
} else {
if((state_val_38028 === (23))){
var state_38027__$1 = state_38027;
var statearr_38093_40264 = state_38027__$1;
(statearr_38093_40264[(2)] = null);

(statearr_38093_40264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (19))){
var inst_38005 = (state_38027[(11)]);
var inst_37953 = (state_38027[(8)]);
var inst_38007 = cljs.core.async.muxch_STAR_(inst_38005);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38027__$1,(22),inst_38007,inst_37953);
} else {
if((state_val_38028 === (11))){
var inst_37963 = (state_38027[(13)]);
var inst_37979 = (state_38027[(10)]);
var inst_37979__$1 = cljs.core.seq(inst_37963);
var state_38027__$1 = (function (){var statearr_38107 = state_38027;
(statearr_38107[(10)] = inst_37979__$1);

return statearr_38107;
})();
if(inst_37979__$1){
var statearr_38109_40266 = state_38027__$1;
(statearr_38109_40266[(1)] = (13));

} else {
var statearr_38110_40267 = state_38027__$1;
(statearr_38110_40267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (9))){
var inst_38001 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38115_40269 = state_38027__$1;
(statearr_38115_40269[(2)] = inst_38001);

(statearr_38115_40269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (5))){
var inst_37960 = cljs.core.deref(mults);
var inst_37961 = cljs.core.vals(inst_37960);
var inst_37962 = cljs.core.seq(inst_37961);
var inst_37963 = inst_37962;
var inst_37964 = null;
var inst_37965 = (0);
var inst_37966 = (0);
var state_38027__$1 = (function (){var statearr_38120 = state_38027;
(statearr_38120[(12)] = inst_37965);

(statearr_38120[(13)] = inst_37963);

(statearr_38120[(14)] = inst_37964);

(statearr_38120[(15)] = inst_37966);

return statearr_38120;
})();
var statearr_38122_40270 = state_38027__$1;
(statearr_38122_40270[(2)] = null);

(statearr_38122_40270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (14))){
var state_38027__$1 = state_38027;
var statearr_38128_40272 = state_38027__$1;
(statearr_38128_40272[(2)] = null);

(statearr_38128_40272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (16))){
var inst_37979 = (state_38027[(10)]);
var inst_37983 = cljs.core.chunk_first(inst_37979);
var inst_37984 = cljs.core.chunk_rest(inst_37979);
var inst_37985 = cljs.core.count(inst_37983);
var inst_37963 = inst_37984;
var inst_37964 = inst_37983;
var inst_37965 = inst_37985;
var inst_37966 = (0);
var state_38027__$1 = (function (){var statearr_38129 = state_38027;
(statearr_38129[(12)] = inst_37965);

(statearr_38129[(13)] = inst_37963);

(statearr_38129[(14)] = inst_37964);

(statearr_38129[(15)] = inst_37966);

return statearr_38129;
})();
var statearr_38130_40275 = state_38027__$1;
(statearr_38130_40275[(2)] = null);

(statearr_38130_40275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (10))){
var inst_37965 = (state_38027[(12)]);
var inst_37963 = (state_38027[(13)]);
var inst_37964 = (state_38027[(14)]);
var inst_37966 = (state_38027[(15)]);
var inst_37971 = cljs.core._nth(inst_37964,inst_37966);
var inst_37972 = cljs.core.async.muxch_STAR_(inst_37971);
var inst_37973 = cljs.core.async.close_BANG_(inst_37972);
var inst_37974 = (inst_37966 + (1));
var tmp38124 = inst_37965;
var tmp38125 = inst_37963;
var tmp38126 = inst_37964;
var inst_37963__$1 = tmp38125;
var inst_37964__$1 = tmp38126;
var inst_37965__$1 = tmp38124;
var inst_37966__$1 = inst_37974;
var state_38027__$1 = (function (){var statearr_38132 = state_38027;
(statearr_38132[(12)] = inst_37965__$1);

(statearr_38132[(13)] = inst_37963__$1);

(statearr_38132[(14)] = inst_37964__$1);

(statearr_38132[(15)] = inst_37966__$1);

(statearr_38132[(17)] = inst_37973);

return statearr_38132;
})();
var statearr_38133_40281 = state_38027__$1;
(statearr_38133_40281[(2)] = null);

(statearr_38133_40281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (18))){
var inst_37994 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38135_40282 = state_38027__$1;
(statearr_38135_40282[(2)] = inst_37994);

(statearr_38135_40282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (8))){
var inst_37965 = (state_38027[(12)]);
var inst_37966 = (state_38027[(15)]);
var inst_37968 = (inst_37966 < inst_37965);
var inst_37969 = inst_37968;
var state_38027__$1 = state_38027;
if(cljs.core.truth_(inst_37969)){
var statearr_38140_40283 = state_38027__$1;
(statearr_38140_40283[(1)] = (10));

} else {
var statearr_38141_40285 = state_38027__$1;
(statearr_38141_40285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38143[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_38027){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38027);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e38145){var ex__35928__auto__ = e38145;
var statearr_38146_40288 = state_38027;
(statearr_38146_40288[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38027[(4)]))){
var statearr_38148_40289 = state_38027;
(statearr_38148_40289[(1)] = cljs.core.first((state_38027[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40291 = state_38027;
state_38027 = G__40291;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_38027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_38027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_38151 = f__36175__auto__();
(statearr_38151[(6)] = c__36174__auto___40225);

return statearr_38151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38160 = arguments.length;
switch (G__38160) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38172 = arguments.length;
switch (G__38172) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38188 = arguments.length;
switch (G__38188) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__36174__auto___40308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38261){
var state_val_38262 = (state_38261[(1)]);
if((state_val_38262 === (7))){
var state_38261__$1 = state_38261;
var statearr_38281_40314 = state_38261__$1;
(statearr_38281_40314[(2)] = null);

(statearr_38281_40314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (1))){
var state_38261__$1 = state_38261;
var statearr_38284_40318 = state_38261__$1;
(statearr_38284_40318[(2)] = null);

(statearr_38284_40318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (4))){
var inst_38211 = (state_38261[(7)]);
var inst_38210 = (state_38261[(8)]);
var inst_38213 = (inst_38211 < inst_38210);
var state_38261__$1 = state_38261;
if(cljs.core.truth_(inst_38213)){
var statearr_38286_40322 = state_38261__$1;
(statearr_38286_40322[(1)] = (6));

} else {
var statearr_38287_40323 = state_38261__$1;
(statearr_38287_40323[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (15))){
var inst_38243 = (state_38261[(9)]);
var inst_38248 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38243);
var state_38261__$1 = state_38261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38261__$1,(17),out,inst_38248);
} else {
if((state_val_38262 === (13))){
var inst_38243 = (state_38261[(9)]);
var inst_38243__$1 = (state_38261[(2)]);
var inst_38244 = cljs.core.some(cljs.core.nil_QMARK_,inst_38243__$1);
var state_38261__$1 = (function (){var statearr_38289 = state_38261;
(statearr_38289[(9)] = inst_38243__$1);

return statearr_38289;
})();
if(cljs.core.truth_(inst_38244)){
var statearr_38290_40327 = state_38261__$1;
(statearr_38290_40327[(1)] = (14));

} else {
var statearr_38292_40332 = state_38261__$1;
(statearr_38292_40332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (6))){
var state_38261__$1 = state_38261;
var statearr_38294_40333 = state_38261__$1;
(statearr_38294_40333[(2)] = null);

(statearr_38294_40333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (17))){
var inst_38250 = (state_38261[(2)]);
var state_38261__$1 = (function (){var statearr_38323 = state_38261;
(statearr_38323[(10)] = inst_38250);

return statearr_38323;
})();
var statearr_38324_40334 = state_38261__$1;
(statearr_38324_40334[(2)] = null);

(statearr_38324_40334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (3))){
var inst_38255 = (state_38261[(2)]);
var state_38261__$1 = state_38261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38261__$1,inst_38255);
} else {
if((state_val_38262 === (12))){
var _ = (function (){var statearr_38327 = state_38261;
(statearr_38327[(4)] = cljs.core.rest((state_38261[(4)])));

return statearr_38327;
})();
var state_38261__$1 = state_38261;
var ex38319 = (state_38261__$1[(2)]);
var statearr_38328_40338 = state_38261__$1;
(statearr_38328_40338[(5)] = ex38319);


if((ex38319 instanceof Object)){
var statearr_38334_40341 = state_38261__$1;
(statearr_38334_40341[(1)] = (11));

(statearr_38334_40341[(5)] = null);

} else {
throw ex38319;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (2))){
var inst_38209 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38210 = cnt;
var inst_38211 = (0);
var state_38261__$1 = (function (){var statearr_38339 = state_38261;
(statearr_38339[(11)] = inst_38209);

(statearr_38339[(7)] = inst_38211);

(statearr_38339[(8)] = inst_38210);

return statearr_38339;
})();
var statearr_38340_40343 = state_38261__$1;
(statearr_38340_40343[(2)] = null);

(statearr_38340_40343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (11))){
var inst_38219 = (state_38261[(2)]);
var inst_38222 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38261__$1 = (function (){var statearr_38341 = state_38261;
(statearr_38341[(12)] = inst_38219);

return statearr_38341;
})();
var statearr_38342_40347 = state_38261__$1;
(statearr_38342_40347[(2)] = inst_38222);

(statearr_38342_40347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (9))){
var inst_38211 = (state_38261[(7)]);
var _ = (function (){var statearr_38345 = state_38261;
(statearr_38345[(4)] = cljs.core.cons((12),(state_38261[(4)])));

return statearr_38345;
})();
var inst_38229 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38211) : chs__$1.call(null,inst_38211));
var inst_38230 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38211) : done.call(null,inst_38211));
var inst_38231 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38229,inst_38230);
var ___$1 = (function (){var statearr_38346 = state_38261;
(statearr_38346[(4)] = cljs.core.rest((state_38261[(4)])));

return statearr_38346;
})();
var state_38261__$1 = state_38261;
var statearr_38347_40349 = state_38261__$1;
(statearr_38347_40349[(2)] = inst_38231);

(statearr_38347_40349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (5))){
var inst_38241 = (state_38261[(2)]);
var state_38261__$1 = (function (){var statearr_38348 = state_38261;
(statearr_38348[(13)] = inst_38241);

return statearr_38348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38261__$1,(13),dchan);
} else {
if((state_val_38262 === (14))){
var inst_38246 = cljs.core.async.close_BANG_(out);
var state_38261__$1 = state_38261;
var statearr_38352_40353 = state_38261__$1;
(statearr_38352_40353[(2)] = inst_38246);

(statearr_38352_40353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (16))){
var inst_38253 = (state_38261[(2)]);
var state_38261__$1 = state_38261;
var statearr_38355_40354 = state_38261__$1;
(statearr_38355_40354[(2)] = inst_38253);

(statearr_38355_40354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (10))){
var inst_38211 = (state_38261[(7)]);
var inst_38234 = (state_38261[(2)]);
var inst_38235 = (inst_38211 + (1));
var inst_38211__$1 = inst_38235;
var state_38261__$1 = (function (){var statearr_38364 = state_38261;
(statearr_38364[(7)] = inst_38211__$1);

(statearr_38364[(14)] = inst_38234);

return statearr_38364;
})();
var statearr_38365_40355 = state_38261__$1;
(statearr_38365_40355[(2)] = null);

(statearr_38365_40355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38262 === (8))){
var inst_38239 = (state_38261[(2)]);
var state_38261__$1 = state_38261;
var statearr_38368_40356 = state_38261__$1;
(statearr_38368_40356[(2)] = inst_38239);

(statearr_38368_40356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_38370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38370[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_38370[(1)] = (1));

return statearr_38370;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_38261){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38261);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e38374){var ex__35928__auto__ = e38374;
var statearr_38377_40357 = state_38261;
(statearr_38377_40357[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38261[(4)]))){
var statearr_38379_40358 = state_38261;
(statearr_38379_40358[(1)] = cljs.core.first((state_38261[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40359 = state_38261;
state_38261 = G__40359;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_38261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_38261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_38386 = f__36175__auto__();
(statearr_38386[(6)] = c__36174__auto___40308);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38392 = arguments.length;
switch (G__38392) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38440){
var state_val_38441 = (state_38440[(1)]);
if((state_val_38441 === (7))){
var inst_38417 = (state_38440[(7)]);
var inst_38415 = (state_38440[(8)]);
var inst_38415__$1 = (state_38440[(2)]);
var inst_38417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38415__$1,(0),null);
var inst_38419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38415__$1,(1),null);
var inst_38421 = (inst_38417__$1 == null);
var state_38440__$1 = (function (){var statearr_38453 = state_38440;
(statearr_38453[(9)] = inst_38419);

(statearr_38453[(7)] = inst_38417__$1);

(statearr_38453[(8)] = inst_38415__$1);

return statearr_38453;
})();
if(cljs.core.truth_(inst_38421)){
var statearr_38454_40364 = state_38440__$1;
(statearr_38454_40364[(1)] = (8));

} else {
var statearr_38455_40365 = state_38440__$1;
(statearr_38455_40365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (1))){
var inst_38399 = cljs.core.vec(chs);
var inst_38400 = inst_38399;
var state_38440__$1 = (function (){var statearr_38456 = state_38440;
(statearr_38456[(10)] = inst_38400);

return statearr_38456;
})();
var statearr_38457_40366 = state_38440__$1;
(statearr_38457_40366[(2)] = null);

(statearr_38457_40366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (4))){
var inst_38400 = (state_38440[(10)]);
var state_38440__$1 = state_38440;
return cljs.core.async.ioc_alts_BANG_(state_38440__$1,(7),inst_38400);
} else {
if((state_val_38441 === (6))){
var inst_38435 = (state_38440[(2)]);
var state_38440__$1 = state_38440;
var statearr_38465_40367 = state_38440__$1;
(statearr_38465_40367[(2)] = inst_38435);

(statearr_38465_40367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (3))){
var inst_38437 = (state_38440[(2)]);
var state_38440__$1 = state_38440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38440__$1,inst_38437);
} else {
if((state_val_38441 === (2))){
var inst_38400 = (state_38440[(10)]);
var inst_38407 = cljs.core.count(inst_38400);
var inst_38408 = (inst_38407 > (0));
var state_38440__$1 = state_38440;
if(cljs.core.truth_(inst_38408)){
var statearr_38470_40368 = state_38440__$1;
(statearr_38470_40368[(1)] = (4));

} else {
var statearr_38473_40369 = state_38440__$1;
(statearr_38473_40369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (11))){
var inst_38400 = (state_38440[(10)]);
var inst_38428 = (state_38440[(2)]);
var tmp38466 = inst_38400;
var inst_38400__$1 = tmp38466;
var state_38440__$1 = (function (){var statearr_38474 = state_38440;
(statearr_38474[(10)] = inst_38400__$1);

(statearr_38474[(11)] = inst_38428);

return statearr_38474;
})();
var statearr_38475_40370 = state_38440__$1;
(statearr_38475_40370[(2)] = null);

(statearr_38475_40370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (9))){
var inst_38417 = (state_38440[(7)]);
var state_38440__$1 = state_38440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38440__$1,(11),out,inst_38417);
} else {
if((state_val_38441 === (5))){
var inst_38433 = cljs.core.async.close_BANG_(out);
var state_38440__$1 = state_38440;
var statearr_38492_40371 = state_38440__$1;
(statearr_38492_40371[(2)] = inst_38433);

(statearr_38492_40371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (10))){
var inst_38431 = (state_38440[(2)]);
var state_38440__$1 = state_38440;
var statearr_38495_40372 = state_38440__$1;
(statearr_38495_40372[(2)] = inst_38431);

(statearr_38495_40372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38441 === (8))){
var inst_38400 = (state_38440[(10)]);
var inst_38419 = (state_38440[(9)]);
var inst_38417 = (state_38440[(7)]);
var inst_38415 = (state_38440[(8)]);
var inst_38423 = (function (){var cs = inst_38400;
var vec__38411 = inst_38415;
var v = inst_38417;
var c = inst_38419;
return (function (p1__38387_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38387_SHARP_);
});
})();
var inst_38424 = cljs.core.filterv(inst_38423,inst_38400);
var inst_38400__$1 = inst_38424;
var state_38440__$1 = (function (){var statearr_38496 = state_38440;
(statearr_38496[(10)] = inst_38400__$1);

return statearr_38496;
})();
var statearr_38497_40375 = state_38440__$1;
(statearr_38497_40375[(2)] = null);

(statearr_38497_40375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_38500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38500[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_38500[(1)] = (1));

return statearr_38500;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_38440){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38440);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e38501){var ex__35928__auto__ = e38501;
var statearr_38502_40376 = state_38440;
(statearr_38502_40376[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38440[(4)]))){
var statearr_38509_40377 = state_38440;
(statearr_38509_40377[(1)] = cljs.core.first((state_38440[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40378 = state_38440;
state_38440 = G__40378;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_38440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_38440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_38521 = f__36175__auto__();
(statearr_38521[(6)] = c__36174__auto___40363);

return statearr_38521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38536 = arguments.length;
switch (G__38536) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38562){
var state_val_38563 = (state_38562[(1)]);
if((state_val_38563 === (7))){
var inst_38544 = (state_38562[(7)]);
var inst_38544__$1 = (state_38562[(2)]);
var inst_38545 = (inst_38544__$1 == null);
var inst_38546 = cljs.core.not(inst_38545);
var state_38562__$1 = (function (){var statearr_38566 = state_38562;
(statearr_38566[(7)] = inst_38544__$1);

return statearr_38566;
})();
if(inst_38546){
var statearr_38568_40389 = state_38562__$1;
(statearr_38568_40389[(1)] = (8));

} else {
var statearr_38570_40390 = state_38562__$1;
(statearr_38570_40390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (1))){
var inst_38539 = (0);
var state_38562__$1 = (function (){var statearr_38573 = state_38562;
(statearr_38573[(8)] = inst_38539);

return statearr_38573;
})();
var statearr_38575_40392 = state_38562__$1;
(statearr_38575_40392[(2)] = null);

(statearr_38575_40392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (4))){
var state_38562__$1 = state_38562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38562__$1,(7),ch);
} else {
if((state_val_38563 === (6))){
var inst_38557 = (state_38562[(2)]);
var state_38562__$1 = state_38562;
var statearr_38577_40397 = state_38562__$1;
(statearr_38577_40397[(2)] = inst_38557);

(statearr_38577_40397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (3))){
var inst_38559 = (state_38562[(2)]);
var inst_38560 = cljs.core.async.close_BANG_(out);
var state_38562__$1 = (function (){var statearr_38578 = state_38562;
(statearr_38578[(9)] = inst_38559);

return statearr_38578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38562__$1,inst_38560);
} else {
if((state_val_38563 === (2))){
var inst_38539 = (state_38562[(8)]);
var inst_38541 = (inst_38539 < n);
var state_38562__$1 = state_38562;
if(cljs.core.truth_(inst_38541)){
var statearr_38580_40398 = state_38562__$1;
(statearr_38580_40398[(1)] = (4));

} else {
var statearr_38582_40399 = state_38562__$1;
(statearr_38582_40399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (11))){
var inst_38539 = (state_38562[(8)]);
var inst_38549 = (state_38562[(2)]);
var inst_38550 = (inst_38539 + (1));
var inst_38539__$1 = inst_38550;
var state_38562__$1 = (function (){var statearr_38608 = state_38562;
(statearr_38608[(8)] = inst_38539__$1);

(statearr_38608[(10)] = inst_38549);

return statearr_38608;
})();
var statearr_38613_40400 = state_38562__$1;
(statearr_38613_40400[(2)] = null);

(statearr_38613_40400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (9))){
var state_38562__$1 = state_38562;
var statearr_38620_40401 = state_38562__$1;
(statearr_38620_40401[(2)] = null);

(statearr_38620_40401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (5))){
var state_38562__$1 = state_38562;
var statearr_38623_40402 = state_38562__$1;
(statearr_38623_40402[(2)] = null);

(statearr_38623_40402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (10))){
var inst_38554 = (state_38562[(2)]);
var state_38562__$1 = state_38562;
var statearr_38625_40403 = state_38562__$1;
(statearr_38625_40403[(2)] = inst_38554);

(statearr_38625_40403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38563 === (8))){
var inst_38544 = (state_38562[(7)]);
var state_38562__$1 = state_38562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38562__$1,(11),out,inst_38544);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_38630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38630[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_38630[(1)] = (1));

return statearr_38630;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_38562){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38562);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e38631){var ex__35928__auto__ = e38631;
var statearr_38632_40411 = state_38562;
(statearr_38632_40411[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38562[(4)]))){
var statearr_38635_40412 = state_38562;
(statearr_38635_40412[(1)] = cljs.core.first((state_38562[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40414 = state_38562;
state_38562 = G__40414;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_38562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_38562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_38636 = f__36175__auto__();
(statearr_38636[(6)] = c__36174__auto___40384);

return statearr_38636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38639 = (function (f,ch,meta38640){
this.f = f;
this.ch = ch;
this.meta38640 = meta38640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38641,meta38640__$1){
var self__ = this;
var _38641__$1 = this;
return (new cljs.core.async.t_cljs$core$async38639(self__.f,self__.ch,meta38640__$1));
}));

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38641){
var self__ = this;
var _38641__$1 = this;
return self__.meta38640;
}));

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38646 = (function (f,ch,meta38640,_,fn1,meta38647){
this.f = f;
this.ch = ch;
this.meta38640 = meta38640;
this._ = _;
this.fn1 = fn1;
this.meta38647 = meta38647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38648,meta38647__$1){
var self__ = this;
var _38648__$1 = this;
return (new cljs.core.async.t_cljs$core$async38646(self__.f,self__.ch,self__.meta38640,self__._,self__.fn1,meta38647__$1));
}));

(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38648){
var self__ = this;
var _38648__$1 = this;
return self__.meta38647;
}));

(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38637_SHARP_){
var G__38654 = (((p1__38637_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38637_SHARP_) : self__.f.call(null,p1__38637_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38654) : f1.call(null,G__38654));
});
}));

(cljs.core.async.t_cljs$core$async38646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38640","meta38640",340113074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38639","cljs.core.async/t_cljs$core$async38639",2064493345,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38647","meta38647",1563305107,null)], null);
}));

(cljs.core.async.t_cljs$core$async38646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38646");

(cljs.core.async.t_cljs$core$async38646.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38646.
 */
cljs.core.async.__GT_t_cljs$core$async38646 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38646(f__$1,ch__$1,meta38640__$1,___$2,fn1__$1,meta38647){
return (new cljs.core.async.t_cljs$core$async38646(f__$1,ch__$1,meta38640__$1,___$2,fn1__$1,meta38647));
});

}

return (new cljs.core.async.t_cljs$core$async38646(self__.f,self__.ch,self__.meta38640,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38680 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38680) : self__.f.call(null,G__38680));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38640","meta38640",340113074,null)], null);
}));

(cljs.core.async.t_cljs$core$async38639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38639");

(cljs.core.async.t_cljs$core$async38639.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38639.
 */
cljs.core.async.__GT_t_cljs$core$async38639 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38639(f__$1,ch__$1,meta38640){
return (new cljs.core.async.t_cljs$core$async38639(f__$1,ch__$1,meta38640));
});

}

return (new cljs.core.async.t_cljs$core$async38639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38690 = (function (f,ch,meta38691){
this.f = f;
this.ch = ch;
this.meta38691 = meta38691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38692,meta38691__$1){
var self__ = this;
var _38692__$1 = this;
return (new cljs.core.async.t_cljs$core$async38690(self__.f,self__.ch,meta38691__$1));
}));

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38692){
var self__ = this;
var _38692__$1 = this;
return self__.meta38691;
}));

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38691","meta38691",-1637390478,null)], null);
}));

(cljs.core.async.t_cljs$core$async38690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38690");

(cljs.core.async.t_cljs$core$async38690.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38690.
 */
cljs.core.async.__GT_t_cljs$core$async38690 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38690(f__$1,ch__$1,meta38691){
return (new cljs.core.async.t_cljs$core$async38690(f__$1,ch__$1,meta38691));
});

}

return (new cljs.core.async.t_cljs$core$async38690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38721 = (function (p,ch,meta38722){
this.p = p;
this.ch = ch;
this.meta38722 = meta38722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38723,meta38722__$1){
var self__ = this;
var _38723__$1 = this;
return (new cljs.core.async.t_cljs$core$async38721(self__.p,self__.ch,meta38722__$1));
}));

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38723){
var self__ = this;
var _38723__$1 = this;
return self__.meta38722;
}));

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38722","meta38722",86531360,null)], null);
}));

(cljs.core.async.t_cljs$core$async38721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38721");

(cljs.core.async.t_cljs$core$async38721.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38721.
 */
cljs.core.async.__GT_t_cljs$core$async38721 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38721(p__$1,ch__$1,meta38722){
return (new cljs.core.async.t_cljs$core$async38721(p__$1,ch__$1,meta38722));
});

}

return (new cljs.core.async.t_cljs$core$async38721(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38763 = arguments.length;
switch (G__38763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38793){
var state_val_38796 = (state_38793[(1)]);
if((state_val_38796 === (7))){
var inst_38787 = (state_38793[(2)]);
var state_38793__$1 = state_38793;
var statearr_38799_40453 = state_38793__$1;
(statearr_38799_40453[(2)] = inst_38787);

(statearr_38799_40453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (1))){
var state_38793__$1 = state_38793;
var statearr_38801_40454 = state_38793__$1;
(statearr_38801_40454[(2)] = null);

(statearr_38801_40454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (4))){
var inst_38770 = (state_38793[(7)]);
var inst_38770__$1 = (state_38793[(2)]);
var inst_38772 = (inst_38770__$1 == null);
var state_38793__$1 = (function (){var statearr_38804 = state_38793;
(statearr_38804[(7)] = inst_38770__$1);

return statearr_38804;
})();
if(cljs.core.truth_(inst_38772)){
var statearr_38805_40456 = state_38793__$1;
(statearr_38805_40456[(1)] = (5));

} else {
var statearr_38806_40457 = state_38793__$1;
(statearr_38806_40457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (6))){
var inst_38770 = (state_38793[(7)]);
var inst_38777 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38770) : p.call(null,inst_38770));
var state_38793__$1 = state_38793;
if(cljs.core.truth_(inst_38777)){
var statearr_38807_40458 = state_38793__$1;
(statearr_38807_40458[(1)] = (8));

} else {
var statearr_38808_40459 = state_38793__$1;
(statearr_38808_40459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (3))){
var inst_38789 = (state_38793[(2)]);
var state_38793__$1 = state_38793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38793__$1,inst_38789);
} else {
if((state_val_38796 === (2))){
var state_38793__$1 = state_38793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38793__$1,(4),ch);
} else {
if((state_val_38796 === (11))){
var inst_38780 = (state_38793[(2)]);
var state_38793__$1 = state_38793;
var statearr_38813_40463 = state_38793__$1;
(statearr_38813_40463[(2)] = inst_38780);

(statearr_38813_40463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (9))){
var state_38793__$1 = state_38793;
var statearr_38818_40464 = state_38793__$1;
(statearr_38818_40464[(2)] = null);

(statearr_38818_40464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (5))){
var inst_38775 = cljs.core.async.close_BANG_(out);
var state_38793__$1 = state_38793;
var statearr_38823_40466 = state_38793__$1;
(statearr_38823_40466[(2)] = inst_38775);

(statearr_38823_40466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (10))){
var inst_38783 = (state_38793[(2)]);
var state_38793__$1 = (function (){var statearr_38833 = state_38793;
(statearr_38833[(8)] = inst_38783);

return statearr_38833;
})();
var statearr_38834_40467 = state_38793__$1;
(statearr_38834_40467[(2)] = null);

(statearr_38834_40467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38796 === (8))){
var inst_38770 = (state_38793[(7)]);
var state_38793__$1 = state_38793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38793__$1,(11),out,inst_38770);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_38841 = [null,null,null,null,null,null,null,null,null];
(statearr_38841[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_38841[(1)] = (1));

return statearr_38841;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_38793){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38793);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e38843){var ex__35928__auto__ = e38843;
var statearr_38844_40468 = state_38793;
(statearr_38844_40468[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38793[(4)]))){
var statearr_38846_40472 = state_38793;
(statearr_38846_40472[(1)] = cljs.core.first((state_38793[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40473 = state_38793;
state_38793 = G__40473;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_38793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_38793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_38849 = f__36175__auto__();
(statearr_38849[(6)] = c__36174__auto___40449);

return statearr_38849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38856 = arguments.length;
switch (G__38856) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_38938){
var state_val_38939 = (state_38938[(1)]);
if((state_val_38939 === (7))){
var inst_38934 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38940_40478 = state_38938__$1;
(statearr_38940_40478[(2)] = inst_38934);

(statearr_38940_40478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (20))){
var inst_38894 = (state_38938[(7)]);
var inst_38912 = (state_38938[(2)]);
var inst_38916 = cljs.core.next(inst_38894);
var inst_38880 = inst_38916;
var inst_38881 = null;
var inst_38882 = (0);
var inst_38883 = (0);
var state_38938__$1 = (function (){var statearr_38941 = state_38938;
(statearr_38941[(8)] = inst_38883);

(statearr_38941[(9)] = inst_38881);

(statearr_38941[(10)] = inst_38912);

(statearr_38941[(11)] = inst_38880);

(statearr_38941[(12)] = inst_38882);

return statearr_38941;
})();
var statearr_38942_40482 = state_38938__$1;
(statearr_38942_40482[(2)] = null);

(statearr_38942_40482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (1))){
var state_38938__$1 = state_38938;
var statearr_38943_40483 = state_38938__$1;
(statearr_38943_40483[(2)] = null);

(statearr_38943_40483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (4))){
var inst_38869 = (state_38938[(13)]);
var inst_38869__$1 = (state_38938[(2)]);
var inst_38870 = (inst_38869__$1 == null);
var state_38938__$1 = (function (){var statearr_38944 = state_38938;
(statearr_38944[(13)] = inst_38869__$1);

return statearr_38944;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_38945_40484 = state_38938__$1;
(statearr_38945_40484[(1)] = (5));

} else {
var statearr_38946_40485 = state_38938__$1;
(statearr_38946_40485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (15))){
var state_38938__$1 = state_38938;
var statearr_38950_40486 = state_38938__$1;
(statearr_38950_40486[(2)] = null);

(statearr_38950_40486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (21))){
var state_38938__$1 = state_38938;
var statearr_38951_40491 = state_38938__$1;
(statearr_38951_40491[(2)] = null);

(statearr_38951_40491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (13))){
var inst_38883 = (state_38938[(8)]);
var inst_38881 = (state_38938[(9)]);
var inst_38880 = (state_38938[(11)]);
var inst_38882 = (state_38938[(12)]);
var inst_38890 = (state_38938[(2)]);
var inst_38891 = (inst_38883 + (1));
var tmp38947 = inst_38881;
var tmp38948 = inst_38880;
var tmp38949 = inst_38882;
var inst_38880__$1 = tmp38948;
var inst_38881__$1 = tmp38947;
var inst_38882__$1 = tmp38949;
var inst_38883__$1 = inst_38891;
var state_38938__$1 = (function (){var statearr_38952 = state_38938;
(statearr_38952[(8)] = inst_38883__$1);

(statearr_38952[(9)] = inst_38881__$1);

(statearr_38952[(11)] = inst_38880__$1);

(statearr_38952[(12)] = inst_38882__$1);

(statearr_38952[(14)] = inst_38890);

return statearr_38952;
})();
var statearr_38953_40492 = state_38938__$1;
(statearr_38953_40492[(2)] = null);

(statearr_38953_40492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (22))){
var state_38938__$1 = state_38938;
var statearr_38955_40493 = state_38938__$1;
(statearr_38955_40493[(2)] = null);

(statearr_38955_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (6))){
var inst_38869 = (state_38938[(13)]);
var inst_38878 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38869) : f.call(null,inst_38869));
var inst_38879 = cljs.core.seq(inst_38878);
var inst_38880 = inst_38879;
var inst_38881 = null;
var inst_38882 = (0);
var inst_38883 = (0);
var state_38938__$1 = (function (){var statearr_38962 = state_38938;
(statearr_38962[(8)] = inst_38883);

(statearr_38962[(9)] = inst_38881);

(statearr_38962[(11)] = inst_38880);

(statearr_38962[(12)] = inst_38882);

return statearr_38962;
})();
var statearr_38963_40498 = state_38938__$1;
(statearr_38963_40498[(2)] = null);

(statearr_38963_40498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (17))){
var inst_38894 = (state_38938[(7)]);
var inst_38902 = cljs.core.chunk_first(inst_38894);
var inst_38903 = cljs.core.chunk_rest(inst_38894);
var inst_38904 = cljs.core.count(inst_38902);
var inst_38880 = inst_38903;
var inst_38881 = inst_38902;
var inst_38882 = inst_38904;
var inst_38883 = (0);
var state_38938__$1 = (function (){var statearr_38964 = state_38938;
(statearr_38964[(8)] = inst_38883);

(statearr_38964[(9)] = inst_38881);

(statearr_38964[(11)] = inst_38880);

(statearr_38964[(12)] = inst_38882);

return statearr_38964;
})();
var statearr_38965_40499 = state_38938__$1;
(statearr_38965_40499[(2)] = null);

(statearr_38965_40499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (3))){
var inst_38936 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38938__$1,inst_38936);
} else {
if((state_val_38939 === (12))){
var inst_38924 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38967_40501 = state_38938__$1;
(statearr_38967_40501[(2)] = inst_38924);

(statearr_38967_40501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (2))){
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38938__$1,(4),in$);
} else {
if((state_val_38939 === (23))){
var inst_38932 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38968_40506 = state_38938__$1;
(statearr_38968_40506[(2)] = inst_38932);

(statearr_38968_40506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (19))){
var inst_38919 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38973_40507 = state_38938__$1;
(statearr_38973_40507[(2)] = inst_38919);

(statearr_38973_40507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (11))){
var inst_38880 = (state_38938[(11)]);
var inst_38894 = (state_38938[(7)]);
var inst_38894__$1 = cljs.core.seq(inst_38880);
var state_38938__$1 = (function (){var statearr_38978 = state_38938;
(statearr_38978[(7)] = inst_38894__$1);

return statearr_38978;
})();
if(inst_38894__$1){
var statearr_38979_40508 = state_38938__$1;
(statearr_38979_40508[(1)] = (14));

} else {
var statearr_38980_40509 = state_38938__$1;
(statearr_38980_40509[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (9))){
var inst_38926 = (state_38938[(2)]);
var inst_38927 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38938__$1 = (function (){var statearr_38981 = state_38938;
(statearr_38981[(15)] = inst_38926);

return statearr_38981;
})();
if(cljs.core.truth_(inst_38927)){
var statearr_38982_40513 = state_38938__$1;
(statearr_38982_40513[(1)] = (21));

} else {
var statearr_38983_40514 = state_38938__$1;
(statearr_38983_40514[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (5))){
var inst_38872 = cljs.core.async.close_BANG_(out);
var state_38938__$1 = state_38938;
var statearr_38986_40516 = state_38938__$1;
(statearr_38986_40516[(2)] = inst_38872);

(statearr_38986_40516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (14))){
var inst_38894 = (state_38938[(7)]);
var inst_38897 = cljs.core.chunked_seq_QMARK_(inst_38894);
var state_38938__$1 = state_38938;
if(inst_38897){
var statearr_38990_40517 = state_38938__$1;
(statearr_38990_40517[(1)] = (17));

} else {
var statearr_38991_40518 = state_38938__$1;
(statearr_38991_40518[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (16))){
var inst_38922 = (state_38938[(2)]);
var state_38938__$1 = state_38938;
var statearr_38996_40519 = state_38938__$1;
(statearr_38996_40519[(2)] = inst_38922);

(statearr_38996_40519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38939 === (10))){
var inst_38883 = (state_38938[(8)]);
var inst_38881 = (state_38938[(9)]);
var inst_38888 = cljs.core._nth(inst_38881,inst_38883);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38938__$1,(13),out,inst_38888);
} else {
if((state_val_38939 === (18))){
var inst_38894 = (state_38938[(7)]);
var inst_38910 = cljs.core.first(inst_38894);
var state_38938__$1 = state_38938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38938__$1,(20),out,inst_38910);
} else {
if((state_val_38939 === (8))){
var inst_38883 = (state_38938[(8)]);
var inst_38882 = (state_38938[(12)]);
var inst_38885 = (inst_38883 < inst_38882);
var inst_38886 = inst_38885;
var state_38938__$1 = state_38938;
if(cljs.core.truth_(inst_38886)){
var statearr_39007_40523 = state_38938__$1;
(statearr_39007_40523[(1)] = (10));

} else {
var statearr_39008_40525 = state_38938__$1;
(statearr_39008_40525[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____0 = (function (){
var statearr_39010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39010[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__);

(statearr_39010[(1)] = (1));

return statearr_39010;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____1 = (function (state_38938){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_38938);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e39013){var ex__35928__auto__ = e39013;
var statearr_39016_40530 = state_38938;
(statearr_39016_40530[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_38938[(4)]))){
var statearr_39019_40532 = state_38938;
(statearr_39019_40532[(1)] = cljs.core.first((state_38938[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40533 = state_38938;
state_38938 = G__40533;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__ = function(state_38938){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____1.call(this,state_38938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35925__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_39021 = f__36175__auto__();
(statearr_39021[(6)] = c__36174__auto__);

return statearr_39021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));

return c__36174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39023 = arguments.length;
switch (G__39023) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39030 = arguments.length;
switch (G__39030) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39036 = arguments.length;
switch (G__39036) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_39099){
var state_val_39100 = (state_39099[(1)]);
if((state_val_39100 === (7))){
var inst_39094 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39105_40556 = state_39099__$1;
(statearr_39105_40556[(2)] = inst_39094);

(statearr_39105_40556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (1))){
var inst_39045 = null;
var state_39099__$1 = (function (){var statearr_39111 = state_39099;
(statearr_39111[(7)] = inst_39045);

return statearr_39111;
})();
var statearr_39112_40557 = state_39099__$1;
(statearr_39112_40557[(2)] = null);

(statearr_39112_40557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (4))){
var inst_39050 = (state_39099[(8)]);
var inst_39050__$1 = (state_39099[(2)]);
var inst_39056 = (inst_39050__$1 == null);
var inst_39057 = cljs.core.not(inst_39056);
var state_39099__$1 = (function (){var statearr_39115 = state_39099;
(statearr_39115[(8)] = inst_39050__$1);

return statearr_39115;
})();
if(inst_39057){
var statearr_39116_40562 = state_39099__$1;
(statearr_39116_40562[(1)] = (5));

} else {
var statearr_39118_40563 = state_39099__$1;
(statearr_39118_40563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (6))){
var state_39099__$1 = state_39099;
var statearr_39120_40564 = state_39099__$1;
(statearr_39120_40564[(2)] = null);

(statearr_39120_40564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (3))){
var inst_39096 = (state_39099[(2)]);
var inst_39097 = cljs.core.async.close_BANG_(out);
var state_39099__$1 = (function (){var statearr_39123 = state_39099;
(statearr_39123[(9)] = inst_39096);

return statearr_39123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39099__$1,inst_39097);
} else {
if((state_val_39100 === (2))){
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39099__$1,(4),ch);
} else {
if((state_val_39100 === (11))){
var inst_39050 = (state_39099[(8)]);
var inst_39088 = (state_39099[(2)]);
var inst_39045 = inst_39050;
var state_39099__$1 = (function (){var statearr_39125 = state_39099;
(statearr_39125[(7)] = inst_39045);

(statearr_39125[(10)] = inst_39088);

return statearr_39125;
})();
var statearr_39128_40565 = state_39099__$1;
(statearr_39128_40565[(2)] = null);

(statearr_39128_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (9))){
var inst_39050 = (state_39099[(8)]);
var state_39099__$1 = state_39099;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39099__$1,(11),out,inst_39050);
} else {
if((state_val_39100 === (5))){
var inst_39045 = (state_39099[(7)]);
var inst_39050 = (state_39099[(8)]);
var inst_39063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39050,inst_39045);
var state_39099__$1 = state_39099;
if(inst_39063){
var statearr_39138_40570 = state_39099__$1;
(statearr_39138_40570[(1)] = (8));

} else {
var statearr_39146_40571 = state_39099__$1;
(statearr_39146_40571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (10))){
var inst_39091 = (state_39099[(2)]);
var state_39099__$1 = state_39099;
var statearr_39154_40572 = state_39099__$1;
(statearr_39154_40572[(2)] = inst_39091);

(statearr_39154_40572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39100 === (8))){
var inst_39045 = (state_39099[(7)]);
var tmp39132 = inst_39045;
var inst_39045__$1 = tmp39132;
var state_39099__$1 = (function (){var statearr_39162 = state_39099;
(statearr_39162[(7)] = inst_39045__$1);

return statearr_39162;
})();
var statearr_39167_40573 = state_39099__$1;
(statearr_39167_40573[(2)] = null);

(statearr_39167_40573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_39185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39185[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_39185[(1)] = (1));

return statearr_39185;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_39099){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_39099);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e39187){var ex__35928__auto__ = e39187;
var statearr_39189_40574 = state_39099;
(statearr_39189_40574[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_39099[(4)]))){
var statearr_39190_40575 = state_39099;
(statearr_39190_40575[(1)] = cljs.core.first((state_39099[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40576 = state_39099;
state_39099 = G__40576;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_39099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_39099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_39198 = f__36175__auto__();
(statearr_39198[(6)] = c__36174__auto___40555);

return statearr_39198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39204 = arguments.length;
switch (G__39204) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_39256){
var state_val_39257 = (state_39256[(1)]);
if((state_val_39257 === (7))){
var inst_39251 = (state_39256[(2)]);
var state_39256__$1 = state_39256;
var statearr_39265_40580 = state_39256__$1;
(statearr_39265_40580[(2)] = inst_39251);

(statearr_39265_40580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (1))){
var inst_39216 = (new Array(n));
var inst_39217 = inst_39216;
var inst_39218 = (0);
var state_39256__$1 = (function (){var statearr_39266 = state_39256;
(statearr_39266[(7)] = inst_39217);

(statearr_39266[(8)] = inst_39218);

return statearr_39266;
})();
var statearr_39267_40585 = state_39256__$1;
(statearr_39267_40585[(2)] = null);

(statearr_39267_40585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (4))){
var inst_39221 = (state_39256[(9)]);
var inst_39221__$1 = (state_39256[(2)]);
var inst_39222 = (inst_39221__$1 == null);
var inst_39223 = cljs.core.not(inst_39222);
var state_39256__$1 = (function (){var statearr_39268 = state_39256;
(statearr_39268[(9)] = inst_39221__$1);

return statearr_39268;
})();
if(inst_39223){
var statearr_39269_40589 = state_39256__$1;
(statearr_39269_40589[(1)] = (5));

} else {
var statearr_39270_40590 = state_39256__$1;
(statearr_39270_40590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (15))){
var inst_39245 = (state_39256[(2)]);
var state_39256__$1 = state_39256;
var statearr_39273_40591 = state_39256__$1;
(statearr_39273_40591[(2)] = inst_39245);

(statearr_39273_40591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (13))){
var state_39256__$1 = state_39256;
var statearr_39275_40592 = state_39256__$1;
(statearr_39275_40592[(2)] = null);

(statearr_39275_40592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (6))){
var inst_39218 = (state_39256[(8)]);
var inst_39241 = (inst_39218 > (0));
var state_39256__$1 = state_39256;
if(cljs.core.truth_(inst_39241)){
var statearr_39277_40593 = state_39256__$1;
(statearr_39277_40593[(1)] = (12));

} else {
var statearr_39278_40594 = state_39256__$1;
(statearr_39278_40594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (3))){
var inst_39253 = (state_39256[(2)]);
var state_39256__$1 = state_39256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39256__$1,inst_39253);
} else {
if((state_val_39257 === (12))){
var inst_39217 = (state_39256[(7)]);
var inst_39243 = cljs.core.vec(inst_39217);
var state_39256__$1 = state_39256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39256__$1,(15),out,inst_39243);
} else {
if((state_val_39257 === (2))){
var state_39256__$1 = state_39256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39256__$1,(4),ch);
} else {
if((state_val_39257 === (11))){
var inst_39233 = (state_39256[(2)]);
var inst_39234 = (new Array(n));
var inst_39217 = inst_39234;
var inst_39218 = (0);
var state_39256__$1 = (function (){var statearr_39290 = state_39256;
(statearr_39290[(10)] = inst_39233);

(statearr_39290[(7)] = inst_39217);

(statearr_39290[(8)] = inst_39218);

return statearr_39290;
})();
var statearr_39291_40596 = state_39256__$1;
(statearr_39291_40596[(2)] = null);

(statearr_39291_40596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (9))){
var inst_39217 = (state_39256[(7)]);
var inst_39231 = cljs.core.vec(inst_39217);
var state_39256__$1 = state_39256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39256__$1,(11),out,inst_39231);
} else {
if((state_val_39257 === (5))){
var inst_39221 = (state_39256[(9)]);
var inst_39217 = (state_39256[(7)]);
var inst_39226 = (state_39256[(11)]);
var inst_39218 = (state_39256[(8)]);
var inst_39225 = (inst_39217[inst_39218] = inst_39221);
var inst_39226__$1 = (inst_39218 + (1));
var inst_39227 = (inst_39226__$1 < n);
var state_39256__$1 = (function (){var statearr_39293 = state_39256;
(statearr_39293[(12)] = inst_39225);

(statearr_39293[(11)] = inst_39226__$1);

return statearr_39293;
})();
if(cljs.core.truth_(inst_39227)){
var statearr_39294_40597 = state_39256__$1;
(statearr_39294_40597[(1)] = (8));

} else {
var statearr_39295_40598 = state_39256__$1;
(statearr_39295_40598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (14))){
var inst_39248 = (state_39256[(2)]);
var inst_39249 = cljs.core.async.close_BANG_(out);
var state_39256__$1 = (function (){var statearr_39297 = state_39256;
(statearr_39297[(13)] = inst_39248);

return statearr_39297;
})();
var statearr_39299_40599 = state_39256__$1;
(statearr_39299_40599[(2)] = inst_39249);

(statearr_39299_40599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (10))){
var inst_39237 = (state_39256[(2)]);
var state_39256__$1 = state_39256;
var statearr_39300_40600 = state_39256__$1;
(statearr_39300_40600[(2)] = inst_39237);

(statearr_39300_40600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39257 === (8))){
var inst_39217 = (state_39256[(7)]);
var inst_39226 = (state_39256[(11)]);
var tmp39296 = inst_39217;
var inst_39217__$1 = tmp39296;
var inst_39218 = inst_39226;
var state_39256__$1 = (function (){var statearr_39301 = state_39256;
(statearr_39301[(7)] = inst_39217__$1);

(statearr_39301[(8)] = inst_39218);

return statearr_39301;
})();
var statearr_39302_40603 = state_39256__$1;
(statearr_39302_40603[(2)] = null);

(statearr_39302_40603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_39304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39304[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_39304[(1)] = (1));

return statearr_39304;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_39256){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_39256);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e39306){var ex__35928__auto__ = e39306;
var statearr_39308_40605 = state_39256;
(statearr_39308_40605[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_39256[(4)]))){
var statearr_39309_40606 = state_39256;
(statearr_39309_40606[(1)] = cljs.core.first((state_39256[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40607 = state_39256;
state_39256 = G__40607;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_39256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_39256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_39310 = f__36175__auto__();
(statearr_39310[(6)] = c__36174__auto___40579);

return statearr_39310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39313 = arguments.length;
switch (G__39313) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36174__auto___40609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36175__auto__ = (function (){var switch__35924__auto__ = (function (state_39377){
var state_val_39378 = (state_39377[(1)]);
if((state_val_39378 === (7))){
var inst_39372 = (state_39377[(2)]);
var state_39377__$1 = state_39377;
var statearr_39381_40610 = state_39377__$1;
(statearr_39381_40610[(2)] = inst_39372);

(statearr_39381_40610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (1))){
var inst_39321 = [];
var inst_39322 = inst_39321;
var inst_39323 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39377__$1 = (function (){var statearr_39383 = state_39377;
(statearr_39383[(7)] = inst_39323);

(statearr_39383[(8)] = inst_39322);

return statearr_39383;
})();
var statearr_39384_40611 = state_39377__$1;
(statearr_39384_40611[(2)] = null);

(statearr_39384_40611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (4))){
var inst_39331 = (state_39377[(9)]);
var inst_39331__$1 = (state_39377[(2)]);
var inst_39333 = (inst_39331__$1 == null);
var inst_39334 = cljs.core.not(inst_39333);
var state_39377__$1 = (function (){var statearr_39386 = state_39377;
(statearr_39386[(9)] = inst_39331__$1);

return statearr_39386;
})();
if(inst_39334){
var statearr_39387_40612 = state_39377__$1;
(statearr_39387_40612[(1)] = (5));

} else {
var statearr_39388_40613 = state_39377__$1;
(statearr_39388_40613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (15))){
var inst_39322 = (state_39377[(8)]);
var inst_39364 = cljs.core.vec(inst_39322);
var state_39377__$1 = state_39377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39377__$1,(18),out,inst_39364);
} else {
if((state_val_39378 === (13))){
var inst_39354 = (state_39377[(2)]);
var state_39377__$1 = state_39377;
var statearr_39390_40614 = state_39377__$1;
(statearr_39390_40614[(2)] = inst_39354);

(statearr_39390_40614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (6))){
var inst_39322 = (state_39377[(8)]);
var inst_39357 = inst_39322.length;
var inst_39358 = (inst_39357 > (0));
var state_39377__$1 = state_39377;
if(cljs.core.truth_(inst_39358)){
var statearr_39392_40615 = state_39377__$1;
(statearr_39392_40615[(1)] = (15));

} else {
var statearr_39393_40616 = state_39377__$1;
(statearr_39393_40616[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (17))){
var inst_39369 = (state_39377[(2)]);
var inst_39370 = cljs.core.async.close_BANG_(out);
var state_39377__$1 = (function (){var statearr_39394 = state_39377;
(statearr_39394[(10)] = inst_39369);

return statearr_39394;
})();
var statearr_39395_40617 = state_39377__$1;
(statearr_39395_40617[(2)] = inst_39370);

(statearr_39395_40617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (3))){
var inst_39374 = (state_39377[(2)]);
var state_39377__$1 = state_39377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39377__$1,inst_39374);
} else {
if((state_val_39378 === (12))){
var inst_39322 = (state_39377[(8)]);
var inst_39347 = cljs.core.vec(inst_39322);
var state_39377__$1 = state_39377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39377__$1,(14),out,inst_39347);
} else {
if((state_val_39378 === (2))){
var state_39377__$1 = state_39377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39377__$1,(4),ch);
} else {
if((state_val_39378 === (11))){
var inst_39331 = (state_39377[(9)]);
var inst_39336 = (state_39377[(11)]);
var inst_39322 = (state_39377[(8)]);
var inst_39344 = inst_39322.push(inst_39331);
var tmp39396 = inst_39322;
var inst_39322__$1 = tmp39396;
var inst_39323 = inst_39336;
var state_39377__$1 = (function (){var statearr_39397 = state_39377;
(statearr_39397[(7)] = inst_39323);

(statearr_39397[(8)] = inst_39322__$1);

(statearr_39397[(12)] = inst_39344);

return statearr_39397;
})();
var statearr_39399_40618 = state_39377__$1;
(statearr_39399_40618[(2)] = null);

(statearr_39399_40618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (9))){
var inst_39323 = (state_39377[(7)]);
var inst_39340 = cljs.core.keyword_identical_QMARK_(inst_39323,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39377__$1 = state_39377;
var statearr_39400_40619 = state_39377__$1;
(statearr_39400_40619[(2)] = inst_39340);

(statearr_39400_40619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (5))){
var inst_39331 = (state_39377[(9)]);
var inst_39323 = (state_39377[(7)]);
var inst_39336 = (state_39377[(11)]);
var inst_39337 = (state_39377[(13)]);
var inst_39336__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39331) : f.call(null,inst_39331));
var inst_39337__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39336__$1,inst_39323);
var state_39377__$1 = (function (){var statearr_39401 = state_39377;
(statearr_39401[(11)] = inst_39336__$1);

(statearr_39401[(13)] = inst_39337__$1);

return statearr_39401;
})();
if(inst_39337__$1){
var statearr_39402_40620 = state_39377__$1;
(statearr_39402_40620[(1)] = (8));

} else {
var statearr_39403_40621 = state_39377__$1;
(statearr_39403_40621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (14))){
var inst_39331 = (state_39377[(9)]);
var inst_39336 = (state_39377[(11)]);
var inst_39349 = (state_39377[(2)]);
var inst_39350 = [];
var inst_39351 = inst_39350.push(inst_39331);
var inst_39322 = inst_39350;
var inst_39323 = inst_39336;
var state_39377__$1 = (function (){var statearr_39404 = state_39377;
(statearr_39404[(7)] = inst_39323);

(statearr_39404[(8)] = inst_39322);

(statearr_39404[(14)] = inst_39351);

(statearr_39404[(15)] = inst_39349);

return statearr_39404;
})();
var statearr_39405_40623 = state_39377__$1;
(statearr_39405_40623[(2)] = null);

(statearr_39405_40623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (16))){
var state_39377__$1 = state_39377;
var statearr_39406_40627 = state_39377__$1;
(statearr_39406_40627[(2)] = null);

(statearr_39406_40627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (10))){
var inst_39342 = (state_39377[(2)]);
var state_39377__$1 = state_39377;
if(cljs.core.truth_(inst_39342)){
var statearr_39408_40632 = state_39377__$1;
(statearr_39408_40632[(1)] = (11));

} else {
var statearr_39409_40633 = state_39377__$1;
(statearr_39409_40633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (18))){
var inst_39366 = (state_39377[(2)]);
var state_39377__$1 = state_39377;
var statearr_39412_40634 = state_39377__$1;
(statearr_39412_40634[(2)] = inst_39366);

(statearr_39412_40634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39378 === (8))){
var inst_39337 = (state_39377[(13)]);
var state_39377__$1 = state_39377;
var statearr_39414_40635 = state_39377__$1;
(statearr_39414_40635[(2)] = inst_39337);

(statearr_39414_40635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35925__auto__ = null;
var cljs$core$async$state_machine__35925__auto____0 = (function (){
var statearr_39419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39419[(0)] = cljs$core$async$state_machine__35925__auto__);

(statearr_39419[(1)] = (1));

return statearr_39419;
});
var cljs$core$async$state_machine__35925__auto____1 = (function (state_39377){
while(true){
var ret_value__35926__auto__ = (function (){try{while(true){
var result__35927__auto__ = switch__35924__auto__(state_39377);
if(cljs.core.keyword_identical_QMARK_(result__35927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35927__auto__;
}
break;
}
}catch (e39422){var ex__35928__auto__ = e39422;
var statearr_39424_40636 = state_39377;
(statearr_39424_40636[(2)] = ex__35928__auto__);


if(cljs.core.seq((state_39377[(4)]))){
var statearr_39425_40638 = state_39377;
(statearr_39425_40638[(1)] = cljs.core.first((state_39377[(4)])));

} else {
throw ex__35928__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40639 = state_39377;
state_39377 = G__40639;
continue;
} else {
return ret_value__35926__auto__;
}
break;
}
});
cljs$core$async$state_machine__35925__auto__ = function(state_39377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35925__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35925__auto____1.call(this,state_39377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35925__auto____0;
cljs$core$async$state_machine__35925__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35925__auto____1;
return cljs$core$async$state_machine__35925__auto__;
})()
})();
var state__36176__auto__ = (function (){var statearr_39426 = f__36175__auto__();
(statearr_39426[(6)] = c__36174__auto___40609);

return statearr_39426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
