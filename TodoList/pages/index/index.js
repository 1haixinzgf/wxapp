//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据会对应着状态 界面状态
  data: {
    // 默认的status是1 也就是全部
    // setData 可以改变数据 ，比如改为2 界面状态就会改为未完成 3已完成
    //界面状态要被data接管
   
   status: 1,
   addShow: true,
   addText:'',
   list:[],
   lists:[{
     title:'帮徐佳媛同学砍价',
     date:'十分钟前',
     status:'1',
   },{
     title:'邀请柔柔同学',
     date:'刚刚',
     status:'0'
   }],addText:'',
  },
  curLists: [],
  showStatus:function(e) {
    //
    const status = e.currentTarget.dataset.status//事件发生时点击的元素及数据集
    console.log(e,status);
    //不在是
    this.setData({//用this来调用setData
      status:status,//key value中key 值相同，可以省略

    })
  },
  changeTodo: function(e) {
    // 当前点击条目的status success
    // 数据 lists 跟当前条目相关的这一条数据
    // 将status值更新为1
    // index ?list与index有关
    const index = e.currentTarget.dataset.item;
    const temp = this.data.lists;
    console.log(temp);
    temp.forEach((item,i) => {
      console.log(item);
      if (i==index) {
        if(item.status == '0') {
          item.status ='1'
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration: 1000//wx.showToast(已完成)内置api
          })
        }else {
          item.status = '0'
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration: 1000
          })
        }
      }
      // console.log(item, i);
      this.setData({
        lists: temp
      });
    })
  },
  addTodoShow: function(e) {
    this.setData({
      addShow: false
    })
  },
  setInput: function(e) {
     console.log(e);
    this.setData({
      addText:e.detail.value
    })
  },
  addTodo: function(e) {
    // ？
    const task = {
      title:this.data.addText,//来自于输入框的内容  怎么将输入内容变成动态的
      status:'0',
      date:'刚刚',
    }// 对象字面量
    console.log(task);
    const temp = [...this.data.lists,task];//this.data.Lists
    this.setData({
      lists: temp,
      addShow:true,
    })
    // 看到界面，我们就要知道要的数据
    // 看到交互 对数据操作

    //如何添加新的todo？
    // 页面上多一条任务
    // 显示多少条有lists决定
    // Lists push
    // 数据驱动界面，数据变化，页面自动更新
    // MVVM model(数据模型data) View视图 VM(视图模型层)
  },
  addTodoHide: function(e) {
    this.setData({
      addShow: true
    })
  }
  //事件处理函数
})
