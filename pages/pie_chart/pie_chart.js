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
        name: '娱乐时间',
        data: 50,
      }, {
          name: '对自己有成长的时间',
        data: 30,
      }, {
          name: '吃饭、睡觉的时间',
        data: 16,
      }, {
          name: '强制性工作时间',
        data: 17,
      }, {
          name: '浪费的时间',
        data: 46,
        }],
      width: 320,
      height: 300,
      dataLabel: true
    });
  }
});