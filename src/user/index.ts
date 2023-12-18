// https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user’s alias. For example, jsmith.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}
  */
  readonly alias: string;
  /**
  * The user’s email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}
  */
  readonly emailEncodingKey?: string;
  /**
  * The user’s language. Defaults to en_US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}
  */
  readonly languageLocaleKey?: string;
  /**
  * The user’s last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}
  */
  readonly localeSidKey?: string;
  /**
  * ID of the user’s Profile. Use this value to cache metadata based on profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}
  */
  readonly profileId: string;
  /**
  * Reset password and send an email to the user. No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}
  */
  readonly resetPassword?: boolean | cdktf.IResolvable;
  /**
  * A User time zone affects the offset used when displaying or entering times in the user interface. But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}
  */
  readonly timeZoneSidKey?: string;
  /**
  * ID of the user’s UserRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}
  */
  readonly userRoleId?: string;
  /**
  * Contains the name that a user enters to log in to the API or the user interface. The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "salesforce_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "salesforce_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'salesforce_user',
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
    this._alias = config.alias;
    this._email = config.email;
    this._emailEncodingKey = config.emailEncodingKey;
    this._languageLocaleKey = config.languageLocaleKey;
    this._lastName = config.lastName;
    this._localeSidKey = config.localeSidKey;
    this._profileId = config.profileId;
    this._resetPassword = config.resetPassword;
    this._timeZoneSidKey = config.timeZoneSidKey;
    this._userRoleId = config.userRoleId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_encoding_key - computed: true, optional: true, required: false
  private _emailEncodingKey?: string; 
  public get emailEncodingKey() {
    return this.getStringAttribute('email_encoding_key');
  }
  public set emailEncodingKey(value: string) {
    this._emailEncodingKey = value;
  }
  public resetEmailEncodingKey() {
    this._emailEncodingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailEncodingKeyInput() {
    return this._emailEncodingKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_locale_key - computed: true, optional: true, required: false
  private _languageLocaleKey?: string; 
  public get languageLocaleKey() {
    return this.getStringAttribute('language_locale_key');
  }
  public set languageLocaleKey(value: string) {
    this._languageLocaleKey = value;
  }
  public resetLanguageLocaleKey() {
    this._languageLocaleKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageLocaleKeyInput() {
    return this._languageLocaleKey;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locale_sid_key - computed: true, optional: true, required: false
  private _localeSidKey?: string; 
  public get localeSidKey() {
    return this.getStringAttribute('locale_sid_key');
  }
  public set localeSidKey(value: string) {
    this._localeSidKey = value;
  }
  public resetLocaleSidKey() {
    this._localeSidKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeSidKeyInput() {
    return this._localeSidKey;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // reset_password - computed: true, optional: true, required: false
  private _resetPassword?: boolean | cdktf.IResolvable; 
  public get resetPassword() {
    return this.getBooleanAttribute('reset_password');
  }
  public set resetPassword(value: boolean | cdktf.IResolvable) {
    this._resetPassword = value;
  }
  public resetResetPassword() {
    this._resetPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordInput() {
    return this._resetPassword;
  }

  // time_zone_sid_key - computed: true, optional: true, required: false
  private _timeZoneSidKey?: string; 
  public get timeZoneSidKey() {
    return this.getStringAttribute('time_zone_sid_key');
  }
  public set timeZoneSidKey(value: string) {
    this._timeZoneSidKey = value;
  }
  public resetTimeZoneSidKey() {
    this._timeZoneSidKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneSidKeyInput() {
    return this._timeZoneSidKey;
  }

  // user_role_id - computed: false, optional: true, required: false
  private _userRoleId?: string; 
  public get userRoleId() {
    return this.getStringAttribute('user_role_id');
  }
  public set userRoleId(value: string) {
    this._userRoleId = value;
  }
  public resetUserRoleId() {
    this._userRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleIdInput() {
    return this._userRoleId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      email: cdktf.stringToTerraform(this._email),
      email_encoding_key: cdktf.stringToTerraform(this._emailEncodingKey),
      language_locale_key: cdktf.stringToTerraform(this._languageLocaleKey),
      last_name: cdktf.stringToTerraform(this._lastName),
      locale_sid_key: cdktf.stringToTerraform(this._localeSidKey),
      profile_id: cdktf.stringToTerraform(this._profileId),
      reset_password: cdktf.booleanToTerraform(this._resetPassword),
      time_zone_sid_key: cdktf.stringToTerraform(this._timeZoneSidKey),
      user_role_id: cdktf.stringToTerraform(this._userRoleId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
