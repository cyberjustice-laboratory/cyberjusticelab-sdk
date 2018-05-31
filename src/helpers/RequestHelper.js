import axios from "axios";

/**
 * Request wrapper helper.
 * @export
 * @class RequestHelper
 */
export default class RequestHelper {
  /**
   * Create an instance of RequestHelper.
   * @memberof RequestHelper
   */
  constructor(authState) {
    if (process.env.NODE_ENV === "development") {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    this.authState = authState;
    this.accessToken = authState && authState.isAuthenticated && !!authState.claims.access_token ? authState.claims.access_token : null;
    this.defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    if (this.accessToken) {
      this.defaultHeaders.Authorization = `bearer ${this.accessToken}`;
    }
  }

  async call(opts, methodType) {
    try {
      return await axios({
        method: methodType,
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data,
        params: opts.params
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * HTTP GET wrapper.
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  get(opts) {
    return this.call(opts, "get");
  }

  /**
   * HTTP POST wrapper.
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  post(opts) {
    return this.call(opts, "post");
  }

  /**
   * HTTP PUT wrapper.
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  put(opts) {
    return this.call(opts, "put");
  }

  /**
   * HTTP PATCH wrapper.
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  patch(opts) {
    return this.call(opts, "patch");
  }

  /**
   * HTTP DELETE wrapper.
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  delete(opts) {
    return this.call(opts, "delete");
  }
}
