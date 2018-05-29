// Imports
import defaultConfig from "./config";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";

const getConfig = config => Object.assign({}, defaultConfig, config);

// Exports
export default {
  judicialFileApi: (config, authState) => judicialFile(getConfig(config), authState),
  judicialEntityApi: (config, authState) => judicialEntity(getConfig(config), authState),
  documentApi: (config, authState) => document(getConfig(config), authState),
  calendarApi: (config, authState) => calendar(getConfig(config), authState)
};
