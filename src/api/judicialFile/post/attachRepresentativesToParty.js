/**
 * Attach representatives to a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/AttachRepresentativesToParty`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
