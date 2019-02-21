<template>
  <div class="content storeAudit">
    <div class="operation">
    <el-form label-width="100px" label-position="right" class="mgt20">
      <el-row>
        <el-col :span="6">
          <el-form-item :label="$t('STOREAUDIT.FORM.FONT1')">
            <el-select v-model="tempData.categoryName" :placeholder="$t('STOREAUDIT.FORM.PLA1')" filterable remote :remote-method="searchCategory" @focus="searchCategory('')">
              <el-option v-for="item in categoryList" :key="item.categoryCode" :value="item.categoryCode" :label="item.categoryName"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('STOREAUDIT.FORM.FONT2')">
            <el-select v-model="tempData.areaName" :placeholder="$t('STOREAUDIT.FORM.PLA2')" filterable clearable remote :remote-method="searchArea" @focus="searchArea('')">
              <el-option v-for="item in areaList" :key="item.areaCode" :value="item.areaCode" :label="item.areaName"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('STOREAUDIT.FORM.FONT3')">
            <el-input :placeholder="$t('STOREAUDIT.FORM.PLA3')" v-model="tempData.shopName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
                <el-form-item :label="$t('STOREAUDIT.TIME.TITLE')" class="mgb0">
                    <el-date-picker
                    type="date"
                    value-format="yyyy-mm-dd"
                    :placeholder="$t('STOREAUDIT.TIME.START')"
                    v-model="tempData.startTime"
                    ></el-date-picker>
                    <span style="width:60px;">-</span>
                    <el-date-picker
                    type="date"
                    value-format="yyyy-mm-dd"
                    :placeholder="$t('STOREAUDIT.TIME.END')"
                    v-model="tempData.endTime"
                    ></el-date-picker>
                </el-form-item>
            </el-col>
        <el-button icon="el-icon-search" type="primary" @click="searchList">{{$t('STOREAUDIT.BTN.FONT1')}}</el-button>
      </el-row>
    </el-form>
  </div>
  <div class="table">
    <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="tableData" v-loading="loading" border >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="shopName" :label="$t('STOREAUDIT.TABEL.FONT1')" align="center"></el-table-column>
      <el-table-column prop="address" :label="$t('STOREAUDIT.TABEL.FONT2')" align="center"></el-table-column>
      <el-table-column prop="businessTime" :label="$t('STOREAUDIT.TABEL.FONT3')" align="center"></el-table-column>
      <el-table-column prop="categoryName" :label="$t('STOREAUDIT.TABEL.FONT4')" align="center"></el-table-column>
      <el-table-column prop="areaName" :label="$t('STOREAUDIT.TABEL.FONT5')" align="center"></el-table-column>
      <el-table-column prop="orderPhone" :label="$t('STOREAUDIT.TABEL.FONT6')" align="center"></el-table-column>
      <el-table-column :label="$t('STOREAUDIT.TABEL.FONT7')" align="center"><template slot-scope="user"><el-button type="primary" @click="editor(user.row)">{{$t('STOREAUDIT.OPERATION.FONT1')}}</el-button></template></el-table-column>
    </el-table>
  </div>
    <pagination
      :current-page="page.pageCurrent"
      :page-size="page.pageSize"
      :total="page.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    ></pagination>
    <el-dialog :title="$t('STOREAUDIT.DIALOG1.TITLE')" :visible.sync="editorVisable"  width="800px" :modal-append-to-body="false" class="editor">
        <el-form :model="editorItem" label-width="80px" label-position="left">
            <el-row :gutter="20">
              <el-col :span="12"><el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT1')"><el-input :placeholder="$t('STOREAUDIT.DIALOG1.PLA1')" disabled :value="editorItem.shopName"></el-input></el-form-item></el-col>
                <el-col :span="12"><el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT2')"><el-input :placeholder="$t('STOREAUDIT.DIALOG1.PLA2')" disabled :value="editorItem.id"></el-input></el-form-item></el-col>
            </el-row>
             <el-row :gutter="20">
               <el-col :span="12"><el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT3')"><el-input :placeholder="$t('STOREAUDIT.DIALOG1.PLA3')" disabled :value="editorItem.areaName"></el-input></el-form-item></el-col>
               <el-col :span="12"><el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT4')"><el-input :placeholder="$t('STOREAUDIT.DIALOG1.PLA4')" disabled :value="editorItem.categoryName"></el-input></el-form-item></el-col>
             </el-row>
             <el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT5')" label-width="100px">
            <el-row :gutter="20" class="flbox">
             <img :src="editorItem.idCardFront" alt="" class="idImg" @click="display(editorItem.idCardFront)"><img :src="editorItem.idCardReverse" alt="" class="idImg" @click="display(editorItem.idCardReverse)">
            </el-row>
             </el-form-item>
           <el-form-item :label="$t('STOREAUDIT.DIALOG1.FONT6')" label-width="100px;">
             <el-row class="flbox">
                <img :src="editorItem.businessLicense" alt="" class="businessImg" @click="display(editorItem.idCardFront)">
              </el-row>
           </el-form-item>
           <el-form-item class="flbox">
             <el-button type="success" @click="audit(0)">{{$t('STOREAUDIT.DIALOG1.BTN1')}}</el-button>
             <el-button type="danger" @click="audit(2)">{{$t('STOREAUDIT.DIALOG1.BTN2')}}</el-button>
           </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog :visible.sync="displayVisable"  width="800px" :modal-append-to-body="false">
               <img :src="displayUrl" alt="">
    </el-dialog>

  </div>
</template>

<script>
import pagination from '@/components/pagination'
import {store} from '@/api/index'
export default {
  components: {
    pagination
  },
  data () {
    return {
      displayVisable: false,
      displayUrl: null,
      editorVisable: false,
      editorItem: {},
      areaList: [],
      categoryList: [],
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {},
      // 搜索时用的数据
      searchData: {},
      // 分页数据
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    // 审核通过
    audit (val) {
      store.Audit({
        id: this.editorItem.id,
        status: val
      }).then(res => {
        this.editorVisable = false
      })
    },
    // 展示图片
    display (url) {
      this.displayVisable = true
      this.displayUrl = url
    },
    // 详情审核
    editor (obj) {
      this.editorVisable = true
      this.editorItem = obj
      this.initData(1)
    },
    // 分区查找
    searchArea (areaName) {
      this.$common.throttle(() => {
        store.storeZoom({
          areaName
        }).then(res => {
          this.areaList = res.rows
        })
      }, 1000)
    },
    // 查找类别
    searchCategory (val) {
      this.$common.throttle(() => {
        store.storeCategory({
          categoryName: val
        }).then(res => {
          this.categoryList = res.rows
        })
      }, 1000)
    },
    initData: function (page, size) {
      this.loading = true
      this.searchData = this.$common.deepCopy(this.tempData)
      this.searchData.page = this.page.pageCurrent
      this.searchData.size = this.page.pageSize
      console.log(this.searchData)
      store.storeAudit(this.searchData).then(res => {
        this.tableData = res.rows
        console.log(this.tableData)
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
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
