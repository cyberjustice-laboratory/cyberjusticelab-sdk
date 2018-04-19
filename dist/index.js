"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

var _judicialFile = _interopRequireDefault(require("./api/judicialFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Get base configuration
var initConfig = _config.default; // Exports

var _default = {
  judicialFileApi: function judicialFileApi(authState) {
    return (0, _judicialFile.default)(initConfig, authState);
  }
};
exports.default = _default;