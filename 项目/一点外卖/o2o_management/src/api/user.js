import axios from 'axios'
export const changePassword = (params) => {
  return axios.post('/servepc/sysUser/changePassword', params)
}
// 账号注销
export const exit = (params) => {
  return axios.post('/servepc/sysUser/logout', params)
}
