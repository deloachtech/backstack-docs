# Lists

Backstack provides three types of lists: `records`, `collections`, and `selections`. Each having specific use cases and properties.

## Record lists {#records}

A searchable, filterable, and paginated list of records. This is the default list type. 


```http request
GET https://api.backstack.com/account/users
```

Returns page one of a list with 25 records nested in the `list` property.

```json
{
  "list": [
    {
      "id": "usr_1234567890",
      ...
    },
    ...
  ],
  "total": 21,
  "search": "",
  "filter": "",
  "filters": [
    "active",
    ...
  ],
  "pages": 1
}
```

| Property  | Description                                |
|-----------|--------------------------------------------|
| `list`    | The list of records.                       |
| `total`   | Total records available for the request.   |
| `search`  | The search term processed for the request. |
| `filter`  | The filter processed for the request.      |
| `filters` | Filters available for the request.         |
| `pages`   | Number of pages available for the request. |

### Search and filter

You can filter and search for specific records in a list by providing `search` and/or `filter` parameters in the request
query.

```http request
GET https://api.backstack.com/account/users
?search=doe&filter=active
```

| Attribute | Type            | Description                                                      |
|-----------|-----------------|------------------------------------------------------------------|
| `search`  | Optional string | The term to search for in the specific list.                     |
| `filter`  | Optional string | The filter to process against the request. Omit for all records. |

Returns a list of records that match the search term and filter.

```json
{
  "list": [
    {
      "id": "usr_1234567890",
      "name": "John Doe",
      ...
    },
    {
      "id": "usr_2345678901",
      "name": "Jane Doe",
      ...
    }
  ],
  "total": 2,
  "search": "doe",
  "filter": "active",
  "filters": [
    "active",
    ...
  ],
  "pages": 1
}
```

### Pagination

You can paginate list responses by providing `records` and/or `page` parameters in the request query.

```http request
GET https://api.backstack.com/account/users
?page=1&records=25
```

| Attribute | Type             | Description                                                 |
|-----------|------------------|-------------------------------------------------------------|
| `page`    | Optional integer | The page number of `pages` to return. Default is 1.         |
| `records` | Optional integer | Number of records to return. Maximum is 100. Default is 25. |

```json
{
  "list": [
    {
      "id": "usr_1234567890",
      ...
    },
    ...
  ],
  "total": 30,
  "search": "",
  "filter": "",
  "filters": [
    "active",
    ...
  ],
  "pages": 2
}
```


## Collection lists {#collection}

A complete list of records with necessary details for a specific use case. They're not nested under a list property and cannot be searched or filtered in the request.

```http request
GET https://api.backstack.com/app/optional-features
?collection=true
```

```json
[
  {
    "id": "fea_1234567890",
    "title": "Extended Reporting",
    "description": "Get more information out of the standard reports.",
    "more_info": "Detailed transactions|Visual graphs|Extended metrics",
    "image": "<svg>...</svg>",
    "fee": 1234, // cents
    "active": true
  },
  ...
]
```


## Selection lists {#selection}

A complete list of records, typically with IDs and titles, for HTML inputs like dropdowns, radio buttons, and checkboxes. They're not nested under a list property and cannot be searched or filtered in the request.

```http request
GET https://api.backstack.com/account/users
?selection=true
```

```json
[
  {
    "usr_1234567890": "John Doe"
  },
  ...
]
```

You can iterate over the list to create an HTML select element.

```html
<select name="account_id">
    {data?.map((item) => {
        const [key, value] = Object.entries(item)[0]
        return (
            <option key={key} value={key}>{value}</option>
        )
    })}
</select>
```

Selections may also include additional data for more complex input elements.

```http request
GET https://api.backstack.com/app/domains
?selection=true
```

```json
[
  {
    "dom_1234567890": {
      "title":  "Government Agency",
      "description": "Government agency account type",
      "signup_help": "Select this account type..."
    }
  },
  ...
] 
```




