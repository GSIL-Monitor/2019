import axios from 'axios'
export const allOrder = (params) => {
  return axios.post('/servepc/sysOrder/queryPage', params)
}
// 订单管理配送员下拉列表查询
export const deliveryman = (params) => {
  return axios.post('/courier/disUser/listPage', params)
}
// 订单管理查询店铺下拉列表信息
export const orderShop = (params) => {
  return axios.post('/merchant/busShop/selectShopList', params)
}
// 催单查询
export const reminder = (params) => axios.post('/servepc/sysOrder/getReminderStatusIsOne', params)
