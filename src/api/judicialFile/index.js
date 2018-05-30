// Imports
import getJFileDELETE from "./delete";
import getJFileGET from "./get";
import getJFilePATCH from "./patch";
import getJFilePOST from "./post";
import getJFilePUT from "./put";

export default connect => ({
  ...getJFileDELETE(connect),
  ...getJFileGET(connect),
  ...getJFilePATCH(connect),
  ...getJFilePOST(connect),
  ...getJFilePUT(connect)
});
