

事件----
btn.onclick=function(){}
window.onload = function(){   } 
监听事件发生的构造方法称为事件监听器
响应事件触发而运行的代码块称为 事件处理器
常用
	onclick	       鼠标单击
	ondblclick	   鼠标双击
	onkeyup	       按下并释放键盘上的一个键时触发 
	onchange 	   文本内容或下拉菜单中的选项发生改变
	
	onfocus 	   获得焦点，表示文本框等获得鼠标光标。
	onblur 	       失去焦点，表示文本框等失去鼠标光标。
	
	onmouseover    鼠标悬停，即鼠标停留在图片等的上方
	onmouseout 	   鼠标移出，即离开图片等所在的区域
	
	onload	       网页文档加载事件
	onunload	   关闭网页时
	onsubmit	   表单提交事件
	onreset	       重置表单时



addEventListener() 添加事件句柄
	element.addEventListener() 方法为指定元素添加事件句柄。
	document.addEventListener(event, function, useCapture)
	useCapture 
		true - 事件句柄在捕获阶段执行
		false- 默认。事件句柄在冒泡阶段执行	
    
removeEventListener()  移除 addEventListener() 方法添加的事件句柄



13.1 事件流
    何米苏http://hemisu.com/2017/08/17/302/
	观察员模式
	 	又叫发布—订阅模式  满足条件触发函数  我留一个电话给售楼部  开卖的时候就通知我
	
	事件流 描述的是从页面中接收事件的顺序

	事件冒泡: 开始时由最具体的元素接收 根据dom树逐级向上传播 
	  例子  你点击了div元素 传播顺序： div  body html document 
	
	事件捕获 
		事件捕获的用意 是在事件到达目标之前捕获他 
		顺序： document html body div

13.2 事件处理程序
事件就是用户或浏览器自身执行的某个动作
响应某个事件的函数叫事件处理程序  以"on"开头 

html事件处理程序
	onclick="alert('不能有<>&\"')"

dom 事件处理函数
	var btn = document.getElementById("myBtn");
	btn.onclick = function(){
	alert(this.id); //"myBtn"
	};
	
	//通过addEventListener()添加的事件处理程序只能使用 removeEventListener()来移除；  匿名函数无法移除
	var btn = document.getElementById("myBtn");
	btn.addEventListener("click", function(){
	alert(this.id);
	}, false); 
13.3 事件对象 
event

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
alert(event.type); //"click"
};
btn.addEventListener("click", function(event){
alert(event.type); //"click"
}, false);


13.4 事件类型 
https://www.codetd.com/article/1897660
13.5 内存和性能
removeChild()  
 replaceChild()
 innerHTML
13.6 模拟事件



