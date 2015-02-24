// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('reagent.ratom')) {
goog.provide('reagent.ratom');
}
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_6899 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6899;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6903__delegate = function (x,p__6900){
var map__6902 = p__6900;
var map__6902__$1 = ((cljs.core.seq_QMARK_.call(null,map__6902))?cljs.core.apply.call(null,cljs.core.hash_map,map__6902):map__6902);
var validator = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__6902__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__6903 = function (x,var_args){
var p__6900 = null;
if (arguments.length > 1) {
  p__6900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6903__delegate.call(this,x,p__6900);};
G__6903.cljs$lang$maxFixedArity = 1;
G__6903.cljs$lang$applyTo = (function (arglist__6904){
var x = cljs.core.first(arglist__6904);
var p__6900 = cljs.core.rest(arglist__6904);
return G__6903__delegate(x,p__6900);
});
G__6903.cljs$core$IFn$_invoke$arity$variadic = G__6903__delegate;
return G__6903;
})()
;
atom = function(x,var_args){
var p__6900 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

reagent.ratom.IDisposable = (function (){var obj6906 = {};
return obj6906;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj6908 = {};
return obj6908;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom.run[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom.run["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj6910 = {};
return obj6910;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3709__auto__ = this$;
if(and__3709__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3709__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4365__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3721__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3709__auto__ = k;
if(and__3709__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3709__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4365__auto__ = (((k == null))?null:k);
return (function (){var or__3721__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4365__auto__)]);
if(or__3721__auto__){
return or__3721__auto__;
} else {
var or__3721__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3721__auto____$1){
return or__3721__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3709__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3709__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3709__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__6911_6923 = cljs.core.seq.call(null,derefed);
var chunk__6912_6924 = null;
var count__6913_6925 = (0);
var i__6914_6926 = (0);
while(true){
if((i__6914_6926 < count__6913_6925)){
var w_6927 = cljs.core._nth.call(null,chunk__6912_6924,i__6914_6926);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6927)){
} else {
cljs.core.add_watch.call(null,w_6927,this$__$1,reagent.ratom._handle_change);
}

var G__6928 = seq__6911_6923;
var G__6929 = chunk__6912_6924;
var G__6930 = count__6913_6925;
var G__6931 = (i__6914_6926 + (1));
seq__6911_6923 = G__6928;
chunk__6912_6924 = G__6929;
count__6913_6925 = G__6930;
i__6914_6926 = G__6931;
continue;
} else {
var temp__4126__auto___6932 = cljs.core.seq.call(null,seq__6911_6923);
if(temp__4126__auto___6932){
var seq__6911_6933__$1 = temp__4126__auto___6932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911_6933__$1)){
var c__4508__auto___6934 = cljs.core.chunk_first.call(null,seq__6911_6933__$1);
var G__6935 = cljs.core.chunk_rest.call(null,seq__6911_6933__$1);
var G__6936 = c__4508__auto___6934;
var G__6937 = cljs.core.count.call(null,c__4508__auto___6934);
var G__6938 = (0);
seq__6911_6923 = G__6935;
chunk__6912_6924 = G__6936;
count__6913_6925 = G__6937;
i__6914_6926 = G__6938;
continue;
} else {
var w_6939 = cljs.core.first.call(null,seq__6911_6933__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6939)){
} else {
cljs.core.add_watch.call(null,w_6939,this$__$1,reagent.ratom._handle_change);
}

var G__6940 = cljs.core.next.call(null,seq__6911_6933__$1);
var G__6941 = null;
var G__6942 = (0);
var G__6943 = (0);
seq__6911_6923 = G__6940;
chunk__6912_6924 = G__6941;
count__6913_6925 = G__6942;
i__6914_6926 = G__6943;
continue;
}
} else {
}
}
break;
}

var seq__6915_6944 = cljs.core.seq.call(null,self__.watching);
var chunk__6916_6945 = null;
var count__6917_6946 = (0);
var i__6918_6947 = (0);
while(true){
if((i__6918_6947 < count__6917_6946)){
var w_6948 = cljs.core._nth.call(null,chunk__6916_6945,i__6918_6947);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6948)){
} else {
cljs.core.remove_watch.call(null,w_6948,this$__$1);
}

var G__6949 = seq__6915_6944;
var G__6950 = chunk__6916_6945;
var G__6951 = count__6917_6946;
var G__6952 = (i__6918_6947 + (1));
seq__6915_6944 = G__6949;
chunk__6916_6945 = G__6950;
count__6917_6946 = G__6951;
i__6918_6947 = G__6952;
continue;
} else {
var temp__4126__auto___6953 = cljs.core.seq.call(null,seq__6915_6944);
if(temp__4126__auto___6953){
var seq__6915_6954__$1 = temp__4126__auto___6953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6915_6954__$1)){
var c__4508__auto___6955 = cljs.core.chunk_first.call(null,seq__6915_6954__$1);
var G__6956 = cljs.core.chunk_rest.call(null,seq__6915_6954__$1);
var G__6957 = c__4508__auto___6955;
var G__6958 = cljs.core.count.call(null,c__4508__auto___6955);
var G__6959 = (0);
seq__6915_6944 = G__6956;
chunk__6916_6945 = G__6957;
count__6917_6946 = G__6958;
i__6918_6947 = G__6959;
continue;
} else {
var w_6960 = cljs.core.first.call(null,seq__6915_6954__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_6960)){
} else {
cljs.core.remove_watch.call(null,w_6960,this$__$1);
}

var G__6961 = cljs.core.next.call(null,seq__6915_6954__$1);
var G__6962 = null;
var G__6963 = (0);
var G__6964 = (0);
seq__6915_6944 = G__6961;
chunk__6916_6945 = G__6962;
count__6917_6946 = G__6963;
i__6918_6947 = G__6964;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__6919_6965 = cljs.core.seq.call(null,self__.watching);
var chunk__6920_6966 = null;
var count__6921_6967 = (0);
var i__6922_6968 = (0);
while(true){
if((i__6922_6968 < count__6921_6967)){
var w_6969 = cljs.core._nth.call(null,chunk__6920_6966,i__6922_6968);
cljs.core.remove_watch.call(null,w_6969,this$__$1);

var G__6970 = seq__6919_6965;
var G__6971 = chunk__6920_6966;
var G__6972 = count__6921_6967;
var G__6973 = (i__6922_6968 + (1));
seq__6919_6965 = G__6970;
chunk__6920_6966 = G__6971;
count__6921_6967 = G__6972;
i__6922_6968 = G__6973;
continue;
} else {
var temp__4126__auto___6974 = cljs.core.seq.call(null,seq__6919_6965);
if(temp__4126__auto___6974){
var seq__6919_6975__$1 = temp__4126__auto___6974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6919_6975__$1)){
var c__4508__auto___6976 = cljs.core.chunk_first.call(null,seq__6919_6975__$1);
var G__6977 = cljs.core.chunk_rest.call(null,seq__6919_6975__$1);
var G__6978 = c__4508__auto___6976;
var G__6979 = cljs.core.count.call(null,c__4508__auto___6976);
var G__6980 = (0);
seq__6919_6965 = G__6977;
chunk__6920_6966 = G__6978;
count__6921_6967 = G__6979;
i__6922_6968 = G__6980;
continue;
} else {
var w_6981 = cljs.core.first.call(null,seq__6919_6975__$1);
cljs.core.remove_watch.call(null,w_6981,this$__$1);

var G__6982 = cljs.core.next.call(null,seq__6919_6975__$1);
var G__6983 = null;
var G__6984 = (0);
var G__6985 = (0);
seq__6919_6965 = G__6982;
chunk__6920_6966 = G__6983;
count__6921_6967 = G__6984;
i__6922_6968 = G__6985;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__6111__auto___6986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(!((console.log == null))){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__6111__auto___6986))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3721__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4308__auto__,writer__4309__auto__,opt__4310__auto__){
return cljs.core._write.call(null,writer__4309__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6987){
var map__6989 = p__6987;
var map__6989__$1 = ((cljs.core.seq_QMARK_.call(null,map__6989))?cljs.core.apply.call(null,cljs.core.hash_map,map__6989):map__6989);
var derefed = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__6989__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__6987 = null;
if (arguments.length > 1) {
  p__6987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__6987);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6990){
var f = cljs.core.first(arglist__6990);
var p__6987 = cljs.core.rest(arglist__6990);
return make_reaction__delegate(f,p__6987);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map