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

var Join = function (_wepy$page) {
  _inherits(Join, _wepy$page);

  function Join() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Join);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Join.__proto__ || Object.getPrototypeOf(Join)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我要参赛'
    }, _this.data = {
      src: [],
      plus: '../image/plus.png',
      height: 0,
      width: 0,
      describe: []
    }, _this.methods = {
      tap: function tap() {
        var self = this;
        if (self.src.length >= 3) {
          _wepy2.default.showToast({
            title: '最多选择三张照片',
            icon: 'success',
            duration: 1000
          });
          return;
        }
        _wepy2.default.chooseImage({
          count: 3,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var arr = self.src;
            var a = arr.concat(res.tempFilePaths);
            if (a.length > 3) {
              _wepy2.default.showToast({
                title: '最多选择三张照片',
                icon: 'success',
                duration: 1000
              });
              return;
            }
            self.src = a;
            self.setData({
              src: a
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Join, [{
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

  return Join;
}(_wepy2.default.page);

exports.default = Join;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicGx1cyIsImhlaWdodCIsIndpZHRoIiwiZGVzY3JpYmUiLCJtZXRob2RzIiwidGFwIiwic2VsZiIsImxlbmd0aCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJhcnIiLCJhIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInNldERhdGEiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sbUJBRkQ7QUFHTEMsY0FBUSxDQUhIO0FBSUxDLGFBQU8sQ0FKRjtBQUtMQyxnQkFBVTtBQUxMLEssUUFPUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLUCxHQUFMLENBQVNRLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxVQURNO0FBRWJDLGtCQUFNLFNBRk87QUFHYkMsc0JBQVU7QUFIRyxXQUFmO0FBS0E7QUFDRDtBQUNELHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFE7QUFFZkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLHNCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQyxNQUFNWixLQUFLUCxHQUFmO0FBQ0EsZ0JBQUlvQixJQUFJRCxJQUFJRSxNQUFKLENBQVdILElBQUlJLGFBQWYsQ0FBUjtBQUNBLGdCQUFJRixFQUFFWixNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQiw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLFVBRE07QUFFYkMsc0JBQU0sU0FGTztBQUdiQywwQkFBVTtBQUhHLGVBQWY7QUFLQTtBQUNEO0FBQ0RMLGlCQUFLUCxHQUFMLEdBQVdvQixDQUFYO0FBQ0FiLGlCQUFLZ0IsT0FBTCxDQUFhO0FBQ1h2QixtQkFBS29CO0FBRE0sYUFBYjtBQUdEO0FBbkJjLFNBQWpCO0FBcUJEO0FBaENPLEs7Ozs7OzZCQWtDRDtBQUNQLFVBQUliLE9BQU8sSUFBWDtBQUNBLHFCQUFLaUIsYUFBTCxDQUFtQjtBQUNqQlAsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWCxlQUFLTCxNQUFMLEdBQWNnQixJQUFJTyxZQUFsQjtBQUNBbEIsZUFBS0osS0FBTCxHQUFhZSxJQUFJUSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFyRCtCLGVBQUtDLEk7O2tCQUFsQi9CLEkiLCJmaWxlIjoiam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvaW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeimgeWPgui1mydcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogW10sXG4gICAgcGx1czogJy4uL2ltYWdlL3BsdXMucG5nJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgZGVzY3JpYmU6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLnNyYy5sZW5ndGggPj0gMykge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfmnIDlpJrpgInmi6nkuInlvKDnhafniYcnLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMyxcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgYXJyID0gc2VsZi5zcmNcbiAgICAgICAgICBsZXQgYSA9IGFyci5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgaWYgKGEubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+acgOWkmumAieaLqeS4ieW8oOeFp+eJhycsXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5zcmMgPSBhXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogYVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=