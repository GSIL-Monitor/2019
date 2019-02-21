<template>
  <div class="addGoods container">
    <!-- 标题 -->
    <div class="addTop subTitleTop">
      <span>商品编辑</span>
    </div>
    <div class="addBottom">
      <el-form
        :model="addForm"
        ref="addForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品分类 :">
          <el-select
            v-model="addForm.productCategoryId"
            placeholder="请选择商品分类"
          >
            <el-option
              v-for="item in cateList"
              :label="item.name"
              :value="item.id"
              :key="item.name"
            ></el-option>
          </el-select>
          <em>*</em>
        </el-form-item>
        <el-form-item label="商品名称 :">
          <el-input
            v-model="addForm.name"
            placeholder="商品名称"
          ></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item label="商品单价 :">
          <el-input
            v-model="addForm.price"
            placeholder="填写价格数字"
          ></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item label="商品原价 :">
          <el-input
            v-model="addForm.oldPrice"
            placeholder="填写价格数字"
          ></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item label="商品单位 :">
          <el-input
            v-model="addForm.unit"
            placeholder="填写单位：个、斤、盒"
          ></el-input>
          <em>*</em>
        </el-form-item>
        <el-form-item label="商品库存 :">
          <el-input
            v-model.number="addForm.inventory"
            placeholder="1000"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品简介 :">
          <el-input
            v-model="addForm.intro"
            placeholder="商品简介"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品描述 :">
          <el-input
            type="textarea"
            v-model="addForm.description"
            placeholder="文本编辑器"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品图片 :">
          <div class="upload">
            <!-- 图片展示 -->
            <div
              class="cha"
              v-show="(this.addForm.picture)"
            >
              <!-- 删除icon -->
              <div class="del">
                <i
                  class="el-icon-delete"
                  @click="delImg"
                ></i>
              </div>
              <img :src="this.addForm.picture">
            </div>
            <!-- 图片上传控件 -->
            <div class="load">
              <input
                type="file"
                name
                id="form"
                @change="uploadIMG"
              >
              <i class="el-icon-picture icon">
                <p>添加图片</p>
              </i>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div class="Btn"><button
          @click="submitForm"
          class="btn"
        >提交</button></div>
    </div>
  </div>
</template>

<script>
import { upload, updbusProduct, selectOneGoods } from '@/api/public.js'
import { querybusProductCategory } from '@/api/index.js'
export default {
  props: ['uploadUrl'],
  data () {
    return {
      id: null,
      cateList: [],
      //   表格数据
      addForm: {
        busShopId: null,
        description: null,
        cncode: null,
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
        status: 1
      },
      //  上传图片
      picavalue: null
    }
  },
  mounted () {
    var _this = this
    this.id = this.$route.query.id
    this.addForm.busShopId = this.LS.get('shopId')
    // 商品分类查询
    let params = {
      busShopId: this.addForm.busShopId,
      pageNo: 1,
      pageSize: 1000000
    }
    querybusProductCategory(params).then(res => {
      this.cateList = res.data.query
    })
    // 单个商品信息查询
    selectOneGoods(this.id).then(res => {
      _this.addForm = res.data
      _this.addForm.categoryCode = parseInt(res.data.categoryName)
    })
  },
  methods: {
    // 限制图片上传大小等
    uploadIMG (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.picavalue = files[0]
      if (this.picavalue.size / 1024 > 5000) {
        this.$message({
          message: '图片过大不支持上传',
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
        this.$message.error('请选择商品分类')
        return false
      }
      if (!this.addForm.name) {
        this.$message.error('请输入商品名称')
        return false
      }
      if (!this.addForm.price) {
        this.$message.error('请输入商品单价')
        return false
      }
      if (!this.addForm.oldPrice) {
        this.$message.error('请输入商品原价')
        return false
      }
      if (!this.addForm.unit) {
        this.$message.error('请输入商品单位')
        return false
      }
      this.cateList.forEach(element => {
        if (element.id === this.addForm.productCategoryId) {
          this.addForm.categoryName = element.name
        }
      })
      updbusProduct(this.addForm).then(res => {
        if (!res.code) {
          this.$message({
            message: '修改成功',
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
    .Btn {
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
