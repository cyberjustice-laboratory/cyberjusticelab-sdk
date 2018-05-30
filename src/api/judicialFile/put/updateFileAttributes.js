/**
 * Update judicial file attributes.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {Object} model
 */
export default (requestHelper, config) => async model => {
  try {
    await requestHelper.put({
      url: `${config.baseUrlApi}JudicialFile/PUT/UpdateFileAttribute`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
