<template>
  <div class="order container">
    <div class="subTitleTop">
      <span>{{ $t("ORDER.T2") }}</span>
    </div>
    <!-- 订单列表 -->
    <div class="orderList">
      <div class="listTitle">
        <span>{{ $t("ORDER.T3") }}</span>
        <ul>
          <li>{{ $t("ORDER.LI1") }}</li>
          <li>{{ $t("ORDER.LI2") }}</li>
          <li>{{ $t("ORDER.LI3") }}</li>
          <li>{{ $t("ORDER.LI4") }}</li>
          <li>{{ $t("ORDER.LI5") }}</li>
        </ul>
      </div>
      <!-- 订单详情 -->
      <div class="content">
        <ul>
          <li>
            <div class="number">
              <el-checkbox v-model="checked">{{ $t("ORDER.OrderNum") }}{{tableData.order_number}}</el-checkbox>
              <span>{{ $t("ORDER.Remark") }}</span>{{tableData.remark}}
            </div>
            <div class="order_list">
              <div>
                <div
                  class="detailed"
                  v-for="item in tableData.bus_product_info"
                >
                  <p class="img"><img
                      :src="tableData.bus_product_info[0].picPath"
                      alt=""
                    ></p>
                  <ul class="fr">
                    <li>
                      <span>{{item.productName}}</span>
                      <span>x{{item.num}}</span>
                    </li>
                    <li>${{item.productPrice}}</li>
                    <li>{{item.num}}{{ $t("ORDER.num") }}</li>
                  </ul>
                </div>
              </div>
              <div class="">
                <span style="width: 100px;margin-right: 15px;display: inline-block">${{tableData.product_totalprice}}</span>
                <span>${{tableData.total}}</span>
              </div>
            </div>
            <div class="orderIfo">
              <span>{{tableData.bus_shop_name}}</span>
              {{ $t("ORDER.Ifo1") }}<span>{{tableData.create_time}}</span>
              {{ $t("ORDER.pay_time") }}<span>{{tableData.pay_time}}</span>
              {{ $t("ORDER.promise_time") }}<span>{{tableData.promise_time}}</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 买家信息 -->
      <div class="guestIfo">
        <h5>{{ $t("ORDER.guestIfo") }}</h5>
        <p>
          {{ $t("ORDER.send_address") }}<span>{{tableData.send_address}}</span>
          {{ $t("ORDER.consignee") }}<span>{{tableData.consignee}}</span>
          {{ $t("ORDER.phone") }}<span>{{tableData.phone}}</span>
        </p>
      </div>
      <span class="order-row-font">{{ $t("ORDER.map") }}</span>
      <div class="map">
        <google-map>
          <google-map-marker :places="vueConfCities"></google-map-marker>
        </google-map>
        <gmap-map
          :center="center"
          :zoom="17"
          style="width: 100%; height: 400px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
import { order } from '@/api/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  data () {
    return {
      serData: {},
      tableData: {},
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 }
        },
        {
          position: { lat: 11.0, lng: 11.0 }
        }
      ],
      // 店铺选择
      shopOptions: [
        {
          shopID: '1',
          name: '沙县小吃(金边)'
        },
        {
          shopID: '2',
          name: '沙县小吃(彩虹桥)'
        }
      ],
      checked: ''
    }
  },
  methods: {
    initData () {
      order.detail(this.serData).then(res => {
        if (res.data.code === 0) {
          this.tableData = res.data.data
          this.center.lat = res.data.data.shop_latitude
          this.center.lng = res.data.data.shop_longitude
          this.markers[0].position.lat = res.data.data.shop_latitude
          this.markers[0].position.lng = res.data.data.shop_longitude
          this.markers[1].position.lat = res.data.data.latitude
          this.markers[1].position.lng = res.data.data.longitude
          console.log('--->', this.markers[0].position.lat)
          this.tableData.bus_product_info = JSON.parse(
            res.data.data.bus_product_info
          )
          console.log(this.tableData.bus_product_info)
        }
      })
    }
  },
  created () {
    this.serData.orderNumber = this.$route.params.orderNumber
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.order {
  color: #666;
  .orderTop {
    height: 68px;
    line-height: 68px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 18px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
  .orderList {
    .listTitle {
      height: 84px;
      line-height: 84px;
      ul {
        float: right;
        li {
          height: 84px;
          line-height: 84px;
          margin: 0 30px;
          float: left;
        }
      }
    }
    // 订单详情
    .content {
      .order_list {
        display: flex;
        align-items: center;
        padding: 20px 18px;
      }
      > ul > li {
        border: 1px solid rgba(225, 225, 225, 1);
        margin-bottom: 17px;
        .number {
          height: 52px;
          line-height: 52px;
          padding-left: 18px;
          span {
            color: #00b1ff;
            margin-left: 30px;
          }
        }
        .detailed:nth-child(even){
          margin: 8px 0;
        }
        .detailed {
          height: 110px;
          display: flex;
          font-size: 14px;
          background-color: #f9f9f9;
          .img {
            width: 68px;
            height: 68px;
            img{
              width: 68px;
              height: 68px;
            }
          }
          > ul {
            /*margin-left: 492px;*/
            li:nth-child(1) {
              width: 485px;
              margin-left: 31px;
            }
            li:nth-child(2) {
              margin-right: 10px;
              width: 90px;
            }
            li:nth-child(3) {
              width: 210px;
              margin-right: 15px;
            }

            li {
              height: 68px;
              line-height: 68px;
              /*margin: 0 30px;*/
              float: left;
            }
          }
        }
        .orderIfo {
          height: 48px;
          line-height: 48px;
          padding-left: 18px;
          span {
            margin-right: 15px;
          }
        }
      }
    }
    // 买家信息
    .guestIfo {
      margin-top: 30px;
      h5 {
        font-size: 16px;
        margin: 15px 0;
      }
      span {
        margin-right: 15px;
      }
    }
    .map {
      margin: 20px 0;
      padding-bottom: 60px;
    }
    .order-row-font {
      margin-top: 40px;
      font-size: 16px;
      color: #666666;
      display: inline-block;
    }
  }
}
</style>
