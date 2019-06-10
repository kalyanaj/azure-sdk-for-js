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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/policiesMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a Policies. */
export class Policies {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a Policies.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesListResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>, callback?: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): Promise<Models.PoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PoliciesListResponse>;
  }

  /**
   * Retrieve protection policy with specified name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesGetResponse>
   */
  get(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param callback The callback
   */
  get(resourceGroupName: string, policyName: string, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicy>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, policyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicy>): void;
  get(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicy>, callback?: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicy>): Promise<Models.PoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        policyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PoliciesGetResponse>;
  }

  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, policyName: string, cdnWebApplicationFirewallPolicy: Models.CdnWebApplicationFirewallPolicy, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,policyName,cdnWebApplicationFirewallPolicy,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PoliciesCreateOrUpdateResponse>;
  }

  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subcription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesUpdateResponse>
   */
  update(resourceGroupName: string, policyName: string, options?: Models.PoliciesUpdateOptionalParams): Promise<Models.PoliciesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,policyName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PoliciesUpdateResponse>;
  }

  /**
   * Deletes Policy
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, policyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, policyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        policyName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, policyName: string, cdnWebApplicationFirewallPolicy: Models.CdnWebApplicationFirewallPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        policyName,
        cdnWebApplicationFirewallPolicy,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subcription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, policyName: string, options?: Models.PoliciesBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        policyName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>, callback?: msRest.ServiceCallback<Models.CdnWebApplicationFirewallPolicyList>): Promise<Models.PoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PoliciesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies",
  urlParameters: [
    Parameters.resourceGroupName1,
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
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicyList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName1,
    Parameters.policyName,
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
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName1,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName1,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "cdnWebApplicationFirewallPolicy",
    mapper: {
      ...Mappers.CdnWebApplicationFirewallPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    201: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    202: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName1,
    Parameters.policyName,
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
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.CdnWebApplicationFirewallPolicyPatchParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    202: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicyList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
