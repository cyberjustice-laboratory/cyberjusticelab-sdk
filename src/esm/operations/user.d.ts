import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a User. */
export declare class User {
    private readonly client;
    /**
     * Create a User.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Return user profiles depending on the current realm (organization).
     * @param [options] The optional parameters
     * @returns Promise<Models.UserGetCurrentRealmUsersResponse>
     */
    getCurrentRealmUsers(options?: msRest.RequestOptionsBase): Promise<Models.UserGetCurrentRealmUsersResponse>;
    /**
     * @param callback The callback
     */
    getCurrentRealmUsers(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUserUserData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getCurrentRealmUsers(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUserUserData[]>): void;
    /**
     * @summary Return all the organizations.
     * @param [options] The optional parameters
     * @returns Promise<Models.UserGetOrganizationsResponse>
     */
    getOrganizations(options?: msRest.RequestOptionsBase): Promise<Models.UserGetOrganizationsResponse>;
    /**
     * @param callback The callback
     */
    getOrganizations(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUserOrganizationData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getOrganizations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUserOrganizationData[]>): void;
    /**
     * @summary Return all the organizations summary.
     * @param [options] The optional parameters
     * @returns Promise<Models.UserGetOrganizationsSummariesResponse>
     */
    getOrganizationsSummaries(options?: msRest.RequestOptionsBase): Promise<Models.UserGetOrganizationsSummariesResponse>;
    /**
     * @param callback The callback
     */
    getOrganizationsSummaries(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getOrganizationsSummaries(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel[]>): void;
}
//# sourceMappingURL=user.d.ts.map