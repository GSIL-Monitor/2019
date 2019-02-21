<template>
  <div class="receiveList">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>领取记录</span>
    </div>
    <div class="main">
      <div class="search">
        <span>
            <p>商品名称</p>
            <el-input v-model="query.dimName"></el-input>
        </span>
        <span>
            <p>兑换人</p>
            <el-input v-model="query.userName"></el-input>
        </span>
        <span>
            <p>订单状态</p>
                <el-select v-model="query.status" clearable  placeholder="全部">
                    <el-option label="未处理" :value="0"></el-option>
                    <el-option label="已发货" :value="1"></el-option>
                </el-select>
        </span>
        <el-button type="primary" @click="init()">查询</el-button>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="商品序号"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品名称"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="sioBuyIntetral"
            label="兑换分值"
          >
          </el-table-column>
          <el-table-column
            prop="productName"
            label="商品类型"
          >
            <template  slot-scope="scope">
              {{scope.row.productName?'虚拟商品':'实体物品'}}
            </template>
          </el-table-column>
          <el-table-column
            prop="userName"
            label="兑换人"
          >
          </el-table-column>
          <el-table-column
            prop="userAddress"
            label="发货地址"
          >
          </el-table-column>
          <el-table-column
            prop="userPhone"
            label="联系电话"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="订单状态"
          >
            <template  slot-scope="scope">
              {{scope.row.status?'已发货':'未处理'}}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="bttn">
                <el-button
                size="mini"
                @click="$router.push({name:'ReceiveDetail',query:scope.row})"
              >查看详情</el-button>
              <el-button
                size="mini"
                 type="primary"
                @click="$router.push({name:'EditReceiveDetail',query:scope.row})"
              >修改</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="delHandleClick(scope.$index,scope.row.id)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="query.size"
          :total="query.totalCount"
          @current-change="handleCurrentChange"
          :current-page.sync="query.page"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { integral } from '@/api/index.js'
export default {
  data () {
    return {
      activeName2: 'first',
      tableData: [],
      query: {
        status: null,
        userName: '',
        sysCouponName: '',
        page: 1,
        size: 5,
        totalCount: null,
        language: '1'
      }
    }
  },
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
      integral.queryReceiveawards(this.query).then(res => {
        this.tableData = res.rows
        this.query.totalCount = res.count
      })
    },
    // 删除
    delHandleClick (index, id) {
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        integral.deleteReceiveawardInfo(id).then(res => {
          this.tableData.splice(index, 1)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.receiveList {
  .main {
    .search {
      display: flex;
      margin-left: 38px;
      margin-top: 30px;
      span {
        display: flex;
        p{
            width: 80px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            color: #555;
            text-align: center;
        }
        .el-input{
            width: 180px;
            margin-right: 20px;
        }
      }
      button {
        margin-left: 30px;
      }
    }
    .table {
      height: none;
      margin-top: 60px;
    }
    .page {
      text-align: center;
    }
  }
      .bttn{
      display: flex;
      flex-direction: column;
      height: 120x;
      text-align: center;
      button{
        margin: 5px 0;
      }
    }
}
</style>
