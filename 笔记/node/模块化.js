
目录
	对象
	自执行函数
	放大模式
	放大模式应用
	私有和公有


优点：挂在到对象上 避免了命名空间的污染
缺点：可以任意修改

var module = {
	name:'sky',
	age:20
}
module.name = 'ime'


加个结界 外部不可见

var user = (function(){
	var name = 'sky';
	var age = 20;
	function getname(){ //不想修改就放到闭包里 想修改就放到变量里
		return name;//这里不能写成 this.name 会挂载到全局
	}
	return {
		getname:getname,
		age:age}
		//返回对象
		//user = {getname:getname, age:age}
})()
console.log(user.getname()); //name不能修改
console.log(user.age= 30);  // age可以修改


//放大模式
// 可拓展  到以后想添加东西就用module2
var module1 = (function(){
	var name = 'sky';

	function getname(){
		return name;
	}
	return {
		getname:getname
		//module1.getname:function getname(){}
		 }
		// 导出为模块 给module2使用  
		//module.exports = {getname:getname} 
})()

var module2 = (function(module){
	var age = 18;
	//函数声明
	function getage(){
		return age;
	}
	//函数表达式
	var hello = function(){
		return "hello";
	}


	return{
		getname2:module1.getname,
		getage:getage,
		hello:hello
	}

	//module2 = {
	// getname2:module1.getname,
	// getage:getage
	// }
})(module1 || {}) //如果module1不存在 传入空对象 
console.log(module2.getname2());
console.log(module2.getage());
console.log(module2.hello());


例子
	demo文件夹
		demo1.js
		demo2.js
	
	
	//demo1.js
	var demo2 = require('./demo2.js')
	console.log(demo2.a)
	
	//demo2.js 
	var a = 10;
	module.exports = {
		a: a
	}



//放大模式应用
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="jquery-3.3.1.min.js"></script>
	</head>
	<body>
	<div class='hello'></div>
	
	
	<script>
	
	/*
	1.数据
	2.操作数据
	3.操作view层
	*/
	
	var currentData = {
		view:{
			classes:".hello",
			values:"<h1>你好！</h1>"
		}
	}
	
	
	// 操作数据 data
	// 获取class
	// 获取值
	// return getclass  getdata
	
	var data = (function(currentData){
		function getclass(){
			return currentData.view.classes;
		}
		function getvalues(){
			return currentData.view.values
		}
	
		return{
			getclass:getclass,
			getvalues:getvalues
		}
	})(currentData);
	
	
	var view = (function($,data){
		function getview(classes){
			return $(classes);
		}
		function setview(classes){
			return getview(data.getclass()).html(data.getvalues())
		}
		setview();
	})(jQuery,data);
	
	
	</script>
	</body>
	</html>
	


私有和公有
 
	var module1 = (function( ){
	    //私有属性
	    var name = "sky";
	    //共有属性
	    var age = 20;
	    //公有方法
	    function getname(){
	        return name;
	    }
	    //私有方法
	     function hello(){
	        return "hello";
	    }
	    //暴露出来就能访问  没有暴露就私有
	    return{
	        getname:getname,
	        age:age  
	    }
	})( );	



require 
1.模块化
	1.模块
	2.模块化：
		1.nodejs中
			commonjs规范
		2.在前端有一些库，可以帮我们管理文件与文件的关系
			1.requirejs
				requirejs是AMD规范
				AMD:AMD是requirejs在推广过程中对模块化定义的规范化产出
				解决的问题：
					1.实现js文件的异步加载，避免加载失去响应
					2.管理模块之间的依赖关系，便于编写和维护
				使用步骤：
					1.引入文件
				 
				 
					/当前文件夹 
						js文件夹
							apps
								index.js
								hello.js
							libs
								require.js
							main.js	
						index.html
					
					
					//index.html
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<title>Document</title>
							<script data-main="js/main.js" src="js/libs/require.js"></script>
						</head>
						<body>
							<div class="hello"></div>
						</body>
						</html>
					//main.js
					//配置
					requirejs.config({
						//配置基础路径
						baseUrl:"js/",
						paths:{
							"index":"apps/index",
							"hello":"apps/hello",
							"jquery":"libs/jquery"
						}
					})
					
					//加载
					requirejs(["index","hello","jquery"],function(index,hello,$){})
										
				 
					3.定义模块
					//index.js
						define(["jquery"],function($){
							console.log($)
							$(".hello").html("hahahaha")
						})
					4.引入第三方组件
						注意：如果要使用模块化(require),所有的文件必须都支持define定义模块的方案

						shim可以解决依赖关系
							如果不支持define定义模块，可以通过shim解决问题

			 
			3.seajs和requirejs的区别
				require：提前加载
				seajs：延迟加载





百度音乐接口文档
百度音乐全接口:
http://www.wwtliu.com/sxtstu/music/baidu


获取列表
list.php
http://www.wwtliu.com/sxtstu/music/baidu/list.php?type=1&count=1
参数：type：类型，count：数量

type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜

搜索
search.php

参数：content：搜索内容

播放
play.php

参数：mid：歌曲id

歌词
lrc.php

参数：mid：歌曲id




http://chromecj.com/utilities/2018-12/1752.html