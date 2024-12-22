# Log In

Authenticate a user for the current session.

## Authentication

Provide a form for the user to submit their username and password.

```html
<form id="login-form">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Log In</button>
</form>
```

Submit the `username` and `password` values to the API for authentication.

```http request
POST https://api.backstack.com/app/login
{
  "username": "jdoe12345",
  "password": "oi3rncu7bjyJXW1L3"
}
```

There are three possible responses:

1. Single account
2. Multiple account
3. [Error](../errors.md) (e.g. invalid password)


### Resources

- [demo.backstack.com/app/login](https://demo.backstack.com/app/login)
- [github.com/../app/Login.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Login.vue)



## Single account response

If the user is a member of only one app account, the response will contain a [session object](session.md) with all related
values, and the `auth` value will be true. The authentication process is complete.

```json
// session object
{
  "auth": true,
  "app": {
    "id": "app_1234567890",
    ...
  },
  "user": {
    "id": "usr_1234567890",
    ...
  },
  "account": {
    "id": "acc_1234567890",
    ...
  },
  "access": {
    "some-feature": "crud",
    ...
  },
  ...
}
```

### Resources

- [github.com/../app/Login.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Login.vue)



## Multiple account response {#multi-account}

If the user is a member of more than one app account, the response will contain a session object with
the `auth` value of `select_account` for your codebase to react upon.

The `auth.select_account.accounts` is an array of accounts for use in a select element. Use
the `auth.select_account.last_login` value to pre-select an option if desired.

```json
// session object
{
  "auth": {
    "select_account": {
      "accounts": {
        "acc_1234567890": "Foo Account",
        "acc_2345678901": "Bar Account",
        ...
      },
      "last_login": "acc_1234567890"
    }
  },
  "app": {
    "id": "app_1234567890",
    ...
  },
  "user": {
    "id": "usr_1234567890",
    ...
  },
  "account": {},
  "access": {},
  ...
}
```

::: info
The `accounts.last_login` value will always contain a value, even if the user has never logged in before.
:::

::: info
As an alternative, you can use the `/app/login-account` endpoint to retrieve the `auth.select_account` data separately.

```http request
GET https://api.backstack.com/app/login-account
```

Response 

```json
{
  "accounts": {
    "acc_1234567890": "Foo Account",
    "acc_2345678901": "Bar Account",
    ...
  },
  "last_login": "acc_1234567890"
}
```
:::

Provide a form for the user to select an account.

```html 
<form id="select-account-form">
    <select name="account_id">
        <option value="acc_1234567890">Foo Account</option>
        ...
    </select>
    <button type="submit">Select Account</button>
</form>
```

Submit the selected account ID to the API for activation. The response will contain a session object with all related
values, and the `auth` value will be true. The authentication process is complete.

```http request
POST https://api.backstack.com/app/login-account
{
  "account_id": "acc_1234567890"
}
```

### Bypassing the account selection process

If you wish to bypass the account selection process, simply post the `auth.select_account.last_login` value back to the API when received.

```js
// pseudocode

var response = axios.post("https://.api.backstack.com/app/login", 
    { "username": "jdoe", "password": "oi3rncu7bjyJXW1L3"});

if(response.data.auth.select_account){
    response  = axios.post("https://.api.backstack.com/app/login-account", 
        { "account_id": response.data.auth.select_account.last_login});
}

var session = response.data;
```

::: info
If you bypass account selection during the log in process, use the [user/change-account](user-change-account.md) endpoint in your UI to achieve the same result after the user has logged in.
:::


### Resources

-[github.com/../app/Login.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Login.vue)




