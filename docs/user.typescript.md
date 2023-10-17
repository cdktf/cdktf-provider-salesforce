# `salesforce_user`

Refer to the Terraform Registory for docs: [`salesforce_user`](https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-salesforce.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-salesforce.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-salesforce.user.UserConfig">UserConfig</a></code> | *No description.* |

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

- *Type:* <a href="#@cdktf/provider-salesforce.user.UserConfig">UserConfig</a>

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
| <code><a href="#@cdktf/provider-salesforce.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-salesforce.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-salesforce.user.User.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-salesforce.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

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

##### `importFrom` <a name="importFrom" id="@cdktf/provider-salesforce.user.User.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-salesforce.user.User.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

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
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

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

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-salesforce.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-salesforce.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-salesforce.user.User.generateConfigForImport"></a>

```typescript
import { user } from '@cdktf/provider-salesforce'

user.User.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-salesforce.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
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
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

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

## Structs <a name="Structs" id="Structs"></a>

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
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
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
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.UserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.UserConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.UserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `emailEncodingKey`<sup>Optional</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey"></a>

```typescript
public readonly emailEncodingKey: string;
```

- *Type:* string

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `languageLocaleKey`<sup>Optional</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey"></a>

```typescript
public readonly languageLocaleKey: string;
```

- *Type:* string

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `localeSidKey`<sup>Optional</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey"></a>

```typescript
public readonly localeSidKey: string;
```

- *Type:* string

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `resetPassword`<sup>Optional</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.UserConfig.property.resetPassword"></a>

```typescript
public readonly resetPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `timeZoneSidKey`<sup>Optional</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey"></a>

```typescript
public readonly timeZoneSidKey: string;
```

- *Type:* string

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `userRoleId`<sup>Optional</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.UserConfig.property.userRoleId"></a>

```typescript
public readonly userRoleId: string;
```

- *Type:* string

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---



