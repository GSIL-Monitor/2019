

keep-alive 缓存组件  
	props:
		include:
			<keep-alive include="a"> 包括  缓存a组件
		
		exclude: 
			<keep-alive exclude="a">  
			  <component>
			    <!-- 除了 name 为 a 的组件都将被缓存！ -->
			  </component>
			</keep-alive> 
			
		max: 最多可以缓存几个组件实例     

	用法:
		主要用于保留组件状态或避免反复渲染
		 基本  
			<keep-alive>
			  <component :is="view"></component>
			</keep-alive>
			
		 多个条件判断的子组件 同时只有一个子元素被渲染  
			<keep-alive>
			  <comp-a v-if="a > 1"></comp-a>
			  <comp-b v-else></comp-b>
			</keep-alive>
	
		 注意: 不能和v-for一起使用


增加 router.meta 属性
	// routes 配置
		export default [
		  {
		    path: '/',
		    name: 'home',
		    component: Home,
		    meta: {
		      keepAlive: true // 需要被缓存
		    }
		  }, {
		    path: '/:id',
		    name: 'edit',
		    component: Edit,
		    meta: {
		      keepAlive: false // 不需要被缓存
		    }
		  }
		]

	<keep-alive>
	    <router-view v-if="$route.meta.keepAlive">
	        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
	    </router-view>
	</keep-alive>
	
	<router-view v-if="!$route.meta.keepAlive">
	    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
	</router-view>


	优点：不需要例举出需要被缓存组件名称

 

 beforeRouteLeave (to, from, next)  导航离开该组件的对应路由时调用

案例:/* 前进刷新，后退不刷新   
https://www.jianshu.com/p/0b0222954483

	A-->B-->C 
		默认显示 A
		B 跳到 A，A 不刷新
		C 跳到 A，A 刷新
	
	实现方式
		在 A 路由里面设置 meta 属性
			{
			   path: '/',
			   name: 'A',
			   component: A,
			   meta: {
			       keepAlive: true // 需要被缓存
			   }
			}
		在 B 组件里面设置 beforeRouteLeave：
			export default {
			    data() {
			        return {};
			    },
			    methods: {},
			    beforeRouteLeave(to, from, next) {
			         // 设置下一个路由的 meta
			        to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
			        next();
			    }
			};
		在 C 组件里面设置 beforeRouteLeave：
		
			export default {
			   data() {
			       return {};
			   },
			   methods: {},
			   beforeRouteLeave(to, from, next) {
			       // 设置下一个路由的 meta
			       to.meta.keepAlive = false; // 让 A 不缓存，即刷新
			       next();
			   }
			};
	    这样便能实现 B 回到 A，A 不刷新；而 C 回到 A 则刷新。


第三方插件
	vue-navigation
	一个页面导航库，记录路由并缓存页面，像原生APP导航一样。


https://segmentfault.com/a/1190000014873482
不使用keep-alive
	beforeRouteEnter --> created --> mounted --> destroyed

使用keep-alive
	beforeRouteEnter --> created --> mounted --> activated --> deactivated