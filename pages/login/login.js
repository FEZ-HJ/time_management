Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (wx.getStorageSync('encryption') != null && wx.getStorageSync('encryption') != ''){
      wx.switchTab({
        url: '/pages/classic/classic'
      })
    }

  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      console.log(e.detail.userInfo)
      //用户按了允许授权按钮
      var that = this;
      wx.login({
        success: function (res) {
          var code = res.code;
          if(code){
            wx.request({
              url: 'http://localhost/wxLogin?code='+code+'&nickName='+e.detail.userInfo.nickName,
              method: 'POST',
              data:{
                code: code,
                nickName: e.detail.userInfo.nickName
              },
              success: function(data){
                wx.setStorageSync("encryption", data.data);
                // //授权成功后，跳转进入小程序首页
                wx.switchTab({
                  url: '/pages/classic/classic'
                })
              }
            })
          } 
        }
      });
      
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  }
})