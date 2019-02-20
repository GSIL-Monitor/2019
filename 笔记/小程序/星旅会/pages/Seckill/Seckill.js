var app = getApp()
Page({
  data: {
    navbar: ['美食抢购', '酒店抢购', '即将开抢'],
    currentTab: 0,
    barHeight: app.globalData.barHeight
  },

  // 导航切换监听
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

}) 