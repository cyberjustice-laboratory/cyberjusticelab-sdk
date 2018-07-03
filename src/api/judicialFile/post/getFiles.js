/**
 * Get a list of judicial files.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @return {Object} List of judicial files.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/Files`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
