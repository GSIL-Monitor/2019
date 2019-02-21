<template>
  <div class="scheduledtimeset container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("NAV6.T") }}</span>
    </div>
    <div class="content">
      <div class="content">
        <p>{{ $t("NAV6.T1") }}<input type="text" v-model.number="timeParams.finishTime"> <span>{{ $t("NAV6.Txt4") }}</span></p>
        <p>{{ $t("NAV6.T2") }}<input type="text" v-model.number="timeParams.deliveryTime"> </p>
        <p><span>{{ $t("NAV6.Txt2") }}</span></p>
      </div>
      <p class="p1">{{ $t("NAV6.Txt3") }}</p>
      <p class="p2"><button class="btn" @click="submit">{{ $t("BTN.Sub2") }}</button></p>
    </div>
  </div>
</template>

<script>
import { queryBusTime, updBusTime } from '@/api/index.js'
export default {
  data () {
    return {
      timeParams: {
        busShopId: null,
        deliveryTime: null,
        finishTime: null
      },
      firstAdd: true
    }
  },
  mounted () {
    this.timeParams.busShopId = this.LS.get('shopId')
    // 查询预计时间
    queryBusTime(this.timeParams.busShopId).then(res => {
      if (!res.code && res.data) {
        this.timeParams = res.data
      }
    })
  },
  methods: {
    submit () {
      updBusTime(this.timeParams).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scheduledtimeset {
    height: 765px;
    .content {
        color: #666;
        padding: 40px 120px;
        p {
            span {
                color: #aaa;
            }
            input {
                width: 230px;
                height: 30px;
                margin: 15px 12px;
                text-indent: 16px;
                color: #666;
            }
        }
        .p1 {
            width: 861px;
            color: #ff4646;
            text-align: left;
            margin: 30px auto 60px;
        }
        .p2 {
            text-align: center;
        }
    }
}
</style>
