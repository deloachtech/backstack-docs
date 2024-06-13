
{% if default($partialCode, false) %}

```js
// counter transaction object
{
  "id": "ctx_1234567890",
  ...
  "counter": {
    "id": "ctr_1234567890",
    ...
  }
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// counter transaction object
{
  "id": "ctx_1234567890",
  "app_id": "app_1234567890",
  "account_id": acc_1234567890",
  "timestamp": 1234567890,
  "integer": 1,
  "counter": {
    "id": "ctr_1234567890",
    "human_id": "foo-downloads",
    "title": "Foo Downloads",
    "desctiption": "Counter to track foo downloads.",
    "interval": 1
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
* `id`
* String
* The counter transaction ID.
---
* `app_id`
* String
* The application ID for which the transaction exists.
---
* `account_id`
* String
* The account ID for which the transaction is assigned.
---
* `timestamp`
* Integer
* The timestamp of the transaction.
---
* `integer`
* Integer
* The integer value of the transaction.
---
* `counter`
* Array
* The counter for which the transaction is assigned.
---
* `counter.id`
* String
* The counter ID.
---
* `counter.human_id`
* String
* The human-readable counter ID.
---
* `counter.title`
* String
* The counter title.
---
* `counter.description`
* String
* The counter description.
---
* `counter.interval`
* Integer
* The number of days the counter tracks values (e.g. past n days).
{% /table %}


{% /if %}
