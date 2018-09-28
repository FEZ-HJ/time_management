var wxCharts = require('../../utils/wxcharts-min.js');
var app = getApp();
var pieChart = null;
Page({
  data: {
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
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
        }],
      width: 300,
      height: 300,
      dataLabel: true
    });
  }
});