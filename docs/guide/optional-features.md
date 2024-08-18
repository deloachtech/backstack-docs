# Optional Features

Features can be independently offered, providing additional account-level options beyond the current version functionality. Use optional features for offering unique functionality that might not be suitable for all accounts in the version schema.

![Images](images/diagrams/optional-features.svg)

When defining version functionality, features can be designated as optional. If a feature is offered optionally, the account needs to subscribe to the feature to access its functionality.

Optional feature constraints are computed in the compiled session environment, and access is granted as a standard feature, resulting in no variations in codebase logic.

```js
// pseudocode

// The version has the widget feature included.

if (hasAccess("widgets:c")) <button>Create Widget</button>;

// The version has the widget feature as an option. (No difference in logic.)

if (hasAccess("widgets:c")) <button>Create Widget</button>;
```

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

## Available optional features

TODO: Description

### Request

```sh
GET /v1/account/optional-features
```

### Response

TODO: API response


## Toggling optional features activation

If the accounts version has optional features available, you'll want to offer methods for activating/deactivating them on your page.

<!--@include: includes/optional-features.md-->

Then post the selected feature id to the API to toggle its active status.

### Request

```sh
POST /v1/account/optional-features/:id
```

### Response

TODO: API Response

## Monetizing optional features

<!--@include: includes/to-invoiced-fees.md-->

See [invoicing-accounts](invoicing-accounts) for additional information.
