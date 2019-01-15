module.exports = function(app){
	app.get('/', function(req,res){
		res.send('hello');
	});
	app.get('/customer', function(req,res){
		res.send('customer');
	});	
	app.get('/admin', function(req,res){
		res.send('admin');
	});
};