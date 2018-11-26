## An isomorphic javascript sdk for - CyberjusticeAPIs

This package contains an isomorphic SDK for CyberjusticeAPIs.

### Currently supported environments

- Node.js version 6.x.x or higher
- Browser JavaScript

### How to Install

```
npm install
```

### How to use

#### nodejs - Authentication, client creation and validateTransitionStatus businessInformation as an example written in TypeScript.

##### Install @azure/ms-rest-nodeauth

```
npm install @azure/ms-rest-nodeauth
```

##### Sample code

```ts
import * as msRest from "@azure/ms-rest-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { CyberjusticeAPIs, CyberjusticeAPIsModels, CyberjusticeAPIsMappers } from "";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new CyberjusticeAPIs(creds, subscriptionId);
  const statusTo = "teststatusTo";
  const statusFrom = "teststatusFrom";
  const fileId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
  client.businessInformation.validateTransitionStatus(statusTo, statusFrom, fileId).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.error(err);
});
```

#### browser - Authentication, client creation and validateTransitionStatus businessInformation as an example written in JavaScript.

##### Install @azure/ms-rest-browserauth

```
npm install @azure/ms-rest-browserauth
```

##### Sample code

See https://github.com/Azure/ms-rest-browserauth to learn how to authenticate to Azure in the browser.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> sample</title>
    <script src="node_modules/@azure/ms-rest-js/dist/msRest.browser.js"></script>
    <script src="node_modules/@azure/ms-rest-browserauth/dist/msAuth.js"></script>
    <script src="node_modules//dist/bundle.js"></script>
    <script type="text/javascript">
      const subscriptionId = "<Subscription_Id>";
      const authManager = new msAuth.AuthManager({
        clientId: "<client id for your Azure AD app>",
        tenant: "<optional tenant for your organization>"
      });
      authManager.finalizeLogin().then((res) => {
        if (!res.isLoggedIn) {
          // may cause redirects
          authManager.login();
        }
        const client = new Bundle.CyberjusticeAPIs(res.creds, subscriptionId);
        const statusTo = "teststatusTo";
        const statusFrom = "teststatusFrom";
        const fileId = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;
        client.businessInformation.validateTransitionStatus(statusTo, statusFrom, fileId).then((result) => {
          console.log("The result is:");
          console.log(result);
        }).catch((err) => {
          console.log("An error occurred:");
          console.error(err);
        });
      });
    </script>
  </head>
  <body></body>
</html>
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
