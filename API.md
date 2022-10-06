# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSalesforceProfile <a name="DataSalesforceProfile" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/d/profile salesforce_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer"></a>

```typescript
import { dataSalesforceProfile } from '@cdktf/provider-salesforce'

new dataSalesforceProfile.DataSalesforceProfile(scope: Construct, id: string, config: DataSalesforceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct"></a>

```typescript
import { dataSalesforceProfile } from '@cdktf/provider-salesforce'

dataSalesforceProfile.DataSalesforceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataSalesforceUserLicense <a name="DataSalesforceUserLicense" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/d/user_license salesforce_user_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer"></a>

```typescript
import { dataSalesforceUserLicense } from '@cdktf/provider-salesforce'

new dataSalesforceUserLicense.DataSalesforceUserLicense(scope: Construct, id: string, config: DataSalesforceUserLicenseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct"></a>

```typescript
import { dataSalesforceUserLicense } from '@cdktf/provider-salesforce'

dataSalesforceUserLicense.DataSalesforceUserLicense.isConstruct(x: any)
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

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput">licenseDefinitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey">licenseDefinitionKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseDefinitionKeyInput`<sup>Optional</sup> <a name="licenseDefinitionKeyInput" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKeyInput"></a>

```typescript
public readonly licenseDefinitionKeyInput: string;
```

- *Type:* string

---

##### `licenseDefinitionKey`<sup>Required</sup> <a name="licenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.licenseDefinitionKey"></a>

```typescript
public readonly licenseDefinitionKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicense.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Profile <a name="Profile" id="@cdktf/provider-salesforce.profile.Profile"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/r/profile salesforce_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.profile.Profile.Initializer"></a>

```typescript
import { profile } from '@cdktf/provider-salesforce'

new profile.Profile(scope: Construct, id: string, config: ProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.profile.ProfileConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-salesforce.profile.Profile.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.profile.ProfileConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.profile.Profile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.profile.Profile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.profile.Profile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.profile.Profile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.profile.Profile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.profile.Profile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.profile.Profile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.profile.Profile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.profile.Profile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.profile.Profile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.profile.Profile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.profile.Profile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.profile.Profile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.profile.Profile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.profile.Profile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.profile.Profile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.profile.Profile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-salesforce.profile.Profile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-salesforce.profile.Profile.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.profile.Profile.isConstruct"></a>

```typescript
import { profile } from '@cdktf/provider-salesforce'

profile.Profile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.profile.Profile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.permissionsInput">permissionsInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.userLicenseIdInput">userLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.permissions">permissions</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.userLicenseId">userLicenseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.profile.Profile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.profile.Profile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.profile.Profile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.profile.Profile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.profile.Profile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.profile.Profile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.profile.Profile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.profile.Profile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.profile.Profile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.profile.Profile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.profile.Profile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.profile.Profile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.profile.Profile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.profile.Profile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.profile.Profile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-salesforce.profile.Profile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-salesforce.profile.Profile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-salesforce.profile.Profile.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `userLicenseIdInput`<sup>Optional</sup> <a name="userLicenseIdInput" id="@cdktf/provider-salesforce.profile.Profile.property.userLicenseIdInput"></a>

```typescript
public readonly userLicenseIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-salesforce.profile.Profile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.profile.Profile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-salesforce.profile.Profile.property.permissions"></a>

```typescript
public readonly permissions: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `userLicenseId`<sup>Required</sup> <a name="userLicenseId" id="@cdktf/provider-salesforce.profile.Profile.property.userLicenseId"></a>

```typescript
public readonly userLicenseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.Profile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.profile.Profile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### SalesforceProvider <a name="SalesforceProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce salesforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-salesforce'

new provider.SalesforceProvider(scope: Construct, id: string, config?: SalesforceProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.provider.SalesforceProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.provider.SalesforceProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl">resetLoginUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion"></a>

```typescript
public resetApiVersion(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetLoginUrl` <a name="resetLoginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl"></a>

```typescript
public resetLoginUrl(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-salesforce'

provider.SalesforceProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput">loginUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl">loginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput"></a>

```typescript
public readonly loginUrlInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### User <a name="User" id="@cdktf/provider-salesforce.user.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/r/user salesforce_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.user.UserConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.user.UserConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetEmailEncodingKey">resetEmailEncodingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey">resetLanguageLocaleKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLocaleSidKey">resetLocaleSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetResetPassword">resetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey">resetTimeZoneSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetUserRoleId">resetUserRoleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEmailEncodingKey` <a name="resetEmailEncodingKey" id="@cdktf/provider-salesforce.user.User.resetEmailEncodingKey"></a>

```typescript
public resetEmailEncodingKey(): void
```

##### `resetLanguageLocaleKey` <a name="resetLanguageLocaleKey" id="@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey"></a>

```typescript
public resetLanguageLocaleKey(): void
```

##### `resetLocaleSidKey` <a name="resetLocaleSidKey" id="@cdktf/provider-salesforce.user.User.resetLocaleSidKey"></a>

```typescript
public resetLocaleSidKey(): void
```

##### `resetResetPassword` <a name="resetResetPassword" id="@cdktf/provider-salesforce.user.User.resetResetPassword"></a>

```typescript
public resetResetPassword(): void
```

##### `resetTimeZoneSidKey` <a name="resetTimeZoneSidKey" id="@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey"></a>

```typescript
public resetTimeZoneSidKey(): void
```

##### `resetUserRoleId` <a name="resetUserRoleId" id="@cdktf/provider-salesforce.user.User.resetUserRoleId"></a>

```typescript
public resetUserRoleId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

user.User.isConstruct(x: any)
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

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput">emailEncodingKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput">languageLocaleKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKeyInput">localeSidKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPasswordInput">resetPasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput">timeZoneSidKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleIdInput">userRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKey">emailEncodingKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKey">languageLocaleKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKey">localeSidKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPassword">resetPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKey">timeZoneSidKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleId">userRoleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.User.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-salesforce.user.User.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `emailEncodingKeyInput`<sup>Optional</sup> <a name="emailEncodingKeyInput" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput"></a>

```typescript
public readonly emailEncodingKeyInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-salesforce.user.User.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `languageLocaleKeyInput`<sup>Optional</sup> <a name="languageLocaleKeyInput" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput"></a>

```typescript
public readonly languageLocaleKeyInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-salesforce.user.User.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `localeSidKeyInput`<sup>Optional</sup> <a name="localeSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.localeSidKeyInput"></a>

```typescript
public readonly localeSidKeyInput: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-salesforce.user.User.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `resetPasswordInput`<sup>Optional</sup> <a name="resetPasswordInput" id="@cdktf/provider-salesforce.user.User.property.resetPasswordInput"></a>

```typescript
public readonly resetPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZoneSidKeyInput`<sup>Optional</sup> <a name="timeZoneSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput"></a>

```typescript
public readonly timeZoneSidKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-salesforce.user.User.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `userRoleIdInput`<sup>Optional</sup> <a name="userRoleIdInput" id="@cdktf/provider-salesforce.user.User.property.userRoleIdInput"></a>

```typescript
public readonly userRoleIdInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.User.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.User.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `emailEncodingKey`<sup>Required</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKey"></a>

```typescript
public readonly emailEncodingKey: string;
```

- *Type:* string

---

##### `languageLocaleKey`<sup>Required</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKey"></a>

```typescript
public readonly languageLocaleKey: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.User.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `localeSidKey`<sup>Required</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.User.property.localeSidKey"></a>

```typescript
public readonly localeSidKey: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.User.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `resetPassword`<sup>Required</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.User.property.resetPassword"></a>

```typescript
public readonly resetPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZoneSidKey`<sup>Required</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKey"></a>

```typescript
public readonly timeZoneSidKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.User.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userRoleId`<sup>Required</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.User.property.userRoleId"></a>

```typescript
public readonly userRoleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### UserRole <a name="UserRole" id="@cdktf/provider-salesforce.userRole.UserRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/salesforce/r/user_role salesforce_user_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.userRole.UserRole.Initializer"></a>

```typescript
import { userRole } from '@cdktf/provider-salesforce'

new userRole.UserRole(scope: Construct, id: string, config: UserRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-salesforce.userRole.UserRoleConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-salesforce.userRole.UserRole.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-salesforce.userRole.UserRoleConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.resetParentRoleId">resetParentRoleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.userRole.UserRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.userRole.UserRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.userRole.UserRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.userRole.UserRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.userRole.UserRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.userRole.UserRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.userRole.UserRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.userRole.UserRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.userRole.UserRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.userRole.UserRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetParentRoleId` <a name="resetParentRoleId" id="@cdktf/provider-salesforce.userRole.UserRole.resetParentRoleId"></a>

```typescript
public resetParentRoleId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.userRole.UserRole.isConstruct"></a>

```typescript
import { userRole } from '@cdktf/provider-salesforce'

userRole.UserRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.userRole.UserRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.developerNameInput">developerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.parentRoleIdInput">parentRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.developerName">developerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.parentRoleId">parentRoleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.userRole.UserRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.userRole.UserRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.userRole.UserRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.userRole.UserRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.userRole.UserRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.userRole.UserRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.userRole.UserRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.userRole.UserRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.userRole.UserRole.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.userRole.UserRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.userRole.UserRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.userRole.UserRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.userRole.UserRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.userRole.UserRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.userRole.UserRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `developerNameInput`<sup>Optional</sup> <a name="developerNameInput" id="@cdktf/provider-salesforce.userRole.UserRole.property.developerNameInput"></a>

```typescript
public readonly developerNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-salesforce.userRole.UserRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentRoleIdInput`<sup>Optional</sup> <a name="parentRoleIdInput" id="@cdktf/provider-salesforce.userRole.UserRole.property.parentRoleIdInput"></a>

```typescript
public readonly parentRoleIdInput: string;
```

- *Type:* string

---

##### `developerName`<sup>Required</sup> <a name="developerName" id="@cdktf/provider-salesforce.userRole.UserRole.property.developerName"></a>

```typescript
public readonly developerName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.userRole.UserRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentRoleId`<sup>Required</sup> <a name="parentRoleId" id="@cdktf/provider-salesforce.userRole.UserRole.property.parentRoleId"></a>

```typescript
public readonly parentRoleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.userRole.UserRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSalesforceProfileConfig <a name="DataSalesforceProfileConfig" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.Initializer"></a>

```typescript
import { dataSalesforceProfile } from '@cdktf/provider-salesforce'

const dataSalesforceProfileConfig: dataSalesforceProfile.DataSalesforceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.dataSalesforceProfile.DataSalesforceProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/d/profile#name DataSalesforceProfile#name}

---

### DataSalesforceUserLicenseConfig <a name="DataSalesforceUserLicenseConfig" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.Initializer"></a>

```typescript
import { dataSalesforceUserLicense } from '@cdktf/provider-salesforce'

const dataSalesforceUserLicenseConfig: dataSalesforceUserLicense.DataSalesforceUserLicenseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey">licenseDefinitionKey</a></code> | <code>string</code> | A string that uniquely identifies a particular user license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `licenseDefinitionKey`<sup>Required</sup> <a name="licenseDefinitionKey" id="@cdktf/provider-salesforce.dataSalesforceUserLicense.DataSalesforceUserLicenseConfig.property.licenseDefinitionKey"></a>

```typescript
public readonly licenseDefinitionKey: string;
```

- *Type:* string

A string that uniquely identifies a particular user license.

Valid options vary depending on organization type and configuration. For a complete list see https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_userlicense.htm

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/d/user_license#license_definition_key DataSalesforceUserLicense#license_definition_key}

---

### ProfileConfig <a name="ProfileConfig" id="@cdktf/provider-salesforce.profile.ProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.profile.ProfileConfig.Initializer"></a>

```typescript
import { profile } from '@cdktf/provider-salesforce'

const profileConfig: profile.ProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the profile. |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.userLicenseId">userLicenseId</a></code> | <code>string</code> | ID of the UserLicense associated with this profile. Forces replacement if updated. |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.description">description</a></code> | <code>string</code> | Description of the profile. |
| <code><a href="#@cdktf/provider-salesforce.profile.ProfileConfig.property.permissions">permissions</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Map of permissions for the profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#name Profile#name}

---

##### `userLicenseId`<sup>Required</sup> <a name="userLicenseId" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.userLicenseId"></a>

```typescript
public readonly userLicenseId: string;
```

- *Type:* string

ID of the UserLicense associated with this profile. Forces replacement if updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#user_license_id Profile#user_license_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#description Profile#description}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-salesforce.profile.ProfileConfig.property.permissions"></a>

```typescript
public readonly permissions: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Map of permissions for the profile.

At this time specific permissions can only be set, the comprehensive list will not be read from Salesforce. The keys should follow Salesforce 'SnakeCase' format however the 'Permissions' prefix should be omitted. Permissions will not import to state due to a technical limitation, you will need to run a subsequent apply if you have permissions set in config during import.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/profile#permissions Profile#permissions}

---

### SalesforceProviderConfig <a name="SalesforceProviderConfig" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-salesforce'

const salesforceProviderConfig: provider.SalesforceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion">apiVersion</a></code> | <code>string</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId">clientId</a></code> | <code>string</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl">loginUrl</a></code> | <code>string</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username">username</a></code> | <code>string</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#alias SalesforceProvider#alias}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#api_version SalesforceProvider#api_version}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#client_id SalesforceProvider#client_id}

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl"></a>

```typescript
public readonly loginUrl: string;
```

- *Type:* string

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#login_url SalesforceProvider#login_url}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#private_key SalesforceProvider#private_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce#username SalesforceProvider#username}

---

### UserConfig <a name="UserConfig" id="@cdktf/provider-salesforce.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.alias">alias</a></code> | <code>string</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.email">email</a></code> | <code>string</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lastName">lastName</a></code> | <code>string</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.profileId">profileId</a></code> | <code>string</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.username">username</a></code> | <code>string</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey">emailEncodingKey</a></code> | <code>string</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey">languageLocaleKey</a></code> | <code>string</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey">localeSidKey</a></code> | <code>string</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.resetPassword">resetPassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey">timeZoneSidKey</a></code> | <code>string</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.userRoleId">userRoleId</a></code> | <code>string</code> | ID of the user’s UserRole. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.UserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.UserConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The user’s email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#email User#email}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.UserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The user’s last name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#last_name User#last_name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.UserConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.UserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#username User#username}

---

##### `emailEncodingKey`<sup>Optional</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey"></a>

```typescript
public readonly emailEncodingKey: string;
```

- *Type:* string

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#email_encoding_key User#email_encoding_key}

---

##### `languageLocaleKey`<sup>Optional</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey"></a>

```typescript
public readonly languageLocaleKey: string;
```

- *Type:* string

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#language_locale_key User#language_locale_key}

---

##### `localeSidKey`<sup>Optional</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey"></a>

```typescript
public readonly localeSidKey: string;
```

- *Type:* string

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#locale_sid_key User#locale_sid_key}

---

##### `resetPassword`<sup>Optional</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.UserConfig.property.resetPassword"></a>

```typescript
public readonly resetPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#reset_password User#reset_password}

---

##### `timeZoneSidKey`<sup>Optional</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey"></a>

```typescript
public readonly timeZoneSidKey: string;
```

- *Type:* string

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `userRoleId`<sup>Optional</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.UserConfig.property.userRoleId"></a>

```typescript
public readonly userRoleId: string;
```

- *Type:* string

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user#user_role_id User#user_role_id}

---

### UserRoleConfig <a name="UserRoleConfig" id="@cdktf/provider-salesforce.userRole.UserRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.Initializer"></a>

```typescript
import { userRole } from '@cdktf/provider-salesforce'

const userRoleConfig: userRole.UserRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.developerName">developerName</a></code> | <code>string</code> | The unique name of the object in the API. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the role. Corresponds to Label on the user interface. |
| <code><a href="#@cdktf/provider-salesforce.userRole.UserRoleConfig.property.parentRoleId">parentRoleId</a></code> | <code>string</code> | The ID of the parent role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `developerName`<sup>Required</sup> <a name="developerName" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.developerName"></a>

```typescript
public readonly developerName: string;
```

- *Type:* string

The unique name of the object in the API.

This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Corresponds to Role Name in the user interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user_role#developer_name UserRole#developer_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role. Corresponds to Label on the user interface.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user_role#name UserRole#name}

---

##### `parentRoleId`<sup>Optional</sup> <a name="parentRoleId" id="@cdktf/provider-salesforce.userRole.UserRoleConfig.property.parentRoleId"></a>

```typescript
public readonly parentRoleId: string;
```

- *Type:* string

The ID of the parent role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/salesforce/r/user_role#parent_role_id UserRole#parent_role_id}

---



