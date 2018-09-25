// components/pickers/pickers.js
var showToast = require('../../utils/showToast.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startTime:String,
    endTime:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    text_value: '',
    radio_value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    submit: function(){
      if(this.data.text_value == ''){
        showToast.show_toast('请填写活动内容')
        return
      }
      if(this.data.radio_value == ''){
        showToast.show_toast('请选择活动类型')
        return
      }
      // TODO 提交数据到服务器
      
      wx.navigateBack ({
        url: '/pages/classic/classic'
      })
    },
    text_input: function(e){
      this.setData({
        text_value : e.detail.value
      })
    },
    radioChange: function(e){
      this.setData({
        radio_value: e.detail.value
      })
    }
  }
})
