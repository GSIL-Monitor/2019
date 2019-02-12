


观察者模式 消息机制  模块间通讯  定义了一种依赖关系  

解决了 主体对象与观察者之间功能的耦合 


卫星 观察者 消息系统 
	有一个存放消息的容器 
	三个方法:
		注册信息接口
		发布信息接口
		移除信息接口

飞机 主体对象 被观察者 

中转站 订阅者飞机信息  

流程 : 飞机飞到一个地方 向卫星发送位置  卫星将信息广播到订阅这架飞机的中转站




把观察者看作一个对象 他的三个方法:

	//将观察者放在闭包中 当页面加载就立即执行
	var Observer = (function() {
		//防止被篡改 将消息容器 作为静态私有变量
		var __messages = {};
		return {
			// 注册信息接口
			regist:function(){}
			// 发布信息接口
			fire:function(){}
			// 移除信息接口
			remove:function(){}
		}
	})()	



注册方法的作用是将订阅者注册的消息推入到消息队列中 
需要两个参数: 消息类型 和 相应的处理动作 

	regist:function(type, fn){
		//如果此消息不存在 则创建一个该消息类型
		if(typeof __messages[type] === 'undefined'){
			//将动作推入到该消息对应的动作执行队列中
			__messages[type] = [fn]
		//如果此消息存在
		}else{
			//将动作方法推入该消息对应的动作执行序列中
			__messages[type].push(fn)
		}
	}	

发布消息 
	接收两个参数 消息类型 和 动作执行时需要传递的参数 
	其功能是 当观察者发布一个消息时将 所有订阅者订阅的消息一次执行 
	
	fire:function(type, args){
		//如果该消息没有被注册 则返回 
		if(!__messages[type])return;
	
		//定义消息信息 
		var events = {
			type:type,      //消息类型
			args:args||{}   //消息携带数据
		},
		i = 0,                         //消息动作循环变量
		len = __messages[type].length; //消息动作长度    
	
		//遍历消息动作 
		for(; i<len; i++){
			//依次执行注册的消息对应的动作序列
			__messages[type][i].call(this, events)
	
		}
	}	


移除动作 
	两个参数  消息类型 和 执行的某一动作 
	其功能是 将订阅者注销的消息从消息队列中清除  避免消息不存在 要做判断

	remove:function(type, fn){
		//如果消息动作队列存在 
		if(__messages[type] instanceof Array){
			//从最后一个消息动作遍历 
			var i= __messages[type].length - 1
			for(; i>=0; i--){
				//如果存在则移除相应动作
				__messages[type][i] === fn && __messages[type].splice(i,1)
			}

		}
	}

	Observer.regist('test', function(e){
		console.log(e.type, e.args.msg) //打印 test {msg:'传递参数'}  
	})

	Observer.fire('test',{msg:'传递参数'})  


评论 

//外观模式  简化获取元素
function $(id){
	return document.getElementById(id)
}

//工程师A 
//实现用户追加评论
(function(){
	 function addMsgItem(e){
	 	var text = e.args.text,                       //获取消息中用户添加的文本内容
	 		ul = $("msg"),                            //留言容器元素
	 		li = document.createElement("li"),        //创建内容容器元素
	 		span = document.createElement("span");    //删除按钮 

	 	li.innerHTML = text;           //写入评论                
	 	//关闭按钮
	 	span.onclick = function(){
	 		ul.removeChild(li)         //移除留言
	 		//发布留言删除消息
	 		Observer.fire("removeCommentMessage", {num:-1})
	 	}
	 	//添加删除按钮
	 	li.appendChild(span);
	 	//添加留言节点
	 	ul.appendChild(li)
	 }
	 //注册添加评论信息
	 Observer.regist('addCommentMessage', addMsgItem)
})()

//工程师B
//实现递增信息功能

(function(){
	//更改用户消息数目
	function changeMsgNum(e){
		//获取需要增加的消息数目
		var num = e.args.num;
		//增加消息数目并写入页面中
		$("msg_num").innerHTML = parseInt($("msg_num").innerHTML)+num;
	}
	//注册添加评论消息
	Observer
		.regist("addCommentMessage",changeMsgNum)
		.regist("removeCommentMessage", changeMsgNum)
})()

//发布消息功能
(function(){
	//用户点击提交按钮
	$("user_submit").onclick = function(){
		//获取用户输入框中的信息
		var text= $("user_input");
		//如果消息为空 则提交失败
		if(text.value === ""){
			return;
		}
		//发布一则评论消息
		Observer.fire("addCommentMessage", {
			text:text.value,  //评论内容
			num:1             //评论数量
		});
		text.value = ""       //将输入框置为空

	}
})()










完整版
var Event = (function(){
    var global = this,
        Event,
        _default = 'default';
    Event = function(){
        var _listen,
            _trigger,
            _remove,
            _slice = Array.prototype.slice,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            namespaceCache = {},
            _create,
            find,
            each = function(ary,fn){
                var ret;
                for(var i = 0, l = ary.length; i < l; i++){
                    var n = ary[i];
                    ret = fn.call(n,i,n);
                }
                return ret;
            };
            _listen = function(key,fn,cache){
                if(!cache[key]){
                    cache[key] = [];
                }
                cache[key].push(fn);
            };
            _remove = function(key,cache,fn){
                if(cache[key]){
                    if(fn){
                        for(var i = cache[key].length; i >= 0; i--){
                            if(cache[key][i] === fn){
                                cache[key].splice(i,1);
                            }
                        }
                    }else{
                        cache[key] = [];
                    }
                }
            };
            _trigger = function(){
                var cache = _shift.call(arguments),
                    key = _shift.call(arguments),
                    args = arguments,
                    _self = this,
                    ret,
                    stack = cache[key];
                if(!stack || !stack.length){
                    return;
                }
                return each(stack,function(){
                    this.apply(_self,args);
                });
            };
            _create = function(namespace){
                var namespace = namespace || _default;
                var cache = {},
                    offlineStack = [],  //离线事件
                    ret = {
                        listen: function(key,fn,last){
                            _listen(key,fn,cache);
                            if(offlineStack === null){
                                return;
                            }
                            if(last === 'last'){
                                offlineStack.length && offlineStack.pop()();
                            }else{
                                each(offlineStack,function(){
                                    this();
                                });
                            }
                            offlineStack = null;
                        },
                        one: function(key,fn,last){
                            _remove(key,cache);
                            this.listen(key,fn,last);
                        },
                        remove: function(key,fn){
                            _remove(key,cache,fn);
                        },
                        trigger: function(){
                            var fn,
                                args,
                                _self = this;
                            _unshift.call(arguments,cache);
                            args = arguments;
                            fn = function(){
                                return _trigger.apply(_self,args);
                            };
                            if(offlineStack){
                                return offlineStack.push(fn);
                            }
                            return fn();
                        }
                    };
                    return namespace ?
                        (namespaceCache[namespace] ? namespaceCache[namespace] :
                            namespaceCache[namespace] = ret) 
                                : ret;
            };
        return {
            create: _create,
            one: function(key,fn,last){
                var event = this.create();
                event.one(key,fn,last);
            },
            remove: function(key,fn){
                var event = this.create();
                event.remove(key,fn);
            },
            listen: function(key,fn,last){
                var event = this.create();
                event.listen(key,fn,last);
            },
            trigger: function(){
                var event = this.create();
                event.trigger.apply(this,arguments);
            }
        };
    }();
    return Event;
})();
/********* 先发布后订阅 *********/
Event.trigger('click',1);
Event.listen('click',function(a){
    console.log(a);   //1
});
/********* 使用命名空间 *********/
Event.create('namespace1').listen('click',function(a){
    console.log(a);   //1
})
Event.create('namespace1').trigger('click',1);
Event.create('namespace3').listen('click',function(a){
    console.log(a);   //2
})
Event.create('namespace3').trigger('click',2);
