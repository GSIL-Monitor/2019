<template>
  <div class="order container">
    <div class="orderTop">{{ $t("ORDER.T") }}</div>
    <!-- 筛选 -->
    <div class="search">
      <el-form :inline="true">
        <el-form-item>
          <el-input v-model="tempData.orderNumber">
            <template slot="prepend">{{ $t("ORDER.Num") }}</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="tempData.consignee">
            <template slot="prepend">{{ $t("ORDER.Consignee") }}</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="tempData.phone">
            <template slot="prepend">{{ $t("ORDER.Phone") }}</template>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('ORDER.Lab')">
          <el-select :value="$t('ORDER.Lab')" >
            <el-option class="order_select" label='全部店铺' value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('ORDER.Time')">
          <el-date-picker
            type="datetime"
            format="yyyy-MM-dd"
            :placeholder="$t('ORDER.Time1')"
            v-model="tempData.beginTime"
          ></el-date-picker>
          -
          <el-date-picker
            type="datetime"
            format="yyyy-MM-dd"
            :placeholder="$t('ORDER.Time2')"
            v-model="tempData.endTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="search">{{ $t("BTN.Check") }}</el-button>
        </el-form-item>
      </el-form>
      <div class="searchC">
        <button @click="outExe">{{ $t("ORDER.Load1") }}</button>
        <button @click="outAllExe">{{ $t("ORDER.Load2") }}</button>
        <router-link :to="{name:'Reminder'}" class="fr">{{ $t("Reminder.T") }}</router-link>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="orderList" v-loading="loading">
      <div class="listTitle">
        <span class="all">
          <el-checkbox v-model="checked" @change="changeCheck(checked)">{{ $t("ORDER.All") }}</el-checkbox>
        </span>
        <!-- 订单标题 -->
        <ul>
          <li>{{ $t("ORDER.LI1") }}</li>
          <li>{{ $t("ORDER.LI2") }}</li>
          <li>{{ $t("ORDER.LI3") }}</li>
          <li>{{ $t("ORDER.LI4") }}</li>
          <li>{{ $t("ORDER.LI5") }}</li>
          <li>
            <!-- 支付订单筛选 -->
            <el-select v-model="serData.status" @change="initData">
              <el-option v-for="item in statusList" class="order_select" :label='item.label' :key="item.value" :value="item.value"></el-option>
            </el-select>
          </li>
        </ul>
      </div>
      <!-- 列表 -->
      <div class="orderBottom">
        <ul>
          <li v-for="(item,index) in tableData" :key="item.order_number">
            <div class="number">
              <el-checkbox v-model="checkedList[index]" @change="changeCheck()">{{item.order_number}}</el-checkbox>
              <span>
                {{ $t("ORDER.Remark") }}
                <span class="mark">{{item.remark}}</span>
              </span>
              <div class="accept fr" v-if="item.status===1">
                <button @click="accpetOrder(item.order_number,2)">{{ $t("ORDER.YSE") }}</button>
                <button @click="accpetOrder(item.order_number,5)">{{ $t("ORDER.NO") }}</button>
              </div>
            </div>
            <div style="display: flex;padding: 0 17px;">
              <div >
                <div class="detailed" v-for="obj in item.bus_product_info">
                  <p class="img"><img :src="obj.picPath" alt=""></p>
                  <span class="size">
                  <span>{{obj.productName}}</span>
                  <span>x{{obj.num}}</span>
                </span>
                  <span class="onePrice">${{obj.productPrice}}</span>
                  <span class="num">{{obj.num}}</span>
                </div>
              </div>
              <div style="display: flex; align-items: center;">
                <div class="allPrice" style="width: 100px; margin-right: 15px" >${{item.product_totalprice}}</div>
                <div class="okPrice" style="width: 100px; margin-right: 15px" >${{item.total}}</div>
              </div>
              <div class="pay">
                <a href="javascript:;" class="unpaid">{{statusList[item.status].label}}</a>
                <router-link :to="{name:'Orderinformation',params:{orderNumber:item.order_number}}" class="orderDetail">订单详情</router-link>
              </div>
            </div>
            <div class="orderIfo">
              <span>{{item.bus_shop_name}}</span>
              {{ $t("ORDER.Ifo1") }}
              <span>{{item.create_time}}</span>
              {{ $t("ORDER.Ifo2") }}
              <span>{{item.consignee}}</span>
              {{ $t("ORDER.Ifo3") }}
              <span>{{item.total}}</span>
              {{ $t("ORDER.Ifo4") }}
              <span>{{item.phone}}</span>
            </div>
          </li>
        </ul>
        <div class="page">
          <el-pagination
            background
            :current-page="page.pageNo"
            :page-size="page.pageSize"
            layout="prev, pager, next"
            :total="page.pageNum"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { order } from '@/api/index.js'
export default {
  data () {
    return {
      loading: false,
      orderID: '', // 路由参数
      test: '',
      // 选中数列
      checkedList: [],
      // 店铺列表
      storeList: [],
      // 临时数据
      tempData: {},
      // 搜索数据
      serData: {},
      // 状态列表
      statusList: [
        {label: '未接单', value: 0},
        {label: '制作订单', value: 1},
        {label: '配送中订单', value: 2},
        {label: '已订单完成', value: 3},
        {label: '已取消订单', value: 4},
        {label: '已退单订单', value: 5},
        {label: '超时未接订单', value: 6},
        {label: '全部订单', value: null}
      ],
      // 查询
      searchForm: {
        // 收货人、商品名称、订单号、下单时间、手机号码
        consignee: '',
        name: '',
        orderID: '',
        orderTime: '',
        phone: ''
      },
      // 分页数据
      // 分页数据
      page: {
        pageNum: 10,
        pageNo: 1,
        pageSize: 5
      },
      // 订单选择
      value: '全部',
      // 店铺选择
      shopOptions: [],
      checked: '',
      // 导出订单
      tableData: []
    }
  },
  mounted () {
    // let busShopId = this.LS.get('shopId')
    // 获取路由参数
    // this.orderID = this.$route.params.orderID
    this.orderID = this.$route.query.orderStatus
    this.busShopId = this.LS.get('shopId')
    // console.log(this.orderID)
    this.initData()
  },
  watch: {
    '$route' (to, from) {
      this.serData.status = to.query.orderStatus
      this.initData()
      console.log(this.serData.status)
    }
  },
  methods: {
    // 选择订单
    changeCheck (option) {
      if (typeof option === 'boolean') {
        for (var i = 0; i < this.checkedList.length; i++) {
          this.checkedList[i] = option
        }
      } else {
        var falg = this.checkedList.every((item) => {
          return item !== true
        })
        if (falg) {
          this.checked = false
        } else {
          this.checked = true
        }
      }
    },
    // 接单与拒单
    accpetOrder (id, status) {
      order.accpet({
        orderNumber: id,
        status: status
      }).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.msg)
          this.initData()
        }
      })
    },
    outAllExe () {

    },
    // 翻页
    handleCurrentChange (value) {
      this.page.pageNo = value
      console.log('----->', value)
      this.initData()
    },
    // 初始化数据
    initData () {
      this.loading = true
      this.serData.busShopId = this.busShopId
      this.serData.pageNo = this.page.pageNo
      this.serData.pageSize = this.page.pageSize
      order.orderList(this.serData).then(res => {
        if (res.data.code === 0) {
          this.tableData = res.data.data.busOrderPage
          this.page.pageNum = res.data.data.num
          this.tableData.forEach((item, index) => {
            item.bus_product_info = eval(item.bus_product_info)
            this.checkedList[index] = false
          })
        }
        setTimeout(() => {
          this.loading = false
        }, 500)
      })
    },
    search () {
      new Date(this.tempData.beginTime)
      // this.serData = this.$common.deepCopy(this.tempData);
      this.serData = this.tempData
      this.initData()
    },
    // 导出订单数据生成excel表格
    outExe () {
      this.export2Excel()
    },
    export2Excel () {
      require.ensure([], () => {
        const { exportJsonToexcel } = require('@/vendor/Export2Excel') // 这里必须使用绝对路径
        const tHeader = ['日期', '姓名', '地址'] // 导出的表头名
        const filterVal = ['date', 'name', 'address'] // 导出的表头字段名
        const list = this.tableData // 你要导出的数据
        const data = this.formatJson(filterVal, list)
        exportJsonToexcel(tHeader, data, 'list') // 导出的表格名称，根据需要自己命名
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style lang="scss" scoped>
  .order {
    /*height: 1497px;*/
    padding-bottom: 30px;
    color: rgba(102, 102, 102, 1);
  .order_select {
    width: 120px;
  }
  .orderTop {
    height: 68px;
    line-height: 68px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 18px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  // 筛选
     .search {
       font-size: 14px;
       margin: 26px 0;
  span {
    margin-right: 14px;
  }
  input {
    width: 190px;
    height: 30px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 2px;
    text-indent: 1em;
    margin-right: 30px;
  }
  .searchBth {
    width: 120px;
    height: 32px;
    line-height: 32px;
    background: rgba(0, 177, 255, 1);
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  .searchB {
    margin-top: 24px;
    padding-right: 250px;
  }
  .searchC {
    margin-top: 24px;
  button {
    padding: 7px 15px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 4px;
    background-color: #fff;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
    margin-right: 20px;
  }
  a{
    background-color: #409EFF;
    display: inline-block;
    padding: 5px 20px;
    color: #fff;
    border-radius: 5px;
  }
  }
  }
  // 订单列表
     .orderList {
  // 标题
     .listTitle {
       height: 70px;
       line-height: 70px;
  // 全选
     .all {
       margin-left: 18px;
     }
  ul {
    float: right;
  li {
    float: left;
    margin-left: 61px;
    height: 70px;
    line-height: 70px;
    cursor: pointer;
  }
  li:last-child {
    height: 30px;
  }
  }
  }
  // 列表
     .orderBottom {
  li {
    position: relative;
  // height: 211px;
    border: 1px solid rgba(225, 225, 225, 1);
    margin-bottom: 17px;
  .pay {
    /*z-index: 99;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*transform: translateY(-50%);*/
    /*right: 100px;*/
    /*line-height: 30px;*/
    display: flex;
    flex-direction: column;
    /*text-align: center;*/
    flex-grow: 1;
    text-align: center;
    justify-content: center;
  // 待付款
     .unpaid {
       color: #ff4646;
     }
  // 清单详情
     .orderDetail {
       color: #00b1ff;
     }
  }
  .pay a {
    line-height: 1;
    margin-bottom: 16px;
  }
  .pay a:last-child {
    margin-bottom: 0;
  }
  .number {
    height: 52px;
    line-height: 52px;
    padding-left: 18px;
  span {
    color: #00b1ff;
    margin-left: 30px;
  .mark {
    color: rgb(119, 115, 115);
  }
  }
  .accept {
  > button {
    width: 80px;
    height: 36px;
    background: rgba(0, 177, 255, 1);
    border-radius: 4px;
    color: #fff;
    margin-right: 10px;
  }
  }
  }
  .detailed {
    position: relative;
    /*height: 109px;*/
    /*border-top: 1px solid rgba(225, 225, 225, 1);*/
    /*border-bottom: 1px solid rgba(225, 225, 225, 1);*/
    margin-bottom: 20px;
    display: flex;
    /*padding: 20px 17px;*/
    font-size: 14px;
    line-height: 69px;
    background-color: #f9f9f9;
  .img {
    width: 68px;
    height: 68px;
    margin-right: 30px;
  }
  .img img {
    width: 100%;
    height: 100%;
  }
  .size {
    width: 264px;
    margin-right: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .onePrice {
    width: 85px;
    margin-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .num {
    width: 215px;
    margin-right: 10px;
  }
  .allPrice {
    width: 110px;
    margin-right: 10px;
  }
  .okPrice {
    width: 100px;
    margin-right: 10px;
  }

  }
  .orderIfo {
    height: 48px;
    line-height: 48px;
    padding-left: 18px;
  span {
    margin-right: 10px;
  }
  }
  }
  .detailed:last-child {
    margin-bottom: 0;
  }
  .page {
    margin-top: 80px;
    text-align: center;
  }
  }
  }
  }
</style>
<style lang="scss">
  .order .el-input__inner {
    width: 190px;
  }

  .order .el-date-editor .el-range-separator {
    line-height: 22px;
  }
  .order .search .el-input {
    width: 190px;
  }
  .order .orderList .el-input__inner {
    width: 120px;
  }

  .order .orderList .el-input {
    width: 120px;
  }

  .order .orderList .el-input__suffix {
    height: 30px;
  }
</style>
