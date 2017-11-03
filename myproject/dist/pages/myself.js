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

var Myself = function (_wepy$page) {
  _inherits(Myself, _wepy$page);

  function Myself() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Myself);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Myself.__proto__ || Object.getPrototypeOf(Myself)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      height: 0,
      width: 0,
      src: '',
      head: 'http://img0.imgtn.bdimg.com/it/u=814104885,3650636077&fm=27&gp=0.jpg',
      diamond: '../image/diamond.png',
      like: '../image/like.png',
      message: '../image/message.png',
      arrows: '../image/arrows.png',
      smile: '../image/smile.png',
      headset: '../image/headset.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Myself, [{
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

  return Myself;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Myself , 'pages/myself'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c2VsZi5qcyJdLCJuYW1lcyI6WyJNeXNlbGYiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiaGVhZCIsImRpYW1vbmQiLCJsaWtlIiwibWVzc2FnZSIsImFycm93cyIsInNtaWxlIiwiaGVhZHNldCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLFdBQUssRUFIQTtBQUlMQyxZQUFNLHNFQUpEO0FBS0xDLGVBQVMsc0JBTEo7QUFNTEMsWUFBTSxtQkFORDtBQU9MQyxlQUFTLHNCQVBKO0FBUUxDLGNBQVEscUJBUkg7QUFTTEMsYUFBTyxvQkFURjtBQVVMQyxlQUFTO0FBVkosSyxRQVlQQyxPLEdBQVUsRTs7Ozs7NkJBRUQ7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLWCxNQUFMLEdBQWNjLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtWLEtBQUwsR0FBYWEsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBMUJpQyxlQUFLQyxJOztrQkFBcEJyQixNIiwiZmlsZSI6Im15c2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15c2VsZiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNyYzogJycsXG4gICAgaGVhZDogJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTgxNDEwNDg4NSwzNjUwNjM2MDc3JmZtPTI3JmdwPTAuanBnJyxcbiAgICBkaWFtb25kOiAnLi4vaW1hZ2UvZGlhbW9uZC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgbWVzc2FnZTogJy4uL2ltYWdlL21lc3NhZ2UucG5nJyxcbiAgICBhcnJvd3M6ICcuLi9pbWFnZS9hcnJvd3MucG5nJyxcbiAgICBzbWlsZTogJy4uL2ltYWdlL3NtaWxlLnBuZycsXG4gICAgaGVhZHNldDogJy4uL2ltYWdlL2hlYWRzZXQucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==