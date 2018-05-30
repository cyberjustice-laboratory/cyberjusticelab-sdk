/**
 * Update party representatives attributes.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
