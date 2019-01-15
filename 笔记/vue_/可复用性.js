自定义指令
	注册全局指令 
	注册局部指令 

插件--

过滤器-- 


钩子函数

虚拟dom-------
	VNode属性
	VNode类型
 
render----------- 
	第一个参数
	第二个参数
	第三个参数
	template 对比 render
	
	this.$slots用法
	render 作用域插槽
	向子组件中传递作用域插槽
	
	函数化组件 
	
	vnode必须唯一
	render v-model
	
	封装一个锚点链接
		用x-template
		用render



	
createElement--------
	深入data
	约束
	render: h => h(App)

jsx--------

使用JavaScript 代替模板功能



使用 Render 函数开发可排序的表格组件

留言列表














自定义指令
	注册全局自定义指令 v-focus
		Vue.directive('focus',{
		    inserted:function(el){
		        el.focus()
		    }
		  })
		  new Vue({
		    el:"#app"
		  })
	注册局部指令 
		<div id="app">
  			<input v-focus>
		</div>	
		new Vue({
		       el:"#app",
		       directives:{
		           focus:{
		               //指令的定义
		               inserted:function(el){
		                   el.focus()
		               }
		           }
		       }
		   })
  
 // directive.vue 创建一个自定义指令文件
 // 引入vue import Vue from 'Vue' 
 // 全局注册指令  
 // 导入到 main.js




插件--

过滤器-- 
	管道过滤
	{{message | capitalize}}
	
	{{ message | filterA | filterB }}

	v-bind:id="rawid | formatid"





钩子函数

	<div id="hook" v-demo:foo.a.b="message"></div>
    Vue.directive('demo',{
   		bind:function(el,binding,vnode){
   		    var s = JSON.stringify
   		    el.innerHTML= 
   		    "name:" +s(binding.name)+"<br />"+
   		    "value:"+s(binding.value)+"<br />"+
   		    "expression:"+s(binding.expression)+"<br />"+
   		    "argument:"+s(binding.arg)+"<br />"+
   		    'modifiers: '  + s(binding.modifiers) + '<br>' +
   		    'vnode keys: ' + Object.keys(vnode).join(', ')
   		}
   })

   new Vue({
    el:"#hook",
    data:{
        message:"hello!"
    }
   })


	函数简写 bind 和 update
	
		Vue.directive('color',function(el,binding){
			el.style.backgroundColor = binding.value
		})
	
	对象字面量
		如果指令需要多个值  可以传入一个JavaScript对象字面量
	
			<div id="hook">
				<div v-demo="{color: 'white' ,text: 'hello' }"></div>
			</div>
			  Vue.directive("demo",function(el,binding){
			     console.log(binding.value.color)
			     console.log(binding.value.text)
			 })
	
			new Vue({
			 el:"#hook",
			  
			})
	
 


虚拟dom-------

VNode属性：
	tag:当前节点标签名，
	
	data：当前节点数据对象，
	
	children：子节点数组，
	
	text：当前节点文本，
	
	elm：当前虚拟节点对应的真实dom节点，
	
	ns：节点的namespace( 名称空间)，
	
	content：编译作用域，
	
	functionalContext：函数化组件的作用域，即全局上下文，
	
	key：节点标识，有利于patch优化，
	
	componentOptions：创建组件实例时的options 选项信息
	
	child：当前节点对应的组件实例，
	
	parent：组件的占位节点，
	
	raw：原始html，
	
	isStatic：是否是静态节点，
	
	isRootInsert：是否作为跟节点插入，若被包裹的节点，该属性值为false，
	
	isComment：是否为注释节点，
	
	isCloned：是否为克隆节点，
	
	isOnce：是否只改变(渲染)一次，或是否有v-once指令；

VNode类型：
	TextVNode：文本节点，
	
	ElementVNode：普通元素节点，
	
	ComponentVNode：组件节点，
	
	EmptyVNode：空节点，或者说是没有内容的注释节点，
	
	CloneVNode：克隆节点，可以是以上任意类型节点




概念: 
	与dom操作相比 vnode是基于JavaScript计算的 只更新需要更新的 不是全部重绘 所以开销会小很多




  例子:
	<div id="app"></div>
	new Vue({
		el:"#app",
		render:createElement=>{
			return createElement(
				'h2',[createElement('a',{domProps:{href:"#biaoti"}},"标题")]
			);
		}
	})
    
    效果：<h2><a href="#biaoti">标题</a></h2>






render-----------

 https://segmentfault.com/a/1190000010913794
第一个参数 必选 {String | Object | Function}

	<div id="app">
        <elem></elem>
    </div>
 
        Vue.component('elem', {
            render: function(createElement) {
                return createElement('div');//一个HTML标签字符
                
            }
        });
        new Vue({
            el: '#app'
        });


第二个参数 可选 {Object}

	<div id="app">
	        <elem></elem>
	</div>
	 Vue.component('elem', {
	       render: function(createElement) {
	           var self = this;
	           return createElement('div', {//一个包含模板相关属性的数据对象
	               'class': {
	                   foo: true,
	                   bar: false
	               },
	               style: {
	                   color: 'red',
	                   fontSize: '14px'
	               },
	               attrs: {
	                   id: 'foo'
	               },
	               domProps: {
	                   innerHTML: 'baz'
	               }
	           });
	       }
	   });
	   new Vue({
	       el: '#app'
	   });


	   效果：
	        <div id="app">
	        	<div id="foo" class="foo" style="color: red; font-size: 14px;">
	        		baz
	        	</div>
	        </div>
	
第三个参数 {String | Array}
	<div id="app">
        <elem></elem>
    </div>

	Vue.component('elem',{
        render:function(createElement){
            var self = this;
            return createElement('div',[
                    createElement('h1','主标题'),
                    createElement('h2','副标题')
                ])
            }
       })
        new Vue({
            el: '#app'
        });
       效果：
        <div id="app"> 
              <div> 
                  <h1>主标题</h1> 
                  <h2>副标题</h2>
              </div>
          </div>


template 对比 render 

    <div id="app">
        <ele1></ele1>
        <ele2></ele2>
    </div>
  
        Vue.component('ele1', {
            template: `<div id="elem":class="{show: show}"@click="handleClick">
                            文本
                         </div>`,
            data: function() {
                return {
                    show: true
                }
            },
            methods: {
                handleClick: function() {
                    console.log('clicked!');
                }
            }
        }); 
        Vue.component('ele2', {
            render: function(createElement) {
                return createElement('div', {
                    'class': {
                        show: this.show
                    },
                    attrs: {
                        id: 'elem'
                    },
                    on: {
                        click: this.handleClick
                    }
                }, '文本');
            },
            data: function() {
                return {
                    show: true
                }
            },
            methods: {
                handleClick: function() {
                    console.log('clicked!');
                }
            }
        });
        new Vue({
            el: '#app'
        });
	
	显示效果：
		
		 <div id="app">  
		 	<div id="elem" class="show">
		 		文本
		 	</div>
		 </div>
		

this.$slots用法
 	
 	<div id="app">
 	      <blog-post>
 	          <h1 slot="header3"><span>About Me</span></h1>
 	          <p>Here's some page content</p>
 	          <p slot="footer">Copyright 2016 Evan You</p>
 	          <p>If I have some content down here</p>
 	      </blog-post>
 	  </div>
       Vue.component('blog-post', {
            render: function(createElement) {
                var header2 = this.$slots.header3,//返回由VNode组成的数组
                    body = this.$slots.default,
                    footer = this.$slots.footer;
                return createElement('div', [
                    createElement('header1', header2),
                    createElement('main', body),
                    createElement('footer', footer)
                ])
            }
        });
        new Vue({
            el: '#app'
        }); 

	效果：
	
		<div id="app">
		    <div>
		        <header>
		            <h1>
		                <span>About Me</span>
		            </h1>
		        </header>
		        <main> 
		            <p>Here's some page content</p>  
		            <p>If I have some content down here</p>
		        </main>
		        <footer>
		            <p>Copyright 2016 Evan You</p>
		        </footer>
		    </div>
		</div>


vm.$slots
	slot="foo"  ---> vm.$slots.foo
	$slots.default 收集散户

vm.$scopedSlots
	用来访问作用域插槽


render 作用域插槽 


    <div id="app">
         <ele>
             <template scope="props">
                 <span>{{props.text}}</span>
             </template>
         </ele>
    </div>
 
       Vue.component('ele',{
        render:function(createElement){
            //相当于 <div><slot v-bind:text="msg"></slot></div>
            return createElement('div',[
                    this.$scopedSlots.default({
                        text:this.msg
                    })
                  ])
        },
        data:function(){
            return{
                msg:"来自子组件"
            }
        }
       })
        new Vue({
            el: '#app'
        });

        效果：
      		<div id="app">
      		    <div>//父组件
      		        <span> 来自子组件 </span> 
      		    </div>
      		</div>
        


向子组件中传递作用域插槽

  Vue.component('ele',{
            render:function(createElement){
                return createElement('div',[
                        createElement('child',{
                            scopedSlots:{
                                default:function(props){
                                    return [
                                        createElement('sapn','来自父组件'),
                                        createElement('span',props.text)
                                    ]
                                }
                            }
                        })
                    ])
            }

        });
        Vue.component('child',{
            render:function(createElement){
                return createElement('b',this.$scopedSlots.default({text:"我是子组件"}));
            }
        })


        new Vue({
            el: '#app'
        });


        效果：
            <div id="app">
                <div>
                    <b> //子组件
                        <span>
                            来自父组件
                        </span>
                        <span>
                            我是组件
                        </span>
                    </b>
                </div>
            </div>




函数化组件 
	使用函数化组件时 render函数 用第二个参数context 来提供上下文

	组件需要的 data props 都是通过这个上下文来传递的 

	比如 this.level 要写成 context.props.level
		 this.$slots.default 要写成 context.children

	场景:
		 程序化地在多个组件 选择一个．
         在将 children props, data 传递给子组件之前操作它们．



	切换 图片 视频 文本
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>render</title>
		    <script src="https://cdn.bootcss.com/vue/2.3.4/vue.js"></script>
		</head>
		<body>
		    <div id="app">
		        <smart-item :data="data"></smart-item>
		        <button @click="change('img')">切换为图片为组件</button>
		        <button @click="change('video')">切换为视频为组件</button>
		        <button @click="change('text')">切换为文本组件</button>
		    </div>
		    <script>
		        // 图片组件选项
		        var ImgItem = {
		            props: ['data'],
		            render: function(createElement) {
		                return createElement('div', [
		                    createElement('p', '图片组件'),
		                    createElement('img', {
		                        attrs: {
		                            src: this.data.url
		                        }
		                    })
		                ]);
		            }
		        }
		        // 视频组件
		        var VideoItem = {
		            props: ['data'],
		            render: function(createElement) {
		                return createElement('div', [
		                    createElement('p', '视频组件'),
		                    createElement('video', {
		                        attrs: {
		                            src: this.data.url,
		                            controls: 'controls',
		                            autoplay: 'autoplay'
		                        }
		                    })
		                ]);
		            }
		        };
		        /*纯文本组件*/
		        var TextItem = {
		            props: ['data'],
		            render: function(createElement) {
		                return createElement('div', [
		                    createElement('p', '纯文本组件'),
		                    createElement('p', this.data.text)
		                ]);
		            }
		        };
		
		        Vue.component('smart-item', {
		            functional: true,
		            // 为了弥补缺少的实例
	                // 提供第二个参数作为上下文
		            render: function(createElement, context) {
		                function getComponent() {
		                    var data = context.props.data;
		                    if (data.type === 'img') return ImgItem;
		                    if (data.type === 'video') return VideoItem;
		                    return TextItem;
		                }
		                return createElement(
		                    getComponent(), //他的返回值是第一个参数
		                    { //这是第二个参数  
		                        props: {
		                            data: context.props.data
		                        }
		                    },
		                    context.children
		                )
		            },
		            props: {
		                data: {
		                    type: Object,
		                    required: true
		                }
		            }
		        });
		        new Vue({
		            el: '#app',
		            data() {
		                return {
		                    data: {}
		                }
		            },
		            methods: {
		                change: function(type) {
		                     if (type === 'img') {
		                        this.data = {
		                            type: 'img',
		                            url: 'https://raw.githubusercontent.com/iview/iview/master/assets/logo.png'
		                        }
		                    } else if (type === 'video') {
		                        this.data = {
		                            type: 'video',
		                            url: 'http://vjs.zencdn.net/v/oceans.mp4'
		                        }
		                    } else if (type === 'text') {
		                        this.data = {
		                            type: 'text',
		                            text: '这是一段纯文本'
		                        }
		                    }
		                }
		            },
		            created: function() {
		                this.change('img');
		            }
		        });
		
		//效果：
		// <div id="app">
		//     <div>
		//         <p>
		//             图片组件
		//         </p>
		//         <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
		//     </div>
		//     <button>
		//         切换为图片为组件
		//     </button>
		//     <button>
		//         切换为视频为组件
		//     </button>
		//     <button>
		//         切换为文本组件
		//     </button>
		// </div>
		
		    </script>
		</body>
		</html>
	
	





vnode必须唯一

	创建20个p标签
	   <div id="app">
       	 <ele></ele>
       </div>
 		Vue.component('ele', {
        render: function (createElement) {
            return createElement('div',
                Array.apply(null, { length: 20 }).map(function () {
                 return createElement('p', 'hi')
                })
            )
        }
        });
        new Vue({
            el: '#app'
        })

	渲染两个子组件
			<div id="app">  
			   <ele>
			       <div>
			           <child></child>
			       </div>
			   </ele>
			</div>
			<script>
			   //全局注册组件
			   Vue.component('child',{
			    render:function(createElement){
			        return createElement('p','text')
			    }
			   });
			
			   Vue.component('ele',{
			    render:function(createElement){
			        return createElement('div',[
			                this.$slots.default,
			                 this.$slots.default
			            ]);
			    }
			   })
			    
			   var app = new Vue({
			    el:"#app"
			   })
			
	工厂函数克隆组件	
		在render函数里创建一个 cloneVNode的工厂函数 通过递归将slot所有子节点克隆一份 
		并对	vnode的关键属性也进行复制
			<body>
			<div id="app">  
			   <ele>
			       <div>
			           <child></child>
			       </div>
			   </ele>
			</div>
			<script>
			//全局注册组件
			Vue.component('child',{
			    render:function(createElement){
			        return createElement('p','text')
			    }
			})
			   
			Vue.component('ele', {
			render: function (createElement) {
			    //克隆slot节点的方法
			    function cloneVNode(vnode){
			        //递归遍历所有子节点 并克隆
			        const clonedChildren  = vnode.children&&
			        vnode.children.map(function(vnode){
			            return cloneVNode(vnode);
			        })
			        const cloned = createElement(vnode.tag, vnode.data,clonedChildren);
			        cloned.text = vnode.text;
			        cloned.isComment = vnode.isComment;
			        cloned.componentOptions = vnode.componentOptions;
			        cloned.elm = vnode.elm;
			        cloned.context = vnode.context;
			        cloned.ns = vnode.ns;
			        cloned.isStatic = vnode.isStatic;
			        cloned.key = vnode.key; 
			
			        return cloned;
			    }
			
			    const vNodes = this.$slots.default;
			    const clonedVNodes = vNodes.map(function(vnode){
			        return cloneVNode(vnode);
			    });
			    return createElement('div',[vNodes, clonedVNodes]);
			
			}
			});
			new Vue({
			    el: '#app'
			})
			
			</script>
			







render v-model
      <div id="app">
            <el-input :name="name" @input="val=>name=val"></el-input>
            <div>你的名字是{{name}}</div>
        </div>
        
        Vue.component('el-input', {
            render: function(createElement) {
                var self = this;
                return createElement('input', {
                    domProps: {
                        value: self.name
                    },
                    on: {
                        input: function(event) {
                            self.$emit('input', event.target.value);
                        }
                    }
                })
            },
            props: {
                name: String
            }
        });
        new Vue({
            el: '#app',
            data: {
                name: 'hdl'
            }
        });



封装一个锚点链接

用x-template
	 <div id="app">
	     
	    <anchor :level='2' title="特性">特性</anchor>
	 	
	    <script type='text/x-template' id="anchor">
	    <div>
	        <h1 v-if='level === 1'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h1>
	
	        <h2 v-if='level === 2'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h2>
	
	        <h3 v-if='level === 3'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h3>
	
	
	        <h4 v-if='level === 4'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h4>
	        <h5 v-if='level === 5'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h5>
	        <h6 v-if='level === 6'>
	            <a :href="'#'+title">
	                <slot></slot>
	            </a>
	        </h6>
	
	    </div>
	
	
	</script>
	
	</div>
	
	<script>
	    Vue.component('anchor', {
	        template:'#anchor',
	        props:{
	            level:{
	                type:Number,
	                required:true
	            },
	            title:{
	                type:String,
	                default:'' 
	            }
	        }
	    })
	    var app = new Vue({
	        el:"#app"
	    })
	</script>
	

用render
	<div id="app">  
	    <anchor :level='2' title="特性">特性</anchor>
	</div>
	<script>
	    Vue.component('anchor', {
	      
	        props:{
	            level:{
	                type:Number,
	                required:true
	            },
	            title:{
	                type:String,
	                default:'' 
	            }
	        },
	        render:function(createElement){
	            return createElement('h'+this.level,
	                    [
	                        createElement('a',{domProps:{
	                            href:'#'+this.title
	                        }},
	                        this.$slots.default
	                        )
	                    ]
	                )
	        }
	    })
	    var app = new Vue({
	        el:"#app"
	    })
	</script>
	



createElement--------
	
	深入data
	约束
	render: h => h(App)



第一个参数 {一个 HTML 标签字符串 | 组件选项对象 | 一个返回值类型为String/Object的函数}

深入data object参数
	就是createElement的第二个参数。

		{
		  'class': {
		     // 和`v-bind:class`一样的API
		  },
		  style: {
		     // 和`v-bind:style`一样的API
		  },
		  attrs: {
		     // 正常的 html 特性
		  },
		  props: {
		     // 组件 props
		  },
		  domProps: {
		    // DOM 属性
		  },
		  on: {
		    // 事件监听器基于on
		    // 不再支持如 `v-on:keyup.enter` 修饰器，需手动匹配 keyCode
		  },
		  nativeOn: {
		    // 仅对于组件，用于监听原生组件，而不是组件内部使用`vm.$emit`触发的事件
		  },
		  directives: [
		    {
		      // 自定义指令，注意事项：不能对绑定的旧值设值
		      // vue 会为您持续追踪
		    }
		  ],
		  scopedSlots: {
		  },
		  slot: '', // 如果组件是其他组件的子组件，需为 slot 指定名称
		  // 其他特殊顶层属性
		  key: '',
		  ref: ''
		}
		
 

约束
	就是createElement的第三个参数。
	组件树中的所有 VNodes 必须是唯一的。
	
 






main.js 文件内容

   import Vue from 'vue'
    import App from './App.vue'
    new Vue({
      el: '#app',
      render: h => h(App)
    })

	render: h => h(App);
	等价于 
	render:function(h){
		return h(App)
	}	
	等价于 
	render:function(createElement){
		return createElement(App)
	}


createEmptyVNode 创建一个空 VNode 节点
	/*创建一个空 VNode 节点*/
	export const createEmptyVNode = () => {
	  const node = new VNode()
	  node.text = ''
	  node.isComment = true
	  return node
	}

createTextVNode 创建一个文本节点
	/*创建一个文本节点*/
	export function createTextVNode (val: string | number) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

cloneVNode 克隆一个 VNode 节点
	export function cloneVNode (vnode: VNode): VNode {
	  const cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions
	  )
	  cloned.ns = vnode.ns
	  cloned.isStatic = vnode.isStatic
	  cloned.key = vnode.key
	  cloned.isCloned = true
	  return cloned
	}
	




jsx--------
	Vue提供了插件 babel-plugin-transform-vue-jsx 来支JSX 语法








使用JavaScript 代替模板功能
v-model
  render: function (createElement) {
  var self = this
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.value = event.target.value
        self.$emit('input', event.target.value)
      }
    }
  })
}



能够声明式的书写 html
能够在 javascript 中书写 html
能够小粒度的复用我们的这些 "html"
那么，通过 babel 转化的 jsx 就应运而生了，让人们拥有了使用 js 写 html 并且声明式又可以控制粒度的复用



 
