<template>
  <div class="addBatch container">
    <div class="subTitleTop">
      <span>{{ $t("GOOD2.T2") }}</span>
    </div>
    <div class="addContent">
      <p>{{ $t("GOOD2.TXT1") }}<span>{{ $t("GOOD2.TXT2") }}</span><button class="btn" @click="download">{{ $t("GOOD2.Download") }}</button></p>
      {{ $t("GOOD2.TXT3") }}
      <div class="avatar-uploader fr" >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-upload avatar-uploader-icon">
        </i>
        <div class="addText">{{ $t("GOOD2.TXT4") }}</div>
        <input
          type="file"
          name=""
          class="file-excel"
          @change="getFile($event)"
        >
      </div>
      <button class="btn addBatchBtn" @click="sendExcel">{{ $t("BTN.Uplode") }}</button>
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
        this.$message.error(this.$t('GOOD2.Tip8'))
        _this.file = 0
      }
    },
    sendExcel () {
      if (this.file === 0) {
        this.$message.error(this.$t('GOOD2.Tip8'))
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
    },
    // 下载模板
    download () {
      this.export2Excel()
    },
    export2Excel () {
      require.ensure([], () => {
        const { exportJsonToexcel } = require('@/vendor/Export2Excel') // 这里必须使用绝对路径
        const tHeader = ['商品名称', '类型', '价格', '单位', '库存', '商品简介', '商品描述', '所属国家语言'] // 导出的表头名
        // const filterVal = ['date', 'name', 'address'] // 导出的表头字段名
        // const list = this.tableData // 你要导出的数据
        const data = this.formatJson(null, [])
        exportJsonToexcel(tHeader, data, 'GoodsList') // 导出的表格名称，根据需要自己命名
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
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
    .btn{
      width: 100px;
      margin-left: 5px;
      height: 30px;
      line-height: 30px;
    }
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
