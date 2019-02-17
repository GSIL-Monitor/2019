var app = getApp()
Page({
  data: {
    currentTab: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function (e) {
   
   //this指的是Page
    var that = this;
    that.setData({
      currentTab: e.detail.current
      //e.detail.current -->当前选项卡 data-current=0
      //e.detail-->点击坐标  {x: 3, y: 9}
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;
    console.log(e.target) 
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})