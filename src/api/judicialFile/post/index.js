// Imports
import getFiles from "./getFiles";
import getNotifications from "./getNotifications";
import getFile from "./getFile";
import createFile from "./createFile";
import attachRepresentativesToParty from "./attachRepresentativesToParty";

export default api => ({
  getFiles: getFiles.bind(api),
  getFile: getFile.bind(api),
  createFile: createFile.bind(api),
  attachRepresentativesToParty: attachRepresentativesToParty.bind(api),
  getNotifications: getNotifications.bind(api)
});
