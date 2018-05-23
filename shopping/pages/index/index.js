//index.js
//获取应用实例
import goods from '../../api/goods.js'
const app = getApp()
// console.log(goods)
Page({
  data: {
  num :1,
  show: false,
  totalNum: 0,
  scaleCart: false,
  goods:null
  },

  addCount(e) {
    console.log(e)
   let num = this.data.num; //  const num = ++this.data.num;
     num ++;
     this.setData({
       num
     })
  },
  addToCart(e) {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(()=> {
      this.setData({
          show: false,
          scaleCart: true
      });
       setTimeout(()=> {
      this.setData({
          totalNum :num + total,
          hasCarts: true,
          scaleCart: false
      })  
    },200) 
    },300)
    
  },
  onLoad(options) {
    // var id = this.data.id;
    // wx.navigateTo({
    //   url: `../cart/cart?id=${id}`
    // });
    // console.log(options)
    // const id = options.id || 2;
    // console.log(id)
    var id =2;
    let curGoods;
    for(let i = 0;i<goods.length; i++){
      if(goods[i].id === id){
        // console.log(goods)
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() =>{
      this.setData({
        goods:curGoods
      })
    },1000)
    
  }
})
