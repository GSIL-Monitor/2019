var express = require("express");
var app = express();

// http://www.wwtliu.com/blog/?p=44

app.get("/jsonp", function(req, res) {
	// app.set('jsonp callback name', 'getInfo');
	res.jsonp({
		name: 'iwen',
		age: 18
	})
})

app.listen(3000, function() {
	console.log(3000)
})