import axios from 'axios'
export const delAdmin = (params) => {
  return axios.post('/servepc/sysUser/deleteSysUser', params)
}
// 获取角色信息聊表接口
export const roleList = (params) => {
  return axios.post('/servepc/sysRole/queryPage', params)
}
// 查询所有菜单列表接口
export const allList = (params) => {
  return axios.post('/servepc/sysMenu/list', params)
}
// 查询权限菜单列表接口
export const limitList = (params) => {
  return axios.post('/servepc/sysMenu/getTree', params)
}
// 新增角色接口
export const addRole = (params) => {
  return axios.post('/servepc/sysRole/addRole', params)
}
// 角色管理删除接口
export const delRole = (params) => {
  return axios.post('/servepc/sysRole/delete', params)
}
// 角色权限编辑接口
export const editorRole = (params) => {
  return axios.post('/servepc/sysRole/updateRoleMeun', params)
}
// 角色信息修改接口
export const editorRoleMessage = (params) => {
  return axios.post('/servepc/sysRole/update', params)
}
