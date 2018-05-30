/**
 * Get a document as a Base64String.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Guid} Base64String representation of the document.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.get({
      url: `${config.baseUrlApi}Document/GET/DocumentContent`,
      params: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
