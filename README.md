# midWay
 node 中间层
#### 1.通过路由可访问其他后端提供的接口；
#### 2.通过sequelize orm框架 可访问数据库；
#### 3.集成socket.io可实现即时推送（demo未添加）；
#### 4.通过调用其他数据接口 后端渲染页面；

## 文件说明

**config**

* 数据库配置文件 引用 [sequelize](http://www.nodeclass.com/api/sequelize.html) orm框架

**controller**

* 路由逻辑文件

**models**

* 数据库映射model 可通过[sequelize-auto](https://www.npmjs.com/package/sequelize-auto) 连接数据库生成

## 运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev
```

## 调试接口

浏览器打开 

``` js
//该接口 需要访问数据库 需要有MySQL数据表
http://localhost:3000/api/user/All

//该接口 访问远程服务器
http://localhost:3000/api/music/Music?id=317921676

```
以上均为get方式的接口可以通过浏览器直接访问 

非get方式接口 请通过第三方工具访问 这里推荐谷歌的PostMan

接口写法请参照controller/demo.js
