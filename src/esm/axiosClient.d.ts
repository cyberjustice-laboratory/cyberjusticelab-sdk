import * as msrest from "@azure/ms-rest-js";
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