// import judicialFileApiRequest from '../objects/judicialFileApiRequest';
import judicialFileApiResponse from "../objects/judicialFileApiResponse";

/**
 * Gets files list.
 *
 * @param {judicialFileApiRequest} request
 * @return {judicialFileApiResponse} response
 */
export default requestHelper => request =>
  new Promise((resolve, reject) => {
    requestHelper
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
