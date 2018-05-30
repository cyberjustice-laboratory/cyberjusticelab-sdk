/**
 * Delete document attributes.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
