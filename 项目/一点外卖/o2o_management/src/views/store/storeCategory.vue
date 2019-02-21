<template>
    <div class="content storeCategory">
  <div class="operation">
     <el-row :gutter="40">
         <el-col :span="5" >
            <el-input v-model="tempData.categoryName">
              <template slot="prepend">{{ $t('STORECATEGORY.FORM.FONT1') }}</template>
            </el-input>
         </el-col>
         <el-col :span='5'>
           <el-select v-model="page.language" placeholder="请选择父级列表" >
             <el-option
                v-for="item in language"
                :value="item.id"
                :key="item.index"
                :label="item.name"
                >
             </el-option>
          </el-select>
         </el-col>
         <el-col :span="6">
           <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('STORECATEGORY.BTN.FONT1') }}</el-button>
           <el-button type="primary" @click="addShow()" icon="el-icon-plus">{{ $t('STORECATEGORY.BTN.FONT2') }}</el-button>
         </el-col>
    </el-row>
  </div>
  <div class="table">
        <el-table
          :empty-text="$t('PUBLIC.TABELEMPTY')"
          :data="tableData"
          v-loading="loading"
        >
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT1')" align="center" type="index"></el-table-column>
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT2')" prop="categoryCode" align="center" ></el-table-column>
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT3')" prop="serialNumber" align="center"></el-table-column>
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT4')"  align="center">
          <template slot-scope="scope">{{$t('STORECATEGORY.TABEL.OTHER')}}</template>
        </el-table-column>
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT5')" prop="categoryName" align="center"></el-table-column>
        <el-table-column :label="$t('STORECATEGORY.TABEL.FONT6')" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="editorShow(scope.row)" icon="el-icon-edit">{{$t('STORECATEGORY.OPERATION.BTN1')}}</el-button>
            <el-button type="danger" @click="del(scope.row.categoryCode)" icon="el-icon-delete">{{$t('STORECATEGORY.OPERATION.BTN2')}}</el-button>
          </template>
        </el-table-column>
    </el-table>
</div>
      <el-dialog :title="$t('STORECATEGORY.DIALOG1.TITLE')" :visible.sync="addVisabilty" width="450px" :modal-append-to-body="false">
        <el-form :model="newCategory" :rules="rule" ref="add">
          <el-form-item :label="$t('STORECATEGORY.DIALOG1.FONT1')" prop="categoryName">
            <el-input :placeholder="$t('STORECATEGORY.DIALOG1.PLA1')" v-model="newCategory.categoryName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('STORECATEGORY.DIALOG1.FONT2')" prop="categoryImg">
                  <el-upload
                    class="avatar-uploader"
                    :action="uplaadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="newCategory.categoryImg" :src="newCategory.categoryImg" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">{{ $t('STORECATEGORY.DIALOG1.BTN1') }}</el-button>
          <el-button type="primary" @click="add">{{ $t('STORECATEGORY.DIALOG1.BTN2') }}</el-button>
        </div>
      </el-dialog>
      <el-dialog :title="$t('STORECATEGORY.DIALOG2.TITLE')" :visible.sync="editorVisabilty" width="450px" :modal-append-to-body="false">
        <el-form>
          <el-form-item :label="$t('STORECATEGORY.DIALOG2.FONT1')">
            <el-input :placeholder="$t('STORECATEGORY.DIALOG2.PLA1')" v-model="editorItem.categoryCode" disabled></el-input>
          </el-form-item>
          <el-form-item :label="$t('STORECATEGORY.DIALOG2.FONT2')">
            <el-input :placeholder="$t('STORECATEGORY.DIALOG2.PLA2')" v-model="editorItem.categoryName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('STORECATEGORY.DIALOG2.FONT3')">
            <el-input :placeholder="$t('STORECATEGORY.DIALOG2.PLA3')" v-model="editorItem.serialNumber"></el-input>
          </el-form-item>
          <el-form-item :label="$t('STORECATEGORY.DIALOG2.FONT4')">
          <el-upload
                    class="avatar-uploader"
                    :action="uplaadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="editorItem.categoryImg" :src="editorItem.categoryImg" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">{{ $t('STORECATEGORY.DIALOG2.BTN1') }}</el-button>
          <el-button type="primary" @click="update">{{ $t('STORECATEGORY.DIALOG2.BTN2') }}</el-button>
        </div>
      </el-dialog>
      <pagination :current-page="page.pageCurrent"
                     :page-size="page.pageSize"
                     :total="page.pageNum"
                     @sizeChange="sizeChange"
                     @currentChange="currentChange"
                  >
     </pagination>

    </div>

</template>

<script>
import {
  storeCategoryList,
  storeCategorAdd,
  storeCategorDel,
  storeCategorSearch,
  storeCategorUpdate,
  upImg,
  getLanguageList
} from '@/api/index.js'
import pagination from '@/components/pagination'
import axios from 'axios'
export default {
  components: {
    pagination
  },
  data () {
    return {
      // 表单提交验证
      rule: {
        categoryName: [
          { required: true, message: this.$t('STORECATEGORY.RULE.FONT1'), tigger: 'blur' }
        ],
        categoryImg: [
          { required: true, message: this.$t('STORECATEGORY.RULE.FONT2'), tigger: 'change' }
        ]
      },
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {
        categoryName: null
      },
      // 搜索时用的数据
      searchData: {},
      // 分页数据
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 5,
        language: '1'
      },
      uplaadUrl: axios.defaults.baseURL + 'common/upload',
      editorItem: {},
      // 编辑窗口分类可见性
      editorVisabilty: false,
      // 新增分类的窗口可见性
      addVisabilty: false,
      // 新增店铺类别
      newCategory: {
        categoryImg: '',
        categoryName: ''
      },
      language: []
    }
  },
  methods: {
    // 初始化数据
    initData: function (page, size) {
      this.loading = true
      storeCategoryList({
        page: page || this.page.pageCurrent,
        size: size || this.page.pageSize,
        categoryName: this.searchData.categoryName,
        language: this.page.language
      }).then(res => {
        console.log(this.page)
        this.tableData = res.rows
        this.page.pageNum = res.count
      })
      // 获取语言分类
      getLanguageList({code: 'LANGUAGE'})
        .then(res => {
          this.language = res
        })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 添加类别
    add: function () {
      this.$refs['add'].validate(vaild => {
        if (vaild) {
          storeCategorAdd(this.newCategory).then(res => {
            this.$common.clearMessage(this.searchData)
            this.close()
            this.initData()
          })
        } else {

        }
      })
    },
    // 删除店铺类别
    del: function (categoryCode) {
      this.loading = true
      storeCategorDel({ categoryCode }).then(res => {
        this.initData()
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 更新店铺类别
    update: function () {
      storeCategorUpdate({
        categoryCode: this.editorItem.categoryCode,
        categoryImg: this.editorItem.categoryImg,
        categoryName: this.editorItem.categoryName,
        serialNumber: parseInt(this.editorItem.serialNumber)
      }).then(res => {
        this.editorVisabilty = false
        this.initData()
      })
    },
    // 条件查询
    searchList: function () {
      this.searchData = Object.create(this.tempData)
      this.page.pageCurrent = 1
      this.initData(1)
    },
    // 页数改变时的回调
    currentChange (val) {
      this.page.pageCurrent = val
      this.initData()
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.page.pageSize = val
      this.page.pageCurrent = 1
      this.initData(1)
    },
    // 上传图片
    beforeAvatarUpload (file) {
      // const isJPG = file.type === 'image/png'
      const isJPG = true
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error(this.$t('PUBLIC.MESSAGE.FONT3'))
      }
      if (!isLt2M) {
        this.$message.error(this.$t('PUBLIC.MESSAGE.FONT4'))
      }
      return isJPG && isLt2M
    },
    // 图片上传成功回调
    handleAvatarSuccess (res) {
      if (res.code === 0) {
        this.$message.success(this.$t('PUBLIC.MESSAGE.FONT5'))
        if (this.editorVisabilty) {
          this.editorItem.categoryImg = JSON.parse(res.data).fileUrl
        } else {
          this.newCategory.categoryImg = JSON.parse(res.data).fileUrl
        }
      } else {
        this.$message.error(this.$t('PUBLIC.MESSAGE.FONT6'))
      }
    },
    // 打开编辑类别窗口
    editorShow (row) {
      this.$common.clearMessage(this.editorItem)
      this.editorItem = this.$common.deepCopy(row)
      this.editorVisabilty = true
    },
    // 关闭窗口清除窗口的信息
    close () {
      this.editorVisabilty = false
      this.addVisabilty = false
    },
    addShow () {
      this.$common.clearMessage(this.newCategory)
      this.addVisabilty = true
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss">
body {
  background: #fff;
}
.dialog-footer {
  text-align: center;
}
</style>
<style lang="scss">
.storeCategory {
  .avatar-uploader {
    margin-left: 30%;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
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
}
</style>
