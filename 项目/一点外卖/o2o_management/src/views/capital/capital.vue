<script src="../../../config/index.js"></script>
<template>
  <div class="clearfix">
    <div class="operation">
      <div class="clearfix ">
        <el-form label-width="80px">
          <el-col :span="20">
            <el-form-item :label="$t('CAPITAL.TIME.TITLE')" >
              <el-date-picker
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :placeholder="$t('CAPITAL.TIME.START')"
                v-model="tempData.startTime"
              ></el-date-picker>
              <span style="width:60px;">-</span>
              <el-date-picker
                type="date"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :placeholder="$t('CAPITAL.TIME.END')"
                v-model="tempData.endTime"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('CAPITAL.SELECT1.TITLE')">
              <el-select
                v-model="tempData.capitalType"
                @change="selectStatus"
                :placeholder="$t('CAPITAL.SELECT1.PLA1')">
                <el-option :label="$t('CAPITAL.SELECT1.FONT1')" value="">{{ $t('CAPITAL.SELECT1.FONT1') }}</el-option>
                <el-option :label="$t('CAPITAL.SELECT1.FONT2')" value="0"></el-option>
                <el-option :label="$t('CAPITAL.SELECT1.FONT3')" value="1"></el-option>
                <el-option :label="$t('CAPITAL.SELECT1.FONT4')" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('CAPITAL.SELECT2.TITLE')">
              <el-select
                v-model="tempData.payType"
                @change="selectStatus"
                :placeholder="$t('CAPITAL.SELECT2.PLA1')">
                <el-option :label="$t('CAPITAL.SELECT2.FONT1')" value="">{{ $t('CAPITAL.SELECT2.FONT1') }}</el-option>
                <el-option :label="$t('CAPITAL.SELECT2.FONT2')" value="0"></el-option>
                <el-option :label="$t('CAPITAL.SELECT2.FONT3')" value="1"></el-option>
                <el-option :label="$t('CAPITAL.SELECT2.FONT4')" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="padding-left:40px">
            <el-button type="primary" @click="search" icon="el-icon-search">{{ $t('CAPITAL.BTN.FONT1') }}</el-button>
          </el-col>
          <el-col :span="1" style="padding-left:20px">
            <el-button type="primary" @click="editorDia('add')">{{ $t('CAPITAL.BTN.FONT2') }}</el-button>
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
          :label="$t('CAPITAL.TABEL.FONT1')"
          width="80"
          align="center"
          type="index" >
        </el-table-column>
        <el-table-column
          prop="capitalMoeny"
          :label="$t('CAPITAL.TABEL.FONT2')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="capitalType"
          :label="$t('CAPITAL.TABEL.FONT3')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.capitalType == 0">{{ $t('CAPITAL.TABEL.OTHER.FONT1') }}</span>
            <span v-else-if="scope.row.capitalType == 1">{{ $t('CAPITAL.TABEL.OTHER.FONT2') }}</span>
            <span v-else-if="scope.row.capitalType == 2">{{ $t('CAPITAL.TABEL.OTHER.FONT3') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          :label="$t('CAPITAL.TABEL.FONT4')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="gatheringAccount"
          :label="$t('CAPITAL.TABEL.FONT5')"
          width="250"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="gatheringName"
          :label="$t('CAPITAL.TABEL.FONT6')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="payAccount"
          :label="$t('CAPITAL.TABEL.FONT7')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="payName"
          :label="$t('CAPITAL.TABEL.FONT8')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="payType"
          :label="$t('CAPITAL.TABEL.FONT9')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.payType == 0">{{ $t('CAPITAL.TABEL.OTHER.FONT4') }}</span>
            <span v-else-if="scope.row.payType == 1">{{ $t('CAPITAL.TABEL.OTHER.FONT5') }}</span>
            <span v-else-if="scope.row.payType == 2">{{ $t('CAPITAL.TABEL.OTHER.FONT6') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="updateTime"
          :label="$t('CAPITAL.TABEL.FONT10')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column :label="$t('CAPITAL.TABEL.FONT11')" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="editorDia('update', scope.row)">{{ $t('CAPITAL.OPERATION.FONT1') }}</el-button>
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

    <el-dialog
      :title="state"
      :visible.sync="updateStatus"
      width="550px"
      center
      :modal-append-to-body="false"
    >
      <el-form :model="updateData" ref="updateData">
        <el-form-item :label="$t('CAPITAL.DIALOG.FONT1')">
          <el-input :placeholder="$t('CAPITAL.DIALOG.PLA1')" v-model="updateData.capitalMoeny">
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.SELECT1.TITLE')">
          <el-select v-model="updateData.capitalType" :placeholder="$t('CAPITAL.SELECT1.PLA1')">
            <el-option :label="$t('CAPITAL.SELECT1.FONT1')" value=""></el-option>
            <el-option :label="$t('CAPITAL.SELECT1.FONT2')" value="0"></el-option>
            <el-option :label="$t('CAPITAL.SELECT1.FONT3')" value="1"></el-option>
            <el-option :label="$t('CAPITAL.SELECT1.FONT4')" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.DIALOG.FONT2')">
          <el-input :placeholder="$t('CAPITAL.DIALOG.PLA2')" v-model="updateData.gatheringAccount"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.DIALOG.FONT3')">
          <el-input :placeholder="$t('CAPITAL.DIALOG.PLA3')" v-model="updateData.gatheringName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.DIALOG.FONT4')">
          <el-input :placeholder="$t('CAPITAL.DIALOG.PLA4')" v-model="updateData.payAccount"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.DIALOG.FONT5')">
          <el-input :placeholder="$t('CAPITAL.DIALOG.PLA5')" v-model="updateData.payName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CAPITAL.SELECT2.TITLE')" class="m-select">
          <el-select v-model="updateData.payType" :placeholder="$t('CAPITAL.SELECT2.PLA1')">
            <el-option :label="$t('CAPITAL.SELECT2.FONT1')" value=""></el-option>
            <el-option :label="$t('CAPITAL.SELECT2.FONT2')" value="0"></el-option>
            <el-option :label="$t('CAPITAL.SELECT2.FONT3')" value="1"></el-option>
            <el-option :label="$t('CAPITAL.SELECT2.FONT4')" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="add" type="success" v-if="ishow">{{ $t('CAPITAL.DIALOG.BTN1') }}</el-button>
        <el-button @click="editor" type="success" v-if="!ishow">{{ $t('CAPITAL.DIALOG.BTN1') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { sysCapitalQueryPage, sysCapitalUpdate, sysCapitalAdd, managerUpdateIsAudit } from "@/api/index.js";
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
          capitalType: '',
          payType: '',
          startTime: '',
          endTime: ''
        },
        updateData: {
          capitalType: '0',
          payType: '0'
        },
        state:'',
        ishow:true,
        updateStatus: false,
        //搜索时的数据
        serData: {},
        //分页信息
        page: {
          pageNum: 10,
          currentPage: 1,
          pageSize: 5
        }
      };
    },
    methods: {
      //加载数据
      initData(page, size) {
        sysCapitalQueryPage({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize,
          capitalType: this.tempData.capitalType,
          payType: this.tempData.payType,
          startTime: this.tempData.startTime,
          endTime: this.tempData.endTime
        }).then(res => {
          this.dataList = res.rows;
          this.page.pageNum = res.count;
        });
      },
      editorDia(type, row){
        this.updateStatus = true;
        if (type == 'update') {
          this.updateData = row;
          this.updateData['capitalType'] = String(row['capitalType'])
          this.updateData['payType'] = String(row['payType'])
          this.state = this.$t('CAPITAL.DIALOG.TITLE')
          this.ishow = false
        }
        else{
          this.state = this.$t('CAPITAL.DIALOG.TITLE2')
          this.updateData = {capitalType: '0',payType: '0'}
          this.ishow = true
        }
      },
      add() {
        sysCapitalAdd(this.updateData).then( res => {
          this.updateStatus = false
          this.initData(1);
        } )
      },
      editor() {
        sysCapitalUpdate(this.updateData).then( res => {
          this.updateStatus=false;
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
  .m-select {

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
