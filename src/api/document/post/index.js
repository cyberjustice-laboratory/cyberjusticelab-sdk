// Imports
import getDocuments from "./getDocuments";
import createDocument from "./createDocument";

export default api => ({
  getDocuments: getDocuments.bind(api),
  createDocument: createDocument.bind(api)
});
