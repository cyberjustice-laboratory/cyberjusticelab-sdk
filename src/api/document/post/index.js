// Imports
import getDocuments from "./getDocuments";
import createDocument from "./createDocument";

export default connect => ({
  getDocuments: connect(getDocuments),
  createDocument: connect(createDocument)
});
