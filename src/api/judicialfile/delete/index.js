// Imports
import deleteParty from "./deleteParty";

// Exports
export default api => ({
  deleteParty: deleteParty.bind(api)
});
