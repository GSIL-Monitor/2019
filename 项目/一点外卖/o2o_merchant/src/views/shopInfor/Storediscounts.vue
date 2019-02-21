<template>
  <div class="storediscounts container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{$t("NAV2_2.T")}}</span>
    </div>
    <div class="addBottom">
      <div class="box1">
        <h4>{{$t("NAV2_2.T1")}}</h4>
        <div class="boxContent">
          <p>
            <span>{{$t("NAV2_2.T2")}}：</span>
            <a
              class="setBtn"
              @click="discountsDialogVisible = true"
            >{{ $t("BTN.Set") }}</a>
            {{$t("NAV2_2.Txt1")}}
          </p>
          <p>
            <span>{{$t("NAV2_2.T3")}}：</span>
            <router-link
              class="setBtn"
              :to="{name:'Userdefinediscount'}"
            >{{ $t("BTN.Set") }}</router-link>
            {{$t("NAV2_2.Txt2")}}
          </p>
        </div>
      </div>
      <div class="box1">
        <h4>{{$t("NAV2_2.T4")}}</h4>
        <div class="boxContent">
          <p>
            <span>{{$t("NAV2_2.T5")}}：</span>
            <el-switch
              :active-value="1"
              :inactive-value="0"
              v-model="form.isopenCoupons"
            >
            </el-switch>
            {{$t("NAV2_2.T5")}}
          </p>
          <p>
            <span>{{$t("NAV2_2.T6")}}：</span>
            <el-switch
              :active-value="1"
              :inactive-value="0"
              v-model="form.issendNumber"
            >
            </el-switch>
            {{$t("NAV2_2.T7")}}
          </p>
        </div>
      </div>
      <h5><button
          class="btn submitBtn"
          @click="submit"
        >{{ $t("BTN.Sub") }}</button></h5>
    </div>

    <!-- 店铺打折对话框 -->
    <el-dialog
      :title="$t('NAV2_2.T7')"
      :visible.sync="discountsDialogVisible"
      width="600px"
      center
    >
      <div class="box">
        <div>
          <el-radio
            v-model="radio"
            label="1"
          >{{ $t("NAV2_2.T9") }}</el-radio>
          <el-form
            label-position="left"
            ref="form"
            :model="discounts"
            label-width="80px"
            :disabled="radioDisabled"
          >
            <el-form-item :label="$t('NAV2_2.T9')">
              <el-input
                v-model.number="form.fullMoney"
                placeholder="100"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('NAV2_2.Txt4')">
              <el-input
                v-model.number="form.fullSubtract"
                placeholder="8"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-radio
            v-model="radio"
            label="2"
          >{{ $t("NAV2_2.T10") }}</el-radio>
          <el-form
            :disabled="!radioDisabled"
            label-position="left"
            ref="form"
            :model="discounts"
            label-width="110px"
          >
            <el-form-item :label="$t('NAV2_2.T10')">
              <el-input
                v-model.number="form.fullDiscount"
                placeholder="100"
              ></el-input>
            </el-form-item>
            <el-form-item :label="$t('NAV2_2.T8')">
              <el-input
                v-model.number="form.fullReducedRate"
                placeholder="7.8"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>

      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <button
          class="btn"
          @click="discountsDialogVisible = false"
        >{{ $t("BTN.Back") }}</button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  shopDiscountsQuery,
  addShopDiscounts,
  updShopDiscounts
} from '@/api/index.js'
export default {
  watch: {
    radio: function (newdata) {
      this.radioDisabled = newdata !== '1'
      if (newdata !== '1') {
        this.form.fullMoney = null
        this.form.full_subtract = null
      } else {
        this.form.full_discount = null
        this.form.full_reduced_rate = null
      }
    }
  },
  data () {
    return {
      // 折扣
      radio: null,
      radioDisabled: false,
      discountsDialogVisible: false,
      form: {
        busShopId: null,
        fullMoney: null,
        fullDiscount: null,
        fullReducedRate: null,
        fullSubtract: null,
        isopenCoupons: null,
        issendNumber: null,
        language: '1',
        startBuyNum: null
      },
      discounts: {
        name: ''
      }
    }
  },
  mounted () {
    this.form.busShopId = this.LS.get('shopId')
    //   优惠查询
    shopDiscountsQuery(this.form.busShopId).then(res => {
      if (!res.code) {
        this.form = res.data[0]
        if (res.data[0].fullMoney) {
          this.radio = '1'
        } else if (res.data[0].fullDiscount) {
          this.radio = '2'
        } else {
          this.radio = null
        }
      }
    })
  },
  methods: {
    submit () {
      updShopDiscounts(this.form).then(res => {
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
</script>

<style lang="scss" scoped>
.storediscounts {
  height: 700px;
  color: #666666;
  .addBottom {
    margin-top: 42px;
    > div {
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
      width: 1020px;
      margin: 0 auto 30px;
      padding: 0 20px;
      .setBtn {
        display: inline-block;
        width: 40px;
        height: 20px;
        line-height: 20px;
        margin-right: 10px;
        background: rgba(0, 177, 255, 1);
        border-radius: 3px;
        color: #fff;
        text-align: center;
        font-size: 14px;
      }
    }
    h4 {
      height: 58px;
      line-height: 58px;
      font-size: 18px;
      color: rgba(51, 51, 51, 1);
      font-weight: 500;
      border-bottom: 1px solid #e1e1e1;
    }
    .boxContent {
      padding-top: 10px;
      p {
        margin: 24px;
        span {
          display: inline-block;
          width: 200px;
        }
      }
    }
    .box1 {
      height: 186px;
    }
    h5 {
      text-align: center;
    }
  }
  .submitBtn {
    margin-top: 50px;
  }
  .input1 {
    width: 230px;
    height: 30px;
    margin: 0 15px 0 15px;
    text-indent: 16px;
  }
  // 打折
  .box {
    display: flex;
    justify-content: space-between;
  }
}
</style>
<style lang="scss">
.storediscounts {
  .el-switch {
    margin-right: 10px;
  }
  .box {
    .el-input__inner {
      width: 120px;
    }
    .el-input {
      width: 120px;
    }
    .el-form {
      margin-right: 30px;
      margin-top: 20px;
    }
    .el-radio__label {
      font-size: 16px;
      color: #333;
    }
    .el-form-item__label {
      font-size: 16px;
      color: #333;
    }
  }
}
</style>
