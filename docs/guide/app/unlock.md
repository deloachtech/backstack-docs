# Unlock

todo: description


Use this endpoint for providing a lock screen feature for your app.


## Validate password

```http request
POST https://api.backstack.com/app/unlock
{
    "password": "demo"
}
```

Returns a [session object](session.md) upon success.


