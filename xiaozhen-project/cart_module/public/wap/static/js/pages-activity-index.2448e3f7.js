(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-index"],{"0df5":function(e,t,i){"use strict";i.r(t);var a=i("154f"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},"154f":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d3b7"),i("159b"),i("14d9"),i("a630"),i("3ca3");var a={data:function(){return{awardsConfig:{chance:!0,prize:[]},awardsList:{},animationData:{},btnDisabled:"",thanksarr:[],chishu:0,mold:1,r_flg:0,myPrizelist:[],jifen:0}},onLoad:function(){this.initdata(this)},onReady:function(e){},methods:{getmyPrize:function(){var e=this;this.$api.myLottery({page:1,limit:1e3},(function(t){e.myPrizelist=t.data,e.r_flg=1}))},openshadow:function(){this.r_flg=1},closeshadow:function(){this.r_flg=0},initdata:function(e){var t=this;this.$api.lotteryConfig((function(e){if(e.status){t.awardsConfig=e.data,t.chishu=e.data.user.day_remaining,t.jifen=e.data.user.jifen;t.awardsConfig.prize.length;t.awardsConfig.prize.forEach((function(e,t){e.index=t})),t.drawAwardRoundel()}else t.$common.errorToShow(e.msg,(function(){uni.navigateBack({delta:1})}))}))},drawAwardRoundel:function(){for(var e=this.awardsConfig.prize,t=[],i=1/e.length*360,a=0;a<e.length;a++)t.push({turn:a*i+"deg",lineTurn:a*i+i/2+"deg",award:e[a].title,type:e[a].type,id:e[a].id});this.chishu<1&&this.jifen<this.awardsConfig.integral_exchange?this.btnDisabled="disabled":this.awardsConfig.user.lottery?this.btnDisabled="":this.btnDisabled="disabled",this.awardsList=t},playReward:function(){var e=this;if(this.chishu<1){if(this.jifen<this.awardsConfig.integral_exchange)return this.$common.errorToShow("抽奖次数已经用完"),!1;this.jifen>=this.awardsConfig.integral_exchange&&this.$common.modelShow("提示","本次抽奖将消耗"+this.awardsConfig.integral_exchange+"积分，确认吗？",(function(t){e.lottery()}))}else this.lottery()},lottery:function(){var e=this;this.$api.lottery((function(t){if(t.status){var i=0,a=t.data.result;e.awardsList.forEach((function(e,t){e.id==a.id&&(i=t)}));var n=e.awardsConfig.prize;e.runDeg=e.runDeg||0;var s=e.runDeg;e.runDeg=e.runDeg+(360-e.runDeg%360)+(1440-i*(360/n.length))+1,document.getElementById("zhuanpano").style="animation:rotate_before 4s 0ms ease forwards;",document.styleSheets[0].cssRules.length>0&&Array.from(document.styleSheets[0].cssRules).forEach((function(e,t){"rotate_before"==e.name&&document.styleSheets[0].deleteRule(t)})),document.styleSheets[0].insertRule("@keyframes rotate_before{from{ transform: rotate("+s+"deg); }to{ transform: rotate("+e.runDeg+"deg);}}",8),e.btnDisabled="disabled";var o=e.awardsConfig,r=o.prize[i].type;if(e.jifen=e.chishu<=0?e.jifen-o.integral_exchange>=0?e.jifen-o.integral_exchange:0:e.jifen,e.chishu=e.chishu>1?e.chishu-1:0,0!=r){var d=e.getPrizeMsg(o.prize[i].type,o.prize[i].val);setTimeout(function(){this.$common.modelShow("恭喜","获得"+o.prize[i].title+"，"+d,(function(e){setTimeout((function(){document.getElementById("zhuanpano").style=""}),1e3)}),!1),t.data.is_lottery.lottery?this.btnDisabled="":this.btnDisabled="disabled"}.bind(e),3686)}else setTimeout(function(){this.$common.modelShow("很遗憾","没中奖，再接再厉！",(function(e){setTimeout((function(){document.getElementById("zhuanpano").style=""}),1e3)}),!1),t.data.is_lottery.lottery?this.btnDisabled="":this.btnDisabled="disabled"}.bind(e),3686)}else e.$common.modelShow("提示",t.msg)}))},getPrizeMsg:function(e,t){var i="";switch(e){case 1:i="积分："+t+"个";break;case 2:i="优惠券：“"+t+"” 一张";break;case 3:i="余额："+t+"元";break;case 4:i="商品：“"+t+"”";break;default:break}return i}}};t.default=a},"1de5":function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"25a0":function(e,t,i){var a=i("c60f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("649f9eec",a,!0,{sourceMap:!1,shadowMode:!1})},"3b0e":function(e,t,i){e.exports=i.p+"static/img/circle.2fd04c3a.png"},"623c":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"conbox"},[i("v-uni-view",{staticClass:"container"},[i("v-uni-image",{staticClass:"cont",attrs:{src:"/static/img/bg.png",mode:""}}),i("v-uni-image",{staticClass:"caidai",attrs:{src:"/static/img/caidai.png",mode:""}}),i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"header-title"},[i("v-uni-view",{staticClass:"left"},[e._v("免费次数："),i("v-uni-text",{staticStyle:{color:"#E4431A"}},[e._v(e._s(e.chishu))])],1),i("v-uni-view",{staticClass:"left"},[e._v("账户积分："),i("v-uni-text",{staticStyle:{color:"#E4431A"}},[e._v(e._s(e.jifen))])],1),i("v-uni-view",{staticClass:"right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getmyPrize.apply(void 0,arguments)}}},[e._v("抽奖记录 >")])],1)],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"canvas-container"},[i("v-uni-view",{staticClass:"canvas-content",attrs:{animation:e.animationData,id:"zhuanpano"}},[i("v-uni-view",{staticClass:"canvas-line"},e._l(e.awardsList,(function(e,t){return i("v-uni-view",{key:t,staticClass:"canvas-litem",style:[{transform:"rotate("+e.lineTurn+")"}]})})),1),i("v-uni-view",{staticClass:"canvas-list"},e._l(e.awardsList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"canvas-item",style:[{zIndex:a}]},[i("v-uni-view",{staticClass:"canvas-item-text",style:[{transform:"rotate("+t.turn+")"}]},[i("v-uni-text",[e._v(e._s(t.award))]),0==t.type?i("v-uni-image",{staticClass:"canvas-item-text-img",attrs:{src:"/static/img/kongjiang.png"}}):e._e(),1==t.type?i("v-uni-image",{staticClass:"canvas-item-text-img",attrs:{src:"/static/img/jifen.png"}}):e._e(),2==t.type?i("v-uni-image",{staticClass:"canvas-item-text-img",attrs:{src:"/static/img/youhuiquan.png"}}):e._e(),3==t.type?i("v-uni-image",{staticClass:"canvas-item-text-img",attrs:{src:"/static/img/yue.png"}}):e._e(),4==t.type?i("v-uni-image",{staticClass:"canvas-item-text-img",attrs:{src:"/static/img/shangpin.png"}}):e._e()],1)],1)})),1)],1),i("v-uni-view",{staticClass:"canvas-btn",class:e.btnDisabled,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.playReward.apply(void 0,arguments)}}},[e._v("开始")])],1)],1),i("v-uni-view",{staticClass:"typecheckbox"}),i("v-uni-view",{staticClass:"guize"},[i("v-uni-view",{staticClass:"title"},[e._v("规则说明")]),e._l(e.awardsConfig.rule,(function(t,a){return i("v-uni-view",{key:a,staticClass:"g_item"},[e._v(e._s(t))])}))],2),i("v-uni-view",{staticClass:"typecheckbox2"}),e.r_flg?i("v-uni-view",{staticClass:"shadowbox",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeshadow.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"myrewards",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.openshadow.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title"},[e._v("抽奖记录")]),i("v-uni-view",{staticClass:"itembox"},e._l(e.myPrizelist,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("div",{staticClass:"t"},[i("v-uni-text",{staticClass:"left"},[e._v(e._s(t.name))]),i("v-uni-text",{staticClass:"right"},[e._v(e._s(t.ctime_name))])],1),i("div",{staticClass:"b"},[e._v(e._s(t.prize_content))])])})),1)],1)],1):e._e()],1)],1)},n=[]},"99ed":function(e,t,i){"use strict";var a=i("25a0"),n=i.n(a);n.a},c60f:function(e,t,i){var a=i("24fb"),n=i("1de5"),s=i("3b0e");t=a(!1);var o=n(s);t.push([e.i,".conbox[data-v-b084ee1e]{width:%?750?%;height:100vh;overflow-x:hidden;overflow-y:scroll}.container[data-v-b084ee1e],\n\tuni-image.cont[data-v-b084ee1e]{width:%?750?%;min-height:100vh;height:auto;position:relative}uni-image.cont[data-v-b084ee1e]{height:100%;position:absolute;z-index:0}uni-image.caidai[data-v-b084ee1e]{position:absolute;top:0;left:0;width:%?750?%;height:%?1024?%}.header[data-v-b084ee1e]{display:flex;flex-direction:column;align-items:center;justify-content:center;\n\t\t/* height: 246upx; */padding-top:%?48?%;padding-bottom:%?40?%;box-sizing:border-box;position:relative;z-index:3}.header-title[data-v-b084ee1e]{width:100%;height:%?60?%;display:flex;align-items:center;padding:0 %?48?%;box-sizing:border-box;justify-content:space-between}.header-title>uni-view[data-v-b084ee1e]{padding:%?8?% %?16?%;border:1px solid #d89720;color:#d89720;font-size:%?28?%;border-radius:%?26?%}\n\n\t/* 转盘 */.canvas-container[data-v-b084ee1e]{margin:0 auto;position:relative;width:%?600?%;height:%?600?%;background:url("+o+') no-repeat;background-size:cover;border-radius:50%}.canvas[data-v-b084ee1e]{width:100%;height:100%;display:block!important;border-radius:50%}.canvas-content[data-v-b084ee1e]{position:absolute;left:0;top:0;z-index:1;display:block;width:%?600?%;height:%?600?%;border-radius:inherit\n\t\t/* background-clip: padding-box; */\n\t\t/* background-color: #ffcb3f; */}.canvas-element[data-v-b084ee1e]{position:relative;z-index:1;width:inherit;height:inherit;border-radius:50%}.canvas-list[data-v-b084ee1e]{position:absolute;left:0;top:0;width:inherit;height:inherit;z-index:9999}.canvas-item[data-v-b084ee1e]{position:absolute;left:0;top:0;width:100%;height:100%;color:#e4370e\n\t\t/* text-shadow: 0 1upx 1upx rgba(255, 255, 255, 0.6); */}.canvas-item-text[data-v-b084ee1e]{position:relative;display:block;padding-top:%?46?%;margin:0 auto;text-align:center;-webkit-transform-origin:50% %?300?%;transform-origin:50% %?300?%;display:flex;flex-direction:column;align-items:center;color:#fb778b}.canvas-item-text uni-text[data-v-b084ee1e]{font-size:%?30?%}.canvas-item-text-img[data-v-b084ee1e]{width:%?50?%;height:%?50?%;padding-top:%?30?%}\n\n\t/* 分隔线 */.canvas-line[data-v-b084ee1e]{position:absolute;left:0;top:0;width:inherit;height:inherit;z-index:99}.canvas-litem[data-v-b084ee1e]{position:absolute;left:%?300?%;top:0;width:%?3?%;height:%?300?%;background-color:rgba(228,55,14,.4);overflow:hidden;-webkit-transform-origin:50% %?300?%;transform-origin:50% %?300?%}\n\n\t/**  \n* 抽奖按钮  \n*/.canvas-btn[data-v-b084ee1e]{position:absolute;left:%?260?%;top:%?260?%;z-index:400;width:%?80?%;height:%?80?%;border-radius:50%;color:#f4e9cc;background-color:#e44025;line-height:%?80?%;text-align:center;font-size:%?26?%;text-shadow:0 -1px 1px rgba(0,0,0,.6);box-shadow:0 3px 5px rgba(0,0,0,.6);text-decoration:none}.canvas-btn[data-v-b084ee1e]::after{position:absolute;display:block;content:" ";left:%?12?%;top:%?-44?%;width:0;height:0;overflow:hidden;border-width:%?30?%;border-style:solid;border-color:transparent;border-bottom-color:#e44025}.canvas-btn.disabled[data-v-b084ee1e]{pointer-events:none;background:#b07a7b;color:#ccc}.canvas-btn.disabled[data-v-b084ee1e]::after{border-bottom-color:#b07a7b}.canvas-btn-table[data-v-b084ee1e]{color:#a83fdb;width:%?120?%;text-align:center;position:absolute;left:%?240?%;top:%?360?%;font-size:%?26?%;background-color:#fff;opacity:.9}.typecheckbox[data-v-b084ee1e]{width:100%;position:relative;z-index:3;display:flex;justify-content:space-between;padding:%?20?%;box-sizing:border-box;color:#fff;font-size:%?28?%;top:%?-120?%;flex-direction:column;height:%?180?%;align-items:flex-end\n\t\t/* padding-top: 46upx; */}.typecheckbox2[data-v-b084ee1e]{width:100%;position:relative;z-index:3;display:flex;justify-content:space-between;padding:%?20?%;box-sizing:border-box;color:#fff;font-size:%?28?%;top:%?-120?%;flex-direction:column;height:%?120?%;align-items:flex-end\n\t\t/* padding-top: 46upx; */}.typecheckbox uni-view[data-v-b084ee1e]{border:1px solid #ff3637;background:transparent;color:#ff3637;display:flex;height:%?60?%;width:%?140?%;border-radius:%?50?%;align-items:center;justify-content:center;display:flex;margin-left:%?20?%}.typecheckbox uni-view.active[data-v-b084ee1e]{background:#ff3637;color:#fff}.guize[data-v-b084ee1e]{width:%?502?%;min-height:%?300?%;display:flex;flex-direction:column;position:relative;z-index:3;background-image:linear-gradient(-180deg,#f48549,#f2642e);border:%?18?% solid #e4431a;border-radius:16px;margin:0 auto;margin-top:%?-104?%;padding:%?48?%;\n\t\t/* box-sizing: border-box; */color:#fff}.guize .title[data-v-b084ee1e]{text-align:center;margin-bottom:%?28?%}.guize .g_item[data-v-b084ee1e]{font-family:PingFang-SC-Medium;font-size:%?24?%;color:#fff;letter-spacing:.5px;text-align:justify;line-height:20px}.shadowbox[data-v-b084ee1e]{width:%?750?%;height:100vh;position:fixed;top:0;left:0;z-index:999;background:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center}.myrewards[data-v-b084ee1e]{width:%?600?%;min-height:%?80?%;background:#ffeedf;border:%?10?% solid #f2692f;color:#333;font-size:%?24?%;font-family:PingFang-SC-Medium;border-radius:%?40?%;padding:0 %?24?% %?20?%}.myrewards .title[data-v-b084ee1e]{font-family:PingFang-SC-Bold;font-size:16px;color:#e4431a;letter-spacing:.57px;display:flex;padding-top:%?36?%;justify-content:center}.myrewards .itembox[data-v-b084ee1e]{max-height:%?320?%;overflow-y:auto}.myrewards .item[data-v-b084ee1e]{width:100%;padding:%?12?% 0;box-sizing:border-box;border-bottom:%?1?% dashed #ccc}.myrewards .item .t[data-v-b084ee1e]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.myrewards .item .b[data-v-b084ee1e]{font-size:12px;color:#999;text-align:left}',""]),e.exports=t},ca7e:function(e,t,i){"use strict";i.r(t);var a=i("623c"),n=i("0df5");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("99ed");var o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"b084ee1e",null,!1,a["a"],void 0);t["default"]=r.exports}}]);