<template>
  <div class="districtset container">
    <div class="subTitleTop">
      <span>{{ $t("NAV5.T") }}</span>
    </div>
    <div class="addBottom">
      <el-form
        :model="addForm"
        label-width="150px"
        class="demo-ruleForm"
      >
      <!--暂时隐藏-->
        <!-- <el-form-item :label="$t('NAV5.T1')">
          <el-input
            v-model="addForm.areaName"
          ></el-input>
        </el-form-item> -->
        <el-form-item :label="$t('NAV5.T2')">
          <el-input
            v-model.number="addForm.mapDistance"
          ></el-input>
          <!-- <button  @click="dialogVisible = true" class="btn">绘制地图区域</button> -->
        </el-form-item>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ $t("NAV5.Txt2") }}</p>
        <el-form-item :label="$t('NAV5.T3')">
          <el-input
            v-model.number="addForm.deliveryMoney"
          ></el-input>
        </el-form-item>
       <!--  <el-form-item :label="$t('NAV5.T4')">
          <el-input
            v-model.number="addForm.sendPrice"
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="满多少钱免配送费 :">
          <el-input
            v-model.number="addForm.fullexeDisPrice"
            placeholder="满多少钱免配送费"
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item :label="$t('NAV5.T5')" class="areaCourier">
          <template>
            <el-select
                v-model="addForm.areaCourier"
                multiple
                collapse-tags
                >
                <el-option v-for="item in busCourierList" :value="item.id" :label="item.name" :key="item.id">
                </el-option>
              </el-select>
          </template>
        </el-form-item>
        <p>{{ $t("NAV5.Txt5") }}</p>
        <el-form-item :label="$t('NAV5.T6')">
          <el-select
            v-model="addForm.appointCourier"
          >
            <el-option
              :label="$t('NAV5.Txt6')"
              :value="0"
            ></el-option>
            <el-option
              :label="$t('NAV5.Txt7')"
              :value="1"
            ></el-option>
          </el-select>
        </el-form-item>-->
      </el-form>
      <div class="Btn">
        <button
            class="btn"
            @click="submitForm('addForm')"
          >{{ $t("BTN.Sub2") }}</button>
      </div>
    </div>
    <!-- 绘制地图 -->
    <el-dialog
      title="绘制地图"
      :visible.sync="dialogVisible"
      width="740px"
      >
        <gmap-map
          :center="center"
          :zoom="7"
          style="width: 700px; height: 400px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { queryBusCourier, queryShopDispatchArea, addShopDispatchArea, updShopDispatchArea, updateShopDispatchArea, ShopDispatchquery} from '@/api/index.js'
export default {
  data () {
    return {
      dialogVisible: false,
      //   表格数据
      /* addForm: {
        appointCourier: null,
        areaCourier: null,
        areaName: null,
        areaType: null,
        dispatchPrice: null,
        drawAreaMap: null,
        // fullexeDisPrice: null,
        language: 1,
        sendPrice: null,
        shopId: null
      }, */
      addForm: {
        mapDistance: '',
        deliveryMoney: '',
        busShopId: '',
        id: ''
      },
      busCourierList: [],
      firstAdd: true,
      // 地图
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }]
    }
  },
  mounted () {
    this.addForm.shopId = this.LS.get('shopId')
    /* // 查询配送员
    queryBusCourier(this.addForm.shopId).then(res => {
      this.busCourierList = res.data
    })
    //  配送区域设置查询
    queryShopDispatchArea(this.addForm.shopId).then(res => {
      if (!res.code) {
        this.addForm = res.data
        if (res.data.areaCourier) {
          res.data.areaCourier = JSON.parse(res.data.areaCourier)
        } else {
          res.data.areaCourier = []
        }
        this.firstAdd = false
      }
    }) */
    ShopDispatchquery({busShopId: this.addForm.shopId}).then(res => {
      this.addForm = res.data
      console.log(res)
    })
  },
  methods: {
    // 提交
    submitForm () {
      // 处理多个配送员
      if (this.areaCourier) {
        this.areaCourier.join()
      } else {
        this.areaCourier = null
      }
      if (this.firstAdd) {
        updateShopDispatchArea(this.addForm).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
          }
        })
        /* addShopDispatchArea(this.addForm).then(res => {
          console.log(res)
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
          } else {
            this.$message.error(res.msg)
          }
        })
      } else {
        updShopDispatchArea(this.addForm).then(res => {
          if (!res.code) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
          } else {
            this.$message.error(res.msg)
          }
        }) */
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.districtset {
  height: 805px;
  .addBottom {
    padding: 40px 240px;
    font-size: 16px;
    color: #666;
    p {
      color: #ff4646;
      margin-left: 50px;
      margin-bottom: 20px;
    }
    .Btn {
      text-align: center;
      margin: 60px 0;
    }
  }
}
</style>
<style>
.districtset .el-form-item {
  margin-bottom: 2px;
  margin-top: 16px;
}
.districtset .el-form-item__label {
  font-size: 16px;
}
.el-select-dropdown__list{
  min-width: 230px;
}
</style>
