<template>
    <div class="setupshop container">
        <!-- 标题 -->
        <div class="subTitleTop">
            <span>{{ $t("NAV7.T") }}</span>
        </div>
        <div class="addBottom">
            <div class="box1">
                <h4>{{ $t("NAV7.T1") }}</h4>
                <div class="boxContent">
                    <p>
                        {{ $t("NAV7.T2") }}
                        <router-link class="setBtn" :to="{name:'SetTemplate'}">{{ $t("NAV7.Txt2") }}</router-link>
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T3") }}</span>
                        <el-switch :active-value='0' :inactive-value='1' v-model="setDiscounts.isHeadReShoplist">
                        </el-switch>
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T4") }}</span>
                        <el-switch  :active-value='0'  :inactive-value='1' v-model= setDiscounts.isSearchBox>
                        </el-switch>
                        {{ $t("NAV7.Txt4") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T5") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isShowProductimg">
                        </el-switch>
                        {{ $t("NAV7.Txt6") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T4") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isVipEnter">
                        </el-switch>
                        {{ $t("NAV7.Txt6") }}
                    </p>
                    <p>
                        {{ $t("NAV7.Describe") }}
                        <input type="text" v-model="setDiscounts.describe" style="width:430px" placeholder="描述">
                        <i>{{ $t("NAV7.Txt8") }}</i>
                    </p>
                    <p>
                        {{ $t("NAV7.T7") }}&nbsp;&nbsp;&nbsp;
                        <template>
                          <el-radio-group v-model="setDiscounts.sendWay">
                          <el-radio :label='1'>{{ $t("NAV7.Txt71") }}</el-radio>
                          <el-radio :label='2'>{{ $t("NAV7.Txt72") }}</el-radio>
                          </el-radio-group>
                        </template>
                        <i> &nbsp;&nbsp;&nbsp;{{ $t("NAV7.Txt8") }}</i>
                    </p>
                    <p>
                        {{ $t("NAV7.T8") }}
                        <input type="text" v-model="setDiscounts.shopLabel" placeholder="店铺标签">
                        <i>{{ $t("NAV7.Txt8") }}</i>
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T9") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isNoshoplistShow">
                        </el-switch>
                        {{ $t("NAV7.Txt9") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T10") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isLookLocation">
                        </el-switch>
                        {{ $t("NAV7.Txt10") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T11") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isReminder">
                        </el-switch>
                        {{ $t("NAV7.Txt11") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T12") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.cancelOrder">
                        </el-switch>
                        {{ $t("NAV7.Txt12") }}
                    </p>
                </div>
            </div>
            <div class="box3">
                <h4>{{ $t("NAV7.Tt") }}</h4>
                <div class="boxContent">
                    <p>
                        <span>{{ $t("NAV7.T13") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isOrderAffirm">
                        </el-switch>
                        {{ $t("NAV7.Txt13") }}
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T14") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.noOrderDeal"></el-switch>
                        {{ $t("NAV7.Txt14") }}
                    </p>
                    <p>
                        <span> {{ $t("NAV7.T15") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isUnpaidOrder">
                        </el-switch>
                        {{ $t("NAV7.Txt15") }}
                    </p>
                    <p>
                        <span> {{ $t("NAV7.T16") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isOutOrder">
                        </el-switch>
                        {{ $t("NAV7.Txt16") }}
                        <em>{{ $t("NAV7.Txt17") }}</em>
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T17") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isInOrder">
                        </el-switch>
                       {{ $t("NAV7.Txt16") }}
                        <em>{{ $t("NAV7.Txt17") }}</em>
                    </p>
                    <p>
                        <span>{{ $t("NAV7.T18") }}</span>
                        <el-switch  :active-value='0' :inactive-value='1' v-model="setDiscounts.isNoStock">
                        </el-switch>
                        {{ $t("NAV7.Txt18") }}
                    </p>
                </div>
            </div>
            <h5><button class="btn" @click="submit">{{ $t("BTN.Sub2") }}</button></h5>
        </div>
    </div>
</template>

<script>
import { busShopSetQuery, busShopSetUpdate } from '@/api/index.js'
export default {
  data () {
    return {
      setDiscounts: {
        busShopId: null,
        describe: null,
        isHeadReShoplist: null,
        isInOrder: null,
        isLookLocation: null,
        isNoStock: null,
        isNoshoplistShow: null,
        isOrderAffirm: null,
        isOutOrder: null,
        isSearchBox: null,
        isShowProductimg: null,
        isUnpaidOrder: null,
        isVipEnter: null,
        noOrderDeal: null,
        sendWay: null,
        shopLabel: null,
        isReminder: null,
        cancelOrder: null
      }
    }
  },
  mounted () {
    this.busShopId = this.LS.get('shopId')
    //   查询店铺设置
    busShopSetQuery(this.busShopId).then(res => {
      this.setDiscounts = res.data
    })
  },
  methods: {
    // 修改或添加设置
    submit () {
      busShopSetUpdate(this.setDiscounts).then(res => {
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
.setupshop {
  color: #666;
  .addBottom {
    margin-top: 42px;
    > div {
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
      width: 1020px;
      margin: 0 auto 30px;
      padding: 0 20px;
      .setBtn {
        display: inline-block;
        width: 120px;
        height: 36px;
        line-height: 36px;
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
      p {
        margin: 28px;
        span {
          display: inline-block;
          width: 210px;
        }
        // 输入框
        input {
          width: 264px;
          height: 30px;
          text-indent: 1em;
          margin-right: 10px;
          color: #666;
        }
        // 注释
        i {
          color: #aaa;
        }
        // 强调
        em {
          color: #ff4646;
          display: block;
          padding-left: 229px;
          margin-left: 40px;
          margin-top: 5px;
        }
      }
    }
    .box1 {
      height: 720px;
    }
    .box3 {
      height: 444px;
    }
    h5 {
      text-align: center;
    }
  }
  .btn {
    margin-top: 30px;
    margin-bottom: 60px;
  }
}
</style>
<style lang="scss">
.setupshop {
  .el-radio__label {
    font-size: 15px;
  }
  .el-radio + .el-radio {
    margin-left: 10px;
    font-size: 14px;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #00b1ff;
  }
}
</style>
