import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a SecureMail. */
export declare class SecureMail {
    private readonly client;
    /**
     * Create a SecureMail.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Returns a list of all emails models.
     * <remarks>This service is for administration purpose only. The user must have administrator role
     * to extract information.</remarks>
     * @param [options] The optional parameters
     * @returns Promise<Models.SecureMailGetMailListResponse>
     */
    getMailList(options?: msRest.RequestOptionsBase): Promise<Models.SecureMailGetMailListResponse>;
    /**
     * @param callback The callback
     */
    getMailList(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecureMailEmailData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getMailList(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecureMailEmailData[]>): void;
    /**
     * @summary Return a specific email model by type and culture.
     * @param type The email model type.
     * @param culture The email model culture.
     * @param [options] The optional parameters
     * @returns Promise<Models.SecureMailGetMailResponse>
     */
    getMail(type: string, culture: string, options?: msRest.RequestOptionsBase): Promise<Models.SecureMailGetMailResponse>;
    /**
     * @param type The email model type.
     * @param culture The email model culture.
     * @param callback The callback
     */
    getMail(type: string, culture: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecureMailEmailData>): void;
    /**
     * @param type The email model type.
     * @param culture The email model culture.
     * @param options The optional parameters
     * @param callback The callback
     */
    getMail(type: string, culture: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecureMailEmailData>): void;
}
//# sourceMappingURL=secureMail.d.ts.map