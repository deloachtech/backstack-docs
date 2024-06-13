
{% if default($partialCode, false) %}

```js
// version object
{
  "id": "ver_1234567890",
  ...
  "features": [
    ...
  ]
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// version object
{
  "id": "ver_1234567890",
  "title": "App",
  "description": "Version for the main application.",
  "tag": "v1",
  "is_default": 1,
  "status": "active",
  "features": [
    {
      "id": "fea_1234567890",
      "title": "Account",
      "human_id": "account"
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
* The version ID.
---
* `title`
* String
* The title of the version.
---
* `description`
* String
* The description iof the version.
---
* `tag`
* String
* The sort tag associated with the version.
---
* `is_default`
* Boolean
* Whether the version is the default when signing up.
---
* `status`
* String
* The status of the version (`active` or `inactive`). An inactive version haa no accounts subscribed.
---
* `fearures`
* Array
* An array of features included in the version.
---
* `features.id`
* String
* The feature ID.
---
* `features.title`
* String
* The title of the feature.
---
* `features.human_id`
* String
* The human-readable ID.
{% /table %}

{% /if %}
