# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-salesforce.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SalesforceProvider <a name="SalesforceProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs salesforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  api_version: str = None,
  client_id: str = None,
  login_url: str = None,
  private_key: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.apiVersion">api_version</a></code> | <code>str</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.loginUrl">login_url</a></code> | <code>str</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#alias SalesforceProvider#alias}

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.apiVersion"></a>

- *Type:* str

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#api_version SalesforceProvider#api_version}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.clientId"></a>

- *Type:* str

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#client_id SalesforceProvider#client_id}

---

##### `login_url`<sup>Optional</sup> <a name="login_url" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.loginUrl"></a>

- *Type:* str

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#login_url SalesforceProvider#login_url}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#private_key SalesforceProvider#private_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.username"></a>

- *Type:* str

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#username SalesforceProvider#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion">reset_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl">reset_login_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_version` <a name="reset_api_version" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion"></a>

```python
def reset_api_version() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_login_url` <a name="reset_login_url" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl"></a>

```python
def reset_login_url() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SalesforceProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SalesforceProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SalesforceProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SalesforceProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SalesforceProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput">login_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl">login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `login_url_input`<sup>Optional</sup> <a name="login_url_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput"></a>

```python
login_url_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `login_url`<sup>Optional</sup> <a name="login_url" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SalesforceProviderConfig <a name="SalesforceProviderConfig" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import provider

provider.SalesforceProviderConfig(
  alias: str = None,
  api_version: str = None,
  client_id: str = None,
  login_url: str = None,
  private_key: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion">api_version</a></code> | <code>str</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl">login_url</a></code> | <code>str</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username">username</a></code> | <code>str</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#alias SalesforceProvider#alias}

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#api_version SalesforceProvider#api_version}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#client_id SalesforceProvider#client_id}

---

##### `login_url`<sup>Optional</sup> <a name="login_url" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#login_url SalesforceProvider#login_url}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#private_key SalesforceProvider#private_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#username SalesforceProvider#username}

---



