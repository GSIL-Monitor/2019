//第一种
// 使用 request.url 判断网址
var express = require("express");
var http = require("http");
var app = express();
app.use(function(request, response, next) {
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the homepage!\n");
  } else {
    next();
  }
});
app.use(function(request, response, next) {
  if (request.url == "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("about ");
  } else {
    next();
  }
});
app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});
http.createServer(app).listen(1337);




//第二种
//路径有效 后面才执行
 var express = require('express');
 var http = require('http');
 var app = express();
 app.use('/home',function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('we');
 });
 app.use('/about',function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('about');
 });
 app.use(function(req,res){
  res.writeHead(404,{'Content-Type':'text/plain'});
  res.end('404');
 });
 http.createServer(app).listen(1377);