// Imports
import deleteParty from "./deleteParty";

export default api => ({
  deleteParty: deleteParty.bind(api)
});
