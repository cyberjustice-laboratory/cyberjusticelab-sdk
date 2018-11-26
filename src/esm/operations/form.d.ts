import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Form. */
export declare class Form {
    private readonly client;
    /**
     * Create a Form.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Return the solution proposal questions for a given form ID.
     * @param formId The ID of the form problem.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetFormQuestionProposalResponse>
     */
    getFormQuestionProposal(formId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetFormQuestionProposalResponse>;
    /**
     * @param formId The ID of the form problem.
     * @param callback The callback
     */
    getFormQuestionProposal(formId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formId The ID of the form problem.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFormQuestionProposal(formId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Return the solution proposal questions for a given form code and judicial entity.
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetFormQuestionProposalByCodeResponse>
     */
    getFormQuestionProposalByCode(formCode: string, entityId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetFormQuestionProposalByCodeResponse>;
    /**
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param callback The callback
     */
    getFormQuestionProposalByCode(formCode: string, entityId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFormQuestionProposalByCode(formCode: string, entityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Return the problem description questions for a given form ID.
     * @param formId The ID of the form problem.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetFormQuestionDescriptionResponse>
     */
    getFormQuestionDescription(formId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetFormQuestionDescriptionResponse>;
    /**
     * @param formId The ID of the form problem.
     * @param callback The callback
     */
    getFormQuestionDescription(formId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formId The ID of the form problem.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFormQuestionDescription(formId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Return the problem description questions for a given form code and judicial entity.
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetFormQuestionDescriptionByCodeResponse>
     */
    getFormQuestionDescriptionByCode(formCode: string, entityId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetFormQuestionDescriptionByCodeResponse>;
    /**
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param callback The callback
     */
    getFormQuestionDescriptionByCode(formCode: string, entityId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formCode The identification code of the form problem.
     * @param entityId ID of the judicial entity parent of the form.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFormQuestionDescriptionByCode(formCode: string, entityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Retrieve a queryable collection of the questions draft forms for the given form ID. The
     * form information contains all culture versions.
     * @param formId ID of the draft question form.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetDraftQuestionFormResponse>
     */
    getDraftQuestionForm(formId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetDraftQuestionFormResponse>;
    /**
     * @param formId ID of the draft question form.
     * @param callback The callback
     */
    getDraftQuestionForm(formId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormData[]>): void;
    /**
     * @param formId ID of the draft question form.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDraftQuestionForm(formId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormData[]>): void;
    /**
     * @summary Retrieve a queryable collection of the description questions draft forms for the given
     * form ID.
     * @param formId ID of the question form.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetDraftQuestionDescriptionFormResponse>
     */
    getDraftQuestionDescriptionForm(formId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetDraftQuestionDescriptionFormResponse>;
    /**
     * @param formId ID of the question form.
     * @param callback The callback
     */
    getDraftQuestionDescriptionForm(formId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formId ID of the question form.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDraftQuestionDescriptionForm(formId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Retrieve a queryable collection of the proposal questions draft forms for the given
     * form ID.
     * @param formId ID of the question form.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetDraftQuestionProposalFormResponse>
     */
    getDraftQuestionProposalForm(formId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetDraftQuestionProposalFormResponse>;
    /**
     * @param formId ID of the question form.
     * @param callback The callback
     */
    getDraftQuestionProposalForm(formId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @param formId ID of the question form.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDraftQuestionProposalForm(formId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormQuestionData[]>): void;
    /**
     * @summary Returns the party problem description corresponding to a given party in a given file.
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyQuestionDescriptionResponse>
     */
    getPartyQuestionDescription(fileId: string, partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyQuestionDescriptionResponse>;
    /**
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param callback The callback
     */
    getPartyQuestionDescription(fileId: string, partyId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData>): void;
    /**
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyQuestionDescription(fileId: string, partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData>): void;
    /**
     * @summary Returns the list of party problem descriptions made by all parties in a given file.
     * @param fileId The ID of the judicial file.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyQuestionDescriptionsResponse>
     */
    getPartyQuestionDescriptions(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyQuestionDescriptionsResponse>;
    /**
     * @param fileId The ID of the judicial file.
     * @param callback The callback
     */
    getPartyQuestionDescriptions(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData[]>): void;
    /**
     * @param fileId The ID of the judicial file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyQuestionDescriptions(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData[]>): void;
    /**
     * @summary Returns the solution proposal made by the given party of the given Judicial File.
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyQuestionProposalResponse>
     */
    getPartyQuestionProposal(fileId: string, partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyQuestionProposalResponse>;
    /**
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param callback The callback
     */
    getPartyQuestionProposal(fileId: string, partyId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData>): void;
    /**
     * @param fileId Id of the judicial file.
     * @param partyId Id of the party.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyQuestionProposal(fileId: string, partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData>): void;
    /**
     * @summary Returns the list of the last proposal made by each party in a given judicial file.
     * @param fileId Id of the judicial file.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyQuestionProposalsResponse>
     */
    getPartyQuestionProposals(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyQuestionProposalsResponse>;
    /**
     * @param fileId Id of the judicial file.
     * @param callback The callback
     */
    getPartyQuestionProposals(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[]>): void;
    /**
     * @param fileId Id of the judicial file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyQuestionProposals(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[]>): void;
    /**
     * @summary Returns the number of proposals made by the parties of a given file after the start of
     * the negotiation.
     * @param fileId Id of the judicial file.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyQuestionProposalCountResponse>
     */
    getPartyQuestionProposalCount(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyQuestionProposalCountResponse>;
    /**
     * @param fileId Id of the judicial file.
     * @param callback The callback
     */
    getPartyQuestionProposalCount(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData[]>): void;
    /**
     * @param fileId Id of the judicial file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyQuestionProposalCount(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData[]>): void;
    /**
     * @summary Returns the list of all proposals made by the parties in a given judicial file.
     * @param fileId Id of the judicial file.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetPartyArchiveQuestionProposalsResponse>
     */
    getPartyArchiveQuestionProposals(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.FormGetPartyArchiveQuestionProposalsResponse>;
    /**
     * @param fileId Id of the judicial file.
     * @param callback The callback
     */
    getPartyArchiveQuestionProposals(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[]>): void;
    /**
     * @param fileId Id of the judicial file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPartyArchiveQuestionProposals(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[]>): void;
    /**
     * @summary Get the draft question forms
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.FormGetDraftQuestionFormsResponse>
     */
    getDraftQuestionForms(requestModel: Models.CyberjusticeLabKernelSharedFormModelsQuestionFormApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.FormGetDraftQuestionFormsResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getDraftQuestionForms(requestModel: Models.CyberjusticeLabKernelSharedFormModelsQuestionFormApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDraftQuestionForms(requestModel: Models.CyberjusticeLabKernelSharedFormModelsQuestionFormApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData>): void;
}
//# sourceMappingURL=form.d.ts.map