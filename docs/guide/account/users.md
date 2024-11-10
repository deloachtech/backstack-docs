# Account Users

Accounts can have multiple users with different roles.

## Account user object {#account-user-object}

The account user object is a subset of the [user object](user.md#user-object) with additional user-specific information.

```http request
GET https://api.backstack.com/account/users/:id
```

Returns an account user object.

```json
{
  "id": "usr_1234567890",
  "created": 1670636064,
  "username": "jamesdoe",
  "name": "James Doe",
  "email": "jamesdoe@acmecorp.com",
  "last_login": 1708348174,
  "avatar": "<svg>...</svg>",
  "avatar_color": "#ff0000",
  "roles": [
    "rol_751TqkACiLYbUMDe",
    ...
  ],
  "roles_csv": "Super User, ...",
  "editable": false
}
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Account users list

```http request
GET https://api.backstack.com/account/users
```

Returns a [records list](lists.md#records) of account users.

```json
{
  "list": [
    {
      "id": "usr_1234567890",
      "username": "jamesdoe",
      "name": "James Doe",
      "email": "jamesdoe@acmecorp.com",
      "last_login": 1708348174,
      "avatar": "<svg>...</svg>",
      "roles_csv": "Super User, ...",
      "editable": false
    },
    ...
  ],
  "total": 20,
  "search": "",
  "filter": "",
  "filters": [
    "active",
    "inactive"
  ],
  "pages": 2
}
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)


## Account users selection

```http request
GET https://api.backstack.com/account/users
?selection=true
```

Returns a [selection list](lists.md#selection) of all user IDs and names.

```json
[
  {
    "usr_1234567890": "John Doe"
  },
  ...
]
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Create account user {#create-account-user}

### Prerequisites

Your app must have the log-in URL defined in the dashboard settings. This URL is provided in the new user email.

```text
Example link included in the email:
https://yourapp.com/login
```

### Initiate the account user creation

Create a form to submit the new user information.

```html

<form id="new-user-form">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <select name="roles" required>
        <option value="rol_1234567890">Super User</option>
        ...
    </select>
    <button type="submit">Create</button>
</form>
```

### Form data

Make a call to the API to retrieve the roles available for the account.

```http request
GET https://api.backstack.com/account/roles
?selection=true
```

Returns a [selection list](lists.md#selection) of role values.

```json
[
  {
    "rol_1234567890": "Super User"
  },
  ...
]
```

### Submit the new account user

Submit the new user data to the API for processing. An activation email is sent to the new user with a link to your
log-in page to begin the log-in process.

```http request
POST https://api.backstack.com/account/users
{
  "name": "James Doe",
  "email": "jamesdoe@acme.com"
  "roles": [
    "rol_1234567890",
    ...
  ]
}
```

Sends an activation email to the new user. Returns the user object.

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Update account user {#update-account-user}

If a user has not activated their account, you can update their information.

```http request
POST https://api.backstack.com/account/users/:id
{
  "name": "James Doe",
  "email": "jdoe@acme-corp.com",
  "roles": [
    "rol_1234567890",
    ...
  ],
  "resend_email": true // optional
}
```

Otherwise, only the user's roles can be updated. 

::: info
The system will not allow users to update their own roles.
:::


```http request
POST https://api.backstack.com/account/users/:id
{
  "roles": [
    "rol_1234567890",
    ...
  ]
}
```

Returns the updated user object.

<!--@include: includes/update-info.md-->

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Delete account user

```http request
DELETE https://api.backstack.com/account/users/:id
```

Returns the deleted user ID.

```json
{
  "id": "usr_1234567890"
}
```

::: info
If a user is a member of multiple accounts, they will still have access to those accounts. Otherwise, the user will be
removed from the system.
:::

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)




