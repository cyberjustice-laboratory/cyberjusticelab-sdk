"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base identity exception.
 * @export
 * @class BaseIdentityException
 */
var BaseIdentityException =
/**
 * Create an instance of BaseIdentityException.
 * @param {any} message
 * @memberof BaseIdentityException
 */
function BaseIdentityException(message) {
  _classCallCheck(this, BaseIdentityException);

  this.type = "BaseIdentityException";
  this.message = message;
};

exports.default = BaseIdentityException;