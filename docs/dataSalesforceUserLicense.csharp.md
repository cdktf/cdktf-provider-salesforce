# `dataSalesforceUserLicense` Submodule <a name="`dataSalesforceUserLicense` Submodule" id="@cdktf/provider-salesforce.dataSalesforceUserLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSalesforceUserLicense <a name="DataSalesforceUserLicense" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license salesforce_user_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new DataSalesforceUserLicense(Construct Scope, string Id, DataSalesforceUserLicenseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig">DataSalesforceUserLicenseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig">DataSalesforceUserLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSalesforceUserLicense resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceUserLicense.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceUserLicense.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceUserLicense.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceUserLicense.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSalesforceUserLicense resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSalesforceUserLicense to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSalesforceUserLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSalesforceUserLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput">LicenseDefinitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey">LicenseDefinitionKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseDefinitionKeyInput`<sup>Optional</sup> <a name="LicenseDefinitionKeyInput" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput"></a>

```csharp
public string LicenseDefinitionKeyInput { get; }
```

- *Type:* string

---

##### `LicenseDefinitionKey`<sup>Required</sup> <a name="LicenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey"></a>

```csharp
public string LicenseDefinitionKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSalesforceUserLicenseConfig <a name="DataSalesforceUserLicenseConfig" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new DataSalesforceUserLicenseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LicenseDefinitionKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey">LicenseDefinitionKey</a></code> | <code>string</code> | A string that uniquely identifies a particular user license. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LicenseDefinitionKey`<sup>Required</sup> <a name="LicenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey"></a>

```csharp
public string LicenseDefinitionKey { get; set; }
```

- *Type:* string

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---



