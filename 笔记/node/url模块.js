
url



                     url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]





url.parse()
  把url解析成对象 url.parse('http://www.imooc.com/course/list?c=fe')
    Url {
      protocol: 'http:', // 底层使用的协议
      slashes: true, 　　// 是否有协议的双斜线
      auth: null,
      host: 'www.imooc.com', // http 是服务器的ip地址或者是域名
      port: null,　　　　　　　// 端口 默认80
      hostname: 'www.imooc.com', // 主机名
      hash: null,　　　　　　　　// 哈希值 对应的是页面上的瞄点 #后面的
      search: '?c=fe',  　　// 查询字符串参数
      query: 'c=fe',　　// 发送给http的数据 等号分割的键值称为参数串 字符串
      pathname: '/course/list', // 访问资源的路径名
      path: '/course/list?c=fe', //  路径
      href: 'http://www.imooc.com/course/list?c=fe' } // 没被解析的完整的超级链接
       



  第二个参数 将query 变成 对象
  
    url.parse('https://www.baidu.com/s?ie=utf-8&tn=baidu&wd=node%20',true)
    Url {
      protocol: 'https:',
      slashes: true,
      auth: null,
      host: 'www.baidu.com',
      port: null,
      hostname: 'www.baidu.com',
      hash: null,
      search: '?ie=utf-8&tn=baidu&wd=node%20',
      query:
       [Object: null prototype] { ie: 'utf-8', tn: 'baidu', wd: 'node ' },
      pathname: '/s',
      path: '/s?ie=utf-8&tn=baidu&wd=node%20',
      href: 'https://www.baidu.com/s?ie=utf-8&tn=baidu&wd=node%20' }
     
  
  第三个参数  不知道协议的情况下使用 
    url.parse("//imooc/course/list",true,true)  
    Url {
       
      host: 'imooc',
      
      hostname: 'imooc',
       
      query: [Object: null prototype] {},
      pathname: '/course/list',
      path: '/course/list',
        }
  
  


url.format() 将对象转成 字符串

    url.format({
      protocol: 'https',
      hostname: 'example.com',
      pathname: '/some/path',
      query: {
        page: 1,
        format: 'json'
      }
    });
    
    >>>'https://example.com/some/path?page=1&format=json'
    


url.resolve(from，to)  场景：路由

  const url = require('url');
  url.resolve('/one/two/three', 'four');         // '/one/two/four'
  url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
  url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'



