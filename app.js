var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');

var sysUserRoute = require("./routes/sysUser/sysUserRoute.js");
var commonRoute = require("./routes/common/commonRoute.js");
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设定cookie的解析方式
app.use(cookieParser());
//设定静态网页的加载方式以及路径
app.use(express.static(path.join(__dirname, 'public')));
//设定session的配置项
app.use(session({
  cookie:{maxAge:1800000},//可以使用其他cookie的配置项
  name:"mySession",//cookie的名子
  resave:true,//是否重复保存
  secret: 'keyboard cat',
  saveUninitialized: false//是否每次请求都创建session的cookie
}));




//设定mongodb的配置项信息
var client = require('mongodb').MongoClient;
//设定客户端连接数据库的地址端口，用户名、密码等，在回调函数中返回database对象
client.connect("mongodb://127.0.0.1:27017/maoxian",function(error,database) {
  if(error) throw error;
  //将数据库对象加入到全局执行环境中，以便其他文件调用。
  global.mongodb = database;
  global.ObjectID = require('mongodb').ObjectID;
});



/*
//响应post请求某一个路径 第二个参数为拦截到制定请求后的回调函数
app.post("/login",function(req,resp) {
  //req 请求参数，封装了客户端请求信息
  //resp响应参数，可以调用响应参数响应客户端请求
  var query = JSON.parse(req.body.param);
  var userName = query.userName;
  var password = query.password;
  var ret = null;
  //{state:0}0用户名错误1密码错2成功
  if (userName=="zhangsan") {
    if (password == "123") {
      ret = {state:2};
    } else {
      ret = {state:1};
    }
  } else {
    ret = {state:0};
  }
  resp.send(ret);
});
*/
/*app.post("/login",function(req,resp) {
  //req 请求参数，封装了客户端请求信息
  //resp响应参数，可以调用响应参数响应客户端请求
  var query = req.body;
  var userName = query.userName;
  var password = query.password;
  var ret = null;
  //{state:0}0用户名错误1密码错2成功
  if (userName=="zhangsan") {
    if (password == "123") {
      ret = {state:2};
    } else {
      ret = {state:1};
    }
  } else {
    ret = {state:0};
  }
  resp.send(ret);
});*/



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/*app.get("/form",function(req,resp) {//req：请求对象 resp:请求模式
  var param = req.query;
  //var parm = req.body;
  //resp.send("大家好");
  console.log(param);
});*/

app.use("/sysUser",sysUserRoute);
// catch 404 and forward to error handler
//当前路径包含/teach时，由commonRoute做路由处理
app.use("/teach",commonRoute);
app.use(function(req, res, next) {
  var err = new Error('没找到');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
