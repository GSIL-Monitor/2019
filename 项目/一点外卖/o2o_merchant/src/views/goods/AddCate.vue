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
          <span class="btn addCateBtn" @click="submitForm">{{ $t("BTN.Sub") }}</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { busProductCategory, querygetProduct } from '@/api/index.js'
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
    let id = this.$route.params.id
    if (id) {
      this.addForm.id = id
      querygetProduct(id).then(res => {
        this.addForm.name = res.data.name
      })
    }
  },
  methods: {
    // 提交
    submitForm () {
      busProductCategory(this.addForm).then(res => {
        console.log(res)
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
