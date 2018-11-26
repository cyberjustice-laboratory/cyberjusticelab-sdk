import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a UProfile. */
export declare class UProfile {
    private readonly client;
    /**
     * Create a UProfile.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Return the current user profile.
     * @param [options] The optional parameters
     * @returns Promise<Models.UProfileGetCurrentUserProfileResponse>
     */
    getCurrentUserProfile(options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetCurrentUserProfileResponse>;
    /**
     * @param callback The callback
     */
    getCurrentUserProfile(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getCurrentUserProfile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
    /**
     * @summary Return an user profile in a specified context.
     * @param fileId Id of the file.
     * @param username Id of the user.
     * @param realm Realm.
     * @param [options] The optional parameters
     * @returns Promise<Models.UProfileGetUserProfileResponse>
     */
    getUserProfile(fileId: string, username: string, realm: string, options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetUserProfileResponse>;
    /**
     * @param fileId Id of the file.
     * @param username Id of the user.
     * @param realm Realm.
     * @param callback The callback
     */
    getUserProfile(fileId: string, username: string, realm: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
    /**
     * @param fileId Id of the file.
     * @param username Id of the user.
     * @param realm Realm.
     * @param options The optional parameters
     * @param callback The callback
     */
    getUserProfile(fileId: string, username: string, realm: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
    /**
     * @summary Return user profiles by current realm.
     * @param [options] The optional parameters
     * @returns Promise<Models.UProfileGetRealmUserProfilesResponse>
     */
    getRealmUserProfiles(options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetRealmUserProfilesResponse>;
    /**
     * @param callback The callback
     */
    getRealmUserProfiles(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getRealmUserProfiles(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>): void;
}
//# sourceMappingURL=uProfile.d.ts.map