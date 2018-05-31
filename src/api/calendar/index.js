// Imports
import getConnectedMethods from "../../helpers/getConnectedMethods";
import calendarDELETE from "./delete";
import calendarGET from "./get";
import calendarPATCH from "./patch";
import calendarPOST from "./post";
import calendarPUT from "./put";

const protocols = [calendarDELETE, calendarGET, calendarPATCH, calendarPOST, calendarPUT];

export default connect => getConnectedMethods(connect, protocols);
