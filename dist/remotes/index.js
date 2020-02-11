"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchItems = fetchItems;

var _axios = _interopRequireDefault(require("axios"));

var _queryString = require("query-string");

var _Items = _interopRequireDefault(require("../models/Items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiEndpoint = 'https://api.bunjang.co.kr/api/1/find_v2.json';

function fetchItems(_x) {
  return _fetchItems.apply(this, arguments);
}

function _fetchItems() {
  _fetchItems = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(candidate) {
    var query, url, _ref, data, list;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // api 에 들어가는 코드들을 분석한 결과 q만 search data로 변경
            // 정확한 request-id 는 모르겠지만 성공코드를 따왔음.
            query = {
              q: candidate,
              order: 'date',
              page: 0,
              request_id: 2020208153534,
              stat_uid: 7823918,
              stat_device: 'w',
              n: 100,
              stat_category_required: 1,
              req_ref: 'search',
              version: 4
            };
            url = "".concat(apiEndpoint, "?").concat((0, _queryString.stringify)(query));
            _context.next = 4;
            return _axios["default"].get(url, {
              headers: {
                "content-type": "application/json"
              }
            });

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            list = data.list;
            return _context.abrupt("return", list.map(function (payload) {
              return new _Items["default"](payload);
            }).filter(function (item) {
              return item.isNew;
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchItems.apply(this, arguments);
}