;require('./../../runtime');require('./../../common');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[5],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

//logs.js
var util = __webpack_require__(2);

Page({
  data: {
    logs: []
  },
  onLoad: function onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log));
      })
    });
  }
});

/***/ })

},[[4,0,3]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dzL2xvZ3MuanMiXSwibmFtZXMiOlsidXRpbCIsInJlcXVpcmUiLCJQYWdlIiwiZGF0YSIsImxvZ3MiLCJvbkxvYWQiLCJzZXREYXRhIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIm1hcCIsImxvZyIsImZvcm1hdFRpbWUiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLENBQUQsQ0FBcEI7O0FBRUFDLElBQUksQ0FBQztBQUNIQyxNQUFJLEVBQUU7QUFDSkMsUUFBSSxFQUFFO0FBREYsR0FESDtBQUlIQyxRQUFNLEVBQUUsa0JBQVk7QUFDbEIsU0FBS0MsT0FBTCxDQUFhO0FBQ1hGLFVBQUksRUFBRSxDQUFDRyxFQUFFLENBQUNDLGNBQUgsQ0FBa0IsTUFBbEIsS0FBNkIsRUFBOUIsRUFBa0NDLEdBQWxDLENBQXNDLFVBQUFDLEdBQUcsRUFBSTtBQUNqRCxlQUFPVixJQUFJLENBQUNXLFVBQUwsQ0FBZ0IsSUFBSUMsSUFBSixDQUFTRixHQUFULENBQWhCLENBQVA7QUFDRCxPQUZLO0FBREssS0FBYjtBQUtEO0FBVkUsQ0FBRCxDQUFKLEMiLCJmaWxlIjoicGFnZXMvbG9ncy9sb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9sb2dzLmpzXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW11cbiAgfSxcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAobG9nID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwuZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==