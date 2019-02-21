import axios from 'axios'
// 菜单列表查询接口
export const menuctrlclass = (params) => {
  return axios.post('/servepc/sysMenu/queryPage', params)
}

// 菜单列表新增接口
export const menumsgadd = (params) => {
  return axios.post('/servepc/sysMenu/add', params)
}

// 菜单列表修改接口
export const menumsgedit = (params) => {
  return axios.post('/servepc/sysMenu/update', params)
}

// 菜单列表删除接口
export const menumsgdelete = (params) => {
  return axios.post('/servepc/sysMenu/delete', params)
}

// 菜单列表获取父级列表接口
export const menumsgparentlist = (params) => {
  return axios.post('/servepc/sysMenu/menuList', params)
}
