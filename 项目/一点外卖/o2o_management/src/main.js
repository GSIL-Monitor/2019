// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 公共样式
import './static/css/common.css'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
import common from './commonFunction/common'
// Excel打印文件
import echarts from 'echarts'

// 设置title
// import VueWechatTitle from 'vue-wechat-title'
import LS from 'cz-storage'

// 多语言包
import i18n from './assets/locales'

Vue.prototype.$common = common
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.LS = LS
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (store.isLogin) {
    next()
  } else if (!store.getters.isLogin && !sessionStorage.getItem('userName') && to.path != '/' && to.path != '/login') {
    next('/login')
  } else if (!store.getters.isLogin && sessionStorage.getItem('userName')) {
    let user = sessionStorage.getItem('userName')
    // let sysTree = JSON.parse(sessionStorage.getItem('sysTree'))
    store.dispatch('setUser', user)
    // store.dispatch('setAut', sysTree)
    next()
  } else {
    next()
  }
})
const vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

export default vm
