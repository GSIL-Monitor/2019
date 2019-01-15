const http = require('http');
const url = require("url");

http.createServer((req,res) => {
    let params = url.parse(req.url,true);
    if(params){
        res.end(params.query.callback + `(${JSON.stringify({name:"zhangsan"})})`);
        return;
    }
    res.end();
}).listen(9999,() => {
    console.log("listening");
});
 