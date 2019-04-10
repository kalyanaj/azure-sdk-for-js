/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/iotHubMappers";
import * as Parameters from "../models/parameters";
import { IotHubClientContext } from "../iotHubClientContext";

/** Class representing a IotHub. */
export class IotHub {
  private readonly client: IotHubClientContext;

  /**
   * Create a IotHub.
   * @param {IotHubClientContext} client Reference to the service client.
   */
  constructor(client: IotHubClientContext) {
    this.client = client;
  }

  /**
   * Perform manual fail over of given hub
   * @summary Manual Failover Fail over
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverRegion Region the hub will be failed over to
   * @param [options] The optional parameters
   * @returns Promise<Models.IotHubManualFailoverResponse>
   */
  manualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, options?: msRest.RequestOptionsBase): Promise<Models.IotHubManualFailoverResponse>;
  /**
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverRegion Region the hub will be failed over to
   * @param callback The callback
   */
  manualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, callback: msRest.ServiceCallback<Models.IotHubDescription>): void;
  /**
   * @param iotHubName IotHub to fail over
   * @param resourceGroupName resource group which Iot Hub belongs to
   * @param failoverRegion Region the hub will be failed over to
   * @param options The optional parameters
   * @param callback The callback
   */
  manualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IotHubDescription>): void;
  manualFailover(iotHubName: string, resourceGroupName: string, failoverRegion: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IotHubDescription>, callback?: msRest.ServiceCallback<Models.IotHubDescription>): Promise<Models.IotHubManualFailoverResponse> {
    return this.client.sendOperationRequest(
      {
        iotHubName,
        resourceGroupName,
        failoverRegion,
        options
      },
      manualFailoverOperationSpec,
      callback) as Promise<Models.IotHubManualFailoverResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const manualFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  urlParameters: [
    Parameters.iotHubName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      failoverRegion: "failoverRegion"
    },
    mapper: {
      ...Mappers.FailoverInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IotHubDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  serializer
};