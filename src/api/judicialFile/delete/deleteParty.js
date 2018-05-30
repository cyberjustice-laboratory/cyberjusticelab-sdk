/**
 * Attach representatives to a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
