/**
 * Get a list of documents.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Object} List of documents.
 */
export default async function(model) {
  try {
    return await this.requestHelper.post({
      url: `${this.config.baseUrlApi}Calendar/POST/Events`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
