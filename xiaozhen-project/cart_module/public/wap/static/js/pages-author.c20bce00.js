(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-author"],{"08ed":function(t,e,i){"use strict";i.r(e);var n=i("c860"),a=i("3a44");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c1e1");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5505d0d8",null,!1,n["a"],void 0);e["default"]=s.exports},"155b":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d401"),i("d3b7"),i("25f0"),i("c975");var n={data:function(){return{code:"",type:"",state:""}},onLoad:function(t){this.code=this.getUrlParam("code"),this.state=this.getUrlParam("state"),this.type=t.type;var e=this;setTimeout((function(){e.userTrustLogin()}),100)},methods:{getUrlParam:function(t){var e=window.location.toString(),i=e.split("?");if(i.length>1){for(var n,a=i[1].split("&"),r=0;r<a.length;r++)if(n=a[r].split("="),null!=n&&n[0]==t){if(n[1].indexOf("#")){var o;return o=n[1].split("#"),o[0]}return n[1]}return""}return""},userTrustLogin:function(){var t=this,e={scope:1,code:this.code,state:this.state,invitecode:this.$db.get("invitecode")||""};this.$api.getOpenId(e,(function(e){e.status?e.data.token?(t.$db.set("userToken",e.data.token),t.redirectHandler()):e.data.user_wx_id&&uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+e.data.user_wx_id}):t.$common.errorToShow(e.msg)}))},redirectHandler:function(){this.$db.del("invitecode");var t=this.$db.get("redirectPage");t?(this.$db.del("redirectPage"),this.$common.redirectTo(t)):uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},"3a44":function(t,e,i){"use strict";i.r(e);var n=i("155b"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},6400:function(t,e,i){var n=i("ee79");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("8d89f634",n,!0,{sourceMap:!1,shadowMode:!1})},c1e1:function(t,e,i){"use strict";var n=i("6400"),a=i.n(n);a.a},c860:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-c"},[e("v-uni-image",{staticClass:"load-img",attrs:{src:"/static/image/loading.gif",mode:""}}),e("v-uni-view",{staticClass:"load-text color-9"},[this._v("信息加载中.....")])],1)],1)},a=[]},ee79:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-5505d0d8]{position:relative;height:80vh}.content-c[data-v-5505d0d8]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.load-img[data-v-5505d0d8]{width:%?100?%;height:%?100?%}.load-text[data-v-5505d0d8]{font-size:%?26?%}",""]),t.exports=e}}]);