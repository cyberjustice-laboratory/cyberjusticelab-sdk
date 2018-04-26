/**
 * Get a judicial entity ID.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {string} urn
 * @return {Guid} a judicial entity ID.
 */
export default async function(urn) {
  try {
    return await this.requestHelper.get({
      url: `${this.config.baseUrlApi}JudicialEntity/GET/JudicialEntityId`,
      params: {
        urn
      }
    });
  } catch (error) {
    throw new Error(error);
  }
}
