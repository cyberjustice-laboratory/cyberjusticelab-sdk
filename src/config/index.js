// Imports
//import cosmiconfig from "cosmiconfig";

const defaultConfig = {
  baseUrlApi: "https://172.20.0.173:441/",
  judicialEntity: {
    urn: "uri:cyberjusticelab.org/cat.parle",
    businessRuleNames: ["CAT_PARLE"]
  }
};

// const getExplorer = cosmiconfig("cyberjusticelab-sdk", {
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
export default defaultConfig;
