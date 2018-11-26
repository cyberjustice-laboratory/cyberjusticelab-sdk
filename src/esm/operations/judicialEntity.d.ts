import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a JudicialEntity. */
export declare class JudicialEntity {
    private readonly client;
    /**
     * Create a JudicialEntity.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Return the judicial entity configuration.
     * @param jEId ID of the judicial entity.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialEntityGetJudicialEntityCompleteInfosResponse>
     */
    getJudicialEntityCompleteInfos(jEId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialEntityGetJudicialEntityCompleteInfosResponse>;
    /**
     * @param jEId ID of the judicial entity.
     * @param callback The callback
     */
    getJudicialEntityCompleteInfos(jEId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData>): void;
    /**
     * @param jEId ID of the judicial entity.
     * @param options The optional parameters
     * @param callback The callback
     */
    getJudicialEntityCompleteInfos(jEId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData>): void;
    /**
     * @summary Return the judicial entity ID.
     * @param urn URN of the judicial entity.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialEntityGetJudicialEntityResponse>
     */
    getJudicialEntity(urn: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialEntityGetJudicialEntityResponse>;
    /**
     * @param urn URN of the judicial entity.
     * @param callback The callback
     */
    getJudicialEntity(urn: string, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param urn URN of the judicial entity.
     * @param options The optional parameters
     * @param callback The callback
     */
    getJudicialEntity(urn: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
}
//# sourceMappingURL=judicialEntity.d.ts.map