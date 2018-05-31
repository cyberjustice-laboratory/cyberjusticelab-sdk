/**
 * Upsert a party contact.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @returns {Guid} Id of the party contact.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.put({
      url: `${config.baseUrlApi}JudicialFile/PUT/UpsertPartyContact`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
