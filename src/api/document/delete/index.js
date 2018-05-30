// Imports
import deleteDocumentAttributes from "./deleteDocumentAttributes";
import deleteDocument from "./deleteDocument";

export default connect => ({
  deleteDocumentAttributes: connect(deleteDocumentAttributes),
  deleteDocument: connect(deleteDocument)
});
