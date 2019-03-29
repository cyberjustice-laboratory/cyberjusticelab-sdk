# Autorest Api for Cyberjustice sdk

To generate the **Cyberjustice SDK**, execute the following command (_in the same directory as this markdown file_): 

```cmd 
node ./generateClientAPI.js
```

Then, in the same terminal execute the following commands:

```
cd ./src/
npm run prepack
```

Copy the content of the `./src/esm/` directory in:

> path / to / CyberjusticeLab.App.VirtualTribunal / VirtualTribunal.App / src / autorest /