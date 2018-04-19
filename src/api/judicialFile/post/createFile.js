import judicialFileCreateModel from "../_objects/judicialFileCreateModel";

/**
 * Create a judicial file.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {judicialFileCreateModel} model
 * @returns {Guid} Id of the judicial file.
 */
export default async function(model) {
  try {
    return await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/CreateJudicialFile`,
      data: Object.assign({}, judicialFileCreateModel, model)
    });
  } catch (error) {
    throw new Error(error);
  }
}
