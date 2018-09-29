var wxCharts = require('../../utils/wxcharts.js')
var util = require('../../utils/util.js')

Page({
  data: {
    series: null,
    startTime: '2018-01-01',
    endTime: '2018-04-04'
  },
  bindstartTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  bindendTimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  onLoad: function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    this.setData({
      startTime: year + '-' + util.formatNumber(month) + '-01',
      endTime: year + '-' + util.formatNumber(month) + '-' + util.formatNumber(day),
    })
  },
  onReady: function (e) {
    this.setData({
      series: [{
        name: '娱乐',
        data: 50,
      }, {
        name: '成长',
        data: 30,
      }, {
        name: '吃饭，睡觉',
        data: 16,
      }, {
        name: '工作',
        data: 17,
      }, {
        name: '浪费',
        data: 46,
      }]
    })
    this._drawPie()
  },
  _drawPie: function(){
    new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
      series: this.data.series,
      width: 300,
      height: 300,
      dataLabel: true
    });
  }
});