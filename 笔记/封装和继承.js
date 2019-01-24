 

*****************************************阮一峰**************************************

把两个属性封装在一个对象里面
	var cat1 = {}; // 创建一个空对象

　　　　cat1.name = "大毛"; // 按照原型对象的属性赋值

　　　　cat1.color = "黄色";

	var cat2 = {};

　　　　cat2.name = "二毛";

　　　　cat2.color = "黑色";



解决重复问题
	function Cat(name,color) {
	
	　　　　return {
	
	　　　　　　name:name,
	
	　　　　　　color:color
	
	　　　　}
	
	　　}

	var cat1 = Cat("大毛","黄色");

　　var cat2 = Cat("二毛","黑色");



构造函数模式
	function Cat(name,color){
	　　　　this.name=name;
	　　　　this.color=color;
	　　}
	var cat1 = new Cat("大毛","黄色");

　　var cat2 = new Cat("二毛","黑色");

　　alert(cat1.name); // 大毛

　　alert(cat1.color); // 黄色



prototype模式
	function Cat(name,color){

　　　　this.name = name;

　　　　this.color = color;

　　 }

　　Cat.prototype.type = "猫科动物";

　　Cat.prototype.eat = function(){alert("吃老鼠")};



　　var cat1 = new Cat("大毛","黄色");

　　var cat2 = new Cat("二毛","黑色");

　　alert(cat1.type); // 猫科动物

　　cat1.eat(); // 吃老鼠




    Cat.prototype = new Animal();
    改进
    Cat.prototype = Animal.prototype;
　　 再改进  加空函数做中介


*******************************************************************************




设计模式   张容铭--------------------------------------------------------------------------

function checkName(){}     //验证用户名
function checkEmail(){}    //验证邮箱
function checkPassword(){} //验证密码

对象
	var checkObj = {
		checkName: function(){}
		checkEmail: function(){}
		checkPassword: function(){}
	}
	checkObj.checkName()


函数
	var checkObj = function(){
		return{
			checkName: function(){}
			checkEmail: function(){}
			checkPassword: function(){}
		}
	}
	var a = checkObj()
	a.checkName()


类
	var checkObj = function(){
		this.checkName=function(){}
		this.checkEmail=function(){}
		this.checkPassword=function(){}
	}
	var a = new checkObj()
	a.checkName()

原型
	var checkObj = function(){}
	checkObj.prototype = {
		checkName: function(){}
		checkEmail: function(){}
		checkPassword: function(){}
	}
	var a = new checkObj()
	a.checkName()
	a.checkEmail()


链式调用
	var checkObj = {
		checkName: function(){ return this; }
		checkEmail: function(){ return this; }
		checkPassword: function(){ return this; }
	}
	checkObj.checkName().checkEmail().checkPassword()


	var checkObj = function(){}
	checkObj.prototype = {
		checkName: function(){ 
			return this;
		}
		checkEmail: function(){ 
			return this;
		}
		checkPassword: function(){ 
			return this;
		}
	}
	var a = new checkObj()
	a.checkName().checkEmail().checkPassword()




封装类

	面向对象编程就是将你的需求抽象成一个对象 分析其特性和动作   添加属性和方法
		
		通过给 this(指向当前对象)变量添加属性来实现对类添加属性
		
			var Book= function(id, bookname, price){
				this.id = id;
				this.bookname = bookname;
				this.price = price;
			}
		
		也可以在类的原型添加属性和方法
		两种方式:
			给原型对象的属性赋值
				Book.prototype.display = function(){
					//展示这本书
				}
		
			将一个对象赋值给原型对象
				Book.prototype = {
					display:function(){}
				}
				var book = new Book(10,'js设计模式', 50)
				console.log(book.price)
	
		这样我们就将所需要的方法和属性都封装在 我们抽象的BOOK类里面了

属性和方法封装

	var Book = function(id, bookname, price){
		//私有属性
		var num = 1;
		//私有方法
		function checkId(){
	
		}
	
		//私有和公有 特权方法都可以访问
		this.getName = function(){};
		this.getPrice = function(){};
		this.setName = function(){};
		this.setPrice = function(){};
	
		//对象公有属性
		this.id = id;
		//对象公有方法
		this.copy = function(){}
		//构造器
		this.setName(name);
		this.setPrice(price);
	}

	//类静态公有属性 (对象不能访问)
	Book.ischinese = true
	//类静态公有方法 (对象不能访问)
	Book.resettime = function(){
		console.log('new time')
	  }
	
	Book.prototype = {
		//公有属性
		isJSBook:false,
		//公有方法
		display:function(){}
	}
	var b = new Book(11, 'js设计模式', 50);
	console.log(b.isJSBook)  //false
	console.log(Book.ischinese)  //true


	通过new 关键字实例化对象时 执行了一遍类的函数 所以通过调用特权方法自然就可以初始化对象的一些属性了




闭包实现封装属性 和 方法 
	闭包是有权访问另一个函数作用域中变量的函数 即在一个函数内部创建另一个函数
	我们将这个闭包作为创建对象的构造函数 这样它既是闭包又是可实例对象的函数  即可以访问到类函数作用域中的变量


	var Book = (function(){
		var bookNum = 0;
		function checkBook(name){}
		function _book(newid, newName, newPrice){
			var name, price;
			function checkId(id){}
			this.getName = function(){};
			this.getPrice = function(){};
			this.setName = function(){};
			this.setPrice = function(){};
			
			//对象公有属性
			this.id = id;
			//对象公有方法
			this.copy = function(){}
			//构造器
			this.setName(name);
			this.setPrice(price);


		}
		_book.prototype = {
			//静态公有属性
			isJSBook:false,
			//静态公有方法
			display:function(){}
		}

		return _book;
	})()





创建对象

	原型模式 通过克隆来创建对象   
		实现的关键是 提供clone方法  Object.create可以用来克隆对象


		var Plane = function(){
			this.blood = 100;
			this.attackLevel = 1;
			this.defenseLevel = 1
		}

		var plane =  new Plane()
		plane.blood = 500;
		plane.attackLevel = 10;
		plane.defenseLevel = 7;

		var clonePlane = Object.create(plane);
		console.log(clonePlane)




原型继承 
		JS就是使用原型模式来搭建整个面型对象系统的
		
		所有的js对象 都是从某个对象上克隆而来的  根对象是 Object.prototype
		
			var obj1 = new Object()  //执行这两句 内部引擎就会从 Object.prototype上克隆一个对象出来
			var obj2 = {}
			console.log(Object.getPrototypeOf(obj1) === Object.prototype)
			console.log(Object.getPrototypeOf(obj2) === Object.prototype)

		模拟new 
		例子1
			function objectFactory() {
		
		    	var obj = new Object(),                         // 声明一个中间对象，该对象为最终返回的实例
		
		    	Constructor = [].shift.call(arguments);         //获得第一个参数（就是构造函数）
		
		    	obj.__proto__ = Constructor.prototype;          //将实例的原型指向构造函数的原型
		
		   		 var ret = Constructor.apply(obj, arguments);    //ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向obj， 实例对象可以访问构造函数中的属性
		
		    // 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
	    	if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
	    	    return ret;
	    	}
	
	    	// 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
	    	return res;
		
			};


		 例子2
			 function Person(name){
			 	this.name = name;
			 }
	
			 Person.prototype.getName = function(){
			 	return this.name;
			 }
	
			 var  objectFactory = function(){
			 	var obj = new Object(),    //从 object.prototype 克隆一个对象                      
			    Constructor = [].shift.call(arguments);         
			    obj.__proto__ = Constructor.prototype;          
			   	var ret = Constructor.apply(obj, arguments);  //借助外部传入的构造器 给obj设置属性
			   	return typeof ret === 'object' ? ret : obj;   //确保构造器总是返回一个对象
			 }
	
			 var a = objectFactory(Person, "tom");
			 console.log(a.name)
		 	console.log(Object.getPrototypeOf(a) === Person.prototype)


		原型编程 当一个对象无法响应某个请求时 会把该请求委托给自己的原型
		基于原型链的委托机制 就是原型继承的本质
			var obj = {name: "sea"};

			var A = function(){}
			A.prototype = obj;

			var a = new A();
			console.log(a.name) //sea



this 
	可以用一个变量保存div节点的引用
	document.getElementById('div1').onclick = function(){
		var that = this;  //保存div的引用
		var callback = function(){
			alert(that.id)  // div1
		}
		callback()
	}


丢失this
var  = {
	myName:"sea",
	getName:function(){
		return this.myName;
	}
}
console.log(obj.getName())  //sea
var getName2 = obj.getName; //指向全局变量
console.log(getName2())    //undefined  