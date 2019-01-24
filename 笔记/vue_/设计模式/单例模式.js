单例模式
	小型代码库
	管理静态变量
	惰性单例
	透明单例
    用代理实现单例模式
    使用命名空间
    使用闭包封装私有变量
    惰性单例





单例模式
	 小明版
	用命名空间防止变量名冲突

	var xiaoming = {
		getid:function(id){
			return document.getElementById('id')
		},
		this.getid(id).style[key]=value //this指向xiaoming
	}


	小型代码库
		var A = {
			Util:{  //公用模块
				util_method1:function(){}
				util_method2:function(){}
			},
			Tool:{  //工具模块
				tool_method1:function(){}
				tool_method2:function(){}
			}
		}
		//使用
		A.Util.util_method1()
	
	管理静态变量
		var Conf = (function(){
			//私有变量
			var conf = {
				MAX_NUM:100,  //静态变量要大写
				MIN_NUM:1,
				COUNT:1000
			}
			//返回取值器对象
			return {
				//取值器方法
				get:function(name){
					return conf[name] ? conf[name] : null
				}
			}

		})()
		var  count = Conf.get('COUNT')
		console.log(count);  //1000

	惰性单例
		惰性单例的意思是，只有在用户需要用到这个单例对象时，才去创建它，而不是在系统启动的时候，就把所有单例对象创建好。

		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>Document</title>
		 
		</head>
		<body>
		 <h1>惰性单例</h1>
		<p>惰性单例指的是在需要的时候才创建对象实例</p>
		<p>通用的惰性单例示例</p>
		<button id="loginBtn">登录</button>
		<script>
		     var createLoginLayer = function(){
		              var div = document.createElement("div");
		              div.innerHTML = "我是登录悬浮框";
		              div.style.display = "none";
		              document.body.appendChild(div);
		              return div;
		    };
		    
		   var getSingle = function(fn){
		               var result;
		               return  function(){
		                    return result || (result = fn.apply(this,arguments))
		        }
		    }
		 
		  var createSingleLoginLayer = getSingle(createLoginLayer );
		 
		document.getElementById("loginBtn").onclick = function(){
		       var loginLayer = createSingleLoginLayer ();
		       loginLayer.style.display = "block";
		}
		</script>
		
		
		 
		
		</body>
		</html>/*


小曾版

单例模式
	实现单例模式  用一个变量来标志是否为某个类创建过对象 如果创建过 则之间返回该对象 
	使用场景: 线程池 全局缓存 window  
		var SingLeton = function(name){
			this.name = name;	
		}
		SingLeton.prototype.getName = function(){
			alert(this.name)
		}
		SingLeton.getInstance = (function(){
			var instance = null;
			return function(name){
				if(!this.instance){ // 如果为空就创建一个
					this.instance = new SingLeton(name)
				}
				return this.instance;
			}
		})()
		var a = SingLeton.getInstance("tom1")
		var b = SingLeton.getInstance("tom2")
	
		alert(a === b)


    透明单例
    	var CreateDiv  = (function(){
    		var instance;
    		var CreateDiv = function(html){
    			if(instance){
    				return instance;
    			}
    			this.html = html;
    			this.init();
    			return instance = this;

    		}
    		CreateDiv.prototype.init = function(){
    			var div = document.createElement("div")
    			div.innerHTML = this.html;
    			document.body.appendChild(div);

    		}
    		return CreateDiv;
    	})();
    	var a = new CreateDiv("tom1")
    	var b = new CreateDiv("tom2")
    	alert(a === b)

    用代理实现单例模式
    	var CreateDiv = function(html){
    		this.html = html;
    		this.init()
    	}
    	CreateDiv.prototype.init = function(){
    		var div = document.createElement('div')
    		div.innerHTML = this.html;
    		document.body.appendChild(div);
    	};

    	var proxySingLetonCreateDiv = (function(){
    		var instance;
    		return function(html){
    			if(!instance){
    				instance = new CreateDiv(html);
    			}
    			return instance
    		}
    	})();

    	var a = new proxySingLetonCreateDiv("tom1");
    	var b = new proxySingLetonCreateDiv("tom2");



    使用命名空间
    	var MyApp = {}
    	MyApp.namespace = function(name){
    		var pars = name.split(".")
    		var current = MyApp;
    		for(var i in parts){
    			if(!current[parts[i]]){
    				current[parts[i]] = {}
    			}
    			current = current[parts[i]];
    		}
    	}
    	MyApp.namespace('event');
    	MyApp.namespace('a.b.c');
    	console.dir(MyApp)

    	效果:
    	 var MyApp = {
    	 	event:{},
    	 	a:{
    	 		b:{
    	 			c:{}
    	 		}
    	 	}
    	 }


    使用闭包封装私有变量
    	把私有变量封装在闭包产生的作用域中 只暴露一些接口跟外界通讯 
    	var user = (function(){
    		var __name = "tom",
    			__age = 29;
    		return {
    			getUserInfo:function(){
    				return __name+"-"+__age
    			}
    		}
    	})()

    惰性单例 

    	登录浮窗
    		点击登录按钮  才开始创建浮窗 	
    		每次点击都会创建 频繁的创建和删除是不好


		<!DOCTYPE html>
	    <html lang="en">
	    <head>
	        <meta charset="UTF-8">
	        <title>Document</title>
	     
	    </head>
	    <body>
	 
	    <button id="loginBtn">登录</button>
	    <script>
	         var createLoginLayer = function(){
	            
	              var div = document.createElement("div");
	              div.innerHTML = "我是登录框";
	              div.style.display = "none";
	              document.body.appendChild(div);
	              return div;
	          }
	         
	
	        //创建登录浮窗的方法fn 被当做参数传给getSingle  fn可以是createLoginLayer 和 createscript  createXHR
	        //之后getSingle返回一个新的函数 并用一个变量result来保存fn的计算结果 result在闭包中 所以不会销毁 
	        var getSingle = function(fn){
	          var result;
	          return function(){
	             return result || (result = fn.apply(null, arguments))
	          }
	        }
	        //当result不为空时，直接返回result，让结果为空时，返回fn的执行结果，并且赋值到result以备下次可以直接返回result而不用再执行fn
	
	
	        var createSingleLoginLayer = getSingle(createLoginLayer)
	
	
	        document.getElementById("loginBtn").onclick = function(){
	               var loginLayer = createSingleLoginLayer();
	               loginLayer.style.display = "block";
	        }
	
	        var createSingleIframe = getSingle(function(){
	          var iframe = document.createElement('iframe')
	          document.body.appendChild(iframe)
	          return iframe;
	        })
	
	        document.getElementById('loginBtn').onclick = function(){
	          var loginLayers = createSingleIframe()
	          loginLayers.src = "http://baidu.com"
	        }
	    </script>
	    </body>
	    </html>
	    /*



		例子: 
			var singleton = function(fn) {
			    var result;  
			    return function() {
			        return result || (result = fn.apply(this, arguments));  //this指向window  这样写是为了在有参数的时候 正常运行
			    }
			}
			//传进去的回调函数，也就是fn，也能访问到singleton里面的result变量。那么，createMask函数就能实现根据单例变量'result'是否有值，来决定是否调用fn产生一个result值
			var result = singleton(
			    function(a, b) {
			        return a + b;
			    }
			)(1, 2);
			
			结果: 3 
			
			
			var a = 1; //声明变量永远返回undefined
			
			a.b = 2; //赋值语句永远返回值			



