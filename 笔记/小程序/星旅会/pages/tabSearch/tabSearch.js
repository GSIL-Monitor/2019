//获取应用实例
const app = getApp()
Page({
  data: {
    windowHeight: app.globalData.windowHeight,//窗体高度
    barHeight: app.globalData.barHeight,//导航高度
    imgUrls: [
      '/testImg/xlh_pic7.png',
      '/testImg/xlh_pic7.png',
      '/testImg/xlh_pic7.png'
    ],//轮播图片
    indicatorDots: true,//轮播图片的小点
    autoplay: true,//自动播放
    interval: 5000,//轮播时长
    duration: 1000,//动画时长
    Hei: "462rpx",//轮播图的高度
    startDate: '',//开始时间
    endDate: '',//结束时间
    totalDays:1,//共
    hotImgUrls:[
      '/testImg/xlh_pic-01.png',
      '/testImg/xlh_pic-02.png',
      '/testImg/xlh_pic-03.png'
    ]//热门推荐信息
  },
  onLoad:function(){
    this.setData({
      startDate: this.format(new Date(), 'start'),
      endDate: this.format(new Date(), 'end')
    })
  },
  //选中开始时间
  bindStartDateChange(e) {
    this.setData({
      startDate: e.detail.value
    })
    console.log(this.judgement(this.startDate, this.endDate))
    if(this.endDate > this.startDate)
    {
      console.log(111)
      this.setData({
        totalDays: datedifference(this.startDate, this.endDate)
      })
    }
  },
  //选中结束时间
  bindEndDateChange(e) {
    this.setData({
      endDate: e.detail.value
    })
  },
  //格式化日期
  format:function(date,status) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = status === "start" ? date.getDate() : date.getDate()+1
    d = d < 10 ? ('0' + d) : d
    return y + '-' + m + '-' + d
  },
  //天数计算
  datedifference:function(statrTime, endTime) {    //sDate1和sDate2是2006-12-18格式  
    var dateSpan,
    tempDate,
    iDays;
    sDate1 = Date.parse(statrTime);
    sDate2 = Date.parse(endTime);
    dateSpan = sDate2 - statrTime;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
  },
  //判断日期大小
  judgement:function(date1, date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    console.log(date1, date2)
    if(oDate1.getTime() < oDate2.getTime())
    {
      return true 
    }
    else
    {
      return false
    }
}
})