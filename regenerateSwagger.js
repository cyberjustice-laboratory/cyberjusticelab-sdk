const exec = require('child_process').exec;
const testscript = exec('autorest --input-file=swagger.json --output-folder=test --typescript --generate-metadata=true ');

testscript.stdout.on('data', function(data){
    console.log(data); 
    // sendBackInfo();
});

testscript.stderr.on('data', function(data){
    console.log(data);
    // triggerErrorStuff(); 
});