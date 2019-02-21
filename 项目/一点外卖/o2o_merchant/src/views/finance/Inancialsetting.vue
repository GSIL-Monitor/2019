<template>
    <div class="inancialsetting container">
        <!-- 标题 -->
        <div class="subTitleTop">
            <span>{{ $t("MOENY.T") }}</span>
        </div>
        <div class="content">
            <h5>{{ $t("MOENY.Txt1") }}</h5>
            <el-radio-group v-model="form.moneyType">
                <el-radio :label="2">{{ $t("MOENY.USD") }}</el-radio>
                <!-- <el-radio :label="1">{{ $t("MOENY.CNY") }}</el-radio>
                <el-radio :label="3">其他</el-radio> -->
            </el-radio-group>
            <button class="btn" @click="submit">{{ $t("MOENY.Txt2") }}</button>
        </div>
    </div>
</template>

<script>
import { queryCurrency, setCurrency } from '@/api/index.js'
export default {
  data () {
    return {
      form: {
        busUserId: null,
        moneyType: 2
      }
    }
  },
  mounted () {
    this.form.busUserId = this.LS.get('shopId')
    this.setInit()
    queryCurrency(this.form.busUserId).then(res => {
      this.$message({
        message: res.msg,
        type: 'success'
      })
      this.form.moneyType = res.data.moneyType
    })
  },
  methods: {
    setInit () {
      setCurrency(this.form).then(res => {
        if (!res.code) {
          if (this.form.moneyType === 1) {
            this.GLOBAL.setCurrency('¥')
          } else if (this.form.moneyType === 2) {
            this.GLOBAL.setCurrency('$')
          } else {
            this.GLOBAL.setCurrency('')
          }
        }
      })
    },
    submit () {
      this.setInit()
    }
  }
}
</script>

<style lang="scss" scoped>
.inancialsetting {
    height: 805px;
    .content {
        padding-top: 39px;
        text-align: center;
        color: #666;
        h5 {
            margin-bottom: 20px;
        }
        .btn {
            margin-top: 30px;
        }
    }
}
</style>
<style lang="scss">
.inancialsetting {
    .el-radio-group {
        margin: 0 auto;
        width: 110px;
        text-align: left;
        display: flex;
        flex-direction: column;
    }
    .el-radio {
        margin: 13px;
    }
}
</style>
