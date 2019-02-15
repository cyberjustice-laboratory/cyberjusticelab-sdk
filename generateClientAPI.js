process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const fs = require("fs");
const https = require("https");

let url = "";

console.log("Env variable :", process.env.NODE_ENV);
if (process.env.NODE_ENV.trim() === "development") {
  console.log("Creating development build");
  url = "https://localhost:441/swagger/docs/v1";
} else {
  console.log("Creating production build");
  url = "https://vt-svc-api.cyberjustice.ca/swagger/docs/v1";
}
// Delete previous swagger.json file.
try {
  fs.unlinkSync("swagger.json");
} catch {
  console.log("Previous swagger.json was not found");
}

// Create write stream
var file = fs.createWriteStream("swagger.json");

https
  .get(url, function(res) {
    const saveFile = res.pipe(file); // Save swagger file to stream

    saveFile.on("finish", () => {
      // When file is saved, execute autorest.
      const exec = require("child_process").exec;
      const testscript = exec(
        "autorest --input-file=swagger.json --output-folder=src --typescript"
      );

      testscript.stdout.on("data", function(data) {
        console.log(data);
        // sendBackInfo();
      });

      testscript.stderr.on("data", function(data) {
        console.log("Autorest error: ", data);
      });

      testscript.on("close", () => {
        console.log("Finished recreating client api");
      });
    });
  })
  .on("error", function(e) {
    console.log("Got error: " + e.message);
    throw e;
  });
