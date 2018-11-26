/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/uProfileMappers";
import * as Parameters from "../models/parameters";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";

/** Class representing a UProfile. */
export class UProfile {
  private readonly client: CyberjusticeAPIsContext;

  /**
   * Create a UProfile.
   * @param {CyberjusticeAPIsContext} client Reference to the service client.
   */
  constructor(client: CyberjusticeAPIsContext) {
    this.client = client;
  }

  /**
   * @summary Return the current user profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.UProfileGetCurrentUserProfileResponse>
   */
  getCurrentUserProfile(options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetCurrentUserProfileResponse>;
  /**
   * @param callback The callback
   */
  getCurrentUserProfile(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getCurrentUserProfile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
  getCurrentUserProfile(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): Promise<Models.UProfileGetCurrentUserProfileResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getCurrentUserProfileOperationSpec,
      callback) as Promise<Models.UProfileGetCurrentUserProfileResponse>;
  }

  /**
   * @summary Return an user profile in a specified context.
   * @param fileId Id of the file.
   * @param username Id of the user.
   * @param realm Realm.
   * @param [options] The optional parameters
   * @returns Promise<Models.UProfileGetUserProfileResponse>
   */
  getUserProfile(fileId: string, username: string, realm: string, options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetUserProfileResponse>;
  /**
   * @param fileId Id of the file.
   * @param username Id of the user.
   * @param realm Realm.
   * @param callback The callback
   */
  getUserProfile(fileId: string, username: string, realm: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
  /**
   * @param fileId Id of the file.
   * @param username Id of the user.
   * @param realm Realm.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUserProfile(fileId: string, username: string, realm: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): void;
  getUserProfile(fileId: string, username: string, realm: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData>): Promise<Models.UProfileGetUserProfileResponse> {
    return this.client.sendOperationRequest(
      {
        fileId,
        username,
        realm,
        options
      },
      getUserProfileOperationSpec,
      callback) as Promise<Models.UProfileGetUserProfileResponse>;
  }

  /**
   * @summary Return user profiles by current realm.
   * @param [options] The optional parameters
   * @returns Promise<Models.UProfileGetRealmUserProfilesResponse>
   */
  getRealmUserProfiles(options?: msRest.RequestOptionsBase): Promise<Models.UProfileGetRealmUserProfilesResponse>;
  /**
   * @param callback The callback
   */
  getRealmUserProfiles(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRealmUserProfiles(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>): void;
  getRealmUserProfiles(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsUProfileUserData[]>): Promise<Models.UProfileGetRealmUserProfilesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRealmUserProfilesOperationSpec,
      callback) as Promise<Models.UProfileGetRealmUserProfilesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getCurrentUserProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "UProfile/GET/CurrentUserProfile",
  responses: {
    200: {
      bodyMapper: Mappers.CyberjusticeLabKernelServiceContractsUProfileUserData
    },
    default: {}
  },
  serializer
};

const getUserProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "UProfile/GET/UserProfile",
  queryParameters: [
    Parameters.fileId0,
    Parameters.username,
    Parameters.realm
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CyberjusticeLabKernelServiceContractsUProfileUserData
    },
    default: {}
  },
  serializer
};

const getRealmUserProfilesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "UProfile/GET/RealmUserProfiles",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CyberjusticeLabKernelServiceContractsUProfileUserData"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};