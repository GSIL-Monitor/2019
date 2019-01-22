mvc是一种设计模式 



数据   （模型）
展示层 （视图）
用户交互（控制）


流程:
	用户和应用发生交互
	控制器的事件处理器被触发 
	控制器从模型中请求数据 并将其交给视图
	视图将数据呈现给用户









var assert = function(value, msg) {  if ( !value )    throw(msg || (value + " does not equal true")); };








mvc和类
	创建类 给类添加属性 和方法  添加私有函数

事件和监听

	监听事件  取消事件 事件对象   委托事件  自定义事件

模型和数据
	mvc和命名空间
	构建对象的关系映射 orm
	原型继承
	
	添加ORM 属性
	持久化记录
	增加id支持
	寻址引用
	装载数据 
	直接嵌套数据
	通过ajax载入数据
	jsonp
	跨域请求的安全性


	向ORM中 添加记录
	本地存储 localStorage  sessionStorage

	给ORM添加本地存储
	将新纪录提交给服务器

控制器和状态

	模块模式
	全局导入 导出
	添加少量上下文
	
	抽象出 库
	
	文档加载完成后载入控制器
	访问视图
	委托事件
	状态机
	路由选择
	使用URL中的哈希
	检测哈希变化
	抓取ajax
	使用HTML5 history

视图和模板
	动态渲染视图
	模板
	模板 help()
	模板存储
	模型中的事件绑定


	模块的按需加载


使用文件
	获取文件信息
	文件输入
	
	拖拽
	复制粘贴
	读写文件
	上传文件
	进度条	

实时web
Socket.IO
WebSocket
速度对用户体验（UX）的影响非常大
 


 
用户体验和 心理学有关系吗   

只要网络卡慢  我就脾气暴躁





View（界面）触发事件--》Controller（业务）处理了业务，然后触发了数据更新--》不知道谁更新了Model的数据--》Model（带着数据）回到了View--》View更新数据


在MVC，当你有变化的时候你需要同时维护三个对象和三个交互，这显然让事情复杂化了。


分层设计

!科普 http://www.cnblogs.com/indream/p/3602348.html
数据绑定你可以认为是Observer模式或者是Publish/Subscribe模式，原理都是为了用一种统一的集中的方式实现频繁需要被实现的数据更新问题。

我们依然要解决的问题是用户交互与数据更新的问题，还有维护等等的问题。


!mvvm实现 https://www.cnblogs.com/kidney/p/6052935.html

