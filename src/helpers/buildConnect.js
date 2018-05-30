// Imports
import defaultConfig from "../config";
import RequestHelper from "../helpers/RequestHelper";

/**
 * Connects each function with the configuration and the requestHelper.
 * @param {*} appConfig The configuration provided by the application.
 * @param {*} auth
 */
export default (appConfig, auth) => {
  const config = Object.assign({}, defaultConfig, appConfig);
  const requestHelper = new RequestHelper(auth);
  return func => params => func(requestHelper, config)(params);
};