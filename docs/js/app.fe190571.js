(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuetify-kbar/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push(["fb89","chunk-vendors"]),n()})({"0bd0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"[data-v-e991e606] .v-kbar-provider{position:absolute;top:20%}",""]),t.exports=e},"42df":function(t,e,n){"use strict";n("92f4")},"92f4":function(t,e,n){var a=n("0bd0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("499e").default;o("f5ebcc20",a,!0,{sourceMap:!1,shadowMode:!1})},fb89:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-container",[n("WelcomeBanner"),n("VKbarExample"),n("UsageGuide")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticStyle:{height:"100vh"},attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-center mb-6",attrs:{cols:"12"}},[n("span",{staticClass:"text-h3"},[t._v(" Vuetify "),n("kbd",[t._v("kBar")])])]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("span",{staticClass:"text-subtitle-1"},[n("span",{staticClass:"px-2"},[t._v("Press")]),n("kbd",[t._v("Meta")]),t._v(" + "),n("kbd",[t._v("K")]),n("span",{staticClass:"px-2"},[t._v("or")]),n("kbd",[t._v("Ctrl")]),t._v(" + "),n("kbd",[t._v("K")])])]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"mx-1",attrs:{"x-small":"",text:"",outlined:""},on:{click:function(){return t.toDocs()}}},[t._v("Docs")]),n("v-btn",{staticClass:"mx-1",attrs:{"x-small":"",text:"",outlined:""},on:{click:function(){return t.toGitHub()}}},[t._v("GitHub")])],1)],1)},i=[],c={name:"WelcomeBanner",methods:{toDocs:function(){open("https://github.com/socheatsok78/vuetify-kbar#guide","_blank")},toGitHub:function(){open("https://github.com/socheatsok78/vuetify-kbar","_blank")}}},l=c,u=n("2877"),d=n("6544"),f=n.n(d),v=n("8336"),p=n("62ad"),h=n("0fd9"),m=Object(u["a"])(l,s,i,!1,null,null,null),b=m.exports;f()(m,{VBtn:v["a"],VCol:p["a"],VRow:h["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VKbarProvider",{attrs:{actions:t.actions}})},x=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"content-class":"v-kbar-provider",width:"600",eager:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-list-item",{staticClass:"px-0"},[n("v-text-field",{attrs:{label:"Type command or Search...",placeholder:"Type command or Search...",solo:"",flat:"",clearable:"","single-line":"","hide-details":"",autofocus:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._l(t.actionItems,(function(e,a){return[n("div",{key:a},[n("v-list-item",{on:{click:function(){return t.handlePerformAction(e)}}},[e.icon?n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))]),e.description?n("v-list-item-subtitle",[t._v(t._s(e.description))]):t._e()],1),n("v-list-item-icon",[t._l(e.shortcut,(function(e,a){return[n("kbd",{key:a,staticClass:"mx-1"},[t._v(t._s(e))])]}))],2)],1)],1)]}))],2)],1)},y=[],g=(n("ac1f"),n("841c"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("b0c0"),n("a4d3"),n("e01a"),n("9500")),w=a["a"].extend({name:"VKbarProvider",props:{actions:{}},data:function(){return{show:!1,search:"",actionItems:[]}},mounted:function(){var t=this,e=this.$el;Object(g["a"])(e,"Control+k,Meta+k"),e.addEventListener("click",(function(){return t.onToggle()}))},watch:{show:{immediate:!0,handler:function(t){t||(this.search="")}},search:{immediate:!0,handler:"onSearch"}},methods:{closeKbar:function(){this.show=!1},onToggle:function(){this.show=!this.show},onSearch:function(t){this.actionItems=t?this.actions.filter((function(e){var n,a;return e.name.toLowerCase().includes(t)||null!==(n=e.description)&&void 0!==n&&n.toLowerCase().includes(t)||null!==(a=e.keywords)&&void 0!==a&&a.includes(t)?e:void 0})):this.actions},handlePerformAction:function(t){this.closeKbar(),t.perform()}}}),C=w,V=(n("42df"),n("b0af")),O=n("169a"),j=n("132d"),S=n("da13"),P=n("5d23"),I=n("34c3"),K=n("8654"),M=Object(u["a"])(C,k,y,!1,null,"e991e606",null),E=M.exports;f()(M,{VCard:V["a"],VDialog:O["a"],VIcon:j["a"],VListItem:S["a"],VListItemContent:P["a"],VListItemIcon:I["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VTextField:K["a"]});var T=a["a"].extend({name:"VKbarExample",components:{VKbarProvider:E},computed:{actions:function(){var t=this;return[{id:"blog",name:"Blog",description:"",shortcut:["b"],keywords:"writing words",perform:function(){alert("Navigate to Blog")}},{id:"contact",name:"Contact",shortcut:["c"],keywords:"email",perform:function(){alert("Navigate to Contact")}},{id:"theme-light",name:"Set light theme",shortcut:["t","h"],keywords:"light theme",perform:function(){t.$vuetify.theme.dark=!1}},{id:"theme-dark",name:"Set dark theme",shortcut:["t","h"],keywords:"dark theme",perform:function(){t.$vuetify.theme.dark=!0}}]}}}),$=T,L=Object(u["a"])($,_,x,!1,null,null,null),B=L.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"align-content":"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{height:"200px"},attrs:{cols:"12"}},[n("div",{staticClass:"text-subtitle-1"},[n("h4",{staticClass:"text-h4 mb-3",attrs:{id:"install"}},[t._v("Installation")]),n("code",[t._v("npm install @socheatsok78/vuetify-kbar@next")]),n("div",{staticClass:"text-subtitle-2"},[t._v("Or")]),n("code",[t._v("yarn add @socheatsok78/vuetify-kbar@next")])])]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("span",[t._v("Made with "),n("span",{attrs:{color:"red"}},[t._v("♥️")]),t._v(" by "),n("strong",[t._v("Socheat Sok")])])])],1)},A=[],D={name:"UsageGuide"},H=D,U=Object(u["a"])(H,G,A,!1,null,null,null),W=U.exports;f()(U,{VCol:p["a"],VRow:h["a"]});var J=a["a"].extend({name:"App",components:{WelcomeBanner:b,VKbarExample:B,UsageGuide:W}}),N=J,R=n("7496"),F=n("a523"),q=Object(u["a"])(N,o,r,!1,null,null,null),z=q.exports;f()(q,{VApp:R["a"],VContainer:F["a"]});var Q=n("f309");a["a"].use(Q["a"]);var X=new Q["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:X,render:function(t){return t(z)}}).$mount("#app")}});
//# sourceMappingURL=app.fe190571.js.map