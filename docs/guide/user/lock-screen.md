# Lock Screen

Although the API is called `lock-screen`, it can not actually lock the user`s screen. You will need to implement that in your codebase. Instead, it returns a session object with an empty access value, effectively locking the user out of the application. The user must then refresh the access values by submitting their password to the API.


## Lock

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


## Unlock

```http request
POST https://api.backstack.com/user/lock-screen
{
    "password": "Mh344q!ioe"
}
```

Returns a [session object](../app/session.md) with the original access value.