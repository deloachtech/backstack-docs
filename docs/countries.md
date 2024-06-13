---
title: Countries
nextjs:
  metadata:
    title: Countries
    description: The countries resource.
---

The API uses structured country data to perform geo-related computations.

---

## The Country object

{% partial file="objects/country.md" /%}

---

## Read country

Retrieves the country object for the current `session.account`.

### Request

```js
GET /v1/static/country
```

### Response

The Country object.

{% partial file="objects/country.md" variables={properties:false, partialCode:true} /%}

---


## Enumerated countries

Provides an enumerated collection of country data for HTML selects, radios, or similar listing elements.

### Request

```shell
GET /v1/static/countries/enumerated
```

### Response

```js
[
  {
    "id": "US",
    "title": "United States"
  },
  ... 
[
```

Optionally, provide a custom value for the `id` and/or `title` property names in the query. In the example request, the response property names have been changed to `value` and `label` to eliminate mapping requirements in the frontend codebase.

### Request

```shell
GET /v1/static/countries/enumerated
?id=value&title=label
```

### Response

```js
[
  {
    "value": "US",
    "label": "United States"
  },
  ... 
[
```

