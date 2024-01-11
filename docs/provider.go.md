# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-salesforce.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SalesforceProvider <a name="SalesforceProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs salesforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

provider.NewSalesforceProvider(scope Construct, id *string, config SalesforceProviderConfig) SalesforceProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig">SalesforceProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig">SalesforceProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl">ResetLoginUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion"></a>

```go
func ResetApiVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetLoginUrl` <a name="ResetLoginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl"></a>

```go
func ResetLoginUrl()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SalesforceProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

provider.SalesforceProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

provider.SalesforceProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

provider.SalesforceProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

provider.SalesforceProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SalesforceProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SalesforceProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SalesforceProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.provider.SalesforceProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SalesforceProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput">LoginUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput"></a>

```go
func LoginUrlInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `LoginUrl`<sup>Optional</sup> <a name="LoginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SalesforceProviderConfig <a name="SalesforceProviderConfig" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-salesforce-go/salesforce/provider"

&provider.SalesforceProviderConfig {
	Alias: *string,
	ApiVersion: *string,
	ClientId: *string,
	LoginUrl: *string,
	PrivateKey: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username">Username</a></code> | <code>*string</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#alias SalesforceProvider#alias}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#api_version SalesforceProvider#api_version}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#client_id SalesforceProvider#client_id}

---

##### `LoginUrl`<sup>Optional</sup> <a name="LoginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl"></a>

```go
LoginUrl *string
```

- *Type:* *string

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#login_url SalesforceProvider#login_url}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#private_key SalesforceProvider#private_key}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#username SalesforceProvider#username}

---



