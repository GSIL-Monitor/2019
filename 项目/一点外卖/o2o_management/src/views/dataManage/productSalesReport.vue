<script src="../../../config/index.js"></script>
<template>
  <div class="clearfix">
    <div class="operation">
      <div class="clearfix">
        <el-form label-width="80px">
          <el-col :span="5">
            <el-form-item :label="$t('PRODUCTSALESREPORT.FORM.FONT1')">
              <el-autocomplete
                v-model="tempData.name"
                :placeholder="$t('PRODUCTSALESREPORT.FORM.PLA1')"
              >
              </el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('PRODUCTSALESREPORT.FORM.FONT2')">
              <el-autocomplete
                v-model="tempData.shopName"
                :placeholder="$t('PRODUCTSALESREPORT.FORM.PLA2')"
                >
              </el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="padding-left:40px">
            <el-button type="primary" @click="search" icon="el-icon-search">{{ $t('PRODUCTSALESREPORT.BTN.FONT1') }}</el-button>
          </el-col>
        </el-form>
      </div>
    </div>
    <div class="table">
      <el-table
        border
        :empty-text="$t('PUBLIC.TABELEMPTY')"
        :data="dataList"
        style="width: 100%;margin-top:20px;"
      >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          :label="$t('PRODUCTSALESREPORT.TABEL.FONT1')"
          width="80"
          align="center"
          type="index" >
        </el-table-column>
        <el-table-column
          prop="name"
          :label="$t('PRODUCTSALESREPORT.TABEL.FONT2')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="payNumber"
          :label="$t('PRODUCTSALESREPORT.TABEL.FONT3')"
          width="250"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="shopName"
          :label="$t('PRODUCTSALESREPORT.TABEL.FONT4')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="totalPrice"
          :label="$t('PRODUCTSALESREPORT.TABEL.FONT5')"
          width="220"
          align="center" >
        </el-table-column>
      </el-table>
    </div>
    <pagination :current-page="page.currentPage"
                :page-size="page.pageSize"
                :total="page.pageNum"
                @sizeChange="sizeChange"
                @currentChange="currentChange"
    >
    </pagination>

  </div>
</template>

<script>
  import { productSalesReport } from "@/api/index.js";
  import pagination from "@/components/pagination";
  export default {
    components: {
      pagination
    },
    data() {
      return {
        dataList: [],
        tempData: {
          name: null,
          categoryName: null,
          shopName: null,
          onOff: null
        },
        //搜索时的数据
        serData: {},
        //分页信息
        page: {
          pageNum: 10,
          currentPage: 1,
          pageSize: 10
        }
      };
    },
    methods: {
      //加载数据
      initData(page, size) {
        productSalesReport({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize
        }).then(res => {
          this.dataList = res.rows;
          this.page.pageNum = res.count;
        });
      },
      //页数改变时的回调
      currentChange(val) {
        this.page.currentPage = val;
        this.initData();
      },
      //每页总数改变时的回调
      sizeChange(val) {
        this.page.pageSize = val;
        this.initData(1);
      },
      //条件筛选店铺
      search() {
        productSalesReport({
          page: this.page.currentPage,
          size: this.page.pageSize,
          shopName: this.tempData.shopName,
          name: this.tempData.name
        }).then((res)=>{
          this.dataList = res.rows;
        })
      }
    },
    beforeMount() {
      this.initData();
    }
  };
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
