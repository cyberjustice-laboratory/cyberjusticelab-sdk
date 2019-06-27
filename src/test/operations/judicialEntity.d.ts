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
    /**
     * @summary Get the list of matters.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialEntityGetMattersResponse>
     */
    getMatters(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialEntityGetMattersResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getMatters(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getMatters(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData>): void;
    /**
     * @summary Get the list of judicial entity associated with a Matter.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialEntityGetJudicialEntitiesResponse>
     */
    getJudicialEntities(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialEntityGetJudicialEntitiesResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getJudicialEntities(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getJudicialEntities(requestModel: Models.CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData>): void;
}
//# sourceMappingURL=judicialEntity.d.ts.map