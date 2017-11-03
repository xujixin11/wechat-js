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

var Work = function (_wepy$page) {
  _inherits(Work, _wepy$page);

  function Work() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Work);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Work.__proto__ || Object.getPrototypeOf(Work)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作品一览'
    }, _this.data = {
      src: '',
      head: 'http://img0.imgtn.bdimg.com/it/u=814104885,3650636077&fm=27&gp=0.jpg',
      tiger: 'http://img1.3lian.com/2015/a1/108/d/25.jpg',
      photo: 'http://img4.imgtn.bdimg.com/it/u=2770691011,100164542&fm=214&gp=0.jpg',
      white: 'white',
      gray: 'gray',
      grey: 'grey',
      whiteone: 'white',
      black: 'black',
      dark: 'black'
    }, _this.methods = {
      total: function total() {
        var self = this;
        self.white = 'white';
        self.gray = 'gray';
        self.grey = 'grey';
        self.whiteone = 'white';
        self.black = 'black';
        self.dark = 'black';
      },
      popular: function popular() {
        var self = this;
        self.white = 'gray';
        self.gray = 'white';
        self.grey = 'grey';
        self.whiteone = 'black';
        self.black = 'white';
        self.dark = 'black';
        self.animal = 'tiger';
      },
      today: function today() {
        var self = this;
        self.white = 'grey';
        self.gray = 'gray';
        self.grey = 'white';
        self.black = 'black';
        self.whiteone = 'black';
        self.dark = 'white';
      },
      describe: function describe() {
        _wepy2.default.navigateTo({
          url: './describe'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Work, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Work;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Work , 'pages/work'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuanMiXSwibmFtZXMiOlsiV29yayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaGVhZCIsInRpZ2VyIiwicGhvdG8iLCJ3aGl0ZSIsImdyYXkiLCJncmV5Iiwid2hpdGVvbmUiLCJibGFjayIsImRhcmsiLCJtZXRob2RzIiwidG90YWwiLCJzZWxmIiwicG9wdWxhciIsImFuaW1hbCIsInRvZGF5IiwiZGVzY3JpYmUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxZQUFNLHNFQUZEO0FBR0xDLGFBQU8sNENBSEY7QUFJTEMsYUFBTyx1RUFKRjtBQUtMQyxhQUFPLE9BTEY7QUFNTEMsWUFBTSxNQU5EO0FBT0xDLFlBQU0sTUFQRDtBQVFMQyxnQkFBVSxPQVJMO0FBU0xDLGFBQU8sT0FURjtBQVVMQyxZQUFNO0FBVkQsSyxRQVlQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixLQUFMLEdBQWEsT0FBYjtBQUNBUSxhQUFLUCxJQUFMLEdBQVksTUFBWjtBQUNBTyxhQUFLTixJQUFMLEdBQVksTUFBWjtBQUNBTSxhQUFLTCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FLLGFBQUtKLEtBQUwsR0FBYSxPQUFiO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0QsT0FUTztBQVVSSSxhQVZRLHFCQVVFO0FBQ1IsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLEtBQUwsR0FBYSxNQUFiO0FBQ0FRLGFBQUtQLElBQUwsR0FBWSxPQUFaO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxNQUFaO0FBQ0FNLGFBQUtMLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUssYUFBS0osS0FBTCxHQUFhLE9BQWI7QUFDQUksYUFBS0gsSUFBTCxHQUFZLE9BQVo7QUFDQUcsYUFBS0UsTUFBTCxHQUFjLE9BQWQ7QUFDRCxPQW5CTztBQW9CUkMsV0FwQlEsbUJBb0JBO0FBQ04sWUFBSUgsT0FBTyxJQUFYO0FBQ0FBLGFBQUtSLEtBQUwsR0FBYSxNQUFiO0FBQ0FRLGFBQUtQLElBQUwsR0FBWSxNQUFaO0FBQ0FPLGFBQUtOLElBQUwsR0FBWSxPQUFaO0FBQ0FNLGFBQUtKLEtBQUwsR0FBYSxPQUFiO0FBQ0FJLGFBQUtMLFFBQUwsR0FBZ0IsT0FBaEI7QUFDQUssYUFBS0gsSUFBTCxHQUFZLE9BQVo7QUFDRCxPQTVCTztBQTZCUk8sY0E3QlEsc0JBNkJHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFqQ08sSzs7Ozs7NkJBbUNELENBQ1I7Ozs7RUFwRCtCLGVBQUtDLEk7O2tCQUFsQnZCLEkiLCJmaWxlIjoid29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmsgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S9nOWTgeS4gOiniCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVhZDogJ2h0dHA6Ly9pbWcwLmltZ3RuLmJkaW1nLmNvbS9pdC91PTgxNDEwNDg4NSwzNjUwNjM2MDc3JmZtPTI3JmdwPTAuanBnJyxcbiAgICB0aWdlcjogJ2h0dHA6Ly9pbWcxLjNsaWFuLmNvbS8yMDE1L2ExLzEwOC9kLzI1LmpwZycsXG4gICAgcGhvdG86ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0yNzcwNjkxMDExLDEwMDE2NDU0MiZmbT0yMTQmZ3A9MC5qcGcnLFxuICAgIHdoaXRlOiAnd2hpdGUnLFxuICAgIGdyYXk6ICdncmF5JyxcbiAgICBncmV5OiAnZ3JleScsXG4gICAgd2hpdGVvbmU6ICd3aGl0ZScsXG4gICAgYmxhY2s6ICdibGFjaycsXG4gICAgZGFyazogJ2JsYWNrJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdG90YWwoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYud2hpdGUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ3JleSA9ICdncmV5J1xuICAgICAgc2VsZi53aGl0ZW9uZSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuYmxhY2sgPSAnYmxhY2snXG4gICAgICBzZWxmLmRhcmsgPSAnYmxhY2snXG4gICAgfSxcbiAgICBwb3B1bGFyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndoaXRlID0gJ2dyYXknXG4gICAgICBzZWxmLmdyYXkgPSAnd2hpdGUnXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JleSdcbiAgICAgIHNlbGYud2hpdGVvbmUgPSAnYmxhY2snXG4gICAgICBzZWxmLmJsYWNrID0gJ3doaXRlJ1xuICAgICAgc2VsZi5kYXJrID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5hbmltYWwgPSAndGlnZXInXG4gICAgfSxcbiAgICB0b2RheSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53aGl0ZSA9ICdncmV5J1xuICAgICAgc2VsZi5ncmF5ID0gJ2dyYXknXG4gICAgICBzZWxmLmdyZXkgPSAnd2hpdGUnXG4gICAgICBzZWxmLmJsYWNrID0gJ2JsYWNrJ1xuICAgICAgc2VsZi53aGl0ZW9uZSA9ICdibGFjaydcbiAgICAgIHNlbGYuZGFyayA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIGRlc2NyaWJlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9kZXNjcmliZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuIl19