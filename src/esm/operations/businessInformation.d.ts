import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a BusinessInformation. */
export declare class BusinessInformation {
    private readonly client;
    /**
     * Create a BusinessInformation.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Verify if a file's status can go from state one to another one.
     * @param statusTo The next status.
     * @param statusFrom The status.
     * @param fileId ID of the file to validate
     * @param [options] The optional parameters
     * @returns Promise<Models.BusinessInformationValidateTransitionStatusResponse>
     */
    validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.BusinessInformationValidateTransitionStatusResponse>;
    /**
     * @param statusTo The next status.
     * @param statusFrom The status.
     * @param fileId ID of the file to validate
     * @param callback The callback
     */
    validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, callback: msRest.ServiceCallback<any>): void;
    /**
     * @param statusTo The next status.
     * @param statusFrom The status.
     * @param fileId ID of the file to validate
     * @param options The optional parameters
     * @param callback The callback
     */
    validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
    /**
     * This returns nothing to a user with a public or representative role.
     * @summary Files with party question proposals counts.
     * @param judicialEntityId The judicial entity of the files.
     * @param businessRuleName The business rules of the files.
     * @param [options] The optional parameters
     * @returns Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse>
     */
    judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse>;
    /**
     * @param judicialEntityId The judicial entity of the files.
     * @param businessRuleName The business rules of the files.
     * @param callback The callback
     */
    judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>): void;
    /**
     * @param judicialEntityId The judicial entity of the files.
     * @param businessRuleName The business rules of the files.
     * @param options The optional parameters
     * @param callback The callback
     */
    judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>): void;
}
//# sourceMappingURL=businessInformation.d.ts.map