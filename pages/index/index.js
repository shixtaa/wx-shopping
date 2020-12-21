import {request} from '../../request/index.js'
Page({
  data:{
    swiperList:[],
    navList:[],
    floorList:[]
  },
  onLoad:function(){
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method:"GET",//默认get
    //   success:(result)=>{
    //     console.log(result.data.message);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })
    this.getSwiperList();
    this.getNavList();
    this.getFloorList();
    
  },
  //获取轮播图数据
  getSwiperList:function(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      method:"GET",
    })
    .then((result)=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  },

  //获取分类数据
  getNavList:function(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
      method:"GET"
    })
    .then((res)=>{
      this.setData({
        navList:res.data.message
      })
    })
  },
  //获取楼层数据
  getFloorList:function(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
      method:"GET"
    })
    .then((res)=>{
      this.setData({
        floorList:res.data.message
      })
    })
  }
})