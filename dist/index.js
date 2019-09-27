"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var users = [{
  id: 1,
  name: 'John',
  job: 'carpenter'
}, {
  id: 2,
  name: 'Jill',
  job: 'carpenter'
}, {
  id: 3,
  name: 'Jake',
  job: 'carpenter'
}];
app.get('/status', function (req, res) {
  res.send({
    message: 'API running...'
  });
});
app.get('/users', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Success',
    data: users
  });
});
app.listen(process.env.PORT || 5000, function () {
  console.log('App listening on PORT 5k');
});
var _default = app;
exports["default"] = _default;