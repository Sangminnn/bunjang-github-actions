"use strict";

require("regenerator-runtime/runtime");

var _dateFns = require("date-fns");

var _remotes = require("./remotes");

var _github = _interopRequireDefault(require("./github.js"));

var _candidates = _interopRequireDefault(require("./data/candidates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var sections, body, time;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sections = [];
            _context2.next = 3;
            return Promise.all(_candidates["default"].map(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(candidate) {
                var items, section;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _remotes.fetchItems)(candidate);

                      case 2:
                        items = _context.sent;
                        section = ["# ".concat(candidate, ": ").concat(items.length, "\uAC1C"), ""].concat(_toConsumableArray(items.map(function (_ref2) {
                          var name = _ref2.name,
                              pid = _ref2.pid,
                              price = _ref2.price,
                              productImage = _ref2.productImage,
                              updateTime = _ref2.updateTime;
                          var title = "## [".concat(name, "]");
                          var thumbnail = "<img style=\"width: 100%; height: 500px;\" src=".concat(productImage, " />");
                          var kprice = "".concat(price, " \uC6D0");
                          return [title, thumbnail, "", " | \uC81C\uBAA9 | \uAC00\uACA9 |", " |  -  |  -  |", " | ".concat(name, " | ").concat(kprice, " |")].join("\n");
                        }))).join("\n");
                        sections.push(section);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 3:
            body = sections.join("\n\n");
            time = Date.now();
            (0, _github["default"])("".concat((0, _dateFns.format)(Date.now(), "yyyy-MM-dd"), "\uC77C \uC0C8\uB85C \uC62C\uB77C\uC628 \uB9E4\uBB3C"), body);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _main.apply(this, arguments);
}

;
main();