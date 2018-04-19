"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _updateFileAttributes = _interopRequireDefault(require("./updateFileAttributes"));

var _updatePartyRepresentativesAttributes = _interopRequireDefault(require("./updatePartyRepresentativesAttributes"));

var _upsertParty = _interopRequireDefault(require("./upsertParty"));

var _upsertPartyContact = _interopRequireDefault(require("./upsertPartyContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Imports
// Exports
var _default = function _default(api) {
  return {
    updateFileAttributes: _updateFileAttributes.default.bind(api),
    updatePartyRepresentativesAttributes: _updatePartyRepresentativesAttributes.default.bind(api),
    upsertParty: _upsertParty.default.bind(api),
    upsertPartyContact: _upsertPartyContact.default.bind(api)
  };
};

exports.default = _default;