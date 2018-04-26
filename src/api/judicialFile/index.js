// Imports
import RequestHelper from "../../helpers/RequestHelper";
import getJFileDELETE from "./delete";
import getJFileGET from "./get";
import getJFilePATCH from "./patch";
import getJFilePOST from "./post";
import getJFilePUT from "./put";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getJFileDELETE(api), getJFileGET(api), getJFilePATCH(api), getJFilePOST(api), getJFilePUT(api));
};
