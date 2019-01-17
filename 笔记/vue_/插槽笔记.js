插槽---
	    匿名slot
	    内敛模板
	    默认值
	    设置值
	    具名slot
	    作用域插槽
	    列表插槽



插槽---


	如果子组件不包含 <slot></slot>  父组件的内容将会被丢弃
	
匿名slot  
	当子组件模板只有一个没有属性的 slot 时，
	父组件整个内容片段将插入到 slot 所在的 DOM 位置，
	并替换掉 slot 标签本身


	<div id="app">
	  <parent></parent>
	</div>
	<script>
	    var childnode = {
	        template:`
	            <div class="child">
	                <p>子组件</p>
	                <slot></slot>
	            </div>`,
	    }
	
	    var parentnode ={
	        template:`
	            <div class="parent">
	                <p>父组件 </p>
	                <child>
	                    <p>插槽测试</p>
	                </child>
	            </div>`,
	            components:{
	                child:childnode 
	            },
	    }
	
	    new Vue({
	        el:"#app",
	        components:{
	            parent:parentnode 
	        }
	    })
	
		</script>

	显示结果：	
	<div id="app">
		<div class="parent">
			<p>父组件 </p> 
			<div class="child">
				<p>子组件</p> 
				<p>插槽测试</p>
			</div>
		</div>
	</div>




内联模板
	如果子组件中有 inline-template 特性  组件将把它的内容当作他的模板 而忽略真实模板

	var childnode = {
        template:`
            <div class="child">
                <p>子组件</p>
            </div>`,
    }

    var parentnode ={
        template:`
            <div class="parent">
                <p>父组件 </p>
                <child inline-template>
                    <p>插槽测试</p>
                </child>
            </div>`,
            components:{
                child:childnode 
            },
    }

    new Vue({
        el:"#app",
        components:{
            parent:parentnode 
        }
    })

	显示结果：
		<div id="app">
			<div class="parent">
				<p>父组件 </p> 
				<p>插槽测试</p>
			</div>
		</div>




默认值  也叫备用内容  在子组件的作用域内编译  
	var childNode = {
	  template: `
	  <div class="child">
	    <p>子组件</p>
	    <slot><p>我是默认值</p></slot>
	  </div>
	  `,
	};
	
	var parentNode = {
	  template: `
	  <div class="parent">
	    <p>父组件</p>
	    <child></child>  //只有在宿主元素为空 才显示备用内容
	  </div>
	  `,
	  components: {
	    'child': childNode
	  },
	};

设置值
	var childNode = {
	  template: `
	  <div class="child">
	    <p>子组件</p>
	    <slot><p>我是默认值</p></slot>
	  </div>
	  `,
	};
	
	var parentNode = {
	  template: `
	  <div class="parent">
	    <p>父组件</p>
	    <child><p>我是设置值</p></child>     
	  </div>
	  `,
	  components: {
	    'child': childNode
	  },
	};

	显示结果：
		<div id="app">
			<div class="parent">
				<p>父组件</p> 
				<div class="child">
					<p>子组件</p> 
					<p>我是设置值</p>
				</div>
			</div>
		</div>	



具名slot
	var childNode = {
	  template: `
	  <div class="child">
	    <p>子组件</p>
	    <slot name="my-header">头部默认值</slot>
	    <slot name="my-body">主体默认值</slot>
	    <slot name="my-footer">尾部默认值</slot>
	  </div>
	  `,
	};
	
	var parentNode = {
	  template: `
	  <div class="parent">
	    <p>父组件</p>
	    <child>
	      <p slot="my-header">我是头部</p>
	      <p slot="my-footer">我是尾部</p>
	    </child>
	  </div>
	  `,
	  components: {
	    'child': childNode
	  },
	};

	显示效果：
		<div id="app">
			<div class="parent">
				<p>父组件</p> 
				<div class="child">
					<p>子组件</p> 
					<p>我是头部</p> 
					主体默认值 
					<p>我是尾部</p>
				</div>
			</div>
		</div>




作用域插槽
	<div id="app">
	  <parent></parent>
	</div>
	 
	  var childnode={
	    template:`
	    <div class="child">
	        <p>子组件</p>
	        <slot xxx="hello from child"></slot>
	    </div>`,
	  };
	  var parentnode = {
	    template:`
	    <div class="parent">
	        <p>父组件</p>
	        <child>
	            <template scope="props">
	                <p>from parent </p>
	                <p>{{props.xxx}}</p>
	            </template>
	        </child>
	    </div>`,
	    components:{
	        child:childnode
	    }
	  }
	
	    new Vue({
	        el:"#app",
	        components:{
	            parent:parentnode 
	        }
	    })
	
	显示结果：
		<div id="app">
			<div class="parent">
				<p>父组件</p> 
				<div class="child">
					<p>子组件</p> 
					<p>from parent </p> 
					<p>hello from child</p>
				</div>
			</div>
		</div>


列表插槽

	var childnode={
	    template:`
	    <ul>
	       <slot name="item" v-for="item in items" v-bind:text="item.text"> 默认值</slot> 
	    </ul>`,
	    data(){
	        return {
	            items:[
	                 {id:1,text:'第1段'},
	                 {id:2,text:'第2段'},
	                 {id:3,text:'第3段'},
	            ]
	        }
	    }
	 };
	 var parentnode={
	    template:`
	    <div class="parent">
	        <p>父组件</p>
	        <child>
	            <template slot="item" scope="props">
	                <li>{{props.text}}</li>
	            </template>
	        </child>
	    </div>`,
	    components:{
	        child:childnode
	    }
	 }

	显示效果：
	
		<div id="app">
			<div class="parent">
				<p>父组件</p> 
				<ul>
					<li>第1段</li>
					<li>第2段</li>
					<li>第3段</li>
				</ul>
			</div>
		</div>



引入 切换显示
<div id="app">
    <button v-on:click="show=!show">toggle</button>
    <p v-if="show">小火柴</p>
</div>
   new Vue({
        el:"#app",
        data:{
            show:true
        }
    })

