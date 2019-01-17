2019/1/6
prop
   	prop的大小写--
   	传递静态和动态prop--
   		传入一个数字
   		传入一个布尔值
   		传入一个数组
   		传入一个对象
   		传入一个对象的所有属性
   	单向数据流--
   	prop验证--
   		类型检查--
   	非prop特性--
   		替换/合并已有的特性
   		禁用特性继承
    例子
        驼峰变横杠
	    静态prop
	    动态prop
	    传递数字
	    验证prop
	    单向数据流
	    修改prop






环境 ：jsrun
参考：https://www.cnblogs.com/xiaohuochai/p/7388866.html#anchor6

模板嵌套
  <div id="app">
       <parent3></parent3>
   </div>
  <script src="https://cdn.bootcss.com/vue/2.4.4/vue.js"></script>
  
  /*
  var childnode0 = { 
    template:"<div>这里修改子模版内容 显示在页面上 child </div>",
  }
  var parentnode2 = {
    template:`
    <div class="parent">
      <child1></child1>
     
    </div>
    `,
    components:{ //注册子模版
     child1:childnode0  
    }
  };
  
  new Vue({
    el:"#app",
    components:{
    parent3:parentnode2
  }
  })
   
  
  显示效果：
    <div id="app">
      <div class="parent">
        <div>chi</div>
      </div>
    </div>




prop-----
  prop使用场景：父组件需要向子组件传递消息的时候，子组件就可以定义prop属性，来接受父组件传递消息
 
  props 中声明的数据与组件 data 函数 return 的数据
  主要区别就是 props 来自父级，
  而 data的是组件自己的数据，



添加组件 /*
   1. 引入 import XXX  from "./xxx"   
   2.在components 中注册组件
   3.显示 <XXX></XXX>



  prop的大小写
    HTML  是大小写不敏感的 所以浏览器会全部 解释为小写字符
    如果你使用字符串模板，那么这个限制就不存在了
    
  prop类型
  以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型
    props: {
      title: String,
      likes: Number,
      isPublished: Boolean,
      commentIds: Array,
      author: Object
    }




  传递静态和动态prop--

    给prop传入一个静态值
      <blog-post title="My journey with Vue"></blog-post>
    
    prop 可以通过 v-bind 动态赋值 
  
      <!-- 动态赋予一个变量的值 -->
      <blog-post v-bind:title="post.title"></blog-post>
      
      <!-- 动态赋予一个复杂表达式的值 -->
      <blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>



    传入一个数字
      <!-- 这是一个 JavaScript 表达式而不是一个字符串  数字和布尔都是表达式。-->
      <blog-post v-bind:likes="42"></blog-post>
      
      <!-- 用一个变量进行动态赋值。-->
      <blog-post v-bind:likes="post.likes"></blog-post>
    传入一个布尔值
      <blog-post v-bind:is-published="false"></blog-post>
      <blog-post v-bind:is-published="post.isPublished"></blog-post>

    传入一个数组
      <blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
      <blog-post v-bind:comment-ids="post.commentIds"></blog-post>
    传入一个对象
      <blog-post v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"></blog-post>
      <blog-post v-bind:author="post.author"></blog-post>
    传入一个对象的所有属性
      post: {id: 1, title: 'My Journey with Vue'}
      <blog-post v-bind="post"></blog-post>
      等价于
      <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
      ></blog-post>



  单向数据流--
    父级 prop 的更新会向下流动到子组件中，但是反过来则不行
    
    每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。

    这意味着你不应该在一个子组件内部改变 prop
  
  prop验证--
    Vue.component('my-component', {
      props: {
        // 基础的类型检查 (`null` 匹配任何类型)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
          type: String,
          required: true
        },
        // 带有默认值的数字
        propD: {
          type: Number,
          default: 100
        },
        // 带有默认值的对象
        propE: {
          type: Object,
          // 对象或数组默认值必须从一个工厂函数获取
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }
      }

    类型检查--

      function Person (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
      }
      你可以使用：
      
      Vue.component('blog-post', {
        props: {
          author: Person
        }
      })
      来验证 author prop 的值是否是通过 new Person 创建的。
  

  非prop特性--
    一个非 prop 特性是指传向一个组件，但是该组件并没有相应 prop 定义的特性。
    
    替换/合并已有的特性--
      从外部提供给组件的值会替换掉组件内部设置好的值  所以如果传入 type="text" 就会替换掉原本的 type="date"
      class 和 style 特性会稍微智能一些，即两边的值会被合并起来
    禁用特性继承--
      Vue.component('my-component', {
        inheritAttrs: false,
        // ...
      })
    
    在撰写基础组件的时候是常会用到的：
      
      Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        template: `
          <label>
            {{ label }}
            <input
              v-bind="$attrs"
              v-bind:value="value"
              v-on:input="$emit('input', $event.target.value)"
            >
          </label>
        `
      })




驼峰变横杠

  <div id="app">
    <my-component warning-text="提示信息"></my-component>
  </div>
     Vue.component("my-component", {
      props:['warningText'],
        template:' <div>{{warningText}}</div>',
         
     });
     var app = new Vue({
        el:"#app",
     })




不使用 v-bind ，传递的仅仅是字符串

  数字   计算1+value的值为25
  <blog-post v-bind:value="24"></blog-post>  
  字符串 计算1+value的值为124
  <blog-post value="24"></blog-post>
   
  
  布尔值  
  <blog-post v-bind:value="false"></blog-post>
  字符串  
  <blog-post value="false"></blog-post>

 
   例子:
   <div id="app">
        
       <my-component  message="1+1"></my-component>  //1+1
       <my-component  :message="1+1"></my-component> //2
   </div>
   
   Vue.component("my-component", {
        props:['message'],
        template:' <div>{{message}}</div>',
         
     });
     var app = new Vue({
        el:"#app",
        
     })





静态prop
下载 上传

  //子组件要显式地用 props 选项声明它接受的数据
  <div id="app">
    <shang></shang>
  </div>
  
  var xianode={
    template:"<div>{{message}}</div>",
    props:['message']
  }
  
  var shangnode ={
    template:`
    <div class="shang">
      <xia message="aaa"></xia>
      <xia message="bbb"></xia>
    </div>`,
    components:{
    xia:xianode
  }
  }
  new Vue({
    el:"#app",
    components:{
    shang:shangnode
  }
  })

  显示效果：
    <div id="app">
        <div class="shang">
            <div> aaa </div>
            <div> bbb </div>
        </div>
    </div>


动态prop
  <div id="app">
    <parent></parent>
  </div>

  var childNode = {
    template: '<div>{{myMessage}}</div>',
    props:['myMessage']
  }
  
  var parentNode = {
    template: `
    <div class="parent">
      <child v-bind:myMessage="data1"></child>
      <child v-bind:myMessage="data2"></child>
    </div>`,
    components: {
      'child': childNode
    },
    data(){
      return {
        'data1':'数据1',
        'data2':'数据2'
      }
    }
  };
  new Vue({
    el:"#app",
    components:{
    parent:parentNode
  }
  })



传递数字

  <div id="app">
    <shang></shang>
  </div>
  
  var xianode = {
    template:"<div>{{message}}的类型是{{type}}</div>",
    props:['message'],
    computed:{
      type(){
        return typeof this.message
         }
        }
      };
  var shangnode ={
    template:`
      <div class="shang">
        <xia v-bind:message="data"></xia>
      </div>`,
    components:{
      xia:xianode
    },
    data(){
      return {
        data:123
      }
    }
  };
    new Vue({
      el:"#app",
      components:{
       shang:shangnode
    }
  })
  
验证prop
参考官网 ：https://cn.vuejs.org/v2/guide/components-props.html
  <div id="app">
    <parent></parent>
  </div>
  
  var childnode = {
    template:"<div>{{message}}</div>",
    props:{
      message:Number
    }
  }
  var parentnode ={
    template:`
      <div class="parent">
        <child v-bind:message="msg"></child>
      </div>`,
  components:{
  child:childnode
  },
  data(){
    return {
      msg:123   //只要输入字符串及报错
    }
  }
  
  };
  
  new Vue({
    el:"#app",
    components:{
  parent:parentnode
  }
  )}
单向数据流
  <div id="example">
    <parent></parent>
  </div>
  var childNode = {
    template: `
    <div class="child">
      <div>
        <span>子组件数据</span>
        <input v-model="childMsg2">
      </div>
      <p>{{childMsg2}}</p>
    </div>
    `,
    props:['childMsg2']
  }
  var parentNode = {
    template: `
    <div class="parent">
      <div>
        <span>父组件数据</span>
        <input v-model="msg1">
      </div>
      <p>{{msg1}}</p>
      <child :childMsg2="msg1"></child>
    </div>
    `,
    components: {
      'child': childNode
    },
    data(){
      return {
        'msg1':'123'
      }
    }
  };
  // 创建根实例
  new Vue({
    el: '#example',
    components: {
      'parent': parentNode
    }
  })

修改prop

修改prop中的数据，通常有以下两种原因

　　1、prop 作为初始值传入后，子组件想把它当作局部数据来用

　　2、prop 作为初始值传入，由子组件处理成其它数据输出







