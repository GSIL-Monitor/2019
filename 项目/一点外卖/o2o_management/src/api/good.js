import axios from 'axios'
//  商家商品查询
export const merchantmerchandise = params => {
  return axios.post('merchant/merchantmerchandise', params)
}

//  新增商品
export const addgoods = params => {
  return axios.post('merchant/addgoods', params)
}

//   商品修改
export const updateGoods = params => {
  return axios.post('merchant/busProduct/update', params)
}

//   商品分类管理所有查询
export const queryAllbusProductCate = params => {
  return axios.post('merchant/busProductCategory/getAll', params)
}
//   商品分类管理进入查询
export const querybusProductCategory = params => {
  return axios.post('merchant/busProductCategory/query', params)
}
//   商品单个类型查询接口
export const querygetProduct = params => {
  return axios.post('merchant/busProductCategory/getProduct', {id: params})
}
//    商家类型查询接口
export const shopCategoryGetList = () => {
  return axios.post('servepc/shopCategory/getList')
}

// 商品类别添加接口 merchant/busProductCategory/update
export const busProductCategory = params => {
  return axios.post('merchant/busProductCategory/add', params)
}

// 商品类别添加修改
export const busProductCategoryUpdate = params => {
  return axios.post('merchant/busProductCategory/update', params)
}

// 商品类别删除接口
export const delBusProductCategory = params => {
  return axios.post('merchant/busProductCategory/isDelete', params)
}

// 商品类型审核查询接口
export const busProductCateQuery = params => {
  return axios
    .post('merchant/busProductCategory/query', {
      status: params
    })
}
// 商品批量上传接口
export const productExAdd = params => {
  return axios
    .post('/merchant/busProduct/excelAdd', params)
}

// 商品一键上下架
export const onKeyCommodity = params => axios.post('/merchant/busProduct/updates', params).then(res => res.data)

// 商品类型审核查询接口
export const queryGoodCategory = params => {
  return axios
    .post('/merchant/busProductCategory/sysGetPage', params)
}
