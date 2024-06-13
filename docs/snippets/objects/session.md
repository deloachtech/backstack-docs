
{% if default($partialCode, false) %}

```js
// session object
{
  "auth": true,
  "signal": null,
  "signal_data": null,
  "account": { ... },
  "user": { ... },
  "access": { ... },
  }
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// session object
{
  "auth": true,
  "account": {
    "id": "acc_1234567890",
    "domain_id": "dom_1234567890",
    "version_id": "ver_1234567890",
    "title": "Acme Corp",
    "address": "123 Any Street",
    "city": "New Orleans",
    "state": "LA",
    "zip": "12345",
    "phone": "555-555-5555",
    "contact_name": "James Doe",
    "contact_email": "jamesdoe@acmecorp.com",
    "country_id": "US",
    "url": "https://www.acmecorp.com",
    "is_app_account": 0,
    "timezone_id": "America\/Adak",
    "utc_offset": -32400,
    "counters": {
      "charges": 21,
      ...
    },
    "optional_features": [
      "payment-processing",
      ...
    ],
    "stats": {
      "user_count": 15,
      "children_count": 4,
      "role_count": 12
    }
  },
  "user": {
    "id": "usr_1234567890",
    "username": "jamesdoe",
    "name": "James Doe",
    "email": "jamesdoe@acmecorp.com",
    "avatar": "https://cdn.bckstack.com/avatars/hs737jfgc637e.jpg",
    "roles": [
      "rol_1234567890",
      ...
    ]
  },
  "access": {
    "account-users": "crud",
    ...
  },
  "access_signature": "8923jfcmo734vmpqnc49qfymIYGikU6fu6ewoufh2ou",
  "alerts": {
     ...    
  }
}
```

{% /if %}

{% if default($properties, true) %}

{% table %}
* Property
* Type
* Description
---
* `auth`
* Boolean
* Whether the session has been fully authenticated. See the [log-in workflow](/docs/log-in) for more information.
---
* `account.id`
* String
* The [account](/docs/account) ID.
---
* `account.domain_id`
* String
* The [domain](/docs/domains) ID for which the account was created under.
---
* `account.version_id`
* String
* The current [version](/docs/versions) of application functionality the account is subscribed.
---
* `account.title`
* String
* The title of the account.
---
* `account.address`
* String
* The street address of the account.
---
* `account.city`
* String
* The address city.
---
* `account.state`
* String
* The address state.
---
* `account.zip`
* String
* The address zip code.
---
* `account.phone`
* String
* The phone number for the account.
---
* `account.contact_name`
* String
* The contact name for the account.
---
* `account.contact_email`
* String
* The contact persons email address.
---
* `account.country_id`
* String
* The account [country](/docs/countries) ID.
---
* `account.url`
* String
* The URL for the account website.
---
* `account.is_app_account`
* Boolean
* Whether the account created the app.
---
* `account.timezone_id`
* String
* The account [timezone](/docs/timezones) ID.
---
* `account.utc_offset`
* Integer
*  The accounts UTC timezone offset in seconds. Add this integer to any timestamped API data for converting to the accounts' timezone.
---
* `account.counters`
* Array
* An array of aggregated values for the current account [counters](/docs/counters).
---
* `account.optional_features`
* Array
* An array of [optional features](/docs/optional-features) for which the account has subscribed.
---
* `account.stats`
* Array
* An array of system-generated values you can use for managing resource usage.
---
* `account.stats.user_count`
* Integer
* The count of account users.
---
* `account.stats.children_count`
* Integer
* The child accounts networked under the account.
---
* `account.stats.role_count`
* Integer
* The count of roles the account has active.
---
* `user.id`
* String
* The users ID.
---
* `user.username`
* String
* The users login name.
---
* `user.name`
* String
* The users real name.
---
* `user.email`
* String
* The users email address.
---
* `user.avatar`
* String
* URL for the avatar image the user has provided for their profile.
---
* `user.roles`
* Array
* Role IDs the user has been assigned.
---
* `access`
* Array
* An array of access control for the current user. Array keys are [feature](/docs/features) IDs and values are CRUD permissions granted. See the [access control](/docs/access-control) page for more information.
---
* `access_signature`
* String
* A signature of the current access control values. Use this value to check if cached access control has changed. See [caching access](#) for additional information.
---
* `alerts`
* Array
* System and application alerts for display to the user. Array keys ate the alert IDs and the values are the texts to display. You can map the keys to routes for creating hyperlinks to pages.
{% /table %}

{% /if %}
