import axios from "axios";

/**
 * Request wrapper helper.
 *
 * @export
 * @class RequestHelper
 */
export default class RequestHelper {
  /**
   * Creates an instance of RequestHelper.
   * @memberof RequestHelper
   */
  constructor(authState) {
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
      this.defaultHeaders.Authorization = `bearer ${this.accessToken}`;
    }
  }

  /**
   * HTTP GET wrapper.
   *
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  get(opts) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  /**
   * HTTP POST wrapper.
   *
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  post(opts) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  /**
   * HTTP PUT wrapper.
   *
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  put(opts) {
    return new Promise((resolve, reject) => {
      axios({
        method: "put",
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  /**
   * HTTP PATCH wrapper.
   *
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  patch(opts) {
    return new Promise((resolve, reject) => {
      axios({
        method: "patch",
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  /**
   * HTTP DELETE wrapper.
   *
   * @param {{ url: null, data: {} }} opts
   * @returns {any}
   * @memberof RequestHelper
   */
  delete(opts) {
    return new Promise((resolve, reject) => {
      axios({
        method: "delete",
        url: opts.url,
        headers: this.defaultHeaders,
        data: opts.data
      })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }

  bidon(bidonArg) {
    console.log(bidonArg);
    this.toString();
  }
}
