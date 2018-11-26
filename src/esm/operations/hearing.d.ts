import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Hearing. */
export declare class Hearing {
    private readonly client;
    /**
     * Create a Hearing.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * Returns null if the menuId was not found.
     * @summary Retrieve a complete menu data with all sub menus and document list
     * @param hearingId Requested menu's hearing id.
     * @param menuId Requested menu's id.
     * @param [options] The optional parameters
     * @returns Promise<Models.HearingGetMenuDataResponse>
     */
    getMenuData(hearingId: string, menuId: string, options?: msRest.RequestOptionsBase): Promise<Models.HearingGetMenuDataResponse>;
    /**
     * @param hearingId Requested menu's hearing id.
     * @param menuId Requested menu's id.
     * @param callback The callback
     */
    getMenuData(hearingId: string, menuId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsHearingMenuData>): void;
    /**
     * @param hearingId Requested menu's hearing id.
     * @param menuId Requested menu's id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getMenuData(hearingId: string, menuId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsHearingMenuData>): void;
    /**
     * @summary Retrieve a list of complete menu data owned by any judges in this file.
     * @param fileId The file Id.
     * @param [options] The optional parameters
     * @returns Promise<Models.HearingGetAllJudgesMenuDataResponse>
     */
    getAllJudgesMenuData(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.HearingGetAllJudgesMenuDataResponse>;
    /**
     * @param fileId The file Id.
     * @param callback The callback
     */
    getAllJudgesMenuData(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsHearingMenuData[]>): void;
    /**
     * @param fileId The file Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getAllJudgesMenuData(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsHearingMenuData[]>): void;
}
//# sourceMappingURL=hearing.d.ts.map