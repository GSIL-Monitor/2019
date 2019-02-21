<template>
  <div class="content drawManage">
<div class="operation">
    <el-form :inline="true"  label-width="100px">
      <el-form-item :label="$t('DRAWMANAGE.SELECT1.TITLE')">
        <el-select v-model="tempData.applyStatus">
        <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('DRAWMANAGE.TIME.TITLE')">
        <el-date-picker :placeholder="$t('DRAWMANAGE.TIME.START')" type="date" value-format="yyyy-mm-dd" v-model="tempData.startTime"></el-date-picker>
        <span style="width:60px;">-</span>
        <el-date-picker :placeholder="$t('DRAWMANAGE.TIME.END')" type="date" value-format="yyyy-mm-dd" v-model="tempData.endTime"></el-date-picker>
      </el-form-item>
      <el-form-item :label="$t('DRAWMANAGE.FORM.FONT1')" class="mgb0">
        <el-input :placeholder="$t('DRAWMANAGE.FORM.PLA1')" v-model="tempData.phone"></el-input>
      </el-form-item>
      <el-form-item :label="$t('DRAWMANAGE.FORM.FONT2')"  class="mgb0">
        <el-input :placeholder="$t('DRAWMANAGE.FORM.PLA2')" v-model="tempData.realname"></el-input>
      </el-form-item>
      <el-form-item class="mgb0">
        <el-button type="primary" @click="searchList">{{ $t('DRAWMANAGE.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" v-loading="loading" border :data="tableData">
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT1')" prop="phone"></el-table-column>
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT2')" prop="realname"></el-table-column>
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT3')" prop="disId"></el-table-column>
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT4')" prop="applyStatus"></el-table-column>
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT5')" prop="createTime"></el-table-column>
      <el-table-column :label="$t('DRAWMANAGE.TABEL.FONT6')" prop="bankName"></el-table-column>
      <el-table-column prop="cardNumber" :label="$t('DRAWMANAGE.TABEL.FONT7')"></el-table-column>
      <el-table-column prop="commissionChange" :label="$t('DRAWMANAGE.TABEL.FONT8')"></el-table-column>
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
import {withDraw} from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
      statusList: [
        {label: this.$t('DRAWMANAGE.SELECT1.FONT1'), value: 1}, {label: this.$t('DRAWMANAGE.SELECT1.FONT2'), value: 2}, {label: this.$t('DRAWMANAGE.SELECT1.FONT3'), value: 3}
      ],
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
      withDraw.merchant(this.searchData
      ).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 条件查询
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
