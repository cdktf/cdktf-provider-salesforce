/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSalesforceUserLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that uniquely identifies a particular user license. Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}
  */
  readonly licenseDefinitionKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license salesforce_user_license}
*/
export class DataSalesforceUserLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "salesforce_user_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license salesforce_user_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSalesforceUserLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataSalesforceUserLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'salesforce_user_license',
      terraformGeneratorMetadata: {
        providerName: 'salesforce',
        providerVersion: '0.1.0',
        providerVersionConstraint: '~> 0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenseDefinitionKey = config.licenseDefinitionKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_definition_key - computed: false, optional: false, required: true
  private _licenseDefinitionKey?: string; 
  public get licenseDefinitionKey() {
    return this.getStringAttribute('license_definition_key');
  }
  public set licenseDefinitionKey(value: string) {
    this._licenseDefinitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseDefinitionKeyInput() {
    return this._licenseDefinitionKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      license_definition_key: cdktf.stringToTerraform(this._licenseDefinitionKey),
    };
  }
}
