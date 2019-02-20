const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: app.globalData.windowHeight,//窗体高度
    barHeight: app.globalData.barHeight,//导航高度
    orderTpyeInfo:[
      { 
        "url": "../../images/xlh_all.png", 
        "text": "全部", 
        "clickUrl":"../../images/xlh_all1.png",
        "h":37,
        "w":41
      },
      { 
        "url": "../../images/xlh_dfk.png", 
        "text": "待付款", 
        "clickUrl": "../../images/xlh_dfk1.png",
        "h": 36,
        "w": 42
      },
      { 
        "url": "../../images/xlh_dcp.png", 
        "text": "待出票",
        "clickUrl": "../../images/xlh_dcp1.png",
        "h": 33,
        "w": 49
      },
      { 
        "url": "../../images/xlh_ycp.png", 
        "text": "已出票", 
        "clickUrl": "../../images/xlh_ycp1.png",
        "h": 46,
        "w": 46
      }
    ],//订单类型
    imgindex:"0",
    orderDetailInfo:[
      { "orderNumber": "X201812015478", "totalPrice": "188.00", "detailUrl": "../../testImg/pic11.png", "name": "广州海婓酒店(原云海酒)", "price": "188.00", "time":"2018-12-01 16:54:34","status":"待付款"},
      { "orderNumber": "X201812015478", "totalPrice": "188.00", "detailUrl": "../../testImg/pic11.png", "name": "广州海婓酒店(原云海酒)", "price": "188.00", "time": "2018-12-01 16:54:34","status": "已付款" },
    ]//订单明细
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  select: function (e) {
    console.log(e)
    this.setData({
      flag: e.currentTarget.id,
      //这里的imgindex也就是科室菜单的index
      imgindex: e.currentTarget.dataset.index
    });
  },
  jumpTo: function (e) {
    wx.redirectTo({//关闭当前页面，跳转到应用内的某个页面
    url: '../orderPay/orderPay'})

  }
})