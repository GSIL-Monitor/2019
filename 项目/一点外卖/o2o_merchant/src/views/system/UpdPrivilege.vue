<template>
  <div class="addPrivilege container">
    <div class="subTitleTop">
      <span>{{ $t("Privilege.T2") }}</span>
    </div>
    <div class="addBottom">
      <el-form :model="addForm" label-width="100px" class="demo-ruleForm">
        <!-- <el-form-item label="配送员账号 :">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item> -->
        <el-form-item :label="$t('Privilege.Lab7')">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('Privilege.Lab8')">
          <el-input v-model="addForm.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <button class="btn addCateBtn" @click="submitForm">{{ $t("BTN.Add") }}</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { updateCourier } from '@/api/index.js'
export default {
  data () {
    return {
      //   表格数据
      addForm: {
        name: null,
        phone: null,
        busShopId: null
      }
    }
  },
  mounted () {
    // 获取配送员信息
    this.addForm = this.$route.params
  },
  methods: {
    // 提交
    submitForm () {
      this.addForm.busShopId = this.LS.get('shopId')
      updateCourier(this.addForm).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.addForm.name = null
          this.addForm.phone = null
          this.$router.push({ name: 'Privilege' })
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addPrivilege {
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
