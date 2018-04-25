// Imports
import RequestHelper from "../../helpers/RequestHelper";
import getDocumentDELETE from "./delete";
import getDocumentGET from "./get";
import getDocumentPATCH from "./patch";
import getDocumentPOST from "./post";
import getDocumentPUT from "./put";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getDocumentDELETE(api), getDocumentGET(api), getDocumentPATCH(api), getDocumentPOST(api), getDocumentPUT(api));
};
