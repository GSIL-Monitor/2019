<template>
  <div class="userdefinecost container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{$t("NAV3.T")}}</span>
    </div>
    <div class="content">
      <router-link :to="{name:'Adduserdefinecost'}">
        <el-button>{{$t("BTN.Add")}}</el-button>
      </router-link>
      <!-- 订单列表 -->
      <el-table :data="tableData" :header-cell-class-name='tableHeadRowClassName' :row-class-name="tableRowClassName" border style="width: 100%">
        <el-table-column prop="cost_name" :label="$t('NAV3.Name1')">
        </el-table-column>
        <el-table-column prop="take_way" :label="$t('NAV3.Name2')">
          <template slot-scope="scope">
            {{scope.row.take_way===1? $t('NAV3.Lab2'): $t('NAV3.Lab1')}}
          </template>
        </el-table-column>
        <el-table-column prop="full_minus" :label="$t('NAV3.Lab3')">
        </el-table-column>
        <el-table-column prop="price_time_seg" :label="$t('NAV3.Lab4')">
        </el-table-column>
        <el-table-column prop="order_category" :label="$t('NAV3.Lab5')">
        </el-table-column>
        <el-table-column fixed="right" :label="$t('BTN.Handle')">
          <template slot-scope="scope">
            <span @click="handleClick(scope.row)">{{$t("BTN.Edit")}}</span>
            <i>|</i>
            <span @click="delClick(scope.$index, scope.row)">{{$t("BTN.Del")}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { queryBusDefinedCost, delBusDefinedCost } from '@/api/index.js'
export default {
  data () {
    return {
      // 查询数据
      query: {
        busShopId: ''
        // ,
        // pageNO: 1,
        // pageSize: 10
      },
      tableData: []
    }
  },
  mounted () {
    this.query.busShopId = this.LS.get('shopId')
    queryBusDefinedCost(this.query).then(res => {
      this.tableData = res.data.definedCost
    })
  },
  methods: {
    // 编辑
    handleClick (row) {
      this.$router.push({ name: 'Adduserdefinecost', params: row })
    },
    // 删除
    delClick (index, rows) {
      this.$confirm('此操作将永久删除自定义费用, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delBusDefinedCost({id: rows.id, busShopId: this.shopId}).then(res => {
          if (!res.code) {
            this.tableData.splice(index, 1)
            this.$message({
              message: res.msg,
              type: 'success'
            })
          }
        })
      }).catch(() => {
      })
    },
    tableHeadRowClassName ({row, rowIndex}) {
      return 'warning-row'
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex % 2 !== 0) {
        return 'warning-row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.userdefinecost {
    .content {
      padding-bottom: 60px;
        a {
            display: inline-block;
            margin: 40px 0;
            margin-right: 30px;
        }
        span {
            color: #00b1ff;
            cursor: pointer;
        }
    }
}
</style>
