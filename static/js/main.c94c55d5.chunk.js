(this["webpackJsonpreact-hw-04-feedback"]=this["webpackJsonpreact-hw-04-feedback"]||[]).push([[0],{26:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(0),s=c.n(r),i=c(6),a=c.n(i),j=c(4);function o(t){var e=t.title,c=t.children;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:e}),c]})}function b(t){var e=t.message;return Object(n.jsx)("p",{children:e})}var u=function(t){return Object.values(t.statistics).reduce((function(t,e){return t+e}),0)},l=function(t,e){return e>0?Math.round(t.statistics.good/e*100):null},d=Object(j.b)((function(t){return{state:t.statistics,total:u(t),percentage:l(t,u(t))}}))((function(t){var e=t.state,c=t.total,r=t.percentage,s=Object.keys(e);return Object(n.jsx)(o,{title:"Statistics",children:c>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{children:s.map((function(t){return Object(n.jsxs)("li",{children:[t,": ",e[t]]},t)}))}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["total: ",c]}),Object(n.jsxs)("li",{children:["percentage: ",r]})]})]}):Object(n.jsx)(b,{message:"No feedback given"})})})),O=c(3),h=Object(O.b)("statistics/increment");var f=Object(j.b)((function(t){return{options:t.statistics}}),(function(t){return{onClickBtn:function(e){return t(h(e))}}}))((function(t){var e=t.options,c=t.onClickBtn,r=Object.keys(e);return Object(n.jsx)(o,{title:"Please leave feedback",children:r.map((function(t,e){return Object(n.jsx)("button",{type:"button",onClick:function(t){return c(t.target.textContent)},children:t},e)}))})}));function x(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(d,{})]})}var p=c(15),v=c(5),g=c(11),k=c(2),m=Object(O.c)({good:0,neutral:0,bad:0},Object(v.a)({},h,(function(t,e){var c=e.payload;return Object(g.a)(Object(g.a)({},t),{},Object(v.a)({},c,t[c]+1))}))),w=Object(k.c)({statistics:m}),y=c(14),C=c.n(y),B=[].concat(Object(p.a)(Object(O.d)()),[C.a]),F=Object(O.a)({reducer:w,middleware:B,devTools:!1});a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j.a,{store:F,children:Object(n.jsx)(x,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c94c55d5.chunk.js.map