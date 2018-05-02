// Imports
import deleteDocumentAttributes from "./deleteDocumentAttributes";
import deleteDocument from "./deleteDocument";

export default api => ({
  deleteDocumentAttributes: deleteDocumentAttributes.bind(api),
  deleteDocument: deleteDocument.bind(api)
});
