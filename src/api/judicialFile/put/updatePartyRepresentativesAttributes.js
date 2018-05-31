/**
 * Update party representatives attributes.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await requestHelper.put({
      url: `${config.baseUrlApi}JudicialFile/PUT/UpdatePartyRepresentativesAttributes`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
