!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequire8e87;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequire8e87=a);var i=a("kAkBg"),o=a("jO2Au");function u(){return(u=i.asyncToGenerator(e(o).mark((function r(){var t,n,a,u,s,l,f,d,h,v,m,w,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("editions");case 2:for(t=e.sent,n=c("ul",{class:"list-group"}),a=!0,u=!1,s=void 0,e.prev=5,l=Object.entries(t)[Symbol.iterator]();!(a=(f=l.next()).done);a=!0)d=i.slicedToArray(f.value,2),h=d[0],v=d[1],m=c("li",{class:"list-group-item"}),(w=new URLSearchParams).set("bareedition",h),(b=c("a",{href:"single.html?".concat(w.toString())})).innerText=v.name,m.appendChild(b),n.appendChild(m);e.next=13;break;case 9:e.prev=9,e.t0=e.catch(5),u=!0,s=e.t0;case 13:e.prev=13,e.prev=14,a||null==l.return||l.return();case 16:if(e.prev=16,!u){e.next=19;break}throw s;case 19:return e.finish(16);case 20:return e.finish(13);case 21:document.querySelector("#mycontainer").appendChild(n);case 22:case"end":return e.stop()}}),r,null,[[5,9,13,21],[14,,16,20]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return u.apply(this,arguments)}));new DOMParser;function c(e,r){r||(r={});var t=document.createElement(e),n=!0,a=!1,o=void 0;try{for(var u,c=Object.entries(r)[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=i.slicedToArray(u.value,2),l=s[0],p=s[1];t.setAttribute(l,p)}}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}var s=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],l=[".min.json",".json"];function p(e,r){return f.apply(this,arguments)}function f(){return(f=i.asyncToGenerator(e(o).mark((function r(t,n){var a,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,Array.isArray(t)||(t=[t],a=!0),e.next=4,Promise.all(t.map((function(e){return d(v(e,n)).then((function(e){return e.json()}))}))).catch(console.error);case 4:if(i=e.sent,!a){e.next=7;break}return e.abrupt("return",i[0]);case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function d(e,r){return h.apply(this,arguments)}function h(){return(h=i.asyncToGenerator(e(o).mark((function r(t,n){var a,i,u,c,s,l,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=!0,u=!1,c=void 0,e.prev=2,s=t[Symbol.iterator]();case 4:if(i=(l=s.next()).done){e.next=19;break}return p=l.value,e.prev=6,e.next=9,fetch(p,n);case 9:if(!(a=e.sent).ok){e.next=12;break}return e.abrupt("return",a);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:i=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),u=!0,c=e.t1;case 25:e.prev=25,e.prev=26,i||null==s.return||s.return();case 28:if(e.prev=28,!u){e.next=31;break}throw c;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",a);case 34:case"end":return e.stop()}}),r,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function v(e,r){return r=r||s,l.map((function(t){return r.map((function(r){return r+e+t}))})).flat()}window.beginSearch=function(){var e=new URLSearchParams,r=document.getElementById("searchquery").value;e.set("q","site:fawazahmed0.github.io/hadiths ".concat(r)),window.open("https://www.google.com/search?"+e.toString(),"_blank")}}();
//# sourceMappingURL=seo.c376532d.js.map