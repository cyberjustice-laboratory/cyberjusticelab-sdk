// Imports
import config from "./config";
import getJudicialFileApi from "./api/judicialfile";

// Get base configuration
const initConfig = config();

// Exports
export default {
  judicialFileApi: authState => getJudicialFileApi(initConfig, authState)
};
