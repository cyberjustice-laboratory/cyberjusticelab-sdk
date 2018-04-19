"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Imports
//import cosmiconfig from "cosmiconfig";
var defaultConfig = {
  baseUrlApi: "https://localhost:441/",
  judicialEntity: {
    urn: "uri:cyberjusticelab.org/cat.parle",
    businessRuleNames: ["CAT_PARLE"]
  }
}; // const getExplorer = cosmiconfig("cyberjusticelab-sdk", {
//   rcExtensions: true
// });
// const loadConfig = async () => {
//   try {
//     const { config } = await getExplorer.load();
//     return Object.assign({}, defaultConfig, config);
//   } catch (error) {
//     throw new Error("Missing Cyberjustice Laboratory SDK configuration file.");
//   }
// };
// export default () => loadConfig();

var _default = defaultConfig;
exports.default = _default;