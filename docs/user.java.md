# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-salesforce.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-salesforce.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user salesforce_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-salesforce.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.user.User;

User.Builder.create(Construct scope, java.lang.String id)
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
    .alias(java.lang.String)
    .email(java.lang.String)
    .lastName(java.lang.String)
    .profileId(java.lang.String)
    .username(java.lang.String)
//  .emailEncodingKey(java.lang.String)
//  .languageLocaleKey(java.lang.String)
//  .localeSidKey(java.lang.String)
//  .resetPassword(java.lang.Boolean)
//  .resetPassword(IResolvable)
//  .timeZoneSidKey(java.lang.String)
//  .userRoleId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.emailEncodingKey">emailEncodingKey</a></code> | <code>java.lang.String</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.languageLocaleKey">languageLocaleKey</a></code> | <code>java.lang.String</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.localeSidKey">localeSidKey</a></code> | <code>java.lang.String</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.resetPassword">resetPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.timeZoneSidKey">timeZoneSidKey</a></code> | <code>java.lang.String</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.User.Initializer.parameter.userRoleId">userRoleId</a></code> | <code>java.lang.String</code> | ID of the user’s UserRole. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `emailEncodingKey`<sup>Optional</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.emailEncodingKey"></a>

- *Type:* java.lang.String

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `languageLocaleKey`<sup>Optional</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.languageLocaleKey"></a>

- *Type:* java.lang.String

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `localeSidKey`<sup>Optional</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.localeSidKey"></a>

- *Type:* java.lang.String

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `resetPassword`<sup>Optional</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.resetPassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `timeZoneSidKey`<sup>Optional</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.timeZoneSidKey"></a>

- *Type:* java.lang.String

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `userRoleId`<sup>Optional</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.User.Initializer.parameter.userRoleId"></a>

- *Type:* java.lang.String

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-salesforce.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-salesforce.user.User.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-salesforce.user.User.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-salesforce.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-salesforce.user.User.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetEmailEncodingKey">resetEmailEncodingKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey">resetLanguageLocaleKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetLocaleSidKey">resetLocaleSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetResetPassword">resetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey">resetTimeZoneSidKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.resetUserRoleId">resetUserRoleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-salesforce.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-salesforce.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-salesforce.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-salesforce.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-salesforce.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-salesforce.user.User.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-salesforce.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-salesforce.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-salesforce.user.User.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-salesforce.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-salesforce.user.User.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-salesforce.user.User.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-salesforce.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-salesforce.user.User.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-salesforce.user.User.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-salesforce.user.User.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-salesforce.user.User.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmailEncodingKey` <a name="resetEmailEncodingKey" id="@cdktf/provider-salesforce.user.User.resetEmailEncodingKey"></a>

```java
public void resetEmailEncodingKey()
```

##### `resetLanguageLocaleKey` <a name="resetLanguageLocaleKey" id="@cdktf/provider-salesforce.user.User.resetLanguageLocaleKey"></a>

```java
public void resetLanguageLocaleKey()
```

##### `resetLocaleSidKey` <a name="resetLocaleSidKey" id="@cdktf/provider-salesforce.user.User.resetLocaleSidKey"></a>

```java
public void resetLocaleSidKey()
```

##### `resetResetPassword` <a name="resetResetPassword" id="@cdktf/provider-salesforce.user.User.resetResetPassword"></a>

```java
public void resetResetPassword()
```

##### `resetTimeZoneSidKey` <a name="resetTimeZoneSidKey" id="@cdktf/provider-salesforce.user.User.resetTimeZoneSidKey"></a>

```java
public void resetTimeZoneSidKey()
```

##### `resetUserRoleId` <a name="resetUserRoleId" id="@cdktf/provider-salesforce.user.User.resetUserRoleId"></a>

```java
public void resetUserRoleId()
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

```java
import com.hashicorp.cdktf.providers.salesforce.user.User;

User.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-salesforce.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-salesforce.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-salesforce.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-salesforce.user.User.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.user.User;

User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput">emailEncodingKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput">languageLocaleKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKeyInput">localeSidKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPasswordInput">resetPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput">timeZoneSidKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleIdInput">userRoleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.emailEncodingKey">emailEncodingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.languageLocaleKey">languageLocaleKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.localeSidKey">localeSidKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.resetPassword">resetPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.timeZoneSidKey">timeZoneSidKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.userRoleId">userRoleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-salesforce.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-salesforce.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-salesforce.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-salesforce.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-salesforce.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-salesforce.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-salesforce.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-salesforce.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-salesforce.user.User.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `emailEncodingKeyInput`<sup>Optional</sup> <a name="emailEncodingKeyInput" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKeyInput"></a>

```java
public java.lang.String getEmailEncodingKeyInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-salesforce.user.User.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `languageLocaleKeyInput`<sup>Optional</sup> <a name="languageLocaleKeyInput" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKeyInput"></a>

```java
public java.lang.String getLanguageLocaleKeyInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-salesforce.user.User.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `localeSidKeyInput`<sup>Optional</sup> <a name="localeSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.localeSidKeyInput"></a>

```java
public java.lang.String getLocaleSidKeyInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-salesforce.user.User.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `resetPasswordInput`<sup>Optional</sup> <a name="resetPasswordInput" id="@cdktf/provider-salesforce.user.User.property.resetPasswordInput"></a>

```java
public java.lang.Object getResetPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZoneSidKeyInput`<sup>Optional</sup> <a name="timeZoneSidKeyInput" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKeyInput"></a>

```java
public java.lang.String getTimeZoneSidKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-salesforce.user.User.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `userRoleIdInput`<sup>Optional</sup> <a name="userRoleIdInput" id="@cdktf/provider-salesforce.user.User.property.userRoleIdInput"></a>

```java
public java.lang.String getUserRoleIdInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.User.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.User.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `emailEncodingKey`<sup>Required</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.User.property.emailEncodingKey"></a>

```java
public java.lang.String getEmailEncodingKey();
```

- *Type:* java.lang.String

---

##### `languageLocaleKey`<sup>Required</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.User.property.languageLocaleKey"></a>

```java
public java.lang.String getLanguageLocaleKey();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.User.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `localeSidKey`<sup>Required</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.User.property.localeSidKey"></a>

```java
public java.lang.String getLocaleSidKey();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.User.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `resetPassword`<sup>Required</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.User.property.resetPassword"></a>

```java
public java.lang.Object getResetPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeZoneSidKey`<sup>Required</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.User.property.timeZoneSidKey"></a>

```java
public java.lang.String getTimeZoneSidKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.User.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `userRoleId`<sup>Required</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.User.property.userRoleId"></a>

```java
public java.lang.String getUserRoleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-salesforce.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-salesforce.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-salesforce.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.salesforce.user.UserConfig;

UserConfig.builder()
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
    .alias(java.lang.String)
    .email(java.lang.String)
    .lastName(java.lang.String)
    .profileId(java.lang.String)
    .username(java.lang.String)
//  .emailEncodingKey(java.lang.String)
//  .languageLocaleKey(java.lang.String)
//  .localeSidKey(java.lang.String)
//  .resetPassword(java.lang.Boolean)
//  .resetPassword(IResolvable)
//  .timeZoneSidKey(java.lang.String)
//  .userRoleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | The user’s alias. For example, jsmith. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.email">email</a></code> | <code>java.lang.String</code> | The user’s email address. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | The user’s last name. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | ID of the user’s Profile. Use this value to cache metadata based on profile. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.username">username</a></code> | <code>java.lang.String</code> | Contains the name that a user enters to log in to the API or the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey">emailEncodingKey</a></code> | <code>java.lang.String</code> | The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey">languageLocaleKey</a></code> | <code>java.lang.String</code> | The user’s language. Defaults to en_US. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey">localeSidKey</a></code> | <code>java.lang.String</code> | The value of the field affects formatting and parsing of values, especially numeric values, in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.resetPassword">resetPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reset password and send an email to the user. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey">timeZoneSidKey</a></code> | <code>java.lang.String</code> | A User time zone affects the offset used when displaying or entering times in the user interface. |
| <code><a href="#@cdktf/provider-salesforce.user.UserConfig.property.userRoleId">userRoleId</a></code> | <code>java.lang.String</code> | ID of the user’s UserRole. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-salesforce.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-salesforce.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-salesforce.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-salesforce.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-salesforce.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-salesforce.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-salesforce.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-salesforce.user.UserConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

The user’s alias. For example, jsmith.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#alias User#alias}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-salesforce.user.UserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The user’s email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email User#email}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-salesforce.user.UserConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

The user’s last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#last_name User#last_name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-salesforce.user.UserConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

ID of the user’s Profile. Use this value to cache metadata based on profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#profile_id User#profile_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-salesforce.user.UserConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Contains the name that a user enters to log in to the API or the user interface.

The value for this field must be in the form of an email address, using all lowercase characters. It must also be unique across all organizations. If you try to create or update a User with a duplicate value for this field, the operation is rejected. Each inserted User also counts as a license. Every organization has a maximum number of licenses. If you attempt to exceed the maximum number of licenses by inserting User records, the create request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#username User#username}

---

##### `emailEncodingKey`<sup>Optional</sup> <a name="emailEncodingKey" id="@cdktf/provider-salesforce.user.UserConfig.property.emailEncodingKey"></a>

```java
public java.lang.String getEmailEncodingKey();
```

- *Type:* java.lang.String

The email encoding for the user, such as ISO-8859-1 or UTF-8. Defaults to UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#email_encoding_key User#email_encoding_key}

---

##### `languageLocaleKey`<sup>Optional</sup> <a name="languageLocaleKey" id="@cdktf/provider-salesforce.user.UserConfig.property.languageLocaleKey"></a>

```java
public java.lang.String getLanguageLocaleKey();
```

- *Type:* java.lang.String

The user’s language. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#language_locale_key User#language_locale_key}

---

##### `localeSidKey`<sup>Optional</sup> <a name="localeSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.localeSidKey"></a>

```java
public java.lang.String getLocaleSidKey();
```

- *Type:* java.lang.String

The value of the field affects formatting and parsing of values, especially numeric values, in the user interface.

It doesn’t affect the API. The field values are named according to the language, and the country if necessary, using two-letter ISO codes. The set of names is based on the ISO standard. You can also manually set a user’s locale in the user interface, and then use that value for inserting or updating other users via the API. Defaults to en_US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#locale_sid_key User#locale_sid_key}

---

##### `resetPassword`<sup>Optional</sup> <a name="resetPassword" id="@cdktf/provider-salesforce.user.UserConfig.property.resetPassword"></a>

```java
public java.lang.Object getResetPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reset password and send an email to the user.

No reset is performed if this field is omitted, is false, or was true and remained true on subsequent apply. Please set to false and then true in subsequent applies, or have it set to true on create to trigger the reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#reset_password User#reset_password}

---

##### `timeZoneSidKey`<sup>Optional</sup> <a name="timeZoneSidKey" id="@cdktf/provider-salesforce.user.UserConfig.property.timeZoneSidKey"></a>

```java
public java.lang.String getTimeZoneSidKey();
```

- *Type:* java.lang.String

A User time zone affects the offset used when displaying or entering times in the user interface.

But the API doesn’t use a User time zone when querying or setting values. Values for this field are named using region and key city, according to ISO standards. You can also manually set one User time zone in the user interface, and then use that value for creating or updating other User records via the API. Defaults to America/New_York.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#time_zone_sid_key User#time_zone_sid_key}

---

##### `userRoleId`<sup>Optional</sup> <a name="userRoleId" id="@cdktf/provider-salesforce.user.UserConfig.property.userRoleId"></a>

```java
public java.lang.String getUserRoleId();
```

- *Type:* java.lang.String

ID of the user’s UserRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/salesforce/0.1.0/docs/resources/user#user_role_id User#user_role_id}

---



