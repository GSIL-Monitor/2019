<template>
    <div class="content clearfix roleMessage">
    <div class="operation">
        <el-row>
            <el-col :span="8">
                    <el-input :placeholder="$t('ROLEMESSAGE.FORM.PLA1')" v-model=" tempData.roleName">
                        <template slot="prepend">{{ $t('ROLEMESSAGE.FORM.FONT1') }}</template>
                    </el-input>
            </el-col>
             <el-button type="primary" style="margin-left:50px;" @click="searchList" icon="el-icon-search">{{ $t('ROLEMESSAGE.BTN.FONT1') }}</el-button>
             <el-button type="primary" @click="add" icon="el-icon-plus">{{ $t('ROLEMESSAGE.BTN.FONT2') }}</el-button>
        </el-row>
    </div>
    <div class="table">
        <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" class="mgt20"
                :data="roleDataList"
                v-loading="loading2">
               <el-table-column
               :label="$t('ROLEMESSAGE.TABEL.FONT1')"
               type="index"
               width="150"
               align="center">
               </el-table-column>
               <el-table-column
               :label="$t('ROLEMESSAGE.TABEL.FONT2')"
               prop="roleName">
               </el-table-column>
               <el-table-column
               :label="$t('ROLEMESSAGE.TABEL.FONT3')"
               >
               <template slot-scope="scope">
                      <el-button type="primary" icon="el-icon-edit" @click="editor(scope.row.id)" :disabled="disable" >{{ $t('ROLEMESSAGE.TABEL.OTHER.FONT1') }}</el-button>
               </template>
               </el-table-column>
               <el-table-column
                  :label="$t('ROLEMESSAGE.TABEL.FONT4')">
                  <template slot-scope="scope">
                      <el-button type="primary" icon="el-icon-edit" @click="editorRoleMessage(scope.row.id,scope.row.roleName,scope.row.description)">{{ $t('ROLEMESSAGE.TABEL.OTHER.FONT2') }}</el-button>
                      <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id,scope.row.$index)">{{ $t('ROLEMESSAGE.TABEL.OTHER.FONT3') }}</el-button>
                  </template>
               </el-table-column>
        </el-table>
      </div>
         <pagination :current-page="page.currentPage"
                     :page-size="page.pageSize"
                     :total="page.pageNum"
                     @sizeChange="sizeChange"
                     @currentChange="currentChange"
         >
         </pagination>
                <el-dialog
                        placement="top-start"
                        width="400px"
                        :visible="addRoleData.visability"
                        :title="$t('ROLEMESSAGE.DIALOG.TITLE')"
                        transition="fade-in-linear"
                        :modal-append-to-body="false"
                        :show-close="false"
                        >
                          <el-row>
                            <el-col :span="18">
                            <el-input  v-model="addRoleData.roleName">
                              <template slot="prepend"  :placeholder="$t('ROLEMESSAGE.DIALOG.PLA1')">{{ $t('ROLEMESSAGE.DIALOG.FONT1') }}</template>
                            </el-input>
                            </el-col>
                          </el-row>
                          <el-row class="mgt20">
                            <el-col :span="24">
                                    <el-input
                                    type="textarea"
                                    size="medium"
                                    :placeholder="$t('ROLEMESSAGE.DIALOG.PLA2')"
                                    v-model="addRoleData.description" >
                                    </el-input>
                              </el-col>
                          </el-row>
                          <div class="mgt20 button-box" >
                            <el-button type="primary" icon="el-icon-check" @click="upLoad">{{ $t('ROLEMESSAGE.DIALOG.BTN1') }}</el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="clearMessage(addRoleData)">{{ $t('ROLEMESSAGE.DIALOG.BTN2') }}</el-button>
                            <el-button type="warning" @click="close">{{ $t('ROLEMESSAGE.DIALOG.BTN3') }}</el-button>
                          </div>
                 </el-dialog>
                  <el-dialog
                      placement="top-start"
                      width="600px"
                      :visible="editorData.visability"
                      :title="$t('ROLEMESSAGE.DIALOG2.TITLE')"
                      transition="fade-in-linear"
                      :modal-append-to-body="false"
                      :show-close="false"
                      setChecked="node"
                    >
                  <el-tree
                      accordion
                      :data="editorData.dataList"
                      show-checkbox
                      node-key="id"
                      ref="tree"
                      highlight-current
                      :props="defaultProps">
                    </el-tree>
                      <div class="mgt20 button-box" >
                        <el-button type="primary" icon="el-icon-check" @click="changeRight">{{ $t('ROLEMESSAGE.DIALOG2.FONT1') }}</el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="clearTree">{{ $t('ROLEMESSAGE.DIALOG2.FONT2') }}</el-button>
                        <el-button type="warning" @click="close">{{ $t('ROLEMESSAGE.DIALOG2.FONT3') }}</el-button>
                    </div>
          </el-dialog>
            <el-dialog
                      placement="top-start"
                      width="400"
                      :visible="editorRoleData.visability"
                      :title="$t('ROLEMESSAGE.DIALOG3.TITLE')"
                      transition="fade-in-linear"
                      :modal-append-to-body="false"
                      :show-close="false"
                      setChecked="node"
            >
              <el-row>
                          <el-form :model="editorRoleData" ref="editorForm" :rules="rule">
                                <el-form-item>
                                  <el-col :span="18">
                                      <el-input  v-model="editorRoleData.id" disabled>
                                        <template slot="prepend"  :placeholder="$t('ROLEMESSAGE.DIALOG3.PLA1')">{{ $t('ROLEMESSAGE.DIALOG3.FONT1') }}</template>
                                      </el-input>
                              </el-col>
                                </el-form-item>
                         <el-form-item prop="roleName">
                                <el-col :span="18" class="mgt20  clearfix">
                                        <el-input  v-model=" editorRoleData.roleName">
                                          <template slot="prepend"  :placeholder="$t('ROLEMESSAGE.DIALOG3.PLA2')">{{ $t('ROLEMESSAGE.DIALOG3.FONT2') }}</template>
                                        </el-input>
                                </el-col>
                         </el-form-item>
                                    <el-input
                                      class="mgt20"
                                      type="textarea"
                                      size="medium"
                                      :placeholder="$t('ROLEMESSAGE.DIALOG3.PLA3')"
                                      v-model="editorRoleData.description" >
                                    </el-input>
                          <div class="mgt20 button-box" >
                                    <el-button type="primary" icon="el-icon-check" @click="submit">{{ $t('ROLEMESSAGE.DIALOG3.BTN1') }}</el-button>
                                    <!-- <el-button type="danger" i @click="clearMessage(editorRoleData)">清空</el-button> -->
                                    <el-button type="danger" icon="el-icon-delete" @click="close">{{ $t('ROLEMESSAGE.DIALOG3.BTN2') }}</el-button>
                          </div>
                          </el-form>
                   </el-row>

            </el-dialog>
    </div>
</template>

<script>
import { admin } from '@/api/index.js'
import pagination from '@/components/pagination'
export default {
  components: {
    pagination
  },
  data () {
    return {
      rule: {
        roleName: [
          { required: true, message: this.$t('ROLEMESSAGE.RULE.FONT1'), tigger: 'blur' }
        ]
      },
      disable: false,
      // 树形图配置
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 页数信息
      loading2: true,
      page: {
        pageNum: 10,
        currentPage: 1,
        pageSize: 5
      },
      tempData: {},
      // 搜索信息
      serData: {
        roleName: ''
      },
      // 角色内容编辑
      editorRoleData: {
        id: '',
        visability: false,
        roleName: '',
        description: ''
      },
      // 角色权限编辑
      editorData: {
        id: '',
        visability: false,
        dataList: [],
        selectedList: []
      },
      // 添加角色信息
      addRoleData: {
        visability: false,
        roleName: '',
        description: ''
      },
      roleDataList: [],
      allDataList: []
    }
  },
  methods: {
    searchList () {
      this.serData = this.$common.deepCopy(this.tempData)
      this.page.currentPage = 1
      this.initData(1)
    },
    submit () {
      this.$refs['editorForm'].validate(valid => {
        if (valid) {
          admin
            .editorRoleMessage({
              id: this.editorRoleData.id,
              description: this.editorRoleData.description,
              roleName: this.editorRoleData.roleName
            })
            .then(res => {
              if (res.msg === 'success') {
                this.$message.success(this.$t('PUBLIC.MESSAGE.FONT8'))
                this.clearMessage(this.editorRoleData)
                this.close()
                this.initData()
              } else {
                this.$message(this.$t('PUBLIC.MESSAGE.FONT9'))
              }
            })
        } else {

        }
      })
    },
    // 改变当前页面显示数量触发的方法
    sizeChange (val) {
      this.page.pageSize = val
      this.page.currentPage = 1
      this.initData(1)
    },
    currentChange (val) {
      this.page.currentPage = val
      this.initData()
    },
    // 编辑角色的权限
    editor (id) {
      var that = this
      that.editorData.id = id
      admin
        .limitList({ sysRoleId: id })
        .then(res => {
          that.initList(res)
          that.editorData.visability = true
        })
        .then(() => {
          that.$refs.tree.setCheckedNodes(this.editorData.selectedList)
        })
    },
    clearTree () {
      this.$refs.tree.setCheckedNodes([])
    },
    // 改变角色权限
    changeRight () {
      let sysMenuIds = []
      this.$refs.tree.getHalfCheckedNodes().forEach(item => { // 获取班选中的node
        sysMenuIds.push(item.id)
      })
      this.$refs.tree.getCheckedNodes().forEach(item => {
        sysMenuIds.push(item.id)
      })
      admin
        .editorRole({
          id: this.editorData.id,
          sysMenuIds
        })
        .then(res => {
          this.close()
        })
    },
    // 写的不好,抽空用递归重写 (修改角色权限TREE的数据格式)
    initList (option) {
      var that = this
      let list = option.children
      list.forEach(function (item) {
        let obj = {
          label: item.text,
          id: item.id,
          children: item.children,
          open: item.state.selected
        }
        that.editorData.dataList.push(obj)
      })
      that.editorData.dataList.forEach(function (item) {
        let obj = item.children
        let replaceList = []
        obj.forEach(function (item) {
          let replace = {
            label: item.text,
            id: item.id,
            open: item.state.selected
          }
          if (replace.open === true) {
            that.editorData.selectedList.push(replace)
          }
          replaceList.push(replace)
        })
        item.children = replaceList
      })
    },
    // 打开添加角色窗口
    add () {
      this.addRoleData.visability = true
    },
    // 关闭窗口
    close () {
      var that = this
      this.clearMessage(this.addRoleData)
      new Promise((resolve, reject) => {
        that.editorRoleData.visability = false
        that.addRoleData.visability = false
        that.editorData.visability = false
        that.disable = true
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(() => {
        that.disable = false
        this.editorData.selectedList = []
        this.editorData.dataList = []
      })
    },
    del (id, index) {
      // var that = this
      // admin.delRole({ id }).then(res => {
      // if (res.msg === 'success') {
      // this.roleDataList.splice(index, 1)
      // that.$message.success(this.$t('PUBLIC.MESSAGE.FONT10'))
      // } else {
      //  that.$message.error(res.msg)
      // }
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        admin.delRole({ id }).then(res => {
          this.initData()
        })
      })
      console.log(index, id)
    },
    // 添加新角色
    upLoad () {
      var that = this
      if (this.addRoleData.roleName === '') {
        this.$message.error(this.$t('PUBLIC.MESSAGE.FONT11'))
      } else {
        admin
          .addRole({
            roleName: this.addRoleData.roleName,
            description: this.addRoleData.description
          })
          .then(res => {
            this.clearMessage(this.addRoleData)
            this.close()
            that.initData()
          })
      }
    },
    // 编辑角色信息
    editorRoleMessage (id, roleName, description) {
      this.editorRoleData.id = id
      this.editorRoleData.roleName = roleName
      this.editorRoleData.description = description
      this.editorRoleData.visability = true
    },
    // 关闭窗口时清除信息
    clearMessage (obj) {
      var arr = Object.keys(obj)
      arr.forEach(function (item) {
        obj[item] = ''
      })
    },
    // 翻页 添加 删除 时初始化信息
    initData (page, size) {
      var that = this
      that.loading2 = true
      admin
        .roleList({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize,
          roleName: that.serData.roleName
        })
        .then(res => {
          this.roleDataList = res.rows
          this.page.pageNum = res.count
        })
        .then(() => {
          setTimeout(function () {
            that.loading2 = false
          }, 500)
        })
    }
  },

  beforeMount () {
    this.initData()
  }
}
</script>
<style lang="scss" scoped>
.button-box {
  display: flex;
  justify-content: center;
}

.content {
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
}
.el-tree-node {
  margin-bottom: 15px;
}
/deep/ .el-dialog__header {
  border-bottom: 1px solid #666666;
}
/deep/ .el-tree-node__content {
  margin-bottom: 5px;
  .el-tree-node__label {
    font-size: 20px;
  }
}
</style>
