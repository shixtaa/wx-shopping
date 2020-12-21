import {request} from '../../request/index.js'
Page({
  data:{
    swiperList:[]
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
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      method:"GET",
    })
    .then((result)=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  }
})