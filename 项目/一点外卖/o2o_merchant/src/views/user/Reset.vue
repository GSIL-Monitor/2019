<template>
  <div class="reset">
    <div class="resetHead"  :style="{'height':pageHeight + 'px'}"></div>
    <div class="banner">
      <!-- <img
        src="@/assets/images/bgImg.png"
        alt=""
      > -->
      <!-- 登录框 -->
      <div class="resetBox formBox">
        <div class="title">
          <!-- 标题 -->
          <div class="titleTop">
            <h2>202{{ $t("USER.LT") }}</h2>
            <h3>{{ $t("USER.LT2") }}</h3>
            <!-- <span
              @click="centerDialogVisible = true"
              class="fr languageBtn"
            >{{Language}} <i class="el-icon-arrow-down"></i></span> -->
          </div>
          <!-- 表单区域 -->
          <h4>{{ $t("USER.Account") }}</h4>
          <el-input
            v-model="userForm.account"
            @blur="checkAccount()"
          ></el-input>
          <h4>{{ $t("USER.PAW4") }}</h4>
          <el-input
            type="password"
            v-model="userForm.password"
          ></el-input>
          <h4>{{ $t("USER.PAW5") }}</h4>
          <el-input
            type="password"
            v-model="userForm.paw"
          ></el-input>
          <h4>{{ $t("USER.PHONE") }}</h4>
          <div class="nmb">
            <el-select
              v-model="userForm.quhao"
              :placeholder="$t('USER.Arae')"
            >
              <el-option
                label="+86"
                value="1"
              ></el-option>
              <el-option
                label="85"
                value="2"
              ></el-option>
            </el-select>
          </div>
          <el-input
            v-model="userForm.phone"
            class="phone"
          ></el-input>
          <h4>{{ $t("USER.CODE") }}</h4>
          <el-input
            v-model="userForm.code"
            class="codeFl"
          ></el-input>
          <button
            class="codeFr"
            :class="{disabled: !this.canClick}"
            @click="getVerificationCode"
          >{{content}}</button>
          <button
            class="submitBtn"
            @click="submitBtn"
          >{{ $t("USER.BTN3") }}</button>
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
        title="语言切换"
        :visible.sync="centerDialogVisible"
        width="420px"
        center
      >
        <span @click="$i18n.locale = 'zh',Language='中文'">中文</span>
        <span @click="$i18n.locale = 'tr',Language='Türk dili'">Türk dili</span>
        <span @click="$i18n.locale = 'en',Language='English'">English</span>
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
import { getAccount, resetPassword } from '@/api/index.js'
import {getCode} from '@/api/public.js'

export default {
  computed: {
    pageHeight () {
      return this.screenHeight - 760 - 86
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
      userForm: {
        account: '',
        phone: '',
        password: '',
        paw: '',
        code: ''
      },
      // 默认中文
      Language: '中文',
      centerDialogVisible: false,
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
    dialogVisible () {
      this.centerDialogVisible = false
    },
    // 检查账户是否存在
    checkAccount () {
      let name = this.userForm.account
      if (!name) {
        this.$message.error(this.$t('USER2.Account'))
      } else {
        getAccount(name).then(res => {
          if (!res.code) {
            this.$message.error('USER2.Account2')
            this.adisabledR = true
          } else {
            this.adisabledR = false
          }
        })
      }
    },
    // 获取验证码
    getVerificationCode () {
      // 禁用按钮
      this.disabledCode = false
      this.canClick = false
      this.content = this.totalTime + 's'
      if (this.canClick) return
      // 发送请求
      getCode(this.userForm.phone).then(res => {
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
    // 密码强度
    CheckPassWord () { // 密码必须包含数字和字母
      var str = this.userForm.password
      if (str == null || str.length < 6) {
        this.$message.error('密码长度不得少于6位数')
        return false
      }
      var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
      if (reg.test(str)) { return true }
      this.$message.error('密码必须包含数字和字母')
    },
    // 提交修改密码
    submitBtn () {
      if (!this.userForm.account) {
        this.$message.error('用户名不能为空')
        return false
      }
      if (!this.userForm.password) {
        this.$message.error('请设置新密码')
        return false
      }
      this.CheckPassWord()
      if (this.userForm.password !== this.userForm.paw) {
        this.$message.error('密码不一致,请重新输入')
        return false
      }
      if (!this.userForm.phone) {
        this.$message.error('手机号不能为空')
        return false
      }
      if (!this.userForm.code) {
        this.$message.error('请输入验证码')
        return false
      }
      // 验证用户名是否存在
      if (this.adisabledR) {
        this.$message.error('用户名不正确，请重新输入')
        return false
      }
      // 提交修改密码
      resetPassword(this.userForm).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.$router.push({ name: 'Login' })
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.reset {
  .banner {
    position: relative;
    overflow: hidden;
    min-width: 1360px;
    min-height: 760px;
    background-image: url('~@/assets/images/bgImg.png');
    img{
      width: 100%;
    }
    .resetBox {
      width: 500px;
      height: 700px;
      position: absolute;
      top: 38px;
      right: 420px;
      padding: 35px 60px;
      .submitBtn {
        margin-top: 40px;
      }
    }
  }
}
</style>
<style lang="scss">
.resetBox {
  .nmb {
    position: absolute;
    left: 65px;
    top: 424px;
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
