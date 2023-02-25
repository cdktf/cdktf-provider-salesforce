# `dataSalesforceUserLicense` Submodule <a name="`dataSalesforceUserLicense` Submodule" id="@cdktf/provider-salesforce.dataSalesforceUserLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSalesforceUserLicense <a name="DataSalesforceUserLicense" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/d/user_license salesforce_user_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import data_salesforce_user_license

dataSalesforceUserLicense.DataSalesforceUserLicense(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  license_definition_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.licenseDefinitionKey">license_definition_key</a></code> | <code>str</code> | A string that uniquely identifies a particular user license. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `license_definition_key`<sup>Required</sup> <a name="license_definition_key" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.licenseDefinitionKey"></a>

- *Type:* str

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/d/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct"></a>

```python
from cdktf_cdktf_provider_salesforce import data_salesforce_user_license

dataSalesforceUserLicense.DataSalesforceUserLicense.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_salesforce import data_salesforce_user_license

dataSalesforceUserLicense.DataSalesforceUserLicense.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_salesforce import data_salesforce_user_license

dataSalesforceUserLicense.DataSalesforceUserLicense.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput">license_definition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey">license_definition_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_definition_key_input`<sup>Optional</sup> <a name="license_definition_key_input" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput"></a>

```python
license_definition_key_input: str
```

- *Type:* str

---

##### `license_definition_key`<sup>Required</sup> <a name="license_definition_key" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey"></a>

```python
license_definition_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSalesforceUserLicenseConfig <a name="DataSalesforceUserLicenseConfig" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_salesforce import data_salesforce_user_license

dataSalesforceUserLicense.DataSalesforceUserLicenseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  license_definition_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey">license_definition_key</a></code> | <code>str</code> | A string that uniquely identifies a particular user license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `license_definition_key`<sup>Required</sup> <a name="license_definition_key" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey"></a>

```python
license_definition_key: str
```

- *Type:* str

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/d/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---


