// Import helpers
import RequestHelper from "./requestHelper";

/**
 *
 *
 * @export
 * @param {Function} func
 * @param {*} auth
 */
export default func => auth => func(new RequestHelper(auth));
