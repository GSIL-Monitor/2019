var express = require('express');
var config =require('./config.js');
var data = require('./data.json');
var url = require('url');
var router = express.Router();

router.get(config.classinfo,function(req,res){
	res.json(data.classinfo);
})
router.get(config.boy,function(req,res){
	res.json(data.alluser.filter(function(stu){
		return stu && stu.sex ==="man";
	}))
})
router.get(config.girl,function(req,res){
	res.json(data.alluser.filter(function(stu){
		return stu && stu.sex ==="woman";
	}))
})
//http://localhost:3000/age?age=25
router.get(config.age, function(req,res){
	var path_url = url.parse(req.url,true);
	var query = path_url.query;
	if(query.age){
		res.json(data.alluser.filter(function(stu){
			return stu.age> query.age
		}))
	}else{
		res.json({
			code:100,
			msg:"error"
		})
	}
})
module.exports = router;