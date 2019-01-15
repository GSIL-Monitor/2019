var express = require('express');
// app => 等于 http.createServer
var app = express();
var swig = require('swig');


//静态托管
app.use('/public',express.static(__dirname + '/public'));

//动态文件 
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.get('/',function(req,res,next){
	 
	res.render('index')
 })

 


var server = app.listen(2222,"localhost",function () {
    var host = server.address().address;
    var port =  server.address().port;
    console.log("应用的访问地址http://%s:%s",host,port);
});