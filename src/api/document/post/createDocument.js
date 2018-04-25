/**
 * Create a document.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the document.
 */
export default async function(model) {
  try {
    return await this.requestHelper.post({
      url: `${this.config.baseUrlApi}Document/POST/CreateDocument`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
