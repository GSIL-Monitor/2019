// 店铺管理店铺开关接口
import axios from 'axios'
export const openSwitch = (params) => {
  return axios.post('/servepc/busShop/OffOn', params)
}
// 店铺信息开关
export const storeMessageOffAndOn = (params) => {
  return axios.post('/servepc/busShop/aKeyOffAndOn', params)
}
// 店铺类别条件查询接口
export const storeCategory = (params) => {
  return axios.post('/servepc/shopCategory/queryPage', params)
}
// 店铺分区下拉列表查询接口
export const storeZoom = (params) => {
  return axios.post('/servepc/shopArea/selectPageList', params)
}
// 店铺新增公告,搜索店铺时的下拉窗口
export const storeName = (params) => {
  return axios.post('/merchant/busShop/selectShopList', params)
}
// 店铺审核管理进入查询接口
export const storeAudit = (params) => axios.post('/merchant/busShop/selectBusShopPageStatus', params)
// 店铺审核管理通过接口
export const Audit = (params) => axios.post('/merchant/busShop/updateByStatus', params)
