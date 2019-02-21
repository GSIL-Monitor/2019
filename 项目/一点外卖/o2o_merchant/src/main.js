// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 公共样式
import '@/static/css/common.css'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 重置element样式
import '@/static/css/resetElement.css'

// 引入全局变量
import global_ from '@/static/global/global.js'

import LS from 'cz-storage'

// 多语言包
import i18n from './assets/locales'
// 引入谷歌地图
import * as VueGoogleMaps from 'vue2-google-maps'
import common from './commonFunction/common'
// 引用文件
Vue.prototype.$common = common
Vue.prototype.GLOBAL = global_
Vue.prototype.LS = LS
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$deppCopy = function (obj) {
  var result = Array.isArray(obj) ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = $deepCopy(obj[key]) // 递归复制
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})

/* 添加全局导航卫士 */
router.beforeEach((to, from, next) => {
  let token = LS.get('mytoken')
  let shopId = LS.get('shopId')

  if (!token) {
    if (to.name === 'Login' || to.name === 'Register' || to.name === 'Reset') {
      next()
    } else {
      next()
    }
  } else {
    // 登陆以后如果用户没有添加店铺，则不能跳转到除添加店铺以外的路由
    if (!shopId) {
      if (to.name !== 'AddShopInfo') {
        next({
          name: 'AddShopInfo'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

// 谷歌地图
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC3BrsZT0HeIJHOIJRVeH7pFIS1TRdF4ZU',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
