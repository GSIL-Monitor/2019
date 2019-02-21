import axios from 'axios'
// 优惠卷管理进入查询接口
export const couponList = (params) => {
  return axios.post('/servepc/sysCoupon/queryPage', params)
}
// 优惠券删除接口
export const delCounpon = (params) => {
  return axios.post('/servepc/sysCoupon/delete', params)
}
export const addCounpon = (params) => {
  return axios.post('/servepc/sysCoupon/add', params)
}
// 优惠卷管理编辑保存接口
export const editorCounpon = (params) => {
  return axios.post('/servepc/sysCoupon/update', params)
}
