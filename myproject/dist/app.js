'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/take', 'pages/work', 'pages/myself', 'pages/describe'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#000000',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        backgroundColor: '#ffffff',
        color: '#999999',
        selectedColor: '#000000',
        list: [{
          pagePath: 'pages/home',
          text: '佳作展示',
          iconPath: './image/icongood.png',
          selectedIconPath: './image/goodone.png'
        }, {
          pagePath: 'pages/work',
          text: '作品一览',
          iconPath: './image/iconwork.png',
          selectedIconPath: './image/workone.png'
        }, {
          pagePath: 'pages/take',
          text: '我要参赛',
          iconPath: './image/iconjoin.png',
          selectedIconPath: './image/joinone.png'
        }, {
          pagePath: 'pages/myself',
          text: '个人信息',
          iconPath: './image/iconmine.png',
          selectedIconPath: './image/mineone.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWlERSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBOUNkQSxNQThDYyxHQTlDTDtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLFlBRkssRUFHTCxZQUhLLEVBSUwsY0FKSyxFQUtMLGdCQUxLLENBREE7QUFRUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVJEO0FBY1BDLGNBQVE7QUFDTkMseUJBQWlCLFNBRFg7QUFFTkMsZUFBTyxTQUZEO0FBR05DLHVCQUFlLFNBSFQ7QUFJTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLFlBREw7QUFFTEMsZ0JBQU0sTUFGRDtBQUdMQyxvQkFBVSxzQkFITDtBQUlMQyw0QkFBa0I7QUFKYixTQUFELEVBS0g7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQUxHLEVBVUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQVZHLEVBZUg7QUFDREgsb0JBQVUsY0FEVDtBQUVEQyxnQkFBTSxNQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQWZHO0FBSkE7QUFkRCxLQThDSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGWTtBQUdiOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRUtDLEMsRUFBRztBQUNQLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFoRjBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2hvbWUnLFxuICAgICAgJ3BhZ2VzL3Rha2UnLFxuICAgICAgJ3BhZ2VzL3dvcmsnLFxuICAgICAgJ3BhZ2VzL215c2VsZicsXG4gICAgICAncGFnZXMvZGVzY3JpYmUnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBjb2xvcjogJyM5OTk5OTknLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcbiAgICAgICAgdGV4dDogJ+S9s+S9nOWxleekuicsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9pY29uZ29vZC5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9nb29kb25lLnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy93b3JrJyxcbiAgICAgICAgdGV4dDogJ+S9nOWTgeS4gOiniCcsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9pY29ud29yay5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS93b3Jrb25lLnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy90YWtlJyxcbiAgICAgICAgdGV4dDogJ+aIkeimgeWPgui1mycsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9pY29uam9pbi5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9qb2lub25lLnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9teXNlbGYnLFxuICAgICAgICB0ZXh0OiAn5Liq5Lq65L+h5oGvJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlL2ljb25taW5lLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL21pbmVvbmUucG5nJ1xuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgdGhpcy50ZXN0QXN5bmMoKVxuICB9XG5cbiAgc2xlZXAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=