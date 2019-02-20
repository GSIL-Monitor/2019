const app = getApp()

Page({

  /*
    barHeight: 获取头部状态栏高度
    template: 当前模板的位置
  */
  data: {
    barHeight: app.globalData.barHeight,
    template: 1,
    codeTime: '',
    codeTimeNum: '获取验证码',
    getCodeIsActive: true,
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
  bindGetCode: function (e) {
    let codeTime = this.data.codeTime
    if (!this.data.getCodeIsActive) return
    let codeTimeNum = 60
    let _this = this
    _this.setData({
      getCodeIsActive: false,
      codeTimeNum: '还剩' + codeTimeNum-- + '秒'
    })

    codeTime = setInterval(function () {
      if (codeTimeNum <= 0) {
        _this.setData({
          getCodeIsActive: true,
          codeTimeNum: '重新获取验证码'
        })
        clearInterval(codeTime)
      } else {
        _this.setData({
          codeTimeNum: '还剩' + codeTimeNum-- + '秒'
        })
      }
    }, 1000)
  }
})