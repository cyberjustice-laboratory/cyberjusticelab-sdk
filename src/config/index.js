// Imports
import cosmiconfig from "cosmiconfig";

const defaultConfig = {
  baseUrlApi: null,
  entity: {
    judicialEntityIds: [],
    businessRuleNames: []
  }
};

const getExplorer = cosmiconfig("cyberjusticelab-sdk", {
  rcExtensions: true
});

const loadConfig = async () => {
  try {
    const { config } = await getExplorer.load();
    return Object.assign({}, defaultConfig, config);
  } catch (error) {
    throw new Error("Missing Cyberjustice Laboratory SDK configuration file.");
  }
};

export default () => loadConfig();
