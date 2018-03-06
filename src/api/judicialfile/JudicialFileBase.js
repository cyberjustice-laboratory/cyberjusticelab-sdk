// Import helpers
import RequestHelper from "../../helpers/RequestHelper";

/**
 * Judicial File base class.
 *
 * @export
 * @class JudicialFileBase
 */
export default class JudicialFileBase {
  /**
   * Creates an instance of JudicialFileBase.
   * @memberof JudicialFileBase
   */
  constructor(authState) {
    this.authState = authState;
    this.requestHelper = new RequestHelper(authState);
  }
}
