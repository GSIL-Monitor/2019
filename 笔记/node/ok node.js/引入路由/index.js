var express = require('express');
var app = express();
var routers = require('./routes')(app);
app.listen(2222);
 