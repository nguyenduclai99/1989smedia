(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(t,e,l){"use strict";var n=l(0),r=l(243),c=l.n(r),o=l(244),m=l.n(o);n.default.use(c.a,{locale:m.a})},170:function(t,e,l){"use strict";e.a=function(t,e){var l;e("api",{auth:(l=t.$axios,{login:function(t){var data={username:t.username,password:t.password,device_id:t.device_id};return l.post("login",data)},register:function(t){var data={username:t.username,password:t.password,fullname:t.fullname};return l.post("register",data)},logout:function(){return l.post("logout")}})})}},247:function(t,e,l){"use strict";l(39),l(29),l(38),l(48),l(30),l(49);var n=l(19),r=l(46);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var o={head:{link:[{rel:"stylesheet",href:"/assets/css/style-v2.css"},{rel:"stylesheet",href:"/assets/css/custom.css"}],script:[{src:"/assets/js/main.js"}]},mounted:function(){},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["loading"]))},m=l(13),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[l("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},248:function(t,e,l){"use strict";var n={head:{link:[{rel:"stylesheet",href:"/assets/css/style-v2.css"},{rel:"stylesheet",href:"/assets/css/custom.css"}],script:[{src:"/assets/js/main.js"}]},mounted:function(){}},r=l(13),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},249:function(t,e,l){"use strict";var n=l(250),r=l(251),c={components:{Header:n.default,Footer:r.default}},o=l(13),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Header"),t._v(" "),l("Nuxt"),t._v(" "),l("Footer")],1)}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,l){"use strict";l.r(e);var n={head:{link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"/assets/css/bootstrap.min.css"},{rel:"stylesheet",href:"/assets/css/magnific-popup.css"},{rel:"stylesheet",href:"/assets/css/themify-icons.css"},{rel:"stylesheet",href:"/assets/css/animate.min.css"},{rel:"stylesheet",href:"/assets/css/owl.carousel.min.css"},{rel:"stylesheet",href:"/assets/css/owl.theme.default.min.css"},{rel:"stylesheet",href:"/assets/css/style.css"},{rel:"stylesheet",href:"/assets/css/responsive.css"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans&display=swap"}],script:[{src:"/assets/js/jquery-3.5.0.min.js"},{src:"/assets/js/popper.min.js"},{src:"/assets/js/bootstrap.min.js"},{src:"/assets/js/jquery.magnific-popup.min.js"},{src:"/assets/js/jquery.easing.min.js"},{src:"/assets/js/wow.min.js"},{src:"/assets/js/owl.carousel.min.js"},{src:"/assets/js/jquery.countdown.min.js"},{src:"/assets/js/validator.min.js"}]}},r=l(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("header",{staticClass:"header custom-header"},[l("nav",{staticClass:"navbar navbar-expand-lg fixed-top custom-nav white-bg affix"},[l("div",{staticClass:"container"},[l("NuxtLink",{staticClass:"title display-3 font-weight-bolder",staticStyle:{"font-size":"2.5rem",color:"#6730e3"},attrs:{to:"/"}},[t._v("1989s Media")]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"collapse navbar-collapse main-menu",attrs:{id:"navbarSupportedContent"}},[l("ul",{staticClass:"navbar-nav ml-auto"},[l("li",{staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link page-scroll",attrs:{to:"/"}},[t._v("Trang chủ")])],1),t._v(" "),l("li",{staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link page-scroll",attrs:{to:"/gioi-thieu"}},[t._v("Giới thiệu")])],1),t._v(" "),l("li",{staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link page-scroll",attrs:{to:"/bang-gia-dich-vu"}},[t._v("Bảng giá")])],1),t._v(" "),l("li",{staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link page-scroll",attrs:{to:"/lien-he"}},[t._v("Liên hệ")])],1),t._v(" "),t._m(1)])])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"ti-menu"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link page-scroll",attrs:{href:""}},[t._v("Hỗ trợ")])])}],!1,null,null,null);e.default=component.exports},251:function(t,e,l){"use strict";l.r(e);var n=l(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"footer-section"},[l("div",{staticClass:"footer-top pt-150 background-img-2",staticStyle:{background:"url('/assets/images/footer-bg.png')no-repeat center top / cover"}},[l("div",{staticClass:"container"},[l("div",{staticClass:"row justify-content-between"},[l("div",{staticClass:"col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0"},[l("div",{staticClass:"footer-nav-wrap text-white"},[l("NuxtLink",{staticClass:"title display-3 font-weight-bolder",staticStyle:{"font-size":"2.5rem",color:"#FFFFFF"},attrs:{to:"/"}},[t._v("1989s Media")]),t._v(" "),l("p",[t._v("Chuyên cung cấp các dịch vụ tăng Like, Share, Comment, Follow... cho các Mạng xã hội như Facebook, Instagram, Tiktok, Shopee...")]),t._v(" "),t._m(0)],1)]),t._v(" "),t._m(1)])]),t._v(" "),l("div",{staticClass:"footer-bottom border-gray-light mt-5 py-3"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 col-lg-7"},[l("div",{staticClass:"copyright-wrap small-text"},[l("p",{staticClass:"mb-0 text-white"},[t._v("© "+t._s((new Date).getFullYear())+" 1989s Media™. All Rights Reserved.")])])]),t._v(" "),t._m(2)])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"social-list-wrap"},[l("ul",{staticClass:"social-list list-inline list-unstyled"},[l("li",{staticClass:"list-inline-item"},[l("a",{attrs:{href:"https://www.facebook.com/mualikegiare.xyz",target:"_blank",title:"Facebook"}},[l("span",{staticClass:"ti-facebook"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{attrs:{href:"",target:"_blank",title:"Twitter"}},[l("span",{staticClass:"ti-twitter"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{attrs:{href:"",target:"_blank",title:"Instagram"}},[l("span",{staticClass:"ti-instagram"})])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{attrs:{href:"",target:"_blank",title:"printerst"}},[l("span",{staticClass:"ti-pinterest"})])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-12 col-lg-8"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-sm-6 col-md-6 col-lg-6 mb-6 mb-sm-6 mb-md-0 mb-lg-0"},[l("div",{staticClass:"footer-nav-wrap text-white"},[l("h5",{staticClass:"mb-3 text-white"},[t._v("Trang chủ")]),t._v(" "),l("ul",{staticClass:"list-unstyled"},[l("li",{staticClass:"mb-2"},[l("a",{attrs:{href:""}},[t._v("Liên hệ")])]),t._v(" "),l("li",{staticClass:"mb-2"},[l("a",{attrs:{href:""}},[t._v("Hộ trợ")])]),t._v(" "),l("li",{staticClass:"mb-2"},[l("a",{attrs:{href:""}},[t._v("Bảng giá")])]),t._v(" "),l("li",{staticClass:"mb-2"},[l("a",{attrs:{href:""}},[t._v("Giới thiệu")])])])])]),t._v(" "),l("div",{staticClass:"col-sm-6 col-md-6 col-lg-6"},[l("div",{staticClass:"footer-nav-wrap text-white"},[l("h5",{staticClass:"mb-3 text-white"},[t._v("Liên hệ")]),t._v(" "),l("ul",{staticClass:"list-unstyled support-list"},[l("li",{staticClass:"mb-2 d-flex align-items-center"},[l("span",{staticClass:"ti-location-pin mr-2"}),t._v("\n                                        Tăng tương tác Facebook tại 1989smedia.com\n                                    ")]),t._v(" "),l("li",{staticClass:"mb-2 d-flex align-items-center"},[l("span",{staticClass:"ti-mobile mr-2"}),t._v(" "),l("a",{attrs:{href:"https://zalo.me/0584733902",target:"_blank"}},[t._v("0584733902")])]),t._v(" "),l("li",{staticClass:"mb-2 d-flex align-items-center"},[l("span",{staticClass:"ti-email mr-2"}),l("a",{attrs:{href:"https://www.facebook.com/mualikegiare.xyz",target:"_blank"}},[t._v(" 1989s Media")])]),t._v(" "),l("li",{staticClass:"mb-2 d-flex align-items-center"},[l("span",{staticClass:"ti-world mr-2"}),l("a",{attrs:{href:"https://www.mualikegiare.xyz/",target:"_blank"}},[t._v("www.mualikegiare.xyz")])])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-md-6 col-lg-5"},[l("div",{staticClass:"terms-policy-wrap text-lg-right text-md-right text-left"},[l("ul",{staticClass:"list-inline"},[l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"small-text",attrs:{href:""}},[t._v("Terms")])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"small-text",attrs:{href:""}},[t._v("Security")])]),t._v(" "),l("li",{staticClass:"list-inline-item"},[l("a",{staticClass:"small-text",attrs:{href:""}},[t._v("Privacy Policy")])])])])])}],!1,null,null,null);e.default=component.exports},252:function(t,e,l){l(253),t.exports=l(254)},302:function(t,e,l){"use strict";l.r(e),l.d(e,"state",(function(){return n})),l.d(e,"actions",(function(){return r})),l.d(e,"getters",(function(){return c})),l.d(e,"mutations",(function(){return o}));var n={loading:!1},r={loading:function(t,e){(0,t.commit)("setLoading",e)}},c={loading:function(t){return t.loading}},o={setLoading:function(t,e){t.loading=e}}}},[[252,18,1,19]]]);