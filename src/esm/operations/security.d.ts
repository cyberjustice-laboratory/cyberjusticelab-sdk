import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Security. */
export declare class Security {
    private readonly client;
    /**
     * Create a Security.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Return the PredicateData object corresponding to the input id.
     * @param id Id of the predicate.
     * @param [options] The optional parameters
     * @returns Promise<Models.SecurityGetPredicateResponse>
     */
    getPredicate(id: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityGetPredicateResponse>;
    /**
     * @param id Id of the predicate.
     * @param callback The callback
     */
    getPredicate(id: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecurityPredicateData>): void;
    /**
     * @param id Id of the predicate.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPredicate(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsSecurityPredicateData>): void;
    /**
     * @summary Retrieve a requested predicate Id from a predicate name.
     * @param name The name of the predicate.
     * @param [options] The optional parameters
     * @returns Promise<Models.SecurityGetPredicateIdByNameResponse>
     */
    getPredicateIdByName(name: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityGetPredicateIdByNameResponse>;
    /**
     * @param name The name of the predicate.
     * @param callback The callback
     */
    getPredicateIdByName(name: string, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param name The name of the predicate.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPredicateIdByName(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
}
//# sourceMappingURL=security.d.ts.map