# User

The user object associated with the current [app/session](app-session.md).

## User object {#user-object}

The user object is a subset of the [app/session](app-session.md) `user` with additional
user-specific information.

Use this endpoint to independently retrieve the user object of the current session, disregarding the session object
itself.

```http request
GET https://api.backstack.com/user
```

Returns a user object.

```json
{
  "id": "usr_1234567890",
  "created": 1234567890,
  "last_login": 1234567890,
  "username": "jamesdoe",
  "name": "James Doe",
  "email": "jamesdoe@acme-corp.com",
  "hidden_tips": [
    "tip_1234567890",
    ...
  ],
  "mobile_number": "123-456-7890"
}
```

### Resources

- [demo.backstack.com/user-profile](https://demo.backstack.com/user-profile)
- [github.com/../UserProfile.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/UserProfile.vue)



## Create user

Users are added by an account ([account/users](account-users.md)), or created using the [app/sign-up](app-signup) endpoint.


### Resources

- [demo.backstack.com/account-users](https://demo.backstack.com/account-users)
- [github.com/../AccountUsers.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/users/AccountUsers.vue)



## Update user

Updates the user object associated with the current [app/session](app-session.md). See
the [account/users](account-users#update-account-user) documentation for information on updating the account user.

```http request
POST https://api.backstack.com/user
{
    "name": "James Doe", // required
    "username": "jamesdoe", // required, cannot be password
    "email": "jdoe@acme-corp.com", // required
    "mobile_number": "123-456-7890",
    "hidden_tips": [
        "tip_1234567890",
        ...
    ]
}
```

Returns a user object.

<!--@include: includes/update-note.md-->


### Resources

- [demo.backstack.com/user-profile](https://demo.backstack.com/user-profile)
- [github.com/../UserProfile.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/UserProfile.vue)


## Delete user

Deletes the session user and terminates the current session.

```http request
DELETE https://api.backstack.com/user
```

Returns the deleted user ID.

```json
{
  "id": "usr_1234567890"
}
```

### Resources

- [demo.backstack.com/user-profile](https://demo.backstack.com/user-profile)
- [github.com/../UserProfile.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/UserProfile.vue)



