(this.webpackJsonphuebris=this.webpackJsonphuebris||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),i=n(8),s=n.n(i),l=(n(15),n(2)),a=n(4),u=n(9),f=[{colors:{from:[0,100,75],to:[19,100,25]},fixedPoints:"east-west",size:{rows:3,columns:3}},{colors:{from:[0,100,75],to:[37,100,25]},fixedPoints:"corners",size:{rows:4,columns:4}},{colors:{from:[75,100,25],to:[37,100,75]},fixedPoints:"corners",size:{rows:4,columns:4}},{colors:{from:[37,100,75],to:[75,100,25]},fixedPoints:"north-south",size:{rows:5,columns:5}},{colors:{from:[225,100,25],to:[300,100,75]},fixedPoints:"corners",size:{rows:5,columns:5}},{colors:{from:[220,100,75],to:[90,100,15]},fixedPoints:"east-west",size:{rows:6,columns:8}},{colors:{from:[270,100,75],to:[359,100,25]},fixedPoints:"corners",size:{rows:6,columns:8}}],b=n(6);function d(e,t,n){var r=e.colors,o=r.from,c=r.to,i=e.size,s=i.columns,l=i.rows,a=(c[0]-o[0])/s,u=(c[2]-o[2])/l,f=[o[0]+a*n,(o[1]+c[1])/2,o[2]+u*t];return"hsl(".concat(f[0],"deg, ").concat(f[1],"%, ").concat(f[2],"%)")}function j(e,t){var n=Array(e.size.rows).fill(null).reduce((function(t,n,r){return[].concat(Object(b.a)(t),Object(b.a)(Array(e.size.columns).fill(null).map((function(t,n){var o=function(e,t,n){switch(e.fixedPoints){case"corners":return(0===t||t===e.size.rows-1)&&(0===n||n===e.size.columns-1);case"east-west":return 0===n||n===e.size.columns-1;case"north-south":return 0===t||t===e.size.rows-1;default:return!1}}(e,r,n);return{fixed:o,position:{col:n,row:r},styles:{alignItems:"center",background:d(e,r,n),cursor:o?"default":"pointer",display:"inline-flex",height:"100%",justifyContent:"center",width:"100%"}}}))))}),[]);return t?function(e,t){function n(e){for(var t=e.length,n=void 0,r=void 0,o=0;t>1;){o=0;do{r=Math.floor(Math.random()*t),o++}while(e[r].fixed&&o<50);e[--t].fixed||(n=e[t],e[t]=e[r],e[r]=n)}return e}var r=void 0;do{r=n(Object(b.a)(e))}while(O(t,r));return r}(n,e):n}function O(e,t){return t.every((function(t,n){var r=Math.floor(n/e.size.columns),o=n%e.size.columns;return r===t.position.row&&o===t.position.col}))}var m=function(e){var t=e.debug,n=void 0!==t&&t,o=e.onClick,c=e.selected,i=e.tile,s={background:"white",boxShadow:c?"2px 2px 6px #808080":void 0,transform:c?"scale(1.125)":void 0,transition:"transform 0.1s linear"};return Object(r.jsx)("div",{onClick:o,style:s,children:Object(r.jsx)("div",{style:i.styles,children:i.fixed?"\xd7":n?"".concat(i.position.row,".").concat(i.position.col):""})})};var p=function(e){var t=e.debug,n=e.levelData,c=e.onComplete,i=e.soundEnabled,s={gridTemplateColumns:"repeat(".concat(n.size.columns,", 1fr)")},a=Object(o.useState)(!t),u=Object(l.a)(a,2),f=u[0],b=u[1],d=Object(o.useState)(j(n,f)),p=Object(l.a)(d,2),v=p[0],h=p[1],w=Object(o.useState)(void 0),x=Object(l.a)(w,2),g=x[0],y=x[1],z=Object(o.useState)(0),E=Object(l.a)(z,2),C=E[0],P=E[1],S=Object(o.useState)(!1),k=Object(l.a)(S,2),I=k[0],M=k[1];return Object(o.useEffect)((function(){if(!(C<=0||g)){var e=O(n,v);M(e)}}),[g,n,v,C]),Object(o.useEffect)((function(){I&&c(C)}),[I,c,C]),Object(o.useEffect)((function(){b(!t)}),[t]),Object(o.useEffect)((function(){h(j(n,f)),P(0)}),[n,f]),Object(r.jsx)("div",{className:"board",style:s,children:v.map((function(e,n){return Object(r.jsx)(m,{debug:t,onClick:function(){return function(e){if(!v[e].fixed&&!I){if(i)try{new Audio("audio/tap.mp3").play()}catch(n){console.error(n)}if(g){if(g!==e){var t=v[e];v[e]=v[g],v[g]=t,P(C+1)}y(null)}else y(e)}}(n)},selected:n===g,tile:e},"".concat(e.position.row,".").concat(e.position.col))}))})};var v=function(){return Object(r.jsx)("span",{})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var x=o.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"});function g(e,t){var n=e.title,r=e.titleId,c=w(e,["title","titleId"]);return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,x)}var y=o.forwardRef(g);n.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=o.createElement("path",{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"});function P(e,t){var n=e.title,r=e.titleId,c=E(e,["title","titleId"]);return o.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,C)}var S=o.forwardRef(P);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=o.createElement("path",{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"});function L(e,t){var n=e.title,r=e.titleId,c=I(e,["title","titleId"]);return o.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,M)}var N=o.forwardRef(L);n.p,n(16);function T(e){var t=e.soundEnabled,n=Object(u.a)(e,["soundEnabled"]),o=Object(a.a)(Object(a.a)({},n),{},{className:"icon"});return t?Object(r.jsx)(N,Object(a.a)({},o)):Object(r.jsx)(S,Object(a.a)({},o))}var A=function(){var e=Object(o.useState)(window.location.search.length>0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=n?+window.location.search.slice(1):0,s=Object(o.useState)(i),a=Object(l.a)(s,2),u=a[0],b=a[1],d=Object(o.useState)(!1),j=Object(l.a)(d,2),O=j[0],m=j[1],h=Object(o.useState)(!0),w=Object(l.a)(h,2),x=w[0],g=w[1],z=Object(o.useCallback)((function(e){console.info(e),x&&setTimeout((function(){try{new Audio("audio/complete.mp3").play()}catch(e){console.error(e)}}),500),setTimeout((function(){m(!1),setTimeout((function(){b((u+1)%f.length)}),2e3)}),2e3)}),[u,x]);return Object(o.useEffect)((function(){m(!0)}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"info-container",children:[Object(r.jsx)("span",{children:Object(r.jsx)(T,{soundEnabled:x,onClick:function(){g(!x)}})}),window.location.search.length>0&&Object(r.jsx)("button",{onClick:function(){return c(!n)},children:"toggle"}),Object(r.jsxs)("span",{children:["level: ",1+u]})]}),Object(r.jsx)("div",{className:"App ".concat(O?"visible":""),children:Object(r.jsx)(p,{debug:n,levelData:f[u],onComplete:z,soundEnabled:x},u)}),Object(r.jsx)("div",{className:"info-container",children:Object(r.jsx)("a",{href:"https://github.com/orzechowskid/huebris",children:Object(r.jsx)(y,{className:"icon"})})})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),B()}},[[17,1,2]]]);
//# sourceMappingURL=main.828125c1.chunk.js.map