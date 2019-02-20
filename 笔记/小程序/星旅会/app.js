//app.js
App({
  onLaunch: function () {
    // 初始化数据 - 之后统一在该函数处理
    this.initGlobalData();
  },
  initGlobalData() {
    let _this = this;
    //  获取头部高度
    wx.getSystemInfo({
      success: function (res) {
        _this.globalData.barHeight = res.statusBarHeight*2;
      },
    });

    // 取出页面高度
    wx.getSystemInfo({
      success: function (res) {
        _this.globalData.windowHeight = res.windowHeight*2
      }
    });
  },
  globalData: {
    barHeight: 0, //头部高度
    windowHeight: 0 //页面高度
  }
})     