// Imports
import buildConnect from "./helpers/buildConnect";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";

const rawAPIs = {
  judicialFile,
  judicialEntity,
  document,
  calendar
};

// Each method has the right confiugations and helper functions.
const sdkConnectedAPIs = (APIs => {
  const connectedAPIs = {};
  Object.keys(APIs).forEach(key => {
    const api = APIs[key];
    connectedAPIs[`${key}Api`] = (sdkConfig, authState) => api(buildConnect(sdkConfig, authState));
  });
  return connectedAPIs;
})(rawAPIs);

// Exports
export default sdkConnectedAPIs;
