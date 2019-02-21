import axios from 'axios'
// 店铺订单查询接口/busOrder/busOrder/getShopOrder
export const orderList = (params) => axios.post('/merchant/busOrder/solrShopOrder', params)
// 获取每个商家的下属店铺
export const storeList = (params) => axios.post('/merchant/busShop/query', params)
// 接单与拒绝接单
export const accpet = (params) => axios.post('/merchant/busOrder/affirmOrder', params)
// 订单详情接口
export const detail = (params) => axios.post('merchant/busOrder/getOrderMessage', params)
export const getDisposeAll = (params) => axios.post('merchant/busOrder/getDisposeAll', params)
export const updateDisposeOrder = (params) => axios.post('merchant/busOrder/updateDisposeOrder', {orderNumber: params})
export const deleteReminder = (params) => axios.post('merchant/busOrder/deleteReminder', {orderNumber: params})
