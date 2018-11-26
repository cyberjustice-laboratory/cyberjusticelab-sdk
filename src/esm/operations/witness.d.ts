import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Witness. */
export declare class Witness {
    private readonly client;
    /**
     * Create a Witness.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Delete a witness.
     * @param fileId file Id.
     * @param witnessId witness Id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteWitness(fileId: string, witnessId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileId file Id.
     * @param witnessId witness Id.
     * @param callback The callback
     */
    deleteWitness(fileId: string, witnessId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileId file Id.
     * @param witnessId witness Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteWitness(fileId: string, witnessId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a witness document.
     * @param documentId document Id.
     * @param witnessId witness Id.
     * @param fileId witness Id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteWitnessDocument(documentId: string, witnessId: string, fileId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param documentId document Id.
     * @param witnessId witness Id.
     * @param fileId witness Id.
     * @param callback The callback
     */
    deleteWitnessDocument(documentId: string, witnessId: string, fileId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param documentId document Id.
     * @param witnessId witness Id.
     * @param fileId witness Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteWitnessDocument(documentId: string, witnessId: string, fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Retrieve all witnesses depending on the file id.
     * @param fileId Id of the file.
     * @param [options] The optional parameters
     * @returns Promise<Models.WitnessGetWitnessesResponse>
     */
    getWitnesses(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.WitnessGetWitnessesResponse>;
    /**
     * @param fileId Id of the file.
     * @param callback The callback
     */
    getWitnesses(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessWitnessData[]>): void;
    /**
     * @param fileId Id of the file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getWitnesses(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessWitnessData[]>): void;
    /**
     * @summary Get the list of witnesses in a file.
     * @param requestModel
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    getWitnesses1(requestModel: Models.CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param requestModel
     * @param callback The callback
     */
    getWitnesses1(requestModel: Models.CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param requestModel
     * @param options The optional parameters
     * @param callback The callback
     */
    getWitnesses1(requestModel: Models.CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Retrieve external witnesses link by file Id.
     * @param fileId File Id.
     * @param [options] The optional parameters
     * @returns Promise<Models.WitnessGetExternalWitnessesLinkByFileIdResponse>
     */
    getExternalWitnessesLinkByFileId(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.WitnessGetExternalWitnessesLinkByFileIdResponse>;
    /**
     * @param fileId File Id.
     * @param callback The callback
     */
    getExternalWitnessesLinkByFileId(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[]>): void;
    /**
     * @param fileId File Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getExternalWitnessesLinkByFileId(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[]>): void;
    /**
     * @summary Retrieve external witnesses link by witness Id.
     * @param witnessCode Witness code.
     * @param [options] The optional parameters
     * @returns Promise<Models.WitnessGetExternalWitnessesLinkByWitnessCodeResponse>
     */
    getExternalWitnessesLinkByWitnessCode(witnessCode: string, options?: msRest.RequestOptionsBase): Promise<Models.WitnessGetExternalWitnessesLinkByWitnessCodeResponse>;
    /**
     * @param witnessCode Witness code.
     * @param callback The callback
     */
    getExternalWitnessesLinkByWitnessCode(witnessCode: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[]>): void;
    /**
     * @param witnessCode Witness code.
     * @param options The optional parameters
     * @param callback The callback
     */
    getExternalWitnessesLinkByWitnessCode(witnessCode: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[]>): void;
    /**
     * @summary Create a new witness.
     * @param witnessModel The witness info.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createWitness(witnessModel: Models.CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param witnessModel The witness info.
     * @param callback The callback
     */
    createWitness(witnessModel: Models.CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param witnessModel The witness info.
     * @param options The optional parameters
     * @param callback The callback
     */
    createWitness(witnessModel: Models.CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update witnesses attributes.
     * @param updateWitnessAttributesParameter The witness with attributes.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateWitnessAttributes(updateWitnessAttributesParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param updateWitnessAttributesParameter The witness with attributes.
     * @param callback The callback
     */
    updateWitnessAttributes(updateWitnessAttributesParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param updateWitnessAttributesParameter The witness with attributes.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateWitnessAttributes(updateWitnessAttributesParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update witness.
     * @param updateWitnessParameter The witness infos.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateWitness(updateWitnessParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param updateWitnessParameter The witness infos.
     * @param callback The callback
     */
    updateWitness(updateWitnessParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param updateWitnessParameter The witness infos.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateWitness(updateWitnessParameter: Models.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=witness.d.ts.map