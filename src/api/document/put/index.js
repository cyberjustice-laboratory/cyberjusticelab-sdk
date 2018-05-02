// Imports
import updateDocumentAttributes from "./updateDocumentAttributes";
import updateDocumentContent from "./updateDocumentContent";
import updateDocumentMetadatas from "./updateDocumentMetadatas";

export default api => ({
  updateDocumentAttributes: updateDocumentAttributes.bind(api),
  updateDocumentContent: updateDocumentContent.bind(api),
  updateDocumentMetadatas: updateDocumentMetadatas.bind(api)
});
