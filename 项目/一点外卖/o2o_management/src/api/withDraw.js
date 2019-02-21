import axios from 'axios'
// 提现管理配送员提现管理条件查询接口
export const deliverWithDraw = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/manageWithdrawal', params)
}

export const merchant = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/queryPage', params)
}
