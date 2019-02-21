<script src="../../../config/index.js"></script>
<template lang="html"> 
  <div class="clearfix">
    <div class="operation">
      <div class="clearfix ">
        <el-form label-width="100px">
          <el-col :span="5">
            <el-form-item :label="$t('COURIER.FORM.FONT1')">
              <el-input :placeholder="$t('COURIER.FORM.PLA1')" v-model="tempData.courierName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('COURIER.FORM.FONT2')" style="position: relative">
              <el-input
                v-model="tempData.shopName"
                :placeholder="$t('COURIER.FORM.PLA2')">
              </el-input>
              <div class="el-select-dropdown el-popper" v-show="this.tempData.shopName" style="min-width: 85.2031px; position: absolute; top: 100%; left: 0px; transform-origin: center top 0px; z-index: 2005;" x-placement="bottom-start">
                <div class="el-scrollbar" style="">
                  <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                    <ul class="el-scrollbar__view el-select-dropdown__list">
                      <template v-for="item in categoryList">
                        <li class="el-select-dropdown__item" @click="setItem(item.shopName)"><span>{{item.shopName}}</span></li>
                      </template>
                    </ul>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                  </div>
                </div>
                <div class="popper__arrow" style="left: 35px;"></div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('COURIER.SELECT1.TITLE')">
              <el-select @change="selectStatus" v-model="tempData.isAudit" :placeholder="$t('COURIER.SELECT1.PLA1')">
                <el-option :label="$t('COURIER.SELECT1.FONT1')" value=""></el-option>
                <el-option :label="$t('COURIER.SELECT1.FONT2')" value="1"></el-option>
                <el-option :label="$t('COURIER.SELECT1.FONT3')" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="padding-left:40px">
            <el-button type="primary" @click="search" icon="el-icon-search">{{ $t('COURIER.BTN.FONT1') }}</el-button>
          </el-col>
          <el-col :span="2" style="padding-left:20px">
            <el-button type="primary" @click="editorDia('add')">{{ $t('COURIER.BTN.FONT2') }}</el-button>
          </el-col>
          <el-col :span="2" style="padding-left:20px">
            <el-button type="primary" @click="editorDia('time')">{{ $t('COURIER.BTN.FONT3') }}</el-button>
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
          :label="$t('COURIER.TABEL.FONT1')"
          width="80"
          align="center"
          type="index" >
        </el-table-column>
        <el-table-column
          prop="count"
          :label="$t('COURIER.TABEL.FONT2')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="courierName"
          :label="$t('COURIER.TABEL.FONT3')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="createTime"
          :label="$t('COURIER.TABEL.FONT4')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="email"
          :label="$t('COURIER.TABEL.FONT5')"
          width="200"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="isAudit"
          :label="$t('COURIER.TABEL.FONT6')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.isAudit == 1">{{ $t('COURIER.TABEL.OTHER.FONT1') }}</span>
            <span v-else-if="scope.row.isAudit == 2">{{ $t('COURIER.TABEL.OTHER.FONT2') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="isDelete"
          :label="$t('COURIER.TABEL.FONT7')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.isDelete == 1">{{ $t('COURIER.TABEL.OTHER.FONT3') }}</span>
            <span v-else-if="scope.row.isDelete == 2">{{ $t('COURIER.TABEL.OTHER.FONT4') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="isDisable"
          :label="$t('COURIER.TABEL.FONT8')"
          width="200"
          align="center" >
          <template slot-scope="scope">
            <span v-if="scope.row.isDisable == 1">{{ $t('COURIER.TABEL.OTHER.FONT5') }}</span>
            <span v-else-if="scope.row.isDisable == 2">{{ $t('COURIER.TABEL.OTHER.FONT6') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="phone"
          :label="$t('COURIER.TABEL.FONT9')"
          width="220"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="shopName"
          :label="$t('COURIER.TABEL.FONT10')"
          width="250"
          align="center" >
        </el-table-column>
        <el-table-column :label="$t('COURIER.TABEL.FONT11')" fixed="right" align="center" width="400">
          <template slot-scope="scope">
            <el-button type="primary" @click="editorDia('update', scope.row)">{{ $t('COURIER.OPERATION.FONT1') }}</el-button>
            <el-button type="success" @click="editor(scope.row)">{{ $t('COURIER.OPERATION.FONT2') }}</el-button>
            <el-button type="warning" @click="frozenUpdate(scope.row.id)">{{ $t('COURIER.OPERATION.FONT3') }}</el-button>
            <el-button type="danger" @click="del(scope.row.id)">{{ $t('COURIER.OPERATION.FONT4') }}</el-button>
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
    <el-dialog :title="$t('COURIER.DIALOG.TITLE')" :visible.sync="editorVisable" width="20%" :center="true">
      <el-form >
        <el-form-item :label="$t('COURIER.SELECT1.TITLE')">
          <el-select v-model="editorItem.isAudit" :placeholder="$t('COURIER.SELECT1.PLA1')">
            <el-option :label="$t('COURIER.SELECT1.FONT1')" :value="0"></el-option>
            <el-option :label="$t('COURIER.SELECT1.FONT2')" :value="1"></el-option>
            <el-option :label="$t('COURIER.SELECT1.FONT3')" :value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorVisable = false">{{ $t('COURIER.DIALOG.BTN1') }}</el-button>
        <el-button type="primary" @click="updateExamine">{{ $t('COURIER.DIALOG.BTN2') }}</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="$t('COURIER.DIALOG2.TITLE')" :visible.sync="frozen" width="20%" :center="true">
      <el-form >
        <el-form-item :label="$t('COURIER.SELECT2.TITLE')">
          <el-select v-model="editorItem2.isDisable" :placeholder="$t('COURIER.SELECT2.PLA1')">
            <el-option :label="$t('COURIER.SELECT2.FONT1')" value=""></el-option>
            <el-option :label="$t('COURIER.SELECT2.FONT2')" value="2"></el-option>
            <el-option :label="$t('COURIER.SELECT2.FONT3')" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorVisable = false">{{ $t('COURIER.DIALOG2.BTN1') }}</el-button>
        <el-button type="primary" @click="updateFrozen">{{ $t('COURIER.DIALOG2.BTN2') }}</el-button>
      </div>
    </el-dialog>

    <!--<el-dialog title="配送时效设置" :visible.sync="time.timeSync" width="20%" center="true">-->
      <!--<el-form :model="form">-->
        <!--<el-form-item :label="配送时间" :label-width="formLabelWidth">-->
          <!--<el-input v-model="time.timeItem" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="time.timeSync = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
      <!--</div>el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->

    <el-dialog
      :title="$t('COURIER.DIALOG3.TITLE')"
      :visible.sync="addStatus"
      width="550px"
      center
      :modal-append-to-body="false"
    >
      <el-form :model="addData" ref="addData">
        <el-form-item :label="$t('COURIER.DIALOG3.FONT1')">
          <el-input :placeholder="$t('COURIER.DIALOG3.PLA1')" v-model="addData.courierName">
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG3.FONT2')">
          <el-input :placeholder="$t('COURIER.DIALOG3.PLA2')" v-model="addData.email"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG3.FONT3')">
          <el-input :placeholder="$t('COURIER.DIALOG3.PLA3')" v-model="addData.password"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG3.FONT4')">
          <el-input :placeholder="$t('COURIER.DIALOG3.PLA4')" v-model="addData.phone"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG3.FONT5')" style="position: relative">
          <el-input
            v-model="addData.shopName"
            @focus="openDownLoad('addData')"
            :placeholder="$t('COURIER.DIALOG3.PLA5')">
          </el-input>
          <div class="el-select-dropdown el-popper" v-show="this.addData.iOpen" style="min-width: 85.2031px; position: absolute; top: 100%; left: 0px; transform-origin: center top 0px; z-index: 2005;" x-placement="bottom-start">
            <div class="el-scrollbar" style="">
              <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                <ul class="el-scrollbar__view el-select-dropdown__list">
                  <template v-for="item in categoryList">
                    <li class="el-select-dropdown__item" @click="addData.shopName = item.shopName; addData.isOpen = false"><span>{{item.shopName}}</span></li>
                  </template>
                </ul>
              </div>
              <div class="el-scrollbar__bar is-horizontal">
                <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
              </div>
              <div class="el-scrollbar__bar is-vertical">
                <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
              </div>
            </div><!---->
            <div class="popper__arrow" style="left: 35px;"></div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="add" type="success">{{ $t('COURIER.DIALOG3.BTN1') }}</el-button>
      </div>
    </el-dialog>

    <el-dialog
      :title="$t('COURIER.DIALOG4.TITLE')"
      :visible.sync="updateStatus"
      width="550px"
      center
      :modal-append-to-body="false"
    >
      <el-form :model="updateData" ref="updateData">
        <el-form-item :label="$t('COURIER.DIALOG4.FONT1')">
          <el-input :placeholder="$t('COURIER.DIALOG4.PLA1')" v-model="updateData.courierName">
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG4.FONT2')">
          <el-input :placeholder="$t('COURIER.DIALOG4.PLA2')" v-model="updateData.email"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG4.FONT3')">
          <el-input :placeholder="$t('COURIER.DIALOG4.PLA3')" v-model="updateData.password"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG4.FONT4')">
          <el-input :placeholder="$t('COURIER.DIALOG4.PLA4')" v-model="updateData.phone"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COURIER.DIALOG4.FONT5')" style="position: relative">
          <el-input
            v-model="updateData.shopName"
            :placeholder="$t('COURIER.DIALOG4.PLA5')">
          </el-input>
          <div class="el-select-dropdown el-popper" v-show="this.updateData.shopName" style="min-width: 85.2031px; position: absolute; top: 100%; left: 0px; transform-origin: center top 0px; z-index: 2005;" x-placement="bottom-start">
            <div class="el-scrollbar" style="">
              <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                <ul class="el-scrollbar__view el-select-dropdown__list">
                  <template v-for="item in categoryList">
                    <li class="el-select-dropdown__item" @click="updateData.shopName = item.shopName"><span>{{item.shopName}}</span></li>
                  </template>
                </ul>
              </div>
              <div class="el-scrollbar__bar is-horizontal">
                <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
              </div>
              <div class="el-scrollbar__bar is-vertical">
                <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
              </div>
            </div><!---->
            <div class="popper__arrow" style="left: 35px;"></div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="update" type="success">{{ $t('COURIER.DIALOG4.BTN1') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { courierManagerLikePage, managerUpdateIsAudit, managerUpdateIsDisable, managerUpdateIsDelete, managerAdd, mUpdate, managerClShopName } from "@/api/index.js";
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
          courierName: '',
          shopName: '',
          isAudit: ''
        },
        frozen: false,
        editorVisable: false,
        addStatus: false,
        editorItem: {
          isAudit: ''
        },
        editorItem2: {
          isDisable: '',
        },
        time: {
          timeSync: false,
          timeItem: 0
        },
        categoryList: [],
        addData: {
          courierName: '',
          email: '',
          password: '',
          phone: '',
          shopName: '',
          isOpen: false
        },
        updateData: {
          shopName: '',
          isOpen: false
        },
        updateStatus: false,
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
    watch:{
      'tempData.shopName' (val) {
        managerClShopName({
          page:1,
          size:10,
          shopName:val
        }).then((res)=>{
          this.categoryList=res
        })
      },
      'updateData.shopName'(val) {
        managerClShopName({
          page:1,
          size:10,
          shopName:val
        }).then((res)=>{
          console.log(res);
          this.updateData.iOpen = true
          this.categoryList=res
        })
      },
      'addData.shopName'(val) {
        managerClShopName({
          page:1,
          size:10,
          shopName:val
        }).then((res)=>{
          console.log(res);

          this.categoryList=res
        })
      }
    },
    methods: {
      openDownLoad(name){
        if (name == 'addData') {
          this.addData.isOpen = true
        }
      },
      //加载数据
      initData(page, size) {
        courierManagerLikePage({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize,
          courierName: this.tempData.courierName,
          shopName: this.tempData.shopName,
          isAudit: Number(this.tempData.isAudit),
        }).then(res => {
          this.dataList = res.list;
          this.page.pageNum = res.total_record;
        });
      },
      setItem(name) {
        this.tempData.shopName = name
      },
      editorDia(type, row){
        if (type == 'update') {
          this.updateData = row;
          this.updateStatus = true;
        }else if('add') {
          this.addStatus = true
        }else if ('time') {
          // this.time.timeSync = true
        }
      },
      searchCategory (v) {
        managerClShopName({
          page:1,
          size:50,
          shopName:v
        }).then((res)=>{
          console.log(res);
          this.categoryList=res
        })
      },
      add() {
        managerAdd(this.addData).then( res => {
          this.addStatus = false;
          this.addData = {};
          this.initData(1);
        } )
      },
      update() {
        mUpdate(this.updateData).then(res => {
          this.updateStatus = false;
          this.initData(1);
        })
      },
      editor(row){
        this.editorVisable=true;
        this.editorItem.isAudit = row.isAudit;
        this.editorItem['iId'] = row.id;
        // this.editorItem=obj;
      },
      frozenUpdate(id){
        console.log('---->', id);
        this.frozen=true;
        this.editorItem2['iId'] = id;
        // this.editorItem=obj;
      },
      updateExamine() {
          console.log(this.editorItem)
          managerUpdateIsAudit(this.editorItem).then( res => {
            this.editorVisable=false;
            this.initData(1);
        })
      },
      //删除商品
      del(id) {
        this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
          confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
          cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
          type: 'warning'
        }).then(()=>{
          managerUpdateIsDelete({
            'iId': id,
            'isDelete': 2
          }).then(res=>{
            this.initData(1)
          })
        })
      },
      updateFrozen() {
        managerUpdateIsDisable(this.editorItem2).then( res => {
          this.frozen=false;
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
