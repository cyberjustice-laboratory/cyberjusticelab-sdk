// Imports
import getDocumentContent from "./getDocumentContent";
import getDocumentMetadata from "./getDocumentMetadata";

export default connect => ({
  getDocumentContent: connect(getDocumentContent),
  getDocumentMetadata: connect(getDocumentMetadata)
});
