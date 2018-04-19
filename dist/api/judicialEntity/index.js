"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RequestHelper = _interopRequireDefault(require("../../helpers/RequestHelper"));

var _get = _interopRequireDefault(require("./get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var _default = function _default(config, authState) {
  var api = {
    config: config,
    authState: authState,
    requestHelper: new _RequestHelper.default(authState)
  };
  return Object.assign(api, (0, _get.default)(api));
};

exports.default = _default;