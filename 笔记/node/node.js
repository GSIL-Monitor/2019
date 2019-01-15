目录  


http---














 







配置环境变量
 sysdm.cpl


D:\nodejs\
C:\Users\walk\AppData\Roaming\npm

npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\Develop\nodejs\node_cache"


 

典型站点：客户端JS，JSON API，使用在AWS上运行的Node与NoSQL DB通信构建的微服务

Node.js 是一个为实时Web（Real-time Web）应用开发而诞生的平台



不足 回调太多难于控制   方案 从Callback、Promise 到 Async函数，可以轻松的满足所有开发需求



核心  
Event Loop 事件循环（由 libuv 提供）
Thread Pool 线程池（由 libuv 提供）

重点 
Node.js学习重点: Async函数与Promise



  
回调 
https://cnodejs.org/topic/5ab3166be7b166bb7b9eccf7
不带着问题去读源码是比较容易迷失在大量代码中的

入门  Node in action和了不起的Node.js

重要不紧急的事
  算法，数据结构，设计模式，编译原理






我们来想想一般的前端有什么技能？

html
css（兼容浏览器）
js 会点（可能更多的是会点 jquery）
ps 切图
firebug 和 chrome debuger 会的人都不太多
用过几个框架，大部分人是仅仅会用
英语一般
svn/git 会一点
那么他们如果想在前端领域做的更深有哪些难点呢？

基础：oo，dp，命令，shell，构建等
编程思想上的理解（mvc、ioc，规约等）
区分概念
外围验收，如 H5 和 hybird 等
追赶趋势，如何学习新东西
以上皆是痛点，所以比较好的办法应该是这样的。

玩转 npm、gulp 这样的前端工具类（此时还是前端）
使用 node 做前后端分离（此时还是前端）
express、koa 这类框架
jade、ejs 等模板引擎
nginx



nvm install node



 
node模块
module.exports = createFunkyParser
function createFunkyParser (opt) {
  // 参数
  opt = opt || {}
  
  //  私有
  var foo = opt.foo || 'default'
  
  //  api
  return {
    foo: foo,
    ...
  }
  
  // 私有函数  private functions
  function parse () {
    ...
  }
}






Node一向是这样来标榜自己的：“在node中除了代码，所有一切都是并行执行的”。
    Node.js是单线程的。它通过事件轮询（event loop）来实现并行操作，对此，我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，取而代之，多使用非阻塞操作。
    
    
    要用非阻塞操作，我们需要使用回调，通过将函数作为参数传递给其他需要花时间做处理的函数（比方说，休眠10秒，或者查询数据库，又或者是进行大量的计算）
    
    
    probablyExpensiveFunction()（译者注：这里指的就是需要花时间处理的函数），你继续处理你的事情，我（Node.js线程）先不等你了，我继续去处理你后面的代码，请你提供一个callbackFunction()，等你处理完之后我会去调用该回调函数的，谢谢！”
    

require机制

  假设Y是路径，X是文件名或目录名，当 Nodejs 遇到 require(Y+X) 时，按照下面的顺序处理：
  
  　　1、如果 X 是核心模块（例如：require("http")）
  
  　　a.返回该模块
  
  　　b.不再继续执行
  
  　　2、如果Y是以“./”、“/”或“../”开头
  
  　　a.把X当成文件，从指定路径开始，依次查找下面文件：X、X.js、X.json、X.node，只要其中一个存在，就返回该文件，不再继续执行
  
  　　b.把X当成目录，从指定路径开始，依次查找下面文件：X/package.json(main字段)、X/index.js、X/index.json、X/index.node，只要其中一个存在，就返回该文件，不再继续执行
  
  　　3.如果 X 不是核心模块，也没有以“./”、“/”或“../”开头，则Nodejs会从当前模块的父目录开始，尝试从它的 /node_module 目录里加载模块，如果还是没有找到，则移动到再上一层父目录，直到文件系统的根目录
  
语法糖

    保存文件 hi.js
      var str = 'Hi';
      
      function sayHi(name) {
        console.log(str + ', ' + name + '!');
      }
      
      module.exports = sayHi;
     
    加载模块
        var Hi = require('./hi.js'); 
        Hi('Jack'); 
    
    Node会将上述hi.js编译成：
        // 准备module对象:
        var module = {
            id: 'hi',
            exports: {}
        };
        var load = function (module) {
            function sayHi(name) {
                console.log('Hi, ' + name + '!');
            }
        
            module.exports = sayHi;
            return module.exports;
        };
        var exported = load(module);
        // 保存module:
        save(module, exported);
    

CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}



 |---------------浏览器----- ------------------|        |--------------------------CommonJS----------------------------------|
 
  |  BOM  |       | DOM |        | ECMAScript |         | FS |           | TCP |         | Stream |        | Buffer |          |........|
 
  |-------W3C-----------|       |---------------------------------------Node--------------------------------------------------|




   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
网址 ：https://zhuanlan.zhihu.com/p/33058983





顺序：
  外部输入数据-->轮询阶段(poll)-->检查阶段(check)-->关闭事件回调阶段(close callback)-->
  定时器检测阶段(timer)-->I/O事件回调阶段(I/O callbacks)-->闲置阶段(idle, prepare)-->轮询阶段...

名词解释:

      timers: 这个阶段执行定时器队列中的回调如 setTimeout() 和 setInterval()。

      I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate()的回调。

      idle, prepare: 这个阶段仅在内部使用，可以不必理会。

      poll: 等待新的I/O事件，node在一些特殊情况下会阻塞在这里。

      check: setImmediate()的回调会在这个阶段执行。

      close callbacks: 例如socket.on('close', ...)这种close事件的回调。  


用来推迟任务执行的方法 
   三个的区别     
      process.nextTick,微任务分发器
      setTimeout    宏任务分发器
      setImmediate  宏任务分发器     
  

nextTick队列会比Promie先执行











node in action
  
  了不起的Node.js
Node.js开发指南







慕课 爬虫  


开发环境   https://studio.dev.tencent.com/dashboard/workspace





https://www.airpair.com/javascript/node-js-tutorial
如何在VPS上安装Express，Node.js框架和设置Socket.io
https://www.digitalocean.com/community/tutorials/how-to-install-express-a-node-js-framework-and-set-up-socket-io-on-a-vps  





2018
https://cnodejs.org/topic/5b1939ad29e6e510415b2916
Koa2 + mongoose 搭建了一个博客系统，实现了文章管理、用户登录注册、权限控制、分类管理等功能。


Express+mongoose  博客
https://cnodejs.org/topic/581b0c4ebb9452c9052e7acb


























i/o

磁盘读写或网络通信 数据库查询 统称为 I/O 操作 



异步 i/o
每个异步式 I/O 请求完成后会被推送到事件队列，等待程序进程进行处

阻塞    你先等会    排队进站  一次一个  后面的不要挤

非阻塞模式下，线程不会被 I/O 阻塞，永远在利用 CPU。







 

事件

Node.js 的异步机制是基于事件的，所有的磁盘 I/O、网络通信、数据库查询都以非阻塞
的方式请求，返回的结果由事件循环来处理


Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列

线程遇到i/o时  不会等待i/o完成  只是将 i/o请求发送给操作系统 继续下一个语句 
完成后发送一个事件到事件队列  线程处理事件循环中的事件


/*删

  槛  那就是 服务器的选购配置，域名的解析指向，Nodejs 项目的部署等这些偏运维方向，这些让很多新人甚至是已经工作的工程师困扰，自己去琢磨太花费时间，不去琢磨，始终没有能力凭自己双手，让一个产品上线或者让自己的一个想法实现到互联网上，不论是成为独立站长，还是只是让朋友同学访问，于是我把这些总结了一下，以以上几个项目为例，大概分为如下几个步骤：

部署方案规划
待部署项目分析
选购及备案域名
厂商对比与选配阿里云服务器
初步 SSH 无密码登录连接和配置
搭建 Nodejs/MongoDB/Nginx 环境
配置 IPTables/Fail2Ban 防火墙及主动防御
域名 DNS 转移及 A 记录/CNAME 解析配置
MongoDB 角色配置与安全规则设置
线上 MongoDB 单表单库导入导出与跨机迁移备份上传
PM2 发布环境配置
服务器与 Git 仓库读写配置
PM2 一键部署线上 Nodejs 项目
电影网站/ReactNative App 后台/微信公众号/微信小程序后台等项目实战部署
SSL 证书申请及 Nginx 证书集成提供 HTTPS 协议
上线方案复盘总结

*/


架构简介

    node
  libev v8

  node.js 用异步i/o和事件驱动代替了多线程 带来了性能提升
  libev 和 libeio 库支持事件驱动和异步式 I/O。

  iocp  Input/Output Completion Port，输入输出完成端口









 


用途 语法 例子


 不要一行一行读源码  他是怎么实现功能的

 










restful 路由

  const express = require('express'); //加载模块
  const app = express();
  const articles = [{ title: 'Example' }];
  app.get('/articles', (req, res) => {
    res.send(articles);
  });
  app.listen(process.env.PORT || 3000);
  module.exports = app;