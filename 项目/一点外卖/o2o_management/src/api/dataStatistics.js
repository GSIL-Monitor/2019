import axios from 'axios'
// 数据统计结算统计查询接口
export const dataStatics = (params) => axios.post('/servepc/sysOrder/selectCloseCount', params)
// 数据统计订单统计进入查询接口
export const orderStatics = (params) => axios.post('/servepc/sysOrder/selectOrderCount', params)
// 数据统计访问统计查询接口
export const visit = (params) => axios.post('/servepc/sysShopCount/queryPage', params)
// 数据统计顾客统计查询接口
export const custom = (params) => axios.post('/servepc/sysNewUser/queryPage', params)
// 数据统计商品统计查询接口
export const commodity = (params) => axios.post('/servepc/mctMoney/sryProductStatistics', params)
