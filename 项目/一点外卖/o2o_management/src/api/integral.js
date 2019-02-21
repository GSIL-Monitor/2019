import axios from 'axios'
// 领取记录分页查询接口
export const queryReceiveawards = (params) => {
  // return axios.post('http://192.168.31.193:2011/web/api/servepc/sysIntegralOrder/queryReceiveawards', params)
  return axios.post('servepc/sysIntegralOrder/queryReceiveawards', params)
}
// 领取记录详细查询接口
export const queryReceiveawardsDetailed = (params) => {
  return axios.post('servepc/sysIntegralOrder/queryReceiveawardsDetailed', params)
}
// 领取记录更新接口
export const updateReceiveawardInfo = (params) => {
  return axios.post('/servepc/sysIntegralOrder/updateReceiveawardInfo', params)
}
// 领取记录删除接口
export const deleteReceiveawardInfo = (params) => {
  return axios.post('/servepc/sysIntegralOrder/delete', {id: params})
}
// 分页查询积分实体商品接口
export const allEntityproduct = (params) => {
  return axios.post('/servepc/sysIntegralEntityproduct/queryPage', params)
}
// 分页查询积分虚拟商品表
export const allVirproduct = (params) => {
  return axios.post('/servepc/sysIntegralVirproduct/queryPage', params)
}
// 积分兑换的优惠卷下拉列表查询
export const queryVirConponList = (params) => {
  return axios.post('/servepc/sysCoupon/queryVirConpon', params)
}
// 添加积分实体接口
export const addEntityproduct = (params) => {
  return axios.post('/servepc/sysIntegralEntityproduct/add', params)
}
// 添加虚拟商品接口
export const addVirproduct = (params) => {
  return axios.post('/servepc/sysIntegralVirproduct/add', params)
}
// 编辑积分实体接口
export const updEntityproduct = (params) => {
  return axios.post('/servepc/sysIntegralEntityproduct/update', params)
}
// 编辑虚拟商品接口
export const updVirproduct = (params) => {
  return axios.post('/servepc/sysIntegralVirproduct/update', params)
}
// 删除积分实体接口
export const delEntityproduct = (params) => {
  return axios.post('/servepc/sysIntegralEntityproduct/updateStatus', {id: params})
}
// 删除积分虚拟商品接口
export const delVirproduct = (params) => {
  return axios.post('/servepc/sysIntegralVirproduct/delete', {id: params})
}
