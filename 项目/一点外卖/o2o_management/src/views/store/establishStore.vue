<template>

     <div class="content establishStore">

                  <el-table style="width:100%;" :empty-text="$t('PUBLIC.TABELEMPTY')" :data="storeMessage">
                     <el-table-column label="店铺名称" align="center">
                        <template slot-scope="scope">
                               <el-input v-model="scope.row.storeName"></el-input>
                        </template>
                     </el-table-column>
                     <el-table-column label="店铺电话" align="center">
                        <template slot-scope="scope">
                               <el-input v-model="scope.row.storePhone"></el-input>
                        </template>
                     </el-table-column>
                    <el-table-column label="店铺地址" align="center">
                        <template slot-scope="scope">
                               <el-input v-model="scope.row.storeAddress"></el-input>
                        </template>
                     </el-table-column>
                    <el-table-column label="服务范围" align="center">
                        <template slot-scope="scope">
                               <el-input></el-input>
                        </template>
                     </el-table-column>
                    <el-table-column label="起送价格" align="center">
                        <template slot-scope="scope">
                               <el-input></el-input>
                        </template>
                     </el-table-column>
                    <el-table-column label="营业时间" align="center">
                        <template slot-scope="scope">
                            <el-row>
                                <el-time-picker
                                    v-model="scope.row.beginTime"
                                    :picker-options="{
                                    }"
                                    placeholder="开始时间"
                                   >
                                </el-time-picker>
                            </el-row>
                             <el-row style="margin-top:10px;">
                                    <el-time-picker
                                     v-model="scope.row.endTime"
                                    :picker-options="{
                                    }"
                                    placeholder="结束时间"
                                    prop="end-time"
                                    >
                                </el-time-picker>
                             </el-row>
                        </template>
                     </el-table-column>
                    <el-table-column label="店铺分类" align="center">
                        <template slot-scope="scope">
                            <el-row>
                                  <el-select placeholder="请选择分类" v-model="scope.row.category" >
                                  <el-option v-for="item in categorys" :key="item.category" :label="item.label" :value="item.category"></el-option>
                                  </el-select>
                            </el-row >
                             <el-row style="margin-top:10px;">
                                  <el-select placeholder="请选择分区" v-model="scope.row.Partition">
                                      <el-option v-for="item in Partitions" :key="item.Partition" :label="item.label" :value="item.Partition">

                                      </el-option>
                                  </el-select>
                             </el-row>
                        </template>
                     </el-table-column>
                     <el-table-column label="店铺logo" align="center">
                        <template slot-scope="scope">
                                  <el-upload class="upload-demo"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        accept="jpg,png">
                                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                     <el-button size="small" class="mgt20" @click="del(scope.$index)">删除店铺</el-button>
                                  </el-upload>
                        </template>
                     </el-table-column>
                  </el-table>
                  <div class="mgt20">
                                <el-button type="primary" @click="addStore">添加店铺</el-button>
                                <el-button type="primary" @click="upLoad">保存店铺</el-button>
                  </div>

     </div>
</template>

<script>
export default {
  data() {
    return {
      storeMessage: [
        {
          storeAddress: "",
          storePhone: "",
          storeName: "",
          "begin-time": new Date(2018, 6, 15, 10, 40),
          "end-time": new Date(2018, 6, 15, 13, 40),
          Partition: "",
          category: ""
        }
      ],
      categorys: [
        { label: "西餐", category: "西餐" },
        { label: "中餐", category: "中餐" }
      ],
      Partitions: [
        { label: "天河区", Partition: "天河区" },
        { label: "越秀区", Partition: "越秀区" }
      ]
    };
  },
  methods: {
    addStore() {
      this.storeMessage.push({});
    },
    upLoad() {
      this.storeMessage.forEach(function(item) {
        for (var prop in item) {
          if (!item[prop]) {
            alert("上传数据不能存在空值");
            break;
          }
        }
      });
    },
    del(index) {
      this.storeMessage.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.establishStore {
  .el-date-editor {
    .el-input__inner {
      width: 140px;
    }
  }
}
</style>

<style>
.mgt20 {
  margin-top: 20px;
}
.content {
  /*min-width: 1200px;*/
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  /*min-height: 800px;*/
}
.content {
  min-width: 1200px;
  /* min-height: 1220px; */
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
