import { BaseIdentityException } from '../exceptions/IdentityHelperException';
import * as OidcClient from 'oidc-client';

const _metadataPath = '/.well-known/openid-configuration';
const _signingKeysPath = '/.well-known/jwks';
const _authorizationPath = '/connect/authorize';
const _userInfoPath = '/connect/userinfo';
const _endSessionPath = '/connect/endsession';

/**
 * Identity helper.
 * 
 * @export
 * @class IdentityHelper
 */
export default class IdentityHelper {

    /**
     * Creates an instance of IdentityHelper.
     * @memberof IdentityHelper
     */
    constructor() {
        this.metadataPath = _metadataPath;
        this.metadata = {
            issuer: null,
            jwks_uri: _signingKeysPath,
            authorization_endpoint: _authorizationPath,
            userinfo_endpoint: _userInfoPath,
            end_session_endpoint: _endSessionPath,
        };
    }

    /**
     * Prepends base URL to current metadata.
     * 
     * @param {any} baseUrl
     * @memberof IdentityHelper
     */
    prependBaseUrlToMetadata(baseUrl) {
        if (!baseUrl) {
            throw new BaseIdentityException("Base's URL must be defined.");
        }
        this.metadataPath = `${baseUrl}${_metadataPath}`;
        this.metadata.issuer = baseUrl;
        for (let name in this.metadata) {
            this.metadata[name] = `${baseUrl}${this.metadata[name]}`;
        }
    }

    /**
     * Gets OIDC client.
     * 
     * @param {OidcClient.OidcClientSettings} settings
     * @returns {OidcClient}
     * @memberof IdentityHelper
     */
    getOidcClient(settings) {
        var t = new OidcClient.UserManager(settings);
        var i = new OidcClient.OidcClient(settings);
    }
}