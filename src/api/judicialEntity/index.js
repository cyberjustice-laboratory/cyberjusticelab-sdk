// Imports
import RequestHelper from "../../helpers/RequestHelper";
import getJEntGet from "./get";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getJEntGet(api));
};
