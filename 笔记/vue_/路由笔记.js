

router----

目录

引用CDN

指南
	动态路由匹配
	嵌套路由
	编程式导航
	命名路由
	命名视图
	重定向
	路由组件传参
	history 模式
进阶
	导航守卫
	路由元信息
	过渡动效
	数据获取
	路由懒加载

路由API
	<router-link>组件--
		to属性--
		tag属性--
		active-class
		exact-active-class

	<router-view>组件

	路由构建选项
		mode
		linkActiveClass
		linkExactActiveClass

	路由对象

	路由对象属性
		$route.path
		$route.params
		$route.query


引用CDN
	https://unpkg.com/vue-router/dist/vue-router.js

模块化工程中使用它
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	
	Vue.use(VueRouter)

介绍
	Vue.js + Vue Router 让构建单页面应用变得易如反掌



指南


	动态路由匹配

	例子:
		<script src="https://unpkg.com/vue/dist/vue.js"></script>
		<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
		
		 <div id="app">
		   <p>
		     <router-link to="/user/foo">/user/foo</router-link>
		     <router-link to="/user/bar">/user/bar</router-link>
		   </p>
		   <router-view></router-view>
		 </div>
		    
		<script>
		          
		const User = {
		  template: `<div>User {{ $route.params.id }}</div>`
		}
		
		const router = new VueRouter({
		  routes: [
		    { path: '/user/:id', component: User }
		  ]
		})
		
		const app = new Vue({ router }).$mount('#app')
		
		</script>
	
		效果:
			/user/foo /user/bar  点击切换
	        User bar
	
	
		模式	                            匹配路径	                 $route.params
		/user/:username	                /user/evan	             { username: 'evan' }
		/user/:username/post/:post_id	/user/evan/post/123	     { username: 'evan', post_id: '123' }
	
	
	
	嵌套路由
	 
		例子:
		   <div id="app">
		       <p>
		           <router-link to='/user/foo'>/user/foo</router-link>
		           <router-link to='/user/foo/profile'>/user/foo/profile</router-link>
		           <router-link to='/user/foo/posts'></router-link>
		       </p>
		       <router-view></router-view>
		   </div> 
			<script>
		      const User = {
		        template:`
		            <div class="user">
		               <h2>user{{$route.params.id}}</h2> 
		               <router-view></router-view>
		            </div>`
		      }    
		      const UserHome = {template:'<div>home</div>'};
		      const UserProfile = {template:'<div>profile</div>'}
		      const UserPosts = {template:'<div>posts</div>'}
		
		      const router = new VueRouter({
		        routes:[
		           {
		            path:'/user/:id', component:User,
		            children:[
		
		                {path:'',component:UserHome},
		                //当/user/:id/profile 匹配成功
		                //UserProfile组件 会被渲染在 User组件的 <router-view> 中
		                //子路由的path 不加斜杠 
		                {path:'profile', component: UserProfile},
		                {path:'posts', component:UserPosts}
		            ]
		          } 
		        ]
		      })
			</script>
		
		效果:
			/user/foo   /user/foo/profile     /user/foo/posts  <--点击链接
			User foo
			Posts <-- 变换页面
	


编程式导航

	<router-link :to="...">     router.push
	声明式                       编程式
	点击 <router-link :to="..."> 等同于调用 router.push(...)
	
	
	
	<router-link :to="..." replace>	  router.replace(...)
	声明式                             编程式
	替换掉当前的 history 记录
	
	
	
	router.push 参数
		// 字符串
		router.push('home')
		
		// 对象
		router.push({ path: 'home' })
		
		// 命名的路由
		router.push({ name: 'user', params: { userId: '123' }})
		注意:  提供了path，  params 会被忽略
	

	router.go(n)
	
		// 在浏览器记录中前进一步，等同于 history.forward()
		router.go(1)
		
		// 后退一步记录，等同于 history.back()
		router.go(-1)
		
		// 前进 3 步记录
		router.go(3)
		
		// 如果 history 记录不够用，那就默默地失败呗
		router.go(-100)
	
		window.history.back()  后退一页
		window.history.forward() 前进一页 
		window.history.go(2)  前进两页



命名路由
	const router = new VueRouter({
		routes:[
			path:'/user/:userId',
			name:'user',
			component:User
		]
	})
	
	连接到一个命名路由 给 to属性传一个对象 导航到/user/123
		<router-link :to='{name:'user', params:{userId:123}}'></router-link>
		等价于
		router.push({name:'user',params:{userId:123}})
	


命名视图
	一个视图使用一个组件渲染 对于同一个路由 多个视图就需要多个组件 
	确保正确的使用component 带上s
	例子:
	<div id="app">
	    <h1>命名视图</h1>
	    <ul>
	        <li><router-link to='/'>/</router-link></li>
	        <li><router-link to='/other'>/other</router-link></li>
	    </ul>
	    <router-view class='view one'></router-view>
	    <router-view class='view two' name='a'></router-view>
	    <router-view class='view three' name='b'></router-view>
	</div>
	<script>
	      const Foo = {template:'<div>foo</div>'}
	      const Bar = {template:'<div>bar</div>'}
	      const Baz = {template:'<div>baz</div>'}
	
	      const router = new VueRouter({
	        mode:'history',
	        routes:[
	            {
	                path:'/', components:{default:Foo, a:Bar, b:Baz } },
	            {
	                path:'/other', components:{default:Baz, a:Bar, b:Foo }
	            }
	        ]
	      })
	    var app = new Vue({router}).$mount('#app') //new Vue({router, el:'#app'})

嵌套命名视图

	const router = new VueRouter({
	  mode: 'history',
	  routes: [
	    { path: '/settings',
	      // You could also have named views at tho top
	      component: UserSettings,
	      children: [{
	      	path: 'emails',  // 一个路由 一个组件
	        component: UserEmailsSubscriptions
	      }, 
	      {
	      	path: 'profile',  //一个路由 多个组件
	        components: {
	          default: UserProfile,
	          helper: UserProfilePreview
	        }
	      }]
	    }
	  ]
	})
	


重定向 的意思是，当用户访问 /a时，URL 将会被替换成 /b
默认打开指定页

	routes: [
	    { path: '/', redirect: '/index' }  //  让 / 重定向到 index
	  ]
	
别名 的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。

	const router = new VueRouter({
	  routes: [
	    { path: '/a', component: A, alias: '/b' }  // a b 都指向 a
	  ]
	})



路由组件传参

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})



导航守卫
	每个守卫方法接收三个参数：
	
		to: Route: 即将要进入的目标 路由对象
		
		from: Route: 当前导航正要离开的路由
		
		next: Function: 一定要调用该方法来 resolve 这个钩子
		
		
完整导航解析流程
1. 导航被触发
2. 在失活的组件里调用离开守卫
3. 调用全局的 beforeEach守卫
4. 在重用的组件里调用 beforeRouteUpdate守卫
5. 在路由配置里调用 beforeEnter
6. 解析异步路由组件
7. 在被激活的组件里调用 beforeRouteEnter
8. 调用全局的 beforeResolve 守卫
9. 导航被确认
10 调用全局的 afterEach 钩子
11 触发dom更新
12 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数









路由API

	<router-link>组件-- 
		<router-link> 会默认渲染成 带正确链接的 a标签
		通过 to属性 指定目标地址 
		通过 tag属性 生成别的标签
	
		to属性--
			表示目标路由的链接  被点击后 会把to的值传到 router.push()
	
			字符串
				<li><router-link to="/hello/hello1">H1</router-link></li>
				效果:
				<li><a href="/hello/hello1">H1</a></li>
	
			使用v-bind
				<router-link v-bind:to="'home'">Home</router-link>
				等价于上面
				<router-link :to="{ path: 'home' }">Home</router-link>
	
			命名的路由
				<li><router-link  :to="{ name:'hi',params:{id:'100',count:20} }">hi</router-link></li>
	
				{{ $route.params.id }}-{{ $route.params.count }}
	
		tag属性--
			<router-link to="/foo" tag="li">foo</router-link>
			<!-- 渲染结果 -->
			<li>foo</li>
	
	 
	 	active-class 
	 		默认值: router-link-active 
	 		设置 链接激活时 使用的 CSS 类名。
	
	 		默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
	
	
	 	exact-active-class 
	 		默认值: router-link-exact-active
	 		配置当链接被 精确匹配的时候 应该激活的class  
	
	 		默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的
	
	
	
	
	<router-view>组件 
		渲染路径匹配到的视图组件
		如果 <router-view>设置了名称，则会渲染对应的路由配置中 components 下的相应组件
	
		参考 命名视图
	
	 
	
	
	
	
	路由构建选项
	routes
		RouteConfig 的类型定义:
	    	declare type RouteConfig = {
	    	  path: string;
	    	  component?: Component;
	    	  name?: string; // 命名路由
	    	  components?: { [name: string]: Component }; // 命名视图组件
	    	  redirect?: string | Location | Function;
	    	  props?: boolean | Object | Function;
	    	  alias?: string | Array<string>;
	    	  children?: Array<RouteConfig>; // 嵌套路由
	    	  beforeEnter?: (to: Route, from: Route, next: Function) => void;
	    	  meta?: any;
	    	
	    	  
	    	}
	
	
	
		mode
			类型: string
			
			默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境)
			
			可选值: "hash" | "history" | "abstract"
			
			配置路由模式:
			
			hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
			
			history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
			
			abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式
	
	
		linkActiveClass
			类型: string
		
			默认值: "router-link-active"
		
			全局配置 <router-link> 的默认“激活 class 类名”。参考 router-link。
		
		
	
		linkExactActiveClass
			类型: string
		
			默认值: "router-link-exact-active"
		
			全局配置 <router-link> 精确激活的默认的 class。可同时翻阅 router-link。 
		
	
	
	
	路由对象 
	
		一个路由对象 表示当前激活的路由的 状态信息   
		包括了 当前url解析得到的信息 和 url匹配到的路由记录
	
		路由对象是不可变的 每次成功的导航后 都会产生新的对象
	
	
		导航守卫的参数：
		
			router.beforeEach((to, from, next) => {
			  // `to` 和 `from` 都是路由对象
			})
	
	
	
	路由对象属性
		$route.path
			类型: string
			字符串，对应当前路由的路径，总是解析为绝对路径，如 /foo/bar
		
		$route.params
			类型: Object
			一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
		
		$route.query
			类型: Object
			一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。
	
	
	组件注入
		this.$router
			router实例
	
		this.$route 
			当前激活的路由对象 
	
	



流程: 
	安装 
	引入 
	创建router实例   
	注入router 
	显示路由

	引入 和 创建实例 在index.js 中
	注入 挂载 在 main.js
	显示在 app.vue



1.安装：
  npm install --save vue-router
2.编写代码
  1.引入
    import VueRouter from "vue-router"
    Vue.use(VueRouter)
  2.创建Router
    const router = new VueRouter({
      routes:[
        {
          path:"/hello",
          component:HelloWorld
        }
      ]
    })
  3.注入router
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  4.显示路由组件
  	显示在最外层的容器区域 app.vue
    <router-view></router-view>  


