// Imports
import RequestHelper from "../../helpers/RequestHelper";
import getCalendarDELETE from "./delete";
import getCalendarGET from "./get";
import getCalendarPATCH from "./patch";
import getCalendarPOST from "./post";
import getCalendarPUT from "./put";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getCalendarDELETE(api), getCalendarGET(api), getCalendarPATCH(api), getCalendarPOST(api), getCalendarPUT(api));
};
