<template>
  <div class="orderway container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("NAV4.T") }}</span>
    </div>
    <div class="content">
      <p>
        <span>{{ $t("NAV4.T1") }}</span>
        <el-switch @change="closeWay()" v-model="setDiscounts.isOrder" :active-value="1" :inactive-value="0">
        </el-switch>
        {{ $t("NAV4.Txt1") }}
      </p>
      <p>
        <span>{{ $t("NAV4.T2") }}</span>
        <el-switch :disabled="open" v-model="setDiscounts.isEmailOrder" :active-value="2" :inactive-value="0">
        </el-switch>
        {{ $t("NAV4.Txt2") }}
      </p>
      <p>
        <span>{{ $t("NAV4.T3") }}</span>
        <el-switch :disabled="open" v-model="setDiscounts.isWechatOrder" :active-value="3" :inactive-value="0">
        </el-switch>
        {{ $t("NAV4.Txt3") }}
      </p>
      <p>
        <span>{{ $t("NAV4.T4") }}</span>
        <el-switch :disabled="open" v-model="setDiscounts.isAirprintOrder" :active-value="4" :inactive-value="0">
        </el-switch>
        {{ $t("NAV4.Txt4") }}
      </p>
      <p>
        <span>{{ $t("NAV4.T5") }}</span>
        <el-switch :disabled="open" v-model="setDiscounts.isBackRemind" :active-value="5" :inactive-value="0">
        </el-switch>
        {{ $t("NAV4.Txt5") }}
      </p>
      <h5><button class="btn" @click="submit">{{ $t("BTN.Sub2") }}</button></h5>
    </div>
  </div>
</template>

<script>
import { queryNusOrderWay, updNusOrderWay } from '@/api/index.js'
export default {
  computed: {
    open () {
      return !this.setDiscounts.isOrder
    }
  },
  data () {
    return {
      setDiscounts: {
        isOrder: null, // 开启接单
        isAirprintOrder: null,
        isBackRemind: null,
        isEmailOrder: null,
        isWechatOrder: null
      },
      busShopId: null
    }
  },
  mounted () {
    this.busShopId = this.LS.get('shopId')
    queryNusOrderWay(this.busShopId).then(res => {
      this.setDiscounts = res.data
    })
  },
  methods: {
    submit () {
      updNusOrderWay(this.setDiscounts).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }
      })
    },
    closeWay () {
      if (this.open) {
        this.setDiscounts.emailOrderReceiving = null
        this.setDiscounts.print = null
        this.setDiscounts.remind = null
        this.setDiscounts.vxOrderReceiving = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.orderway {
    height: 805px;
    .content {
        color: #666;
        padding: 0 270px;
        margin-top: 35px;
        p {
            margin-bottom: 25px;
            span {
                display: inline-block;
                width: 120px;
            }
        }
        h5 {
            text-align: center;
            margin-top: 60px;
        }
    }
}
</style>
<style>
.el-switch {
    margin-right: 20px;
}
</style>
