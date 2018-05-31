/**
 * Get a judicial file.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {judicialFileApiRequest} model
 * @return {Object} A judicial file.
 */
export default (requestHelper, config) => async model => {
  try {
    const response = await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, config.entity, model)
    });
    return response.files.length > 0 ? response.files[0] : null;
  } catch (error) {
    throw new Error(error);
  }
};
