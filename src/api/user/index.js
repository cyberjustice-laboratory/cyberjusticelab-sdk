// Imports
import getUserDELETE from "./delete";
import getUserGET from "./get";
import getUserPATCH from "./patch";
import getUserPOST from "./post";
import getUserPUT from "./put";

export default connect => ({
  ...getUserDELETE(connect),
  ...getUserGET(connect),
  ...getUserPATCH(connect),
  ...getUserPOST(connect),
  ...getUserPUT(connect)
});
