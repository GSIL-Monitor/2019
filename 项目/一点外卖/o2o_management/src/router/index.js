import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/views/user/Login.vue')
const gober = () => import('@/views/user/gober.vue')
const Manage = () => import('@/views/gover/Manage.vue')
const custom = () => import('@/views/custom/custom.vue')
const storeMessage = () => import('@/views/store/storeMessage.vue')
const addShopInfo = () => import('@/views/store/addShopInfo.vue')

const storeAudit = () => import('@/views/store/storeAudit.vue')
const storeCategory = () => import('@/views/store/storeCategory.vue')
const productInfo = () => import('@/views/product/productInfo.vue')
const storePartition = () => import('@/views/store/storePartition.vue')
const roleMessage = () => import('@/views/gover/roleMessage.vue')
const storeNotice = () => import('@/views/store/storeNotice.vue')
const commodityClass = () => import('@/views/commodity/commodityClass.vue')
const allOrder = () => import('@/views/order/allOrder.vue')
const coupon = () => import('@/views/discount/coupon.vue')
const drawManage = () => import('@/views/draw_money/drawManage')
const statistics = () => import('@/views/dataManage/statistics')
const oderStatics = () => import('@/views/dataManage/oderStatics')
const visitStatistic = () => import('@/views/dataManage/visitStatistic')
const customStatistic = () => import('@/views/dataManage/customStatistic')
const merchant = () => import('@/views/draw_money/merchant')
const commodityCount = () => import('@/views/dataManage/commodityCount')
const reminder = () => import('@/views/order/reminder.vue')
const journal = () => import('@/views/system/journal')
const productSalesReport = () => import('@/views/dataManage/productSalesReport')
const selectOrderCusUserCount = () => import('@/views/dataManage/selectOrderCusUserCount')
const selectOrderPayCount = () => import('@/views/dataManage/selectOrderPayCount')
const selectOrderDataCount = () => import('@/views/dataManage/selectOrderDataCount')
const addBatch = () => import('@/views/dataManage/addBatch')
const bankcardInfo = () => import('@/views/capital/bankcardInfo')
const product = () => import('@/views/commodity/product')
const capital = () => import('@/views/capital/capital')
const courier = () => import('@/views/courier/courier')
const courierStatistics = () => import('@/views/courier/courierStatistics')
const setShop = () => import('@/views/shop/setShop')
const Shopqualifications = () => import('@/views/shop/Shopqualifications')
const Userdefinediscount = () => import('@/views/shop/Userdefinediscount/Userdefinediscount')
const Adduserdefinediscount = () => import('@/views/shop/Userdefinediscount/Adduserdefinediscount')
const Adduserdefinecost = () => import('@/views/shop/userdefinecost/Adduserdefinecost')
const Userdefinecost = () => import('@/views/shop/userdefinecost/Userdefinecost')
const Orderway = () => import('@/views/shop/Orderway')
const Storediscounts = () => import('@/views/shop/Storediscounts')
const Integral = () => import('@/views/integral/Integral')
const AddCoupon = () => import('@/views/integral/AddCoupon')
const AddGoods = () => import('@/views/integral/AddGoods')
const Coupon = () => import('@/views/integral/Coupon')
const ReceiveDetail = () => import('@/views/integral/ReceiveDetail')
const ReceiveList = () => import('@/views/integral/ReceiveList')
const EditReceiveDetail = () => import('@/views/integral/EditReceiveDetail')
const Sorts = () => import('@/views/product/Sorts')
const AddCate = () => import('@/views/product/AddCate')
const AddBatch = () => import('@/views/product/AddBatch')
// const UpdGood = () => import('@/views/product/UpdGood')
const menuctrl = () => import('@/views/menu/menuCtrl')
const menuAdd = () => import('@/views/menu/menuAdd')
const productEdit = () => import('@/views/commodity/productEdit')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/gober',
      component: gober,
      children: [
        {
          path: 'manage',
          component: Manage
        },
        {
          path: 'custom',
          component: custom
        },
        {
          path: 'storeMessage',
          component: storeMessage
        },
        {
          path: 'addShopInfo',
          component: addShopInfo
        },
        {
          path: 'storeAudit',
          component: storeAudit
        },
        {
          path: 'storeCategory',
          component: storeCategory
        },
        {
          path: 'productInfo',
          component: productInfo
        },
        {
          path: 'storePartition',
          component: storePartition
        },
        {
          path: 'storeNotice',
          component: storeNotice
        },
        {
          path: 'roleMessage',
          component: roleMessage
        },
        {
          path: 'commodityClass',
          component: commodityClass
        },
        {
          path: 'allOrder',
          component: allOrder
        },
        {
          path: 'coupon',
          component: coupon
        },
        {
          path: 'drawManage',
          component: drawManage
        },
        {
          path: 'statistics',
          component: statistics,
          name: 'statisticsAll'
        },
        {
          path: 'oderStatics',
          component: oderStatics
        },
        {
          path: 'visitStatistic',
          component: visitStatistic
        },
        {
          path: 'customStatistic',
          component: customStatistic
        },
        {
          path: 'merchant',
          component: merchant
        },
        {
          path: 'commodityCount',
          component: commodityCount
        },
        {
          path: 'reminder',
          component: reminder,
          name: 'Reminder'
        },
        {
          path: 'journal',
          component: journal
        },
        {
          path: 'productSalesReport',
          component: productSalesReport
        },
        {
          path: 'selectOrderCusUserCount',
          component: selectOrderCusUserCount
        },
        {
          path: 'selectOrderPayCount',
          component: selectOrderPayCount
        },
        {
          path: 'selectOrderDataCount',
          component: selectOrderDataCount
        },
        {
          path: 'addBatch',
          component: addBatch
        },
        {
          path: 'bankcardInfo',
          component: bankcardInfo
        },
        {
          path: 'product',
          name: 'product',
          component: product
        },
        {
          path: 'capital',
          component: capital
        },
        {
          path: 'courier',
          component: courier
        },
        {
          path: 'menuctrl',
          name: 'menuctrl',
          component: menuctrl
        },
        {
          path: 'courierStatistics',
          component: courierStatistics
        },
        {
          // 店铺设置
          path: 'setShop',
          name: 'SetShop',
          component: setShop
        },
        {
          path: 'menuAdd',
          name: 'menuAdd',
          component: menuAdd
        },
        {
          // 店铺资质
          path: 'shopqualifications',
          name: 'Shopqualifications',
          component: Shopqualifications
        },
        {
          path: 'adduserdefinecost',
          name: 'Adduserdefinecost',
          component: Adduserdefinecost
        },
        {
          path: 'userdefinecost',
          name: 'Userdefinecost',
          component: Userdefinecost
        },
        {
          path: 'adduserdefinediscount',
          name: 'Adduserdefinediscount',
          component: Adduserdefinediscount
        },
        {
          path: 'userdefinediscount',
          name: 'Userdefinediscount',
          component: Userdefinediscount
        },
        {
          path: 'orderway',
          name: 'Orderway',
          component: Orderway
        },
        {
          path: 'storediscounts',
          name: 'Storediscounts',
          component: Storediscounts
        },
        {
          path: 'integral',
          name: 'Integral',
          component: Integral
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon
        },
        {
          path: 'addGoods',
          name: 'AddGoods',
          component: AddGoods
        },
        {
          path: 'addCoupon',
          name: 'AddCoupon',
          component: AddCoupon
        },
        {
          path: 'receiveList',
          name: 'ReceiveList',
          component: ReceiveList
        },
        {
          path: 'receiveDetail',
          name: 'ReceiveDetail',
          component: ReceiveDetail
        },
        {
          path: 'editReceiveDetail',
          name: 'EditReceiveDetail',
          component: EditReceiveDetail
        },
        // {
        //   // 商品管理-商品添加
        //   path: 'addGoods',
        //   name: 'AddGoods',
        //   component: AddGoods
        // },
        // {
        //   // 商品管理-商品修改
        //   path: 'updGood',
        //   name: 'UpdGood',
        //   component: UpdGood
        // },
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
          // 商品管理-商品类型
          path: 'sortsGoods',
          name: 'Sorts',
          component: Sorts
        },
        {
          path: 'productEdit',
          name: 'productEdit',
          component: productEdit
        }
      ]
    }
  ]
})
