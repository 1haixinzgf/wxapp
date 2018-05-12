// import testDrive from "../../modules/test-drive";
// console.log(testDrive)
//index.js
//获取应用实例

// 在Page里得到app
const app = getApp()

Page({
  data: {
    slides:[]
  },
  onLoad() {
    this.setData({
      slides:app.globalData.slides,
       })
  },

  // testDrive,
  readMore(event) {
    const id = event.target.dataset.id;
    wx.navigateTo({ // 跳转新页面
      url: `/pages/vehicies/show?id=${id}`
    })
  }

})
