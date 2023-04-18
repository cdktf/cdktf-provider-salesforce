# `provider`

Refer to the Terraform Registory for docs: [`salesforce`](https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-salesforce.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SalesforceProvider <a name="SalesforceProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs salesforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.provider.SalesforceProvider;

SalesforceProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .apiVersion(java.lang.String)
//  .clientId(java.lang.String)
//  .loginUrl(java.lang.String)
//  .privateKey(java.lang.String)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#alias SalesforceProvider#alias}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.apiVersion"></a>

- *Type:* java.lang.String

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#api_version SalesforceProvider#api_version}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#client_id SalesforceProvider#client_id}

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.loginUrl"></a>

- *Type:* java.lang.String

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#login_url SalesforceProvider#login_url}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#private_key SalesforceProvider#private_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#username SalesforceProvider#username}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.provider.SalesforceProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.provider.SalesforceProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetApiVersion"></a>

```java
public void resetApiVersion()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetLoginUrl` <a name="resetLoginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetLoginUrl"></a>

```java
public void resetLoginUrl()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-salesforce.provider.SalesforceProvider.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.provider.SalesforceProvider;

SalesforceProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.provider.SalesforceProvider;

SalesforceProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.provider.SalesforceProvider;

SalesforceProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.provider.SalesforceProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput">loginUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `loginUrlInput`<sup>Optional</sup> <a name="loginUrlInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrlInput"></a>

```java
public java.lang.String getLoginUrlInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.provider.SalesforceProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SalesforceProviderConfig <a name="SalesforceProviderConfig" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.provider.SalesforceProviderConfig;

SalesforceProviderConfig.builder()
//  .alias(java.lang.String)
//  .apiVersion(java.lang.String)
//  .clientId(java.lang.String)
//  .loginUrl(java.lang.String)
//  .privateKey(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Client ID of the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl">loginUrl</a></code> | <code>java.lang.String</code> | Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Private Key associated to the public certificate that was uploaded to the connected app. |
| <code><a href="#@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username">username</a></code> | <code>java.lang.String</code> | Salesforce Username of a System Administrator like user for the provider to authenticate as. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#alias SalesforceProvider#alias}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the salesforce org in the format in the format: MAJOR.MINOR (please omit any leading 'v'). The provider requires at least version 53.0. Can be specified with the environment variable SALESFORCE_API_VERSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#api_version SalesforceProvider#api_version}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Client ID of the connected app.

Corresponds to Consumer Key in the user interface. Can be specified with the environment variable SALESFORCE_CLIENT_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#client_id SalesforceProvider#client_id}

---

##### `loginUrl`<sup>Optional</sup> <a name="loginUrl" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.loginUrl"></a>

```java
public java.lang.String getLoginUrl();
```

- *Type:* java.lang.String

Directs the authentication request, defaults to the production endpoint https://login.salesforce.com, should be set to https://test.salesforce.com for sandbox organizations. Can be specified with the environment variable SALESFORCE_LOGIN_URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#login_url SalesforceProvider#login_url}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Private Key associated to the public certificate that was uploaded to the connected app.

This may point to a file location or be set directly. This should not be confused with the Consumer Secret in the user interface. Can be specified with the environment variable SALESFORCE_PRIVATE_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#private_key SalesforceProvider#private_key}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-salesforce.provider.SalesforceProviderConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Salesforce Username of a System Administrator like user for the provider to authenticate as.

Can be specified with the environment variable SALESFORCE_USERNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs#username SalesforceProvider#username}

---



