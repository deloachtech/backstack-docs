# Account Optional Features


## Toggle feature status

You can provide a grid of features with a toggle switch to enable or disable each feature. Submit the feature ID to the API to toggle its active status.

```html
<div class="optional-features">
    <!-- foreach loop here -->
    <div class="feature">
        ...
        <input type="checkbox" onchange="toggleActive('id')" />
    </div>
</div>
```

```http request
POST https://api.backstack.com/account/optional-features/:id
```

Updates the accounts optional feature history. Returns the feature ID and active status so you can update your UI.

```json
{
  "id": "fea_1234567890",
  "active": true
}
```


### Resources

- [demo.backstack.com/account/optional-features](https://demo.backstack.com/account/optional-features)
- [github.com/../account/OptionalFeatures.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/OptionalFeatures.vue)



## History of changes

Provide a page for users to view a history of feature changes.

```http request
GET https://api.backstack.com/account/optional-features
?collection=true
```

Returns a [collection list](lists.md#collection) of optional feature changes sorted by descending timestamp.

```json
[
  {
    "title": "Extended Reporting", 
    "timestamp": 1234567890,
    "status": "active"
  },
  ...
]
```


### Resources

- [demo.backstack.com/account/optional-features](https://demo.backstack.com/account/optional-features)
- [github.com/../account/OptionalFeatures.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/OptionalFeatures.vue)



## Related endpoints

- [app/optional-features](app-optional-features.md)
