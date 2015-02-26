// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('frontend.core')) {
goog.provide('frontend.core');
}
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('reagent.core');
frontend.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
/**
* @param {...*} var_args
*/
frontend.core.row = (function() { 
var row__delegate = function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6488){
var label = cljs.core.first(arglist__6488);
var body = cljs.core.rest(arglist__6488);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
frontend.core.text_input = (function text_input(id,label){
return frontend.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
frontend.core.text_area = (function text_area(id,label){
return frontend.core.row.call(null,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
});
frontend.core.form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Signup"], null)], null),frontend.core.text_input.call(null,new cljs.core.Keyword(null,"username","username",1605666410),"Username"),frontend.core.text_area.call(null,new cljs.core.Keyword(null,"public_key","public_key",156971141),"Public key")], null);
frontend.core.save_doc = (function save_doc(doc){
return (function (){
return ajax.core.POST.call(null,[cljs.core.str(context),cljs.core.str("/save")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.deref.call(null,doc)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){
return cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
});
frontend.core.about = (function about(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"this is the story of frontend... work in progress"], null);
});
frontend.core.home = (function home(){
var doc = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,frontend.core.form,doc,((function (doc){
return (function (_,___$1,___$2){
cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return null;
});})(doc))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),frontend.core.save_doc.call(null,doc)], null),"Submit"], null))], null);
});
;})(doc))
});
frontend.core.navbar = (function navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-inverse.navbar-fixed-top","div.navbar.navbar-inverse.navbar-fixed-top",-279800444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-collapse.collapse","div.navbar-collapse.collapse",-1723910318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,frontend.core.home,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/");
})], null),"Signup User account"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,frontend.core.about,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return secretary.core.dispatch_BANG_.call(null,"#/about");
})], null),"About"], null)], null)], null)], null)], null)], null);
});
frontend.core.page = (function page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__6466__auto___6491 = (function (params__6467__auto__){
if(cljs.core.map_QMARK_.call(null,params__6467__auto__)){
var map__6489 = params__6467__auto__;
var map__6489__$1 = ((cljs.core.seq_QMARK_.call(null,map__6489))?cljs.core.apply.call(null,cljs.core.hash_map,map__6489):map__6489);
console.log("hi!");

return cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),frontend.core.home);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6467__auto__)){
var vec__6490 = params__6467__auto__;
console.log("hi!");

return cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),frontend.core.home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6466__auto___6491);

var action__6466__auto___6494 = (function (params__6467__auto__){
if(cljs.core.map_QMARK_.call(null,params__6467__auto__)){
var map__6492 = params__6467__auto__;
var map__6492__$1 = ((cljs.core.seq_QMARK_.call(null,map__6492))?cljs.core.apply.call(null,cljs.core.hash_map,map__6492):map__6492);
return cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),frontend.core.about);
} else {
if(cljs.core.vector_QMARK_.call(null,params__6467__auto__)){
var vec__6493 = params__6467__auto__;
return cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),frontend.core.about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__6466__auto___6494);

frontend.core.init_BANG_ = (function init_BANG_(){
cljs.core.swap_BANG_.call(null,frontend.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),frontend.core.home);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.navbar], null),document.getElementById("navbar"));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map