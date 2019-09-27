"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_chai["default"].use(_chaiHttp["default"]);

describe('Tests the API', function () {
  it('Checks the status of the API', function () {
    _chai["default"].request(_index["default"]).get('/status').end(function (err, res) {
      (0, _chai.expect)(res.status).equals(200);
      (0, _chai.expect)(res.body.message).equals('API running...');
      (0, _chai.expect)(res.body).to.be.an('object');
    });
  });
  it('GET /users route', function () {
    _chai["default"].request(_index["default"]).get('/users').end(function (err, res) {
      (0, _chai.expect)(res.status).equals(200);
      (0, _chai.expect)(res.body.message).equals('Success');
      (0, _chai.expect)(res.body).to.be.an('object');
      (0, _chai.expect)(res.body.data).to.be.an('array');
    });
  });
});