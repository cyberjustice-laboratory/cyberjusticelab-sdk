// Imports
import getJEntDELETE from "./delete";
import getJEntGET from "./get";
import getJEntPATCH from "./patch";
import getJEntPOST from "./post";
import getJEntPUT from "./put";

export default connect => ({
  ...getJEntDELETE(connect),
  ...getJEntGET(connect),
  ...getJEntPATCH(connect),
  ...getJEntPOST(connect),
  ...getJEntPUT(connect)
});
