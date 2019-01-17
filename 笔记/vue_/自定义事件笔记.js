


 
自定义事件
	事件名
		始终使用 kebab-case 的事件名。
	自定义组件的v-model
		Vue.component('base-checkbox', {
		model:{
		prop:'checked',
		event:'change'
		 },
		props:{
			checked:Boolean
		 },
		template:`
		<input 
			type="checkbox" 
			v-bind:checked="checked"
			v-on:change="$emit('change', $event.target.checked)"
		> `
		<base-checkbox v-model="lovingVue"></base-checkbox>
		解释：这里的 lovingVue 的值将会传入这个名为 checked 的 prop。
			  同时当 <base-checkbox> 触发一个 change 事件并附带一个新的值的时候，
			  这个 lovingVue 的属性将会被更新


	将原生事件绑定到组件
	
		<div id='root'>
	　　		<child @click.native='handleClick'></child>
		</div>
		
		<script>
			Vue.component('child',{
			　　template:'<div>hello</div>'
			})
			var vm = new Vue({
			　　el:'#root',
			　　methods:{
			　　　　handleClick:function(){
			　　　　　　alert(1);
			　　　　}
			　　}
			})
		</script>
		.native，告诉vue监听的是原生事件
	
    点击获取当前对象 http://www.cnblogs.com/meng1314-shuai/p/7455575.html
	currentTarget	返回其事件监听器触发该事件的元素。
	target	返回触发此事件的元素（事件的目标节点）。
	 
	
	    


	.sync修饰符
		this.$emit('update:title', newTitle)
		<text-document
		  v-bind:title="doc.title"
		  v-on:update:title="doc.title = $event"
		></text-document>




