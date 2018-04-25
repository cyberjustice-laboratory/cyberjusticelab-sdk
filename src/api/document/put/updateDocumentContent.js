/**
 * Update document content.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 */
export default async function(model) {
  try {
    await this.requestHelper.put({
      url: `${this.config.baseUrlApi}Document/PUT/UpdateDocumentContent`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
