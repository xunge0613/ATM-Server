# ATM Server 入坑指南 

[TOC]

## 需求分析

### 版本规划

#### v1.0.0 

功能点： 后台配置埋点信息，仿小程序数据自定义分析

功能拆分：

- 基础 koa2 服务器搭建 v0.0.1
- koa2 渲染静态模板页 v0.0.2
- 引入 ElementUI 实现表单组件 v0.0.3
- 引入 json-server mock 数据 v0.0.4 




## 技术选型

koa + Vue.js + json-server 

理念： 只做“前端”做的事，数据接口层由 json-server mock 数据

操作系统： win7
node 环境： Latest

## 开发模式

安排： 每天安排 1 小时的时间编码，预计完成 1.0.0 版本需要 21 天左右


## 第一天 v0.0.1

| 预期任务|      估时|    实际|
| :--------: | :--------:| :------: |
| 安装 koa  |   60min |  30min  |


### 安装 koa2

http://koajs.com/

#### 安装需求

> node 版本 > v7.6.0  for ES2015 and async function support.

由于操作系统是 windows，于是，下载客户端升级 node.js https://nodejs.org/en/ 

更新完毕 node.js 后，开始安装 koa

```  javascript
npm i koa 
```

然后添加官方提供的 hello world

``` javascript
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

运行 

``` javascript
node koa.js
```

> Hello World 



## 第二天 v0.0.2

| 预期目标 |  估时|  实际|
| :--------: | :--------:| :------: |
| koa2 展示静态 html 页面 |  15min | 60min|


严重超时： 花了较多时间研究了 koa 的样例 https://github.com/koajs/examples ，结果也没有能确定是否是 koa2 还是路由规则的问题。 于是先按照这篇教程上所写 https://chenshenhai.github.io/koa2-note/note/template/add.html ，实现了简单的模板引擎解析 
 
### koa2 展示静态 html 页面

#### 核心代码

> package.json
``` json
{
	"dependencies": {
		"koa": "latest",	
		"koa-route": "latest",
		"koa-logger": "latest",
		"koa-views": "latest",
		"path": "latest",
		"ejs": "latest"
	}
}
```

> app.js
``` javascript
 // 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
```

``` javascript
// 首页
app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})

```


>  ./views/index.ejs

``` html 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello ATM-Server</title>
</head>
<body>
	Hello ATM-Server
</body>
</html>
```

#### 运行效果

无论什么路由，都输出：
> Hello ATM-Server

## 第三天 v0.0.3 


| 预期目标 |  估时|  实际|
| :--------: | :--------:| :------: |
| async / await 语法学习 |  15min | 10min|
| demo 页加入 Vue.js, ElementUI |  20min | 5min|
| demo 页完成简单表单项 |  15min | 10min|

### async / await 练习

强烈推荐此教程，https://chenshenhai.github.io/koa2-note/note/start/async.html，简洁明了，比官方文档和样例容易上手的多。

### demo 页加入 Vue.js, ElementUI 

出于方便，直接使用外置 js 方式，引入了 Vue.js 以及 ElementUI ，参照了 ElementUI 的官方文档
- 如何安装： http://element.eleme.io/#/zh-CN/component/installation 

**注： 请避免使用 IE8 及以下浏览器**

### demo 页完成简单表单项

由于 ATM Server 最基础的功能实际就是一个表单，于是优先把表单组件放进来

- form 组件说明： http://element.eleme.io/#/zh-CN/component/form

### 记录

- 【记】ElementUI 提供了多套布局模式，包括栅格布局、分栏间隔、响应式布局、Flex 布局等等，大部分和 bootstrap 布局模式类似，多了个 Flex 布局方案，赞。
- 【问】目前的布局模式都只支持控制横向的间距，对于纵向的间距仍需要手写 CSS 实现。
- 【记】在组件的引用方面，页面里加载完 vue.js 以及 组件库.js 后，只需要在 script 里直接 new Vue 实例即可，无需再手动 import 对应组件。而之前我在开发公司的 Vue.js 项目时，同样是使用 webpack 打包生成一个组件库，但是页面 js 里还是先 import ahsInput from ahs.js 声明一下引入了何种组件。究其原因我认为可能是 Element UI 在 webpack 打包时的组件名与页面中使用时组件名是一致的。

## 第四天 v0.0.4


| 预期目标 |  估时|  实际|
| :--------: | :--------:| :------: |
| demo 页加入 lodash、gulp、webpack、babel |  20min | --min|
| 简单定义基础功能所需接口 API 文档 |  20min | --min|
| demo 页加入 json.server or 在线 mock 工具 mock 数据 |  20min | --min|
