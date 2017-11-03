'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '手机摄影大赛'
    }, _this.data = {
      src: '',
      sight: ['../image/sight.jpg', '../image/sea.jpg', '../image/beach.jpg', '../image/boat.jpg', '../image/night.jpg'],
      height: 0,
      width: 0
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '自定义转发标题',
          path: '/page/user?id=123',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwic2lnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwic3VjY2VzcyIsImZhaWwiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxhQUFPLENBQUMsb0JBQUQsRUFBdUIsa0JBQXZCLEVBQTJDLG9CQUEzQyxFQUFpRSxtQkFBakUsRUFBc0Ysb0JBQXRGLENBRkY7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU87QUFKRixLLFFBTVBDLE8sR0FBVTtBQUNSQyx1QkFEUSw2QkFDVUMsR0FEVixFQUNlO0FBQ3JCLFlBQUlBLElBQUlDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN6QjtBQUNBQyxrQkFBUUMsR0FBUixDQUFZSCxJQUFJSSxNQUFoQjtBQUNEO0FBQ0QsZUFBTztBQUNMQyxpQkFBTyxTQURGO0FBRUxDLGdCQUFNLG1CQUZEO0FBR0xDLGlCQUhLLG1CQUdHUCxHQUhILEVBR1E7QUFDWDtBQUNELFdBTEk7QUFNTFEsY0FOSyxnQkFNQVIsR0FOQSxFQU1LO0FBQ1I7QUFDRDtBQVJJLFNBQVA7QUFVRDtBQWhCTyxLOzs7Ozs2QkFrQkQ7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkgsZUFEaUIsbUJBQ1RQLEdBRFMsRUFDSjtBQUNYUyxlQUFLYixNQUFMLEdBQWNJLElBQUlXLFlBQWxCO0FBQ0FGLGVBQUtaLEtBQUwsR0FBYUcsSUFBSVksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBcEMrQixlQUFLQyxJOztrQkFBbEJ2QixJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiYvmnLrmkYTlvbHlpKfotZsnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHNpZ2h0OiBbJy4uL2ltYWdlL3NpZ2h0LmpwZycsICcuLi9pbWFnZS9zZWEuanBnJywgJy4uL2ltYWdlL2JlYWNoLmpwZycsICcuLi9pbWFnZS9ib2F0LmpwZycsICcuLi9pbWFnZS9uaWdodC5qcGcnXSxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcbiAgICAgICAgcGF0aDogJy9wYWdlL3VzZXI/aWQ9MTIzJyxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19