/**
 * Get a list of files.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Object} List of files.
 */
export default async function(model) {
  try {
    return await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, this.config.entity, model)
    });
  } catch (error) {
    throw new Error(error);
  }
}
