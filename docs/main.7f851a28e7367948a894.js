(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),i=r(20),o=r(145),c=r(141),l=r(12),s=(Math.sqrt(5),r(25)),u=r.n(s),f=r(35);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(r,!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y,x=Math.min,k=Math.max,v=Object(f.a)([function(t){return t.kj},function(t){return t.k0},function(t){return t.vf}],(function(t,e,r){var a=r*e/(t-e);return function(e){return k(x(r,a*(t/e-1)),0)}})),E=Object(f.a)([v],(function(t){return function(e){return e*t(e)}})),b=function(t){return u()(0,300,1/t).map((function(t){return{id:t,x:t}}))},g={play:!1,time:0,vf:4.5,kj:1/3,k0:1/9,k:.1,cars:b(.1),flowCount:[]};!function(t){t.TICK="TICK",t.SET_K="SET_K",t.SET_PLAY="SET_PLAY",t.SET_VF="SET_VF",t.SET_KJ="SET_KJ",t.SET_K0="SET_K0"}(y||(y={}));var w=function(t,e){switch(e.type){case y.TICK:var r=!1,a=e.payload*v(t)(t.k),n=t.cars.map((function(t){var e=t.x+a;return e>300&&t.x<300&&(r=!0),e%=300,{id:t.id,x:e}})),i=t.time+e.payload,o=r?[].concat(h(t.flowCount),[i]):t.flowCount,c=!1,l=!0,s=!1,u=void 0;try{for(var f,m=o[Symbol.iterator]();!(l=(f=m.next()).done);l=!0){f.value<i-30&&(c=!0)}}catch(t){s=!0,u=t}finally{try{l||null==m.return||m.return()}finally{if(s)throw u}}return c&&(o=o.filter((function(t){return t>i-30}))),d({},t,{cars:n,time:i,flowCount:o});case y.SET_K0:return d({},t,{k0:e.payload});case y.SET_VF:return d({},t,{vf:e.payload});case y.SET_KJ:return d({},t,{kj:e.payload});case y.SET_K:return d({},t,{k:e.payload,cars:b(e.payload)});case y.SET_PLAY:return d({},t,{play:e.payload});default:return t}},j=n.a.createContext({state:g,dispatch:null}),O=r(31),S=r(144),A=r(11),C=r(32),T=r(33),_=r(137),L=r(138),N=r(139),M=r(140);function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(t){n=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(t){return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}};function K(t){var e=P(Object(a.useState)(W(t?t.current:null)),2),r=e[0],n=e[1],i=Object(a.useCallback)((function(){return t.current&&n(W(t.current))}),[t]);return Object(a.useLayoutEffect)((function(){if(t.current)return i(),window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[t.current]),r}r(122);var z=r(2),q=r(24),D=20,I=20,F=20,J=20,R="translate(".concat(F,",").concat(D,")"),Y=function(){var t=Object(a.useContext)(j).state,e=Object(a.useRef)(),r=function(t){var e=t.width,r=t.height;return{width:e-F-J,height:r-D-I}}(K(e)).width,i=V({width:r}),o=r/2-10,c=Object(a.useRef)();return Object(a.useLayoutEffect)((function(){Object(z.c)(c.current).attr("x",o-10).attr("fill",O.a.A400).attr("width",20)}),[o]),Object(a.useLayoutEffect)((function(){r<10||Object(z.c)(c.current).transition().ease(q.a).duration(100).attr("x",o-10-2.5).attr("width",25).attr("fill",C.a.A400).transition().duration(200).ease(q.b).attr("x",o-10).attr("fill",O.a.A400).attr("width",20)}),[t.flowCount[t.flowCount.length-1]]),n.a.createElement("div",{ref:e,className:i.container},n.a.createElement("svg",{className:i.svg},n.a.createElement("g",{transform:R},n.a.createElement("g",{transform:"translate(".concat(r/2,",").concat(r/2,")")},n.a.createElement("circle",{className:i.road,r:o}),n.a.createElement("g",null,t.cars.map((function(t){return n.a.createElement("rect",{key:t.id,transform:"rotate(".concat(t.x/300*360,") "),className:i.car,x:o-1.5,rx:"1",ry:"1",width:"2",height:"4"})})),n.a.createElement("rect",{y:0,ref:c,stroke:"white",height:4,dy:-2}),n.a.createElement("g",{transform:"translate(".concat(o+10,",0)")},n.a.createElement(H,{flowCount:t.flowCount})))))))},V=Object(S.a)({dot:{fill:T.a[500],stroke:"white",strokeWidth:"2px"},path:{strokeWidth:"4px",fill:"none",stroke:_.a.A700,opacity:.8},container:{position:"relative",boxSizing:"border-box",width:"100%"},line:{strokeWidth:"1.5px",stroke:_.a.A400,strokeDasharray:"2,2"},svg:{width:"100%",height:function(t){return t.width+D+I},"& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}},cut:{stroke:O.a[700],strokeWidth:"2px",fill:L.a.A200,fillOpacity:.2},car:{fill:N.a.A400},masked:{mask:"url(#myMask2)"},maskedLines:{mask:"url(#myMask3)"},road:{stroke:O.a[300],strokeWidth:20,fill:"none"},axis:{strokeWidth:"2px",color:O.a[800]},qdot:{fill:T.a.A400,stroke:"white",strokeWidth:"2px"},kdot:{fill:M.a.A700,stroke:"white",strokeWidth:"2px"},text:{textAlign:"center",fontSize:"10px"}}),B=Object(S.a)({box:{fill:C.a.A400,rx:1,ry:1}}),H=function(t){var e=t.flowCount,r=B({}),i=Object(a.useRef)();return Object(a.useLayoutEffect)((function(){var t=Object(z.c)(i.current).selectAll("rect").data(e,(function(t){return t}));t.exit().transition("remove").duration(50).style("fill-opacity",0).remove(),t.transition().duration(80).attr("y",(function(t,e,r){return 11*(e-r.length)})),t.enter().append("rect").attr("class",r.box).attr("width",8).attr("height",8).attr("x",3).style("fill-opacity",.2).attr("y",0).attr("height",0).transition(38).attr("height",8).attr("y",-11).style("fill-opacity",1)}),[e]),n.a.createElement("g",{ref:i})},U=r(16),X=r.n(U),G=(r(41),{fontSize:"12px"}),Q=n.a.memo((function(t){var e=t.dx,r=void 0===e?0:e,a=t.dy,i=void 0===a?0:a,o=t.latexstring,c=void 0===o?"":o;return n.a.createElement("foreignObject",{width:"90",height:"75",transform:"translate(".concat(r,", ").concat(i,")")},n.a.createElement("span",{style:G},n.a.createElement(X.a,{math:c})))})),Z=n.a.memo((function(){return n.a.createElement("defs",null,n.a.createElement("marker",{id:"arrow",viewBox:"0 0 15 15",refY:"5",refX:"2",markerWidth:"8",markerHeight:"8",orient:"auto-start-reverse",fill:"black"},n.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"})))})),$=r(143),tt=function(t,e,r){return Object(a.useMemo)((function(){return Object($.a)().domain(e).range(t)}),r)},et=20,rt=20,at=20,nt=10,it="translate(".concat(at,",").concat(et,")"),ot={},ct=function(){var t=Object(a.useContext)(j).state,e=Object(a.useRef)(),r=function(t){var e=t.width,r=t.height;return{width:Math.max(e-at-nt,0),height:Math.max(r-et-rt,0)}}(K(e)),i=r.width,o=r.height,c=lt(ot),l=tt([0,i],[0,.5],[i]),s=tt([o,0],[0,2/3],[o]),f=E(t),m=Object(a.useMemo)((function(){var e="M"+u()(0,t.kj,t.kj/100).map((function(t){return[l(t),s(f(t))]})).join("L");return n.a.createElement("path",{className:c.path,d:e})}),[i,o,t.kj,t.k0,t.vf]);return n.a.createElement("div",{ref:e,className:c.container},n.a.createElement("svg",{className:c.svg},n.a.createElement(Z,null),n.a.createElement("g",{transform:it},n.a.createElement("mask",{id:"myMask4"},n.a.createElement("rect",{width:i,height:o,fill:"white"})),n.a.createElement("g",{mask:"url(#myMask4)"},m,n.a.createElement("circle",{cx:l(t.k),cy:s(f(t.k)),className:c.dot,r:6})),n.a.createElement("g",{id:"g-qaxis"},n.a.createElement("path",{d:"M0,0L0,".concat(o),fill:"none",stroke:"black",className:c.axis,markerStart:"url(#arrow)"}),n.a.createElement(Q,{dy:s(t.qMax)-12,dx:-15,latexstring:"q_0"}),n.a.createElement(Q,{dx:-10,dy:-25,latexstring:"q \\; \\text{veh/s}"})),n.a.createElement("g",{transform:"translate(0,".concat(o,")"),id:"g-kaxis"},n.a.createElement("path",{d:"M0,0L".concat(i,",0"),fill:"none",stroke:"black",markerEnd:"url(#arrow)",className:c.axis}),n.a.createElement(Q,{dx:l(t.qMax/t.vf),dy:0,latexstring:"k_0"}),n.a.createElement(Q,{dx:i-70,dy:5,latexstring:"k \\; \\text{(veh/km)}"})))))},lt=Object(S.a)({dot:{fill:T.a[500],stroke:"white",strokeWidth:"2px"},path:{strokeWidth:"4px",fill:"none",stroke:_.a.A700,opacity:.8},container:{position:"relative",width:"100%",height:"100%"},line:{strokeWidth:"1.5px",stroke:_.a.A400,strokeDasharray:"2,2"},svg:{width:"100%",height:"100%","& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}},cut:{stroke:O.a[700],strokeWidth:"2px",fill:L.a.A200,fillOpacity:.2},car:{fill:N.a.A400},masked:{mask:"url(#myMask2)"},maskedLines:{mask:"url(#myMask3)"},road:{stroke:O.a[300]},axis:{strokeWidth:"2px",color:O.a[800]},qdot:{fill:T.a.A400,stroke:"white",strokeWidth:"2px"},kdot:{fill:M.a.A700,stroke:"white",strokeWidth:"2px"},text:{textAlign:"center",fontSize:"10px"}}),st=r(146);function ut(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);a=!0);}catch(t){n=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ft=Object(A.a)((function(t){return{root:{color:t.palette.primary.main,marginBottom:"5px"}}}))(st.a),mt=function(){var t=Object(a.useContext)(j),e=t.state,r=t.dispatch,i=e.play,s=ht(dt);return function(t,e){var r=Object(a.useRef)(0);r.current=t,Object(a.useLayoutEffect)((function(){if(e){var t=0,a=Object(l.c)((function(e){var a=(e-t)/1e3;t=e,r.current&&r.current(a)}));return function(){return a.stop()}}}),[e])}((function(t){t/=.2,r({type:y.TICK,payload:t})}),i),n.a.createElement(c.a,{elevation:2,className:s.paper},n.a.createElement(o.a,{component:"div",className:s.button,variant:"contained",color:"secondary",onClick:function(){return r({type:y.SET_PLAY,payload:!i})}},i?"PAUSE":"PLAY"),n.a.createElement("div",{className:s.sliderLabel,style:{marginTop:15}},"density ",n.a.createElement(X.a,{math:"k \\; \\text{(veh/km)}"})),n.a.createElement(ft,{component:"div",onChange:function(t,e){return r({type:y.SET_K,payload:e})},value:e.k,step:.01,min:0,max:e.kj}),n.a.createElement("div",{className:s.sliderLabel},"speed ",n.a.createElement(X.a,{math:"v_f \\; \\text{(m/s)}"})),n.a.createElement(ft,{component:"div",onChange:function(t,e){return r({type:y.SET_VF,payload:e})},value:e.vf,step:.01,min:2,max:7}),n.a.createElement("div",{className:s.sliderLabel},"critical density ",n.a.createElement(X.a,{math:"k_{0} \\; \\text{(veh/km)}"})),n.a.createElement(ft,{component:"div",onChange:function(t,e){return r({type:y.SET_K0,payload:e})},value:e.k0,step:.003,min:.05,max:e.kj}),n.a.createElement("div",{className:s.sliderLabel},"jam density ",n.a.createElement(X.a,{math:"k_{j} \\; \\text{(veh/km)}"})),n.a.createElement(ft,{component:"div",onChange:function(t,e){return r({type:y.SET_KJ,payload:e})},value:e.kj,step:.003,min:.1,max:.5}))},dt={},pt=function(){var t=ht(dt);return n.a.createElement("div",{className:t.main},n.a.createElement("div",{className:t.row},n.a.createElement("div",{className:t.ringContainer},n.a.createElement(Y,null)),n.a.createElement("div",{className:t.qkContainer},n.a.createElement(ct,null))),n.a.createElement(mt,null))},ht=Object(S.a)({"@global":{body:{margin:"0 !important",padding:"0 !important",fontFamily:" 'Puritan', sans-serif",color:O.a[800]},".katex":{fontSize:"1em"}},qkContainer:{height:"250px"},row:{display:"flex",flexDirection:"row"},ringContainer:{width:"400px"},main:{maxWidth:"1000px",margin:"0 auto",display:"flex",flexDirection:"column"},sliderLabel:{fontSize:"14px",marginTop:"5px"},paper:{display:"flex",justifyContent:"center",flexDirection:"column",padding:"10px 30px"},button:{margin:"5px"},sliderContainer:{width:"300px",padding:"20px",boxSizing:"border-box"}}),yt=r(142),xt=r(45),kt=r(43),vt=r.n(kt),Et=r(44),bt=r.n(Et),gt=document.getElementById("root");if(!gt)throw Error("no root container");var wt=Object(xt.a)({palette:{primary:{main:vt.a[500]},secondary:{main:bt.a[500]}}});Object(i.render)(n.a.createElement(yt.a,{theme:wt},n.a.createElement((function(){var t=ut(Object(a.useReducer)(w,g),2),e=t[0],r=t[1];return n.a.createElement(j.Provider,{value:{state:e,dispatch:r}},n.a.createElement(pt,null))}),null)),gt)}},[[123,1,2]]]);