/**
 * Created by qiqi_ on 2016/10/9.
 */
var util= require("util");
var commen = require("./commen.js");
commen.sayhello();
console.log(commen.name);
util.log("输出日志");
function Child(name,age) {
    this.name = name;
    this.age = age;
}
Child.prototype = new Parent();
Child.prototype.sayHello = function() {
    console.log(this.name+"说大家好");
}

function Parent() {

}
Parent.prototype.run = function() {
    console.log("我在跑步");
}
var cl = new Child("zhangsan",18);
cl.sayHello();
cl.run();