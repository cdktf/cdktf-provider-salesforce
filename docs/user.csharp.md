# `salesforce_user`

Refer to the Terraform Registory for docs: [`salesforce_user`](https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-salesforce.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-salesforce.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-salesforce.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-salesforce.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetEmailEncodingKey">ResetEmailEncodingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey">ResetLanguageLocaleKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLocaleSidKey">ResetLocaleSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetResetPassword">ResetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey">ResetTimeZoneSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetUserRoleId">ResetUserRoleId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-salesforce.user.User.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-salesforce.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-salesforce.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-salesforce.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-salesforce.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEmailEncodingKey` <a name="ResetEmailEncodingKey" id="@cdktf/provider-salesforce.user.User.resetEmailEncodingKey"></a>

```csharp
private void ResetEmailEncodingKey()
```

##### `ResetLanguageLocaleKey` <a name="ResetLanguageLocaleKey" id="@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey"></a>

```csharp
private void ResetLanguageLocaleKey()
```

##### `ResetLocaleSidKey` <a name="ResetLocaleSidKey" id="@cdktf/provider-salesforce.user.User.resetLocaleSidKey"></a>

```csharp
private void ResetLocaleSidKey()
```

##### `ResetResetPassword` <a name="ResetResetPassword" id="@cdktf/provider-salesforce.user.User.resetResetPassword"></a>

```csharp
private void ResetResetPassword()
```

##### `ResetTimeZoneSidKey` <a name="ResetTimeZoneSidKey" id="@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey"></a>

```csharp
private void ResetTimeZoneSidKey()
```

##### `ResetUserRoleId` <a name="ResetUserRoleId" id="@cdktf/provider-salesforce.user.User.resetUserRoleId"></a>

```csharp
private void ResetUserRoleId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-salesforce.user.User.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

User.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-salesforce.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-salesforce.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput">EmailEncodingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput">LanguageLocaleKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKeyInput">LocaleSidKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPasswordInput">ResetPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput">TimeZoneSidKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleIdInput">UserRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKey">EmailEncodingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKey">LanguageLocaleKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKey">LocaleSidKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPassword">ResetPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKey">TimeZoneSidKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleId">UserRoleId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-salesforce.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-salesforce.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-salesforce.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-salesforce.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-salesforce.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-salesforce.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-salesforce.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.user.User.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-salesforce.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-salesforce.user.User.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `EmailEncodingKeyInput`<sup>Optional</sup> <a name="EmailEncodingKeyInput" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput"></a>

```csharp
public string EmailEncodingKeyInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-salesforce.user.User.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `LanguageLocaleKeyInput`<sup>Optional</sup> <a name="LanguageLocaleKeyInput" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput"></a>

```csharp
public string LanguageLocaleKeyInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktf/provider-salesforce.user.User.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `LocaleSidKeyInput`<sup>Optional</sup> <a name="LocaleSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.localeSidKeyInput"></a>

```csharp
public string LocaleSidKeyInput { get; }
```

- *Type:* string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-salesforce.user.User.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `ResetPasswordInput`<sup>Optional</sup> <a name="ResetPasswordInput" id="@cdktf/provider-salesforce.user.User.property.resetPasswordInput"></a>

```csharp
public object ResetPasswordInput { get; }
```

- *Type:* object

---

##### `TimeZoneSidKeyInput`<sup>Optional</sup> <a name="TimeZoneSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput"></a>

```csharp
public string TimeZoneSidKeyInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-salesforce.user.User.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UserRoleIdInput`<sup>Optional</sup> <a name="UserRoleIdInput" id="@cdktf/provider-salesforce.user.User.property.userRoleIdInput"></a>

```csharp
public string UserRoleIdInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-salesforce.user.User.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-salesforce.user.User.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `EmailEncodingKey`<sup>Required</sup> <a name="EmailEncodingKey" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKey"></a>

```csharp
public string EmailEncodingKey { get; }
```

- *Type:* string

---

##### `LanguageLocaleKey`<sup>Required</sup> <a name="LanguageLocaleKey" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKey"></a>

```csharp
public string LanguageLocaleKey { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-salesforce.user.User.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `LocaleSidKey`<sup>Required</sup> <a name="LocaleSidKey" id="@cdktf/provider-salesforce.user.User.property.localeSidKey"></a>

```csharp
public string LocaleSidKey { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-salesforce.user.User.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdktf/provider-salesforce.user.User.property.resetPassword"></a>

```csharp
public object ResetPassword { get; }
```

- *Type:* object

---

##### `TimeZoneSidKey`<sup>Required</sup> <a name="TimeZoneSidKey" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKey"></a>

```csharp
public string TimeZoneSidKey { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-salesforce.user.User.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserRoleId`<sup>Required</sup> <a name="UserRoleId" id="@cdktf/provider-salesforce.user.User.property.userRoleId"></a>

```csharp
public string UserRoleId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-salesforce.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-salesforce.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new UserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Alias,
    string Email,
    string LastName,
    string ProfileId,
    string Username,
    string EmailEncodingKey = null,
    string LanguageLocaleKey = null,
    string LocaleSidKey = null,
    object ResetPassword = null,
    string TimeZoneSidKey = null,
    string UserRoleId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.alias">Alias</a></code> | <code>string</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.email">Email</a></code> | <code>string</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lastName">LastName</a></code> | <code>string</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.profileId">ProfileId</a></code> | <code>string</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.username">Username</a></code> | <code>string</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey">EmailEncodingKey</a></code> | <code>string</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey">LanguageLocaleKey</a></code> | <code>string</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey">LocaleSidKey</a></code> | <code>string</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.resetPassword">ResetPassword</a></code> | <code>object</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey">TimeZoneSidKey</a></code> | <code>string</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.userRoleId">UserRoleId</a></code> | <code>string</code> | ID of the user’s UserRole. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-salesforce.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.user.UserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-salesforce.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-salesforce.user.UserConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-salesforce.user.UserConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-salesforce.user.UserConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-salesforce.user.UserConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-salesforce.user.UserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `EmailEncodingKey`<sup>Optional</sup> <a name="EmailEncodingKey" id="@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey"></a>

```csharp
public string EmailEncodingKey { get; set; }
```

- *Type:* string

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `LanguageLocaleKey`<sup>Optional</sup> <a name="LanguageLocaleKey" id="@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey"></a>

```csharp
public string LanguageLocaleKey { get; set; }
```

- *Type:* string

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `LocaleSidKey`<sup>Optional</sup> <a name="LocaleSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey"></a>

```csharp
public string LocaleSidKey { get; set; }
```

- *Type:* string

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `ResetPassword`<sup>Optional</sup> <a name="ResetPassword" id="@cdktf/provider-salesforce.user.UserConfig.property.resetPassword"></a>

```csharp
public object ResetPassword { get; set; }
```

- *Type:* object

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `TimeZoneSidKey`<sup>Optional</sup> <a name="TimeZoneSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey"></a>

```csharp
public string TimeZoneSidKey { get; set; }
```

- *Type:* string

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `UserRoleId`<sup>Optional</sup> <a name="UserRoleId" id="@cdktf/provider-salesforce.user.UserConfig.property.userRoleId"></a>

```csharp
public string UserRoleId { get; set; }
```

- *Type:* string

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---



