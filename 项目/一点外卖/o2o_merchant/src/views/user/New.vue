<template>
  <div class="new container">
    <i class="infoIcon"></i>
    <el-tabs value="first">
      <el-tab-pane :label="$t('NEW.T1')" name="first">
        <el-table :data="reminderList" style="width: 100%">
          <el-table-column prop="consignee" :label="$t('NEW.Lab5')" width="180">
            <template slot-scope="scope">
              {{scope.row.consignee}}{{ $t("NEW.Lab1") }}
            </template>
          </el-table-column>
          <el-table-column prop="create_time" :label="$t('NEW.Lab2')">
          </el-table-column>
          <el-table-column prop="reminder_time" :label="$t('NEW.Lab3')">
          </el-table-column>
          <el-table-column prop="dispose_status" :label="$t('NEW.Lab4')" fixed="right">
            <template slot-scope="scope">
                <button @click="disposeOrder(scope.row.order_number)" class="btn" v-if="scope.row.dispose_status">{{ $t("NEW.status[1]") }}</button>
                <span class="noHandleText" v-if="!scope.row.dispose_status">{{ $t("NEW.status[0]") }}</span>
            </template>
          </el-table-column>
        </el-table>
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
      </el-tab-pane>
      <el-tab-pane :label="$t('NEW.T2')" class="content" name="second">
        <el-table :data="systemInfor" style="width: 100%">
          <el-table-column prop="ifo" :label="$t('NEW.Txt2')">
          </el-table-column>
          <el-table-column fixed="right" width="180" prop="updtime">
          </el-table-column>
        </el-table>
          <!-- <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              :current-page="page"
              :page-size="pageSize"
              :total="reminderList? reminderList.length : 0 "
            ></el-pagination>
          </div> -->
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import { getReminderList, updateDisposeOrder } from '@/api/index.js'
export default {
  mounted () {
    this.init()
  },
  methods: {
    // 改变页码
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.init()
    },
    // 初始化页面
    init () {
      this.query.busShopId = this.LS.get('shopId')
      getReminderList(this.query).then(res => {
        if (!res.code) {
          this.reminderList = res.data.dispose
          this.query.totalCount = res.data.count
        }
      })
    },
    //   处理消息
    disposeOrder (id) {
      updateDisposeOrder(id).then(res => {
        if (!res.code) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.init()
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
        totalCount: null
      },
      reminderList: [],
      systemInfor: [{
        ifo: '新店上平台下单立减',
        updtime: '2018-09-22 12:02'
      },
      {
        ifo: '欢迎入住020商务平台',
        updtime: '2018-09-22 12:02'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.new {
    height: 805px;
    margin-top: 17px;
    position: relative;
    .infoIcon {
        position: absolute;
        top: 25px;
        left: 105px;
        display: inline-block;
        width: 6px;
        height: 6px;
        background: rgba(255, 70, 70, 1);
        border-radius: 50%;
    }
    .noHandleText {
        font-size: 16px;
        color: rgba(102, 102, 102, 1);
        background-color: none;
    }
    .page{
      margin: 40px;
      text-align: right;
    }
}
</style>
<style lang="scss">
.new {
    .el-tabs__item {
        height: 67px;
        line-height: 67px;
        font-size: 18px;
        color: #333;
    }
    .el-tabs__item.is-active {
        font-weight: bold;
    }
    .content .el-table .cell {
        text-align: left;
    }
        td{
      cursor: pointer;
    }
}
</style>
