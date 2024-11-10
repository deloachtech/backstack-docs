# App Versions

You can provide different versions of your app with varying feature sets.

::: info
App versions are managed through the Backstack dashboard with the API providing access to version details.
:::




## Version object {#version-object}

```http request
GET https://api.backstack.com/app/versions/:id
```

Returns a version object.

```json
{
  "id": "ver_1234567890",
  "title": "Advanced",
  "description": "Everything in the Basic version, plus...",
  "tag": "v1",
  "user_fee": 500,
  // cents
  "is_default": false,
  "active": false,
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

### Resources

- [demo.backstack.com/app/versions](https://demo.backstack.com/app/versions)
- [github.com/../app/Versions.vue/Index.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Versions.vue)


## Create a pricing page {#create-pricing-page}

Display versioning schemas and feature sets on a pricing page.

```http request
GET https://api.backstack.com/app/versions
```

Returns a [collection list](../lists.md#collection) of versions sorted by tag, and a feature matrix for additional details.

```json
[
  {
    "versions": [
      {
        "id": "ver_1234567890",
        "tag": "v1",
        "title": "Basic",
        "description": "The basic version of the app.",
        "more_info": "",
        "fee": 0,
        "user_fee": 0,
        "active": true
      },
      ...
    ],
    "feature-matrix": {
      TODO
    }
  }
]
```

### Versions

Use the response `versions` data to create a pricing table or cards.

```js
// pseudo code
TODO
```

|    Basic    |  Advanced   |     Pro     |
|:-----------:|:-----------:|:-----------:|
| description | description | description |
|     fee     |     fee     |     fee     |
|     ...     |     ...     |     ...     |



### Feature matrix

Use the response `feature-matrix` data to create a feature matrix.

```js
// pseudo code
TODO
```


| Feature         | Basic | Advanced | Pro |
|-----------------|:-----:|:--------:|:---:|
| Some Feature    |   x   |    x     |  x  |
| Another Feature |       |          |  x  |
| ...             |       |          |     |


### Resources

- [demo.backstack.com/app/versions](https://demo.backstack.com/app/versions)
- [github.com/../app/Versions.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Versions.vue)


## Related endpoints

- [account/versions](../account/versions.md)
- [account/optional-features](../account/optional-features.md)

