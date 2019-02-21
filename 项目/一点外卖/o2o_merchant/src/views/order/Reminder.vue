<template>
  <div class="reminder container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>{{ $t("Reminder.T") }}</span>
    </div>
    <div class="content">
      <div class="search">
        <el-button @click="query.isReminder=null;init">全部消息</el-button>
        <el-button @click="query.isReminder=0;init">已处理</el-button>
        <el-button @click="query.isReminder=1;init">未处理</el-button>
      </div>
      <div class="tab">
        <el-table
          :data="reminderList"
          border
          style="width: 100%"
        >
          <el-table-column
            fixed
            prop="order_number"
            label="订单号"
            width="220"
          >
          </el-table-column>
          <el-table-column
            prop="shop_name"
            label="下单店铺"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="bus_product_info"
            label="订单商品"
          >
          <template slot-scope="scope">
              {{scope.row.bus_product_info[0]}}
          </template>
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="下单时间"
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="reminder_time"
            label="催单时间"
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="is_reminder"
            label="是否处理"
            width="80"
          >
            <template slot-scope="scope">
                {{scope.row.is_reminder? '未处理':'已处理'}}
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="160"
          >
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row.order_number)"
                size="mini"
              >处理</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="delHandleClick(scope.$index,scope.row.order_number)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="query.pageSize"
          :total="query.totalCount"
          @current-change="handleCurrentChange"
          :current-page.sync="query.pageNo"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { order } from '@/api/index.js'
export default {
  methods: {
    //   处理消息
    handleClick (id) {
      order.updateDisposeOrder(id).then(res => {
        console.log(res)

        if (!res.data.code) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.init()
        }
      })
    },
    // 删除
    delHandleClick (index, id) {
      order.deleteReminder(id).then(res => {
        if (!res.data.code) {
          this.reminderList.splice(index, 1)
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
        }
      })
    },
    // 改变页码
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.init()
    },
    // 初始化页面
    init () {
      this.query.busShopId = this.LS.get('shopId')
      order.getDisposeAll(this.query).then(res => {
        if (!res.code) {
          this.reminderList = res.data.data.dispose
          this.query.totalCount = res.data.data.count
          this.reminderList.bus_product_info = JSON.parse(this.reminderList[0].bus_product_info)
          console.log(this.reminderList.bus_product_info)
          console.log(this.reminderList.bus_product_info[0])
        }
      })
    }
  },

  data () {
    return {
      query: {
        busShopId: null,
        pageNo: 1,
        pageSize: 10,
        isReminder: null,
        totalCount: null
      },
      reminderList: []
    }
  },
  mounted () {
    this.query.busShopId = this.LS.get('shopId')
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.reminder {
  .content {
    padding: 30px 0;
    .search {
      margin-left: 10px;
      button {
        margin-right: 15px;
      }
    }
    .tab {
      margin: 30px 0 60px;
    }
  }
  .page{
      text-align: center;
      margin: 20px;
  }
}
</style>
