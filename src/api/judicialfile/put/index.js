// Imports
import updateFileAttributes from "./updateFileAttributes";
import updatePartyRepresentativesAttributes from "./updatePartyRepresentativesAttributes";
import upsertParty from "./upsertParty";
import upsertPartyContact from "./upsertPartyContact";

// Exports
export default api => ({
  updateFileAttributes: updateFileAttributes.bind(api),
  updatePartyRepresentativesAttributes: updatePartyRepresentativesAttributes.bind(api),
  upsertParty: upsertParty.bind(api),
  upsertPartyContact: upsertPartyContact.bind(api)
});
