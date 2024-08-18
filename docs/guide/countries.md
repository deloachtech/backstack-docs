# Countries

The API uses structured country data to perform geo-related computations.

## The Country object

<!--@include: includes/objects/country.md-->
<!--@include: includes/objects/properties/country.md-->

## Read country

Retrieves the country object for the current `session.account`.

### Request

```sh
GET /v1/static/country
```

### Response

The Country object.

<!--@include: includes/objects/partials/country.md-->

## Enumerated countries

Provides an enumerated collection of country data for HTML selects, radios, or similar listing elements.

### Request

```sh
GET /v1/static/countries/enumerated
```

### Response

```json
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

```sh
GET /v1/static/countries/enumerated
?id=value&title=label
```

### Response

```json
[
  {
    "value": "US",
    "label": "United States"
  },
  ...
[
```
