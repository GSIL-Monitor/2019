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
	
    首次出现的位置 indexOf()
	最后一次出现的位置 lastIndexOf() 
	indexOf是从前向后查  而lastIndexOf是从后向前查   但是二者返回索引都是从前开始数数和计算的
	
	var arr = [1,2,3,4,5,5,6]
	console.log(arr.indexOf(5))     //4
	console.log(arr.lastIndexOf(5)) //5

	
	
	substring(from, to) 指定索引区间的子串 
		substring是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。 
			var s = 'hello, world'
			alert(test.substring(7,4));          //o w
		    alert(test.substring(4,7));          //o w
		
		substring() 会把接收到的负数，全部转为 0 再进行截取
			let str = '12345';
			let sli1 = str.substring(-3, 3);  // '123'
			let sli1 = str.substring(3, -1);  // '123'
			let sli1 = str.substring(-3, -1);  // ''
 

	substr(start,length)   
		let str = '12345';
		let sli1 = str.substr(-3, 2);  // '34'
		let sli1 = str.substr(3, -1);  // ''
		let sli1 = str.substr(-3, -1);  // ''
		 
		substr() 第一个参数也是将传入的负数与字符串长度相加，转为正数。
		重点是第二个参数，如果是负数则会默认截取的长度为 0。所以最后两条语句都返回了空字符串 ''
 


	string.slice(start,end)
		let str = '12345';
		let sli1 = str.slice(-3, 4);  // '34'
		let sli1 = str.slice(3, -1);  // '4'
		let sli1 = str.slice(-3, -1);  // '34'
		如 str.slice(-3, 4) 就相当于 str.slice(2, 4) 转换为正数
	


	字符串转数字 
	parseInt("2")
	Number("23")
	+"1"

	判断是不是数字
	var a ="123";
	var b ="abc";
	console.log( a-0 ); //123
	console.log( b*1 ); //NAN

	返回指定位置的字符
	var str="Hello world!"
	document.write(str.charAt(1)) //e


	
	toString()	返回字符串对象值
	valueOf()	返回某个字符串对象的原始值