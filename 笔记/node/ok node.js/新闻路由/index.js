var express = require("express");
var app = express();
var router = require('./router.js')

app.use('/',router);


app.listen(3000,function(){
	console.log(3000)
})