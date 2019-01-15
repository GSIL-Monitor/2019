var http = require('http');
var url  = require('url');
var fs = require('fs');
var host = '127.0.0.1';
var port  = 2018;
http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	console.log('request'+pathname + '收到')
	function show(path, status){
		var content = fs.readFileSync(path);
		res.writeHead(status,{'Content-Type':'text/html;charset=utf-8'});
		res.write(content);
		res.end();
	}

switch(pathname){
	//首页
	case '/':
	case '/home':
		show('./view/home.html',200);
		break;
	//about
	case '/about':
		show('./view/about.html',200);
		break;
	//404
	default:
		show('./view/404.html',404);
		break;
	}

}).listen(port,host)