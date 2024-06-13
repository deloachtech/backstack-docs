---
title: Resetting passwords
nextjs:
  metadata:
    title: Resetting passwords
    description: Methods for resetting the users password.
---

Enable users to reset their forgotten passwords.

---



## How it works

Submit an email address to the API for lookup. Upon success, an email is sent to the user containing a tokened link back to your reset password page for submission with the new password.


![Images](/images/diagrams/reset-password.svg)


---


## Prerequisites

Your application must have a reset URL defined in the dashboard settings. This URL serves as the base endpoint for the link included in the email sent to the user.


---


## Lookup email address

Provide an email address to receive a system-generated email containing instructions for resetting a password.

### Request

```shell
POST /v1/auth/forgot-password
{
  "email": "jdoe@acmecorp.com"
}
```

{% table %}
* Parameter
* Type
* Description
---
* `email`
* Required string
* The email address to lookup.
{% /table %}


### Response

Upon success, an email is sent to the user with instructions containing a tokened link to your reset password page.

The response contains FYI data.

```js
{
  "user_ids: [
    "usr_1234567890",
    ...
  ]
}
```

{% table %}
* Property
* Type
* Description
---
* `user_ids`
* Array
* For your information, an array containing the user IDs associated with the email address. (An email address may represent multiple users.)
{% /table %}


{% partial file="error-response.md" /%}

---


## Reset password

The link in the reset password email includes a token that needs to be submitted with the new password.

```js
var token = new URLSearchParams(window.location.hash).get('token');
```

### Request

```shell
POST /v1/auth/reset-password
{
  "token": token,
  "password": password,
  "confirm": confirm
}
```

{% table %}
* Parameter
* Type
* Description
---
* `token`
* Required string
* The token included in the reset password instructional email sent to the user.
---
* `password`
* Required string
* The new password. The new password must be at least 8 characters and cannot be the username.
---
* `confirm`
* Required string
* Confirm the new password.
{% /table %}

### Response

Upon success, the API will respond with the [User object](/docs/user), and you can begin the user [log in process](/docs/login).

```js
// user object
{
  "id": "usr_1234567890"
  ...
}
```

{% partial file="error-response.md" /%}

