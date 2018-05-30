// Imports
import getDocumentContentById from "./getDocumentContentById";
import getDocumentMetadataById from "./getDocumentMetadataById";

export default connect => ({
  getDocumentContentByID: connect(getDocumentContentById),
  getDocumentMetadataById: connect(getDocumentMetadataById)
});
