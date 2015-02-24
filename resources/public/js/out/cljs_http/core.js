// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('cljs_http.core')) {
goog.provide('cljs_http.core');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var xhr = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

return xhr.abort();
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Takes an XhrIo object and applies the default-headers to it.
*/
cljs_http.core.apply_default_headers_BANG_ = (function apply_default_headers_BANG_(xhr,headers){
var seq__10536 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__10541 = null;
var count__10542 = (0);
var i__10543 = (0);
while(true){
if((i__10543 < count__10542)){
var h_name = cljs.core._nth.call(null,chunk__10541,i__10543);
var seq__10544_10548 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__10545_10549 = null;
var count__10546_10550 = (0);
var i__10547_10551 = (0);
while(true){
if((i__10547_10551 < count__10546_10550)){
var h_val_10552 = cljs.core._nth.call(null,chunk__10545_10549,i__10547_10551);
xhr.headers.set(h_name,h_val_10552);

var G__10553 = seq__10544_10548;
var G__10554 = chunk__10545_10549;
var G__10555 = count__10546_10550;
var G__10556 = (i__10547_10551 + (1));
seq__10544_10548 = G__10553;
chunk__10545_10549 = G__10554;
count__10546_10550 = G__10555;
i__10547_10551 = G__10556;
continue;
} else {
var temp__4126__auto___10557 = cljs.core.seq.call(null,seq__10544_10548);
if(temp__4126__auto___10557){
var seq__10544_10558__$1 = temp__4126__auto___10557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10544_10558__$1)){
var c__4508__auto___10559 = cljs.core.chunk_first.call(null,seq__10544_10558__$1);
var G__10560 = cljs.core.chunk_rest.call(null,seq__10544_10558__$1);
var G__10561 = c__4508__auto___10559;
var G__10562 = cljs.core.count.call(null,c__4508__auto___10559);
var G__10563 = (0);
seq__10544_10548 = G__10560;
chunk__10545_10549 = G__10561;
count__10546_10550 = G__10562;
i__10547_10551 = G__10563;
continue;
} else {
var h_val_10564 = cljs.core.first.call(null,seq__10544_10558__$1);
xhr.headers.set(h_name,h_val_10564);

var G__10565 = cljs.core.next.call(null,seq__10544_10558__$1);
var G__10566 = null;
var G__10567 = (0);
var G__10568 = (0);
seq__10544_10548 = G__10565;
chunk__10545_10549 = G__10566;
count__10546_10550 = G__10567;
i__10547_10551 = G__10568;
continue;
}
} else {
}
}
break;
}

var G__10569 = seq__10536;
var G__10570 = chunk__10541;
var G__10571 = count__10542;
var G__10572 = (i__10543 + (1));
seq__10536 = G__10569;
chunk__10541 = G__10570;
count__10542 = G__10571;
i__10543 = G__10572;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10536);
if(temp__4126__auto__){
var seq__10536__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10536__$1)){
var c__4508__auto__ = cljs.core.chunk_first.call(null,seq__10536__$1);
var G__10573 = cljs.core.chunk_rest.call(null,seq__10536__$1);
var G__10574 = c__4508__auto__;
var G__10575 = cljs.core.count.call(null,c__4508__auto__);
var G__10576 = (0);
seq__10536 = G__10573;
chunk__10541 = G__10574;
count__10542 = G__10575;
i__10543 = G__10576;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__10536__$1);
var seq__10537_10577 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__10538_10578 = null;
var count__10539_10579 = (0);
var i__10540_10580 = (0);
while(true){
if((i__10540_10580 < count__10539_10579)){
var h_val_10581 = cljs.core._nth.call(null,chunk__10538_10578,i__10540_10580);
xhr.headers.set(h_name,h_val_10581);

var G__10582 = seq__10537_10577;
var G__10583 = chunk__10538_10578;
var G__10584 = count__10539_10579;
var G__10585 = (i__10540_10580 + (1));
seq__10537_10577 = G__10582;
chunk__10538_10578 = G__10583;
count__10539_10579 = G__10584;
i__10540_10580 = G__10585;
continue;
} else {
var temp__4126__auto___10586__$1 = cljs.core.seq.call(null,seq__10537_10577);
if(temp__4126__auto___10586__$1){
var seq__10537_10587__$1 = temp__4126__auto___10586__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10537_10587__$1)){
var c__4508__auto___10588 = cljs.core.chunk_first.call(null,seq__10537_10587__$1);
var G__10589 = cljs.core.chunk_rest.call(null,seq__10537_10587__$1);
var G__10590 = c__4508__auto___10588;
var G__10591 = cljs.core.count.call(null,c__4508__auto___10588);
var G__10592 = (0);
seq__10537_10577 = G__10589;
chunk__10538_10578 = G__10590;
count__10539_10579 = G__10591;
i__10540_10580 = G__10592;
continue;
} else {
var h_val_10593 = cljs.core.first.call(null,seq__10537_10587__$1);
xhr.headers.set(h_name,h_val_10593);

var G__10594 = cljs.core.next.call(null,seq__10537_10587__$1);
var G__10595 = null;
var G__10596 = (0);
var G__10597 = (0);
seq__10537_10577 = G__10594;
chunk__10538_10578 = G__10595;
count__10539_10579 = G__10596;
i__10540_10580 = G__10597;
continue;
}
} else {
}
}
break;
}

var G__10598 = cljs.core.next.call(null,seq__10536__$1);
var G__10599 = null;
var G__10600 = (0);
var G__10601 = (0);
seq__10536 = G__10598;
chunk__10541 = G__10599;
count__10542 = G__10600;
i__10543 = G__10601;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Builds an XhrIo object from the request parameters.
*/
cljs_http.core.build_xhr = (function build_xhr(p__10602){
var map__10605 = p__10602;
var map__10605__$1 = ((cljs.core.seq_QMARK_.call(null,map__10605))?cljs.core.apply.call(null,cljs.core.hash_map,map__10605):map__10605);
var request = map__10605__$1;
var default_headers = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__3721__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__10606 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__10606,default_headers);

G__10606.setTimeoutInterval(timeout);

G__10606.setWithCredentials(send_credentials);

return G__10606;
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__10607){
var map__10633 = p__10607;
var map__10633__$1 = ((cljs.core.seq_QMARK_.call(null,map__10633))?cljs.core.apply.call(null,cljs.core.hash_map,map__10633):map__10633);
var request__$1 = map__10633__$1;
var cancel = cljs.core.get.call(null,map__10633__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__10633__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__10633__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10633__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__10633__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__3721__auto__ = request_method;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request__$1);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__7508__auto___10658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__7509__auto__ = (function (){var switch__7443__auto__ = ((function (c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_10644){
var state_val_10645 = (state_10644[(1)]);
if((state_val_10645 === (5))){
var inst_10642 = (state_10644[(2)]);
var state_10644__$1 = state_10644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10644__$1,inst_10642);
} else {
if((state_val_10645 === (4))){
var state_10644__$1 = state_10644;
var statearr_10646_10659 = state_10644__$1;
(statearr_10646_10659[(2)] = null);

(statearr_10646_10659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10645 === (3))){
var inst_10639 = xhr.abort();
var state_10644__$1 = state_10644;
var statearr_10647_10660 = state_10644__$1;
(statearr_10647_10660[(2)] = inst_10639);

(statearr_10647_10660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10645 === (2))){
var inst_10635 = (state_10644[(2)]);
var inst_10636 = xhr.isComplete();
var inst_10637 = cljs.core.not.call(null,inst_10636);
var state_10644__$1 = (function (){var statearr_10648 = state_10644;
(statearr_10648[(7)] = inst_10635);

return statearr_10648;
})();
if(inst_10637){
var statearr_10649_10661 = state_10644__$1;
(statearr_10649_10661[(1)] = (3));

} else {
var statearr_10650_10662 = state_10644__$1;
(statearr_10650_10662[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10645 === (1))){
var state_10644__$1 = state_10644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10644__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__7443__auto__,c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__7444__auto__ = null;
var state_machine__7444__auto____0 = (function (){
var statearr_10654 = [null,null,null,null,null,null,null,null];
(statearr_10654[(0)] = state_machine__7444__auto__);

(statearr_10654[(1)] = (1));

return statearr_10654;
});
var state_machine__7444__auto____1 = (function (state_10644){
while(true){
var ret_value__7445__auto__ = (function (){try{while(true){
var result__7446__auto__ = switch__7443__auto__.call(null,state_10644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7446__auto__;
}
break;
}
}catch (e10655){if((e10655 instanceof Object)){
var ex__7447__auto__ = e10655;
var statearr_10656_10663 = state_10644;
(statearr_10656_10663[(5)] = ex__7447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10664 = state_10644;
state_10644 = G__10664;
continue;
} else {
return ret_value__7445__auto__;
}
break;
}
});
state_machine__7444__auto__ = function(state_10644){
switch(arguments.length){
case 0:
return state_machine__7444__auto____0.call(this);
case 1:
return state_machine__7444__auto____1.call(this,state_10644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7444__auto____0;
state_machine__7444__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7444__auto____1;
return state_machine__7444__auto__;
})()
;})(switch__7443__auto__,c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__7510__auto__ = (function (){var statearr_10657 = f__7509__auto__.call(null);
(statearr_10657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7508__auto___10658);

return statearr_10657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7510__auto__);
});})(c__7508__auto___10658,channel,request_url,method,headers__$1,xhr,map__10633,map__10633__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});

//# sourceMappingURL=core.js.map