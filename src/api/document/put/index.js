// Imports
import updateDocumentAttributes from "./updateDocumentAttributes";
import updateDocumentContent from "./updateDocumentContent";

export default api => ({
  updateDocumentAttributes: updateDocumentAttributes.bind(api),
  updateDocumentContent: updateDocumentContent.bind(api)
});
