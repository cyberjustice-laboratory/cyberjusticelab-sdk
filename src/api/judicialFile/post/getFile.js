import judicialFileApiResponse from "../_objects/judicialFileApiResponse";

/**
 * Get a file.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {judicialFileApiRequest} model
 * @return {Object} a file.
 */
export default async function(model) {
  try {
    const response = await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, this.config.entity, model)
    });
    const bindResponse = Object.assign({}, response, judicialFileApiResponse);
    return bindResponse.files.length > 0 ? bindResponse.files[0] : null;
  } catch (error) {
    throw new Error(error);
  }
}
