"use strict";(self.webpackChunkedu=self.webpackChunkedu||[]).push([[997],{4992:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i=t(168),o=t(4165),a=t(5861),c=t(1243),s=(t(2791),t(5867)),u=t(2754),l=t(184);function f(n){var e=n.accountname,t=n.isfollow,r=localStorage.getItem("Access Token"),i=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(){var i,a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return n.next=3,c.Z.delete("".concat(u.J,"/profile/").concat(e,"/unfollow"),{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 3:i=n.sent,console.log(i),n.next=11;break;case 7:return n.next=9,c.Z.post("".concat(u.J,"/profile/").concat(e,"/follow"),[],{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 9:a=n.sent,console.log(a);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p,{onClick:i,"aria-label":"{isfollow ? ' \ud314\ub85c\uc6b0' : '\ud314\ub85c\uc789'}",children:t?" \ud314\ub85c\uc6b0":"\ud314\ub85c\uc789"})})}var p=s.ZP.button(r||(r=(0,i.Z)(['\n    width: 170px;\n    padding: 12px 16px;\n    border-radius: 0.25rem;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 10px;\n    background-color: #ffff;\n    font-family: "Noto_Sans_KR-400";\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n'])))},1215:function(n,e,t){t.d(e,{Z:function(){return w}});var r,i,o,a,c,s=t(168),u=t(4165),l=t(5861),f=t(9439),p=t(2791),d=t(7689),h=t(9434),g=t(5867),v=t(4992),b=t(6871),x=t(6391),y=t(184);function w(n){var e=n.accountname,t=n.isfollow,r=n.image,i=(0,d.s0)(),o=(0,h.I0)(),a=(0,h.v9)((function(n){return n.user.myInfo.accountname})),c=(0,p.useState)(t),s=(0,f.Z)(c,2),g=s[0],w=s[1];function V(){return I.apply(this,arguments)}function I(){return(I=(0,l.Z)((0,u.Z)().mark((function n(){var t;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,b.Z)(e);case 2:t=n.sent,o((0,x.ps)(t));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(Z,{children:[(0,y.jsxs)(m,{children:[(0,y.jsx)("div",{onClick:function(){var n=(0,l.Z)((0,u.Z)().mark((function n(t){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V();case 2:i("../profile/".concat(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:(0,y.jsx)(j,{src:r,alt:"\uc720\uc800 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"})}),(0,y.jsxs)(O,{children:["@",e]})]}),a===e?null:(0,y.jsx)(k,{onClick:(0,l.Z)((0,u.Z)().mark((function n(){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w(!g);case 1:case"end":return n.stop()}}),n)}))),children:(0,y.jsx)(v.Z,{accountname:e,isfollow:g})})]})})}var Z=g.ZP.section(r||(r=(0,s.Z)(["\n    display: flex;\n    justify-content: space-between;\n    max-width: 1400px;\n    margin: 0 auto;\n    padding: 30px 220px;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 15px;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n"]))),m=g.ZP.div(i||(i=(0,s.Z)(["\n    display: flex;\n    gap: 35px;\n    align-items: center;\n    justify-content: center;\n"]))),k=g.ZP.div(o||(o=(0,s.Z)(["\n    margin-top: 55px;\n"]))),j=g.ZP.img(a||(a=(0,s.Z)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n"]))),O=g.ZP.p(c||(c=(0,s.Z)(["\n    font-size: 17px;\n    font-weight: 600;\n    text-align: center;\n"])))},6871:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(4165),i=t(5861),o=t(9195);function a(n){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/profile/".concat(e));case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.profile);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},4925:function(n,e,t){function r(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t.d(e,{Z:function(){return r}})},3441:function(n,e,t){t.d(e,{YD:function(){return Z}});var r=t(9439),i=t(1413),o=t(4925),a=t(5671),c=t(3144),s=t(7326),u=t(136),l=t(7277),f=t(2791),p=["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"],d=Object.defineProperty,h=function(n,e,t){return function(n,e,t){e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t}(n,"symbol"!==typeof e?e+"":e,t),t},g=new Map,v=new WeakMap,b=0,x=void 0;function y(n){return Object.keys(n).sort().filter((function(e){return void 0!==n[e]})).map((function(e){return"".concat(e,"_").concat("root"===e?(t=n.root)?(v.has(t)||(b+=1,v.set(t,b.toString())),v.get(t)):"0":n[e]);var t})).toString()}function w(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=n.getBoundingClientRect();return e(r,{isIntersecting:r,target:n,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(n){var e=y(n),t=g.get(e);if(!t){var r,i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t,o=e.isIntersecting&&r.some((function(n){return e.intersectionRatio>=n}));n.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=o),null==(t=i.get(e.target))||t.forEach((function(n){n(o,e)}))}))}),n);r=o.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:o,elements:i},g.set(e,t)}return t}(t),a=o.id,c=o.observer,s=o.elements,u=s.get(n)||[];return s.has(n)||s.set(n,u),u.push(e),c.observe(n),function(){u.splice(u.indexOf(e),1),0===u.length&&(s.delete(n),c.unobserve(n)),0===s.size&&(c.disconnect(),g.delete(a))}}f.Component;function Z(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.threshold,i=e.delay,o=e.trackVisibility,a=e.rootMargin,c=e.root,s=e.triggerOnce,u=e.skip,l=e.initialInView,p=e.fallbackInView,d=e.onChange,h=f.useState(null),g=(0,r.Z)(h,2),v=g[0],b=g[1],x=f.useRef(),y=f.useState({inView:!!l,entry:void 0}),Z=(0,r.Z)(y,2),m=Z[0],k=Z[1];x.current=d,f.useEffect((function(){var n;if(!u&&v)return n=w(v,(function(e,t){k({inView:e,entry:t}),x.current&&x.current(e,t),t.isIntersecting&&s&&n&&(n(),n=void 0)}),{root:c,rootMargin:a,threshold:t,trackVisibility:o,delay:i},p),function(){n&&n()}}),[Array.isArray(t)?t.toString():t,v,c,a,s,u,o,p,i]);var j=null==(n=m.entry)?void 0:n.target,O=f.useRef();v||!j||s||u||O.current===j||(O.current=j,k({inView:!!l,entry:void 0}));var V=[b,m.inView,m.entry];return V.ref=V[0],V.inView=V[1],V.entry=V[2],V}}}]);
//# sourceMappingURL=997.26e13e65.chunk.js.map