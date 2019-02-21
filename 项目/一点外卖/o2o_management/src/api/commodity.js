import axios from 'axios'
// 商品查询进入接口
export const commodityClass = (params) => {
  return axios.post('/merchant//busProductCategory/sysGetPage', params)
}
// 商品分类删除接口
export const delCommodity = (params) => {
  return axios.post('merchant//busProductCategory/delete', params)
}
// 商品分类管理审核接口
export const checkCommodity = (params) => {
  return axios.post('/merchant/busProductCategory/sysUpdate', params)
}
