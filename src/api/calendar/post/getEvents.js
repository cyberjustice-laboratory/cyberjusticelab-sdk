/**
 * Get a list of events.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 * @return {Object} List of events.
 */
export default (requestHelper, config) => async model => {
  try {
    return await requestHelper.post({
      url: `${config.baseUrlApi}Calendar/POST/Events`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
