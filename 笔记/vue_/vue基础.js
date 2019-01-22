Node   Webpack Babel

https://segmentfault.com/a/1190000016355776  边城 vue入门

应该怎么学  用战术上的勤奋掩盖战略上的懒惰


cdn
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

全局安装
npm install --global vue-cli

创建一个基本的webpack模板新项目
vue init wepack my-project
	需要安装 template 项目模板
	project name  项目名称
	vue build 
	vue-router /no
	ESlint 不装
	set up unit test /no
	e2e  /no
cd my-project
npm install 
npm run dev

 request to https://registry.npmjs.org/webpack failed, reason: getaddrinfo ENOTFOUND registry.npmjs.org registry.npmjs.org:443

                                                       









目录
插入文本
vue的src
绑定元素特性

条件与循环
事件监听器

v-on
插入值
指令
缩写   

计算属性 

千米转换 v-model 
购物车
全部的按键别名

绑定html calss
绑定内联样式


条件渲染 v-if v-else v-show v-if v-for

列表渲染 数组v-for 对象v-for

事件处理 监听 处理方法 修饰符   监听按键

事件修饰符 按键修饰符 鼠标修饰符

表单输入绑定  值绑定 .lazy   .number  .trim  


组件--
组件注册 
	组件名
		组件名大小写
	全局注册
	局部注册
	模块系统
		在模块系统中局部注册
		基础组件的自动化全局注册

prop-----
	prop的大小写--
	传递静态和动态prop--
		传入一个数字
		传入一个布尔值
		传入一个数组
		传入一个对象
		传入一个对象的所有属性
	单向数据流--
	prop验证--
		类型检查--
	非prop特性--
		替换/合并已有的特性
		禁用特性继承

自定义事件
	事件名
	自定义组件的v-model
	将原生事件绑定到组件
	.sync修饰符

插槽
	插槽内容
	具名内容
	插槽的默认内容
	编译作用域
	作用域插槽
		解构 slot-scope

动态组件 & 异步组件

	在动态组件上使用keep-alive
	异步组件
		处理加载状态











声明式渲染
	采用模板将数据渲染进DOM系统

	插入文本
		<div id="app">{{message}}</div>
		var app = new Vue({el: '#app', data: {message: 'Hello Vue!'} })

	绑定元素特性  鼠标悬停
		v-bind:title="message"
		var app2 = new Vue({el:'#app-2', data: {message:"页面加载"+new Date().toLocaleString() } }) 
   
   <div id="app">
     {{5+5}} <br>
     {{ok ? "yes" : "no"}} <br>
     {{message.split('').reverse().join('') }}
     <div v-bind:id="'list-'+id">菜鸟教程</div>
   </div>
	
   new Vue({
    el:"#app",
    data:{
      ok:true,
      message:"google",
      id:1

    }
   })



	绑定地址
		vue的src 没有绑定的地址，分为两种情况
			一、本地地址    
				<img src="../../assets/head_0.png" alt="">
			二、有链接的地址     
				<img src="http://cdn.rv2go.com/aa.png" alt="">
		
		vue的src 通过v-bind动态绑定地址，分为两种情况
			一、本地地址
				<img v-for="(item,index) in 3" v-bind:src="require(`../../assets/head_${index}.png`)" alt="">
			二、有链接的地址    
				v-bind:src="'http://cdn.rv2go.com/'+item.productListImg"
 
条件与循环
	v-if
	 <span v-if="seen">true 显示  false 不显示</span>
	 var app3 = new Vue({el:'#app-3', data: {seen:true} }) 




	
	v-for 不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM 结构
	Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果。
	 v-for 指令需要以 site in sites 形式的特殊语法
	 var app4 = new Vue({
	   el: '#app-4',
	   data: {
	     todos: [
	       { text: '学习 JavaScript' },
	       { text: '学习 Vue' },
	       { text: '整个牛项目' }
	     ]
	   }
	 })  
	
	app4.todos.push({text:'新项目'})	


处理用户输入

	v-on 指令添加一个事件监听器
	<div id="app-5">
	    <p>{{message}}</p>
	    <button v-on:click = "reverse">翻转</button>
	 </div> 
	 var app5 = new Vue({
	  el: '#app-5',
	  data: {
	     message: 'hello vue'
	  },
	  methods:{
	    reverse:function(){
	        this.message = this.message.split('').reverse().join('')
	    }
	  }
	})
	
	表单的双向绑定
	v-model 

组件化应用构建
	任意类型的应用界面都可以抽象为一个组件树
	一个组件本质上是一个拥有预定义选项的一个 Vue 实例。




插入值
	文本
		使用“Mustache”语法 (双大括号)
		v-once 一次性插入文本 
	
	原始html
		双大括号会将数据解释为普通文本
		输入html  使用v-html
	特性
		Mustache 语法不能作用在 HTML 特性上，使用 v-bind 指令
	js表达式
		{{number+1}}
		{{ok ? "yes" : "no"}}
		{{message.split("").reverse().join()}}
		<div v-bind:id="'list-' + id"></div>
		

		无效
			语句
			流程控制
指令
	指令特性的值预期是单个 JavaScript 表达式

	参数
		在指令名称之后以冒号表示
		<a v-bind:href="url">...</a>
		告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

		<a v-on:click="doSomething">...</a>
	修饰符
		.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
		<from v-on:submit.prevent="onsubmit"></from>	

缩写
	v-bind  :
	<a :href="url"></a>

	v-on   @
	<a @click="doSomething"></a>



计算属性
	对于任何复杂逻辑，你都应当使用计算属性。

计算属性缓存vs 方法
	计算属性是基于它们的依赖进行缓存的 数据没有改变时 直接调用缓存  响应速度快   方法每次都要执行 
	<p>reversed message: "{{ reversedMessage   }}"</p> //属性 
	<p>Reversed message: "{{ reversedMessage() }}"</p> //方法

计算属性 vs 监听属性
	var vm = new Vue({
	    el:"#demo",
	    data: {
	        firstname:"foo",
	        lastname:"bar"
	    },
	    computed:{
	        fullName:function(){
	            return this.firstname+" "+this.lastname
	        }
	    }
	})

计算属性的setter
	<div id="app">
	  <p>{{ site }}</p>
	</div>
	var vm = new Vue({
	    el:"#app",
	    data:{
	        name:'google',
	        url:'www.google.com'
	
	    },
	    computed:{
	        site:{
	            //getter
	            get: function(){
	                return this.name+" "+this.url
	            },
	            //setter
	            set:function(newvalue){
	                var names = newvalue.split(' ')
	                this.name = names[0]
	                this.url = names[names.length-1]
	            }
	        }
	    }
	})
	
	 vm.site = '菜鸟教程 http://www.runoob.com';
	 document.write('name: ' + vm.name);
	 document.write( "<br>");
	 document.write('url: ' + vm.url);
 


千米转换
	<div id = "props">
	   千米 : <input type = "text" v-model = "kilometers">
	   米 : <input type = "text" v-model = "meters">
	</div>  
	<p id="info"></p>
	
	 var vm = new Vue({
	     el:'#props',
	     data:{
	         km:0,
	         m:0
	     },
	     methods:{
	
	     },
	     computed:{
	
	     },
	     watch:{
	         km:function(val){
	             this.km = val;
	             this.m = val*1000;
	
	         },
	         methods:function(val){
	             this.km = val.val/1000;
	             this.m = val;
	         }
	     }
	 });
	 //$watch 是一个实例
	 vm.$watch('km',function(newvalue,oldvalue){
	     
	     document.getElementById("info").innerHTML = "修改前的值："+oldvalue+","+"修改后的值"+newvalue
	 })

购物车
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>Document</title>
	    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<style>
	  table {
	    border: 1px solid black;
	}
	table {
	    width: 100%;
	}
	
	th {
	    height: 51px;
	}
	th, td {
	    border-bottom: 1px solid #ddd;
	  text-align:center;
	}
	</style>
	</head>
	<body>
	  
	<div id="app">
	    <table>
	    <tr>
	        <th>序号</th>
	        <th>商品名称</th>
	        <th>商品价格</th>
	        <th>购买数量</th>
	        <th>操作</th>
	    </tr>
	    <tr v-for="iphone in Ip_Json">
	        <td>{{ iphone.id }}</td>
	        <td>{{ iphone.name }}</td>
	        <td>{{ iphone.price }}</td>
	        <td>
	        <button v-bind:disabled="iphone.count === 0" v-on:click="iphone.count-=1">-</button>
	        {{ iphone.count }}
	        <button v-on:click="iphone.count+=1">+</button>
	        </td>
	        <td>
	        <button v-on:click="iphone.count=0">移除</button>
	        </td>
	    </tr>
	    </table>
	    总价：${{totalPrice()}}
	</div>
	<script> 
	var app = new Vue({
	  el: '#app',
	  data: {
	    Ip_Json: [{
	      id: 1,
	      name: 'iphone 8',
	      price: 5099,
	      count: 1
	    },
	    {
	      id: 2,
	      name: 'iphone xs',
	      price: 8699,
	      count: 1
	    },
	    {
	      id: 3,
	      name: 'iphone xr',
	      price: 6499,
	      count: 1
	    }]
	
	  },
	  methods:{
	    totalPrice : function(){
	      var totalP = 0;
	      for (var i = 0,len = this.Ip_Json.length;i<len;i++) {
	        totalP+=this.Ip_Json[i].price*this.Ip_Json[i].count;
	      }
	      return totalP;
	    }
	  }
	})
	  </script>
	
	</body>
	</html>
	





calss style 绑定--------------
	操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可

绑定html calss
	对象语法
	v-bind:class   true就显示  可能是一段逻辑 结果为true

		<div class="static"
    	 v-bind:class="{ active: isActive, 'text-danger': hasError }">
		</div>
		data: {
		  isActive: true,
		  hasError: false
		}
	
	数组语法

		<div v-bind:class="[activeClass, errorClass]"></div>
		data: {
		  activeClass: 'active',
		  errorClass: 'text-danger'
		}
	用在组件上


绑定内联样式

	对象语法
		<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
		data: {
		  activeColor: 'red',
		  fontSize: 30
		}
	数组语法
		<div v-bind:style="[baseStyles, overridingStyles]"></div>




条件渲染---------------
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>


v-if v-show
v-show 只是简单地切换元素的 CSS 属性 display。
v-show 不支持 <template> 元素，也不支持 v-else 
 
 频繁地切换  v-show 较好 
 条件很少改变 v-if 较好 

v-if v-for
不推荐同时使用 v-if 和 v-for



列表渲染----------------------

数组v-for
	<li v-for="item in items"> {{ item.message }} </li>
	items: [{ message: 'Foo' }, { message: 'Bar' } ]

	两个参数
		 <li v-for="(item, index) in items">
		    {{ parentMessage }} - {{ index }} - {{ item.message }}
		  </li>
		
		data: {
		    parentMessage: 'Parent',
		    items: [
		      { message: 'Foo' },
		      { message: 'Bar' }
		    ]
		  }
		输出：
			Parent - 0 - Foo
			Parent - 1 - bar
	


对象v-for   在遍历对象时，是按 Object.keys() 的结果遍历
	
	第二个的参数为键名
		<div v-for="(value, key) in object">
		  {{ key }}: {{ value }}
		</div>
	第三个参数为索引： 
		<div v-for="(value, key, index) in object">
		  {{ index }}. {{ key }}: {{ value }}
		</div>


key
	建议尽可能在使用 v-for 时提供 key


数组更新检测

	变异方法  会改变原始数组
		example1.items.push({ message: 'Baz' }) //末尾添加
		pop      末尾删除
		shift    头部删除
		unshift  头部添加
		sort()   排序
		reverse()反转 
		splice(index，删除的数量，item，item)
	
	替换数组  不会改变原始数组，但总是返回一个新数组
	filter(), concat()   slice()
	
	注意事项
	
		var vm = new Vue({
		  data: {
		    items: ['a', 'b', 'c']
		  }
		})
		
		vm.items[1] = 'x' // 不是响应性的
		解决：
			 
			Vue.set(vm.items, indexOfItem, newValue)
			// Array.prototype.splice
			vm.items.splice(indexOfItem, 1, newValue)
		
		
		vm.items.length = 2 // 不是响应性的
		解决：
			vm.items.splice(newLength)
	


对象检测
	Vue 不能检测对象属性的添加或删除： 使用Vue.set(object, key, value)

	v-for with v-if
		当它们处于同一节点，v-for 的优先级比 v-if 更高	




事件处理

监听
	<div id="example-1">
	  <button v-on:click="counter += 1">Add 1</button>
	  <p>The button above has been clicked {{ counter }} times.</p>
	</div>
	var example1 = new Vue({
	  el: '#example-1',
	  data: {
	    counter: 0
	  }
	})



处理方法
	<div id="example-2">
	  <!-- `greet` 是在下面定义的方法名 -->
	  <button v-on:click="greet">Greet</button>
	</div>
	var app = new Vue({
	  el: '#app',
	   data:{
	     name:'sky'
	   },
	   // 在 `methods` 对象中定义方法
	   methods:{
	    greet:function(event){
	      alert("hello "+this.name)
	    }
	   }
	  
	})

内联中的处理方法
	<div id="app">
	   <button v-on:click="say('what')">Say what</button>  
	 </div>
	var app = new Vue({
	  el: '#app',
	   methods:{
	    say:function(message){
	      alert(message)
	    }
	   }
	  
	})

修饰符

事件修饰符

	stop     停止冒泡
	prevet   提交事件不重载页面
	stop.prevent  可以串联
	capture   捕获
	once      只会触发一次
	
	event.target jq里 那个元素触发了事件
	self  是当前元素自身时触发处理函数
	
	v-on:click.prevent.self 会阻止所有的点击
	v-on:click.self.prevent 只会阻止对元素自身的点击

按键修饰符
全部的按键别名：

.enter
.tab
.delete (捕获 "删除" 和 "退格" 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift


监听按键
	<input type="text" v-on:keyup="getkey" id="app" />
	new Vue({
	  el:"#app",
	  methods:{
	    getkey:function(event){
				console.log(event.key)
	    }
	  }
	})



鼠标修饰符
.left
.right
.middle


系统修饰键
.ctrl
.alt
.shift



表单输入绑定  

文本单行  多行 
	<div id="app">
	  <p>input 元素：</p>
	  <input v-model="message" placeholder="编辑我……">
	  <p>消息是: {{ message }}</p>
		
	  <p>textarea 元素：</p>
	  <p style="white-space: pre">{{ message2 }}</p>
	  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
	</div>
	new Vue({
	  el: '#app',
	  data: {
	    message: 'Runoob',
		message2: '菜鸟教程\r\nhttp://www.runoob.com'
	  }
	})

复选框  单个多个
	<div id="app">
	  <p>单个复选框：</p>
	  <input type="checkbox" id="checkbox" v-model="checked">
	  <label for="checkbox">{{ checked }}</label>
		
	  <p>多个复选框：</p>
	  <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
	  <label for="runoob">Runoob</label>
	  <input type="checkbox" id="google" value="Google" v-model="checkedNames">
	  <label for="google">Google</label>
	  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
	  <label for="taobao">taobao</label>
	  <br>
	  <span>选择的值为: {{ checkedNames }}</span>
	</div>
	new Vue({
	  el: '#app',
	  data: {
		checked : false,
	    checkedNames: []
	  }
	})

单选按钮
	<div id="app">
	  <input type="radio" id="runoob" value="Runoob" v-model="picked">
	  <label for="runoob">Runoob</label>
	  <br>
	  <input type="radio" id="google" value="Google" v-model="picked">
	  <label for="google">Google</label>
	  <br>
	  <span>选中值为: {{ picked }}</span>
	</div>
	
	new Vue({
	  el: '#app',
	  data: {
		picked : 'Runoob'
	  }
	})

下拉选择框
	<div id="example">
	  <select v-model="selected">
	    <option disabled value="">请选择</option>
	    <option>A</option>
	    <option>B</option>
	    <option>C</option>
	  </select>
	  <span>Selected: {{ selected }}</span>
	</div>
	new Vue({
	  el: '#example',
	  data: {
	   selected: 'A' //或者绑定到数组  selected: []
	  }
	})


值绑定 
	把值绑定到vue实例的动态属性上
	<!-- 当选中时，`picked` 为字符串 "a" -->
	<input type="radio" v-model="picked" value="a">
	
	<!-- `toggle` 为 true 或 false -->
	<input type="checkbox" v-model="toggle">
	
	<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
	<select v-model="selected">
	  <option value="abc">ABC</option>
	</select>

	单选按钮
	 
		<input type="radio" v-model="pick" v-bind:value="a">
		// 当选中时
		vm.pick === vm.a
	
	选择框的选项
		<select v-model="selected">
		    <!-- 内联对象字面量 -->
		  <option v-bind:value="{ number: 123 }">123</option>
		</select>
		// 当选中时
		typeof vm.selected // => 'object'
		vm.selected.number // => 123
	
	
	.lazy
		输入数据 按回车才更新 
		<input v-model.lazy="msg" >
	.number
		将值转为数值类型  
		<input v-model.number="age" type="number">
	
	.trim  
		去掉首尾空格
		<input v-model.trim="msg">	
	例子：
		<div id="app" >
		 <input v-model.trim.lazy="msg" >
		  <p>{{msg}}</p>
		  <button v-on:click="getmsg">按钮</button>  
		</div>
		new Vue({
		  el:"#app",
		  data(){
		    return{
		      msg:"123"
		    }
		  },
		  methods:{
		    getmsg:function(event){
					console.log(this.msg)
		    }
		  }
		})
		
组件基础

	一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

	注册 全局组件 
		Vue.component(tagName, options)
		tagName 为组件名，options 为配置选项。注册后
	
	调用组件：	
		<tagName></tagName>


	全局组件实例
		<div id="app">
		  <sky></sky>
		</div>
		
		//注册
		  Vue.component('sky',{
		    template:'<h1>自定义组件</h1>'
		  })
		//创建根实例
		new Vue({el:"#app"})
	
	
	局部组件
	  <div id="sky">
	    <zujian></zujian>
	  </div>
	  var child = {
	    template:'<h1>自定义组件!</h1>'
	  }
	
	  //创建根实例
	  new Vue({
	    el:"#sky",
	    components:{
	      //<zujian>只在父模板可用
	      'zujian':child
	    }
	  })
	

在组件上使用 v-model
	<input v-model="searchText">
	等价于：
	
	<input
	  v-bind:value="searchText"
	  v-on:input="searchText = $event.target.value"
	>






组件--
组件注册 
	组件名
		组件名大小写
			my-component-name 必须包含一个连字符 这会避免在未来产生元素冲突
			直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

			kebab-case 连字符    PascalCase 驼峰  
	全局注册
		
	 
		Vue.component('component-a', { /* ... */ })
		Vue.component('component-b', { /* ... */ })
		Vue.component('component-c', { /* ... */ })
		
		new Vue({ el: '#app' })
		<div id="app">
		  <component-a></component-a>
		  <component-b></component-b>
		  <component-c></component-c>
		</div>
		
		通过 Vue.component 来注册全局组件
		可以用在任何根实例（new Vue）模板中
		在所有子组件中都可以相互使用



	局部注册
		通过普通的对象来定义组件
			var ComponentA = { /* ... */ }
			var ComponentB = { /* ... */ }
			var ComponentC = { /* ... */ }
		在components选项中定义要使用的组件
			new Vue({
			  el: '#app',
			  components: {
			    'component-a': ComponentA,
			    'component-b': ComponentB
			  }
			})
		component对象 中的每个属性  
			属性名 是自定义元素名 
			属性值 是这个组件的选项对象
		
		
		局部注册在子组件中不可用
			解决: 
				var ComponentA = { /* ... */ }
				
				var ComponentB = {
				  components: {
				    'component-a': ComponentA
				  },
				  // ...
				}
		
		使用es6 模块
			import ComponentA from './ComponentA.vue'
			
			export default {
			  components: {
			    ComponentA //简写
			  },
			  // ...
			}
		


	模块系统
		在模块系统中局部注册
			通过 import/require 使用一个模块系统
			
			在ComponentB.js模块中使用 ComponentA 和 ComponentC
			    导入模块 放在component目录中
				import ComponentA from './ComponentA'
				import ComponentC from './ComponentC'
				
				export default {
				  components: {
				    ComponentA,
				    ComponentC
				  },
				  // ...
				}
		

		基础组件的自动化全局注册

			被频繁用到的基础组件 应该注册为全局组件

			全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
			
			流程：
			使用 require.context 来全局注册一些基础组件
			'./components' 其组件目录的相对路径 
			是否查询子目录 
			匹配 基础组件文件名的 正则

			去掉 文件名开头和结尾 的 ./  拓展名
			得到文件名
			在Vue.component中全局注册组件
	
	style
		<style scoped>
			添加scoped属性 代表样式只在当前组件中生效  
			意味着css 有了作用域概念
		</style>



prop-----
	prop使用场景：父组件需要向子组件传递消息的时候，子组件就可以定义prop属性，来接受父组件传递消息


	prop的大小写
		HTML  是大小写不敏感的 所以浏览器会全部 解释为小写字符
		如果你使用字符串模板，那么这个限制就不存在了
		
	prop类型
	以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型
		props: {
		  title: String,
		  likes: Number,
		  isPublished: Boolean,
		  commentIds: Array,
		  author: Object
		}




	传递静态和动态prop--

		给prop传入一个静态值
			<blog-post title="My journey with Vue"></blog-post>
		
		prop 可以通过 v-bind 动态赋值	
	
			<!-- 动态赋予一个变量的值 -->
			<blog-post v-bind:title="post.title"></blog-post>
			
			<!-- 动态赋予一个复杂表达式的值 -->
			<blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>



		传入一个数字
			<!-- 这是一个 JavaScript 表达式而不是一个字符串  数字和布尔都是表达式。-->
			<blog-post v-bind:likes="42"></blog-post>
			
			<!-- 用一个变量进行动态赋值。-->
			<blog-post v-bind:likes="post.likes"></blog-post>
		传入一个布尔值
			<blog-post v-bind:is-published="false"></blog-post>
			<blog-post v-bind:is-published="post.isPublished"></blog-post>

		传入一个数组
			<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
			<blog-post v-bind:comment-ids="post.commentIds"></blog-post>
		传入一个对象
			<blog-post v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"></blog-post>
			<blog-post v-bind:author="post.author"></blog-post>
		传入一个对象的所有属性
			post: {id: 1, title: 'My Journey with Vue'}
			<blog-post v-bind="post"></blog-post>
			等价于
			<blog-post
			  v-bind:id="post.id"
			  v-bind:title="post.title"
			></blog-post>



	单向数据流--
		父级 prop 的更新会向下流动到子组件中，但是反过来则不行
		
		每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。

		这意味着你不应该在一个子组件内部改变 prop
	
	prop验证--
		Vue.component('my-component', {
		  props: {
		    // 基础的类型检查 (`null` 匹配任何类型)
		    propA: Number,
		    // 多个可能的类型
		    propB: [String, Number],
		    // 必填的字符串
		    propC: {
		      type: String,
		      required: true
		    },
		    // 带有默认值的数字
		    propD: {
		      type: Number,
		      default: 100
		    },
		    // 带有默认值的对象
		    propE: {
		      type: Object,
		      // 对象或数组默认值必须从一个工厂函数获取
		      default: function () {
		        return { message: 'hello' }
		      }
		    },
		    // 自定义验证函数
		    propF: {
		      validator: function (value) {
		        // 这个值必须匹配下列字符串中的一个
		        return ['success', 'warning', 'danger'].indexOf(value) !== -1
		      }
		    }
		  }

		类型检查--

			function Person (firstName, lastName) {
			  this.firstName = firstName
			  this.lastName = lastName
			}
			你可以使用：
			
			Vue.component('blog-post', {
			  props: {
			    author: Person
			  }
			})
			来验证 author prop 的值是否是通过 new Person 创建的。
	

	非prop特性--
		一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。
		
		替换/合并已有的特性--
			从外部提供给组件的值会替换掉组件内部设置好的值  所以如果传入 type="text" 就会替换掉原本的 type="date"
			class 和 style 特性会稍微智能一些，即两边的值会被合并起来
		禁用特性继承--
			Vue.component('my-component', {
			  inheritAttrs: false,
			  // ...
			})
		
		在撰写基础组件的时候是常会用到的：
			
			Vue.component('base-input', {
			  inheritAttrs: false,
			  props: ['label', 'value'],
			  template: `
			    <label>
			      {{ label }}
			      <input
			        v-bind="$attrs"
			        v-bind:value="value"
			        v-on:input="$emit('input', $event.target.value)"
			      >
			    </label>
			  `
			})

自定义事件
	事件名
		始终使用 kebab-case 的事件名。
	自定义组件的v-model
		Vue.component('base-checkbox', {
		model:{
		prop:'checked',
		event:'change'
		 },
		props:{
			checked:Boolean
		 },
		template:`
		<input 
			type="checkbox" 
			v-bind:checked="checked"
			v-on:change="$emit('change', $event.target.checked)"
		> `
		<base-checkbox v-model="lovingVue"></base-checkbox>
		解释：这里的 lovingVue 的值将会传入这个名为 checked 的 prop。
			  同时当 <base-checkbox> 触发一个 change 事件并附带一个新的值的时候，
			  这个 lovingVue 的属性将会被更新


	将原生事件绑定到组件
	
		<div id='root'>
	　　		<child @click.native='handleClick'></child>
		</div>
		
		<script>
			Vue.component('child',{
			　　template:'<div>hello</div>'
			})
			var vm = new Vue({
			　　el:'#root',
			　　methods:{
			　　　　handleClick:function(){
			　　　　　　alert(1);
			　　　　}
			　　}
			})
		</script>
		.native，告诉vue监听的是原生事件
	
    点击获取当前对象 http://www.cnblogs.com/meng1314-shuai/p/7455575.html
	currentTarget	返回其事件监听器触发该事件的元素。
	target	返回触发此事件的元素（事件的目标节点）。
	 
	
	    


	.sync修饰符
		this.$emit('update:title', newTitle)
		<text-document
		  v-bind:title="doc.title"
		  v-on:update:title="doc.title = $event"
		></text-document>


插槽
	插槽内容
	具名内容
	插槽的默认内容
	编译作用域
		 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译
	作用域插槽
		解构 slot-scope

动态组件 & 异步组件

	在动态组件上使用keep-alive
	异步组件
		处理加载状态




