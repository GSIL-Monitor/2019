<template>
  <div class="addBatch container">
    <div class="subTitleTop">
      <span>批量上传商品</span>
    </div>
    <div class="addContent">
      <p>批量上传商品，请下下载批量上传商品的<span>excel模板文件</span></p>
      上传批量上传商品文件
      <div class="avatar-uploader fr" >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-upload avatar-uploader-icon">
        </i>
        <div class="addText">上传excel文件</div>
        <input
          type="file"
          name=""
          class="file-excel"
          @change="getFile($event)"
        >
      </div>
      <button class="btn addBatchBtn" @click="sendExcel">上传</button>
    </div>
  </div>
</template>

<script>
import { productExAdd } from '@/api/index.js'
export default {
  data () {
    return {
      imageUrl: '',
      file: {}
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    getFile (e) {
      var _this = this
      this.file = e.target.files[0]
      console.log(e.target.files[0].name.split('.')[1])
      if (this.file.name.split('.')[1] !== 'xlsx') {
        this.$message.error('只能上传excel文件')
        _this.file = 0
      }
    },
    sendExcel () {
      if (this.file == 0) {
        this.$message.error('只能上传excel文件')
        return
      }
      let param = new FormData()
      param.append('file', this.file, this.file.name)
      param.append('busShopId', localStorage.getItem('shopId'))
      productExAdd(param).then(res => {
        if (res.code === 0) {
          this.$message.success(res.msg)
          this.$router.push({ name: 'Goods' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .addBatch {
    height: 805px;
  .addContent {
    padding: 50px 360px;
    font-size: 16px;
    color: #666;
  p {
    margin-bottom: 40px;
  }
  .addBatchBtn {
    margin-top: 50px;
    margin-left: 140px;
  }
  }
  }
</style>
<style>
  .avatar-uploader {
    margin-right: 50px;
    position: relative;
    border:1px solid rgba(212,212,212,1);
  }
  .file-excel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .avatar-uploader .addText {
    position: absolute;
    top: 110px;
    left: 40px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 60px;
    color: #d4d4d4;
    width: 168px;
    height: 168px;
    line-height: 130px;
    text-align: center;
  }
  .avatar {
    width: 168px;
    height: 168px;
    display: block;
  }
</style>
