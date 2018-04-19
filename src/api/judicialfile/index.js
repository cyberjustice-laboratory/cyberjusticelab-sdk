// Imports
import RequestHelper from "../../helpers/RequestHelper";
// import getJFileDelete from "./delete";
import getJFilePost from "./post";
// import getJFilePut from "./put";

export default (config, authState) => {
  const api = {
    config,
    authState,
    requestHelper: new RequestHelper(authState)
  };

  return Object.assign(api, getJFilePost(api));
  // ...getJFileDelete(this),
  // ...getJFilePut(this)
};
