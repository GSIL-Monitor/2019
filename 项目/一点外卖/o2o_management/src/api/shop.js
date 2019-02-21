import axios from 'axios'

// 下单方式
export const updBusShopWay = (params) => {
  return axios.post('/merchant/busShopWay/update', params)
}
// 店铺资质添加修改
export const addBusShopCredential = params => {
  return axios.post('/merchant/busShopCredential/add', params)
}

// 店铺资质查询
export const busShopCredential = id => {
  return axios.post('/merchant/busShopCredential/query', {
    busShopID: id
  })
}
// 店铺设置查询
export const busShopSetQuery = id => {
  return axios.post('/merchant/busShopSet/query', {
    busShopID: id
  })
}

// 店铺设置添加修改
export const busShopSetUpdate = params => {
  return axios.post('/merchant/busShopSet/update', params)
}

//   自定义费用表得分页查询
export const queryBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/queryPage', params)
}
//    单个自定义费用更新
export const updaBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/update', params)
}
//    查询店铺单个自定义费用表
export const queryOneBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/query', {id: params})
}

//  新增店铺自定义费用表
export const addBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/add', params)
}
//   自定义费用表删除
export const delBusDefinedCost = params => {
  return axios
    .post('merchant/busDefinedCost/delete', params)
}
//   店铺自定义优惠添加
export const addBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/add', params)
}
//    店铺自定义优惠修改
export const updBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/update', params)
}
//     店铺单个自定义优惠删除
export const delBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/delete', {id: params})
}
//    店铺单个自定义优惠的查询
export const queryOneBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/query', {id: params})
}
//     店铺自定义优惠的分页查询
export const queryBusDiscountsDefined = params => {
  return axios
    .post('merchant/busDiscountsDefined/queryPage', params)
}
//  店铺接单方式查询
export const queryNusOrderWay = params => {
  return axios
    .post('merchant/busOrderWay/query', {
      busShopId: params
    })
}
//   店铺接单方式修改
export const updNusOrderWay = params => {
  return axios
    .post('merchant/busOrderWay/update', params)
}

// 店铺优惠查询
export const shopDiscountsQuery = params => {
  return axios
    .post('merchant/shopDiscounts/query', {busShopId: params})
}

// 店铺优惠添加添加功能
export const addShopDiscounts = params => {
  return axios
    .post('merchant/shopDiscounts/add', params)
}
// 店铺优惠添加修改功能
export const updShopDiscounts = params => {
  return axios
    .post('merchant/shopDiscounts/update', params)
}
