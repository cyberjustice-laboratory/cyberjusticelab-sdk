/**
 * Upsert a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the party.
 */
export default async function(model) {
  try {
    return await this.requestHelper.put({
      url: `${this.config.baseUrlApi}JudicialFile/PUT/UpsertParty`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
}
