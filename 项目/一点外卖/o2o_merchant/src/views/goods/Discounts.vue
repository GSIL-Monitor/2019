<template>
    <div class="discounts container">
        <!-- 标题 -->
        <div class="subTitleTop">
            <span>优惠设置</span>
        </div>
        <div class="addBottom">
            <p class="setIntegral">赠送积分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model.number="setDiscounts.integralPresent" placeholder="设置赠送积分"></p>
            <div class="box1">
                <h4>优惠相关</h4>
                <div class="boxContent">
                    <p>
                        <span>不允许使用优惠券：</span>
                        <el-switch v-model="setDiscounts.coupons" :active-value="1" :inactive-value="0">
                        </el-switch>
                        设置此商品使用优惠券下单是否能抵扣
                    </p>
                    <p>
                        <span>不允许使用积分：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.integral">
                        </el-switch>
                        设置此商品使用积分下单是否能抵扣
                    </p>
                    <p>
                        <span>不允许参与店铺打折：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.joinDiscount">
                        </el-switch>
                        设置是否参与店家打折和自定义优惠
                    </p>
                    <p>
                        <span>不参与起送价计算：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.sendPrice">
                        </el-switch>
                        设置是否参与店铺起送价计算
                    </p>
                </div>
            </div>
            <div class="box2">
                <h4>会员相关</h4>
                <div class="boxContent">
                    <p>
                        <span>开启会员价：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.priceVIP">
                        </el-switch>
                        是否需要会员价
                    </p>
                    <p>
                        <span>此商品只限制会员购买：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.buyVIP">
                        </el-switch>
                        开启表示之后会员可以购买
                    </p>
                    <p>
                        <span>设置有余额的会员：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.balanceVIP">
                        </el-switch>
                        设置只有余额的会员的会员价
                    </p>
                </div>
            </div>
            <div class="box3">
                <h4>限购相关</h4>
                <div class="boxContent">
                    <p>
                        <span>顾客限购数量：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.purchaseQuantity">
                        </el-switch>
                        限制顾客对此商品的购买数量，超出不能购买
                    </p>
                    <p>
                        <span>每单限购数量：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.weekPurchase">
                        </el-switch>
                        限制每单可以购买多少数量
                    </p>
                    <p>
                        <span>商品时间限购：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.timelimitPurchase">
                        </el-switch>
                        只能在限定的时间内购买
                    </p>
                    <p>
                        <span>是否限制最低起购量：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.sendNumber">
                        </el-switch>
                        限制最低起购量
                    </p>
                </div>
            </div>
            <div class="box4">
                <h4>优惠相关</h4>
                <div class="boxContent">
                    <p>
                        <span>开启打折：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.discount">
                        </el-switch>
                        是否开启对商品进行打折
                    </p>
                    <p>
                        <span>单商品按数量进行优惠：</span>
                        <el-switch :active-value="1" :inactive-value="0" v-model="setDiscounts.discounts">
                        </el-switch>
                        是否开启对此商品按数量进行优惠，第二份半价，第三份一元等场景
                    </p>
                </div>
            </div>
            <h5><button @click="submit" class="btn">提交</button></h5>
        </div>
    </div>
</template>

<script>
import { queryBusProductDiscounts, addBusProductDiscounts, updBusProductDiscounts } from '@/api/public.js'
export default {
  data () {
    return {
      id: '',
      setDiscounts: {
        busProductId: null,
        coupons: null,
        integral: null,
        joinDiscount: null,
        sendPrice: null,
        priceVIP: null,
        buyVIP: null,
        balanceVIP: null,
        purchaseQuantity: null,
        weekPurchase: null,
        timelimitPurchase: null,
        sendNumber: null,
        discount: null,
        discounts: null
      },
      fristAdd: true
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // 商品查询
    queryBusProductDiscounts(this.id).then(res => {
      console.log(res)
      if (!res.code) {
        this.setDiscounts = res.data
        this.fristAdd = false
      }
    })
  },
  methods: {
    submit () {
      this.setDiscounts.busProductId = this.id
      if (this.fristAdd) {
        addBusProductDiscounts(this.setDiscounts).then(res => {
          console.log(res)
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.$router.push({ name: 'Goods' })
          }
        })
      } else {
        updBusProductDiscounts(this.setDiscounts).then(res => {
          console.log(res)
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.$router.push({ name: 'Goods' })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.discounts {
    height: 1408px;
    color: #666666;
    .addBottom {
        .setIntegral {
            padding: 0 20px;
            text-align: center;
            height: 109px;
            line-height: 109px;
            input {
                width: 264px;
                height: 30px;
                border: 1px solid rgba(212, 212, 212, 1);
                border-radius: 2px;
                text-indent: 1em;
            }
        }
        > div {
            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
            width: 1020px;
            margin: 0 auto 30px;
            padding: 0 20px;
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
                    width: 180px;
                }
            }
        }
        .box1 {
            height: 290px;
        }
        .box2 {
            height: 239px;
        }
        .box3 {
            height: 290px;
        }
        .box4 {
            height: 185px;
        }
        h5 {
            text-align: center;
        }
    }
}
</style>
<style>
.discounts .el-switch {
    margin-right: 10px;
}
</style>
