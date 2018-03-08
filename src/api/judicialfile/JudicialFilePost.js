// Imports base class
import JudicialFileBase from "./JudicialFileBase";

// Imports objects
import judicialFileApiRequest from "./objects/judicialFileApiRequest";
import judicialFileApiResponse from "./objects/judicialFileApiResponse";
import JudicialFileCreateModel from "./objects/JudicialFileCreateModel";

/**
 * Judicial File: POST API.
 *
 * @export
 * @class JudicialFilePost
 * @extends {JudicialFile}
 */
export default class JudicialFilePost extends JudicialFileBase {
  /**
   * Creates an instance of JudicialFilePost.
   * @memberof JudicialFilePost
   */
  constructor(authState) {
    super(authState);
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

  /**
   * Creates a judicial file.
   *
   * @param {JudicialFileCreateModel} model
   * @returns {guid} id of the judicial file
   * @memberof JudicialFilePost
   */
  CreateFile(model) {
    return new Promise((resolve, reject) => {
      this.requestHelper
        .post({
          url: "https://localhost:441/JudicialFile/POST/CreateJudicialFile",
          data: model
        })
        .then(response => {
          resolve(...response, {});
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  }
}
