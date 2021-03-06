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
import * as Models from "./models";

const packageName = "@azure/cognitiveservices-websearch";
const packageVersion = "2.0.1";

export class WebSearchClientContext extends msRest.ServiceClient {
  endpoint?: string;
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the WebSearchClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.WebSearchClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.endpoint = 'https://api.cognitive.microsoft.com';
    this.baseUri = "{Endpoint}";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    if(options.endpoint !== null && options.endpoint !== undefined) {
      this.endpoint = options.endpoint;
    }
  }
}
