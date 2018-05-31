/**
 * Get a list of files.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @return {Object} List of files.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/Notifications`,
      data: Object.assign({}, config.entity, model)
    });
  } catch (error) {
    throw new Error(error);
  }
};
