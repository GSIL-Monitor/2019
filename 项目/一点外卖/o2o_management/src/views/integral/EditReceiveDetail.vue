<template>
    <div class="addGoods">
        <div class="subTitleTop">
            <span>领取详情编辑</span>
        </div>
        <div class="main">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item>
                <div class="img">
                    <img :src="form.pic" alt="">
                    <p>
                        <span>{{form.name}}</span>
                        <span>{{form.integration}}</span>
                    </p>
                </div>
            </el-form-item>
            <el-form-item label="兑换人">
                <el-input v-model="form.userName" disabled></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="form.userPhone"></el-input>
            </el-form-item>
            <el-form-item label="联系地址">
                <el-input v-model="form.userAddress"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.status">
                    <el-option label="未处理" :value="0"></el-option>
                    <el-option label="已发货" :value="1"></el-option>
                </el-select>
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
      query: {
        id: '',
        productType: ''
      },
      form: {
        id: '',
        name: '',
        pic: '',
        productType: '',
        sioBuyIntetral: '',
        status: '',
        sysCouponName: '',
        userAddress: '',
        userName: '',
        userPhone: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.form.productType = this.form.productName
      integral.updateReceiveawardInfo(this.form).then(res => {
        // this.$router.push({name: 'Integral'})
      })
    }
  },
  mounted () {
    this.form = this.$route.query
  }
}
</script>
<style lang="scss" scoped>
.addGoods{
    .main{
        width: 870px;
        .el-form{
            width: 460px;
            margin: 60px auto 0;
            .line{
                text-align: center;
            }
        }
        li:first-child{
        display: flex;
            p{
                span{
                margin-right: 20px;
                }
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
