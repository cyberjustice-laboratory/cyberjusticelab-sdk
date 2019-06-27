import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a ProsecutingAuthority. */
export declare class ProsecutingAuthority {
    private readonly client;
    /**
     * Create a ProsecutingAuthority.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Delete a prosecuting authority.
     * @param id Prosecuting authority id.
     * @param modifiedTicks Modified date in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteProsecutingAuthority(id: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id Prosecuting authority id.
     * @param modifiedTicks Modified date in ticks.
     * @param callback The callback
     */
    deleteProsecutingAuthority(id: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id Prosecuting authority id.
     * @param modifiedTicks Modified date in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteProsecutingAuthority(id: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a prosecuting authority delegation.
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationDeleteData}
     * object.
     * @param modifiedTicks Modified date in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationDeleteData, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationDeleteData}
     * object.
     * @param modifiedTicks Modified date in ticks.
     * @param callback The callback
     */
    deleteProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationDeleteData, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationDeleteData}
     * object.
     * @param modifiedTicks Modified date in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationDeleteData, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get all prosecuting authorities available for the context.
     * @param [options] The optional parameters
     * @returns Promise<Models.ProsecutingAuthorityGetProsecutingAuthoritiesResponse>
     */
    getProsecutingAuthorities(options?: Models.ProsecutingAuthorityGetProsecutingAuthoritiesOptionalParams): Promise<Models.ProsecutingAuthorityGetProsecutingAuthoritiesResponse>;
    /**
     * @param callback The callback
     */
    getProsecutingAuthorities(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getProsecutingAuthorities(options: Models.ProsecutingAuthorityGetProsecutingAuthoritiesOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData[]>): void;
    /**
     * @summary Get the count of all prosecuting authorities available for the context.
     * @param [options] The optional parameters
     * @returns Promise<Models.ProsecutingAuthorityGetProsecutingAuthoritiesCountResponse>
     */
    getProsecutingAuthoritiesCount(options?: msRest.RequestOptionsBase): Promise<Models.ProsecutingAuthorityGetProsecutingAuthoritiesCountResponse>;
    /**
     * @param callback The callback
     */
    getProsecutingAuthoritiesCount(callback: msRest.ServiceCallback<number>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getProsecutingAuthoritiesCount(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
    /**
     * @summary Update a prosecuting authority.
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityUpdateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityUpdateData} object.
     * @param callback The callback
     */
    updateProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityUpdateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new prosecuting authority.
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityCreateData} object.
     * @param callback The callback
     */
    createProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param authority A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createProsecutingAuthority(authority: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new prosecuting authority delegation.
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationCreateData}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationCreateData}
     * object.
     * @param callback The callback
     */
    createProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param authorityDelegation A
     * {CyberjusticeLab.Kernel.Shared.ProsecutingAuthority.ProsecutingAuthorityDelegationCreateData}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createProsecutingAuthorityDelegation(authorityDelegation: Models.CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=prosecutingAuthority.d.ts.map