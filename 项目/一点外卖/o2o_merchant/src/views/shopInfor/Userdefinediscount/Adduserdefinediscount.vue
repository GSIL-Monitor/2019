<template>
    <div class="adduserdefinecost container">
         <!-- 标题 -->
        <div class="subTitleTop">
            <span>{{ $t("NAV2_22.T2") }}</span>
        </div>
        <div class="content">
            <el-form ref="form" :model="form" label-width="140px">
                <el-form-item :label="$t('NAV2_22.Lab2')">
                    <el-input v-model="form.discountName" placeholder="如10周年店庆"></el-input>
                </el-form-item>
                <el-form-item :label="$t('NAV2_22.Lab3')">
                    <el-radio-group v-model="form.discountCategory">
                        <el-radio :label="1">{{ $t("NAV2_22.Lab4") }}</el-radio>
                        <el-radio :label="2">{{ $t("NAV2_22.Lab5") }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="$t('NAV2_22.Lab6')">
                    <el-select v-model="form.discountWay">
                    <el-option :label="$t('NAV2_22.Lab7')" :value="$t('NAV2_22.Lab7')"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('NAV2_22.Lab8')">
                    <el-input v-model.number="form.constant"></el-input>
                </el-form-item>
                <el-form-item :label="$t('NAV2_22.Lab9')" class="time">
                  <el-date-picker
                    v-model="value"
                    value-format="yyyy-MM-dd HH:hh"
                    type="datetimerange"
                    range-separator="-"
                    :start-placeholder="$t('NAV2_22.Lab10')"
                    :end-placeholder="$t('NAV2_22.Lab11')">
                  </el-date-picker>
                </el-form-item>
                <el-form-item :label="$t('NAV2_22.Lab12')">
                    <el-select v-model="form.shoplistShow">
                    <el-option :label="$t('NAV2_22.NO')" :value="1"></el-option>
                    <el-option :label="$t('NAV2_22.YES')" :value="0"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <p class="button"><button class="btn" @click="onSubmit">{{ $t("BTN.Sub") }}</button></p>
        </div>
    </div>
</template>

<script>
import { addBusDiscountsDefined, queryOneBusDiscountsDefined, updBusDiscountsDefined } from '@/api/index.js'
export default {
  computed: {
    time () {
      return this.value[0] + '-' + this.value[1]
    }
  },
  data () {
    return {
      value: null,
      checked: null,
      id: null, // 单个自定义id
      form: {
        busShopId: null,
        actTime: null,
        balanceChoose: null,
        computeWay: null,
        constant: null,
        discountCategory: null,
        discountName: null,
        discountWay: null,
        discountsNum: null,
        merchantDue: null,
        orderCategory: null,
        shoplistShow: null,
        userRange: null
      }
    }
  },
  mounted () {
    // 获取单个自定义优惠信息
    this.id = this.$route.params.id
    // id存在时为编辑，先查询单个自定义的信息赋值给表单
    if (this.id) {
      queryOneBusDiscountsDefined(this.id).then(res => {
        console.log(res)
        if (!res.code && res.data) {
          this.form = res.data
          let timer = res.data.actTime
          this.value = timer.split('至')
        }
      })
    }
  },
  methods: {
    onSubmit () {
      // 获取店铺ID
      this.form.busShopId = this.LS.get('shopId')
      //   处理时间
      this.form.actTime = this.time

      if (!this.id) {
        addBusDiscountsDefined(this.form).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.$router.push({ name: 'Userdefinediscount' })
          }
        })
      } else {
        this.form.id = this.id
        updBusDiscountsDefined(this.form).then(res => {
        // 修改
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.$router.push({ name: 'Userdefinediscount' })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.adduserdefinecost {
  height: 837px;
  .content {
    padding: 0 300px;
    margin-top: 60px;
    color: #606266;
  }
  .button {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
