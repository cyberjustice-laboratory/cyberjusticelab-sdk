/* eslint-disable */ 
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
import * as tslib_1 from "tslib";
import axios from "axios";
import { Transform } from "stream";
import FormData from "form-data";
import * as tough from "tough-cookie";
import * as msrest from "@azure/ms-rest-js";
import * as https from "https";
// Workaround for https://github.com/axios/axios/issues/1158
export var axiosFromApi = axios;
/**
 * A HttpClient implementation that uses axios to send HTTP requests.
 */
var AxiosHttpClient = /** @class */ (function () {
    function AxiosHttpClient(token) {
        this.cookieJar = new tough.CookieJar();
        this.token = token;
        this.axiosClient = axios.create({
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        this.axiosClient.interceptors.request.use(function (config) { return (tslib_1.__assign({}, config, { method: config.method && config.method.toUpperCase() })); });
    }
    AxiosHttpClient.prototype.sendRequest = function (httpRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData, requestForm_1, appendFormValue, _i, _a, formKey, formValue, j, contentType, cookieString, abortSignal, abortListener, cancelToken, rawHeaders, httpRequestBody, axiosBody, onUploadProgress, loadedBytes_1, uploadReportStream, res, config, err_1, axiosErr, headers, onDownloadProgress, responseBody, loadedBytes_2, downloadReportStream, length, operationResponse;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!httpRequest) {
                            throw new Error("httpRequest (WebResource) cannot be null or undefined and must be of type object.");
                        }
                        if (httpRequest.formData) {
                            formData = httpRequest.formData;
                            requestForm_1 = new FormData();
                            appendFormValue = function (key, value) {
                                // value function probably returns a stream so we can provide a fresh stream on each retry
                                if (typeof value === "function") {
                                    value = value();
                                }
                                if (value &&
                                    value.hasOwnProperty("value") &&
                                    value.hasOwnProperty("options")) {
                                    requestForm_1.append(key, value.value, value.options);
                                }
                                else {
                                    requestForm_1.append(key, value);
                                }
                            };
                            for (_i = 0, _a = Object.keys(formData); _i < _a.length; _i++) {
                                formKey = _a[_i];
                                formValue = formData[formKey];
                                if (Array.isArray(formValue)) {
                                    for (j = 0; j < formValue.length; j++) {
                                        appendFormValue(formKey, formValue[j]);
                                    }
                                }
                                else {
                                    appendFormValue(formKey, formValue);
                                }
                            }
                            httpRequest.body = requestForm_1;
                            httpRequest.formData = undefined;
                            contentType = httpRequest.headers.get("Content-Type");
                            if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
                                if (typeof requestForm_1.getBoundary === "function") {
                                    httpRequest.headers.set("Content-Type", "multipart/form-data; boundary=" + requestForm_1.getBoundary());
                                }
                                else {
                                    // browser will automatically apply a suitable content-type header
                                    httpRequest.headers.remove("Content-Type");
                                }
                            }
                        }
                        if (!(this.cookieJar && !httpRequest.headers.get("Cookie"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.cookieJar.getCookieString(httpRequest.url, function (err, cookie) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(cookie);
                                    }
                                });
                            })];
                    case 1:
                        cookieString = _b.sent();
                        httpRequest.headers.set("Cookie", cookieString);
                        _b.label = 2;
                    case 2:
                        abortSignal = httpRequest.abortSignal;
                        if (abortSignal && abortSignal.aborted) {
                            throw new msrest.RestError("The request was aborted", msrest.RestError.REQUEST_ABORTED_ERROR, undefined, httpRequest);
                        }
                        cancelToken = abortSignal &&
                            new axios.CancelToken(function (canceler) {
                                abortListener = function () { return canceler(); };
                                abortSignal.addEventListener("abort", abortListener);
                            });
                        rawHeaders = {
                            Authorization: "bearer " + this.token,
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        };
                        httpRequestBody = httpRequest.body;
                        axiosBody = 
                        // Workaround for https://github.com/axios/axios/issues/755
                        // tslint:disable-next-line:no-null-keyword
                        typeof httpRequestBody === "undefined"
                            ? null
                            : typeof httpRequestBody === "function"
                                ? httpRequestBody()
                                : httpRequestBody;
                        onUploadProgress = httpRequest.onUploadProgress;
                        if (onUploadProgress && axiosBody) {
                            loadedBytes_1 = 0;
                            uploadReportStream = new Transform({
                                transform: function (chunk, _encoding, callback) {
                                    loadedBytes_1 += chunk.length;
                                    onUploadProgress({ loadedBytes: loadedBytes_1 });
                                    callback(undefined, chunk);
                                }
                            });
                            if (isReadableStream(axiosBody)) {
                                axiosBody.pipe(uploadReportStream);
                            }
                            else {
                                uploadReportStream.end(axiosBody);
                            }
                            axiosBody = uploadReportStream;
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, 6, 7]);
                        config = {
                            method: httpRequest.method,
                            url: httpRequest.url,
                            headers: rawHeaders,
                            data: axiosBody,
                            transformResponse: undefined,
                            validateStatus: function (status) {
                                console.log(status);
                                return true;
                            },
                            // Workaround for https://github.com/axios/axios/issues/1362
                            maxContentLength: 1024 * 1024 * 1024 * 10,
                            responseType: httpRequest.streamResponseBody ? "stream" : "text",
                            cancelToken: cancelToken,
                            timeout: httpRequest.timeout
                        };
                        return [4 /*yield*/, this.axiosClient(config)];
                    case 4:
                        res = _b.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        err_1 = _b.sent();
                        console.log("ERROR");
                        if (err_1 instanceof axios.Cancel) {
                            throw new msrest.RestError(err_1.message, msrest.RestError.REQUEST_SEND_ERROR, undefined, httpRequest);
                        }
                        else {
                            axiosErr = err_1;
                            throw new msrest.RestError(axiosErr.message, msrest.RestError.REQUEST_SEND_ERROR, undefined, httpRequest);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        if (abortSignal && abortListener) {
                            abortSignal.removeEventListener("abort", abortListener);
                        }
                        return [7 /*endfinally*/];
                    case 7:
                        headers = new msrest.HttpHeaders(res.headers);
                        onDownloadProgress = httpRequest.onDownloadProgress;
                        responseBody = res.data;
                        if (onDownloadProgress) {
                            if (isReadableStream(responseBody)) {
                                loadedBytes_2 = 0;
                                downloadReportStream = new Transform({
                                    transform: function (chunk, _encoding, callback) {
                                        loadedBytes_2 += chunk.length;
                                        onDownloadProgress({ loadedBytes: loadedBytes_2 });
                                        callback(undefined, chunk);
                                    }
                                });
                                responseBody.pipe(downloadReportStream);
                                responseBody = downloadReportStream;
                            }
                            else {
                                length = parseInt(headers.get("Content-Length")) ||
                                    responseBody.length ||
                                    undefined;
                                if (length) {
                                    // Calling callback for non-stream response for consistency with browser
                                    onDownloadProgress({ loadedBytes: length });
                                }
                            }
                        }
                        operationResponse = {
                            request: httpRequest,
                            status: res.status,
                            headers: headers,
                            readableStreamBody: httpRequest.streamResponseBody
                                ? responseBody
                                : undefined,
                            bodyAsText: httpRequest.streamResponseBody
                                ? undefined
                                : responseBody
                        };
                        return [2 /*return*/, operationResponse];
                }
            });
        });
    };
    return AxiosHttpClient;
}());
export { AxiosHttpClient };
function isReadableStream(body) {
    return typeof body.pipe === "function";
}
//# sourceMappingURL=axiosClient.js.map