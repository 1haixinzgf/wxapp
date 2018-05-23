// pages/login/login.js
Page({


// 
//   58到家 
// 1 下一步状态灰
// 2 手机号输入正确时， 点亮 
// 3 reset icon 
//   iconfont png 图片 
//   点击icon 删除手机号 
// 4 用户协议， 弹窗
  /**
   * 页面的初始数据
   */
  data: {
  entity:{
     title:'' 
  }
},
validatemobile: function () {
  var len = this.data.entity.title.length;
  var mobile = this.data.entity.title;
  console.log(mobile)
  if (len == 0) {
      wx.showToast({
      title: '请输入手机号！',
      icon: 'clear',
      duration: 1500
     })
   return;
  }
  if (len != 11) {
    wx.showToast({
      title: '手机号长度有误！',
      icon: 'clear',
      duration: 1500
     })
   return;
  }
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  if (!myreg.test(mobile)) {
        wx.showToast({
      title: '手机号输入有误！',
      icon: 'clear',
      duration: 1500
     })
   return;
  }else {
    wx.showToast({
      title: '',
      icon: 'success',
      duration: 1500
    })
  }
 },
  onInput(e) {
    this.setData({
      ['entity.title']:e.detail.value
     });
  },
  delete(e) {
    this.setData({
      entity: {
        title:'' 
     }
    }),
    console.log(e)
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
  
  }
})