"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getJudicialEntityID = _interopRequireDefault(require("./getJudicialEntityID"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var _default = function _default(api) {
  return {
    getJudicialEntityID: _getJudicialEntityID.default.bind(api)
  };
};

exports.default = _default;