# App

The app object associated with the current session.

::: info
Applications are managed using the Backstack dashboard. The intention of this endpoint is to independently retrieve the app object of the current session, disregarding the session object itself.
:::


## App object {#app-object}

```http request
GET https://api.backstack.com/app
```
Returns the app object.

```json
{
  "id": "app_1234567890",
  "title": "Acme Services",
  "created": 1234567890,
  "login_url": "https://acme-corp.com/login",
  "reset_url": "https://acme-corp.com/reset-password",
  "signup_url": "https://acme-corp.com/signup",
  "network_url": "https://acme-corp.com/networks",
  "stripe_pub_key": "pk_1234567890",
  "stripe_key_exists": true
}
```




