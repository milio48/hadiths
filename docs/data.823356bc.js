document.addEventListener("DOMContentLoaded",(async function(){var t;document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",e);let r,n=new URLSearchParams(document.location.search),o=n.get("edition"),d=n.get("bareedition")||o.replace(/\d+/g,"").split("-")[1].trim(),l=n.get("type")||"section",s=n.get("num"),u=n.get("grade");if(!d||!s&&"full"!=l)return;"full"==l?r=`editions/${o}`:"section"==l?r=`editions/${o}/sections/${s}`:"single"==l&&(r=`editions/${o}/${s}`);let h=await i("isocodes/iso-codes",a),[f,m]=await i(["editions",r]),[b,p,g]=f[d].collection.filter((e=>e.name==o)).map((e=>[e.name,e.language,e.direction]))[0],y=m.hadiths;if(u&&(u=u.trim().toLowerCase(),y=y.filter((e=>e.grades.some((e=>e.grade.toLowerCase().includes(u)))))),"section"==l&&(w=null==m||null===(t=m.metadata)||void 0===t?void 0:t.section)===Object(w)){let[e,t]=Object.entries(m.metadata.section).flat();document.querySelector("#mycontainer").insertAdjacentHTML("beforeend",`<h2 class="text-center">Section ${e}: ${t}</h2>`)}var w;y=y.filter((e=>null==e?void 0:e.text));for(let e of y)document.querySelector("#mycontainer").appendChild(c(e,o,g,p,h))}));const e='\n<div class="mb-3 d-none">\n<form class="d-flex" onsubmit="beginSearch(); return false">\n  <input id="searchquery" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />\n  <button id="searchbtn" class="btn btn-outline-info" type="button" onclick="beginSearch(); return false">\n    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor"\n      xmlns="http://www.w3.org/2000/svg">\n      <path fill-rule="evenodd"\n        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />\n      <path fill-rule="evenodd"\n        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />\n    </svg>\n  </button>\n</form>\n</div>\n';function t(e){return e.toString().toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())).trim()}let r=new DOMParser;let n=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],a=["https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/","https://raw.githubusercontent.com/fawazahmed0/quran-api/1/"],o=[".min.json",".json"];async function i(e,t){let r=!1;Array.isArray(e)||(e=[e],r=!0);let a=await Promise.all(e.map((e=>async function(e,t){let r;for(let n of e)try{if(r=await fetch(n,t),r.ok)return r}catch(e){}return r}(function(e,t){return t=t||n,o.map((r=>t.map((t=>t+e+r)))).flat()}(e,t)).then((e=>e.json()))))).catch(console.error);return r?a[0]:a}function c(e,n,a,o,i){let c=o.toLowerCase(),d=(l='    \n<div class="card text-dark bg-light m-3">\n<div class="card-body">\n<div class="card-text lead m-1"></div>\n</div>\n\n<span id="footercontainer">\n</span>\n\n</div>\n',r.parseFromString(l,"text/html")).querySelector(".card");var l;d.querySelector(".card-text").innerText=e.text;let s=function(e,t){t||(t={});let r=document.createElement(e);for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return r}("div",{class:"card-footer"});e.grades.length>0&&(d.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(d.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",'<table class="table table-sm">\n    <thead>\n      <tr>\n        <th>Grade</th>\n      \n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n    </table>'));for(let r of e.grades)d.querySelector("tbody").insertAdjacentHTML("beforeend",`<tr><td>${t(r.grade)}</td><td>${r.name}</td></tr>`);let u=`hadith:${n}:${e.hadithnumber}`;return e.hadithnumber&&(d.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(d.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${u} class="link-dark text-decoration-none" >Hadith Number: ${e.hadithnumber}</a><br>`)),e.arabicnumber&&(d.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(d.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${u} class="link-dark text-decoration-none" >Arabic Number: ${e.arabicnumber}</a><br>`)),e.reference&&(d.querySelector("#footercontainer").appendChild(s.cloneNode()),Array.from(d.querySelectorAll(".card-footer")).at(-1).insertAdjacentHTML("beforeend",`<a href=#${u} class="link-dark text-decoration-none" >Reference: ${Object.entries(e.reference).flat().map((e=>t(e))).join(" ")}</a><br>`)),d.setAttribute("id",u),d.querySelector(".card-text").setAttribute("dir",a),d.querySelector(".card-text").setAttribute("lang",i[c].iso1?i[c].iso1:i[c].iso2),d}window.beginSearch=function(){let e=new URLSearchParams,t=document.getElementById("searchquery").value;e.set("q",`site:fawazahmed0.github.io/hadiths ${t}`),window.open("https://www.google.com/search?"+e.toString(),"_blank")};
//# sourceMappingURL=data.823356bc.js.map