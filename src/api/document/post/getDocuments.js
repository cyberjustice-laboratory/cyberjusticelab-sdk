/**
 * Get a list of documents.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @return {Object} List of documents.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}Document/POST/Documents`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
