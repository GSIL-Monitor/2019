<template>
  <div class="register"
  style="overflow:auto;width=100%;">
    <!-- <div
      class="registerHead"
      :style="{'height':pageHeight + 'px'}"
    ></div> -->
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
      <h3 style="font-weight: 400;
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
        <div class="registerBox formBox">
          <div class="title">
            <div class="titleTop">
              <h2>{{ $t("USER.RT") }}</h2>
              <h3>{{ $t("USER.RT2") }}</h3>
              <span
                @click="centerDialogVisible = true"
                class="fr languageBtn"
              >{{language}} <i class="el-icon-arrow-down"></i></span>
            </div>
            <!-- 表单区域 -->
            <h4>{{ $t("USER.Account") }}</h4>
            <el-input
              v-model="userForm.account"
              @blur="checkAccount()"
            ></el-input>
            <h4>{{ $t("USER.PHONE") }}</h4>
            <div class="nmb">
              <el-select
                v-model="userForm.area_num"
                :placeholder="$t('USER.Arae')"
              >
                <el-option
                  label="+86"
                  value="86"
                ></el-option>
                <el-option
                  label="+855"
                  value="855"
                ></el-option>
              </el-select>
            </div>
            <el-input
              v-model="userForm.phone"
              class="phone"
            ></el-input>
            <h4>{{ $t("USER.PAW3") }}</h4>
            <el-input
              v-model="userForm.password"
              type="password"
            ></el-input>
            <h4>{{ $t("USER.PAWI2") }}</h4>
            <el-input
              v-model="userForm.paw"
              type="password"
            ></el-input>
            <h4>{{ $t("USER.CODE") }}</h4>
            <el-input
              v-model="userForm.code"
              class="codeFl"
            ></el-input>
            <button
              class="codeFr"
              :disabled="disabledCode"
              :class="{disabled: !this.canClick}"
              @click="getVerificationCode"
            >{{content}}</button>
            <p>
              <el-checkbox
                v-model="checkedRead"
                class="readForm"
              >{{$t('USER.READ')}}</el-checkbox>
            </p>
            <button
              class="submitBtn"
              @click="submitBtn"
            >{{ $t("USER.BTN2") }}</button>
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
        <span @click="$i18n.locale = 'tr',Language='Türk dili'">Türk dili</span>
        <span @click="languageChange('en')">English</span>
        <span @click="$i18n.locale = 'fr',Language='العربية'">العربية</span>
        <span @click="$i18n.locale = 'ar',Language='Le français'">Le français</span>
        <span @click="$i18n.locale = 'it',Language='lingua italiana'">lingua italiana</span>
        <span @click="$i18n.locale = 'ja',Language='日本語'">日本語</span>
        <span @click="$i18n.locale = 'vi',Language='Người việt nam'">Người việt nam</span>
        <span @click="$i18n.locale = 'de',Language='Deutsch'">Deutsch</span>
        <span @click="$i18n.locale = 'ko',Language='한국어'">한국어</span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getCode } from '@/api/public.js'
import { getAccount, register } from '@/api/index.js'
// import func from './vue-temp/vue-editor-bridge'
export default {
  created () {
    let l = localStorage.getItem('localeLanguage')
    this.languageChange(l)
  },
  computed: {
    pageHeight () {
      return this.screenHeight - 840 - 86
    }
  },
  watch: {
    screenHeight (val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenHeight值改变，就将其重新赋给data里的screenHeight
        this.screenHeight = val
        //   this.height = newData - 750 - 86
        this.timer = true
        let that = this
        setTimeout(function () {
          // 打印screenHeight变化的值
          console.log(that.screenHeight)
          that.timer = false
        }, 400)
      }
    }
  },
  data () {
    return {
      screenHeight: document.documentElement.clientHeight,
      // 注册信息
      userForm: {
        account: null,
        phone: null,
        password: null,
        paw: null,
        code: null,
        language: null,
        area_num: null
      },
      // 默认中文
      Language: null,
      centerDialogVisible: false,
      /* 是否禁用验证码按钮 */
      disabledCode: false,
      // 验证码
      getCodeNum: null,
      //   获取验证码
      content: '获取验证码',
      totalTime: 30,
      canClick: true,
      //   阅读条款
      checkedRead: false,
      // 注册按钮禁用
      adisabledR: ''
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
      }
      this.$i18n.locale = a
      localStorage.setItem('localeLanguage', a)
      console.log(this.language)
    },
    dialogVisible () {
      this.centerDialogVisible = false
    },
    // 获取验证码
    getVerificationCode () {
      // 禁用按钮
      this.disabledCode = false
      this.canClick = false
      this.content = this.totalTime + 's'
      if (this.canClick) return
      // 发送请求
      getCode({areaNum: this.userForm.area_num, phone: this.userForm.phone}).then(res => {
        console.log(res)
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
        } else {
          this.$message.error(res.msg)
        }
      })
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's'
        if (this.totalTime < 1) {
          window.clearInterval(clock)
          this.content = '获取验证码'
          this.totalTime = 30
          // 解除禁用
          this.canClick = true
          this.disabledCode = false
        }
      }, 1000)
    },
    // 检查账户是否存在
    checkAccount () {
      let name = this.userForm.account
      if (!name) {
        this.$message.error('请输入用户名')
      } else {
        getAccount(name).then(res => {
          if (res.code === 1) {
            this.$message.error('此账号已存在')
            this.adisabledR = true
          } else {
            this.adisabledR = false
          }
        })
      }
    },
    // 注册
    submitBtn () {
      if (!this.userForm.account) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.userForm.phone) {
        this.$message.error('请输入手机号')
        return
      }

      if (!this.userForm.password || !this.userForm.paw) {
        this.$message.error('请输入密码')
        return
      }
      // 判断两次密码是否一致
      if (this.userForm.password !== this.userForm.paw) {
        this.$message.error('两次密码不一致')
        return
      }

      if (!this.userForm.code) {
        this.$message.error('请输入验证码')
        return
      }

      var str = this.userForm.password
      if (str == null || str.length < 6) {
        this.$message.error('')
        return
      }

      var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
      if (!reg.test(str)) {
        this.$message.error('密码长度不得少于6位数,且密码必须包含数字和字母')
        return
      }

      // 判断用户名是否存在
      if (this.adisabledR) {
        this.$message.error('此账号已存在')
        return
      }

      // 是否阅读协议
      if (!this.checkedRead) {
        this.$message.error('请阅读注册协议')
        return
      }
      console.log(this.userForm)
      // 提交注册信息
      register(this.userForm).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.$router.push({ name: 'Login' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
    .loginHead {
    height: 110px;
    background: #ffffff;
  }
  .banner {
    overflow: hidden;
    height: calc(100vh - 196px);
    min-height: 840px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .container2 {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1200px;
      display: flex;
      justify-content: flex-end;
    }
    .registerBox {
      width: 500px;
      height: 710px;
      padding: 32px 65px;
      position: relative;
      // 阅读协议
      .readForm {
        width: 340px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 20px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
<style lang="scss">
.registerBox {
  .nmb {
    position: absolute;
    left: 70px;
    top: 244px;
    z-index: 888;
    .el-input__inner {
      width: 80px;
      height: 20px;
      line-height: 20px;
    }
    .el-input {
      width: 80px;
      height: 20px;
      line-height: 20px;
    }
    .el-input__icon {
      line-height: 20px;
    }
  }
  .phone {
    input {
      text-indent: 80px;
    }
  }
}
</style>
