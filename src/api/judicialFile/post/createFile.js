/**
 * Create a judicial file.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
