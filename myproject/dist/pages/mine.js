'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_wepy$page) {
  _inherits(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人信息'
    }, _this.data = {
      nickName: '',
      avatarUrl: '',
      src: '',
      about: '../image/about.png',
      history: '../image/history.png',
      my: '../image/my.png',
      leave: '../image/leave.png'
    }, _this.methods = {
      leave: function leave() {
        _wepy2.default.navigateTo({
          url: './leave'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Mine, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
          self.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName
          });
        }
      });
    }
  }]);

  return Mine;
}(_wepy2.default.page);

exports.default = Mine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJzcmMiLCJhYm91dCIsImhpc3RvcnkiLCJteSIsImxlYXZlIiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwidXNlckluZm8iLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxXQUFLLEVBSEE7QUFJTEMsYUFBTyxvQkFKRjtBQUtMQyxlQUFTLHNCQUxKO0FBTUxDLFVBQUksaUJBTkM7QUFPTEMsYUFBTztBQVBGLEssUUFTUEMsTyxHQUFVO0FBQ1JELFdBRFEsbUJBQ0E7QUFDTix1QkFBS0UsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9EO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS1YsUUFBTCxHQUFnQmEsSUFBSUMsUUFBSixDQUFhZCxRQUE3QjtBQUNBVSxlQUFLVCxTQUFMLEdBQWlCWSxJQUFJQyxRQUFKLENBQWFiLFNBQTlCO0FBQ0FTLGVBQUtLLE9BQUwsQ0FBYTtBQUNYZCx1QkFBV1ksSUFBSUMsUUFBSixDQUFhYixTQURiO0FBRVhELHNCQUFVYSxJQUFJQyxRQUFKLENBQWFkO0FBRlosV0FBYjtBQUlEO0FBUmMsT0FBakI7QUFVRDs7OztFQWhDK0IsZUFBS2dCLEk7O2tCQUFsQnBCLEkiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS/oeaBrydcbiAgfVxuICBkYXRhID0ge1xuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIHNyYzogJycsXG4gICAgYWJvdXQ6ICcuLi9pbWFnZS9hYm91dC5wbmcnLFxuICAgIGhpc3Rvcnk6ICcuLi9pbWFnZS9oaXN0b3J5LnBuZycsXG4gICAgbXk6ICcuLi9pbWFnZS9teS5wbmcnLFxuICAgIGxlYXZlOiAnLi4vaW1hZ2UvbGVhdmUucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGVhdmUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xlYXZlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgc2VsZi5hdmF0YXJVcmwgPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgYXZhdGFyVXJsOiByZXMudXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgIG5pY2tOYW1lOiByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=