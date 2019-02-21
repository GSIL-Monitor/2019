<template>
  <div class="shopqualifications container">
    <div class="subTitleTop">
      <span>店铺资质</span>
      <a
        href="javascript:;"
        class="fr"
        v-show="isShow"
        @click="isShow = false"
      >编辑</a>
    </div>
    <!-- 资质查询页面 -->
    <div
      class="query"
      v-show="isShow"
    >
      <div class="qTop">
            <i class="el-icon-success success" v-if="status==='店铺资质审核成功'"></i>
            <i class="el-icon-warning warning" v-if="status==='已提交，审核中'"></i>
            <i class="el-icon-error error" v-if="status==='审核失败，请重新上传'"></i>
            {{status}}
        </div>
      <div class="imgs">
        <h4>营业执照：</h4>
        <img
          :src="query.businessLicense"
          alt=""
        >
        <h4>法人身份证正面：</h4>
        <img
          :src="query.idCardFront"
          alt=""
        >
        <h4>法人身份证正面：</h4>
        <img
          :src="query.idCardReverse"
          alt=""
        >
      </div>
    </div>
    <!-- 资质添加编辑页面 -->
    <div
      class="shopContent"
      v-show="!isShow"
    >
      <ul class="fl">
        <li>营业执照：</li>
        <li>法人身份证正面：</li>
        <li>法人身份证反面：</li>
      </ul>
      <!-- 营业执照 -->
      <div class="upload">
        <!-- 图片展示 -->
        <div
          class="cha"
          v-show="(this.busShopCredential.businessLicense)"
        >
          <!-- 删除icon -->
          <div class="del"><i
              class="el-icon-delete"
              @click="delImg(1)"
            ></i></div>
          <img :src="this.busShopCredential.businessLicense">
          <!-- 放大icon -->
          <div class="layer"><i
              @click="isEnlargeImage1 = true"
              class="el-icon-view"
            ></i></div>
        </div>
        <!-- 图片上传控件 -->
        <div
          class="load"
          v-show="(!this.busShopCredential.businessLicense)"
        >
          <input
            type="file"
            name=""
            id="form"
            @change="uploadIMG(1,$event)"
          >
          <i class="el-icon-picture icon">
            <p>添加图片</p>
          </i>
        </div>
        <!-- 图片预览弹框 -->
        <el-dialog
          :visible.sync="isEnlargeImage1"
          size="large"
          :append-to-body="true"
          top="8%"
          width="60%"
        >
          <img
            @click="isEnlargeImage1 = false"
            style="width:100%;"
            :src="this.busShopCredential.businessLicense"
          >
        </el-dialog>
      </div>

      <!-- 正面 -->
      <div class="upload">
        <!-- 图片展示 -->
        <div
          class="cha"
          v-show="(this.busShopCredential.idCardFront)"
        >
          <!-- 删除icon -->
          <div class="del"><i
              class="el-icon-delete"
              @click="delImg(2)"
            ></i></div>
          <img :src="this.busShopCredential.idCardFront">
          <!-- 放大icon -->
          <div class="layer"><i
              @click="isEnlargeImage2 = true"
              class="el-icon-view"
            ></i></div>
        </div>
        <!-- 图片上传控件 -->
        <div
          class="load"
          v-show="(!this.busShopCredential.idCardFront)"
        >
          <input
            type="file"
            name=""
            id="form"
            @change="uploadIMG(2,$event)"
          >
          <i class="el-icon-picture icon">
            <p>添加图片</p>
          </i>
        </div>
        <!-- 图片预览弹框 -->
        <el-dialog
          :visible.sync="isEnlargeImage2"
          size="large"
          :append-to-body="true"
          top="8%"
          width="60%"
        >
          <img
            @click="isEnlargeImage2 = false"
            style="width:100%;"
            :src="this.busShopCredential.idCardFront"
          >
        </el-dialog>
      </div>

      <!-- 反面 -->
      <div class="upload">
        <!-- 图片展示 -->
        <div
          class="cha"
          v-show="(this.busShopCredential.idCardReverse)"
        >
          <!-- 删除icon -->
          <div class="del"><i
              class="el-icon-delete"
              @click="delImg(3)"
            ></i></div>
          <img :src="this.busShopCredential.idCardReverse">
          <!-- 放大icon -->
          <div class="layer"><i
              @click="isEnlargeImage3 = true"
              class="el-icon-view"
            ></i></div>
        </div>
        <!-- 图片上传控件 -->
        <div
          class="load"
          v-show="(!this.busShopCredential.idCardReverse)"
        >
          <input
            type="file"
            name=""
            id="form"
            @change="uploadIMG(3,$event)"
          >
          <i class="el-icon-picture icon">
            <p>添加图片</p>
          </i>
        </div>
        <!-- 图片预览弹框 -->
        <el-dialog
          :visible.sync="isEnlargeImage3"
          size="large"
          :append-to-body="true"
          top="8%"
          width="60%"
        >
          <img
            @click="isEnlargeImage3 = false"
            style="width:100%;"
            :src="this.busShopCredential.idCardReverse"
          >
        </el-dialog>
      </div>

      <button
        class="btn"
        @click="submit"
      >提交</button>

    </div>
  </div>
</template>

<script>
import { upload } from '@/api/public.js'
import { busShopCredential, addBusShopCredential } from '@/api/index.js'
export default {
  props: ['uploadUrl'],
  data () {
    return {
      // busShopID: '',
      isShow: true, // 编辑按钮
      picavalue: '',
      // 营业执照
      isEnlargeImage1: false,
      // 正面
      isEnlargeImage2: false,
      // 反面
      isEnlargeImage3: false,
      busShopCredential: {
        busShopId: 10086,
        businessLicense: null,
        idCardFront: null,
        idCardReverse: null
      },
      // 查询
      query: {
        businessLicense: null,
        idCardFront: null,
        idCardReverse: null
      },
      param: '',
      // 审核是否通过
      status: null,
      busShopId: null
    }
  },
  mounted () {
    // 店铺资质查询
    this.busShopCredential.busShopId = this.LS.get('shopId')
    busShopCredential(this.busShopCredential.busShopId).then(res => {
      if (!res.code) {
        if (res.data) {
          this.query.businessLicense = res.data.businessLicense
          this.query.idCardFront = res.data.idCardFront
          this.query.idCardReverse = res.data.idCardReverse
          this.isShow = true
          if (res.data.status === 0) {
            this.status = '店铺资质审核成功'
          } else if (res.data.status === 1) {
            this.status = '已提交，审核中'
          } else {
            this.status = '审核失败，请重新上传'
          }
        } else {
          this.isShow = false
        }
      }
    })
  },
  methods: {
    // 限制图片上传大小等
    uploadIMG (imgCode, e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.picavalue = files[0]
      console.log(this.picavalue.size / 1024)
      if (this.picavalue.size / 1024 > 5000) {
        this.$message({
          message: '图片过大不支持上传',
          type: 'warning'
        })
      } else {
        // let param = new FormData()
        // param.append('file', this.picavalue, this.picavalue.name)
        // this.param = param
        this.imgPreview(this.picavalue, imgCode)
        console.log(this.picavalue)
      }
    },
    // 获取图片
    imgPreview (file, imgCode, callback) {
      // 保存上传图片参数
      var formData = new FormData()
      formData.append('file', file, file.name)
      this.param = formData
      console.log(this.param)
      upload(this.param).then(res => {
        if (!res.code) {
          let fileUrl = JSON.parse(res.data).fileUrl
          // let fileUrl = res.data.fileUrl
          console.log('*****************************')
          console.log(fileUrl)

          if (imgCode === 1) {
            this.busShopCredential.businessLicense = fileUrl
          } else if (imgCode === 2) {
            this.busShopCredential.idCardFront = fileUrl
          } else {
            this.busShopCredential.idCardReverse = fileUrl
          }
        }
      })
    },
    // 压缩图片
    compress (img) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      // let initSize = img.src.length
      let width = img.width
      let height = img.height
      canvas.width = width
      canvas.height = height
      // 铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, width, height)

      // 进行最小压缩
      let ndata = canvas.toDataURL('image/jpeg', 0.1)
      return ndata
    },
    // base64转成bolb对象
    dataURItoBlob (base64Data) {
      var byteString
      if (base64Data.split(',')[0].indexOf('base64') >= 0) { byteString = atob(base64Data.split(',')[1]) } else byteString = unescape(base64Data.split(',')[1])
      var mimeString = base64Data
        .split(',')[0]
        .split(':')[1]
        .split(';')[0]
      var ia = new Uint8Array(byteString.length)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], { type: mimeString })
    },
    // 删除事件
    delImg (e) {
      if (e === 1) this.busShopCredential.businessLicense = null
      if (e === 2) this.busShopCredential.idCardFront = null
      if (e === 3) this.busShopCredential.idCardReverse = null
    },
    // 保存图片
    submit () {
      if (!this.busShopCredential.businessLicense || !this.busShopCredential.idCardFront || !this.busShopCredential.idCardReverse) {
        this.$message('请将资料上传完整')
        return false
      }
      addBusShopCredential(this.busShopCredential).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.$router.push({ name: 'Information' })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.shopqualifications {
  // height: 805px;
  // 审核通过
  .query {
    height: 1000px;
    .qTop {
      width: 1120px;
      height: 70px;
      background: rgba(244, 244, 244, 1);
      line-height: 70px;
      text-align: center;
      font-size: 18px;
      color: #666;
      i{
        color: #00B1FF;
        font-size: 40px;
        margin-right: 15px;
        vertical-align:middle;
      }
      .error{
        color: red;
      }
      .warning{
        color: rgb(231, 167, 71);
      }
    }
    .imgs {
      text-align: center;
      h4 {
        font-size: 16px;
        color: #666;
        margin-top: 36px;
        margin-bottom: 12px;
      }
      img {
        width: 300px;
        height: 220px;
      }
    }
  }
  // 添加
  .shopContent {
    height: 700px;
    font-size: 15px;
    color: #666;
    padding: 38px 300px 0;
    ul {
      margin-top: 10px;
      li {
        height: 180px;
        text-align: right;
      }
    }
  }
  // 图片上传
  .upload {
    position: relative;
    width: 200px;
    height: 160px;
    left: 140px;
    margin-top: 10px;
    // 图片展示
    .cha {
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 160px;
      border-radius: 6px;
      border: 1px dashed #cccccc;
      overflow: hidden;
      box-sizing: border-box;
      .layer {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 160px;
        opacity: 0;
        color: #ffffff;
        border: none;
        font-size: 30px;
      }
      .del {
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0;
        z-index: 3;
        border: none;
        color: #fff;
        font-size: 20px;
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
  // 提交
  .btn {
    margin-top: 50px;
    margin-left: 80px;
  }
}
</style>
