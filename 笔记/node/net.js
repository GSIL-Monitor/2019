
//server.js
var net = require('net')
var server = net.createServer(function(socket){
  socket.write('hi 你好'); //发送到client 
  socket.on('data',function(data){ //绑定data事件
    console.log(data.toString()); //转换成字符串
  });

  socket.on('end',function(){
    console.log('有客户机下线了');
  });

  socket.on('error',function(){
    console.log('发生意外错误');
  });
})
server.listen(8080);


//client.js
var net = require('net');
var client = net.connect({port:8080},function(){
  client.name = '客户机one'; //客户机的名字  
  client.write(client.name+'上线了 \n'); //写信息 在server端显示
  client.end(client.name+'下线了 \n'); //写完了
  client.on('data',function(data){    //绑定data
    console.log(data.toString())
  })
})






群聊

//server.js

var net = require('net');
var i = 0;
var clientlist = [];// 保存客户机
var server = net.createServer(function(socket){
 
  socket.name = '用户' + (++i);
  socket.write('【聊天室提示】 欢迎 ' + socket.name + '\n');
  //更新客户机数组
  clientlist.push(socket);
  function showclients(){
    console.log('【当前在线用户】：');
    for(var i=0; i<clientlist.length; i++){
      console.log(clientlist[i].name);
    }
  }
  showclients();

  socket.on('data',function(data){
    //把当前连接的客户机的信息转发到其他客户机
    for(var i=0; i<clientlist.length;i++){
      if(socket !== clientlist[i]){
        clientlist[i].write('【' + socket.name + '】：' + data)
      }
    }
  });

  socket.on('close',function(){
    //当前客户机下线时 将其从列表删除
    clientlist.splice(clientlist.indexOf(socket),1);
    showclients();
  })

  socket.on('error',function(err){
    console.log(socket.name + '退出');
  });

});
server.listen(8080); 


var net =  require('net');
process.stdin.resume();
process.stdin.setEncoding('utf8');
var client = net.connect({port:8080},function(){
  console.log('本机提示 登录到聊天室');
  process.stdin.on('data',function(data){
    client.write(data);
  })

  client.on('data',function(data){
    console.log(data.toString());
  });
  client.on('end', function(){
    console.log('本机提示 推出聊天室');
    process.exit();
  })

  client.on('error',function(){
    console.log('本机提示 聊天室异常');
    process.exit();
  });
});






常用api  




net.socket类
    一个net.Socket也是一个双工流，所以它能被读或写，并且它也是一个EventEmitter

    net.Socket可以被用户创建并直接与server通信。
    举个例子，它是通过net.createConnection()返回的，所以用户可以使用它来与server通信。
    
    当一个连接被接收时，它也能被Node.js创建并传递给用户。
    比如，它是通过监听在一个net.Server上的'connection'事件触发而获得的，那么用户可以使用它来与客户端通信。



net.createServer([options][,connectionListener]) //创建一个新的 tcp 服务器
    optios               是否允许一个半开的TCP连接
    connectionListener   自动给 'connection' 事件创建监听器
    返回: <net.Server>
  

server.listen(6000); 
  启动一个TCP服务监听输入的port和host
  如果遇到 EADDRINUSE错误  说明 给定的地址已经被另一个服务器使用
  如果port省略或是0，系统会随意分配一个在'listening'事件触发后能被server.address().port检索的无用端口。

socket.write(data[, encoding][, callback])
    在 socket 上发送数据。第二个参数制定了字符串的编码 - 默认是 UTF8 编码
    当数据最终被完整写入的的时候  可选的 callback 参数将会被执行  但不一定会马上执行

socket.end([data][, encoding][, callback])
    半关闭 socket。 例如发送一个 FIN 包。 服务端仍可以发送数据。
    如果指定了 data，则相当于调用 socket.write(data, encoding) 之后再调用 socket.end()。


socket.pause() 
　　暂停读取数据。就是说，不会再触发 data 事件。对于控制上传非常有用

socket.resume()
　　调用 pause() 后恢复读取数据


server.address()
    操作系统返回绑定的地址、协议族名和服务器端口。
    查找哪个端口已经被系统绑定时，非常有用

    'listening' 事件被触发时候.才可以调用 server.address()


 
server.listening 
    一个布尔值， 表明 server 是否正在监听连接


server.close([callback] 
    服务器停止接收新的连接，保持现有连接。


server.maxConnections 
  最大连接数  超过数量时拒绝新连接



net.connect()
    net.createConnection() 的别名。


socket.connect()
   在给定的 socket 上初始化一个 TCP 连接。

   net.connect({port:8080},function(){}
   可以加主机 {port: port, host: host} 

【事件connect】
　　当成功建立 socket 连接时触发、

【事件data】
    当接收数据时触发该事件 参数是一个 string  或者 buffer
    当Socket 发送 data 事件的时候，如果没有监听者数据将会丢失

【事件end】
    结束 socket 的可读端


【事件listening】

　　当服务器调用 server.listen 绑定后会触发

【事件connection】

{Socket object} 连接对象
　　当新连接创建后会被触发。socket 是 net.Socket实例

【事件close】

　　服务器关闭时会触发

　　[注意]如果存在连接，这个事件不会被触发直到所有的连接关闭

【事件error】

　　发生错误时触发



ip测试  
  net.isIP(input)  测试input 是不是IP地址  无效返回 0   ipv4返回4  ipv6返回6
  net.isIPv4(input) 返回布尔
  ner.isIPv6(input) 返回布尔





