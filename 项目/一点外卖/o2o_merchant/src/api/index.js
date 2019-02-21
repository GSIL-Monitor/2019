// import Vue from 'vue'
import axios from 'axios'
import * as orderControl from './order.js'
axios.defaults.baseURL = 'http://192.168.31.172:2011/web/api/'
// axios.defaults.baseURL = 'http://o2o.711fang.com/web/api/'
// axios.defaults.baseURL = 'http://192.168.31.108:2011/web/api/'
// Vue.prototype.axios = axios
axios.defaults.withCredentials = true
// 导出公共模块
/* *********************************账号管理 **************************************************/
// 退出登录
export const loginOut = () => {
  return axios.post('merchant/login/logout').then(res => {
    return res.data
  })
}

// 实现登录
export const login = params => {
  return axios.post('merchant/login/login', params).then(res => {
    return res.data
    // return res.headers
  })
}

// 实现注册
export const register = params => {
  return axios.post('merchant/register/add', params).then(res => {
    return res.data
  })
}

// 检测账号是否存在
export const getAccount = params => {
  return axios
    .post('merchant/register/getaccount', {
      account: params
    })
    .then(res => {
      return res.data
    })
}

// 修改密码提交
export const resetPassword = params => {
  return axios.post('merchant/reset/update', params).then(res => {
    return res.data
  })
}

// 手机验证是否正确
export const validatePhone = params => {
  return axios
    .post('merchant/register/phone', {
      phone: params
    })
    .then(res => {
      return res.data
    })
}
/* *********************************用户管理end **************************************************/

/* *********************************店铺相关 **************************************************/
//  店铺的开启与关闭
export const openMerchantShop = params => {
  return axios.post('merchant/busShop/updatebusiness', params).then(res => {
    return res.data
  })
}

// 店铺名称是否已经在
export const getShopNameNum = shopName => {
  return axios.post('merchant/busShop/getShopNameNum', {shopName: shopName}).then(res => {
    return res.data
  })
}

// 店铺资质添加修改
export const addBusShopCredential = params => {
  return axios.post('merchant/busShopCredential/add', params).then(res => {
    return res.data
  })
}

// 店铺资质查询
export const busShopCredential = id => {
  return axios
    .post('merchant/busShopCredential/query', {
      busShopID: id
    })
    .then(res => {
      return res.data
    })
}

// 店铺详细信息查询
export const busShopQuery = id => {
  return axios
    .post('merchant/busShop/query', {
      busUserId: id
    })
    .then(res => {
      return res.data
    })
}

// 店铺设置查询功能
export const busShopSetQuery = params => {
  return axios
    .post('merchant/busShopSet/query', {
      busShopId: params
    })
    .then(res => {
      return res.data
    })
}
// 店铺设置添加修改功能
export const busShopSetUpdate = params => {
  return axios
    .post('merchant/busShopSet/update', params)
    .then(res => {
      return res.data
    })
}

// 店铺优惠查询
export const shopDiscountsQuery = params => {
  return axios
    .post('merchant/shopDiscounts/query', {busShopId: params})
    .then(res => {
      return res.data
    })
}

// 店铺优惠添加添加功能
export const addShopDiscounts = params => {
  return axios
    .post('merchant/shopDiscounts/add', params)
    .then(res => {
      return res.data
    })
}
// 店铺优惠添加修改功能
export const updShopDiscounts = params => {
  return axios
    .post('merchant/shopDiscounts/update', params)
    .then(res => {
      return res.data
    })
}

//   自定义费用表得分页查询
export const queryBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/queryPage', params)
    .then(res => {
      return res.data
    })
}
//    单个自定义费用更新
export const updaBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/update', params)
    .then(res => {
      return res.data
    })
}
//    查询店铺单个自定义费用表
export const queryOneBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/query', {id: params})
    .then(res => {
      return res.data
    })
}

//  新增店铺自定义费用表
export const addBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/add', params)
    .then(res => {
      return res.data
    })
}
//   自定义费用表删除
export const delBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/delete', params)
    .then(res => {
      return res.data
    })
}
//   店铺自定义优惠添加
export const addBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/add', params)
    .then(res => {
      return res.data
    })
}
//    店铺自定义优惠修改
export const updBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/update', params)
    .then(res => {
      return res.data
    })
}
//     店铺单个自定义优惠删除
export const delBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/delete', {id: params})
    .then(res => {
      return res.data
    })
}
//    店铺单个自定义优惠的查询
export const queryOneBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/query', {id: params})
    .then(res => {
      return res.data
    })
}
//     店铺自定义优惠的分页查询
export const queryBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/queryPage', params)
    .then(res => {
      return res.data
    })
}

//  店铺打折
export const shopdiscount = params => {
  return axios
    .post('merchant/shopdiscount', {discountNumber: params})
    .then(res => {
      return res.data
    })
}

/* *********************************商家信息 **************************************************/
// 商家信息查询
export const infoDatas = params => {
  return axios
    .post('merchant/busShop/select', {
      connectId: params
    })
    .then(res => {
      return res.data
    })
}
// 商家信息添加
export const addBusShop = params => {
  return axios.post('merchant/busShop/add', params).then(res => {
    return res.data
  })
}
//  商家中心统计接口
// busOrder/busOrder/getOrder
export const merchantTotal = params => {
  return axios.post('merchant/busOrder/getOrder', {busShopId: params}).then(res => {
    return res.data
  })
}

//  店铺接单方式查询
export const queryNusOrderWay = params => {
  return axios
    .post('merchant/busOrderWay/query', {
      busShopId: params
    })
    .then(res => {
      return res.data
    })
}
//   店铺接单方式修改
export const updNusOrderWay = params => {
  return axios
    .post('merchant/busOrderWay/update', params)
    .then(res => {
      return res.data
    })
}

//  店铺配送预计时间查询
export const queryBusTime = params => {
  return axios
    .post('merchant/busTime/query', {busShopId: params})
    .then(res => {
      return res.data
    })
}
//   店铺配送预计时间修改
export const updBusTime = params => {
  return axios
    .post('merchant/busTime/update', params)
    .then(res => {
      return res.data
    })
}

/* *********************************商品管理 **************************************************/
//  商家商品查询
export const merchantmerchandise = params => {
  return axios.post('merchant/merchantmerchandise', params).then(res => {
    return res.data
  })
}

//  新增商品
export const addgoods = params => {
  return axios.post('merchant/addgoods', params).then(res => {
    return res.data
  })
}

//   商品修改
export const updateGoods = params => {
  return axios.post('merchant/busProduct/update', params).then(res => {
    return res.data
  })
}

//   商品分类管理所有查询
export const queryAllbusProductCate = params => {
  return axios.post('merchant/busProductCategory/getAll', params).then(res => {
    return res.data
  })
}
//   商品分类管理进入查询
export const querybusProductCategory = params => {
  return axios.post('merchant/busProductCategory/query', params).then(res => {
    return res.data
  })
}
//   商品单个类型查询接口
export const querygetProduct = params => {
  return axios.post('merchant/busProductCategory/getProduct', {id: params}).then(res => {
    return res.data
  })
}
//    商家类型查询接口
export const shopCategoryGetList = () => {
  return axios.post('servepc/shopCategory/getList').then(res => {
    return res.data
  })
}

// 商品类别添加接口
export const busProductCategory = params => {
  return axios.post('merchant/busProductCategory/add', params).then(res => {
    return res.data
  })
}
// 商品类别删除接口
export const delBusProductCategory = params => {
  return axios.post('merchant/busProductCategory/isDelete', params).then(res => {
    return res.data
  })
}

// 商品类型审核查询接口
export const busProductCateQuery = params => {
  return axios
    .post('merchant/busProductCategory/query', {
      status: params
    })
    .then(res => {
      return res.data
    })
}
// 商品批量上传接口
export const productExAdd = params => {
  return axios
    .post('/merchant/busProduct/excelAdd', params)
    .then(res => {
      return res.data
    })
}

// 商品一键上下架
export const onKeyCommodity = params => axios.post('/merchant/busProduct/updates', params).then(res => res.data)

// 商品类型审核查询接口
export const queryGoodCategory = params => {
  return axios
    .post('/merchant/busProductCategory/sysGetPage', params)
    .then(res => {
      return res.data
    })
}

/* *********************************财务管理 **************************************************/
// 订单结算明细记录busOrder/busOrder/queryPage
export const busOrderQuery = params => {
  return axios.post('merchant/busOrder/queryPage', params).then(res => {
    return res.data
  })
}

// 查询可提现金额,已提现金额
export const busOrderTotal = params => {
  return axios.post('merchant/busMoney/acquire', {
    busShopId: params
  }).then(res => {
    return res.data
  })
}
// 查询未结算总金额
export const OrderTotalQuery = params => {
  return axios.post('merchant/busOrder/query', {
    busShopId: params
  }).then(res => {
    return res.data
  })
}

// 查询申请提现记录
export const drawmoneyList = params => {
  return axios.post('merchant/busMoney/query', params).then(res => {
    return res.data
  })
}
//  申请提现
export const addBusMoney = params => {
  return axios.post('merchant/busMoney/add', params).then(res => {
    return res.data
  })
}

// 财务设置
export const setCurrency = params => {
  return axios.post('merchant/busTrade/add', params).then(res => {
    return res.data
  })
}
// 财务设置查询
export const queryCurrency = params => {
  return axios.post('merchant/busTrade/query', {busUserId: params}).then(res => {
    return res.data
  })
}

/* ********************************* 订单接口 **************************************************/
// 店铺订单查询接口
export const queryOrder = params => {
  return axios.post('busOrder/busOrder/getShopOrder', {busShopId: params}).then(res => {
    return res.data
  })
}
// 商家订单催单消息
export const getReminderList = params => {
  return axios.post('merchant/busOrder/getDispose', params).then(res => {
    return res.data
  })
}
// 商家订单催单消息处理
export const updateDisposeOrder = params => {
  return axios.post('merchant/busOrder/updateDisposeOrder', {orderNumber: params}).then(res => {
    return res.data
  })
}

/* *********************************配送 **************************************************/
// 配送员管理查询接口
export const queryBusCourier = params => {
  return axios.post('merchant/busCourier/query', {busShopId: params}).then(res => {
    return res.data
  })
}
// 配送员管理增加接口
export const addBusCourier = params => {
  return axios.post('merchant/busCourier/add', params).then(res => {
    return res.data
  })
}
// 配送员管理编辑接口
export const updateCourier = params => {
  return axios.post('merchant/busCourier/updateCourier', params).then(res => {
    return res.data
  })
}
// 配送员管理删除接口
export const delCourier = params => {
  return axios.post('merchant/busCourier/delete', params).then(res => {
    return res.data
  })
}
// 配送员管理更新状态接口
export const busCourierUpdateStatus = params => {
  return axios.post('merchant/busCourier/updateStatus', params).then(res => {
    return res.data
  })
}
// 导出订单模块
export const order = orderControl

// 配送区域设置查询接口
export const queryShopDispatchArea = params => {
  return axios.post('merchant/shopDispatchArea/query', {shopId: params}).then(res => {
    return res.data
  })
}
// 配送区域设置添加接口
export const addShopDispatchArea = params => {
  return axios.post('merchant/shopDispatchArea/add', params).then(res => {
    return res.data
  })
}
// 配送区域设置添加、修改接口
export const updateShopDispatchArea = params => {
  return axios.post('merchant/busShopArea/update', params).then(res => {
    return res.data
  })
}
// 配送区域设置添加、修改接口
export const ShopDispatchquery = params => {
  return axios.post('merchant/busShopArea/queryBy', params).then(res => {
    return res.data
  })
}

// 配送区域设置修改接口
export const updShopDispatchArea = params => {
  return axios.post('merchant/shopDispatchArea/update', params).then(res => {
    return res.data
  })
}
// 是否营业中
export const busShopBusiness = params => {
  return axios.post('merchant/busShop/business', {busUserId: params}).then(res => {
    return res.data
  })
}
