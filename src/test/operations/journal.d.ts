import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Journal. */
export declare class Journal {
    private readonly client;
    /**
     * Create a Journal.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Returns a queryable collection of all the
     * {CyberjusticeLab.Kernel.ServiceContracts.Journal.JournalData} in the system according to the
     * specified journal.
     * @param fileId The Id of the file.
     * @param journalId The ID of the journal.
     * @param lang The two letters code for the requested culture.
     * @param [options] The optional parameters
     * @returns Promise<Models.JournalGetJournalEntryByIdResponse>
     */
    getJournalEntryById(fileId: string, journalId: string, lang: string, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetJournalEntryByIdResponse>;
    /**
     * @param fileId The Id of the file.
     * @param journalId The ID of the journal.
     * @param lang The two letters code for the requested culture.
     * @param callback The callback
     */
    getJournalEntryById(fileId: string, journalId: string, lang: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>): void;
    /**
     * @param fileId The Id of the file.
     * @param journalId The ID of the journal.
     * @param lang The two letters code for the requested culture.
     * @param options The optional parameters
     * @param callback The callback
     */
    getJournalEntryById(fileId: string, journalId: string, lang: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>): void;
    /**
     * @summary Get the latest journal instance for each of the requested journal codes in a file.
     * @param fileId File Guid.
     * @param journalCodes Requested journal codes.
     * @param [options] The optional parameters
     * @returns Promise<Models.JournalGetLatestJournalsByCodesResponse>
     */
    getLatestJournalsByCodes(fileId: string, journalCodes: string[], options?: msRest.RequestOptionsBase): Promise<Models.JournalGetLatestJournalsByCodesResponse>;
    /**
     * @param fileId File Guid.
     * @param journalCodes Requested journal codes.
     * @param callback The callback
     */
    getLatestJournalsByCodes(fileId: string, journalCodes: string[], callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>): void;
    /**
     * @param fileId File Guid.
     * @param journalCodes Requested journal codes.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLatestJournalsByCodes(fileId: string, journalCodes: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>): void;
    /**
     * @summary Get the history of a file.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JournalGetFileHistoryResponse>
     */
    getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetFileHistoryResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>): void;
    /**
     * @summary Retrieve the latest journal of the requested files.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JournalGetFileLatestJournalsResponse>
     */
    getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetFileLatestJournalsResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>): void;
    /**
     * @summary Retrieve the latest journal of the requested files.
     * @param journalEntry Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param journalEntry Request filter model.
     * @param callback The callback
     */
    addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param journalEntry Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=journal.d.ts.map