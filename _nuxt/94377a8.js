(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{384:function(t,e,n){"use strict";n.r(e);n(39),n(29),n(38),n(48),n(30),n(49);var r=n(6),o=n(19),l=(n(64),n(46));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"Login",head:{title:"Đăng nhập hệ thống | 1989s Media"},data:function(){return{loginData:{username:"",password:"",device_id:""}}},mounted:function(){this.detectBrowser(),console.log(navigator.appVersion)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.state.loading=!0,e.next=4,t.$api.auth.login(t.loginData);case 4:n=e.sent,t.$store.state.loading=!1,t.$notify({title:"Success",message:"Đăng nhập thành công",type:"success"}),localStorage.setItem("authInfo",JSON.stringify(n.data.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.$store.state.loading=!1,t.$notify.error({title:"Error",message:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},detectBrowser:function(){this.loginData.device_id=navigator.appVersion}},Object(l.b)(["loading"])),computed:{disableBtn:function(){return""!=this.loginData.username&&""!=this.loginData.password}}},m=n(13),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"data-theme":"colored","data-layout":"fluid","data-sidebar-position":"left","data-sidebar-layout":"default"}},[n("main",{staticClass:"d-flex w-100 h-100"},[n("div",{staticClass:"container d-flex flex-column"},[n("div",{staticClass:"row vh-100"},[n("div",{staticClass:"col-sm-10 col-md-8 col-lg-5 mx-auto d-table h-100"},[n("div",{staticClass:"d-table-cell align-middle"},[t._m(0),t._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"m-sm-4"},[n("form",[n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label"},[t._v("Số điện thoại")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.username,expression:"loginData.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Số điện thoại"},domProps:{value:t.loginData.username},on:{input:function(e){e.target.composing||t.$set(t.loginData,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label"},[t._v("Mật khẩu")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Mật khẩu"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-center mt-3"},[n("a",{staticClass:"btn btn-lg btn-primary login",class:{"disable-btn":!t.disableBtn},on:{click:t.login}},[t._v("Đăng nhập")])])])]),t._v(" "),n("div",{staticClass:"form-group text-center"},[n("span",{staticClass:"ml-auto"},[n("NuxtLink",{staticClass:"forgot-pass",attrs:{to:"dang-ky"}},[t._v("Bạn chưa có tài khoản? Đăng ký ngay")])],1)])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center mt-4"},[n("h1",{staticClass:"h2"},[t._v("Đăng nhập")])])}],!1,null,null,null);e.default=component.exports}}]);