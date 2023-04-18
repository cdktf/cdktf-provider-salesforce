# `data_salesforce_profile`

Refer to the Terraform Registory for docs: [`data_salesforce_profile`](https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile).

# `dataSalesforceProfile` Submodule <a name="`dataSalesforceProfile` Submodule" id="@cdktf/provider-salesforce.dataSalesforceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSalesforceProfile <a name="DataSalesforceProfile" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile salesforce_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new DataSalesforceProfile(Construct Scope, string Id, DataSalesforceProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig">DataSalesforceProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig">DataSalesforceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

DataSalesforceProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSalesforceProfileConfig <a name="DataSalesforceProfileConfig" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Salesforce;

new DataSalesforceProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.name">Name</a></code> | <code>string</code> | The name of the profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/profile#name DataSalesforceProfile#name}

---



