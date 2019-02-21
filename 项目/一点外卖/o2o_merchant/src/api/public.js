import axios from 'axios'
// 获取验证码
export const getCode = (params) => {
  return axios.post('common/getVerificationCode', params).then((res) => {
    return res.data
  })
}

// 上传图片
export const upload = params => {
  return axios.post('common/upload', params).then(res => {
    return res.data
  })
}

// 所有店铺分类
export const getShopCategory = (params) => {
  return axios.post('servepc/shopCategory/getList', params).then((res) => {
    return res.data
  })
}
// 所有店铺分区
export const getShopArea = (params) => {
  return axios.post('servepc/shopArea/getAreaTree', params).then(res => {
    return res.data
  })
}

//  商家商品添加接口
export const addbusProduct = params => {
  return axios.post('merchant/busProduct/add', params).then(res => {
    return res.data
  })
}

//  商家商品添加接口
export const updbusProduct = params => {
  return axios.post('merchant/busProduct/update', params).then(res => {
    return res.data
  })
}

//   单个商品查询接口
export const selectOneGoods = params => {
  return axios.post('merchant/busProduct/selectById', {productId: params}).then(res => {
    return res.data
  })
}

//   商品分页查询接口
export const selectGoods = params => {
  return axios.post('merchant/busProduct/query', params).then(res => {
    return res.data
  })
}
//     商品优惠设置新增功能
export const addBusProductDiscounts = params => {
  return axios.post('merchant/busProductDiscounts/add', params).then(res => {
    return res.data
  })
}
//    商品优惠设置更新
export const updBusProductDiscounts = params => {
  return axios.post('merchant/busProductDiscounts/update', params).then(res => {
    return res.data
  })
}
//    商品优惠查询接口
export const queryBusProductDiscounts = params => {
  return axios.post('merchant/busProductDiscounts/query', {busProductId: params}).then(res => {
    return res.data
  })
}
//     设置配送费用添加功能
export const addDeliveryFee = params => {
  return axios.post('merchant/busShopDeliveryFee/add', params).then(res => {
    return res.data
  })
}
//     设置配送费用查询接口
export const queryDeliveryFee = params => {
  return axios.post('merchant/busShopDeliveryFee/query', {busShopId: params}).then(res => {
    return res.data
  })
}
//     设置配送费用修改接口
export const updDeliveryFee = params => {
  return axios.post('merchant/busShopDeliveryFee/update', params).then(res => {
    return res.data
  })
}
