"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deleteParty = _interopRequireDefault(require("./deleteParty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Exports
var _default = function _default(api) {
  return {
    deleteParty: _deleteParty.default.bind(api)
  };
};

exports.default = _default;