import * as msrest from "@azure/ms-rest-js";
export declare const axiosFromApi: import("axios").AxiosStatic;
/**
 * A HttpClient implementation that uses axios to send HTTP requests.
 */
export declare class AxiosHttpClient implements msrest.HttpClient {
    private readonly cookieJar;
    private readonly axiosClient;
    private readonly token;
    constructor(token: string);
    sendRequest(httpRequest: msrest.WebResource): Promise<msrest.HttpOperationResponse>;
}
//# sourceMappingURL=axiosClient.d.ts.map