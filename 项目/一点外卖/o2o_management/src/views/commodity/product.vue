<template>
  <div class="goods container">
    <!-- 标题 -->
    <div class="goodsTop subTitleTop">
      <div class="tool">
        <router-link :to="{name:'Sorts'}">{{ $t('PRODUCT.BTN.FONT1') }}</router-link>
        <router-link :to="{name:'AddCate'}">{{ $t('PRODUCT.BTN.FONT2') }}</router-link>
        <router-link :to="{name:'AddGoods'}">{{ $t('PRODUCT.BTN.FONT3') }}</router-link>
        <router-link :to="{name:'AddBatch'}">{{ $t('PRODUCT.BTN.FONT4') }}</router-link>
      </div>
    </div>
    <!-- 筛选 -->
    <div class="search">
      <span>{{ $t('PRODUCT.FORM.FONT1') }}</span>
      <input :placeholder="$t('PRODUCT.FORM.PLA1')" v-model="query.productName">
      <span>{{ $t('PRODUCT.FORM.FONT2') }}</span>
      <el-select :placeholder="$t('PRODUCT.FORM.PLA2')" v-model="query.productCategoryId">
        <el-option  v-for="item in cateList" :label="item.name" :value="item.id" :key="item.id"></el-option>
      </el-select>
      <button class="btn" @click="initData">{{ $t('PRODUCT.BTN.FONT7') }}</button>
    </div>
    <!-- 全选 -->
    <div class="all">
      <span @click="oneKey(2)">{{ $t('PRODUCT.BTN.FONT5') }}</span>
      <span @click="oneKey(1)">{{ $t('PRODUCT.BTN.FONT6') }}</span>
    </div>
    <!-- 商品列表 -->
    <div class="goodsList">
      <el-table
        :empty-text="$t('PUBLIC.TABELEMPTY')"
        v-loading="loading"
        :data="tableData" @selection-change="handleSelectionChange"
        border :header-cell-class-name='tableHeadRowClassName'
        :row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="index" :label="$t('PRODUCT.TABEL.FONT1')" width="80">
        </el-table-column>
        <el-table-column prop="categoryName" width="120" :label="$t('PRODUCT.TABEL.FONT2')">
        </el-table-column>
        <el-table-column prop="description" width="120" :label="$t('PRODUCT.TABEL.FONT3')">
        </el-table-column>
        <el-table-column prop="intro" width="120" :label="$t('PRODUCT.TABEL.FONT4')">
        </el-table-column>
        <el-table-column prop="inventory" width="120" :label="$t('PRODUCT.TABEL.FONT5')">
        </el-table-column>
        <el-table-column prop="isDelete" width="120" :label="$t('PRODUCT.TABEL.FONT6')">
          <template slot-scope="scope">
            {{scope.row.isDelete===1? $t('PRODUCT.TABEL.OTHER.FONT1') : $t('PRODUCT.TABEL.OTHER.FONT1')}}
          </template>
        </el-table-column>
        <el-table-column prop="name" width="120" :label="$t('PRODUCT.TABEL.FONT7')">
        </el-table-column>
        <el-table-column prop="oldPrice" width="120" :label="$t('PRODUCT.TABEL.FONT8')">
        </el-table-column>
        <el-table-column prop="payNumber" width="120" :label="$t('PRODUCT.TABEL.FONT9')">
        </el-table-column>
        <el-table-column prop="picture" :label="$t('PRODUCT.TABEL.FONT10')" width="160">
          <template slot-scope="scope">
            <img :src="scope.row.picture" alt="" style="width:108px;height:108px">
          </template>
        </el-table-column>
        <el-table-column prop="price" width="100" :label="$t('PRODUCT.TABEL.FONT11')">
        </el-table-column>
        <el-table-column prop="createTime" :label="$t('PRODUCT.TABEL.FONT12')">
        </el-table-column>
        <el-table-column prop="inventory"  width="80" :label="$t('PRODUCT.TABEL.FONT13')">
        </el-table-column>
        <el-table-column prop="status" width="80" :label="$t('PRODUCT.TABEL.FONT14')">
          <template slot-scope="scope">
            {{scope.row.status===1? $t('PRODUCT.TABEL.OTHER.FONT3') : $t('PRODUCT.TABEL.OTHER.FONT4') }}
          </template>
        </el-table-column>
        <el-table-column prop="createTime" width="120" :label="$t('PRODUCT.TABEL.FONT15')">
        </el-table-column>
        <el-table-column prop="unit"  width="80" :label="$t('PRODUCT.TABEL.FONT16')">
        </el-table-column>
        <el-table-column :label="$t('PRODUCT.TABEL.FONT17')" fixed="right" center width="220px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="$router.push({name:'productEdit',query:scope.row})">{{ $t('PRODUCT.OPERATION.FONT1') }}</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id)">{{ $t('PRODUCT.OPERATION.FONT2') }}</el-button>
            <!--<router-link class="setBtn" :to="{name:'UpdGood', params: {id:scope.row.id}}">编辑</router-link>-->
            <!--<router-link class="setBtn" :to="{name:'Discounts', params: {id:scope.row.id}}">优惠设置</router-link>-->
            <!--<router-link class="setBtn" :to="{name:'Previewofgoods', params: {id:scope.row.id}}">删除</router-link>-->
            <!-- <el-button
                    @click="handleDelete(scope.$index, scope.row)">预览</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import { selectGoods } from '@/api/public.js'
import {product, storeMessageList, onKeyCommodity, productDel} from '@/api/index'
export default {
  data () {
    return {
      loading: false,
      cateList: [],
      cateId: null,
      value: '',
      tableData: [],
      query: {
        busShopName: '',
        page: 1,
        pageSize: 8,
        productCategoryId: '',
        productName: ''
      },
      multipleSelection: ''

    }
  },
  mounted () {
    // 商品分类查询
    // this.query.busShopId = localStorage.getItem('shopId')
    // // 商品分类查询
    // let params = {
    //   busShopId: this.query.busShopId,
    //   pageNo: 1,
    //   pageSize: 100
    // }
    // querybusProductCategory(params).then(res => {
    //   this.cateList = res.data
    // })
    //  商品查询
    this.initData()
  },
  methods: {
    initData () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
      // storeMessageList(this.query).then(res => {
      //   console.log(res);
      // })
      product(this.query).then(res => {
        this.tableData = res.busProduct
        console.log(this.tableData)
        // this.page.pageNum = res.totalCount
      })
    },
    oneKey (num) {
      var _this = this
      if (this.multipleSelection.length === 0) {
        this.$message.error(this.$t('PUBLIC.MESSAGE.FONT7'))
      } else {
        _this.multipleSelection.map((item) => {
          item.status = num
          return item
        })
        onKeyCommodity(_this.multipleSelection).then(res => {
          console.log(res)
          // _this.$message.success(res.msg)
          // if (res.code === 0) {
          //   console.log(1111111)
          //
          // }
          _this.initData()
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
    },
    handleCurrentChange () {

    },
    del (id) {
      console.log(id)
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        // 调用删除接口
        productDel({id: id}).then(res => {
          this.initData()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods {
    background: #fff;
    padding: 20px;
    margin-top: 20px;
  a {
    color: #666;
    font-size: 14px;
  }
  .btn {
    width: 120px;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    background-color: #00B1FF;
    font-size: 16px;
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
    margin-right: 20px;
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
