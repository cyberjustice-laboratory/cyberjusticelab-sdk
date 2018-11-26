import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Lookup. */
export declare class Lookup {
    private readonly client;
    /**
     * Create a Lookup.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * ChildrenLevel 1 will return only LookupData for the requested Lookup,
     * level 2 gets all the children of the requested Lookup and so on.
     * @summary Returns a LookupData for the specified lookup name, culture and children level.
     * @param name Name of the lookup.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param [options] The optional parameters
     * @returns Promise<Models.LookupGetLocalizedLookupResponse>
     */
    getLocalizedLookup(name: string, culture: string, childrenLevel: number, options?: msRest.RequestOptionsBase): Promise<Models.LookupGetLocalizedLookupResponse>;
    /**
     * @param name Name of the lookup.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param callback The callback
     */
    getLocalizedLookup(name: string, culture: string, childrenLevel: number, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel>): void;
    /**
     * @param name Name of the lookup.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param options The optional parameters
     * @param callback The callback
     */
    getLocalizedLookup(name: string, culture: string, childrenLevel: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel>): void;
    /**
     * @summary Returns a LookupData for the specified lookup name and children level
     * in all available cultures.
     * ChildrenLevel 1 will return only LookupData for the requested Lookup,
     * level 2 gets all the children of the requested Lookup and so on.
     * @param name Name of the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param [options] The optional parameters
     * @returns Promise<Models.LookupGetLookupResponse>
     */
    getLookup(name: string, childrenLevel: number, options?: msRest.RequestOptionsBase): Promise<Models.LookupGetLookupResponse>;
    /**
     * @param name Name of the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param callback The callback
     */
    getLookup(name: string, childrenLevel: number, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel>): void;
    /**
     * @param name Name of the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param options The optional parameters
     * @param callback The callback
     */
    getLookup(name: string, childrenLevel: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel>): void;
    /**
     * @summary Returns an array of LookupData for the specified lookup names, culture and children
     * level
     * ChildrenLevel 1 will return only LookupData for the requested Lookup names,
     * level 2 gets all the children of the requested Lookup names and so on.
     * @param names Names of the lookups.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param [options] The optional parameters
     * @returns Promise<Models.LookupGetLocalizedLookupsResponse>
     */
    getLocalizedLookups(names: string[], culture: string, childrenLevel: number, options?: msRest.RequestOptionsBase): Promise<Models.LookupGetLocalizedLookupsResponse>;
    /**
     * @param names Names of the lookups.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param callback The callback
     */
    getLocalizedLookups(names: string[], culture: string, childrenLevel: number, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
    /**
     * @param names Names of the lookups.
     * @param culture Culture in which to return the lookup.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param options The optional parameters
     * @param callback The callback
     */
    getLocalizedLookups(names: string[], culture: string, childrenLevel: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
    /**
     * @summary Returns a lookupData list for the specified lookup names and children level
     * ChildrenLevel 1 will return only LookupData for the requested Lookup names,
     * level 2 gets all the children of the requested Lookup names and so on.
     * @param names Names of the lookups.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param [options] The optional parameters
     * @returns Promise<Models.LookupGetLookupsResponse>
     */
    getLookups(names: string[], childrenLevel: number, options?: msRest.RequestOptionsBase): Promise<Models.LookupGetLookupsResponse>;
    /**
     * @param names Names of the lookups.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param callback The callback
     */
    getLookups(names: string[], childrenLevel: number, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
    /**
     * @param names Names of the lookups.
     * @param childrenLevel Level to navigate to when searching recursively children.
     * Value 0 for a children level will return all children (up to the last level).
     * @param options The optional parameters
     * @param callback The callback
     */
    getLookups(names: string[], childrenLevel: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
    /**
     * @summary Returns a {CyberjusticeLab.Kernel.Shared.Lookup.Models.LookupModel} tree of the
     * specified lookup names for the specified cultures.
     * If no names is specified, returns all the lookups
     * If no culture is specified, returns the lokups in every cultures.
     * @param getLookupsModel a {CyberjusticeLab.Kernel.Shared.Lookup.Models.LookupApiRequestData}
     * model. Contains the names of the requested lookups and the requested culture codes
     * @param [options] The optional parameters
     * @returns Promise<Models.LookupGetLookups1Response>
     */
    getLookups1(getLookupsModel: Models.CyberjusticeLabKernelSharedLookupModelsLookupApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.LookupGetLookups1Response>;
    /**
     * @param getLookupsModel a {CyberjusticeLab.Kernel.Shared.Lookup.Models.LookupApiRequestData}
     * model. Contains the names of the requested lookups and the requested culture codes
     * @param callback The callback
     */
    getLookups1(getLookupsModel: Models.CyberjusticeLabKernelSharedLookupModelsLookupApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
    /**
     * @param getLookupsModel a {CyberjusticeLab.Kernel.Shared.Lookup.Models.LookupApiRequestData}
     * model. Contains the names of the requested lookups and the requested culture codes
     * @param options The optional parameters
     * @param callback The callback
     */
    getLookups1(getLookupsModel: Models.CyberjusticeLabKernelSharedLookupModelsLookupApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLookupModelsLookupModel[]>): void;
}
//# sourceMappingURL=lookup.d.ts.map