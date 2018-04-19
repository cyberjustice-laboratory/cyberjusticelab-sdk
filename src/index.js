// Imports
import config from "./config";
import judicialFileApi from "./api/judicialFile";

// Get base configuration
const initConfig = config;

// Exports
export default {
  judicialFileApi: authState => judicialFileApi(initConfig, authState)
};
