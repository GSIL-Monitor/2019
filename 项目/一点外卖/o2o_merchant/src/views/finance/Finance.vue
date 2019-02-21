<template>
  <div class="finance container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("Finance.T") }}</span>
    </div>
    <!-- 总计 -->
    <div class="total">
      <ul>
        <li>
          <h5>{{ $t("Finance.T1") }}</h5>
          <span>{{GLOBAL.currency}}{{totalMoney? totalMoney : 0}}</span>
        </li>
        <li></li>
        <li>
          <h5>{{ $t("Finance.T2") }}</h5>
          <span>{{GLOBAL.currency}}{{money ? money:0}}</span>
          <router-link :to="{name:'Drawmoney'}">{{ $t("Finance.LINK1") }}</router-link>
        </li>
        <li></li>
        <li>
          <h5>{{ $t("Finance.T3") }}</h5>
          <span>{{GLOBAL.currency}}{{acquire?acquire:0}}</span>
            <router-link :to="{name:'Drawmoney'}">{{ $t("Finance.LINK2") }}</router-link>
        </li>
      </ul>
    </div>
    <!-- 订单结算明细记录 -->
    <div class="payList">
      <div class="pLTop">
        <span>{{ $t("Finance.List") }}</span>
        <div class="block fr">
          <el-date-picker @blur="queryOrder()" v-model="dataTime" type="daterange" value-format="yyyy-MM-dd" range-separator="-" :start-placeholder="$t('Finance.Time1')" :end-placeholder="$t('Finance.Time2')">
          </el-date-picker>
        </div>
      </div>
      <div class="pLBottom">
        <el-table :data="orderList" :header-cell-class-name='tableHeadRowClassName' :row-class-name="tableRowClassName" border style="width: 100%">
          <el-table-column fixed prop="order_number" :label="$t('Finance.Lab1')" width="240">
          </el-table-column>
          <el-table-column prop="shop_name" :label="$t('Finance.Lab2')" width="300">
          </el-table-column>
          <el-table-column prop="consignee" :label="$t('Finance.Lab3')" width="160">
          </el-table-column>
          <el-table-column prop="total" :label="$t('Finance.Lab4')" width="160">
          </el-table-column>
          <el-table-column prop="update_time" :label="$t('Finance.Lab5')">
          </el-table-column>
        </el-table>
      </div>
      <div class="pages">
        <el-pagination v-if="paginationShow" @current-change="handleCurrentChange" @prev-click="handleCurrentChange" @next-click="handleCurrentChange" :current-page.sync="query.pageNo" :page-size="query.pageSize" layout="prev, pager, next, jumper" :total="orderList.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { OrderTotalQuery, busOrderTotal, busOrderQuery } from '@/api/index.js'
export default {
  data () {
    return {
      paginationShow: true,
      totalMoney: null, // 结算总金额
      acquire: null, // 可提现金额
      money: null, // 已提现金额
      getMoney: null, // 所有可提现金额
      dataTime: null,
      //   查询信息
      query: {
        busShopId: null,
        beginTime: null,
        endTime: null,
        pageNo: 1,
        pageSize: 8
      },
      //   订单结算列表
      orderList: []
    }
  },
  mounted () {
    this.query.busShopId = this.LS.get('shopId')
    // 查询可提现金额，已提现金额
    busOrderTotal(this.query.busShopId).then(res => {
      this.money = res.data.money
      this.acquire = res.data.acquire
    })
    // 订单未结算总金额
    OrderTotalQuery(this.query.busShopId).then(res => {
      this.totalMoney = res.data
    })
    //   查询订单列表
    busOrderQuery(this.query).then(res => {
      this.total = res.data.number
      this.orderList = res.data.order
    })
  },
  methods: {
    //   查询订单
    queryOrder () {
      this.query.beginTime = this.dataTime[0]
      this.query.endTime = this.dataTime[1]
      setTimeout(() => {
        busOrderQuery(this.query).then(res => {
          this.orderList = res.data.order
          this.total = res.data.number
        })
      }, 1000)
    },
    // 翻页
    handleCurrentChange (pageNo) {
      this.query.pageNo = pageNo
      this.pageSize = 1
      this.queryOrder()
    },
    tableHeadRowClassName ({row, rowIndex}) {
      return 'warning-row'
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex % 2 !== 0) {
        return 'warning-row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.finance {
  height: 868px;
  // 总计
  .total {
    height: 222px;
    border-radius: 4px;
    h5 {
      color: #666;
    }
    ul {
      margin: 0 auto;
      height: 222px;
      border-bottom: 1px solid #e1e1e1;
      padding: 58px 0;
    }
    li {
      float: left;
      display: flex;
      flex-direction: column;
      h5 {
        font-size: 18px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 30px;
      }
      span {
        font-size: 28px;
        color: rgba(255, 70, 70, 1);
        line-height: 21px;
        margin-bottom: 15px;
      }
      a {
        font-size: 14px;
        color: #999999;
        line-height: 21px;
      }
    }
    li:nth-child(even) {
      width: 1px;
      height: 52px;
      background-color: #e1e1e1;
      margin-top: 24px;
    }
    li:nth-child(odd) {
      width: 372px;
      text-align: center;
    }
  }
  // 结算列表
  .payList {
    .pLTop {
      position: relative;
      height: 68px;
      line-height: 68px;
      span {
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        display: inline-block;
        height: 68px;
        line-height: 80px;
      }
    }
  }
}
</style>
<style lang="scss">
.payList {
  .pages {
    text-align: right;
    margin-top: 20px;
    .el-input__inner {
      width: 50px;
    }
    .el-input {
      width: 60px;
    }
  }
}
  .block .el-date-editor .el-range__close-icon {
      line-height: 24px;
    }
</style>
