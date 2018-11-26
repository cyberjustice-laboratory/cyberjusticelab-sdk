import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Location. */
export declare class Location {
    private readonly client;
    /**
     * Create a Location.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * Leave the optional filter parameters to their default, null or empty lists to ignore them.
     * List filters that only contains 1 element are optimized.
     * @summary Get all the buildings. Optional filter parameters can be used.
     * @param [options] The optional parameters
     * @returns Promise<Models.LocationGetBuildingsResponse>
     */
    getBuildings(options?: Models.LocationGetBuildingsOptionalParams): Promise<Models.LocationGetBuildingsResponse>;
    /**
     * @param callback The callback
     */
    getBuildings(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getBuildings(options: Models.LocationGetBuildingsOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData[]>): void;
    /**
     * @summary Get a specific building.
     * @param buildingId The building Id.
     * @param [options] The optional parameters
     * @returns Promise<Models.LocationGetBuildingResponse>
     */
    getBuilding(buildingId: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationGetBuildingResponse>;
    /**
     * @param buildingId The building Id.
     * @param callback The callback
     */
    getBuilding(buildingId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData>): void;
    /**
     * @param buildingId The building Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getBuilding(buildingId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData>): void;
    /**
     * @summary Get a specific building that contains the given room.
     * @param roomId The room id.
     * @param [options] The optional parameters
     * @returns Promise<Models.LocationGetBuildingWithRoomResponse>
     */
    getBuildingWithRoom(roomId: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationGetBuildingWithRoomResponse>;
    /**
     * @param roomId The room id.
     * @param callback The callback
     */
    getBuildingWithRoom(roomId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData>): void;
    /**
     * @param roomId The room id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getBuildingWithRoom(roomId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedLocationLocationBuildingData>): void;
    /**
     * @summary Toggle the building's LocationStatus enum between active and inactive. Use this instead
     * of delete.
     * @param buildingId The building's Id.
     * @param modifiedTicks The modified date ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    toggleBuildingStatus(buildingId: string, modifiedTicks: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param buildingId The building's Id.
     * @param modifiedTicks The modified date ticks.
     * @param callback The callback
     */
    toggleBuildingStatus(buildingId: string, modifiedTicks: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param buildingId The building's Id.
     * @param modifiedTicks The modified date ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    toggleBuildingStatus(buildingId: string, modifiedTicks: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Toggle the rooms's LocationStatus enum between active and inactive. Use this instead of
     * delete.
     * @param roomId The room's Id.
     * @param modifiedTicks The modified date ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    toggleRoomStatus(roomId: string, modifiedTicks: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param roomId The room's Id.
     * @param modifiedTicks The modified date ticks.
     * @param callback The callback
     */
    toggleRoomStatus(roomId: string, modifiedTicks: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param roomId The room's Id.
     * @param modifiedTicks The modified date ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    toggleRoomStatus(roomId: string, modifiedTicks: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a building.
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingUpdateData}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingUpdateData}
     * object.
     * @param callback The callback
     */
    updateBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingUpdateData}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a room.
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomUpdateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomUpdateData} object.
     * @param callback The callback
     */
    updateRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomUpdateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a building.
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingCreateData}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingCreateData}
     * object.
     * @param callback The callback
     */
    createBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param buildingData A {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingCreateData}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createBuilding(buildingData: Models.CyberjusticeLabKernelSharedLocationLocationBuildingCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a room.
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomCreateData} object.
     * @param callback The callback
     */
    createRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param roomData A {CyberjusticeLab.Kernel.Shared.Location.LocationRoomCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createRoom(roomData: Models.CyberjusticeLabKernelSharedLocationLocationRoomCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=location.d.ts.map