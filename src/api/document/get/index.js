// Imports
import getDocumentContentByID from "./getDocumentContentByID";

export default api => ({
  getDocumentContentByID: getDocumentContentByID.bind(api)
});
