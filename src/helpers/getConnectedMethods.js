/**
 * Connects each method from each protocol to the SDK
 * configuration and connection methods.
 */
export default (connect, protocols) => {
  const connectedMethods = {};
  protocols.forEach(protocol => {
    let method;
    // Connect each method of the current protocol.
    Object.keys(protocol).forEach(key => {
      method = protocol[key];
      connectedMethods[key] = connect(method);
    });
  });
  return connectedMethods;
};
