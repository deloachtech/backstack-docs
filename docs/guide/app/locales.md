# App Locales

Backstack provides structured locale data for all internationalization and localization.


## Countries selection {#countries}

```http request
GET https://api.backstack.com/app/locales/countries
?selection=true
```

Returns a [selection list](../lists.md#selections) of country IDs and titles.

```json
{
  "US": "United States",
  ...
}
```




## Timezones selection {#timezones}

```http request
GET https://api.backstack.com/app/locales/timezones
?selection=true
```

Returns a [selection list](../lists.md#selections) of timezone IDs and titles for the current accounts country.


```json
{
  "America/Chicago" :  "America, Chicago",
  ...
}
```




