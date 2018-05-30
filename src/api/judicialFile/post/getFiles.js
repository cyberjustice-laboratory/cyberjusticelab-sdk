/**
 * Get a list of files.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {Object} model
 * @return {Object} List of files.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, config.entity, model)
    });
  } catch (error) {
    throw new Error(error);
  }
};
