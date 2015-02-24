// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t10668 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10668 = (function (f,fn_handler,meta10669){
this.f = f;
this.fn_handler = fn_handler;
this.meta10669 = meta10669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10668.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10670){
var self__ = this;
var _10670__$1 = this;
return self__.meta10669;
});

cljs.core.async.t10668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10670,meta10669__$1){
var self__ = this;
var _10670__$1 = this;
return (new cljs.core.async.t10668(self__.f,self__.fn_handler,meta10669__$1));
});

cljs.core.async.t10668.cljs$lang$type = true;

cljs.core.async.t10668.cljs$lang$ctorStr = "cljs.core.async/t10668";

cljs.core.async.t10668.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10668");
});

cljs.core.async.__GT_t10668 = (function __GT_t10668(f__$1,fn_handler__$1,meta10669){
return (new cljs.core.async.t10668(f__$1,fn_handler__$1,meta10669));
});

}

return (new cljs.core.async.t10668(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__10672 = buff;
if(G__10672){
var bit__4402__auto__ = null;
if(cljs.core.truth_((function (){var or__3721__auto__ = bit__4402__auto__;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return G__10672.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__10672.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10672);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10672);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10673 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10673);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10673,ret){
return (function (){
return fn1.call(null,val_10673);
});})(val_10673,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4608__auto___10674 = n;
var x_10675 = (0);
while(true){
if((x_10675 < n__4608__auto___10674)){
(a[x_10675] = (0));

var G__10676 = (x_10675 + (1));
x_10675 = G__10676;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10677 = (i + (1));
i = G__10677;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10681 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10681 = (function (flag,alt_flag,meta10682){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10682 = meta10682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10683){
var self__ = this;
var _10683__$1 = this;
return self__.meta10682;
});})(flag))
;

cljs.core.async.t10681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10683,meta10682__$1){
var self__ = this;
var _10683__$1 = this;
return (new cljs.core.async.t10681(self__.flag,self__.alt_flag,meta10682__$1));
});})(flag))
;

cljs.core.async.t10681.cljs$lang$type = true;

cljs.core.async.t10681.cljs$lang$ctorStr = "cljs.core.async/t10681";

cljs.core.async.t10681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10681");
});})(flag))
;

cljs.core.async.__GT_t10681 = ((function (flag){
return (function __GT_t10681(flag__$1,alt_flag__$1,meta10682){
return (new cljs.core.async.t10681(flag__$1,alt_flag__$1,meta10682));
});})(flag))
;

}

return (new cljs.core.async.t10681(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t10687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10687 = (function (cb,flag,alt_handler,meta10688){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10688 = meta10688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10689){
var self__ = this;
var _10689__$1 = this;
return self__.meta10688;
});

cljs.core.async.t10687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10689,meta10688__$1){
var self__ = this;
var _10689__$1 = this;
return (new cljs.core.async.t10687(self__.cb,self__.flag,self__.alt_handler,meta10688__$1));
});

cljs.core.async.t10687.cljs$lang$type = true;

cljs.core.async.t10687.cljs$lang$ctorStr = "cljs.core.async/t10687";

cljs.core.async.t10687.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10687");
});

cljs.core.async.__GT_t10687 = (function __GT_t10687(cb__$1,flag__$1,alt_handler__$1,meta10688){
return (new cljs.core.async.t10687(cb__$1,flag__$1,alt_handler__$1,meta10688));
});

}

return (new cljs.core.async.t10687(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10690_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10691_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3721__auto__ = wport;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10692 = (i + (1));
i = G__10692;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3721__auto__ = ret;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3709__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3709__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3709__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10693){
var map__10695 = p__10693;
var map__10695__$1 = ((cljs.core.seq_QMARK_.call(null,map__10695))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);
var opts = map__10695__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__10693 = null;
if (arguments.length > 1) {
  p__10693 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__10693);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10696){
var ports = cljs.core.first(arglist__10696);
var p__10693 = cljs.core.rest(arglist__10696);
return alts_BANG___delegate(ports,p__10693);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t10704 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10704 = (function (ch,f,map_LT_,meta10705){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10705 = meta10705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t10707 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10707 = (function (fn1,_,meta10705,map_LT_,f,ch,meta10708){
this.fn1 = fn1;
this._ = _;
this.meta10705 = meta10705;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10708 = meta10708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10707.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t10707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10697_SHARP_){
return f1.call(null,(((p1__10697_SHARP_ == null))?null:self__.f.call(null,p1__10697_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t10707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10709){
var self__ = this;
var _10709__$1 = this;
return self__.meta10708;
});})(___$1))
;

cljs.core.async.t10707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10709,meta10708__$1){
var self__ = this;
var _10709__$1 = this;
return (new cljs.core.async.t10707(self__.fn1,self__._,self__.meta10705,self__.map_LT_,self__.f,self__.ch,meta10708__$1));
});})(___$1))
;

cljs.core.async.t10707.cljs$lang$type = true;

cljs.core.async.t10707.cljs$lang$ctorStr = "cljs.core.async/t10707";

cljs.core.async.t10707.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10707");
});})(___$1))
;

cljs.core.async.__GT_t10707 = ((function (___$1){
return (function __GT_t10707(fn1__$1,___$2,meta10705__$1,map_LT___$1,f__$1,ch__$1,meta10708){
return (new cljs.core.async.t10707(fn1__$1,___$2,meta10705__$1,map_LT___$1,f__$1,ch__$1,meta10708));
});})(___$1))
;

}

return (new cljs.core.async.t10707(fn1,___$1,self__.meta10705,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3709__auto__ = ret;
if(cljs.core.truth_(and__3709__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3709__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10706){
var self__ = this;
var _10706__$1 = this;
return self__.meta10705;
});

cljs.core.async.t10704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10706,meta10705__$1){
var self__ = this;
var _10706__$1 = this;
return (new cljs.core.async.t10704(self__.ch,self__.f,self__.map_LT_,meta10705__$1));
});

cljs.core.async.t10704.cljs$lang$type = true;

cljs.core.async.t10704.cljs$lang$ctorStr = "cljs.core.async/t10704";

cljs.core.async.t10704.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10704");
});

cljs.core.async.__GT_t10704 = (function __GT_t10704(ch__$1,f__$1,map_LT___$1,meta10705){
return (new cljs.core.async.t10704(ch__$1,f__$1,map_LT___$1,meta10705));
});

}

return (new cljs.core.async.t10704(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t10713 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10713 = (function (ch,f,map_GT_,meta10714){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10714 = meta10714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10715){
var self__ = this;
var _10715__$1 = this;
return self__.meta10714;
});

cljs.core.async.t10713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10715,meta10714__$1){
var self__ = this;
var _10715__$1 = this;
return (new cljs.core.async.t10713(self__.ch,self__.f,self__.map_GT_,meta10714__$1));
});

cljs.core.async.t10713.cljs$lang$type = true;

cljs.core.async.t10713.cljs$lang$ctorStr = "cljs.core.async/t10713";

cljs.core.async.t10713.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10713");
});

cljs.core.async.__GT_t10713 = (function __GT_t10713(ch__$1,f__$1,map_GT___$1,meta10714){
return (new cljs.core.async.t10713(ch__$1,f__$1,map_GT___$1,meta10714));
});

}

return (new cljs.core.async.t10713(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t10719 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10719 = (function (ch,p,filter_GT_,meta10720){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10720 = meta10720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t10719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t10719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10721){
var self__ = this;
var _10721__$1 = this;
return self__.meta10720;
});

cljs.core.async.t10719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10721,meta10720__$1){
var self__ = this;
var _10721__$1 = this;
return (new cljs.core.async.t10719(self__.ch,self__.p,self__.filter_GT_,meta10720__$1));
});

cljs.core.async.t10719.cljs$lang$type = true;

cljs.core.async.t10719.cljs$lang$ctorStr = "cljs.core.async/t10719";

cljs.core.async.t10719.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t10719");
});

cljs.core.async.__GT_t10719 = (function __GT_t10719(ch__$1,p__$1,filter_GT___$1,meta10720){
return (new cljs.core.async.t10719(ch__$1,p__$1,filter_GT___$1,meta10720));
});

}

return (new cljs.core.async.t10719(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___10804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___10804,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___10804,out){
return (function (state_10783){
var state_val_10784 = (state_10783[(1)]);
if((state_val_10784 === (7))){
var inst_10779 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10785_10805 = state_10783__$1;
(statearr_10785_10805[(2)] = inst_10779);

(statearr_10785_10805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (1))){
var state_10783__$1 = state_10783;
var statearr_10786_10806 = state_10783__$1;
(statearr_10786_10806[(2)] = null);

(statearr_10786_10806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (4))){
var inst_10765 = (state_10783[(7)]);
var inst_10765__$1 = (state_10783[(2)]);
var inst_10766 = (inst_10765__$1 == null);
var state_10783__$1 = (function (){var statearr_10787 = state_10783;
(statearr_10787[(7)] = inst_10765__$1);

return statearr_10787;
})();
if(cljs.core.truth_(inst_10766)){
var statearr_10788_10807 = state_10783__$1;
(statearr_10788_10807[(1)] = (5));

} else {
var statearr_10789_10808 = state_10783__$1;
(statearr_10789_10808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (6))){
var inst_10765 = (state_10783[(7)]);
var inst_10770 = p.call(null,inst_10765);
var state_10783__$1 = state_10783;
if(cljs.core.truth_(inst_10770)){
var statearr_10790_10809 = state_10783__$1;
(statearr_10790_10809[(1)] = (8));

} else {
var statearr_10791_10810 = state_10783__$1;
(statearr_10791_10810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (3))){
var inst_10781 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10783__$1,inst_10781);
} else {
if((state_val_10784 === (2))){
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10783__$1,(4),ch);
} else {
if((state_val_10784 === (11))){
var inst_10773 = (state_10783[(2)]);
var state_10783__$1 = state_10783;
var statearr_10792_10811 = state_10783__$1;
(statearr_10792_10811[(2)] = inst_10773);

(statearr_10792_10811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (9))){
var state_10783__$1 = state_10783;
var statearr_10793_10812 = state_10783__$1;
(statearr_10793_10812[(2)] = null);

(statearr_10793_10812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (5))){
var inst_10768 = cljs.core.async.close_BANG_.call(null,out);
var state_10783__$1 = state_10783;
var statearr_10794_10813 = state_10783__$1;
(statearr_10794_10813[(2)] = inst_10768);

(statearr_10794_10813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (10))){
var inst_10776 = (state_10783[(2)]);
var state_10783__$1 = (function (){var statearr_10795 = state_10783;
(statearr_10795[(8)] = inst_10776);

return statearr_10795;
})();
var statearr_10796_10814 = state_10783__$1;
(statearr_10796_10814[(2)] = null);

(statearr_10796_10814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10784 === (8))){
var inst_10765 = (state_10783[(7)]);
var state_10783__$1 = state_10783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10783__$1,(11),out,inst_10765);
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
});})(c__7508__auto___10804,out))
;
return ((function (switch__7443__auto__,c__7508__auto___10804,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_10800 = [null,null,null,null,null,null,null,null,null];
(statearr_10800[(0)] = state_machine__7444__auto__);

(statearr_10800[(1)] = (1));

return statearr_10800;
});
var state_machine__7444__auto____1 = (function (state_10783){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_10783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e10801){if((e10801 instanceof Object)){
var ex__7447__auto__ = e10801;
var statearr_10802_10815 = state_10783;
(statearr_10802_10815[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10816 = state_10783;
state_10783 = G__10816;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_10783){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_10783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___10804,out))
})();
var state__7510__auto__ = (function (){var statearr_10803 = f__7509__auto__.call(null);
(statearr_10803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___10804);

return statearr_10803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___10804,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto__){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto__){
return (function (state_10982){
var state_val_10983 = (state_10982[(1)]);
if((state_val_10983 === (7))){
var inst_10978 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_10984_11025 = state_10982__$1;
(statearr_10984_11025[(2)] = inst_10978);

(statearr_10984_11025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (20))){
var inst_10948 = (state_10982[(7)]);
var inst_10959 = (state_10982[(2)]);
var inst_10960 = cljs.core.next.call(null,inst_10948);
var inst_10934 = inst_10960;
var inst_10935 = null;
var inst_10936 = (0);
var inst_10937 = (0);
var state_10982__$1 = (function (){var statearr_10985 = state_10982;
(statearr_10985[(8)] = inst_10937);

(statearr_10985[(9)] = inst_10936);

(statearr_10985[(10)] = inst_10934);

(statearr_10985[(11)] = inst_10959);

(statearr_10985[(12)] = inst_10935);

return statearr_10985;
})();
var statearr_10986_11026 = state_10982__$1;
(statearr_10986_11026[(2)] = null);

(statearr_10986_11026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (1))){
var state_10982__$1 = state_10982;
var statearr_10987_11027 = state_10982__$1;
(statearr_10987_11027[(2)] = null);

(statearr_10987_11027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (4))){
var inst_10923 = (state_10982[(13)]);
var inst_10923__$1 = (state_10982[(2)]);
var inst_10924 = (inst_10923__$1 == null);
var state_10982__$1 = (function (){var statearr_10988 = state_10982;
(statearr_10988[(13)] = inst_10923__$1);

return statearr_10988;
})();
if(cljs.core.truth_(inst_10924)){
var statearr_10989_11028 = state_10982__$1;
(statearr_10989_11028[(1)] = (5));

} else {
var statearr_10990_11029 = state_10982__$1;
(statearr_10990_11029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (15))){
var state_10982__$1 = state_10982;
var statearr_10994_11030 = state_10982__$1;
(statearr_10994_11030[(2)] = null);

(statearr_10994_11030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (21))){
var state_10982__$1 = state_10982;
var statearr_10995_11031 = state_10982__$1;
(statearr_10995_11031[(2)] = null);

(statearr_10995_11031[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (13))){
var inst_10937 = (state_10982[(8)]);
var inst_10936 = (state_10982[(9)]);
var inst_10934 = (state_10982[(10)]);
var inst_10935 = (state_10982[(12)]);
var inst_10944 = (state_10982[(2)]);
var inst_10945 = (inst_10937 + (1));
var tmp10991 = inst_10936;
var tmp10992 = inst_10934;
var tmp10993 = inst_10935;
var inst_10934__$1 = tmp10992;
var inst_10935__$1 = tmp10993;
var inst_10936__$1 = tmp10991;
var inst_10937__$1 = inst_10945;
var state_10982__$1 = (function (){var statearr_10996 = state_10982;
(statearr_10996[(8)] = inst_10937__$1);

(statearr_10996[(9)] = inst_10936__$1);

(statearr_10996[(10)] = inst_10934__$1);

(statearr_10996[(14)] = inst_10944);

(statearr_10996[(12)] = inst_10935__$1);

return statearr_10996;
})();
var statearr_10997_11032 = state_10982__$1;
(statearr_10997_11032[(2)] = null);

(statearr_10997_11032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (22))){
var state_10982__$1 = state_10982;
var statearr_10998_11033 = state_10982__$1;
(statearr_10998_11033[(2)] = null);

(statearr_10998_11033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (6))){
var inst_10923 = (state_10982[(13)]);
var inst_10932 = f.call(null,inst_10923);
var inst_10933 = cljs.core.seq.call(null,inst_10932);
var inst_10934 = inst_10933;
var inst_10935 = null;
var inst_10936 = (0);
var inst_10937 = (0);
var state_10982__$1 = (function (){var statearr_10999 = state_10982;
(statearr_10999[(8)] = inst_10937);

(statearr_10999[(9)] = inst_10936);

(statearr_10999[(10)] = inst_10934);

(statearr_10999[(12)] = inst_10935);

return statearr_10999;
})();
var statearr_11000_11034 = state_10982__$1;
(statearr_11000_11034[(2)] = null);

(statearr_11000_11034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (17))){
var inst_10948 = (state_10982[(7)]);
var inst_10952 = cljs.core.chunk_first.call(null,inst_10948);
var inst_10953 = cljs.core.chunk_rest.call(null,inst_10948);
var inst_10954 = cljs.core.count.call(null,inst_10952);
var inst_10934 = inst_10953;
var inst_10935 = inst_10952;
var inst_10936 = inst_10954;
var inst_10937 = (0);
var state_10982__$1 = (function (){var statearr_11001 = state_10982;
(statearr_11001[(8)] = inst_10937);

(statearr_11001[(9)] = inst_10936);

(statearr_11001[(10)] = inst_10934);

(statearr_11001[(12)] = inst_10935);

return statearr_11001;
})();
var statearr_11002_11035 = state_10982__$1;
(statearr_11002_11035[(2)] = null);

(statearr_11002_11035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (3))){
var inst_10980 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10982__$1,inst_10980);
} else {
if((state_val_10983 === (12))){
var inst_10968 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_11003_11036 = state_10982__$1;
(statearr_11003_11036[(2)] = inst_10968);

(statearr_11003_11036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (2))){
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10982__$1,(4),in$);
} else {
if((state_val_10983 === (23))){
var inst_10976 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_11004_11037 = state_10982__$1;
(statearr_11004_11037[(2)] = inst_10976);

(statearr_11004_11037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (19))){
var inst_10963 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_11005_11038 = state_10982__$1;
(statearr_11005_11038[(2)] = inst_10963);

(statearr_11005_11038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (11))){
var inst_10934 = (state_10982[(10)]);
var inst_10948 = (state_10982[(7)]);
var inst_10948__$1 = cljs.core.seq.call(null,inst_10934);
var state_10982__$1 = (function (){var statearr_11006 = state_10982;
(statearr_11006[(7)] = inst_10948__$1);

return statearr_11006;
})();
if(inst_10948__$1){
var statearr_11007_11039 = state_10982__$1;
(statearr_11007_11039[(1)] = (14));

} else {
var statearr_11008_11040 = state_10982__$1;
(statearr_11008_11040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (9))){
var inst_10970 = (state_10982[(2)]);
var inst_10971 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_10982__$1 = (function (){var statearr_11009 = state_10982;
(statearr_11009[(15)] = inst_10970);

return statearr_11009;
})();
if(cljs.core.truth_(inst_10971)){
var statearr_11010_11041 = state_10982__$1;
(statearr_11010_11041[(1)] = (21));

} else {
var statearr_11011_11042 = state_10982__$1;
(statearr_11011_11042[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (5))){
var inst_10926 = cljs.core.async.close_BANG_.call(null,out);
var state_10982__$1 = state_10982;
var statearr_11012_11043 = state_10982__$1;
(statearr_11012_11043[(2)] = inst_10926);

(statearr_11012_11043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (14))){
var inst_10948 = (state_10982[(7)]);
var inst_10950 = cljs.core.chunked_seq_QMARK_.call(null,inst_10948);
var state_10982__$1 = state_10982;
if(inst_10950){
var statearr_11013_11044 = state_10982__$1;
(statearr_11013_11044[(1)] = (17));

} else {
var statearr_11014_11045 = state_10982__$1;
(statearr_11014_11045[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (16))){
var inst_10966 = (state_10982[(2)]);
var state_10982__$1 = state_10982;
var statearr_11015_11046 = state_10982__$1;
(statearr_11015_11046[(2)] = inst_10966);

(statearr_11015_11046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10983 === (10))){
var inst_10937 = (state_10982[(8)]);
var inst_10935 = (state_10982[(12)]);
var inst_10942 = cljs.core._nth.call(null,inst_10935,inst_10937);
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10982__$1,(13),out,inst_10942);
} else {
if((state_val_10983 === (18))){
var inst_10948 = (state_10982[(7)]);
var inst_10957 = cljs.core.first.call(null,inst_10948);
var state_10982__$1 = state_10982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10982__$1,(20),out,inst_10957);
} else {
if((state_val_10983 === (8))){
var inst_10937 = (state_10982[(8)]);
var inst_10936 = (state_10982[(9)]);
var inst_10939 = (inst_10937 < inst_10936);
var inst_10940 = inst_10939;
var state_10982__$1 = state_10982;
if(cljs.core.truth_(inst_10940)){
var statearr_11016_11047 = state_10982__$1;
(statearr_11016_11047[(1)] = (10));

} else {
var statearr_11017_11048 = state_10982__$1;
(statearr_11017_11048[(1)] = (11));

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
});})(c__7508__auto__))
;
return ((function (switch__7443__auto__,c__7508__auto__){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11021[(0)] = state_machine__7444__auto__);

(statearr_11021[(1)] = (1));

return statearr_11021;
});
var state_machine__7444__auto____1 = (function (state_10982){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_10982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11022){if((e11022 instanceof Object)){
var ex__7447__auto__ = e11022;
var statearr_11023_11049 = state_10982;
(statearr_11023_11049[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11050 = state_10982;
state_10982 = G__11050;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_10982){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_10982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto__))
})();
var state__7510__auto__ = (function (){var statearr_11024 = f__7509__auto__.call(null);
(statearr_11024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto__);

return statearr_11024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto__))
);

return c__7508__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7508__auto___11145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___11145){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___11145){
return (function (state_11121){
var state_val_11122 = (state_11121[(1)]);
if((state_val_11122 === (7))){
var inst_11117 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11123_11146 = state_11121__$1;
(statearr_11123_11146[(2)] = inst_11117);

(statearr_11123_11146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (1))){
var state_11121__$1 = state_11121;
var statearr_11124_11147 = state_11121__$1;
(statearr_11124_11147[(2)] = null);

(statearr_11124_11147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (4))){
var inst_11100 = (state_11121[(7)]);
var inst_11100__$1 = (state_11121[(2)]);
var inst_11101 = (inst_11100__$1 == null);
var state_11121__$1 = (function (){var statearr_11125 = state_11121;
(statearr_11125[(7)] = inst_11100__$1);

return statearr_11125;
})();
if(cljs.core.truth_(inst_11101)){
var statearr_11126_11148 = state_11121__$1;
(statearr_11126_11148[(1)] = (5));

} else {
var statearr_11127_11149 = state_11121__$1;
(statearr_11127_11149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (13))){
var state_11121__$1 = state_11121;
var statearr_11128_11150 = state_11121__$1;
(statearr_11128_11150[(2)] = null);

(statearr_11128_11150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (6))){
var inst_11100 = (state_11121[(7)]);
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11121__$1,(11),to,inst_11100);
} else {
if((state_val_11122 === (3))){
var inst_11119 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11121__$1,inst_11119);
} else {
if((state_val_11122 === (12))){
var state_11121__$1 = state_11121;
var statearr_11129_11151 = state_11121__$1;
(statearr_11129_11151[(2)] = null);

(statearr_11129_11151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (2))){
var state_11121__$1 = state_11121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11121__$1,(4),from);
} else {
if((state_val_11122 === (11))){
var inst_11110 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
if(cljs.core.truth_(inst_11110)){
var statearr_11130_11152 = state_11121__$1;
(statearr_11130_11152[(1)] = (12));

} else {
var statearr_11131_11153 = state_11121__$1;
(statearr_11131_11153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (9))){
var state_11121__$1 = state_11121;
var statearr_11132_11154 = state_11121__$1;
(statearr_11132_11154[(2)] = null);

(statearr_11132_11154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (5))){
var state_11121__$1 = state_11121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11133_11155 = state_11121__$1;
(statearr_11133_11155[(1)] = (8));

} else {
var statearr_11134_11156 = state_11121__$1;
(statearr_11134_11156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (14))){
var inst_11115 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11135_11157 = state_11121__$1;
(statearr_11135_11157[(2)] = inst_11115);

(statearr_11135_11157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (10))){
var inst_11107 = (state_11121[(2)]);
var state_11121__$1 = state_11121;
var statearr_11136_11158 = state_11121__$1;
(statearr_11136_11158[(2)] = inst_11107);

(statearr_11136_11158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11122 === (8))){
var inst_11104 = cljs.core.async.close_BANG_.call(null,to);
var state_11121__$1 = state_11121;
var statearr_11137_11159 = state_11121__$1;
(statearr_11137_11159[(2)] = inst_11104);

(statearr_11137_11159[(1)] = (10));


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
});})(c__7508__auto___11145))
;
return ((function (switch__7443__auto__,c__7508__auto___11145){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11141 = [null,null,null,null,null,null,null,null];
(statearr_11141[(0)] = state_machine__7444__auto__);

(statearr_11141[(1)] = (1));

return statearr_11141;
});
var state_machine__7444__auto____1 = (function (state_11121){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_11121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11142){if((e11142 instanceof Object)){
var ex__7447__auto__ = e11142;
var statearr_11143_11160 = state_11121;
(statearr_11143_11160[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11161 = state_11121;
state_11121 = G__11161;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_11121){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_11121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___11145))
})();
var state__7510__auto__ = (function (){var statearr_11144 = f__7509__auto__.call(null);
(statearr_11144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___11145);

return statearr_11144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___11145))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7508__auto___11262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___11262,tc,fc){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___11262,tc,fc){
return (function (state_11237){
var state_val_11238 = (state_11237[(1)]);
if((state_val_11238 === (7))){
var inst_11233 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11239_11263 = state_11237__$1;
(statearr_11239_11263[(2)] = inst_11233);

(statearr_11239_11263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (1))){
var state_11237__$1 = state_11237;
var statearr_11240_11264 = state_11237__$1;
(statearr_11240_11264[(2)] = null);

(statearr_11240_11264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (4))){
var inst_11214 = (state_11237[(7)]);
var inst_11214__$1 = (state_11237[(2)]);
var inst_11215 = (inst_11214__$1 == null);
var state_11237__$1 = (function (){var statearr_11241 = state_11237;
(statearr_11241[(7)] = inst_11214__$1);

return statearr_11241;
})();
if(cljs.core.truth_(inst_11215)){
var statearr_11242_11265 = state_11237__$1;
(statearr_11242_11265[(1)] = (5));

} else {
var statearr_11243_11266 = state_11237__$1;
(statearr_11243_11266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (13))){
var state_11237__$1 = state_11237;
var statearr_11244_11267 = state_11237__$1;
(statearr_11244_11267[(2)] = null);

(statearr_11244_11267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (6))){
var inst_11214 = (state_11237[(7)]);
var inst_11220 = p.call(null,inst_11214);
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11220)){
var statearr_11245_11268 = state_11237__$1;
(statearr_11245_11268[(1)] = (9));

} else {
var statearr_11246_11269 = state_11237__$1;
(statearr_11246_11269[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (3))){
var inst_11235 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11237__$1,inst_11235);
} else {
if((state_val_11238 === (12))){
var state_11237__$1 = state_11237;
var statearr_11247_11270 = state_11237__$1;
(statearr_11247_11270[(2)] = null);

(statearr_11247_11270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (2))){
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11237__$1,(4),ch);
} else {
if((state_val_11238 === (11))){
var inst_11214 = (state_11237[(7)]);
var inst_11224 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11237__$1,(8),inst_11224,inst_11214);
} else {
if((state_val_11238 === (9))){
var state_11237__$1 = state_11237;
var statearr_11248_11271 = state_11237__$1;
(statearr_11248_11271[(2)] = tc);

(statearr_11248_11271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (5))){
var inst_11217 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11218 = cljs.core.async.close_BANG_.call(null,fc);
var state_11237__$1 = (function (){var statearr_11249 = state_11237;
(statearr_11249[(8)] = inst_11217);

return statearr_11249;
})();
var statearr_11250_11272 = state_11237__$1;
(statearr_11250_11272[(2)] = inst_11218);

(statearr_11250_11272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (14))){
var inst_11231 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
var statearr_11251_11273 = state_11237__$1;
(statearr_11251_11273[(2)] = inst_11231);

(statearr_11251_11273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (10))){
var state_11237__$1 = state_11237;
var statearr_11252_11274 = state_11237__$1;
(statearr_11252_11274[(2)] = fc);

(statearr_11252_11274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11238 === (8))){
var inst_11226 = (state_11237[(2)]);
var state_11237__$1 = state_11237;
if(cljs.core.truth_(inst_11226)){
var statearr_11253_11275 = state_11237__$1;
(statearr_11253_11275[(1)] = (12));

} else {
var statearr_11254_11276 = state_11237__$1;
(statearr_11254_11276[(1)] = (13));

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
});})(c__7508__auto___11262,tc,fc))
;
return ((function (switch__7443__auto__,c__7508__auto___11262,tc,fc){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11258 = [null,null,null,null,null,null,null,null,null];
(statearr_11258[(0)] = state_machine__7444__auto__);

(statearr_11258[(1)] = (1));

return statearr_11258;
});
var state_machine__7444__auto____1 = (function (state_11237){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_11237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11259){if((e11259 instanceof Object)){
var ex__7447__auto__ = e11259;
var statearr_11260_11277 = state_11237;
(statearr_11260_11277[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11278 = state_11237;
state_11237 = G__11278;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_11237){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_11237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___11262,tc,fc))
})();
var state__7510__auto__ = (function (){var statearr_11261 = f__7509__auto__.call(null);
(statearr_11261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___11262);

return statearr_11261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___11262,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto__){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto__){
return (function (state_11325){
var state_val_11326 = (state_11325[(1)]);
if((state_val_11326 === (7))){
var inst_11321 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
var statearr_11327_11343 = state_11325__$1;
(statearr_11327_11343[(2)] = inst_11321);

(statearr_11327_11343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (6))){
var inst_11314 = (state_11325[(7)]);
var inst_11311 = (state_11325[(8)]);
var inst_11318 = f.call(null,inst_11311,inst_11314);
var inst_11311__$1 = inst_11318;
var state_11325__$1 = (function (){var statearr_11328 = state_11325;
(statearr_11328[(8)] = inst_11311__$1);

return statearr_11328;
})();
var statearr_11329_11344 = state_11325__$1;
(statearr_11329_11344[(2)] = null);

(statearr_11329_11344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (5))){
var inst_11311 = (state_11325[(8)]);
var state_11325__$1 = state_11325;
var statearr_11330_11345 = state_11325__$1;
(statearr_11330_11345[(2)] = inst_11311);

(statearr_11330_11345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (4))){
var inst_11314 = (state_11325[(7)]);
var inst_11314__$1 = (state_11325[(2)]);
var inst_11315 = (inst_11314__$1 == null);
var state_11325__$1 = (function (){var statearr_11331 = state_11325;
(statearr_11331[(7)] = inst_11314__$1);

return statearr_11331;
})();
if(cljs.core.truth_(inst_11315)){
var statearr_11332_11346 = state_11325__$1;
(statearr_11332_11346[(1)] = (5));

} else {
var statearr_11333_11347 = state_11325__$1;
(statearr_11333_11347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11326 === (3))){
var inst_11323 = (state_11325[(2)]);
var state_11325__$1 = state_11325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11325__$1,inst_11323);
} else {
if((state_val_11326 === (2))){
var state_11325__$1 = state_11325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11325__$1,(4),ch);
} else {
if((state_val_11326 === (1))){
var inst_11311 = init;
var state_11325__$1 = (function (){var statearr_11334 = state_11325;
(statearr_11334[(8)] = inst_11311);

return statearr_11334;
})();
var statearr_11335_11348 = state_11325__$1;
(statearr_11335_11348[(2)] = null);

(statearr_11335_11348[(1)] = (2));


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
});})(c__7508__auto__))
;
return ((function (switch__7443__auto__,c__7508__auto__){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11339 = [null,null,null,null,null,null,null,null,null];
(statearr_11339[(0)] = state_machine__7444__auto__);

(statearr_11339[(1)] = (1));

return statearr_11339;
});
var state_machine__7444__auto____1 = (function (state_11325){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_11325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11340){if((e11340 instanceof Object)){
var ex__7447__auto__ = e11340;
var statearr_11341_11349 = state_11325;
(statearr_11341_11349[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11350 = state_11325;
state_11325 = G__11350;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_11325){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_11325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto__))
})();
var state__7510__auto__ = (function (){var statearr_11342 = f__7509__auto__.call(null);
(statearr_11342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto__);

return statearr_11342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto__))
);

return c__7508__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto__){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto__){
return (function (state_11424){
var state_val_11425 = (state_11424[(1)]);
if((state_val_11425 === (7))){
var inst_11406 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11426_11449 = state_11424__$1;
(statearr_11426_11449[(2)] = inst_11406);

(statearr_11426_11449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (1))){
var inst_11400 = cljs.core.seq.call(null,coll);
var inst_11401 = inst_11400;
var state_11424__$1 = (function (){var statearr_11427 = state_11424;
(statearr_11427[(7)] = inst_11401);

return statearr_11427;
})();
var statearr_11428_11450 = state_11424__$1;
(statearr_11428_11450[(2)] = null);

(statearr_11428_11450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (4))){
var inst_11401 = (state_11424[(7)]);
var inst_11404 = cljs.core.first.call(null,inst_11401);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11424__$1,(7),ch,inst_11404);
} else {
if((state_val_11425 === (13))){
var inst_11418 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11429_11451 = state_11424__$1;
(statearr_11429_11451[(2)] = inst_11418);

(statearr_11429_11451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (6))){
var inst_11409 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
if(cljs.core.truth_(inst_11409)){
var statearr_11430_11452 = state_11424__$1;
(statearr_11430_11452[(1)] = (8));

} else {
var statearr_11431_11453 = state_11424__$1;
(statearr_11431_11453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (3))){
var inst_11422 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11424__$1,inst_11422);
} else {
if((state_val_11425 === (12))){
var state_11424__$1 = state_11424;
var statearr_11432_11454 = state_11424__$1;
(statearr_11432_11454[(2)] = null);

(statearr_11432_11454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (2))){
var inst_11401 = (state_11424[(7)]);
var state_11424__$1 = state_11424;
if(cljs.core.truth_(inst_11401)){
var statearr_11433_11455 = state_11424__$1;
(statearr_11433_11455[(1)] = (4));

} else {
var statearr_11434_11456 = state_11424__$1;
(statearr_11434_11456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (11))){
var inst_11415 = cljs.core.async.close_BANG_.call(null,ch);
var state_11424__$1 = state_11424;
var statearr_11435_11457 = state_11424__$1;
(statearr_11435_11457[(2)] = inst_11415);

(statearr_11435_11457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (9))){
var state_11424__$1 = state_11424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11436_11458 = state_11424__$1;
(statearr_11436_11458[(1)] = (11));

} else {
var statearr_11437_11459 = state_11424__$1;
(statearr_11437_11459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (5))){
var inst_11401 = (state_11424[(7)]);
var state_11424__$1 = state_11424;
var statearr_11438_11460 = state_11424__$1;
(statearr_11438_11460[(2)] = inst_11401);

(statearr_11438_11460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (10))){
var inst_11420 = (state_11424[(2)]);
var state_11424__$1 = state_11424;
var statearr_11439_11461 = state_11424__$1;
(statearr_11439_11461[(2)] = inst_11420);

(statearr_11439_11461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11425 === (8))){
var inst_11401 = (state_11424[(7)]);
var inst_11411 = cljs.core.next.call(null,inst_11401);
var inst_11401__$1 = inst_11411;
var state_11424__$1 = (function (){var statearr_11440 = state_11424;
(statearr_11440[(7)] = inst_11401__$1);

return statearr_11440;
})();
var statearr_11441_11462 = state_11424__$1;
(statearr_11441_11462[(2)] = null);

(statearr_11441_11462[(1)] = (2));


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
});})(c__7508__auto__))
;
return ((function (switch__7443__auto__,c__7508__auto__){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11445 = [null,null,null,null,null,null,null,null];
(statearr_11445[(0)] = state_machine__7444__auto__);

(statearr_11445[(1)] = (1));

return statearr_11445;
});
var state_machine__7444__auto____1 = (function (state_11424){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_11424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11446){if((e11446 instanceof Object)){
var ex__7447__auto__ = e11446;
var statearr_11447_11463 = state_11424;
(statearr_11447_11463[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11464 = state_11424;
state_11424 = G__11464;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto__))
})();
var state__7510__auto__ = (function (){var statearr_11448 = f__7509__auto__.call(null);
(statearr_11448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto__);

return statearr_11448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto__))
);

return c__7508__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj11466 = {};
return obj11466;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3709__auto__ = _;
if(and__3709__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4365__auto__ = (((_ == null))?null:_);
return (function (){var or__3721__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj11468 = {};
return obj11468;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t11690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11690 = (function (cs,ch,mult,meta11691){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11691 = meta11691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11690.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11690.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11692){
var self__ = this;
var _11692__$1 = this;
return self__.meta11691;
});})(cs))
;

cljs.core.async.t11690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11692,meta11691__$1){
var self__ = this;
var _11692__$1 = this;
return (new cljs.core.async.t11690(self__.cs,self__.ch,self__.mult,meta11691__$1));
});})(cs))
;

cljs.core.async.t11690.cljs$lang$type = true;

cljs.core.async.t11690.cljs$lang$ctorStr = "cljs.core.async/t11690";

cljs.core.async.t11690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t11690");
});})(cs))
;

cljs.core.async.__GT_t11690 = ((function (cs){
return (function __GT_t11690(cs__$1,ch__$1,mult__$1,meta11691){
return (new cljs.core.async.t11690(cs__$1,ch__$1,mult__$1,meta11691));
});})(cs))
;

}

return (new cljs.core.async.t11690(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7508__auto___11911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___11911,cs,m,dchan,dctr,done){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___11911,cs,m,dchan,dctr,done){
return (function (state_11823){
var state_val_11824 = (state_11823[(1)]);
if((state_val_11824 === (7))){
var inst_11819 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11825_11912 = state_11823__$1;
(statearr_11825_11912[(2)] = inst_11819);

(statearr_11825_11912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (20))){
var inst_11724 = (state_11823[(7)]);
var inst_11734 = cljs.core.first.call(null,inst_11724);
var inst_11735 = cljs.core.nth.call(null,inst_11734,(0),null);
var inst_11736 = cljs.core.nth.call(null,inst_11734,(1),null);
var state_11823__$1 = (function (){var statearr_11826 = state_11823;
(statearr_11826[(8)] = inst_11735);

return statearr_11826;
})();
if(cljs.core.truth_(inst_11736)){
var statearr_11827_11913 = state_11823__$1;
(statearr_11827_11913[(1)] = (22));

} else {
var statearr_11828_11914 = state_11823__$1;
(statearr_11828_11914[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (27))){
var inst_11764 = (state_11823[(9)]);
var inst_11695 = (state_11823[(10)]);
var inst_11771 = (state_11823[(11)]);
var inst_11766 = (state_11823[(12)]);
var inst_11771__$1 = cljs.core._nth.call(null,inst_11764,inst_11766);
var inst_11772 = cljs.core.async.put_BANG_.call(null,inst_11771__$1,inst_11695,done);
var state_11823__$1 = (function (){var statearr_11829 = state_11823;
(statearr_11829[(11)] = inst_11771__$1);

return statearr_11829;
})();
if(cljs.core.truth_(inst_11772)){
var statearr_11830_11915 = state_11823__$1;
(statearr_11830_11915[(1)] = (30));

} else {
var statearr_11831_11916 = state_11823__$1;
(statearr_11831_11916[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (1))){
var state_11823__$1 = state_11823;
var statearr_11832_11917 = state_11823__$1;
(statearr_11832_11917[(2)] = null);

(statearr_11832_11917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (24))){
var inst_11724 = (state_11823[(7)]);
var inst_11741 = (state_11823[(2)]);
var inst_11742 = cljs.core.next.call(null,inst_11724);
var inst_11704 = inst_11742;
var inst_11705 = null;
var inst_11706 = (0);
var inst_11707 = (0);
var state_11823__$1 = (function (){var statearr_11833 = state_11823;
(statearr_11833[(13)] = inst_11706);

(statearr_11833[(14)] = inst_11705);

(statearr_11833[(15)] = inst_11704);

(statearr_11833[(16)] = inst_11741);

(statearr_11833[(17)] = inst_11707);

return statearr_11833;
})();
var statearr_11834_11918 = state_11823__$1;
(statearr_11834_11918[(2)] = null);

(statearr_11834_11918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (39))){
var state_11823__$1 = state_11823;
var statearr_11838_11919 = state_11823__$1;
(statearr_11838_11919[(2)] = null);

(statearr_11838_11919[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (4))){
var inst_11695 = (state_11823[(10)]);
var inst_11695__$1 = (state_11823[(2)]);
var inst_11696 = (inst_11695__$1 == null);
var state_11823__$1 = (function (){var statearr_11839 = state_11823;
(statearr_11839[(10)] = inst_11695__$1);

return statearr_11839;
})();
if(cljs.core.truth_(inst_11696)){
var statearr_11840_11920 = state_11823__$1;
(statearr_11840_11920[(1)] = (5));

} else {
var statearr_11841_11921 = state_11823__$1;
(statearr_11841_11921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (15))){
var inst_11706 = (state_11823[(13)]);
var inst_11705 = (state_11823[(14)]);
var inst_11704 = (state_11823[(15)]);
var inst_11707 = (state_11823[(17)]);
var inst_11720 = (state_11823[(2)]);
var inst_11721 = (inst_11707 + (1));
var tmp11835 = inst_11706;
var tmp11836 = inst_11705;
var tmp11837 = inst_11704;
var inst_11704__$1 = tmp11837;
var inst_11705__$1 = tmp11836;
var inst_11706__$1 = tmp11835;
var inst_11707__$1 = inst_11721;
var state_11823__$1 = (function (){var statearr_11842 = state_11823;
(statearr_11842[(13)] = inst_11706__$1);

(statearr_11842[(14)] = inst_11705__$1);

(statearr_11842[(15)] = inst_11704__$1);

(statearr_11842[(18)] = inst_11720);

(statearr_11842[(17)] = inst_11707__$1);

return statearr_11842;
})();
var statearr_11843_11922 = state_11823__$1;
(statearr_11843_11922[(2)] = null);

(statearr_11843_11922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (21))){
var inst_11745 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11847_11923 = state_11823__$1;
(statearr_11847_11923[(2)] = inst_11745);

(statearr_11847_11923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (31))){
var inst_11771 = (state_11823[(11)]);
var inst_11775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_11776 = cljs.core.async.untap_STAR_.call(null,m,inst_11771);
var state_11823__$1 = (function (){var statearr_11848 = state_11823;
(statearr_11848[(19)] = inst_11775);

return statearr_11848;
})();
var statearr_11849_11924 = state_11823__$1;
(statearr_11849_11924[(2)] = inst_11776);

(statearr_11849_11924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (32))){
var inst_11765 = (state_11823[(20)]);
var inst_11763 = (state_11823[(21)]);
var inst_11764 = (state_11823[(9)]);
var inst_11766 = (state_11823[(12)]);
var inst_11778 = (state_11823[(2)]);
var inst_11779 = (inst_11766 + (1));
var tmp11844 = inst_11765;
var tmp11845 = inst_11763;
var tmp11846 = inst_11764;
var inst_11763__$1 = tmp11845;
var inst_11764__$1 = tmp11846;
var inst_11765__$1 = tmp11844;
var inst_11766__$1 = inst_11779;
var state_11823__$1 = (function (){var statearr_11850 = state_11823;
(statearr_11850[(20)] = inst_11765__$1);

(statearr_11850[(21)] = inst_11763__$1);

(statearr_11850[(9)] = inst_11764__$1);

(statearr_11850[(22)] = inst_11778);

(statearr_11850[(12)] = inst_11766__$1);

return statearr_11850;
})();
var statearr_11851_11925 = state_11823__$1;
(statearr_11851_11925[(2)] = null);

(statearr_11851_11925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (40))){
var inst_11791 = (state_11823[(23)]);
var inst_11795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_11796 = cljs.core.async.untap_STAR_.call(null,m,inst_11791);
var state_11823__$1 = (function (){var statearr_11852 = state_11823;
(statearr_11852[(24)] = inst_11795);

return statearr_11852;
})();
var statearr_11853_11926 = state_11823__$1;
(statearr_11853_11926[(2)] = inst_11796);

(statearr_11853_11926[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (33))){
var inst_11782 = (state_11823[(25)]);
var inst_11784 = cljs.core.chunked_seq_QMARK_.call(null,inst_11782);
var state_11823__$1 = state_11823;
if(inst_11784){
var statearr_11854_11927 = state_11823__$1;
(statearr_11854_11927[(1)] = (36));

} else {
var statearr_11855_11928 = state_11823__$1;
(statearr_11855_11928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (13))){
var inst_11714 = (state_11823[(26)]);
var inst_11717 = cljs.core.async.close_BANG_.call(null,inst_11714);
var state_11823__$1 = state_11823;
var statearr_11856_11929 = state_11823__$1;
(statearr_11856_11929[(2)] = inst_11717);

(statearr_11856_11929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (22))){
var inst_11735 = (state_11823[(8)]);
var inst_11738 = cljs.core.async.close_BANG_.call(null,inst_11735);
var state_11823__$1 = state_11823;
var statearr_11857_11930 = state_11823__$1;
(statearr_11857_11930[(2)] = inst_11738);

(statearr_11857_11930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (36))){
var inst_11782 = (state_11823[(25)]);
var inst_11786 = cljs.core.chunk_first.call(null,inst_11782);
var inst_11787 = cljs.core.chunk_rest.call(null,inst_11782);
var inst_11788 = cljs.core.count.call(null,inst_11786);
var inst_11763 = inst_11787;
var inst_11764 = inst_11786;
var inst_11765 = inst_11788;
var inst_11766 = (0);
var state_11823__$1 = (function (){var statearr_11858 = state_11823;
(statearr_11858[(20)] = inst_11765);

(statearr_11858[(21)] = inst_11763);

(statearr_11858[(9)] = inst_11764);

(statearr_11858[(12)] = inst_11766);

return statearr_11858;
})();
var statearr_11859_11931 = state_11823__$1;
(statearr_11859_11931[(2)] = null);

(statearr_11859_11931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (41))){
var inst_11782 = (state_11823[(25)]);
var inst_11798 = (state_11823[(2)]);
var inst_11799 = cljs.core.next.call(null,inst_11782);
var inst_11763 = inst_11799;
var inst_11764 = null;
var inst_11765 = (0);
var inst_11766 = (0);
var state_11823__$1 = (function (){var statearr_11860 = state_11823;
(statearr_11860[(20)] = inst_11765);

(statearr_11860[(21)] = inst_11763);

(statearr_11860[(9)] = inst_11764);

(statearr_11860[(27)] = inst_11798);

(statearr_11860[(12)] = inst_11766);

return statearr_11860;
})();
var statearr_11861_11932 = state_11823__$1;
(statearr_11861_11932[(2)] = null);

(statearr_11861_11932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (43))){
var state_11823__$1 = state_11823;
var statearr_11862_11933 = state_11823__$1;
(statearr_11862_11933[(2)] = null);

(statearr_11862_11933[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (29))){
var inst_11807 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11863_11934 = state_11823__$1;
(statearr_11863_11934[(2)] = inst_11807);

(statearr_11863_11934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (44))){
var inst_11816 = (state_11823[(2)]);
var state_11823__$1 = (function (){var statearr_11864 = state_11823;
(statearr_11864[(28)] = inst_11816);

return statearr_11864;
})();
var statearr_11865_11935 = state_11823__$1;
(statearr_11865_11935[(2)] = null);

(statearr_11865_11935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (6))){
var inst_11755 = (state_11823[(29)]);
var inst_11754 = cljs.core.deref.call(null,cs);
var inst_11755__$1 = cljs.core.keys.call(null,inst_11754);
var inst_11756 = cljs.core.count.call(null,inst_11755__$1);
var inst_11757 = cljs.core.reset_BANG_.call(null,dctr,inst_11756);
var inst_11762 = cljs.core.seq.call(null,inst_11755__$1);
var inst_11763 = inst_11762;
var inst_11764 = null;
var inst_11765 = (0);
var inst_11766 = (0);
var state_11823__$1 = (function (){var statearr_11866 = state_11823;
(statearr_11866[(20)] = inst_11765);

(statearr_11866[(29)] = inst_11755__$1);

(statearr_11866[(30)] = inst_11757);

(statearr_11866[(21)] = inst_11763);

(statearr_11866[(9)] = inst_11764);

(statearr_11866[(12)] = inst_11766);

return statearr_11866;
})();
var statearr_11867_11936 = state_11823__$1;
(statearr_11867_11936[(2)] = null);

(statearr_11867_11936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (28))){
var inst_11782 = (state_11823[(25)]);
var inst_11763 = (state_11823[(21)]);
var inst_11782__$1 = cljs.core.seq.call(null,inst_11763);
var state_11823__$1 = (function (){var statearr_11868 = state_11823;
(statearr_11868[(25)] = inst_11782__$1);

return statearr_11868;
})();
if(inst_11782__$1){
var statearr_11869_11937 = state_11823__$1;
(statearr_11869_11937[(1)] = (33));

} else {
var statearr_11870_11938 = state_11823__$1;
(statearr_11870_11938[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (25))){
var inst_11765 = (state_11823[(20)]);
var inst_11766 = (state_11823[(12)]);
var inst_11768 = (inst_11766 < inst_11765);
var inst_11769 = inst_11768;
var state_11823__$1 = state_11823;
if(cljs.core.truth_(inst_11769)){
var statearr_11871_11939 = state_11823__$1;
(statearr_11871_11939[(1)] = (27));

} else {
var statearr_11872_11940 = state_11823__$1;
(statearr_11872_11940[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (34))){
var state_11823__$1 = state_11823;
var statearr_11873_11941 = state_11823__$1;
(statearr_11873_11941[(2)] = null);

(statearr_11873_11941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (17))){
var state_11823__$1 = state_11823;
var statearr_11874_11942 = state_11823__$1;
(statearr_11874_11942[(2)] = null);

(statearr_11874_11942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (3))){
var inst_11821 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11823__$1,inst_11821);
} else {
if((state_val_11824 === (12))){
var inst_11750 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11875_11943 = state_11823__$1;
(statearr_11875_11943[(2)] = inst_11750);

(statearr_11875_11943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (2))){
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11823__$1,(4),ch);
} else {
if((state_val_11824 === (23))){
var state_11823__$1 = state_11823;
var statearr_11876_11944 = state_11823__$1;
(statearr_11876_11944[(2)] = null);

(statearr_11876_11944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (35))){
var inst_11805 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11877_11945 = state_11823__$1;
(statearr_11877_11945[(2)] = inst_11805);

(statearr_11877_11945[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (19))){
var inst_11724 = (state_11823[(7)]);
var inst_11728 = cljs.core.chunk_first.call(null,inst_11724);
var inst_11729 = cljs.core.chunk_rest.call(null,inst_11724);
var inst_11730 = cljs.core.count.call(null,inst_11728);
var inst_11704 = inst_11729;
var inst_11705 = inst_11728;
var inst_11706 = inst_11730;
var inst_11707 = (0);
var state_11823__$1 = (function (){var statearr_11878 = state_11823;
(statearr_11878[(13)] = inst_11706);

(statearr_11878[(14)] = inst_11705);

(statearr_11878[(15)] = inst_11704);

(statearr_11878[(17)] = inst_11707);

return statearr_11878;
})();
var statearr_11879_11946 = state_11823__$1;
(statearr_11879_11946[(2)] = null);

(statearr_11879_11946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (11))){
var inst_11704 = (state_11823[(15)]);
var inst_11724 = (state_11823[(7)]);
var inst_11724__$1 = cljs.core.seq.call(null,inst_11704);
var state_11823__$1 = (function (){var statearr_11880 = state_11823;
(statearr_11880[(7)] = inst_11724__$1);

return statearr_11880;
})();
if(inst_11724__$1){
var statearr_11881_11947 = state_11823__$1;
(statearr_11881_11947[(1)] = (16));

} else {
var statearr_11882_11948 = state_11823__$1;
(statearr_11882_11948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (9))){
var inst_11752 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11883_11949 = state_11823__$1;
(statearr_11883_11949[(2)] = inst_11752);

(statearr_11883_11949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (5))){
var inst_11702 = cljs.core.deref.call(null,cs);
var inst_11703 = cljs.core.seq.call(null,inst_11702);
var inst_11704 = inst_11703;
var inst_11705 = null;
var inst_11706 = (0);
var inst_11707 = (0);
var state_11823__$1 = (function (){var statearr_11884 = state_11823;
(statearr_11884[(13)] = inst_11706);

(statearr_11884[(14)] = inst_11705);

(statearr_11884[(15)] = inst_11704);

(statearr_11884[(17)] = inst_11707);

return statearr_11884;
})();
var statearr_11885_11950 = state_11823__$1;
(statearr_11885_11950[(2)] = null);

(statearr_11885_11950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (14))){
var state_11823__$1 = state_11823;
var statearr_11886_11951 = state_11823__$1;
(statearr_11886_11951[(2)] = null);

(statearr_11886_11951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (45))){
var inst_11813 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11887_11952 = state_11823__$1;
(statearr_11887_11952[(2)] = inst_11813);

(statearr_11887_11952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (26))){
var inst_11755 = (state_11823[(29)]);
var inst_11809 = (state_11823[(2)]);
var inst_11810 = cljs.core.seq.call(null,inst_11755);
var state_11823__$1 = (function (){var statearr_11888 = state_11823;
(statearr_11888[(31)] = inst_11809);

return statearr_11888;
})();
if(inst_11810){
var statearr_11889_11953 = state_11823__$1;
(statearr_11889_11953[(1)] = (42));

} else {
var statearr_11890_11954 = state_11823__$1;
(statearr_11890_11954[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (16))){
var inst_11724 = (state_11823[(7)]);
var inst_11726 = cljs.core.chunked_seq_QMARK_.call(null,inst_11724);
var state_11823__$1 = state_11823;
if(inst_11726){
var statearr_11891_11955 = state_11823__$1;
(statearr_11891_11955[(1)] = (19));

} else {
var statearr_11892_11956 = state_11823__$1;
(statearr_11892_11956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (38))){
var inst_11802 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11893_11957 = state_11823__$1;
(statearr_11893_11957[(2)] = inst_11802);

(statearr_11893_11957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (30))){
var state_11823__$1 = state_11823;
var statearr_11894_11958 = state_11823__$1;
(statearr_11894_11958[(2)] = null);

(statearr_11894_11958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (10))){
var inst_11705 = (state_11823[(14)]);
var inst_11707 = (state_11823[(17)]);
var inst_11713 = cljs.core._nth.call(null,inst_11705,inst_11707);
var inst_11714 = cljs.core.nth.call(null,inst_11713,(0),null);
var inst_11715 = cljs.core.nth.call(null,inst_11713,(1),null);
var state_11823__$1 = (function (){var statearr_11895 = state_11823;
(statearr_11895[(26)] = inst_11714);

return statearr_11895;
})();
if(cljs.core.truth_(inst_11715)){
var statearr_11896_11959 = state_11823__$1;
(statearr_11896_11959[(1)] = (13));

} else {
var statearr_11897_11960 = state_11823__$1;
(statearr_11897_11960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (18))){
var inst_11748 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11898_11961 = state_11823__$1;
(statearr_11898_11961[(2)] = inst_11748);

(statearr_11898_11961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (42))){
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11823__$1,(45),dchan);
} else {
if((state_val_11824 === (37))){
var inst_11791 = (state_11823[(23)]);
var inst_11782 = (state_11823[(25)]);
var inst_11695 = (state_11823[(10)]);
var inst_11791__$1 = cljs.core.first.call(null,inst_11782);
var inst_11792 = cljs.core.async.put_BANG_.call(null,inst_11791__$1,inst_11695,done);
var state_11823__$1 = (function (){var statearr_11899 = state_11823;
(statearr_11899[(23)] = inst_11791__$1);

return statearr_11899;
})();
if(cljs.core.truth_(inst_11792)){
var statearr_11900_11962 = state_11823__$1;
(statearr_11900_11962[(1)] = (39));

} else {
var statearr_11901_11963 = state_11823__$1;
(statearr_11901_11963[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (8))){
var inst_11706 = (state_11823[(13)]);
var inst_11707 = (state_11823[(17)]);
var inst_11709 = (inst_11707 < inst_11706);
var inst_11710 = inst_11709;
var state_11823__$1 = state_11823;
if(cljs.core.truth_(inst_11710)){
var statearr_11902_11964 = state_11823__$1;
(statearr_11902_11964[(1)] = (10));

} else {
var statearr_11903_11965 = state_11823__$1;
(statearr_11903_11965[(1)] = (11));

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
});})(c__7508__auto___11911,cs,m,dchan,dctr,done))
;
return ((function (switch__7443__auto__,c__7508__auto___11911,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_11907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11907[(0)] = state_machine__7444__auto__);

(statearr_11907[(1)] = (1));

return statearr_11907;
});
var state_machine__7444__auto____1 = (function (state_11823){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_11823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e11908){if((e11908 instanceof Object)){
var ex__7447__auto__ = e11908;
var statearr_11909_11966 = state_11823;
(statearr_11909_11966[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11967 = state_11823;
state_11823 = G__11967;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_11823){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_11823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___11911,cs,m,dchan,dctr,done))
})();
var state__7510__auto__ = (function (){var statearr_11910 = f__7509__auto__.call(null);
(statearr_11910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___11911);

return statearr_11910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___11911,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj11969 = {};
return obj11969;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3709__auto__ = m;
if(and__3709__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4365__auto__ = (((m == null))?null:m);
return (function (){var or__3721__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t12089 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12089 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12090){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12090 = meta12090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12089.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12089.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12091){
var self__ = this;
var _12091__$1 = this;
return self__.meta12090;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12091,meta12090__$1){
var self__ = this;
var _12091__$1 = this;
return (new cljs.core.async.t12089(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12090__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12089.cljs$lang$type = true;

cljs.core.async.t12089.cljs$lang$ctorStr = "cljs.core.async/t12089";

cljs.core.async.t12089.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t12089");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12089 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12089(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12090){
return (new cljs.core.async.t12089(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12090));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12089(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7508__auto___12208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12161){
var state_val_12162 = (state_12161[(1)]);
if((state_val_12162 === (7))){
var inst_12105 = (state_12161[(7)]);
var inst_12110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12105);
var state_12161__$1 = state_12161;
var statearr_12163_12209 = state_12161__$1;
(statearr_12163_12209[(2)] = inst_12110);

(statearr_12163_12209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (20))){
var inst_12120 = (state_12161[(8)]);
var state_12161__$1 = state_12161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12161__$1,(23),out,inst_12120);
} else {
if((state_val_12162 === (1))){
var inst_12095 = (state_12161[(9)]);
var inst_12095__$1 = calc_state.call(null);
var inst_12096 = cljs.core.seq_QMARK_.call(null,inst_12095__$1);
var state_12161__$1 = (function (){var statearr_12164 = state_12161;
(statearr_12164[(9)] = inst_12095__$1);

return statearr_12164;
})();
if(inst_12096){
var statearr_12165_12210 = state_12161__$1;
(statearr_12165_12210[(1)] = (2));

} else {
var statearr_12166_12211 = state_12161__$1;
(statearr_12166_12211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (24))){
var inst_12113 = (state_12161[(10)]);
var inst_12105 = inst_12113;
var state_12161__$1 = (function (){var statearr_12167 = state_12161;
(statearr_12167[(7)] = inst_12105);

return statearr_12167;
})();
var statearr_12168_12212 = state_12161__$1;
(statearr_12168_12212[(2)] = null);

(statearr_12168_12212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (4))){
var inst_12095 = (state_12161[(9)]);
var inst_12101 = (state_12161[(2)]);
var inst_12102 = cljs.core.get.call(null,inst_12101,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12103 = cljs.core.get.call(null,inst_12101,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12104 = cljs.core.get.call(null,inst_12101,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12105 = inst_12095;
var state_12161__$1 = (function (){var statearr_12169 = state_12161;
(statearr_12169[(11)] = inst_12103);

(statearr_12169[(7)] = inst_12105);

(statearr_12169[(12)] = inst_12104);

(statearr_12169[(13)] = inst_12102);

return statearr_12169;
})();
var statearr_12170_12213 = state_12161__$1;
(statearr_12170_12213[(2)] = null);

(statearr_12170_12213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (15))){
var state_12161__$1 = state_12161;
var statearr_12171_12214 = state_12161__$1;
(statearr_12171_12214[(2)] = null);

(statearr_12171_12214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (21))){
var inst_12113 = (state_12161[(10)]);
var inst_12105 = inst_12113;
var state_12161__$1 = (function (){var statearr_12172 = state_12161;
(statearr_12172[(7)] = inst_12105);

return statearr_12172;
})();
var statearr_12173_12215 = state_12161__$1;
(statearr_12173_12215[(2)] = null);

(statearr_12173_12215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (13))){
var inst_12157 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
var statearr_12174_12216 = state_12161__$1;
(statearr_12174_12216[(2)] = inst_12157);

(statearr_12174_12216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (22))){
var inst_12155 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
var statearr_12175_12217 = state_12161__$1;
(statearr_12175_12217[(2)] = inst_12155);

(statearr_12175_12217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (6))){
var inst_12159 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12161__$1,inst_12159);
} else {
if((state_val_12162 === (25))){
var state_12161__$1 = state_12161;
var statearr_12176_12218 = state_12161__$1;
(statearr_12176_12218[(2)] = null);

(statearr_12176_12218[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (17))){
var inst_12135 = (state_12161[(14)]);
var state_12161__$1 = state_12161;
var statearr_12177_12219 = state_12161__$1;
(statearr_12177_12219[(2)] = inst_12135);

(statearr_12177_12219[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (3))){
var inst_12095 = (state_12161[(9)]);
var state_12161__$1 = state_12161;
var statearr_12178_12220 = state_12161__$1;
(statearr_12178_12220[(2)] = inst_12095);

(statearr_12178_12220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (12))){
var inst_12135 = (state_12161[(14)]);
var inst_12116 = (state_12161[(15)]);
var inst_12121 = (state_12161[(16)]);
var inst_12135__$1 = inst_12116.call(null,inst_12121);
var state_12161__$1 = (function (){var statearr_12179 = state_12161;
(statearr_12179[(14)] = inst_12135__$1);

return statearr_12179;
})();
if(cljs.core.truth_(inst_12135__$1)){
var statearr_12180_12221 = state_12161__$1;
(statearr_12180_12221[(1)] = (17));

} else {
var statearr_12181_12222 = state_12161__$1;
(statearr_12181_12222[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (2))){
var inst_12095 = (state_12161[(9)]);
var inst_12098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12095);
var state_12161__$1 = state_12161;
var statearr_12182_12223 = state_12161__$1;
(statearr_12182_12223[(2)] = inst_12098);

(statearr_12182_12223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (23))){
var inst_12146 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
if(cljs.core.truth_(inst_12146)){
var statearr_12183_12224 = state_12161__$1;
(statearr_12183_12224[(1)] = (24));

} else {
var statearr_12184_12225 = state_12161__$1;
(statearr_12184_12225[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (19))){
var inst_12143 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
if(cljs.core.truth_(inst_12143)){
var statearr_12185_12226 = state_12161__$1;
(statearr_12185_12226[(1)] = (20));

} else {
var statearr_12186_12227 = state_12161__$1;
(statearr_12186_12227[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (11))){
var inst_12120 = (state_12161[(8)]);
var inst_12126 = (inst_12120 == null);
var state_12161__$1 = state_12161;
if(cljs.core.truth_(inst_12126)){
var statearr_12187_12228 = state_12161__$1;
(statearr_12187_12228[(1)] = (14));

} else {
var statearr_12188_12229 = state_12161__$1;
(statearr_12188_12229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (9))){
var inst_12113 = (state_12161[(10)]);
var inst_12113__$1 = (state_12161[(2)]);
var inst_12114 = cljs.core.get.call(null,inst_12113__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12115 = cljs.core.get.call(null,inst_12113__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12116 = cljs.core.get.call(null,inst_12113__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12161__$1 = (function (){var statearr_12189 = state_12161;
(statearr_12189[(17)] = inst_12115);

(statearr_12189[(15)] = inst_12116);

(statearr_12189[(10)] = inst_12113__$1);

return statearr_12189;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12161__$1,(10),inst_12114);
} else {
if((state_val_12162 === (5))){
var inst_12105 = (state_12161[(7)]);
var inst_12108 = cljs.core.seq_QMARK_.call(null,inst_12105);
var state_12161__$1 = state_12161;
if(inst_12108){
var statearr_12190_12230 = state_12161__$1;
(statearr_12190_12230[(1)] = (7));

} else {
var statearr_12191_12231 = state_12161__$1;
(statearr_12191_12231[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (14))){
var inst_12121 = (state_12161[(16)]);
var inst_12128 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12121);
var state_12161__$1 = state_12161;
var statearr_12192_12232 = state_12161__$1;
(statearr_12192_12232[(2)] = inst_12128);

(statearr_12192_12232[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (26))){
var inst_12151 = (state_12161[(2)]);
var state_12161__$1 = state_12161;
var statearr_12193_12233 = state_12161__$1;
(statearr_12193_12233[(2)] = inst_12151);

(statearr_12193_12233[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (16))){
var inst_12131 = (state_12161[(2)]);
var inst_12132 = calc_state.call(null);
var inst_12105 = inst_12132;
var state_12161__$1 = (function (){var statearr_12194 = state_12161;
(statearr_12194[(7)] = inst_12105);

(statearr_12194[(18)] = inst_12131);

return statearr_12194;
})();
var statearr_12195_12234 = state_12161__$1;
(statearr_12195_12234[(2)] = null);

(statearr_12195_12234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (10))){
var inst_12121 = (state_12161[(16)]);
var inst_12120 = (state_12161[(8)]);
var inst_12119 = (state_12161[(2)]);
var inst_12120__$1 = cljs.core.nth.call(null,inst_12119,(0),null);
var inst_12121__$1 = cljs.core.nth.call(null,inst_12119,(1),null);
var inst_12122 = (inst_12120__$1 == null);
var inst_12123 = cljs.core._EQ_.call(null,inst_12121__$1,change);
var inst_12124 = (inst_12122) || (inst_12123);
var state_12161__$1 = (function (){var statearr_12196 = state_12161;
(statearr_12196[(16)] = inst_12121__$1);

(statearr_12196[(8)] = inst_12120__$1);

return statearr_12196;
})();
if(cljs.core.truth_(inst_12124)){
var statearr_12197_12235 = state_12161__$1;
(statearr_12197_12235[(1)] = (11));

} else {
var statearr_12198_12236 = state_12161__$1;
(statearr_12198_12236[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (18))){
var inst_12115 = (state_12161[(17)]);
var inst_12116 = (state_12161[(15)]);
var inst_12121 = (state_12161[(16)]);
var inst_12138 = cljs.core.empty_QMARK_.call(null,inst_12116);
var inst_12139 = inst_12115.call(null,inst_12121);
var inst_12140 = cljs.core.not.call(null,inst_12139);
var inst_12141 = (inst_12138) && (inst_12140);
var state_12161__$1 = state_12161;
var statearr_12199_12237 = state_12161__$1;
(statearr_12199_12237[(2)] = inst_12141);

(statearr_12199_12237[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12162 === (8))){
var inst_12105 = (state_12161[(7)]);
var state_12161__$1 = state_12161;
var statearr_12200_12238 = state_12161__$1;
(statearr_12200_12238[(2)] = inst_12105);

(statearr_12200_12238[(1)] = (9));


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
});})(c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7443__auto__,c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12204[(0)] = state_machine__7444__auto__);

(statearr_12204[(1)] = (1));

return statearr_12204;
});
var state_machine__7444__auto____1 = (function (state_12161){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12205){if((e12205 instanceof Object)){
var ex__7447__auto__ = e12205;
var statearr_12206_12239 = state_12161;
(statearr_12206_12239[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12240 = state_12161;
state_12161 = G__12240;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12161){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7510__auto__ = (function (){var statearr_12207 = f__7509__auto__.call(null);
(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12208);

return statearr_12207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12208,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj12242 = {};
return obj12242;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3709__auto__ = p;
if(and__3709__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3709__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4365__auto__ = (((p == null))?null:p);
return (function (){var or__3721__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3709__auto__ = p;
if(and__3709__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3709__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4365__auto__ = (((p == null))?null:p);
return (function (){var or__3721__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3709__auto__ = p;
if(and__3709__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4365__auto__ = (((p == null))?null:p);
return (function (){var or__3721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3709__auto__ = p;
if(and__3709__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3709__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4365__auto__ = (((p == null))?null:p);
return (function (){var or__3721__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3721__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3721__auto__,mults){
return (function (p1__12243_SHARP_){
if(cljs.core.truth_(p1__12243_SHARP_.call(null,topic))){
return p1__12243_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3721__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12366 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12366 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12367){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12367 = meta12367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12366.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12368){
var self__ = this;
var _12368__$1 = this;
return self__.meta12367;
});})(mults,ensure_mult))
;

cljs.core.async.t12366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12368,meta12367__$1){
var self__ = this;
var _12368__$1 = this;
return (new cljs.core.async.t12366(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12367__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12366.cljs$lang$type = true;

cljs.core.async.t12366.cljs$lang$ctorStr = "cljs.core.async/t12366";

cljs.core.async.t12366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"cljs.core.async/t12366");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12366 = ((function (mults,ensure_mult){
return (function __GT_t12366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12367){
return (new cljs.core.async.t12366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12367));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12366(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/german/Desktop/frontend/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__7508__auto___12488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12488,mults,ensure_mult,p){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12488,mults,ensure_mult,p){
return (function (state_12440){
var state_val_12441 = (state_12440[(1)]);
if((state_val_12441 === (7))){
var inst_12436 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12442_12489 = state_12440__$1;
(statearr_12442_12489[(2)] = inst_12436);

(statearr_12442_12489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (20))){
var state_12440__$1 = state_12440;
var statearr_12443_12490 = state_12440__$1;
(statearr_12443_12490[(2)] = null);

(statearr_12443_12490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (1))){
var state_12440__$1 = state_12440;
var statearr_12444_12491 = state_12440__$1;
(statearr_12444_12491[(2)] = null);

(statearr_12444_12491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (24))){
var inst_12419 = (state_12440[(7)]);
var inst_12428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12419);
var state_12440__$1 = state_12440;
var statearr_12445_12492 = state_12440__$1;
(statearr_12445_12492[(2)] = inst_12428);

(statearr_12445_12492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (4))){
var inst_12371 = (state_12440[(8)]);
var inst_12371__$1 = (state_12440[(2)]);
var inst_12372 = (inst_12371__$1 == null);
var state_12440__$1 = (function (){var statearr_12446 = state_12440;
(statearr_12446[(8)] = inst_12371__$1);

return statearr_12446;
})();
if(cljs.core.truth_(inst_12372)){
var statearr_12447_12493 = state_12440__$1;
(statearr_12447_12493[(1)] = (5));

} else {
var statearr_12448_12494 = state_12440__$1;
(statearr_12448_12494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (15))){
var inst_12413 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12449_12495 = state_12440__$1;
(statearr_12449_12495[(2)] = inst_12413);

(statearr_12449_12495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (21))){
var inst_12433 = (state_12440[(2)]);
var state_12440__$1 = (function (){var statearr_12450 = state_12440;
(statearr_12450[(9)] = inst_12433);

return statearr_12450;
})();
var statearr_12451_12496 = state_12440__$1;
(statearr_12451_12496[(2)] = null);

(statearr_12451_12496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (13))){
var inst_12395 = (state_12440[(10)]);
var inst_12397 = cljs.core.chunked_seq_QMARK_.call(null,inst_12395);
var state_12440__$1 = state_12440;
if(inst_12397){
var statearr_12452_12497 = state_12440__$1;
(statearr_12452_12497[(1)] = (16));

} else {
var statearr_12453_12498 = state_12440__$1;
(statearr_12453_12498[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (22))){
var inst_12425 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12425)){
var statearr_12454_12499 = state_12440__$1;
(statearr_12454_12499[(1)] = (23));

} else {
var statearr_12455_12500 = state_12440__$1;
(statearr_12455_12500[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (6))){
var inst_12419 = (state_12440[(7)]);
var inst_12421 = (state_12440[(11)]);
var inst_12371 = (state_12440[(8)]);
var inst_12419__$1 = topic_fn.call(null,inst_12371);
var inst_12420 = cljs.core.deref.call(null,mults);
var inst_12421__$1 = cljs.core.get.call(null,inst_12420,inst_12419__$1);
var state_12440__$1 = (function (){var statearr_12456 = state_12440;
(statearr_12456[(7)] = inst_12419__$1);

(statearr_12456[(11)] = inst_12421__$1);

return statearr_12456;
})();
if(cljs.core.truth_(inst_12421__$1)){
var statearr_12457_12501 = state_12440__$1;
(statearr_12457_12501[(1)] = (19));

} else {
var statearr_12458_12502 = state_12440__$1;
(statearr_12458_12502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (25))){
var inst_12430 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12459_12503 = state_12440__$1;
(statearr_12459_12503[(2)] = inst_12430);

(statearr_12459_12503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (17))){
var inst_12395 = (state_12440[(10)]);
var inst_12404 = cljs.core.first.call(null,inst_12395);
var inst_12405 = cljs.core.async.muxch_STAR_.call(null,inst_12404);
var inst_12406 = cljs.core.async.close_BANG_.call(null,inst_12405);
var inst_12407 = cljs.core.next.call(null,inst_12395);
var inst_12381 = inst_12407;
var inst_12382 = null;
var inst_12383 = (0);
var inst_12384 = (0);
var state_12440__$1 = (function (){var statearr_12460 = state_12440;
(statearr_12460[(12)] = inst_12383);

(statearr_12460[(13)] = inst_12382);

(statearr_12460[(14)] = inst_12406);

(statearr_12460[(15)] = inst_12381);

(statearr_12460[(16)] = inst_12384);

return statearr_12460;
})();
var statearr_12461_12504 = state_12440__$1;
(statearr_12461_12504[(2)] = null);

(statearr_12461_12504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (3))){
var inst_12438 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12440__$1,inst_12438);
} else {
if((state_val_12441 === (12))){
var inst_12415 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12462_12505 = state_12440__$1;
(statearr_12462_12505[(2)] = inst_12415);

(statearr_12462_12505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (2))){
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12440__$1,(4),ch);
} else {
if((state_val_12441 === (23))){
var state_12440__$1 = state_12440;
var statearr_12463_12506 = state_12440__$1;
(statearr_12463_12506[(2)] = null);

(statearr_12463_12506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (19))){
var inst_12421 = (state_12440[(11)]);
var inst_12371 = (state_12440[(8)]);
var inst_12423 = cljs.core.async.muxch_STAR_.call(null,inst_12421);
var state_12440__$1 = state_12440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12440__$1,(22),inst_12423,inst_12371);
} else {
if((state_val_12441 === (11))){
var inst_12381 = (state_12440[(15)]);
var inst_12395 = (state_12440[(10)]);
var inst_12395__$1 = cljs.core.seq.call(null,inst_12381);
var state_12440__$1 = (function (){var statearr_12464 = state_12440;
(statearr_12464[(10)] = inst_12395__$1);

return statearr_12464;
})();
if(inst_12395__$1){
var statearr_12465_12507 = state_12440__$1;
(statearr_12465_12507[(1)] = (13));

} else {
var statearr_12466_12508 = state_12440__$1;
(statearr_12466_12508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (9))){
var inst_12417 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12467_12509 = state_12440__$1;
(statearr_12467_12509[(2)] = inst_12417);

(statearr_12467_12509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (5))){
var inst_12378 = cljs.core.deref.call(null,mults);
var inst_12379 = cljs.core.vals.call(null,inst_12378);
var inst_12380 = cljs.core.seq.call(null,inst_12379);
var inst_12381 = inst_12380;
var inst_12382 = null;
var inst_12383 = (0);
var inst_12384 = (0);
var state_12440__$1 = (function (){var statearr_12468 = state_12440;
(statearr_12468[(12)] = inst_12383);

(statearr_12468[(13)] = inst_12382);

(statearr_12468[(15)] = inst_12381);

(statearr_12468[(16)] = inst_12384);

return statearr_12468;
})();
var statearr_12469_12510 = state_12440__$1;
(statearr_12469_12510[(2)] = null);

(statearr_12469_12510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (14))){
var state_12440__$1 = state_12440;
var statearr_12473_12511 = state_12440__$1;
(statearr_12473_12511[(2)] = null);

(statearr_12473_12511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (16))){
var inst_12395 = (state_12440[(10)]);
var inst_12399 = cljs.core.chunk_first.call(null,inst_12395);
var inst_12400 = cljs.core.chunk_rest.call(null,inst_12395);
var inst_12401 = cljs.core.count.call(null,inst_12399);
var inst_12381 = inst_12400;
var inst_12382 = inst_12399;
var inst_12383 = inst_12401;
var inst_12384 = (0);
var state_12440__$1 = (function (){var statearr_12474 = state_12440;
(statearr_12474[(12)] = inst_12383);

(statearr_12474[(13)] = inst_12382);

(statearr_12474[(15)] = inst_12381);

(statearr_12474[(16)] = inst_12384);

return statearr_12474;
})();
var statearr_12475_12512 = state_12440__$1;
(statearr_12475_12512[(2)] = null);

(statearr_12475_12512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (10))){
var inst_12383 = (state_12440[(12)]);
var inst_12382 = (state_12440[(13)]);
var inst_12381 = (state_12440[(15)]);
var inst_12384 = (state_12440[(16)]);
var inst_12389 = cljs.core._nth.call(null,inst_12382,inst_12384);
var inst_12390 = cljs.core.async.muxch_STAR_.call(null,inst_12389);
var inst_12391 = cljs.core.async.close_BANG_.call(null,inst_12390);
var inst_12392 = (inst_12384 + (1));
var tmp12470 = inst_12383;
var tmp12471 = inst_12382;
var tmp12472 = inst_12381;
var inst_12381__$1 = tmp12472;
var inst_12382__$1 = tmp12471;
var inst_12383__$1 = tmp12470;
var inst_12384__$1 = inst_12392;
var state_12440__$1 = (function (){var statearr_12476 = state_12440;
(statearr_12476[(12)] = inst_12383__$1);

(statearr_12476[(13)] = inst_12382__$1);

(statearr_12476[(15)] = inst_12381__$1);

(statearr_12476[(17)] = inst_12391);

(statearr_12476[(16)] = inst_12384__$1);

return statearr_12476;
})();
var statearr_12477_12513 = state_12440__$1;
(statearr_12477_12513[(2)] = null);

(statearr_12477_12513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (18))){
var inst_12410 = (state_12440[(2)]);
var state_12440__$1 = state_12440;
var statearr_12478_12514 = state_12440__$1;
(statearr_12478_12514[(2)] = inst_12410);

(statearr_12478_12514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12441 === (8))){
var inst_12383 = (state_12440[(12)]);
var inst_12384 = (state_12440[(16)]);
var inst_12386 = (inst_12384 < inst_12383);
var inst_12387 = inst_12386;
var state_12440__$1 = state_12440;
if(cljs.core.truth_(inst_12387)){
var statearr_12479_12515 = state_12440__$1;
(statearr_12479_12515[(1)] = (10));

} else {
var statearr_12480_12516 = state_12440__$1;
(statearr_12480_12516[(1)] = (11));

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
});})(c__7508__auto___12488,mults,ensure_mult,p))
;
return ((function (switch__7443__auto__,c__7508__auto___12488,mults,ensure_mult,p){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12484[(0)] = state_machine__7444__auto__);

(statearr_12484[(1)] = (1));

return statearr_12484;
});
var state_machine__7444__auto____1 = (function (state_12440){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12485){if((e12485 instanceof Object)){
var ex__7447__auto__ = e12485;
var statearr_12486_12517 = state_12440;
(statearr_12486_12517[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12518 = state_12440;
state_12440 = G__12518;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12440){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12488,mults,ensure_mult,p))
})();
var state__7510__auto__ = (function (){var statearr_12487 = f__7509__auto__.call(null);
(statearr_12487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12488);

return statearr_12487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12488,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7508__auto___12655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12625){
var state_val_12626 = (state_12625[(1)]);
if((state_val_12626 === (7))){
var state_12625__$1 = state_12625;
var statearr_12627_12656 = state_12625__$1;
(statearr_12627_12656[(2)] = null);

(statearr_12627_12656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (1))){
var state_12625__$1 = state_12625;
var statearr_12628_12657 = state_12625__$1;
(statearr_12628_12657[(2)] = null);

(statearr_12628_12657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (4))){
var inst_12589 = (state_12625[(7)]);
var inst_12591 = (inst_12589 < cnt);
var state_12625__$1 = state_12625;
if(cljs.core.truth_(inst_12591)){
var statearr_12629_12658 = state_12625__$1;
(statearr_12629_12658[(1)] = (6));

} else {
var statearr_12630_12659 = state_12625__$1;
(statearr_12630_12659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (15))){
var inst_12621 = (state_12625[(2)]);
var state_12625__$1 = state_12625;
var statearr_12631_12660 = state_12625__$1;
(statearr_12631_12660[(2)] = inst_12621);

(statearr_12631_12660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (13))){
var inst_12614 = cljs.core.async.close_BANG_.call(null,out);
var state_12625__$1 = state_12625;
var statearr_12632_12661 = state_12625__$1;
(statearr_12632_12661[(2)] = inst_12614);

(statearr_12632_12661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (6))){
var state_12625__$1 = state_12625;
var statearr_12633_12662 = state_12625__$1;
(statearr_12633_12662[(2)] = null);

(statearr_12633_12662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (3))){
var inst_12623 = (state_12625[(2)]);
var state_12625__$1 = state_12625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12625__$1,inst_12623);
} else {
if((state_val_12626 === (12))){
var inst_12611 = (state_12625[(8)]);
var inst_12611__$1 = (state_12625[(2)]);
var inst_12612 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12611__$1);
var state_12625__$1 = (function (){var statearr_12634 = state_12625;
(statearr_12634[(8)] = inst_12611__$1);

return statearr_12634;
})();
if(cljs.core.truth_(inst_12612)){
var statearr_12635_12663 = state_12625__$1;
(statearr_12635_12663[(1)] = (13));

} else {
var statearr_12636_12664 = state_12625__$1;
(statearr_12636_12664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (2))){
var inst_12588 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12589 = (0);
var state_12625__$1 = (function (){var statearr_12637 = state_12625;
(statearr_12637[(9)] = inst_12588);

(statearr_12637[(7)] = inst_12589);

return statearr_12637;
})();
var statearr_12638_12665 = state_12625__$1;
(statearr_12638_12665[(2)] = null);

(statearr_12638_12665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (11))){
var inst_12589 = (state_12625[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12625,(10),Object,null,(9));
var inst_12598 = chs__$1.call(null,inst_12589);
var inst_12599 = done.call(null,inst_12589);
var inst_12600 = cljs.core.async.take_BANG_.call(null,inst_12598,inst_12599);
var state_12625__$1 = state_12625;
var statearr_12639_12666 = state_12625__$1;
(statearr_12639_12666[(2)] = inst_12600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (9))){
var inst_12589 = (state_12625[(7)]);
var inst_12602 = (state_12625[(2)]);
var inst_12603 = (inst_12589 + (1));
var inst_12589__$1 = inst_12603;
var state_12625__$1 = (function (){var statearr_12640 = state_12625;
(statearr_12640[(10)] = inst_12602);

(statearr_12640[(7)] = inst_12589__$1);

return statearr_12640;
})();
var statearr_12641_12667 = state_12625__$1;
(statearr_12641_12667[(2)] = null);

(statearr_12641_12667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (5))){
var inst_12609 = (state_12625[(2)]);
var state_12625__$1 = (function (){var statearr_12642 = state_12625;
(statearr_12642[(11)] = inst_12609);

return statearr_12642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(12),dchan);
} else {
if((state_val_12626 === (14))){
var inst_12611 = (state_12625[(8)]);
var inst_12616 = cljs.core.apply.call(null,f,inst_12611);
var state_12625__$1 = state_12625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12625__$1,(16),out,inst_12616);
} else {
if((state_val_12626 === (16))){
var inst_12618 = (state_12625[(2)]);
var state_12625__$1 = (function (){var statearr_12643 = state_12625;
(statearr_12643[(12)] = inst_12618);

return statearr_12643;
})();
var statearr_12644_12668 = state_12625__$1;
(statearr_12644_12668[(2)] = null);

(statearr_12644_12668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (10))){
var inst_12593 = (state_12625[(2)]);
var inst_12594 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12625__$1 = (function (){var statearr_12645 = state_12625;
(statearr_12645[(13)] = inst_12593);

return statearr_12645;
})();
var statearr_12646_12669 = state_12625__$1;
(statearr_12646_12669[(2)] = inst_12594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12626 === (8))){
var inst_12607 = (state_12625[(2)]);
var state_12625__$1 = state_12625;
var statearr_12647_12670 = state_12625__$1;
(statearr_12647_12670[(2)] = inst_12607);

(statearr_12647_12670[(1)] = (5));


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
});})(c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7443__auto__,c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12651[(0)] = state_machine__7444__auto__);

(statearr_12651[(1)] = (1));

return statearr_12651;
});
var state_machine__7444__auto____1 = (function (state_12625){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object)){
var ex__7447__auto__ = e12652;
var statearr_12653_12671 = state_12625;
(statearr_12653_12671[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12672 = state_12625;
state_12625 = G__12672;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12625){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7510__auto__ = (function (){var statearr_12654 = f__7509__auto__.call(null);
(statearr_12654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12655);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12655,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___12780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12780,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12780,out){
return (function (state_12756){
var state_val_12757 = (state_12756[(1)]);
if((state_val_12757 === (7))){
var inst_12735 = (state_12756[(7)]);
var inst_12736 = (state_12756[(8)]);
var inst_12735__$1 = (state_12756[(2)]);
var inst_12736__$1 = cljs.core.nth.call(null,inst_12735__$1,(0),null);
var inst_12737 = cljs.core.nth.call(null,inst_12735__$1,(1),null);
var inst_12738 = (inst_12736__$1 == null);
var state_12756__$1 = (function (){var statearr_12758 = state_12756;
(statearr_12758[(9)] = inst_12737);

(statearr_12758[(7)] = inst_12735__$1);

(statearr_12758[(8)] = inst_12736__$1);

return statearr_12758;
})();
if(cljs.core.truth_(inst_12738)){
var statearr_12759_12781 = state_12756__$1;
(statearr_12759_12781[(1)] = (8));

} else {
var statearr_12760_12782 = state_12756__$1;
(statearr_12760_12782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (1))){
var inst_12727 = cljs.core.vec.call(null,chs);
var inst_12728 = inst_12727;
var state_12756__$1 = (function (){var statearr_12761 = state_12756;
(statearr_12761[(10)] = inst_12728);

return statearr_12761;
})();
var statearr_12762_12783 = state_12756__$1;
(statearr_12762_12783[(2)] = null);

(statearr_12762_12783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (4))){
var inst_12728 = (state_12756[(10)]);
var state_12756__$1 = state_12756;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12756__$1,(7),inst_12728);
} else {
if((state_val_12757 === (6))){
var inst_12752 = (state_12756[(2)]);
var state_12756__$1 = state_12756;
var statearr_12763_12784 = state_12756__$1;
(statearr_12763_12784[(2)] = inst_12752);

(statearr_12763_12784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (3))){
var inst_12754 = (state_12756[(2)]);
var state_12756__$1 = state_12756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12756__$1,inst_12754);
} else {
if((state_val_12757 === (2))){
var inst_12728 = (state_12756[(10)]);
var inst_12730 = cljs.core.count.call(null,inst_12728);
var inst_12731 = (inst_12730 > (0));
var state_12756__$1 = state_12756;
if(cljs.core.truth_(inst_12731)){
var statearr_12765_12785 = state_12756__$1;
(statearr_12765_12785[(1)] = (4));

} else {
var statearr_12766_12786 = state_12756__$1;
(statearr_12766_12786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (11))){
var inst_12728 = (state_12756[(10)]);
var inst_12745 = (state_12756[(2)]);
var tmp12764 = inst_12728;
var inst_12728__$1 = tmp12764;
var state_12756__$1 = (function (){var statearr_12767 = state_12756;
(statearr_12767[(11)] = inst_12745);

(statearr_12767[(10)] = inst_12728__$1);

return statearr_12767;
})();
var statearr_12768_12787 = state_12756__$1;
(statearr_12768_12787[(2)] = null);

(statearr_12768_12787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (9))){
var inst_12736 = (state_12756[(8)]);
var state_12756__$1 = state_12756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12756__$1,(11),out,inst_12736);
} else {
if((state_val_12757 === (5))){
var inst_12750 = cljs.core.async.close_BANG_.call(null,out);
var state_12756__$1 = state_12756;
var statearr_12769_12788 = state_12756__$1;
(statearr_12769_12788[(2)] = inst_12750);

(statearr_12769_12788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (10))){
var inst_12748 = (state_12756[(2)]);
var state_12756__$1 = state_12756;
var statearr_12770_12789 = state_12756__$1;
(statearr_12770_12789[(2)] = inst_12748);

(statearr_12770_12789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12757 === (8))){
var inst_12737 = (state_12756[(9)]);
var inst_12735 = (state_12756[(7)]);
var inst_12736 = (state_12756[(8)]);
var inst_12728 = (state_12756[(10)]);
var inst_12740 = (function (){var c = inst_12737;
var v = inst_12736;
var vec__12733 = inst_12735;
var cs = inst_12728;
return ((function (c,v,vec__12733,cs,inst_12737,inst_12735,inst_12736,inst_12728,state_val_12757,c__7508__auto___12780,out){
return (function (p1__12673_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12673_SHARP_);
});
;})(c,v,vec__12733,cs,inst_12737,inst_12735,inst_12736,inst_12728,state_val_12757,c__7508__auto___12780,out))
})();
var inst_12741 = cljs.core.filterv.call(null,inst_12740,inst_12728);
var inst_12728__$1 = inst_12741;
var state_12756__$1 = (function (){var statearr_12771 = state_12756;
(statearr_12771[(10)] = inst_12728__$1);

return statearr_12771;
})();
var statearr_12772_12790 = state_12756__$1;
(statearr_12772_12790[(2)] = null);

(statearr_12772_12790[(1)] = (2));


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
});})(c__7508__auto___12780,out))
;
return ((function (switch__7443__auto__,c__7508__auto___12780,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12776[(0)] = state_machine__7444__auto__);

(statearr_12776[(1)] = (1));

return statearr_12776;
});
var state_machine__7444__auto____1 = (function (state_12756){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12777){if((e12777 instanceof Object)){
var ex__7447__auto__ = e12777;
var statearr_12778_12791 = state_12756;
(statearr_12778_12791[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12792 = state_12756;
state_12756 = G__12792;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12756){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12780,out))
})();
var state__7510__auto__ = (function (){var statearr_12779 = f__7509__auto__.call(null);
(statearr_12779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12780);

return statearr_12779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12780,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___12885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12885,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12885,out){
return (function (state_12862){
var state_val_12863 = (state_12862[(1)]);
if((state_val_12863 === (7))){
var inst_12844 = (state_12862[(7)]);
var inst_12844__$1 = (state_12862[(2)]);
var inst_12845 = (inst_12844__$1 == null);
var inst_12846 = cljs.core.not.call(null,inst_12845);
var state_12862__$1 = (function (){var statearr_12864 = state_12862;
(statearr_12864[(7)] = inst_12844__$1);

return statearr_12864;
})();
if(inst_12846){
var statearr_12865_12886 = state_12862__$1;
(statearr_12865_12886[(1)] = (8));

} else {
var statearr_12866_12887 = state_12862__$1;
(statearr_12866_12887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (1))){
var inst_12839 = (0);
var state_12862__$1 = (function (){var statearr_12867 = state_12862;
(statearr_12867[(8)] = inst_12839);

return statearr_12867;
})();
var statearr_12868_12888 = state_12862__$1;
(statearr_12868_12888[(2)] = null);

(statearr_12868_12888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (4))){
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12862__$1,(7),ch);
} else {
if((state_val_12863 === (6))){
var inst_12857 = (state_12862[(2)]);
var state_12862__$1 = state_12862;
var statearr_12869_12889 = state_12862__$1;
(statearr_12869_12889[(2)] = inst_12857);

(statearr_12869_12889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (3))){
var inst_12859 = (state_12862[(2)]);
var inst_12860 = cljs.core.async.close_BANG_.call(null,out);
var state_12862__$1 = (function (){var statearr_12870 = state_12862;
(statearr_12870[(9)] = inst_12859);

return statearr_12870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12862__$1,inst_12860);
} else {
if((state_val_12863 === (2))){
var inst_12839 = (state_12862[(8)]);
var inst_12841 = (inst_12839 < n);
var state_12862__$1 = state_12862;
if(cljs.core.truth_(inst_12841)){
var statearr_12871_12890 = state_12862__$1;
(statearr_12871_12890[(1)] = (4));

} else {
var statearr_12872_12891 = state_12862__$1;
(statearr_12872_12891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (11))){
var inst_12839 = (state_12862[(8)]);
var inst_12849 = (state_12862[(2)]);
var inst_12850 = (inst_12839 + (1));
var inst_12839__$1 = inst_12850;
var state_12862__$1 = (function (){var statearr_12873 = state_12862;
(statearr_12873[(8)] = inst_12839__$1);

(statearr_12873[(10)] = inst_12849);

return statearr_12873;
})();
var statearr_12874_12892 = state_12862__$1;
(statearr_12874_12892[(2)] = null);

(statearr_12874_12892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (9))){
var state_12862__$1 = state_12862;
var statearr_12875_12893 = state_12862__$1;
(statearr_12875_12893[(2)] = null);

(statearr_12875_12893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (5))){
var state_12862__$1 = state_12862;
var statearr_12876_12894 = state_12862__$1;
(statearr_12876_12894[(2)] = null);

(statearr_12876_12894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (10))){
var inst_12854 = (state_12862[(2)]);
var state_12862__$1 = state_12862;
var statearr_12877_12895 = state_12862__$1;
(statearr_12877_12895[(2)] = inst_12854);

(statearr_12877_12895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12863 === (8))){
var inst_12844 = (state_12862[(7)]);
var state_12862__$1 = state_12862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12862__$1,(11),out,inst_12844);
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
});})(c__7508__auto___12885,out))
;
return ((function (switch__7443__auto__,c__7508__auto___12885,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12881[(0)] = state_machine__7444__auto__);

(statearr_12881[(1)] = (1));

return statearr_12881;
});
var state_machine__7444__auto____1 = (function (state_12862){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12882){if((e12882 instanceof Object)){
var ex__7447__auto__ = e12882;
var statearr_12883_12896 = state_12862;
(statearr_12883_12896[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12897 = state_12862;
state_12862 = G__12897;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12862){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12885,out))
})();
var state__7510__auto__ = (function (){var statearr_12884 = f__7509__auto__.call(null);
(statearr_12884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12885);

return statearr_12884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12885,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___12994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___12994,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___12994,out){
return (function (state_12969){
var state_val_12970 = (state_12969[(1)]);
if((state_val_12970 === (7))){
var inst_12964 = (state_12969[(2)]);
var state_12969__$1 = state_12969;
var statearr_12971_12995 = state_12969__$1;
(statearr_12971_12995[(2)] = inst_12964);

(statearr_12971_12995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (1))){
var inst_12946 = null;
var state_12969__$1 = (function (){var statearr_12972 = state_12969;
(statearr_12972[(7)] = inst_12946);

return statearr_12972;
})();
var statearr_12973_12996 = state_12969__$1;
(statearr_12973_12996[(2)] = null);

(statearr_12973_12996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (4))){
var inst_12949 = (state_12969[(8)]);
var inst_12949__$1 = (state_12969[(2)]);
var inst_12950 = (inst_12949__$1 == null);
var inst_12951 = cljs.core.not.call(null,inst_12950);
var state_12969__$1 = (function (){var statearr_12974 = state_12969;
(statearr_12974[(8)] = inst_12949__$1);

return statearr_12974;
})();
if(inst_12951){
var statearr_12975_12997 = state_12969__$1;
(statearr_12975_12997[(1)] = (5));

} else {
var statearr_12976_12998 = state_12969__$1;
(statearr_12976_12998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (6))){
var state_12969__$1 = state_12969;
var statearr_12977_12999 = state_12969__$1;
(statearr_12977_12999[(2)] = null);

(statearr_12977_12999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (3))){
var inst_12966 = (state_12969[(2)]);
var inst_12967 = cljs.core.async.close_BANG_.call(null,out);
var state_12969__$1 = (function (){var statearr_12978 = state_12969;
(statearr_12978[(9)] = inst_12966);

return statearr_12978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12969__$1,inst_12967);
} else {
if((state_val_12970 === (2))){
var state_12969__$1 = state_12969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12969__$1,(4),ch);
} else {
if((state_val_12970 === (11))){
var inst_12949 = (state_12969[(8)]);
var inst_12958 = (state_12969[(2)]);
var inst_12946 = inst_12949;
var state_12969__$1 = (function (){var statearr_12979 = state_12969;
(statearr_12979[(7)] = inst_12946);

(statearr_12979[(10)] = inst_12958);

return statearr_12979;
})();
var statearr_12980_13000 = state_12969__$1;
(statearr_12980_13000[(2)] = null);

(statearr_12980_13000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (9))){
var inst_12949 = (state_12969[(8)]);
var state_12969__$1 = state_12969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12969__$1,(11),out,inst_12949);
} else {
if((state_val_12970 === (5))){
var inst_12946 = (state_12969[(7)]);
var inst_12949 = (state_12969[(8)]);
var inst_12953 = cljs.core._EQ_.call(null,inst_12949,inst_12946);
var state_12969__$1 = state_12969;
if(inst_12953){
var statearr_12982_13001 = state_12969__$1;
(statearr_12982_13001[(1)] = (8));

} else {
var statearr_12983_13002 = state_12969__$1;
(statearr_12983_13002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (10))){
var inst_12961 = (state_12969[(2)]);
var state_12969__$1 = state_12969;
var statearr_12984_13003 = state_12969__$1;
(statearr_12984_13003[(2)] = inst_12961);

(statearr_12984_13003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12970 === (8))){
var inst_12946 = (state_12969[(7)]);
var tmp12981 = inst_12946;
var inst_12946__$1 = tmp12981;
var state_12969__$1 = (function (){var statearr_12985 = state_12969;
(statearr_12985[(7)] = inst_12946__$1);

return statearr_12985;
})();
var statearr_12986_13004 = state_12969__$1;
(statearr_12986_13004[(2)] = null);

(statearr_12986_13004[(1)] = (2));


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
});})(c__7508__auto___12994,out))
;
return ((function (switch__7443__auto__,c__7508__auto___12994,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_12990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12990[(0)] = state_machine__7444__auto__);

(statearr_12990[(1)] = (1));

return statearr_12990;
});
var state_machine__7444__auto____1 = (function (state_12969){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_12969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e12991){if((e12991 instanceof Object)){
var ex__7447__auto__ = e12991;
var statearr_12992_13005 = state_12969;
(statearr_12992_13005[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13006 = state_12969;
state_12969 = G__13006;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_12969){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_12969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___12994,out))
})();
var state__7510__auto__ = (function (){var statearr_12993 = f__7509__auto__.call(null);
(statearr_12993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___12994);

return statearr_12993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___12994,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___13141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___13141,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___13141,out){
return (function (state_13111){
var state_val_13112 = (state_13111[(1)]);
if((state_val_13112 === (7))){
var inst_13107 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13113_13142 = state_13111__$1;
(statearr_13113_13142[(2)] = inst_13107);

(statearr_13113_13142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (1))){
var inst_13074 = (new Array(n));
var inst_13075 = inst_13074;
var inst_13076 = (0);
var state_13111__$1 = (function (){var statearr_13114 = state_13111;
(statearr_13114[(7)] = inst_13075);

(statearr_13114[(8)] = inst_13076);

return statearr_13114;
})();
var statearr_13115_13143 = state_13111__$1;
(statearr_13115_13143[(2)] = null);

(statearr_13115_13143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (4))){
var inst_13079 = (state_13111[(9)]);
var inst_13079__$1 = (state_13111[(2)]);
var inst_13080 = (inst_13079__$1 == null);
var inst_13081 = cljs.core.not.call(null,inst_13080);
var state_13111__$1 = (function (){var statearr_13116 = state_13111;
(statearr_13116[(9)] = inst_13079__$1);

return statearr_13116;
})();
if(inst_13081){
var statearr_13117_13144 = state_13111__$1;
(statearr_13117_13144[(1)] = (5));

} else {
var statearr_13118_13145 = state_13111__$1;
(statearr_13118_13145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (15))){
var inst_13101 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13119_13146 = state_13111__$1;
(statearr_13119_13146[(2)] = inst_13101);

(statearr_13119_13146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (13))){
var state_13111__$1 = state_13111;
var statearr_13120_13147 = state_13111__$1;
(statearr_13120_13147[(2)] = null);

(statearr_13120_13147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (6))){
var inst_13076 = (state_13111[(8)]);
var inst_13097 = (inst_13076 > (0));
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13097)){
var statearr_13121_13148 = state_13111__$1;
(statearr_13121_13148[(1)] = (12));

} else {
var statearr_13122_13149 = state_13111__$1;
(statearr_13122_13149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (3))){
var inst_13109 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13111__$1,inst_13109);
} else {
if((state_val_13112 === (12))){
var inst_13075 = (state_13111[(7)]);
var inst_13099 = cljs.core.vec.call(null,inst_13075);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(15),out,inst_13099);
} else {
if((state_val_13112 === (2))){
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13111__$1,(4),ch);
} else {
if((state_val_13112 === (11))){
var inst_13091 = (state_13111[(2)]);
var inst_13092 = (new Array(n));
var inst_13075 = inst_13092;
var inst_13076 = (0);
var state_13111__$1 = (function (){var statearr_13123 = state_13111;
(statearr_13123[(7)] = inst_13075);

(statearr_13123[(10)] = inst_13091);

(statearr_13123[(8)] = inst_13076);

return statearr_13123;
})();
var statearr_13124_13150 = state_13111__$1;
(statearr_13124_13150[(2)] = null);

(statearr_13124_13150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (9))){
var inst_13075 = (state_13111[(7)]);
var inst_13089 = cljs.core.vec.call(null,inst_13075);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(11),out,inst_13089);
} else {
if((state_val_13112 === (5))){
var inst_13079 = (state_13111[(9)]);
var inst_13075 = (state_13111[(7)]);
var inst_13084 = (state_13111[(11)]);
var inst_13076 = (state_13111[(8)]);
var inst_13083 = (inst_13075[inst_13076] = inst_13079);
var inst_13084__$1 = (inst_13076 + (1));
var inst_13085 = (inst_13084__$1 < n);
var state_13111__$1 = (function (){var statearr_13125 = state_13111;
(statearr_13125[(12)] = inst_13083);

(statearr_13125[(11)] = inst_13084__$1);

return statearr_13125;
})();
if(cljs.core.truth_(inst_13085)){
var statearr_13126_13151 = state_13111__$1;
(statearr_13126_13151[(1)] = (8));

} else {
var statearr_13127_13152 = state_13111__$1;
(statearr_13127_13152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (14))){
var inst_13104 = (state_13111[(2)]);
var inst_13105 = cljs.core.async.close_BANG_.call(null,out);
var state_13111__$1 = (function (){var statearr_13129 = state_13111;
(statearr_13129[(13)] = inst_13104);

return statearr_13129;
})();
var statearr_13130_13153 = state_13111__$1;
(statearr_13130_13153[(2)] = inst_13105);

(statearr_13130_13153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (10))){
var inst_13095 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13131_13154 = state_13111__$1;
(statearr_13131_13154[(2)] = inst_13095);

(statearr_13131_13154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (8))){
var inst_13075 = (state_13111[(7)]);
var inst_13084 = (state_13111[(11)]);
var tmp13128 = inst_13075;
var inst_13075__$1 = tmp13128;
var inst_13076 = inst_13084;
var state_13111__$1 = (function (){var statearr_13132 = state_13111;
(statearr_13132[(7)] = inst_13075__$1);

(statearr_13132[(8)] = inst_13076);

return statearr_13132;
})();
var statearr_13133_13155 = state_13111__$1;
(statearr_13133_13155[(2)] = null);

(statearr_13133_13155[(1)] = (2));


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
});})(c__7508__auto___13141,out))
;
return ((function (switch__7443__auto__,c__7508__auto___13141,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_13137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13137[(0)] = state_machine__7444__auto__);

(statearr_13137[(1)] = (1));

return statearr_13137;
});
var state_machine__7444__auto____1 = (function (state_13111){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_13111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e13138){if((e13138 instanceof Object)){
var ex__7447__auto__ = e13138;
var statearr_13139_13156 = state_13111;
(statearr_13139_13156[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13157 = state_13111;
state_13111 = G__13157;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_13111){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_13111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___13141,out))
})();
var state__7510__auto__ = (function (){var statearr_13140 = f__7509__auto__.call(null);
(statearr_13140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___13141);

return statearr_13140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___13141,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7508__auto___13300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___13300,out){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___13300,out){
return (function (state_13270){
var state_val_13271 = (state_13270[(1)]);
if((state_val_13271 === (7))){
var inst_13266 = (state_13270[(2)]);
var state_13270__$1 = state_13270;
var statearr_13272_13301 = state_13270__$1;
(statearr_13272_13301[(2)] = inst_13266);

(statearr_13272_13301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (1))){
var inst_13229 = [];
var inst_13230 = inst_13229;
var inst_13231 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13270__$1 = (function (){var statearr_13273 = state_13270;
(statearr_13273[(7)] = inst_13231);

(statearr_13273[(8)] = inst_13230);

return statearr_13273;
})();
var statearr_13274_13302 = state_13270__$1;
(statearr_13274_13302[(2)] = null);

(statearr_13274_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (4))){
var inst_13234 = (state_13270[(9)]);
var inst_13234__$1 = (state_13270[(2)]);
var inst_13235 = (inst_13234__$1 == null);
var inst_13236 = cljs.core.not.call(null,inst_13235);
var state_13270__$1 = (function (){var statearr_13275 = state_13270;
(statearr_13275[(9)] = inst_13234__$1);

return statearr_13275;
})();
if(inst_13236){
var statearr_13276_13303 = state_13270__$1;
(statearr_13276_13303[(1)] = (5));

} else {
var statearr_13277_13304 = state_13270__$1;
(statearr_13277_13304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (15))){
var inst_13260 = (state_13270[(2)]);
var state_13270__$1 = state_13270;
var statearr_13278_13305 = state_13270__$1;
(statearr_13278_13305[(2)] = inst_13260);

(statearr_13278_13305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (13))){
var state_13270__$1 = state_13270;
var statearr_13279_13306 = state_13270__$1;
(statearr_13279_13306[(2)] = null);

(statearr_13279_13306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (6))){
var inst_13230 = (state_13270[(8)]);
var inst_13255 = inst_13230.length;
var inst_13256 = (inst_13255 > (0));
var state_13270__$1 = state_13270;
if(cljs.core.truth_(inst_13256)){
var statearr_13280_13307 = state_13270__$1;
(statearr_13280_13307[(1)] = (12));

} else {
var statearr_13281_13308 = state_13270__$1;
(statearr_13281_13308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (3))){
var inst_13268 = (state_13270[(2)]);
var state_13270__$1 = state_13270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13270__$1,inst_13268);
} else {
if((state_val_13271 === (12))){
var inst_13230 = (state_13270[(8)]);
var inst_13258 = cljs.core.vec.call(null,inst_13230);
var state_13270__$1 = state_13270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13270__$1,(15),out,inst_13258);
} else {
if((state_val_13271 === (2))){
var state_13270__$1 = state_13270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13270__$1,(4),ch);
} else {
if((state_val_13271 === (11))){
var inst_13234 = (state_13270[(9)]);
var inst_13238 = (state_13270[(10)]);
var inst_13248 = (state_13270[(2)]);
var inst_13249 = [];
var inst_13250 = inst_13249.push(inst_13234);
var inst_13230 = inst_13249;
var inst_13231 = inst_13238;
var state_13270__$1 = (function (){var statearr_13282 = state_13270;
(statearr_13282[(11)] = inst_13248);

(statearr_13282[(12)] = inst_13250);

(statearr_13282[(7)] = inst_13231);

(statearr_13282[(8)] = inst_13230);

return statearr_13282;
})();
var statearr_13283_13309 = state_13270__$1;
(statearr_13283_13309[(2)] = null);

(statearr_13283_13309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (9))){
var inst_13230 = (state_13270[(8)]);
var inst_13246 = cljs.core.vec.call(null,inst_13230);
var state_13270__$1 = state_13270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13270__$1,(11),out,inst_13246);
} else {
if((state_val_13271 === (5))){
var inst_13234 = (state_13270[(9)]);
var inst_13238 = (state_13270[(10)]);
var inst_13231 = (state_13270[(7)]);
var inst_13238__$1 = f.call(null,inst_13234);
var inst_13239 = cljs.core._EQ_.call(null,inst_13238__$1,inst_13231);
var inst_13240 = cljs.core.keyword_identical_QMARK_.call(null,inst_13231,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13241 = (inst_13239) || (inst_13240);
var state_13270__$1 = (function (){var statearr_13284 = state_13270;
(statearr_13284[(10)] = inst_13238__$1);

return statearr_13284;
})();
if(cljs.core.truth_(inst_13241)){
var statearr_13285_13310 = state_13270__$1;
(statearr_13285_13310[(1)] = (8));

} else {
var statearr_13286_13311 = state_13270__$1;
(statearr_13286_13311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (14))){
var inst_13263 = (state_13270[(2)]);
var inst_13264 = cljs.core.async.close_BANG_.call(null,out);
var state_13270__$1 = (function (){var statearr_13288 = state_13270;
(statearr_13288[(13)] = inst_13263);

return statearr_13288;
})();
var statearr_13289_13312 = state_13270__$1;
(statearr_13289_13312[(2)] = inst_13264);

(statearr_13289_13312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (10))){
var inst_13253 = (state_13270[(2)]);
var state_13270__$1 = state_13270;
var statearr_13290_13313 = state_13270__$1;
(statearr_13290_13313[(2)] = inst_13253);

(statearr_13290_13313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13271 === (8))){
var inst_13234 = (state_13270[(9)]);
var inst_13238 = (state_13270[(10)]);
var inst_13230 = (state_13270[(8)]);
var inst_13243 = inst_13230.push(inst_13234);
var tmp13287 = inst_13230;
var inst_13230__$1 = tmp13287;
var inst_13231 = inst_13238;
var state_13270__$1 = (function (){var statearr_13291 = state_13270;
(statearr_13291[(7)] = inst_13231);

(statearr_13291[(8)] = inst_13230__$1);

(statearr_13291[(14)] = inst_13243);

return statearr_13291;
})();
var statearr_13292_13314 = state_13270__$1;
(statearr_13292_13314[(2)] = null);

(statearr_13292_13314[(1)] = (2));


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
});})(c__7508__auto___13300,out))
;
return ((function (switch__7443__auto__,c__7508__auto___13300,out){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_13296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13296[(0)] = state_machine__7444__auto__);

(statearr_13296[(1)] = (1));

return statearr_13296;
});
var state_machine__7444__auto____1 = (function (state_13270){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_13270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e13297){if((e13297 instanceof Object)){
var ex__7447__auto__ = e13297;
var statearr_13298_13315 = state_13270;
(statearr_13298_13315[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13316 = state_13270;
state_13270 = G__13316;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_13270){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_13270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___13300,out))
})();
var state__7510__auto__ = (function (){var statearr_13299 = f__7509__auto__.call(null);
(statearr_13299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___13300);

return statearr_13299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___13300,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map