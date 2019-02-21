<template>
  <div class="addCate container">
    <div class="subTitleTop">
      <span>编辑类别</span>
    </div>
    <div class="addBottom">
      <el-form :model="addForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="类别名称 :">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="审核状态 :">
          <el-select v-model="addForm.status" placeholder="审核">
            <el-option label="审核" value="1"></el-option>
            <el-option label="不审核" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <button class="btn addCateBtn" @click="submitForm">提交</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { busProductCategory } from '@/api/index.js'
export default {
  data () {
    return {
      //   表格数据
      addForm: {
        name: null,
        status: null,
        busShopId: null
      }
    }
  },
  mounted () {
    this.addForm.busShopId = this.LS.get('shopId')
  },
  methods: {
    // 提交
    submitForm () {
    //   busProductCategory(this.addForm).then(res => {
    //     console.log(res)
    //     if (!res.code) {
    //       this.$message({
    //         message: '添加成功',
    //         type: 'success'
    //       })
    //       this.addForm.name = null
    //       this.addForm.status = null
    //     }
    //   })
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
      margin-left: 30px;
      margin: 40px;
    }
  }
}
</style>
