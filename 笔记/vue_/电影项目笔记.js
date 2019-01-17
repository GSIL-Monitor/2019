书中存放数据库文件的文件夹
E:\db\MongoDB


C:\Users\sky\book_service
K:\vue\60529 Vue.js项目开发实战源代码文件\代码\book_service\book_service



目录
router
	index.js
	users.js
对于router目录下的文件   以文件名作为域名二级路径 即使用 http://localhost:3000/users 可以直接导航到users.js文件中 
	在 app.js中引入users 并挂载 
	要建立新的路由文件 都需要在app.js中引入该文件 并定义新的路由地址 才可以使用
	//app.js
	var indexRouter = require('./routes/index');
	var usersRouter = require('./routes/users');
	
	app.use('/', indexRouter);
	app.use('/users', usersRouter);




注册路由  
登录路由 

找回密码路由