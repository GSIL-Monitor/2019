<template>
  <div class="content">
  <div class="operation">
    <el-form :inline="true" label-width="100px" label-position="right">
      <el-form-item :label="$t('ODERSTATICS.FORM.FONT1')" class="mgb0">
        <el-select
          v-model="tempData.shopId"
          v-loading="loading2"
          filterable
          remote
          :placeholder="$t('ODERSTATICS.FORM.PLA1')"
          @focus="searchShop('')"
          :remote-method="searchShop"
          clearable
        >
          <el-option
            v-for="item in shopList"
            :key="item.id"
            :label="item.shopName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('ODERSTATICS.TIME.TITLE')"  class="mgb0">
        <el-date-picker
          type="date"
          format="yyyy-MM-dd"
          :placeholder="$t('ODERSTATICS.TIME.START')"
          value-format="yyyy-MM-dd"
          v-model="tempData.startTime"
        ></el-date-picker>
        <span>-</span>
        <el-date-picker
          type="date"
          format="yyyy-MM-dd"
          :placeholder="$t('ODERSTATICS.TIME.END')"
          value-format="yyyy-MM-dd"
          v-model="tempData.endTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item  class="mgb0">
        <el-button type="primary" @click="searchList" icon="el-icon-search">{{ $t('ODERSTATICS.BTN.FONT1') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <section class="chartCon" v-loading="loading">
      <div id="myChart" :style="{width:'100%', height:'600px'}"></div>
      <div id></div>
    </section>
  </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import { statistics, order } from '@/api/index.js'
export default {
  components: {
    pagination
  },
  data () {
    return {
      shopList: [],
      loading2: false,
      // 加载状态
      loading: false,
      // 表格数据
      tableData: [],
      // 搜索时临时数据
      tempData: {},
      // 搜索时用的数据
      searchData: {},
      xLines: [],
      yLines: [],
      page: {
        pageNum: null,
        pageCurrent: 1,
        pageSize: 5
      }
    }
  },
  methods: {
    initData: function (page, size) {
      this.loading = true
      this.xLines.length = 0
      this.yLines.length = 0
      this.loading = true
      this.searchData = this.$common.deepCopy(this.tempData)
      statistics.orderStatics(this.searchData).then(res => {
        this.tableData = res.rows
        this.tableData.forEach(item => {
          this.xLines.push(item.date)
          this.yLines.push(item.counts)
        })
        this.yLines.reverse()
        this.xLines.reverse()
        this.drawLine()
        setTimeout(() => {
          this.loading = false
        }, 500)
      })
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    searchList: function () {
      console.log(this.tempData)
      this.searchData = this.$common.deepCopy(this.tempData)
      console.log(this.searchData)
      this.page.pageCurrent = 1
      this.initData(1)
    },
    // 页数改变时的回调
    currentChange (val) {
      this.page.pageCurrent = val
      this.initData()
    },
    // 每页总数改变时的回调
    sizeChange (val) {
      this.page.pageSize = val
      this.page.pageCurrent = 1
      this.initData(1)
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        colors: ['#5793f3', '#d14a61', '#675bba'],
        title: { text: this.$t('ODERSTATICS.CHART.TITLE') },
        tooltip: {},
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: this.xLines,
          axisLine: {
            lineStyle: {
              color: '#5793f3'
            }
          }
        },
        grid: {
          right: '20%'
        },
        legend: {
          data: [this.$t('ODERSTATICS.CHART.LEGEND.FONT1'), this.$t('ODERSTATICS.CHART.LEGEND.FONT2')]
        },
        yAxis: {
          type: 'value',
          name: this.$t('ODERSTATICS.CHART.YAXIS.FONT1'),
          min: 0,
          axisLine: {
            lineStyle: {
              color: '#5793f3'
            }
          }
        },
        series: [
          {
            name: this.$t('ODERSTATICS.CHART.SERIES.FONT1'),
            type: 'line',
            data: this.yLines.reverse(),
            itemStyle: {
              normal: {
                color: '#675bba'
              }
            }
          },
          {
            name: this.$t('ODERSTATICS.CHART.SERIES.FONT2'),
            type: 'bar',
            barWidth: 50,
            data: this.yLines.reverse(),
            itemStyle: {
              normal: {
                color: '#5793f3'
              }
            }
          }
        ]
      })
    },
    searchShop (shopName) {
      this.$common.throttle(() => {
        order.orderShop({ shopName }).then(res => {
          this.shopList = res.data
        })
      }, 1000)
    }
  },
  beforeMount () {
    this.initData()
  }
}
</script>
<style lang="scss">

</style>
