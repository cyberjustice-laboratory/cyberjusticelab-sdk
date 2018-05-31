/**
 * Delete document attributes.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await requestHelper.delete({
      url: `${config.baseUrlApi}Document/DELETE/DeleteDocumentAttributes`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
