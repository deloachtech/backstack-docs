# Log Out

Removes the account, user and related values from the session and sets the `auth` value to false.

## Terminate the current session

```http request
GET https://api.backstack.com/app/logout
```

Provide a link or button for the user to log out of the app.

```html
<a href="https://api.backstack.com/app/logout">Log Out</a>
```

Returns a session object with only the `app` values.

```json
// session object
{
  "auth": false,
  "app": {
    "id": "app_1234567890",
    ...
  },
  "user": {},
  "account": {},
  "access": {},
  ...
}
```


### Resources

- [demo.backstack.com/app/logout](https://demo.backstack.com/app/logout)
- [github.com/../app/Logout](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Logout)


