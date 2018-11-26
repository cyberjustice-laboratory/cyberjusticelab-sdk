/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/businessInformationMappers";
import * as Parameters from "../models/parameters";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";

/** Class representing a BusinessInformation. */
export class BusinessInformation {
  private readonly client: CyberjusticeAPIsContext;

  /**
   * Create a BusinessInformation.
   * @param {CyberjusticeAPIsContext} client Reference to the service client.
   */
  constructor(client: CyberjusticeAPIsContext) {
    this.client = client;
  }

  /**
   * @summary Verify if a file's status can go from state one to another one.
   * @param statusTo The next status.
   * @param statusFrom The status.
   * @param fileId ID of the file to validate
   * @param [options] The optional parameters
   * @returns Promise<Models.BusinessInformationValidateTransitionStatusResponse>
   */
  validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.BusinessInformationValidateTransitionStatusResponse>;
  /**
   * @param statusTo The next status.
   * @param statusFrom The status.
   * @param fileId ID of the file to validate
   * @param callback The callback
   */
  validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param statusTo The next status.
   * @param statusFrom The status.
   * @param fileId ID of the file to validate
   * @param options The optional parameters
   * @param callback The callback
   */
  validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  validateTransitionStatus(statusTo: string, statusFrom: string, fileId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.BusinessInformationValidateTransitionStatusResponse> {
    return this.client.sendOperationRequest(
      {
        statusTo,
        statusFrom,
        fileId,
        options
      },
      validateTransitionStatusOperationSpec,
      callback) as Promise<Models.BusinessInformationValidateTransitionStatusResponse>;
  }

  /**
   * This returns nothing to a user with a public or representative role.
   * @summary Files with party question proposals counts.
   * @param judicialEntityId The judicial entity of the files.
   * @param businessRuleName The business rules of the files.
   * @param [options] The optional parameters
   * @returns Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse>
   */
  judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse>;
  /**
   * @param judicialEntityId The judicial entity of the files.
   * @param businessRuleName The business rules of the files.
   * @param callback The callback
   */
  judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>): void;
  /**
   * @param judicialEntityId The judicial entity of the files.
   * @param businessRuleName The business rules of the files.
   * @param options The optional parameters
   * @param callback The callback
   */
  judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>): void;
  judicialFileWithFormProposalsCount(judicialEntityId: string, businessRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[]>): Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse> {
    return this.client.sendOperationRequest(
      {
        judicialEntityId,
        businessRuleName,
        options
      },
      judicialFileWithFormProposalsCountOperationSpec,
      callback) as Promise<Models.BusinessInformationJudicialFileWithFormProposalsCountResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const validateTransitionStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "BusinessInformation/GET/ValidateTransitionStatus",
  queryParameters: [
    Parameters.statusTo,
    Parameters.statusFrom,
    Parameters.fileId0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const judicialFileWithFormProposalsCountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "BusinessInformation/GET/JudicialFileWithFormProposalsCount",
  queryParameters: [
    Parameters.judicialEntityId0,
    Parameters.businessRuleName
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};