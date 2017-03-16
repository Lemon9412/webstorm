/**
 * Created by qiqi_ on 2016/10/10.
 */
var express = require("express");
/*
Router:全局路由管理器*/
var route = express.Router();
//把当前模块的路由对象暴露出去
route.get("/getMethod",function(request,response) {
    var userName = request.query.userName;
    var password = request.query.password;
    console.log(userName);
    console.log(password);
    response.send({state:1});
});
module.exports = route;