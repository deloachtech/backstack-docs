# Lock Screen

Although the API is called `lock-screen`, it does not actually lock the user's screen. Instead, it returns a session object with an empty access value effectively locking the user out of the application. The user must then unlock the screen by submitting their password to the API.


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