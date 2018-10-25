/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/applicationPackageOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a ApplicationPackageOperations. */
export class ApplicationPackageOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a ApplicationPackageOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Activates the specified application package.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to activate.
   * @param format The format of the application package binary file.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to activate.
   * @param format The format of the application package binary file.
   * @param callback The callback
   */
  activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to activate.
   * @param format The format of the application package binary file.
   * @param options The optional parameters
   * @param callback The callback
   */
  activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationId,
        version,
        format,
        options
      },
      activateOperationSpec,
      callback);
  }

  /**
   * Creates an application package record.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationPackageCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  create(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationPackage>): Promise<Models.ApplicationPackageCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationId,
        version,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ApplicationPackageCreateResponse>;
  }

  /**
   * Deletes an application package record and its associated binary file.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to delete.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationId,
        version,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets information about the specified application package.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationPackageGetResponse>
   */
  get(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationPackageGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationId The ID of the application.
   * @param version The version of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
  get(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ApplicationPackage>): Promise<Models.ApplicationPackageGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationId,
        version,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationPackageGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const activateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId}/versions/{version}/activate",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.applicationId,
    Parameters.version,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      format: "format"
    },
    mapper: {
      ...Mappers.ActivateApplicationPackageParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId}/versions/{version}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.applicationId,
    Parameters.version,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    201: {
      bodyMapper: Mappers.ApplicationPackage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId}/versions/{version}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.applicationId,
    Parameters.version,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationId}/versions/{version}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.applicationId,
    Parameters.version,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};