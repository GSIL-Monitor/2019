<template>
  <div class="privilege container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("Privilege.T") }}</span>
    </div>
    <div class="content">
      <router-link :to="{name:'AddPrivilege'}">
        <el-button>{{ $t("Privilege.T1") }}</el-button>
      </router-link>
        <el-button @click="updStatus('0')">{{ $t("Privilege.updStatus1") }}</el-button>
        <el-button @click="updStatus('1')">{{ $t("Privilege.updStatus2") }}</el-button>
      <!-- 订单列表 -->
      <div class="orderLis">
        <el-table :data="tableData" @current-change="handleCurrentChange" highlight-current-row :header-cell-class-name='tableHeadRowClassName' border style="width: 100%">
          <el-table-column type="index" :label="$t('Privilege.Lab1')" width="80">
          </el-table-column>
          <el-table-column prop="name" :label="$t('Privilege.Lab2')">
          </el-table-column>
          <el-table-column prop="phone" :label="$t('Privilege.Lab3')">
          </el-table-column>
          <el-table-column prop="status" :label="$t('Privilege.Lab4')">
            <template slot-scope="scope">
              {{scope.row.status ? $t('Privilege.Lab5') :$t('Privilege.Lab6')}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="$t('BTN.Handle')" width="120">
            <template slot-scope="scope">
              <span @click="handleClick(scope.row)">{{ $t("BTN.Edit") }}</span>
              <i>|</i>
              <span @click="delClick(scope.$index, scope.row)">{{ $t("BTN.Del") }}</span>
            </template>
          </el-table-column>
        </el-table>
        <p class="fr status">（{{ $t("Privilege.Txt") }}）</p>
      </div>
    </div>
  </div>
</template>

<script>
import { queryBusCourier, delCourier, busCourierUpdateStatus } from '@/api/index.js'
export default {
  data () {
    return {
      busShopId: '',
      tableData: [],
      obj: {},
      currentRow: ''
    }
  },
  mounted () {
    this.busShopId = this.LS.get('shopId')
    this.init()
  },
  methods: {
    init () {
      queryBusCourier(this.busShopId).then(res => {
        this.tableData = res.data
      })
    },
    // 编辑
    handleClick (row) {
      this.$router.push({ name: 'UpdPrivilege', params: row })
    },
    // 删除
    delClick (index, rows) {
      this.tableData.splice(index, 1)
      delCourier({id: rows.id, busShopId: this.shopId}).then(res => {
        this.$message({
          message: res.msg,
          type: 'success'
        })
      })
    },
    // 配送员管理更新状态
    updStatus (state) {
      this.obj.busShopId = this.busShopId
      this.obj.id = this.currentRow
      this.obj.status = (state === '1') ? 1 : 0
      busCourierUpdateStatus(this.obj).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.init()
        }
      })
    },
    // 选中单行
    handleCurrentChange (val) {
      if (val) {
        this.currentRow = val.id
      }
    },
    tableHeadRowClassName ({row, rowIndex}) {
      return 'warning-row'
    }
  }
}
</script>

<style lang="scss" scoped>
.privilege {
    height: 837px;
    .content {
        a {
            display: inline-block;
            margin: 40px 0;
            margin-right: 20px;
        }
        button{
          margin-right: 30px;
        }
    }
    .orderLis {
        span {
          color: #00b1ff;
          cursor: pointer;
        }
    }
    .status{
      margin-top: 20px;
      color: #FF4646;
      font-size: 14px;
    }

}
</style>
<style>
.privilege .el-table__row{
    cursor: pointer;
  }
</style>
