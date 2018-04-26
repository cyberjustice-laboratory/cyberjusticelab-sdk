/**
 * Create a judicial file.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the judicial file.
 */
export default async function(model) {
  try {
    return await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/CreateJudicialFile`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
