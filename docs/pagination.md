# Pagination

When an API response provides a list of objects, regardless of the quantity, pagination is supported. In paginated responses, objects are nested under a `list` attribute. The response includes request attributes such as `page_size`, `page_index`, `search`, and `filters` for specifying record requests.

## Request

```sh
GET /v1/account/users
?page_index=2&page_size=25&filters[active]=1&filters[foo]=bar
```

| Parameter | Type | Description |
| --- | --- | --- |
| `page_size` |  Optional integer |  The quantity of records you want returned. (The default is 25.) |
| `page_index` | Required integer |  The current page index in the array of pages available. |
| `search` |  Optional string | The value to search for against the searchable data for the specific list. |
| `filters` | Optional array | An array of filters you want to process against the request. (Each object list provides an array of filters available.) |


## Response

```js
{
  "list": [
    {
      "id": "usr_1234567890",
      ...
    },
    {
      "id": "usr_2345678901",
      ...
    }
    ...
  ],
  "total": 8,
  "url": "https://api.backstack.com/v1/account/users?page...",
  "filters": [
    "status": {
      "active": "Active",
      ...
    },
    ...
  ]
}
```