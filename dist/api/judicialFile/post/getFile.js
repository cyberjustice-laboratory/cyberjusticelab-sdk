"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _judicialFileApiResponse = _interopRequireDefault(require("../_objects/judicialFileApiResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * Get a file.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {judicialFileApiRequest} model
 * @return {Object} a file.
 */
function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(model) {
    var response, bindResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return this.requestHelper.post({
              url: "".concat(this.config.baseUrlApi, "JudicialFile/POST/Files"),
              data: Object.assign({}, this.config.entity, model)
            });

          case 3:
            response = _context.sent;
            bindResponse = Object.assign({}, response, _judicialFileApiResponse.default);
            return _context.abrupt("return", bindResponse.files.length > 0 ? bindResponse.files[0] : null);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));
  return _ref.apply(this, arguments);
}