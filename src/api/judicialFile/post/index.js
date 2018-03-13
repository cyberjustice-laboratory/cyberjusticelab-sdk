// Helpers imports
import withAuth from "../../../helpers/withAuth";

// Methods Imports
import getFile from "./getFile";
import getFiles from "./getFiles";
import createFile from "./createFile";

// Export JudicialFilePost
export default {
  getFile: withAuth(getFile),
  getFiles: withAuth(getFiles),
  createFile: withAuth(createFile)
};
