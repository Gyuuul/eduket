"use strict";(self.webpackChunkedu=self.webpackChunkedu||[]).push([[356],{4992:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(168),o=t(4165),c=t(5861),i=t(1243),s=(t(2791),t(5867)),u=t(2754),l=t(184);function p(n){var e=n.accountname,t=n.isfollow,r=localStorage.getItem("Access Token"),a=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(){var a,c;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return n.next=3,i.Z.delete("".concat(u.J,"/profile/").concat(e,"/unfollow"),{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 3:a=n.sent,console.log(a),n.next=11;break;case 7:return n.next=9,i.Z.post("".concat(u.J,"/profile/").concat(e,"/follow"),[],{headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 9:c=n.sent,console.log(c);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d,{onClick:a,"aria-label":"{isfollow ? ' \ud314\ub85c\uc6b0' : '\ud314\ub85c\uc789'}",children:t?" \ud314\ub85c\uc6b0":"\ud314\ub85c\uc789"})})}var d=s.ZP.button(r||(r=(0,a.Z)(['\n    width: 170px;\n    padding: 12px 16px;\n    border-radius: 0.25rem;\n    border: 1px solid rgba(0,0,0,0.09);\n    border-radius: 10px;\n    background-color: #ffff;\n    font-family: "Noto_Sans_KR-400";\n    box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n'])))},4393:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,o,c,i,s,u,l,p,d=t(168),f=t(3433),x=t(4165),h=t(5861),Z=t(9439),v=t(2791),m=t(3441),g=t(763),b=t(1243),w=t(5867),j=t(1285),y=t(2754),k=t(9434),P=t(7689),C=t(6391),S=t(6871),F=t(4992),A=t(184);function _(n){var e=n.search,t=n.userList,r=n.searchQuery,a=n.isfollow,o=(0,k.I0)(),c=(0,P.s0)(),i=(0,v.useState)(a),s=(0,Z.Z)(i,2),u=s[0],l=s[1],p=(0,k.v9)((function(n){return n.user.myInfo.accountname}));function d(n){return f.apply(this,arguments)}function f(){return(f=(0,h.Z)((0,x.Z)().mark((function n(e){var t;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,S.Z)(e);case 2:t=n.sent,o((0,C.ps)(t));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return e&&(null===t||void 0===t?void 0:t.map((function(n){var e=n.image;return(!n.image.includes("https://api.mandarin")||n.image.includes("/undefined")||n.image.includes("/null"))&&(e=y.U),(0,A.jsx)(K,{children:(0,A.jsx)("ul",{children:(0,A.jsx)(N,{children:(0,A.jsxs)(Q,{onClick:(0,h.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(null===n||void 0===n?void 0:n.accountname);case 2:c("../profile/".concat(null===n||void 0===n?void 0:n.accountname));case 3:case"end":return e.stop()}}),e)}))),children:[(0,A.jsxs)(L,{children:[(0,A.jsx)(R,{src:e,alt:"\uc720\uc800 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),(0,A.jsxs)(U,{children:[(0,A.jsx)(T,{children:n.username.includes(r)?(0,A.jsxs)(A.Fragment,{children:[n.username.split(r)[0],(0,A.jsx)("span",{style:{color:"#C63D2F"},children:r}),n.username.split(r)[1]]}):n.username}),(0,A.jsxs)(E,{children:["@",n.accountname.includes(r)?(0,A.jsxs)(A.Fragment,{children:[n.accountname.split(r)[0],(0,A.jsx)("span",{style:{color:"#C63D2F"},children:r}),n.accountname.split(r)[1]]}):n.accountname]})]})]}),p===(null===n||void 0===n?void 0:n.accountname)?null:(0,A.jsx)(X,{onClick:(0,h.Z)((0,x.Z)().mark((function n(){return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l(!u);case 1:case"end":return n.stop()}}),n)}))),children:(0,A.jsx)(F.Z,{accountname:n.accountname,isfollow:u})})]},n._id)},n._id)})})})))}var z,I,B,D,J,K=w.ZP.div(r||(r=(0,d.Z)(["\n    width: 100%;\n    height: 100%;\n"]))),L=w.ZP.div(a||(a=(0,d.Z)(["\n    display: flex;\n    gap: 35px;\n    justify-content: space-between;\n    padding: 30px 20px;\n"]))),N=w.ZP.li(o||(o=(0,d.Z)(["\n    list-style: none;\n"]))),Q=w.ZP.li(c||(c=(0,d.Z)(["\n    display: flex;\n    justify-content: space-between;\n"]))),R=w.ZP.img(i||(i=(0,d.Z)(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n"]))),T=w.ZP.p(s||(s=(0,d.Z)(['\n    margin-bottom: 5px;\n    font-family: "Frutiger-lt-pro-normal";\n    color: #2b2b2b;\n']))),E=w.ZP.p(u||(u=(0,d.Z)(['\n    font-family: "Frutiger-lt-pro-normal";\n    color: #777;\n']))),U=w.ZP.div(l||(l=(0,d.Z)(["\n    color: #000;\n"]))),X=w.ZP.div(p||(p=(0,d.Z)(["\n    margin-top: 30px;\n"]))),Y=t.p+"static/media/Search.7febe769a277595069a5.webp";function q(){var n=(0,m.YD)(),e=(0,Z.Z)(n,2),t=e[0],r=e[1],a=(0,v.useState)(""),o=(0,Z.Z)(a,2),c=o[0],i=o[1],s=(0,v.useState)([]),u=(0,Z.Z)(s,2),l=u[0],p=u[1],d=(0,v.useState)([]),w=(0,Z.Z)(d,2),k=w[0],P=w[1],C=(0,v.useState)(0),S=(0,Z.Z)(C,2),F=S[0],z=S[1],I=(0,v.useState)(!1),B=(0,Z.Z)(I,2),D=B[0],J=B[1],K=localStorage.getItem("Access Token"),L=function(){var n=(0,h.Z)((0,x.Z)().mark((function n(e){var t,r;return(0,x.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(D||J(!0),Q(),0!==e.length){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,b.Z.get("".concat(y.J,"/user/searchuser/?keyword=").concat(e),{headers:{Authorization:"Bearer ".concat(K),"Content-type":"application/json"}});case 6:t=n.sent,r=null===t||void 0===t?void 0:t.data,p(r),P(r.slice(20*F,20*F+20)),z(F+1);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=(0,v.useCallback)((0,g.debounce)((function(n){return L(n)}),400),[]),Q=(0,v.useCallback)((0,g.debounce)((function(n){return J(!1)}),500));return(0,v.useEffect)((function(){r&&function(){var n=l.slice(20*F,20*F+20);P([].concat((0,f.Z)(k),(0,f.Z)(n))),z(F+1)}()}),[r]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j.Z,{}),(0,A.jsx)(G,{children:(0,A.jsx)(H,{children:(0,A.jsxs)(V,{children:[(0,A.jsx)(O,{type:"text",placeholder:"\uc774\ub984, \uc544\uc774\ub514 \uac80\uc0c9",value:c,onChange:function(n){if(i(n.target.value),""===n.target.value)return p(""),void P("");N(n.target.value)}}),c&&k&&(0,A.jsx)(_,{search:c,userList:k,searchQuery:c}),(0,A.jsx)("div",{ref:t}),(0,A.jsx)(M,{})]})})})]})}var G=w.ZP.div(z||(z=(0,d.Z)(["\n    width: 100%;\n    margin: 100px auto 0;\n    background: #f1f2f3;\n    box-sizing: border-box;\n"]))),H=w.ZP.section(I||(I=(0,d.Z)(["\n    position: relative;\n    width: 900px;\n    margin: 0 auto;\n    padding: 190px 0 20px;\n"]))),M=w.ZP.div(B||(B=(0,d.Z)(["\n    width: 900px;\n    height: calc(100vh - 100px);\n    background: url(",") 50% 100% no-repeat ;\n"])),Y),O=w.ZP.input(D||(D=(0,d.Z)(['\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: calc(100% - 60px);\n    height: 60px;\n    margin: 130px auto;\n    padding: 10px;\n    border: none;\n    border-bottom: 2px solid #A73121;\n    background-color: #f1f2f3;\n    font-family: "Noto_Sans_KR-400";\n    font-size: 20px;\n    transform: translateX(-50%);\n']))),V=w.ZP.div(J||(J=(0,d.Z)(["\n    padding: 50px 0 20px;\n    overflow-y: visible;\n"])))},6871:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(4165),a=t(5861),o=t(9195);function c(n){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/profile/".concat(e));case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.profile);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=356.b2d209f2.chunk.js.map