/**
 * Base identity exception.
 *
 * @export
 * @class BaseIdentityException
 */
export default class BaseIdentityException {
  /**
   * Creates an instance of BaseIdentityException.
   * @param {any} message
   * @memberof BaseIdentityException
   */
  constructor(message) {
    this.type = "BaseIdentityException";
    this.message = message;
  }
}
