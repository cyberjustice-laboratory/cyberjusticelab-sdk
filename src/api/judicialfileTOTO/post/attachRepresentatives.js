/**
 * Attach representatives to a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 */
export default async function(model) {
  try {
    await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/AttachRepresentative`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
