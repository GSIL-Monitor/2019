 

指定默认值
    <body>
        <div id="app">
            <child count=9></child>
            <child count=0></child>
            <child count=20></child>
        </div>
        <script type="text/javascript">
            var vm = new Vue({
                el: '#app',
                data: {
                },
                components: {
                    'child': {
                        template: '<p v-on:click="count++">你点击了我{{count}}次</p>',
                        props:['count']
                    }
                }
            })
        </script>
    </body>

绑定data
<div id="app">
            <child count=0></child>
            <child count=0></child>
            <child v-bind:count="count"></child>
        </div>
        <script type="text/javascript">
            var vm = new Vue({
                el: '#app',
                data: {
                    count:40
                },
                components: {
                    'child': {
                        template: '<p v-on:click="count++">你点击了我{{count}}次</p>',
                        props:['count']
                    }
                }
            })
        </script>
    </body>
 添加点击事件
 <body>
        <div id="app">
            <child count=0></child>
            <child count=0></child>
            <child v-bind:count="count"></child>
        </div>
        <script type="text/javascript">
            var vm = new Vue({
                el: '#app',
                data: {
                    count:40
                },
                components: {
                    'child': {
                        template: '<p v-on:click="count++" v-on:click="change">你点击了我{{count}}次</p>',
                        props:['count'],
                        methods:{
                            change(){
                                if(this.count == 45){
                                    this.count = 40
                                }
                                console.log(this.count)
                            }
                        }
                    }
                }
            })
        </script>
    </body>  



data:
1、如果作为复用代码来使用的话，很方便。
2、无法任意修改里面的值，如果通过methods来修改了数据，那么也是统一修改

props:
1、可以按需修改所引用的值。
2、可以通过vue实例中的data来动态绑定数据。




import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})



 


	 过渡组件
	 过渡类名
	 transition
	 animation
	 同时使用
	 自定义类名
	 初始渲染过渡
	 过渡时间
	 过渡条件


 

过渡组件
   如果要为此加入过渡效果，则需要使用过渡组件transition


过渡类名

	淡入 
	enter  透明度变化
		开始状态 v-enter     opacity：0
		过渡中   v-enter-active
		结束状态 v-enter-to  opacity：1
	
	leave 位移变化
		开始状态  v-leave     opacity：1
		过渡中    v-leave-active
		结束状态  v-leave-to  opacity：0 



transition
	 <style>
	.fade-enter{
	  opacity:0;
	}
	.fade-enter-active{
	  transition:opacity .5s;
	}
	.fade-leave-active{
	  transition:transform .5s;
	}
	.fade-leave-to{
	  transform:translateX(10px);
	}
	</style>
	
	  <div id="app">
	  <button v-on:click="show = !show">Toggle</button>    
	  
	  <transition name="fade">
	    <p v-if="show">小火柴的蓝色理想</p>
	  </transition>
	
	  new Vue({
	        el:"#app",
	        data:{
	            show:true
	        }
	    })


animation
	<style>
	.bounce-enter-active{
	  animation:bounce-in .5s;
	}
	.bounce-leave-active{
	  animation:bounce-in .5s reverse;
	}
	@keyframes bounce-in{
	  0%{transform:scale(0);}
	  50%{transform:scale(1.5);}
	  100%{transform:scale(1);}
	}
	</style>
	<div id="demo">
	  <button v-on:click="show = !show">Toggle</button>    
	  <transition name="bounce">
	    <p v-if="show">小火柴的蓝色理想</p>
	  </transition>
	</div>
	<script>
	new Vue({
	  el: '#demo',
	  data: {
	    show: true
	  }
	})
	</script>

同时使用
	<style>
	.fade-enter,.fade-leave-to{
	  opacity:0;
	}
	.fade-enter-active,.fade-leave-active{
	  transition:opacity 1s;
	  animation:bounce-in 5s;
	}
	@keyframes bounce-in{
	  0%{transform:scale(0);}
	  50%{transform:scale(1.5);}
	  100%{transform:scale(1);}
	}
	</style>
	<div id="demo">
	  <button v-on:click="show = !show">Toggle</button>    
	  <transition name="fade" type="transition">
	    <p v-if="show">小火柴的蓝色理想</p>
	  </transition>
	</div>
	<script>
	new Vue({
	  el: '#demo',
	  data: {
	    show: true,
	  },
	})
	</script>

自定义类名
	enter-class
	enter-active-class
	enter-to-class
	leave-class
	leave-active-class
	leave-to-class
	自定义类名的优先级高于普通类名  
	可以结合第三方库 一起使用  
	animate.css http://www.cnblogs.com/xiaohuochai/p/7372665.html

初始渲染过渡


过渡时间

	<transition>组件上的duration属性定制一个显性的过渡效果持续时间 (以毫秒计)
	
		进入enter和离开leave时，持续时间都为1s
		    <transition :duration="1000">...</transition> 
		
		分别定制进入和移出的持续时间
		
			<transition v-bind:duration="{enter:500, leave:900}"></transition>

过渡条件
	条件渲染 使用v-if
	条件展示 使用v-show 

	使用is属性实现的动态组件，可以添加过渡效果
		<div id="app">
		  <button v-on:click="show = !show">Toggle</button>    
		  <transition name="fade">
		     <component v-bind:is="view"></component>
		  </transition>
		</div>
		 
		new Vue({
		    el:"#app",
		    components:{
		        "home":{template:'<div>小火柴的蓝色理想</div>'}
		    },
		    data:{
		        show:true
		    },
		    computed:{
		        view(){
		            return this.show ? "home" : ""
		        }
		    }
		})




