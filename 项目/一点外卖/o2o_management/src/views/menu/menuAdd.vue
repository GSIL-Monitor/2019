<template>
  <div class="addmenu">
    <div class="subTitleTop">
      <span v-if="!form.id">添加菜单</span>
      <span v-if="form.id">编辑菜单</span>
    </div>
    <div class="main">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="是否父级">
          <el-radio-group v-model="form.type" @change="sourceFilter(form.type)" :disabled="isparent">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单地址">
          <el-input v-model="form.url" :disabled="!isdisabled"></el-input>
        </el-form-item>
        <el-form-item label="菜单图标">
          <el-input v-model="form.icon" :disabled="isdisabled"></el-input>
        </el-form-item>
        <el-form-item label="父级列表">
          <el-select v-model="form.parentId" placeholder="请选择父级列表" :disabled="!isdisabled" >
            <el-option v-for="item in parentList" :key="item.index" :label="item.name" :value="item.id"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="菜单说明">
          <el-input
            type="textarea"
            v-model="form.remark"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >确认</el-button>
          <el-button
            type="primary"
            @click="$router.push({name:'menuctrl'})"
          >返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { menus } from '@/api/index.js'
export default {
  data () {
    return {
      form: {
        name: '',
        url: '',
        remark: '',
        icon: '',
        status: '',
        levels: 1,
        parentId: '',
        type: 1
      },
      isdisabled: true,
      isparent: false,
      stop: false,
      parentList: {}
      // menutype: [{value: 0, type: '目录'}, {value: 1, type: '菜单'}, {value: 2, type: '按钮'}]
    }
  },
  mounted () {
    if (this.$route.query.id) {
      console.log(this.$route)
      this.form = this.$route.query
      this.isparent = true
      if (this.form.type === 1) {
        this.isdisabled = true
      } else {
        this.isdisabled = false
      }
    }
    menus.menumsgparentlist({}).then(res => {
      this.parentList = res
    })
  },
  methods: {
    onSubmit () {
      this.check()
      if (this.stop) {
        if (this.form.id) {
          menus.menumsgedit(this.form).then(res => {
            this.$router.push({ name: 'menuctrl' })
          })
        } else {
          menus.menumsgadd(this.form)
            .then(res => {
              this.$router.push({ name: 'menuctrl' })
            })
        }
      }
    },
    check () {
      if (!this.form.name) {
        this.$message({
          message: '请将信息输入完整！',
          type: 'warning'
        })
        this.stop = false
      }
      this.stop = true
    },
    sourceFilter (type) {
      if (type === 0) {
        this.isdisabled = false
        this.form.parentId = ''
        this.form.url = ''
      } else {
        this.isdisabled = true
        this.form.icon = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.addmenu {
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
.addmenu {
  .el-button--primary {

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
