/**
 * Create a judicial file.
 * @param {Object} model
 * @returns {Object} id of the judicial file
 */
export default requestHelper => async model => {
  try {
    return await requestHelper.post({
      url: `https://localhost:441/JudicialFile/POST/CreateJudicialFile`,
      data: model
    });
  } catch (error) {
    throw new Error(error);
  }
};
