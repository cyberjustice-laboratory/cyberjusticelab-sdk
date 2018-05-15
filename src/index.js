// Imports
import config from "./config";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";

// Get base configuration
const initConfig = config;

// Exports
export default {
  judicialFileApi: authState => judicialFile(initConfig, authState),
  judicialEntityApi: authState => judicialEntity(initConfig, authState),
  documentApi: authState => document(initConfig, authState),
  calendarApi: authState => calendar(initConfig, authState)
};
