var express = require("express");
var app = express();
var data = require("./data.json");
var error = require('./error.json');
var url = require('url');
var bodyparser = require('body-parser');

 
app.use(bodyparser.urlencoded({
	extended: true
}));
app.all('/',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();

})

app.get('/',function(req,res){
	var url_path = url.parse(req.url,true);
	console.log(url_path)
	var query = url_path.query;
	if(query.name===data.name){
		res.status(200).json(data);

	}else{
		res.status(500).json(url_path);
		 
	}
})

app.post('/',function(req,res){
	var name = req.body.username;
	if(name===data.name){
		res.status(200).json(data);
	}else {
		res.status(500).json(error);
	}
})


app.listen(3000,function(){
	console.log(3000);
})
//http://localhost:3000/?name=iwen