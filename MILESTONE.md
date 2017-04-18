# ATM Server 入坑指南 

## 需求分析

### 基本功能

- v1.0.0 后台配置埋点信息，仿小程序数据自定义分析

## 技术选型

koa + Vue.js + json-server 

理念： 只做“前端”做的事，数据接口层由 json-server mock 数据

操作系统： win7
node 环境： Latest

## 第一天 v0.0.1

### 安装 koa

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

