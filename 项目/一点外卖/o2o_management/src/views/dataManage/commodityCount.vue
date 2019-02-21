<template>
  <div class="content">
 <div class="operation">
    <el-form :inline="true" label-width="100px" label-position="right">
      <el-form-item :label="$t('COMMODITYCOUNT.FORM.FONT1')" class="mgb0">
        <el-input :placeholder="$t('COMMODITYCOUNT.FORM.PLA1')" v-model="tempData.shopName"></el-input>
      </el-form-item>
      <el-form-item :label="$t('COMMODITYCOUNT.TIME.TITLE')" class="mgb0">
        <el-date-picker type="date" format="yyyy-MM-dd" :placeholder="$t('COMMODITYCOUNT.TIME.START')" value-format="yyyy-MM-dd" v-model="tempData.startTime"></el-date-picker>
        <span>-</span>
        <el-date-picker type="date" format="yyyy-MM-dd" :placeholder="$t('COMMODITYCOUNT.TIME.END')" value-format="yyyy-MM-dd" v-model="tempData.endTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="mgb0">
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('COMMODITYCOUNT.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="tableData" :empty-text="$t('PUBLIC.TABELEMPTY')" v-loading="loading">
      <el-table-column :label="$t('COMMODITYCOUNT.TABEL.FONT1')" prop="shop_name"></el-table-column>
      <el-table-column :label="$t('COMMODITYCOUNT.TABEL.FONT2')" prop="name"></el-table-column>
      <el-table-column :label="$t('COMMODITYCOUNT.TABEL.FONT3')" prop="total_price"></el-table-column>
      <el-table-column :label="$t('COMMODITYCOUNT.TABEL.FONT4')" prop="pay_number"></el-table-column>
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
import {statistics} from '@/api/index.js'
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
      tempData: {
      },
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
      statistics.commodity(this.searchData
      ).then(res => {
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
