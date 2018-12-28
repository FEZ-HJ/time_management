// pages/create/create.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // index: 8,
    startTime:'07:00',
    endTime:'07:00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = new Date()
    let hours = date.getHours()
    let miuntes = date.getMinutes()
    this.setData({
      endTime: util.formatNumber(hours) + ':' + util.formatNumber(miuntes)
    })
    var that = this
    wx.request({
      url: 'http://localhost/timeContent/findMaxEndTime',
      // method: 'POST',
      header: { "wxchat": wx.getStorageSync('encryption') },
      data: {
        createTime: util.formatDay(new Date())
      },
      success: function (data) {
        console.log(data)
        if (data.data.status = '200') {
          that.setData({
            startTime: data.data.content
          })
        }
      }
    })
  },

})