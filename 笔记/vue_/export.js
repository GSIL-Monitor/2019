
	
 
export default
	export default function (){
	    console.log("export.default");
	}
	 
	import demo1 from './export.default'
	demo1();//export.default
 

new Vue() 相当于一个构造函数

export 用来导出模块

	export function FunctionName() {...}
	export class ClassName {...}
	
	默认导出（函数）：
		export default function() {}
	默认导出（类）：
		export default class {}


1. export 和 export default 的区别在于
	例子: 
		export 可以导出多个命名模块
			//demo1.js
			export const str = 'hello world'
			
			export function f(a){
			    return a+1
			}
		对应的引入方式：
			//demo2.js
			import { str, f } from 'demo1'	
	例子:
		//add.js
			export function add(){
			    console.log("a");
			}
			export function add2(add1,add2){
			    return add1+add2
			}
			export const add3 = 3;
		//demo.js 
			import {add,add2,add3} from './add'
			add();//a
			console.log(add2(1,2));//3
			console.log(add3);//3


2. export default 只能导出一个默认模块，这个模块可以匿名，例如：
	//demo1.js
		export default {
		    a: 'hello',
		    b: 'world'      
		}
对应的引入方式：
	//demo2.js
		import obj from 'demo1'
	　　引入的时候可以给这个模块取任意名字，例如 "obj"，且不需要用大括号括起来。






import defaultExport from "module-name";
import B from '../a/b'

 
import { export } from "module-name";
import { export as alias别名 } from "module-name";
import { export1 , export2 } from "module-name";

import {foo, bar} from '/modules/my-module.js';