import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Document. */
export declare class Document {
    private readonly client;
    /**
     * Create a Document.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Delete document.
     * @param documentId The ID of the document.
     * @param fileId File id the document belongs to.
     * @param currentVersion Current version of the document.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteDocument(documentId: string, fileId: string, currentVersion: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param documentId The ID of the document.
     * @param fileId File id the document belongs to.
     * @param currentVersion Current version of the document.
     * @param callback The callback
     */
    deleteDocument(documentId: string, fileId: string, currentVersion: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param documentId The ID of the document.
     * @param fileId File id the document belongs to.
     * @param currentVersion Current version of the document.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteDocument(documentId: string, fileId: string, currentVersion: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete document attributes.
     * @param documentId The list of attributes to delete.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteDocumentAttributes(documentId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param documentId The list of attributes to delete.
     * @param callback The callback
     */
    deleteDocumentAttributes(documentId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param documentId The list of attributes to delete.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteDocumentAttributes(documentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get the documents metadata of a file. Optional filters.
     * @param fileId The file Guid containing the requested documents.
     * @param [options] The optional parameters
     * @returns Promise<Models.DocumentGetDocumentsMetadataResponse>
     */
    getDocumentsMetadata(fileId: string, options?: Models.DocumentGetDocumentsMetadataOptionalParams): Promise<Models.DocumentGetDocumentsMetadataResponse>;
    /**
     * @param fileId The file Guid containing the requested documents.
     * @param callback The callback
     */
    getDocumentsMetadata(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsDocumentDocumentData[]>): void;
    /**
     * @param fileId The file Guid containing the requested documents.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDocumentsMetadata(fileId: string, options: Models.DocumentGetDocumentsMetadataOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsDocumentDocumentData[]>): void;
    /**
     * @summary Get a document by Id.
     * @param documentId The requested document Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.DocumentGetDocumentMetadataResponse>
     */
    getDocumentMetadata(documentId: string, options?: msRest.RequestOptionsBase): Promise<Models.DocumentGetDocumentMetadataResponse>;
    /**
     * @param documentId The requested document Guid.
     * @param callback The callback
     */
    getDocumentMetadata(documentId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsDocumentDocumentData>): void;
    /**
     * @param documentId The requested document Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDocumentMetadata(documentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsDocumentDocumentData>): void;
    /**
     * @summary Returns a document as a Base64String.
     * @param fileId The judicial file Guid.
     * @param documentId The document Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.DocumentGetDocumentContentByIdResponse>
     */
    getDocumentContentById(fileId: string, documentId: string, options?: msRest.RequestOptionsBase): Promise<Models.DocumentGetDocumentContentByIdResponse>;
    /**
     * @param fileId The judicial file Guid.
     * @param documentId The document Guid.
     * @param callback The callback
     */
    getDocumentContentById(fileId: string, documentId: string, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param fileId The judicial file Guid.
     * @param documentId The document Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDocumentContentById(fileId: string, documentId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Get the list of documents.
     * @param requestModel Document filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.DocumentGetDocumentsResponse>
     */
    getDocuments(requestModel: Models.CyberjusticeLabKernelSharedDocumentModelsDocumentApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.DocumentGetDocumentsResponse>;
    /**
     * @param requestModel Document filter model.
     * @param callback The callback
     */
    getDocuments(requestModel: Models.CyberjusticeLabKernelSharedDocumentModelsDocumentApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData>): void;
    /**
     * @param requestModel Document filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getDocuments(requestModel: Models.CyberjusticeLabKernelSharedDocumentModelsDocumentApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData>): void;
    /**
     * @summary Create a document.
     * @param documentModel A CreateDocumentModel object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createDocument(documentModel: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param documentModel A CreateDocumentModel object.
     * @param callback The callback
     */
    createDocument(documentModel: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param documentModel A CreateDocumentModel object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createDocument(documentModel: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create multiple documents.
     * @param documentModels A {CyberjusticeLab.Kernel.Shared.Document.Models.CreateDocumentsModel}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<Models.DocumentCreateDocumentsResponse>
     */
    createDocuments(documentModels: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsModel, options?: msRest.RequestOptionsBase): Promise<Models.DocumentCreateDocumentsResponse>;
    /**
     * @param documentModels A {CyberjusticeLab.Kernel.Shared.Document.Models.CreateDocumentsModel}
     * object.
     * @param callback The callback
     */
    createDocuments(documentModels: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsModel, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel>): void;
    /**
     * @param documentModels A {CyberjusticeLab.Kernel.Shared.Document.Models.CreateDocumentsModel}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createDocuments(documentModels: Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel>): void;
    /**
     * @summary Update document content.
     * @param model The document to update.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateDocumentContent(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentContentModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The document to update.
     * @param callback The callback
     */
    updateDocumentContent(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentContentModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The document to update.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateDocumentContent(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentContentModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a document's metadata.
     * @param model Metadata of a document.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateDocumentMetadata(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentMetadatasModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model Metadata of a document.
     * @param callback The callback
     */
    updateDocumentMetadata(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentMetadatasModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model Metadata of a document.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateDocumentMetadata(model: Models.CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentMetadatasModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a document's attributes.
     * @param attributes List of document attributes.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateDocumentAttributes(attributes: Models.CyberjusticeLabKernelSharedDocumentModelsEditDocumentAttributeModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param attributes List of document attributes.
     * @param callback The callback
     */
    updateDocumentAttributes(attributes: Models.CyberjusticeLabKernelSharedDocumentModelsEditDocumentAttributeModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param attributes List of document attributes.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateDocumentAttributes(attributes: Models.CyberjusticeLabKernelSharedDocumentModelsEditDocumentAttributeModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=document.d.ts.map