<template>
  <div class="sorts container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("GCate.T") }}</span>
    </div>
    <!-- 筛选 -->
    <div class="search">
      <span>{{ $t("GCate.T1") }}</span>
      <el-input v-model="tempData.name"></el-input>
      <el-button  type="primary" class="btn" @click="initData()">{{ $t("BTN.Search") }}</el-button>
    </div>
    <!-- 全选 -->
    <div class="all">
      <span class="addCate">
        <router-link :to="{name:'AddCate'}">{{ $t("GCate.T2") }}</router-link>
      </span>
    </div>
    <!-- 商品列表 -->
    <div class="sortsList">
      <el-table :data="tableData" border
      v-loading="loading"
      :header-cell-class-name='tableHeadRowClassName' :row-class-name="tableRowClassName" style="width: 600px">
        <el-table-column type="index" :label="$t('GCate.Tal1')" width="80">
        </el-table-column>
        <el-table-column prop="name" :label="$t('GCate.Tal2')">
        </el-table-column>
        <el-table-column fixed="right" :label="$t('BTN.Handle')" width="120">
          <template slot-scope="scope">
            <router-link :to="{name:'AddCate',query:{'id':scope.row.id}}">{{ $t("BTN.Edit") }}</router-link> |
            <span type="text" size="small" @click="del(scope.row.id)">{{ $t("BTN.Del") }}</span>
          </template>
        </el-table-column>
      </el-table>
          <div class="page"> <el-pagination
            background
            layout="prev, pager, next"
            :total="page.pageNum"
          @current-change="handleCurrentChange"
          :current-page.sync="page.pageNo"
          ></el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
import { good } from '@/api/index.js'
export default {
  data () {
    return {
      loading: false,
      busShopId: '',
      serData: {},
      tempData: {},
      value: '',
      //   表格数据
      tableData: [],
      // 分页数据
      page: {
        pageNum: null,
        pageNo: 1,
        pageSize: 10
      }

    }
  },
  mounted () {
    this.busShopId = this.LS.get('shopId')
    this.initData()
  },
  methods: {
    // 改变页码
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.initData()
    },
    // 初始化数据
    initData (num) {
      this.loading = true
      this.serData = this.$common.deepCopy(this.tempData)
      this.serData.busShopId = this.busShopId
      this.serData.pageNo = this.page.pageNo
      this.serData.pageSize = this.page.pageSize
      if (typeof num === 'number') {
        this.serData.status = num
      }
      good.queryGoodCategory(this.serData).then(res => {
        console.log(res)
        if (!res.code) {
          this.tableData = res.rows
          this.page.pageNum = res.count
        }
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 删除
    del (id) {
      good.delBusProductCategory({id: id}).then(res => {
        if (!res.code) {
          this.initData()
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }
      })
    },
    handleClick (row) {
      console.log(row)
    },
    tableHeadRowClassName ({row, rowIndex}) {
      return 'warning-row'
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex % 2 !== 0) {
        return 'warning-row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sorts {
  height: 868px;
  a {
    color: #666;
    font-size: 14px;
  }
  .search {
    margin: 30px 0;
    color: #666;
    span {
      margin-right: 16px;
    }
  }
  .all {
    span {
      display: inline-block;
      width: 120px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
    }
    .addCate {
      background-color: #00b1ff;
        border: none;
      a {
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .sortsList {
    margin-top: 43px;
    text-align: center;
    span {
      color: #00b1ff;
      cursor: pointer;
    }
    a{
      color: #00b1ff;

    }
  }
  .page{
    margin-top: 40px;
  }
}
</style>
<style>
.sorts .el-input {
  width: 230px !important;
  height: 30px;
  margin-right: 45px;
}
</style>
