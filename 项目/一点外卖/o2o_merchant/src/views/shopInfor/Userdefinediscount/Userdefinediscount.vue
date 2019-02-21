<template>
  <div class="adduserdefinecost container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("NAV2_22.T") }}</span>
    </div>
    <div class="content">
      <router-link :to="{name:'Adduserdefinediscount'}">
        <el-button>{{ $t("BTN.Add") }}</el-button>
      </router-link>
      <router-link :to="{name:'Storediscounts'}">
        <el-button>{{ $t("NAV2_22.Txt1") }}</el-button>
      </router-link>
      <!-- 订单列表 -->
      <el-table :data="tableData" :header-cell-class-name='tableHeadRowClassName' :row-class-name="tableRowClassName" border style="width: 800px">
        <el-table-column prop="discount_name" :label="$t('NAV2_22.Tab1')">
        </el-table-column>
        <el-table-column prop="constant" :label="$t('NAV2_22.Tab2')" width="110">
        </el-table-column>
        <el-table-column prop="act_time" :label="$t('NAV2_22.Tab3')">
        </el-table-column>
        <el-table-column fixed="right" :label="$t('BTN.Handle')" width="90">
          <template slot-scope="scope">
            <span @click="handleClick(scope.row)">{{ $t("BTN.Edit") }}</span>
            <i>|</i>
            <span @click="delClick(scope.$index, scope.row)">{{ $t("BTN.Del") }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { queryBusDiscountsDefined, delBusDiscountsDefined } from '@/api/index.js'
export default {
  data () {
    return {
      // 查询数据
      query: {
        busShopId: '',
        pageNo: 1,
        pageSize: 10
      },
      tableData: []
    }
  },
  mounted () {
    this.query.busShopId = this.LS.get('shopId')
    this.pageNO = parseInt(1)
    queryBusDiscountsDefined(this.query).then(res => {
      console.log(res)
      this.tableData = res.data.discountsDefined
    })
  },
  methods: {
    // 编辑
    handleClick (row) {
      this.$router.push({ name: 'Adduserdefinediscount', params: row })
    },
    // 删除
    delClick (index, rows) {
      this.$confirm('此操作将永久删除该自定义优惠, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delBusDiscountsDefined(rows.id).then(res => {
          console.log(res)
          if (!res.code) {
            this.tableData.splice(index, 1)
            this.$message({
              type: 'success',
              message: 'success!'
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
.adduserdefinecost {
    height: 837px;
    .content {
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
