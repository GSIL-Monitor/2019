<template>
    <div class="addCoupon">
        <div class="subTitleTop">
            <span v-if="!form.id">添加优惠券</span>
            <span v-if="form.id">编辑优惠券</span>
        </div>
        <div class="main">
            <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="选择优惠券">
                <el-select v-model="form.sysCouponId">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品分值">
                <el-input v-model.number="form.buyIntegral"></el-input>
            </el-form-item>
            <el-form-item label="商品状态">
                <el-select v-model="form.status">
                <el-option label="上架" :value="0"></el-option>
                <el-option label="下架" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品库存">
                <el-input v-model.number="form.inventory"></el-input>
            </el-form-item>
            <el-form-item label="商品详情">
                <el-input type="textarea" v-model="form.detail"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { integral } from '@/api/index.js'
export default {
  data () {
    return {
      form: {
        buyIntegral: '',
        detail: '',
        inventory: '',
        status: '',
        sysCouponId: '',
        language: '1'
      },
      shop: true,
      options: []
    }
  },
  mounted () {
    this.init()
    if (this.$route.query) {
      this.form = this.$route.query
      console.log(this.$route.query)
      // this.form.buyIntegral = this.$route.query
    }
  },
  methods: {
    // 积分兑换的优惠卷下拉下列列表查询
    init () {
      integral.queryVirConponList().then(res => {
        this.options = res
      })
    },
    onSubmit () {
      this.check()
      if (this.stop) {
        if (this.form.id) {
          integral.updVirproduct(this.form).then(res => {
            this.$router.push({name: 'Integral'})
          })
        } else {
          integral.addVirproduct(this.form).then(res => {
            this.$router.push({name: 'Integral'})
          })
        }
      }
    },
    check () {
      if (!this.form.buyIntegral || !this.form.inventory || !this.form.sysCouponId || !this.form.status) {
        this.$message({
          message: '请将信息输入完整！',
          type: 'warning'
        })
        this.stop = false
      }
      this.stop = true
    }
  }
}
</script>
<style lang="scss" scoped>
.addCoupon{
    .main{
        width: 870px;
        .el-form{
            width: 460px;
            margin: 60px auto 0;
            .line{
                text-align: center;
            }
        }
    }
}
</style>
<style lang="scss">
.el-button--primary{
    margin: 0 100px;
}
</style>
