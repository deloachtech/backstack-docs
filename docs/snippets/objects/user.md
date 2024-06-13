
{% if default($partialCode, false) %}

```js
// user object
{
  "id": "usr_1234567890",
  "created": 1670636064,
  "last_login": 1708348174,
  "username": "jamesdoe",
  "name": "James Doe",
  "email": "jamesdoe@acmecorp.com",
  "avatar": "https://cdn.backstack.com/avatars/usr_1234567890.jpg"
}
```

{% /if %}

{% if and(not($partialCode), default($code, true)) %}

```js
// user object
{
  "id": "usr_1234567890",
  "created": 1670636064,
  "last_login": 1708348174,
  "username": "jamesdoe",
  "name": "James Doe",
  "email": "jamesdoe@acmecorp.com",
  "avatar": "https://cdn.backstack.com/avatars/usr_1234567890.jpg"
}
```

{% /if %}

{% if default($properties, true) %}

{% table %}
* Property
* Type
* Description
---
* `id`
* String
* The user ID.
---
* `created`
* Integer
* Timestamp of when the user was created.
---
* `last_login`
* Integer
* Timestamp of when the user last logged in.
---
* `username`
* String
* The users public username.
---
* `name`
* String
* The users name.
---
* `email`
* String
* The users email address.
---
* `avatar`
* String
* The URL for the users avatar image.
{% /table %}

{% /if %}
