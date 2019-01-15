
序列化 

  querystring.stringify(obj, [sep], [eq]) 序列化一个对象到一个 query string。可以选择是否覆盖默认的分割符（'&'）和分配符（'='）。
  例子：
    querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'] });
    // 返回 'foo=bar&baz=qux&baz=quux'
    
    querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
    // 返回 'foo:bar;baz:qux'
      
  
querystring.parse(str, [sep], [eq], [options]) 
  将一个 query string 反序列化为一个对象。可以选择是否覆盖默认的分割符（'&'）和分配符（'='）。
  参数：
      str <string> 要解析的 URL 查询字符串。
      sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
      eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
      options <Object>


  例子：
    querystring.parse('name=jone&age=28&work=teacher&address')
    
    { name: 'jone', age: '28', work: 'teacher', address: '' }

    querystring.parse('foo=bar&abc=xyz&abc=123')  
    {
      foo: 'bar',
      abc: ['xyz', '123']
    }








先运行程序 把网址输入到浏览器 http://127.0.0.1:8080/home/test?a=1&b=2
    var http = require('http');
    var url = require('url');
    var querystring = require('querystring');
    http.createServer(function(req,res){
        var urlObj = url.parse(req.url);
        
        var query = urlObj.query;
        var queryObj = querystring.parse(query);
        console.log(req.url);//'/home/test?a=1&b=2'
        console.log(query);//'a=1&b=2'
        console.log(queryObj);//{ a: '1', b: '2' }
    }).listen(8080);    