/**
 * Upsert a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the party.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.put({
      url: `${config.baseUrlApi}JudicialFile/PUT/UpsertParty`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
