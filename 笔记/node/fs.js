
文件系统 fs

	POSIX 文件系统操作
	fs 模块中所有的操作都提供了异步的和 同步的两个版本
	
	加上Sync  就是异步版本
	

	读取文件
		fs.readFile() 异步读取文件
		
			filename 要读取的文件名
			encoding 字符编码
			
			callback(err, data) 用于接收文件内容
			err  有没有发生错误
			data 文件内容 指定字符编码返回解析后的字符串 否则是二进制数据
			
		
		fs.readFileSync(filename, [encoding])  同步读取文件
	
	写入文件
	
		var fs = require("fs");
		//           要写入的文件   要写入的内容  	a追加|w写入（默认）|r（读取）  回调函数
		fs.writeFile("11.txt","我是要写入的11.txt文件的内容",{flag:"a"}	,function (err) {
		    if(err){
		        return console.log(err);
		    }else {
		        console.log("写入成功");
		    }
		})
		
	
		var fs = require('fs');
		fs.appendFile('11.txt',"这是要追加的内容",function(err){
			if(err){
				return console.log(err);
			}else{
				console.log("追加成功")
			}
		})
		
	
	
	
	
	复制文件  先读取 再写入
	
		fs.readFile("22.txt",function (err,data) {
		    if(err){
		        return console.log(err);
		    }else{
		    var getdata = data.toString();
		    fs.writeFile("33.txt",getdata,function(err){
		      if(err){
		                return console.log(err);
		            }else {
		                console.log("复制欧克");
		              }
		    })
		  }
		})
		
		
		var res = 	fs.writeFileSync("44.txt",fs.readFileSync("22.txt"));
		console.log(res);
		
	
	文件重命名
	
		fs.rename("11.txt","22.txt",function(err){})
		  

	文件删除
		fs.unlink("11.txt",function (err) {
	
	文件夹创建	
		//1 -- 执行   2 -- 写入  4 -- 读取  7=1+2+4  	创建的文件夹可执行可读可写	
		fs.mkdir("img",0777,function (err) {...})	
		
	修改文件夹权限	
		fs.chmod("img",0333,function (err) {...})		
		
	修改文件夹名字	
		
		fs.rename("img","image",function (err) {})
		
	删除文件夹
		fs.rmdir("img",function (err){})
	
	读取文件夹里面的信息
		fs.readdir("image",function (err,data) {})
	
	判断是文件 还是文件夹
	
		fs.stat()

	例子：
		var fs = require('fs');
		fs.readdir('./',function(err,data){
		    data.forEach(function(item,index,arr){
		        fs.stat(item,function(err,stats){
		            if(stats.isFile()){
		                console.log('文件：' + item);
		            }
		            if(stats.isDirectory()){
		                console.log('目录：' + item);
		            }
		        });    
		    })
		
		})
	
__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径

__dirname 表示当前执行脚本所在的目录。

递归遍历目录
	var fs = require('fs');
	var path = require('path');
	 function travel(dir, callback) {
	    fs.readdirSync(dir).forEach(function (file) {
	        var pathname = path.join(dir, file);
	
	        if (fs.statSync(pathname).isDirectory()) {
	            travel(pathname, callback);
	        } else {
	            callback(pathname);
	        }
	    });
	}
	travel('cms', function (pathname) {
	    console.log(pathname);
	});









模块 stream 流

	process全局对象中包含 三个流对象
		process.stdin   标准输入  可读
		process.stdout  标准输出  可写
		process.stderr  标准错误  可写

	

	当涉及持续不断的对数据进行读写时 流就产生了

	流类型
		readable 可读操作  例如 fs.createReadStream()
		writable 可写操作  例如 fs.createWriteStream()
		duplex   可读写    例如 net.Socket
		transform 在读写过程中可以修改和变换数据的 Duplex 双工流 (例如 zlib.createDeflate()).

	steam对象是EventEmitter 的实例  

	常用的事件
		data 有数据可读时触发
		end 读完时触发 
		error 接收和写入过程中 发生错误
		finish 数据已被写入底层系统



管道流
	const fs = require('fs');
	let rs = fs.createReadStream('./1.txt');  //创建可读流
	let ws = fs.createWriteStream('./2.txt'); //创建可写流
	
	rs.pipe(ws); // 通过pipe让可读流流入到可写流 写入文件
	
链式流
	用管道和链式来压缩和解压文件 

	var fs = require("fs");
	var zlid = require('zlib');
	fs.createReadStream("input.txt")
		//压缩input.txt 文件为 input.txt.gz
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("input.txt.gz"));
	console.log("文件压缩成功")
	
读文件 ---> 流入解压zlib.createGunzip()---> 流入 input.txt



可写流

可写流是对数据流向设备的抽象，用来消费上游流过来的数据，
通过可写流程序可以把数据写入设备，常见的是本地磁盘文件或者 TCP、HTTP 等网络响应


Writable(可写流)包括：
	HTTP requests, on the client
	HTTP responses, on the server
	fs write streams
	[zlib streams][zlib]
	crypto streams 加密
	TCP sockets
	child process stdin
	process.stdout, process.stderr
	

所有 Writable 流都实现了 stream.Writable 类定义的接口
所有的 Writable streams 都可以按一种基本模式进行使用
	var myStream = getWritableStreamSomehow();
	myStream.write('some data');
	myStream.write('some more data'); //更多数据 
	myStream.end('done writing data');//完成写入数据

'finish'事件
	调用 stream.end() 且缓冲数据都已传给底层系统之后触发。

'close'事件
	当流被关闭时触发

'pipe' 事件
	当在可读流上调用 stream.pipe() 时触发。

'unpipe'事件
	当在可读流上调用 stream.unpipe() 时触发。
	当可读流通过管道流向可写流发生错误时，也会触发 'unpipe' 事件。

'drain'事件
　　如果调用 stream.write(chunk) 方法返回 false 流将在适当的时机触发 'drain' 事件



writable.write() 方法向流中写入数据，并在数据处理完成后调用 callback 


可读流

可读流的例子包括：
	客户端的 HTTP 响应
	服务器的 HTTP 请求
	fs 的读取流
	zlib 流
	crypto 流
	TCP socket
	子进程 stdout 与 stderr
	process.stdin
	

'data' 事件
	当流将数据块传送给消费者后触发
'readable' 事件
	当流中有数据可供读取时触发

'end' 事件
	只有在数据被完全消费掉后才会触发

readable.pause()	
	使流动模式的流停止触发 'data' 事件，并切换出流动模式。 任何可用的数据都会保留在内部缓存中。

readable.resume()
	将被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式。
	当存在 'readable' 事件监听器时，readable.resume() 不起作用。

readable.destroy([error])
	销毁流，并触发 'error' 事件和 'close' 事件

const { Writable } = require('stream');
const { Readable } = require('stream');
const { Duplex } = require('stream');


读写流

Duplex和Transform都是可读写的。 在内部，它们都维护了两 相互独立的缓存用于读和写。 在维持了合理高效的数据流的同时，也使得对于读和写可以独立进行而互不影响。 例如， 
net.Socket就是Duplex的实例，它的可读端可以消费从套接字（socket）中接收的数据， 可写端则可以将数据写入到套接字。 由于数据写入到套接字中的速度可能比从套接字接收数据的速度快或者慢， 在读写两端使用独立缓存，并进行独立操作就显得很重要了



转换流


