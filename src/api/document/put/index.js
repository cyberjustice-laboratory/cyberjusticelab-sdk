// Imports
import updateDocumentAttributes from "./updateDocumentAttributes";
import updateDocumentContent from "./updateDocumentContent";
import updateDocumentMetadatas from "./updateDocumentMetadatas";

export default connect => ({
  updateDocumentAttributes: connect(updateDocumentAttributes),
  updateDocumentContent: connect(updateDocumentContent),
  updateDocumentMetadatas: connect(updateDocumentMetadatas)
});
