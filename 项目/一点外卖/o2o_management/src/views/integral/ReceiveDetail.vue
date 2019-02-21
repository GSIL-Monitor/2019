<template>
  <div class="addGoods">
    <div class="subTitleTop">
      <span>领取详情编辑</span>
    </div>
    <div class="main">
      <ul>
        <li>
          <img
            :src="form.pic"
            alt=""
            v-if="form.pic"
          >
          <p>
            <span><em>{{form.name}}</em></span>
            <span>{{form.sioBuyIntetral}}积分</span>
          </p>
        </li>
        <li>
            <span>
                兑换人：
            </span>{{form.userName?form.userName:'暂未登记'}}
        </li>
        <li>
            <span>
                联系电话：
            </span>{{form.userPhone}}
        </li>
        <li>
            <span>
                联系地址：
            </span>{{form.userAddress}}
        </li>
        <li>
            <span>
                订单状态：
            </span>{{form.status?'已发货':'未处理'}}
        </li>
        <li>
            <el-button type="primary" @click="$router.push({name:'ReceiveList'})">返回</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  mounted () {
    this.form = this.$route.query
  }
}
</script>
<style lang="scss" scoped>
.addGoods {
  .main {
    width: 870px;
    margin-left: 200px;
    margin-top: 60px;
    li{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #444;
        span{
            display: inline-block;
            width: 180px;
        }
        img{
          width: 68px;
          height: 68px;
          color: #666;
        }
        em{
          font-weight: bold;
          font-size: 26px;
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
.el-button--primary {
  margin: 0 100px;
}
</style>
