<template>
  <div class="addGoods container">
    <!-- 标题 -->
    <div class="addTop subTitleTop">
      <span>{{ $t("GOOD2.T") }}</span>
    </div>
    <div class="addBottom">
      <el-form :model="addForm" ref="addForm" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('GOOD2.Cate')">
          <el-select v-model="addForm.productCategoryId" :placeholder="$t('GOOD2.Place1')">
            <el-option v-for="item in cateList" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
          <em>*</em>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Name')">
          <el-input v-model="addForm.name"></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal1')">
          <el-input v-model.number="addForm.price"></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal2')">
          <el-input v-model.number="addForm.oldPrice"></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal3')">
          <el-input v-model="addForm.unit" :placeholder="$t('GOOD2.Place2')"></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal4')">
          <el-input v-model.number="addForm.inventory" placeholder="1000"></el-input>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal5')">
          <el-input v-model="addForm.intro"></el-input>
        </el-form-item>
        <el-form-item :label="$t('GOOD2.Tal6')">
          <el-input type="textarea" v-model="addForm.description"></el-input>
        </el-form-item>
<!--         <el-form-item :label="$t('GOOD2.Tal7')">
          <el-upload
                    class="avatar-uploader"
                    :action="uplaadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="editorItem.categoryImg" :src="editorItem.categoryImg" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item> -->
        <el-form-item :label="$t('GOOD2.Tal7')">
            <div class="upload">
              <!-- 图片展示 -->
              <div class="cha" v-show="(this.addForm.picture)">
                <!-- 删除icon -->
                <div class="del">
                  <i class="el-icon-delete" @click="delImg"></i>
                </div>
                <img :src="this.addForm.picture">
              </div>
              <!-- 图片上传控件 -->
              <div class="load">
                <input type="file" name id="form" @change="uploadIMG">
                <i class="el-icon-picture icon">
                  <p>{{ $t("GOOD2.AddImg") }}</p>
                </i>
              </div>
            </div>
        </el-form-item>
      </el-form>
      <div class="Btn"><button
          @click="submitForm"
          class="btn"
        >{{ $t("BTN.Sub") }}</button></div>
    </div>
  </div>
</template>

<script>
import { upload, addbusProduct } from '@/api/public.js'
import { querybusProductCategory } from '@/api/index.js'
export default {
  props: ['uploadUrl'],
  data () {
    return {
      cateList: [],
      //   表格数据
      addForm: {
        busShopId: null,
        description: null,
        cncode: null,
        enteringTime: null,
        intro: null,
        inventory: null,
        merchantShopId: null,
        name: null,
        peculiarity: null,
        price: null,
        picture: null,
        type: null,
        unit: null,
        language: 1,
        productCategoryId: null,
        categoryName: null,
        status: 1
      },
      //  上传图片
      picavalue: null
    }
  },
  mounted () {
    this.addForm.busShopId = this.LS.get('shopId')
    // 商品分类查询
    let params = {
      busShopId: this.addForm.busShopId,
      pageNo: 1,
      pageSize: 10000
    }
    querybusProductCategory(params).then(res => {
      this.cateList = res.data.query
    })
  },
  methods: {
    // 限制图片上传大小等
    uploadIMG (e) {
      console.log(111)
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.picavalue = files[0]
      // console.log(this.picavalue.size / 1024)
      if (this.picavalue.size / 1024 > 5000) {
        this.$message({
          message: this.$t('GOOD2.Tip2'),
          type: 'warning'
        })
      } else {
        this.imgPreview(this.picavalue)
        // console.log(this.picavalue)
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
          this.addForm.picture = fileUrl
        }
      })
    },
    // 删除图片事件
    delImg () {
      this.addForm.picture = null
    },
    // 提交
    submitForm () {
      if (!this.addForm.productCategoryId) {
        this.$message.error(this.$t('GOOD2.Tip3'))
        return false
      }
      if (!this.addForm.name) {
        this.$message.error(this.$t('GOOD2.Tip4'))
        return false
      }
      if (!this.addForm.price) {
        this.$message.error(this.$t('GOOD2.Tip5'))
        return false
      }
      if (!this.addForm.oldPrice) {
        this.$message.error(this.$t('GOOD2.Tip6'))
        return false
      }
      if (!this.addForm.unit) {
        this.$message.error(this.$t('GOOD2.Tip7'))
        return false
      }
      this.cateList.forEach(element => {
        if (element.id === this.addForm.productCategoryId) {
          this.addForm.categoryName = element.name
        }
      })
      addbusProduct(this.addForm).then(res => {
        console.log(res)
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.$router.push({ name: 'Goods' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addGoods {
  .addBottom {
    height: 840px;
    padding: 0 350px;
    margin-top: 30px;
    .addGoodsBtn {
      margin-left: 40px;
    }
    em {
      color: #ff4646;
      font-size: 16px;
      margin-left: 10px;
    }
    .Btn{
      text-align: center;
      margin-top: 30px;
    }
  }
  // 图片上传
  .upload {
    position: relative;
    width: 200px;
    height: 160px;
    // 图片展示
    .cha {
      position: absolute;
      top: 0;
      left: 0;
      width: 108px;
      height: 108px;
      overflow: hidden;
      box-sizing: border-box;
      z-index: 99;
      .del {
        position: absolute;
        top: 0;
        right: 10px;
        opacity: 0;
        z-index: 3;
        border: none;
        color: #fff;
        font-size: 18px;
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
</style>
<style lang="scss">
.addGoods {
  .el-form-item {
    margin-bottom: 12px;
  }
}
</style>
