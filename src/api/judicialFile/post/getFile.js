import judicialFileApiResponse from "../objects/judicialFileApiResponse";

/**
 * Get file.
 * @param {Object} request
 * @return {Object} response
 */
export default requestHelper => async request => {
  try {
    const response = await requestHelper.post({
      url: "https://localhost:441/JudicialFile/POST/Files",
      data: request
    });
    const bindResponse = Object.assign({}, response, judicialFileApiResponse);
    return bindResponse.files.length > 0 ? bindResponse.files[0] : null;
  } catch (error) {
    throw new Error(error);
  }
};
