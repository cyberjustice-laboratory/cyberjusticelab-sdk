// Imports
import getCalendarDELETE from "./delete";
import getCalendarGET from "./get";
import getCalendarPATCH from "./patch";
import getCalendarPOST from "./post";
import getCalendarPUT from "./put";

export default connect => ({
  ...getCalendarDELETE(connect),
  ...getCalendarGET(connect),
  ...getCalendarGET(connect),
  ...getCalendarPATCH(connect),
  ...getCalendarPOST(connect),
  ...getCalendarPUT(connect)
});
