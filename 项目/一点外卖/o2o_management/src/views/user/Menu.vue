<template>
  <!-- <el-row class="tac" >

  <div class="menu-header-title">O2O总后台</div>-->
  <div style="width:280px;">
    <el-row>
      <div class="menu">
        <!--<div
          :class="[ menuChildArr.menuChild1 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild1')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-merchant"></i>
              <span class="item-title">{{$t('MENU.ITEM1.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/storeMessage"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/storeAudit"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT2')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/storePartition"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT3')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/storeCategory"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT4')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/storeNotice"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT5')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/bankcardInfo"
                active-class="item-child-active"
              >{{$t('MENU.ITEM1.FONT6')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild2 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild2')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-shop"></i>
              <span class="item-title">{{$t('MENU.ITEM2.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/commodityClass"
                active-class="item-child-active"
              >{{$t('MENU.ITEM2.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/product"
                active-class="item-child-active"
              >{{$t('MENU.ITEM2.FONT2')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild3 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild3')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-order"></i>
              <span class="item-title">{{$t('MENU.ITEM3.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/allOrder"
                active-class="item-child-active"
              >{{$t('MENU.ITEM3.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/reminder"
                active-class="item-child-active"
              >{{$t('MENU.ITEM3.FONT2')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild4 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild4')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-withdrawal"></i>
              <span class="item-title">{{$t('MENU.ITEM4.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/drawManage"
                active-class="item-child-active"
              >{{$t('MENU.ITEM4.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/merchant"
                active-class="item-child-active"
              >{{$t('MENU.ITEM4.FONT2')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild5 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild5')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-coupon"></i>
              <span class="item-title">{{$t('MENU.ITEM5.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/coupon"
                active-class="item-child-active"
              >{{$t('MENU.ITEM5.FONT1')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild6 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild6')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-statistics"></i>
              <span class="item-title">{{$t('MENU.ITEM6.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/statistics"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/commodityCount"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT2')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/oderStatics"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT3')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/customStatistic"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT4')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/visitStatistic"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT5')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/productSalesReport"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT6')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/selectOrderCusUserCount"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT7')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/selectOrderPayCount"
                active-class="item-child-active"
              >{{$t('MENU.ITEM6.FONT8')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild7 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild7')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-admin"></i>
              <span class="item-title">{{$t('MENU.ITEM7.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/manage"
                active-class="item-child-active"
              >{{$t('MENU.ITEM7.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/roleMessage"
                active-class="item-child-active"
              >{{$t('MENU.ITEM7.FONT2')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild8 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild8')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-sys"></i>
              <span class="item-title">{{$t('MENU.ITEM8.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/journal"
                active-class="item-child-active"
              >{{$t('MENU.ITEM8.FONT1')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild9 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild9')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-capital"></i>
              <span class="item-title">{{$t('MENU.ITEM9.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/capital"
                active-class="item-child-active"
              >{{$t('MENU.ITEM9.FONT1')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild10 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild10')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-courier"></i>
              <span class="item-title">{{$t('MENU.ITEM10.TITLE')}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/courier"
                active-class="item-child-active"
              >{{$t('MENU.ITEM10.FONT1')}}</router-link>
            </li>
            <li>
              <router-link
                to="/gober/courierStatistics"
                active-class="item-child-active"
              >{{$t('MENU.ITEM10.FONT2')}}</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild11 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild11')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-courier"></i>
              <span class="item-title">积分商城管理</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/integral"
                active-class="item-child-active"
              >积分商城管理</router-link>
            </li>
            <li>
              <router-link
                to="/gober/receiveList"
                active-class="item-child-active"
              >领取记录</router-link>
            </li>
          </ul>
        </div>
        <div
          :class="[ menuChildArr.menuChild12 ? 'item item-active' : 'item' ]"
          @click="slideDown('menuChild12')"
        >
          <div class="item-head">
            <div class="item-group">
              <i class="icon icon-courier"></i>
              <span class="item-title">菜单管理</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li>
              <router-link
                to="/gober/menuctrl"
                active-class="item-child-active"
              >菜单管理</router-link>
            </li>
          </ul>
        </div>-->
<!--动态显示菜单-->
        <div v-for="(childs,index) in menuData" v-if="childs.state.selected"
          :class="[ childs.checked ? 'item item-active' : 'item' ]"
          >
          <div class="item-head" @click="dropDown(index,childs.checked)">
            <div class="item-group">
              <i :class="childs.attributes.icon"></i>
              <span class="item-title">{{childs.text}}</span>
            </div>
            <i class="icon icon-down"></i>
          </div>
          <ul class="item-child">
            <li v-for="child in childs.children" v-if="child.state.selected">
              <router-link
                :to="child.attributes.url"
                active-class="item-child-active"
              >{{child.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </el-row>
  </div>
  <!-- </el-row> -->
</template>
<script>
import { MenuList } from '@/api/index.js'
import axios from 'axios'
export default {
  data () {
    return {
      authority: {},
      menuChildArr: {
        menuChild1: false,
        menuChild2: false,
        menuChild3: false,
        menuChild4: false,
        menuChild5: false,
        menuChild6: false,
        menuChild7: false,
        menuChild8: false,
        menuChild9: false,
        menuChild10: false,
        menuChild11: false,
        menuChild12: false
      },
      tem: '',
      menuData: {}
    }
  },
  methods: {
    saveMessage (obj) {
      var backObj = {}
      if (Object.keys(obj).length !== 0) { // 判断对象是否为空
        backObj.visable = obj.state.selected
        backObj.text = obj.text
        backObj.children = []
        if (obj.children) {
          var repalce
          obj.children.forEach(item => {
            repalce = this.saveMessage(item)
            backObj.children.push(repalce)
          })
        }
      }

      return backObj
    },
    slideDown (index) {
      this.$set(this.menuChildArr, index, !this.menuChildArr[index])
    },
    dropDown (index, status) {
      this.menuData[index]['checked'] = !status
      // this.$set(this.menuData, index, !this.menuData[index]['checked'])
    },
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {}
  },
  created () {
    var obj = this.$store.state.authorityList
    var division = this.saveMessage(obj)
    var children = ''
    if (Object.keys(division).length !== 0) {
      children = division.children
    }
    this.authority.merchant = children[0]
    this.authority.commodity = children[1]
    this.authority.order = children[2]
    this.authority.draw = children[3]
    this.authority.discount = children[4]
    this.authority.data = children[5]
    this.authority.gover = children[6]
    MenuList()
      .then((res) => {
        console.log(res)
        this.menuData = res.children
      })
  }
}
</script>
<style lang="scss" scoped>
.inner-container::-webkit-scrollbar {
  display: none;
}
.menu {
  .item-head {
    width: 100%;
    height: 75px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    padding: 0 40px;
    box-sizing: border-box;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .item-active .item-head {
    background: #2a58ad;
  }
  .item-active .item-child {
    opacity: 1;
  }
  .item-child-active {
    background: #0f3c8b;
    border-left: 5px solid #56cdff;
  }
  .item-child {
    opacity: 0;
  }
  .item-head:last-child {
    border: none;
  }
  .item-group {
    display: flex;
    align-items: center;
  }
  .item-title {
    font-size: 16px;
    color: #ffffff;
  }
  .item-child a {
    width: 100%;
    height: 0;
    line-height: 0;
    display: block;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    transition: all 200ms ease-in;
  }
  .item-active .item-child a {
    height: 75px;
    line-height: 75px;
    transition: all 200ms ease-in;
  }
  .item-child {
    /*display: none;*/
  }
}
.icon-down {
  background: url("../../assets/images/menu/icon_collapse.png") no-repeat center
    center/100% 100%;
  width: 14px;
  height: 8px;
}
.icon-merchant {
  background: url("../../assets/images/menu/a.png") no-repeat center center/100%
    100%;
  width: 22px;
  height: 20px;
}
.icon-shop {
  background: url("../../assets/images/menu/b.png") no-repeat center center/100%
    100%;
  width: 22px;
  height: 23px;
}
.icon-order {
  background: url("../../assets/images/menu/c.png") no-repeat center center/100%
    100%;
  width: 22px;
  height: 25px;
}
.icon-withdrawal {
  background: url("../../assets/images/menu/d.png") no-repeat center center/100%
    100%;
  width: 24px;
  height: 24px;
}
.icon-coupon {
  background: url("../../assets/images/menu/e.png") no-repeat center center/100%
    100%;
  width: 23px;
  height: 18px;
}
.icon-statistics {
  background: url("../../assets/images/menu/f.png") no-repeat center center/100%
    100%;
  width: 21px;
  height: 21px;
}
.icon-admin {
  background: url("../../assets/images/menu/g.png") no-repeat center center/100%
    100%;
  width: 21px;
  height: 24px;
}
.icon-sys {
  background: url("../../assets/images/menu/h.png") no-repeat center center/100%
    100%;
  width: 21px;
  height: 24px;
}
.icon-capital {
  background: url("../../assets/images/menu/i.png") no-repeat center center/100%
    100%;
  width: 21px;
  height: 24px;
}
.icon-courier {
  background: url("../../assets/images/menu/j.png") no-repeat center center/100%
    100%;
  width: 21px;
  height: 24px;
}
.icon {
  display: inline-block;
  margin-right: 20px;
}
.el-menu-vertical-demo span {
  font-size: 18px;
}
.el-menu {
  border-right-width: 0;
}
.el-aside {
  background: #2a58ad;
}
.menu-header-title {
  /* width: 140px; */
  height: 50px;
  background: rgba(42, 88, 173, 1);
  text-align: center;
  font-size: 13px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.tac {
  background: #2a58ad;
}
.el-menu {
  border-right: none;
}
/* .menu-header-title {

  font-size: 18px;
  color: #2f3c45;
  height: 80px;
  line-height: 80px;
  font-weight: bold;
} */
h4 {
  color: rgb(196, 196, 196);
}
.el-menu-item.is-active {
  background-color: #1d4c9e !important;
}
.el-menu {
  font-size: 9px;
}
</style>
