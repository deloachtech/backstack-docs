# App Optional Features

Optional features provide unique functionality beyond the core app.

::: info 
Features are managed through the Backstack dashboard with the API providing access to their settings.
:::


## Optional features collection


```http request
GET https://api.backstack.com/app/optional-features
?collection=true
```

Returns a [collection list](../lists#collection) of optional features available for the current app version.

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

### Resources

- [TODO demo.backstack.com/app/optional-features](https://demo.backstack.com/app/optional-features)
- [TODO github.com/../app/OptionalFeatures.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/OptionalFeatures.vue)




## Related endpoints

- [account/optional-features](../account/optional-features.md)
