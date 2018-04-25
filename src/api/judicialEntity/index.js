// Imports
import RequestHelper from "../../helpers/RequestHelper";
import getJEntDELETE from "./delete";
import getJEntGET from "./get";
import getJEntPATCH from "./patch";
import getJEntPOST from "./post";
import getJEntPUT from "./put";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getJEntDELETE(api), getJEntGET(api), getJEntPATCH(api), getJEntPOST(api), getJEntPUT(api));
};
