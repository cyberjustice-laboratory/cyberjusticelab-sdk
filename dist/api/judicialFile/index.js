"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RequestHelper = _interopRequireDefault(require("../../helpers/RequestHelper"));

var _delete = _interopRequireDefault(require("./delete"));

var _get = _interopRequireDefault(require("./get"));

var _patch = _interopRequireDefault(require("./patch"));

var _post = _interopRequireDefault(require("./post"));

var _put = _interopRequireDefault(require("./put"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(config, authState) {
  var api = {
    config: config,
    authState: authState,
    requestHelper: new _RequestHelper.default(authState)
  };
  return Object.assign(api, (0, _delete.default)(api), (0, _get.default)(_this), (0, _patch.default)(_this), (0, _post.default)(_this), (0, _put.default)(_this));
};

exports.default = _default;