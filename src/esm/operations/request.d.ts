import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Request. */
export declare class Request {
    private readonly client;
    /**
     * Create a Request.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Delete a request.
     * @param requestId The identifier of the request to be deleted.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteRequest(requestId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param requestId The identifier of the request to be deleted.
     * @param callback The callback
     */
    deleteRequest(requestId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param requestId The identifier of the request to be deleted.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteRequest(requestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get all requests.
     * @param [options] The optional parameters
     * @returns Promise<Models.RequestGetRequestsResponse>
     */
    getRequests(options?: msRest.RequestOptionsBase): Promise<Models.RequestGetRequestsResponse>;
    /**
     * @param callback The callback
     */
    getRequests(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedRequestRequestData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getRequests(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedRequestRequestData[]>): void;
    /**
     * @summary Get a specific request.
     * @param requestId The request identifier.
     * @param [options] The optional parameters
     * @returns Promise<Models.RequestGetRequestResponse>
     */
    getRequest(requestId: string, options?: msRest.RequestOptionsBase): Promise<Models.RequestGetRequestResponse>;
    /**
     * @param requestId The request identifier.
     * @param callback The callback
     */
    getRequest(requestId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedRequestRequestData>): void;
    /**
     * @param requestId The request identifier.
     * @param options The optional parameters
     * @param callback The callback
     */
    getRequest(requestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedRequestRequestData>): void;
    /**
     * @summary Create a request.
     * @param request The new {CyberjusticeLab.Kernel.Shared.Request.RequestCreateData} request data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param request The new {CyberjusticeLab.Kernel.Shared.Request.RequestCreateData} request data.
     * @param callback The callback
     */
    createRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param request The new {CyberjusticeLab.Kernel.Shared.Request.RequestCreateData} request data.
     * @param options The optional parameters
     * @param callback The callback
     */
    createRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a request.
     * @param request The updated {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateData} request
     * data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param request The updated {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateData} request
     * data.
     * @param callback The callback
     */
    updateRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param request The updated {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateData} request
     * data.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateRequest(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a request's attributes.
     * @param request The updated request data
     * {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateAttributeData} with the attributes.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateRequestAttributes(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param request The updated request data
     * {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateAttributeData} with the attributes.
     * @param callback The callback
     */
    updateRequestAttributes(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param request The updated request data
     * {CyberjusticeLab.Kernel.Shared.Request.RequestUpdateAttributeData} with the attributes.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateRequestAttributes(request: Models.CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=request.d.ts.map