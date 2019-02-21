<template>
    <div class="distributioncostset container">
         <!-- 标题 -->
        <div class="subTitleTop">
            <span>设置配送费用</span>
        </div>
        <div class="content">
            <el-form ref="form" :model="form" >
                <el-form-item label="预计多少分钟送达：">
                    <input type="text" v-model.number="form.estimatedArrivalTime">
                    外送订单预计多少分钟可以送达（仅用于显示），<em>填0不显示</em>
                </el-form-item>
                <el-form-item label="必须满起送价才能下单：">
                    <el-switch v-model="form.isFullSend" :active-value="1" :inactive-value="0"></el-switch>
                    外送订单是否需要满起送价才能下单
                </el-form-item>
                <el-form-item label="超过营业时间不能下单：">
                    <el-switch v-model="form.isOutTime" :active-value="1" :inactive-value="0"></el-switch>
                    如果超过营业时间用户将无法下单
                </el-form-item>
                <el-form-item label="超过服务范围不能下单：">
                    <el-switch v-model="form.isSubmissionOrder" :active-value="1" :inactive-value="0"></el-switch>
                    如果顾客的配送地址超过了店铺的服务范围，则不允许下单
                </el-form-item>
                <el-form-item label="是否需要外送费：">
                    <el-switch v-model="form.isOutgoingExpenses" :active-value="1" :inactive-value="0"></el-switch>
                    选择是否需要外送费用
                </el-form-item>
                <el-form-item label="外送费用名称：">
                    <input type="text" v-model="form.outgoingExpensesName" placeholder="打包">
                    如：打包费
                </el-form-item>
                <el-form-item label="外送费收取方式：">
                    <el-switch v-model="form.isSingleOrder" :active-value="1" :inactive-value="0"></el-switch>
                    按单个订单收取外送费
                </el-form-item>
                <el-form-item label="外送费计算方式：">
                    <el-switch v-model="form.isDistance" :active-value="1" :inactive-value="0"></el-switch>
                    外送费按订单收取，并按距离计算法费用
                </el-form-item>
                <el-form-item label="收取费用：" >
                    <input class="scopeOfSevice" v-model="form.getFee" type="text" placeholder="2-5,3-6,4-7,5-8">
                    格式为：公里数-外送费。如：2-5表示2公里收{{GLOBAL.currency}}5外送费，多个距离请用<em>英文逗号隔开</em>，如：2-5,3-6,4-7,5-8，距离请按顺序填写。
                </el-form-item>
                <el-form-item label="费用封顶：">
                    <input type="text"  v-model.number="form.topFee">
                    按商品一次性最多收取多少外送费，<em>无封顶请输0</em>
                </el-form-item>
                <el-form-item label="消费满多少免配送费：">
                    <input type="text"  v-model.number="form.manJianFee">
                    <em>不需要请输0</em>
                </el-form-item>
                <el-form-item label="超过多少公里照常收取配送费：">
                    <input type="text"  v-model.number="form.outKilometre">
                    <em>不需要请输0</em>
                </el-form-item>
                <el-form-item label="营销活动配送费：">
                    <template>
                      <el-checkbox-group v-model="isMarketing">
                        <el-checkbox label="1">砍价活动</el-checkbox>
                        <el-checkbox label="2">抢购活动</el-checkbox>
                        <el-checkbox label="3">秒杀活动</el-checkbox>
                        <el-checkbox label="4">拼团活动</el-checkbox>
                      </el-checkbox-group>
                    </template>
                    <em class="delicery">活动订单是否需要配送费，如果需要请选择相应活动。</em>
                </el-form-item>
                <el-form-item label="会员活动配送费：">
                    <el-switch v-model="form.isVip" :active-value="1" :inactive-value="0"></el-switch>
                    是否开启会员免外送费
                </el-form-item>
                <el-form-item label="起送价：">
                    <input type="text"  v-model="form.sendPrice">
                    起送价计算方式，<em>按店铺默认则输入0</em>
                </el-form-item>
            </el-form>
            <h5><button class="btn" @click="submitForm">保存</button></h5>
        </div>
    </div>
</template>

<script>
import { addDeliveryFee, queryDeliveryFee, updDeliveryFee } from '@/api/public.js'
export default {
  data () {
    return {
      isMarketing: [],
      form: {
        busShopId: null,
        estimatedArrivalTime: '0',
        getFee: '2-5,3-6,4-7,5-8',
        isDistance: '0',
        isFullSend: '0',
        isMarketing: '0',
        isOutTime: '0',
        isOutgoingExpenses: '0',
        isSingleOrder: '0',
        isSubmissionOrder: '0',
        isVip: '0',
        language: '1',
        manJianFee: '0',
        outKilometre: '0',
        outgoingExpensesName: null,
        sendPrice: '0',
        topFee: '0'
      },
      // 是否第一次添加
      firstAdd: true
    }
  },
  mounted () {
    this.form.busShopId = this.LS.get('shopId')
    //  配送区域设置查询
    queryDeliveryFee(this.form.busShopId).then(res => {
      if (!res.code) {
        this.form = res.data
        this.isMarketing = this.form.isMarketing.split(',')
        this.firstAdd = false
      }
    })
  },
  methods: {
    submitForm () {
      // 活动多选处理
      this.form.isMarketing = this.isMarketing ? this.isMarketing.join() : '0'
      if (this.firstAdd) {
        addDeliveryFee(this.form).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
          } else {
            this.$message.error(res.msg)
          }
        })
      } else {
        updDeliveryFee(this.form).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
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
.distributioncostset {
  .content {
    margin-top: 20px;
    color: #666;
    input {
      margin-right: 6px;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-indent: 1em;
      color: #666;
    }
    .scopeOfSevice {
      width: 160px;
    }
    em {
      color: #ff4646;
    }
    // 营销活动配送费
    .delicery {
      position: absolute;
      top: 0;
      right: 250px;
    }
  }
  h5{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
  }
}
</style>
<style lang="scss">
.distributioncostset {
  .el-form-item {
    margin-bottom: 15px;
  }
  .el-checkbox + .el-checkbox {
    margin-left: 15px;
  }
  .el-checkbox__label{
    font-size: 14px;

  }
}
</style>
