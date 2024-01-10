# `dataSalesforceUserLicense` Submodule <a name="`dataSalesforceUserLicense` Submodule" id="@cdktf/provider-salesforce.dataSalesforceUserLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSalesforceUserLicense <a name="DataSalesforceUserLicense" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license salesforce_user_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicense;

DataSalesforceUserLicense.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .licenseDefinitionKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.licenseDefinitionKey">licenseDefinitionKey</a></code> | <code>java.lang.String</code> | A string that uniquely identifies a particular user license. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseDefinitionKey`<sup>Required</sup> <a name="licenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.licenseDefinitionKey"></a>

- *Type:* java.lang.String

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSalesforceUserLicense resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicense;

DataSalesforceUserLicense.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicense;

DataSalesforceUserLicense.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicense;

DataSalesforceUserLicense.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicense;

DataSalesforceUserLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSalesforceUserLicense.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSalesforceUserLicense resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSalesforceUserLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSalesforceUserLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSalesforceUserLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput">licenseDefinitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey">licenseDefinitionKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseDefinitionKeyInput`<sup>Optional</sup> <a name="licenseDefinitionKeyInput" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput"></a>

```java
public java.lang.String getLicenseDefinitionKeyInput();
```

- *Type:* java.lang.String

---

##### `licenseDefinitionKey`<sup>Required</sup> <a name="licenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey"></a>

```java
public java.lang.String getLicenseDefinitionKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSalesforceUserLicenseConfig <a name="DataSalesforceUserLicenseConfig" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.data_salesforce_user_license.DataSalesforceUserLicenseConfig;

DataSalesforceUserLicenseConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .licenseDefinitionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey">licenseDefinitionKey</a></code> | <code>java.lang.String</code> | A string that uniquely identifies a particular user license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `licenseDefinitionKey`<sup>Required</sup> <a name="licenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey"></a>

```java
public java.lang.String getLicenseDefinitionKey();
```

- *Type:* java.lang.String

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/data-sources/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---



