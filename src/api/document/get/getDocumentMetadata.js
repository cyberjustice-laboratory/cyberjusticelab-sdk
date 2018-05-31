/**
 * Get a document metadata.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @return {Guid} Metadata of the document.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.get({
      url: `${config.baseUrlApi}Document/GET/DocumentMetadata`,
      params: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
