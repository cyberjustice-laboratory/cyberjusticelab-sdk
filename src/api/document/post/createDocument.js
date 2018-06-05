/**
 * Create a document.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @returns {Guid} Id of the document.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}Document/POST/CreateDocument`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
