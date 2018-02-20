const express = require('express');
const app = express();
const Window = require('window');
const window = new Window();

import IdentityHelper from './helpers/IdentityHelper';
import { WebStorageStateStore } from 'oidc-client';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/oidc', function (req, res) {
    let identityHelper = new IdentityHelper();
    let id = identityHelper.getOidcClient({
        authority: 'https://localhost:460/core',
        client_id: 'cyberjusticelab.app.cat.parle',
        response_type: 'id_token',
        scope: 'openid labcj_claims',
        redirect_uri: 'https://localhost:481/',
        filterProtocolClaims: true
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});