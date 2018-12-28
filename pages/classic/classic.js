// pages/classic/classic.js
var util = require('../../utils/util.js')
var showToast = require('../../utils/showToast.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tempData()
    this.recordTimes()
  },

  add: function(){
    wx.navigateTo({
      url: '../create/create'
    })
  },

  deleteItem: function(e){
    console.log(e.detail.content)
    wx.request({
      url: 'http://localhost/timeContent/deleteById?id='+e.detail.content.id,
      method: 'delete',
      header: { "wxchat": wx.getStorageSync('encryption') },
      success: function (data) {
        console.log(data)
        if (data.data.status = '200') {
          showToast.show_toast(data.data.message)
        }
      }
    })
  },
  
  //测试临时数据
  tempData: function () {
    var that = this
    wx.request({
      url: 'http://localhost/timeContent/findOnDay',
      // method: 'POST',
      header: { "wxchat": wx.getStorageSync('encryption') },
      data:{
        createTime: util.formatDay(new Date())
      },
      success: function (data) {
        console.log(data)
        if (data.data.status = '200') {
          that.setData({
            list: data.data.content            
          })
        }
      }
    })

    // var list = [
    //   {
    //     create: 'sss',
    //     // txtStyle: "red",
    //     // icon: "/images/icon0.png",
    //     txt: "123456789123456789123456789123456789123456789123456789"
    //   }
    // ];

  },

  recordTimes : function(){
    var that = this
    wx.request({
      url: 'http://localhost/timeContent/findCountByUserId',
      // method: 'POST',
      header: { "wxchat": wx.getStorageSync('encryption') },
      success: function (data) {
        console.log(data)
        if (data.data.status = '200') {
          that.setData({
            index: data.data.content
          })
        }
      }
    })
  }
})