---
title: User
nextjs:
  metadata:
    title: User
    description: The current User object.
---


The current session user.

---

## The User object

{% partial file="objects/user.md" /%}

---

## Create a user

Users are _added_ to accounts with assigned roles. See the [account user workflow](/docs/account-users) for more information.

---

## Read a user

Retrieves the current session user information.

### Request

```shell
GET /v1/auth/user
```

### Response

The User object.

---

## Update a user

### Request

```shell
POST /v1/auth/user
{
  "name": "Jason Doe",
  ...
}
```

{% table %}
* Parameter
* Type
* Note
---
* `username`
* Required string
* Minimum 8 characters. Cannot be the same as the password.
---
* `password`
* Required string
* Minimum 8 characters. Cannot be the same as the username.
---
* `name`
* Required string
* 
---
* `email`
* Required string
* 
{% /table %}

{% partial file="update-note.md" /%}

See the [account user workflow](/docs/account-users) for updating user information related to the account relationship (e.g. roles).

### Response

The User object.

---

## Delete a user

Deletes the current user and all [account user](/docs/account-users) relationships, and terminates the session.



