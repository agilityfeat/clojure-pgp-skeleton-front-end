// Compiled by ClojureScript 0.0-2644 {}
if(!goog.isProvided_('reagent_forms.datepicker')) {
goog.provide('reagent_forms.datepicker');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
reagent_forms.datepicker.dates = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], null),new cljs.core.Keyword(null,"days-short","days-short",-443486111),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"], null),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),new cljs.core.Keyword(null,"month-short","month-short",-1531335142),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null)], null);
reagent_forms.datepicker.separator_matcher = (function separator_matcher(fmt){
var temp__4124__auto__ = (function (){var or__3721__auto__ = cljs.core.re_find.call(null,/[.\\/\-\s].*?/,fmt);
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return " ";
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var separator = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,(function (){var pred__8381 = cljs.core._EQ_;
var expr__8382 = separator;
if(cljs.core.truth_(pred__8381.call(null,".",expr__8382))){
return /\./;
} else {
if(cljs.core.truth_(pred__8381.call(null," ",expr__8382))){
return /W+/;
} else {
return cljs.core.re_pattern.call(null,separator);
}
}
})()], null);
} else {
return null;
}
});
reagent_forms.datepicker.split_parts = (function split_parts(fmt,matcher){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,fmt,matcher)));
});
reagent_forms.datepicker.parse_format = (function parse_format(fmt){
var fmt__$1 = (function (){var or__3721__auto__ = fmt;
if(cljs.core.truth_(or__3721__auto__)){
return or__3721__auto__;
} else {
return "mm/dd/yyyy";
}
})();
var vec__8385 = reagent_forms.datepicker.separator_matcher.call(null,fmt__$1);
var separator = cljs.core.nth.call(null,vec__8385,(0),null);
var matcher = cljs.core.nth.call(null,vec__8385,(1),null);
var parts = reagent_forms.datepicker.split_parts.call(null,fmt__$1,matcher);
if(cljs.core.empty_QMARK_.call(null,parts)){
throw (new Error("Invalid date format."));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"separator","separator",-1628749125),separator,new cljs.core.Keyword(null,"matcher","matcher",-452768995),matcher,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null);
});
reagent_forms.datepicker.leap_year_QMARK_ = (function leap_year_QMARK_(year){
return ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(4)))) && (cljs.core.not_EQ_.call(null,(0),cljs.core.mod.call(null,year,(100))))) || (cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(400))));
});
reagent_forms.datepicker.days_in_month = (function days_in_month(year,month){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),((reagent_forms.datepicker.leap_year_QMARK_.call(null,year))?(29):(28)),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null).call(null,month);
});
reagent_forms.datepicker.blank_date = (function blank_date(){
var G__8387 = (new Date());
G__8387.setHours((0));

G__8387.setMinutes((0));

G__8387.setSeconds((0));

G__8387.setMilliseconds((0));

return G__8387;
});
reagent_forms.datepicker.parse_date = (function parse_date(date,fmt){
var parts = clojure.string.split.call(null,date,new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(fmt));
var date__$1 = reagent_forms.datepicker.blank_date.call(null);
var fmt_parts = cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt)),cljs.core.count.call(null,parts))){
var year = date__$1.getFullYear();
var month = date__$1.getMonth();
var day = date__$1.getDate();
var i = (0);
while(true){
if(cljs.core.not_EQ_.call(null,i,fmt_parts)){
var val = parseInt(parts.call(null,i),(10));
var val__$1 = (cljs.core.truth_(isNaN(val))?(1):val);
var part = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt).call(null,i);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
var G__8388 = year;
var G__8389 = month;
var G__8390 = val__$1;
var G__8391 = (i + (1));
year = G__8388;
month = G__8389;
day = G__8390;
i = G__8391;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
var G__8392 = year;
var G__8393 = (val__$1 - (1));
var G__8394 = day;
var G__8395 = (i + (1));
year = G__8392;
month = G__8393;
day = G__8394;
i = G__8395;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
var G__8396 = ((2000) + val__$1);
var G__8397 = month;
var G__8398 = day;
var G__8399 = (i + (1));
year = G__8396;
month = G__8397;
day = G__8398;
i = G__8399;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
var G__8400 = val__$1;
var G__8401 = month;
var G__8402 = day;
var G__8403 = (i + (1));
year = G__8400;
month = G__8401;
day = G__8402;
i = G__8403;
continue;
} else {
return null;
}
}
}
}
} else {
return (new Date(year,month,day,(0),(0),(0)));
}
break;
}
} else {
return date__$1;
}
});
reagent_forms.datepicker.formatted_value = (function formatted_value(v){
return [cljs.core.str((((v < (10)))?"0":"")),cljs.core.str(v)].join('');
});
reagent_forms.datepicker.format_date = (function format_date(p__8405,p__8406){
var map__8409 = p__8405;
var map__8409__$1 = ((cljs.core.seq_QMARK_.call(null,map__8409))?cljs.core.apply.call(null,cljs.core.hash_map,map__8409):map__8409);
var day = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"year","year",335913393));
var map__8410 = p__8406;
var map__8410__$1 = ((cljs.core.seq_QMARK_.call(null,map__8410))?cljs.core.apply.call(null,cljs.core.hash_map,map__8410):map__8410);
var parts = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var separator = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
return clojure.string.join.call(null,separator,cljs.core.map.call(null,((function (map__8409,map__8409__$1,day,month,year,map__8410,map__8410__$1,parts,separator){
return (function (p1__8404_SHARP_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__8404_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,day);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__8404_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,month);
} else {
if(cljs.core._EQ_.call(null,p1__8404_SHARP_,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
return [cljs.core.str(year)].join('').substring((2));
} else {
if(cljs.core._EQ_.call(null,p1__8404_SHARP_,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
return year;
} else {
return null;
}
}
}
}
});})(map__8409,map__8409__$1,day,month,year,map__8410,map__8410__$1,parts,separator))
,parts));
});
reagent_forms.datepicker.first_day_of_week = (function first_day_of_week(year,month){
return (function (){var G__8412 = (new Date());
G__8412.setYear(year);

G__8412.setMonth(month);

G__8412.setDate((1));

return G__8412;
})().getDay();
});
reagent_forms.datepicker.gen_days = (function gen_days(p__8413,get,save_BANG_){
var vec__8419 = p__8413;
var year = cljs.core.nth.call(null,vec__8419,(0),null);
var month = cljs.core.nth.call(null,vec__8419,(1),null);
var num_days = reagent_forms.datepicker.days_in_month.call(null,year,month);
var last_month_days = (((month > (0)))?reagent_forms.datepicker.days_in_month.call(null,year,(month - (1))):null);
var first_day = reagent_forms.datepicker.first_day_of_week.call(null,year,month);
return cljs.core.map.call(null,((function (num_days,last_month_days,first_day,vec__8419,year,month){
return (function (week){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),week);
});})(num_days,last_month_days,first_day,vec__8419,year,month))
,cljs.core.partition.call(null,(7),(function (){var iter__4477__auto__ = ((function (num_days,last_month_days,first_day,vec__8419,year,month){
return (function iter__8420(s__8421){
return (new cljs.core.LazySeq(null,((function (num_days,last_month_days,first_day,vec__8419,year,month){
return (function (){
var s__8421__$1 = s__8421;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8421__$1);
if(temp__4126__auto__){
var s__8421__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8421__$2)){
var c__4475__auto__ = cljs.core.chunk_first.call(null,s__8421__$2);
var size__4476__auto__ = cljs.core.count.call(null,c__4475__auto__);
var b__8423 = cljs.core.chunk_buffer.call(null,size__4476__auto__);
if((function (){var i__8422 = (0);
while(true){
if((i__8422 < size__4476__auto__)){
var i = cljs.core._nth.call(null,c__4475__auto__,i__8422);
cljs.core.chunk_append.call(null,b__8423,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4126__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4126__auto____$1)){
var doc_date = temp__4126__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8422,day,date,i,c__4475__auto__,size__4476__auto__,b__8423,s__8421__$2,temp__4126__auto__,num_days,last_month_days,first_day,vec__8419,year,month){
return (function (){
if(cljs.core._EQ_.call(null,get.call(null),date)){
return save_BANG_.call(null,null);
} else {
return save_BANG_.call(null,date);
}
});})(i__8422,day,date,i,c__4475__auto__,size__4476__auto__,b__8423,s__8421__$2,temp__4126__auto__,num_days,last_month_days,first_day,vec__8419,year,month))
], null),day], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)));

var G__8424 = (i__8422 + (1));
i__8422 = G__8424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),iter__8420.call(null,cljs.core.chunk_rest.call(null,s__8421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8423),null);
}
} else {
var i = cljs.core.first.call(null,s__8421__$2);
return cljs.core.cons.call(null,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4126__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4126__auto____$1)){
var doc_date = temp__4126__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (day,date,i,s__8421__$2,temp__4126__auto__,num_days,last_month_days,first_day,vec__8419,year,month){
return (function (){
if(cljs.core._EQ_.call(null,get.call(null),date)){
return save_BANG_.call(null,null);
} else {
return save_BANG_.call(null,date);
}
});})(day,date,i,s__8421__$2,temp__4126__auto__,num_days,last_month_days,first_day,vec__8419,year,month))
], null),day], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)),iter__8420.call(null,cljs.core.rest.call(null,s__8421__$2)));
}
} else {
return null;
}
break;
}
});})(num_days,last_month_days,first_day,vec__8419,year,month))
,null,null));
});})(num_days,last_month_days,first_day,vec__8419,year,month))
;
return iter__4477__auto__.call(null,cljs.core.range.call(null,(42)));
})()));
});
reagent_forms.datepicker.last_date = (function last_date(p__8425){
var vec__8427 = p__8425;
var year = cljs.core.nth.call(null,vec__8427,(0),null);
var month = cljs.core.nth.call(null,vec__8427,(1),null);
if((month > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year - (1)),(11)], null);
}
});
reagent_forms.datepicker.next_date = (function next_date(p__8428){
var vec__8430 = p__8428;
var year = cljs.core.nth.call(null,vec__8430,(0),null);
var month = cljs.core.nth.call(null,vec__8430,(1),null);
if(cljs.core._EQ_.call(null,month,(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year + (1)),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month + (1))], null);
}
});
reagent_forms.datepicker.datepicker = (function datepicker(year,month,expanded_QMARK_,get,save_BANG_){
var date = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month], null));
return ((function (date){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("datepicker"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?null:" dropdown-menu"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date){
return (function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.last_date);
});})(date))
], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(5)], null),[cljs.core.str(cljs.core.get_in.call(null,reagent_forms.datepicker.dates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637),cljs.core.second.call(null,cljs.core.deref.call(null,date))], null))),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,cljs.core.deref.call(null,date)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (date){
return (function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.next_date);
});})(date))
], null),"\u203A"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Su"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Mo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Tu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"We"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Th"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Fr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Sa"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),reagent_forms.datepicker.gen_days.call(null,cljs.core.deref.call(null,date),get,save_BANG_))], null)], null);
});
;})(date))
});

//# sourceMappingURL=datepicker.js.map