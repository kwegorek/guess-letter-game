(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){var a={"./abc.png":14,"./baloons.png":15,"./baloons_red.png":16,"./bird.png":17,"./dog.png":18,"./fox.png":19,"./heart.png":20,"./kids.png":21,"./letter.png":22,"./puppy.png":23};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=13},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/abc.7788cefd.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/baloons.a93f4080.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/baloons_red.7d1b9e0d.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bird.5a7e090f.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dog.6b050d97.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fox.0eb0b6e0.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/heart.a689bdd7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/kids.3f80a71a.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/letter.48242503.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/puppy.d09225d2.png"},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(5),i=n.n(c),s=(n(10),n(3)),o=n(2),u=(n(11),n(0)),l=function(e){var t=e.currentLetter,n=e.validateAnswer,r=e.translation,c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"UserForm",onSubmit:function(e){e.preventDefault(),n(t,s),l("")},children:[Object(u.jsxs)("div",{className:"FormElement",children:[" ",Object(u.jsx)("input",{className:"UserInput",type:"text",value:s,onChange:function(e){l(e.currentTarget.value)},maxLength:1})]}),Object(u.jsx)("div",{className:"FormElement",children:Object(u.jsx)("input",{className:"BtnSubmit",type:"submit",value:r.submit})})]})})},d=function(e){var t=e.currentLetter,n=e.translation;return Object(u.jsxs)("div",{className:"FindLetter",children:[Object(u.jsx)("h3",{children:n.choose_find_letter}),Object(u.jsx)("h3",{children:t})]})};var b=function(e){var t=[];return e.keys().map((function(n){console.log(n,"i"),t.push(e(n))})),t}(n(13));console.log(b[0],"rewardImages");var j=Array.from(Array(26)).map((function(e,t){return t+65})).map((function(e){return String.fromCharCode(e)})),f=function(e,t){return Math.floor(Math.random()*(t-e)+e)},p=f(0,4),g=function(e){return"eng"===e?{choose_language:"Choose Language",choose_find_letter:"Find Letter",next:"Next",submit:"Submit",feedback_ok:"Good Job!",letter:"Letter"}:"pl"===e?{choose_language:"Wybierz j\u0119zyk",next:"Graj dalej",submit:"Sprawd\u017a",feedback_ok:"\u015awietnie!",choose_find_letter:"Znajd\u017a liter\u0119",letter:"Litera"}:{choose_language:"Wybierz j\u0119zyk",next:"Graj dalej",submit:"Sprawd\u017a",feedback_ok:"\u015awietnie!",choose_find_letter:"Znajd\u017a litere",letter:"Litera"}},m=function(e){var t=e.translation,n=e.handleClick,a=e.rewardPicture;return console.log(a),Object(u.jsxs)("div",{className:"Feedback",children:[Object(u.jsx)("div",{className:"imgContainer",children:Object(u.jsx)("img",{src:a})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:t.feedback_ok}),Object(u.jsx)("button",{className:"BtnSubmit",onClick:n,children:t.next})]})]})},h=g("pl");var O=function(){var e=Object(a.useState)(j[p]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),O=i[0],x=i[1],v=Object(a.useState)(!1),k=Object(o.a)(v,2),_=k[0],y=k[1],N=Object(a.useState)({eng:!1,pl:!0}),C=Object(o.a)(N,2),S=C[0],L=C[1];return Object(a.useEffect)((function(){var e=b[f(0,b.length-1)];return e.default&&(x(e.default),console.log("initialImgSet",O)),S.eng&&(h=g("eng")),S.pl&&(h=g("pl")),function(){}}),[S]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"Content",children:Object(u.jsx)("main",{className:"Game",children:_?Object(u.jsx)(m,{rewardPicture:O,handleClick:function(e){r(j[f(0,j.length-1)]);var t=b[f(0,b.length-1)];t.default&&x(t.default),y(!1)},translation:h}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"Header",children:[Object(u.jsx)("span",{children:h.choose_language})," ",Object(u.jsx)("button",{onClick:function(e){return L(Object(s.a)(Object(s.a)({},S),{},{eng:!0,pl:!1}))},children:"en"})," ",Object(u.jsx)("button",{onClick:function(e){return L(Object(s.a)(Object(s.a)({},S),{},{eng:!1,pl:!0}))},children:"pl"})]}),Object(u.jsx)(d,{translation:h,currentLetter:n}),Object(u.jsx)(l,{translation:h,currentLetter:n,validateAnswer:function(e,t){return e===t&&(y(!0),!0)}})]})})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}],[[24,1,2]]]);
//# sourceMappingURL=main.a1366019.chunk.js.map