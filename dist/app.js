;require('./runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports) {

//app.js
App({
  onLaunch: function onLaunch() {
    var _this = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs); // 登录

    wx.login({
      success: function success(res) {// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }); // 获取用户信息

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function success(res) {
              // 可以将 res 发送给后台解码出 unionId
              _this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况

              if (_this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userInfo: null
  }
});

/***/ })
],[[0,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwib25MYXVuY2giLCJsb2dzIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInVuc2hpZnQiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJJbmZvUmVhZHlDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0FBLEdBQUcsQ0FBQztBQUNGQyxVQUFRLEVBQUUsb0JBQVk7QUFBQTs7QUFDcEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsY0FBSCxDQUFrQixNQUFsQixLQUE2QixFQUF4QztBQUNBRixRQUFJLENBQUNHLE9BQUwsQ0FBYUMsSUFBSSxDQUFDQyxHQUFMLEVBQWI7QUFDQUosTUFBRSxDQUFDSyxjQUFILENBQWtCLE1BQWxCLEVBQTBCTixJQUExQixFQUpvQixDQU1wQjs7QUFDQUMsTUFBRSxDQUFDTSxLQUFILENBQVM7QUFDUEMsYUFBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUksQ0FDZDtBQUNEO0FBSE0sS0FBVCxFQVBvQixDQVlwQjs7QUFDQVIsTUFBRSxDQUFDUyxVQUFILENBQWM7QUFDWkYsYUFBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7QUFDZCxZQUFJQSxHQUFHLENBQUNFLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckM7QUFDQVYsWUFBRSxDQUFDVyxXQUFILENBQWU7QUFDYkosbUJBQU8sRUFBRSxpQkFBQUMsR0FBRyxFQUFJO0FBQ2Q7QUFDQSxtQkFBSSxDQUFDSSxVQUFMLENBQWdCQyxRQUFoQixHQUEyQkwsR0FBRyxDQUFDSyxRQUEvQixDQUZjLENBSWQ7QUFDQTs7QUFDQSxrQkFBSSxLQUFJLENBQUNDLHFCQUFULEVBQWdDO0FBQzlCLHFCQUFJLENBQUNBLHFCQUFMLENBQTJCTixHQUEzQjtBQUNEO0FBQ0Y7QUFWWSxXQUFmO0FBWUQ7QUFDRjtBQWpCVyxLQUFkO0FBbUJELEdBakNDO0FBa0NGSSxZQUFVLEVBQUU7QUFDVkMsWUFBUSxFQUFFO0FBREE7QUFsQ1YsQ0FBRCxDQUFILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAuanNcbkFwcCh7XG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgdmFyIGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuXG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=