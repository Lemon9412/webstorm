/**
 * Created by qiqi_ on 2016/10/10.
 */
var com = require('./../../commen/common.js');
exports.findUserByName = function(name) {
    return mongodb.collection("sys_user").find({userName:name}).limit(1).next();
}
exports.insertUser = function(user) {
    return mongodb.collection("sys_user").insert(user);
}