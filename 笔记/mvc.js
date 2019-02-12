mvc是一种设计模式 



数据   （模型）
展示层 （视图）
用户交互（控制）


流程:
	用户和应用发生交互
	控制器的事件处理器被触发 
	控制器从模型中请求数据 并将其交给视图
	视图将数据呈现给用户












mvc和类
	创建类 给类添加属性 和方法  添加私有函数

事件和监听

	监听事件  取消事件 事件对象   委托事件  自定义事件

模型和数据
	mvc和命名空间
	构建对象的关系映射 orm
	原型继承
	
	添加ORM 属性
	持久化记录
	增加id支持
	寻址引用
	装载数据 
	直接嵌套数据
	通过ajax载入数据
	jsonp
	跨域请求的安全性


	向ORM中 添加记录
	本地存储 localStorage  sessionStorage

	给ORM添加本地存储
	将新纪录提交给服务器

控制器和状态

	模块模式
	全局导入 导出
	添加少量上下文
	
	抽象出 库
	
	文档加载完成后载入控制器
	访问视图
	委托事件
	状态机
	路由选择
	使用URL中的哈希
	检测哈希变化
	抓取ajax
	使用HTML5 history

视图和模板
	动态渲染视图
	模板
	模板 help()
	模板存储
	模型中的事件绑定


	模块的按需加载


使用文件
	获取文件信息
	文件输入
	
	拖拽
	复制粘贴
	读写文件
	上传文件
	进度条	

实时web
Socket.IO
WebSocket
速度对用户体验（UX）的影响非常大
 


 
用户体验和 心理学有关系吗   

只要网络卡慢  我就脾气暴躁





View（界面）触发事件--》Controller（业务）处理了业务，然后触发了数据更新--》不知道谁更新了Model的数据--》Model（带着数据）回到了View--》View更新数据


在MVC，当你有变化的时候你需要同时维护三个对象和三个交互，


分层设计

!科普 http://www.cnblogs.com/indream/p/3602348.html
数据绑定你可以认为是Observer模式或者是Publish/Subscribe模式，原理都是为了用一种统一的集中的方式实现频繁需要被实现的数据更新问题。

我们依然要解决的问题是用户交互与数据更新的问题，还有维护等等的问题。


!mvvm实现 https://www.cnblogs.com/kidney/p/6052935.html




代码约定
	assert 不知真就报错
		var assert = function(value, msg) {
		if ( !value )
		throw(msg || (value + " does not equal true"));
		};
		
	assertEqual 两个值不相等就报错

		var assertEqual = function(val1, val2, msg) {
		if (val1 !== val2)
		throw(msg || (val1 + " does not equal " + val2));
		};







第一章 
模型
	用来存放所有的应用对象  比如User模型

视图
	视图层是呈现给用户的 用户与之交互

控制器
	控制器是模型和视图之间的纽带


向模块化进军，创建类
	var Class = function(){
		var klass = function(){
			this.init.apply(this, arguments)
		}
		klass.prototype.init = function(){}
		return klass;
	} 
	var Person = new Class()
	Person.prototype.init = function(){
		//基于Person的实例做初始化
	}
	用法:
	var person = new Person;

给类添加方法
	// 直接给类添加静态方法
	Person.find = function(id){ /*...*/ };
	// 这样我们可以直接调用它们
	var person = Person.find(1);



	Person.fn = Person.prototype;
	Person.fn.run = function(){ /*...*/ };


extend中是静态属性和方法，include中是实例属性和方法。

　　当属性和方法与具体实例无关或是公用的时候，用静态属性和方法，否则用实例属性和方法
	
	var Person = new Class;
	Person.extend({
		find: function(id) {   },
		exists: functions(id) {  }
	 });
	var person = Person.find(1);
	
	
	var Person = new Class;
	Person.include({
		save: function(id) {   },
		destroy: functions(id) {  }
	} );
	var person = new Person;
	person.save();

	var Class = function (parent) {
	    var klass = function () {
	        this.init.apply(this, arguments);
	    };
	
	    if (parent) {
	        var subclass = function () { };
	        subclass.prototype = parent.prototype;
	        klass.prototype = new subclass;
	    }
	
	    klass.prototype.init = function () { };
	    klass.fn = klass.prototype;
	    klass.fn.parent = klass;
	
	    klass.proxy = function (func) {
	        var self = this;
	        return (function () {
	            func.apply(self, arguments);
	        });
	    };
	
	    klass.fn.proxy = klass.proxy;
	
	    klass.extend = function (obj) {
	        var extended = obj.extended;
	        for (var i in obj) {
	            klass[i] = obj[i];
	        }
	        if (extended) extended(klass)
	    };
	
	    klass.include = function (obj) {
	        var included = obj.included;
	        for (var i in obj) {
	            klass.fn[i] = obj[i];
	        }
	        if (included) included(klass)
	    };
	
	    return klass;
	};
	
	var Person = new Class;
	Person.include({
	    init: function (name, age) {
	        this.name = name;
	        this.age = Person.checkAge(age) ? age : null;
	    },
	    sayHello: function () {
	        console.log("Hi , My name is " + this.name + (this.age ? ", i am " + this.age + " years old this year" : ""));
	    }
	});

	Person.extend({
	    needWater: true,
	    checkAge: function (age) {
	        return age > 0 && age < 150;
	    }
	});
	
	var jim = new Person("Jim", 10);
	jim.sayHello();
	//output:Hi , My name is Jim, i am 10 years old this year
	
	var tom = new Person("Tom", -1);
	tom.sayHello();
	//output:Hi , My name is Tom

 
基于原型的类继承
	Dog.prototype = new Animal;


给“类”库添加继承
控制“类”库的作用域
添加私有函数
(function(){
var findById = function(){ /* ... */ };
Person.find = function(id){
if (typeof id == "integer")
return findById(id);
};
})();

 

第 三 章 模型与数据 
 
命名空间 
	数据操作和行为相关的逻辑都应当放入模型中 通过命名空间进行管理
	
	我们通过给对象添加属性来管理一个命名空间，这个命名空间可以是
	函数，也可以是变量
	var User = {
		records: [  ]// User 的数组数据就在命名空间 User.records 中
	};



对象关系映射ORM
	它可以用来做数据管理及用做模型   将模型实例和 HTML 元素绑定在一起，任何对实例的更改都会在界面中反映出来
	本质上讲，ORM 是一个包装了一些数据的对象层