// Imports
import getConnectedMethods from "../../helpers/getConnectedMethods";
import jFileDELETE from "./delete";
import jFileGET from "./get";
import jFilePATCH from "./patch";
import jFilePOST from "./post";
import jFilePUT from "./put";

const protocols = [jFileDELETE, jFileGET, jFilePATCH, jFilePOST, jFilePUT];

export default connect => getConnectedMethods(connect, protocols);
