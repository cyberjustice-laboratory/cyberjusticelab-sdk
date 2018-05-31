// Imports
import getConnectedMethods from "../../helpers/getConnectedMethods";
import userDELETE from "./delete";
import userGET from "./get";
import userPATCH from "./patch";
import userPOST from "./post";
import userPUT from "./put";

const protocols = [userDELETE, userGET, userPATCH, userPOST, userPUT];

export default connect => getConnectedMethods(connect, protocols);
