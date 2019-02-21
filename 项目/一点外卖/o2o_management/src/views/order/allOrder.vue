<template>
  <div class="content allOrder">
     <div class="operation">
          <el-form label-width="80px">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item :label="$t('ALLORDER.FORM.FONT1')">
                  <el-select
                    v-model="tempSerdata.shopId"
                    v-loading="loading2"
                    filterable
                    remote
                    :placeholder="$t('ALLORDER.FORM.PLA1')"
                    @focus="searchShop('')"
                    :remote-method="searchShop"
                    clearable
                  >
                    <el-option
                      v-for="item in shopIdList"
                      :key="item.id"
                      :value="item.id"
                      ::label="item.shopName"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item :label="$t('ALLORDER.TIME.TITLE')" label-width="100">
                  <el-date-picker
                    type="date"
                    v-model="tempSerdata.startTime"
                    :placeholder="$t('ALLORDER.TIME.START')"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                  <span style="width:60px;">-</span>
                  <el-date-picker
                    type="date"
                    v-model="tempSerdata.endTime"
                    :placeholder="$t('ALLORDER.TIME.END')"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item :label="$t('ALLORDER.FORM.FONT2')">
                  <el-input :placeholder="$t('ALLORDER.FORM.PLA2')" v-model="tempSerdata.phone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item :label="$t('ALLORDER.FORM.FONT3')">
                  <el-input :placeholder="$t('ALLORDER.FORM.PLA3')" v-model="tempSerdata.cusUserId"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item :label="$t('ALLORDER.SELECT1.TITLE')">
                  <el-select v-model="tempSerdata.status">
                    <el-option
                      v-for="item in statusList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item :label="$t('ALLORDER.FORM.FONT4')">
                  <el-autocomplete
                    v-model="tempSerdata.disUserId"
                    :fetch-suggestions="dropSearch"
                    :placeholder="$t('ALLORDER.FORM.PLA4')"
                    value-key="courierName"
                    :debounce="2000"
                  ></el-autocomplete>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="5">
                <el-form-item :label="$t('ALLORDER.SELECT2.TITLE')" class="mgb0">
                  <el-select v-model="tempSerdata.type">
                    <el-option
                      v-for="item in typeList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-button type="primary" @click="serchList" icon="el-icon-search">{{ $t('ALLORDER.BTN.FONT1') }}</el-button>
              <el-button type="primary" @click="outPut" icon="el-icon-document">{{ $t('ALLORDER.BTN.FONT2') }}</el-button>
              <el-button @click="imgPrint">{{ $t('ALLORDER.BTN.FONT3') }}</el-button>
              <el-button
                type="primary"
                @click="tap"
                icon="el-icon-refresh"
              >{{simplenesssimpleness==true? $t('ALLORDER.BTN.OTHER.FONT1') : $t('ALLORDER.BTN.OTHER.FONT2') }}</el-button>
            </el-row>
          </el-form>
    </div>
    <!-- <canvas ></canvas> -->
    <div class="table">
    <el-table
      id="print"
      :empty-text="$t('PUBLIC.TABELEMPTY')"
      v-if="simplenesssimpleness"
      v-loading="loading"
      :data="tableData"
      @selection-change="handleSelectionChange"
      class="mgt20"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT1')" prop="orderNumber" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT2')" prop="shopName" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT3')" prop="consignee" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT4')" prop="sendAddress" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT5')" prop="phone" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT6')" prop="createTime" align="center"></el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT7')" prop="type" align="center">
        <template slot-scope="scope">{{scope.row.type==1? $t('ALLORDER.TABEL.OTHER.FONT1') : $t('ALLORDER.TABEL.OTHER.FONT2') }}</template>
      </el-table-column>
      <el-table-column :label="$t('ALLORDER.TABEL.FONT8')" prop="status" align="center">
        <template slot-scope="scope">{{objStatus[scope.row.status]}}</template>
      </el-table-column>
    </el-table>

    <section class="particular" id="print" v-loading="loading" v-else>
      <section class="nav-header">
        <el-checkbox @change="push" v-model="selectedAll">{{ $t('ALLORDER.SECTION.CHECKBOXNAME1') }}</el-checkbox>
        <nav>
          <li>{{ $t('ALLORDER.SECTION.FONT1') }}</li>
          <li>{{ $t('ALLORDER.SECTION.FONT2') }}</li>
          <li>{{ $t('ALLORDER.SECTION.FONT3') }}</li>
          <li>{{ $t('ALLORDER.SECTION.FONT4') }}</li>
        </nav>
      </section>
      <section class="order-message" v-for="(item,index) in tableData" :key="index">
        <section class="message-header">
          <el-checkbox v-model="selectedList[index]" @change="push(index)">{{ $t('ALLORDER.SECTION.CHECKBOXNAME2') }}:{{item.orderNumber}}</el-checkbox>
          <span style="margin-left:100px;">{{ $t('ALLORDER.SECTION.FONT5') }}
            <span>{{item.createTime}}</span>
          </span>
          <span>{{ $t('ALLORDER.SECTION.FONT6') }}: {{item.consignee}}</span>
          <span>{{ $t('ALLORDER.SECTION.FONT7') }}</span>
        </section>
        <table class="parTable">
          <tr>
            <td width="66.7%">
              <tr
                v-for="(object) in item.busProductInfo"
                :key="object.index"
                style
                class="trComdity"
              >
                <img :src="object.picture">
                <section class="nameAndCount">
                  <div class="productName">{{object.name}}</div>
                  <div class="productNumber">× {{object.count}}</div>
                </section>
                <span class="price">￥ {{object.price}}</span>
                <span class="count">{{object.count}}{{ $t('ALLORDER.SECTION.FONT8') }}</span>
                <span class="commdityCount">￥ {{object.price*object.count}}</span>
              </tr>
            </td>
            <td width="16.7%" class="tdC">{{item.total}}</td>
            <td width="16.7%" class="tdC">{{objStatus[item.status]}}</td>
          </tr>
        </table>
      </section>
    </section>
    </div>
    <pagination
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="page.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    ></pagination>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import { order } from '@/api/index.js'
import html2canvas from 'html2canvas'
export default {
  components: {
    pagination
  },
  data () {
    return {
      selectedAll: false,
      selectedList: [],
      // 详情模式与简单模式
      simplenesssimpleness: true,
      typeList: [
        {
          label: this.$t('ALLORDER.SELECT2.FONT1'),
          value: 1
        },
        {
          label: this.$t('ALLORDER.SELECT2.FONT2'),
          value: 2
        }
      ],
      statusList: [
        {
          label: this.$t('ALLORDER.SELECT1.FONT1'),
          value: 0
        },
        {
          label: this.$t('ALLORDER.SELECT1.FONT2'),
          value: 1
        },
        {
          label: this.$t('ALLORDER.SELECT1.FONT3'),
          value: 2
        },
        {
          label: this.$t('ALLORDER.SELECT1.FONT4'),
          value: 3
        },
        {
          label: this.$t('ALLORDER.SELECT1.FONT5'),
          value: 4
        }
      ],
      // 搜索时的下拉数据信息
      shopIdList: [],
      loading2: false,
      loading: false,
      objStatus: [
        this.$t('ALLORDER.SELECT3.FONT1'),
        this.$t('ALLORDER.SELECT3.FONT2'),
        this.$t('ALLORDER.SELECT3.FONT3'),
        this.$t('ALLORDER.SELECT3.FONT4'),
        this.$t('ALLORDER.SELECT3.FONT5'),
        this.$t('ALLORDER.SELECT3.FONT6'),
        this.$t('ALLORDER.SELECT3.FONT7')
      ],
      // 批量数据列表
      batchOperList: [],
      batchDataList: [],
      // 临时搜索数据
      tempSerdata: {
        startTime: '',
        endTime: ''
      },
      // 生效时的搜索数据
      serchData: {},
      // 表格数据
      tableData: [],
      // 分页数据
      page: {
        pageNum: 10,
        currentPage: 1,
        pageSize: 5
      }
    }
  },
  methods: {
    textPrint () {
      var item = document.getElementById('print')
      var newStr = item.innerHTML
      var oldstr = document.body.innerHTML
      document.body.innerHTML = newStr
      setTimeout(() => { window.print() }, 2000)
      window.location.reload()
      document.body.innerHTML = oldstr
    },
    imgPrint () {
      var item = document.getElementById('print')
      // html2canvas(item, {
      //   allowTaint: true,
      //   taintTest: false,
      //   onrendered: function(canvas) {
      //     canvas.id = "mycanvas"1;
      //     var dataUrl = canvas.toDataURL();
      //     var newImg = document.createElement("img");
      //     newImg.src = dataUrl;
      //     var printWindow = window.open(newImg.src);
      //     printWindow.document.write('<img src="' + newImg.src + '" />');
      //     printWindow.print();
      //   }
      // });

      html2canvas(item, {
        useCORS: true,
        logging: true,
        taintTest: true
      }).then(canvas => {
        var dataUrl = canvas.toDataURL()
        var newImg = document.createElement('img')
        // newImg.setAttribute('crossorigin', 'anonymous');
        newImg.crossOrigin = 'anonymous'
        newImg.src = dataUrl
        var printWindow = window.open(newImg.src)
        if (printWindow == null) {
          alert(this.$t('ALLORDER.ALERT'))
          return
        }
        printWindow.document.write('<img src="' + newImg.src + '" />')
        setTimeout(function () {
          printWindow.print()
        }, 500)
      })
    },
    // 自定义打印操作
    push (index) {
      this.batchDataList.length = 0
      if (typeof index === 'boolean') {
        // 判断是否全选
        for (var i = 0; i < this.selectedList.length; i++) {
          this.selectedList[i] = index
          if (index) {
            this.batchDataList.push(this.tableData[i])
          }
        }
      } else {
        // 若不是全选,就操作单个
        this.selectedList.forEach((item, index) => {
          if (item) {
            this.batchDataList.push(this.tableData[index])
          }
        })
      }
    },
    // 切换详情模式
    tap () {
      this.batchDataList.length = 0
      this.simplenesssimpleness = !this.simplenesssimpleness
    },
    // 初始化数据
    initData (page, size) {
      this.loading = true
      var obj = this.$common.deepCopy(this.serchData)
      obj.page = page || this.page.currentPage
      obj.size = this.page.pageSize
      order.allOrder(obj).then(res => {
        this.tableData = res.rows
        this.page.pageNum = res.count
        this.tableData.busProductInfo = eval(this.tableData.busProductInfo) // 商品购物车是个字符串转换成数组
        this.tableData.forEach((item, index) => {
          this.selectedList.length = this.tableData.length
          this.selectedList[index] = false
          item.busProductInfo = eval(item.busProductInfo)
        })
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    // 批量导出
    outPut () {
      if (this.batchDataList.length === 0) {
        this.$message.error('导出列表为空')
        return
      }
      require.ensure([], () => {
        const { exportJsonToexcel } = require('../../excel/Export2Excel.js')
        const tHeader = [
          this.$t('ALLORDER.EXCEL.FONT1'),
          this.$t('ALLORDER.EXCEL.FONT2'),
          this.$t('ALLORDER.EXCEL.FONT3'),
          this.$t('ALLORDER.EXCEL.FONT4'),
          this.$t('ALLORDER.EXCEL.FONT5'),
          this.$t('ALLORDER.EXCEL.FONT6'),
          this.$t('ALLORDER.EXCEL.FONT7'),
          this.$t('ALLORDER.EXCEL.FONT8'),
          this.$t('ALLORDER.EXCEL.FONT9')
        ]
        const filterVal = [
          'orderNumber',
          'shopName',
          'consignee',
          'sendAddress',
          'phone',
          'createTime',
          'type',
          'status',
          'busProductInfo'
        ]
        const list = this.$common.formatJson(filterVal, this.batchDataList)
        exportJsonToexcel(tHeader, list, this.$t('ALLORDER.EXCEL.TITLE'))
      })
    },
    handleSelectionChange (list) {
      this.batchDataList = list
    },
    // 页数改变时的回调
    currentChange (val) {
      this.page.currentPage = val
      this.initData()
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.page.pageSize = val
      this.initData(1)
    },
    // 店铺下拉搜索
    searchShop (shopName) {
      this.$common.throttle(() => {
        order.orderShop({ shopName }).then(res => {
          this.shopIdList = res
        })
      }, 2000)
    },
    dropSearch (courierName, callback) {
      var result, clock
      order.deliveryman({ courierName }).then(res => {
        result = res
        clearTimeout(clock)
        clock = setTimeout(() => {
          callback(result)
        }, 1000 * Math.random())
      })
    },
    serchList () {
      this.serchData = this.$common.deepCopy(this.tempSerdata)
      this.initData()
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>
<style >
.el-date-editor .el-range-separator {
  width: 10%;
}
</style>

<style lang="scss">
.tdC {
  text-align: center;
}
.trComdity {
  width: 100%;
  position: relative;
  padding: 10px;
  display: flex;
  border: 0px;
  border-bottom: 1px solid rgb(225, 225, 225);
}
.trComdity:last-child {
  border-bottom: 0px;
}
.parTable {
  margin-top: 5px;
  tr,
  td {
    border: 1px solid rgb(225, 225, 225);
  }
  span {
    line-height: 30px;
  }
  color: #8e8e8e;
  font-family: Microsoft YaHei;
  font-size: 14px;
  width: 100%;
  img {
    width: 100px;
    height: 100px;
  }
  .price {
    line-height: 30px;
    position: absolute;
    top: 8px;
    left: 320px;
  }
  .commdityCount {
    right: 50px;
    top: 10px;
    position: absolute;
  }
  .count {
    top: 10px;
    right: 260px;
    position: absolute;
  }
  .nameAndCount {
    margin-left: 10px;
    line-height: 30px;
  }
}
.content {
  /*min-width: 1200px;*/
  background: rgb(255, 255, 255);
  padding: 26px 30px;
  position: relative;
  /*min-height: 800px;*/
}
.particular {
  width: 100%;
  min-width: 1200px;
  // display: flex;
  .nav-header {
    height: 50px;
    line-height: 50px;
    font-family: Helvetica;
    font-size: 16px;
    width: 100%;
    color: #8e8e8e;
    display: flex;
    nav {
      margin-left: 200px;
      width: 800px;
      display: flex;
      li {
        text-align: center;
        flex-grow: 1;
      }
    }
  }
  .message-header {
    box-sizing: border-box;
    padding-left: 10px;
    background: rgb(238, 238, 238);
    height: 50px;
    line-height: 50px;
    color: #8e8e8e;
    display: flex;
    font-size: Microsoft YaHei;
    font-size: 14px;
    span {
      flex-grow: 1;
    }
  }
  .order-message {
    margin-bottom: 10px;
  }
  .contanier {
    border: 1px solid #e0e0e0;
    height: auto;
    display: flex;
    align-items: center;
    .status {
      width: 200px;
      display: flex;
      justify-content: center;
    }
  }
  .order-commodity {
    display: flex;
    color: #8e8e8e;
    font-size: Microsoft YaHei;
    width: 1000px;
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;

    .commodity-contanier {
      position: relative;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
      display: flex;
      width: 700px;
    }
    .order-amount,
    .closing-amount {
      display: flex;
      width: 150px;
      height: 120px;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
    }

    img {
      width: 100px;
      height: 100px;
    }
    .nameAndCount {
      margin-left: 10px;
      line-height: 30px;
    }
    .price {
      top: 10px;
      right: 335px;
      position: absolute;
    }
    .count {
      top: 10px;
      right: 150px;
      position: absolute;
    }
  }
}
// .particularOrder{
//     width: 100%;
//     display: flex;
//     .header{
//         display: flex;
//         width: 100%;
//     }
//         nav{
//             display: flex;
//     }
// }
</style>
