# Lock Screen

The lock screen is a security feature that allows users to temporarily relinquish access to all features of the application. The user must enter their password to regain their original access.


## Lock session

```http request
GET https://api.backstack.com/user/lock-screen
```

Returns a [session object](../app/session.md) with an empty access value.


```json
// session object with empty access value
{
  ...
  "access": [],
  ...
}
```


## Unlock session

```http request
POST https://api.backstack.com/user/lock-screen
{
    "password": "Mh344q!ioe"
}
```

Returns a [session object](../app/session.md) with the original access value.