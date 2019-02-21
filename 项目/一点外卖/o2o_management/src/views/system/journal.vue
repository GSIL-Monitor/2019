<template>
  <div class="content storeAudit">
    <div class="operation">
      <el-form label-width="100px" label-position="right" >
        <el-row>
          <el-col :span="12">
            <el-form-item :label="$t('JOURNAL.TIME.TITLE')" class="mgb0">
              <el-date-picker
                type="date"
                value-format="yyyy-MM-dd"
                :placeholder="$t('JOURNAL.TIME.START')"
                v-model="tempData.startTime"
              ></el-date-picker>
              <span style="width:60px;">-</span>
              <el-date-picker
                type="date"
                value-format="yyyy-MM-dd"
                :placeholder="$t('JOURNAL.TIME.END')"
                v-model="tempData.endTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item class="mgb0">
              <el-button icon="el-icon-search" type="primary" @click="searchList">{{ $t('JOURNAL.BTN.FONT1') }}</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item class="mgb0">
              <el-button icon="el-icon" type="primary" @click="clearSearch">{{ $t('JOURNAL.BTN.FONT2') }}</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table">
      <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="tableData" border >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="createTime" :label="$t('JOURNAL.TABEL.FONT1')" align="center"></el-table-column>
        <el-table-column prop="operation" :label="$t('JOURNAL.TABEL.FONT2')" align="center"></el-table-column>
        <el-table-column prop="userAccount" :label="$t('JOURNAL.TABEL.FONT3')" align="center"></el-table-column>
        <el-table-column prop="username" :label="$t('JOURNAL.TABEL.FONT4')" align="center"></el-table-column>
      </el-table>
    </div>
    <pagination
      :current-page="page.pageCurrent"
      :page-size="page.pageSize"
      :total="page.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    ></pagination>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import {sysLog} from '@/api/index'
export default {
  components: {
    pagination
  },
  data () {
    return {
      displayUrl: null,
      editorVisable: false,
      editorItem: {},
      areaList: [],
      categoryList: [],
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {},
      // 搜索时用的数据
      searchData: {},
      // 分页数据
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 10,
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    initData: function (page, size) {
      this.loading = true
      this.searchData = this.$common.deepCopy(this.tempData)
      this.searchData.page = this.page.pageCurrent
      this.searchData.size = this.page.pageSize
      var date = new Date()
      var sign1 = '-'
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = Number(date.getDate() - 1)
      var day2 = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (day >= 0 && day <= 9) {
        day = '0' + day
      }
      this.searchData.startTime = year + sign1 + month + sign1 + day
      this.searchData.endTime = year + sign1 + month + sign1 + day2
      console.log(this.searchData)
      sysLog(this.searchData).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    searchList: function () {
      /* this.searchData = this.$common.deepCopy(this.tempData)
      this.page.pageCurrent = 1
      this.initData(1) */
      this.searchData.startTime = this.tempData.startTime === undefined ? this.searchData.startTime : this.tempData.startTime
      this.searchData.endTime = this.tempData.endTime === undefined ? this.searchData.endTime : this.tempData.endTime
      console.log(this.tempData.endTime)
      console.log(this.searchData)
      sysLog(this.searchData).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.count
      })
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
    // 清除时间查询选择
    clearSearch () {
      this.tempData.startTime = ''
      this.tempData.endTime = ''
      this.initData()
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss">
  .businessImg{
    width: 80%;
    height: 300px;
  }
  .flbox{
    display: flex;
    justify-content: space-between;
  }
  .idImg{
    width: 100px;
    height: 100px;
  }
  .storeAudit{
  .editor{
  img{
    cursor: pointer;
  }
  .idImg{

    width: 300px;
    height: 300px;
  }
  }
  }
</style>
