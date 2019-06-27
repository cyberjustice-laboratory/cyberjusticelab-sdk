console.log("Prepending eslint ignore....");
var prependFile = require("prepend-file");

prependFile("./src/esm/main.js", "/* eslint-disable */ \n", function(err) {
  if (err) {
    console.log(
      "an error happened when prepending eslint ignore line to the file"
    );
  }

  // Success
  console.log("eslint-disable was prepended to esm/main.js!");
});

prependFile("./src/esm/axiosclient.js", "/* eslint-disable */ \n", function(
  err
) {
  if (err) {
    console.log(
      "an error happened when prepending eslint ignore line to the file"
    );
  }

  // Success
  console.log('eslint-disable" was prepended to esm/axiosclient.js!');
});
