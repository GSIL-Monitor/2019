 

https://segmentfault.com/a/1190000016355776  边城 vue入门

应该怎么学  不要用战术上的勤奋掩盖战略上的懒惰


cdn
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

全局安装
npm install --global vue-cli

创建一个基本的webpack模板新项目
vue init webpack my-project
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

 
vue add element









目录
 
vue的src
 
插入值
	文本
	v-html
	v-pre
指令--
缩写   

v-bind
绑定html calss
	v-bind:class
绑定内联样式
	v-bind:style

计算属性 
计算属性的setter
千米转换 v-model 
购物车


数组更新 
过滤排序
 

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
	table中组件无效
	点击按钮 共享对象  修改同步
	
	模块系统
		在模块系统中局部注册
		基础组件的自动化全局注册
	style scoped----


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
 

 




插入值
	文本
		使用“Mustache”语法 {{双大括号}}
		 
	
	v-html
		双大括号会将数据解释为普通文本
		输入html  使用v-html
	
	v-pre
		<div v-pre>{{原样显示}}</div>

	特性
		Mustache 语法不能作用在 HTML 特性上，使用 v-bind 指令
	

	js表达式
		 
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

		无效
			语句
			流程控制



v-bind  v-bind https://www.jianshu.com/p/98dfa4c6389c

	运算 v-bind:title="t1 + ' ' + t2">
	函数 v-bind:title="getTitle()"
	对象      
		<p v-bind:title="obj">content</p>  //toString
		<p title="[object Object]">content</p>
	
	数组
		<p v-bind:title="arr">content</p>
		 <p title="1,2,3">content</p>


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

	三元表达式切换class
	   <div id="app">
          <div :class="[ isActive ? activecls : '', errorClass]">131</div>
      </div>
	    var vm = new Vue({
	      el: '#app',
	      data: {
	        isActive:true,
	        activecls:'active',
	        errorClass:'error'
	      },
	       
	    })

绑定内联样式

	对象语法
		<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
		data: {
		  activeColor: 'red',
		  fontSize: 30
		}
	数组语法
		<div v-bind:style="[baseStyles, overridingStyles]"></div>







指令--
	指令特性的值预期是单个 JavaScript 表达式

	参数
		在指令名称之后以冒号表示
		<a v-bind:href="url">...</a>
		告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

		<a v-on:click="doSomething">...</a>
	
	v-cloak 防止闪屏  
		这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕
		
		[v-cloak]{display:none}
		<div v-cloak> {{ message }} </div>
	
	v-once 只渲染元素和组件一次


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
	



数组更新 

	变异方法  会改变原始数组
		example1.items.push({ message: 'Baz' }) //末尾添加
		pop      末尾删除
		shift    头部删除
		unshift  头部添加
		sort()   排序
		reverse()反转 
		splice(index，删除的数量，item，item)
	
	
	
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
	

 	变异方法

       <div id="app">
           <div>
               <button @click="push">push</button>
               <button @click="pop">pop</button>
               <button @click="shift">shift</button>
               <button @click="unshift">unshift</button>
               <button @click="splice">splice</button>
               <button @click="sort">sort</button>
               <button @click="reverse">reverse</button>
           </div>
           <ul>
               <li v-for="item in items">
                   {{item.message}}
               </li>
           </ul>
       </div>
 
		  new Vue({
		  el: '#app',
		  data: {
		    items: [
		      {message: 'Foo' },
		      {message: 'Bar' },
		      {message: 'Baz' }
		    ],
		    addValue:{message:Math.round(Math.random()*10)}
		  },
		  methods:{
		    push(){
		      this.items.push(this.addValue)
		    },
		    pop(){
		      this.items.pop()
		    },
		    shift(){
		      this.items.shift()
		    },
		    unshift(){
		      this.items.unshift(this.addValue)
		    },
		    splice(){
		      this.items.splice(0,1)
		    },
		    sort(){
		     this.items.sort()
		    },
		    reverse(){
		      this.items.reverse()
		    },
		  }
		})
	
	非变异方法 
    	替换数组  不会改变原始数组，但总是返回一个新数组
		filter(), concat()   slice() map()

      <div id="app">
        <div>
          <button @click='concat'>concat</button>
          <button @click='slice'>slice</button>
          <button @click='map'>map</button>
          <button @click='filter'>filter</button>
        </div>
        <ul>
          <li v-for="item in items" >
            {{ item }}
          </li>
        </ul>  
        </div>


		new Vue({
		  el: '#app',
		  data: {
		    items: ['Foo','Bar','Baz'],
		    addValue:'match'
		  },
		  methods:{
		     
		    concat(){
		        this.items = this.items.concat(this.addValue)
		    },
		    slice(){
		      this.items =  this.items.slice(1)
		    },
		    map(){
		      this.items =  this.items.map(function(item,index,arr){
		        return index + item; 
		      })
		    },
		    filter(){
		      this.items =  this.items.filter(function(item,index,arr){
		        return (index > 0); 
		      })
		    }
		  }
		})
		
	无法检测
		不能检测变动的数组

		1. 设置值  vm.items[indexOfItem] = newValue
		2. 修改长度 vm.items.length = newLength

	解决:
		设置值  Vue.set
			Vue.set(example1.items, indexOfItem, newValue)
		
			// Array.prototype.splice
			example1.items.splice(indexOfItem, 1, newValue)
		
		修改长度
			example1.items.splice

	例子:
         <div id="app">
          <div>
            <button @click='setval1'>setval1</button>
            <button @click='setval2'>setval2</button>
            <button @click='setlength'>setlength</button>
          </div>
          <ul>
            <li v-for="item in items" >{{ item }}</li>
          </ul> 
          <p>{{ message }}</p> 
        </div>
		 <script>
		  var watchfunc = function () {
		     app.message = "数据发生变化";
		     setTimeout(function(){
		        app.message = "";
		     },1000);
		  }
		
		  new Vue({
		    el:"#app",
		    data:{
		        items:[1,2,3],
		        message:""
		    },
		    watch:{
		        items:watchfunc
		    },
		    methods:{
		        setval1(){
		            Vue.set(this.items, 0, "abc")   //修改第一个值为 abc
		        },
		        setval2(){
		            this.items.splice(1,1,"xioaming") //删除第二个值 添加新值
		        },
		        setlength(){
		            this.items.splice(2)  //数组长度设置为 2
		        }
		    }
		  })
		</script>
		

筛选排序
	有时 需要数组的过滤或排序副本  可以创建返回过滤或排序数组的计算属性

	偶数
	   <div id="app">
	       <ul>
	           <li v-for="n in evennumbers">{{n}}</li>
	       </ul>
	   </div>
	    <script> 
	    new Vue({
	        el:'#app',
	        data:{
	            numbers:[ 1, 2, 3, 4, 5 ],
	
	        },
	        computed:{
	            evennumbers:function(){
	                return this.numbers.filter(function(number){
	                    return number % 2 === 0
	                })
	            }
	        }
	    })
	   </script>


	在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 可以使用一个 method 方法
		<div id="app">
		  <ul>
		    <li v-for="n in even(numbers)">{{ n }}</li>
		  </ul> 
		</div>
		<script>
		var app = new Vue({
		  el: '#app',
		  data: {
		    numbers: [ 1, 2, 3, 4, 5 ],
		  },
		  methods: {
		    even: function (numbers) {
		      return numbers.filter(function (number) {
		        return number % 2 === 0
		      })
		    }
		  }
		})
		</script>
		



条件渲染---------------
 

 
v-if
	<span v-if="seen">true 显示  false 不显示</span>
	var app3 = new Vue({el:'#app-3', data: {seen:true} }) 

 v-for 
 	指令需要以 site in sites 形式的特殊语法
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



对象检测
	Vue 不能检测对象属性的添加或删除： 使用Vue.set(object, key, value)

	v-for with v-if
		当它们处于同一节点，v-for 的优先级比 v-if 更高	




事件处理

	v-on 指令添加一个事件监听器
	 
		<div id="app">
	       <p v-if="show">这是一段文本</p>
	       <button v-on:click="show = false">点击隐藏</button>
	     </div>
	
		new Vue({
		    el: '#app',
		    data:{
		        show:true
		    }   
		  })

	v-on 方法
		<div id="app">
		   <p v-if="show">这是一段文本</p>
		   <button v-on:click="handleclose">点击隐藏</button>
		</div>
		
		new Vue({
		    el: '#app',
		    data:{
		        show:true
		    },
		    methods:{
		        handleclose:function(){
		            this.close();
		
		        },
		        close:function(){
		            this.show = false;
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

例子:
  <div id="app">
      <button @mouseup.right="right" @mouseup.middle="middle" @mouseup.left="left">{{message}}</button>
  </div>
 
 var vm = new Vue({
  el: '#app',
  data: {
    message: '使用不同的键点击 查看效果'
  },
  methods:{
    left(){
      this.message = 'left'
    },
    right(){
      this.message = 'right'
    },
    middle(){
      this.message = 'middle'
    },        
  }

})
 



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
		
 






 


在组件上使用 v-model
	<input v-model="searchText">
	等价于：
	
	<input
	  v-bind:value="searchText"
	  v-on:input="searchText = $event.target.value"
	>










nextTick
例子:
  <div id="app">
     <div id="div" v-if='showDiv'> 这是一段文本</div>
     <button @click='getText'>获取div内容</button>
  </div>
  <script> 
    var app = new Vue({
        el:"#app",
        data:{showDiv:false},
        methods:{
            getText:function(){
                this.showDiv = true;
                this.$nextTick(function(){
                    var text = document.getElementById("div").innerHTML;
                    console.log(text)
                })
            }
        }
    }) 
  </script>



x-Templates
  <div id="app">
        <my-component></my-component>
        <script type='text/x-Template' id='my-component'>
            <div>这是组件的内容</div>
        </script>
  </div>
  <script> 

    Vue.component('my-component',{
        template:'#my-component'
    });
    var app = new Vue({
        el:"#app",
        
    }) 
  </script>



