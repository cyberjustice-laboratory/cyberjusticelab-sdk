import representativesToPartyModel from "../_objects/representativesToPartyModel";

/**
 * Attach representatives to a party.
 * @prop {Object} config
 * @prop {Object} requestHelper
 * @param {representativesToPartyModel} model
 */
export default async function(model) {
  try {
    await this.requestHelper.post({
      url: `${this.config.baseUrlApi}JudicialFile/POST/AttachRepresentative`,
      data: Object.assign({}, representativesToPartyModel, model)
    });
  } catch (error) {
    throw new Error(error);
  }
}
