import Vue from 'vue'
import Router from 'vue-router'
// 登录
import Login from '@/views/user/Login.vue'
// 注册
import Register from '@/views/user/Register.vue'
// 忘记密码
import Reset from '@/views/user/Reset.vue'
// 消息中心
import New from '@/views/user/New.vue'
// 帮助中心
import HelpCenter from '@/views/user/HelpCenter.vue'
// 主页
import Home from '@/views/Home.vue'
// 商家中心
import Merchants from '@/views/businessCenter/Merchants.vue'

// 商家信息
import Information from '@/views/shopInfor/Information.vue'
import AddShopInfo from '@/views/shopInfor/AddShopInfo.vue'
import Shopqualifications from '@/views/shopInfor/Shopqualifications.vue'
import Storediscounts from '@/views/shopInfor/Storediscounts.vue'
import Adduserdefinecost from '@/views/shopInfor/userdefinecost/Adduserdefinecost.vue'
import Userdefinecost from '@/views/shopInfor/userdefinecost/Userdefinecost.vue'
import Adduserdefinediscount from '@/views/shopInfor/Userdefinediscount/Adduserdefinediscount.vue'
import Userdefinediscount from '@/views/shopInfor/Userdefinediscount/Userdefinediscount.vue'
import Distributioncostset from '@/views/shopInfor/Distributioncostset.vue'
import Districtset from '@/views/shopInfor/Districtset.vue'
import Orderway from '@/views/shopInfor/Orderway.vue'
import Scheduledtimeset from '@/views/shopInfor/Scheduledtimeset.vue'
import Setupshop from '@/views/shopInfor/Setupshop/Setupshop.vue'
import SetTemplate from '@/views/shopInfor/Setupshop/SetTemplate.vue'

// 商品管理
import Goods from '@/views/goods/Goods.vue'

// 订单管理
import Order from '@/views/order/Order.vue'
import Orderinformation from '@/views/order/Orderinformation.vue'
import Reminder from '@/views/order/Reminder.vue'

// 财务管理
import Finance from '@/views/finance/Finance.vue'
import Drawmoney from '@/views/finance/Drawmoney.vue'
import Inancialsetting from '@/views/finance/Inancialsetting.vue'

// 商品管理
import AddGoods from '@/views/goods/Add.vue'
import UpdGood from '@/views/goods/UpdGood.vue'
import AddBatch from '@/views/goods/AddBatch.vue'
import AddCate from '@/views/goods/AddCate.vue'
import Discounts from '@/views/goods/Discounts.vue'
import Sorts from '../views/goods/Sorts.vue'
import Previewofgoods from '../views/goods/Previewofgoods.vue'

// 系统管理
import Privilege from '@/views/system/Privilege.vue'
import AddPrivilege from '@/views/system/AddPrivilege.vue'
import UpdPrivilege from '@/views/system/UpdPrivilege.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    // 登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // 注册
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    // 忘记密码
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/merchants',
    children: [{
      // 消息中心
      path: 'new',
      name: 'New',
      component: New
    }, {
      // 帮助中心
      path: 'helpCenter',
      name: 'HelpCenter',
      component: HelpCenter
    }, {
      // 商品中心
      path: 'merchants',
      name: 'Merchants',
      component: Merchants
    },
    {
      /* 商家信息   ************************************************/
      path: 'information',
      name: 'Information',
      component: Information
    },
    {
      // 商家信息-编辑商家信息
      path: 'addShopInfo',
      name: 'AddShopInfo',
      component: AddShopInfo
    },
    {
      // 商家信息-店铺资质
      path: 'shopqualifications',
      name: 'Shopqualifications',
      component: Shopqualifications
    },
    {
      // 商家信息-自定义费用
      path: 'userdefinecost',
      name: 'Userdefinecost',
      component: Userdefinecost
    },
    {
      // 商家信息-自定义费用-自定义费用编辑
      path: 'adduserdefinecost',
      name: 'Adduserdefinecost',
      component: Adduserdefinecost
    },
    {
      // 商家信息-自定义优惠券
      path: 'userdefinediscount',
      name: 'Userdefinediscount',
      component: Userdefinediscount
    },
    {
      // 商家信息-自定义优惠券-自定义优惠券编辑
      path: 'adduserdefinediscount',
      name: 'Adduserdefinediscount',
      component: Adduserdefinediscount
    },
    {
      // 商家信息-设置配送费用
      path: 'distributioncostset',
      name: 'Distributioncostset',
      component: Distributioncostset
    },
    {
      // 商家信息-设置配送区域
      path: 'districtset',
      name: 'Districtset',
      component: Districtset
    },
    {
      // 商家信息-接单方式
      path: 'orderway',
      name: 'Orderway',
      component: Orderway
    },
    {
      // 商家信息-预计时间设置
      path: 'scheduledtimeset',
      name: 'Scheduledtimeset',
      component: Scheduledtimeset
    },
    {
      // 商家信息-店铺设置
      path: 'setupshop',
      name: 'Setupshop',
      component: Setupshop
    },
    {
      // 商家信息-设置模板
      path: 'setTemplate',
      name: 'SetTemplate',
      component: SetTemplate
    },
    {
      // 商家信息-店铺打折
      path: 'storediscounts',
      name: 'Storediscounts',
      component: Storediscounts
    },
      /* 商品管理   ************************************************/
    {
      path: 'goods',
      name: 'Goods',
      component: Goods
    },
    {
      // 商品管理-商品添加
      path: 'addGoods',
      name: 'AddGoods',
      component: AddGoods
    },
    {
      // 商品管理-商品修改
      path: 'updGood',
      name: 'UpdGood',
      component: UpdGood
    },
    {
      // 商品管理-批量上传商品
      path: 'addBatchGoods',
      name: 'AddBatch',
      component: AddBatch
    },
    {
      // 商品管理-新增类别
      path: 'addCateGoods',
      name: 'AddCate',
      component: AddCate
    },
    {
      // 商品管理-商品优惠
      path: 'discountsGoods',
      name: 'Discounts',
      component: Discounts
    },
    {
      // 商品管理-商品类型
      path: 'sortsGoods',
      name: 'Sorts',
      component: Sorts,
      meta: {
        title: '商品类型'
      }
    },
    {
      // 商品管理-商品预览
      path: 'previewofgoods',
      name: 'Previewofgoods',
      component: Previewofgoods
    },
      /* 订单管理   ************************************************/
    {
      path: 'order',
      name: 'Order',
      props: (route) => ({ query: route.query.orderStatus }),
      component: Order
    },
    {
      path: 'orderinformation/:orderNumber',
      name: 'Orderinformation',
      component: Orderinformation
    },
    {
      path: 'reminder',
      name: 'Reminder',
      component: Reminder
    },
      /* 财务管理   ************************************************/
    {
      path: 'finance',
      name: 'Finance',
      component: Finance
    },
    {
      // 财务管理-提现记录
      path: 'drawmoney',
      name: 'Drawmoney',
      component: Drawmoney
    },
    {
      // 财务管理-财务设置
      path: 'inancialsetting',
      name: 'Inancialsetting',
      component: Inancialsetting
    },
      /* 系统设置   ************************************************/
    {
      path: 'privilege',
      name: 'Privilege',
      component: Privilege
    },
    {
      path: 'privilege/addPrivilege',
      name: 'AddPrivilege',
      component: AddPrivilege
    },
    {
      path: 'privilege/updPrivilege',
      name: 'UpdPrivilege',
      component: UpdPrivilege
    }
    ]
  }
  ],
  linkActiveClass: 'is-active'
})
