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
import * as Mappers from "../models/eventsMappers";
import * as Parameters from "../models/parameters";
import { PersonalizerClientContext } from "../personalizerClientContext";

/** Class representing a Events. */
export class Events {
  private readonly client: PersonalizerClientContext;

  /**
   * Create a Events.
   * @param {PersonalizerClientContext} client Reference to the service client.
   */
  constructor(client: PersonalizerClientContext) {
    this.client = client;
  }

  /**
   * @summary Report reward to allocate to the top ranked action for the specified event.
   * @param eventId The event id this reward applies to.
   * @param rewardParameter The reward should be a floating point number.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  reward(eventId: string, rewardParameter: Models.RewardRequest, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param eventId The event id this reward applies to.
   * @param rewardParameter The reward should be a floating point number.
   * @param callback The callback
   */
  reward(eventId: string, rewardParameter: Models.RewardRequest, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param eventId The event id this reward applies to.
   * @param rewardParameter The reward should be a floating point number.
   * @param options The optional parameters
   * @param callback The callback
   */
  reward(eventId: string, rewardParameter: Models.RewardRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  reward(eventId: string, rewardParameter: Models.RewardRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        eventId,
        rewardParameter,
        options
      },
      rewardOperationSpec,
      callback);
  }

  /**
   * @summary Report that the specified event was actually displayed to the user and a reward should
   * be expected for it.
   * @param eventId The event ID this activation applies to.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  activate(eventId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param eventId The event ID this activation applies to.
   * @param callback The callback
   */
  activate(eventId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param eventId The event ID this activation applies to.
   * @param options The optional parameters
   * @param callback The callback
   */
  activate(eventId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  activate(eventId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        eventId,
        options
      },
      activateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const rewardOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "events/{eventId}/reward",
  urlParameters: [
    Parameters.endpoint,
    Parameters.eventId
  ],
  requestBody: {
    parameterPath: "rewardParameter",
    mapper: {
      ...Mappers.RewardRequest,
      required: true
    }
  },
  responses: {
    204: {},
    default: {}
  },
  serializer
};

const activateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "events/{eventId}/activate",
  urlParameters: [
    Parameters.endpoint,
    Parameters.eventId
  ],
  responses: {
    204: {},
    default: {}
  },
  serializer
};
