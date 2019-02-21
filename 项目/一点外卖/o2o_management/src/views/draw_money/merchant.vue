<template>
  <div class="content drawManage">
    <div class="operation">
    <el-form :inline="true" class="mgt20" label-width="100px">
      <el-form-item>
        <el-input :placeholder="$t('MERCHANT.FORM.PLA1')" v-model="tempData.realname"><template slot="prepend">{{ $t('MERCHANT.FORM.FONT1') }}</template>   </el-input>
      </el-form-item>
      <el-form-item :label="$t('MERCHANT.SELECT1.TITLE')">
          <el-select v-model="tempData.status">
              <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('MERCHANT.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="table">
    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" v-loading="loading" border :data="tableData">
      <el-table-column :label="$t('MERCHANT.TABEL.FONT1')" prop="realname" align="center"></el-table-column>
      <el-table-column :label="$t('MERCHANT.TABEL.FONT2')" prop="busShopId" align="center"></el-table-column>
      <el-table-column :label="$t('MERCHANT.TABEL.FONT3')" prop="status" align="center">
          <template slot-scope="user">{{statusList[user.row.status].label}}</template>
      </el-table-column>
      <el-table-column :label="$t('MERCHANT.TABEL.FONT4')" prop="createTime" align="center"></el-table-column>
      <el-table-column prop="cardNumber" :label="$t('MERCHANT.TABEL.FONT5')" align="center"></el-table-column>
      <el-table-column prop="balance" :label="$t('MERCHANT.TABEL.FONT6')" align="center"></el-table-column>
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
        {label: this.$t('MERCHANT.SELECT1.FONT2'), value: 0}, {label: this.$t('MERCHANT.SELECT1.FONT1'), value: 1}, {label: this.$t('MERCHANT.SELECT1.FONT3'), value: 2}
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
    initData: function () {
      this.loading = true
      this.searchData = this.$common.deepCopy(this.tempData)
      this.searchData.page = this.page.pageCurrent
      this.searchData.size = this.page.pageSize
      withDraw.merchant(this.searchData
      ).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.total_record
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
