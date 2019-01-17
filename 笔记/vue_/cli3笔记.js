cli3-----
	目录

	基础 
		快速原型开发
		创建一个项目
			vue create
		插件
		CLI服务


	开发 
		浏览器兼容特性
		HTML和 静态资源
		webpack相关
		构建目标
		 
	配置 vue.config.js--	  https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE	 

	插件开发指南--  Creator Service



	介绍
		vue cli 是基于vue.js 进行快速开发的完整系统
		通过 @vue/cli 搭建交互式项目 脚手架
		通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发
		Vue CLI 致力于将 Vue 生态中的工具基础标准化
		
		该系统的组件---
			cli
				cli = @vue/cli  是一个全局安装的包 提供了终端命令
				通过 vue create 快速创建一个新项目的脚手架  或者通过 vue server 构建新想法的原型
				通过 vue ui 图形化界面管理你的所有项目


			CLI服务
				@vue/cli-service 是一个开发环境依赖  局部安装在每一个 @vue/cli 创建的项目中
				CLI 服务是构建于 webpack 和 webpack-dev-server 之上的

			CLI插件
				CLI 插件是向你的 Vue 项目提供可选功能的 npm 包
				Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头
				当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件。

	基础 
		快速原型开发
			快速原型开发
				你可以使用 vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发
				vue serve 的缺点就是它需要安装全局依赖  npm install -g @vue/cli-service-global

				vue serve 使用了和 vue create 创建的项目相同的默认设置  它会在当前目录自动推导入口文件
				使用 vue build 将目标文件构建成一个生产环境的包并用来部署
		
		创建一个项目
			vue create 
				仅在 cli3 中使用  当前 2.96
					cnpm uninstall -g vue-cli  卸载
					cnpm install -g @vue/cli   重装

				执行vue create	
				✨  Creating project in K:\webpack-demo\hello-world.
				⚙  Installing CLI plugins. This might take a while...
				
				 $ cd hello-world
				 $ npm run serve
				
				 App running at:
                    - Local:   http://localhost:8080/
                    - Network: http://192.168.43.146:8080/

                    Note that the development build is not optimized.
                    To create a production build, run npm run build.

		插件
			Vue CLI 使用了一套基于插件的架构
			安装
				在现有项目中安装插件---
					每个 CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件

					vue add
						vue add 的设计意图是为了安装和调用 Vue CLI 插件
						会从 npm 安装它，调用它的生成器
						vue add @vue/eslint 等价于 vue add @vue/cli-plugin-eslint
					
					vue invoke
						如果一个插件已经被安装，你可以使用 vue invoke 命令跳过安装过程，只调用它的生成器


				项目本地安装---
					如果你需要在项目里直接访问插件 API 而不需要创建一个完整的插件，你可以在 package.json 文件中使用 vuePlugins.service 选项

						{
						  "vuePlugins": {
						    "service": ["my-commands.js"]
						  }
						}
			



		CLI服务
			使用命令	npm run serve

			{
			  "scripts": {
			    "serve": "vue-cli-service serve",
			    "build": "vue-cli-service build"
			  }
			}



	开发 
		浏览器兼容特性
			browserslist字段
				转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀

			polyfill
				Polyfill是一个js库，主要抚平不同浏览器之间对js实现的差异
		HTML和 静态资源
			index.html 
				public/index.html 文件是一个会被 html-webpack-plugin 处理的模板

			Preload
				<link rel="preload"> 是一种 resource hint ，用来指定页面加载后  很快会被用到的资源，  

				默认情况下，一个 Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示  

			Prefetch
				<link rel="prefetch"> 是一种 resource hint，用来告诉浏览器在页面加载完成后， 利用空闲时间提前  不着急用到的资源


			插值
				<%= VALUE %> 用来做不转义插值；
				<%- VALUE %> 用来做 HTML 转义插值；
				<% expression %> 用来描述 JavaScript 流程控制。


			URL 转换规则
				. 解析为文件路径
				~ 解析为模块请求

				如果 URL 是一个绝对路径 (例如 /images/foo.png)，它将会被保留不变。
				
				如果 URL 以 . 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。
				
				如果 URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：<img src="~some-npm-package/foo.png">
				
				如果 URL 以 @ 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 <projectRoot>/src 的别名 @。(仅作用于模版中)

 			何时使用 public 文件夹
 				当你有很多图片时  需要动态引用它们的路径
		
		webpack相关   vue.config.js
			调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：

			// vue.config.js
			module.exports = {
			  configureWebpack: {
			    plugins: [
			      new MyAwesomeWebpackPlugin()
			    ]
			  }
			}

			链式操作
			在 vue.config.js 文件中:
				修改 Loader 选项
				添加一个新的 Loader
				替换一个规则里的 Loader
				修改插件选项



		构建目标
			当你运行 vue-cli-service build 时，你可以通过 --target 选项指定不同的构建目标

			 应用模式
			 	是默认的模式。在这个模式中：
				index.html 会带有注入的资源和 resource hint
				第三方库会被分到一个独立包以便更好的缓存
				小于 4 kb 的静态资源会被内联在 JavaScript 中
				public 中的静态资源会被复制到输出目录中
			
			入口文件
				当使用一个 .vue 文件作为入口时，你的库会直接暴露这个 Vue 组件本身，因为组件始终是默认导出的内容。
				当你使用一个 .js 或 .ts 文件作为入口时，它可能会包含具名导出，所以库会暴露为一个模块


    插件开发指南--

    系统里有两个主要的部分：
		@vue/cli：全局安装的，暴露 vue create <app> 命令；
		@vue/cli-service：局部安装，暴露 vue-cli-service 命令。

		Creator
			Creator 是调用 vue create <app> 时创建的类。负责偏好对话、调用 generator 和安装依赖。
		
		Service
			Service 是调用 vue-cli-service <command> [...args] 时创建的类。负责管理内部的 webpack 配置、暴露服务和构建项目的命令等。


     CLI 插件的目录
    	├── README.md
		├── generator.js  # generator (可选)
		├── prompts.js    # prompt 文件 (可选)
		├── index.js      # service 插件
		└── package.json   



