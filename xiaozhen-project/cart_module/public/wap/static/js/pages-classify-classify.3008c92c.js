(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classify-classify"],{2666:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".classify[data-v-4893149d]{\r\nheight:calc(100vh - 94px);\n}.goods-box[data-v-4893149d]{height:100%;overflow:hidden}.goods-list[data-v-4893149d]{overflow:auto;height:100%;width:%?160?%;float:left;display:inline-block;background-color:#f8f8f8}.goods-li[data-v-4893149d]{font-size:%?24?%;color:#666;height:%?100?%;line-height:%?100?%;text-align:center;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.goods-li.active[data-v-4893149d]{background-color:#fff}.shelectedZhu[data-v-4893149d]{height:%?56?%;width:%?8?%;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-li.active .shelectedZhu[data-v-4893149d]{background-color:#333}.goods-content[data-v-4893149d]{width:%?590?%;display:inline-block;float:left;padding:%?20?%;box-sizing:border-box}.goods-grid[data-v-4893149d]{height:100%;overflow:auto;background-color:#fff}.goods-banner[data-v-4893149d]{width:100%;margin-bottom:%?20?%}.goods-banner uni-image[data-v-4893149d]{width:100%;height:100%}.goods-item-box[data-v-4893149d]{overflow:hidden}.goods-items[data-v-4893149d]{width:%?170?%;margin-right:%?20?%;margin-bottom:%?20?%;display:inline-block}.goods-items[data-v-4893149d]:nth-child(3n){margin-right:0}.goods-item-img[data-v-4893149d]{width:%?170?%;height:%?170?%}.goods-item-name[data-v-4893149d]{text-align:center;color:#666;font-size:%?26?%;height:1rem;overflow:hidden}.level1-s .goods-content[data-v-4893149d],\r\n.level1-b .goods-content[data-v-4893149d]{width:100%}.level1-s .goods-items[data-v-4893149d]{width:%?222?%}.level1-s .goods-item-img[data-v-4893149d]{width:%?222?%;height:%?222?%}.level1-b .goods-items[data-v-4893149d]{width:100%}.level1-b .goods-item-img[data-v-4893149d]{width:100%;height:%?222?%}",""]),t.exports=e},"32dbb":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"classify"},[3==t.cate_style?i("v-uni-view",{staticClass:"goods-box"},[i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},t._l(t.beans,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-li",class:{active:o==t.ins},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active(o)}}},[i("v-uni-view",{staticClass:"shelectedZhu"}),t._v(t._s(e.name))],1)})),1)],1),i("v-uni-view",{staticClass:"goods-grid"},[i("v-uni-scroll-view",{staticClass:"goods-content",attrs:{"scroll-y":"true"}},[t.advert.tpl1_class_banner1?i("v-uni-view",{staticClass:"goods-banner"},t._l(t.advert.tpl1_class_banner1,(function(e){return i("v-uni-image",{key:e.id,attrs:{mode:"widthFix",src:e.img},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showSliderInfo(e.type,e.val)}}})})),1):t._e(),i("v-uni-view",{staticClass:"goods-item"},[t.isChild?i("v-uni-view",{staticClass:"goods-item-box"},t._l(t.beans[t.ins].child,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goClass(e.id)}}},[i("v-uni-image",{staticClass:"goods-item-img",attrs:{src:e.image_url,alt:"",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"goods-item-name"},[t._v(t._s(e.name))])],1)})),1):t._e()],1)],1)],1)],1):t._e(),2==t.cate_style?i("v-uni-view",{staticClass:"goods-box level1-s"},[i("v-uni-view",{staticClass:"goods-grid"},[i("v-uni-scroll-view",{staticClass:"goods-content",attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"goods-item"},[i("v-uni-view",{staticClass:"goods-item-box"},t._l(t.beans,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goClass(e.id)}}},[i("v-uni-image",{staticClass:"goods-item-img",attrs:{src:e.image_url,alt:"",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"goods-item-name"},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)],1):t._e(),1==t.cate_style?i("v-uni-view",{staticClass:"goods-box level1-b"},[i("v-uni-view",{staticClass:"goods-grid"},[i("v-uni-scroll-view",{staticClass:"goods-content",attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"goods-item"},[i("v-uni-view",{staticClass:"goods-item-box"},t._l(t.beans,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-items",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goClass(e.id)}}},[i("v-uni-image",{staticClass:"goods-item-img",attrs:{src:e.image_url,alt:"",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"goods-item-name"},[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)],1):t._e()],1)},s=[]},"36e6":function(t,e,i){"use strict";i.r(e);var o=i("9d72"),s=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=s.a},"690a":function(t,e,i){"use strict";i.r(e);var o=i("32dbb"),s=i("36e6");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("88ba");var n=i("f0c5"),d=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"4893149d",null,!1,o["a"],void 0);e["default"]=d.exports},"88ba":function(t,e,i){"use strict";var o=i("a6e8e"),s=i.n(o);s.a},"9d72":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c975"),i("ac1f"),i("5319");i("26cb");var o=i("f386"),s={mixins:[o.goods],data:function(){return{dataList:null,ins:0,beans:[],advert:{},isChild:!1}},computed:{cate_style:function(){return this.$store.state.config.cate_style?this.$store.state.config.cate_style:3}},methods:{active:function(t){this.ins=t,this.isChild=this.beans[t].hasOwnProperty("child")},categories:function(){var t=this;this.$api.categories({},(function(e){if(e.status){for(var i=0;i<e.data.length;i++)0==i&&(e.data[i].active=!0);t.beans=e.data,t.isChild=t.beans[0].hasOwnProperty("child")}}))},goClass:function(t){uni.navigateTo({url:"/pages/classify/index?id="+t})},getBanner:function(){var t=this;this.$api.advert({codes:"tpl1_class_banner1"},(function(e){t.advert=e.data.list}))},showSliderInfo:function(t,e){if(1==t)if(-1!=e.indexOf("http"))window.location.href=e;else{if("/pages/index/index"==e||"/pages/classify/classify"==e||"/pages/cart/index/index"==e||"/pages/member/index/index"==e)return void uni.switchTab({url:e});if(!(e.indexOf("/pages/coupon/coupon")>-1))return void this.$common.navigateTo(e);var i=e.replace("/pages/coupon/coupon?id=","");this.receiveCoupon(i)}else 2==t?this.goodsDetail(e):3==t?this.$common.navigateTo("/pages/article/index?id="+e+"&id_type=1"):4==t&&this.$common.navigateTo("/pages/article/list?cid="+e)},receiveCoupon:function(t){var e=this,i={promotion_id:t};this.$api.getCoupon(i,(function(t){t.status?e.$common.successToShow(t.msg):e.$common.errorToShow(t.msg)}))}},onLoad:function(){this.categories(),this.getBanner()}};e.default=s},a6e8e:function(t,e,i){var o=i("2666");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("4c6a69d2",o,!0,{sourceMap:!1,shadowMode:!1})},f386:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.orders=e.jumpBackPage=e.goods=e.goBack=e.checkLogin=void 0,i("b64b"),i("c975");var o={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+o)}}};e.orders=o;var s={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=s;var a={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=this.$store.state.redirectPage;return["/pages/cart/index/index","/pages/member/index/index"].indexOf(e)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};e.goBack=a;var n={methods:{handleBack:function(){var t=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});["/pages/index/index","/pages/member/index/index"].indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=n;var d={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};e.checkLogin=d;var c={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=c}}]);