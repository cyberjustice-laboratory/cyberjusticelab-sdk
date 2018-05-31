/**
 * Get a list of organizations summaries.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {string} urn
 * @return {Guid} List of organizations summaries.
 */
export default (requestHelper, config) => async () => {
  try {
    return await requestHelper.get({
      url: `${config.baseUrlApi}User/GET/OrganizationsSummaries`
    });
  } catch (error) {
    throw new Error(error);
  }
};
