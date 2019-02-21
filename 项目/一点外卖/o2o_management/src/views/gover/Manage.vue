<script src="../../../build/webpack.base.conf.js"></script>
<template>
<div class="content clearfix">
    <el-dialog
            placement="top-start"
            width="400"
            :visible.sync="addAdminVis"
            :title="$t('MANAGE.DIALOG.TITLE')"
            transition="fade-in-linear"
            :modal-append-to-body="false"
            :show-close="false"
             >
            <el-row :span=12 class="mgt20">
              <el-col :span="18">
                        <el-input :placeholder="$t('MANAGE.DIALOG.PLA1')" v-model="addAdminObject.userAccount">
                               <template slot="prepend">{{ $t('MANAGE.DIALOG.FONT1') }}</template>
                    </el-input>
              </el-col>
            </el-row>
            <el-row :span=12 class="mgt20">
              <el-col :span="18">
                        <el-input :placeholder="$t('MANAGE.DIALOG.PLA2')" v-model="addAdminObject.userName">
                               <template slot="prepend">{{ $t('MANAGE.DIALOG.FONT2') }}</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row :span=12 class="mgt20">
              <label for="" style="margin-right:10px;color:rgb(147,147,147);padding-left:15px;">{{ $t('MANAGE.SELECT1.FONT1') }}</label>
              <el-select v-model="languageNum" @change="lanSelect" :placeholder="$t('MANAGE.SELECT1.PLA1')">
                <el-option
                  v-for="item in languageArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-row>
            <el-row :span=12 class="mgt20">
              <label for="" style="margin-right:10px;color:rgb(147,147,147);padding-left:15px;">{{ $t('MANAGE.SELECT2.FONT1') }}</label>
                    <el-select :placeholder="$t('MANAGE.SELECT2.PLA1')" v-model="sysRoleId"  clearable>
                        <el-option v-for="item in selectingData" :key="item.index" :label="item.label" :value="item.id"></el-option>
                    </el-select>
            </el-row>
           <div class="box-size">
              <el-button type="success" icon="el-icon-check" @click="submitAddAdmin">{{ $t('MANAGE.DIALOG.BTN1') }}</el-button>
              <el-button type="danger" icon="el-icon-delete" @click="clearMessage">{{ $t('MANAGE.DIALOG.BTN2') }}</el-button>
              <!-- <el-button @click="closeAdd" type="warning">关闭</el-button> -->
           </div>
</el-dialog>
    <div class="operation">
        <el-row :gutter='20'>
            <div class="clearfix">
            <el-col :span=8>
                <el-input id='account' :placeholder="$t('MANAGE.FORM.PLA1')" v-model="serData.userName"><template slot="prepend">{{ $t('MANAGE.FORM.FONT1') }}</template></el-input>
            </el-col>
            <el-col :span=8>
                <el-row :gutter='5'>
                <label>{{ $t('MANAGE.SELECT3.FONT1') }}</label>
                <el-select :placeholder="$t('MANAGE.SELECT3.PLA1')" v-model="serData.roleName"  clearable>
                <el-option v-for="item in selectingData" :key='item.index' :value="item.label"  :label="item.label"></el-option>
                </el-select>
                </el-row>
            </el-col>
            <el-col :span=8>
              <el-button type="primary" @click="addAdmin" icon="el-icon-plus">{{ $t('MANAGE.BTN.FONT2') }}</el-button>
              <el-button type="primary" @click="search" icon="el-icon-search">{{ $t('MANAGE.BTN.FONT1') }}</el-button>
            </el-col>
            </div>
            </el-row>
    </div>

         <div class="table">
                    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" style="width:100%" :data="adminList"
                        v-loading="loading">
                        <el-table-column
                            type="index"
                            :label="$t('MANAGE.TABEL.FONT7')"
                            width="60">
                        </el-table-column>
                        <el-table-column
                            prop="userAccount"
                            :label="$t('MANAGE.TABEL.FONT1')"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="userName"
                            :label="$t('MANAGE.TABEL.FONT2')">
                        </el-table-column>
                        <el-table-column
                            prop="roleName"
                            :label="$t('MANAGE.TABEL.FONT3')">
                        </el-table-column>
                        <el-table-column
                            prop="createTime"
                            :label="$t('MANAGE.TABEL.FONT4')">
                        </el-table-column>
                        <el-table-column
                            prop="endLoginTime"
                            :label="$t('MANAGE.TABEL.FONT5')">
                        </el-table-column>
                           <el-table-column
                            :label="$t('MANAGE.TABEL.FONT6')"
                            width="250"
                            prop="text">
                            <template slot-scope="scope">
                                <el-button type="primary" icon="el-icon-edit" @click="Frozen(scope.row.id,scope.row.status,scope.row)">{{scope.row.status===1? $t('MANAGE.OPERATION.FONT1') : $t('MANAGE.OPERATION.FONT2')}}</el-button>
                                <el-button type="danger" icon="el-icon-delete" @click="ConfirmdelAdmin(scope.row.id,scope.$index)">{{ $t('MANAGE.OPERATION.FONT3') }}</el-button>
                            </template>
                        </el-table-column>
                        </el-table>
           </div>
                          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :page-sizes="[10,5,20]"
                            :current-page="pageData.pageNo"
                            :page-size="pageData.pagesizeNo"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="pageData.dataTotal" class="mgt20">
                          </el-pagination>
            </div>
            </template>
<script>
import {
  administratorList,
  FrozenAdmin,
  addAdministrator,
  getCharacterMessage,
  admin
} from '@/api/index.js'
import Vue from 'vue'
export default {
  data () {
    return {
      loading: false,
      addAdminObject: {
        userAccount: '',
        userName: ''
      },
      languageArr: [
        {value : 1, label: "中文"},
        {value : 2, label: "English"},
        {value : 3, label: "Türk dili"},
        {value : 4, label: "العربية"},
        {value : 5, label: "Le français"},
        {value : 6, label: "lingua italiana"},
        {value : 7, label: "日本語"},
        {value : 8, label: "Người việt nam"},
        {value : 9, label: "Deutsch"}
      ],
      languageNum: 1,
      // 分页数据信息
      pageData: {
        dataTotal: null,
        pageNo: 1,
        pagesizeNo: 10
      },
      // 搜索时的用户名
      sysRoleId: '',
      addAdminVis: false,
      serData: {
        roleName: '',
        userName: ''
      },
      adminList: [],
      // 添加选取的ID和管理员权限的储存的信息
      selectingData: []
    }
  },
  methods: {
    lanSelect (val) {
      console.log(val)
      this.addAdminObject['language'] = String(val)
    },
    Frozen: function (id, status, row) {
      console.log(row)
      if (status === 1) {
        FrozenAdmin({ id, status: 0 }).then(res => {
            row.status=0

        })
      } else {
        FrozenAdmin({ id, status: 1 }).then(res => {
                  row.status=1
        })
      }
    },
    // 重新渲染表格
    initTable (res) {
      this.adminList = res.rows
      this.pageData.dataTotal = res.count
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 条件查询
    search () {
      let params = {
        page: this.pageData.pageNo,
        size: this.pageData.pagesizeNo,
        roleName: this.serData.roleName,
        userName: this.serData.userName
      }
      administratorList(params).then((res) => {
        this.initTable(res)
      })
    },
    // 初始化数据
    initData: function () {
      administratorList({ page: 1, size: 10 }).then(res => {
        this.loading = true
        console.log(res)
        this.initTable(res)
      })
      getCharacterMessage({page: 1, size: 10}).then(res => {
        let data = res.rows
        console.log(data)
        data.forEach(item => {
          this.selectingData.push({label: item.roleName, id: item.id})
        })
      })
    },
    addAdmin () {
      this.addAdminVis = true
    },
    closeAdd () {
      this.clearMessage()
      this.addAdminVis = false
    },
    clearMessage () {
      var obj = this.addAdminObject
      var arr = Object.keys(obj)
      arr.forEach(function (item) {
        obj[item] = ''
      })
    },
    submitAddAdmin () {
      var that = this
      // var sysUser = this.addAdminObject
      // var sysRoleId = this.sysRoleId

      this.addAdminObject['sysRoleId'] = this.sysRoleId
      addAdministrator(this.addAdminObject).then(res => {
        console.log(res)
          that.clearMessage()
          that.closeAdd()
          this.initData()
      })
    },
    ConfirmdelAdmin (id, index) {
      var that = this
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: "warning"
      })
        .then(() => {
          admin.delAdmin({id}).then(res => {
            this.initData()
          })
        })
    },
    handleSizeChange (val) {
      this.pageData.pagesizeNo = val
      administratorList({
        page: this.pageData.pageNo,
        size: this.pageData.pagesizeNo,
        userName: this.serData.userName,
        roleName: this.serData.roleName
      }).then(res => {
        this.loading = true
        this.initTable(res)
      })
    },
    handleCurrentChange (val) {
      this.pageData.pageNo = val
      administratorList({
        page: this.pageData.pageNo,
        size: this.pageData.pagesizeNo,
        userName: this.serData.userName,
        roleName: this.serData.roleName
      }).then(res => {
        this.loading = true
        this.initTable(res)
      })
    }
  },

    beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.content {
  /*min-width: 1200px;*/
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  /*min-height: 800px;*/
}
.roleL {
  line-height: 40px;
  color: #e1e1e1;
}
h4 {
  text-align: left;
  color: #333333;
  font-size: 18px;
  font-family: PingFang-SC-Bold;
  padding-bottom: 25px;
  border-bottom: 1px solid #e1e1e1;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.el-table {
  padding-top: 20px;
  width: 100%;
}
.box-size {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
