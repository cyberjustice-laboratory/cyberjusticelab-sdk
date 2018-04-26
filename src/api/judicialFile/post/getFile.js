/**
 * Get a file.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {judicialFileApiRequest} model
 * @return {Object} A file.
 */
export default async function(model) {
  try {
    const response = await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, this.config.entity, model)
    });
    return response.files.length > 0 ? response.files[0] : null;
  } catch (error) {
    throw new Error(error);
  }
}
