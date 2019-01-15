为了支持各种可能的 HTTP 应用，Node.js 的 HTTP 接口都是非常底层的，只处理流与解析消息。 接口会将消息解析成消息头和消息主体，但不解析具体的消息头或消息主体。


目录

http--
请求--
响应--

server--
agent--

IncomingMessage



http--
http.createServer([options][, requestListener])

	options <Object>
		IncomingMessage <http.IncomingMessage> 指定使用的 IncomingMessage 类。
		ServerResponse <http.ServerResponse> 指定使用的 ServerResponse 类。

	requestListener 会自动添加到 'request' 事件。

	返回新建的 http.Server 实例。


http.get(options[, callback])
http.get(url[, options][, callback])
	因为大多数请求都是 GET 请求且不带请求主体，所以 Node.js 提供了便捷的方法。 
	
	与 http.request() 的区别是，请求的方法是 GET 且自动调用 req.end()。
	
	callback 只有一个参数 res，res 是一个 http.IncomingMessage 实例。

 
http.request(options[, callback]) 
http.request(url[, options][, callback]) 
 
	发送 HTTP 请求。

		如果 url 是一个字符串，则自动使用 url.parse() 解析。 如果 url 是一个 URL, 则自动转换成 options 选项。
	
		如果同时指定了 url 和 options，则合并两个对象，其中 options 优先。
		
		callback 会作为单次监听器添加到 'response' 事件。
		
		返回的 ClientRequest 是可写流。 如果要通过 POST 请求上传文件，则写入到 ClientRequest。
	
 请求成功 触发以下事件：
	'socket' 事件。
	'response' 事件。
	多次触发 res 的 'data' 事件（如果响应主体为空，则不会触发 'data' 事件，比如重定向）。
	res 的 'end' 事件。
	'close' 事件。

 连接出错， 触发以下事件：
	'socket' 事件。
	'error' 事件。
	'close' 事件。

 连接成功之前调用 req.abort()， 触发以下事件：
	'socket' 事件。
	(此时调用 req.abort())
	'abort' 事件。
	'close' 事件。
	'error' 事件并带上错误信息 'Error: socket hang up' 和错误码 'ECONNRESET'。

 接收到响应之后调用 req.abort()， 触发以下事件：
	'socket' 事件。
	'response' 事件。
	
	多次触发 res 的 'data' 事件。
	(此时调用 req.abort())
	'abort' 事件。
	'close' 事件。
	
	res 的 'aborted' 事件。
	res 的 'end' 事件。
	res 的 'close' 事件。
	





请求--

事件
	abort 当请求已被客户端终止时触发 一次性事件 

	connect 每当服务器响应 CONNECT 请求时触发

    response 当请求的响应被接收到时触发。 该事件只触发一次

    socket 当socket被分配到请求后触发

    upgrade 每当服务器响应 upgrade 请求时触发  ---> 例子 如何监听 'upgrade' 事件


	request.getHeader(name)         读取请求头
	request.removeHeader(name)      从请求头对象中移除一个请求头。 
	request.setHeader(name, value)  为请求头对象设置请求头的值   如果请求头已存在则替换
 方法：
	request.end()
	　　结束发送请求。 如果部分请求主体还未被发送，则会刷新它们到流中。 如果请求是分块的，则会发送终止字符 '0\r\n\r\n'。
	
	　　如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 request.end(callback)。
	
	　　如果指定了 callback，则当请求流结束时会被调用

	request.connection  参考 request.socket  指向底层的 socket

	request.abort()
    	标记请求为终止。 调用该方法将使响应中剩余的数据被丢弃且 socket 被销毁

	request.flushHeaders()  刷新请求头

	request.setSocketKeepAlive()  设置socket存活时间

	request.setTimeout(timeout[, callback])
		timeout <number> 请求超时的毫秒数。
		callback <Function> 当超时发生时的回调函数。相当于绑定到 'timeout' 事件。

	request.write(chunk[, encoding][, callback])
		发送请求主体的一个数据块。 通过多次调用该方法，完整的请求主体可被发送到服务器
		如果完整的数据被 成功地刷新 到内部缓冲，则返回 true。 
		如果 失败或部分数据还在内存中 等待队列，则返回 false。 
		当缓冲再次可用时触发 'drain' 事件。

	request.socket  指向底层的 socket

响应--

	response
	　　该对象在 HTTP 服务器内部被创建。 它作为第二个参数被传入 'request' 事件。这个类实现了（而不是继承自）可写流接口
	
	事件 
	finish 
		当响应已被发送时触发。 更具体地说，
		当响应头和响应主体的最后一部分已被交给操作系统通过网络进行传输时，触发该事件。 这并不意味着客户端已接收到任何东西。该事件触发后，响应对象上不再触发其他事件
	
	
	
	
	response.end() 
		该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。 
		每次响应都必须调用 response.end() 方法
	
	response.finished
		　返回一个布尔值，表示响应是否已完成。 默认为 false。 
		  执行 response.end() 之后，该值会变为 true
	
	
	
	response.getHeader(name)
		读取一个已入队列但尚未发送到客户端的响应头
		var contentType = response.getHeader('content-type');
	
	response.setHeader(name,value)
		为一个隐式的响应头设置值
		response.setHeader('Content-Type', 'text/html');
		response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
	
	response.getHeaderNames() 
	
	　　返回响应头名称的数组
	
		response.setHeader('Foo', 'bar');
		response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
		
		var headerNames = response.getHeaderNames();
		// headerNames === ['foo', 'set-cookie']
	
	response.getHeaders() 
	
	　　返回响应头数组
	
		response.setHeader('Foo', 'bar');
		response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
		
		var headers = response.getHeaders();
		// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
	
	response.removeHeader(name) 
	　　从隐式发送的队列中移除一个响应头
	
	response.removeHeader('Content-Encoding');
	
	response.headersSent 
	　　返回一个布尔值  如果响应头已被发送则为 true，否则为 false
	
	response.hasHeader(name) 
	　　是否包含当前响应头
		var hasContentType = response.hasHeader('content-type');
	
	response.write()
		首次被调用时，会发送缓冲的响应头信息和响应主体的第一块数据到客户端。 response.write() 
		第二次被调用时，Node.js 会以流的形式处理数据，并将它们分别发送。 也就是说，响应会被缓冲到响应主体的第一个数据块。
	
	
	response.writeHead(statusCode[, statusMessage][, headers]
	
		statusCode <number>  状态码是一个三位数的 HTTP 状态码，如 404
		statusMessage <string> statusMessage 是可选的状态描述
		headers <Object> headers 是响应头
	
		发送一个响应头请求
		var body = 'hello world';
		response.writeHead(200, {
		  'Content-Length': Buffer.byteLength(body),
		  'Content-Type': 'text/plain' });
	
	
		response.setHeader() 与 response.writeHead()一起使用  response.writeHead() 为主
	
	
	
	response.statusCode  response.statusMessage
		当使用隐式的响应头时（没有显式地调用 response.writeHead()）
		该属性控制响应头刷新时将被发送到客户端的  状态码 和 状态信息  如果该值为 undefined，则使用状态码的标准信息
		
		response.statusCode = 404;	
		response.statusMessage = 'Not found';
	
	
	



http.Server继承自 net.Server--
事件：


	request 每次接收到一个请求时触发。 每个连接可能有多个请求（在 HTTP keep-alive 连接的情况下）
	
	connect 每当客户端发送 HTTP CONNECT 请求时触发
	
	connection 当新的 TCP 流被建立时触发
	
	upgrade 每当客户端发送 HTTP upgrade 请求时触发
	




	server.close([callback])
		停止服务端新收到的连接   参考net.server.close
	
	server.listening
		表示服务器是否正在监听连接
	
	server.maxHeadersCount
		限制请求头的最大数量   设为0 则没有限制
	
	server.setTimeout()
		设置socket的超时时间。 如果发生超时，则触发服务器对象的'timeout'事件，并传入socket作为一个参数
	参数：
		msecs <number> 默认为 120000 (2 分钟)。
		callback <Function>
		返回 server





agent-- 

	Proxy:服务器代理
	Agent强调客户端  请求头
	
		agent.freeSockets 
		　　返回一个对象，包含当前正在等待被启用了 keepAlive 的代理使用的 socket 数组。不要修改该属性
		
		agent.getName(options)
			为请求选项的集合获取一个唯一的名称，用来判断一个连接是否可以被复用。
		
		agent.maxFreeSockets#
			默认为 256。 对于已启用 keepAlive 的代理，该属性可设置要保留的空闲 socket 的最大数量
		
		agent.maxSockets
			默认为 Infinity。 该属性可设置代理为每个来源打开的并发 socket 的最大数量。 来源是 agent.getName() 的返回值。
		
		agent.sockets
			返回一个对象，包含当前正被代理使用的 socket 数组。 不要修改
		
		agent.requests
			返回一个对象，包含还未被分配到 socket 的请求队列。 不要修改。	
	
	
	
IncomingMessage

	message.headers
		请求头或响应头的对象
	
	　　头信息的名称与值的键值对
		
	message.method 
	
	　　返回一个字符串，表示请求的方法。 该属性只读。 例如：'GET'、'DELETE'。
	
	　　[注意]仅在 http.Server 返回的请求中有效。 
		
	message.rawHeaders 
	　　接收到的原始的请求头或响应头列表。
	
	　　[注意]键和值在同一个列表中。 偶数位的是键，奇数位的是对应的值。
	
	message.rawTrailers  <Array>
	　　接收到的原始的 Trailer 请求头或响应头的的键和值。 只在 'end' 事件时被赋值
	
	message.trailers <Object>
	　　返回 Trailer 请求头或响应头对象。 只在 'end' 事件时被赋值
	
	message.socket 
	　　返回与连接关联的 net.Socket 对象。
	
	　　通过 HTTPS 的支持，使用 request.socket.getPeerCertificate() 获取客户端的认证信息
	
	
	message.url 
		返回请求的 URL 字符串。 仅包含实际 HTTP 请求中的 URL
	
	　　[注意]仅在 http.Server 返回的请求中有效
	




例子 如何监听 'upgrade' 事件
	const http = require('http');
	//创建一个http 服务器
	const sv = http.createServer((req,res) =>{
		res.writeHwad(200, {'content-Type':'text/plain'});
		res.end('okay');
	
	})
	sv.on('upgrade', (req,socket,head) =>{
		socket.write(
				   'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
	               'Upgrade: WebSocket\r\n' +
	               'Connection: Upgrade\r\n' +
	               '\r\n');
		socket.pipe(socket);
	})
	
	//服务器正在运行
	sv.listen(1377, '127.0.0.1',()=>{
		//发送请求
		const options = {
			port:1337,
			hostname:'127.0.0.1',
			headers:{
				'Connection':'upgrade',
				'upgrade':'WebSocket'
			}
		};
	
		const req = http.request(options)
		req.end();
	
		req.on('upgrade',(res,socket,upgradeHead) =>{
			console.log('收到请求');
			socket.end();
			process.exit(0);
		});
	});	


例子 request 
	const http = require('http');
	const net  = require('net');
	const util = require('util');
	//随便定义的一个函数，下面会用到
	function  a(){
	    console.log("dajiahao");
	}
	var server = new http.Server();
	server.on('request',(req,res)=>{
	    console.log(req.url);
	    //设置应答头信息
	    res.writeHead(200,{'Content-Type':'text/html'});
	    res.write('hello we are family<br>');
	    res.end('server already end\n');
	});
	//显示了三次这也证明了TCP的三次握手
	server.on('connection',()=>{
	    a();
	});
	server.on('close',()=>{
	    console.log('server will close');
	});
	//关闭服务为了触发close事件
	server.close();
	server.listen(8080);	


例子 处理中文乱码
	var http = require('http');
	 
	http.createServer(function(req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('<head><meta charset="utf-8"/></head>');
	  res.write('<h1>Node.js</h1>');
	  res.write('<b>  </b>');
	  res.end('<p>Hello World</p>');
	  
	}).listen(3000);
	 