const app = getApp()

Page({

  /*
    barHeight: 获取头部状态栏高度
    template: 当前模板的位置
    date: 出生日期
  */
  data: {
    barHeight: app.globalData.barHeight,
    template: 1,
    date: ''
  },

  onLoad: function (options) {

  },
  // 切换模板
  toggleTemplate(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      template: index
    })
  },
  // 出生日期选择
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  }
})