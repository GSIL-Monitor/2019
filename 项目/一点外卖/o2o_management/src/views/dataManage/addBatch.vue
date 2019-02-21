<template>
  <div class="addBatch container">
    <div class="subTitleTop">
      <span>批量上传店铺</span>
    </div>
    <div class="addContent">
      <p style="text-align: center">批量上传店铺，请下下载批量上传店铺的<span>excel模板文件</span><el-button type="primary" @click="download">下载模板</el-button></p>
      <div style="display: flex;justify-content: center">
        上传批量上传店铺文件
        <!-- <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">上传excel文件</div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload> -->
        <div class="avatar-uploader" >
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
      </div>
      <button class="btn addBatchBtn" @click="sendExcel">上传</button>
    </div>
  </div>
</template>

<script>
import { excelBusShop } from '@/api/index.js'
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
      console.log(e)
      var _this = this
      this.file = e.target.files[0]
      console.log(e.target.files[0].name.split('.')[1])
      if (this.file.name.split('.')[1] !== 'xlsx') {
        this.$message.error('只能上传excel文件')
        _this.file = 0
      }
    },
    sendExcel () {
      if (this.file === 0) {
        this.$message.error('只能上传excel文件')
        return
      }
      let param = new FormData()
      param.append('file', this.file, this.file.name)
      excelBusShop(param).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.$message.success('上传成功！')
          this.$router.push({ name: 'gober/storeMessage' })
        }
      })
    },
    // 下载模板
    download () {
      require.ensure([], () => {
        const { exportJsonToexcel } = require('@/excel/Export2Excel') // 这里必须使用绝对路径
        const tHeader = ['商家账号', '入驻名称', '入住电话', '店铺名称', '店铺地址', '订单电话', '起送金额', '营业时间', '是否有专属配送员(0否，1是)', '所属国家语音'] // 导出的表头名
        // const filterVal = ['date', 'name', 'address'] // 导出的表头字段名
        // const list = this.tableData // 你要导出的数据
        const data = this.formatJson(null, [])
        exportJsonToexcel(tHeader, data, 'shopList') // 导出的表格名称，根据需要自己命名
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-main {
    padding: 0 !important;
  }
  .addBatch {
    margin-top: 20px;
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: hidden;

  .btn {
    width: 120px;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: #00B1FF;
    font-size: 16px;
  }
  .subTitleTop {
    height: 68px;
    line-height: 68px;
    border-bottom: 1px solid #e1e1e1;
  }
  .subTitleTop>span {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .addContent {
    padding: 50px 0;
    font-size: 16px;
    color: #666;
  p {
    margin-bottom: 40px;
  }
  .addBatchBtn {
    display: block;
    margin: 50px auto;
  }
  }
  }
</style>
<style>
  .avatar-uploader {
    margin-right: 50px;
    position: relative;
    border:1px solid rgba(212,212,212,1);
    width: 170px;
    margin-left: 20px;
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
