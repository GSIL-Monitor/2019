锚点

字符串String

变量-----

Array---

对象！-----
创建对象---

面向对象------

原型链--- 

继承---

函数  ----
函数定义-----

执行上下文--- 

变量对象


正则---

json---


https://www.cnblogs.com/-bluesky/


JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。
例如 node.js、 Apache CouchDB 和 Adobe Acrobat。
JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格

 DOM API-->应用    OO   OOP   function  异步
 平台支撑技术  平台和技术支撑应用

原型编程 
	是 面向对象编程 的一种风格。它的 类 没有明确的定义，只是通过向其它的类中添加属性和方法来得到它，甚至偶尔使用空对象来创建类。

	简单来说，这种类型的风格允许创建一个 object。没有定义其class。

程序是怎么编译的，变量是怎么查找的，js 引擎是什么，引擎和作用域的关系又是什么




好的角度 可以提升80%的智商
	HTML&CSS：
		对Web标准的理解（结构、表现、行为）、浏览器内核、渲染原理、依赖管理、兼容性、
		CSS语法、层次关系，常用属性、布局、选择器、权重、盒模型、Hack、CSS预处理器、
		CSS3、Flexbox、CSS Modules、Document flow、BFC、HTML5（离线 & 存储、Histoy,多媒体、WebGL\SVG\Canvas）；		
	JavaScript：
    	数据类型、运算、对象、Function、继承、闭包、作用域、事件、Prototype、RegExp、JSON、Ajax、DOM、BOM、
    	内存泄漏、跨域、异步请求、模板引擎、模块化、Flux、同构、算法、ECMAScript6、Nodejs、HTTP、

	其他：
  		主流MVVM框架(React\Vue\Angular)、Hybrid App\React Native\Weex、TypeScript、RESTFul、WEB安全、前端工程化、依赖管理、性能优化、
    	重构、团队协作、可维护、易用性、SEO、UED、前端技术选型、快速学习能力等




数据类型
	数字 
	字符串String
	布尔值 &&与  ||或  ！非
	null undefined
	数组Array
	对象Object

	由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
	var person={firstname:"John", lastname:"Doe", id:5566};
	变量
	var a; // 申明了变量a，此时a的值为undefined
	var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
	var s_007 = '007'; // s_007是一个字符串
	var Answer = true; // Answer是一个布尔值true
	var t = null; // t的值是null        

//性能优化
console.time("timer");
for(var i=0;i<10000;i++){}
console.timeEnd("timer");

算法 

	快速排序
		function quickSort(arr,l,r){
		  if(l < r){
		    var i = l, j = r, x = arr[i];
		    while(i<j){
		      while(i<j && arr[j]>x)
		        j--;
		      
		      if(i<j)
		        //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
		        arr[i++] = arr[j];
		      
		      while(i<j && arr[i]<x)
		        i++;
		      
		      if(i<j)
		        //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
		        arr[j--] = arr[i];
		    }
		    arr[i] = x;
		    
		    quickSort(arr, l, i-1);
		    quickSort(arr, i+1, r);
		  }
		}
	
	回文串
		function palindrome(str){
		  // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
		  var re = /[\W_]/g;
		  // 将字符串变成小写字符,并干掉除字母数字外的字符
		  var lowRegStr = str.toLowerCase().replace(re,'');
		  // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
		  if(lowRegStr.length===0) return true;
		  // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
		  if(lowRegStr[0]!=lowRegStr[lowRegStr.length-1]) return false;
		  //递归
		  return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
		}
	

注释
  
  //    /**/   ``反引号在~下面     





字符串String
	
	ES6模板字符串
	var name = '小明';
	var age = 20;
	var message = `你好, ${name}, 你今年${age}岁了!`;
	alert(message);	

	操作字符串  大小写铭感
	
	var s = 'Hello, world!';
	s.length; // 13
	s[12]; // '!'
	s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
	
	使用指定的分割符  split 
	"Webkit Moz O ms Khtml".split()    //[ "Webkit Moz O ms Khtml" ]
	"Webkit Moz O ms Khtml".split("")  //[W,e,b,k,i,t, ,M,o,z, ,O, ,m,s, ,K,h,t,m,l]
	"Webkit Moz O ms Khtml".split(" ") //[ "Webkit", "Moz", "O", "ms", "Khtml" ]
	
	var myString = "Hello World. How are you doing?";
	var splits = myString.split(" ", 3);  //["Hello", "World.", "How"]
	                            
 

	

	大写小写
	var s = 'Hello';
	s.toUpperCase(); // 返回'HELLO'
	var lower = s.toLowerCase();
	
	indexOf() 首次出现的位置
	var s = 'hello, world';
	s.indexOf('world'); // 返回7
	s.indexOf('World'); // 没有找到指定的子串，返回-1   
	
	
	substring() 指定索引区间的子串 

	var s = 'hello, world'
	s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
	s.substring(7); // 从索引7开始到结束，返回'world'


	字符串转数字 
	parseInt("2")
	Number("23")
	+"1"

	判断是不是数字
	var a ="123";
	var b ="abc";
	console.log( a-0 ); //123
	console.log( b*1 ); //NAN

	返回引索处的字符
	charAt( 3 )
	

条件循环
	if
		var age = 20;
		if (age >= 6) {
		    console.log('teenager');
		} else if (age >= 18) {
		    console.log('adult');
		} else {
		    console.log('kid');
		}
	三元表达式
	表达式 (expr1) ? (expr2) : (expr3)
	Number(a)>Number(b)?a:b; 
	

	for
		var k=prompt('请输入数字')
		var sum = 1;
		for(var i = 1;i<=k;i++){
		    sum *=i;
		}
		alert(sum);
		
		过滤掉对象继承的属性
		var o = {
		    name: 'Jack',
		    age: 20,
		    city: 'Beijing'
		};
		for (var key in o) {
		    if (o.hasOwnProperty(key)) {
		        console.log(key); // 'name', 'age', 'city'
		    }
		}
	
	
	while
	
		var n = 0;
		do {              //至少执行一次
		    n = n + 1;
		} while (n < 100);
		  	








map  es6新的数据类型

	js中键必须是str  所以有了map
	Map是一组键值对的结构，具有极快的查找速度
	var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
	m.get('Michael'); // 95
	
	var m = new Map(); // 空Map
	m.set('Adam', 67); // 添加新的key-value
	m.set('Bob', 59);
	m.has('Adam'); // 是否存在key 'Adam': true
	m.get('Adam'); // 67
	m.delete('Adam'); // 删除key 'Adam'
	m.get('Adam'); // undefined
	
	
	
	set集合
	重复元素在Set中自动被过滤：
	var s = new Set([1, 2, 3, 3, '3']);
	s; // Set {1, 2, 3, "3"}
	s.add(4);
	s; // Set {1, 2, 3, 4}
	s.add(4);
	s; // 仍然是 Set {1, 2, 3, 4}
	s.delete(3);      


迭代器  iterable  for ....of
	Array、Map和Set都属于iterable类型。

	for ... in 遍历对象的属性名称 
	数组 也是 对象，它的每个元素的索引被视为一个属性。
	当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：
	var a = ['A', 'B', 'C'];
	a.name = 'Hello';
	for (var x in a) {
   	    console.log(x); // '0', '1', '2', 'name'
   	}

   	for ... in循环将把name包括在内，但Array的length属性却不包括在内。

	for ... of循环则完全修复了这些问题，它只循环集合本身的元素：
	
	var a = ['A', 'B', 'C'];
	a.name = 'Hello';
	for (var x of a) {
	    console.log(x); // 'A', 'B', 'C'
	}	


forEach()
	var a = ['A', 'B', 'C'];
	a.forEach(function (element, index, array) {
    // element:指向当前元素的值  //A
    // index: 指向当前索引       // 0
    // array: 指向Array对象本身  // A,B,C
    console.log(element + ', index = ' + index);
	});


	var s = new Set(['A', 'B', 'C']);
	s.forEach(function (element, sameElement, set) {
		console.log(element);		//A
	    console.log(sameElement);  	//A
	    console.log( set);  		//[object Set]
	});
	
	
	var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
	m.forEach(function (value, key, map) {
	    console.log(value);		//x
	    console.log(key);  		//1
	    console.log(map);  		//[object Map]
	});	




高程 第四章
4.1 基本类型和引用类型的值
按值访问
	Undefined  Null Boolean Number String
引用访问
	array  元组 Function  对象

4.11 动态属性

	不能给基本类型添加属性  不能保存
		var name = "Nicholas"; 
		name.age = 27; 
		alert(name.age); undefined 
	
	引用对象添加值  可以保存
		创建一个对象 将其保存在变量中 对象不被删除  则属性一直在 	
		var person = new Object(); 
		person.name = "Nicholas"; 
		alert(person.name); //"Nicholas" 

4.12 复制变量的值

	值传递
		复制基本类型的值 会创建新的值
	引用传递
		传递的是指针
	
4.13 传递参数
	函数参数的传递都是值传递  参数只能按值传递  
		function setName(obj){  
		  obj.name="a";  
		  obj=new Object();  》》》锚点
		  obj.name="b";  
		}  
		  
		var person=new Object();  
		setName(person);  
		alert(person.name);    //"a" 
	
	向参数传递基本类型
		会被复制给一个局部变量 arguments对象中的一个元素
	
	向参数传递引用类型
		会把内存中的地址复制一份 给局部变量
	》》》	实际上 在函数内部重写obj时 这个变量引用的就是一个局部变量了 这个局部变量 会在函数执行完毕后立即销毁
		有些开发者错误的认为：在局部作用域中修改的对象会在全局作用域中反映出来就是按引用传递


4.14 检测类型  
	 
	对象是否继承自构造函数的原型  实际上是检测了对象的继承关系 而不是检测创建对象的构造函数
	语法 ：object instanceof constructor
	 
	
	instanceof 是通过比较prototype来实现的。
	
	function A(){};
	var a = new A();
	a instanceof A;//true
	var b={};
	b instanceof A;//false
	b.__proto__ = A;
	b instanceof A;//true
 

	var strPrimitive = "I am a string"; 
	typeof strPrimitive; // "string" 
	strPrimitive instanceof String; // false
	基本类型不是对象
	所有引用类型是Object的实例   原型链的顶端就是Object对象
	






4.2 执行环境 
	每个函数都有自己的执行环境 当 执行流 进入一个函数时 函数的环境就会被推入一个环境栈中 
	而在函数执行之后 栈将其环境弹出  把控制权交给之前的环境  程序中的执行流正是由这种方便的机制控制着
 
    没有块级作用域 
    	if for 中的{}  无效 
    	function 中{}  有效



垃圾回收  
 找出不再继续使用的变量 释放其占用的内存
	
	标记清除  标记清除算法将“不再使用的对象”定义为“无法达到的对象”。简单来说，就是从根部（在JS中就是全局对象）出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收
	引用计数  (很少用到） 就是看一个对象是否有指向它的引用。如果没有其他对象指向它了，说明该对象已经不再需了
	解除引用  方法：变量=空 目的：为了让值脱离执行环境 

高程 第五章：引用类型
	对象是某个引用类型的实例  对象由构造函数来创建
	构造函数本身是一个函数 为了创建新对象的目的而定义的

object ---
创建Object实例 两种方法
	1. new操作符  var person = new Object()
	2. 对象字面量 var person = {}


Array---

数组属性 

	constructor  

	prototype
数组Array：也是键值 索引是键 项是值


创建数组
var arr = new Array()
var arr = []

var colors = ["red", "blue", "green"];  
colors.length = 2;  /length 会删除或增加元素
alert(colors[2]); //undefined 
检测数组
 Array 优于instanceof
	返回True
		Array.isArray([]);
		Array.isArray([1]);
		Array.isArray(new Array());
		// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
		Array.isArray(Array.prototype); 
	返回False
		Array.isArray();
		Array.isArray(true);
		Array.isArray(false);
		Array.isArray({ __proto__: Array.prototype });
转换方法
	常用toString()
	
		toString()返回由数组中的每个值的字符串形式  拼接成的 以逗号分隔的长字符串
		
		valueOf() 返回数组对象本身
		console.log(array.valueOf() === array);   // true
		
		alert(数组) 弹出数组 在后台调用toString

join()   指定分隔符  返回字符串
		toLocaleString() toString() valueOf() 都以逗号分隔
		var colors = ["red", "green", "blue"]; 
		alert(colors.join(",")); //red,green,blue 
		alert(colors.join("||")); //red||green||blue  指定分隔符

栈方法
Last-In-First-Out  后进先出 的数据结构   电梯
push() 末尾添加 
pop()  末尾删除

	var colors = ["a", "b"]; 
	colors.push("c");  
	var item = colors.pop();  
	alert(item); 

队列方法
	First-In-First-Out 先进先出 的数据结构   传送带
	push 末尾添加
	shift 前端删除

	var colors = new Array();  
	var count = colors.push("red", "green");  
	var item = colors.shift();  
	alert(item); //"red" 

	unshift 前端添加

	push()  末尾添加若干元素 arr.push('A', 'B');
	pop()   删除最后一个     arr.pop();
	
	unshift() 头部添加若干元素 arr.unshift('A', 'B');
	shift() 删除第一个       arr.shift();

反转 

 reverse() 不够灵活  才有了 sort()  
 返回值： 数组
 
 流程： sort 调用toString 转换每一项  然后比较字符串  
	function compare(value1, value2) { 
	 	if (value1 < value2) { 
	 		return -1; 
	 	} else if (value1 > value2) { 
	 		return 1; 
	 	} else { 
	 		return 0; 
	 	} 
	} 

	var values = [0, 15, 5, 10, 5]; 
	values.sort(compare);
	alert(values); //0,1,5,10,15 


合并
concat() 连接两个数组 末尾添加元素 返回一个新数组 

		var arr = ['A', 'B', 'C'];
		arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
	




slice()  截取  数组切片  不改变原数组
	var arr = [1,2,3,4,5,6];
	arr.slice(0, 3);   1,2,3
	arr.slice(3); // 从索引3开始到结束: [4,5,6]
	arr.slice(-6) 从倒数第六个开始 到结束 [1,2,3,4,5,6]

splice()  添加或删除数组中的元素
	splice(index，删除的数量，item，item)
	splice(2,1,"abc")  第三个位置删除一项 添加abc

		var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
		// 从索引2开始删除3个元素,然后再添加两个元素:
		arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
		arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
		 
		arr.splice(2, 2);  
		arr; // ['Microsoft', 'Apple', 'Oracle']
		// 只添加,不删除:
		arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
		arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']



位置方法
	indexOf 知道元素 查下标  从前到后

	lastindexof 从后到前

迭代方法
	every  检测元素 每个都符合条件 返回True
	some   检测元素 有一个符合条件 返回True
	filter 检测元素  返回符合条件 的元素数组 find 返回符合元素  findindex 返回符合元素的索引
 

forEach 每一项运行回调函数 
map 每一项的平方根 返回数组

归并方法
	reduce()   http://www.cnblogs.com/shuiyi/p/5058524.html

数组求和
	var arr = [1, 3, 5, 7, 9];
	arr.reduce(function (x, y) {
	    return x + y;
	}); // 25

	  

	赋值索引会改变原值
		var arr = ['A', 'B', 'C'];
		arr[1] = 99;
		arr; // arr现在变为['A', 99, 'C']
	
	索引超出范围 会改变与数组大小
		var arr = [1, 2, 3];
		arr[5] = 'x';
		arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
	
		var arr = [1, 2, 3.14, 'Hello', null, true];
		arr.length; // 6
		arr.length = 2;  给length赋值会改变数组大小
		arr变为[1, 2]








Date------------------------------------------------------------

用getHours()和getMinutes()查看时间

	var d = new Date();
	d.valueOf()                 1529315675377    
	d.getTime()	                1529315675377
	d.toLocaleString()          2018/6/18 下午5:54:35
	d.toLocaleTimeString()      下午5:54:35   
	d.toLocaleDateString()      2018/6/18
	
	d.toDateString()            Mon Jun 18 2018
	d.toTimeString()            17:54:35 GMT+0800 (中国标准时间)
	d.toString()                Mon Jun 18 2018 17:54:35 GMT+0800 (中国标准时间)
	d.toUTCString()             Mon, 18 Jun 2018 09:54:35 GMT
	创建日期 
		function myFunction(){
		var d = new Date();
                                                    			
		var x = document.getElementById("demo");
		x.innerHTML=d;
	    }
	
	年月日
		var d = new Date();
		var n = d.getFullYear();
		var y = d.getMonth();
		var d = d.getDate();
	时分秒
	function startTime(){
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();// 在小于10的数字前加一个‘0’
		m=checkTime(m);
		s=checkTime(s);
		document.getElementById('txt').innerHTML=h+":"+m+":"+s;
		t=setTimeout(function(){startTime()},500);
	}
	function checkTime(i){
		if (i<10){
			i="0" + i;
		}
		return i;
	}
	 
	
		
Math----------------
Math.random()  0-1 随机数

Math.round()   四舍五入   
Math.round(Math.random()*10);

Math.ceil()    向上取整
Math.floor()   向下取整


Math.pow(2,8) //2的8次方
Math.sqrt(9)  //9的平方根








变量------------------------------------------------------------
	
	编译
	
	在传统编译语言中 程序在执行之前会经历三个步骤统称为   编译
		
		分词/词法分析
			这个过程会把字符串分解成有意义的代码块 这些代码块被称为词法单元--var，a，=，5，
		解析/语法分析
			这个过程是将词法单元流 (数组) 转换成一个由元素逐级嵌套 的程序语法结构的树  这个树被称为 抽象语法树
			     var    
	              |
	         ------------    抽象语法树    
	         |          |
	         a          5
	    代码生成
	    	将抽象语法树 转换为可执行代码的过程  叫代码生成   
	    	通过某种方法将抽象语法树转化为机器指令 分配内存 创建a变量 并将5存储在a中
	
	作用域 的朋友
		引擎
			从头到尾负责整个程序的编译及执行过程
		编译器
			负责 语法分析 及 代码生成

			分词
			语法分析 词法单元流 ----> 抽象语法树
			代码生成 语法树    ---->  可执行机器码
		作用域
			负责收集并维护所有声明的标识符 组成的一系列查询  确定当前执行的代码对这些标识符的访问权限
			编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。 是词法作用域的核心内容

	执行 var a = 2   引擎认为这是完全不同的两段代码 一个由编译器在编译时处理 一个由引擎在运行时处理
		1. var a 编译器会询问作用域 同一作用域有没有a  有就忽略声明  没有就让作用域在当前声明新的变量 命名为a
		2. a = 2 编译器会为引擎生成运行时所需的代码 引擎运行时会首先询问作用域中有没有a变量 在什么位置 找到就赋值  没有就向父级作用域中查找 一直向上找 找不到就报错 
		  
		 


	引擎和作用域的对话
		执行流程
		function foo(a){
			console.log(a);

		}
		foo(2);

		1. 对foo进行右引用 
		2. 对a 进行左引用    a = 2
		3. 对console进行右引用
		4. 对a 进行右引用    console.log(a)




	词法作用域
		作用域 是一套规则，据名称查找变量的一套规则
		 
		作用域有两种主要工作模型：词法作用域和动态作用域。
		
		大部分标准语言编译器的第一个工作阶段叫作词法化。
		 
		词法作用域是 声明的位置 决定的 
		函数的词法作用域都只由函数被 声明 时所处的位置决定

		作用域给引擎提供了位置信息   引擎通过位置信息找到标识符的位置

		作用域链比喻成一个建筑  一层是当前作用域  顶层是全局作用域

	
	 LHS RHS   var a = 2
		对变量进行赋值 LHS。    
		获取变量的值   RHS。   
	
		function foo(a) {
		   // 这里隐式包含了 a = 2 这个赋值，所以对 a 进行了 LHS 查询
		   var b = a;
		   // 这里对 a 进行了 RHS 查询，找到 a 的值，然后对 b 进行 LHS 查询，把 2 赋值给 b
		   return a + b; 
		   // 这里包含了对 a 和 b 进行的 RHS 查询
		}
		
		var c = foo(2);
		// 这里首先对 foo 进行 RHS 查询，找到它是一个函数，然后对 c 进行 LHS 查询把 foo 赋值给 c


//


Global对象 
所有在全局作用中定义的属性和函数 都是global对象的属性 

web浏览器将全局对象作为window对象的一部分加以实现 因此在全局作用域中的所有变量和函数 就都成为了window的属性


	全局变量是全局对象的属性
	局部变量是调用对象的属性

	let 
		只在本地有效
		{
			let a = 10;
			var b = 1;
		}
		
		a //报错
		b //1
		
		for循环的计数器，就很合适使用let命令。
		for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值
			for (let i = 0; i < 10; i++) {
			  // ...
			}
			
			console.log(i);
			// ReferenceError: i is not defined

	作为属性的变量
		var a = 10;
		alert(window.a)
		alert(this.a)
		
	
	作用域链
		JavaScript是基于词法作用域的语言
		在不包含嵌套的函数体内，作用域链上有两个对象，第一个是定义函数参数和局部变量的对象，第二个是全局对象
	变量解析
		当js需要查找 变量a的值的时候 从内向外一层层  依次查找这条链上的对象   没有就报错
	

对象！-----------------------------------------------------------
	一个对象就是一系列属性的集合 一个属性的值可以是函数
	基本上 JavaScript 里的任何东西都是对象，而且都可以被储存在变量里
	对象字符串到值的映射 其他叫法 散列 字典 关联数组
	 	JavaScript对象还可以从一个称为原型的对象继承属性。对象的方法通常是继承的属性。这叫“原型式继承”

	var xiaoming = {
	    name: '小明',
	    age: 18,
	    sayhello: function(){
	    	alert("hello");
	    } };
	
	    对象.属性
	    对象.方法

	查
	xiaoming.name; // '小明'
	xiaohong['middle-school']; // 'No.1 Middle School'
	xiaohong['name']; // '小明'
	 
	增改
	xiaoming.age = 18; // 新增一个age属性
	
	删
	delete xiaoming.age;     // 删除age属性
	delete xiaoming['name']; // 删除name属性
	delete xiaoming.school;  // 删除一个不存在的school属性也不会报错
	
	delete 操作符删除一个不是继承而来的属性   
	delete 删除不是用 var 关键字声明
	
	 
	检测 拥有某一属性 用 in
		'name' in xiaoming; // true 可能是继承    
	
	检测 自身拥有的属性  hasOwnProperty() 
		xiaoming.hasOwnProperty('name'); // true	



	遍历对象的键值
		var x = {
			    name: '小明',
			    age: 18,
			    sayhello: function(){
			    	alert("hello");
			    } };
		for(var i in x){console.log(i,x[i])};
	

		
	创建对象--- 
		对象直接量   
			对象直接量是由若干 键/值对 组成的映射表
			var empty={};//没有任何属性的对象
			var point={x:0,y:0};//两个属性
			var book = {
				"for" : "abc"   for是保留字 必须用引号
			}
			

		用new创建对象
			function Person(name, age, sex) {
			    this.name = name;
			    this.age = age;
			    this.sex = sex;
			}
			var rand = new Person("Rand McKinnon", 33, "M");
			var ken = new Person("Ken Jones", 39, "M");
			rand.name="123"
			console.log(rand.name)


		Object.create 方法
			var Animal = {
			  type: "Invertebrates",  
			  displayType : function() {  
			    console.log(this.type);
			  }
			}
			var fish = Object.create(Animal);
			fish.type = "Fishes";
			fish.displayType(); 








		高程 第六章
		6.2 工厂模式
			这种模式抽象了创建具体对象的过程。开发人员发明了一种函数，用函数来封装以特定接口创建对象的细节。
			
			function createPerson(name,age,job){
			    var o = new Object();
			    o.name = name;
			    o.age = age;
			    o.job = job;
			    o.sayName = function(){
			        console.log(this.name);
			    }
			    return o;
			}
			var person1 = createPerson('junyan','25','FE');
			工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）
		
		构造函数模式
			所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
			可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
		
			function Cat(name,color){
				this.name=name;
				this.color=color;
				}
				var cat1 = new Cat("大毛","黄色");
				var cat2 = new Cat("二毛","黑色");
				alert(cat1.constructor == Cat); //true
				alert(cat2.constructor == Cat); //true
			 与工厂模式存的不同：
			
				没有显式的创建对象；
				
				直接将属性和方法赋给了this对象；
				
				没有return语句；
			
			要创建Person新实例，必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤：
			
				创建一个新对象；
				
				将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
				
				执行构造函数中的代码（为这个新对象添加属性）；
				
				返回新对象；
			
			
		将构造函数当作函数
			任何函数，只要通过new操作符来调用，那它就可以作为构造函数；

			不使用new操作符调用，属性和方法都被添加给window对象

		

		属性名包含特殊字符，就必须用''括起来：
			var xiaohong = {
		    	name: '小明',
		    	'middle-school': 'No.1 Middle School'
			};

		遍历对象所有属性 <-----锚点ctrl+D
			Object.keys(obj) 返回对象所有的键名 数组形式
				var obj = { 0: 'a', 1: 'b', 2: 'c' };
				console.log(Object.keys(obj));  
				//['0', '1', '2']
			getOwnPropertyNames()  返回所有属性	
				var arr = ["a", "b", "c"];
				console.log(Object.getOwnPropertyNames(arr)); 
				// ["0", "1", "2", "length"]

		使用 this 将传入函数的值赋给对象的属性。
			function Car(make, model, year) {
			  this.make = make;
			  this.model = model;
			  this.year = year;
			}
 
		
	

			
    高程 第六章
	6.1 对象属性 
		
		一个对象的属性可以被解释成一个附加到对象上的变量
		
		属性名只能是字符串  属性值可以是任意类型  访问不存在的属性不报错，会返回undefined
	
  
	
	 
	对象属性描述符的类型分为两种：数据属性和访问器属性
        
        数据属性
			·可写（writable attribute），表明是否可以设置该属性的值。
			·可枚举（enumerable attribute），表明是否可以通过for/in循环返回该属性。
			·可配置（configurable attribute），表明是否可以删除或修改该属性。

			要修改属性默认的特性，必须使用ES5的Object.defineProperty()方法。这个方法接收三个参数：属性所在的对象、属性的名字和一个描述符对象。在调用这个方法时，如果不指定，configurable、enumerable和writable特性的默认值都是false；


		访问器属性
			
	    	enumerable（可枚举）  configurable（可配置） getter  setter 
			
			访问器属性不能直接定义，必须使用Object.defineProperty()来定义。
			

		定义多个属性
			Object.defineProperty()
				功能:
				 直接在一个对象上定义一个新属性 或修改现有属性
				
				语法: Object.defineProperty(obj, prop, descriptor)
				obj: 需要被操作的目标对象
				prop: 目标对象需要定义或修改的属性的名称
				descriptor: 将被定义或修改的属性的描述符
				
				writable（可写）、enumerable（可枚举）和 configurable（可配置）

				例1
				var obj = new Object();
				
				Object.defineProperty(person, 'name', {
				    configurable: false, //不可删除
				    value: 'Jake'   
				})
				
				delete person.name   // false
				
				例2
				var o = {};
				
				o.a = 1;
				// 等同于 :
				Object.defineProperty(o, "a", {
				  value : 1,
				  writable : true,
				  configurable : true,
				  enumerable : true
				});
				
				
				// 另一方面，
				Object.defineProperty(o, "a", { value : 1 });
				// 等同于 :
				Object.defineProperty(o, "a", {
				  value : 1,
				  writable : false,
				  configurable : false,
				  enumerable : false
				});
				

var person = {
    name: 'TOM'
}
Object.defineProperty(person, 'name', {
    writable: false
})

person.name = 'alex';				
console.log(person.name); // Jake 修改失败






			Object.defineProperties()
				功能:
				方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。
				
				语法: Object.defineProperties(obj, props)
				obj: 将要被添加属性或修改属性的对象
				props: 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置
				
				var person = {}

				Object.defineProperties(person, {
				    name: {
				        value: 'Jake',
				        writable: true,
				        configurable: true
				    },
				    age: {
				        get: function() {
				            return this.value || 22
				        },
				        set: function(value) {
				            this.value = value
				        }
				    }
				})
				
				person.name   // Jake
				person.age    //22

		读取属性的特性
			Object. getOwnPropertyDescriptors()
				功能:
				所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。
				
				语法: Object.getOwnPropertyDescriptors(obj)
				obj: 需要查找的目标对象
				
				var person = {
				    name: '张三',
				    age: 18
				}
				var desc = Object.getOwnPropertyDescriptors(person, 'name');
				console.log(desc)




	




	对象特性（object attribute）：
		·对象的原型（prototype）指向另外一个对象，本对象的属性继承自它的原型对象。
		·对象的类（class）是一个标识对象类型的字符串。
		·对象的扩展标记（extensible flag）指明了（在ECMAScript 5中）是否可以向该对象添加新属性。
	
	三类对象
		内置对象
			包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String
		宿主对象
			浏览器对象 Window Document
		自定义对象
			自己定义
	
	两大属性
		·自有属性（own property）是直接在对象中定义的属性。
		·继承属性（inherited property）是在对象的原型对象中定义的属性。



	
调用栈 执行顺序：
	function c() {
	    console.log('c');
	}
	
	function b() {
	    console.log('b');
	    c();
	}
	
	function a() {
	    console.log('a');
	    b();
	}
	
	a();
	这段代码运行时，首先 a 会被加入到调用栈的顶部，然后，因为 a 内部调用了 b，紧接着 b 被加入到调用栈的顶部，当 b 内部调用 c 的时候也是类似的。在调用 c的时候，我们的调用栈从下往上会是这样的顺序：a -> b -> c。在 c 执行完毕之后，c 被从调用栈中移除，控制流回到 b 上，调用栈会变成：a -> b，然后 b 执行完之后，调用栈会变成：a，当 a 执行完，也会被从调用栈移除。


2.面向对象------

(function(){
	//私有静态成员
	var user = "";

	//私有静态方法
	function private_Static_Method(){}

	box = function(value){
		//私有成员
		var private_user = value; // var定义私有  this定义公有

		//私有方法
		function private_method(){}

		//公有方法 因为能访问私有成员  也可以说是特权函数 也可以说是实例方法
		this.get_user = function(){
			return user;
		}

		//公有成员
		this.user = 1;
	}

	//公有共享方法 
	box.prototype.shared_method = function(){};

	//公有共享属性
	box.prototype.shared_property = 1

	//公有静态方法
	box.static_method = function(){};

	//公有静态成员
	box.static_property =1;
})();

es6
(function(){
	 // 私有静态成员
    var user = "";
    
    // 私有静态方法
    function privateStaticMethod(){}

    class box{
        // 私有成员，等同于 constructor内部，提案写法，stage-3
        #privateUser = 1;

        // 公有成员，等同于 constructor内部，提案写法，stage-3
        user1 = 1;

        constructor() {
            // 私有成员
            var privateUser = value;

            // 这个是私有方法
            function privateMethod(){
            }


            // 公有方法，因为能访问私有成员，也可以说是特权函数，也可以说是实例方法
            this.getUser = function(){
                return user;
            };

            // 公有成员
            this.user2 = 1;
        }   
        // 公有共享属性
        sharedProperty: 1

        // 公有共享方法
        sharedMethod() {}
        
        // 公有静态方法
        static staticMethod1() {}
        
        // 公有静态成员，提案写法，stage-3
        static staticProperty1 = 1;        


    }
    // 公有静态方法，和上面写法等同
    Box.sharedMethod2 = function() {};
    // 公有静态成员，和上面写法等同
    Box.staticProperty2 = 1;


})();




	构建函数和对象实例
	    
		当一个对象实例需要从类中创建出来时，类的构造函数就会运行来创建这个实例。这种创建对象实例的过程我们称之为实例化
	
实例化对象的函数称为构造函数
	
	定义 Teacher() 构造器函数  
		function Teacher(){}
	-----------------------------------------
	通过函数定义 人
	
	实例化salva
		function createperson(name){
			var obj  = {};   声明一个对象
			obj.name = name;
			obj.greeting = function(){
			alert("hi! "+this.name);
		
		}
		return obj;
		}
		var salva = createNewPerson('salva');  	//实例化salva
		salva.name;
	---------------------------------------
	函数创建实例对象person1
		function Person(name) {
		  this.name = name;
		  this.greeting = function() {
		    alert('Hi! I\'m ' + this.name + '.');
		  };
		}
		var person1 = new Person('Bob');  	//创建实例对象
		person1.name
	---------------------------------------
	Object()构造函数   
	
	
	 -->  var person1 = new Object({
		  name : 'Chris',
		  age : 38,
		  greeting : function() {
		    alert('Hi! I\'m ' + this.name + '.');
		  }
		});
		person1.name
	
	使用create()方法
		基于现有对象创建新的对象实例。
		var person2 = Object.create(person1);
	--> //继承了上面的person1 
		person2.name
	 
	-------------------------------------------


3.对象原型

	每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链
	
	
	原型链中的方法和属性没有被复制到其他对象
	原型链就是继承链 
	
	所有通过 对象直接量 创建的 对象 都具有同一个原型对象  可以通过Object.prototype 获得对原型对象的引用
	



	只要创建新函数 就为该函数创建prototype属性 是一个指针 指向 构造函数创建出来的实例的原型对象  使用原型对象的好处是可以让所有的实例共享它的属性和方法
	
	理解原型对象
		实例对象和原型对象之间的关系 通过__proto__来连接的 和构造函数没有直接关系 
		
		isprototypeof()    a是否在b的原型链上
		instanceof()       对象是否继承自构造函数的原型 
		getPrototypeOf()   获取person1对象的原型 Object.getPrototypeOf(person1) == Person.prototype //true
		
		getOwnPropertyNames()  返回所有自身属性的 属性名组成的数组
		
		要获取某个对象的某个属性时 先找自己  再找原型对象
			实例属性会屏蔽原型对象中的同名属性  设置为空也不行 必须delete 
			例子
			function Person(){
				Person.prototype.name = "Nicholas";
			};
			var person1 = new Person();
			person1.name = "Greg";
			alert(person1.name);
			delete person1.name;
			alert(person1.name);

	原型与 in 操作符
		"name" in person1         无论该属性存在实例中还是原型中 只要存在就返回true
		hasOwnProperty()          属性只存在于实例中才返回true   person1.hasOwnProperty( "name")   属于Object.prototype下的属性
		hasPrototypeProperty()   属性只存在于原型中才返回true   alert(hasPrototypeProperty(person1, "name")); //true


	 
	原型的动态性
      实例只保存了访问原型属性的指针 不缓存副本  所以原型中添加新属性可以立即在所有实例中反映出来
	  调用构造函数时会为实例添加一个指向最初原型的指针  实例中的指针仅指向原型 不指向构造函数

 
	

	组合构造函数和原型模式
		解决原型模式的问题-共享引用类型值的属性
		构造函数模式用于定义实例属性(不共享)，而原型模式用于定义共享的属性和方法
			function Person(name,age,job){
			  this.name = name;
			  this.age = age;
			  this.job = job;
			  this.friends = ["a", "b"];
			}
			Person.prototype = {
			  constructor:Person,
			  sayName:function(){
			    console.log(this.name);
			  }
			}
			var a = new Person("jack",18,"programmer");
			var b = new Person("james",20,"designer");
			a.friends.push('c');
			console.log(a.friends);//a,b,c
			console.log(b.friends);//a,b
			console.log(a.friends === b.friends); //false
			console.log(a.sayName === b.sayName); //true
		

	寄生构造函数模式(不推荐）
    稳妥构造函数模式(不推荐）
	 
例子	
	            
	  function Person(name) {
	    this.name = name;
	    this.greeting = function() {
	      alert('Hi! I\'m ' + this.name + '.');
	    };
	  }
	  Person.prototype.a = function() {
		console.log("a")
		}
	   
	  var person1 = new Person('Bob');     
	  person1.valueOf()
	  
	 Person(name)
		prototype
			constructor
			__proto__
	
	
	
		      继承于
	person1---> Person ----> Object
	person1对象 的原型对象是 Person	 
	对象的原型对象  =   构造函数的prototype属性
 

	
	
	person1的构造器的名字  
		person1.constructor.name  //"Person"
			
		每个对象实例都具有 constructor 属性，它指向创建该实例的构造器函数
			
			person1.constructor == Person.prototype.constructor
			person1.constructor == Person
			Person===Person.prototype.constructor
	 
	   

    Person.prototype.a==person1.a  //true

	person1.__proto__===Person.prototype                             //true
	person1.__proto__.constructor===Person.prototype.constructor     //true
	person1.__proto__.__proto__===Person.prototype.__proto__         //true
	Person.prototype.__proto__ ===Object.prototype
	              



	

	每一个对象都有原型对象  原型对象提供construction  用construction获得构造函数
	
		被构造函数创建的实例对象的 [[prototype]] 指向 func 的 prototype 属性。Object.prototype 属性表示Object的原型对象。
	
	
		当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索
	
		原型对象  构造函数的prototype对象 站在new出来对象的角度去看原型对象
		站在构造函数的角度去看原型属性
		
	
	
	总结：
	
		构造函数可以实例化对象
		构造函数里的prototype  是构造函数的prototype对象    构造函数.prototype
		构造函数里的prototype里有一个construction构造器 这个构造器指向的就是自己 所在的原型对象所在的构造函数
		实例对象的原型对象（__proto__）指向的是 该构造函数的原型对象  
		构造函数的原型对象（prototype）中的方法可以被实例对象直接访问






constructor
	function Person(name) {
	    this.name = name;
	}
	var p = new Person('jack');
	console.log(p.constructor === Person) // true
	 
	Person.prototype = {   //对象直接量方式定义的对象其构造器（constructor）指向的是根构造器Object，Object.prototype是一个空对象{}
	    getName: function() {}
	}
	var p = new Person('lili');
	console.log(p.constructor === Object) // true
	 
	Person.prototype = function(){
	    return this.name;
	}
	var p = new Person('joy');
	console.log(p.constructor === Function) // true
 

prototype
	https://blog.csdn.net/shimazhuge/article/details/52230560
	function定义的对象有一个prototype属性，使用new生成的对象就没有这个prototype属性
	
	原型对象其实就是普通对象(Function.prototype除外,它是函数对象，但它很特殊，他没有prototype属性(前面说道函数对象都有prototype属性))。
	
	

	原型和原型链是JS实现继承的一种模型。
	原型链的形成是真正是靠__proto__ 而非prototype
	凡是通过new Function()创建的对象都是函数对象 
	其他的都是普通对象。Object、Function、Number、Boolean、String、Array、RegExp、Error、Date是JS自带的函数对象。
	函数对象有一个原型属性prototype，而普通对象这没有原型属性prototype。这是函数对象和普通对象的一个重要区别。
	
	
	console.log(Number.__proto__ === Function.prototype);  // true
	console.log(Boolean.__proto__ === Function.prototype); // true
	console.log(String.__proto__ === Function.prototype);  // true
	console.log(Object.__proto__ === Function.prototype);  // true
	console.log(Function.__proto__ === Function.prototype); // true
	console.log(Array.__proto__ === Function.prototype);   // true
	console.log(RegExp.__proto__ === Function.prototype);  // true
	console.log(Error.__proto__ === Function.prototype);   // true
	console.log(Date.__proto__ === Function.prototype);    // true
	
	
	Function.prototype.__proto__ === Object.prototype	 
	
	console.log(typeof Function.prototype) // function
	console.log(typeof Object.prototype)   // object
	console.log(typeof Number.prototype)   // object
	console.log(typeof Boolean.prototype)  // object
	console.log(typeof String.prototype)   // object
	console.log(typeof Array.prototype)    // object
	console.log(typeof RegExp.prototype)   // object
	console.log(typeof Error.prototype)    // object
	console.log(typeof Date.prototype)     // object
	console.log(typeof Object.prototype)   // object
	 
	console.log(Function.constructor === Function);
	console.log(Function.prototype.constructor === Function);
	console.log(Object.constructor === Function);
	console.log(Object.prototype.constructor === Object);




原型链--- 
	原型链是一种关系 实例对象和原型对象之间的关系  是通过__proto__来联系的   

	function fn(){}
	var o = =new fn()
	o.__proto__ = fn
	o.__proto__.__proto__ = Object
	o.__proto__.__proto__.__proto__ =null
	
	var arr = [];
	arr > Array.prototype > Object.prototype > null
	
	var o = new Object();
	o > Object.prototype > null
	
	var Person  = function(){}
	var p = new Person();
	p > Person.prototype >Object.prototype > null	
	
	
	原型链查找
	function person(name) {
	    this.name = name;
	    this.greeting = function() {
	      alert('Hi! I\'m ' + this.name + '.');
	    };
	  }
	var p = new person('Bob');     
	  p.valueOf()
	console.log(p.ssss) 已经有了ssss属性   只是没有赋值 




4.继承---
	__proto__是为了实现继承, prototype是为了定义一些公用属性和方法.  所有的__proto__都指向构造函数的prototype
	Teacher() 从Person()的原型对象里继承方法
	Teacher.prototype = Object.create(Person.prototype);
	
	/**
	每一个函数对象（Function）都有一个prototype属性，并且只有函数对象有prototype属性，因为prototype本身就是定义在Function对象下的属性。当我们输入类似var person1=new Person(...)来构造对象时，JavaScript实际上参考的是Person.prototype指向的对象来生成person1。另一方面，Person()函数是Person.prototype的构造函数，也就是说Person===Person.prototype.constructor（不信的话可以试试）。
	
	在定义新的构造函数Teacher时，我们通过function.call来调用父类的构造函数，但是这样无法自动指定Teacher.prototype的值，这样Teacher.prototype就只能包含在构造函数里构造的属性，而没有方法。因此我们利用Object.create()方法将Person.prototype作为Teacher.prototype的原型对象，并改变其构造器指向，使之与Teacher关联。
	
	任何您想要被继承的方法都应该定义在构造函数的prototype对象里，并且永远使用父类的prototype来创造子类的prototype，这样才不会打乱类继承结构。
	**/
	
	在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。函数的继承与其他的属性继承没有差别
	


	继承分两种：
		原型继承：在对象的原型对象中添加东西   原型对象有了东西  对象才能继承    对原型链的增删改 让当前对具有某些方法
		1. 利用对象的动态特性添加成员
	
			 
			function person(){};
			person.prototype.sayhello=function(){
				alert("hahaha");
			}
			person.sayhello()
			添加的成员都会被构造函数创建出来的对象所继承

		2. 利用覆盖原型对象
     			 function Person() {}
     			 
     			 Person.prototype = {
     			   constructor: Person,       //覆盖原型对象实现继承的时候, 一定要给新对象添加一个 constructor 属性  以便模拟对象的类型
     			   sayHello: function() {},
     			   sayGoodbye: function() {},
     			   sayLove: function () {}
     			   
     			 };
     			
     			 var p = new Person();
     	 		 console.log( p.constructor.name );

	组合继承：将其他对象中的成员加到自己身上
		var o1 = { name: 'jim', age:19, gender: '男' };
		var o2 = { score: {
					math: 100,
					english:90,
					chinese:120
				} };

		for(var k in o1){o2[k]=o1[k]}

		extend()方法

			o2.extend = function(obj){
				for (var k in obj){
					this[k] = obj[k]
				}
			}
			o2.extend(o1);   //o2继承了o1
			o2.extend({      //o2继承了 id tag
				id:function(id){}
				tag:function(tag){}
			})
	
	通过原型来实现继承
		例子1
  		function Person(name,age,sex) {
  		  this.name=name;
  		  this.sex=sex;
  		  this.age=age;
  		}
 
  		function Student(score) {
  		  this.score=score;
  		}
  
  		Student.prototype=new Person("小明");
  		
  		 
  		var stu=new Student(100);
  		console.log(stu.name);
	  例子2
	 	function Animal(){this.species = "动物";}
	 	function Cat(name,color){this.name = name;this.color = color;}

 	    Cat.prototype = new Animal();  //完全删除了prototype对象原先的值

　	    Cat.prototype.constructor = Cat;

　	    var cat1 = new Cat("大毛","黄色");

　	    alert(cat1.species); // 动物



	借用构造函数 继承
	语法：
		构造函数名字.call(当前对象,属性,属性,属性....);
	    //解决了属性继承,并且值不重复的问题
	    //缺陷:父级类别中的方法不能继承

		function Product(name, price) {
		 this.name = name;
		 this.price = price;
		}
                                      
		function Toy(name, price) {
		  Product.call(this, name, price);
		  this.category = 'toy';
		}
		var car = new Toy('robot', 40);
		car.name


	经典范例

		var obj1 = {name:"jim"};
		var obj2 = Object.create(obj1);  //类型无关
	
		var create = function(obj){
			function F() {}
			F.prototype = obj;
			return new F();
		}


		obj2的原型对象就是obj1
		obj2的原型对象由 构造函数的prototype决定
		obj2的构造函数的prototype = obj1
	  
	浏览器兼容   
	 如果浏览器没有create方法  就自己写
		var create = function( obj ) {
				if ( Object.create ) {
					return Object.create( obj );
				} else {
					
					function F() {}
					F.prototype = obj;
					return new F();
				}
			}
	
	
	拷贝继承  
		把一个对象中的属性或者方法直接复制到另一个对象中
  		function Person() {}
  		Person.prototype.age=10;
  		Person.prototype.sex="男";
  		Person.prototype.height=100;
  		Person.prototype.play=function () {
  		  console.log("玩的好开心");
  		};
  		var obj2={};

  		for(var key in Person.prototype){
  		  obj2[key]=Person.prototype[key];
  		}
  		console.dir(obj2);
  		obj2.play();
	
非构造函数的继承
Object方法
	var Chinese = {
	　　　　nation:'中国'
	　　};
	
	var Doctor ={
	　　　　career:'医生'
	　　}
	
	function object(o) {
	
	　　　　function F() {}
	
	　　　　F.prototype = o;
	
	　　　　return new F();
	
	　　}
	var Doctor = object(Chinese);
	Doctor.career = '医生';
	alert(Doctor.nation); //中国

浅拷贝

	function extendCopy(p) {
	　　　　var c = {};
	　　　　for (var i in p) { 
	　　　　　　c[i] = p[i];
	　　　　}
	　　　　c.uber = p;
	　　　　return c;
	　　}
	　　var Doctor = extendCopy(Chinese);
	　　Doctor.career = '医生';
	　　alert(Doctor.nation); // 中国
深拷贝
　
	function deepCopy(p, c) {
	　　　　var c = c || {};
	　　　for (var i in p) {
	　　　　　　if (typeof p[i] === 'object') {
	　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
	　　　　　　　　deepCopy(p[i], c[i]);
	　　　　　　} else {
	　　　　　　　　　c[i] = p[i];
	　　　　　　}
	　　　　}
	　　　　return c;
	　　}
	　　var Doctor = deepCopy(Chinese);
	　Chinese.birthPlaces = ['北京','上海','香港'];
	　　Doctor.birthPlaces.push('厦门');
	　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
	　　alert(Chinese.birthPlaces); //北京, 上海, 香港





5.json-----------
	JSON 是一种按照JavaScript对象语法的数据格式
	JSON 是一种纯数据格式，它只包含属性，
	对象
		{ "name":"菜鸟教程" , "url":"www.runoob.com" }
		
	数组	
		[{"name":"小明"},{"name":"小红"}] 
	
	访问方式
		superHeroes.hometown
		superHeroes["active"]
	
	obj = {
		"name":"runoob",
    	"alexa":10000,
    	"sites":{
    		"site1":"www.runoob.com",
        	"site2":"m.runoob.com",
        	"site3":"c.runoob.com"
    	}
    }     
    修改
    	obj.sites.site1="www.google.com";

    删除
    	delete myObj.sites.site1;
	
	循环数组
		var myObj, i, x = "";
		myObj = {
			"name":"网站",
			"num":3,
			"sites":[ "Google", "Runoob", "Taobao" ]
		};
		
		for (i in myObj.sites) {
		    x += myObj.sites[i] + ",";
		}


	var casts = [ "Google", "Runoob", "Taobao" ]
	for(var p in casts){
		console.log(casts[p].name+"、")
	}


	遍历多层json数组
	
		var datas = [{
		            "id": 0,
		            "child": [{"msg": "111"}, {"msg": "222"}]
		        }, {
		            "id": 1,
		            "child": [{"msg": "333"}, {"msg": "444"}]
		        }, {
		            "id": 2,
		            "child": [{"msg": "467"}, {"msg": "589"}]
		        }];
		
		var str = ""; //存放第一层遍历的值
		var strarr = []; //存放第二层遍历的值 
		for (var i = 0; i < datas.length; i++) {
		    str += datas[i].id;
		    for (var j = 0; j < datas[i].child.length; j++) {
		        strarr.push(datas[i].child[j].msg)
		    }
		}
		console.log(strarr)
	



	转换为对象
		JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
		
		
	转换为字符串
		var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
		var myJSON = JSON.stringify(obj);




获得对象的类名    字符串处理函数

 
	function Person(){}
	var p = new Person();
	var ctr = p.constructor; 
	var s = "" + ctr;  //"function Person(){}"
	获得函数名
	方法一
		s = s.replace("function","|")
		var start = s.indexOf('|');
		var end = s.indexOf('(');
		if (start != -1&&end !=-1){
			
			var name = s.slice(start+2,end);
			alert(name)
		}
	
	方法二
		var ctr = p.constructor;
		alert(ctr.name)
	
	获取函数名
		function getname(fn){return fn.name}
		function abc(){}
		var o = new abc();
		var name = getname(o.constructor);
		alert(name)
	
	





函数  ------------------------------------------------------------------------------------------------

	函数是对象 
	对象有 属性 和 方法 
	函数有 属性 和 方法
	 
	我觉得这是个哲学问题，基于类的是创建模型，基于原型的是经验模型，
	前者是现有马这个概念，才有马这个实体，
	后者是先有马这个实体，才有马这个概念。
	在思考面向原型的时候，类的概念有是可以的，因为本质上对象的原型就是类。但是，类构造出对象的这个过程却要不得，面向原型里，是由具体对象推导出原型来的。
	访问对象的属性或者方法时，会访问其__proto__以及__proto__的__proto__，直到找到这个属性或者方法为止，而函数的prototype属性执行后会返回执行结果的__proto__.
	
	函数可以定义 可以调用 是js的词法特性
 
函数定义-----
	函数声明语句
		function f(){} 
		区别 
			函数声明 和 函数表达式 重要的区别是它们的名称标识符将会绑定在何处
	
	函数定义的表达式
		 
		函数表达式存储在变量后，变量也可作为一个函数使用
	 	var f = function(x,y){return x+y};  
		document.onkeydown=function (e) {console.log(e.keyCode);//事件参数对象};
	Function()构造函数
		
		var f = new Function("x","y","return x+y");   等价于函数表达式
		var F = function(){}

	对象直接量
		var o = {}
		var o = {x:0, y:0, square:function(x){return x*x} }
		var y = o.square(3);
	
	数组直接量
		var a = [function(x) {return x*x}, 20]
		a[0](a[1]);  //400
	行内函数表达式  
		setTimeout(function timerHandler () {console.log("I wait for one second.")}, 1000);
		setTimeout最大 延时值是2^31-1  是使用Int32来存储延时参数值的，
	匿名函数 
		属于函数表达式
		function () {}
		(function(a){console.log(a);})(123);
		 
		(function(a){console.log(a);}(1234));

	立即执行函数
		var fnName=function(){alert('Hello World');}();


		需求
			传很多参数 用函数声明
			不传参数 用函数表达式

			在字符串 对象 数组 参数 里都会看到函数



函数组成

	function 函数名称标识符 () {}

	函数名称是函数声明语句必需的部分 对函数定义表达式来说 名字是可选的 只存在于函数体内 指代该函数对象本身
    //函数中有一个name属性----->函数的名字,name属性是只读的,不能修改
    //函数中有一个arguments属性--->实参的个数
    //函数中有一个length属性---->函数定义的时候形参的个数
    //函数中有一个caller属性---->调用(f1函数在f2函数中调用的,所以,此时调用者就是f2)
    function f1(x,y) {
      console.log(f1.name);
      console.log(f1.arguments.length);
      console.log(f1.length);
      console.log(f1.caller);//调用者
    }
    function f2() {
      console.log("f2函数的代码");
      f1(1,2);
    }
    f2();


函数的调用 4种 
	普通函数调用  f()
	方法调用      f.kan()   
		有参数  
			点访问 f.kan(x,y)   
			方括号访问 f["kan"](x,y)
		f().m() 在f()调用结束后继续调用返回值中方法m()
		任何函数 只要作为方法调用实际上都会传入一个隐式实参 这个实参是对象 方法调用的母体就是这个对象 基于这个对象的方法可以执行多种操作

		this
		关键字this 没有作用域的限制
		不能继承this
		this的值 指向调用他的对象
        this的值 是全局对象或 undefined

    构造函数调用 
        构造函数调用创建了一个新对象
    	var o = new Object()
    	var o = new Object     凡是没有形参的构造函数都可以省略圆括号
    间接调用
    	call()
    	apply()

return 返回
	
	返回数字
	 	function fn1(){
	    return 100;
		}
		alert(fn1());  //fn1() = 100
	
	返回字符串
		function f2(){
			return "text";
		}
		f2() //text
		f2().length //4  不是从0开始 从1开始的
		alert(typeof f2()) //str
	
	返回函数
		function fn3(){
	    return function b(){
	        alert("1");
	    }
		}
		 fn3() // 返回的是 b()函数体 不执行
		 fn3()()//1 
	
		function fn1(a){
		    return function(b){
		        alert(a + b) //30
		    }
		}
		fn1(20)(10);
		
	返回对象
	function f3(){
		return window;
	}
	alert(f3()); //object window 
	fn3().onload =function(){
		document.body.innerHTML = "123"
	}
	
	返回数组
	function fn1(n){
	    var arr = [];
	    for(var i=1;i<=n;i++){
	        arr.push(i);
	    }
	    return arr;
	}
	console.log(fn1(8))//1,2,3,4,5,6,7,8
	 
	
	返回json
	function fn5(){
	    var obj = {"id":10,"name":"simon"}
	    return obj;
	}
	alert(fn5());//object object
	alert(fn5().id)//10
	alert(fn5().name)//simon
	 
	
函数的参数

	显示参数：函数定义的时候列出函数的显式参数
	隐式参数（Arguments）：函数的隐式参数是函数调用时传递给函数真正的值。
	参数数组： javascript 中的参数在内部是用一个数组来表示的，函数接收到的始终都是这个数组，而不关心数组中包含哪些参数，在函数体内可以通过 Arguments 对象来访问这个参数数组。
	
	参数的省略
		function f(a, b) {
		  return a;
		}
		
		f(1, 2, 3) // 1
		f(1) // 1
		f() // undefined
		
		f.length // 2

	默认值
	function doSome({a,b=2,c}){
	    console.log(a,b,c)
	    }
	    doSome({a:5,c:22}) 
	
	可变参数


	参数传递
		值传递      str  number  
		引用传递    数组  函数  对象


	arguments 对象 
		arguments用于读取参数列表 arguments[1]
		普通环境下  arguments 可以赋值
		严格模式下，arguments对象是一个只读对象，修改它是无效的（不能赋值） 但不会报错。
		arguments.callee  
	 


	 arguments 对象是活跃对象上的属性，它包含了如下属性：

	callee —— 对当前函数的引用
	length —— 实参的个数
	properties-indexes(数字，转换成字符串)其值是函数参数的值（参数列表中，从左到右）。properties-indexes的个数 == arguments.length;
	arguments对象的properties-indexes的值和当前（实际传递的）形参是共享的。
	如下所示：
	
	function foo(x, y, z) {
	 
	  // 定义的函数参数（x,y,z）的个数
	  alert(foo.length); // 3
	 
	  // 实际传递的参数个数
	  alert(arguments.length); // 2
	 
	  // 引用函数自身
	  alert(arguments.callee === foo); // true
	 
	  // 参数互相共享
	 
	  alert(x === arguments[0]); // true
	  alert(x); // 10
	 
	  arguments[0] = 20;
	  alert(x); // 20
	 
	  x = 30;
	  alert(arguments[0]); // 30
	 
	  // 然而，对于没有传递的参数z，
	  // 相关的arguments对象的index-property是不共享的
	 
	  z = 40;
	  alert(arguments[2]); // undefined
	 
	  arguments[2] = 50;
	  alert(z); // 40
	 
	}
	 
	foo(10, 20);


	arguments 和对应参数的绑定
		function foo(name, age, sex, hobbit) {
		
		    console.log(name, arguments[0]); // name name
		
		    // 改变形参
		    name = 'new name';
		
		    console.log(name, arguments[0]); // new name new name
		
		    // 改变arguments
		    arguments[1] = 'new age';
		
		    console.log(age, arguments[1]); // new age new age
		
		    // 测试未传入的是否会绑定
		    console.log(sex); // undefined
		
		    sex = 'new sex';
		
		    console.log(sex, arguments[2]); // new sex undefined
		
		    arguments[3] = 'new hobbit';
		
		    console.log(hobbit, arguments[3]); // undefined new hobbit
		
		}
		
		foo('name', 'age')
		传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享
		
		除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的。
	


	面试题：
		var data = [];

		for (var i = 0; i < 3; i++) {
		    (data[i] = function () {
		       console.log(arguments.callee.i) 
		    }).i = i;
		}
		
		data[0]();
		data[1]();
		data[2]();
		








	
函数作为值
	function myFunction(a, b) {
	    return a * b;
	}
	var x = myFunction(4, 3) * 2;
	console.log(typeof(x)) //number

	function add10(num){
	return num + 10;
	}                               指针 
	var result1 = callSomeFunction(add10, 10);
	alert(result1); //20



    把函数赋值给变量
		function a(x){return x*x}
		var s = a;
		a(3)
		s(3)

	函数作为方法
		var o = {x:0, y:0, square:function(x){return x*x} }
		var y = o.square(3);	
	
执行上下文---    
		
	执行上下文环境 是理解变量对象和作用域链的基础
	定义
		当 js引擎开始开始执行预编译生成的代码时 就会进入上下文
		可以将执行上下文看成是一个栈结构  栈底永远是全局上下文  顶部是当前上下文 
		执行到当前上下文时 上下文入栈 执行完毕后 上下文出栈
	
	先加载程序A的上下文，然后开始执行A，保存程序A的上下文，调入下一个要执行的程序B的程序上下文，然后开始执行B,保存程序B的上下文。。。。
	进程就是包换上下文切换的程序执行时间总和 = CPU加载上下文+CPU执行+CPU保存上下文
	当定义的函数被执行时，就进入了函数代码，当前函数上下文被压入 EC 栈中。
	注意，在函数代码中，也不包含定义在该函数内部环境 function 内的代码。
		// 初始化
		EC = [
		  globalContext
		];
		
		// 第一次调用 foo 函数
		EC = [
		  <foo> functionContext,
		  globalContext
		];
		
		// 在 foo 内递归调用自己
		EC = [
		  <foo> functionContext - recursively,
		  <foo> functionContext,
		  globalContext
		];
	执行上下文包含什么
	一个执行上下文我们可以抽象的理解为对象（object）。
	每一个执行上下文都有一些属性（又称为上下文状态），它们用来追踪关联代码的执行进度。
	执行上下文包括：全局上下文、函数上下文和 eval() 上下文
 
变量对象
	是一个抽象的概念，指代与执行上下文相关的特殊对象，它存储着在上下文中声明的：

		变量（var）
		函数声明 （function declaration，简写 FD）
		函数的形参（arguments）   
	
	变量对象是 执行上下文和作用域链  中间的桥梁
	this存在于 执行上下文中
	this例子
		var a = 10;  
		console.log(a)         //10                            
		console.log(window.a)  //10       
		console.log(this.a)    //10                
	


















作用域
	
	作用域的作用：
		私有化变量或函数
		规避同名冲突


	全局变量：体外变量 体内无var的变量 在任何地方可调用
	局部变量：var变量 参数变量  在当前函数体调用
	特性:
		忽略块级作用域 
		全局变量是全局对象的属性
		局部变量是调用对象的属性

	作用域 每个函数在被定义是就会创建一个属于自己的环境(作用域) 是你的代码在运行时，各个变量、函数和对象的可访问性
	
	函数在定义的时候 作用域就已经确定了 
	
	作用域链 嵌套函数就能访问到外部函数中的变量，以及全局作用域中的变量，此时就形成了一条作用域链


	JavaScript默认有一个全局对象window  全局变量会绑定到window上
		var course = 'Learn JavaScript';
		alert(course); // 'Learn JavaScript'
		alert(window.course); // 'Learn JavaScript'
	提升
		JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
		函数提升优先于变量提升   赋值操作不会提升
			foo(); // 1
			var foo;
			function foo() {console.log( 1 );}
			foo = function() {console.log( 2 );};		   
 
		表达式定义函数时无法提升
			myFunction(5);
			function myFunction(y) {
			    return y * y;
			}
	

属性
		
	点表示法(dot notation)来访问对象的属性和方法。
	对象的名字表现为一个命名空间(namespace)，它必须写在第一位 然后是一个点(.) 加属性或方法
		name属性     f.name    函数名字
	    prototype属性
	    length属性   f.length  length属性与形参有关
			function f() {
			  return arguments.length;
			}
			
			f(1, 2, 3) // 3
			f(1) // 1
			f() // 0
			
			
			function f(a, b) {
			  return arguments.length;
			}
			
			f(1, 2, 3) //2                 
			f(1)       //2                  
			f()        //2                   
			                   
			f.length   // 2
	
	属性值为列表
		name : ['Bob', 'Smith'],		
		person.name[0] //Bob
	
	属性值为对象
		name : {
		  first : 'Bob',
		  last : 'Smith'
		},
		person.name.first
		person['name']['first']
	函数做方法
		var obj = {
		  foo: function() {},
		  bar: function() {}
		};
	 简写
		var obj = {
			foo(){},
			bar(){}
		}


方法
		apply call
        

闭包=我是内部的卧底
	只要使用了回调函数，实际上就是在使用闭包！
	闭包是将函数内部和函数外部连接起来的桥梁
	闭包 为了可控 不冲突
	闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。 

	闭包是基于词法作用域书写代码时所产生的自然效果
	把返回值赋值 给全局变量

场景 定时器 事件监听器 ajax请求 跨窗口通讯  web workers

例子


	获取值和设置值 外界无法访问
		var get ,set;
		(function(){
			var s = 0;
			get = function(){
			return s;
		};
			set = function(v){
			s = v;
		};
		})();
		get();
		set(123);
	
	迭代器 
	  function setup(x){
	  var i = 0;
	  return function(){
	  	return x[i++];
	  };
	  }
	  var next = setup([1,2,3])
	
	
	
		function foo(){
			var a = 2;
			function bar(){
				console.log(a);
			}
			return bar;
		}
		var baz = foo()  
		baz()
		
		foo：
		function foo(){
			var a = 2;
			function bar(){
				console.log(a);
			}
			return bar;
		}
			
		baz：
		function bar() {
		        console.log( a );
		    }	
		解析		
			bar() 的可以访问foo()的内部作用域 将bar()函数本身当做值 赋值给全局变量baz 并调用baz()
		
			实际上只是通过不同的标识符 调用了内部的函数 bar()。
			bar() 依然持有对该作用域的引用，而这个引用就叫作闭包
		
		分配给函数 
		function foo() {
		    var a = 2;
		    function baz() {
		        console.log( a ); // 2
		    }
		    bar( baz );  当参数
		}
		function bar(fn) {
		    fn();
		}
		foo()
		
		
		分配给全局变量
		var fn;
		function foo() {
		    var a = 2;
		    function baz() {
		        console.log( a );
		    }
		    fn = baz;  
		}
		function bar() {
		    fn();
		}
		foo();
		bar(); // 2   无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，
	
		将 timer分配给内置函数
			function wait(message) {
			    setTimeout( function timer() {
			        console.log( message );
			    }, 1000 );
			}
			wait( "Hello, closure!" );
	
		循环闭包
			for ( var i=1; i<=5; i++) {
			    (function(j){
			        setTimeout( function timer() {
			            console.log( j );
			        }, i*1000 );
			    })(i);
			}  
			//1 2 3 4 5
	
			for (let i=1; i<=5; i++) {
			    setTimeout( function timer() {
			        console.log( i );
			    }, i*1000 );
			}	
			for 循环头部的 let 声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量
				块作用域和闭包联手便可天下无敌
	

模块

	两个必要条件：
		1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块
		实例）。
		2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并
		且可以访问或者修改私有的状态
	
	一个具有函数属性的对象本身并不是真正的模块。从方便观察的角度看，一个从函数调用
	所返回的，只有数据属性而没有闭包函数的对象并不是真正的模块	
	
	这个模式在 JavaScript 中被称为模块。最常见的实现模块模式的方法通常被称为模块暴露
		
		function CoolModule() {
		    var something = "cool";
		    var another = [1, 2, 3];
		    function doSomething() {
		        console.log( something );
		    }
		    function doAnother() {
		        console.log( another.join( " ! " ) );
		    }
		    return {
		        doSomething: doSomething,
		        doAnother: doAnother
		    };
		}
		var foo = CoolModule();
		foo.doSomething(); // cool
		foo.doAnother();
		
			    / doSomething: function doSomething() {console.log( something );}
		foo ——<              	
			    \ doAnother: function doAnother() {console.log( another.join( " ! " ) );}          /
		
	
	单例模式
	
	var foo = (function CoolModule() {
	    var something = "cool";
	    var another = [1, 2, 3];
	    function doSomething() {
	        console.log( something );
	    }
	    function doAnother() {
	        console.log( another.join( " ! " ) );
	    }
	    return {                                          函数作为返回值
	        doSomething: doSomething,  可以将这个对象类型的返回值看作本质上是模块的公共 API
	        doAnother: doAnother
	    };
	})();
	foo.doSomething(); // cool        
	foo.doAnother(); // 1 ! 2 ! 3
	
	加参数
		function CoolModule(id) {
		    function identify() {
		        console.log( id );
		    }
		    return {
		        identify: identify
		    };
		}
		var foo1 = CoolModule( "foo 1" );
		var foo2 = CoolModule( "foo 2" );
		
		foo1.identify(); // "foo 1"           
		foo2.identify(); // "foo 2"
	
	命名将要作为公共 API 返回的对象：  
		单例
		var foo = (function CoolModule(id) {
		    function change() {
		// 修改公共 API
		        publicAPI.identify = identify2;
		    }
		    function identify1() {
		        console.log( id );
		    }
		    function identify2() {
		        console.log( id.toUpperCase() );
		    }
		    var publicAPI = {
		        change: change,
		        identify: identify1
		    };
		    return publicAPI;
		})( "foo module" );
		foo.identify(); // foo module
		foo.change();
		foo.identify(); // FOO MODULE
	
	通过在模块实例的内部保留对公共 API 对象的内部引用，可以从内部对模块实例进行修
	改，包括添加或删除方法和属性，以及修改它们的值
	 
	
let 声明变量 值可以变
	for (let i = 0; i < 10; i++) {
	  // ...
	}

	console.log(i);

const 声明常量 不能改值
	
		
	
解构赋值   

 ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值   等号右边不能是undefined和null
	以前：
		var array = ['hello', 'JavaScript', 'ES6'];
		var x = array[0];
		var y = array[1];
		var z = array[2];
	现在：
		var [x, y, z] = ['hello', 'JavaScript', 'ES6'];		
	解构赋值嵌套
		let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
		x; // 'hello'
		y; // 'JavaScript'
		z; // 'ES6'
		
		简写
		let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
		z; // 'ES6'
	例子
		var person = {
    	name: '小明',
    	age: 20,
    	gender: 'male',
    	passport: 'G-12345678',
    	school: 'No.4 middle school',
    	address: {
    	    city: 'Beijing',
    	    street: 'No.1 Road',
    	    zipcode: '100001'
    	}
		};
    	                         
		把person里的东西 对应给name 
		
		var {name, address: {city, zip}} = person;
		name; // '小明'
		city; // 'Beijing'
		zip; // undefined, 因为属性名是zipcode而不是zip
		// 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
		
		// 把passport属性赋值给变量id:
		let {name, passport:id} = person;
		name; // '小明'
		id; // 'G-12345678'
		
		// 如果person对象没有single属性，默认赋值为true:
		var {name, single=true} = person;
		name; // '小明'
		single; // true     

	
	数组解构
		var x = [1, 2, 3, 4, 5];
		var [y, z] = x;
		console.log(y); // 1
		console.log(z); // 2
		
		为了防止从数组中取出一个值为undefined的对象，可以为这个对象设置默认值。
		
			var a, b;
			
			[a=5, b=7] = [1];
			console.log(a); // 1
			console.log(b); // 7
		
		
		将剩余数组赋值给一个变量Section
		当解构一个数组时，可以使用剩余模式，将数组剩余部分赋值给一个变量。
		
			var [a, ...b] = [1, 2, 3];
			console.log(a); // 1
			console.log(b); // [2, 3]
	
			let arr = [1, 2, 3];
			let {0 : first, [arr.length - 1] : last} = arr;
			first // 1
			last // 3
	
		匹配模式p  被赋值
			let obj = {
			  p: [
			    'Hello',
			    { y: 'World' }
			  ]
			};
			
			let { p, p: [x, { y }] } = obj;
			x // "Hello"
			y // "World"
			p // ["Hello", {y: "World"}]
			
	
	对象解构  
		默认值
			var {x = 3} = {};
			x // 3
			
			var {x, y = 5} = {x: 1};
			x // 1
			y // 5
			
			var {x: y = 3} = {};
			y // 3
			
			var {x: y = 3} = {x: 5};
			y // 5
	
		无声明解构
		var a, b;
		({a, b} = {a: 1, b: 2});  //必须有括号
	
		给新的变量名赋值Section
		 
			var o = {p: 42, q: true};
			var {p: foo, q: bar} = o;
			 
			console.log(foo); // 42 
			console.log(bar); // true
		
		变量名与属性名不一致
			let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
			baz // "aaa"
			
			let obj = { first: 'hello', last: 'world' };
			let { first: f, last: l } = obj;
			f // 'hello'
			l // 'world'	
	
		对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量  foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
			let { foo: baz } = { foo: "aaa", bar: "bbb" };
			baz // "aaa"
			foo // error: foo is not defined
	 
	
	
	
	
		给新的变量命名并提供默认值
			var {a:aa = 10, b:bb = 5} = {a: 3}; // bb= 5是默认值
			 
			console.log(aa); // 3
			console.log(bb); // 5
	
		对象属性计算名和解构Section
		计算属性名，如object literals，可以被解构。
		
			let key = "z";
			let { [key]: foo } = { z: "bar" };
			
			console.log(foo); // "bar"
	

	字符串的解构赋值
	
			var [a, b] = 'str';
			a // s
			b // t
			
			
			var {0:a, 1:b, length:len} = 'str';
			a // s
			b // t
			len // 3
	
	布尔解构
		let {toString:s1} = 123;
		console.log(s1 === Number.prototype.toString);//true
	
	For of 迭代和解构
	
		var people = [
		  {
		    name: "Mike Smith",
		    family: {
		      mother: "Jane Smith",
		      father: "Harry Smith",
		      sister: "Samantha Smith"
		    },
		    age: 35
		  },
		  {
		    name: "Tom Jones",
		    family: {
		      mother: "Norah Jones",
		      father: "Richard Jones",
		      brother: "Howard Jones"
		    },
		    age: 25
		  }
		];
		
		for (var {name: n, family: { father: f } } of people) {
		  console.log("Name: " + n + ", Father: " + f);
		}
		
		// "Name: Mike Smith, Father: Harry Smith"
		// "Name: Tom Jones, Father: Richard Jones"
	
	从作为函数实参的对象中提取数据Section
		function userId({id}) {
		  return id;
		}
		
		function whois({displayName: displayName, fullName: {firstName: name}}){
		  console.log(displayName + " is " + name);
		}
		
		var user = { 
		  id: 42, 
		  displayName: "jdoe",
		  fullName: { 
		      firstName: "John",
		      lastName: "Doe"
		  }
		};
		
		console.log("userId: " + userId(user)); // "userId: 42"
		whois(user); // "jdoe is John"
	
	使用场景
			交换两个变量x和y的值
				var x=1, y=2;
				[x, y] = [y, x]
			
			快速获取当前页面的域名和路径：
			
				var {hostname:domain, pathname:path} = location;       	
	
	
		    从函数返回多个值
				function example() {
				    return [1, 2, 3];
				}
				let [a, b, c] = example();
			提取json数据
				let jsonData = {
				    id: 42,
				    status: 'OK',
				    data: [867, 5309]
				};
				let { id, status, data: number } = jsonData;
	

箭头函数  https://www.cnblogs.com/minghui007/p/8177991.html
	参数：
		() =>{} //没有参数
		 x =>{} //一个参数 单个参数时括号可以省略
	 (x,y) =>{} //多个参数
	
	 函数体：
	 	function(x){return x*x}
	 	x => {return x*x}  //语句块
	 	x => x*x // 表达式 ，和上一行等价
	
	例子
		[1,2,3].map(x => 2*x) //[2,4,6]
		[[1,2],[3,4]].map(([a,b]) => a+b) //[3,7]
		
		const arr = [1,2,3];
		const s = arr.map(x =>x*x);
		const s =arr.map(function(x){return x*x})
	
		提高箭头函数优先级
			const f = (x => ((x % 2) === 0)) ? x : 0;
			const f = (x => ((x % 2) === 0)) ? x : 0;
		
		只有一个表达式 可以省略大括号  
			asyncFunc.then(x => console.log(x));
		声明必须放在大括号里
			asyncFunc.catch(x => { throw x });
		
		返回对象要加 小括号
			const f1 = x => ({bar:123});  //{ bar: 123 }
			const f2 = x => { bar: 123 }; // undefined 程序会认为这是一个块级作用域
		
	    立即调用的箭头函数
	    	(function(){})(); 简写 (()=>{})();
	
	
	    不指向arguments 指向它的值	
	    	var arguments = 42;
			var arr = () => arguments;
			arr(); // 42
	
	 	箭头函数没有arguments	 
	 
			let fn = function(){
				console.log(arguments);
			}
			fn(1,2,4)
			
			let fn1 = ()=>{
				console.info(arguments);//arguments is not defined
			}
			fn1(12,3,4)
		
			替代方法为:
			var fn = (...arg) => {
			        console.log(arg);
			    }
			    fn(2) // [2]



	
		箭头函数不能用作构造器，和 new 一起用就会抛出错误。
		
		   var Foo = () => {};
		   var foo = new Foo(); // TypeError: Foo is not a constructor
	
		箭头函数没有原型属性。
		
		   var Foo = () => {};
		   console.log(Foo.prototype); // undefined
	
		箭头函数不能用作生成器。
		箭头函数在参数和箭头之间不能换行
	

高阶函数 

	高阶函数是指至少满足下列条件之一的函数。
	
		(1)函数可以作为参数被传递
	
		(2)函数可以作为返回值输出

		编写高阶函数，就是让函数的参数能够接收别的函数
		function add(x, y, f) {
		    return f(x) + f(y);
		}
		var x = add(-5, 6, Math.abs); // 11
		console.log(x);



	map map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

		arr.map(function callback(currentValue[, index[, array]])
		参数：	
			currentValue
			  数组中正在处理的当前元素。
			index 
			   数组中正在处理的当前元素的索引。
			array 
			  map 方法被调用的数组。
		


	计算平方
		function pow(x) {
		    return x * x;
		}
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
		
	把Array的所有数字转为字符串：
	
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		//只需要一行代码。
	
	  



	filter
		筛选排除掉所有的小值
		function isBigEnough(element) {
		  return element >= 10;
		}
		var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
		// filtered is [12, 130, 44]
		
		
		
		筛选大于18的值	 
		var ages = [32, 33, 16, 40];
		function checkAdult(age) {
		    return age >= 18;
		}
		function myFunction() {
		    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
		}
		
		数组去重  http://www.cnblogs.com/lijiayi/p/shuzuquchong.html
		var r,
		 arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
		 
		r = arr.filter(function (element, index, self) {
		 return self.indexOf(element) === index;
		});
		 
		console.log(r.toString());

递归

	function factorial(n){
	  if ((n == 0) || (n == 1))
	    return 1;
	  else
	    return (n * factorial(n - 1));
	}
	factorial(5)


尾递归
	function factorial (n, total=1) {
	    if(n === 1){
	        return total
	    }
	    return factorial(n-1, n * total)
	}
	factorial(5)
   


 递归场景： 遍历dom树
	 function walkDom(node, callback) {
	    if (node === null) { //判断node是否为null
	        return
	    }
	    callback(node) //将node自身传入callback
	    node = node.firstElementChild //改变node为其子元素节点
	    while (node) {
	        walkDom(node, callback) //如果存在子元素，则递归调用walkDom
	        node = node.nextElementSibling //从头到尾遍历元素节点
	    }
	 }
	 walkDom(document, function(node) {console.count()}) //包含document节点
	 document.querySelectorAll('*').length       
 

回调函数
	姐 我饿 饭熟了叫我
	回调函数是作为参数传递给另一个函数的函数，并在其父函数完成后执行。
	  function a(callback){
	  alert("我是函数a");
	  alert("调用回调函数");
	  callback();
	 }
	
	 function b(){
	  alert("我是回调函数b");
	
	 }
	
	 function c(){
	  alert("我是回调函数c");
	
	 }
	 function test(){
	  a(b);
	  a(c);
	
	 }
	

私有函数
	外部不可见的本地函数 称之为私有函数
		优点 有助于全局命名空间的纯净性 
	var Person = function(name,sex){
    this.name = name;
    this.sex = sex;     
    var _privateVariable = "";//私有变量    
    //构造器中定义的方法，即为私有方法
    function privateMethod(){   
        _privateVariable = "private value";
        alert("私有方法被调用！私有成员值：" + _privateVariable);             
    }
    privateMethod(); //构造器内部可以调用私有方法            
	}
	 
	Person.prototype.sayHello = function(){
	    alert("姓名：" + this.name + "，性别：" + this.sex);
	}
	 
	var p = new Person("菩提树下的杨过","男");      
	p.sayHello();
	 
	//p.privateMethod();//这里将报错，私成方法无法被实例调用
	alert(p._privateVariable);//显示: undefined

全局函数
	parseInt("123")
	parseInt("FF",10)
	
	parseFloat("1.23")
	
	isNaN(NaN) //true
	isFinite(无穷大)  //用来检测一个数是不是有限数

返回函数的函数
	function a() {
		alert("A");
		return function(){
			alert("B");
		};
	}
	var c = a();
	c()

重写自己的函数
	function a(){
		alert("S");
		a=function(){   //全局变量a被赋予了新的函数
			alert("b");
		};
	}



	var a = function(){
		function shezhi(){
			var setup="done";
		}
		function work(){
			alert("work");
		}
	shezhi();
	return work;
	}();
	

浏览器------------------------------------------------------------------


window对象
setInterval
	每三秒（3000 毫秒）弹出 "Hello" :
	setInterval(function(){ alert("Hello"); }, 3000);
	setInterval('alert("Hello");', 3000);
	
setTimeout
	3 秒 后弹出 "Hello" :
	setTimeout(function(){ alert("Hello"); }, 3000);


//右键禁用 
document.oncontextmenu = function () {
return false; 
};
//复制禁用
 
document.oncopy = function () { 
return false; 
}; 

禁用f12

document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }

}


api-----


什么是API
	应用程序接口（API）是以编程语言提供的结构，允许开发人员更容易地创建复杂的功能。它们抽象出更复杂的代码，并提供一些简单的语法来使用。

	客户端JavaScript中的API
	
	本身并不是JavaScript语言的一部分，却建立在JavaScript语言核心的顶部，为使用JavaScript代码提供额外的超强能力

	分两类：
		浏览器api  内置于浏览器中
		第三方API 不会内置于浏览器中  例如Twitter API 推文
	
	JavaScript，API和其他JavaScript工具之间的关系
		JavaScript — 一种内置于浏览器的高级脚本语言
		客户端API — 内置于浏览器的结构程序
		第三方API — 置于第三方普通的结构程序
		JavaScript库 — 通常是包含具有特定功能的一个或多个JavaScript文件，把这些文件关联到您的Web页以快速或授权编写常见的功能。例如包含jQuery和Mootools
		JavaScript框架 — 从库开始的下一步，JavaScript框架视图把HTML、CSS、JavaScript和其他安装的技术打包在一起，然后用来从头编写一个完整的Web应用。
		

API可以做什么
	常见浏览器API
		操作文档的API  内置于浏览器中   例如 DOM API  操作HTML和CSS
		从服务器获取数据的API   用于更新网页的一小部分是相当好用的  XMLHttpRequest
		用于绘制和操作图形的API  例如 Canvas和WebGL
		音频和视频API   Web Audio API
		客户端存储API   存储数据 脱机状态时可用 
	常见第三方API
		Twitter API       推送
		Google Maps API   定位


API如何工作
	它们是基于对象的
	它们有可识别的入口点
	它们使用事件来处理状态的变化
	它们在适当的地方有额外的安全机制





尺寸-------------------------------------------------------------
元素偏移尺寸
offsetwidth=width+padding+border+滚动条宽度
	offsetwidth图：https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png
clientWidth=width+padding
	clientWidth图：https://images0.cnblogs.com/blog/166781/201412/291654504031651.png











客户端 服务器 之间：
	网络连接:  发送和接受数据  就像你家到商店的街道
	
	DNS: 域名系统服务器像是一本网站通讯录。当你在浏览器内输入一个网址时，浏览器获取网页之前将会查看域名系统。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。  商店地址
	TCP/IP:  定义数据如何传输的通信协议 怎么去商店
	HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）  就像你下订单时所说的话一样
	组成文件: 一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：  得到的商品
		代码 : 网页大体由 HTML、CSS、JavaScript组成，不过你会在后面看到不同的技术。
		资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word文档、PDF文件。	

一个小网络 
	电脑-->路由-->电脑
	电脑-->路由-->猫-->互联网服务商-->猫-->路由-->电脑

	互联网是基础设施，网络是建立在这种基础设施之上的服务值  一些其他服务运行在互联网之上，比如邮箱和IRC.

网络服务主要类型
	1、ISP  网络联线服务商，专指提供网络通路以使用户与网络连线的从业者， 物理线路
	2、IAP  网络中转站、租用信道和电话线路，以提供中介服务，包括连线服务、IP地址分配，电子公告板BBS等。
	3、ICP  内容提供商，是利用IAP线路，通过设立网站提供信息服务的经营者，新浪、雅虎、搜狐  ICP为用户提供发布信息和查询信息的服务，不提供接入服务。
	4、OSP  提供在线服务 检索查询 论坛服务。
	5、IPP  网络平台服务商，为用户提供信息交流和技术服务的空间。
	6、IEP  他是为ISP、ICP等提供接入设备和技术服务的网络产品生产商。
	7、ASP  应用服务提供商，向用户提供一切可能的网络应用服务。	


javascript在 页面上做什么？
	
	通过 DOM API 动态地修改 HTML 和 CSS 来更新用户交界面

怎样向你的页面添加 JavaScript？
	内部的javascript
	<script>
		function createParagraph() {
	  var para = document.createElement('p');         创建元素
	  para.textContent = 'You clicked the button!';  设置文本节点
	  document.body.appendChild(para);               追加元素到body
	}
	
	var buttons = document.querySelectorAll('button');  获取所有的按钮元素
	
	for(var i = 0; i < buttons.length ; i++) {         添加点击事件
	  buttons[i].addEventListener('click', createParagraph);
	}
	<script>
		
	外部的javascript 推荐
		
		<script src="script.js"><script>
	
	内联的javascript  不推荐
		<button onclick="createParagraph()">Click me!<button>



多任务
操作系统的调度算法
	时间片轮转   风扇
	优先级调度  


并发   看起来好像是一起执行
并行   真正的一起执行    

	进程 进程是正在运行的程序的实例
	编写完毕的代码，在没有运行的时候，称之为程序

	正在运行着的代码，就成为进程

	进程，除了包含代码以外，还有需要运行的环境等，所以和程序是有区别的



sessionID是在服务器端生成的，发送给浏览器，存储在cookie里面


Sec-WebSocket-Accept:  
Sec-WebSocket-Extensions:  
Sec-WebSocket-Version:  
Upgrade: websocket
WebSocket-Server: uWebSockets







   

ssl
	一，公钥私钥
	1，公钥和私钥成对出现
	2，公开的密钥叫公钥，只有自己知道的叫私钥
	3，用公钥加密的数据只有对应的私钥可以 解密
	4，用私钥加密的数据只有对应的公钥可以解密
	5，如果可以用公钥解密，则必然是对应的私钥加的密
	6，如果可以用私钥解密，则 必然是对应的公钥加的密
	明白了？
	
	假设一下，我找了两个数字，一个是1，一个是2。我喜欢2这个数字，就保留起来，不告诉你们，然 后我告诉大家，1是我的公钥。
	
	我有一个文件，不能让别人看，我就用1加密了。别人找到了这个文件，但是他不知道2就是解密的私钥啊，所以 他解不开，只有我可以用数字2，就是我的私钥，来解密。这样我就可以保护数据了。
	
	我的好朋友x用我的公钥1加密了字符a，加密后成了b， 放在网上。别人偷到了这个文件，但是别人解不开，因为别人不知道2就是我的私钥，只有我才能解密，解密后就得到a。这样，我们就可以传送加密的数据了。
	
	现在我们知道用公钥加密，然后用私钥来解密，就可以解决安全传输的问题了。如果我用私钥加密一段数据（当然只有我可以用私钥加密，因为只有我知道 2是我的私钥），结果所有的人都看到我的内容了，因为他们都知道我的公钥是1，那么这种加密有什么用处呢？
	
	但是我的好朋友x说有人冒充我 给他发信。怎么办呢？我把我要发的信，内容是c，用我的私钥2，加密，加密后的内容是d，发给x，再告诉他解密看是不是c。他用我的公钥1解密，发现果然 是c。这个时候，他会想到，能够用我的公钥解密的数据，必然是用我的私钥加的密。只有我知道我得私钥，因此他就可以确认确实是我发的东西。这样我们就能确 认发送方身份了。这个过程叫做数字签名。当然具体的过程要稍微复杂一些。用私钥来加密数据，用途就是数字签名。
	
	好，我们复习一下：
	1， 公钥私钥成对出现
	2，私钥只有我知道
	3，大家可以用我的公钥给我发加密的信了
	4，大家用我的公钥解密信的内容，看看能不能解开， 能解开，说明是经过我的私钥加密了，就可以确认确实是我发的了。
	
	总结一下结论：
	1，用公钥加密数据，用私钥来解密数据
	2， 用私钥加密数据（数字签名），用公钥来验证数字签名。
	
	在实际的使用中，公钥不会单独出现，总是以数字证书的方式出现，这样是为了公钥的安 全性和有效性。
	
	二，SSL
	我和我得好朋友x，要进行安全的通信。这种通信可以是QQ聊天，很频繁的。用我的公钥加密数据就不行 了，因为：
	1，我的好朋友x没有公私钥对，我怎么给他发加密的消息啊？ （注：实际情况中，可以双方都有公私钥对）
	2，用公私钥加密运算 很费时间，很慢，影响QQ效果。
	
	好了，好朋友x，找了一个数字3，用我的公钥1，加密后发给我，说，我们以后就用这个数字来加密信息吧。 我解开后，得到了数字3。这样，只有我们两个人知道这个秘密的数字3，别的人都不知道，因为他们既不知x挑了一个什么数字，加密后的内容他们也无法解开， 我们把这个秘密的数字叫做会话密钥。
	
	然后，我们选择一种对称密钥算法，比如DES，（对称算法是说，加密过程和解密过程是对称的，用一个 密钥加密，可以用同一个密钥解密。使用公私钥的算法是非对称加密算法），来加密我们之间的通信内容。别人因为不知道3是我们的会话密钥，因而无法解密。
	
	好，复习一下：
	1，SSL实现安全的通信
	2，通信双方使用一方或者双方的公钥来传递和约定会话密钥 （这个过程叫做握手）
	3， 双方使用会话密钥，来加密双方的通信内容
	
	上面说的是原理。大家可能觉得比较复杂了，
	实际使用中，比这还要复杂。不过庆幸的是，好心的先行 者们在操作系统或者相关的软件中实现了这层（Layer），
	并且起了一个难听的名字叫做SSL，（Secure Socket Layer）。





HTML DOM textContent 
	设置节点文本内容:
	
	node.textContent=text
	返回节点文本内容:
	
	node.textContent	


输出文本  document.write()
改变文本  innerHTML


 
段子-------------------------



如果时间早于20:00 会获得问候 good day 
function fun(){
 
	var time= new Date().getHours();
	if(time<20){
		document.getElementById("demo").innerHTML="你好 世界";
	}
}


随机地址
	var r=Math.random();
	var x=document.getElementById("demo")
	if (r>0.5){
		x.innerHTML="<a href='http://www.runoob.com'>访问菜鸟教程</a>";
	}
	else{
		x.innerHTML="<a href='http://wwf.org'>Visit WWF</a>";
	}


function myFunction(){
var x;
var d = new Date().getDay();
switch(d){
	case 4:
	x = "新七天";
	break;
	case 1:
	x = "新天";
	break;	
	case 2:
	x = "新七天";
	break;	
	case 3:
	x = "新七天";
	break;
}

document.getElementById("demo").innerHTML=x;
}



消息框
alert
confirm
prompt




驼峰法
var a  = "get-element-by-id"
function tuo(a){
	var arr = a.split('-')
	for(var i=1; i<arr.length; i++){
		arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
	}
a=arr.join('');
return a;
}









正则---

.  单个字符

*  零次到n次

\d =[0-9]
\w ='[A-Za-z0-9_]'
\s = [ \f\n\r\t\v]
^ 开始   $ 结束














能快速模仿出现有的例子     

他们不再一味地模仿 分析 推理  

知器：知道具体事物的构成   其然

格物：探究事物的道理       所以然





事件处理程序

onblur         用户离开了对象
onchange       用户修改了对象
onclick        用户点击了对象
onerror        脚本遇到一个错误
onfocus        激活对象
onload         加载完成
onmouseout     指针离开对象
onmouseover    指针在对象上方
onselect       用户选择了对象的内容
onsubmit       提交了表单
onunload       离开了页面



DOM

文档对象
document的属性
document.title             //设置文档标题等价于HTML的<title>标签
document.bgColor           //设置页面背景色
document.fgColor           //设置前景色(文本颜色)
document.linkColor         //未点击过的链接颜色
document.alinkColor        //激活链接(焦点在此链接上)的颜色
document.vlinkColor        //已点击过的链接颜色
document.URL               //设置URL属性从而在同一窗口打开另一网页
document.fileCreatedDate   //文件建立日期，只读属性
document.fileModifiedDate  //文件修改日期，只读属性
document.fileSize          //文件大小，只读属性
document.cookie            //设置和读出cookie
document.charset           //设置字符集 简体中文:gb2312




浏览器会解析HTML标签生成DOM Tree，解析CSS生成CSSOM，然后将DOM Tree和CSSOM合成生成Render Tree






跨域
ajax跨域
Cookie跨域
iframe跨域
LocalStorage跨域

ajax解决跨域  锚点----> ajax.js
	JSONP
	WebSocket
	CORS




同源策略
	A网页设置的 Cookie，B网页不能打开，
	除非这两个网页"同源"。所谓"同源"指的是"三个相同"。
	
	协议相同       域名相同               端口相同
	协议是http://，域名是www.example.com，端口是80

	如果非同源，共有三种行为受到限制。

		（1） Cookie、LocalStorage 和 IndexDB 无法读取。
		
		（2） DOM 无法获得。
		
		（3） AJAX 请求不能发送。






mouseEvent鼠标事件
	click
	WheelEvent 滚轮
	DragEvent





pageX pageY  相对于文档边缘的坐标  body高2000px  pageY=2000px 

offsetX 事件对象相对目标节点的偏移  

screenX 只相对于屏幕 无视文档高度 
function showCoords(evt){
  alert(
    "screenX value: " + evt.screenX + "\n"
    + "screenY value: " + evt.screenY + "\n"
  );
}


