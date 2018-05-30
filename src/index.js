// Imports
import buildConnect from "./helpers/buildConnect";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";

// Exports
export default {
  judicialFileApi: (appConfig, authState) => judicialFile(buildConnect(appConfig, authState)),
  judicialEntityApi: (appConfig, authState) => judicialEntity(buildConnect(appConfig, authState)),
  documentApi: (appConfig, authState) => document(buildConnect(appConfig, authState)),
  calendarApi: (appConfig, authState) => calendar(buildConnect(appConfig, authState))
};
