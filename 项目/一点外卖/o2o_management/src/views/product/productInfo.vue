<template>
  <div class="content clearfix">
    <el-row>
      <h4>商品信息</h4>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-form ref="form" :model='store' label-width="80px">
        <el-col :span="5">
          <el-form-item label="所属店铺">
            <el-select v-model="store.shop">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="店铺分区">
            <el-select v-model="store.partition">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="是否上架">
            <el-select v-model="store.shelf">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="商品名称">
            <el-select v-model="store.name">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="商品序号">
            <el-select v-model="store.serialNumber">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="商品编号">
            <el-select v-model="store.number">
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4" style="padding-left:40px">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-form>
    </el-row>
    <el-row >
      <el-button type="primary">创建店铺</el-button>
      <el-button type="primary">批量创建店铺</el-button>
      <el-button type="primary">Excel创建店铺</el-button>
      <el-button type="primary">批量编辑店铺</el-button>
      <el-button type="primary">批量设置店铺</el-button>
    </el-row>
    <el-row>
      <el-table
        :empty-text="$t('PUBLIC.TABELEMPTY')"
        border
        style="width: 100%;margin-top:20px;">
        <el-table-column
          fixed
          prop="Id"
          label="序号"
          width="50"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="categoryName"
          label="商品分类名称"
          width="140"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="inventory"
          label="	商品库存"
          width="180"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="120"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="price"
          label="商品单价"
          width="120"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="productCategoryId"
          label="商品分类id"
          width="90"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="shopId"
          label="店铺ID"
          width="90"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="shopName"
          label="店铺名称"
          width="120"
          align="center" >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="120"
          align="center" >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150"
          align="center" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
  import { productInfoList } from '@/api/index.js'
  export default {
    data() {
      return {
        store: {
          shop: "",
          partition: "",
          shelf: "",
          status: "",
          name: "",
          serialNumber: "",
          number: ""
        }
      };
    },
    methods: {
      list: function () {
        productInfoList({"page": 1, "size": 10}).then((res) => {
          console.log(res);
        })
      }
    },
    created () {
      this.list();
    }
  };



</script>

<style>
  .content {
    /*min-width: 1200px;*/
    background: rgb(255, 255, 255);
    padding: 26px 30px;
    position: relative;
    /*min-height: 800px;*/
  }
  h4 {
    text-align: left;
    color: #333333;
    font-size: 18px;
    font-family: PingFang-SC-Bold;
    padding-bottom: 25px;
    border-bottom: 1px solid #e1e1e1;
  }
</style>
