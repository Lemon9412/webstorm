/**
 * Created by qiqi_ on 2016/10/10.
 */
var express = require("express");
var router = express.Router();
var dao = require("./../../dao/sysUser/sysUserDao.js");
var co = require("co");


router.post("/register",function(req,resp) {
    co(function *() {
        var userName = req.body.userName;
        var password = req.body.password;
        var user = yield dao.findUserByName(userName);
        if(user!=null) {
            resp.send({state:1});
        } else {
            yield dao.insertUser({userName:userName,password:password});
            var curUser = yield dao.findUserByName(userName);
            req.session.curUser = user;
            resp.send({state:2});
        }
    }).catch(function(e) {
        resp.send({state:0});
    });
});
module.exports = router;