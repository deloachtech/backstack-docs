
{% if default($partialCode, false) %}

```js
// invoice object
{
  "id": "inv_1234567890",
  ...
  "items": [
    {
      "id": "ivi_1234567890",
      ...
    },
    ...
  ]
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// invoice object
{
  "id": "inv_1234567890",
  "description": "Invoice for Month/Year"
  "account_id": "acc_1234567890",
  "stripe_customer_id": "cust_1234567890",
  "date": 1234567890,
  "amount": 12345,
  "items": [
    {
      "id": "ivi_1234567890",
      "description": "Monthly user fees (10 @ $15.00).",
      "amount": 15000
    },
    ...
  ]
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
* The invoice ID.
---
* `todo`
* todo
* todo
{% /table %}

{% /if %}
