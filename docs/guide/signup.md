# Signing Up
<!--@include: includes/alpha-note.md-->

Generate a new account and its first user.


## How it works

Submit the new account data to the API for processing. An activation email is sent to the new account user, containing a tokened link back to your page. When your page receives the token, it is then posted to the API for activation. Present your log-in page to enable the new user to authenticate.

![Images](images/diagrams/signup.svg)


::: tip
You should offer your terms and conditions on your applications signup-url (the emails landing page). 
:::


## Prerequisites

Your application must have a sign-up URL defined in the dashboard settings. This URL serves as the base activation endpoint for the new accounts email link.


## Initiate the signup

Creates the sign-up record and sends an activation email on behalf of your application.

### Request

```sh
POST /v1/auth/signup
{
  "domain_id": "dom_1234567890"
  "account_title": "Acme Corp",
  "name": "June Doe",
  "username": "junedoe",
  "password": "eomcpmdp2jp2ijvekklmlkm",
  "email": "junedoe@acmecorp.com",
  "country_id": "US"
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `domain_id` | Required string | The domain ID for the new account. |
| `account_title` | Required string | The title for the new account. |
| `name` | Required string | The name of the person for which the account will be created. |
| `username` | Optional string | The username for logging into the new account. Usernames must be at least 8 characters and cannot be the `password`. If empty, the API will create one using the `name` submitted, and it will be noted in the activation email. |
| `password` | Optional string | The password for logging into the new account. Passwords must be at least 8 characters and cannot be the `username`. If empty, the API will generate one, and it will be noted in the activation email. |
|  `email` | Required string | The email address of the person for which the new account is being created. The activation email will be sent to this address. |
|  `country_id` | Required string | The [country](countries) id the new account will be created under. |

### Response

This token is for your information only. The activation email contains a link with this value.

```json
{
  "token": "co84fjo3irho2eihcf37hfou"
}
```

<!--@include: includes/error-response.md-->



## Activate the sign-up

The link provided in the account activation email will contain the token required to submit to the API for validation. Your account activation landing page should check for the existence of a `token` value in the page request. Post this value back to the API for account activation.

```js
var token = new URLSearchParams(window.location.hash).get('token');
```

### Request

```sh
POST /v1/auth/signup/activation
{
  "token": "co84fjo3irho2eihcf37hfou"
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `token` | Required string | The token provided in the email activation link. |

### Response

The response will include the associated IDs for your information. You can begin the [login process](login) with the new user.

```json
{
  "account_id": "act_1234567890",
  "user_id": "usr_1234567890",
  "domain_id": "dom_1234567890",
  "version_id": "ver_1234567890",
}
```


| Parameter | Type | Description |
| --- | --- | --- |
| `account_id` | String | The new account ID. |
| `user_id` | String | The new user ID. |
| `domain_id` | String | The domain ID. |
| `version_id` | String | The version ID. |


<!--@include: includes/error-response.md-->


## Signup domains collection

The [app schema object](app-schemas) contains the domains available for signup.

```json
// app schema object
{
  ...
  "domains": {
    "dom_1234567890": {
      "allow_signup": true,
      ...
    },
    ...
  },
  ...
}
```

Provide a select using the following logic. Optionally, show the domain description and help signup with the select onChange() event.

<!--@include: includes/signup-domain.md-->


