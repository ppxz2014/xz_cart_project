(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-choose-index"],{"210c":function(t,n,i){"use strict";i("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{open_id:""}},computed:{logoImage:function(){return this.$store.state.config.shop_logo}},onLoad:function(){},methods:{getCode:function(t){uni.login({success:function(n){if(n.code)return t(n.code);this.$common.errorToShow("未取得code")},fail:function(t){this.$common.errorToShow("用户授权失败wx.login")}})},handleRefuse:function(){uni.showToast({title:"未授权",icon:"none",duration:1e3}),setTimeout((function(){uni.hideToast(),uni.navigateBack(-1)}),1e3)},getUserInfo:function(t){if("getUserInfo:fail auth deny"==t.detail.errMsg)this.$common.errorToShow("未授权");else{var n={open_id:this.open_id,iv:t.detail.iv,edata:t.detail.encryptedData,signature:t.detail.signature},i=this.$db.get("invitecode");i&&(n.invitecode=i),this.toLogin(n)}},toLogin:function(t){var n=this;n.$api.login2(t,(function(t){if(t.status){if("undefined"!=typeof t.data.token)return n.$db.set("userToken",t.data.token),uni.navigateBack({delta:1}),!1;uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+t.data.user_wx_id})}else n.$common.errorToShow("登录失败，请重试")}))}}};n.default=e},"28ab":function(t,n,i){"use strict";i.r(n);var e=i("210c"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"329fc":function(t,n,i){var e=i("46c0");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("1944a63b",e,!0,{sourceMap:!1,shadowMode:!1})},"46c0":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-22571f9e]{background-color:#fff;height:100vh;padding:%?100?% %?60?% 0}.login-item[data-v-22571f9e]{display:flex;justify-content:center;padding-bottom:%?40?%;border-bottom:%?1?% solid #ddd}.logo[data-v-22571f9e]{display:block;width:%?180?%;height:%?180?%;border-radius:50%;overflow:hidden;border:2px solid #fff;box-shadow:3px 3px 10px rgba(0,0,0,.2)}.login-tip[data-v-22571f9e]{padding:%?60?% 0}.login-tip-big[data-v-22571f9e]{font-size:%?28?%;line-height:%?80?%}.login-tip-small[data-v-22571f9e]{font-size:12px;color:#9e9e9e}.app-name[data-v-22571f9e]{font-size:%?28?%;color:#999}.login-b .btn-g[data-v-22571f9e]{margin-top:%?40?%}.auth-btn[data-v-22571f9e]{flex:1;display:block;height:%?80?%;line-height:%?80?%;text-align:center;font-size:12px;color:#fff;background:#1aad19;border-radius:%?40?%}.auth-btn.refuse[data-v-22571f9e]{background:#999;margin-right:%?40?%}.toutiao-logo[data-v-22571f9e]{width:100%;height:100%}',""]),t.exports=n},a900:function(t,n,i){"use strict";var e=i("329fc"),o=i.n(e);o.a},a90d:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"login-m"},[n("v-uni-view",{staticClass:"login-item"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-open-data",{attrs:{type:"userAvatarUrl"}})],1)],1),n("v-uni-view",{staticClass:"login-tip"},[n("v-uni-view",{staticClass:"login-tip-big"},[this._v("申请获取以下权限")]),n("v-uni-view",{staticClass:"login-tip-small"},[this._v("获得你的公开信息 （昵称、头像等）")])],1)],1),n("v-uni-view",{staticClass:"login-b flc"})],1)},o=[]},fac2:function(t,n,i){"use strict";i.r(n);var e=i("a90d"),o=i("28ab");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("a900");var s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"22571f9e",null,!1,e["a"],void 0);n["default"]=r.exports}}]);