// Imports
import getDocumentContentById from "./getDocumentContentById";
import getDocumentMetadataById from "./getDocumentMetadataById";

export default api => ({
  getDocumentContentByID: getDocumentContentById.bind(api),
  getDocumentMetadataById: getDocumentMetadataById.bind(api)
});
