<template>
  <div class="addCate container">
    <div class="subTitleTop">
      <span>{{ $t("GCate.T3") }}</span>
    </div>
    <div class="addBottom">
      <el-form :model="addForm" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('GCate.Tal2')">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  type="primary" class="btn addCateBtn" @click="submitForm">{{ $t("BTN.Sub") }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { good } from '@/api/index.js'
export default {
  data () {
    return {
      //   表格数据
      addForm: {
        name: null,
        busShopId: null,
        id: null
      }
    }
  },
  mounted () {
    this.addForm.busShopId = this.LS.get('shopId')
    let id = this.$route.query.id
    if (id) {
      this.addForm.id = id
      good.querygetProduct(id).then(res => {
        console.log(res)
        this.addForm.name = res.data.name
      })
    }
  },
  methods: {
    // 提交
    submitForm () {
      console.log(this.query)
      if (this.$route.query.id) {
        console.log(111)
        good.busProductCategoryUpdate(this.addForm).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.addForm.name = null
            this.addForm.status = null
            this.$router.push({ name: 'Sorts' })
          } else {
            this.$message.error(res.msg)
          }
        })
      } else {
        console.log(222)
        good.busProductCategory(this.addForm).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.addForm.name = null
            this.addForm.status = null
            this.$router.push({ name: 'Sorts' })
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.addCate {
  height: 805px;
  .addBottom {
    padding: 40px 360px;
    font-size: 16px;
    color: #666;
    .addCateBtn {
      display: inline-block;
      cursor: pointer;
      margin-left: 30px;
      margin: 40px;
    }
  }
}
</style>
