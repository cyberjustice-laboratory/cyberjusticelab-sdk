"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Request wrapper helper.
 * @export
 * @class RequestHelper
 */
var RequestHelper =
/*#__PURE__*/
function () {
  /**
   * Create an instance of RequestHelper.
   * @memberof RequestHelper
   */
  function RequestHelper(authState) {
    _classCallCheck(this, RequestHelper);

    if (process.env.NODE_ENV === "development") {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }

    this.authState = authState;
    this.accessToken = authState.isAuthenticated && !!authState.claims.access_token ? authState.claims.access_token : null;
    this.defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.accessToken) {
      this.defaultHeaders.Authorization = "bearer ".concat(this.accessToken);
    }
  }

  _createClass(RequestHelper, [{
    key: "call",
    value: function call(opts, methodType) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        (0, _axios.default)({
          method: methodType,
          url: opts.url,
          headers: _this.defaultHeaders,
          data: opts.data
        }).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          reject(new Error(error));
        });
      });
    }
    /**
     * HTTP GET wrapper.
     * @param {{ url: null, data: {} }} opts
     * @returns {any}
     * @memberof RequestHelper
     */

  }, {
    key: "get",
    value: function get(opts) {
      return this.call(opts, "get");
    }
    /**
     * HTTP POST wrapper.
     * @param {{ url: null, data: {} }} opts
     * @returns {any}
     * @memberof RequestHelper
     */

  }, {
    key: "post",
    value: function post(opts) {
      return this.call(opts, "post");
    }
    /**
     * HTTP PUT wrapper.
     * @param {{ url: null, data: {} }} opts
     * @returns {any}
     * @memberof RequestHelper
     */

  }, {
    key: "put",
    value: function put(opts) {
      return this.call(opts, "put");
    }
    /**
     * HTTP PATCH wrapper.
     * @param {{ url: null, data: {} }} opts
     * @returns {any}
     * @memberof RequestHelper
     */

  }, {
    key: "patch",
    value: function patch(opts) {
      return this.call(opts, "patch");
    }
    /**
     * HTTP DELETE wrapper.
     * @param {{ url: null, data: {} }} opts
     * @returns {any}
     * @memberof RequestHelper
     */

  }, {
    key: "delete",
    value: function _delete(opts) {
      return this.call(opts, "delete");
    }
  }]);

  return RequestHelper;
}();

exports.default = RequestHelper;