<template>
  <div class="content">
    <div class="operation">
    <el-row  :gutter="40">
      <el-col :span="6">
        <el-input :placeholder="$t('STOREPARTITION.FORM.PLA1')" v-model="tempData.areaName">
          <template slot="prepend">{{ $t('STOREPARTITION.FORM.FONT1') }}</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('STOREPARTITION.BTN.FONT1') }}</el-button>
        <el-button type="primary" @click="initTree" icon="el-icon-plus">{{ $t('STOREPARTITION.BTN.FONT2') }}</el-button>
      </el-col>
    </el-row>
  </div>
  <div class="table">
    <el-table :data="tableData" :empty-text="$t('PUBLIC.TABELEMPTY')" border v-loading="loading">
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT1')" width="50px" align="center" type="index"></el-table-column>
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT2')" prop="areaCode" align="center"></el-table-column>
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT3')" prop="areaName" align="center"></el-table-column>
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT4')" prop="levels" align="center"></el-table-column>
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT5')" prop="pareaName" align="center"></el-table-column>
      <el-table-column :label="$t('STOREPARTITION.TABEL.FONT6')" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="editorShow(scope.row)">{{$t('STOREPARTITION.OPERATION.FONT1')}}</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.areaCode)">{{$t('STOREPARTITION.OPERATION.FONT2')}}</el-button>
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
    <el-dialog
      :title="$t('STOREPARTITION.DIALOG1.TITLE')"
      :visible.sync="editorVisabilty"
      width="30%"
      :modal-append-to-body="false"
    >
      <el-form>
        <el-form-item :label="$t('STOREPARTITION.DIALOG1.FONT1')">
          <el-input :placeholder="$t('STOREPARTITION.DIALOG1.PLA1')" v-model="editorItem.areaName"></el-input>
        </el-form-item>
        <el-form-item :label="$t('STOREPARTITION.DIALOG1.FONT2')">
          <el-input :placeholder="$t('STOREPARTITION.DIALOG1.PLA2')" v-model="editorItem.levels" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('STOREPARTITION.DIALOG1.FONT3')">
          <el-input :placeholder="$t('STOREPARTITION.DIALOG1.PLA3')" v-model="editorItem.areaCode" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">{{$t('STOREPARTITION.DIALOG1.BTN1')}}</el-button>
        <el-button type="primary">{{$t('STOREPARTITION.DIALOG1.BTN2')}}</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="$t('STOREPARTITION.DIALOG2.TITLE')"
      :visible.sync="treeVisablity"
      width="550px"
      :modal-append-to-body="false"
    >

      <div class="block">
        <el-tree :data="treeData" node-key="label" default-expand-all :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <template v-if="node.level != 4">
                <el-button type="text" size="mini" @click="oper(data,0)">{{$t('STOREPARTITION.DIALOG2.ADD')}}</el-button>
              </template>
              <el-button type="text" size="mini" @click="oper(data,1)">{{$t('STOREPARTITION.DIALOG2.BTN1')}}</el-button>
              <el-button type="text" size="mini" @click="oper(data)">{{$t('STOREPARTITION.DIALOG2.BTN2')}}</el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </el-dialog>
    <!--<el-dialog-->
      <!--title="编辑"-->
      <!--:visible.sync="operTree"-->
      <!--width="550px"-->
      <!--center-->
      <!--:modal-append-to-body="false"-->
    <!--&gt;-->
      <!--<el-form :model="operTreeData" ref="operTreeData">-->
        <!--<el-form-item>-->
          <!--<el-input v-model="operTreeData.label">-->
            <!--<template slot="prepend">分区名称</template>-->
          <!--</el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer">-->
        <!--<el-button @click="treeOper" type="success">提交</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
import {
  storePartitionList,
  storePartitionTabList,
  storePartitionAdd,
  storePartitionDel,
  storePartitionSearch,
  storePartitionUpdate
} from '@/api/index.js'
import pagination from '@/components/pagination'
export default {
  components: {
    pagination
  },
  data () {
    return {
      operTreeData: {},
      operTree: false,
      // 树形图可见性
      treeVisablity: false,
      // 树形数据
      treeData: [],
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {
        areaName: ''
      },
      // 搜索时用的数据
      searchData: {},
      // 分页数据
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 5
      },
      editorItem: {},
      // 编辑窗口分类可见性
      editorVisabilty: false,
      // 新增窗口可见性
      addVisabilty: false,
      // 新增店铺分区
      addItem: {},
      isedit: false
    }
  },
  methods: {
    // 初始化数据
    initData: function (page, size) {
      this.loading = true
      storePartitionTabList({
        page: page || this.page.pageCurrent,
        size: size || this.page.pageSize,
        areaName: this.searchData.areaName
      }).then(res => {
        this.tableData = res.rows
        console.log(this.tableData)
        this.page.pageNum = res.count
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 页数改变时的回调
    currentChange (val) {
      this.page.pageCurrent = val
      this.initData()
    },
    // 呼出编辑框
    editorShow (row) {
      this.$common.clearMessage(this.editorItem)
      this.editorItem = this.$common.deepCopy(row)
      this.editorVisabilty = true
    },
    // 删除店铺分区
    del (areaCode) {
      storePartitionDel({ areaCode }).then(res => {
        this.initData()
      })
    },
    close () {
      this.editorVisabilty = false
      this.addVisabilty = false
      this.operTreeData = {}
    },
    searchList: function () {
      this.searchData = this.$common.deepCopy(this.tempData)
      this.page.pageCurrent = 1
      this.initData(1)
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.page.pageSize = val
      this.initData(1)
    },
    initTree () {
      this.treeVisablity = true
      storePartitionList({}).then(res => {
        this.treeData = res
        console.log('--->', res)
      })
    },
    oper (data, num) {
      console.log(data, num)
      if (num === 1) {
        this.flag = num
        this.operTreeData = this.$common.deepCopy(data)
        this.operTree = true
      } else if (num === 0) {
        this.flag = num
        this.operTreeData = this.$common.deepCopy(data)
        this.operTreeData.label = ''
        this.operTree = true
      } else {
        this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
          confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
          cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
          type: 'warning'
        })
          .then(() => {
            storePartitionDel({ areaCode: data.id }).then(res => {
              this.initTree()
              this.initData()
            })
          }
          )
      }
    },
    treeOper () {
      if (this.flag === 1) {
        storePartitionUpdate({
          areaCode: this.operTreeData.id,
          areaName: this.operTreeData.label
        }).then(res => {
          this.operTree = false
          this.initTree()
        })
      } else {
        storePartitionAdd({
          pareaCode: this.operTreeData.id,
          levels: this.operTreeData.level + 1,
          areaName: this.operTreeData.label
        }).then(res => {
          this.operTree = false
          this.initTree()
        })
      }
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style lang="scss">
body {
  background: #fff;
}
.dialog-footer {
  text-align: center;
}
</style>
