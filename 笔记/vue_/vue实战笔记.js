实例的数据对象
	data
	methods
	computed
	get set
	watch

生命周期
	钩子函数
	生命周期 实例方法 

响应式原理
	追踪变化
	变化检测
	声明响应式属性
	异步更新队列


数据绑定
	生命周期钩子
	插值与表达式
	过滤器
指令与事件
语法糖




3 计算属性
	计算属性用法
	计算属性缓存

4 v-bind  
	小 模板内容 里面是 计算属性 class绑定
	class style 绑定
	绑定内敛样式


5 基本指令
	v-cloak
	v-once
条件渲染
	v-if

列表渲染
	v-for
	小数组更新
	小过滤排序
方法与事件
    小 v-on  修饰符 阻止默认
	购物车

6表单与 v-model
	小表单控件  
	绑定值

7组件
	用法
	prop传递数据
		基本用法
		单向数据流
		数据验证

	组件通讯
		自定义事件
	slot
	
	高级用法
	递归组件
	动态组件
	异步组件

	$nextTic
	X-Templates

	两个常用组件的开发
	选项卡

8 自定义指令 

	小火柴 自定义指令  https://www.xiaohuochai.cc/posts/5b11e29993b30d62504cb6a0
	开发一个可从外部关闭的下拉菜单
	开发一个实时时间转换指令 v-time

	

9 render
	vnode
	render
	createElement
	函数化组件
	jsx

	使用 Render 函数开发可排序的表格组件
	留言列表


10 webpack

	单文件组件与vue-loader
	用于生产环境

11 路由
	基本用法
		跳转
	高级用法
	
	状态管理与vuex
		状态管理与使用场景
		vuex
		高级用法

	中央事件总线插件 vue-bus

12 iView 经典组件


知乎日播报
电商网站





-----------------分界线---------------------------





实例的数据对象
data
	data是Vue的实例对象 vue将会递归的将data的属性 转换为getter setter  从而让data能响应变化
	
	Vue实例 代理了data对象上所有的属性  
 	以_或$开头的属性不会被Vue实例代理
 	vm.a 等价于 vm.$data.a
	
	例子:
	     <div id="app">{{message}}</div>
		 var vm= new Vue({
	        el:"#app",
	        data:{
	            message:"hello vue",
	            _name: '小火柴'
	        }
	    }) 
	   console.log(vm._name) //undefined
	   console.log(vm.$data._name) //sea


 

methods
	计算属性     会缓存
	methods方法  不缓存  每次都执行
	
    例子:
	<div id="app">
	  <p>计算属性: "{{ time1 }}"</p>
	  <p>methods方法: "{{ time2() }}"</p>
	</div>
	
	   var vm = new Vue({
	    el:"#app",
	  data: { message:"sea"},
	 
	  computed:{
	    time1:function(){
	        return (new Date()).toLocaleTimeString()
	    } 
	  },
	  methods:{
	    time2:function(){
	        return (new Date()).toLocaleTimeString()
	    }
	  },
	

	
	})




computed
	计算属性函数computed 被混入到vue实例中  
	所有getter/setter 的this上下文自动的绑定为 vue实例

	例子:
		<div id="example">
		  <p>原始字符串: "{{ message }}"</p>
		  <p>反向字符串: "{{ reversedMessage }}"</p>
		</div>
		var vm = new Vue({
		  el: '#example',
		  data: {
		    message: '小火柴'
		  },
		  computed: {
		    reversedMessage: function () {
		      return this.message.split('').reverse().join('')
		    }
		  }
		})
	

	get set

	例子:
		<div id="app"></div>

		 var vm = new Vue({
		    el:"#app",
		  data: { a: 1 },
		  computed: {
		    // 仅读取，值只须为函数
		    aDouble: function () {
		      return this.a * 2
		    },
		    // 读取和设置
		    aPlus: {
		      get: function () {
		        return this.a + 1
		      },
		      set: function (v) {
		        
		        this.a = v - 1
				console.log(v) //3
		      }
		    }
		  }
		})
		console.log(vm.aPlus);//2
		vm.aPlus = 3
		console.log(vm.a);//2
		console.log(vm.aDouble);//4	
		

watch
	vue提供了一种通用的方式来观察和响应 vue实例上的数据变动 

	watch属性 是一个对象 
	 键 是需要观察的表达式
	 值 是对应的回调函数

	 Vue实例将会在实例化时调用$watch()，遍历watch对象的每一个属性

	 例子:
		<div id="app">
		    <button @click="a++">加1</button>
		    <p>{{message}}</p>
		</div>
		   var vm = new Vue({
		    el:"#app",
		  data: { 
		    a:3,
		    message:" "
		  },
		  
		  watch:{
		    a:function(val, oldval){
		        this.message=  oldval+"   "+val;
		    }
		  }
		
		})
 
	取消观察:
		 var vm = new Vue({
		  el: '#app',
		  data: {
		    a: 1,
		    message:''
		  }
		})
		var unwatch = vm.$watch('a',function(val, oldVal){
		  if(val === 10){
		    unwatch();
		  }
		  this.message = 'a的旧值为' + oldVal + '，新值为' + val; 
		})
	


生命周期

钩子函数:
	 beforeCreate 
	    实例开始初始化 数据观测 (data observer) 和 event/watcher 事件配置之前被调用  
	    未挂载  $el 不可用 
	
	 created
	    在实例创建完成后被立即调用 在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调 ，
	    挂载阶段还没开始，$el不可用 
	 
	 beforeMount
	    在挂载开始之前被调用：相关的 render 函数首次被调用 
	
	 
	 mounted
	    el 被新创建的 vm.$el 替换，
	    并挂载到实例上去之后调用该钩子
	
	beforeUpdate
	    数据更新时调用，发生在虚拟 DOM 打补丁之前 
	    这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器 
	
	updated
	    当这个钩子被调用时，组件 DOM 已经更新，
	
	beforeDestroy
	    实例销毁之前调用 在这一步 实例仍然可用 
	destroyed
	    Vue 实例销毁后调用 调用后 所有的事件监听器会被移除，所有的子实例也会被销毁。

生命周期 实例方法 

	vm.$destroy() 
		销毁一个实例  触发 beforeDestroy 和 destroyed 的钩子 
	
	vm.$mount() 手动地挂载一个未挂载的实例 
	
	vm.$forceUpdate() 强制重新渲染




	例子:
		<div id="example">{{message}}</div>
		 
		var vm = new Vue({
		  el: '#example',
		  data:{
		    message:'match'
		  },
		  beforeCreate(){
		    console.log('beforeCreate');
		  },
		  created(){
		    console.log('created');
		  },
		  beforeMount(){
		    console.log('beforeMount');
		  },
		  mounted(){
		    console.log('mounted');
		  },
		  beforeUpdate(){
		    console.log('beforeUpdate');
		  },
		  updated(){
		    console.log('updated');
		    //组件更新后调用$destroyed函数，进行销毁
		    this.$destroy();    
		  },
		  beforeDestroy(){
		    console.log('beforeDestroy');
		  },
		  destroyed(){
		    console.log('destroyed');
		  },
		})
		



响应式原理
	追踪变化
		把一个普通JS对象传给Vue实例的data选项，Vue将遍历此对象所有的属性，并使用Object.defineProperty把这些属性全部转为getter/setter

		每个组件实例都有相应的 watcher 实例对象，
		它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，
		会通知 watcher 重新计算，从而致使它关联的组件得以更新。

	变化检测
		由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，
		所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
		例子:
			var vm = new Vue({
			  data:{
			    a:1
			  }
			})
			//  vm.a  是响应的
			vm.b = 2
			//  vm.b  是非响应的
	声明响应式属性
		var vm = new Vue({
		  data: {
		    // 声明 message 为一个空值字符串
		    message: ''
		  },
		  template: '<div>{{ message }}</div>'
		})
		// 之后设置 `message` 
		vm.message = 'Hello!'		
	异步更新队列
		当设置vm.someData='new value'，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新  使用Vue.nextTick(callback)

 

	 

 
4 v-bind  
	小 模板内容 里面是 计算属性 class绑定
	class style 绑定
	绑定内敛样式


5 和 6 放到vue基础
5 基本指令
	v-cloak
	v-once
条件渲染
	v-if

列表渲染
	v-for
	小数组更新
	小过滤排序
方法与事件
    小修饰符 
	购物车

6表单与 v-model
	小表单控件 
	https://www.xiaohuochai.cc/posts/5b11fdf593b30d62504cb6b6
	绑定值


7 放到 'vue prop 组件',js

7组件
	用法
	prop传递数据
		基本用法
		单向数据流
		数据验证	

	组件通讯
		自定义事件
	slot
	
	高级用法
	递归组件
	动态组件
	异步组件

	$nextTic
	X-Templates

	两个常用组件的开发
	选项卡

8 9 放到 可复用

8 自定义指令 
	开发一个可从外部关闭的下拉菜单
	开发一个实时时间转换指令 v-time

9 render
	vnode
	render
	createElement
	函数化组件
	jsx

	使用 Render 函数开发可排序的表格组件
	留言列表


10 webpack

	vue-loader
	用于生产环境

11 路由
	状态管理与vuex

	中央事件总线插件 vue-bus

12 iView 经典组件


知乎日播报
电商网站




	

vue 第十一章 插件
	vue-router基本用法
	
	跳转---
	高级用法

	vuex
	状态管理和使用场景
	vuex基本用法
	高级用法

	实战: 中央事件总线插件 vue-bus


	前端路由 实现有两种:
		 1. 利用url的 hash# 通过hashChange事件监听url的改变  
		 2. html5的history模式 让url看起来像普通网址 以 / 分割  没有#号
	
	vue-router基本用法  
		路由到不同的页面 就是 动态加载不同的组件
		以下的解释 来自实战代码 vue-book-master\router
		{
       		path: '/index',
       		meta: {
       		    title: '首页'
       		},
       		component: (resolve) => require(['./views/index.vue'], resolve)

    	}
    	解释: 
    		path属性就是当前匹配的路径
    		component 是映射组件 
    			webpack会把每一个路由都打包为一个js文件
    			在请求页面时 才去加载这个页面的js 也就是异步实现的懒加载(按需加载)

    			

    			一次性全部加载的写法:
    				{
    					path:'index',
    					component: require('./views/index.vue')
    				}

				使用异步路由后 编译出的每一个页面的js 都叫chunk(块)  默认的命名是 0.main.js
					可以在webpack配置文件的出口  通过设置chunkFilename 来修改chunk命名
					chunkFilename:'[name].chunk.js'


				有了chunk后 在每一个页面(.vue)里写的样式 需要配置后才能打包进main.css
				//webpack.config.js
				plugins: [
				        new ExtractTextPlugin({
				            filename: '[name].css',
				            allChunks: true
				        })
				    ]				
                
                路由不存在 重定向到首页
				{
   				     path: '*',
   				     redirect: '/index'
   				     
   				 }
        

   		打印 路由信息		 
        mounted () {
            console.log(this.$route);
			/*
			fullPath: "/user/123"  完整路径
			hash: ""
			matched: Array(1)
			    0: {
			    	path: "/user/:id",
			    	components:
						default: { __file: "K:\vue\vue-book-master\router\views\user.vue",}
					props:''
			    	}
			meta: {title: "个人主页"}
			params: {id: "123"}
			path: "/user/123"
			query: {}
			__proto__: Object
			*/
        	}
    	}





跳转---
 有两种方式:
 	第一种 <router-link to="about"〉
 		to 是一个 prop，指定需要跳转的路径
 		其他的prop: tag  replace active-class 

	第二种
		<button @click＝'handleRouter'>跳转到 user<button> 
		methods: { 
			handleRouter(){this.$router.push（user/l23;}
		}

高级用法

vuex
状态管理和使用场景
vuex基本用法
高级用法

实战: 中央事件总线插件 vue-bus

