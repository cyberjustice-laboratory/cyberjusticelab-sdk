/**
 * Get a judicial entity ID.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
