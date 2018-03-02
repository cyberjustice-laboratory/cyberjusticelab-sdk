// Import helpers
import RequestHelper from "../../helpers/RequestHelper";

/**
 * Judicial File base class.
 *
 * @export
 * @class JudicialFile
 */
export default class JudicialFile {
  /**
   * Creates an instance of JudicialFile.
   * @memberof JudicialFile
   */
  constructor(authState) {
    this.authState = authState;
    this.requestHelper = new RequestHelper(authState);
  }
}
