<template>
  <div class="merchants container">
    <div class="mLeft">
      <!-- 总计 -->
      <div class="total">
        <ul>
          <li>
            <h5>{{ $t("NAV1.Money1") }}</h5>
            <span>{{GLOBAL.currency}}{{querySum?querySum:0}}</span>
            <router-link :to="{name:'Finance'}">{{ $t("NAV1.Look1") }}></router-link>
          </li>
          <li></li>
          <li>
            <h5>{{ $t("NAV1.Money2") }}</h5>
            <span>{{sum}}{{ $t("NAV1.Sale2") }}</span>
            <router-link :to="{name:'Order'}">{{ $t("NAV1.Look2") }}></router-link>
          </li>
          <li></li>
          <li>
            <h5>{{ $t("NAV1.Money3") }}</h5>
            <span>{{GLOBAL.currency}}{{acquire?acquire:0}}</span>
            <router-link :to="{name:'Finance'}">{{ $t("NAV1.Look1") }}></router-link>
          </li>
        </ul>
      </div>
      <!-- 商铺信息 -->
      <div class="shopIfo">
        <div class="photo"><img :src="busShop.cover_picture" alt=""></div>
        <div class="benefit">
          <div class="name">
            {{busShop.shop_name}}
            <router-link
              class="fr"
              :to="{name:'Information'}"
            >{{this.business? $t("NAV1.Time1"):$t("NAV1.Time2") }}</router-link>
          </div>
          <div class="star">
            <div class="starL fl">
              <el-rate
                v-model="busShop.merchant_star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <div class="starR fl">
              {{ $t("NAV1.Sale1") }}{{busShop.sales_volume}} {{ $t("NAV1.Sale2") }}
            </div>
          </div>
          <p v-if="busShop.delivery_money">
            <i class="iconimg iI1">{{ $t("NAV1.Sale3") }}</i>
            {{ $t("NAV1.Sale4") }}{{GLOBAL.currency + busShop.delivery_money}}</p>
          <p v-if="discount.fullMoney && !discount.isopenCoupons">
            <i class="iconimg iI2"> {{ $t("NAV1.Sale5") }}</i>
            {{ $t("NAV1.Sale6") }} {{GLOBAL.currency + discount.fullMoney}}{{ $t("NAV1.Sale7") }} {{GLOBAL.currency + discount.fullSubtract}}</p>
          <p v-if="discount.fullDiscount && !discount.isopenCoupons">
            <i class="iconimg iI3">{{ $t("NAV1.Sale8") }}</i>
            {{ $t("NAV1.Sale6") }}{{GLOBAL.currency + discount.fullDiscount + GLOBAL.currency + discount.fullReducedRate}}{{ $t("NAV1.Sale5") }}</p>
          <p v-if="first.openStatus">
            <i class="iconimg iI4">{{ $t("NAV1.Sale9") }}</i>
            {{first.name}}{{GLOBAL.currency}}{{first.amount}}
          </p>
          <router-link
              class="fr send"
              :to="{name:'Information'}"
            >{{GLOBAL.currency}}{{busShop.send_price}}{{ $t("NAV1.Send") }}
          </router-link>
        </div>
        <div class="shopIfoLine"></div>
        <div class="shopAddress">
          <p>{{ $t("NAV1.Phone") }}：{{busShop.order_phone}}</p>
          <p>{{ $t("NAV1.Address1") }}：{{busShop.address}}</p>
          <router-link
            :to="{name:'Information'}"
            class="btn"
          >{{ $t("NAV1.Address2") }}</router-link>
        </div>
      </div>
      <!-- 订单列表 -->
      <div class="orderTabel">
        <div class="orderTop">
          <span>{{ $t("ORDER.Order1") }}</span>
          <router-link
            :to="{name:'Order'}"
            class="fr"
          >{{ $t("NAV1.More") }}></router-link>
        </div>
        <div class="orderBottom">
          <el-table
            :data="noDelivery"
            :header-cell-class-name='tableHeadRowClassName'
            :row-class-name="tableRowClassName"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="order_number"
              :label="$t('ORDER.Num')"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="consignee"
              :label="$t('ORDER.Consignee')"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="send_address"
              :label="$t('ORDER.Address')"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              :label="$t('ORDER.Money')"
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="create_time"
              :label="$t('ORDER.Time')"
              width="110"
            >
            </el-table-column>
            <el-table-column
              fixed="right"
              :label="$t('ORDER.handle')"
              width="60"
            >
              <template slot-scope="scope">
                <router-link :to="{name:'Orderinformation',params:{orderNumber:scope.row.order_number }}">{{ $t("NAV1.Look") }}</router-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 商家须知 -->
    <div class="mRight">
      <p>{{ $t("NAV1.Guide") }}</p>
      <ul>
        <li><a href="javascript:;">{{ $t("NAV1.Guide1") }}</a></li>
        <li><a href="javascript:;">{{ $t("NAV1.Guide2") }}</a></li>
        <li><a href="javascript:;">{{ $t("NAV1.Guide3") }}</a></li>
        <li><a href="javascript:;">{{ $t("NAV1.Guide4") }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { merchantTotal, busOrderTotal, busShopQuery } from '@/api/index.js'
export default {
  data () {
    return {
      // 商家信息
      business: '',
      busShop: {
        address: null,
        business_time: null,
        cover_picture: null,
        send_price: 0,
        shop_name: null,
        order_phone: null,
        merchant_star: null,
        sales_volume: null,
        delivery_money: 0
      },
      noDelivery: [],
      querySum: 0,
      sum: 0,
      acquire: null,
      // 折扣活动
      discount: [],
      // 首单折扣
      first: {
        amount: '',
        name: '',
        openStatus: ''
      }
    }
  },
  mounted () {
    let busShopId = this.LS.get('shopId')
    // let busUserId = this.LS.get('busUserId')
    // 店铺信息
    merchantTotal(busShopId).then(res => {
      if (!res.code) {
        this.busShop = res.data.queryShop.busShop
        this.business = res.data.queryShop.business
        this.discount = res.data.queryShop.discount[0]
        this.first = res.data.queryShop.first
        this.noDelivery = res.data.noDelivery
        this.querySum = res.data.querySum ? res.data.querySum : 0
        this.sum = res.data.sum ? res.data.sum : 0
      }
    })
    // 查询可提现金额
    busOrderTotal(busShopId).then(res => {
      if (!res.code) {
        this.acquire = res.data.acquire ? res.data.acquire : 0
      }
    })
    // busShopQuery(busUserId).then(res => {
    //   // console.log(res)
    // })
    // busShopBusiness(busUserId).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    // 重置element表格颜色
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
.merchants {
  font-weight: 400;
  position: relative;
  background-color: #f3f3f3;
  padding: 0;
  .mLeft {
    width: 880px;
    > div {
      background-color: #fff;
      margin-top: 16px;
    }
    // 总计
    .total {
      height: 168px;
      border-radius: 4px;
      li {
        float: left;
        display: flex;
        flex-direction: column;
        h5 {
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
          margin: 30px 0;
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
        margin-top: 58px;
      }
      li:nth-child(odd) {
        height: 168px;
        width: 292px;
        text-align: center;
      }
    }
    // 商铺信息
    .shopIfo {
      position: relative;
      height: 200px;
      border-radius: 4px;
      padding-top: 32px;
      display: flex;
      flex-direction: row;
      .photo {
        width: 98px;
        height: 98px;
        border-radius: 50%;
        background-color: pink;
        margin: 0 34px;
        img{
            width: 98px;
        height: 98px;
        border-radius: 50%;
        }
      }
      .benefit {
        width: 400px;
        position: relative;
        .name {
          font-size: 18px;
          color: #333333;
          // 营业中按钮
          .fr {
            color: #00b1ff;
            width: 80px;
            height: 30px;
            border: 1px solid #00b1ff;
            border-radius: 4px;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
          }
        }
        .star {
          margin-top: 8px;
          height: 20px;
          margin-bottom: 24px;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          .starL{
            margin-right: 5px;
          }
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          margin-top: 5px;
          .iconimg{
            color: #fff;
            padding: 1px 3px;
            display: inline-block;
            text-align: center;
            line-height: 18px;
          }
          .iI1{
            background-color: #00B1FF;
          }
          .iI2{
            background-color: #FFCC00;
          }
          .iI4{
            background-color: #FF4646;
          }
          .iI3{
            background-color: #27A47E;
          }
        }
        .send{
          position: absolute;
          bottom: 40px;
          right: 0;
        }
      }
      .shopIfoLine {
        position: absolute;
        top: 15px;
        right: 290px;
        width: 1px;
        height: 170px;
        background: rgba(225, 225, 225, 1);
      }
      .shopAddress {
        margin-left: 40px;
        p {
          color: #666666;
          font-size: 14px;
          margin-bottom: 16px;
        }
        a {
          margin-left: 60px;
          margin-top: 40px;
          display: inline-block;
        }
        a:hover {
          color: #fff;
        }
      }
    }
    // 订单列表
    .orderTabel {
      border-radius: 4px;
      padding: 0 30px 60px;
      .orderTop {
        height: 49px;
        line-height: 49px;
        font-size: 16px;
        color: #666;
        a {
          color: #00b1ff;
        }
      }
      .orderBottom {
        span {
          color: #00b1ff;
          cursor: pointer;
        }
        a {
          color: #00b1ff;
        }
      }
    }
  }
  // 商家须知
  .mRight {
    padding: 0 30px;
    width: 250px;
    border-radius: 4px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    p {
      border-bottom: 1px solid rgba(225, 225, 225, 1);
      height: 50px;
      line-height: 50px;
    }
    li {
      margin: 15px 0;
    }
  }
}
</style>
