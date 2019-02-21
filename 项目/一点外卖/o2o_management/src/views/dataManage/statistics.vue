<template>
  <div class="content">
 <div class="operation">
    <el-form :inline="true" label-width="100px" label-position="right" class="mgt20">
      <el-form-item :label="$t('STATISTICS.FORM.FONT1')">
        <el-select :placeholder="$t('STATISTICS.FORM.PLA1')" v-model="tempData.shopId"></el-select>
      </el-form-item>
      <el-form-item :label="$t('STATISTICS.TIME.TITLE')">
        <el-date-picker
          type="date"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          v-model="tempData.startTime"
        ></el-date-picker>
        <span>-</span>
        <el-date-picker
          type="date"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          v-model="tempData.endTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('STATISTICS.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="tableData" v-loading="loading">
      <el-table-column :label="$t('STATISTICS.TABEL.FONT1')" prop="date"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT2')" prop="coupons"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT3')" prop="dispathchCosts"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT4')" prop="coupons"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT5')" prop="firstMinus"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT6')" prop="productTotalprices"></el-table-column>
      <el-table-column :label="$t('STATISTICS.TABEL.FONT7')" prop="totals"></el-table-column>
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
import { statistics } from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
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
        pageSize: 5
      }
    }
  },
  methods: {
    initData: function (page, size) {
      this.loading = true
      this.searchData = this.$common.deepCopy(this.tempData)
      this.searchData.page = this.page.pageCurrent
      this.searchData.size = this.page.pageSize
      statistics.dataStatics(this.searchData).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    searchList: function () {
      this.searchData = this.$common.deepCopy(this.tempData)
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
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style>
</style>
