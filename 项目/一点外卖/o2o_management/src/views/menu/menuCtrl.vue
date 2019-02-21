<template>
  <div class="content storeAudit">
    <div class="subTitleTop">
            <span>菜单配置管理</span>
        </div>
    <div class="operation">
      <el-form label-width="20px" label-position="right">
        <el-row>
          <el-col :span="1">
            <el-form-item class="mgb0"><el-button icon="el-icon-search" type="primary"  @click="$router.push({name:'menuAdd'})">{{ $t('STOREPARTITION.BTN.FONT2') }}</el-button></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table">
      <el-table :empty-text="$t('PUBLIC.TABELEMPTY')" :data="menuList" border >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="name" :label="$t('MENUCTRL.MENULIST.MENUNANE')" align="center"></el-table-column>
        <el-table-column prop="url" :label="$t('MENUCTRL.MENULIST.ROUNTPATH')" align="center"></el-table-column>
        <el-table-column prop="icon" :label="$t('MENUCTRL.MENULIST.MENUICON')" align="center"></el-table-column>
        <el-table-column prop="remark" :label="$t('MENUCTRL.MENULIST.MENUDESCRIPTION')" align="center"></el-table-column>
        <el-table-column
            :label="$t('MENUCTRL.MENULIST.FONT')"
            width="300"
            align="center">
            <template slot-scope="scope">
                   <!-- <el-button type="primary" icon="el-icon-edit">修改</el-button> -->
                   <el-button type="primary" icon="el-icon-edit-outline" @click="$router.push({name:'menuAdd',query:scope.row})">{{ $t('COMMODITYCLASS.OPERATION.FONT1') }}</el-button>
                   <el-button type="danger" icon="el-icon-delete" @click="delHandleClick(scope.$index,scope.row.id)">{{ $t('COMMODITYCLASS.OPERATION.FONT2') }}</el-button>
            </template>
            </el-table-column>
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
import {menus} from '@/api/index'
export default {
  components: {
    pagination
  },
  data () {
    return {
      displayUrl: null,
      editorVisable: false,
      editorItem: {},
      audit: {
        id: '',
        status: null,
        visability: false,
        class: '',
        shopName: ''
      },
      areaList: [],
      statusList: [
        {
          value: 0,
          label: this.$t('COMMODITYCLASS.STATUS.FONT1')
        },
        {
          value: 1,
          label: this.$t('COMMODITYCLASS.STATUS.FONT2')
        },
        {
          value: 3,
          label: this.$t('COMMODITYCLASS.STATUS.FONT3')
        }
      ],
      menuList: [],
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
        pageNum: 10,
        pageCurrent: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    initData: function (page, size) {
      var self = this
      this.loading = true
      menus
        .menuctrlclass({
          page: this.page.currentPage,
          size: this.page.pageSize
        })
        .then(res => {
          console.log(res)
          this.menuList = res.rows
          this.page.pageNum = res.count
        })
        .then(() => {
          setTimeout(function () {
            self.loading = false
          }, 500)
        })
    },
    currentChange (val) {
      this.page.currentPage = val
      this.initData()
    },
    sizeChange (val) {
      this.page.pageSize = val
      this.initData()
    },
    // 删除
    delHandleClick (index, id) {
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        menus.menumsgdelete({'id': id}).then(res => {
          this.initData()
        })
      })
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
