<script src="../../../../../../../Users/Administrator/Desktop/新建文件夹 (9)/o2o_merchant2/src/router/index.js"></script>
<script src="../../../../../../../Users/Administrator/Desktop/新建文件夹 (9)/o2o_merchant2/src/api/index.js"></script>
<template>
  <div class="head">
    <div class="headTop container">
      <img
        class="logo"
        src=""
        alt=""
        style=" width:'300px'"
      >
      <div class="head-img" style="margin-right: 5px;display: inline-block ">
        <router-link :to="{name:'Home'}"><img style="width: 48px; height: 48px" src="@/assets/images/logo.png" alt=""></router-link>
      </div>
      <h4>{{$t("NAV.NavT")}}</h4>
      <ul class="fr loginOut">
        <li>
          <a @click="loginOutBtn">{{userName}} | {{$t("USER.Out")}}</a>
        </li>
        <li>
          <el-badge is-dot class="item"><router-link to="new">{{$t("NAV.Nav6")}}</router-link></el-badge>
        </li>
        <li>
          <router-link to="helpCenter">{{$t("NAV.Nav7")}}</router-link>
        </li>
      </ul>
    </div>
    <div class="nav">
      <ul>
        <li class="navLi">
          <router-link to="/home/Merchants">{{$t("NAV.NavT2")}}</router-link>
        </li>
        <li  class="navLi"
          @mouseover="shopInfoShow = true"
          @mouseout="shopInfoShow = false"
          ref="shopInfo"
        >
          <router-link :to="{name:'Information'}">{{ $t("NAV.Nav1") }}</router-link>
          <el-collapse-transition>
            <ul
              class="subNav"
              v-show="shopInfoShow"
            >
              <li>
                <router-link :to="{name:'Information'}">{{ $t("NAV.Nav1") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Storediscounts'}">{{ $t("NAV.Nav1_1") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Userdefinecost'}">{{ $t("NAV.Nav1_2") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Userdefinediscount'}">{{ $t("NAV.Nav1_3") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Orderway'}">{{ $t("NAV.Nav1_4") }}</router-link>
              </li>
              <!-- <li>
                <router-link :to="{name:'Distributioncostset'}">{{ $t("NAV.Nav1_5") }}</router-link>
              </li> -->
              <li>
                <router-link :to="{name:'Districtset'}">{{ $t("NAV.Nav1_6") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Scheduledtimeset'}">{{ $t("NAV.Nav1_7") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Setupshop'}">{{ $t("NAV.Nav1_8") }}</router-link>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
        <li class="navLi"
          @mouseover="goodsShow = true"
          @mouseout="goodsShow = false"
        >
          <router-link :to="{name:'Goods'}">{{ $t("NAV.Nav2") }}</router-link>
          <el-collapse-transition>
            <ul
              class="subNav"
              v-show="goodsShow"
            >
              <li>
                <router-link :to="{name:'Sorts'}">{{ $t("NAV.Nav2_1") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Goods'}">{{ $t("NAV.Nav2") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'AddGoods'}">{{ $t("NAV.Nav2_2") }}</router-link>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
        <li class="navLi"
          @mouseover="orderShow = true"
          @mouseout="orderShow = false"
        >
          <router-link :to="{name:'Order'}">{{ $t("NAV.Nav3") }}</router-link>
          <el-collapse-transition>
            <ul
              class="subNav transition-box"
              v-show="orderShow"
            >
              <li>
                <router-link :to="{name:'Order'}">{{ $t("NAV.Nav3_1") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Order', query: { orderStatus: 0 }}">{{ $t("NAV.Nav3_3") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Order', query: { orderStatus: 1 }}">{{ $t("NAV.Nav3_4") }}</router-link>
              </li>
              <li>
                <router-link :to="({ name: 'Order', query: { orderStatus: 2 }})">{{ $t("NAV.Nav3_5") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Order', query: { orderStatus: 3 }}">{{ $t("NAV.Nav3_6") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Order', query: { orderStatus: 4 }}">{{ $t("NAV.Nav3_7") }}</router-link>
              </li>
            </ul>
          </el-collapse-transition>

        </li>
        <li class="navLi"
          @mouseover="financeShow = true"
          @mouseout="financeShow = false"
        >
          <router-link :to="{name:'Finance'}">{{ $t("NAV.Nav4") }}</router-link>
          <el-collapse-transition>
            <ul
              class="subNav"
              v-show="financeShow"
            >
              <li>
                <router-link :to="{name:'Inancialsetting'}">{{ $t("NAV.Nav4_1") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Finance'}">{{ $t("NAV.Nav4") }}</router-link>
              </li>
              <li>
                <router-link :to="{name:'Drawmoney'}">{{ $t("NAV.Nav4_2") }}</router-link>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
<!--         <li class="navLi"
          @mouseover="systemShow = true"
          @mouseout="systemShow = false"
        >
          <router-link :to="{name:'Privilege'}">{{ $t("NAV.Nav5") }}</router-link>
        </li> -->
      </ul>
    </div>

  </div>
</template>

<script>
import {loginOut} from '@/api/index.js'
export default {
  data: () => ({
    userName: '',
    shopInfoShow: false,
    goodsShow: false,
    orderShow: false,
    financeShow: false,
    systemShow: false
  }),
  mounted () {
    this.userName = this.LS.get('userName')
  },
  methods: {
    dialogVisible () {
      this.centerDialogVisible = false
    },
    // 退出登录
    loginOutBtn () {
      loginOut().then(res => {
        console.log(res)
        if (!res.code) {
          // 清除token跳转路由
          let l = localStorage.getItem('localeLanguage')
          this.LS.clear()
          localStorage.setItem('localeLanguage',l)
          this.$router.push({name: 'Login'})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  background-color: #fff;
  height: 172px;
  margin-bottom: 17px;
  min-width: 1180px;
  a {
    color: #fff;
  }
  .loginOut {
    a {
      color: #666;
    }
  }
  .headTop {
    height: 110px;
    background-color: #fff;
    .logo,
    img {
      width: 300px;
      margin-right: 20px;
    }
    h4 {
      margin-top: 20px;
      padding-top: 20px;

      font-size: 24px;
      font-weight: 500;
      color: #327CF4;
      display: inline-block;
    }
    ul {
      margin-top: 20px;
      li {
        float: left;
        margin-left: 27px;
        font-size: 16px;
      }
    }
  }
  // 一级导航
  .nav {
    height: 62px;
    background: linear-gradient(
      90deg,
      rgba(0, 166, 255, 1) 0%,
      rgba(0, 210, 255, 1) 100%
    );
    .navLi>a:focus,.navLi>a:hover{
        font-size: 18px;
        border-bottom: 2px solid #fff;
        font-weight: 700;
    }
    ul {
      margin: 0 auto;
      width: 1180px;
      li {
        width: 138px;
        line-height: 62px;
        height: 62px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        float: left;
        position: relative;
        a {
          display: inline-block;
          line-height: 62px;
          height: 62px;
          width: 100px;
        }

        // 次级导航
        .subNav {
          position: absolute;
          width: 138px;
          z-index: 99;
          background-color: #fff;
          box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
          li {
            float: none;
            a {
              color: rgba(102, 102, 102, 1);
            }
          }
          li a:hover {
            color: #00b1ff;
          }
        }
      li:hover a {
        background-color: #fff;
        color: #00b1ff;
      }
      }
    }
  }
}
</style>
