/**
 * Get a judicial entity ID.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {string} urn
 * @return {Guid} a judicial entity ID.
 */
export default (requestHelper, config) => async urn => {
  try {
    return await requestHelper.get({
      url: `${config.baseUrlApi}JudicialEntity/GET/JudicialEntityId`,
      params: {
        urn
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
