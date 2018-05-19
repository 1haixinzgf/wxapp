//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),//小程序接口
    userInfo: {},
    addShow: true,
    focus: true,
    addText: '',
    lists: [],
    status:0
},
onLoad() {
  if(app.globalData.userInfo) {
    this.setData({
      userInfo:
      app.globalData.userInfo,
      hasUserInfo: true
    })
  }
  wx.getStorage({
    key:'lists',
    success: (res) =>{
      console.log(res)
      this.setData({
        'lists': res.data
        })
      }
    })
  },
  changeTodo() {
    wx.showToast({
      content:'',
      title:''
      
    })
    this.setData({
       status:1
    })
   
  },
  getUserInfo: function(e) {
    // console.log(e);
    this.setData({
      hasUserInfo: true,
      userInfo:e.detail.userInfo
    })
  // 存储数据
  wx.setStorage({
    key: 'user-Info',
    data:e.detail.userInfo,
    success: function(res) {
      // console.log(e)
    }
  })
  },
  addTodoHide(e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })

  },
  addTodo(e) {
    if (!this.data.addText.trim()){
      return;
    }
    // item都是一个对象 文字都是一部分
    var addT = {
      title: this.data.addText,
      // status:'0',
      status: 0,
      id: new Date().getTime()
    }
    // console.log(addT)

    const temp = [
      addT,
      ...this.data.lists
    ]
    temp.push(addT);
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key:'lists',
      data: temp
    });
    wx.showToast({
      title: '添加成功',
      icon:'success',
      duration: 1000
    })
    this.addTodoHide(); 
    // value 
    // List
    // setStorage
  },
  setInput (e) {
    this.setData({
      'addText':e.detail.value
    })
  }
})

