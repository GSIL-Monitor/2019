const app = getApp()
Page({
  data:{
    info:[
      { "url": "../../testImg/pic21@3x.png", "name": "长隆野生动物世界", "score":"4.8分"},
      { "url": "../../testImg/pic22@3x.png", "name": "广州塔", "score": "4.8分" },
      { "url": "../../testImg/pic21@3x.png", "name": "日式", "score": "4.8分" }
    ],
    windowHeight: app.globalData.windowHeight,//窗体高度
    barHeight: app.globalData.barHeight//导航高度
  }
})