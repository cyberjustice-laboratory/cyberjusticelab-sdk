/**
 * Update judicial file attributes.
 * @prop {Object} config
 * @prop {Object} requestHelper
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
