<template>
  <div class="goods container">
    <!-- 标题 -->
    <div class="goodsTop subTitleTop">
      <span>{{ $t("GOOD.T") }}</span>
      <div class="tool fr">
        <router-link :to="{name:'Sorts'}">{{ $t("GOOD.T1") }}</router-link>
        <router-link :to="{name:'AddCate'}">{{ $t("GOOD.T2") }}</router-link>
        <router-link :to="{name:'AddGoods'}">{{ $t("GOOD.T3") }}</router-link>
        <router-link :to="{name:'AddBatch'}">{{ $t("GOOD.T4") }}</router-link>
      </div>
    </div>
    <!-- 筛选 -->
    <div class="search">
      <span>{{ $t("GOOD.Tal3") }}</span>
      <input v-model="query.productName">
      <span>{{ $t("GOOD.T5") }}</span>
          <el-select clearable v-model="query.productCategoryId">
            <el-option  v-for="item in cateList" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
      <button class="btn" @click="initData">{{ $t("BTN.Search") }}</button>
    </div>
    <!-- 全选 -->
    <div class="all">
      <span @click="oneKey(2)">{{ $t("GOOD.Txt1") }}</span>
      <span @click="oneKey(1)">{{ $t("GOOD.Txt2") }}</span>
    </div>
    <!-- 商品列表 -->
    <div class="goodsList">
      <el-table
        v-loading="loading"
        :data="tableData" @selection-change="handleSelectionChange"
        border :header-cell-class-name='tableHeadRowClassName'
        :row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="index" :label="$t('GOOD.Tal1')" width="80">
        </el-table-column>
        <el-table-column prop="picture" :label="$t('GOOD.Tal3')" width="160">
          <template slot-scope="scope">
            <img :src="scope.row.picture" alt="" style="width:108px;height:108px">
          </template>
        </el-table-column>
        <el-table-column prop="name" width="120" :label="$t('GOOD.Tal3')">
        </el-table-column>
        <el-table-column prop="categoryName" width="120" :label="$t('GOOD.Tal4')">
        </el-table-column>
        <el-table-column prop="price" width="100" :label="$t('GOOD.Tal5')">
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('GOOD.Tal6')">
        </el-table-column>
        <el-table-column prop="inventory"  width="80" :label="$t('GOOD.Tal7')">
        </el-table-column>
        <el-table-column prop="status" width="80" :label="$t('GOOD.Tal8')">
          <template slot-scope="scope">
            {{scope.row.status===1? $t("GOOD.Tal81") : $t("GOOD.Tal82")}}
          </template>
        </el-table-column>
        <el-table-column :label="$t('BTN.Handle')" width="160px">
          <template slot-scope="scope">
            <router-link class="setBtn" :to="{name:'UpdGood', params: {id:scope.row.id}}">{{ $t("BTN.Edit") }}</router-link>
            <router-link class="setBtn" :to="{name:'Discounts', params: {id:scope.row.id}}">{{ $t("GOOD.Tal9") }}</router-link>
            <router-link class="setBtn" :to="{name:'Previewofgoods', params: {id:scope.row.id}}">{{ $t("GOOD.Tal10") }}</router-link>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="query.pageSize"
          :total="query.totalCount "
           @current-change="handleCurrentChange"
          :current-page.sync="query.page"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { selectGoods } from '@/api/public.js'
import {onKeyCommodity, queryAllbusProductCate} from '@/api/index'
export default {
  data () {
    return {
      loading: false,
      cateList: [],
      cateId: null,
      value: '',
      tableData: [],
      query: {
        busShopId: null,
        page: 1,
        pageSize: 5,
        productCategoryId: null,
        productName: null,
        totalCount: null
      },
      multipleSelection: ''

    }
  },
  mounted () {
    // 商品分类查询
    this.query.busShopId = this.LS.get('shopId')
    // 商品分类查询
    let params = {
      busShopId: this.query.busShopId
    }
    queryAllbusProductCate(params).then(res => {
      this.cateList = res.data
    })
    //  商品查询
    this.initData()
  },
  methods: {
    // 改变页码
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.initData()
    },
    initData () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
      selectGoods(this.query).then(res => {
        if (!res.code) {
          this.tableData = res.data.busProduct
          this.query.totalCount = res.data.totalCount
        }
      })
    },
    oneKey (num) {
      if (this.multipleSelection.length === 0) {
        let l = this.$t('GOOD.Tip1')
        this.$message.error(l)
      } else {
        this.multipleSelection.map((item) => {
          item.status = num
          return item
        })
        onKeyCommodity(this.multipleSelection).then(res => {
          this.$message.success(res.msg)
          if (res.code === 0) {
            this.initData()
          }
        })
      }
    },
    // 批量操作
    handleSelectionChange (val) {
      var list = val.map((item) => {
        var id = item.id
        return {id}
      })
      this.multipleSelection = list
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
  .goods {
    padding-bottom: 60px;
  a {
    color: #666;
    font-size: 14px;
  }
  .goodsTop {
  .tool {
  a {
    display: inline-block;
    line-height: 36px;
    text-align: center;
    width: 120px;
    height: 36px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 4px;
    margin-left: 20px;
  }
  }
  }
  .search {
  // font-size: 14px;
    margin: 26px 0;
    color: #666;
  > span {
    margin-right: 12px;
  }
  > input {
    width: 230px;
    height: 30px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 2px;
    text-indent: 1em;
    margin-right: 30px;
  }
  .btn {
    margin-left: 50px;
  }
  }
  .all {
  span {
    display: inline-block;
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 4px;
    color: #666;
    margin-right: 20px;
    cursor: pointer;
  }
  }
  .goodsList {
    margin-top: 43px;
  // 操作按钮
     .setBtn {
       display: inline-block;
       width: 80px;
       height: 36px;
       border: 1px solid rgba(212, 212, 212, 1);
       border-radius: 4px;
       margin-bottom: 7px;
       line-height: 36px;
       text-align: center;
     }
  }
  }
  .page {
    margin-top: 80px;
    text-align: center;
  }
</style>
