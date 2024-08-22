# Quickstart

We've streamlined the quickstart process so you can start using the API within minutes.

:::info
Check out our [live sample project](https://main.d39dm9d7yu1652.amplifyapp.com/) to see the API in action! Log in using `demo` as your username and password.
:::

## Create a developer account

Create your account at [dash.backstack.com](https://dash.backstack.com) to access the Backstack dashboard. 

Your new account will contain your first application and some global resources, providing a foundation for you to customize as needed. (The `username` and `password` for the new application are the same as those you provided for your developer account.) Copy the application's API key. You'll need it to make your first request.


## Request a codebase session

To securely interact with the API, you need to request a session using your app key. This session will provide you with a JSON Web Token (JWT) that you will use for authentication in subsequent requests. This approach ensures that your secured app key is only exposed during the initial request.

Store the JWT using sessionStorage or a cookie (or any other method), then substitute your app key with it.

Example code to handle requests using Axios.

```js
const store = useStore();
const appKey = sessionStorage.getItem(key) ?? secrets.appKey

axios.get('https://api.backstack.com/v1/app/session', {
  headers: {'Authorization' : 'Bearer ' + appKey}
  })
  .then((response) => {
    sessionStorage.setItem('jwt', response.jwt)
    store.setSession(response);
  });
```


The response includes a dynamic session object for use throughout your codebase. 

```sh
HTTP/2.0 200 OK
Content-Type: application/json
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbG ...",
  "app": {
    "id": "app_1234567890",
    ...
  },
  "auth": false,
  ...
}
```

The `session.auth` value is `false`, indicating a `login` is required.


## What's next?

You've successfully set up an API connection for your first application. Now, it's time to implement the [log in process](login) process.

Browse the [Git repository](https://github.com/deloachtech/backstack-vue) for examples demonstrating how to effectively implement the Backstack API into your codebase.

