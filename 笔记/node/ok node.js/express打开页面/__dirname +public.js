//例一
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/img'));
app.listen(8080);

///public目录下有index.html文件
///127.0.0.1:8080/index.html
///img目录下有1.jpg
///127.0.0.1:8080/1.jpg
 

//例二
//引入express
var express = require("express");
var app = express();
//将目录传递给中间件express.static
app.use(express.static("/img"));
//设置主目录返回
app.get("/",function (req,res) {
    res.send("Hello World");
});
 
var server = app.listen(8082,"localhost",function () {
    var host = server.address().address;
    var port =  server.address().port;
    console.log("应用的访问地址http://%s:%s",host,port);
}); // http://127.0.0.1:8082就代表img文件夹  直接在后面输文件名就行了 
    //http://127.0.0.1:8082/3.jpg

//例三
let express = require('express');
let path =require('path');
let app = express();
let fs =require('fs');
// app.use(express.static(__dirname+'/'));//不加点
app.use(express.static('/img'));//当前打开目录下的文件
// app.use(express.static(path.join(__dirname)));path.join()添加一个将参数用/链接起来。
app.get('/',(req,res)=>{
    // fs.readFile(__dirname +'/index.html',(err,data)=>{
    //     console.log(data);
    //     res.set({'Content-type':'text/html'})
    //     res.send(data);
    // }) 
    res.send('1');
})
app.listen(3000,(err)=>{
    console.log('start');
});



这个要在 f12 里查看文件 /public/css/main.css
app.use('/public',express.static(__dirname + '/public'));