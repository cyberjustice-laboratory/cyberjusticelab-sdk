// Imports
import deleteDocumentAttributes from "./deleteDocumentAttributes";

export default api => ({
  deleteDocumentAttributes: deleteDocumentAttributes.bind(api)
});
