// import JudicialFileCreateModel from "../objects/JudicialFileCreateModel";

/**
 * Creates a judicial file.
 *
 * @param {JudicialFileCreateModel} model
 * @returns {guid} id of the judicial file
 */
export default requestHelper => model =>
  new Promise((resolve, reject) => {
    requestHelper
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
