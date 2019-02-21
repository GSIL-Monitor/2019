import axios from 'axios'
import * as adminControl from './admin'
import * as commodityControl from './commodity'
import * as storeControl from './store'
import * as orderControl from './order'
import * as discountControl from './discount'
import * as userControl from './user'
import * as withDrawControl from './withDraw'
import * as statisticsControl from './dataStatistics'
import * as shopIfo from './shop'
import * as goodIntegral from './integral'
import * as goods from './good'
import * as menuControl from './menuctrl'
import vm from '@/main.js'
// axios.defaults.baseURL = 'http://192.168.31.52:2011/web/api'
// axios.defaults.baseURL = 'http://o2o.711fang.com/web/api'
// axios.defaults.baseURL = 'http://192.168.31.108:2011/web/api'
axios.defaults.baseURL = 'http://192.168.31.172:2011/web/api/'
// axios.defaults.baseURL = 'http://o2o.711fang.com/web/api/'
axios.defaults.timeout = 6000
axios.defaults.withCredentials = true
let ignore = [axios.defaults.baseURL + '/servepc/shopCategory/queryPage',
  axios.defaults.baseURL + '/servepc/shopArea/selectPageList'
]
/* axios.interceptors.request.use(function (config) {
  if (config.method === 'post' && config.data['language'] === undefined) {
    var lan = localStorage.getItem('lanNum') ? String(localStorage.getItem('lanNum')) : String(1)
    config.data['language'] = lan
  }
  console.log(config)

  return config
}, function (error) {
  return Promise.reject(error)
}) */
axios.interceptors.response.use((response) => {
  console.log(response)
  let url = response.config.url
  if (response.data.code === 0) {
    vm.$message.closeAll()
    if (ignore.every((item) => {
      return item !== url
    })) {
      vm.$message.success({
        type: 'success',
        message: response.data.msg,
        duration: 1000
      })
    }
    return Promise.resolve(response.data.data)
  } else {
    vm.$message.closeAll()
    vm.$message({
      type: 'error',
      message: response.data.msg,
      duration: 1000
    })
    return Promise.reject('')
  }
}, (error) => {
  console.log('>>>>>>', error)
  return Promise.resolve(error)
})

/* 登录 */
// 192.168.31.172192.168.31.172
// 侧边菜单
export const MenuList = (params) => {
  return axios.post('/servepc/sysMenu/getSysMenuTree', params)
}

// 管理员列表
export const administratorList = (params) => {
  return axios.post('/servepc/sysUser/queryPage', params)
}

// 登录
export const confirmAccount = (params) => {
  return axios.post('/servepc/sysUser/login', params)
}
// 添加管理员
export const addAdministrator = (params) => {
  return axios.post('/servepc/sysUser/add', params)
}
// 获取角色信息 后台语文不好是他取的名字
export const getCharacterMessage = (params) => {
  return axios.post('/servepc/sysRole/queryPage', params)
}

// 冻结管理员
export const FrozenAdmin = (params) => {
  return axios.post('/servepc/sysUser/updatestate', params)
}

// 商品信息列表
export const productInfoList = (params) => {
  return axios.post('/servepc/busProduct/queryPage', params)
}

// 店铺类别列表
export const storeCategoryList = (params) => {
  return axios.post('/servepc/shopCategory/queryPage', params)
}

// 店铺类别添加
export const storeCategorAdd = (params) => {
  return axios.post('/servepc/shopCategory/add', params)
}

// 店铺类别添加
export const storeCategorDel = (params) => {
  return axios.post('/servepc/shopCategory/delete', params)
}

// 店铺类别搜索
export const storeCategorSearch = (params) => {
  return axios.post('/servepc/shopCategory/queryPage', params)
}

// 店铺类别修改
export const storeCategorUpdate = (params) => {
  return axios.post('/servepc/shopCategory/update', params)
}

// 店铺分区树形结构列表
export const storePartitionList = (params) => {
  return axios.post('/servepc/shopArea/getAreaTree', params)
}

// 店铺分区表格列表
export const storePartitionTabList = (params) => {
  return axios.post('/servepc/shopArea/queryPage', params)
}

export const admin = adminControl

// 店铺分区添加
export const storePartitionAdd = (params) => {
  return axios.post('/servepc/shopArea/add', params)
}

// 店铺分区删除
export const storePartitionDel = (params) => {
  return axios.post('/servepc/shopArea/delete', params)
}

// 店铺分区搜索
export const storePartitionSearch = (params) => {
  return axios.post('/servepc/shopArea/queryPage', params)
}

// 店铺分区修改
export const storePartitionUpdate = (params) => {
  return axios.post('/servepc/shopArea/update', params)
}

// 验证码获取
export const getCode = (params) => {
  return axios.post('/web/api/common/getVerificationCode', params)
}

// 店铺信息列表
export const storeMessageList = (params) => {
  return axios.post('/servepc/busShop/queryPage', params)
}

// 店铺信息搜索
export const storeMessageSearch = (params) => {
  return axios.post('/servepc/busShop/queryPage', params)
}

// 店铺公告列表
export const storeNoticeList = (params) => {
  return axios.post('/servepc/shopNotice/queryPage', params)
}

// 店铺删除
export const busShopDelectShop = (params) => {
  return axios.post('/servepc/busShop/delectShop', params)
}

// 店铺公告添加
export const storeNoticeAdd = (params) => {
  return axios.post('/servepc/shopNotice/add', params)
}

// 店铺公告删除
export const storeNoticDel = (params) => {
  return axios.post('/servepc/shopNotice/delete', params)
}

// 店铺公告修改
export const storeNoticUpdate = (params) => {
  return axios.post('/servepc/shopNotice/update', params)
}

// 店铺公告修改
export const storeNoticSearch = (params) => {
  return axios.post('/servepc/shopNotice/queryPageLimit', params)
}
// 图片上传
export const upImg = (params) => {
  return axios.post('/common/upload', params)
}
// 操作日志
export const sysLog = (params) => {
  return axios.post('/servepc/sysLog/queryPage', params)
}
// 商品销售报表
export const productSalesReport = (params) => {
  return axios.post('/servepc/mctMoney/productSalesReport', params)
}
// 数据统计子账号统计查询
export const selectOrderCusUserCount = (params) => {
  return axios.post('/servepc/sysOrder/selectOrderCusUserCount', params)
}
// 数据统计支付统计查询
export const selectOrderPayCount = (params) => {
  return axios.post('/servepc/sysOrder/selectOrderPayCount', params)
}
// 数据统计目录进入查询
export const selectOrderDataCount = (params) => {
  return axios.post('/servepc/sysOrder/selectOrderDataCount', params)
}
// 批量上传店铺
export const excelBusShop = (params) => {
  return axios.post('/merchant/busShop/excelAdd', params)
}
// 结算账户查询接口
export const bankcardInfo = (params) => {
  return axios.post('/servepc/bankcardInfo/queryPage', params)
}
// 商品分页
export const product = (params) => {
  return axios.post('/merchant/busProduct/querySys', params)
}
// 商品删除
export const productDel = (params) => {
  return axios.post('/merchant/busProduct/querySys', params)
}
// 结算账户审核接口
export const bankcardInfoUpdate = (params) => {
  return axios.post('/servepc/bankcardInfo/update', params)
}
// 资金管理账单查询接口
export const sysCapitalQueryPage = (params) => {
  return axios.post('/servepc/sysCapital/queryPage', params)
}
// 资金管理账单修改接口
export const sysCapitalUpdate = (params) => {
  return axios.post('/servepc/sysCapital/update', params)
}
// 资金管理添加账单
export const sysCapitalAdd = (params) => {
  return axios.post('/servepc/sysCapital/add', params)
}
// 后台配送员管理查询配送员
export const courierManagerLikePage = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/courierManagerLikePage', params)
}
// 审核配送员
export const managerUpdateIsAudit = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/managerUpdateIsAudit', params)
}
// 冻结配送员
export const managerUpdateIsDisable = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/managerUpdateIsDisable', params)
}
// 删除配送员
export const managerUpdateIsDelete = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/managerUpdateIsDelete', params)
}
// 配送员添加
export const managerAdd = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/managerAdd', params)
}
// 配送员修改
export const mUpdate = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/mUpdate', params)
}
// 配送员统计查询
export const managerCourierStatistical = (params) => {
  return axios.post('/servepc/disWithdrawalDetail/managerCourierStatistical', params)
}
// 配送员统计查询
export const managerClShopName = (params) => {
  return axios.post('/servepc/busShop/managerClShopName', params)
}
// 配送员统计查询
export const getAreaTree = (params) => {
  return axios.post('/servepc/shopArea/getAreaTree', params)
}
// 批量更新状态 （上下架）
export const onKeyCommodity = (params) => {
  return axios.post('/merchant/busProduct/updates', params)
}

// 批量更新状态 （上下架）
export const busProductEdit = (params) => {
  return axios.post('/merchant/busProduct/updates', params)
}

// 获取语言类型
export const getLanguageList = (params) => {
  return axios.post('/servepc/sysDict/getList', params)
}

// 商品模块
export const commodity = commodityControl
// 商店模块
export const store = storeControl
// 订单模块
export const order = orderControl
// 优惠券模块
export const discount = discountControl
// 用户模块
export const user = userControl
// 提现模块
export const withDraw = withDrawControl
// 数据模块
export const statistics = statisticsControl
// 商家模块
export const shop = shopIfo
// 积分模块
export const integral = goodIntegral
// 商品相关
export const good = goods
// 菜单模块
export const menus = menuControl
