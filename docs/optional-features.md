---
title: Optional features
nextjs:
  metadata:
    title: Optional features
    description: Subscription based application functionality.
---


Features can be independently offered, providing additional account-level options beyond the current version functionality. Use optional features for offering unique functionality that might not be suitable for all accounts in the version schema.

![Images](/images/diagrams/optional-features.svg)


When defining version functionality, features can be designated as optional. If a feature is offered optionally, the account needs to subscribe to the feature to access its functionality.

Optional feature constraints are computed in the compiled session environment, and access is granted as a standard feature, resulting in no variations in codebase logic.

```js
// pseudocode

// The version has the widget feature included.

if(hasAccess('widgets:c'))
  <button>Create Widget</button>
  
// The version has the widget feature as an option. (No difference in logic.)

if(hasAccess('widgets:c'))
  <button>Create Widget</button>
```

---

## Account settings

The current account optional feature subscriptions are listed in the `session` object.

```js
// session object
{
  ...
  "account": {
    "optional_features": [
      "payments",
      ...
    ]
    ...
  },
  ...
}
```


---

## Available optional features 


The optional features available for the current account are defined in the application schema `optional_features.distribution[session.account.version_id]` array.

```js
// app schema
{
  ...
  "optional_features": {
    "distribution": {
      "ver_1234567890": [
        "payments",
        ...
      ],
      ...
    },
    "list": {
      "account-users": {
        "title": "Account user management",
        "description": "Manage users and RBAC distribution." 
      }
      ...
    }
  },
  ...
}
```

{% table %}
* Parameter
* Type
* Description
---
* `optional_features.distribution`
* array
* Keys are version ids and values are optional feature IDs.
---
* `optional_features.distribution[version_id]`
* array
* Optional feature IDs available for the version ID.
---
* `optional_features.list`
* array
* Keys are feature IDs and values are the features data.
---
* `optional_features.list[feature_id].title`
* string
* The title of the feature.
---
* `optional_features.list[feature_id].description`
* string
* The features description.
{% /table %}

---

## Toggling optional features activation

If the accounts version has optional features available, you'll want to offer methods for activating/deactivating them on your page.

{% partial file="code/optional-features.md" /%}

Then post the selected feature id to the API to toggle its active status.

### Request

```shell
POST /v1/account/optional-features/:id
```

### Response

```js
// latest optional feature history record
{
  "id": "afh_1234567890",
  "account_id": "acc_1234567890",
  "feature_id": "payments",
  "timestamp": 1703705293,
  "active": true
}
```

---


## Monetizing optional features

{% partial file="auto-invoiced-fees.md" /%}

See [invoicing-accounts](/docs/account-invoicing) for additional information.

