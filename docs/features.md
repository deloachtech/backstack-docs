---
title: Features
nextjs:
  metadata:
    title: Features
    description: Defining and implementing codebase features.
---

Regardless of the level of functionality your application utilizes, _everything_ revolves around defining and implementing features. This method of access control serves numerous levels of functionality with a straightforward implementation.

As a developer, you won't need to concern yourself with domains, versioning, RBAC, SaaS, or other access schemas. You'll simply designate portions of your codebase by the functionality it provides, define a label, and assign CRUD permissions.


See the [feature architecture](/docs/architecture#features) for more information.

---

## Defining features

Use the Backstack dashboard to define codebase features. 

Identify feature labels based on common codebase logic. Note that CRUD (`c`reate, `r`ead, `u`pdate, and `d`elete) permissions will be assigned [elsewhere](/docs/access-control), and you'll be integrating feature access control throughout your codebase.

```javascript
if(hasAccess('feature1:*;feature2:cu'))
  ...
```


## Example common features

The following features could be used in almost every application.

{% table %}
* Human ID
* Note
---
* `accounts`
* Could be used for account networking (account creation). A better label would be `natwork-accounts`.
---
* `account-profile`
* Provides access to information that would not be considered sensitive. Permissions `r`ead and `u`pdate would be applicable.
---
* `account-users`
* Access to account users. Permission `u`pdate would provide access to role assignments.
---
* `payments`
* CRUD permissions will work fine here. Permission `d`elete could be considered a refund.
{% /table %}


## Example multi-domain features

These features would be used for apps with domains having customer related functionality. 

{% table %}
* Human ID
* Note
---
* `accounts-receivable`
* Provides access to invoicing and receivables functionality.
---
* `customers`
* Allows for CRUD permissions to manage customer profiles, etc.
---
* `customer-payments`
* A more distinct layer of customer management.
{% /table %}


## Example domain-specific features

Creating domain-specific features is a common practice, and these features are likely to be app-specific as well.

{% table %}
* Human ID
* Note
---
* `driver-tests`
* Would be used for a state agencies that issues drivers licenses.
---
* `acme-corp`
* Features reserved for clint-specific applications.
{% /table %}


---

## Granting role access

Grant permission-based feature access to roles using the Backstack dashboard. Once defined, these schemas are available for use on any application.

See the [access control](/docs/access-control) page for additional information.

---

## Optional features

Features can be independently offered, providing additional account-level options beyond the current version functionality. Use optional features for offering unique functionality that might not be suitable for all accounts in the version schema.

Using the Backstack dashboard, designate a feature as being optional when prescribing features to app versions. If a feature is offered optionally, the account needs to subscribe to the feature to access its functionality.

See the [optional feature workflow](/docs/optional-features) for incorporating optional features into your UI.

---

## Monetizing optional features

{% partial file="auto-invoiced-fees.md" /%}

See [invoicing-accounts](/docs/account-invoicing) for additional information.

---


## Identifying codebase features


Your codebase already contains many features. Identifying them is simply a matter of wrapping existing code within access controlled `blocks` that will be enforced by your [access control function]().

Identifying features is the only requirement necessary to enforce every layer of the application environment. Backstack incorporates the application's domain, version and module settings when compiling the `session.access` values.


---

## Example codebase implementations

### Sidebar options

```js
// pseudocode
if(hasAccess('payment-settings:*'))
  <a href="/payment-settings">Payment Settings</a>
```


### Routing

```js
// pseudocode
let routes = [
	"home": "/",
	"payment-settings": "/payment-settings",
	...
]

if(!hasAccess('payment-settings:*'))
	delete routes['payment-settings']
```

### Buttons

```js
// pseudocode
if(hasAccess('payment-settings:u'))
	<button>Update Payment Settings</button>
if(hasAccess('payment-settings:d'))
	<button>Delete Payment Settings</button>
```