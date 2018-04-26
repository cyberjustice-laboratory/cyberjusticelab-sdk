// Imports
import getFiles from "./getFiles";
import getFile from "./getFile";
import createFile from "./createFile";
import attachRepresentatives from "./attachRepresentatives";

export default api => ({
  getFiles: getFiles.bind(api),
  getFile: getFile.bind(api),
  createFile: createFile.bind(api),
  attachRepresentatives: attachRepresentatives.bind(api)
});
