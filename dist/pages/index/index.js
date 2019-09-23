;require('./../../runtime');require('./../../common');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[2],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

//index.js
//获取应用实例
var util = __webpack_require__(20);

console.log(util.formatTime(new Date()));
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    var _this = this;

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = function (res) {
        _this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;

          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function getUserInfo(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});

/***/ })

},[[19,0,3]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXRUaW1lIiwiRGF0ZSIsImFwcCIsImdldEFwcCIsIlBhZ2UiLCJkYXRhIiwibW90dG8iLCJ1c2VySW5mbyIsImhhc1VzZXJJbmZvIiwiY2FuSVVzZSIsInd4IiwiYmluZFZpZXdUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25Mb2FkIiwiZ2xvYmFsRGF0YSIsInNldERhdGEiLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJyZXMiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJlIiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsRUFBRCxDQUFwQjs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0ksVUFBTCxDQUFnQixJQUFJQyxJQUFKLEVBQWhCLENBQVo7QUFDQSxJQUFNQyxHQUFHLEdBQUdDLE1BQU0sRUFBbEI7QUFFQUMsSUFBSSxDQUFDO0FBQ0hDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsYUFESDtBQUVKQyxZQUFRLEVBQUUsRUFGTjtBQUdKQyxlQUFXLEVBQUUsS0FIVDtBQUlKQyxXQUFPLEVBQUVDLEVBQUUsQ0FBQ0QsT0FBSCxDQUFXLDhCQUFYO0FBSkwsR0FESDtBQU9IO0FBQ0FFLGFBQVcsRUFBRSx1QkFBVztBQUN0QkQsTUFBRSxDQUFDRSxVQUFILENBQWM7QUFDWkMsU0FBRyxFQUFFO0FBRE8sS0FBZDtBQUdELEdBWkU7QUFhSEMsUUFBTSxFQUFFLGtCQUFZO0FBQUE7O0FBQ2xCLFFBQUlaLEdBQUcsQ0FBQ2EsVUFBSixDQUFlUixRQUFuQixFQUE2QjtBQUMzQixXQUFLUyxPQUFMLENBQWE7QUFDWFQsZ0JBQVEsRUFBRUwsR0FBRyxDQUFDYSxVQUFKLENBQWVSLFFBRGQ7QUFFWEMsbUJBQVcsRUFBRTtBQUZGLE9BQWI7QUFJRCxLQUxELE1BS08sSUFBSSxLQUFLSCxJQUFMLENBQVVJLE9BQWQsRUFBc0I7QUFDM0I7QUFDQTtBQUNBUCxTQUFHLENBQUNlLHFCQUFKLEdBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUNqQyxhQUFJLENBQUNGLE9BQUwsQ0FBYTtBQUNYVCxrQkFBUSxFQUFFVyxHQUFHLENBQUNYLFFBREg7QUFFWEMscUJBQVcsRUFBRTtBQUZGLFNBQWI7QUFJRCxPQUxEO0FBTUQsS0FUTSxNQVNBO0FBQ0w7QUFDQUUsUUFBRSxDQUFDUyxXQUFILENBQWU7QUFDYkMsZUFBTyxFQUFFLGlCQUFBRixHQUFHLEVBQUk7QUFDZGhCLGFBQUcsQ0FBQ2EsVUFBSixDQUFlUixRQUFmLEdBQTBCVyxHQUFHLENBQUNYLFFBQTlCOztBQUNBLGVBQUksQ0FBQ1MsT0FBTCxDQUFhO0FBQ1hULG9CQUFRLEVBQUVXLEdBQUcsQ0FBQ1gsUUFESDtBQUVYQyx1QkFBVyxFQUFFO0FBRkYsV0FBYjtBQUlEO0FBUFksT0FBZjtBQVNEO0FBQ0YsR0F4Q0U7QUF5Q0hXLGFBQVcsRUFBRSxxQkFBU0UsQ0FBVCxFQUFZO0FBQ3ZCdkIsV0FBTyxDQUFDQyxHQUFSLENBQVlzQixDQUFaO0FBQ0FuQixPQUFHLENBQUNhLFVBQUosQ0FBZVIsUUFBZixHQUEwQmMsQ0FBQyxDQUFDQyxNQUFGLENBQVNmLFFBQW5DO0FBQ0EsU0FBS1MsT0FBTCxDQUFhO0FBQ1hULGNBQVEsRUFBRWMsQ0FBQyxDQUFDQyxNQUFGLENBQVNmLFFBRFI7QUFFWEMsaUJBQVcsRUFBRTtBQUZGLEtBQWI7QUFJRDtBQWhERSxDQUFELENBQUosQyIsImZpbGUiOiJwYWdlcy9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpO1xuY29uc29sZS5sb2codXRpbC5mb3JtYXRUaW1lKG5ldyBEYXRlKCkpKTtcbmNvbnN0IGFwcCA9IGdldEFwcCgpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJylcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXA6IGZ1bmN0aW9uKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKXtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGdldFVzZXJJbmZvOiBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=