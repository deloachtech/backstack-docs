---
title: Logging in
nextjs:
  metadata:
    title: Logging in
    description: How to process logging in.
---


The login process authenticates an account user for the current session.

---

## How it works

Submit the username and password to the API for processing. Upon successful authentication, the API will provide an authenticated [session object](/docs/sessions).

![Image](/images/diagrams/login.svg)

---

## Authenticate

Submit the following values from your log in page to the API for user authentication.

### Request

```shell
POST /v1/auth/login
{
  "username": "jdoe",
  "password": "oi3rncu7bjyJXW1L3"
}
```

{% table %}
* Parameter
* Type
* Description
---
* `username`
* Required string
* The users' username.
---
* `password`
* Required string
* The users' password.
{% /table %}

### Response

The current [session object](/docs/sessions).

{% callout type="warning" %}
If the user is a member of multiple accounts the `session.auth` value will remain `false` until an account is activated.
{% /callout %}

---

## Selecting accounts

If a user is a member of multiple accounts, the session object will contain a `select_account` signal with associated `signal_data` for your codebase to react upon. The `auth` value remains `false` until an account has been activated.

```js
// session object
{
  ...
  "auth": false,
  "signal": "select_account",
  "signal_data": {
    "accounts": {
      "acc_1234567890": "Foo Account",
      "acc_2345678901": "Bar Account",
      ...
    },
    "last_login": "acc_1234567890"
  },
  ...
}
```

The `signal_data.accounts` is an array of accounts to select from. The array keys are the account IDs and the values are the account titles. The `signal_data.last_login` value is the account ID the user last selected.

Present an option (e.g., an HTML select) for the user to choose which account to activate.

{% partial file="code/select-account.md" /%}

Then submit the selected account ID to the API to activate.

### Request

```shell
`POST /v1/auth/login-account
{
  "account_id": "acc_1234567890"
}
```

{% table %}
* Parameter
* Type
* Description
---
* `account_id`
* Required string
* TThe account ID selected.
{% /table %}


### Response

The current [session object](/docs/sessions).

---

## Log out

Nullifies the account and user in the current session and sets the `auth` value to `false`. The `signal` value will be set to `logout` so you can perform any necessary cleanup.


### Request

```shell
POST /v1/auth/logout
```


### Response

```js
// session object
{
  "auth": false,
  "signal": "logout",
  ...
  }
}
```

The current [session object](/docs/sessions). The `auth` value will be `false` and a signal value `logout` will allow you to do any cleanup.

