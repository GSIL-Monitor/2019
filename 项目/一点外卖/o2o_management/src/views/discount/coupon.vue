<template>
    <div class="content coupon">
          <div class="operation">
          <el-button type="success" icon="el-icon-plus" class="mgt20" @click="addShow">{{ $t('COUPON.BTN.FONT1') }}</el-button>
          <el-select v-model="page.language" placeholder="请选择父级列表" @change="getListBylanguage">
             <el-option
                v-for="item in language"
                :value="item.id"
                :key="item.index"
                :label="item.name"
                >
             </el-option>
          </el-select>
          </div>
          <div class="table">
          <el-table
            :empty-text="$t('PUBLIC.TABELEMPTY')"
          v-loading="loading"
          :data="tableData"
          >
                    <el-table-column  type="index" :label="$t('COUPON.TABEL.FONT1')" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT2')" prop="name" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT3')" prop="couponObject" align="center">
                      <template slot-scope="user">{{user.row.couponObject=="0"? $t('COUPON.TABEL.OTHER.FONT1') : $t('COUPON.TABEL.OTHER.FONT2') }}</template>
                    </el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT4')" prop="description" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT5')" prop="sumCondition" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT6')" prop="amount" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT7')" prop="effectiveDate" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT8')" prop="updateTime" align="center"></el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT9')" prop="openStatus" align="center">
                        <template slot-scope="user">{{user.row.openStatus==0? $t('COUPON.TABEL.OTHER.FONT3') : $t('COUPON.TABEL.OTHER.FONT4') }}</template>
                    </el-table-column>
                    <el-table-column :label="$t('COUPON.TABEL.FONT10')" align="center" width="250px">
                        <template slot-scope="user" >
                              <el-button type="primary"  @click="editorShow(user.row)">{{ $t('COUPON.OPERATION.FONT1') }}</el-button>
                              <el-button type="danger" @click="del(user.row.id)">{{ $t('COUPON.OPERATION.FONT2') }}</el-button>
                        </template>
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

    <el-dialog :title="$t('COUPON.DIALOG.TITLE')" :visible.sync="addVisabilty" width="550px" :modal-append-to-body="false" ref="addForm">
      <el-form :model="addItem" :rules="rules" ref="addForm">
        <el-form-item :label="$t('COUPON.DIALOG.FONT1')" prop="name">
          <el-input :placeholder="$t('COUPON.DIALOG.PLA1')" v-model="addItem.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COUPON.DIALOG.FONT2')" prop="description">
          <el-input :placeholder="$t('COUPON.DIALOG.PLA2')" v-model="addItem.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COUPON.SELECT1.TITLE')" prop="couponObject">
            <el-select :placeholder="$t('COUPON.SELECT1.PLA1')" v-model="addItem.couponObject">
              <el-option v-for="item in  typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item :label="$t('COUPON.TIME.TITLE')" prop="effectiveDate">
          <el-date-picker
            v-model="addItem.effectiveDate"
            type="datetime"
            value-format="yyyy-MM-dd"
            :placeholder="$t('COUPON.TIME.PLA1')">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('COUPON.SELECT2.TITLE')" prop="openStatus">
             <el-select v-model="addItem.openStatus">
                <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </el-form-item>
        <el-row>
            <el-col :span="12">
                <el-form-item :label="$t('COUPON.DIALOG.FONT3')" prop="amount" >
                    <el-input :placeholder="$t('COUPON.DIALOG.PLA3')" v-model.number="addItem.amount"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="12">
                <el-form-item :label="$t('COUPON.DIALOG.FONT4')" prop="sumCondition">
                    <el-input :placeholder="$t('COUPON.DIALOG.PLA4')" v-model.number="addItem.sumCondition" ></el-input>
                </el-form-item>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisabilty=false">{{ $t('COUPON.DIALOG.BTN1') }}</el-button>
        <el-button type="primary" @click="submit('addForm')">{{ $t('COUPON.DIALOG.BTN2') }}</el-button>
      </div>
    </el-dialog>
         <el-dialog
            :title="$t('COUPON.DIALOG2.TITLE')"
            :visible.sync="editorVisabilty" width="550px" :modal-append-to-body="false">
                 <el-form :model="editorItem" :rules="rules" ref="editorForm">
        <el-form-item :label="$t('COUPON.DIALOG2.FONT1')" prop="name">
          <el-input :placeholder="$t('COUPON.DIALOG2.PLA1')" v-model="editorItem.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COUPON.DIALOG2.FONT2')" prop="description">
          <el-input :placeholder="$t('COUPON.DIALOG2.PLA2')" v-model="editorItem.description" type="textarea"></el-input>
        </el-form-item>
        <el-form-item :label="$t('COUPON.SELECT1.TITLE')" prop="couponObject">
            <el-select :placeholder="$t('COUPON.SELECT1.PLA1')" v-model="editorItem.couponObject">
                 <el-option v-for="item in  typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item :label="$t('COUPON.TIME.TITLE')" prop="effectiveDate">
          <el-date-picker
            v-model="editorItem.effectiveDate"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :placeholder="$t('COUPON.TIME.PLA1')">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('COUPON.SELECT2.TITLE')" prop="openStatus">
             <el-select v-model="editorItem.openStatus">
                 <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </el-form-item>
        <el-row>
            <el-col :span="12">
                <el-form-item :label="$t('COUPON.DIALOG2.FONT3')" prop="amount" >
                    <el-input :placeholder="$t('COUPON.DIALOG2.PLA3')" v-model.number="editorItem.amount"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
         <el-row>
            <el-col :span="12">
                <el-form-item :label="$t('COUPON.DIALOG2.FONT4')" prop="sumCondition" >
                    <el-input v-model.number="editorItem.sumCondition" :placeholder="$t('COUPON.DIALOG2.PLA4')"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editorVisabilty=false">{{ $t('COUPON.DIALOG2.BTN1') }}</el-button>
        <el-button type="primary" @click="submit('editorForm')">{{ $t('COUPON.DIALOG2.BTN2') }}</el-button>
      </div>
        </el-dialog>
    </div>

</template>

<script>
import pagination from '@/components/pagination'
import { discount, getLanguageList } from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
      // openAndClose
      statusList: [{label: this.$t('COUPON.SELECT2.FONT1'), value: 0}, {label: this.$t('COUPON.SELECT2.FONT2'), value: 1}],
      // 红包种类
      typeList: [{label: this.$t('COUPON.SELECT1.FONT1'), value: 0}, {label: this.$t('COUPON.SELECT1.FONT2'), value: 1}],
      // 表达验证规则
      rules: {
        name: [{ required: true, message: this.$t('COUPON.RULES.FONT1'), tigger: 'blur' }],
        effectiveDate: [
          { required: true, message: this.$t('COUPON.RULES.FONT2'), tigger: 'blur' }
        ],
        openStatus: [
          { type: 'number', required: true, message: this.$t('COUPON.RULES.FONT3'), tigger: 'change' }
        ],
        amount: [
          { type: 'number', required: true, message: this.$t('COUPON.RULES.FONT4'), tigger: 'blur' },
          { pattern: /^[0-9]+$/, message: this.$t('COUPON.RULES.FONT5'), tigger: 'blur' }
        ],
        sumCondition: [
          { type: 'number', required: false, message: this.$t('COUPON.RULES.FONT6'), tigger: 'input' },
          { pattern: /^[0-9]*$/, message: this.$t('COUPON.RULES.FONT7'), tigger: 'input'}
        ],
        couponObject: [
          { type: 'number', required: true, message: this.$t('COUPON.RULES.FONT8'), tigger: 'change' }
        ]
      },
      tempData: {},
      addItem: {},
      editorItem: {},
      editorVisabilty: false,
      language: [],
      // 添加窗口可见性
      addVisabilty: false,
      loading: false,
      tableData: [],
      // 呼出编辑窗口
      editorShow (row) {
        // this.$common.clearMessage(this.editorItem);
        this.editorItem = this.$common.deepCopy(row)
        this.editorVisabilty = true
      },
      // 分页信息
      page: {
        pageNum: 10,
        currentPage: 1,
        pageSize: 5,
        language: '1'
      }
    }
  },
  methods: {
    // 初始化数据
    initData (page, size) {
      this.loading = true
      discount
        .couponList({
          page: page || this.page.currentPage,
          size: size || this.page.pageSize,
          language: '1' || this.page.language
        })
        .then(res => {
          this.tableData = res.rows
          this.page.pageNum = res.count
          console.log(this.tableData)
        })
      getLanguageList({code: 'LANGUAGE'})
        .then(res => {
          this.language = res
          console.log(this.language)
        })

      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 添加优惠券
    addShow () {
      this.$common.clearMessage(this.addItem)
      this.addVisabilty = true
    },
    // 删除优惠券
    del (id) {
      discount.delCounpon({ id }).then(res => {
        console.log(res)
        this.initData()
      })
    },
    close () {
      this.editorVisabilty = false
      this.addVisabilty = false
    },
    // 页数改变时的回调
    currentChange (val) {
      this.page.currentPage = val
      this.initData()
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.page.pageSize = val
      this.initData()
    },
    submit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName === 'addForm') {
            discount.addCounpon(this.addItem).then(res => {
              this.close()
              this.initData()
            })
          } else {
            discount.editorCounpon(this.editorItem).then(res => {
              this.close()
              this.initData()
            })
          }
        } else {

        }
      })
    },
    getListBylanguage () {
      console.log(111)
      discount
        .couponList({
          language: '1' || this.language
        })
        .then(res => {
          this.tableData = res.rows
          this.page.pageNum = res.count
          console.log(this.tableData)
        })
    }
  },
  watch: {
    editorItem: function (val) {
      console.log(val)
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>

<style>
.content {
  /*min-width: 1200px;*/
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  /*min-height: 800px;*/
}
</style>
