// Imports
import getFiles from "./getFiles";
import getNotifications from "./getNotifications";
import getFile from "./getFile";
import createFile from "./createFile";
import attachRepresentativesToParty from "./attachRepresentativesToParty";

export default connect => ({
  getFiles: connect(getFiles),
  getFile: connect(getFile),
  createFile: connect(createFile),
  attachRepresentativesToParty: connect(attachRepresentativesToParty),
  getNotifications: connect(getNotifications)
});
