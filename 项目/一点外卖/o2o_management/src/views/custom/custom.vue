<template>
    <div class="content custom">
    <!-- <el-row>
        <h4>管理员管1sda理</h4>
    </el-row>
            <el-row :gutter='20'>
                  <div class="clearfix" style="padding-top:36px;">
         <el-col :span=8>
            <el-input id='account' placeholder="请输入账号名称"> <template slot="prepend">账号名称</template></el-input>
        </el-col>
         <el-col :span=8>
               <el-input id='account' placeholder="请输入账号名称"> <template slot="prepend">手机号码</template></el-input>
        </el-col>
       <el-col :span=8>
               <el-input id='account' placeholder="请输入账号名称"> <template slot="prepend">顾客姓名</template></el-input>
        </el-col>
        </div>
            </el-row>
            <el-row>
                <el-col :span=8>
                    <span class="inputSpan">下单时间</span>
                <el-date-picker
                    v-model="value5"
                     type="daterange"
                     :picker-options="pickerOptions2"
                     range-separator="至"
                     start-placeholder="开始日期"
                     end-placeholder="结束日期">
               </el-date-picker>
                </el-col>
                <el-col :span=5>
                   <span class="inputSpan">排序方式</span>   <el-select id='role'  placeholder="请选择"></el-select>
                </el-col>
               <el-col :span=5>
                   <span class="inputSpan">分组</span>   <el-select id='role'  placeholder="请选择"></el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span=8>
                 <el-input id='account' placeholder="请输入账号名称"> <template slot="prepend">顾客姓名</template></el-input>
               </el-col>
            </el-row>
            <el-row> -->
                 <el-table
                         :empty-text="$t('PUBLIC.TABELEMPTY')"
                         style="" >
                        <el-table-column
                            prop="date"
                            :label="顾客ID"
                            width="90">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            :label="手机号码"
                            >
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            :label="姓名">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            :label="分组">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            :label="消费金额">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            :label="积分">
                        </el-table-column>
                            <el-table-column
                            prop="address"
                            :label="下单时间">
                        </el-table-column>
                            <el-table-column
                            prop="address"
                            :label="注册时间">
                        </el-table-column>
                       <el-table-column
                            prop="address"
                            :label="来源">
                        </el-table-column>
                       <el-table-column
                            prop="address"
                            :label="操作">
                        </el-table-column>
                        </el-table>
            </el-row>
            <el-form :model="formData" size="mini" :rules="rule">
              <el-form-item prop="money" :label="金额">
                          <el-input type="number" v-model.number="formData.money"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </el-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formData:{
           money:1111,
      },
      rule:{
        money:[{pattern:/^[1-9]\d*$/,message:'错误',tigger:'blur',required:true}]
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value5: ''
    }
  }
}
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.content {
  min-width: 1200px;
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  min-height: 800px;
}
.roleL {
  line-height: 40px;
  color: #e1e1e1;
}
h4 {
  text-align: left;
  color: #333333;
  font-size: 18px;
  font-family: PingFang-SC-Bold;
  padding-bottom: 25px;
  border-bottom: 1px solid #e1e1e1;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}

.el-date-editor .el-range-separator {
  width: 10%;
}
</style>
<style scoped>
.el-table {
  padding-top: 20px;
  width: 100%;
}
</style>

