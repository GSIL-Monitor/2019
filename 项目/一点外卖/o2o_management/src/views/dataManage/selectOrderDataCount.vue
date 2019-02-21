<template>
  <div class="content storeAudit">
    <div class="operation">
      <el-form label-width="100px" label-position="right" >
        <el-row>
          <el-col :span="12">
            <el-form-item label="提交时间" class="mgb0">
              <el-date-picker
                type="date"
                format="yyyy-mm-dd"
                value-format="yyyy-MM-dd"
                placeholder="起始时间"
                v-model="tempData.startTime"
              ></el-date-picker>
              <span style="width:60px;">-</span>
              <el-date-picker
                type="date"
                format="yyyy-mm-dd"
                value-format="yyyy-MM-dd"
                placeholder="截止时间"
                v-model="tempData.endTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item class="mgb0"><el-button icon="el-icon-search" type="primary" @click="searchList">查询</el-button></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table">
      <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="tableData" v-loading="loading" border >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="counts" label="订单数量" align="center"></el-table-column>
        <el-table-column prop="cusName" label="联系人" align="center"></el-table-column>
        <el-table-column prop="cusPhone" label="联系电话" align="center"></el-table-column>
        <el-table-column prop="registTime" label="注册时间" align="center"></el-table-column>
        <el-table-column prop="shopName" label="店铺名称" align="center"></el-table-column>
        <el-table-column prop="totals" label="订单总金额" align="center"></el-table-column>
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
  import pagination from "@/components/pagination";
  import {selectOrderDataCount} from "@/api/index"
  export default {
    components: {
      pagination
    },
    data() {
      return {
        displayUrl:null,
        editorVisable:false,
        editorItem:{},
        areaList:[],
        categoryList:[],
        //加载状态
        loading: false,
        //表格数据
        tableData: [],
        //搜索时临时数据
        tempData: {},
        //搜索时用的数据
        searchData: {},
        //分页数据
        page: {
          pageNum: null,
          pageCurrent: 1,
          pageSize: 10,
          startTime: '',
          endTime: ''
        }
      };
    },
    methods: {
      initData: function(page, size) {
        this.loading = true;
        this.searchData = this.$common.deepCopy(this.tempData);
        this.searchData.page = this.page.pageCurrent;
        this.searchData.size = this.page.pageSize;
        selectOrderDataCount(this.searchData).then(res => {
          this.tableData = res.rows;
          this.page.pageNum = res.count;
        });
        setTimeout(() => {
          this.loading = false;
        }, 500);
      },
      searchList: function() {
        this.searchData = this.$common.deepCopy(this.tempData);
        this.page.pageCurrent = 1;
        this.initData(1);
      },
      //页数改变时的回调
      currentChange(val) {
        this.page.pageCurrent = val;
        this.initData();
      },
      //每页总数改变时的回调
      sizeChange(val) {
        this.page.pageSize=val;
        this.page.pageCurrent = 1;
        this.initData(1);
      }
    },
    beforeMount() {
      this.initData();
    }
  };
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

