// Imports
import updateDocumentAttributes from "./updateDocumentAttributes";
import updateDocumentContent from "./updateDocumentContent";
import updateDocumentMetadata from "./updateDocumentMetadata";

export default connect => ({
  updateDocumentAttributes: connect(updateDocumentAttributes),
  updateDocumentContent: connect(updateDocumentContent),
  updateDocumentMetadata: connect(updateDocumentMetadata)
});
