// https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSalesforceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile#name DataSalesforceProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile salesforce_profile}
*/
export class DataSalesforceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "salesforce_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSalesforceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSalesforceProfile to import
  * @param importFromId The id of the existing DataSalesforceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSalesforceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "salesforce_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile salesforce_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSalesforceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSalesforceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'salesforce_profile',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
