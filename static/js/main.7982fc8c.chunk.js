(this.webpackJsonphuebris=this.webpackJsonphuebris||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n.n(c),i=n(8),s=n.n(i),l=(n(15),n(2)),a=n(4),u=n(9),f=[{colors:{from:[0,100,75],to:[19,100,25]},fixedPoints:"east-west",size:{rows:3,columns:3}},{colors:{from:[0,100,75],to:[37,100,25]},fixedPoints:"corners",size:{rows:4,columns:4}},{colors:{from:[75,100,25],to:[37,100,75]},fixedPoints:"corners",size:{rows:4,columns:4}},{colors:{from:[37,100,75],to:[75,100,25]},fixedPoints:"north-south",size:{rows:5,columns:5}},{colors:{from:[225,100,25],to:[300,100,75]},fixedPoints:"corners",foo:"barbaz",size:{rows:5,columns:5}}],b=n(6);function d(e,t,n){var r=e.colors,c=r.from,o=r.to,i=e.size,s=i.columns,l=i.rows,a=(o[0]-c[0])/s,u=(o[2]-c[2])/l,f=[c[0]+a*n,(c[1]+o[1])/2,c[2]+u*t];return"hsl(".concat(f[0],"deg, ").concat(f[1],"%, ").concat(f[2],"%)")}function j(e,t){var n=Array(e.size.rows).fill(null).reduce((function(t,n,r){return[].concat(Object(b.a)(t),Object(b.a)(Array(e.size.columns).fill(null).map((function(t,n){var c=function(e,t,n){switch(e.fixedPoints){case"corners":return(0===t||t===e.size.rows-1)&&(0===n||n===e.size.columns-1);case"east-west":return 0===n||n===e.size.columns-1;case"north-south":return 0===t||t===e.size.rows-1;default:return!1}}(e,r,n);return{fixed:c,position:{col:n,row:r},styles:{alignItems:"center",background:d(e,r,n),cursor:c?"default":"pointer",display:"inline-flex",height:"100%",justifyContent:"center",width:"100%"}}}))))}),[]);return t?function(e){return function(e){for(var t=e.length,n=void 0,r=void 0,c=0;t>1;){c=0;do{r=Math.floor(Math.random()*t),c++}while(e[r].fixed&&c<50);e[--t].fixed||(n=e[t],e[t]=e[r],e[r]=n)}return e}(Object(b.a)(e))}(n):n}var O=function(e){var t=e.debug,n=void 0!==t&&t,c=e.onClick,o=e.selected,i=e.tile,s={background:"white",boxShadow:o?"2px 2px 6px #808080":void 0,transform:o?"scale(1.125)":void 0,transition:"transform 0.1s linear"};return Object(r.jsx)("div",{onClick:c,style:s,children:Object(r.jsx)("div",{style:i.styles,children:i.fixed?"\xd7":n?"".concat(i.position.row,".").concat(i.position.col):""})})};var p=function(e){var t=e.debug,n=e.levelData,o=e.onComplete,i=e.soundEnabled,s={display:"grid",flexGrow:1,fontWeight:800,gridTemplateColumns:"repeat(".concat(n.size.columns,", 1fr)"),margin:"80px",maxWidth:"50%",userSelect:"none"},a=Object(c.useState)(!t),u=Object(l.a)(a,2),f=u[0],b=u[1],d=Object(c.useState)(j(n,f)),p=Object(l.a)(d,2),h=p[0],m=p[1],v=Object(c.useState)(void 0),w=Object(l.a)(v,2),g=w[0],x=w[1],y=Object(c.useState)(0),z=Object(l.a)(y,2),E=z[0],S=z[1],C=Object(c.useState)(!1),P=Object(l.a)(C,2),k=P[0],I=P[1];return Object(c.useEffect)((function(){if(!(E<=0||g)){var e=function(e,t){return t.every((function(t,n){var r=Math.floor(n/e.size.columns),c=n%e.size.columns;return r===t.position.row&&c===t.position.col}))}(n,h);I(e)}}),[g,n,h,E]),Object(c.useEffect)((function(){k&&o(E)}),[k,o,E]),Object(c.useEffect)((function(){b(!t)}),[t]),Object(c.useEffect)((function(){m(j(n,f)),S(0)}),[n,f]),Object(r.jsx)("div",{style:s,children:h.map((function(e,n){return Object(r.jsx)(O,{debug:t,onClick:function(){return function(e){if(!h[e].fixed&&!k){if(i)try{new Audio("audio/tap.mp3").play()}catch(n){console.error(n)}if(g){if(g!==e){var t=h[e];h[e]=h[g],h[g]=t,S(E+1)}x(null)}else x(e)}}(n)},selected:n===g,tile:e},"".concat(e.position.row,".").concat(e.position.col))}))})};var h=function(){return Object(r.jsx)("span",{})};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var w=c.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"});function g(e,t){var n=e.title,r=e.titleId,o=v(e,["title","titleId"]);return c.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,w)}var x=c.forwardRef(g);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var E=c.createElement("path",{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"});function S(e,t){var n=e.title,r=e.titleId,o=z(e,["title","titleId"]);return c.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,E)}var C=c.forwardRef(S);n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var I=c.createElement("path",{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"});function M(e,t){var n=e.title,r=e.titleId,o=k(e,["title","titleId"]);return c.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,I)}var L=c.forwardRef(M);n.p,n(16);function N(e){var t=e.soundEnabled,n=Object(u.a)(e,["soundEnabled"]),c=Object(a.a)(Object(a.a)({},n),{},{className:"icon"});return t?Object(r.jsx)(L,Object(a.a)({},c)):Object(r.jsx)(C,Object(a.a)({},c))}var T=function(){var e=Object(c.useState)(window.location.search.length>0),t=Object(l.a)(e,2),n=t[0],o=t[1],i=n?+window.location.search.slice(1):0,s=Object(c.useState)(i),a=Object(l.a)(s,2),u=a[0],b=a[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),O=j[0],m=j[1],v=Object(c.useState)(!0),w=Object(l.a)(v,2),g=w[0],y=w[1],z=Object(c.useCallback)((function(e){console.info(e),g&&setTimeout((function(){try{new Audio("audio/complete.mp3").play()}catch(e){console.error(e)}}),500),setTimeout((function(){m(!1),setTimeout((function(){b((u+1)%f.length)}),2e3)}),2e3)}),[u,g]);return Object(c.useEffect)((function(){m(!0)}),[u]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"info-container",children:[Object(r.jsx)("span",{children:Object(r.jsx)(N,{soundEnabled:g,onClick:function(){y(!g)}})}),window.location.search.length>0&&Object(r.jsx)("button",{onClick:function(){return o(!n)},children:"toggle"}),Object(r.jsxs)("span",{children:["level: ",1+u]})]}),Object(r.jsx)("div",{className:"App ".concat(O?"visible":""),children:Object(r.jsx)(p,{debug:n,levelData:f[u],onComplete:z,soundEnabled:g},u)}),Object(r.jsx)("div",{className:"info-container",children:Object(r.jsx)("a",{href:"https://github.com/orzechowskid/huebris",children:Object(r.jsx)(x,{className:"icon"})})})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),A()}},[[17,1,2]]]);
//# sourceMappingURL=main.7982fc8c.chunk.js.map