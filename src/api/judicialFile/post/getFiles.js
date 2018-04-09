import judicialFileApiResponse from "../objects/judicialFileApiResponse";

/**
 * Get files list.
 * @param {Object} request
 * @return {Object} response
 */
export default requestHelper => async request => {
  try {
    const response = await requestHelper.post({
      url: "https://localhost:441/JudicialFile/POST/Files",
      data: request
    });
    return Object.assign({}, response, judicialFileApiResponse);
  } catch (error) {
    throw new Error(error);
  }
};
