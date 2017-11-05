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
    }, _this.methods = {
      contact: function contact() {
        _wepy2.default.navigateTo({
          url: './contact'
        });
      },
      phonecall: function phonecall() {
        _wepy2.default.makePhoneCall({
          phoneNumber: '15100323326'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15c2VsZi5qcyJdLCJuYW1lcyI6WyJNeXNlbGYiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiaGVhZCIsImRpYW1vbmQiLCJsaWtlIiwibWVzc2FnZSIsImFycm93cyIsInNtaWxlIiwiaGVhZHNldCIsIm1ldGhvZHMiLCJjb250YWN0IiwibmF2aWdhdGVUbyIsInVybCIsInBob25lY2FsbCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLFlBQU0sc0VBSkQ7QUFLTEMsZUFBUyxzQkFMSjtBQU1MQyxZQUFNLG1CQU5EO0FBT0xDLGVBQVMsc0JBUEo7QUFRTEMsY0FBUSxxQkFSSDtBQVNMQyxhQUFPLG9CQVRGO0FBVUxDLGVBQVM7QUFWSixLLFFBWVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxlQU5RLHVCQU1JO0FBQ1YsdUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLHVCQUFhO0FBREksU0FBbkI7QUFHRDtBQVZPLEs7Ozs7OzZCQVlEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWEgsZUFBS2pCLE1BQUwsR0FBY29CLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtoQixLQUFMLEdBQWFtQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFwQ2lDLGVBQUtDLEk7O2tCQUFwQjNCLE0iLCJmaWxlIjoibXlzZWxmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlzZWxmIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc3JjOiAnJyxcbiAgICBoZWFkOiAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9ODE0MTA0ODg1LDM2NTA2MzYwNzcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGRpYW1vbmQ6ICcuLi9pbWFnZS9kaWFtb25kLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICBtZXNzYWdlOiAnLi4vaW1hZ2UvbWVzc2FnZS5wbmcnLFxuICAgIGFycm93czogJy4uL2ltYWdlL2Fycm93cy5wbmcnLFxuICAgIHNtaWxlOiAnLi4vaW1hZ2Uvc21pbGUucG5nJyxcbiAgICBoZWFkc2V0OiAnLi4vaW1hZ2UvaGVhZHNldC5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb250YWN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jb250YWN0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBob25lY2FsbCgpIHtcbiAgICAgIHdlcHkubWFrZVBob25lQ2FsbCh7XG4gICAgICAgIHBob25lTnVtYmVyOiAnMTUxMDAzMjMzMjYnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19