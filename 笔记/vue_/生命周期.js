
生命周期例子
钩子函数对应的阶段
生命周期 实例方法
Object.defineProperty()
访问器属性
v-model实现
分解任务
订阅发布---- 
双向绑定的实现
双向绑定的实现---







生命周期例子
	<!DOCTYPE html>
	<html>
	<head>
	    <title></title>
	    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
	</head>
	<body>
	
	<div id="app">
	     <p>{{ message }}</p>
	</div>
	
	<script type="text/javascript">
	    
	  var app = new Vue({
	      el: '#app',
	      data: {
	          message : "Hello Vue" 
	      },
	       beforeCreate: function () {
	                console.group('beforeCreate 创建前状态===============》');
	               console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
	               console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
	               console.log("%c%s", "color:red","message: " + this.message) //undefined 
	        },
	        created: function () {
	            console.group('created 创建完毕状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
	               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 [object Object] 
	               console.log("%c%s", "color:red","message: " + this.message); //已被初始化 Hello Vue 
	        },
	        beforeMount: function () {
	            console.group('beforeMount 挂载前状态===============》');
	            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
	            console.log(this.$el);
	               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
	               console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
	        },
	        mounted: function () {
	            console.group('mounted 挂载结束状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
	            console.log(this.$el);    
	               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
	               console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
	        },
	        beforeUpdate: function () {
	            console.group('beforeUpdate 更新前状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el);
	            console.log(this.$el);   
	               console.log("%c%s", "color:red","data   : " + this.$data); 
	               console.log("%c%s", "color:red","message: " + this.message); 
	        },
	        updated: function () {
	            console.group('updated 更新完成状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el);
	            console.log(this.$el); 
	               console.log("%c%s", "color:red","data   : " + this.$data); 
	               console.log("%c%s", "color:red","message: " + this.message); 
	        },
	        beforeDestroy: function () {
	            console.group('beforeDestroy 销毁前状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el);
	            console.log(this.$el);    
	               console.log("%c%s", "color:red","data   : " + this.$data); 
	               console.log("%c%s", "color:red","message: " + this.message); 
	        },
	        destroyed: function () {
	            console.group('destroyed 销毁完成状态===============》');
	            console.log("%c%s", "color:red","el     : " + this.$el);
	            console.log(this.$el);  
	               console.log("%c%s", "color:red","data   : " + this.$data); 
	               console.log("%c%s", "color:red","message: " + this.message)
	        }
	    })
	</script>
	</body>
	</html>
	
	




钩子函数对应的阶段

	1. 触发beforecreate钩子
		
		当一个vue实例被创建时 他向vue的响应式系统中 加入data对象中 能找到的所有属性
		
		利用 es5 特性 Object.defineProperty,遍历 data 对象下所有属性, 将其转为getter/setter 以便拦截对象的赋值和取值操作
		然后利用发布订阅模式 实现数据的双向绑定
		
		只有在data对象中 才是响应式的
		
		将methods 下的所有方法进行声明.
		
		将methods下的方法和data下的属性通过遍历和利用 es5 特性 Object.defineProperty代理到实例下.
			
			this.a = this.$data.a = this.data.a;
			
			this.fn = this.$methods.fn = this.methods.fn; 
	

	beforeCrete: 此时,$el和data都为undefined,没有初始化
	 el     : undefined
 	 data   : undefined
 	 message: undefined
	 


	2.created:     创建后data初始化了,而$el没有
	  el     : undefined
      data   : [object Object]
      message: Hello Vue
	
	
	 
	   
	 
	3.brforeMount: 挂载之前,$el和data都初始化了 虚拟dom
		  <div id=​"app">​
		     <p>​{{ message }}​</p>​//还没有对数据进行渲染
		  </div>​
	
	3.5 render 渲染真实dom 替换掉虚拟dom


	4.mounted:     Vue实例挂载完成了   真实dom   
	 
		  <div id=​"app">​
		 	 <p>​Hello Vue​</p>​//第1次渲染
		  </div>​
	
	5.beforeUpdate  更新前
	
	6.updated 重新渲染替换dom 
	      <div id=​"app">​
		 	 <p>​Hello Vue​</p>​//第2次渲染
		  </div>​
	
	
	
生命周期 实例方法

vm.$mount 手动挂载实例 
	const app = new Vue({
		//el:"#app",
		template: <div>hello</div>
	})
	app.$mount("#app")






https://cloud.tencent.com/developer/article/1004551

得到Render函数
	$mount方法就是整个渲染过程的起始点
	
	在渲染过程中，
		提供了三种渲染模式，自定义Render函数、template、el均可以渲染页面，
		这三种渲染模式最终都是要得到Render函数
		只是 render是直通车      template和el 需要解析 
	
	也就是对应我们使用Vue时，三种写法:

		1.自定义render:
			Vue.component("组件名称",{
			render:function(createElement){
				return createElement(
					'h'+this.level,
					this.$slots.default //子组件中的阵列
				)
			},
			props:{
				level:{
					type:Number,
					required:true
				}
			}
			})
		2.template
			var vm = new Vue({
				data:{
					data:{
						msg:123
					}
				},
				template:'<div>{{msg}}</div>'
			})

		3.el  
			var app = new Vue({

				el:'#app',
				data:{
					msg:'hello'
				}
			})
	
	通过Watcher监听数据的变化
	当数据发生变化时，Render函数执行生成VNode对象 
		得到VNode对象
			模拟dom树 
			通过diff算法 对比差异 将差异转为真实dom节点
	
	


















 

 Object.defineProperty() 直接在对象上定义一个新属性 或修改原有属性 并返回这个对象     

数据属性：
  [[Configurable]]: 表示能否修改属性。默认值为true

  [[Enumerable]]: 表示属性是否可枚举,也就是是否可以通过for-in循环返回属性。默认值为true

  [[Writable]]: 表示能否修改属性的值。默认值为true

  [[value]]: 包含这个属性的值.读取属性的时候就是通过这里开始读。默认值为undefined

  
访问器属性：
   [[Configurable]]: 表示能否修改属性。默认值为true

   [[Enumerable]]: 表示属性是否可枚举,也就是是否可以通过for-in循环返回属性。默认值为true

   [[Get]]: 在读取属性时调用的函数，默认时undefined

   [[Set]]: 在设置属性时调用的函数，默认时undefined

    我们要是想修改默认属性的值就可以使用：Object.defineProperty(obj,prop,descriptor);
 


var obj = {}
//为obj定义了一个名为hello的访问器属性
Object.defineProperty(obj,'hello',{
    get:function(){
        console.log('get方法被调用了');
    },
    set:function(val){ 
        console.log('set方法被调用了,'+"参数是"+val);
    }
})

obj.hello //可以像普通属性一样读取访问器属性 
//访问器属性的值 比较特殊 读取或设置 访问器属性的值 实际上是调用其内部特性: get 和 set函数
obj.hello //读取属性 就是调用get函数并返回get函数的返回值
obj.hello = 'sea'//为属性赋值  就是调用set函数 赋值其实是传参 



基本用法：
	var a= {}
	Object.defineProperty(a,"b",{
	    value:123
	});
	console.log(a.b);//123	


get set 不能和 Writable value 一起使用
get set 不能直接定义 要在Object.defineProperty() 中定义
	var a ={}
	Object.defineProperty(a, "b",{
		set:function(val){
			console.log('赋值是:'+val)
		},
		get:function(){
			console.log('取值:')
			return 2  // 本来是undefined 硬编码返回2
		}
	})
	a.b =1; //赋值是: 1  只要赋值就会触发set函数
	
	console.log(a.b) ;   //取值  2   只要取值就会触发get函数


Object.defineProperty 完整例子

<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <title>Document</title>
	</head>
	<body>
	    <script>
	        /*
	        var data = {}
	        function Observer(){ this.walk() }
	        Observer.prototype ={ 
	            walk:function(){this.convert()},
	            convert:function(){Object.defineProperty} 
	        }
	        */
	
	
	       var data = {
	            user:{
	                name:'xiaoming',
	                age:18
	            },
	            address:{
	                city:guangzhou 
	            }
	       } 
	       function Observer(data){
	           this.data = data;
	           this.walk(data);
	       }
	       Observer.prototype = {
	           walk:function(obj){
	               var value,key;
	               for(key in obj){
	                   if(obj.hasOwnProperty(key)){
	                       value = obj[key];
	                       if(typeof value === "object"){
	                           new Observer(value)
	                       }
	                       this.convert(key,value)
	                   }
	               }
	           },
	           convert:function(key,value){
	               Object.defineProperty(this.data, key,{
	                   get:function(){
	                       console.log('你访问了 ' +key);
	                       return value;
	                   },
	                   set:function(newvalue){
	                       value = newvalue;
	                       console.log('你设置了 '+key+'='+value);
	
	                   }
	               })
	           }
	       }
	       var example = new Observer(data);
	    </script>
	</body>
	</html>


v-model实现 

    <input type="text" id="a">
    <span id="b"></span>
    
    <script>
        var obj = {}
        Object.defineProperty(obj, 'hello',{
            set:function(newval){
                document.getElementById('a').value = newval;
                document.getElementById('b').innerHTML = newval
            }
        })
        document.addEventListener('keyup',function(e){
            obj.hello = e.target.value;
            //e.target表示该DOM元素，然后在获取其相应的属性值
        })
    </script>



分解任务
	 1、输入框以及文本节点与 data 中的数据绑定

　　 2、输入框内容变化时，data 中的数据同步变化。即 view => model 的变化。

　　 3、data 中的数据变化时，文本节点的内容同步变化。即 model => view 的变化。

实现任务一
	要对dom进行编译
 
		<body>
		    <div id="app">
		        <input type="text" id="a">
		        <span id="b"></span>
		    </div>
		    
		<script>
		    var dom = nodeToFragment(document.getElementById('app'))
		    console.log(dom)
		    
		    function nodeToFragment(node){
		        var flag = document.createDocumentFragment()
		        var child;
		        while (child = node.firstChild){
		            flag.appendChild(child)
		        }
		        return flag;
		    }
		    document.getElementById('app').appendChild(dom)
		
		</script>
		
		</body>

实现任务二
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="app">
    <input type="text" id="a">
    <span id="b"></span>
    </div>
    
<script>
function compile (node, vm) {
      var reg = /\{\{(.*)\}\}/;
      // 节点类型为元素
      if (node.nodeType === 1) {
        var attr = node.attributes;
        // 解析属性
        for (var i = 0; i < attr.length; i++) {
          if (attr[i].nodeName == 'v-model') {
            var name = attr[i].nodeValue; // 获取 v-model 绑定的属性名
            node.addEventListener('input', function (e) {
              // 给相应的 data 属性赋值，进而触发该属性的 set 方法
              vm[name] = e.target.value;
            });
            node.value = vm[name]; // 将 data 的值赋给该 node
            node.removeAttribute('v-model');
          }
        };
        new Watcher(vm, node, name, 'input');
      }
      // 节点类型为 text
      if (node.nodeType === 3) {
        if (reg.test(node.nodeValue)) {
          var name = RegExp.$1; // 获取匹配到的字符串
          name = name.trim();
          new Watcher(vm, node, name, 'text');
        }
      }
    }
function nodeToFragment(node,vm){
    var flag = document.createDocumentFragment()
    var child;
    while(child= node.firstChild){
        compile(child, vm);
        flag.appendChild(child)
    }
    return flag;
}

function Vue(options){
    this.data = options.data;
    var id = options.el;
    var dom = nodeToFragment(document.getElementById(id), this)
    //编译完成 将dom返回到app中
}


function Watcher (vm, node, name, nodeType) {
      Dep.target = this;
      this.name = name;
      this.node = node;
      this.vm = vm;
      this.nodeType = nodeType;
      this.update();
      Dep.target = null;
    }
    Watcher.prototype = {
      update: function () {
        this.get();
        if (this.nodeType == 'text') {
          this.node.nodeValue = this.value;
        }
        if (this.nodeType == 'input') {
          this.node.value = this.value;
        }
      },
      // 获取 data 中的属性值
      get: function () {
        this.value = this.vm[this.name]; // 触发相应属性的 get
      }
    }
    function Dep () {
      this.subs = []
    }


var vm = new Vue({
    el:"app",
    data:{
        text:'hello world'
    }
})

</script>

</body>
</html>



订阅发布---- 

订阅发布模式 又称观察者模式 定义了一种一对多的关系 让多个观察者同时监听某一个主题对象 
主题对象发生变化就通知所有的观察者


	 // 一个发布者 
	 var pub = {
	     publish:function(){  1
	         dep.notify(); //通知 11 12
	     }
	 }
	//三个订阅者
	var sub1 = {update:function(){console.log(1);}}2
	var sub2 = {update:function(){console.log(2);}}3
	var sub3 = {update:function(){console.log(3);}}4
	//一个主题对象
	function Dep(){
	    this.subs = [sub1,sub2,sub3]7
	}8
	Dep.prototype.notify = function(){5
	    this.subs.forEach(function(sub){ 13 遍历sub
	        sub.update();
	    })
	}
	//发布者发布消息 主题对象收到通知并推送给订阅者 订阅者执行update方法  文本节点则是作为订阅者
	var dep = new Dep();6 
	pub.publish()9 10
	
	
双向绑定的实现---

	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Document</title>
	</head>
	<body>
	    <div id="app">
	    <input type="text" v-model='text'>
	     {{text}}
	    </div>
	    
	<script>
	function observer(obj,vm){
	    Object.keys(obj).forEach(function(key){
	        defineReactive(vm, key, obj[key])
	    })
	}
	
	function defineReactive(obj, key, val){
	    var dep = new Dep();
	
	    Object.defineProperty(obj,key,{
	        get:function(){
	            //添加订阅者watcher到主题对象dep
	            if(Dep.target) dep.addSub(Dep.target)
	            return val
	        },
	        set:function(newval){
	            if(newval === val)return
	            val = newval
	            //作为发布者发出通知
	            dep.notify();
	        }
	    })
	}
	
	    function nodeToFragment(node, vm) {
	        var flag = document.createDocumentFragment()
	        var child;
	        while (child = node.firstChild) {
	            compile(child, vm);
	            flag.appendChild(child)//将子节点劫持到文档片段中
	        }
	        return flag;
	    }
	
	
	
	function compile (node, vm) {
	      var reg = /\{\{(.*)\}\}/;
	      // 节点类型为元素
	      if (node.nodeType === 1) {
	        var attr = node.attributes;
	        // 解析属性
	        for (var i = 0; i < attr.length; i++) {
	          if (attr[i].nodeName == 'v-model') {
	            var name = attr[i].nodeValue; // 获取 v-model 绑定的属性名
	            node.addEventListener('input', function (e) {
	              // 给相应的 data 属性赋值，进而触发该属性的 set 方法
	              vm[name] = e.target.value;
	            });
	            node.value = vm[name]; // 将 data 的值赋给该 node
	            node.removeAttribute('v-model');
	          }
	        };
	        new Watcher(vm, node, name, 'input');
	      }
	      // 节点类型为 text
	      if (node.nodeType === 3) {
	        if (reg.test(node.nodeValue)) {
	          var name = RegExp.$1; // 获取匹配到的字符串
	          name = name.trim();
	          new Watcher(vm, node, name, 'text');
	        }
	      }
	    }
	
	
	
	
	function Watcher (vm, node, name, nodeType) {
	      Dep.target = this;
	      this.name = name;
	      this.node = node;
	      this.vm = vm;
	      this.nodeType = nodeType;
	      this.update();
	      Dep.target = null;
	    }
	    Watcher.prototype = {
	      update: function () {
	        this.get();
	        if (this.nodeType == 'text') {
	          this.node.nodeValue = this.value;
	        }
	        if (this.nodeType == 'input') {
	          this.node.value = this.value;
	        }
	      },
	      // 获取 data 中的属性值
	      get: function () {
	        this.value = this.vm[this.name]; // 触发相应属性的 get
	      }
	    }
	    function Dep () {
	      this.subs = []
	    }
	function Dep(){
	    this.subs = []
	}
	
	Dep.prototype = {
	    addSub:function(sub){
	        this.subs.push(sub)
	    },
	    notify:function(){
	        this.subs.forEach(function(sub){
	            sub.update()
	        })
	    }
	}
	    function Vue(options) {
	        this.data = options.data;
	        var data = this.data;
	        observer(data, this)
	        var id = options.el;
	        var dom = nodeToFragment(document.getElementById(id), this)
	        //编译完成 将dom返回到app中
	        document.getElementById(id).appendChild(dom)
	    }
	
	var vm = new Vue({
	    el:"app",
	    data:{
	        text:'hello world'
	    }
	})
	
	</script>
	
	</body>
	</html>
	
	

通过Object.defineProperty的get和set进行数据劫持
通过遍历data数据进行数据代理到this上
通过{{}}对数据进行编译
通过发布订阅模式实现数据与视图同步





回顾一下，每当 new 一个 Vue，主要做了两件事：第一个是监听数据：observe(data)，第二个是编译 HTML：nodeToFragement(id)。

       在监听数据的过程中，会为 data 中的每一个属性生成一个主题对象 dep。

       在编译 HTML 的过程中，会为每个与数据绑定相关的节点生成一个订阅者 watcher，watcher 会将自己添加到相应属性的 dep 中。

       我们已经实现：修改输入框内容 => 在事件回调函数中修改属性值 => 触发属性的 set 方法。

       接下来我们要实现的是：发出通知 dep.notify() => 触发订阅者的 update 方法 => 更新视图。

       这里的关键逻辑是：如何将 watcher 添加到关联属性的 dep 中。

Watcher 函数中发生了什么呢


首先，将自己赋给了一个全局变量 Dep.target；

       其次，执行了 update 方法，进而执行了 get 方法，get 的方法读取了 vm 的访问器属性，从而触发了访问器属性的 get 方法，get 方法中将该 watcher 添加到了对应访问器属性的 dep 中；

       再次，获取属性的值，然后更新视图。

       最后，将 Dep.target 设为空。因为它是全局变量，也是 watcher 与 dep 关联的唯一桥梁，任何时刻都必须保证 Dep.target 只有一个值。





























































数据劫持+发布订阅模式



 为什么要做数据劫持？  所谓数据劫持就是给对象增加get,set

这样我们已经可以监听每个数据的变化了，那么监听到变化之后就是怎么通知订阅者了，所以接下来我们需要实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发notify，再调用订阅者的update方法，代码改善之后是这样

数据劫持和数据代理都实现了，那么接下来就需要编译一下了，把{{}}里面的内容解析出来