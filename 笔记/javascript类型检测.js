

	typeof 
	
	
			Undefined	    "undefined"
			Null	        "object" 
			Boolean	        "boolean"
			Number	        "number"
			String	        "string"
			Symbol       	"symbol"
			function(){}    "function" 
			class C{}       "function"
			new Function()  "function" 
			任何其他对象  	"object"
			
			
	
	Object.prototype.toString
			如果 this 值是 undefined，就返回 [object Undefined]
			如果 this 的值是 null，就返回 [object Null]
			让 O 成为 ToObject(this) 的结果
			让 class 成为 O 的内部属性 [[Class]] 的值
			最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串
	
	14种类型
		var number = 1;          // [object Number]
		var string = '123';      // [object String]
		var boolean = true;      // [object Boolean]
		var und = undefined;     // [object Undefined]
		var nul = null;          // [object Null]
		var obj = {a: 1}         // [object Object]
		var array = [1, 2, 3];   // [object Array]
		var date = new Date();   // [object Date]
		var error = new Error(); // [object Error]
		var reg = /a/g;          // [object RegExp]
		var func = function a(){}; // [object Function]
		
		function checkType() {
		    for (var i = 0; i < arguments.length; i++) {
		        console.log(Object.prototype.toString.call(arguments[i]))
		    }
		}
		
		checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
		
		console.log(Object.prototype.toString.call(Math)); // [object Math]
		console.log(Object.prototype.toString.call(JSON)); // [object JSON]
		function a() {
		    console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
		}
		a();
		

	
	类型检测 class2type
		var class2type = {};
		
		// 生成class2type映射
		"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
		    class2type["[object " + item + "]"] = item.toLowerCase();
		})
		
		function type(obj) {
		    // 一箭双雕
		    if (obj == null) {
		        return obj + "";
		    }
		    return typeof obj === "object" || typeof obj === "function" ?
		        class2type[Object.prototype.toString.call(obj)] || "object" :
		        typeof obj;
		}
	
		有了 type 函数后，我们可以对常用的判断直接封装，比如 isFunction:
	
		function isFunction(obj) {
		    return type(obj) === "function";
		}
	
	
	jquery 检测空对象
		function isEmptyObject(obj){
			var name;
			for(name in obj){
				return false;
			}
			return true;
		}
		
		console.log(isEmptyObject({})); // true
		console.log(isEmptyObject([])); // true
		console.log(isEmptyObject(null)); // true
		console.log(isEmptyObject(undefined)); // true
		console.log(isEmptyObject(1)); // true
		console.log(isEmptyObject('')); // true
		console.log(isEmptyObject(true)); // true             
	
	
	检测window
		function isWindow( obj ) {
		    return obj != null && obj === obj.window;
		}
	
	
	检测DOM元素
		isElement = function(obj) {
		    return !!(obj && obj.nodeType === 1);
		};
	
	
	
	jquery isArrayLike
		function isArrayLike(obj) {
		
		    // obj 必须有 length属性
		    var length = !!obj && "length" in obj && obj.length;
		    var typeRes = type(obj);
		
		    // 排除掉函数和 Window 对象
		    if (typeRes === "function" || isWindow(obj)) {
		        return false;
		    }
		
		    return typeRes === "array" || length === 0 ||
		        typeof length === "number" && length > 0 && (length - 1) in obj;
		}		



