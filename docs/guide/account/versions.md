# Account Versions



An endpoint providing an accounts history of [app version](app-versions.md) changes.


## Activate a version

```http request
POST https://api.backstack.com/account/versions/:id
```

Updates the current session and the accounts version history.


### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)


## Version history

```http request
GET https://api.backstack.com/account/versions
?collection=true
```

Returns a [collection list](lists.md#collection) of the accounts version history.

```json
[
 TODO 
]
```


### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)


