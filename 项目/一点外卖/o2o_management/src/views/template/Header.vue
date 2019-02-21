<template>
    <div class="header">
        <div class="content">
            <div class="header-content">
            <h3>商家中心</h3>
               <div class="operate-content">
                  <span class="store-name">{{name}} | 退出</span>
                  <span class="store-message">消息中心</span>
                  <span class="help-message">帮助中心</span>
               </div>
               </div>
        </div>
             <div class="nav-content">
                    <nav class="navigation-bar">
                           <li  class='hide-menu'>商品中心
                            </li>
                           <li class='hide-menu' @mouseenter='a(1)' @mouseleave='b(1)'>基本信息
                               <el-collapse-transition>
                             <ul  v-show="menuShow===1">
                               <li v-for="message in commdityCon.messages" :key="message.id">{{message.text}}</li>
                             </ul>
                             </el-collapse-transition>
                           </li>
                           <li class='hide-menu' @mouseenter='a(2)' @mouseleave='b(2)'>管理商品
                             <el-collapse-transition>
                             <ul  v-show="menuShow===2" >
                               <li v-for="commdity in commdityCon.commditys" :key="commdity.id">{{commdity.text}}</li>
                             </ul>
                             </el-collapse-transition>
                            </li>
                           <li class='hide-menu' @mouseenter='a(3)' @mouseleave='b(3)'>订单管理
                             <el-collapse-transition>
                             <ul  v-show="menuShow===3" @mouseenter='a(3)' @mouseleave='b(3)'>
                               <li v-for="order in commdityCon.orders" :key="order.id">{{order.text}}</li>
                             </ul>
                             </el-collapse-transition>
                           </li>
                           <li class='hide-menu' @mouseenter='a(4)' @mouseleave='b(4)'>财务管理
                                                          <el-collapse-transition>
                             <ul  v-show="menuShow===4" @mouseenter='a(4)' @mouseleave='b(4)'>
                               <li v-for="finance in commdityCon.finances" :key="finance.id">{{finance.text}}</li>
                             </ul>
                             </el-collapse-transition>
                           </li >
                           <li class='hide-menu' @mouseenter='a(5)' @mouseleave='b(5)'>系统管理
                                                                                       <el-collapse-transition>
                             <ul  v-show="menuShow===5" @mouseenter='a(5)' @mouseleave='b(5)'>
                               <li v-for="system in commdityCon.systems" :key="system.id">{{system.text}}</li>
                             </ul>
                             </el-collapse-transition>
                           </li>
                     </nav>
               </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '沙县小吃',
      menuShow: null,
      commdityCon: {
        commditys: [
          { text: '类别管理', id: 1 },
          { text: '商品管理', id: 2 },
          { text: '新增商品', id: 3 }
        ],
        messages: [
          { text: '店铺资质', id: 1 },
          { text: '店铺优惠', id: 2 },
          { text: '自定义费用', id: 3 },
          { text: '自定义优惠', id: 4 },
          { text: '积分设置', id: 5 },
          { text: '接单方式', id: 6 },
          { text: '配送费用设置', id: 7 },
          { text: '预计时间设置', id: 8 },
          { text: '店铺设置', id: 9 }
        ],
        orders: [
          {
            text: '全部订单', id: '1'
          },
          {
            text: '待付款订单', id: '2'
          },
          {
            text: '已付款订单', id: '3'
          },
          {
            text: '已确认订单', id: '4'
          },
          {
            text: '配送成功订单', id: '5'
          },
          {
            text: '交易成功订单', id: '6'
          }
        ],
        finances: [
          {
            text: '财务设置', id: '1'
          },
          {
            text: '财务管理', id: '2'
          },
          {
            text: '申请提现', id: '3'
          }
        ],
        systems: [
          {
            text: '语音设置', id: '1'
          },
          {
            text: '专属配送员', id: '2'
          }
        ]
      }
    }
  },
  methods: {
    a (index) {
      this.menuShow = index
      document.getElementsByClassName('hide-menu')[index].classList.add('activeM')
    },
    b (index) {
      this.menuShow = null
      document.getElementsByClassName('hide-menu')[index].classList.remove('activeM')
    }
  }
}
</script>
<style lang="scss">
.activeM {
  background: white;
  color: #00b1ff !important;
}
.header {
  width: 100%;
  .content {
    width: 1200px;
    margin: 0 auto;
    .header-content {
      height: 110px;
      box-sizing: border-box;
      padding-left: 157px;
      h3 {
        float: left;
        line-height: 110px;
        font-size: 24px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .operate-content {
        padding-top: 20px;
        height: 100%;
        float: right;
        font-size: 0;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        span {
          font-size: 17px;
          margin-left: 27px;
        }
      }
    }
  }
  .nav-content {
    width: 100%;
    height: 60px;
    background: url(../../assets/images/header/pc_bar_bac.png);
    .navigation-bar {
      box-sizing: border-box;
      padding-left: 400px;
      font-size: 0;
      li {
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        float: left;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
        width: 138px;
        text-align: center;
        ul {
          box-shadow: -1px -1px 5px #888888;
          width: 138px;
          top: 100%;
          left: 0;
          position: absolute;
          font-size: 16px;
          color: black;
          li {
            color: black;
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
}
</style>
