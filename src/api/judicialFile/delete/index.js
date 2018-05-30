// Imports
import deleteParty from "./deleteParty";

export default connect => ({
  deleteParty: connect(deleteParty)
});
