<template>
  <div class="header contentHeader">
          <div class="title">一点外卖</div>
    <img src="../../assets/images/common/admin.png" alt>
    <section class="operationC" @mouseover="show" @mouseout="hide">
      <span>{{userName}}</span>
      <i class="el-icon-caret-bottom"></i>
      <el-collapse-transition>
        <nav class="operate" v-show="menuShow">
          <li @click="change">修改密码</li>
          <li @click="loginOut">退出登陆</li>
        </nav>
      </el-collapse-transition>
    </section>
    <el-dialog title="修改密码" :visible.sync="passVisabe" width="550" :modal-append-to-body="false" :before-close="closeHeader" >
      <el-form :model="changePassword" :rules="rules" ref="form">
        <el-form-item label="原始密码" prop="oldPassWord">
          <el-input type="password" v-model="changePassword.oldPassWord"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassWord">
          <el-input type="password" v-model.trim="changePassword.newPassWord"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="reNewPassWord">
          <el-input type="password" v-model="changePassword.reNewPassWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确认修改</el-button>
          <el-button type="danger" @click="closeHeader">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import {user} from '@/api/index.js'
export default {
  data () {
    // 验证密码是否一致
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.changePassword.newPassWord) {
        callback(new Error('两次输入密码不一致'))
      } else{
        callback()
      }
    }
    return {

      rules: {
        oldPassWord: [{required: true, message: '请输入原始密码', trigger: 'blur'}],
        newPassWord: [{required: true, message: '请输入新密码', trigger: 'blur'}, {
          min: 6, message: '密码长度不得低于6位', trigger: 'blur'
        }],
        reNewPassWord: [{validator: validatePass, trigger: 'blur'}]
      },
      // 修改密码窗口的可见性
      passVisabe: false,
      changePassword: {
        newPassWord: null,
        oldPassWord: null,
        reNewPassWord: null
      },
      userName: '',
      menuShow: false,
      form: {
        name: ''
      }
    }
  },
  methods: {
    // 关闭修改密码窗口
    closeHeader () {
      this.$refs['form'].resetFields()
      this.passVisabe = false
    },
    // 修改密码
    submit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          user.changePassword(this.changePassword).then((res) => {
            this.$refs['form'].resetFields()
            this.passVisabe = false
            this.$store.commit('clear')
            sessionStorage.clear()
            this.$router.push({path: '/login'})
          })
        }
      })
    },
    change () {
      this.passVisabe = true
    },
    show () {
      this.menuShow = true
    },
    hide () {
      this.menuShow = false
    },
    loginOut () {
      user.exit().then(res => {
        this.$store.commit('clear')
        sessionStorage.clear()
        this.$router.push({path: '/login'})
      })
    }
  },
  beforeMount () {
    this.userName = this.$store.state.currentUser
  }
}
</script>
<style lang="scss" scoped>
.title{
  text-align: center;
  line-height: 100px;
  color: #FFFFFF;
  font-size: 22px;
  width:280px;
  height:100px;
  background:rgba(0,177,255,1);
}
.contentHeader{
  position: relative;
  z-index: 999;
  background: white;
  background-size: cover;
  img{
    position: absolute;
    right: 200px;
    width: 60px;
    height: 60px;
    top: 20px;
  }
  .operationC{
    top: 50%;
    text-align: center;
    position: absolute;
    transform: translateY(-50%);
    right: 80px;
    min-width: 80px;
    color: #333333;
    font-size: 14px;
  }
  .operate{
    box-shadow: 5px 5px 5px rgb(238, 238, 238);
    border-radius: 2px ;
    background: white;
    margin-top: 10px;
    position: absolute;
    padding:10px;
    font-size: 14px;
    color: rgb(1, 96, 184);
   li{
     cursor: pointer;
     padding-top: 8px;
   }
  }}

</style>
