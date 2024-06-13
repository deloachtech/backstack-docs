---
title: Timezones
nextjs:
  metadata:
    title: Timezones
    description: The Timezone object.
---

The API uses structured timezone data for all timestamped computations.


---

## The Timezone object

{% partial file="objects/timezone.md" /%}

---

## Read timezone

Retrieves the timezone object for the current `session.account`.

### Request

```js
GET /v1/static/timezone
```

### Response

The Timezone object.

{% partial file="objects/timezone.md" variables={properties:false, partialCode:true} /%}


---

## Enumerated timezones

Provides an enumerated collection of timezone data for HTML selects, radios, or similar listing elements.

Timezones are provided for the country of the current `session.account`.

### Request

```shell
GET /v1/static/timezones/enumerated
```

### Response

```js
[
  {
    "id": "America\/Chicago",
    "title": "America, Chicago"
  },
  ...
]
```

Optionally, provide a custom value for the `id` and/or `title` property names in the query. In the example request, the response property names have been changed to `value` and `label` to eliminate mapping requirements in the frontend codebase.

### Request

```shell
GET /v1/static/timezones/enumerated
?id=value&title=label
```

### Response

```js
[
  {
    "value": "America\/Chicago",
    "label": "America, Chicago"
  },
  ...
]
```

