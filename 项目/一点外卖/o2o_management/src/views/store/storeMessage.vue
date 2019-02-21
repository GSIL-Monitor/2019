<script src="../../../config/index.js"></script>
<template>
  <div class="clearfix">
    <div class="operation">
      <div class="clearfix ">
        <el-form label-width="80px">
          <el-col :span="5">
            <el-form-item :label="$t('STOREMESSAGE.FORM.FONT1')">
              <!-- <el-autocomplete v-model="tempData.categoryName"
                :fetch-suggestions="searchCategory"
                placeholder="输入店铺分类模糊查询"
                value-key="categoryName"
                debounce=1000>
              </el-autocomplete> -->
              <el-select
                v-model="tempData.categoryName"
                filterable
                remote
                :placeholder="$t('STOREMESSAGE.FORM.PLA1')"
                :loading="loading2"
                @focus="searchCategory('')"
                :remote-method="searchCategory"
              >
                <el-option
                  v-for="item in categoryList"
                  :key="item.categoryCode"
                  :value="item.categoryCode"
                  :label="item.categoryName"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('STOREMESSAGE.FORM.FONT2')">
              <el-autocomplete
                v-model="tempData.areaName"
                :fetch-suggestions="serZoneData"
                :placeholder="$t('STOREMESSAGE.FORM.PLA2')"
                value-key="areaName"
                :debounce=2000
              >
              </el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item :label="$t('STOREMESSAGE.SELECT1.TITLE')">
              <el-select
                v-model="tempData.onOff"
                :placeholder="$t('STOREMESSAGE.SELECT1.PLA')"
                clearable
              >
                <el-option
                  :label="$t('STOREMESSAGE.SELECT1.FONT1')"
                  value=""
                >{{$t('STOREMESSAGE.SELECT1.FONT1')}}</el-option>
                <el-option
                  :label="$t('STOREMESSAGE.SELECT1.FONT2')"
                  value="0"
                ></el-option>
                <el-option
                  :label="$t('STOREMESSAGE.SELECT1.FONT3')"
                  value="1"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item
              :label="$t('STOREMESSAGE.FORM.FONT3')"
              v-model="tempData.shopName"
            >
              <el-input :placeholder="$t('STOREMESSAGE.FORM.PLA3')">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span="4"
            style="padding-left:40px"
          >
            <el-button
              type="primary"
              @click="search"
              icon="el-icon-search"
            >{{$t('STOREMESSAGE.BTN.FONT1')}}</el-button>
          </el-col>
        </el-form>
      </div>
      <el-button
        type="primary"
        @click="oneKey(1)"
      >{{$t('STOREMESSAGE.BTN.FONT2')}}</el-button>
      <el-button
        type="primary"
        @click="oneKey(0)"
      >{{$t('STOREMESSAGE.BTN.FONT3')}}</el-button>

      <!-- <el-button
        type="primary"
        @click="excelBusShop"
        class="addBatchBtn"
      >
        <router-link to="/gober/addBatch">{{$t('STOREMESSAGE.BTN.FONT4')}}</router-link>
      </el-button> -->
    </div>
    <div class="table">
      <el-table
        :empty-text="$t('PUBLIC.TABELEMPTY')"
        border
        :data="dataList"
        style="width: 100%;margin-top:20px;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          fixed
          :label="$t('STOREMESSAGE.TABEL.FONT1')"
          width="80"
          align="center"
          type="index"
        >
        </el-table-column>
        <el-table-column
          prop="shopName"
          :label="$t('STOREMESSAGE.TABEL.FONT2')"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('STOREMESSAGE.TABEL.FONT3')"
          width="250"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="businessTime"
          :label="$t('STOREMESSAGE.TABEL.FONT4')"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="categoryName"
          :label="$t('STOREMESSAGE.TABEL.FONT5')"
          width="220"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="areaName"
          :label="$t('STOREMESSAGE.TABEL.FONT6')"
          width="200"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="isOpen"
          :label="$t('STOREMESSAGE.TABEL.FONT7')"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.onOff"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="0"
              :inactive-value="1"
              @change="closeAndopen(scope.row.id,scope.row.onOff,scope.$index)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="120"
          class="lastTd"
          align="center"
          fixed
        >
          <template slot-scope="scope">

            <el-popover
              width="200"
              trigger="click"
              placement="right"
            >
              <div class="contentS">
                  <el-button
                    plain
                  ><router-link :to="({ name: 'Storediscounts',query: { busShopId: scope.row.id } })">优惠设置</router-link></el-button>
                  <!-- <el-button
                    plain
                  >预设字段</el-button> -->
                  <el-button
                    plain
                  > <router-link :to="({ name: 'Userdefinecost',query: { busShopId: scope.row.id } })">自定义费用</router-link></el-button>
                  <el-button
                    plain
                  ><router-link :to="({ name: 'Userdefinediscount',query: { busShopId: scope.row.id } })">自定义优惠</router-link></el-button>
                  <el-button
                    plain
                  ><router-link :to="({ name: 'Orderway',query: { busShopId: scope.row.id }})">接单方式</router-link></el-button>
                  <el-button
                    plain
                  >
                    <router-link :to="({ name: 'SetShop',query: { busShopId: scope.row.id } })">店铺设置</router-link>
                  </el-button>
                  <el-button
                    plain
                    @click="orderwayDialogVisible = true"
                  >快递设置</el-button>
                  <!-- <el-button
                    plain
                  >下单弹出设置</el-button> -->
                  <el-button
                    plain
                  >
                    <router-link :to="({ name: 'Shopqualifications',query: { busShopId: scope.row.id }})">店铺资质</router-link>
                  </el-button>
                  <!-- <el-button
                    plain
                  >下单必点项</el-button> -->
                  <el-button
                    plain
                  ><router-link :to="({ name: 'Reminder',query: { busShopId: scope.row.shopName }})">店铺催单信息</router-link></el-button>
              </div>
              <el-button
                type="primary"
                slot="reference"
                @click="busShopId = scope.row.id"
              >展开</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="isOpen"
          width="120"
          fixed="right"
          align="center"
        >
          <template slot-scope="scope">
            <el-button type="primary" @click="search">修改店铺</el-button>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      :total="page.pageNum"
      @sizeChange="sizeChange"
      @currentChange="currentChange"
    >
    </pagination>

    <!-- 店铺下单方式 -->
    <el-dialog
      title="店铺下单方式"
      :visible.sync="orderwayDialogVisible"
      width="30%"
    >
      <div class="way">
        <p><span>到店自取</span>
          <el-select
            v-model="orderWay.delivery"
            placeholder="开启"
          >
            <el-option
              label="开启"
              :value="0"
            ></el-option>
            <el-option
              label="关闭"
              :value="1"
            ></el-option>
          </el-select>
        </p>
        <p><span>配送员配送</span>
          <el-select
            v-model="orderWay.invite"
            placeholder="开启"
          >
            <el-option
              label="开启"
              :value="0"
            ></el-option>
            <el-option
              label="关闭"
              :value="1"
            ></el-option>
          </el-select>
        </p>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="orderwayDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="orderway"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import {
  storeMessageList,
  storeMessageOffAndOn,
  store,
  excelBusShop,
  shop,
  busShopDelectShop
} from "@/api/index.js"
import pagination from "@/components/pagination"
export default {
  components: {
    pagination
  },
  data() {
    return {
      busShopId: null,
      //店铺分类列表
      categoryList: [],
      loading2: false,
      //店铺分类下拉加载时间
      categoryTime: "",
      //店铺分区下拉加载时间
      zoneTime: "",
      //一键队列
      oneKeylist: [],
      //一键操作队列
      operList: [],
      loading: false,
      dataList: [],
      //搜索时的临时数据
      tempData: {
        areaName: null,
        categoryName: null,
        shopName: null,
        onOff: null
      },
      //搜索时的数据
      serData: {},
      //分页信息
      page: {
        pageNum: 10,
        currentPage: 1,
        pageSize: 5
      },
      orderwayDialogVisible: false, //下单方式对话框
      orderWay: {
        busShopId: null,
        delivery: null,
        invite: null
      }
    };
  },
  methods: {
    //删除店铺
    del (id) {
      busShopDelectShop({shopId: id}).then(res => {
        this.initData(1)
        // this.$message.success("")
      })
    },
    //加载数据
    initData(page, size) {
      this.loading = true;
      storeMessageList({
        page: page || this.page.currentPage,
        size: size || this.page.pageSize,
        areaName: this.serData.areaName,
        categoryName: this.serData.categoryName,
        onOff: this.serData.onOff,
        shopNme: this.serData.shopNme
      }).then(res => {
        this.dataList = res.rows;
        this.page.pageNum = res.count;
      });
    },
    excelBusShop() {},
    //页数改变时的回调
    currentChange(val) {
      this.page.currentPage = val;
      this.initData();
    },
    //每页总数改变时的回调
    sizeChange(val) {
      this.page.pageSize = val;
      this.initData(1);
    },
    //开关店铺
    closeAndopen(id, isOpen, index) {
      this.loading = true;
      store
        .openSwitch({
          id,
          onOff: isOpen
        })
        .then(res => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    },
    //多项操作时storeMessageSearch
    //id储存的队列
    handleSelectionChange(list) {
      this.operList.lenth = 0;
      this.oneKeylist.length = 0;
      this.operList = list;
      list.forEach(item => {
        this.oneKeylist.push(item.id);
      });
    },
    //一键操作
    oneKey(number) {
      if (this.operList.length == 0 || this.oneKeylist.length == 0) {
        this.$message.error("未选取操作对象");
        return;
      }
      this.loading = true;
      let upList = [];
      this.oneKeylist.forEach(item => {
        upList.push({
          id: item,
          onOff: number
        });
      });
      store
        .storeMessageOffAndOn(upList)
        .then(res => {
          if (res.code == "0") {
            this.$message.success("一键操作成功");
            //操作成功本地改变数据,避免多次请求接口
            this.operList.forEach(item => {
              item.onOff = number;
            });
            this.initData;
          } else {
            this.$message.success("一键操作失败");
          }
        })
        .then(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    },
    //限流拦截
    throttle(fn, time) {
      time = time || 1000;
      var clock;
      return function() {
        clearTimeout(clock);
        var arg = arguments;
        clock = setTimeout(function() {
          fn();
        }, time);
      };
    },
    searchCategory(v) {
      this.throttle(() => {
        store
          .storeCategory({
            page: 1,
            size: 50,
            categoryName: v
          })
          .then(res => {
            this.categoryList = res.rows;
          });
      }, 2000)();
    },
    //店铺分区下拉库搜索
    serZoneData(areaName, cb) {
      var result, clock;
      store
        .storeZoom({
          page: 1,
          size: 50,
          areaName
        })
        .then(res => {
          result = res.rows;
          clearTimeout(clock);
          clock = setTimeout(() => {
            cb(result);
          }, 1000 * Math.random());
        });
    },
    //条件筛选店铺
    search() {
      this.serData = Object.create(this.tempData);
      this.initData(1);
    },
    // 实现下单方式更改
    orderway() {
      this.orderwayDialogVisible = false;
      this.orderWay.busShopId = this.busShopId;
      shop.updBusShopWay(this.orderWay).then(res => {
        this.$message({
          message: "success",
          type: "success"
        });
      });
    }
  },
  beforeMount() {
    this.initData();
  }
};
</script>

<style scoped>
.addBatchBtn a {
  color: #ffffff;
}
a:hover {
  color: #ffffff;
}
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
.way p {
  margin-bottom: 20px;
}
.way p span {
  display: inline-block;
  width: 80px;
}
.contentS {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
}
.contentS a {
  color: #606266;
}
</style>
<style>
.contentS .el-button + .el-button {
  display: flex;
  margin-left: 0;
  margin: 5px 0;
}
</style>





 