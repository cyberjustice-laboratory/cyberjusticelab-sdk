// Imports
import getDocumentDELETE from "./delete";
import getDocumentGET from "./get";
import getDocumentPATCH from "./patch";
import getDocumentPOST from "./post";
import getDocumentPUT from "./put";

export default connect => ({
  ...getDocumentDELETE(connect),
  ...getDocumentGET(connect),
  ...getDocumentPATCH(connect),
  ...getDocumentPOST(connect),
  ...getDocumentPUT(connect)
});
