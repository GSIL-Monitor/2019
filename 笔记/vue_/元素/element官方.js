CDN
	<!-- 引入样式 -->
	<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
	<!-- 引入组件库 -->
	<script src="https://unpkg.com/element-ui/lib/index.js"></script>	


完整引入Element
	//main.js 
	import Vue from "vue";
	import ElementUI from "element-ui";
	import 'element-ui/lib/theme-chalk/index.css';
	import App from "./App.vue";
	vue.use(ElementUI);
	new Vue({
		el:"#app",
		render:h => h(App)
	})
 
按需引入
	import Vue from "vue"
	import {Button, Select} from "element-ui";
	import App from './App.vue';
	
	Vue.component(Button.name, Button)
	Vue.component(Select.name, Select)
	/* 或写为
	 * Vue.use(Button)
	 * Vue.use(Select)
	 */	


全局配置 

	size 用于改变组件的默认尺寸
	zIndex 设置弹框的初始z-index（默认值：2000）
	
	完整引入
		import Vue from "vue";
		import Element from "element-ui";
		Vue.use(Element,{size:"small",zIndex:3000})

	按需引入
		import Vue from "vue"
		import {Button} from "element-ui";
		Vue.prototype.$ELEMENT = { size:"small" ,zIndex:3000};
		Vue.use(Button)

		