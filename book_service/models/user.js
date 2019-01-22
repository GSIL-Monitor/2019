/*因为所有的用户操作都应该建立在 用户这个数据集的基础之上 所以需要在modles文件夹下新建user.js作为数据集*/
var mongoose = require('../common/db');
//用户数据集
 
/*
/*有一个 String 类型的 name，String 数组类型的 friends，
/*name: String,  friends: [String],
*/

var user = new mongoose.Schema({
    username: String,
    password: String,
    userMail: String,
    userPhone: String,
    userAdmin: Boolean,
    userPower: Number,
    userStop: Boolean
})
//用户的查找方法
user.statics.findAll = function(callBack){
    this.find({},callBack);
};
//使用用户名查找的方式
user.statics.findByUsername = function(name,callBack){
    this.find({username:name},callBack);
};
//登录匹配是不是拥有相同的用户名和密码并且没有处于封停状态
user.statics.findUserLogin = function(name,password,callBack){
    this.find({username:name,password:password,userStop:false},callBack);
};
//验证邮箱和电话以及用户名找到用户
user.statics.findUserPassword = function(name,mail,phone,callBack){
    this.find({username:name,userMail:mail,userPhone:phone},callBack);
};

var userModel= mongoose.model('user',user);
module.exports = userModel;