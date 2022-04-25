(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),o=a(5),i=a(4),l=a(1),u=function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"jumbotron mt-5",children:[Object(l.jsx)("h1",{className:"display-4",children:"Welcome to Auth System!"}),Object(l.jsx)("p",{className:"lead",children:"This is an incredible authentication system with production level features!"}),Object(l.jsx)("hr",{className:"my-4"}),Object(l.jsx)("p",{children:"Click the log In button"}),Object(l.jsx)(o.b,{className:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},p=a(14),j=a(3),b=a(11),d=a(6),m=a(7),h=a.n(m),O=a(15),f=a(16),x=a.n(f),v="LOGIN_SUCCESS",g="LOGIN_FAIL",y="SIGNUP_SUCCESS",w="SIGNUP_FAIL",N="ACTIVATION_SUCCESS",S="ACTIVATION_FAIL",_="USER_LOADED_SUCCESS",A="USER_LOADED_FAIL",C="AUTHENTICATED_SUCCESS",k="AUTHENTICATED_FAIL",I="PASSWORD_RESET_SUCCESS",E="PASSWORD_RESET_FAIL",T="PASSWORD_RESET_CONFIRM_SUCCESS",L="PASSWORD_RESET_CONFIRM_FAIL",R="LOGOUT",U=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,x.a.get("".concat("http://localhost:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:_,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:A});case 12:e.next=15;break;case 14:t({type:A});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},D=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var c,r,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,x.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=a.sent,n({type:v,payload:s.data}),n(U()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:g});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),r=Object(b.a)(c,2),s=r[0],u=r[1],d=s.email,m=s.password,h=function(e){return u(Object(j.a)(Object(j.a)({},s),{},Object(p.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("p",{children:"Sign into your Account"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(d,m)}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control mt-3",type:"email",placeholder:"Email",name:"email",value:d,onChange:function(e){return h(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group mt-3",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:m,onChange:function(e){return h(e)},minLength:"6",required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Login"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(l.jsx)(o.b,{to:"/signup",children:"Sign Up"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Forget your Password? ",Object(l.jsx)(o.b,{to:"/reset-password",children:"Reset Password"})]})]})})),P=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,n){return function(){var c=Object(O.a)(h.a.mark((function c(r){var s,o,i;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:a,re_password:n}),c.prev=2,c.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/"),o,s);case 5:i=c.sent,r({type:y,payload:i.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:w});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(b.a)(c,2),s=r[0],u=r[1],d=Object(n.useState)({name:"",email:"",password:"",re_password:""}),m=Object(b.a)(d,2),h=m[0],O=m[1],f=h.name,x=h.email,v=h.password,g=h.re_password,y=function(e){return O(Object(j.a)(Object(j.a)({},h),{},Object(p.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(i.a,{to:"/"}):s?Object(l.jsx)(i.a,{to:"/login"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsx)("p",{children:"Create your Account"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v===g&&(t(f,x,v,g),u(!0))}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control mt-3",type:"text",placeholder:"Name*",name:"name",value:f,onChange:function(e){return y(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control mt-3",type:"email",placeholder:"Email*",name:"email",value:x,onChange:function(e){return y(e)},required:!0})}),Object(l.jsx)("div",{className:"form-group mt-3",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:v,onChange:function(e){return y(e)},minLength:"6",required:!0})}),Object(l.jsx)("div",{className:"form-group mt-3",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:g,onChange:function(e){return y(e)},minLength:"6",required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Register"})]}),Object(l.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(l.jsx)(o.b,{to:"/login",children:"Sign In"})]})]})})),F=Object(d.b)(null,{verify:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var c,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:n({type:N}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),n({type:S});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,c=Object(n.useState)(!1),r=Object(b.a)(c,2),s=r[0],o=r[1];return s?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(l.jsx)("h1",{children:"Verify your Account:"}),Object(l.jsx)("button",{onClick:function(e){var n=a.params.uid,c=a.params.token;t(n,c),o(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),q=Object(d.b)(null,{reset_password:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),c,n);case 5:a({type:I}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:E});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(n.useState)(!1),c=Object(b.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)({email:""}),u=Object(b.a)(o,2),d=u[0],m=u[1],h=d.email;d.password;return r?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Request Password Reset:"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(h),s(!0)}(e)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{className:"form-control mt-3",type:"email",placeholder:"Email",name:"email",value:h,onChange:function(e){return function(e){return m(Object(j.a)(Object(j.a)({},d),{},Object(p.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Reset Password"})]})]})})),J=Object(d.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(O.a)(h.a.mark((function c(r){var s,o;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,x.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:T}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r({type:L});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,c=Object(n.useState)(!1),r=Object(b.a)(c,2),s=r[0],o=r[1],u=Object(n.useState)({new_password:"",re_new_password:""}),d=Object(b.a)(u,2),m=d[0],h=d[1],O=m.new_password,f=m.re_new_password,x=function(e){return h(Object(j.a)(Object(j.a)({},m),{},Object(p.a)({},e.target.name,e.target.value)))};return s?Object(l.jsx)(i.a,{to:"/"}):Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=t.params.uid,c=t.params.token;a(n,c,O,f),o(!0)}(e)},children:[Object(l.jsx)("div",{className:"form-group mt-3",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:O,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(l.jsx)("div",{className:"form-group mt-3",children:Object(l.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:f,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(l.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Reset Password"})]})})})),W=a(18),G=a(35),M=a(36),V={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},H=Object(W.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case v:return localStorage.setItem("access",n.access),Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case y:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,access:n.access,refresh:n.refresh});case _:return Object(j.a)(Object(j.a)({},e),{},{user:n});case k:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case A:return Object(j.a)(Object(j.a)({},e),{},{user:null});case g:case w:case R:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(j.a)(Object(j.a)({},e),{},{access:null,return:null,isAuthenticated:null});case I:case E:case T:case L:case N:case S:return Object(j.a)({},e);default:return e}}}),z=[M.a],B=Object(W.createStore)(H,{},Object(G.composeWithDevTools)(W.applyMiddleware.apply(void 0,z))),K=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:R})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),a?Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#!",onClick:t,children:"Logout"})}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]})})})),Q=Object(d.b)(null,{checkAuthenticated:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,x.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!=e.sent.data.code?t({type:C}):t({type:k}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:k});case 13:e.next=16;break;case 15:t({type:k});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},loas_user:U})((function(e){return Object(n.useEffect)((function(){e.checkAuthenticated(),e.loas_user()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(K,{}),e.children]})})),X=function(){return Object(l.jsx)(d.a,{store:B,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(Q,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/login",component:D}),Object(l.jsx)(i.b,{exact:!0,path:"/signup",component:P}),Object(l.jsx)(i.b,{exact:!0,path:"/reset-password",component:q}),Object(l.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:J}),Object(l.jsx)(i.b,{exact:!0,path:"/activate/:uid/:token",component:F})]})})})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.7aeba6cb.chunk.js.map