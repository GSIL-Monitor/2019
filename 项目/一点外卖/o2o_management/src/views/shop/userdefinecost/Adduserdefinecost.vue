<template>
    <div class="adduserdefinecost container">
        <!-- 标题 -->
        <div class="subTitleTop">
            <span>自定义费用编辑</span>
        </div>
        <div class="main">
            <el-form ref="form" :model="form" label-width="140px">
                <el-form-item label="费用名称">
                    <el-input v-model="form.costName"></el-input>
                </el-form-item>
                <el-form-item label="收取方式">
                    <el-select v-model="form.takeWay" placeholder="按单收取">
                        <el-option label="按单收取" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="计算方式">
                    <el-select v-model="form.computeWay" placeholder="按固定额收取">
                        <el-option label="按固定额收取" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="收取金额">
                    <el-input v-model="form.takeMoeny" class="inputstyle"></el-input>
                </el-form-item>
                <el-form-item label="费用封顶">
                    <el-input v-model="form.costTop" class="inputstyle"></el-input>
                </el-form-item>
                <el-form-item label="满多少钱免此费用">
                    <el-input v-model.number="form.fullMinus" class="inputstyle"></el-input>
                </el-form-item>
                <el-form-item label="会员免此费用">
                    <el-select v-model="form.vipFree" placeholder="免">
                        <el-option label="免" :value="0"></el-option>
                        <el-option label="要" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应用于那种订单">
                    <template>
                        <el-checkbox-group v-model="form.orderCategory">
                            <el-checkbox label="外送订单">外送订单</el-checkbox>
                            <el-checkbox label="店内订单">店内订单</el-checkbox>
                            <el-checkbox label="外送预约订单">外送预约订单</el-checkbox>
                            <el-checkbox label="店内预约订单">店内预约订单</el-checkbox>
                            <el-checkbox label="买卖订单">买卖订单</el-checkbox>
                        </el-checkbox-group>
                    </template>
                </el-form-item>
                <el-form-item label="打折对象">
                    <el-radio-group v-model="form.discountCategory">
                        <el-radio :label="1">普通用户</el-radio>
                        <el-radio :label="2">普通会员</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="使用范围">
                    <template>
                        <el-checkbox-group v-model="form.useRange">
                            <el-checkbox label="在线支付">在线支付</el-checkbox>
                            <el-checkbox label="余额支付">余额支付</el-checkbox>
                            <el-checkbox label="货到付款">货到付款</el-checkbox>
                        </el-checkbox-group>
                    </template>
                </el-form-item>
                <el-form-item label="收费时间段选择">
                    <el-time-select
                        placeholder="开始"
                        v-model="startTime"
                        :picker-options="{
                        start: '00:00',
                        step: '00:5',
                        end: '24:00'
                        }"
                        style="width:100px"
                        class="timeBox time"
                        ></el-time-select>
                        <el-time-select
                        placeholder="结束"
                        v-model="endTime"
                        :picker-options="{
                        start: '00:00',
                        step: '00:5',
                        end: '24:00',
                        minTime: startTime
                        }"
                        style="width:100px"
                        class="timeBox time"
                        ></el-time-select>
                </el-form-item>
                <el-form-item label="每日收取次数">
                    <el-input v-model="form.discountsNum" class="inputstyle"></el-input>
                </el-form-item>
                <el-form-item label="商家承担">
                    <el-input v-model.number="form.merchantDue" class="inputstyle"></el-input> %
                </el-form-item>
            </el-form>
            <p class="button"><el-button type="primary" @click="onSubmit">{{ $t("BTN.Sub") }}</el-button></p>
        </div>
    </div>
</template>

<script>
import { shop } from '@/api/index.js'
export default {
  computed: {
    time () {
      return this.startTime + '-' + this.endTime
    }
  },
  data () {
    return {
      startTime: null,
      endTime: null,
      id: null, // 单个自定义id
      form: {
        busShopId: null,
        computeWay: null,
        costName: null,
        costTop: null,
        discountCategory: null,
        discountsNum: null,
        fullMinus: null,
        merchantDue: null,
        orderCategory: [],
        priceTimeSeg: null,
        takeMoeny: null,
        takeWay: null,
        useRange: [],
        vipFree: null
      }
    }
  },
  mounted () {
    // 获取单个自定义优惠信息
    this.id = this.$route.query.id ? this.$route.query.id : null
    if (this.id) {
      // id存在时为编辑，先查询单个自定义的信息赋值给表单
      shop.queryOneBusDefinedCost(this.id).then(res => {
        this.form = res
        this.form.orderCategory = this.form.orderCategory.split(',')
        this.form.useRange = this.form.useRange.split(',')
        this.startTime = this.form.priceTimeSeg.split('-')[0]
        this.endTime = this.form.priceTimeSeg.split('-')[1]
      })
    } else {
      this.form.busShopId = this.$route.query.busShopId
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$route.query)
      this.form.priceTimeSeg = this.time
      this.form.orderCategory = this.form.orderCategory.join(',')
      this.form.useRange = this.form.useRange.join(',')
      if (!this.id) {
        shop.addBusDefinedCost(this.form).then(res => {
          this.$message({
            message: 'success',
            type: 'success'
          })
          this.$router.push({ name: 'Userdefinecost', query: { busShopId: this.form.busShopId } })
        })
      } else {
        this.form.id = this.id
        shop.updaBusDefinedCost(this.form).then(res => {
        // 修改
          this.$message({
            message: 'success',
            type: 'success'
          })
          this.$router.push({ name: 'Userdefinecost', query: { busShopId: this.form.busShopId } })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.adduserdefinecost {
  background-color: #fff;
.main {
    padding: 30px 150px 60px 250px;
    margin-top: 20px;
    color: #606266;
  }
  .button {
    margin-top: 30px;
    margin-bottom: 60px;
    text-align: center;
  }
  .inputstyle{
      width:50%
  }
}
</style>
<style lang="scss">
.adduserdefinecost {
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
  .el-checkbox + .el-checkbox {
    margin-left: 18px;
  }
  .el-date-editor .el-range__icon {
    line-height: 25px;
  }
  .el-date-editor .el-range-separator {
    padding: 0;
    line-height: 22px;
  }
  .el-radio__label{
      font-size: 16px;
  }
}
</style>
