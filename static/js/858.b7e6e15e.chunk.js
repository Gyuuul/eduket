"use strict";(self.webpackChunkedu=self.webpackChunkedu||[]).push([[858,316,341],{4992:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i=t(168),o=t(4165),a=t(5861),c=t(1243),s=(t(2791),t(5867)),l=t(2754),d=t(184);function p(n){var e=n.accountname,t=n.isfollow,r=localStorage.getItem("Access Token"),i=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(){var i,a;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return n.next=3,c.Z.delete("".concat(l.J,"/profile/").concat(e,"/unfollow"),{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 3:i=n.sent,console.log(i),n.next=11;break;case 7:return n.next=9,c.Z.post("".concat(l.J,"/profile/").concat(e,"/follow"),[],{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 9:a=n.sent,console.log(a);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u,{onClick:i,"aria-label":"{isfollow ? ' \ud314\ub85c\uc6b0' : '\ud314\ub85c\uc789'}",children:t?" \ud314\ub85c\uc6b0":"\ud314\ub85c\uc789"})})}var u=s.ZP.button(r||(r=(0,i.Z)(['\n    width: 170px;\n    padding: 12px 16px;\n    border-radius: 0.25rem;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 10px;\n    background-color: #ffff;\n    font-family: "Noto_Sans_KR-400";\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n'])))},4007:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i,o=t(168),a=t(1413),c=t(5717),s=(t(3037),t(8688),t(5867)),l=t(184);function d(n){var e=n.images;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.Z,(0,a.Z)((0,a.Z)({},{dots:!0,fade:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1}),{},{children:e.split(",").map((function(n,e){return n.includes("https://api.mandarin.weniv.co.kr")?(0,l.jsx)(p,{children:(0,l.jsx)(u,{src:n,alt:"\uac8c\uc2dc\uae00 \uc774\ubbf8\uc9c0"})},e):null}))}))})}var p=s.zo.div(r||(r=(0,o.Z)(["\n    object-fit: cover;\n"]))),u=s.zo.img(i||(i=(0,o.Z)(["\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n"])))},1789:function(n,e,t){t.d(e,{Nm:function(){return c},O$:function(){return s},ZE:function(){return a}});var r=t(4165),i=t(5861),o=t(9195),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.delete("post/".concat(e));case 3:t=n.sent,console.log(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("post/".concat(e));case 3:return i=n.sent,console.log(i),n.abrupt("return",null===(t=i.data)||void 0===t?void 0:t.post);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/post/".concat(e,"/userpost/?limit=10&skip=0"));case 3:return i=n.sent,console.log(i),n.abrupt("return",null===(t=i.data)||void 0===t?void 0:t.post);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},2707:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,o,a,c,s,l=t(168),d=t(4165),p=t(3433),u=t(5861),x=t(9439),f=t(2791),h=t(7689),g=t(5867),m=t(4007),Z=t(1789),v=t(184);function w(){var n=(0,h.UO)().accountname,e=(0,h.s0)(),t=(0,f.useState)([]),r=(0,x.Z)(t,2),i=r[0],o=r[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.O$)(n);case 2:t=e.sent,o((0,p.Z)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsx)(v.Fragment,{children:i.length?(0,v.jsxs)(b,{children:[(0,v.jsx)(j,{children:"User Post"}),(0,v.jsx)(k,{children:i.map((function(n){return(0,v.jsx)(P,{children:(0,v.jsxs)(z,{onClick:function(){var t=(0,u.Z)((0,d.Z)().mark((function t(r){return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.stopPropagation(),e("/post/detail/".concat(n.id));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),children:[null!==n&&void 0!==n&&n.image?(0,v.jsx)(m.Z,{images:null===n||void 0===n?void 0:n.image}):null,(0,v.jsx)("p",{children:null===n||void 0===n?void 0:n.content})]})})}))})]}):(0,v.jsx)(y,{children:"\ub4f1\ub85d\ub41c \uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})}var b=g.ZP.div(r||(r=(0,l.Z)(["\n    padding: 30px 0; \n    border-top: 1px solid rgba(0,0,0,0.09);\n    border-bottom: 1px solid rgba(0,0,0,0.09);\n"]))),j=g.ZP.p(i||(i=(0,l.Z)(['\n    margin: 0 0 50px 0;\n    font-family: "Frutiger-lt-pro-600";\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.1;\n    text-align: center;\n']))),y=g.ZP.p(o||(o=(0,l.Z)(['\n    padding: 50px 0 30px;\n    font-family: "Noto_Sans_KR-600";\n    font-size: 35px;\n    text-align: center;\n    color: #C63D2F;\n']))),k=g.ZP.ul(a||(a=(0,l.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 0;\n    padding: 0 0;\n    box-sizing: border-box;\n    line-height: 0;\n    @media screen and (max-width: 800px) {\n        flex-direction: column;\n    }   \n"]))),P=g.ZP.li(c||(c=(0,l.Z)(["\n    flex: 0 0 33.33333%;\n    margin: 0 0 50px 0;\n    padding: 0 0 0;\n    vertical-align: top;\n    @media screen and (max-width: 1200px) {\n        flex: 0 0 33.5%;\n    }\n    @media screen and (max-width: 1100px) {\n        flex:0 0 50%;\n    }\n    @media screen and (max-width: 800px) {\n        width: 100%;\n    }\n"]))),z=g.ZP.div(s||(s=(0,l.Z)(['\n    width: 300px;\n    height: 400px;\n    margin: 0 auto;\n    padding: 12px 20px;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 15px;\n    background-color: #f1f2f3;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n    & img {\n        width: 100%;\n        height: 200px;\n        margin-bottom: 30px;\n        object-fit: cover;\n    }\n    & p {\n        margin-top: 20px;\n        font-family: "Noto_Sans_KR-400";\n        font-size: 17px;\n        font-weight: 500;\n        color: #777;\n        line-height: 28px;\n    }\n'])))},7661:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o,a,c,s,l,d,p,u,x,f,h,g,m=t(168),Z=t(4165),v=t(5861),w=t(9439),b=t(2791),j=t(9434),y=t(7689),k=t(1087),P=t(5867),z=t(2451),F=t(4992),S=t(6391),_=t(6871),C=t(2707),R=t(6316),N=t(184);function E(){var n=(0,y.UO)().accountname,e=(0,j.v9)((function(n){var e;return null===(e=n.user)||void 0===e?void 0:e.userInfo})),t=(0,b.useState)(null===e||void 0===e?void 0:e.isfollow),r=(0,w.Z)(t,2),i=r[0],o=r[1],a=(0,j.I0)();function c(){return(c=(0,v.Z)((0,Z.Z)().mark((function e(){var t;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Z)(n);case 2:t=e.sent,a((0,S.ps)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,b.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]);var s=(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(U,{children:(0,N.jsxs)(K,{children:[(0,N.jsx)(O,{children:(0,N.jsx)("h2",{children:"USER PAGE"})}),(0,N.jsxs)(I,{children:[(0,N.jsxs)(A,{children:[(0,N.jsx)(T,{src:null===e||void 0===e?void 0:e.image,alt:"\uc720\uc800 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),(0,N.jsxs)(q,{children:[(0,N.jsxs)(B,{children:[(0,N.jsx)(D,{children:null===e||void 0===e?void 0:e.username}),(0,N.jsxs)(J,{children:["@ ",null===e||void 0===e?void 0:e.accountname]})]}),(0,N.jsxs)(G,{children:[(0,N.jsx)(L,{to:"/profile/".concat(n,"/follower"),"aria-label":"\ud314\ub85c\uc6b0 \ud398\uc774\uc9c0",children:(0,N.jsxs)(H,{children:["Follower ",(0,N.jsx)("strong",{children:null===e||void 0===e?void 0:e.followerCount})]})}),(0,N.jsx)(L,{to:"/profile/".concat(n,"/following"),"aria-label":"\ud314\ub85c\uc789 \ud398\uc774\uc9c0",children:(0,N.jsxs)(H,{children:["Following ",(0,N.jsx)("strong",{children:null===e||void 0===e?void 0:e.followingCount})]})})]}),(0,N.jsx)("div",{onClick:function(){o(!i)},children:(0,N.jsx)(F.Z,{accountname:n,isfollow:i})})]}),(0,N.jsx)($,{children:null===e||void 0===e?void 0:e.intro})]}),(0,N.jsx)(C.default,{}),(0,N.jsx)(R.default,{})]})]})})});return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(z.Z,{page:s,title:"USER PROFILE",desc:"\uc720\uc800\uc758 \uc815\ubcf4\uc640 \uac8c\uc2dc\uae00, \uc2a4\ud130\ub514\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})})}var U=P.ZP.div(r||(r=(0,m.Z)(["\n    padding: 30px 0;\n    background-color: #f1f2f3;\n"]))),K=P.ZP.div(i||(i=(0,m.Z)(["\n    max-width: 1400px;\n    margin: 0 auto;\n    @media screen and (max-width: 1200px) {\n        width: 1100px;\n    }\n    @media screen and (max-width: 1100px) {\n        width: 1000px;\n    }\n    @media screen and (max-width: 800px) {\n        width: 700px;\n    }\n"]))),O=P.ZP.div(o||(o=(0,m.Z)(['\n    padding: 200px 0 90px 0;\n    border: none;\n    font-size: 40px;\n    text-align: center;\n    color: #2b2b2b;\n\n    &h2{\n        display: inline-block;\n        font-family: "Frutiger-lt-pro-600";\n        color: #2b2b2b;\n    }\n']))),I=P.ZP.div(a||(a=(0,m.Z)(["\n    padding: 40px 80px;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 50px;\n    background-color: #ffff;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n    @media screen and (max-width: 1200px) {\n        width: 1000px;\n        margin: 0 auto;\n    }\n    @media screen and (max-width: 1100px) {\n        width: 900px;\n        margin: 0 auto;\n    }\n    @media screen and (max-width: 800px) {\n        width: 500px;\n        margin: 0 auto;\n    }\n"]))),A=P.ZP.div(c||(c=(0,m.Z)(["\n    display: flex;\n    gap: 70px;\n    padding: 30px 0 60px 0; \n    @media screen and (max-width: 800px) {\n        flex-direction: column;\n        align-items: center;\n        gap: 30px;\n    }\n"]))),T=P.ZP.img(s||(s=(0,m.Z)(["\n    width: 220px;\n    height: 220px;\n    margin-left: -10px;\n    border-radius: 50%;\n"]))),q=P.ZP.div(l||(l=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    & div {\n        text-align: center;\n    }\n"]))),B=P.ZP.div(d||(d=(0,m.Z)(["\n    margin: 20px 0px;\n"]))),D=P.ZP.h2(p||(p=(0,m.Z)(['\n    font-family: "Frutiger-lt-pro-normal";\n    font-size: 30px;\n    color: #2b2b2b;\n    @media screen and (max-width: 800px) {\n        text-align: center;\n    }\n']))),J=P.ZP.h3(u||(u=(0,m.Z)(['\n    font-family: "Frutiger-lt-pro-normal";\n    font-size: 18.85px;\n    color: #777;\n    @media screen and (max-width: 800px) {\n        text-align: center;\n    }\n']))),$=P.ZP.p(x||(x=(0,m.Z)(['\n    flex-grow: 1;\n    margin-top: -10px;\n    padding: 30px;\n    font-family: "Noto_Sans_KR-400";\n    color: #2b2b2b;\n    font-size: 18px;\n    border-radius: 50px;\n    background-color: #f1f2f3;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n']))),G=P.ZP.div(f||(f=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n"]))),L=(0,P.ZP)(k.rU)(h||(h=(0,m.Z)(["\n    margin: 20px 0px;\n"]))),H=P.ZP.p(g||(g=(0,m.Z)(['\n    font-family: "Frutiger-lt-pro-normal";\n    font-weight: 400;\n    font-size: 18.85px;\n    color: #777;\n    & strong{\n        color: #2b2b2b;\n    }\n'])))},6871:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(4165),i=t(5861),o=t(9195);function a(n){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/profile/".concat(e));case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.profile);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},6495:function(n,e,t){t.d(e,{Z:function(){return a},q:function(){return c}});var r=t(4165),i=t(5861),o=t(9195),a=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.delete("/product/".concat(e));case 3:t=n.sent,console.log(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/product/".concat(e,"/?limit=10&skip=0"));case 3:return i=n.sent,console.log(i),n.abrupt("return",null===(t=i.data)||void 0===t?void 0:t.product);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},6316:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,o,a,c,s,l,d,p=t(168),u=t(4165),x=t(3433),f=t(5861),h=t(9439),g=t(2791),m=t(7689),Z=t(5867),v=t(6495),w=t(184);function b(){var n=(0,m.UO)().accountname,e=(0,m.s0)(),t=(0,g.useState)([]),r=(0,h.Z)(t,2),i=r[0],o=r[1];return(0,g.useEffect)((function(){function e(){return(e=(0,f.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.q)(n);case 2:t=e.sent,o((0,x.Z)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,w.jsx)(w.Fragment,{children:i.length?(0,w.jsxs)(j,{children:[(0,w.jsx)(y,{children:"User Study"}),(0,w.jsx)(z,{children:i.map((function(n){return(0,w.jsx)(F,{children:(0,w.jsxs)(S,{onClick:function(){var t=(0,f.Z)((0,u.Z)().mark((function t(r){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.stopPropagation(),e("/together/detail/".concat(n.id));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),children:[(0,w.jsx)("img",{src:n.itemImage,alt:"\uc2a4\ud130\ub514 \ub300\ud45c \uc774\ubbf8\uc9c0"}),(0,w.jsx)(k,{children:n.itemName}),(0,w.jsx)(P,{children:n.link})]})})}))})]}):(0,w.jsx)(_,{children:"\ub4f1\ub85d\ub41c \uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})}var j=Z.ZP.div(r||(r=(0,p.Z)(["\n    padding: 30px 0;\n"]))),y=Z.ZP.p(i||(i=(0,p.Z)(['\n    margin: 0 0 50px 0;\n    font-family: "Frutiger-lt-pro-600";\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 1.1;\n    text-align: center;\n']))),k=Z.ZP.p(o||(o=(0,p.Z)(['\n    margin-bottom: 30px;\n    font-family: "Noto_Sans_KR-600";\n    font-size: 20px;\n    font-weight: 700;\n    color: #3a3a3a;\n']))),P=Z.ZP.p(a||(a=(0,p.Z)(['\n    margin-top: 20px;\n    font-family: "Noto_Sans_KR-400";\n    font-size: 17px;\n    font-weight: 500;\n    color: #777;\n    line-height: 25px;\n']))),z=Z.ZP.ul(c||(c=(0,p.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 0;\n    padding: 0 0;\n    box-sizing: border-box;\n    line-height: 0;\n    @media screen and (max-width: 800px) {\n        flex-direction: column;\n    }   \n"]))),F=Z.ZP.li(s||(s=(0,p.Z)(["\n    flex: 0 0 33.33333%;\n    margin: 0 0 50px 0;\n    padding: 0 0 0;\n    vertical-align: top;\n    @media screen and (max-width: 1200px) {\n        flex: 0 0 33.5%;\n    }\n    @media screen and (max-width: 1100px) {\n        flex:0 0 50%;\n    }\n    @media screen and (max-width: 800px) {\n        width: 100%;\n    }\n"]))),S=Z.ZP.div(l||(l=(0,p.Z)(["\n    width: 300px;\n    height: 400px;\n    margin: 0 auto;\n    padding: 12px 20px;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 15px;\n    background-color: #f1f2f3;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n    & img {\n        width: 100%;\n        height: 200px;\n        margin: 30px 0;\n        object-fit: cover;\n    }\n"]))),_=Z.ZP.p(d||(d=(0,p.Z)(['\n    padding: 50px 0 30px;\n    font-family: "Noto_Sans_KR-600";\n    font-size: 35px;\n    text-align: center;\n    color: #C63D2F;\n'])))}}]);
//# sourceMappingURL=858.b7e6e15e.chunk.js.map