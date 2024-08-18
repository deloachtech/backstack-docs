# User
<!--@include: includes/alpha-note.md-->

The current session user.


## The User object

<!--@include: includes/objects/user.md-->
<!--@include: includes/objects/properties/user.md-->


## Create a user

Users are _added_ to accounts with assigned roles. See the [account user workflow](account-users) for more information.


## Read a user

Retrieves the current session user information.

### Request

```sh
GET /v1/user
```

### Response

The User object.


## Update a user

### Request

```sh
POST /v1/user
{
  "name": "Jason Doe",
  ...
}
```


| Parameter | Type | Description |
| --- | --- | --- |
| `username` | Required string | Minimum 8 characters. Cannot be the same as the password. |
| `password` | Required string |  Minimum 8 characters. Cannot be the same as the username. |
| `name` | Required string | The users name. |
| `email` |  Required string | The users email address. |


<!--@include: includes/update-note.md-->


See the [account user workflow](account-users) for updating user information related to the account relationship (e.g. roles).

### Response

The User object.


## Delete a user

Deletes the current user and all [account user](account-users) relationships, then terminates the session.



