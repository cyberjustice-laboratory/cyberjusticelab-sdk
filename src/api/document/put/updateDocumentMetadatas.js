/**
 * Update a document's attributes.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 */
export default async function(model) {
  try {
    await this.requestHelper.put({
      url: `${this.config.baseUrlApi}Document/PUT/UpdateDocumentMetadatas`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
