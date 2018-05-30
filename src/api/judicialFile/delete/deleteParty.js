/**
 * Attach representatives to a party.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await requestHelper.delete({
      url: `${config.baseUrlApi}JudicialFile/DELETE/Party`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
