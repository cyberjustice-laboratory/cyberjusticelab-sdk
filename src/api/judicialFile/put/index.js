// Imports
import updateFileAttributes from "./updateFileAttributes";
import updatePartyRepresentativesAttributes from "./updatePartyRepresentativesAttributes";
import upsertParty from "./upsertParty";
import upsertPartyContact from "./upsertPartyContact";

export default connect => ({
  updateFileAttributes: connect(updateFileAttributes),
  updatePartyRepresentativesAttributes: connect(updatePartyRepresentativesAttributes),
  upsertParty: connect(upsertParty),
  upsertPartyContact: connect(upsertPartyContact)
});
