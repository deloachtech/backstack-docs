# Lock Screen

Although the API is called `lock-screen`, it can not actually lock the user`s screen. You will need to implement that in your codebase. Instead, it returns a session object with an empty access value, blocking access to permission based application features. The user must then refresh the session access values by submitting their password to the API.

::: info
The user object contains a `screen_locked` boolean value that you can use to determine if the user is locked out of the application.
:::


::: warning
In demo mode, the lock screen feature is simulated. As the access values are already empty. 
:::

## Lock

```http request
GET https://api.backstack.com/user/lock-screen
```

Returns a [session object](../app/session.md) with an empty access value.


```json
// session object
{
  ...
  "access": {},
  "user": {
    ...,
    "screen_locked": true
  },
  ...
}
```


## Unlock

```http request
POST https://api.backstack.com/user/lock-screen
{
    "password": "Mh344q!ioe"
}
```

Returns a [session object](../app/session.md) with the original access value.



```json
// session object
{
  ...
  "access": {
    "some-feature": "crud",
    ...
  },
    "user": {
        ...,
        "screen_locked": false
    },
  ...
}
```