<template>
    <div class="reset">
        <div class="resetHead"></div>
        <div class="banner">
            <img src="@/assets/images/bgImg.png" alt="">
            <!-- 登录框 -->
            <div class="resetBox">
                <div class="title">
                    <div class="titleTop">
                        <span>202商务系统</span>
                        <span>商家中心</span>
                        <el-button size="small"  @click="centerDialogVisible = true" class="fr">中文<i class="el-icon-arrow-down"></i></el-button>
                    </div>

                    <el-form label-position="top" label-width="80px" :model="resetForm">
                        <el-form-item label="商户账号">
                            <el-input v-model="resetForm.account" placeholder="请输入您的账号"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                            <el-input v-model="resetForm.phone" placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-input v-model="resetForm.code" placeholder="请输入验证码" class="codeFl"></el-input>
                            <el-button type="primary" class="codeFr getCodeBtn" @click="getCode" v-loading="loading" element-loading-text="正在获取..." element-loading-spinner="el-icon-loading">获取验证码</el-button>
                        </el-form-item>
                    </el-form>
                    <button class="resetBtn" @click="reset">登录</button>
                </div>
            </div>
        </div>
        <div class="footer"></div>

        <!-- 语言选择框 -->
        <div class="content">
            <el-dialog
            title="语言切换"
            :visible.sync="centerDialogVisible"
            width="420px"
            center>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple active">中文</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light active">Türk dili</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple active">English</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light active">العربية</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple active">Le français</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light active">lingua italiana</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple active">日本語</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light active">Người việt nam</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="12"><div class="grid-content bg-purple active">Deutsch</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light active">한국어</div></el-col>
                </el-row>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { validatePhone, validatePass } from '@/api/index.js'
export default {
  data () {
    return {
      resetForm: {
        account: '',
        phone: '',
        password: '',
        paw: '',
        code: ''
      },
      //   获取验证码
      loading: false,
      disabled: false,
      //   语言框
      centerDialogVisible: false,
      //   阅读条款
      checkedRead: false
    }
  },
  methods: {
    //   登录验证
    validate () {
      validatePhone(this.resetForm.phone).then(res => {
        console.log(res)
      })
      validatePass(this.resetForm.password).then(res => {

      })
    },
    // 获取验证码
    getCode () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    // 注册
    reset () {
      this.validate()
    }
  }
}
</script>

<style lang="scss" scoped>
.reset {
  .resetHead {
    height: 110px;
  }
  .banner {
    height: 884px;
    position: relative;
    .resetBox {
      width: 530px;
      height: 592px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      position: absolute;
      top: 185px;
      right: 420px;
      padding: 48px 65px;
      .titleTop {
        margin-bottom: 30px;
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
      .resetBtn {
        display: block;
        height: 50px;
        background: rgba(0, 177, 255, 1);
        border-radius: 6px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        margin-top: 70px;
      }
      //   语言框
      .content {
        width: 420px;
        height: 383px;
        border-radius: 4px;
      }
    }
  }
  .resetBtn {
    cursor: pointer;
    width: 400px;
    height: 50px;
    background: rgba(0, 177, 255, 1);
    border-radius: 6px;
  }
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
  font-size: 18px;
}
.el-input__inner {
  background: rgb(229, 247, 255);
  border-radius: 6px;
  border: none;
  height: 50px;
  font-size: 18px;
}
.el-row {
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.el-dialog--center .el-dialog__body {
  padding: 25px 0px 30px;
}
.active:focus,
.active:hover {
  background: rgba(238, 238, 238, 1);
  cursor: pointer;
}
.codeFl {
  width: 215px;
  border-radius: 6px;
}
.codeFr {
  float: right;
  width: 150px;
  height: 50px;
  border-radius: 6px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  background-color: #00b1ff;
}
</style>
