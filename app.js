const Koa = require('koa');
const logger = require('koa-logger');
const path = require('path');
const route = require('koa-route');
const views = require('koa-views');
const app = new Koa();



// "database"

// var posts = [];


// middleware

app.use(logger());

// route middleware

// app.use(route.get('/', index));
// app.use(route.get('/list', index));

 // 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// route definitions

// 首页
app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})



 
 
app.listen(3000);

console.log("Server start: listening 3000")