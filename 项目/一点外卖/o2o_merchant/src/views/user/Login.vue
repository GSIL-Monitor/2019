<template>
  <div
    class="login"
    style="overflow:auto;width=100%;"
  >
    <div
      class="loginHead"
      style="    display: flex;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;"
    >

      <div
        class="head-img"
        style="margin-right: 30px; "
      >
        <img
          style="width: 48px; height: 48px"
          src="@/assets/images/logo.png"
          alt=""
        >
      </div>
      <h3 style="    font-weight: 400;
    font-size: 30px;
    color: #327CF4;
    margin-right: 8px;
    display: inline-block;">{{$t("NAV.NavT")}}</h3>
    </div>
    <div class="banner">
      <img
        src="@/assets/images/bgImg.png"
        alt=""
      >
      <!-- 登录框 -->
      <div class="container2">
        <div class="loginBox formBox">
          <div class="title">
            <div class="titleTop">
              <h2>{{ $t("USER.LT") }}</h2>
              <h3>{{ $t("USER.LT2") }}</h3>
              <span
                @click="centerDialogVisible = true"
                class="fr languageBtn"
              >{{language}} <i class="el-icon-arrow-down"></i></span>
            </div>
            <!-- 表单区域 -->
            <h4>{{ $t("USER.Account") }}</h4>
            <el-input
              v-model="userForm.account"
              :placeholder="$t('USER.AccountI')"
            ></el-input>
            <h4>{{ $t("USER.PAW") }}</h4>
            <el-input
              type="password"
              v-model="userForm.password"
              :placeholder="$t('USER.PAWI')"
            ></el-input>
            <router-link
              class="fr reset"
              :to="{name:'Reset'}"
            >{{ $t("USER.RESET") }}</router-link>
            <button
              class="submitBtn"
              @click="submitForm"
            >{{ $t("USER.BTN1") }}</button>
            <router-link
              class="fr"
              :to="{name:'Register'}"
            >{{ $t("USER.GOR") }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>

    <!-- 语言选择框 -->
    <div
      class="LanguageBox"
      @click="dialogVisible"
    >
      <el-dialog
        :title="$t('USER.L')"
        :visible.sync="centerDialogVisible"
        width="420px"
        center
      >
        <span @click="languageChange('zh')">中文</span>
        <span @click="languageChange('tr')">Türk dili</span>
        <span @click="languageChange('en')">English</span>
        <span @click="languageChange('fr')">العربية</span>
        <span @click="languageChange('ar')">Le français</span>
        <span @click="languageChange('it')">lingua italiana</span>
        <span @click="languageChange('ja')">日本語</span>
        <span @click="languageChange('vi')">Người việt nam</span>
        <span @click="languageChange('de')">Deutsch</span>
        <span @click="languageChange('ko')">한국어</span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/index.js'
export default {
  created () {
    let l = localStorage.getItem('localeLanguage')
    this.languageChange(l)
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = document.body.clientHeight
        that.screenHeight = window.screenHeight
      })()
    }
  },
  computed: {
    pageHeight () {
      return this.screenHeight - 750 - 86
    }
  },
  watch: {
    screenHeight (val) {
      if (!this.timer) {
        this.screenHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
  data () {
    return {
      screenHeight: document.documentElement.clientHeight,
      // 默认中文
      language: null,
      centerDialogVisible: false,
      // 登录信息
      userForm: {
        account: null,
        password: null,
        language: null
      }
    }
  },
  methods: {
    // 语言
    languageChange (a) {
      if (a === 'zh') {
        this.language = '中文'
        this.userForm.language = 1
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 2
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 3
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 4
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 5
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 6
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 7
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 8
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 9
      } else if (a === 'en') {
        this.language = 'English'
        this.userForm.language = 10
      }
      this.$i18n.locale = a
      localStorage.setItem('localeLanguage', a)
    },
    dialogVisible () {
      this.centerDialogVisible = false
    },
    // 实现登录
    submitForm () {
      // 验证用户是否输入数据
      if (!this.userForm.account) {
        this.$message.error(this.$t('USER2.Account'))
        return false
      }
      if (!this.userForm.password) {
        this.$message.error(this.$t('USER2.Pass'))
        return false
      }
      // 请求登录
      login(this.userForm).then(res => {
        if (!res.code) {
          let shopId = null
          if (res.data.shopId[0]) {
            shopId = res.data.shopId[0].id
          }
          this.$message({
            message: res.msg,
            type: 'success'
          })
          // 存储token 及跳转路由
          this.LS.put('mytoken', res.data.tokenId, 1)
          this.LS.put('userName', res.data.userName, 1)
          this.LS.put('busUserId', res.data.id, 1)
          this.LS.put('Language', this.Language)
          if (shopId) {
            this.LS.put('shopId', shopId, 1)
            this.$router.push({ name: 'Home' })
          } else {
            this.$router.push({ name: 'AddShopInfo' })
          }
        } else {
          // 提示错误信息
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .loginHead {
    height: 110px;
    background: #ffffff;
  }
  .banner {
    overflow: hidden;
    height: calc(100vh - 196px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .container2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1200px;
      display: flex;
      justify-content: flex-end;
    }
    .loginBox {
      width: 530px;
      height: 498px;

      padding: 48px 65px;
      .reset {
        margin-top: 15px;
      }
      // 登录按钮
      .submitBtn {
        margin: 20px 0;
      }
    }
  }
}
</style>
