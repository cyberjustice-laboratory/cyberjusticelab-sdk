"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getFiles = _interopRequireDefault(require("./getFiles"));

var _getFile = _interopRequireDefault(require("./getFile"));

var _createFile = _interopRequireDefault(require("./createFile"));

var _attachRepresentatives = _interopRequireDefault(require("./attachRepresentatives"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
var _default = function _default(api) {
  return {
    getFiles: _getFiles.default.bind(api),
    getFile: _getFile.default.bind(api),
    createFile: _createFile.default.bind(api),
    attachRepresentatives: _attachRepresentatives.default.bind(api)
  };
};

exports.default = _default;