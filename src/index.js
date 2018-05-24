// Imports
import initConfig from "./config";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";

// Exports
export default {
  judicialFileApi: (config, authState) => judicialFile(Object.assign({}, initConfig, config), authState),
  judicialEntityApi: (config, authState) => judicialEntity(Object.assign({}, initConfig, config), authState),
  documentApi: (config, authState) => document(Object.assign({}, initConfig, config), authState),
  calendarApi: (config, authState) => calendar(Object.assign({}, initConfig, config), authState)
};
