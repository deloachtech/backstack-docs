

{% if default($partialCode, false) %}

```js
// invoice  object
{
  "id": "ivi_1234567890",
  ...
}
```

{% /if %}


{% if and(not($partialCode), default($code, true)) %}

```js
// invoice item object
{
  "id": "ivi_1234567890",
  "account_id": "acc_1234567890",
  "amount": 432,
  "description": "Percent of charge number chg_1234567890.",
  "timestamp": 1234567890
  "invoice_id": null
}
```

{% /if %}

{% if default($properties, true) %}

{% table %}
* Property
* Type
* Description
---
* `todo`
* todo
* todo
{% /table %}


{% /if %}
