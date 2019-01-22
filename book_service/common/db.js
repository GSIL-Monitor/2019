var mongoose = require('mongoose')
var url = 'mongodb://localhost/movieServer'
mongoose.connect(url);
module.exports = mongoose;
//用于连接数据库的公用模块  将会以包的形式抛给后面的组件使用