/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import * as tslib_1 from "tslib";
import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/requestMappers";
import * as Parameters from "../models/parameters";
/** Class representing a Request. */
var Request = /** @class */ (function () {
    /**
     * Create a Request.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    function Request(client) {
        this.client = client;
    }
    Request.prototype.deleteRequest = function (requestId, options, callback) {
        return this.client.sendOperationRequest({
            requestId: requestId,
            options: options
        }, deleteRequestOperationSpec, callback);
    };
    Request.prototype.getRequests = function (options, callback) {
        return this.client.sendOperationRequest({
            options: options
        }, getRequestsOperationSpec, callback);
    };
    Request.prototype.getRequest = function (requestId, options, callback) {
        return this.client.sendOperationRequest({
            requestId: requestId,
            options: options
        }, getRequestOperationSpec, callback);
    };
    Request.prototype.createRequest = function (request, options, callback) {
        return this.client.sendOperationRequest({
            request: request,
            options: options
        }, createRequestOperationSpec, callback);
    };
    Request.prototype.updateRequest = function (request, options, callback) {
        return this.client.sendOperationRequest({
            request: request,
            options: options
        }, updateRequestOperationSpec, callback);
    };
    Request.prototype.updateRequestAttributes = function (request, options, callback) {
        return this.client.sendOperationRequest({
            request: request,
            options: options
        }, updateRequestAttributesOperationSpec, callback);
    };
    return Request;
}());
export { Request };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var deleteRequestOperationSpec = {
    httpMethod: "DELETE",
    path: "Request/DELETE/DeleteRequest",
    queryParameters: [
        Parameters.requestId
    ],
    responses: {
        204: {},
        default: {}
    },
    serializer: serializer
};
var getRequestsOperationSpec = {
    httpMethod: "GET",
    path: "Request/GET/GetRequests",
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "CyberjusticeLabKernelSharedRequestRequestData"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var getRequestOperationSpec = {
    httpMethod: "GET",
    path: "Request/GET/GetRequest",
    queryParameters: [
        Parameters.requestId
    ],
    responses: {
        200: {
            bodyMapper: Mappers.CyberjusticeLabKernelSharedRequestRequestData
        },
        default: {}
    },
    serializer: serializer
};
var createRequestOperationSpec = {
    httpMethod: "POST",
    path: "Request/POST/CreateRequest",
    requestBody: {
        parameterPath: "request",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedRequestRequestCreateData, { required: true })
    },
    responses: {
        400: {},
        default: {}
    },
    serializer: serializer
};
var updateRequestOperationSpec = {
    httpMethod: "PUT",
    path: "Request/PUT/UpdateRequest",
    requestBody: {
        parameterPath: "request",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedRequestRequestUpdateData, { required: true })
    },
    responses: {
        400: {},
        404: {},
        default: {}
    },
    serializer: serializer
};
var updateRequestAttributesOperationSpec = {
    httpMethod: "PUT",
    path: "Request/PUT/UpdateRequestAttributes",
    requestBody: {
        parameterPath: "request",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData, { required: true })
    },
    responses: {
        404: {},
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=request.js.map