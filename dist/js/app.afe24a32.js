(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],f=0,p=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3fe9":function(t,e,n){"use strict";n("e751")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Jumbo"),n("Main"),n("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex justify-content-between"},[n("div",{staticClass:"col-3"},[n("div",{staticClass:"hours py-3 "},[t._v(" Open hours: Mon - Sat - 9:00 - 18:00 ")])]),n("div",{staticClass:"col-7 d-flex align-items-center justify-content-end"},[n("div",{staticClass:"col-3 py-3 d-inline-flex justify-content-end",attrs:{id:"cellphone"}},[n("i",{staticClass:"fas fa-phone-alt"}),n("span",{staticClass:"ps-2"},[t._v("+1(305) 1234-5678")])]),n("div",{staticClass:"col-3 hours py-3 d-inline-flex justify-content-end",attrs:{id:"mail"}},[n("i",{staticClass:"fas fa-envelope"}),n("span",{staticClass:"ps-2"},[t._v("hello@example.it")])]),n("div",{staticClass:"col-2 hours py-3 d-inline-flex justify-content-between justify-content-end",attrs:{id:"social"}},[n("i",{staticClass:"fab fa-facebook-f ps-5"}),n("i",{staticClass:"fab fa-twitter"}),n("i",{staticClass:"fab fa-linkedin-in"})])])])])])}],c={name:"Header",props:{},data:function(){return{icons:[{classIcon:"fa-facebook-f"},{classIcon:"fa-twitter"},{classIcon:"fa-linkedin-in"}]}}},l=c,u=(n("e8b9"),n("2877")),f=Object(u["a"])(l,r,o,!1,null,"0f4ce73a",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jumbo"},[n("div",{staticClass:"container h-100 text-white"},[n("Navjumbo"),t._m(0)],1)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row h-100 d-flex justify-content-end align-items-center py-5"},[n("div",{staticClass:"col-5 d-flex flex-column"},[n("div",{staticClass:"col title-jumbo"},[n("span",{staticClass:"text-capitalize"},[t._v("logistics")]),n("br"),t._v(" that goes "),n("br"),t._v("further. ")]),n("div",{staticClass:"col"},[t._v(" For 20 year woring with the most"),n("br"),t._v(" innovatein the field of transport. ")]),n("div",{staticClass:"col-7 d-flex justify-content-between my-5"},[n("button",{staticClass:"btn btn-md button-full rounded text-white text-uppercase",attrs:{type:"button "}},[t._v(" get in touch ")]),n("button",{staticClass:"btn btn-md button-empty rounded text-white text-uppercase",attrs:{type:"button "}},[t._v(" read more ")])])])])}],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"my-3 "},[n("div",{staticClass:"row "},[t._m(0),n("div",{staticClass:"links text-uppercase col-9 d-flex justify-content-end"},t._l(t.links,(function(e){return n("a",{key:e,attrs:{href:""}},[t._v(t._s(e))])})),0)])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-3"},[n("a",{staticClass:"text-uppercase logo-nav text-decoration-none text-white",attrs:{href:"#"}},[n("span",{attrs:{id:"colorized-title"}},[t._v("nex")]),t._v("gen")])])}],m={name:"Navjumbo",data:function(){return{links:["home","services","skills","partners","blog","get in touch"]}}},_=m,y=(n("3fe9"),Object(u["a"])(_,b,h,!1,null,null,null)),x=y.exports,C={name:"Jumbo",components:{Navjumbo:x},props:{},data:function(){return{}}},j=C,w=(n("a445"),Object(u["a"])(j,d,v,!1,null,"23fdca8a",null)),g=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},k=[],$={name:"Main",props:{}},E=$,M=Object(u["a"])(E,O,k,!1,null,"1c2a2019",null),P=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},J=[],F={name:"Footer",props:{}},H=F,I=Object(u["a"])(H,S,J,!1,null,"340bc2d5",null),N=I.exports,T={name:"App",components:{Header:p,Jumbo:g,Main:P,Footer:N}},z=T,A=(n("5c0b"),Object(u["a"])(z,a,i,!1,null,null,null)),q=A.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a445:function(t,e,n){"use strict";n("ac9b")},ac9b:function(t,e,n){},e751:function(t,e,n){},e8b9:function(t,e,n){"use strict";n("e9ed")},e9ed:function(t,e,n){}});
//# sourceMappingURL=app.afe24a32.js.map