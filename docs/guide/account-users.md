
# Account Users

[Accounts](accounts) can have many [users](users). Each having different access to resources.

An account user represents the `session.user` and the access control privileges provided by the `session.account`.

## How It Works

When an account adds a new user, a system-generated email is sent to the user with a link to the log-in page.

![Images](images/diagrams/account-users.svg)

## Prerequisites

Your application must have the log-in URL defined in the dashboard settings. This URL serves as the base endpoint for the link provided in the new user email.

## Create A User

Submit the new user data to the API for processing. An activation email is sent to the new user with a link to your log-in page to begin the [log-in process](login).

### Request

```sh
POST /v1/account/users
{
  "name": "James Doe",
  "email": "jamesdoe@acme.com"
  "roles": [
    "rol_1234567890",
    "rol_2345678901"
  ]
}
```

| Parameter | Type | Description|
| --- | --- | --- |
| `name` | Required string | The users real name. |
| `email` | Required string | The users email address. |
| `roles` | Optional array | An array of role ids assigned to the user. |

### Response

The Account User object

<!--@include: includes/objects/partials/account-user.md-->

## List Users

Retrieve a list of the `session.account` users.

### Request

```sh
GET /v1/account/users
?page_size=25&page_index=1&search&filters[status]=active
```

<!--@include: includes/list-parameters.md-->

| Filter | Type | Options |
| --- | --- | --- |
| `status` | Optional string | `active`, `pending` or `deleted`. Omit to list all users. |

### Response

<!--@include: includes/list-response.md-->

| List item property | Type | Description |
| --- | --- | --- |
| `id` | String | The user ID. |
| `created` | Integer | The date the relationship was created. |
| `username` | String | The users log-in name. |
| `name` | String | The users real name. Required when creating the relationship. Read-only once the user logs in. |
| `email` | String | The users email address. Required when creating the relationship. Read-only once the user logs in. |
| `avatar` | String | The URL for avatar image uploaded by the user. |
| `editable` | Boolean | Indicates if the system will accept edits on the particular user. |
| `roles` | Array | The role IDs assigned by the account to the user. |
| `roles_csv` | String | The roles assigned to the user in a comma separated string. |
| `last_login` | Integer | The timestamp of the users last log in for the account. |

## Update a user

Updates user values that are related to the account relationship. See the [user](user) documentation for information on updating the session user.

### Request

```sh
POST /v1/account/users/:user_id
{
  "roles": [
    "rol_1234567890",
    ...
  ]
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | Optional string | The users real name. **This value is updatable until the user is activated.** |
| `email` | Optional string | The users email address. **This value is updatable until the user is activated.** |
| `resend_email` | Boolean | Submitting `true` will resend the account activation email. **This option is available until the user is activated.** |
| `roles` | Optional array | An array of role IDs assigned to the user. |

<!--@include: includes/update-note.md-->

### Response

The Account user object.

<!--@include: includes/objects/partials/account-user.md-->

## Delete a user

Deleting an account user does not delete a user from the system. It deletes the account user relationship.

### Request

```sh
DELETE /v1/account/users/:user_id
```

### Response

The ID of the deleted account user.

```json
{
  "id": "usr_1234567890"
}
```

## Roles collection

The app schema contains roles relevant to the application version. The `roles.distribution[session.account.version_id]` is an array of role IDs and the `roles.list` contains the role information.

```json
// app schema
{
  ...
  "roles": {
    "distribution": {
       "ver_1234567890": [
          "rol_1234567890",
          ...
      ],
      ...
    },
    "list": {
      "rol_1234567890": {
        "title": "Super User",
        "description": "The Super User can do anything on the system."
      },
      ...
    }
  },
  ...
}
```

The following logic will provide data for a group of checkboxes when assigning roles.

<<< snippets/role-assignment.js

## The Account User object

An object that represents the current relationship between an account and a user.

<!--@include: includes/objects/account-user.md-->
<!--@include: includes/objects/properties/account-user.md-->
