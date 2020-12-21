// pages/category/index.js
import {request} from  "../../request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],
    //当前选中的菜单tab
    currentIndex:0,
    //右侧内容的滚动条距离顶部的距离
    scrollTop:0
  },
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategories()
  },

  getCategories:function(){
    request({
      url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    })
    .then((res)=>{
      this.Cates=res.data.message
      let leftMenuList=this.Cates.map((i)=>{
        return i.cat_name
      })
      let rightContent=this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
    })
  },

  handleItemTab:function(e){
    let index=e.target.dataset.index
    this.setData({
      currentItem:index,
      rightContent:this.Cates[index].children,
      scrollTop:0
    })
  }
})