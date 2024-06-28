# Quickstart

We've streamlined the quickstart process to take just a few minutes for you to get started with the API.

## Create an account

Create a developer account at [dash.backstack.com](https://dash.backstack.com) to access the Backstack dashboard. Your new account will contain your first application and some global resources, providing a foundation for you to customize as needed. (The `username` and `password` for the new application are the same as those you provided for your developer account.)

Copy the application's public API key. You'll need it to make your first request. (You can integrate the [app schema](/app-schemas) later.)

## Request a session

Communicating with the API can be achieved directly from your frontend environment if desired. Proxies are not required, as no sensitive values are provided until _after_ a user is fully authenticated.

### Request

```js
<script>
  var request = new XMLHttpRequest(); request.open("GET",
  "https://api.backstack.com/v1/auth/session", true);
  request.setRequestHeader("Authorization", "Bearer " + app_public_key);
  request.withCredentials = true; request.credentials = 'include';
  request.send(); ...
</script>
```

### Response

The response will include all necessary information to handle current and future requests through a JWT, which is provided in an HttpOnly cookie and automatically sent to the API upon each request.

```sh
HTTP/2.0 200 OK
...
Set-Cookie: BackstackJWT=emn367db...; Secure; HttpOnly
...
Content-Type: application/json
{
  "app": {
    "id": "app_1234567890",
    ...
  },
  "auth": false,
  ...
}
```

The response contains a [Session object](/sessions) with an `auth` value of `false`, indicating a `login` is required.

## What's next?

You've successfully set up an API connection for your first application. Now, it's time to integrate the [app schema](/app-schemas) and begin the [log in process](/login).

You have the flexibility to integrate features incrementally, ensuring a smooth and controlled transition without disrupting your current workflow.
