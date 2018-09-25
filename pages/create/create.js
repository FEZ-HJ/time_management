// pages/create/create.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 8,
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
  },

})