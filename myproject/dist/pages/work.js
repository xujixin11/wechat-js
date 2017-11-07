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
      deer: 'http://img1.3lian.com/2015/a1/108/d/18.jpg',
      rabbit: 'http://img1.3lian.com/2015/a1/108/d/20.jpg',
      zebra: 'http://a0.att.hudong.com/63/17/300000868465128471179866541_950.jpg',
      crow: 'http://image1.nphoto.net/news/image/201111/a47599c7d6729661.jpg',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuanMiXSwibmFtZXMiOlsiV29yayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiaGVhZCIsInRpZ2VyIiwicGhvdG8iLCJkZWVyIiwicmFiYml0IiwiemVicmEiLCJjcm93Iiwid2hpdGUiLCJncmF5IiwiZ3JleSIsIndoaXRlb25lIiwiYmxhY2siLCJkYXJrIiwibWV0aG9kcyIsInRvdGFsIiwic2VsZiIsInBvcHVsYXIiLCJ0b2RheSIsImRlc2NyaWJlIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsWUFBTSxzRUFGRDtBQUdMQyxhQUFPLDRDQUhGO0FBSUxDLGFBQU8sdUVBSkY7QUFLTEMsWUFBTSw0Q0FMRDtBQU1MQyxjQUFRLDRDQU5IO0FBT0xDLGFBQU8sb0VBUEY7QUFRTEMsWUFBTSxpRUFSRDtBQVNMQyxhQUFPLE9BVEY7QUFVTEMsWUFBTSxNQVZEO0FBV0xDLFlBQU0sTUFYRDtBQVlMQyxnQkFBVSxPQVpMO0FBYUxDLGFBQU8sT0FiRjtBQWNMQyxZQUFNO0FBZEQsSyxRQWdCUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1IsS0FBTCxHQUFhLE9BQWI7QUFDQVEsYUFBS1AsSUFBTCxHQUFZLE1BQVo7QUFDQU8sYUFBS04sSUFBTCxHQUFZLE1BQVo7QUFDQU0sYUFBS0wsUUFBTCxHQUFnQixPQUFoQjtBQUNBSyxhQUFLSixLQUFMLEdBQWEsT0FBYjtBQUNBSSxhQUFLSCxJQUFMLEdBQVksT0FBWjtBQUNELE9BVE87QUFVUkksYUFWUSxxQkFVRTtBQUNSLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUixLQUFMLEdBQWEsTUFBYjtBQUNBUSxhQUFLUCxJQUFMLEdBQVksT0FBWjtBQUNBTyxhQUFLTixJQUFMLEdBQVksTUFBWjtBQUNBTSxhQUFLTCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FLLGFBQUtKLEtBQUwsR0FBYSxPQUFiO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0QsT0FsQk87QUFtQlJLLFdBbkJRLG1CQW1CQTtBQUNOLFlBQUlGLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixLQUFMLEdBQWEsTUFBYjtBQUNBUSxhQUFLUCxJQUFMLEdBQVksTUFBWjtBQUNBTyxhQUFLTixJQUFMLEdBQVksT0FBWjtBQUNBTSxhQUFLSixLQUFMLEdBQWEsT0FBYjtBQUNBSSxhQUFLTCxRQUFMLEdBQWdCLE9BQWhCO0FBQ0FLLGFBQUtILElBQUwsR0FBWSxPQUFaO0FBQ0QsT0EzQk87QUE0QlJNLGNBNUJRLHNCQTRCRztBQUNULHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBaENPLEs7Ozs7OzZCQWtDRCxDQUNSOzs7O0VBdkQrQixlQUFLQyxJOztrQkFBbEIxQixJIiwiZmlsZSI6IndvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkvZzlk4HkuIDop4gnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGhlYWQ6ICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT04MTQxMDQ4ODUsMzY1MDYzNjA3NyZmbT0yNyZncD0wLmpwZycsXG4gICAgdGlnZXI6ICdodHRwOi8vaW1nMS4zbGlhbi5jb20vMjAxNS9hMS8xMDgvZC8yNS5qcGcnLFxuICAgIHBob3RvOiAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9Mjc3MDY5MTAxMSwxMDAxNjQ1NDImZm09MjE0JmdwPTAuanBnJyxcbiAgICBkZWVyOiAnaHR0cDovL2ltZzEuM2xpYW4uY29tLzIwMTUvYTEvMTA4L2QvMTguanBnJyxcbiAgICByYWJiaXQ6ICdodHRwOi8vaW1nMS4zbGlhbi5jb20vMjAxNS9hMS8xMDgvZC8yMC5qcGcnLFxuICAgIHplYnJhOiAnaHR0cDovL2EwLmF0dC5odWRvbmcuY29tLzYzLzE3LzMwMDAwMDg2ODQ2NTEyODQ3MTE3OTg2NjU0MV85NTAuanBnJyxcbiAgICBjcm93OiAnaHR0cDovL2ltYWdlMS5ucGhvdG8ubmV0L25ld3MvaW1hZ2UvMjAxMTExL2E0NzU5OWM3ZDY3Mjk2NjEuanBnJyxcbiAgICB3aGl0ZTogJ3doaXRlJyxcbiAgICBncmF5OiAnZ3JheScsXG4gICAgZ3JleTogJ2dyZXknLFxuICAgIHdoaXRlb25lOiAnd2hpdGUnLFxuICAgIGJsYWNrOiAnYmxhY2snLFxuICAgIGRhcms6ICdibGFjaydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRvdGFsKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndoaXRlID0gJ3doaXRlJ1xuICAgICAgc2VsZi5ncmF5ID0gJ2dyYXknXG4gICAgICBzZWxmLmdyZXkgPSAnZ3JleSdcbiAgICAgIHNlbGYud2hpdGVvbmUgPSAnd2hpdGUnXG4gICAgICBzZWxmLmJsYWNrID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5kYXJrID0gJ2JsYWNrJ1xuICAgIH0sXG4gICAgcG9wdWxhcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53aGl0ZSA9ICdncmF5J1xuICAgICAgc2VsZi5ncmF5ID0gJ3doaXRlJ1xuICAgICAgc2VsZi5ncmV5ID0gJ2dyZXknXG4gICAgICBzZWxmLndoaXRlb25lID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5ibGFjayA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuZGFyayA9ICdibGFjaydcbiAgICB9LFxuICAgIHRvZGF5KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndoaXRlID0gJ2dyZXknXG4gICAgICBzZWxmLmdyYXkgPSAnZ3JheSdcbiAgICAgIHNlbGYuZ3JleSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuYmxhY2sgPSAnYmxhY2snXG4gICAgICBzZWxmLndoaXRlb25lID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5kYXJrID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgZGVzY3JpYmUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2Rlc2NyaWJlJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=