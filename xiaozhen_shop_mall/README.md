# 小程序商城


#### 项目介绍

小程序商城，是一款开源的电商系统，包含微信小程序、支付宝小程序、APP、公众号、H5端、PC端、抖音小程序、今日头条小程序、皮皮虾小程序、西瓜视频小程序，为大中小企业提供移动电子商务优秀的解决方案。

后台采用Thinkphp5.1框架开发，执行效率、扩展性、稳定性值得信赖。并且Jshop小程序商城上手难度低，可大量节省定制化开发周期。

前台使用uni-app开发，适配性多，在页面的打开和渲染效率上更快，下单流程流畅自然，可大大增加用户体验，提升订单量。

强大的促销引擎，多种促销方式自由搭配，满足各种场景的促销方式需求，做活动更灵活简单，并且在促销的扩展上也非常方便。


### 前台模板介绍

uni-app简约序模板，全新UI设计，更多交互细节，我们倾尽全力为您提供更加流畅舒爽的体验，增加对支付宝小程序、APP的支持，实现一个后台，管理10个前端。

同时又实现了一套前端代码，发布多个平台，为您的业务可以提供更加强有力的支撑！


#### 关于开源
这不是一款免费的系统，商用记得授权哦。

为什么开源但是不免费，一方面是可以让我们有持续维护下去的动力和资源，另外一方面也是不想让您有后顾之忧，避免后期纠纷。

我们的团队水平有限，也是在探索中学习、改进。之所以开源，就是为了方便大家，也是为了提升下该项目的质量，我们相信有您的参与，可以使我们的系统更加完善和健壮。

从我工作以来，见过太多的优秀免费系统，因为坚持不下去失去维护，还有的前期免费后来又变成收费，所谓的承诺变来变去还不如一开始就收费，所以我们开源但不免费。

#### 功能介绍

 + 商品管理，单规格、多规格商品管理，品牌、分类管理、商品评价
 + 订单管理，订单支付、发货、取消、售后等
 + 会员管理，会员列表、消息管理、用户等级等
 + 运营管理，广告管理、文章管理
 + 微信管理，小程序管理、微信公众号管理、模板列表、公众号菜单管理
 + 促销管理，商品促销、订单促销、优惠券、团购秒杀、拼团管理
 + 财务管理，支付单、退款单管理、提现管理、账户资金、发票管理
 + 控制面板，计划任务、插件、图片、地区、消息、店铺配置、支付方式、配送方式、物流公司管理。信任登录插件、阿里云OSS插件、阿里云短信插件、微信消息模板插件、分销功能
 + 门店管理，门店列表。门店核销、店员管理、提货单管理。
 + 智能表单，表单列表、表单统计、表单提交管理、表单小程序码等
 + 统计报表，商品销量统计、财务收款统计、订单销量统计
 + 页面管理，布局管理，页面可视化操作



#### 智能表单说明
智能表单包含有：订单、付款码、留言、反馈、登记、调研这几种类型，可实现店铺收款、门店内扫码下单、活动预约、活动预定、会议登记、在线报名、上课签到等等。

智能表单可以为您的线上线下结合提供更强大的助力。

#### 项目演示
- uniapp简约模板项目地址：https://gitee.com/hnjihai/uniapp
- uniapp简约模板体验地址：https://demo.jihainet.com/wap
- 前台H5演示：[https://b2c.jihainet.com/](https://b2c.jihainet.com/)
- 后台演示：[https://b2c.jihainet.com/manage/](https://b2c.jihainet.com/manage/)
- QQ交流群：823732583（开发手册、接口文档、操作手册请进群查看哦~）
- 交流社区：[https://bbs.jihainet.com/](https://bbs.jihainet.com/)
- 小程序体验二维码

![输入图片说明](https://images.gitee.com/uploads/images/2018/1018/184408_a1c0d706_8503.jpeg "gh_03bc4364b4dc_344.jpg")

- 简约模板体验二维码

![输入图片说明](https://gitee.com/uploads/images/2019/0409/182147_ecec17d7_8503.png "1554805258.png")


- 安卓APP体验二维码【可进群下载体验】

![输入图片说明](https://images.gitee.com/uploads/images/2018/1026/163026_31132341_8503.png "1540542519.png")



#### 项目截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104933_383a7831_8503.png "img(1).png")
#### 后台截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104952_d154e8b4_8503.png "首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105206_a2dfa9e2_8503.png "商品列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105222_7caa99b6_8503.png "添加商品.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105317_82da6a34_8503.png "添加优惠券.png")


#### 目录结构
初始的目录结构如下：
~~~
wwwroot  WEB部署目录（或者子目录）
├─addons                应用插件目录
├─application           应用目录
│  ├─api                api接口模块目录
│  ├─b2c                前台模块
│  ├─common             公共模块目录
│  ├─crontab            定时任务目录
│  ├─job                任务队列目录
│  ├─manage             后台管理目录
│  ├─wechat             接收微信消息目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─tags.php           应用行为扩展定义文件
│
├─config                配置文件目录
├─public                WEB目录（对外访问目录）
│  ├─install            自动安装目录
│  ├─static             前台静态文件
│  ├─wap                前台手机端运行目录
│  ├─index.php          入口文件
│  └─.htaccess          用于apache的重写
│
├─thinkphp              thinkphp框架系统目录
├─update                版本升级包
├─extend                扩展类库目录
├─runtime               应用的运行时目录（可写，可定制）
├─vendor                第三方类库目录（Composer依赖库）
├─uni-app               前端源码（支持微信小程序、支付宝小程序、APP、公众号、H5端、PC端、抖音小程序、今日头条小程序、皮皮虾小程序、西瓜视频小程序）
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─crontab               定时任务命令行入口文件
~~~


#### 环境要求
- Nginx/Apache/IIS
- PHP7.0-7.2
- MySQL5.5+

建议使用环境：Linux + Nginx1.14 + PHP7.0 + MySQL5.6

#### 部署说明
[安装部署](https://gitee.com/hnjihai/jshop_mall/wikis/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2?sort_id=881805)

下载代码到本地，代码包中的H5文件夹为H5的VUE源码，wechat_app目录为小程序源码目录，无需上传部署。
https://images.gitee.com/uploads/images/2018/1022/165135_dd4d8118_8503.png


#### nginx 伪静态配置，apache请勿使用此配置
~~~
    location /wap/ {
        	try_files $uri /wap/index.html;
    }
    location / {
        if (!-e $request_filename){
            rewrite  ^(.*)$  /index.php?s=$1  last;   break;
        }
    }
~~~

#### Apache 伪静态配置
~~~
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^wap/(.*) /wap/index.html [QSA,PT,L]
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond $1 !^(wap)
    RewriteRule ^(.*)$ index.php?s=/$1 [QSA,PT,L]
    </IfModule>
~~~

#### 定时任务配置
- Linux执行Shell命令
```
# 定时取消未支付订单
php think jshop cancle

# 定时催付即将被取消的订单
php think jshop remind

# 定时签收已发货订单
php think jshop sign

# 定时评价已签收订单
php think jshop evaluate

# 定时完成已评价订单
php think jshop complete

# 定时取消拼团失败的订单
php think jshop pintuan_cancle

# 定时清理后台操作日志
php think jshop remove_op_log
```
注意1： **think** 必须指定到项目根目录下的 **think** 文件。  
注意2： Shell命令下的php确保版本在7.0.* ~ 7.3.*之间，其他php版本可能会出现未知错误。



