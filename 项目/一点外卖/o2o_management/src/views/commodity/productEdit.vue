<template>
    <div class="productEdit">
        <div class="subTitleTop">
            <span>商品信息编辑</span>
        </div>
        <div class="main">
            <el-form
            ref="form"
            :model="form"
            label-width="120px"
            >
                <!-- <el-form-item :label="$t('PRODUCT.EDITFORM.BUSSHOPID')">
                    <el-input v-model="form.busShopId"></el-input>
                </el-form-item> -->
                <el-form-item :label="$t('PRODUCT.EDITFORM.CATEGORYNAME')">
                    <el-input v-model="form.categoryName"></el-input>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.DESCRIPTION')">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <!-- <el-form-item :label="$t('PRODUCT.EDITFORM.ID')">
                    <el-input v-model="form.id"></el-input>
                </el-form-item> -->
                <el-form-item :label="$t('PRODUCT.EDITFORM.INTRO')">
                    <el-input v-model="form.intro"></el-input>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.INVENTORY')">
                    <el-input v-model="form.inventory"></el-input>
                </el-form-item>
                <!-- <el-form-item :label="$t('PRODUCT.EDITFORM.ISDELETED')">
                    <el-input v-model="form.isDelete"></el-input>
                </el-form-item> -->
                <el-form-item :label="$t('PRODUCT.EDITFORM.NAME')">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.OLDPRICE')">
                    <el-input v-model="form.oldPrice"></el-input>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.PAYNUMBER')">
                    <el-input v-model="form.payNumber"></el-input>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.PRICTURE')">
                    <!-- <el-input v-model="form.picture"></el-input> -->
                    <el-upload
                        class="avatar-uploader"
                        :action="form.picture"
                        :show-file-list="false">
                        <img v-if="form.picture" :src="form.picture" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.PRICE')">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <!-- <el-form-item :label="$t('PRODUCT.EDITFORM.PRODUCTCATEGORYID')">
                    <el-input v-model="form.productCategoryId"></el-input>
                </el-form-item> -->
                <el-form-item :label="$t('PRODUCT.EDITFORM.STATUS')">
                    <el-select v-model="form.status">
                      <el-option v-for="item in status"
                        :label="item.label"
                        :value="item.value"
                        :key="item.index"
                      ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('PRODUCT.EDITFORM.UNIT')">
                    <el-input v-model="form.unit"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <el-button type="primary"  @click="$router.push({name:'product'})">返回</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { busProductEdit } from '@/api/index'
export default {
  data () {
    return {
      form: {
        busShopId: '', // 店铺 id
        categoryName: '', // 分类名称
        description: '', // 商品描述
        id: '', // 商品 id
        intro: '', // 商品简介
        inventory: '', // 商品库存
        isDelete: '', // 是否删除（1，不删除。0，已删除）
        name: '', // 商品名称
        oldPrice: '', // 商品原价
        payNumber: '', // 商品被购买次数
        picture: '', // 商品图片
        price: '', // 商品价格
        productCategoryId: '', // 商品分类id
        unit: '' //	商品单位
      },
      status: [{
        label: '上架', value: 1
      },
      {label: '下架', value: 2}
      ]
    }
  },
  methods: {
    init () {
      this.form = this.$route.query
      this.form.status = Number(this.form.status)
    },
    submit () {
      this.fromCheck()
      busProductEdit(this.form).then(res => {
        this.$router.push({ name: 'product' })
      })
    },
    fromCheck () {
      if (this.form.id === '') {
        this.$message({
          message: '请将信息填写完整',
          type: 'warning'
        })
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.productEdit {
  .main {
    width: 870px;
    .el-form {
      width: 460px;
      margin: 60px auto 0;
      .line {
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss">
.productEdit {
  .el-button--primary {

  }
  .el-upload {
    border: 1px dashed #bbb;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #bbb;
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
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
