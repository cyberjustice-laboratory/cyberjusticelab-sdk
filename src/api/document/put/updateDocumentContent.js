/**
 * Update document content.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await this.requestHelper.put({
      url: `${this.config.baseUrlApi}Document/PUT/UpdateDocumentContent`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
