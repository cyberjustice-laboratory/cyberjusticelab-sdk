// Imports
import getEvents from "./getEvents";

export default api => ({
  getEvents: getEvents.bind(api)
});
