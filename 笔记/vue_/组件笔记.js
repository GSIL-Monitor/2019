

组件--
组件注册 
	组件名
		组件名大小写  一个组件是一个类   类名大写
			my-component-name 必须包含一个连字符 这会避免在未来产生元素冲突
			直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

			kebab-case 连字符    PascalCase 驼峰  
	
	 组件中 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

注册 全局组件 
		Vue.component(tagName, options)
		tagName 为组件名，options 为配置选项
	
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
	
	
		通过 Vue.component 来注册全局组件
		可以用在任何根实例（new Vue）模板中
		在所有子组件中都可以相互使用

	点击按钮 共享对象  修改同步 
		JavaScript对象是引用关系 所以 如果return出的对象引用了外部的一个对象 
		那么这个对象是共享的 修改同步
	
		 <div id="app">   
		    <my-component></my-component>
		    <my-component></my-component>
		    <my-component></my-component>
		 </div>
		
		var data = {
		    counter:0
		 }
		 Vue.component("my-component", {
		    template:'<button @click="counter++">{{counter}}</button>',
		    data:function(){
		        return data;
		    }
		 });
		 var app = new Vue({
		    el:"#app",
		 })
		
		解决同步: 不能使用全局变量
		 
		 Vue.component("my-component", {
		    template:'<button @click="counter++">{{counter}}</button>',
		    data:function(){
		        return {counter:0}
		    }
		 });
		 var app = new Vue({
		    el:"#app",
		 })


	局部注册
	
			局部组件  components
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


	    table中组件无效 
			<div id="app">	
				<table>
					<tbody is="my-component"></tbody>
				</table>
			</div>
			<script>
			Vue.component("my-component", {
			    template:"<div>这里是组件内容</div>"
			     });
			 new Vue({
			     el:"#app",
			    })
			</script>	







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
	
	style scoped--
		<style scoped>
			添加scoped属性 代表样式只在当前组件中生效  
			意味着css 有了作用域概念
		</style>






组件通讯

中央事件总线 bus 外，还有两种方法可以实现组件间通信：父链和子组件索引。


$emit  $on 

		子组件传出单个参数时：
		
			// 子组件
			this.$emit('your event', param1, param2 ....)  
			
			this.$emit('your event', {
			    param1,
			   param2
			    //你写多少个也都行啊
			})
			
			// 父组件
			this.$on('your event', 对应的形参...)
		
		 
		
		
		
		弹出hi
			<div id="app">
			  <com v-on:say="sayHi"></com>
			</div>
			
			  <script>
			 Vue.component('com', {
			  template: `
			    <button v-on:click="$emit('say')">
			      Click me to be welcomed
			    </button>
			  `
			})
			 new Vue({
			  el: '#app',
			  methods: {
			    sayHi: function () {
			      alert('Hi!')
			    }
			  }
			})
		
		
		
		例子 
		<!-- 父组件 -->
		<div id="app">
		  <!-- 子组件 -->
		  <!-- 父组件直接用 v-on 来监听子组件触发的事件。 -->
		  <!-- 需跟子组件中的$emit组合使用 -->
		  <mycon v-on:son_method="father_method"></mycon>
		</div>
		
		  <script>
		
		// 子组件
		Vue.component('mycon', {
		  template: '<button v-on:click="son_method">子按钮</button>',
		  methods: {
		    // 按钮点击时候触发事件
		    son_method: function () {
		      this.counter += 1;
		      console.log("son");
		      // 这句话来触发事件
		      // 必须跟模板中的v-on配合使用
		      this.$emit('son_method');
		    }
		  },
		});
		
		// 父组件
		new Vue({
		  el: "#app",
		  methods: {
		    father_method: function () {
		      console.log("father");
		    }
		  }
		});
		  </script>
		
		 效果:
			点击子按钮 打印 son father
		
		
		
		 点击按钮 修改值 
		<div id="app">
		    <c1></c1>
		    <c2></c2>
		</div>
		
		  <script>
		
		var Bus = new Vue();
		Vue.component('c1',{
		  template:'<div>{{msg}}</div>',
		  data: () => ({
		    msg: 'Hello World!'
		  }),
		  created() {
		    Bus.$on('setMsg', content => {
		      this.msg = content;
		    });
		  }
		});
		Vue.component('c2',{
		  template: '<button @click="sendEvent">Say Hi</button>',
		  methods: {
		    sendEvent() {
		      Bus.$emit('setMsg', 'Hi Vue!');
		    }
		  }
		});
		var app= new Vue({
		    el:'#app'
		})
		</script>
		



组件中使用v-model
	<div id="app">
	     <p>总数:{{total}}</p>
	     <my-cpmponent v-model="total"></my-cpmponent>
	     <button @click="handleReduce">-1</button>
	 </div>
	<script> 
	Vue.component('my-cpmponent',{
	    props:['value'],
	    template:` <input :value="value" @input="updateValue">`,
	    
	    methods:{
	       updateValue:function(event){
	        this.$emit('input',event.target.value);
	       }
	    }
	})
	var app = new Vue({
	    el:"#app",
	    data:{
	        total:5
	    },
	    methods:{
	        handleReduce:function(){
	            this.total--;
	        }
	    }
	})


非父子组件通信
	在简单的场景下，使用一个空的 Vue 实例作为中央事件总线：

	//空实例
	var bus = new Vue()
	
	// 触发组件 A 中的事件
	bus.$emit('id-selected', 1)
	
	// 在组件 B 创建的钩子中监听事件
	bus.$on('id-selected', function (id) {
	  // ...
	})

	例子: 
		<div id="app">
		     {{message}}
		     <component-a></component-a>
		 </div>
		<script> 
	    var bus = new Vue();
	    Vue.component('component-a',{
	        template:`<button @click="handleEvent">传递事件</button>`,
	        methods:{
	            handleEvent:function(){
	                bus.$emit('on-message', '来自于组件a的内容');
	            }
	        }
	    });
	    var app = new Vue({
	        el:"#app",
	        data:{
	            message:""
	        },
	        mounted:function(){
	            var _this = this;
	            //在实例初始化时 监听来自bus实例的事件
	            bus.$on('on-message',function(msg){
	                _this.message = msg;
	            })
	        }
	    })
	
	    效果:
	    点击 传递事件按钮 显示"来自于组件a的内容"
	    <div id="app">
	        来自于组件a的内容
	        <button>传递事件</button>
	    </div>
	
	    解释: 创建一个空实例bus 全局定义组件component-a 最后创建实例app 
	    	app初始化时   在mounted钩子函数里监听到bus的on-message事件  
	    	在组件A中 点击按钮会通过bus 把事件on-message发出去 
	    	此时app就会接受到来自bus的事件 在回调函数里执行自己的业务逻辑

	    优点: 轻量的实现了任何组件间的通信

父链

	在子组件中 使用 this.$parent 可以直接的访问到该组件的父实例
	在父组件中 使用 this.$children 可以访问他所有的子组件 而且可以递归无限访问

	例子:
	 <div id="app">
     	{{message}}
    	 <component-a></component-a>
 	 </div>
     <script> 
      Vue.component('component-a',{
          template:`<button @click="handleEvent">通过父链直接修改数据</button>`,
          methods:{
              handleEvent:function(){
                 //访问到父链后 可以修改数据
                 this.$parent.message = '来自组件a 的内容'
              }
          }
      });
      var app = new Vue({
          el:"#app",
          data:{
              message:"" //会修改这里 
          },
           
      })

子组件索引
	子组件太多 
	通过 $children遍历 
	通过 ref 给子组件指定一个索引名称 ref="comA"  类似锚点  非响应式 

	例子:
	 <div id="app">
	     <button @click="handleRef">通过ref获取子组件实例</button>
	     <component-a ref="comA"></component-a>
	 </div>
	 <script> 
	    Vue.component('component-a',{
	        template:` <div>子组件</div>`,
	        data:function(){
	            return{
	                message:"子组件内容"
	            }
	        }
	    });
	    var app = new Vue({
	        el:"#app",
	        methods:{
	            handleRef:function(){
	                //通过$ref 来访问指定实例
	                var msg = this.$refs.comA.message;
	                console.log(msg)
	            }
	        } 
	       })
		效果:后台输出 "子组件内容"
	


递归组件

嵌套了10层div
	<div id="app">
   		 <child-component :count='1'></child-component>    
    </div>
    <script> 
    Vue.component('child-component',{
      name:'child-component',
      props:{
          count:{
              type:Number,
              default:1
          }
      },
      template:`
          <div class="child">
              <child-component :count='count+1' v-if='count < 10'>
               </child-component>
          </div>`,
    });
    var app = new Vue({
      el:"#app"
    })   


内联模板
	inline-template 尽量不用 


动态组件

	例子/* 
	  <div id="app">
	       <component :is="currentView"></component>
	   </div>
	
	   var home = {
	    template:'<p>welcome home</p>'
	   };
	  var app = new Vue({
	    el:"#app",
	    data:{
	        currentView:home
	    }
	  })   
	 
	动态选项卡
      <div id="app">
          <component :is="currentView"></component>
          <button @click="handleChangeView('A')">切换到A</button>
          <button @click="handleChangeView('B')">切换到B</button>
          <button @click="handleChangeView('C')">切换到C</button>
      </div>
      <script> 
       var app = new Vue({
         el:"#app",
         components:{
             comA:{
                 template:'<div>组件A</div>'
             },
            comB:{
                 template:'<div>组件B</div>'
             },
            comC:{
                 template:'<div>组件C</div>'
             }
         },
         data:{
             currentView:'comA'
         },
         methods:{
             handleChangeView:function(component){
                 this.currentView = 'com'+component;
             }
         }
       })     

异步组件

	一开始把所有的组件都加载是没必要的一笔开销 
	只在组件需要渲染时触发工厂函数 并把结果缓存起来 用于后面的再次渲染

	 

随机数增加
		
		///index.vue
		<template>
		    <div>
		        <h1>首页</h1>
		         随机增加:
		         <!-- 绑定 data里的number   -->
		         <Counter :number='number'></Counter>
		    </div>
		
		</template>
		<script>
		    import Counter from './counter.vue';
		    export default {
		        components:{
		            Counter
		        },
		        // 这个number会传到 counter的props里
		        data(){
		            return {number:0 }
		        },
		    
		        created(){
		            //接收counter里随机生成的数字
		            this.$bus.on('add',num=>{this.number +=num})
		        },
		        beforeDestroy(){
		            this.$bus.off('add',this.handleAddRandom)
		        }
		    }
		</script>
		
		/*
		// 使用 vue-bus 有两点需要注意， 
		//     第一是$bus.on 应该在 created 钩子内使用，如果在 mounted 使用，它可能接收不到其他组件来自created钩子内发出的事件 
		//     第二点是使用了$bus.on，在 beforeDestroy 钩子里应该再使用$bus.off 解除，因为组件销毁后，就没必要把监听的句柄储存在 vue-bus 里了 ， 
		*/
		
		
		//count.vue
		<template>
			<div>
				{{number}}
				<button @click="handleAddRandom">随机增加</button>
			</div>
		</template>
		<script>
			export default{
				props:{ 
				 number:{type:Number } 
				},
				methods:{
					handleAddRandom(){
						const num = Math.floor(Math.random()*100+1);
						this.$bus.emit('add',num) 
						/// 发送给index.vue
		
					}
				}
			}
		</script>		