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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var _default = function _default(config, authState) {
  var api = {
    config: config,
    authState: authState,
    requestHelper: new _RequestHelper.default(authState)
  };
  return Object.assign(api, (0, _delete.default)(api), (0, _get.default)(api), (0, _patch.default)(api), (0, _post.default)(api), (0, _put.default)(api));
};

exports.default = _default;