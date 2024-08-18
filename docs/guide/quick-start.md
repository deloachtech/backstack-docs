# Quickstart

We've streamlined the quickstart process so you can start using the API within minutes.


## Create a developer account

Create a developer account at [dash.backstack.com](https://dash.backstack.com) to access the Backstack dashboard. 

Your new account will contain your first application and some global resources, providing a foundation for you to customize as needed. (The `username` and `password` for the new application are the same as those you provided for your developer account.) Copy the application's API key. You'll need it to make your first request.

## Request a codebase session

Request the current session from within your codebase using your app key.

```js
<script>
  var request = new XMLHttpRequest(); request.open("GET",
  "https://api.backstack.com/v1/app/session", true);
  request.setRequestHeader("Authorization", "Bearer " + app_key);
  request.withCredentials = true; request.credentials = 'include';
  request.send(); ...
</script>
```

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

The response contains a [Session object](sessions) with an `auth` value of `false`, indicating a `login` is required.

## What's next?

You've successfully set up an API connection for your first application. Now, it's time to implement the [log in process](login) process.

The [sample project](sample-project) is a great resource for information and actual integration methods.

