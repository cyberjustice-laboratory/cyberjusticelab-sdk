import judicialFileApiResponse from "../_objects/judicialFileApiResponse";

/**
 * Get a list of files.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {judicialFileApiRequest} model
 * @return {Object} List of files.
 */
export default async function(model) {
  try {
    const response = await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, this.config.entity, model)
    });
    return Object.assign({}, response, judicialFileApiResponse);
  } catch (error) {
    throw new Error(error);
  }
}
