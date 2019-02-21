<template>
  <div class="addShopInfo container">
    <!-- 商家信息 -->
    <div class="subTitleTop">
      <span>{{ $t("NAV2.NAV2T") }}</span>
    </div>
    <div class="shopInfoBottom">
      <div class="left">
        <ul>
          <li>
            <span>{{ $t("NAV2.Name1") }}：</span>
            <input type="text" v-model="shop.enterName"  @blur="checkShopName()">
          </li>
          <li>
            <span>{{ $t("NAV2.Name2") }}：</span>
            <input type="text" v-model="shop.shopName">
          </li>
          <li>
            <span>{{ $t("NAV2.Phone") }}：</span>
            <input type="text" v-model="shop.orderPhone">
          </li>
          <li>
            <span>{{ $t("NAV2.Cate") }}：</span>
            <el-select v-model="shop.category">
              <el-option
                v-for="item in shopCates"
                :key="item.categoryCode"
                :label="item.categoryName"
                :value="item.categoryCode"
              ></el-option>
            </el-select>
          </li>
          <li>
            <span>{{ $t("NAV2.Time") }}：</span>
            <el-time-select
              v-model="startTime"
              :picker-options="{
              start: '00:00',
              step: '00:5',
              end: '24:00'
            }"
              style="width:100px"
              class="timeBox"
            ></el-time-select>
            <el-time-select
              v-model="endTime"
              :picker-options="{
              start: '00:00',
              step: '00:5',
              end: '24:00',
              minTime: startTime
            }"
              style="width:100px"
              class="timeBox"
            ></el-time-select>
          </li>
          <li>{{ $t("NAV2.Img") }} （{{ $t("NAV2.Img2") }}720*400）{{this.shop.category}}</li>
          <li class="shopImg">
            <div class="upload">
              <!-- 图片展示 -->
              <div class="cha" v-show="(this.shop.coverPicture)">
                <!-- 删除icon -->
                <div class="del">
                  <i class="el-icon-delete" @click="delImg"></i>
                </div>
                <img :src="this.shop.coverPicture">

              </div>
              <!-- 图片上传控件 -->
              <div class="load">
                <input type="file" name id="form" @change="uploadIMG">
                <i class="el-icon-picture icon">
                  <p> {{ $t("NAV2.Img3") }}</p>
                </i>
              </div>
            </div>
          </li>
          <li>
            {{ $t("NAV2.Bank") }}
            <i>{{ $t("NAV2.Bank4") }}</i>
          </li>
          <li>
            <span>{{ $t("NAV2.Bank1") }}：</span>
            <input type="text" v-model="bankcard.realname">
          </li>
          <li>
            <span>{{ $t("NAV2.Bank2") }}：</span>
            <input type="text" v-model="bankcard.bankName">
          </li>
          <li>
            <span>{{ $t("NAV2.Bank3") }}：</span>
            <input type="text" v-model="bankcard.cardNumber">
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li>
            <span>{{ $t("NAV2.Phone2") }}：</span>
            <input type="text" v-model="shop.enterPhone">
          </li>
          <li>
            <span>{{ $t("NAV2.Address") }}：</span>
            <input type="text" v-model="shop.address">
          </li>
          <li>
            <span>{{ $t("NAV2.SendPrice") }}：</span>
            <input type="text" v-model="shop.sendPrice">
          </li>
          <li>
            <span>{{ $t("NAV2.Area") }}：</span>
            <el-cascader
              v-model="area1"
              :props="setProps"
              :options="areaList"
              :show-all-levels="false"
              :placeholder="area"
            ></el-cascader>
          </li>
          <li>{{ $t("NAV2.Deliveryman") }}：
            <el-select v-model="shop.exclusiveDeliveryman" class="deliveryman">
              <el-option :label="$t('NAV2.YES')" value="1"></el-option>
              <el-option :label="$t('NAV2.NO')" value="0"></el-option>
            </el-select>
          </li>
          <li>{{ $t("NAV2.Map") }}</li>
          <li class="search">
            <gmap-place-input class="mapInput"
                              ref="map"
                              @center_changed="updateCenter"
                              @idle="sync"
                              @place_changed="setPlace"
                              style="color:#666;text-indent:10px ;">
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
            <p>{{ $t("NAV2.Notes") }}</p>
          </li>
        </ul>
      </div>
    </div>
    <p>
      <button class="btn" @click="submit">{{ $t("BTN.Sub") }}</button>
    </p>
  </div>
</template>

<script>
import { upload, getShopCategory, getShopArea } from '@/api/public.js'
import { infoDatas, addBusShop, getShopNameNum } from '@/api/index.js'
export default {
  props: ['uploadUrl'],
  created () {
    this.sync()
  },
  computed: {
    // 计算属性的 getter
    businessTime: function () {
      // `this` 指向 vm 实例
      return this.startTime + '-' + this.endTime
    }
  },
  data () {
    return {
      center: {lat: 10, lng: 10},
      markers: [{
        position: {lat: 10, lng: 10}
      }],
      // 营业时间：
      startTime: null,
      endTime: null,
      picavalue: null,
      // 店铺分类
      shopCates: [],
      // 店铺分区选择列表
      areaList: [],
      setProps: {
        value: 'id'
      },
      area: null,
      area1: null,
      category: null,
      shop: {
        category: null,
        area: null,
        busUserId: null,
        busShopId: null,
        address: null,
        businessTime: null,
        coverPicture: null,
        exclusiveDeliveryman: null,
        enterName: null,
        enterPhone: null,
        gpsLocation: '',
        latitude: null,
        longitude: null,
        orderPhone: null,
        sendPrice: null,
        shopName: null,
        language: '1'
      },
      // 银行信息
      bankcard: {
        bankName: null,
        cardNumber: null,
        realname: null
      },
      lan: {
        language: null
      }
    }
  },
  mounted () {
    let a = localStorage.getItem('localeLanguage')
    if (a === 'zh') {
      this.lan.language = 1
      this.shop.language = 1
    } else if (a === 'en') {
      this.lan.language = 2
      this.shop.language = 2
    }
    this.shop.busShopId = this.LS.get('shopId')
    this.shop.busUserId = this.LS.get('busUserId')
    // 店铺ID存在时执行
    if (this.shop.busShopId) {
      // 商家信息查询
      infoDatas(this.shop.busShopId).then(res => {
        if (!res.code) {
          if (res.data.bankcard) this.bankcard = res.data.bankcard
          this.shop = res.data.shop
          this.area = res.data.area
          this.category = res.data.category
          /* 判断图片是否存在 */
          var ImgObj = new Image()
          ImgObj.src = this.shop.coverPicture
          // 没有图片，则返回-1
          if (
            ImgObj.fileSize === 0 ||
              (ImgObj.width === 0 || ImgObj.height === 0)
          ) {
            this.shop.coverPicture = null
          }
          if (res.data.shop.exclusiveDeliveryman) {
            this.shop.exclusiveDeliveryman = this.$t('NAV2.YES')
          } else {
            this.shop.exclusiveDeliveryman = this.$t('NAV2.NO')
          }
          /* 处理时间格式 */
          var timeStr = res.data.shop.businessTime
          var arr = timeStr.split('-')
          this.startTime = arr[0]
          this.endTime = arr[1]
        }
      })
    }
    // 店铺分类信息
    getShopCategory(this.lan).then(res => {
      this.shopCates = res.data
    })
    // 店铺分区信息
    getShopArea(this.lan).then(res => {
      let arr = res.data
      this.test(arr)
      this.areaList = arr
    })
  },
  methods: {
    test (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].children.length <= 0) {
          delete data[i]['children']
        }
        if (data.length !== 0 && data[i].children !== undefined) {
          this.test(data[i].children)
        }
      }
    },
    // 限制图片上传大小等
    uploadIMG (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.picavalue = files[0]
      // console.log(this.picavalue.size / 1024)
      if (this.picavalue.size / 1024 > 5000) {
        this.$message({
          message: this.$t('NAV.Tips1'),
          type: 'warning'
        })
      } else {
        this.imgPreview(this.picavalue)
      }
    },
    // 获取图片
    imgPreview (file, callback) {
      // 保存上传图片参数
      var formData = new FormData()
      formData.append('file', file, file.name)
      this.param = formData
      upload(this.param).then(res => {
        if (!res.code) {
          let fileUrl = JSON.parse(res.data).fileUrl
          // let fileUrl = res.data.fileUrl
          console.log(fileUrl)
          this.shop.coverPicture = fileUrl
        }
      })
    },
    // 删除图片事件
    delImg () {
      this.shop.coverPicture = null
    },
    // 验证商铺名是否被注册
    checkShopName () {
      getShopNameNum(this.shop.enterName).then(res => {
        if (res.code === 1) {
          this.$message.error(res.msg)
        }
      })
    },
    // 提交修改或添加店铺信息
    submit () {
      console.log('this.shop--->', this.shop)
      console.log('this.businessTime--->', this.businessTime)
      // 验证商家信息
      if (
        !this.shop.address ||
          !this.businessTime ||
          !this.shop.coverPicture ||
          !this.shop.exclusiveDeliveryman ||
          !this.shop.enterName ||
          !this.shop.enterPhone ||
          !this.shop.gpsLocation ||
          !this.shop.latitude ||
          !this.shop.longitude ||
          !this.shop.orderPhone ||
          !this.shop.sendPrice ||
          !this.shop.shopName
      ) {
        this.$message({
          message: this.$t('NAV.Tips2'),
          type: 'warning'
        })
        return false
      }
      // 验证银行信息
      if (
        !this.bankcard.bankName ||
          !this.bankcard.cardNumber ||
          !this.bankcard.realname
      ) {
        this.$message({
          message: this.$t('NAV.Tips3'),
          type: 'warning'
        })
        return false
      }
      // 店铺分类
      if (!this.shop.category) {
        this.$message({
          message: this.$t('NAV.Tips4'),
          type: 'warning'
        })
        return false
      }
      /* 以上验证用户是否有输入数据*************************/

      /* 处理时间格式 */
      this.shop.businessTime = this.businessTime

      // 参数处理
      let obj = this.shop
      obj.bankName = this.bankcard.bankName
      obj.cardNumber = this.bankcard.cardNumber
      obj.realname = this.bankcard.realname
      // 是否配送
      if (this.shop.exclusiveDeliveryman === this.$t('NAV2.YES')) {
        obj.exclusiveDeliveryman = 1
      }
      if (this.shop.exclusiveDeliveryman === this.$t('NAV2.NO')) {
        obj.exclusiveDeliveryman = 0
      }

      if (this.area1) {
        this.shop.area = this.area1[this.area1.length - 1]
      } else {
        obj.area = this.shop.area
      }

      addBusShop(obj).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          if (res.data) this.LS.put('shopId', res.data[0].id, 1)
          this.$router.push({ name: 'Information' })
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 搜索位置
    setPlace (place) {
      console.log('place1---->', place)
      this.shop.latitude = place.geometry.location.lat()
      this.shop.longitude = place.geometry.location.lng()
      this.center.lat = place.geometry.location.lat()
      this.center.lng = place.geometry.location.lng()
      this.markers[0].position.lat = place.geometry.location.lat()
      this.markers[0].position.lng = place.geometry.location.lng()
      this.shop.gpsLocation = ''
      for (var i = place.address_components.length - 2; i > 0; i--) {
        this.shop.gpsLocation += place.address_components[i]['long_name']
      }
      this.shop.gpsLocation += place.name
    },
    // 定位中心位置
    updateCenter (place) {
      this.center.lat = place.geometry.location.lat()
      this.center.lng = place.geometry.location.lng()
      // this.reportedMapCenter = {
      //   lat: latLng.lat(),
      //   lng: latLng.lng()
      // }
    },
    sync () {
      this.mapCenter = this.reportedMapCenter
    }
  }
}
</script>

<style lang="scss" scoped>
  .addShopInfo {
    height: 1276px;
  .shopInfoBottom {
    padding-top: 38px;
    height: 1130px;
  li {
    font-size: 16px;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 20px;
  > span {
    display: inline-block;
    width: 100px;
  }
  input {
    color: #666;
  }
  button {
    width: 70px;
    height: 36px;
    background: rgba(0, 177, 255, 1);
    border-radius: 4px;
    line-height: 36px;
    color: #fff;
    margin-left: 20px;
  }
  }
  .left {
    float: left;
  .shopImg {
    width: 720px;
    height: 540px;
  // 图片上传
     .upload {
       position: relative;
       width: 200px;
       height: 160px;
  // 图片展示
     .cha {
       position: absolute;
       top: 120px;
       left: 0;
       width: 720px;
       height: 400px;
       overflow: hidden;
       box-sizing: border-box;
  .del {
    position: absolute;
    top: 0;
    right: 10px;
    opacity: 0;
    z-index: 3;
    border: none;
    color: #fff;
    font-size: 30px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  }
  //鼠标放上时显示删除和放大
    .cha:hover .layer,
    .cha:hover .del {
      opacity: 1;
    }

  //点击上传
    .load {
      position: absolute;
      top: 0;
      left: 0;
      width: 110px;
      height: 110px;
      border: 1px dashed rgba(212, 212, 212, 1);
      text-align: center;
      cursor: pointer;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
  }
  .icon {
    position: absolute;
    font-size: 48px;
    color: #999;
    text-align: center;
    top: 50px;
    left: 52px;
    transform: translate(-50%, -50%);
  }
  p {
    font-size: 14px;
    margin-top: 10px;
  }
  }
  }
  }
  }
  .right {
    float: right;
  // 地图
     .search {
  input {
    width: 250px;
    height: 30px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 2px;
    margin-right: 30px;
    text-indent: 16px;
  }
  button {
    width: 70px;
    height: 36px;
    background: rgba(0, 177, 255, 1);
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    margin: 0;
  }
  }
  .map {
    width: 350px;
    height: 350px;
  }
  // 地理位置
     .geography {
  input {
    width: 80px;
    height: 30px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 2px;
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
  input {
    width: 264px;
    height: 30px;
    text-indent: 1em;
  }
  }
  > p {
    text-align: center;
  }
  }
</style>
<style>
  .timeBox .el-input__inner {
    width: 103px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 110px;
    height: 110px;
    line-height: 110px;
    text-align: center;
  }
  .avatar {
    width: 110px;
    height: 110px;
    display: block;
  }
  .addShopInfo .el-date-editor .el-range__close-icon {
    line-height: 25px;
  }

  .deliveryman .el-input__inner {
    width: 90px;
  }
  .deliveryman .el-input {
    width: 90px;
  }
  .addShopInfo .el-cascader__label {
    width: 230px;
  }
</style>
