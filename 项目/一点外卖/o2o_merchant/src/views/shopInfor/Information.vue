<template>
  <div class="personalstores container">
    <!-- 商家信息 -->
    <div class="subTitleTop">
      <span>{{ $t("NAV.Nav1") }}</span>
      <router-link
        class="fr"
        :to="{name:'AddShopInfo',params: { merchantUserId: 123 }}"
      >{{ $t("BTN.Edit") }}</router-link>
    </div>
    <div class="shopInfoBottom">
      <div class="left">
        <ul>
          <li>{{ $t("NAV2.Name1") }}：<span>{{shop.enterName}}</span></li>
          <li>{{ $t("NAV2.Name2") }}：<span>{{shop.shopName}}</span></li>
          <li>{{ $t("NAV2.Phone") }}：<span>{{shop.orderPhone}}</span></li>
          <li>{{ $t("NAV2.Cate") }}：<span>{{category}}</span></li>
          <li>
            {{ $t("NAV2.Time") }}：<span>{{shop.businessTime}}</span>&nbsp;&nbsp;&nbsp;
            <el-switch
              v-model="business"
              :active-text="$t('NAV2.Open')"
              :active-value="0"
              :inactive-value="1"
              @change="openShop">
            </el-switch>
          </li>
          <li class="shopqualifications">{{ $t("NAV2.Status") }}：
            <span>
              {{ arr[shop.status] }}
              <router-link v-if="shop.status=== 0" :to="{name:'Shopqualifications'}">（{{ $t("NAV2.Status4") }}）</router-link>
            </span>
          </li>
          <li>{{ $t("NAV2.Img") }} （{{ $t("NAV2.Img2") }}720*400）</li>
          <li class="shopImg"><img
              :src="shop.coverPicture"
              alt=""
            ></li>
          <li>{{ $t("NAV2.Bank") }}</li>
          <li>{{ $t("NAV2.Bank1") }}：<span>{{bankcard?bankcard.realname:null}}</span></li>
          <li>{{ $t("NAV2.Bank2") }}：<span>{{bankcard?bankcard.bankName:null}}</span></li>
          <li>{{ $t("NAV2.Bank3") }}：<span>{{bankcard?bankcard.cardNumber:null}}</span></li>

        </ul>
      </div>
      <div class="right">
        <ul>
          <li>{{ $t("NAV2.Phone2") }}： <span>{{shop.enterPhone}}</span></li>
          <li>{{ $t("NAV2.Address") }}： <span>{{shop.address}}</span></li>
          <li>{{ $t("NAV2.SendPrice") }}：<span>{{GLOBAL.currency}}{{shop.sendPrice}}起送</span></li>
          <li>{{ $t("NAV2.Area") }}： <span>{{area}}</span></li>
          <li>{{ $t("NAV2.Deliveryman") }}： <span>{{shop.deliveryman? $t("NAV2.YES") : $t("NAV2.NO")}}</span></li>
          <li>{{ $t("NAV2.Map") }} </li>
          <li class="search">
            <gmap-place-input class="mapInput" :default-place="shop.gpsLocation"
              ref="map"
              @center_changed="updateCenter"
              @idle="sync"
              @place_changed="setPlace">
            </gmap-place-input>
            <button>{{ $t("BTN.Search") }}</button>
          </li>
          <li class="map">
            <gmap-map
              :center="center"
              :zoom="17"
              style="width: 350px; height: 350px">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map>
          </li>
          <li class="geography">
            {{ $t("NAV2.Map2") }}：{{ $t("NAV2.Lon") }}N <input
              type="number"
              v-model="shop.longitude"
              @change="sync"
              step="0.00001"
            >
            {{ $t("NAV2.Lat") }}E <input
              type="number"
              v-model="shop.latitude"
              @change="sync"
              step="0.00001"
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { infoDatas, openMerchantShop } from '@/api/index.js'
export default {
  created () {
    this.sync()
    this.arr = this.$t('NAV2.status')
  },
  computed: {
    center: function () {
      // `this` 指向 vm 实例
      return {lat: this.shop.latitude, lng: this.shop.longitude}
    }
  },
  data () {
    return {
      // center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }],
      business: 0, // 开启店铺
      shopId: '',
      arr: [],
      shop: {
        address: null,
        businessTime: null,
        coverPicture: null,
        deliveryman: null,
        enterName: null,
        enterPhone: null,
        gpsLocation: null,
        latitude: 10.0,
        longitude: 10.0,
        orderPhone: null,
        sendPrice: null,
        shopName: null,
        status: null
      },
      category: '',
      area: '',
      // 银行信息
      bankcard: {
        bankName: '',
        cardNumber: '',
        realname: ''
      }
    }
  },
  mounted () {
    this.shopId = this.LS.get('shopId')
    infoDatas(this.shopId).then(res => {
      console.log(res)
      if (!res.code) {
        this.markers[0].position.lat = res.data.shop.latitude
        this.markers[0].position.lng = res.data.shop.longitude

        this.bankcard = res.data.bankcard
        this.category = res.data.category
        this.shop = res.data.shop
        this.area = res.data.area
        // 判断图片是否存在
        var ImgObj = new Image()
        ImgObj.src = this.shop.coverPicture
        // 没有图片，则不显示
        if (ImgObj.fileSize === 0 && (ImgObj.width === 0 || ImgObj.height === 0)) {
          this.shop.coverPicture = null
        }
      }
    })
    console.log(this.shop)
  },
  methods: {
    // 搜索位置
    setPlace (place) {
      this.shop.latitude = place.geometry.location.lat()
      this.shop.longitude = place.geometry.location.lng()
      this.center.lat = place.geometry.location.lat()
      this.center.lng = place.geometry.location.lng()
      this.markers[0].position.lat = place.geometry.location.lat()
      this.markers[0].position.lng = place.geometry.location.lng()
    },
    // 定位中心位置
    updateCenter (place) {
      this.shop.latitude = place.geometry.location.lat()
      this.shop.longitude = place.geometry.location.lng()
      // this.reportedMapCenter = {
      //   lat: latLng.lat(),
      //   lng: latLng.lng()
      // }
    },
    sync () {
      this.mapCenter = this.reportedMapCenter
    },
    // 开启或关闭店铺
    openShop () {
      openMerchantShop({business: this.business, busShopId: this.shopId}).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personalstores {
  height: 1150px;
  .shopInfoBottom {
    padding-top: 38px;
    li {
      font-size: 16px;
      // font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      margin-bottom: 26px;
    }
    .left {
      float: left;
      // 店铺背景
      .shopImg {
        img{
          width: 720px;
          height: 400px;
        }
      }
      // 店铺资质
      .shopqualifications{
        a{
          color: #00b1ff;
          font-size: 15px;
        }
      }
    }
    .right {
      float: right;
      // 地图
      .search {
        .mapInput >input{
          width: 250px;
          height: 30px;
          border: 1px solid rgba(212, 212, 212, 1);
          border-radius: 2px;
          margin-right: 30px;
          text-indent: 16px;
          color: #666;
        }
        button {
          width: 70px;
          height: 36px;
          background: rgba(0, 177, 255, 1);
          border-radius: 4px;
          color: #fff;
          font-size: 16px;
        }
      }
      // 地理位置
      .geography {
        input {
          width: 80px;
          height: 30px;
          border: 1px solid rgba(212, 212, 212, 1);
          border-radius: 2px;
          color: #666;
          text-indent: 0;
        }
        input:first-child {
          margin-right: 50px;
        }
        p {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
<style>
.personalstores .el-switch__label{
  color: #666;
}
.personalstores .el-switch__label.is-active{
  color: #00b1ff;
}
</style>
