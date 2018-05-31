// Imports
import getConnectedMethods from "../../helpers/getConnectedMethods";
import documentDELETE from "./delete";
import documentGET from "./get";
import documentPATCH from "./patch";
import documentPOST from "./post";
import documentPUT from "./put";

const protocols = [
  documentDELETE,
  documentGET,
  documentPATCH,
  documentPOST,
  documentPUT
];

export default connect => getConnectedMethods(connect, protocols);
