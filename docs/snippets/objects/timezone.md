
{% if default($partialCode, false) %}

```js
// timezone object
{
  "id": "America\/Chicago",
  "title": "America, Chicago",
  "utc_offset": -18000,
  "country_id": "US"
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// timezone object
{
  "id": "America\/Chicago",
  "title": "America, Chicago",
  "utc_offset": -18000,
  "country_id": "US"
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
* The timezone ID.
---
* `title`
* String
* The title of the timezone.
---
* `utc_offset`
* Integer
* The difference in seconds between Coordinated Universal Time (UTC) and the timezone.
---
* `country_id`
* String
* The [country](/docs/countries) identifier the timezone is located.
{% /table %}

{% /if %}
