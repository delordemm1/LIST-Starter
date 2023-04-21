import{S as W,i as H,s as I,h as q,e as m,t as B,a as k,b as g,c as b,d as _,f as F,u as J,j as R,k as V,l as w,m as y,g as x,o as M,p as U,q as z,r as A,v as D,w as E,n as G}from"./main-2b9fa8bd.js";const C=[{title:"Laravel",href:"https://laravel.com/",icon:"",desc:"Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things."},{title:"InertiaJS",href:"https://inertiajs.com/",icon:"",desc:"Create modern single-page React, Vue, and Svelte apps using classic server-side routing. Works with any backend — tuned for Laravel."},{title:"SvelteJS",href:"https://svelte.dev/",icon:"",desc:"Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app."},{title:"TypeScript",href:"https://www.typescriptlang.org/",icon:"",desc:"This package comes with setuped typescript for better code experience and less debuging."},{title:"Flowbite",href:"https://flowbite.com/",icon:"",desc:"Build websites even faster with components on top of Tailwind CSS<br />Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma."}];function K(i){let e,a,t,s,l,f;const u=i[3].default,h=q(u,i,i[2],null);return{c(){e=m("a"),a=m("h5"),t=B(i[1]),s=k(),l=m("p"),h&&h.c(),g(a,"class","mb-2 text-2xl font-bold tracking-tight text-white"),g(l,"class","font-normal text-gray-400"),g(e,"href",i[0]),g(e,"class","block rounded-lg bg-gray-800 p-6 shadow-2xl hover:bg-gray-700")},m(o,p){b(o,e,p),_(e,a),_(a,t),_(e,s),_(e,l),h&&h.m(l,null),f=!0},p(o,[p]){(!f||p&2)&&F(t,o[1]),h&&h.p&&(!f||p&4)&&J(h,u,o,o[2],f?V(u,o[2],p,null):R(o[2]),null),(!f||p&1)&&g(e,"href",o[0])},i(o){f||(w(h,o),f=!0)},o(o){y(h,o),f=!1},d(o){o&&x(e),h&&h.d(o)}}}function N(i,e,a){let{$$slots:t={},$$scope:s}=e,{href:l}=e,{title:f}=e;return i.$$set=u=>{"href"in u&&a(0,l=u.href),"title"in u&&a(1,f=u.title),"$$scope"in u&&a(2,s=u.$$scope)},[l,f,s,t]}class O extends W{constructor(e){super(),H(this,e,N,K,I,{href:0,title:1})}}function T(i,e,a){const t=i.slice();return t[2]=e[a],t}function Q(i){let e,a=i[2].desc+"",t;return{c(){e=m("p"),t=k(),g(e,"class","mb-3 font-normal text-gray-400")},m(s,l){b(s,e,l),e.innerHTML=a,b(s,t,l)},p:G,d(s){s&&x(e),s&&x(t)}}}function P(i){let e,a;return e=new O({props:{href:i[2].href,title:i[2].title,$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){z(e.$$.fragment)},m(t,s){A(e,t,s),a=!0},p(t,s){const l={};s&32&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function X(i){let e,a,t,s,l,f,u,h,o,p;document.title=e=S+" - Laravel "+i[0]+" | PHP "+i[1];let v=C,r=[];for(let n=0;n<v.length;n+=1)r[n]=P(T(i,v,n));const j=n=>y(r[n],1,1,()=>{r[n]=null});return{c(){a=k(),t=m("section"),s=m("div"),l=m("div"),f=m("div"),u=m("h1"),u.textContent=`${S}`,h=k(),o=m("div");for(let n=0;n<r.length;n+=1)r[n].c();g(u,"class","text-primary-500 mb-8 text-7xl font-extrabold tracking-tight lg:text-9xl"),g(f,"class","mx-auto max-w-screen-sm text-center"),g(o,"class","grid grid-cols-1 content-center gap-4 sm:grid-cols-5"),g(l,"class","text-center"),g(s,"class","mx-auto max-w-screen-2xl px-4 py-8 lg:px-6 lg:py-16"),g(t,"class","bg-gray-900")},m(n,d){b(n,a,d),b(n,t,d),_(t,s),_(s,l),_(l,f),_(f,u),_(l,h),_(l,o);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(o,null);p=!0},p(n,[d]){if((!p||d&3)&&e!==(e=S+" - Laravel "+n[0]+" | PHP "+n[1])&&(document.title=e),d&0){v=C;let c;for(c=0;c<v.length;c+=1){const L=T(n,v,c);r[c]?(r[c].p(L,d),w(r[c],1)):(r[c]=P(L),r[c].c(),w(r[c],1),r[c].m(o,null))}for(E(),c=v.length;c<r.length;c+=1)j(c);M()}},i(n){if(!p){for(let d=0;d<v.length;d+=1)w(r[d]);p=!0}},o(n){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)y(r[d]);p=!1},d(n){n&&x(a),n&&x(t),U(r,n)}}}let S="LIST";function Y(i,e,a){let{laravel:t=""}=e,{php:s=""}=e;return i.$$set=l=>{"laravel"in l&&a(0,t=l.laravel),"php"in l&&a(1,s=l.php)},[t,s]}class $ extends W{constructor(e){super(),H(this,e,Y,X,I,{laravel:0,php:1})}}export{$ as default};
