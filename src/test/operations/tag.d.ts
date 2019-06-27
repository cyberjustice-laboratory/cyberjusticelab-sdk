import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Tag. */
export declare class Tag {
    private readonly client;
    /**
     * Create a Tag.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Get the labels for the current user's role.
     * @param cultureCode The application's current culture code for localization.
     * @param labelSection The label section.
     * @param judicialEntityId The judicial entity identifier.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetLabelsOfCurrentUserResponse>
     */
    getLabelsOfCurrentUser(cultureCode: string, labelSection: string, judicialEntityId: string, options?: msRest.RequestOptionsBase): Promise<Models.TagGetLabelsOfCurrentUserResponse>;
    /**
     * @param cultureCode The application's current culture code for localization.
     * @param labelSection The label section.
     * @param judicialEntityId The judicial entity identifier.
     * @param callback The callback
     */
    getLabelsOfCurrentUser(cultureCode: string, labelSection: string, judicialEntityId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLocalizedLabelData[]>): void;
    /**
     * @param cultureCode The application's current culture code for localization.
     * @param labelSection The label section.
     * @param judicialEntityId The judicial entity identifier.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLabelsOfCurrentUser(cultureCode: string, labelSection: string, judicialEntityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLocalizedLabelData[]>): void;
    /**
     * @summary Get the tag links of the given objects codes.
     * @param codes The application's current culture code for localization.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetTagsOfCodesResponse>
     */
    getTagsOfCodes(codes: string[], options?: msRest.RequestOptionsBase): Promise<Models.TagGetTagsOfCodesResponse>;
    /**
     * @param codes The application's current culture code for localization.
     * @param callback The callback
     */
    getTagsOfCodes(codes: string[], callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData[]>): void;
    /**
     * @param codes The application's current culture code for localization.
     * @param options The optional parameters
     * @param callback The callback
     */
    getTagsOfCodes(codes: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData[]>): void;
    /**
     * @summary Get all tags.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetTagsResponse>
     */
    getTags(options?: Models.TagGetTagsOptionalParams): Promise<Models.TagGetTagsResponse>;
    /**
     * @param callback The callback
     */
    getTags(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getTags(options: Models.TagGetTagsOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagData[]>): void;
    /**
     * @summary Get a specific tag.
     * @param key The unique identifier of the requested object.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetTagResponse>
     */
    getTag(key: string, options?: msRest.RequestOptionsBase): Promise<Models.TagGetTagResponse>;
    /**
     * @param key The unique identifier of the requested object.
     * @param callback The callback
     */
    getTag(key: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagData>): void;
    /**
     * @param key The unique identifier of the requested object.
     * @param options The optional parameters
     * @param callback The callback
     */
    getTag(key: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagData>): void;
    /**
     * @summary Get all tag links.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetTagLinksResponse>
     */
    getTagLinks(options?: Models.TagGetTagLinksOptionalParams): Promise<Models.TagGetTagLinksResponse>;
    /**
     * @param callback The callback
     */
    getTagLinks(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getTagLinks(options: Models.TagGetTagLinksOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData[]>): void;
    /**
     * @summary Get a specific tag link.
     * @param tagId The composite unique tag identifier of the requested object.
     * @param code The composite unique identifier of the requested object.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetTagLinkResponse>
     */
    getTagLink(tagId: string, code: string, options?: msRest.RequestOptionsBase): Promise<Models.TagGetTagLinkResponse>;
    /**
     * @param tagId The composite unique tag identifier of the requested object.
     * @param code The composite unique identifier of the requested object.
     * @param callback The callback
     */
    getTagLink(tagId: string, code: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData>): void;
    /**
     * @param tagId The composite unique tag identifier of the requested object.
     * @param code The composite unique identifier of the requested object.
     * @param options The optional parameters
     * @param callback The callback
     */
    getTagLink(tagId: string, code: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagTagLinkData>): void;
    /**
     * @summary Get all labels.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetLabelsResponse>
     */
    getLabels(options?: msRest.RequestOptionsBase): Promise<Models.TagGetLabelsResponse>;
    /**
     * @param callback The callback
     */
    getLabels(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLabelData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getLabels(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLabelData[]>): void;
    /**
     * @summary Get a specific label.
     * @param labelId The unique label identifier of the requested object.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagGetLabelResponse>
     */
    getLabel(labelId: string, options?: msRest.RequestOptionsBase): Promise<Models.TagGetLabelResponse>;
    /**
     * @param labelId The unique label identifier of the requested object.
     * @param callback The callback
     */
    getLabel(labelId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLabelData>): void;
    /**
     * @param labelId The unique label identifier of the requested object.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLabel(labelId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedTagLabelData>): void;
    /**
     * @summary Update a tag link.
     * @param tagLink Data updated {CyberjusticeLab.Kernel.Shared.Tag.TagLinkUpdateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagLink Data updated {CyberjusticeLab.Kernel.Shared.Tag.TagLinkUpdateData} object.
     * @param callback The callback
     */
    updateTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagLink Data updated {CyberjusticeLab.Kernel.Shared.Tag.TagLinkUpdateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a label. This method also updates contained localization objects.
     * @param label Data updated {CyberjusticeLab.Kernel.Shared.Tag.LabelUpdateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateLabel(label: Models.CyberjusticeLabKernelSharedTagLabelUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param label Data updated {CyberjusticeLab.Kernel.Shared.Tag.LabelUpdateData} object.
     * @param callback The callback
     */
    updateLabel(label: Models.CyberjusticeLabKernelSharedTagLabelUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param label Data updated {CyberjusticeLab.Kernel.Shared.Tag.LabelUpdateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateLabel(label: Models.CyberjusticeLabKernelSharedTagLabelUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new tag link.
     * @param tagLink Data source {CyberjusticeLab.Kernel.Shared.Tag.TagLinkCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagLink Data source {CyberjusticeLab.Kernel.Shared.Tag.TagLinkCreateData} object.
     * @param callback The callback
     */
    createTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagLink Data source {CyberjusticeLab.Kernel.Shared.Tag.TagLinkCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createTagLink(tagLink: Models.CyberjusticeLabKernelSharedTagTagLinkCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a label.
     * @param label Data source {CyberjusticeLab.Kernel.Shared.Tag.LabelCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagCreateLabelResponse>
     */
    createLabel(label: Models.CyberjusticeLabKernelSharedTagLabelCreateData, options?: msRest.RequestOptionsBase): Promise<Models.TagCreateLabelResponse>;
    /**
     * @param label Data source {CyberjusticeLab.Kernel.Shared.Tag.LabelCreateData} object.
     * @param callback The callback
     */
    createLabel(label: Models.CyberjusticeLabKernelSharedTagLabelCreateData, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param label Data source {CyberjusticeLab.Kernel.Shared.Tag.LabelCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createLabel(label: Models.CyberjusticeLabKernelSharedTagLabelCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Create a Tag-Label link.
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createTagLabelLink(tagId: string, labelId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param callback The callback
     */
    createTagLabelLink(tagId: string, labelId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param options The optional parameters
     * @param callback The callback
     */
    createTagLabelLink(tagId: string, labelId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a LabelRoleLink.
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createLabelRoleLink(labelId: string, roleCode: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param callback The callback
     */
    createLabelRoleLink(labelId: string, roleCode: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param options The optional parameters
     * @param callback The callback
     */
    createLabelRoleLink(labelId: string, roleCode: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a tag link.
     * @param objectCode The external linked object's code.
     * @param tagId The tag identifier.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteTagLink(objectCode: string, tagId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param objectCode The external linked object's code.
     * @param tagId The tag identifier.
     * @param callback The callback
     */
    deleteTagLink(objectCode: string, tagId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param objectCode The external linked object's code.
     * @param tagId The tag identifier.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteTagLink(objectCode: string, tagId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a label.
     * @param labelId The identifier of the label to delete.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteLabel(labelId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param labelId The identifier of the label to delete.
     * @param callback The callback
     */
    deleteLabel(labelId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param labelId The identifier of the label to delete.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteLabel(labelId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a Tag-Label link.
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteTagLabelLink(tagId: string, labelId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param callback The callback
     */
    deleteTagLabelLink(tagId: string, labelId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagId The tag identifier.
     * @param labelId The label identifier.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteTagLabelLink(tagId: string, labelId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a LabelRoleLink.
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteLabelRoleLink(labelId: string, roleCode: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param callback The callback
     */
    deleteLabelRoleLink(labelId: string, roleCode: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param labelId The label identifier.
     * @param roleCode The role code.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteLabelRoleLink(labelId: string, roleCode: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=tag.d.ts.map