const app = getApp()

Page({
  /*
    barHeight: 获取头部状态栏高度
    windowHeight： 小程序当前高度
    tbarOpacity2： 原头部导航栏透明度 
    tbarOpacity: 原头部导航栏隐藏后显示的导航栏透明度
    isBindPhone: 是否有绑定手机号
  */
  data: {
    barHeight: app.globalData.barHeight,
    windowHeight: app.globalData.windowHeight,
    tbarOpacity: 1,
    tbarOpacity2: 0,
    isBindPhone: false
  },

  onLoad: function (options) {

  },
  bindPageScroll(e) {
    let tbarOpacity = 100
    this.setData({
      'tbarOpacity2': e.detail.scrollTop / 100,
      'tbarOpacity': (tbarOpacity - e.detail.scrollTop) / 100
    })
  },

})