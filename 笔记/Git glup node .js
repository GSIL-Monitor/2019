Less是一门CSS预处理语言，它扩展了CSS语言，增加了变量，Mixin，函数等特性，使CSS更易维护和扩展。 

写less文件 gulp把文件转换成css
1 file change (main.css)



sublimeserver  把页面架到了localhost
环境变量就是操作系统提供的系统级别的用于存储变量的地方
系统变量指的是所有用户共享的变量  




github+git
	master 托管原文件
	gh-pages 托管部署文件



node 是JavaScript运行环境  
	不是js文件  也不是框架：把一些预先写好的功能 挂载到一个单独的文件当中 供其他的程序去调用
	node只能运行Ecmascript         js：es bom dom

nvm node版本管理工具
npm 包管理工具
	三个组成部分：
		网站 （平台）是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。

		注册表 是一个巨大的数据库，保存了每个包（package）的信息。

		CLI (操作或搜索) 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。



node.js 轻内核 (本身没有什么功能 所有的功能都需要功能包提供) 

退出命令行 .exit

demo.js
	var http = require("http");
		var server= http.createServer(function(request, response) {
		  var requesturl = request.url;
		  switch(requesturl){
		  	case '/signin':
		  	  signin(request, response);
		  	 break;
		  	case '/post':
		  	  post(request, response);
		  	 break;
		 	default:
		 	response.writeHead(404,{});
		 	response.end();
		 	break;
		  }  
		});
		
		server.listen(2333,function(error){
			console.log('成功监听');
		}); 
		
		function signin(request, response){
			console.log('登录页面');
			response.end();
		}
		function post(request, response){
			console.log('表单提交');
			response.end();
		}
		

	
gulp.js 基于流的自动化管理工具  自动任务运行器 自动完成文件的测试 部署 
	gulp 启动 效果 实现了实时预览  同步滚动  同步操作  焦点只能有一个  输入同步 
	可以同步测试多个浏览器    browsersync.io集成在gulp