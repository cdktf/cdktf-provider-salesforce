# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-salesforce.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-salesforce.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  email: str,
  last_name: str,
  profile_id: str,
  username: str,
  email_encoding_key: str = None,
  language_locale_key: str = None,
  locale_sid_key: str = None,
  reset_password: typing.Union[bool, IResolvable] = None,
  time_zone_sid_key: str = None,
  user_role_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.alias">alias</a></code> | <code>str</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.email">email</a></code> | <code>str</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.username">username</a></code> | <code>str</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.emailEncodingKey">email_encoding_key</a></code> | <code>str</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.languageLocaleKey">language_locale_key</a></code> | <code>str</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.localeSidKey">locale_sid_key</a></code> | <code>str</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.timeZoneSidKey">time_zone_sid_key</a></code> | <code>str</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.userRoleId">user_role_id</a></code> | <code>str</code> | ID of the user’s UserRole. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.alias"></a>

- *Type:* str

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.email"></a>

- *Type:* str

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.lastName"></a>

- *Type:* str

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.profileId"></a>

- *Type:* str

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.username"></a>

- *Type:* str

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `email_encoding_key`<sup>Optional</sup> <a name="email_encoding_key" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.emailEncodingKey"></a>

- *Type:* str

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `language_locale_key`<sup>Optional</sup> <a name="language_locale_key" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.languageLocaleKey"></a>

- *Type:* str

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `locale_sid_key`<sup>Optional</sup> <a name="locale_sid_key" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.localeSidKey"></a>

- *Type:* str

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `reset_password`<sup>Optional</sup> <a name="reset_password" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.resetPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `time_zone_sid_key`<sup>Optional</sup> <a name="time_zone_sid_key" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.timeZoneSidKey"></a>

- *Type:* str

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `user_role_id`<sup>Optional</sup> <a name="user_role_id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.userRoleId"></a>

- *Type:* str

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-salesforce.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetEmailEncodingKey">reset_email_encoding_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey">reset_language_locale_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLocaleSidKey">reset_locale_sid_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetResetPassword">reset_reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey">reset_time_zone_sid_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetUserRoleId">reset_user_role_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-salesforce.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-salesforce.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-salesforce.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-salesforce.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-salesforce.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-salesforce.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-salesforce.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-salesforce.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-salesforce.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-salesforce.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-salesforce.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-salesforce.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_email_encoding_key` <a name="reset_email_encoding_key" id="@cdktf/provider-salesforce.user.User.resetEmailEncodingKey"></a>

```python
def reset_email_encoding_key() -> None
```

##### `reset_language_locale_key` <a name="reset_language_locale_key" id="@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey"></a>

```python
def reset_language_locale_key() -> None
```

##### `reset_locale_sid_key` <a name="reset_locale_sid_key" id="@cdktf/provider-salesforce.user.User.resetLocaleSidKey"></a>

```python
def reset_locale_sid_key() -> None
```

##### `reset_reset_password` <a name="reset_reset_password" id="@cdktf/provider-salesforce.user.User.resetResetPassword"></a>

```python
def reset_reset_password() -> None
```

##### `reset_time_zone_sid_key` <a name="reset_time_zone_sid_key" id="@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey"></a>

```python
def reset_time_zone_sid_key() -> None
```

##### `reset_user_role_id` <a name="reset_user_role_id" id="@cdktf/provider-salesforce.user.User.resetUserRoleId"></a>

```python
def reset_user_role_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-salesforce.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.User.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-salesforce.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-salesforce.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-salesforce.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput">email_encoding_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput">language_locale_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKeyInput">locale_sid_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPasswordInput">reset_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput">time_zone_sid_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleIdInput">user_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKey">email_encoding_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKey">language_locale_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKey">locale_sid_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKey">time_zone_sid_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleId">user_role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-salesforce.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-salesforce.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-salesforce.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-salesforce.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-salesforce.user.User.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `email_encoding_key_input`<sup>Optional</sup> <a name="email_encoding_key_input" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput"></a>

```python
email_encoding_key_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-salesforce.user.User.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `language_locale_key_input`<sup>Optional</sup> <a name="language_locale_key_input" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput"></a>

```python
language_locale_key_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-salesforce.user.User.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `locale_sid_key_input`<sup>Optional</sup> <a name="locale_sid_key_input" id="@cdktf/provider-salesforce.user.User.property.localeSidKeyInput"></a>

```python
locale_sid_key_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-salesforce.user.User.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `reset_password_input`<sup>Optional</sup> <a name="reset_password_input" id="@cdktf/provider-salesforce.user.User.property.resetPasswordInput"></a>

```python
reset_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_zone_sid_key_input`<sup>Optional</sup> <a name="time_zone_sid_key_input" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput"></a>

```python
time_zone_sid_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-salesforce.user.User.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `user_role_id_input`<sup>Optional</sup> <a name="user_role_id_input" id="@cdktf/provider-salesforce.user.User.property.userRoleIdInput"></a>

```python
user_role_id_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.User.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.User.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `email_encoding_key`<sup>Required</sup> <a name="email_encoding_key" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKey"></a>

```python
email_encoding_key: str
```

- *Type:* str

---

##### `language_locale_key`<sup>Required</sup> <a name="language_locale_key" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKey"></a>

```python
language_locale_key: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-salesforce.user.User.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `locale_sid_key`<sup>Required</sup> <a name="locale_sid_key" id="@cdktf/provider-salesforce.user.User.property.localeSidKey"></a>

```python
locale_sid_key: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-salesforce.user.User.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `reset_password`<sup>Required</sup> <a name="reset_password" id="@cdktf/provider-salesforce.user.User.property.resetPassword"></a>

```python
reset_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_zone_sid_key`<sup>Required</sup> <a name="time_zone_sid_key" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKey"></a>

```python
time_zone_sid_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.User.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_role_id`<sup>Required</sup> <a name="user_role_id" id="@cdktf/provider-salesforce.user.User.property.userRoleId"></a>

```python
user_role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-salesforce.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  email: str,
  last_name: str,
  profile_id: str,
  username: str,
  email_encoding_key: str = None,
  language_locale_key: str = None,
  locale_sid_key: str = None,
  reset_password: typing.Union[bool, IResolvable] = None,
  time_zone_sid_key: str = None,
  user_role_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.alias">alias</a></code> | <code>str</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.email">email</a></code> | <code>str</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lastName">last_name</a></code> | <code>str</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.profileId">profile_id</a></code> | <code>str</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.username">username</a></code> | <code>str</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey">email_encoding_key</a></code> | <code>str</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey">language_locale_key</a></code> | <code>str</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey">locale_sid_key</a></code> | <code>str</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.resetPassword">reset_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey">time_zone_sid_key</a></code> | <code>str</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.userRoleId">user_role_id</a></code> | <code>str</code> | ID of the user’s UserRole. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.UserConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.UserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-salesforce.user.UserConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-salesforce.user.UserConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.UserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `email_encoding_key`<sup>Optional</sup> <a name="email_encoding_key" id="@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey"></a>

```python
email_encoding_key: str
```

- *Type:* str

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `language_locale_key`<sup>Optional</sup> <a name="language_locale_key" id="@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey"></a>

```python
language_locale_key: str
```

- *Type:* str

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `locale_sid_key`<sup>Optional</sup> <a name="locale_sid_key" id="@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey"></a>

```python
locale_sid_key: str
```

- *Type:* str

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `reset_password`<sup>Optional</sup> <a name="reset_password" id="@cdktf/provider-salesforce.user.UserConfig.property.resetPassword"></a>

```python
reset_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `time_zone_sid_key`<sup>Optional</sup> <a name="time_zone_sid_key" id="@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey"></a>

```python
time_zone_sid_key: str
```

- *Type:* str

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `user_role_id`<sup>Optional</sup> <a name="user_role_id" id="@cdktf/provider-salesforce.user.UserConfig.property.userRoleId"></a>

```python
user_role_id: str
```

- *Type:* str

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---



