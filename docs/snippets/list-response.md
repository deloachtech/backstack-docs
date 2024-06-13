

Returns a `list` array of records with the `total` records available for the query. The `url` of the current request are also included. See the [pagination guide](/pagination) for information on paging through lists.

```js
{
  "list": [ 
    {
      "id": "rec_1234567890",
      ...
    },
    ...
  ],
  "url": "https://api.backstack.com/v1/...",
  "total": 8 
}
```

