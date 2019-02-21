<template>
    <div class="integral">
            <!-- 标题 -->
        <div class="subTitleTop">
            <span>积分商城管理</span>
        </div>
        <div class="main">
            <el-tabs v-model="activeName2" type="card">
                <el-tab-pane label="实 物" name="first">
                    <div class="search">
                        <span>商品名称</span>
                        <el-input v-model="queryEntity.dimName"></el-input>
                        <el-button type="primary" @click="search(1)">查询</el-button>
                    </div>
                    <div class="table">
                        <div class="btn"><el-button type="primary" @click="$router.push({name:'AddGoods'})">添加商品</el-button></div>
                        <el-table
                            :data="entityData"
                            border
                            style="width: 100%">
                            <el-table-column
                            type="index"
                            label="商品序号"
                            width="80">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="商品名称"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="pic"
                            label="商品图片">
                            <template  slot-scope="scope">
                                <img class="goodImg" :src="scope.row.pic" alt="">
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="integration"
                            label="兑换分值">
                            </el-table-column>
                            <el-table-column
                            prop="status"
                            label="商品状态">
                            <template  slot-scope="scope">
                                {{scope.row.status==='0'?'下架':'上架'}}
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="商品类型">
                                <template slot-scope="scope">
                                    实体物品
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                    @click="$router.push({name:'AddGoods',query:scope.row})">编辑</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="delHandleClick(1,scope.$index,scope.row.id)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="queryEntity.size"
                        :total="queryEntity.totalCount"
                        @current-change="handleCurrentChange(1,$event)"
                        :current-page.sync="queryEntity.page"
                        ></el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="优惠券" name="second">
                   <div class="search">
                        <span>优惠券ID</span>
                        <el-input v-model="queryVir.sysCouponId"></el-input>
                        <el-button type="primary" @click="search(2)">查询</el-button>
                    </div>
                    <div class="table">
                        <div class="btn"><el-button type="primary" @click="$router.push({name:'AddCoupon'})">添加优惠券</el-button></div>
                        <el-table
                            :data="virData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop="id"
                            label="优惠券ID"
                            width="80">
                            </el-table-column>
                            <el-table-column
                            prop="sysCouponName"
                            label="优惠券名称"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="buyIntegral"
                            label="兑换分值">
                            </el-table-column>
                            <el-table-column
                            prop="status"
                            label="商品状态">
                            <template  slot-scope="scope">
                                {{scope.row.status==='0'?'下架':'上架'}}
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="商品类型">
                                <template slot-scope="scope">
                                    虚拟商品
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                    size="mini"
                                     @click="$router.push({name:'AddCoupon',query:scope.row})">编辑</el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="delHandleClick(2,scope.$index,scope.row.id)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="queryVir.size"
                        :total="queryVir.totalCount"
                        @current-change="handleCurrentChange(2,$event)"
                        :current-page.sync="queryVir.page"
                        ></el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { integral } from '@/api/index.js'
export default {
  data () {
    return {
      activeName2: 'first',
      //   实物
      entityData: [],
      queryEntity: {
        dimName: '',
        page: 1,
        size: 10,
        totalCount: null,
        language: '1'
      },
      //   优惠券
      virData: [],
      queryVir: {
        sysCouponName: '',
        page: 1,
        size: 10,
        totalCount: null
      }
    }
  },
  mounted () {
    this.initEntit()
    this.initVir()
  },
  methods: {
    //  点击查询
    search (e) {
      e === 1 ? this.initEntit() : this.initVir()
    },
    // 改变页码
    handleCurrentChange (e, val) {
      console.log(`当前页: ${val}`)
      e === 1 ? this.initEntit() : this.initVir()
    },
    // 初始化页面
    initEntit () {
      integral.allEntityproduct(this.queryEntity).then(res => {
        console.log(res)
        this.entityData = res.rows
        this.queryEntity.totalCount = res.count
      })
    },
    initVir () {
      integral.allVirproduct(this.queryVir).then(res => {
        console.log(res)
        this.virData = res.rows
        this.queryVir.totalCount = res.count
      })
    },
    // 删除
    delHandleClick (e, index, id) {
      this.$confirm(this.$t('PUBLIC.DELETE.FONT'), this.$t('PUBLIC.DELETE.TYPE'), {
        confirmButtonText: this.$t('PUBLIC.DELETE.BTN1'),
        cancelButtonText: this.$t('PUBLIC.DELETE.BTN2'),
        type: 'warning'
      }).then(() => {
        if (e === 1) {
          integral.delEntityproduct(id).then(res => {
            this.entityData.splice(index, 1)
          })
        } else {
          integral.delVirproduct(id).then(res => {
            this.virData.splice(index, 1)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.integral{
   .main{
       margin-top: 50px;
       .search{
           display: flex;
           width: 450px;
           margin-left: 38px;
           justify-content: space-between;
           span{
               width: 140px;
               height: 40px;
               line-height: 40px;
               font-size: 16px;
               color: #555;
           }
           button{
               margin-left: 30px;
           }
       }
       .table{
           min-height: auto;
           .btn{
               margin: 30px 0 20px;
           }
           .goodImg{
               width: 48px;
               height: 48px;
           }
       }
       .page{
           text-align: center;
           margin-top: 30px;
       }
   }
}
</style>
<style lang="scss">
.el-tabs__item{
    font-size: 16px;
    font-weight: bold;
    color: #666;
}
</style>
