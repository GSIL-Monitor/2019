//index.js
//获取应用实例
const app = getApp()

Page({ 
  /*
    barHeight: 获取头部状态栏高度
    banner: banner轮播数组
    tbarIsShow: 顶部导航栏是否隐藏（显示其他导航栏）
    bannerIndex： 轮播当前位置
    windowHeight： 小程序当前高度
    tbarOpacity2： 原头部导航栏透明度 
    tbarOpacity: 原头部导航栏隐藏后显示的导航栏透明度
  */
  data: {
    barHeight: app.globalData.barHeight,
    banner: [
      '../../testImg/banner.png',
      '../../testImg/banner.png',
      '../../testImg/banner.png'
    ],
    bannerIndex: 1,
    windowHeight: app.globalData.windowHeight,
    tbarOpacity: 1,
    tbarOpacity2: 0
    
  },
  onLoad: function () {

  },
  bindPageScroll(e) {
    let tbarOpacity = 100
    this.setData({
      'tbarOpacity2': e.detail.scrollTop / 100,
      'tbarOpacity': (tbarOpacity - e.detail.scrollTop) / 100
    })
  },
  changeBanner (e) {
    this.setData({
      'bannerIndex': e.detail.current + 1
    })
  }
})
