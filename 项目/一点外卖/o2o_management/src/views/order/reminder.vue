<template>
  <div class="content">
  <div class="operation">
    <el-form :inline="true" label-width="100px" label-position="right">
      <el-form-item :label="$t('REMINDER.SELECT1.TITLE')">
        <!-- <el-select :placeholder="$t('REMINDER.SELECT1.PLA1')" v-model="tempData.shopName"></el-select> -->
        <el-input placeholder="请输入查询的店铺名称" v-model="tempData.shopName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('REMINDER.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="tableData" v-loading="loading">
      <el-table-column :label="$t('REMINDER.TABEL.FONT1')" prop="orderNumber"></el-table-column>
      <el-table-column :label="$t('REMINDER.TABEL.FONT2')" prop="shopName"></el-table-column>
      <el-table-column :label="$t('REMINDER.TABEL.FONT3')" prop="busProductInfo">
        <template slot-scope="scope">
          {{scope.row.busProductInfo[0].productName+'x'+scope.row.busProductInfo[0].num}}
        </template>
      </el-table-column>
      <el-table-column :label="$t('REMINDER.TABEL.FONT4')" prop="createTime"></el-table-column>
      <el-table-column :label="$t('REMINDER.TABEL.FONT5')" prop="reminderStatus">
        <template slot-scope="user">{{statuList[user.row.reminderStatus]}}</template>
      </el-table-column>
    </el-table>
  </div>
    <pagination
      :current-page="searchData.pageCurrent"
      :page-size="searchData.pageSize"
      :total="searchData.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    ></pagination>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import { order } from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
      statuList: ['未处理', '处理中', '已处理'],
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {},
      // 搜索时用的数据
      searchData: {
        shopName: null,
        language: 1,
        pageNum: null,
        page: 1,
        size: 10,
        isReminder: null
      }
    }
  },
  mounted () {
    if (this.$route.query.shopName) {
      this.searchData.shopName = this.$route.query.shopName
    }
    this.initData()
  },
  methods: {
    initData: function () {
      this.loading = true

      order.reminder(this.searchData).then(res => {
        this.tableData = res.rows
        if (this.tableData.length > 0) {
          this.tableData[0].busProductInfo = JSON.parse(this.tableData[0].busProductInfo)
          this.searchData.pageNum = res.count
        }
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    searchList: function () {
      this.searchData = this.$common.deepCopy(this.tempData)
      // this.page.pageCurrent = 1
      this.initData(1)
    },
    // 页数改变时的回调
    currentChange (val) {
      this.searchData.pageCurrent = val
      this.initData()
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.searchData.pageSize = val
      this.searchData.pageCurrent = 1
      this.initData(1)
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
   .operation{
     .el-form-item{
        margin-bottom: 0;
     }

   }
</style>
