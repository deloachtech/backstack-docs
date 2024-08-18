# Account

The current session account.

## The Account object

<!--@include: includes/objects/account.md-->

## Create an account

Accounts are created using the [sign-up](/signup) and [account network](/networks) workflows.

## Read an account

Retrieves the current session Account object.

### Request

```sh
GET /v1/account
```

### Response

The Account object.

::: tip 
You can read the `session.account` to get an extended version of the account object. 
:::

## Update an account

Updates the current session Account object.

### Request

```sh
POST /v1/account
{
  "title": "Acme Corp"
  ...
}
```

| Parameter | Type | Note |
| --- | --- | --- |
| `title` | Required string |  |
| `address` | Optional string |  |
| `city` | Optional string |  |
| `state` | Optional string |  |
| `zip` | Optional string |  |
| `phone` | Optional string |  |
| `url` | Required string |  |
| `contact_name` | Required string |  |
| `contact_email` | Optional string |  |
| `timezone_id` | Optional string | See the [timezones](/timezones) resource for more information. |
| `country_id` | Required string | See the [countries](/countries) resource for more information. |

<!--@include: includes/update-note.md-->

### Response

The Account object.

## Delete an account

Deletes an account and expires the session.

### Request

```sh
DELETE /v1/account
```

### Response

Returns the deleted account `id`.
