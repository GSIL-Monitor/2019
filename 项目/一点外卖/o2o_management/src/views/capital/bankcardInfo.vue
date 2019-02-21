<script src="../../../config/index.js"></script>
<template>
  <div class="clearfix">
    <div class="operation">
      <div class="clearfix ">
        <el-form label-width="80px">
          <!--<el-col :span="4">-->
            <!--<el-form-item ><el-button icon="el-icon-search" type="primary" @click="searchList">查询</el-button></el-form-item>-->
          <!--</el-col>-->
          <el-col :span="5">
            <el-form-item :label="$t('BANKCARDINFO.SELECT1.TITLE')">
              <el-select
                v-model="tempData.status"
                @change="selectStatus"
                :placeholder="$t('BANKCARDINFO.SELECT1.PLA1')">
                <el-option :label="$t('BANKCARDINFO.SELECT1.FONT1')" value="">{{ $t('BANKCARDINFO.SELECT1.FONT1') }}</el-option>
                <el-option :label="$t('BANKCARDINFO.SELECT1.FONT2')" value="0"></el-option>
                <el-option :label="$t('BANKCARDINFO.SELECT1.FONT3')" value="1"></el-option>
                <el-option :label="$t('BANKCARDINFO.SELECT1.FONT4')" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('BANKCARDINFO.FORM.FONT1')">
              <el-input :placeholder="$t('BANKCARDINFO.FORM.PLA1')" v-model="tempData.realname">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="padding-left:40px">
            <el-button type="primary" @click="search" icon="el-icon-search">{{ $t('BANKCARDINFO.BTN.FONT1') }}</el-button>
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
          fixed
          :label="$t('BANKCARDINFO.TABEL.FONT1')"
          width="80"
          align="center"
          type="index" >
        </el-table-column>
        <el-table-column
          prop="bankName"
          :label="$t('BANKCARDINFO.TABEL.FONT2')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="cardNumber"
          :label="$t('BANKCARDINFO.TABEL.FONT3')"
          width="250"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="categorys"
          :label="$t('BANKCARDINFO.TABEL.FONT4')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.categorys == 1">{{ $t('BANKCARDINFO.TABEL.OTHER.CATEGORYS.FONT1') }}</span>
            <span v-else-if="scope.row.categorys == 2">{{ $t('BANKCARDINFO.TABEL.OTHER.CATEGORYS.FONT2') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="realname"
          :label="$t('BANKCARDINFO.TABEL.FONT5')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="status"
          :label="$t('BANKCARDINFO.TABEL.FONT6')"
          width="120"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.status == 0">{{ $t('BANKCARDINFO.TABEL.OTHER.STATUS.FONT1') }}</span>
            <span v-else-if="scope.row.status == 1">{{ $t('BANKCARDINFO.TABEL.OTHER.STATUS.FONT2') }}</span>
            <span v-else-if="scope.row.status == 2">{{ $t('BANKCARDINFO.TABEL.OTHER.STATUS.FONT3') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          :label="$t('BANKCARDINFO.TABEL.FONT7')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column :label="$t('BANKCARDINFO.TABEL.FONT8')" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="editor(scope.row.id)">{{ $t('BANKCARDINFO.OPERATION.FONT1') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="page.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    >
    </pagination>
    <el-dialog :title="$t('BANKCARDINFO.DIALOG.TITLE')" :visible.sync="editorVisable" width="20%" :center="true">
      <el-form >
        <el-form-item :label="$t('BANKCARDINFO.SELECT1.TITLE')">
          <el-select v-model="editorItem.status" :placeholder="$t('BANKCARDINFO.SELECT1.PLA1')">
            <el-option :label="$t('BANKCARDINFO.SELECT1.FONT1')" value=""></el-option>
            <el-option :label="$t('BANKCARDINFO.SELECT1.FONT2')" value="1"></el-option>
            <el-option :label="$t('BANKCARDINFO.SELECT1.FONT3')" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorVisable = false">{{ $t('BANKCARDINFO.DIALOG.BTN1') }}</el-button>
        <el-button type="primary" @click="updateExamine">{{ $t('BANKCARDINFO.DIALOG.BTN2') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { bankcardInfo, bankcardInfoUpdate } from "@/api/index.js";
  import pagination from "@/components/pagination";
  export default {
    components: {
      pagination
    },
    data() {
      return {
        dataList: [],
        //搜索时的临时数据
        tempData: {
          realname: '',
          status: ''
        },
        //搜索时的数据
        serData: {},
        //分页信息
        page: {
          pageNum: 10,
          currentPage: 1,
          pageSize: 5
        },
        editorVisable: false,
        editorItem: {
          status: ''
        },
      };
    },
    methods: {
      //加载数据
      initData(page, size) {
        bankcardInfo({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize,
          realname: this.tempData.realname,
          status: this.tempData.status
        }).then(res => {
          this.dataList = res.rows;
          this.page.pageNum = res.count;
        });
      },
      editor(id){
        this.editorVisable=true;
        this.editorItem['id'] = id;
        // this.editorItem=obj;
      },
      updateExamine() {
        bankcardInfoUpdate(this.editorItem).then( res => {
          this.editorVisable=false;
          this.initData(1);
        })
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
      selectStatus() {
        this.initData(1);
      },
      //条件筛选店铺
      search() {
        this.initData(1);
      }
    },
    beforeMount() {
      this.initData();
    }
  };
</script>

<style>
  .addBatchBtn a {
    color: #ffffff;
  }
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
