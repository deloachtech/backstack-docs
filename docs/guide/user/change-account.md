# Changing Accounts

Users can be associated with multiple accounts within a single app. This endpoint allows users to switch between
accounts.

## Accounts available selection

```http request
GET https://api.backstack.com/user/change-account
```

Returns a [selection list](lists.md#selection) of account IDs and titles available for the current user.

```json
[
  {
    "acc_1234567890": "Acme Corp"
  },
  ...
]
```



## Activate account

Post the selected `account_id` to the endpoint to activate the account.

```http request
POST https://api.backstack.com/user/change-account
{
    "account_id": "acc_2345678910"
}
```

Returns an updated [session object](app-session.md) with the resulting changes.

```json
// updted session object
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  ...,
  "account": {
    "id": "acc_2345678910",
    ...
  },
  "user": {
    ...,
    "roles": [
      "rol_1234567898",
      ...
    ]
  },
  "access": {
    "account-users": "crud",
    ...
  },
  "alerts": [
    ...
  ],
  "access_signature": "d751713988987e9331980363e24189ce"
}
```




