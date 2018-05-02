/**
 * Get a document as a Base64String.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Guid} Base64String representation of the document.
 */
export default async function(model) {
  try {
    return await this.requestHelper.get({
      url: `${this.config.baseUrlApi}Document/GET/DocumentMetadata`,
      params: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
