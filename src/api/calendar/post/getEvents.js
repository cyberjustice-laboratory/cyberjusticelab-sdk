/**
 * Get a list of documents.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Object} List of documents.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}Calendar/POST/Events`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
