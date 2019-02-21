<template>
    <div class="content">
    <div class="operation">
          <el-row :gutter="20" class="mgt20">
              <el-col :span="6">
                  <el-input :placeholder="$t('COMMODITYCLASS.FORM.PLA1')" v-model="filterData.shopName">
                      <template slot="prepend">
                        {{ $t('COMMODITYCLASS.FORM.FONT1') }}
                      </template>
                  </el-input>
              </el-col>
              <el-col :span="6">
                  <el-input :placeholder="$t('COMMODITYCLASS.FORM.PLA2')" v-model="filterData.class">
                      <template slot="prepend">
                        {{ $t('COMMODITYCLASS.FORM.FONT2') }}
                      </template>
                  </el-input>
              </el-col>
             <el-col :span="6">
                  <el-input :placeholder="$t('COMMODITYCLASS.FORM.PLA3')">
                      <template slot="prepend">
                        {{ $t('COMMODITYCLASS.FORM.FONT3') }}
                      </template>
                  </el-input>
              </el-col>
              <el-button type="primary" icon="el-icon-search" @click="initData">{{ $t('COMMODITYCLASS.BTN.FONT1') }}</el-button>
               <!-- <el-button type="primary" icon="el-icon-search" @click="mulDel">查询</el-button> -->
         </el-row>
</div>
<div class="table">
         <el-table
         :empty-text="$t('PUBLIC.TABELEMPTY')"
         :data="messageList"
         v-loading="loading"
         @selection-change="handleSelectionChange"
        >
        <el-table-column
          type="selection"
          width="55">

        </el-table-column>
           <el-table-column
           :label="$t('COMMODITYCLASS.TABEL.FONT1')"
           type="index"
           align="center"
           width="150"
         >
             </el-table-column>
            <el-table-column
            :label="$t('COMMODITYCLASS.TABEL.FONT2')"
            prop="shopName"
            align="center">
            </el-table-column>
            <el-table-column
            :label="$t('COMMODITYCLASS.TABEL.FONT3')"
            align="center">
             <template slot-scope="scope">
                 {{scope.row.status===1?"中文":"外文"}}
             </template>
            </el-table-column>
            <el-table-column
            :label="$t('COMMODITYCLASS.TABEL.FONT4')"
            align="center"
            prop="name">
            </el-table-column>
           <!--  <el-table-column
            :label="$t('COMMODITYCLASS.TABEL.FONT5')"
            align="center">
            </el-table-column>
            <el-table-column
            :label="$t('COMMODITYCLASS.TABEL.FONT6')"
            width="400"
            align="center">
            <template slot-scope="scope">
                   <el-button type="primary" icon="el-icon-edit">修改</el-button>
                   <el-button type="warning" icon="el-icon-edit-outline" @click="check(scope.row.id,scope.row.shopName,scope.row.status,scope.row.name)">{{ $t('COMMODITYCLASS.OPERATION.FONT1') }}</el-button>
                   <el-button type="danger" icon="el-icon-delete" @click="del(scope.row.id)">{{ $t('COMMODITYCLASS.OPERATION.FONT2') }}</el-button>
            </template>
            </el-table-column> -->
         </el-table>
    </div>
                  <pagination :current-page="page.currentPage"
                     :page-size="page.pageSize"
                     :total="page.pageNum"
                     @sizeChange="sizeChange"
                     @currentChange="currentChange"
                  >
                  </pagination>
               <el-dialog
                      placement="top-start"
                      width="400"
                      :visible="audit.visability"
                      :title="$t('COMMODITYCLASS.DIALOG.TITLE')"
                      transition="fade-in-linear"
                      :modal-append-to-body="false"
                      :show-close="false"
                      setChecked="node"
              >
                                <el-row>
                                    <el-col :span="18">
                                            <el-input :placeholder="$t('COMMODITYCLASS.DIALOG.PLA1')" v-model="audit.shopName" disabled>
                                                <template slot="prepend">{{ $t('COMMODITYCLASS.DIALOG.FONT1') }}</template>
                                            </el-input>
                                    </el-col>
                                    <el-col :span="18" class="mgt20  clearfix">
                                            <el-input :placeholder="$t('COMMODITYCLASS.DIALOG.PLA2')" v-model="audit.class" disabled="">
                                                <template slot="prepend">{{ $t('COMMODITYCLASS.DIALOG.FONT2') }}</template>
                                            </el-input>
                                    </el-col>
                          </el-row>
                               <el-select class="mgt20" :placeholder="$t('COMMODITYCLASS.SELECT.FONT1')"  v-model="audit.status"  clearable>
                                   <el-option v-for="item in statusList" :label="item.label" :value="item.value" :key="item.value"></el-option>
                               </el-select>
                          <div class="mgt20 button-box" >
                                    <el-button type="primary" icon="el-icon-check" @click="submit">{{ $t('COMMODITYCLASS.DIALOG.BTN1') }}</el-button>
                                    <!-- <el-button type="danger" i @click="clearMessage(editorRoleData)">清空</el-button> -->
                                    <el-button type="danger" con="el-icon-delete" @click="close">{{ $t('COMMODITYCLASS.DIALOG.BTN2') }}</el-button>
                          </div>

            </el-dialog>
    </div>
</template>
<script>
import pagination from '@/components/pagination'
import { commodity } from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
      loading: false,
      messageList: [],
      temData: [],
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
      audit: {
        id: '',
        status: null,
        visability: false,
        class: '',
        shopName: ''
      },

      // 页码信息
      page: {
        pageNum: 10,
        currentPage: 1,
        pageSize: 5
      },
      // 搜索时提交的信息
      filterData: {
        shopName: '',
        class: '',
        languages: ''
      }
    }
  },
  beforeMount () {
    this.initData()
  },
  methods: {
    handleSelectionChange (val) {
      this.temData = val
    },
    // 初始化数据
    initData () {
      var self = this
      this.loading = true
      commodity
        .commodityClass({
          page: this.page.currentPage,
          size: this.page.pageSize,
          name: this.filterData.class,
          shopName: this.filterData.shopName
        })
        .then(res => {
          console.log(res)
          this.messageList = res.rows
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
    // 审核商品
    check (id, shopName, status, name) {
      this.audit.class = ''
      this.audit.id = ''
      this.audit.shopName = ''
      this.audit.status = null
      this.audit.visability = true
      this.audit.id = id
      this.audit.shopName = shopName
      this.audit.class = name
      this.audit.status = status
    },
    // 删除商品
    del (id) {
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        commodity.delCommodity({
          id
        }).then(res => {
          this.initData()
        })
      })
    },
    // 提交审核信息
    submit () {
      commodity.checkCommodity({
        id: this.audit.id,
        status: this.audit.status
      }).then(res => {
        this.close()
        this.initData()
      })
    },
    close () {
      this.audit.visability = false
    }
  }
}
</script>

<style lang="scss">
.button-box {
  display: flex;
  justify-content: center;
}
.content {
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
}
</style>
