/**
 * Create a judicial file.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @returns {Guid} Id of the judicial file.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/CreateJudicialFile`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
