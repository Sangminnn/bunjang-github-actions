"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dateFns = require("date-fns");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item = function Item(payload) {
  var _this = this;

  _classCallCheck(this, Item);

  _defineProperty(this, "isNew", function () {
    var now = (0, _dateFns.addHours)(Date.now(), 9);
    var updateTime = new Date(_this.updateTime).toISOString().slice(0, 10);
    var currentTime = now.toISOString().slice(0, 10);
    var diff = (0, _dateFns.differenceInCalendarDays)(currentTime, updateTime);
    return diff < 2;
  });

  var name = payload.name,
      pid = payload.pid,
      price = payload.price,
      product_image = payload.product_image,
      update_time = payload.update_time;
  this.name = name;
  this.pid = pid;
  this.price = price;
  this.productImage = product_image;
  this.updateTime = update_time;
};

exports["default"] = Item;