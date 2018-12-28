// components/pickers/pickers.js
var showToast = require('../../utils/showToast.js')
var util = require('../../utils/util.js')


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startTime:{
      type : String,
      observer: function (newVal, oldVal, changedPath){
        this.setData({
          maxStartTime: newVal
        })
        console.log(this.data.maxStartTime)
      }
    },
    endTime: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        this.setData({
          maxEndTime: newVal
        })
        console.log(this.data.maxEndTime)
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    text_value: '',
    radio_value: '',
    minStartTime: '',
    maxEndTime: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindstartTimeChange: function (e) {
      this.setData({
        maxStartTime: e.detail.value
      })
    },
    bindendTimeChange: function (e) {
      this.setData({
        maxEndTime: e.detail.value
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
      var nowDay = util.formatDay(new Date()) + ' ';
      wx.request({
        url: 'http://localhost/timeContent/save',
        // method: 'POST',
        header: { "wxchat": wx.getStorageSync('encryption')},
        data: {
          content: this.data.text_value,
          startTime: nowDay + this.data.maxStartTime + ':00', 
          endTime: nowDay + this.data.maxEndTime + ':00',
          type: this.data.radio_value
        },
        success: function (data) {
          console.log(data)
          if(data.data.status = '200'){
            showToast.show_toast(data.data.message)
            wx.switchTab({
              url: '/pages/classic/classic'
            })
          }
        }
      })

      
      // wx.navigateBack ({
      //   url: '/pages/classic/classic'
      // })
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
