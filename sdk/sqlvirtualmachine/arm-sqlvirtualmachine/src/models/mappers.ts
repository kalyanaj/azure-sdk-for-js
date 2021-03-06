/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const PrivateIPAddress: msRest.CompositeMapper = {
  serializedName: "PrivateIPAddress",
  type: {
    name: "Composite",
    className: "PrivateIPAddress",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      },
      subnetResourceId: {
        serializedName: "subnetResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LoadBalancerConfiguration: msRest.CompositeMapper = {
  serializedName: "LoadBalancerConfiguration",
  type: {
    name: "Composite",
    className: "LoadBalancerConfiguration",
    modelProperties: {
      privateIpAddress: {
        serializedName: "privateIpAddress",
        type: {
          name: "Composite",
          className: "PrivateIPAddress"
        }
      },
      publicIpAddressResourceId: {
        serializedName: "publicIpAddressResourceId",
        type: {
          name: "String"
        }
      },
      loadBalancerResourceId: {
        serializedName: "loadBalancerResourceId",
        type: {
          name: "String"
        }
      },
      probePort: {
        serializedName: "probePort",
        type: {
          name: "Number"
        }
      },
      sqlVirtualMachineInstances: {
        serializedName: "sqlVirtualMachineInstances",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const AvailabilityGroupListener: msRest.CompositeMapper = {
  serializedName: "AvailabilityGroupListener",
  type: {
    name: "Composite",
    className: "AvailabilityGroupListener",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      availabilityGroupName: {
        serializedName: "properties.availabilityGroupName",
        type: {
          name: "String"
        }
      },
      loadBalancerConfigurations: {
        serializedName: "properties.loadBalancerConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LoadBalancerConfiguration"
            }
          }
        }
      },
      createDefaultAvailabilityGroupIfNotExist: {
        serializedName: "properties.createDefaultAvailabilityGroupIfNotExist",
        type: {
          name: "Boolean"
        }
      },
      port: {
        serializedName: "properties.port",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const WsfcDomainProfile: msRest.CompositeMapper = {
  serializedName: "WsfcDomainProfile",
  type: {
    name: "Composite",
    className: "WsfcDomainProfile",
    modelProperties: {
      domainFqdn: {
        serializedName: "domainFqdn",
        type: {
          name: "String"
        }
      },
      ouPath: {
        serializedName: "ouPath",
        type: {
          name: "String"
        }
      },
      clusterBootstrapAccount: {
        serializedName: "clusterBootstrapAccount",
        type: {
          name: "String"
        }
      },
      clusterOperatorAccount: {
        serializedName: "clusterOperatorAccount",
        type: {
          name: "String"
        }
      },
      sqlServiceAccount: {
        serializedName: "sqlServiceAccount",
        type: {
          name: "String"
        }
      },
      fileShareWitnessPath: {
        serializedName: "fileShareWitnessPath",
        type: {
          name: "String"
        }
      },
      storageAccountUrl: {
        serializedName: "storageAccountUrl",
        type: {
          name: "String"
        }
      },
      storageAccountPrimaryKey: {
        serializedName: "storageAccountPrimaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SqlVirtualMachineGroup: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachineGroup",
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroup",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      sqlImageOffer: {
        serializedName: "properties.sqlImageOffer",
        type: {
          name: "String"
        }
      },
      sqlImageSku: {
        serializedName: "properties.sqlImageSku",
        type: {
          name: "String"
        }
      },
      scaleType: {
        readOnly: true,
        serializedName: "properties.scaleType",
        type: {
          name: "String"
        }
      },
      clusterManagerType: {
        readOnly: true,
        serializedName: "properties.clusterManagerType",
        type: {
          name: "String"
        }
      },
      clusterConfiguration: {
        readOnly: true,
        serializedName: "properties.clusterConfiguration",
        type: {
          name: "String"
        }
      },
      wsfcDomainProfile: {
        serializedName: "properties.wsfcDomainProfile",
        type: {
          name: "Composite",
          className: "WsfcDomainProfile"
        }
      }
    }
  }
};

export const SqlVirtualMachineGroupUpdate: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachineGroupUpdate",
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroupUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceIdentity: msRest.CompositeMapper = {
  serializedName: "ResourceIdentity",
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const WsfcDomainCredentials: msRest.CompositeMapper = {
  serializedName: "WsfcDomainCredentials",
  type: {
    name: "Composite",
    className: "WsfcDomainCredentials",
    modelProperties: {
      clusterBootstrapAccountPassword: {
        serializedName: "clusterBootstrapAccountPassword",
        type: {
          name: "String"
        }
      },
      clusterOperatorAccountPassword: {
        serializedName: "clusterOperatorAccountPassword",
        type: {
          name: "String"
        }
      },
      sqlServiceAccountPassword: {
        serializedName: "sqlServiceAccountPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutoPatchingSettings: msRest.CompositeMapper = {
  serializedName: "AutoPatchingSettings",
  type: {
    name: "Composite",
    className: "AutoPatchingSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      dayOfWeek: {
        serializedName: "dayOfWeek",
        type: {
          name: "Enum",
          allowedValues: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        }
      },
      maintenanceWindowStartingHour: {
        serializedName: "maintenanceWindowStartingHour",
        type: {
          name: "Number"
        }
      },
      maintenanceWindowDuration: {
        serializedName: "maintenanceWindowDuration",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutoBackupSettings: msRest.CompositeMapper = {
  serializedName: "AutoBackupSettings",
  type: {
    name: "Composite",
    className: "AutoBackupSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      enableEncryption: {
        serializedName: "enableEncryption",
        type: {
          name: "Boolean"
        }
      },
      retentionPeriod: {
        serializedName: "retentionPeriod",
        type: {
          name: "Number"
        }
      },
      storageAccountUrl: {
        serializedName: "storageAccountUrl",
        type: {
          name: "String"
        }
      },
      storageAccessKey: {
        serializedName: "storageAccessKey",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      backupSystemDbs: {
        serializedName: "backupSystemDbs",
        type: {
          name: "Boolean"
        }
      },
      backupScheduleType: {
        serializedName: "backupScheduleType",
        type: {
          name: "String"
        }
      },
      fullBackupFrequency: {
        serializedName: "fullBackupFrequency",
        type: {
          name: "String"
        }
      },
      fullBackupStartTime: {
        serializedName: "fullBackupStartTime",
        type: {
          name: "Number"
        }
      },
      fullBackupWindowHours: {
        serializedName: "fullBackupWindowHours",
        type: {
          name: "Number"
        }
      },
      logBackupFrequency: {
        serializedName: "logBackupFrequency",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyVaultCredentialSettings: msRest.CompositeMapper = {
  serializedName: "KeyVaultCredentialSettings",
  type: {
    name: "Composite",
    className: "KeyVaultCredentialSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      credentialName: {
        serializedName: "credentialName",
        type: {
          name: "String"
        }
      },
      azureKeyVaultUrl: {
        serializedName: "azureKeyVaultUrl",
        type: {
          name: "String"
        }
      },
      servicePrincipalName: {
        serializedName: "servicePrincipalName",
        type: {
          name: "String"
        }
      },
      servicePrincipalSecret: {
        serializedName: "servicePrincipalSecret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlConnectivityUpdateSettings: msRest.CompositeMapper = {
  serializedName: "SqlConnectivityUpdateSettings",
  type: {
    name: "Composite",
    className: "SqlConnectivityUpdateSettings",
    modelProperties: {
      connectivityType: {
        serializedName: "connectivityType",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      sqlAuthUpdateUserName: {
        serializedName: "sqlAuthUpdateUserName",
        type: {
          name: "String"
        }
      },
      sqlAuthUpdatePassword: {
        serializedName: "sqlAuthUpdatePassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlWorkloadTypeUpdateSettings: msRest.CompositeMapper = {
  serializedName: "SqlWorkloadTypeUpdateSettings",
  type: {
    name: "Composite",
    className: "SqlWorkloadTypeUpdateSettings",
    modelProperties: {
      sqlWorkloadType: {
        serializedName: "sqlWorkloadType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlStorageUpdateSettings: msRest.CompositeMapper = {
  serializedName: "SqlStorageUpdateSettings",
  type: {
    name: "Composite",
    className: "SqlStorageUpdateSettings",
    modelProperties: {
      diskCount: {
        serializedName: "diskCount",
        type: {
          name: "Number"
        }
      },
      startingDeviceId: {
        serializedName: "startingDeviceId",
        type: {
          name: "Number"
        }
      },
      diskConfigurationType: {
        serializedName: "diskConfigurationType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdditionalFeaturesServerConfigurations: msRest.CompositeMapper = {
  serializedName: "AdditionalFeaturesServerConfigurations",
  type: {
    name: "Composite",
    className: "AdditionalFeaturesServerConfigurations",
    modelProperties: {
      isRServicesEnabled: {
        serializedName: "isRServicesEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServerConfigurationsManagementSettings: msRest.CompositeMapper = {
  serializedName: "ServerConfigurationsManagementSettings",
  type: {
    name: "Composite",
    className: "ServerConfigurationsManagementSettings",
    modelProperties: {
      sqlConnectivityUpdateSettings: {
        serializedName: "sqlConnectivityUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlConnectivityUpdateSettings"
        }
      },
      sqlWorkloadTypeUpdateSettings: {
        serializedName: "sqlWorkloadTypeUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlWorkloadTypeUpdateSettings"
        }
      },
      sqlStorageUpdateSettings: {
        serializedName: "sqlStorageUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlStorageUpdateSettings"
        }
      },
      additionalFeaturesServerConfigurations: {
        serializedName: "additionalFeaturesServerConfigurations",
        type: {
          name: "Composite",
          className: "AdditionalFeaturesServerConfigurations"
        }
      }
    }
  }
};

export const SqlVirtualMachine: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachine",
  type: {
    name: "Composite",
    className: "SqlVirtualMachine",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      virtualMachineResourceId: {
        serializedName: "properties.virtualMachineResourceId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      sqlImageOffer: {
        readOnly: true,
        serializedName: "properties.sqlImageOffer",
        type: {
          name: "String"
        }
      },
      sqlServerLicenseType: {
        serializedName: "properties.sqlServerLicenseType",
        type: {
          name: "String"
        }
      },
      sqlImageSku: {
        serializedName: "properties.sqlImageSku",
        type: {
          name: "String"
        }
      },
      sqlVirtualMachineGroupResourceId: {
        serializedName: "properties.sqlVirtualMachineGroupResourceId",
        type: {
          name: "String"
        }
      },
      wsfcDomainCredentials: {
        serializedName: "properties.wsfcDomainCredentials",
        type: {
          name: "Composite",
          className: "WsfcDomainCredentials"
        }
      },
      autoPatchingSettings: {
        serializedName: "properties.autoPatchingSettings",
        type: {
          name: "Composite",
          className: "AutoPatchingSettings"
        }
      },
      autoBackupSettings: {
        serializedName: "properties.autoBackupSettings",
        type: {
          name: "Composite",
          className: "AutoBackupSettings"
        }
      },
      keyVaultCredentialSettings: {
        serializedName: "properties.keyVaultCredentialSettings",
        type: {
          name: "Composite",
          className: "KeyVaultCredentialSettings"
        }
      },
      serverConfigurationsManagementSettings: {
        serializedName: "properties.serverConfigurationsManagementSettings",
        type: {
          name: "Composite",
          className: "ServerConfigurationsManagementSettings"
        }
      }
    }
  }
};

export const SqlVirtualMachineUpdate: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachineUpdate",
  type: {
    name: "Composite",
    className: "SqlVirtualMachineUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AvailabilityGroupListenerListResult: msRest.CompositeMapper = {
  serializedName: "AvailabilityGroupListenerListResult",
  type: {
    name: "Composite",
    className: "AvailabilityGroupListenerListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityGroupListener"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineGroupListResult: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachineGroupListResult",
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroupListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlVirtualMachineGroup"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineListResult: msRest.CompositeMapper = {
  serializedName: "SqlVirtualMachineListResult",
  type: {
    name: "Composite",
    className: "SqlVirtualMachineListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlVirtualMachine"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
