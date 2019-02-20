const app = getApp()
 
Page({

  /*
    barHeight: 获取头部状态栏高度
    template: 当前模板的位置
  */
  data: {
    barHeight: app.globalData.barHeight,
    template: 1
  },

  onLoad: function (options) {

  },
  // 切换模板
  toggleTemplate(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      template: index
    })
  }
})