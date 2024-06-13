
{% if default($partialCode, false) %}

```js
// country object
{
  "id": "US",
  "title": "United States",
  ...
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// country object
{
  "id": "US",
  "title": "United States",
  "currency_id": "USD",
  "fips_code": "US",
  "iso_numeric": "840",
  "north": "49.388611",
  "south": "24.544245",
  "east": "-66.954811",
  "west": "-124.733253",
  "capital": "Washington",
  "continent_name": "North America",
  "continent": "NA",
  "languages": "en-US,es-US,haw,fr",
  "iso_alpha3": "USA",
  "geoname_id": 6252001,
  "telephone_prefix": "+1"
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
* The country ID.
---
* `title`
* String
* The country title.
---
* `currency_id`
* String
* The currency ID used by the country.
---
* `fips_code`
* String
* County FIPS Codes are unique 5-digit codes that represent specific US counties. The first two digits represent the county's state and the last three digits represent the county.
---
* `iso_numeric`
* String
* ISO 3166-1 numeric (or numeric-3) codes are three-digit country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest.
---
* `north`
* String
* North geo coordinates.
---
* `south`
* String
* South geo coordinates.
---
* `east`
* String
* East geo coordinates.
---
* `west`
* String
* West geo coordinates.
---
* `capital`
* String
* The capital of the country.
---
* `continent_name`
* String
* The continent name.
---
* `continent`
* String
* The continent identifier.
---
* `languages`
* String
* Languages of the country.
---
* `iso_alpha3`
* String
* ISO 3166-1 alpha-3 codes are three-letter country codes defined in ISO 3166-1, part of the ISO 3166 standard published by the International Organization for Standardization (ISO), to represent countries, dependent territories, and special areas of geographical interest.
---
* `geoname_id`
* Integer
* The GEO Name identifier.
---
* `telephone_prefix`
* String
* The international telephone prefix.
{% /table %}

{% /if %}
