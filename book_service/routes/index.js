var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//定义路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//定义路由
//实例化一个/mongooseTest路由   
router.get('/mongooseTest',function(req,res,next){
	
	/*调用mongoose.connect方法 传递两个参数
		第一个参数是数据库的url地址  即启动的mongoDB的ip地址 和要访问的数据库
		第二个参数是 JavaScript对象串 用于传递相关的配置
		*/
	mongoose.connect('mongodb://localhost/pets', {useMongoClient:true})
	mongoose.Promise = global.Promise;
	//通过实例化Cat的数据集 调用mongoose的model() 传入名称和结构来创建一个数据集
	var Cat  = mongoose.model('Cat',{name: String});
	//对于Cat数据集中创建的新对象 向其传入一个name属性 内容为Tom 
	var tom = new Cat({name: 'sss'});

	/*通过mongoose中创建的模型(model)自带的save()来保存内容
	 
	 查看数据
	 use pets
	 switched to db pets
	 > show collections
	 cats
	 > db.cats.find()
	 { "_id" : '', "name" : "Tom", "__v" : 0 }
	 
	*/
	tom.save(function(err){
		if(err){
			console.log(err)
		}else{
			console.log('success')//显示在终端里
		}
	});
	res.send('成功了')//显示在页面上
})
module.exports = router;
