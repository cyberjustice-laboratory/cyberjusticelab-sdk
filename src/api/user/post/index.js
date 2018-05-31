// Imports
import getEvents from "./getEvents";

export default connect => ({
  getEvents: connect(getEvents)
});
