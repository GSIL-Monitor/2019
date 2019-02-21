<template>
  <div class="addGoods">
    <div class="subTitleTop">
      <span v-if="!form.id">添加商品</span>
      <span v-if="form.id">编辑商品</span>
    </div>
    <div class="main">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分值">
          <el-input v-model="form.buyIntegral"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img
              v-if="form.pic"
              :src="form.pic"
              class="avatar"
            >
            <i
              v-else
              class="el-icon-plus avatar-uploader-icon"
            ></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品状态">
          <el-select v-model="form.status">
            <el-option
              label="上架"
              value="1"
            ></el-option>
            <el-option
              label="下架"
              value="2"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input v-model="form.inventory"></el-input>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-input
            type="textarea"
            v-model="form.detail"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { integral } from '@/api/index.js'
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        buyIntegral: '',
        detail: '',
        inventory: '',
        name: '',
        pic: '',
        status: ''
      },
      shop: true,
      uploadUrl: axios.defaults.baseURL + 'common/upload'
    }
  },
  mounted () {
    if (this.$route.query.id) {
      this.form = this.$route.query
      this.form.buyIntegral = this.$route.query.integration
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.form.pic = URL.createObjectURL(file.raw)
    },
    onSubmit () {
      this.check()
      if (this.stop) {
        if (this.form.id) {
          integral.updEntityproduct(this.form).then(res => {
            this.$router.push({ name: 'Integral' })
          })
        } else {
          integral.addEntityproduct(this.form).then(res => {
            this.$router.push({ name: 'Integral' })
          })
        }
      }
    },
    check () {
      if (!this.form.buyIntegral || !this.form.inventory || !this.form.name || !this.form.pic || !this.form.status) {
        this.$message({
          message: '请将信息输入完整！',
          type: 'warning'
        })
        this.stop = false
      }
      this.stop = true
    }
  }
}
</script>
<style lang="scss" scoped>
.addGoods {
  .main {
    width: 870px;
    .el-form {
      width: 460px;
      margin: 60px auto 0;
      .line {
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss">
.addGoods {
  .el-button--primary {
    margin: 0 100px;
  }
  .el-upload {
    border: 1px dashed #bbb;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #bbb;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
