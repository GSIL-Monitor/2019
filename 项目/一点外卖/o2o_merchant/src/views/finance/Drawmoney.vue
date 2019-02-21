<template>
  <div class="drawmoney container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("Finance.DrawmoneyT") }}</span>
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
        </li>
        <li></li>
        <li>
          <h5>{{ $t("Finance.T3") }}</h5>
          <span>{{GLOBAL.currency}}{{acquire?acquire:0}}</span>
          <a href="javascript:;" @click="drawmoney">{{ $t("Finance.LINK2") }}></a>
        </li>
      </ul>
    </div>

    <!-- 申请提现 -->
    <div class="cash">
      <p>{{ $t("Finance.DT1") }}</p>
      {{ $t("Finance.DT2") }} <input type="text" placeholder="10000.0" v-model="getMoney">
      <button @click="submit" class="btn">{{ $t("Finance.DT1") }}</button>
      <p class="tips">{{ $t("Finance.DTxt1") }}</p>
    </div>

    <!-- 提现明细记录 -->
    <div class="payList">
      <div class="pLTop">
        <span>{{ $t("Finance.DTxt2") }}</span>
      </div>
      <div class="pLBottom">
        <el-table :data="orderList" :header-cell-class-name='tableHeadRowClassName' :row-class-name="tableRowClassName" border style="width: 100%">
          <el-table-column fixed prop="cardNumber" :label="$t('Finance.DTxt3')" width="290">
          </el-table-column>
          <el-table-column prop="realname" :label="$t('Finance.DTxt4')" width="160">
          </el-table-column>
          <el-table-column prop="status" :label="$t('Finance.DTxt5')" width="120">
            <template slot-scope="scope">
              <!-- {{scope.row | statusFilters }} -->
              {{ arr[scope.row.status] }}
            </template>
          </el-table-column>
          <el-table-column prop="money" :label="$t('Finance.DTxt6')" width="160">
          </el-table-column>
          <el-table-column prop="updateTime" :label="$t('Finance.DTxt7')">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 页码 -->
    <div class="page">
      <el-pagination @size-change="queryOrder" @current-change="queryOrder" @prev-click="queryOrder" @next-click="queryOrder" :current-page.sync="query.pageNo" :page-size="query.pageSize" layout="prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { busOrderTotal, OrderTotalQuery, drawmoneyList, addBusMoney } from '@/api/index.js'
export default {
  data () {
    return {
      totalMoney: null, // 订单未结算总金额
      acquire: null, // 可提现金额
      money: null, // 已提现金额
      getMoney: null,
      //   查询信息
      dataTime: null,
      query: {
        busShopId: null,
        // beginTime: null,
        // endTime: null,
        pageNo: 1,
        pageSize: 6
      },
      //   总数据
      total: 0,
      //   订单结算列表
      orderList: [],
      arr: []
    }
  },
  mounted () {
    this.arr = this.$t('Finance.status')
    this.query.busShopId = this.LS.get('shopId')
    // 查询未结算总金额
    OrderTotalQuery(this.query.busShopId).then(res => {
      this.totalMoney = res.data
    })
    this.init()
  },
  methods: {
    init () {
      // 查询可提现金额，已提现金额
      busOrderTotal(this.query.busShopId).then(res => {
        this.money = res.data.money
        this.acquire = res.data.acquire
      })
      //   查询订单列表
      drawmoneyList(this.query).then(res => {
        this.total = res.data.length ? res.data.length + 1 : 0
        this.orderList = res.data
      })
    },
    // 获取所有可提现金额
    drawmoney () {
      this.getMoney = this.acquire
    },
    // 申请提现
    submit () {
      // if (this.getMoney > this.acquire) {
      //   this.$message.error('超过可提现金额!')
      // } else if (this.getMoney <= 0) {
      //   this.$message.error('请输入需要提现的金额!')
      // } else {
      let obj = {}
      obj.busShopId = this.query.busShopId
      obj.money = this.getMoney
      addBusMoney(obj).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.init()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    //   根据时间或分页查询订单
    queryOrder () {
      drawmoneyList(this.query).then(res => {
        this.orderList = res.data
      })
    },
    // 表格样式
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
.drawmoney {
  height: 1000px;
  color: #666;
  // 总计
  .total {
    height: 222px;
    border-radius: 4px;
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
  // 申请提现
  .cash {
    padding-top: 20px;
    p {
      margin: 20px 0;
    }
    input {
      width: 190px;
      height: 30px;
      text-indent: 16px;
      font-size: 16px;
      color: #666;
    }
    .btn {
      margin-left: 40px;
    }
    .tips {
      color: #ff4646;
      font-size: 14px;
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
  //页码
  .page {
    text-align: right;
    padding: 30px 0;
  }
}
</style>
<style lang="scss">
.page .el-input {
  width: 60px;
}
</style>
