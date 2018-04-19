/**
 * Upsert a party contact.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the contact.
 */
export default async function(model) {
  try {
    return await this.requestHelper.put({
      url: `${this.config.baseUrlApi}JudicialFile/PUT/UpsertPartyContact`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
