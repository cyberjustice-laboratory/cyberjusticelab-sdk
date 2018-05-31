// Imports
import getConnectedMethods from "../../helpers/getConnectedMethods";
import jEntityDELETE from "./delete";
import jEntityGET from "./get";
import jEntityPATCH from "./patch";
import jEntityPOST from "./post";
import jEntityPUT from "./put";

const protocols = [
  jEntityDELETE,
  jEntityGET,
  jEntityPATCH,
  jEntityPOST,
  jEntityPUT
];

export default connect => getConnectedMethods(connect, protocols);