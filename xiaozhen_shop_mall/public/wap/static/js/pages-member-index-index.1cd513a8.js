(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-index-index"],{"031a":function(i,t,e){"use strict";var n=e("71f2"),a=e.n(n);a.a},"1e9a":function(i,t,e){"use strict";e.r(t);var n=e("6be0"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=a.a},"27a0":function(i,t,e){"use strict";e.r(t);var n=e("8ce8"),a=e("1e9a");for(var s in a)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return a[i]}))}(s);e("031a");var o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"d5739572",null,!1,n["a"],void 0);t["default"]=c.exports},3630:function(i,t,e){"use strict";var n=e("543b"),a=e.n(n);a.a},"4bc2":function(i,t,e){"use strict";e.r(t);var n=e("7937"),a=e("c6a38");for(var s in a)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return a[i]}))}(s);e("3630");var o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6c7f118e",null,!1,n["a"],void 0);t["default"]=c.exports},"543b":function(i,t,e){var n=e("afa6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("31c8190a",n,!0,{sourceMap:!1,shadowMode:!1})},"6be0":function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("d3b7"),e("159b");var a=n(e("4bc2")),s=e("f386"),o={components:{jihaiCopyright:a.default},mixins:[s.checkLogin],data:function(){return{open_id:"",hasLogin:!1,userInfo:{},kefupara:"",afterSaleNums:0,isClerk:!1,alipayNoLogin:!0,alipayName:"",alipayAvatar:"",config:"",orderItems:[{name:"待付款",icon:"/static/image/me-ic-obligation.png",nums:0},{name:"待发货",icon:"/static/image/me-ic-sendout.png",nums:0},{name:"待收货",icon:"/static/image/me-ic-receiving.png",nums:0},{name:"待评价",icon:"/static/image/me-ic-evaluate.png",nums:0}],utilityMenus:{distribution:{name:"分销中心",icon:"/static/image/distribution.png",router:"../distribution/user",unshowItem:!1},coupon:{name:"我的优惠券",icon:"/static/image/ic-me-coupon.png",router:"../coupon/index",unshowItem:!1},balance:{name:"我的余额",icon:"/static/image/ic-me-balance.png",router:"../balance/index",unshowItem:!1},invoice:{name:"我的发票",icon:"/static/image/ic-me-invoice.png",router:"../invoice/index",unshowItem:!1},integral:{name:"我的积分",icon:"/static/image/integral.png",router:"../integral/index",unshowItem:!1},address:{name:"地址管理",icon:"/static/image/me-ic-site.png",router:"../address/list",unshowItem:!1},collection:{name:"我的收藏",icon:"/static/image/ic-me-collect.png",router:"../collection/index",unshowItem:!1},history:{name:"我的足迹",icon:"/static/image/ic-me-track.png",router:"../history/index",unshowItem:!1}},clerk:[{name:"提货单列表",icon:"/static/image/ic-me-take.png",router:"../take_delivery/list"},{name:"提货单核销",icon:"/static/image/me-ic-about.png",router:"../take_delivery/index"}],order:{invite:{name:"邀请好友",icon:"/static/image/ic-me-invite.png",router:"../invite/index",unshowItem:!0},setting:{name:"系统设置",icon:"/static/image/me-ic-set.png",router:"../setting/index",unshowItem:!1}},list:2,suTipStatus:!1}},onShow:function(){this.initData()},methods:{goLogin:function(){uni.navigateTo({url:"/pages/login/choose/index"})},getUserInfo:function(i){if("getUserInfo:fail auth deny"==i.detail.errMsg)this.$common.errorToShow("未授权");else{var t={open_id:this.open_id,iv:i.detail.iv,edata:i.detail.encryptedData,signature:i.detail.signature},e=this.$db.get("invitecode");e&&(t.invitecode=e),this.toWxLogin(t)}},getALICode:function(){var i=this,t=this;uni.login({scopes:"auth_user",success:function(e){e.authCode?uni.getUserInfo({provider:"alipay",success:function(i){if("getUserInfo:ok"==i.errMsg){var n={nickname:i.nickName,avatar:i.avatar};t.aLiLoginStep1(e.authCode,n)}},fail:function(i){this.$common.errorToShow("未取得用户昵称头像信息")}}):i.$common.errorToShow("未取得code")},fail:function(i){this.$common.errorToShow("用户授权失败my.login")}})},getWxCode:function(){var i=this;uni.login({scopes:"auth_user",success:function(t){t.code?i.wxLoginStep1(t.code):this.$common.errorToShow("未取得code")},fail:function(i){this.$common.errorToShow("用户授权失败wx.login")}})},wxLoginStep1:function(i){var t=this;this.$api.login1({code:i},(function(i){i.status?t.open_id=i.data:t.$common.errorToShow(i.msg,(function(){uni.navigateBack({delta:1})}))}))},aLiLoginStep1:function(i,t){var e=this,n={code:i,user_info:t};this.$api.alilogin1(n,(function(i){e.alipayNoLogin=!1,i.status?(e.open_id=i.data.user_wx_id,i.data.hasOwnProperty("token")?(e.$db.set("userToken",i.data.token),e.initData()):e.$common.redirectTo("/pages/login/login/index?user_wx_id="+i.data.user_wx_id)):e.$common.errorToShow(i.msg)}))},toWxLogin:function(i){var t=this;t.$api.login2(i,(function(i){i.status?"undefined"==typeof i.data.token?uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+i.data.user_wx_id}):(t.$db.set("userToken",i.data.token),t.initData()):t.$common.errorToShow("登录失败，请重试")}))},toLogin:function(){this.$common.navigateTo("../../login/login/index1")},initData:function(){var i=this,t=this;this.$api.shopConfig((function(t){i.config=t,t.open_distribution?i.order.invite.unshowItem=!0:(i.utilityMenus.distribution.unshowItem=!0,i.order.invite.unshowItem=!1)})),this.$db.get("userToken")?(this.hasLogin=!0,this.$api.userInfo({},(function(e){if(e.status){t.userInfo=e.data;t.$api.getOrderStatusSum({ids:"1,2,3,4",isAfterSale:!0},(function(i){i.status&&(t.orderItems.forEach((function(t,e){t.nums=i.data[e+1]})),t.afterSaleNums=i.data.isAfterSale?i.data.isAfterSale:0)})),i.$api.isStoreUser({},(function(t){i.isClerk=t.flag}))}}))):this.hasLogin=!1,this.userIsSubscription()},navigateToHandle:function(i){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo(i)},orderNavigateHandle:function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",t),this.$common.navigateTo(i)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},showChat:function(){window._AIHECONG("ini",{entId:this.config.ent_id,button:!1,appearance:{panelMobile:{tone:"#FF7159",sideMargin:30,ratio:"part",headHeight:50}}}),window._AIHECONG("customer",{head:this.userInfo.avatar,"名称":this.userInfo.nickname,"手机":this.userInfo.mobile}),window._AIHECONG("showChat")},userIsSubscription:function(){var i=this,t=this.$db.get("userToken");t&&""!=t?this.$api.subscriptionIsTip((function(t){t.status?t.switch?i.suTipStatus=!0:i.suTipStatus=!1:i.suTipStatus=!0})):this.suTipStatus=!0}},computed:{shopMobile:function(){return this.$store.state.config.shop_mobile||0},invoice_switch:function(){return this.$store.state.config.invoice_switch||2},store_switch:function(){return this.$store.state.config.store_switch||0},isTip:function(){return this.suTipStatus}},watch:{}};t.default=o},"71f2":function(i,t,e){var n=e("79f5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("7c8e20cc",n,!0,{sourceMap:!1,shadowMode:!1})},7937:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var n=function(){var i=this.$createElement,t=this._self._c||i;return t("v-uni-view",{staticClass:"cpr"},[t("v-uni-view",{staticClass:"color-9"},[this._v("吉海科技 © jihainet.com 版权所有")]),t("v-uni-view",{staticClass:"color-9 beian"},[this.shop_beian?t("v-uni-view",[t("a",{attrs:{href:"http://beian.miit.gov.cn/",target:"_blank"}},[this._v("备案号："+this._s(this.shop_beian))])]):this._e()],1)],1)},a=[]},"79f5":function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.member-top[data-v-d5739572]{position:relative;width:100%;height:%?340?%}.bg-img[data-v-d5739572]{position:absolute;width:100%;height:100%}.member-top-c[data-v-d5739572]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.user-head-img[data-v-d5739572]{display:block;width:%?160?%;height:%?160?%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7);margin:0 auto %?16?%}.user-name[data-v-d5739572]{font-size:%?30?%;color:#fff;margin-bottom:%?16?%}.grade[data-v-d5739572]{color:#fff}.member-grid[data-v-d5739572]{background-color:#fff;border-top:%?2?% solid #eee;padding:%?20?% 0}.margin-cell-group[data-v-d5739572]{margin:%?20?% 0;color:#666}.badge[data-v-d5739572]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-d5739572]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-d5739572]:after{border:none}.login-btn[data-v-d5739572]{color:#fff;width:%?180?%;height:%?50?%;line-height:%?50?%;border-radius:%?25?%;background:#ff7159;font-size:12px}.sale-block[data-v-d5739572]{padding:0 %?20?%;margin-bottom:%?20?%}.sale-block .sale-title[data-v-d5739572]{height:%?72?%;line-height:%?72?%;border-bottom:%?2?% solid #f0f0f0;display:flex;align-items:center}.sale-block .sale-title .iconfont[data-v-d5739572]{margin-right:%?12?%;color:#28b8a1}.sale-block .sale-list[data-v-d5739572]{justify-content:flex-start;flex-wrap:wrap}.sale-block .sale-list .item[data-v-d5739572]{width:25%;padding:%?20?% 0}.sale-block .sale-list .item .iconfont[data-v-d5739572]{font-size:%?40?%;color:#5e5e5e}.sale-block .sale-list .item .text[data-v-d5739572]{margin-top:%?12?%;color:#4d4d4d;font-size:%?24?%}.sale-block .sale-list .tc[data-v-d5739572]{text-align:center}.sale-block .sale-list .tc .cell-hd-icon[data-v-d5739572]{float:none;width:%?60?%;height:%?60?%;margin:0}',""]),i.exports=t},"8ce8":function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"member-top"},[e("v-uni-image",{staticClass:"bg-img",attrs:{src:"/static/image/member-bg.png"}}),e("v-uni-view",{staticClass:"member-top-c"},[i.hasLogin?[e("v-uni-image",{staticClass:"user-head-img",attrs:{mode:"aspectFill",src:i.userInfo.avatar}}),e("v-uni-view",{staticClass:"user-name"},[i._v(i._s(i.userInfo.nickname))]),i.userInfo.grade_name?e("v-uni-view",{staticClass:"fz12 grade"},[i._v(i._s(i.userInfo.grade_name))]):i._e()]:[e("v-uni-image",{staticClass:"user-head-img",attrs:{mode:"aspectFill",src:i.$store.state.config.shop_logo}}),e("v-uni-view",{staticClass:"login-btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toLogin.apply(void 0,arguments)}}},[i._v("登录/注册")])]],2)],1),e("v-uni-view",{staticClass:"cell-group"},[e("v-uni-view",{staticClass:"cell-item right-img",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.orderNavigateHandle("../order/orderlist")}}},[e("v-uni-view",{staticClass:"cell-item-hd"},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/userorder.png"}}),e("v-uni-view",{staticClass:"cell-hd-title"},[i._v("我的订单")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1),e("v-uni-view",{staticClass:"member-grid"},[i._l(i.orderItems,(function(t,n){return e("v-uni-view",{key:n,staticClass:"member-item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.orderNavigateHandle("../order/orderlist",n+1)}}},[t.nums?e("v-uni-view",{staticClass:"badge color-f"},[i._v(i._s(t.nums))]):i._e(),e("v-uni-image",{staticClass:"member-item-icon",attrs:{src:t.icon}}),e("v-uni-text",{staticClass:"member-item-text"},[i._v(i._s(t.name))])],1)})),e("v-uni-view",{staticClass:"member-item",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.goAfterSaleList.apply(void 0,arguments)}}},[0!=i.afterSaleNums?e("v-uni-view",{staticClass:"badge color-f"},[i._v(i._s(i.afterSaleNums))]):i._e(),e("v-uni-image",{staticClass:"member-item-icon",attrs:{src:"/static/image/me-ic-evaluate.png"}}),e("v-uni-text",{staticClass:"member-item-text"},[i._v("退换货")])],1)],2),1==i.list?e("v-uni-view",{},[e("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},i._l(i.utilityMenus,(function(t,n){return t.unshowItem?i._e():e("v-uni-view",{key:n,staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}}),e("v-uni-view",{staticClass:"cell-hd-title"},[i._v(i._s(t.name))])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)})),1),i.isClerk?e("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},i._l(i.clerk,(function(t,n){return e("v-uni-view",{key:n,staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}}),e("v-uni-view",{staticClass:"cell-hd-title"},[i._v(i._s(t.name))])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)})),1):i._e(),i.order?e("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[i._l(i.order,(function(t,n){return e("v-uni-view",{key:n,staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}}),e("v-uni-view",{staticClass:"cell-hd-title"},[i._v(i._s(t.name))])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)})),e("v-uni-view",{staticClass:"cell-item"},[e("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.showChat()}}},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/me-ic-phone.png"}}),e("v-uni-view",{staticClass:"cell-hd-title"},[i._v("联系客服")])],1),e("v-uni-view",{staticClass:"cell-item-ft"},[e("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],2):i._e()],1):e("v-uni-view",{staticClass:"margin-cell-group"},[e("v-uni-view",{staticClass:"sale-block bgf"},[e("v-uni-view",{staticClass:"sale-title"},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/service.png"}}),e("v-uni-view",{},[i._v("我的服务")])],1),e("v-uni-view",{staticClass:"flc sale-list"},i._l(i.utilityMenus,(function(t,n){return!t.unshowItem&&"invoice"!=n||!t.unshowItem&&"invoice"==n&&1==i.invoice_switch?e("v-uni-view",{key:n,staticClass:"item tc"},[e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-view",{},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{},[i._v(i._s(t.name))])],1)],1)],1):i._e()})),1)],1),i.store_switch&&i.isClerk?e("v-uni-view",{staticClass:"sale-block bgf"},[e("v-uni-view",{staticClass:"sale-title"},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/shop.png"}}),e("v-uni-view",{},[i._v("门店管理")])],1),e("v-uni-view",{staticClass:"flc sale-list"},i._l(i.clerk,(function(t,n){return e("v-uni-view",{key:n,staticClass:"item tc"},[e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-view",{},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{},[i._v(i._s(t.name))])],1)],1)],1)})),1)],1):i._e(),e("v-uni-view",{staticClass:"sale-block bgf"},[e("v-uni-view",{staticClass:"sale-title"},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/other.png"}}),e("v-uni-view",{},[i._v("其他")])],1),e("v-uni-view",{staticClass:"flc sale-list"},[i._l(i.order,(function(t,n){return t.unshowItem?i._e():e("v-uni-view",{key:n,staticClass:"item tc"},[e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.navigateToHandle(t.router)}}},[e("v-uni-view",{},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{},[i._v(i._s(t.name))])],1)],1)],1)})),e("v-uni-view",{staticClass:"item tc"},[e("v-uni-view",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.showChat.apply(void 0,arguments)}}},[e("v-uni-view",{},[e("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/me-ic-phone.png"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-text",{},[i._v("联系客服")])],1)],1)],1)],2)],1)],1),e("jihaiCopyright")],1)},a=[]},afa6:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,".cpr[data-v-6c7f118e]{text-align:center;font-size:%?24?%;margin:%?20?% 0}.beian a[data-v-6c7f118e]{text-decoration:none;color:#999!important}",""]),i.exports=t},c6a38:function(i,t,e){"use strict";e.r(t);var n=e("eadb"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=a.a},eadb:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{shop_beian:this.$store.state.config.shop_beian||""}}}},f386:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.tools=t.orders=t.jumpBackPage=t.goods=t.goBack=t.checkLogin=void 0,e("b64b"),e("c975");var n={mounted:function(){},methods:{orderDetail:function(i){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+i)},toPay:function(i){this.$common.navigateTo("/pages/goods/payment/index?order_id="+i+"&type=1")},toEvaluate:function(i){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+i)},showExpress:function(i,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+i+"&no="+t+"&add="+e);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};t.orders=n;var a={mounted:function(){},methods:{goodsDetail:function(i){this.$common.navigateTo("/pages/goods/index/index?id="+i)},goodsList:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";Object.keys(i).length&&(t=this.$common.builderUrlParams(t,i)),this.$common.navigateTo(t)},groupDetail:function(i,t){this.$common.navigateTo("/pages/goods/index/group?id="+i+"&group_id="+t)},pintuanDetail:function(i,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+i+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+i)}}};t.goods=a;var s={onBackPress:function(i){if("navigateBack"===i.from)return!1;var t=this.$store.state.redirectPage;return["/pages/cart/index/index","/pages/member/index/index"].indexOf(t)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};t.goBack=s;var o={methods:{handleBack:function(){var i=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});["/pages/index/index","/pages/member/index/index"].indexOf(i)>-1?uni.switchTab({url:i}):i?uni.redirectTo({url:i}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=o;var c={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(i){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};t.checkLogin=c;var r={methods:{copyData:function(i){var t=this;uni.setClipboardData({data:i,success:function(){t.$common.errorToShow("复制成功")}})}}};t.tools=r}}]);