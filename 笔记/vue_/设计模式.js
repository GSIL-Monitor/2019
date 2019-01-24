

目录
单例模式







前言

设计模式  就是给一些好的设计取个名字

找出程序中变化的地方 并将变化封装起来   当你学一个动的的东西  肯定是有动有静的   



分辨模式的关键是意图而不是结构 为什么用这个模式 它能解决什么问题



创建型 
	单例 
	工厂

行为型 
	观察者


继承关系 用 是 来表示
	自行车是车 猫是动物


泛化关系
	A继承自B
	A --> B


实现关系
	继承抽象类
	车”为一个抽象概念，在现实中并无法直接用来定义对象；只有指明具体的子类(汽车还是自行车)，才 可以用来定义对象

聚合关系
	整体由部分构成的语义
	非强依赖   部门撤销了，人员不会消失，他们依然存在；

组合关系
	整体由部分构成的语义
	强依赖     公司不存在了，部门也将不存在了；



大部分设计模式，是让你在在面向对象的基础上尽量消除继承的手段  如果你用了一些设计模式，减少了继承 那就是用对了  but 继承自纯虚类不应该视为继承 纯虚类等于接口
减少if 


设计模式是为了封装变化，
	让各个模块可以独立变化。精准地使用设计模式的前提是你能够精准的预测需求变更的走向。
	All problems in computer science can be solved by another level of indirection   - David Wheeler 


源码
	K:\JavaScript设计模式与开发实践-源代码



鸭子类型 只关注对象的行为 不关注对象的本身   






目录 
	多态
	多态在面向对象中的作用
	封装 

















多态
	同一个操作 作用在不同的对象上 可能产生不同的解释 和不同的执行结果
	思想 是将"做什么"和"谁去做" 分开  把不变的部分隔离出来 把可变的部分封装起来

	例子 咯咯咯 嘎嘎嘎
		var makeSound = function(animal){
			if(animal instanceof Duck){
				console.log('嘎嘎嘎');
			}else if (animal instanceof Chicken){
				console.log('咯咯咯')
			}
		}
		var Duck = function(){}
		var Chicken = function(){}
		
		makeSound(new Duck())    //嘎嘎嘎
		makeSound(new Chicken()) //咯咯咯


	优化:
		//不变的
		var makeSound = function(animal){
			animal.sound();
		}

		//封装可变的
		var Duck = function(){}
		Duck.prototype.sound = function(){
			console.log('嘎嘎嘎')
		}

		var Chicken = function(){}
		Chicken.prototype.sound = function(){
			console.log('咯咯咯')
		}

		makeSound(new Duck())
		makeSound(new Chicken())


多态在面向对象中的作用
	把分支语句转换为对象的多态性 从而消除分支语句  
	将行为分布在各个对象中  并让这些对象各自负责自己的行为  面向对象的优点


封装--
	一般而言 我们讨论的是 封装数据 和 封装实现

封装数据
	依赖变量的作用域 来实现封装特性
	var obj = (function(){
		var  _name = 'sea'  //私有变量
		return {
			getname:function(){
				return _name;
			}
		}
	})()
	console.log(obj.getname())
	console.log(obj._name)

封装实现
	封装目的是隐藏信息 
	还应该包括 隐藏实现细节 和 设计细节 以及隐藏对象类型 

封装类型
	不区分类型 是一种失色 

封装变化
	要创建一个对象 是一种抽象行为 而具体创建什么对象 则是可以变化的

	创建型模式  封装创建对象的变化
	结构型模型  封装对象之间的组合关系
	行为型模型  封装对象的行为变化








			