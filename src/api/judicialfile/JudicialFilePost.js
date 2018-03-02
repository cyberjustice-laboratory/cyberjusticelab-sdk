// Imports base class
import JudicialFile from "./JudicialFile";

// Imports objects
import judicialFileApiRequest from "./objects/judicialFileApiRequest";
import judicialFileApiResponse from "./objects/judicialFileApiResponse";

/**
 * Judicial File: POST API.
 *
 * @export
 * @class JudicialFilePost
 * @extends {JudicialFile}
 */
export default class JudicialFilePost extends JudicialFile {
  /**
   * Creates an instance of JudicialFilePost.
   * @memberof JudicialFilePost
   */
  constructor() {
    super();
  }

  /**
   * Gets files list.
   *
   * @param {judicialFileApiRequest} request
   * @return {judicialFileApiResponse} response
   * @memberof JudicialFilePost
   */
  GetFiles(request) {
    return new Promise((resolve, reject) => {
      this.requestHelper
        .post({
          url: "https://localhost:441/JudicialFile/POST/Files",
          data: request
        })
        .then(response => {
          resolve(...response, judicialFileApiResponse);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }
}
