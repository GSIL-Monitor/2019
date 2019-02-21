<template>
  <div class="helpCenter container">
    <el-tabs value="first">
      <el-tab-pane label="帮助中心" class="content" name="first">
        <el-table :data="systemInfor" style="width: 100%">
          <el-table-column prop="type" label="历史消息">
          </el-table-column>
          <el-table-column fixed="right" width="180" prop="update">

          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    //   处理消息
    handleOrder (index, rows) {
      console.log(index)
      console.log(rows)
    }
  },
  data () {
    return {
      systemInfor: [{
        type: '如何上传商品',
        update: '2018-09-22 12:02'
      },
      {
        type: '如何设置商家基本信息',
        update: '2018-09-22 12:02'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.helpCenter {
    height: 805px;
    margin-top: 17px;
    position: relative;
    .noHandleText {
        font-size: 16px;
        color: rgba(102, 102, 102, 1);
    }
}
</style>
<style lang="scss">
.helpCenter {
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
