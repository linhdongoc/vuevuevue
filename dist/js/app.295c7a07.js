(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],v=0,d=[];v<s.length;v++)i=s[v],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03d8":function(e,t,n){},"0801":function(e,t,n){"use strict";var r=n("a157"),a=n.n(r);a.a},"0e22":function(e,t,n){"use strict";var r=n("2478"),a=n.n(r);a.a},1497:function(e,t,n){"use strict";var r=n("47c0"),a=n.n(r);a.a},"15ad":function(e,t,n){},2478:function(e,t,n){},"47c0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"state",function(){return X});var a={};n.r(a),n.d(a,"namespaced",function(){return ne}),n.d(a,"state",function(){return re}),n.d(a,"mutations",function(){return ae}),n.d(a,"actions",function(){return oe}),n.d(a,"getters",function(){return ie});n("a481"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("router-view",{key:e.$route.fullPath})],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"brand",attrs:{to:"/"}},[e._v("Real Word Events")]),n("nav",[n("router-link",{attrs:{to:{name:"event-list"}}},[e._v("List")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:{name:"event-create"}}},[e._v("Create")])],1)],1)},u=[],l={name:"NavBar"},v=l,d=(n("0e22"),n("2877")),f=Object(d["a"])(v,c,u,!1,null,"6bb5b9c2",null),p=f.exports,h={components:{NavBar:p}},m=h,_=(n("5c0b"),Object(d["a"])(m,i,s,!1,null,null,null)),g=_.exports,b=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Create an Event")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.createEvent(t)}}},[n("label",[e._v("Select a category")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.event.category,expression:"event.category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.event,"category",t.target.multiple?n:n[0])}}},e._l(e.categories,function(t){return n("option",{key:t},[e._v(e._s(t))])}),0),n("h3",[e._v("Name & describe your event")]),n("div",{staticClass:"field"},[n("label",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.title,expression:"event.title"}],attrs:{type:"text",placeholder:"Add an event title"},domProps:{value:e.event.title},on:{input:function(t){t.target.composing||e.$set(e.event,"title",t.target.value)}}})]),n("div",{staticClass:"field"},[n("label",[e._v("Description")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.description,expression:"event.description"}],attrs:{type:"text",placeholder:"Add a description"},domProps:{value:e.event.description},on:{input:function(t){t.target.composing||e.$set(e.event,"description",t.target.value)}}})]),n("h3",[e._v("Where is your event?")]),n("div",{staticClass:"field"},[n("label",[e._v("Location")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.location,expression:"event.location"}],attrs:{type:"text",placeholder:"Add a location"},domProps:{value:e.event.location},on:{input:function(t){t.target.composing||e.$set(e.event,"location",t.target.value)}}})]),n("h3",[e._v("When is your event?")]),n("div",{staticClass:"field"},[n("label",[e._v("Date")]),n("datepicker",{attrs:{placeholder:"Select a date"},model:{value:e.event.date,callback:function(t){e.$set(e.event,"date",t)},expression:"event.date"}})],1),n("div",{staticClass:"field"},[n("label",[e._v("Select a time")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.event.time,expression:"event.time"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.event,"time",t.target.multiple?n:n[0])}}},e._l(e.times,function(t){return n("option",{key:t},[e._v(e._s(t))])}),0)]),n("input",{staticClass:"button -fill-gradient",attrs:{type:"submit",value:"Submit"}})])])},y=[],O=n("fa33"),T={components:{Datepicker:O["a"]},data:function(){for(var e=[],t=1;t<=24;t++)e.push(t+":00");return{event:this.createFreshEventObject(),categories:this.$store.state.categories,times:e}},methods:{createEvent:function(){var e=this;this.$store.dispatch("event/createEvent",this.event).then(function(){e.$router.push({name:"event-show",params:{id:e.event.id}}),e.event=e.createFreshEventObject()}).catch(function(){console.log("There was a problem creating your event")})},createFreshEventObject:function(){var e=this.$store.state.user.user,t=Math.floor(1e7*Math.random());return{id:t,user:e,category:"",organizer:e,title:"",description:"",location:"",date:"",time:"",attendees:[]}}}},x=T,w=(n("92b5"),Object(d["a"])(x,E,y,!1,null,"7c49d29b",null)),C=w.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Events for "+e._s(e.user.user.name))]),e._l(e.event.events,function(e){return n("EventCard",{key:e.id,attrs:{event:e}})}),1!==e.currentPage?[n("router-link",{attrs:{to:{name:"event-list",query:{currentPage:e.currentPage-1}},rel:"prev"}},[e._v("\n      Prev Page\n    ")]),e.hasNextPage?[e._v("  |  ")]:e._e()]:e._e(),e.hasNextPage?n("router-link",{attrs:{to:{name:"event-list",query:{currentPage:e.currentPage+1}},rel:"next"}},[e._v("\n    Next Page\n  ")]):e._e()],2)},j=[],N=n("e814"),S=n.n(N),$=n("cebc"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"event-link",attrs:{to:{name:"event-show",params:{id:e.event.id}}}},[n("div",{staticClass:"event-card -shadow"},[n("span",{staticClass:"eyebrow"},[e._v("@"+e._s(e.event.time)+" on "+e._s(e.event.date))]),n("h4",{staticClass:"title"},[e._v(e._s(e.event.title))]),n("BaseIcon",{attrs:{name:"users"}},[e._v(e._s(e.event.attendees.length)+" attending")])],1)])},D=[],A=n("7461"),B={name:"EventCard",components:{BaseIcon:A["default"]},props:{event:Object}},V=B,L=(n("0801"),Object(d["a"])(V,k,D,!1,null,"ecacad34",null)),I=L.exports,M=n("2f62"),z={components:{EventCard:I},created:function(){this.$store.dispatch("event/fetchEvents",{perPage:3,currentPage:this.currentPage})},computed:Object($["a"])({currentPage:function(){return S()(this.$route.query.currentPage)||1},hasNextPage:function(){return this.event.eventsTotal>this.currentPage*this.perPage}},Object(M["b"])(["event","user"]))},F=z,q=Object(d["a"])(F,P,j,!1,null,"b6e26b56",null),J=q.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"event-header"},[n("span",{staticClass:"eyebrow"},[e._v("@"+e._s(e.event.time)+" on "+e._s(e.event.date))]),n("h1",{staticClass:"title"},[e._v(e._s(e.event.title))]),n("h5",[e._v("Organized by "+e._s(e.event.organizer?e.event.organizer.name:""))]),n("h5",[e._v("Category: "+e._s(e.event.category))])]),n("BaseIcon",{attrs:{name:"map"}},[n("h2",[e._v("Location")])]),n("address",{staticClass:"location"},[e._v(e._s(e.event.location))]),n("h2",[e._v("Event details")]),n("p",[e._v(e._s(e.event.description))]),n("h2",[e._v("Attendees\n    "),n("span",{staticClass:"badge -fill-gradient"},[e._v(e._s(e.event.attendees?e.event.attendees.length:0))])]),n("ul",{staticClass:"list-group"},e._l(e.event.attendees,function(t,r){return n("li",{key:r,staticClass:"list-item"},[n("b",[e._v(e._s(t.name))])])}),0)],1)},W=[],R={props:["id"],created:function(){this.$store.dispatch("event/fetchEvent",this.id)},computed:Object(M["b"])({event:function(e){return e.event.event}})},G=R,H=(n("9a3c"),Object(d["a"])(G,U,W,!1,null,"ed451786",null)),K=H.exports;o["a"].use(b["a"]);var Q=new b["a"]({mode:"history",routes:[{path:"/",name:"event-list",component:J},{path:"/events/:id",name:"event-show",component:K,props:!0},{path:"/event/create",name:"event-create",component:C}]}),X={user:{id:"abc123",name:"Adam Jahr"}},Y=(n("7514"),n("bc3a")),Z=n.n(Y),ee=Z.a.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),te={getEvents:function(e,t){return ee.get("/events?_limit="+e+"&_page="+t)},getEvent:function(e){return ee.get("/events/"+e)},postEvent:function(e){return ee.post("/events",e)}},ne=!0,re={events:[],eventsTotal:0,event:{}},ae={ADD_EVENT:function(e,t){e.events.push(t)},SET_EVENTS:function(e,t){e.events=t},SET_EVENTS_TOTAL:function(e,t){e.eventsTotal=t},SET_EVENT:function(e,t){e.event=t}},oe={createEvent:function(e,t){var n=e.commit;return te.postEvent(t).then(function(){n("ADD_EVENT",t)})},fetchEvents:function(e,t){var n=e.commit,r=t.perPage,a=t.currentPage;te.getEvents(r,a).then(function(e){n("SET_EVENTS",e.data),n("SET_EVENTS_TOTAL",S()(e.headers["x-total-count"]))}).catch(function(e){console.log("There was an error:",e.response)})},fetchEvent:function(e,t){var n=e.commit,r=e.getters,a=r.getEventById(t);a?n("SET_EVENT",a):te.getEvent(t).then(function(e){n("SET_EVENT",e.data)}).catch(function(e){console.log("There was an error:",e.response)})}},ie={getEventById:function(e){return function(t){return e.events.find(function(e){return e.id===t})}}};o["a"].use(M["a"]);var se=new M["a"].Store({modules:{user:r,event:a},state:{categories:["sustainability","nature","animal welfare","housing","education","food","community"],todos:[{id:1,text:"TODO 1",done:!0},{id:2,text:"TODO 2",done:!1},{id:3,text:"TODO 3",done:!0},{id:4,text:"TODO 4",done:!0},{id:5,text:"TODO 5",done:!1},{id:6,text:"TODO 6",done:!1},{id:7,text:"TODO 7",done:!0}]},getters:{categoryLength:function(e){return e.categories.length},allTodos:function(e){return e.todos},doneTodos:function(e){return e.todos.filter(function(e){return e.done})},activeTodosCount:function(e){return e.todos.filter(function(e){return!e.done})}}}),ce=n("8103"),ue=n.n(ce),le=n("bba4"),ve=n.n(le),de=n("ef13");de.keys().forEach(function(e){var t=de(e),n=ue()(ve()(e.replace(/^\.\/(.*)\.\w+$/,"$1")));o["a"].component(n,t.default||t)}),o["a"].config.productionTip=!1,new o["a"]({router:Q,store:se,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},7461:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-wrapper"},[n("svg",{staticClass:"icon",attrs:{width:e.width,height:e.height}},[n("use",e._b({},"use",{"xlink:href":"/feather-sprite.svg#"+e.name},!1))]),e._t("default")],2)},a=[],o=(n("c5f6"),{name:"BaseIcon",props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}}}),i=o,s=(n("1497"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"e67260b2",null);t["default"]=c.exports},"92b5":function(e,t,n){"use strict";var r=n("03d8"),a=n.n(r);a.a},"9a3c":function(e,t,n){"use strict";var r=n("15ad"),a=n.n(r);a.a},a157:function(e,t,n){},ef13:function(e,t,n){var r={"./BaseIcon.vue":"7461"};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="ef13"}});
//# sourceMappingURL=app.295c7a07.js.map