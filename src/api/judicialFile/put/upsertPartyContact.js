/**
 * Upsert a party contact.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @returns {Guid} Id of the contact.
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
