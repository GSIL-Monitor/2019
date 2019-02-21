<template>
  <div class="login">
    <div class="banner"></div>
    <div class="main">
      <!-- 登录框 -->
      <div class="loginBox" >
        <div class="title">
          <div class="titleTop">
            <span>{{ $t('LOGIN.FONT1') }}</span>
            <span>{{ $t('LOGIN.FONT2') }}</span>
            <!-- <el-button size="small"  @click="centerDialogVisible = true" class="fr">{{language}}<i class="el-icon-arrow-down"></i></el-button> -->
              </div>
          <el-form label-position="top" label-width="80px" :model="userForm" ref="form">
            <el-form-item :label='$t("LOGIN.FONT3")' required>
              <el-input id='account' v-model="userForm.account"  :placeholder="$t('LOGIN.FONT4')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('LOGIN.FONT5')" required>
              <el-input id='password' v-model="userForm.passWord" :placeholder="$t('LOGIN.FONT6')" type='password'></el-input>
            </el-form-item>
          </el-form>
          <!-- <a href="javascript:;" class="fr">忘记密码</a> -->
          <el-button id='login_button' type="primary" @click=" onSubmite(userForm)" :disabled="submitting">{{$t('LOGIN.FONT7')}}</el-button>
          <!-- <a href="javascript:;" class="registerBtn fr">还没账号？立即注册</a> -->
        </div>
      </div>
    </div>
    <div class="footer"></div>

    <!-- 语言选择框 -->
    <div class="contentL">
      <el-dialog
        title="语言切换"
        :visible.sync="centerDialogVisible"
        width="420px"
        center>
        <el-row>
          <el-col :span="12"><div @click="languageChange('zh'), centerDialogVisible = false" class="grid-content bg-purple active">中文</div></el-col>
          <el-col :span="12"><div @click="$i18n.locale = 'tr',Language='Türk dili', centerDialogVisible = false" class="grid-content bg-purple-light active">Türk dili</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div @click="languageChange('en'), centerDialogVisible = false" class="grid-content bg-purple active">English</div></el-col>
          <el-col :span="12"><div @click="$i18n.locale = 'fr',Language='العربية', centerDialogVisible = false" class="grid-content bg-purple-light active">العربية</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div @click="$i18n.locale = 'ar',Language='Le français', centerDialogVisible = false" class="grid-content bg-purple active">Le français</div></el-col>
          <el-col :span="12"><div @click="$i18n.locale = 'it',Language='lingua italiana', centerDialogVisible = false" class="grid-content bg-purple-light active">lingua italiana</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div @click="$i18n.locale = 'ja',Language='日本語', centerDialogVisible = false" class="grid-content bg-purple active">日本語</div></el-col>
          <el-col :span="12"><div @click="$i18n.locale = 'vi',Language='Người việt nam', centerDialogVisible = false" class="grid-content bg-purple-light active">Người việt nam</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div @click="$i18n.locale = 'de',Language='Deutsch', centerDialogVisible = false" class="grid-content bg-purple active">Deutsch</div></el-col>
          <el-col :span="12"><div @click="$i18n.locale = 'ko',Language='한국어', centerDialogVisible = false" class="grid-content bg-purple-light active">한국어</div></el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { confirmAccount, getCode, storePartitionSearch } from '@/api/index.js'
export default {
  data () {
    return {
      // loading:false,
      submitting: false,
      language: '中文',
      userForm: {
        account: 'admin',
        passWord: '12345678',
        language: 1
      },
      centerDialogVisible: false
    }
  },
  rules: {
    account: [{ required: true, message: '请输入', trigger: 'blur' }],
    passWord: [{ required: true, message: '请输入', trigger: 'blur' }]
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
      localStorage.setItem('lanNum', this.userForm.language)
      localStorage.setItem('localeLanguage', a)
    },
    //   登录验证
    onSubmite (userForm) {
      if (userForm.account === '' || userForm.passWord === '') {
        this.$message.error('您输入的用户名或密码为空')
      } else {
        this.loading = true
        confirmAccount(userForm)
          .then((res) => {
            console.log(res)
            if (res.userName) {
              let userName = res.userName
              this.$store.dispatch('setUser', userName)
              let sysTree = res.sysTree
              sessionStorage.setItem('sysTree', JSON.stringify(sysTree))
              this.$store.commit('setAuthority', sysTree)
              sessionStorage.setItem('userName', userName)
              this.$router.push({ path: '/gober/manage' })
            }
          })
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  .title {
    background: white;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.04);
  }

  #login_button {
    width: 100%;
  }
 /deep/ .el-form--label-top .el-form-item__label {
    padding: 0;
    font-size: 18px;
  }
  /deep/.el-input__inner {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    height: 50px;
    font-size: 18px;
  }
 /deep/ .el-row {
    height: 48px;
    line-height: 48px;
    text-align: center;
  }
 /deep/ .el-dialog--center .el-dialog__body {
    padding: 25px 0px 30px;
  }
  .active:focus,
  .active:hover {
    background: rgba(238, 238, 238, 1);
    cursor: pointer;
  }
  .banner {
    background: url(../../assets/images/bgImg.png) no-repeat center center/100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-size: cover;
  }
  .main {
    width: 100%;
    height: 100%;
    position: relative;
    .loginBox {
      width: 530px;
      height: 498px;
      /*background: rgba(190, 190, 190, 0.7);*/
      border-radius: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 48px 65px;
      .titleTop {
        margin-bottom: 40px;
        span:nth-of-type(1) {
          width: 172px;
          height: 31px;
          font-size: 30px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
          margin-right: 8px;
        }
        span:nth-of-type(2) {
          width: 80px;
          height: 20px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
        }
      }
      .loginBtn {
        cursor: pointer;
        display: block;
        height: 50px;
        background: rgba(0, 177, 255, 1);
        border-radius: 6px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        margin-top: 70px;
        margin-bottom: 20px;
      }

      .content {
        width: 420px;
        height: 383px;
        border-radius: 4px;
      }
    }
  }
}
</style>
