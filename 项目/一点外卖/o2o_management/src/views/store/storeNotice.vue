<template>
  <div class="content clearfix">
   <div class="operation">
    <div class="clearfix">
      <el-form label-width="80px">
        <el-col :span="5">
          <el-form-item :label="$t('STORENOTICE.FORM.FONT1')" class="mgb0">
            <el-input :placeholder="$t('STORENOTICE.FORM.PLA1')" v-model="tempData.shopName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item :label="$t('STORENOTICE.FORM.FONT2')" class="mgb0">
            <el-input :placeholder="$t('STORENOTICE.FORM.PLA2')" v-model="tempData.noticeName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" style="padding-left:40px">
          <el-button @click="searchList" type="searchList" icon="el-icon-search">{{$t('STORENOTICE.BTN.FONT1')}}</el-button>
          <el-button @click="addShow" type="primary" icon="el-icon-plus">{{$t('STORENOTICE.BTN.FONT2')}}</el-button>
        </el-col>
      </el-form>
    </div>
  </div>
  <div class="table">
    <el-table
      :empty-text="$t('PUBLIC.TABELEMPTY')"
      v-loading="loading"
      border
      :data="tableData"
      style="width: 100%;margin-top:20px;">
      <el-table-column
        fixed
        width="50px"
        :label="$t('STORENOTICE.TABEL.FONT1')"
        align="center"
        type="index" >
      </el-table-column>
      <el-table-column
        prop="noticeName"
        :label="$t('STORENOTICE.TABEL.FONT2')"
        width="140"
        align="center" >
      </el-table-column>
      <el-table-column
        :label="$t('STORENOTICE.TABEL.FONT3')"
        width="180"
        align="center" >
        <template slot-scope="scope">
          {{scope.row.shopName != null ? scope.row.shopName : $t('STORENOTICE.TABEL.OTHER')}}
        </template>
      </el-table-column>
      <el-table-column
        prop="noticeContent"
        :label="$t('STORENOTICE.TABEL.FONT4')"
        width="180"
        align="center" >
      </el-table-column>
      <el-table-column
        prop="startTime"
        :label="$t('STORENOTICE.TABEL.FONT5')"
        width="180"
        align="center" >
      </el-table-column>
      <el-table-column
        prop="endTime"
        :label="$t('STORENOTICE.TABEL.FONT6')"
        width="200"
        align="center" >
      </el-table-column>
      <el-table-column
      :label="$t('STORENOTICE.TABEL.FONT7')"
      align="center" width="320">
      <template slot-scope="scope">
      <el-button type="primary" @click="editorShow(scope.row)" icon="el-icon-edit">{{ $t('STORENOTICE.OPERATION.FONT1') }}</el-button>
      <el-button type="danger" @click="del(scope.row.id)" icon="el-icon-delete">{{ $t('STORENOTICE.OPERATION.FONT2') }}</el-button>
      </template>
      </el-table-column>
    </el-table>
</div>
    <el-dialog :title="$t('STORENOTICE.DIALOG1.TITLE')" :visible.sync="addVisabilty" width="350px" :modal-append-to-body="false" >
      <el-form :model="addItem" :rules="rules" ref="addForm">
        <el-form-item :label="$t('STORENOTICE.DIALOG1.FONT1')" prop="noticeName">
          <el-input :placeholder="$t('STORENOTICE.DIALOG1.PLA1')" v-model="addItem.noticeName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.DIALOG1.FONT2')" prop="noticeContent">
          <el-input :placeholder="$t('STORENOTICE.DIALOG1.PLA2')" v-model="addItem.noticeContent" type="textarea"></el-input>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.SELECT1.TITLE')" prop="shopId">
          <!-- <el-input v-model="addItem.shopId"></el-input> -->
                 <el-select
                       v-model="tempData.shopId"
                       filterable
                       remote
                       :placeholder="$t('STORENOTICE.SELECT1.PLA1')"
                   :remote-method="searchNoticedStore" clearable
                   >
                   <el-option
                     v-for="item in shopIdList"
                     :key="item.id"
                     :value="item.id"
                     :label="item.shopName"
                       ></el-option>
                 </el-select>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.TIME1.TITLE')" prop="startTime">
          <el-date-picker
            v-model="addItem.startTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :placeholder="$t('STORENOTICE.TIME1.START')">
          </el-date-picker>
          <span style="width:60px;">-</span>
          <el-date-picker
            v-model="addItem.endTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :placeholder="$t('STORENOTICE.TIME1.END')">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisabilty=false">{{ $t('STORENOTICE.DIALOG1.BTN1') }}</el-button>
        <el-button type="primary" @click="submit('addForm')">{{ $t('STORENOTICE.DIALOG1.BTN2') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="$t('STORENOTICE.DIALOG2.TITLE')" :visible.sync="editorVisabilty" width="350px" :modal-append-to-body="false">
      <el-form :model="editorItem" :rules="rules" ref="editorForm">
        <el-form-item :label="$t('STORENOTICE.DIALOG2.FONT1')" prop="noticeName">
          <el-input :placeholder="$t('STORENOTICE.DIALOG2.PLA1')" v-model="editorItem.noticeName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.DIALOG2.FONT2')" prop="noticeContent">
          <el-input :placeholder="$t('STORENOTICE.DIALOG2.PLA2')" v-model="editorItem.noticeContent" type="textarea"></el-input>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.DIALOG2.FONT3')">
          <el-input :placeholder="$t('STORENOTICE.DIALOG2.PLA3')" v-model="editorItem.shopId" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('STORENOTICE.TIME1.TITLE')" prop="startTime">
          <el-date-picker
            v-model="editorItem.startTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :placeholder="$t('STORENOTICE.TIME1.START')">
          </el-date-picker>
          <span style="width:60px;">-</span>
          <el-date-picker
            v-model="editorItem.endTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :placeholder="$t('STORENOTICE.TIME1.END')">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorVisabilty=false">{{ $t('STORENOTICE.DIALOG2.BTN1') }}</el-button>
        <el-button type="primary" @click="submit('editorForm')">{{ $t('STORENOTICE.DIALOG2.BTN2') }}</el-button>
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
  storeNoticeList,
  storeNoticeAdd,
  storeNoticDel,
  storeNoticUpdate,
  storeNoticSearch,
  store
} from '@/api/index.js'
import pagination from '@/components/pagination'
export default {

  components: {
    pagination
  },
  data () {
    return {
      // 下拉搜素框
      shopIdList: [],
      // 表达验证规则
      rules: {
        noticeName: [{required: true, message: this.$t('STORENOTICE.RULES.FONT1'), tigger: 'blur'}],
        noticeContent: [{required: true, message: this.$t('STORENOTICE.RULES.FONT2'), tigger: 'blur'}],
        startTime: [{required: true, message: this.$t('STORENOTICE.RULES.FONT3'), tigger: 'blur'}],
        endTime: [{required: true, message: this.$t('STORENOTICE.RULES.FONT4'), tigger: 'blur'}]
      },
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {
        noticeName: null,
        shopName: null
      },
      // 搜索时用的数据
      searchData: {},
      // 分页数据
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 5
      },
      editorItem: {},
      // 编辑窗口分类可见性
      editorVisabilty: false,
      // 新增分类的窗口可见性
      addVisabilty: false,
      // 新增店铺公告
      addItem: {

      }
    }
  },
  methods: {
    // 初始化数据
    initData: function (page, size) {
      this.loading = true
      storeNoticeList({
        page: page || this.page.pageCurrent,
        size: size || this.page.pageSize,
        shopName: this.searchData.shopName,
        noticeName: this.searchData.noticeName
      }).then(res => {
        this.tableData = res.rows
        console.log(this.tableData)
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 删除
    del (id) {
      storeNoticDel({id}).then((res) => {
        this.initData()
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
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
    // 条件查询
    searchList: function () {
      this.searchData = this.$common.deepCopy(this.tempData)
      this.page.pageCurrent = 1
      this.initData(1)
    },
    close () {
      this.editorVisabilty = false
      this.addVisabilty = false
    },
    // 呼出添加框
    addShow () {
      this.$common.clearMessage(this.addItem)
      this.addVisabilty = true
    },
    // 呼出编辑框
    editorShow (row) {
      this.$common.clearMessage(this.editorItem)
      if (row.shopId === null) {
        row.shopId = ''
      }
      this.editorItem = this.$common.deepCopy(row)
      this.editorVisabilty = true
    },
    // 提交数据
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'editorForm') {
            storeNoticUpdate(this.editorItem).then((res) => {
              this.editorVisabilty = false
              this.initData()
            })
          } else {
            storeNoticeAdd(this.addItem).then((res) => {
              this.close()
              this.initData()
            })
          }
        } else {

        }
      })
    },
    searchNoticedStore (v) {
      this.$common.throttle(() => {
        store.storeName({
          shopName: v
        }).then((res) => {
          this.shopIdList = res.data
          console.log(this.shopIdList)
        })
      }
      )
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style>
.content {
  /*min-width: 1200px;*/
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  /*min-height: 800px;*/
}
h4 {
  text-align: left;
  color: #333333;
  font-size: 18px;
  font-family: PingFang-SC-Bold;
  padding-bottom: 25px;
  border-bottom: 1px solid #e1e1e1;
}
</style>
