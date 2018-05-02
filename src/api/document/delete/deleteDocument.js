/**
 * Delete document attributes.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 */
export default async function(model) {
  try {
    await this.requestHelper.delete({
      url: `${this.config.baseUrlApi}Document/DELETE/DeleteDocument`,
      params: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
