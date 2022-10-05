// https://www.terraform.io/docs/providers/salesforce/r/profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#description Profile#description}
  */
  readonly description?: string;
  /**
  * The name of the profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#name Profile#name}
  */
  readonly name: string;
  /**
  * Map of permissions for the profile. At this time specific permissions can only be set, the comprehensive list will not be read from Salesforce. The keys should follow Salesforce 'SnakeCase' format however the 'Permissions' prefix should be omitted. Permissions will not import to state due to a technical limitation, you will need to run a subsequent apply if you have permissions set in config during import.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#permissions Profile#permissions}
  */
  readonly permissions?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * ID of the UserLicense associated with this profile. Forces replacement if updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#user_license_id Profile#user_license_id}
  */
  readonly userLicenseId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/salesforce/r/profile salesforce_profile}
*/
export class Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "salesforce_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/salesforce/r/profile salesforce_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._permissions = config.permissions;
    this._userLicenseId = config.userLicenseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get permissions() {
    return this.getBooleanMapAttribute('permissions');
  }
  public set permissions(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // user_license_id - computed: false, optional: false, required: true
  private _userLicenseId?: string; 
  public get userLicenseId() {
    return this.getStringAttribute('user_license_id');
  }
  public set userLicenseId(value: string) {
    this._userLicenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userLicenseIdInput() {
    return this._userLicenseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.hashMapper(cdktf.booleanToTerraform)(this._permissions),
      user_license_id: cdktf.stringToTerraform(this._userLicenseId),
    };
  }
}
